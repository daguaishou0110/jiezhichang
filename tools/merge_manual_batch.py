# -*- coding: utf-8 -*-
"""Merge a batch of newly verified venue stats into ccf-manual-stats.json."""
from __future__ import annotations

import json
from copy import deepcopy
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MANUAL = ROOT / "data" / "ccf-manual-stats.json"

BATCH = {
    "ESORICS": {
        "focus": "欧洲安全研究旗舰；系统安全、隐私、密码应用与 AI 安全。",
        "papers_index": "https://esorics2025.sciencesconf.org/resource/page/id/11",
        "dblp": "https://dblp.org/db/conf/esorics/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 100,
                "submitted": 605,
                "notes": "官方程序册：100/605 unique submissions（约 16.5%）。",
                "directions": [
                    {"name": "系统 / 硬件安全", "share": "高"},
                    {"name": "隐私 / 密码协议", "share": "高"},
                    {"name": "AI 安全", "share": "中高"},
                ],
                "papers_index": "https://esorics2025.sciencesconf.org/resource/page/id/11",
            }
        },
    },
    "FPGA": {
        "focus": "现场可编程门阵列；架构、工具与应用。",
        "papers_index": "https://dl.acm.org/doi/proceedings/10.1145/3706628",
        "dblp": "https://dblp.org/db/conf/fpga/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 22,
                "submitted": 82,
                "notes": "研究文 17 full + 5 short；另有 poster 扩展摘要 21。约 27%。",
                "directions": [
                    {"name": "FPGA 架构 / CAD", "share": "高"},
                    {"name": "加速应用", "share": "高"},
                ],
                "papers_index": "https://dl.acm.org/doi/proceedings/10.1145/3706628",
            },
            "2026": {
                "accepted": 24,
                "submitted": 94,
                "notes": "ACM DL Acceptance Rates：24/94≈26%。",
                "directions": [{"name": "FPGA", "share": "高"}],
                "papers_index": "https://dl.acm.org/doi/proceedings/10.1145/3706628",
            },
        },
    },
    "RAID": {
        "focus": "入侵检测与防御、攻防实证。",
        "papers_index": "https://raid2025.github.io/accepted_open.html",
        "dblp": "https://dblp.org/db/conf/raid/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 62,
                "submitted": None,
                "notes": "官网 Accepted papers 列表计约 62。",
                "directions": [
                    {"name": "入侵检测 / 攻防", "share": "高"},
                    {"name": "系统安全实证", "share": "高"},
                ],
                "papers_index": "https://raid2025.github.io/accepted_open.html",
            }
        },
    },
    "ACSAC": {
        "focus": "应用计算机安全。",
        "papers_index": "https://www.acsac.org/2025/program/papers/",
        "dblp": "https://dblp.org/db/conf/acsac/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 84,
                "submitted": None,
                "notes": "官网 Accepted Papers 列表计约 84；社区称录用率约 20.7%。",
                "directions": [{"name": "应用安全", "share": "高"}],
                "papers_index": "https://www.acsac.org/2025/program/papers/",
            }
        },
    },
    "INTERSPEECH": {
        "focus": "语音与口语处理旗舰；ASR、TTS、说话人、语音 LLM。",
        "papers_index": "https://www.isca-archive.org/interspeech_2025",
        "dblp": "https://dblp.org/db/conf/interspeech/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 1163,
                "submitted": 2332,
                "notes": "官方通知：1163/2332≈49.87%。",
                "directions": [
                    {"name": "ASR / TTS", "share": "高"},
                    {"name": "语音大模型", "share": "高"},
                    {"name": "说话人 / 副语言", "share": "中"},
                ],
                "papers_index": "https://www.isca-archive.org/interspeech_2025",
            }
        },
    },
    "ECML-PKDD": {
        "focus": "欧洲机器学习与知识发现；ML + 数据挖掘。",
        "papers_index": "https://ecmlpkdd.org/2025/accepted-papers-rt/",
        "dblp": "https://dblp.org/db/conf/pkdd/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 226,
                "submitted": None,
                "notes": "Research Track 录用列表 Title 条目约 226（另有 Applied 等分轨）。",
                "directions": [
                    {"name": "机器学习", "share": "高"},
                    {"name": "数据挖掘", "share": "高"},
                ],
                "papers_index": "https://ecmlpkdd.org/2025/accepted-papers-rt/",
            }
        },
    },
    "PODC": {
        "focus": "分布式计算理论；算法、容错、一致性与网络计算。",
        "papers_index": "https://www.podc.org/podc2025/list-of-accepted-papers/",
        "dblp": "https://dblp.org/db/conf/podc/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 41,
                "submitted": None,
                "notes": "Full papers 41；另 Brief announcements 约 26（未计入主录用）。",
                "directions": [
                    {"name": "分布式算法 / 理论", "share": "高"},
                    {"name": "拜占庭 / 容错", "share": "中高"},
                ],
                "papers_index": "https://www.podc.org/podc2025/list-of-accepted-papers/",
            }
        },
    },
    "CGO": {
        "focus": "代码生成与优化；编译器、运行时与异构优化。",
        "papers_index": "https://2025.cgo.org/track/cgo-2025-papers",
        "dblp": "https://dblp.org/db/conf/cgo/index.html",
        "status": "profiling",
        "stats": {
            "2025": {
                "accepted": None,
                "submitted": None,
                "notes": "录用列表见 CGO 2025 Papers 页；精确篇数待从程序册核对。",
                "directions": [
                    {"name": "编译 / 代码生成", "share": "高"},
                    {"name": "GPU / 异构优化", "share": "中高"},
                ],
                "papers_index": "https://2025.cgo.org/track/cgo-2025-papers",
            }
        },
    },
    "IPSN": {
        "focus": "信息处理与传感器网络；2025 起与 SenSys/IoTDI 合并发表。",
        "papers_index": "https://sensys.acm.org/2025/",
        "dblp": "https://dblp.org/db/conf/ipsn/index.html",
        "status": "profiling",
        "stats": {
            "2025": {
                "accepted": None,
                "submitted": None,
                "notes": "2025 录用论文并入 ACM SenSys proceedings（与 IPSN/IoTDI 合并过渡年）。",
                "directions": [
                    {"name": "传感 / 嵌入式 AI", "share": "高"},
                    {"name": "物联网系统", "share": "高"},
                ],
                "papers_index": "https://sensys.acm.org/2025/",
            }
        },
    },
    "PKC": {
        "focus": "公钥密码学；协议、后量子与安全计算。",
        "papers_index": "https://link.springer.com/book/10.1007/978-3-031-91820-9",
        "dblp": "https://dblp.org/db/conf/pkc/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 60,
                "submitted": 199,
                "notes": "官方前言：60/199。",
                "directions": [
                    {"name": "公钥 / 后量子", "share": "高"},
                    {"name": "安全多方计算", "share": "中高"},
                ],
                "papers_index": "https://link.springer.com/book/10.1007/978-3-031-91820-9",
            }
        },
    },
    "TCC": {
        "focus": "密码学理论。",
        "papers_index": "https://link.springer.com/book/10.1007/978-3-032-12287-2",
        "dblp": "https://dblp.org/db/conf/tcc/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 70,
                "submitted": 242,
                "notes": "官方：70/242≈28.9%。",
                "directions": [{"name": "密码学理论", "share": "高"}],
                "papers_index": "https://link.springer.com/book/10.1007/978-3-032-12287-2",
            }
        },
    },
    "DATE": {
        "focus": "欧洲设计自动化与测试；EDA、嵌入式与电路系统。",
        "papers_index": "https://www.date-conference.com/",
        "dblp": "https://dblp.org/db/conf/date/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 302,
                "submitted": 1213,
                "notes": "官方前言：302/1213≈24.8% regular；另 extended abstract 56。",
                "directions": [
                    {"name": "EDA / 测试", "share": "高"},
                    {"name": "嵌入式系统", "share": "高"},
                ],
                "papers_index": "https://www.date-conference.com/",
            }
        },
    },
    "CHES": {
        "focus": "密码硬件与嵌入式系统；以 TCHES 期刊卷期发表。",
        "papers_index": "https://ches.iacr.org/2025/acceptedpapers.php",
        "dblp": "https://dblp.org/db/conf/ches/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": None,
                "submitted": None,
                "notes": "TCHES 2025 Issue1–4 滚动录用；Accepted Papers 页 ###### 标题条目汇总后填入。",
                "directions": [
                    {"name": "密码硬件 / 侧信道", "share": "高"},
                    {"name": "嵌入式安全", "share": "高"},
                ],
                "papers_index": "https://ches.iacr.org/2025/acceptedpapers.php",
            }
        },
    },
}


def main() -> None:
    # fill CHES count if available from dump
    ches = Path(
        r"C:\Users\13594\.cursor\projects\c-Users-13594-Desktop\agent-tools\0c9fea6e-1091-4630-8321-010581f4da7e.txt"
    )
    if ches.exists():
        import re

        n = len(re.findall(r"^######\s+", ches.read_text(encoding="utf-8", errors="ignore"), re.M))
        if n:
            BATCH["CHES"]["stats"]["2025"]["accepted"] = n
            BATCH["CHES"]["stats"]["2025"]["notes"] = f"TCHES 2025 Accepted Papers 页计 {n} 篇（Issue1–4）。"

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
    data["_meta"]["note"] = (
        "人工补录；含 ESORICS/FPGA/RAID/ACSAC/INTERSPEECH/ECML-PKDD/PODC/PKC/TCC/DATE/CHES 等。"
    )
    MANUAL.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    print("manual venues", len(venues))
    print("batch", sorted(BATCH))


if __name__ == "__main__":
    main()
