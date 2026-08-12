# -*- coding: utf-8 -*-
"""Direct DBLP TOC counts for remaining missing venues (skip index discovery)."""
from __future__ import annotations

import json
import subprocess
import time
import urllib.parse
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data"
CACHE = DATA / "dblp_year_counts.json"

HOSTS = [
    "https://dblp.uni-trier.de",
    "https://dblp.dagstuhl.de",
    "https://dblp.org",
]

# short -> (stream, {year: tocid})
KNOWN = {
    "HOT CHIPS": ("conf/hotchips", {"2023": "hotchips2023", "2024": "hotchips2024", "2025": "hotchips2025"}),
    "HiPEAC": ("conf/hipeac", {"2023": "hipeac2023", "2024": "hipeac2024", "2025": "hipeac2025", "2026": "hipeac2026"}),
    "ICPP": ("conf/icpp", {"2023": "icpp2023", "2024": "icpp2024", "2025": "icpp2025"}),
    "VEE": ("conf/vee", {"2023": "vee2023", "2024": "vee2024", "2025": "vee2025"}),
    "ITC": ("conf/itc", {"2023": "itc2023", "2024": "itc2024", "2025": "itc2025"}),
    "LISA": ("conf/lisa", {"2023": "lisa2023", "2024": "lisa2024"}),
    "MSST": ("conf/mss", {"2023": "msst2023", "2024": "msst2024", "2025": "msst2025"}),
    "SECON": ("conf/secon", {"2023": "secon2023", "2024": "secon2024", "2025": "secon2025"}),
    "IPSN": ("conf/ipsn", {"2023": "ipsn2023", "2024": "ipsn2024", "2025": "ipsn2025"}),
    "IWQoS": ("conf/iwqos", {"2023": "iwqos2023", "2024": "iwqos2024", "2025": "iwqos2025"}),
    "FSE": ("conf/sigsoft", {"2023": "fse2023", "2024": "fse2024", "2025": "fse2025", "2026": "fse2026"}),
    "ETAPS": ("conf/etaps", {"2023": "etaps2023", "2024": "etaps2024", "2025": "etaps2025"}),
    "SPM": ("conf/spm", {"2023": "spm2023", "2024": "spm2024", "2025": "spm2025"}),
    "PPSN": ("conf/ppsn", {"2024": "ppsn2024"}),
    "UbiComp": ("conf/huc", {"2023": "ubicomp2023", "2024": "ubicomp2024", "2025": "ubicomp2025"}),
    "GROUP": ("conf/group", {"2023": "group2023", "2025": "group2025"}),
    "ISS": ("conf/tabletop", {"2023": "iss2023", "2024": "iss2024"}),
}


def curl_json(url: str) -> dict | None:
    r = subprocess.run(
        ["curl.exe", "-sS", "--connect-timeout", "20", "--max-time", "40", url],
        capture_output=True,
        text=True,
        encoding="utf-8",
        errors="replace",
    )
    if r.returncode != 0 or not r.stdout.lstrip().startswith("{"):
        return None
    try:
        return json.loads(r.stdout)
    except Exception:
        return None


def count_toc(stream: str, tocid: str, sleep: float = 5.0) -> int | None:
    q = f"toc:db/{stream}/{tocid}.bht:"
    for i, host in enumerate(HOSTS):
        url = f"{host}/search/publ/api?q={urllib.parse.quote(q)}&format=json&h=0"
        d = curl_json(url)
        # short pause; only rotate host on transport failure
        time.sleep(sleep if i == 0 else min(2.0, sleep))
        if not d:
            continue
        total = d.get("result", {}).get("hits", {}).get("@total")
        try:
            n = int(total)
        except Exception:
            continue
        # zero means TOC missing — no need to try other hosts
        return n if n > 0 else None
    return None


def main() -> None:
    cache = json.loads(CACHE.read_text(encoding="utf-8")) if CACHE.exists() else {}
    for i, (short, (stream, years)) in enumerate(KNOWN.items()):
        entry = cache.get(short) or {}
        print(f"[{i+1}/{len(KNOWN)}] {short}", flush=True)
        for year, tocid in sorted(years.items()):
            if entry.get(year, {}).get("accepted"):
                print(f"  {year} cached", flush=True)
                continue
            n = count_toc(stream, tocid, sleep=5.5)
            if not n:
                print(f"  {year} {tocid} empty", flush=True)
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
        if (i + 1) % 2 == 0:
            CACHE.write_text(json.dumps(cache, ensure_ascii=False, indent=2), encoding="utf-8")
    CACHE.write_text(json.dumps(cache, ensure_ascii=False, indent=2), encoding="utf-8")
    print("wrote", CACHE, "venues", len(cache), flush=True)


if __name__ == "__main__":
    main()
