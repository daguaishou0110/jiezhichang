# -*- coding: utf-8 -*-
"""Fill approximate year paper counts via DBLP TOC facets (curl-backed).

For each venue stream (conf/xxx), discover year TOCs on the index page and
query: toc:db/<stream>/<tocid>:  → hits.@total

Writes data/dblp_year_counts.json
"""
from __future__ import annotations

import json
import re
import subprocess
import time
import urllib.parse
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data"
CCF = DATA / "ccf-conferences.json"
CACHE = DATA / "dblp_year_counts.json"
MAP = DATA / "dblp_stream_map.json"
CCFDDL = DATA / "ccfddl_cache.json"

# Prefer known streams for missing A/B; ccfddl dblp ids fill the rest.
SEED_STREAMS = {
    "SoCC": "conf/cloud",
    "HOT CHIPS": "conf/hotchips",
    "HiPEAC": "conf/hipeac",
    "ICPP": "conf/icpp",
    "VEE": "conf/vee",
    "Performance": "conf/sigmetrics",
    "ITC": "conf/itc",
    "LISA": "conf/lisa",
    "MSST": "conf/mss",
    "SECON": "conf/secon",
    "IPSN": "conf/ipsn",
    "IWQoS": "conf/iwqos",
    "FSE": "conf/sigsoft",
    "ETAPS": "conf/etaps",
    "EDBT": "conf/edbt",
    "HSCC": "conf/hybrid",
    "SPM": "conf/spm",
    "PPSN": "conf/ppsn",
    "UbiComp": "conf/huc",
    "GROUP": "conf/group",
    "ISS": "conf/tabletop",
    "ECSCW": "conf/ecscw",
    "ICWSM": "conf/icwsm",
    "BIBM": "conf/bibm",
    "CGO": "conf/cgo",
    "CC": "conf/cc",
    "ESA": "conf/esa",
}


def norm(s: str) -> str:
    return re.sub(r"[^a-z0-9]+", "", (s or "").lower())


DBLP_HOST = "https://dblp.uni-trier.de"


def curl_json(url: str) -> dict | None:
    try:
        r = subprocess.run(
            ["curl.exe", "-sS", "--connect-timeout", "20", "--max-time", "45", url],
            capture_output=True,
            text=True,
            encoding="utf-8",
            errors="replace",
        )
        if r.returncode != 0 or not r.stdout.strip():
            print("curl fail", url[:80], (r.stderr or "")[:120])
            return None
        if not r.stdout.lstrip().startswith("{"):
            print("non-json", url[:80], r.stdout[:80])
            return None
        return json.loads(r.stdout)
    except Exception as e:
        print("curl/json fail", e)
        return None


def curl_text(url: str) -> str:
    r = subprocess.run(
        ["curl.exe", "-sS", "--connect-timeout", "20", "--max-time", "45", url],
        capture_output=True,
        text=True,
        encoding="utf-8",
        errors="replace",
    )
    return r.stdout if r.returncode == 0 else ""


def discover_tocs(stream: str) -> dict[str, str]:
    """Return year -> toc id (e.g. 2024 -> socc2024)."""
    html = curl_text(f"{DBLP_HOST}/db/{stream}/index.html")
    if not html:
        return {}
    years: dict[str, str] = {}
    # absolute or relative: .../db/conf/cloud/socc2025.html
    pat = re.compile(
        rf"(?:https?://[^\"']+)?/db/{re.escape(stream)}/([A-Za-z0-9._-]+?)(202[0-7])(?:\.html)?"
    )
    for m in pat.finditer(html):
        prefix, year = m.group(1), m.group(2)
        tocid = f"{prefix}{year}"
        low = tocid.lower()
        if "workshop" in low or "poster" in low or "demo" in low:
            continue
        prev = years.get(year)
        if not prev or len(tocid) < len(prev):
            years[year] = tocid
    # fallback: id="conf/cloud/2025"
    if not years:
        for m in re.finditer(rf'id="{re.escape(stream)}/(202[0-7])"', html):
            year = m.group(1)
            # guess common tocid from stream leaf
            leaf = stream.split("/")[-1]
            years[year] = f"{leaf}{year}"
    return years


def count_toc(stream: str, tocid: str) -> int | None:
    q = f"toc:db/{stream}/{tocid}.bht:"
    url = (
        f"{DBLP_HOST}/search/publ/api?q="
        + urllib.parse.quote(q)
        + "&format=json&h=0"
    )
    d = curl_json(url)
    if not d:
        return None
    total = d.get("result", {}).get("hits", {}).get("@total")
    try:
        return int(total)
    except Exception:
        return None


def load_streams() -> dict[str, str]:
    streams = dict(SEED_STREAMS)
    if CCFDDL.exists():
        slim = json.loads(CCFDDL.read_text(encoding="utf-8"))
        for title, ent in slim.items():
            dblp = (ent or {}).get("dblp") or ""
            if not dblp:
                continue
            stream = f"conf/{dblp}"
            streams[title] = stream
            streams[norm(title)] = stream
    if MAP.exists():
        streams.update(json.loads(MAP.read_text(encoding="utf-8")))
    for k, v in list(SEED_STREAMS.items()):
        streams[norm(k)] = v
    return streams


def main() -> None:
    import argparse

    ap = argparse.ArgumentParser()
    ap.add_argument("--ranks", default="A,B", help="comma ranks to fill, or ALL")
    ap.add_argument("--limit", type=int, default=0)
    ap.add_argument("--sleep", type=float, default=2.5, help="polite delay between requests")
    args = ap.parse_args()
    ranks = None if args.ranks.upper() == "ALL" else {x.strip() for x in args.ranks.split(",")}
    pause = max(0.5, args.sleep)

    ccf = json.loads(CCF.read_text(encoding="utf-8"))
    cache = json.loads(CACHE.read_text(encoding="utf-8")) if CACHE.exists() else {}
    streams = load_streams()

    targets = []
    for c in ccf["conferences"]:
        if ranks and c["rank"] not in ranks:
            continue
        has = any(
            (c["stats"].get(y) or {}).get("accepted") is not None
            for y in ("2024", "2025", "2026")
        )
        short = c["short"]
        stream = streams.get(short) or streams.get(norm(short))
        if not stream:
            continue
        if not stream.startswith("conf/") and "/" not in stream:
            stream = f"conf/{stream}"
        if has and short in cache and any(
            (cache.get(short) or {}).get(y, {}).get("accepted") for y in ("2024", "2025", "2026")
        ):
            continue
        if not has:
            targets.append((short, stream, c["rank"]))

    # unique
    seen = set()
    uniq = []
    for short, stream, rank in targets:
        if short in seen:
            continue
        seen.add(short)
        uniq.append((short, stream, rank))
    if args.limit:
        uniq = uniq[: args.limit]
    print("targets", len(uniq))

    for i, (short, stream, rank) in enumerate(uniq):
        print(f"[{i+1}/{len(uniq)}] {rank} {short} {stream}", flush=True)
        tocs = discover_tocs(stream)
        time.sleep(pause)
        if not tocs:
            print("  no tocs")
            continue
        entry = cache.get(short) or {}
        for year, tocid in sorted(tocs.items()):
            if year not in {"2023", "2024", "2025", "2026"}:
                continue
            if entry.get(year, {}).get("accepted"):
                continue
            n = count_toc(stream, tocid)
            time.sleep(pause)
            if not n:
                print(f"  {year} toc={tocid} empty")
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
            streams[short] = stream
        if (i + 1) % 5 == 0:
            CACHE.write_text(json.dumps(cache, ensure_ascii=False, indent=2), encoding="utf-8")
            MAP.write_text(json.dumps(streams, ensure_ascii=False, indent=2), encoding="utf-8")

    CACHE.write_text(json.dumps(cache, ensure_ascii=False, indent=2), encoding="utf-8")
    MAP.write_text(json.dumps(streams, ensure_ascii=False, indent=2), encoding="utf-8")
    print("wrote", CACHE, "venues", len(cache))


if __name__ == "__main__":
    main()
