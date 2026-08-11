# -*- coding: utf-8 -*-
"""Batch-4: ICNP/ICPC/DASFAA/CAiSE/CIDR/SAT/CONCUR + HiPEAC note."""
from __future__ import annotations

import json
from copy import deepcopy
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MANUAL = ROOT / "data" / "ccf-manual-stats.json"

BATCH = {
    "ICNP": {
        "focus": "网络协议设计、分析、实现与性能。",
        "papers_index": "https://icnp25.cs.ucr.edu/acceptedpapers.html",
        "dblp": "https://dblp.org/db/conf/icnp/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 60,
                "submitted": None,
                "notes": "ICNP 2025 Accepted Papers 列表计 60。",
                "directions": [
                    {"name": "协议 / 路由", "share": "高"},
                    {"name": "测量 / QoS", "share": "高"},
                ],
                "papers_index": "https://icnp25.cs.ucr.edu/acceptedpapers.html",
            }
        },
    },
    "ICPC": {
        "focus": "程序理解；代码理解、维护与 LLM 辅助分析。",
        "papers_index": "https://conf.researchr.org/track/icpc-2025/icpc-2025-research",
        "dblp": "https://dblp.org/db/conf/iwpc/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 38,
                "submitted": None,
                "notes": "Research Track 程序条目计 38（另有 ERA/RENE 分轨）。",
                "directions": [
                    {"name": "程序理解 / 维护", "share": "高"},
                    {"name": "LLM for code", "share": "高"},
                ],
                "papers_index": "https://conf.researchr.org/track/icpc-2025/icpc-2025-research",
            }
        },
    },
    "DASFAA": {
        "focus": "数据库系统与高级应用。",
        "papers_index": "https://dasfaa2025.github.io/",
        "dblp": "https://dblp.org/db/conf/dasfaa/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 136,
                "submitted": 731,
                "notes": "Springer 前言：full 136 + short 89 / 731。表内 accepted 记 full。",
                "directions": [
                    {"name": "数据管理 / ML", "share": "高"},
                    {"name": "图 / 推荐 / 隐私", "share": "高"},
                ],
                "papers_index": "https://link.springer.com/book/9789819541485",
            }
        },
    },
    "CAiSE": {
        "focus": "信息系统工程；建模、需求与企业信息系统。",
        "papers_index": "https://conferences.big.tuwien.ac.at/caise2025/accepted_papers.php?type=Main+Conference",
        "dblp": "https://dblp.org/db/conf/caise/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 35,
                "submitted": 229,
                "notes": "Springer 前言：35/229。",
                "directions": [
                    {"name": "信息系统工程", "share": "高"},
                    {"name": "建模 / LLM", "share": "中高"},
                ],
                "papers_index": "https://link.springer.com/book/10.1007/978-3-031-94569-4",
            }
        },
    },
    "CIDR": {
        "focus": "创新数据系统；系统论文与愿景并重。",
        "papers_index": "https://www.cidrdb.org/cidr2025/papers.html",
        "dblp": "https://dblp.org/db/conf/cidr/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 34,
                "submitted": None,
                "notes": "CIDR 2025 papers 页计约 34。",
                "directions": [
                    {"name": "数据系统 / 存储", "share": "高"},
                    {"name": "LLM × DB", "share": "高"},
                ],
                "papers_index": "https://www.cidrdb.org/cidr2025/papers.html",
            }
        },
    },
    "SAT": {
        "focus": "可满足性求解；SAT/MaxSAT/QBF 理论与系统。",
        "papers_index": "https://satisfiability.org/SAT25/papers/",
        "dblp": "https://dblp.org/db/conf/sat/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 30,
                "submitted": None,
                "notes": "SAT 2025 Accepted Papers 列表计 30（LIPIcs）。",
                "directions": [
                    {"name": "SAT / MaxSAT", "share": "高"},
                    {"name": "证明 / 工具", "share": "中高"},
                ],
                "papers_index": "https://satisfiability.org/SAT25/papers/",
            }
        },
    },
    "CONCUR": {
        "focus": "并发理论；进程代数、自动机与博弈验证。",
        "papers_index": "https://conferences.au.dk/confest2025/concur/proceedings",
        "dblp": "https://dblp.org/db/conf/concur/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 36,
                "submitted": None,
                "notes": "CONCUR 2025 Accepted Papers（LIPIcs.CONCUR.2025.4–.39）计 36。",
                "directions": [
                    {"name": "并发理论", "share": "高"},
                    {"name": "验证 / 博弈", "share": "高"},
                ],
                "papers_index": "https://conferences.au.dk/confest2025/concur/proceedings",
            }
        },
    },
    "HiPEAC": {
        "focus": "高性能嵌入式架构与编译；journal-first（ACM TACO）无独立会议录用池。",
        "papers_index": "https://www.hipeac.net/2025/barcelona/",
        "dblp": "https://dblp.org/db/conf/hipeac/index.html",
        "status": "profiling",
        "stats": {
            "2025": {
                "accepted": None,
                "submitted": None,
                "notes": "录用走 ACM TACO 滚动；受邀在 HiPEAC 宣讲，无独立 proceedings 录用数。",
                "directions": [
                    {"name": "架构 / 编译", "share": "高"},
                    {"name": "边缘 / 异构", "share": "高"},
                ],
                "papers_index": "https://www.hipeac.net/2025/barcelona/",
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
    data["_meta"]["note"] = "人工补录 batch-4：ICNP/ICPC/DASFAA/CAiSE/CIDR/SAT/CONCUR。"
    MANUAL.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    print("manual", len(venues), "batch", sorted(BATCH))


if __name__ == "__main__":
    main()
