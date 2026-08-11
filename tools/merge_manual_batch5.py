# -*- coding: utf-8 -*-
"""Batch-5: theory/SE venues SoCG ESA VMCAI FMCAD CADE RE ESEM MoDELS."""
from __future__ import annotations

import json
from copy import deepcopy
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MANUAL = ROOT / "data" / "ccf-manual-stats.json"

BATCH = {
    "SoCG": {
        "focus": "计算几何。",
        "papers_index": "https://socg25.github.io/socg.html",
        "dblp": "https://dblp.org/db/conf/compgeom/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 78,
                "submitted": 225,
                "notes": "SoCG 2025 前言：78/225。",
                "directions": [{"name": "计算几何 / 拓扑", "share": "高"}],
                "papers_index": "https://drops.dagstuhl.de/entities/volume/LIPIcs-volume-332",
            }
        },
    },
    "ESA": {
        "focus": "欧洲算法研讨；理论分析、算法工程与简洁证明分轨。",
        "papers_index": "https://algo-conference.org/2025/esa/",
        "dblp": "https://dblp.org/db/conf/esa/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 115,
                "submitted": 372,
                "notes": "前言：115/372（A 83 / B 16 / S 16）。",
                "directions": [
                    {"name": "算法设计与分析", "share": "高"},
                    {"name": "算法工程", "share": "中"},
                ],
                "papers_index": "https://drops.dagstuhl.de/entities/volume/LIPIcs-volume-351",
            }
        },
    },
    "VMCAI": {
        "focus": "验证、模型检测与抽象解释。",
        "papers_index": "https://link.springer.com/book/10.1007/978-3-031-82700-6",
        "dblp": "https://dblp.org/db/conf/vmcai/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 20,
                "submitted": 48,
                "notes": "Springer 前言：20/48（含 tool 2）。",
                "directions": [
                    {"name": "模型检测 / 抽象解释", "share": "高"},
                    {"name": "形式验证", "share": "高"},
                ],
                "papers_index": "https://link.springer.com/book/10.1007/978-3-031-82700-6",
            }
        },
    },
    "FMCAD": {
        "focus": "形式方法在 CAD；硬件/软件验证与求解器。",
        "papers_index": "https://fmcad.org/FMCAD25/",
        "dblp": "https://dblp.org/db/conf/fmcad/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 27,
                "submitted": 64,
                "notes": "前言：27/64 full（另 abstract 82）；含 regular 17 + tool/case 10。",
                "directions": [
                    {"name": "硬件 / 软件验证", "share": "高"},
                    {"name": "SAT/SMT", "share": "高"},
                ],
                "papers_index": "https://fmcad.org/FMCAD25/",
            }
        },
    },
    "CADE": {
        "focus": "自动演绎与定理证明。",
        "papers_index": "https://www.dhbw-stuttgart.de/cade-30/accepted-papers/",
        "dblp": "https://dblp.org/db/conf/cade/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 37,
                "submitted": 87,
                "notes": "CADE-30：full 33 + short 4 / 87。",
                "directions": [
                    {"name": "自动演绎 / SMT", "share": "高"},
                    {"name": "重写 / 证明", "share": "高"},
                ],
                "papers_index": "https://link.springer.com/book/10.1007/978-3-031-99984-0",
            }
        },
    },
    "RE": {
        "focus": "需求工程。",
        "papers_index": "https://conf.researchr.org/track/RE-2025/re-2025-research-papers",
        "dblp": "https://dblp.org/db/conf/re/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 23,
                "submitted": None,
                "notes": "Research Papers 录用列表计 23。",
                "directions": [
                    {"name": "需求工程", "share": "高"},
                    {"name": "LLM / 需求质量", "share": "中高"},
                ],
                "papers_index": "https://conf.researchr.org/track/RE-2025/re-2025-research-papers",
            }
        },
    },
    "ESEM": {
        "focus": "经验软件工程与度量。",
        "papers_index": "https://conf.researchr.org/track/esem-2025/esem-2025-technical-track",
        "dblp": "https://dblp.org/db/conf/esem/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 28,
                "submitted": None,
                "notes": "Technical Track 录用列表计 28。",
                "directions": [
                    {"name": "经验研究 / 度量", "share": "高"},
                    {"name": "开源 / LLM 实证", "share": "高"},
                ],
                "papers_index": "https://conf.researchr.org/track/esem-2025/esem-2025-technical-track",
            }
        },
    },
    "MoDELS": {
        "focus": "模型驱动工程。",
        "papers_index": "https://conf.researchr.org/track/models-2025/models-2025-research-papers",
        "dblp": "https://dblp.org/db/conf/models/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 40,
                "submitted": None,
                "notes": "Research Papers：FT 约 28 + PT 约 12（另有 NIER）。",
                "directions": [
                    {"name": "MDE / 模型变换", "share": "高"},
                    {"name": "LLM × 建模", "share": "高"},
                ],
                "papers_index": "https://conf.researchr.org/track/models-2025/models-2025-research-papers",
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
    data["_meta"]["note"] = "人工补录 batch-5：SoCG/ESA/VMCAI/FMCAD/CADE/RE/ESEM/MoDELS。"
    MANUAL.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    print("manual", len(venues), "batch", sorted(BATCH))


if __name__ == "__main__":
    main()
