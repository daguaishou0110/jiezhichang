# -*- coding: utf-8 -*-
"""Batch-3: CGO / Middleware / CoNEXT / ISWC (+ updates)."""
from __future__ import annotations

import json
from copy import deepcopy
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MANUAL = ROOT / "data" / "ccf-manual-stats.json"

BATCH = {
    "CGO": {
        "focus": "代码生成与优化；编译器、运行时与异构优化。",
        "papers_index": "https://www.conference-publishing.com/toc/CGO25/abs",
        "dblp": "https://dblp.org/db/conf/cgo/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 48,
                "submitted": None,
                "notes": "CGO’25 PC 前言：双轮共录用 48（含 Tools 8、Practical Experience 3）；一轮 58 + 二轮 106（含一轮修订 8）。",
                "directions": [
                    {"name": "编译 / 代码生成", "share": "高"},
                    {"name": "GPU / 异构优化", "share": "中高"},
                ],
                "papers_index": "https://www.conference-publishing.com/toc/CGO25/abs",
            }
        },
    },
    "Middleware": {
        "focus": "分布式中间件；云边、FaaS、区块链与系统安全交叉。",
        "papers_index": "https://middleware-conf.github.io/2025/program/accepted-paper-list/",
        "dblp": "https://dblp.org/db/conf/middleware/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 36,
                "submitted": None,
                "notes": "官网 Main Conference Accepted Paper List 计 36。",
                "directions": [
                    {"name": "云边 / Serverless", "share": "高"},
                    {"name": "分布式系统 / 区块链", "share": "高"},
                ],
                "papers_index": "https://middleware-conf.github.io/2025/program/accepted-paper-list/",
            }
        },
    },
    "CoNEXT": {
        "focus": "新兴网络实验与技术；经 PACMNET 滚动录用。",
        "papers_index": "https://dl.acm.org/doi/10.1145/3768969",
        "dblp": "https://dblp.org/db/conf/conext/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 50,
                "submitted": None,
                "notes": "PACMNET Vol.3 全年 50 篇；其中 Dec/CoNEXT4 期 32/181（审 172），June 期 5/75。",
                "directions": [
                    {"name": "网络系统实验", "share": "高"},
                    {"name": "协议 / 测量", "share": "高"},
                ],
                "papers_index": "https://dl.acm.org/doi/10.1145/3768969",
            }
        },
    },
    "ISWC": {
        "focus": "语义网与知识图谱。",
        "papers_index": "https://link.springer.com/book/10.1007/978-3-032-09527-5",
        "dblp": "https://dblp.org/db/conf/semweb/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 60,
                "submitted": 277,
                "notes": "Springer 前言：研究全文 60/277。",
                "directions": [
                    {"name": "知识图谱 / 语义网", "share": "高"},
                    {"name": "本体 / 推理应用", "share": "中高"},
                ],
                "papers_index": "https://link.springer.com/book/10.1007/978-3-032-09527-5",
            }
        },
    },
    "EDBT": {
        "focus": "数据库扩展技术；多周期录用（每年 3 期 proceedings）。",
        "papers_index": "https://openproceedings.org/html/pages/2025_edbt.html",
        "dblp": "https://dblp.org/db/conf/edbt/index.html",
        "status": "profiling",
        "stats": {
            "2025": {
                "accepted": None,
                "submitted": None,
                "notes": "Vol.28 Nos.1–3 Research Track 已在 OpenProceedings 发布；精确篇数待 TOC 汇总。",
                "directions": [
                    {"name": "数据管理 / 系统", "share": "高"},
                    {"name": "查询 / 分析", "share": "高"},
                ],
                "papers_index": "https://openproceedings.org/html/pages/2025_edbt.html",
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
    data["_meta"]["note"] = "人工补录 batch-3：CGO/Middleware/CoNEXT/ISWC。"
    MANUAL.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    print("manual", len(venues), "batch", sorted(BATCH))


if __name__ == "__main__":
    main()
