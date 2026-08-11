# -*- coding: utf-8 -*-
"""Batch-8: COCOON / SCA / SGP (+ FSE crypto note)."""
from __future__ import annotations

import json
from copy import deepcopy
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MANUAL = ROOT / "data" / "ccf-manual-stats.json"

BATCH = {
    "COCOON": {
        "focus": "计算与组合学。",
        "papers_index": "https://link.springer.com/book/10.1007/978-981-95-0215-8",
        "dblp": "https://dblp.org/db/conf/cocoon/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 54,
                "submitted": 191,
                "notes": "Springer 前言：54/191。",
                "directions": [
                    {"name": "算法 / 组合优化", "share": "高"},
                    {"name": "图论 / 参数算法", "share": "高"},
                ],
                "papers_index": "https://link.springer.com/book/10.1007/978-981-95-0215-8",
            }
        },
    },
    "SCA": {
        "focus": "计算机动画；经 PACMCGIT 发表。",
        "papers_index": "https://kesen.realtimerendering.com/sca2025Papers.htm",
        "dblp": "https://dblp.org/db/conf/sca/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 18,
                "submitted": None,
                "notes": "SCA 2025 程序页（PACMCGIT V8 N4）计 18。",
                "directions": [
                    {"name": "物理动画 / 碰撞", "share": "高"},
                    {"name": "角色 / 学习控制", "share": "高"},
                ],
                "papers_index": "https://kesen.realtimerendering.com/sca2025Papers.htm",
            }
        },
    },
    "SGP": {
        "focus": "几何处理；CGF 特刊。",
        "papers_index": "https://sgp2025.my.canva.site/",
        "dblp": "https://dblp.org/db/conf/sgp/index.html",
        "status": "ready",
        "stats": {
            "2025": {
                "accepted": 26,
                "submitted": 71,
                "notes": "社区统计表：26/（19+52）≈36%（双轮投稿）。",
                "directions": [
                    {"name": "几何处理", "share": "高"},
                    {"name": "网格 / 形状分析", "share": "高"},
                ],
                "papers_index": "https://diglib.eg.org/collections/c1ce3ed3-8b65-4375-8254-eb653f4202cb",
            }
        },
    },
    # 与软件工程 FSE 同名：必须用领域复合键
    "FSE|网络与信息安全": {
        "focus": "快速软件加密（对称密码）；ToSC 期刊轨宣讲。",
        "papers_index": "https://fse.iacr.org/2025/",
        "dblp": "https://dblp.org/db/conf/fse/index.html",
        "status": "profiling",
        "stats": {
            "2025": {
                "accepted": None,
                "submitted": None,
                "notes": "FSE 宣讲 ToSC 多期录用文（journal-first）；无单一会议录用总数。",
                "directions": [
                    {"name": "对称密码 / 分析", "share": "高"},
                    {"name": "实现 / 侧信道", "share": "中"},
                ],
                "papers_index": "https://tosc.iacr.org/",
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
    data["_meta"]["note"] = "人工补录 batch-8：COCOON/SCA/SGP。"
    MANUAL.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    print("manual", len(venues), "batch", sorted(BATCH))


if __name__ == "__main__":
    main()
