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


# Optional preferred TOC name tokens (avoid nested workshops like PARMA under HiPEAC)
PREFERRED_TOC = {
    "HiPEAC": ["hipeac"],
    "HOT CHIPS": ["hotchips", "hotch"],
    "UbiComp": ["ubicomp", "huc", "iswc"],
    "FSE": ["fse", "esec"],
    "Performance": ["sigmetrics", "performance"],
    "MSST": ["msst", "mss"],
    "ISS": ["iss", "tabletop"],
    "GROUP": ["group"],
    "ICPP": ["icpp"],
    "VEE": ["vee"],
    "ETAPS": ["etaps"],
    "ITC": ["itc"],
    "LISA": ["lisa"],
    "SECON": ["secon"],
    "IPSN": ["ipsn"],
    "IWQoS": ["iwqos"],
    "SPM": ["spm"],
    "PPSN": ["ppsn"],
    "BIBM": ["bibm"],
}


def discover_tocs(stream: str, prefer: list[str] | None = None) -> dict[str, str]:
    """Return year -> toc id (e.g. 2024 -> socc2024)."""
    html = curl_text(f"{DBLP_HOST}/db/{stream}/index.html")
    if not html or "429" in html[:200]:
        return {}
    # year -> list of candidate toc ids
    cands: dict[str, list[str]] = {}
    pat = re.compile(
        rf"(?:https?://[^\"']+)?/db/{re.escape(stream)}/([A-Za-z0-9._-]+?)(202[0-7])(?:\.html)?"
    )
    for m in pat.finditer(html):
        prefix, year = m.group(1), m.group(2)
        tocid = f"{prefix}{year}"
        low = tocid.lower()
        if any(x in low for x in ("workshop", "poster", "demo", "doctoral", "companion")):
            continue
        cands.setdefault(year, [])
        if tocid not in cands[year]:
            cands[year].append(tocid)

    # also collect from id="conf/xxx/2025" + nearby links
    for m in re.finditer(
        rf'id="{re.escape(stream)}/(202[0-7])"[^>]*>.*?/db/{re.escape(stream)}/([A-Za-z0-9._-]+)\.html',
        html,
        flags=re.S,
    ):
        year, tocid = m.group(1), m.group(2)
        cands.setdefault(year, [])
        if tocid not in cands[year]:
            cands[year].append(tocid)

    prefer = [p.lower() for p in (prefer or [])]
    leaf = stream.split("/")[-1].lower()
    if leaf and leaf not in prefer:
        prefer = prefer + [leaf]

    years: dict[str, str] = {}
    for year, opts in cands.items():
        def score(toc: str) -> tuple:
            low = toc.lower()
            hit = 0
            for i, p in enumerate(prefer):
                if p and p in low:
                    hit = max(hit, 100 - i)
            # penalize long / odd names
            return (-hit, len(toc), low)

        opts_sorted = sorted(opts, key=score)
        years[year] = opts_sorted[0]
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
        n = int(total)
    except Exception:
        return None
    return n if n > 0 else None


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
    ap.add_argument("--sleep", type=float, default=3.5, help="polite delay between requests")
    ap.add_argument("--only-missing", action="store_true", default=True)
    args = ap.parse_args()
    ranks = None if args.ranks.upper() == "ALL" else {x.strip() for x in args.ranks.split(",")}
    pause = max(0.8, args.sleep)

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
        # only venues still missing recent acceptance numbers
        if has:
            continue
        targets.append((short, stream, c["rank"]))

    seen = set()
    uniq = []
    for short, stream, rank in targets:
        if short in seen:
            continue
        seen.add(short)
        uniq.append((short, stream, rank))
    if args.limit:
        uniq = uniq[: args.limit]
    print("targets", len(uniq), flush=True)

    for i, (short, stream, rank) in enumerate(uniq):
        print(f"[{i+1}/{len(uniq)}] {rank} {short} {stream}", flush=True)
        prefer = PREFERRED_TOC.get(short) or [norm(short), stream.split("/")[-1]]
        tocs = discover_tocs(stream, prefer=prefer)
        time.sleep(pause)
        if not tocs:
            print("  no tocs", flush=True)
            continue
        entry = cache.get(short) or {}
        for year, tocid in sorted(tocs.items()):
            if year not in {"2023", "2024", "2025", "2026"}:
                continue
            if entry.get(year, {}).get("accepted"):
                continue
            # skip clearly wrong workshop picks when prefer exists
            low = tocid.lower()
            if prefer and not any(p.lower() in low for p in prefer if len(p) >= 3):
                # allow if no preferred token appears in any cand — already scored
                pass
            n = count_toc(stream, tocid)
            time.sleep(pause)
            if not n:
                print(f"  {year} toc={tocid} empty", flush=True)
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
        if (i + 1) % 3 == 0:
            CACHE.write_text(json.dumps(cache, ensure_ascii=False, indent=2), encoding="utf-8")
            MAP.write_text(json.dumps(streams, ensure_ascii=False, indent=2), encoding="utf-8")
            print(f"checkpoint {i+1}/{len(uniq)} cache={len(cache)}", flush=True)

    CACHE.write_text(json.dumps(cache, ensure_ascii=False, indent=2), encoding="utf-8")
    MAP.write_text(json.dumps(streams, ensure_ascii=False, indent=2), encoding="utf-8")
    print("wrote", CACHE, "venues", len(cache), flush=True)


if __name__ == "__main__":
    main()
