# -*- coding: utf-8 -*-
"""Fill approximate acceptance counts via DBLP year paper totals for missing CCF venues.

Uses venue search once per short name, then counts stream.id + year.
Caches to data/dblp_year_counts.json. Polite rate limiting.
"""
from __future__ import annotations

import json
import re
import time
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data"
CCF = DATA / "ccf-conferences.json"
CACHE = DATA / "dblp_year_counts.json"
MAP = DATA / "dblp_stream_map.json"
UA = {"User-Agent": "jiezhichang-dblp/1.0 (academic catalog; local research)"}

# Hand-curated dblp stream ids for common missing venues
SEED_STREAMS = {
    "INTERSPEECH": "conf/interspeech",
    "AAMAS": "conf/ifaamas",
    "ISMAR": "conf/ismar",
    "ICAPS": "conf/aips",
    "CoNEXT": "conf/conext",
    "ICDCS": "conf/icdcs",
    "DSN": "conf/dsn",
    "ESORICS": "conf/esorics",
    "RAID": "conf/raid",
    "ACSAC": "conf/acsac",
    "ECML-PKDD": "conf/pkdd",
    "EDBT": "conf/edbt",
    "ICSME": "conf/icsm",
    "SANER": "conf/wcre",
    "KR": "conf/kr",
    "BIBM": "conf/bibm",
    "IUI": "conf/iui",
    "MobileHCI": "conf/mhci",
    "PERCOM": "conf/percom",
    "MobiHoc": "conf/mobihoc",
    "ICNP": "conf/icnp",
    "IPSN": "conf/ipsn",
    "SECON": "conf/secon",
    "SoCC": "conf/cloud",
    "SPAA": "conf/spaa",
    "PODC": "conf/podc",
    "FPGA": "conf/fpga",
    "CGO": "conf/cgo",
    "DATE": "conf/date",
    "CLUSTER": "conf/cluster",
    "ICCD": "conf/iccd",
    "PACT": "conf/IEEEpact",
    "ICPP": "conf/icpp",
    "VEE": "conf/vee",
    "Euro-Par": "conf/europar",
    "ISCAS": "conf/iscas",
    "IWQoS": "conf/iwqos",
    "CHES": "conf/ches",
    "PKC": "conf/pkc",
    "TCC": "conf/tcc",
    "CSFW": "conf/csfw",
    "SRDS": "conf/srds",
    "HotOS": "conf/hotos",
    "Middleware": "conf/middleware",
    "ISSRE": "conf/issre",
    "ESEM": "conf/esem",
    "ICPC": "conf/iwpc",
    "RE": "conf/re",
    "CAiSE": "conf/caise",
    "ICSOC": "conf/icsoc",
    "ICWS": "conf/icws",
    "DASFAA": "conf/dasfaa",
    "ISWC": "conf/semweb",
    "ICDT": "conf/icdt",
    "CIDR": "conf/cidr",
    "WISE": "conf/wise",
    "SoCG": "conf/compgeom",
    "ESA": "conf/esa",
    "CADE": "conf/cade",
    "CONCUR": "conf/concur",
    "SAT": "conf/sat",
    "COCOON": "conf/cocoon",
    "FMCAD": "conf/fmcad",
    "SCA": "conf/sca",
    "DCC": "conf/dcc",
    "SGP": "conf/sgp",
    "EGSR": "conf/rt",
    "PG": "conf/pg",
    "SPM": "conf/spm",
    "ICCBR": "conf/iccbr",
    "PPSN": "conf/ppsn",
    "GROUP": "conf/group",
    "ISS": "conf/tabletop",
    "ECSCW": "conf/ecscw",
    "CogSci": "conf/cogsci",
    "WINE": "conf/wine",
    "MSST": "conf/mss",
    "NOSSDAV": "conf/nossdav",
    "LCTES": "conf/lctrts",
    "MoDELS": "conf/models",
    "CP": "conf/cp",
    "VMCAI": "conf/vmcai",
    "SAS": "conf/sas",
    "CC": "conf/cc",
    "HSCC": "conf/hybrid",
    "Performance": "conf/sigmetrics",
    "HiPEAC": "conf/hipeac",
    "HOT CHIPS": "conf/hotchips",
    "ITC": "conf/itc",
    "LISA": "conf/lisa",
    "ETAPS": "conf/etaps",
}


def get_json(url: str) -> dict:
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=45) as r:
        return json.loads(r.read().decode("utf-8"))


def count_year(stream: str, year: int) -> int | None:
    q = f"stream.id:{stream}: year:{year}:"
    url = (
        "https://dblp.org/search/publ/api?q="
        + urllib.parse.quote(q)
        + "&format=json&h=0"
    )
    try:
        d = get_json(url)
        total = d.get("result", {}).get("hits", {}).get("@total")
        return int(total) if total is not None else None
    except Exception as e:
        print("count fail", stream, year, e)
        return None


def main() -> None:
    ccf = json.loads(CCF.read_text(encoding="utf-8"))
    cache = json.loads(CACHE.read_text(encoding="utf-8")) if CACHE.exists() else {}
    streams = dict(SEED_STREAMS)
    if MAP.exists():
        streams.update(json.loads(MAP.read_text(encoding="utf-8")))

    targets = []
    for c in ccf["conferences"]:
        if c["rank"] not in {"A", "B"}:
            continue
        has = any(
            (c["stats"].get(y) or {}).get("accepted") is not None
            for y in ("2024", "2025", "2026")
        )
        if has and c["short"] in cache:
            continue
        if not has or c["short"] in SEED_STREAMS:
            targets.append(c["short"])

    # unique preserve order
    seen = set()
    uniq = []
    for s in targets:
        if s not in seen:
            seen.add(s)
            uniq.append(s)

    print("targets", len(uniq))
    for i, short in enumerate(uniq):
        stream = streams.get(short)
        if not stream:
            print("skip no stream", short)
            continue
        entry = cache.get(short) or {}
        for year in (2024, 2025, 2026):
            ys = str(year)
            if entry.get(ys, {}).get("accepted"):
                continue
            n = count_year(stream, year)
            time.sleep(1.2)
            if not n:
                continue
            entry[ys] = {
                "accepted": n,
                "submitted": None,
                "notes": f"DBLP stream `{stream}` 当年 indexed 论文数（近似录用规模）。",
                "papers_index": f"https://dblp.org/db/{stream}/index.html",
            }
            print(f"  {short} {ys} = {n}")
        if entry:
            cache[short] = entry
        if (i + 1) % 10 == 0:
            CACHE.write_text(json.dumps(cache, ensure_ascii=False, indent=2), encoding="utf-8")
            print(f"checkpoint {i+1}/{len(uniq)}")

    MAP.write_text(json.dumps(streams, ensure_ascii=False, indent=2), encoding="utf-8")
    CACHE.write_text(json.dumps(cache, ensure_ascii=False, indent=2), encoding="utf-8")
    print("wrote", CACHE, "venues", len(cache))


if __name__ == "__main__":
    main()
