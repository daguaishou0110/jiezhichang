# -*- coding: utf-8 -*-
"""Report which CCF venues lack acceptance numbers and why aliases miss."""
from __future__ import annotations

import json
import re
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data"

ccf = json.loads((DATA / "ccf-conferences.json").read_text(encoding="utf-8"))
oa_names = []
for p in (DATA / "openaccept_cache").glob("*.json"):
    try:
        o = json.loads(p.read_text(encoding="utf-8"))
        oa_names.append(o.get("name") or p.stem.split("__")[-1].replace(".json", ""))
    except Exception:
        pass
cs = json.loads((DATA / "cs-conf-stats.json").read_text(encoding="utf-8"))
cs_names = [c["series"] for c in cs["conferences"] if c.get("series") != "Template"]


def norm(s: str) -> str:
    return re.sub(r"[^a-z0-9]+", "", (s or "").lower())


oa_n = {norm(x): x for x in oa_names}
cs_n = {norm(x): x for x in cs_names}

missing = []
for c in ccf["conferences"]:
    has = any(
        (c["stats"].get(y) or {}).get("accepted") is not None
        for y in ("2024", "2025", "2026")
    )
    if has:
        continue
    n = norm(c["short"])
    missing.append(
        {
            "short": c["short"],
            "rank": c["rank"],
            "field": c["field"],
            "full": c["full"],
            "in_oa": n in oa_n,
            "oa": oa_n.get(n),
            "in_cs": n in cs_n,
            "cs": cs_n.get(n),
        }
    )

print("missing", len(missing))
print("by rank", Counter(m["rank"] for m in missing))
print("would match OA if alias fixed", sum(1 for m in missing if m["in_oa"] or m["in_cs"]))
print("\n=== A missing ===")
for m in missing:
    if m["rank"] == "A":
        print(f"{m['short']:20} oa={m['in_oa']} cs={m['in_cs']} | {m['full'][:55]}")
print("\n=== B missing (all) ===")
for m in missing:
    if m["rank"] == "B":
        print(f"{m['short']:20} oa={m['in_oa']} cs={m['in_cs']}")
print("\n=== OA names not in CCF ready ===")
ccf_n = {norm(c["short"]) for c in ccf["conferences"]}
for name in sorted(oa_names, key=lambda x: norm(x)):
    if norm(name) not in ccf_n:
        print(" ", name)
