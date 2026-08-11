# -*- coding: utf-8 -*-
"""Batch-7: ISSRE/SANER/ISMAR/CSFW/SAS/LCTES/EGSR/MobileHCI."""
from __future__ import annotations

import json
from copy import deepcopy
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MANUAL = ROOT / "data" / "ccf-manual-stats.json"

BATCH = {
    "ISSRE": {
        "focus": "软件可靠性工程。",
        "papers_index": "https://issre.github.io/2025/program_research.html",
        "dblp": "https://dblp.org/db/conf/issre/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 47,
                "submitted": None,
                "notes": "Research Track 程序 RS1–RS13 计 47（含个别未到场仍录用）。",
                "directions": [
                    {"name": "可靠性 / 测试 / 模糊", "share": "高"},
                    {"name": "AIOps / LLM", "share": "高"},
                ],
                "papers_index": "https://issre.github.io/2025/program_research.html",
            }
        },
    },
    "SANER": {
        "focus": "软件分析、演化与再工程。",
        "papers_index": "https://conf.researchr.org/track/saner-2025/saner-2025-papers",
        "dblp": "https://dblp.org/db/conf/wcre/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 52,
                "submitted": None,
                "notes": "Research Track 52；另 Industry 10（社区报道口径）。",
                "directions": [
                    {"name": "软件分析 / 再工程", "share": "高"},
                    {"name": "维护 / LLM", "share": "高"},
                ],
                "papers_index": "https://conf.researchr.org/track/saner-2025/saner-2025-papers",
            }
        },
    },
    "ISMAR": {
        "focus": "混合/增强现实；TVCG 期刊轨 + 会议轨统一审稿。",
        "papers_index": "https://www.ieeeismar.net/2025/",
        "dblp": "https://dblp.org/db/conf/ismar/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 217,
                "submitted": 763,
                "notes": "官网统计：journal 60 + conference 157 / 763；表内 accepted=两者合计。",
                "directions": [
                    {"name": "AR/MR/VR", "share": "高"},
                    {"name": "感知 / 交互 / 显示", "share": "高"},
                ],
                "papers_index": "https://www.ismar.net/posts/ismar2025/",
            }
        },
    },
    "CSFW": {
        "focus": "计算机安全基础（现名 CSF）。",
        "papers_index": "https://www.ieee-security.org/TC/CSF2025/accepted.html",
        "dblp": "https://dblp.org/db/conf/csfw/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 38,
                "submitted": None,
                "notes": "CSF 2025 Accepted Papers 列表计 38（多周期录用）。",
                "directions": [
                    {"name": "形式安全 / 协议", "share": "高"},
                    {"name": "信息流 / 隐私", "share": "高"},
                ],
                "papers_index": "https://www.ieee-security.org/TC/CSF2025/accepted.html",
            }
        },
    },
    "SAS": {
        "focus": "静态分析。",
        "papers_index": "https://link.springer.com/book/10.1007/978-3-032-07106-4",
        "dblp": "https://dblp.org/db/conf/sas/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 15,
                "submitted": 32,
                "notes": "Springer 前言：15/32。",
                "directions": [
                    {"name": "抽象解释 / 静态分析", "share": "高"},
                    {"name": "验证 / LLM×分析", "share": "中"},
                ],
                "papers_index": "https://link.springer.com/book/10.1007/978-3-032-07106-4",
            }
        },
    },
    "LCTES": {
        "focus": "嵌入式系统语言、编译器与工具。",
        "papers_index": "https://pldi25.sigplan.org/home/LCTES-2025",
        "dblp": "https://dblp.org/db/conf/lctrts/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 18,
                "submitted": None,
                "notes": "LCTES 2025 Accepted Papers 列表计 18。",
                "directions": [
                    {"name": "嵌入式编译 / 运行时", "share": "高"},
                    {"name": "加速器 / 实时", "share": "中高"},
                ],
                "papers_index": "https://pldi25.sigplan.org/home/LCTES-2025",
            }
        },
    },
    "EGSR": {
        "focus": "渲染；CGF 期刊轨与 symposium-only 轨。",
        "papers_index": "https://kesen.realtimerendering.com/egsr2025Papers.htm",
        "dblp": "https://dblp.org/db/conf/rt/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 47,
                "submitted": None,
                "notes": "EGSR 2025 程序页计约 47（含 J/S/I/CGF 各轨）。",
                "directions": [
                    {"name": "实时 / 路径追踪", "share": "高"},
                    {"name": "外观 / 可微渲染", "share": "高"},
                ],
                "papers_index": "https://kesen.realtimerendering.com/egsr2025Papers.htm",
            }
        },
    },
    "MobileHCI": {
        "focus": "移动人机交互。",
        "papers_index": "https://mobilehci.acm.org/2025/acceptedpapers.php",
        "dblp": "https://dblp.org/db/conf/mhci/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 40,
                "submitted": None,
                "notes": "官网 Accepted Papers 列表计 40（不含 demo/LBW）。",
                "directions": [
                    {"name": "移动交互 / 可穿戴", "share": "高"},
                    {"name": "隐私 / XR 移动", "share": "中高"},
                ],
                "papers_index": "https://mobilehci.acm.org/2025/acceptedpapers.php",
            }
        },
    },
    "WISE": {
        "focus": "Web 信息系统工程。",
        "papers_index": "https://www.ficloud.org/wise2025/",
        "dblp": "https://dblp.org/db/conf/wise/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 54,
                "submitted": 140,
                "notes": "Springer 前言：full 54 + short 22 / 140；表内 accepted 记 full。",
                "directions": [
                    {"name": "推荐 / 知识图谱", "share": "高"},
                    {"name": "Web 安全 / LLM", "share": "高"},
                ],
                "papers_index": "https://link.springer.com/book/9783031967771",
            }
        },
    },
    "PG": {
        "focus": "太平洋图形学；CGF 期刊轨 + 会议轨。",
        "papers_index": "https://pg2025.org/",
        "dblp": "https://dblp.org/db/conf/pg/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 97,
                "submitted": 257,
                "notes": "前言：发表 97（CGF 48 + conference 49）/ 257；条件录用曾 99。",
                "directions": [
                    {"name": "计算机图形学", "share": "高"},
                    {"name": "几何 / 渲染 / 动画", "share": "高"},
                ],
                "papers_index": "https://diglib.eg.org/",
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
    data["_meta"]["note"] = "人工补录 batch-7：ISSRE/SANER/ISMAR/CSFW/SAS/LCTES/EGSR/MobileHCI。"
    MANUAL.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    print("manual", len(venues), "batch", sorted(BATCH))


if __name__ == "__main__":
    main()
