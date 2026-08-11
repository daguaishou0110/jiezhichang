# -*- coding: utf-8 -*-
"""Batch-6: CP / ICCBR / CLUSTER (+ links for remaining)."""
from __future__ import annotations

import json
from copy import deepcopy
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MANUAL = ROOT / "data" / "ccf-manual-stats.json"

BATCH = {
    "CP": {
        "focus": "约束规划。",
        "papers_index": "https://cp2025.a4cp.org/accepted_papers.html",
        "dblp": "https://dblp.org/db/conf/cp/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 41,
                "submitted": None,
                "notes": "CP 2025 前言：41（regular 38 + short 3）。",
                "directions": [
                    {"name": "约束规划 / 优化", "share": "高"},
                    {"name": "应用约束", "share": "中高"},
                ],
                "papers_index": "https://cp2025.a4cp.org/accepted_papers.html",
            }
        },
    },
    "ICCBR": {
        "focus": "基于案例推理。",
        "papers_index": "https://link.springer.com/book/10.1007/978-3-031-96559-3",
        "dblp": "https://dblp.org/db/conf/iccbr/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 30,
                "submitted": 81,
                "notes": "Springer 前言：full 30/81。",
                "directions": [
                    {"name": "CBR 理论 / 方法", "share": "高"},
                    {"name": "CBR × 生成式 AI", "share": "高"},
                ],
                "papers_index": "https://link.springer.com/book/10.1007/978-3-031-96559-3",
            }
        },
    },
    "CLUSTER": {
        "focus": "集群计算与 HPC 系统。",
        "papers_index": "https://clustercomp.org/2025/",
        "dblp": "https://dblp.org/db/conf/cluster/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 40,
                "submitted": None,
                "notes": "主办方 EPCC：技术程序约 40 篇。",
                "directions": [
                    {"name": "HPC / 集群系统", "share": "高"},
                    {"name": "AI × HPC", "share": "中高"},
                ],
                "papers_index": "https://clustercomp.org/2025/",
            }
        },
    },
    "ICSOC": {
        "focus": "面向服务计算；微服务、云边与业务流程。",
        "papers_index": "https://icsoc2025.hit.edu.cn/",
        "dblp": "https://dblp.org/db/conf/icsoc/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 42,
                "submitted": 219,
                "notes": "Springer 前言：full 42 + short 21 / 219；表内 accepted 记 full。",
                "directions": [
                    {"name": "服务计算 / 微服务", "share": "高"},
                    {"name": "云边 / Serverless", "share": "高"},
                ],
                "papers_index": "https://link.springer.com/book/9789819550111",
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
    data["_meta"]["note"] = "人工补录 batch-6：CP/ICCBR/CLUSTER。"
    MANUAL.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    print("manual", len(venues), "batch", sorted(BATCH))


if __name__ == "__main__":
    main()
