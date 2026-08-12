# -*- coding: utf-8 -*-
"""Fill missing CCF C-rank venues via ccfddl dblp id + year TOC guess."""
from __future__ import annotations

import json
import re
import time
from pathlib import Path

from fill_dblp_counts import discover_tocs, count_toc, load_streams, norm
from fill_dblp_known import count_toc as count_toc_multi

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data"
CCF = DATA / "ccf-conferences.json"
CACHE = DATA / "dblp_year_counts.json"
CCFDDL = DATA / "ccfddl_cache.json"


def main() -> None:
    import argparse

    ap = argparse.ArgumentParser()
    ap.add_argument("--sleep", type=float, default=4.0)
    ap.add_argument("--limit", type=int, default=0)
    ap.add_argument("--start", type=int, default=0)
    args = ap.parse_args()
    pause = max(1.0, args.sleep)

    ccf = json.loads(CCF.read_text(encoding="utf-8"))
    cache = json.loads(CACHE.read_text(encoding="utf-8")) if CACHE.exists() else {}
    streams = load_streams()
    slim = json.loads(CCFDDL.read_text(encoding="utf-8")) if CCFDDL.exists() else {}
    for title, ent in slim.items():
        dblp = (ent or {}).get("dblp") or ""
        if dblp:
            streams[title] = f"conf/{dblp}"
            streams[norm(title)] = f"conf/{dblp}"

    targets = []
    for c in ccf["conferences"]:
        if c["rank"] != "C":
            continue
        has = any(
            (c["stats"].get(y) or {}).get("accepted") is not None
            for y in ("2024", "2025", "2026")
        )
        if has:
            continue
        short = c["short"]
        stream = streams.get(short) or streams.get(norm(short))
        if not stream:
            continue
        if not stream.startswith("conf/"):
            stream = f"conf/{stream}"
        targets.append((short, stream))

    seen = set()
    uniq = []
    for s, st in targets:
        if s in seen:
            continue
        seen.add(s)
        uniq.append((s, st))
    if args.start:
        uniq = uniq[args.start :]
    if args.limit:
        uniq = uniq[: args.limit]
    print("C targets", len(uniq), flush=True)

    for i, (short, stream) in enumerate(uniq):
        print(f"[{i+1}/{len(uniq)}] C {short} {stream}", flush=True)
        leaf = stream.split("/")[-1]
        prefer = [norm(short), leaf]
        tocs = discover_tocs(stream, prefer=prefer)
        time.sleep(pause)
        # fallback: guess leaf+year even if index blocked
        if not tocs:
            tocs = {y: f"{leaf}{y}" for y in ("2023", "2024", "2025")}
            print("  fallback guessed tocs", flush=True)
        entry = cache.get(short) or {}
        for year, tocid in sorted(tocs.items()):
            if year not in {"2023", "2024", "2025", "2026"}:
                continue
            if entry.get(year, {}).get("accepted"):
                continue
            n = count_toc_multi(stream, tocid, sleep=pause)
            if not n:
                # one more guess: short lower + year
                alt = f"{re.sub(r'[^a-z0-9]', '', short.lower())}{year}"
                if alt != tocid:
                    n = count_toc_multi(stream, alt, sleep=pause)
                    if n:
                        tocid = alt
            if not n:
                print(f"  {year} empty", flush=True)
                continue
            entry[year] = {
                "accepted": n,
                "submitted": None,
                "notes": f"DBLP TOC `{stream}/{tocid}` indexed 论文数（近似录用规模）。",
                "papers_index": f"https://dblp.org/db/{stream}/{tocid}.html",
            }
            print(f"  {year}={n} ({tocid})", flush=True)
        if entry:
            cache[short] = entry
        if (i + 1) % 5 == 0:
            CACHE.write_text(json.dumps(cache, ensure_ascii=False, indent=2), encoding="utf-8")
            print("checkpoint", i + 1, "cache", len(cache), flush=True)

    CACHE.write_text(json.dumps(cache, ensure_ascii=False, indent=2), encoding="utf-8")
    print("wrote", CACHE, "venues", len(cache), flush=True)


if __name__ == "__main__":
    main()
