# -*- coding: utf-8 -*-
"""Batch-10: SPAA / PERCOM / SRDS / IUI / CC / NOSSDAV / CogSci / ICWS / ISCAS."""
from __future__ import annotations

import json
from copy import deepcopy
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MANUAL = ROOT / "data" / "ccf-manual-stats.json"

BATCH = {
    "SPAA": {
        "focus": "并行算法与体系结构。",
        "papers_index": "https://spaa.acm.org/2025-program/",
        "dblp": "https://dblp.org/db/conf/spaa/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 42,
                "submitted": None,
                "notes": "官方 program.pdf：full 42 + Brief Announcements 13。",
                "directions": [
                    {"name": "并行算法", "share": "高"},
                    {"name": "调度 / 并发结构", "share": "高"},
                ],
                "papers_index": "https://dl.acm.org/doi/proceedings/10.1145/3694906",
            }
        },
    },
    "PERCOM": {
        "focus": "普适计算与通信。",
        "papers_index": "https://percom.org/2025/",
        "dblp": "https://dblp.org/db/conf/percom/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 25,
                "submitted": None,
                "notes": "DBLP percom2025 条目计 25（与 Research Track 规模一致）。",
                "directions": [
                    {"name": "传感 / 可穿戴", "share": "高"},
                    {"name": "边缘智能", "share": "高"},
                ],
                "papers_index": "https://dblp.org/db/conf/percom/percom2025.html",
            }
        },
    },
    "SRDS": {
        "focus": "可靠分布式系统。",
        "papers_index": "https://srds-conference.org/",
        "dblp": "https://dblp.org/db/conf/srds/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 48,
                "submitted": None,
                "notes": "DBLP srds2025 条目计 48。",
                "directions": [
                    {"name": "可靠分布式", "share": "高"},
                    {"name": "容错 / 安全", "share": "高"},
                ],
                "papers_index": "https://dblp.org/db/conf/srds/srds2025.html",
            }
        },
    },
    "IUI": {
        "focus": "智能用户界面；HCI × AI。",
        "papers_index": "https://iui.acm.org/2025/",
        "dblp": "https://dblp.org/db/conf/iui/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 98,
                "submitted": None,
                "notes": "DBLP iui2025 条目计 98（可能含 companion/短文；非仅 long paper）。",
                "directions": [
                    {"name": "智能交互", "share": "高"},
                    {"name": "XAI / LLM UI", "share": "高"},
                ],
                "papers_index": "https://dblp.org/db/conf/iui/iui2025.html",
            }
        },
    },
    "CC": {
        "focus": "编译器构造。",
        "papers_index": "https://www.conference-publishing.com/toc/CC25/abs",
        "dblp": "https://dblp.org/db/conf/cc/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 18,
                "submitted": None,
                "notes": "DBLP/CC’25 proceedings 研究文约 18。",
                "directions": [
                    {"name": "编译 / 优化", "share": "高"},
                    {"name": "程序分析", "share": "高"},
                ],
                "papers_index": "https://www.conference-publishing.com/toc/CC25/abs",
            }
        },
    },
    "NOSSDAV": {
        "focus": "网络与操作系统对数字音视频的支持。",
        "papers_index": "https://dblp.org/db/conf/nossdav/nossdav2025.html",
        "dblp": "https://dblp.org/db/conf/nossdav/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 15,
                "submitted": None,
                "notes": "DBLP nossdav2025 条目计 15。",
                "directions": [
                    {"name": "多媒体系统", "share": "高"},
                    {"name": "流媒体 / QoE", "share": "中高"},
                ],
                "papers_index": "https://dblp.org/db/conf/nossdav/nossdav2025.html",
            }
        },
    },
    "CogSci": {
        "focus": "认知科学年会；论文体量大。",
        "papers_index": "https://cognitivesciencesociety.org/",
        "dblp": "https://dblp.org/db/conf/cogsci/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 1369,
                "submitted": None,
                "notes": "DBLP cogsci2025 条目计约 1369（含短文/摘要口径）。",
                "directions": [
                    {"name": "认知科学", "share": "高"},
                    {"name": "学习 / 语言 / 决策", "share": "高"},
                ],
                "papers_index": "https://dblp.org/db/conf/cogsci/cogsci2025.html",
            }
        },
    },
    "ICWS": {
        "focus": "Web 服务；微服务与服务计算。",
        "papers_index": "https://services.conferences.computer.org/2025/",
        "dblp": "https://dblp.org/db/conf/icws/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 44,
                "submitted": None,
                "notes": "ICWS 2025 TOC 主会条目约 44（Symposium 分册另计）。",
                "directions": [
                    {"name": "Web 服务 / 微服务", "share": "高"},
                    {"name": "服务推荐 / 云边", "share": "中高"},
                ],
                "papers_index": "https://www.proceedings.com/content/082/082427webtoc.pdf",
            }
        },
    },
    "ISCAS": {
        "focus": "电路与系统。",
        "papers_index": "https://2025.ieee-iscas.org/",
        "dblp": "https://dblp.org/db/conf/iscas/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 1158,
                "submitted": None,
                "notes": "ISCAS 2025 TOC 点线条目约 1158（大会含大量 oral/poster）。",
                "directions": [
                    {"name": "模拟 / 数字电路", "share": "高"},
                    {"name": "信号处理 / AI 电路", "share": "高"},
                ],
                "papers_index": "https://www.proceedings.com/content/080/080805webtoc.pdf",
            }
        },
    },
    "HOT CHIPS": {
        "focus": "高性能芯片研讨；偏工业演讲/产品介绍，非典型研究录用池。",
        "papers_index": "https://www.hotchips.org/",
        "dblp": "https://dblp.org/db/conf/hotchips/index.html",
        "status": "profiling",
        "stats": {
            "2025": {
                "accepted": None,
                "submitted": None,
                "notes": "Hot Chips 以受邀/工业演讲为主，无统一研究轨录用总数。",
                "directions": [
                    {"name": "芯片 / 加速器", "share": "高"},
                    {"name": "系统产品", "share": "高"},
                ],
                "papers_index": "https://www.hotchips.org/",
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
    data["_meta"]["updated"] = "2026-08-12"
    data["_meta"]["note"] = "人工补录 batch-10：SPAA/PERCOM/SRDS/IUI/CC 等。"
    MANUAL.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    print("manual", len(venues), "batch", sorted(BATCH))


if __name__ == "__main__":
    main()
