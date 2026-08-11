# -*- coding: utf-8 -*-
"""Batch-9: WINE / ICDT / ICCD / DCC (+ more if available)."""
from __future__ import annotations

import json
from copy import deepcopy
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MANUAL = ROOT / "data" / "ccf-manual-stats.json"

BATCH = {
    "WINE": {
        "focus": "网络与互联网经济学；机制设计、匹配与公平。",
        "papers_index": "https://wine2025.cs.rutgers.edu/",
        "dblp": "https://dblp.org/db/conf/wine/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 39,
                "submitted": 225,
                "notes": "Springer 前言：full 39 + abstracts 28 / 225；表内 accepted 记 full。",
                "directions": [
                    {"name": "机制设计 / 定价", "share": "高"},
                    {"name": "匹配 / 公平 / 博弈", "share": "高"},
                ],
                "papers_index": "https://link.springer.com/book/10.1007/978-3-032-18660-7",
            }
        },
    },
    "ICDT": {
        "focus": "数据库理论。",
        "papers_index": "https://drops.dagstuhl.de/entities/volume/LIPIcs-volume-328",
        "dblp": "https://dblp.org/db/conf/icdt/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 29,
                "submitted": 80,
                "notes": "LIPIcs 前言：研究文 29/80；另 Database Theory in Action 4（3+1 邀请）。",
                "directions": [
                    {"name": "查询 / 复杂性", "share": "高"},
                    {"name": "数据库理论", "share": "高"},
                ],
                "papers_index": "https://drops.dagstuhl.de/entities/volume/LIPIcs-volume-328",
            }
        },
    },
    "ICCD": {
        "focus": "计算机设计；体系结构、EDA、电路与 AI 硬件。",
        "papers_index": "https://www.iccd-conf.com/agenda.html",
        "dblp": "https://dblp.org/db/conf/iccd/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 102,
                "submitted": None,
                "notes": "ICCD 2025 程序：long 76 + short 26（按 L#/S# 条目计）。",
                "directions": [
                    {"name": "硬件架构 / 存储", "share": "高"},
                    {"name": "EDA / AI 硬件", "share": "高"},
                ],
                "papers_index": "https://www.iccd-conf.com/agenda.html",
            }
        },
    },
    "DCC": {
        "focus": "数据压缩。",
        "papers_index": "https://www.cs.brandeis.edu/~dcc/",
        "dblp": "https://dblp.org/db/conf/dcc/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 100,
                "submitted": None,
                "notes": "DBLP dcc2025 条目计约 100（含 short/poster 口径以 DBLP 为准）。",
                "directions": [
                    {"name": "无损 / 有损压缩", "share": "高"},
                    {"name": "多媒体 / 科学数据", "share": "中高"},
                ],
                "papers_index": "https://dblp.org/db/conf/dcc/dcc2025.html",
            }
        },
    },
}


def main() -> None:
    data = json.loads(MANUAL.read_text(encoding="utf-8"))
    venues = data.setdefault("venues", {})
    for k, v in BATCH.items():
        old = venues.get(k) or {}
        merged = deepcopy(old)
        for field in ("focus", "papers_index", "dblp", "status"):
            if v.get(field):
                merged[field] = v[field]
        stats = merged.setdefault("stats", {})
        for y, ydata in (v.get("stats") or {}).items():
            cur = dict(stats.get(y) or {})
            for kk, vv in ydata.items():
                if vv in (None, "", []):
                    continue
                cur[kk] = vv
            stats[y] = cur
        venues[k] = merged
    data["_meta"] = data.get("_meta") or {}
    data["_meta"]["updated"] = "2026-08-11"
    data["_meta"]["note"] = "人工补录 batch-9：WINE/ICDT/ICCD/DCC。"
    MANUAL.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    print("manual", len(venues), "batch", sorted(BATCH))


if __name__ == "__main__":
    main()
