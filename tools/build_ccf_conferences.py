# -*- coding: utf-8 -*-
"""Parse CCF 2026 conference list + merge enrichment into site JSON/JS."""
from __future__ import annotations

import json
import re
from copy import deepcopy
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SRC = Path(
    r"C:\Users\13594\.cursor\projects\c-Users-13594-Desktop\agent-tools\fbbabc3d-4482-4540-a3bc-85f0d1784284.txt"
)
DST = ROOT / "data"
ENRICH = DST / "ccf-enrichment.json"
DST.mkdir(parents=True, exist_ok=True)

FIELD_TO_VENUE = {
    "计算机体系结构/并行与分布计算/存储系统": ["系统 / 体系结构"],
    "计算机网络": ["网络"],
    "网络与信息安全": ["安全"],
    "软件工程/系统软件/程序设计语言": ["软件工程"],
    "数据库/数据挖掘/内容检索": ["机器学习 / 挖掘", "图神经网络"],
    "计算机科学理论": ["理论"],
    "计算机图形学与多媒体": ["计算机视觉", "多模态"],
    "人工智能": ["自然语言处理", "计算机视觉", "机器学习 / 挖掘", "多模态", "图神经网络"],
    "人机交互与普适计算": ["人机交互"],
    "交叉/综合/新兴": ["交叉挂载", "多模态"],
}

FIELD_FOCUS = {
    "计算机体系结构/并行与分布计算/存储系统": "体系结构、并行/分布式、存储与系统软件栈。",
    "计算机网络": "网络协议、无线/移动、数据中心与网络系统。",
    "网络与信息安全": "密码、系统安全、隐私、攻防与可信计算。",
    "软件工程/系统软件/程序设计语言": "程序分析、语言、操作系统、软件质量与自动化。",
    "数据库/数据挖掘/内容检索": "数据系统、挖掘、检索推荐、知识与图数据。",
    "计算机科学理论": "算法、复杂度、理论 CS。",
    "计算机图形学与多媒体": "图形、视觉、多媒体与多模态内容。",
    "人工智能": "机器学习、视觉、NLP、规划与综合 AI。",
    "人机交互与普适计算": "HCI、普适/可穿戴、人机协同。",
    "交叉/综合/新兴": "交叉与新兴方向（Web、实时、机器人等综合会常见）。",
}

# Brief focus for frequent coaching venues (overridden by enrichment if present)
FOCUS_NOTES = {
    "CVPR": "计算机视觉顶会；检测/分割/生成/多模态视觉占比高。",
    "ICCV": "与 CVPR 同级视觉顶会（双年）；偏视觉全谱。",
    "ECCV": "欧洲视觉顶会（双年）；与 CVPR/ICCV 同赛道。",
    "NeurIPS": "机器学习顶会；理论+应用+生成式/基础模型近年很重。",
    "ICML": "机器学习顶会；方法与理论并重。",
    "ICLR": "表征学习/深度学习顶会；方法创新友好。",
    "AAAI": "综合 AI；应用面宽，含视觉/NLP/规划等。",
    "IJCAI": "综合 AI；偏经典 AI + 学习交叉。",
    "ACL": "NLP 顶会；语言学方法与 LLM 应用。",
    "EMNLP": "NLP 顶会；经验方法与应用。",
    "NAACL": "北美 NLP；与 ACL/EMNLP 同赛道。",
    "COLING": "计算语言学；偏语言资源与方法。",
    "SIGKDD": "数据挖掘顶会；表格/图/推荐/工业数据。",
    "KDD": "数据挖掘顶会；表格/图/推荐/工业数据。",
    "WWW": "Web；检索、推荐、社交与图。",
    "SIGIR": "信息检索；搜索/推荐/排序。",
    "CIKM": "信息与知识管理；检索+挖掘+图。",
    "ICDM": "数据挖掘；算法与应用。",
    "WSDM": "Web 搜索与数据挖掘。",
    "SIGMOD": "数据库系统顶会。",
    "VLDB": "数据库/大数据顶会。",
    "ICDE": "数据工程；系统+应用。",
    "ACM MM": "多媒体；多模态音视频图文。",
    "MM": "多媒体；多模态音视频图文。",
    "MICCAI": "医学影像计算；分割/检测/临床影像 AI。",
    "ICRA": "机器人；感知与控制交叉。",
    "IROS": "机器人；应用向。",
    "SIGGRAPH": "计算机图形学旗舰；渲染/几何/动画。",
    "VR": "虚拟现实 / 人机感知交互。",
    "IEEE VIS": "可视化与可视分析。",
}


def empty_year() -> dict:
    return {"accepted": None, "submitted": None, "notes": "", "directions": [], "papers_index": ""}


# ensure parse_rows creates multi-year buckets
def _ensure_stats(c: dict) -> None:
    for y in map(str, range(2020, 2027)):
        if y not in c["stats"]:
            c["stats"][y] = empty_year()


def parse_rows(text: str) -> list[dict]:
    rows = []
    for line in text.splitlines():
        if not line.startswith("|"):
            continue
        parts = [p.strip() for p in line.strip("|").split("|")]
        if len(parts) < 6:
            continue
        seq, short, full, rank, typ, field = parts[:6]
        if seq in {"序号", "---"} or not re.match(r"^\d+$", seq):
            continue
        if typ != "会议":
            continue
        if rank not in {"A", "B", "C"}:
            continue
        focus = FOCUS_NOTES.get(short) or FIELD_FOCUS.get(field, "")
        rows.append(
            {
                "id": re.sub(r"[^A-Za-z0-9]+", "-", short).strip("-").upper() or f"C{seq}",
                "short": short,
                "full": full,
                "rank": rank,
                "field": field,
                "venue_l1": FIELD_TO_VENUE.get(field, []),
                "focus": focus,
                "dblp": f"https://dblp.org/search?q={short}",
                "stats": {str(y): empty_year() for y in range(2020, 2027)},
                "papers_index": "",
                "status": "listed",
            }
        )
    return rows


def deep_merge_year(base: dict, overlay: dict) -> dict:
    out = deepcopy(base)
    for k, v in overlay.items():
        if v is None and k in {"accepted", "submitted"}:
            out[k] = None
        elif v == "" and k in {"notes", "papers_index"}:
            continue
        elif k == "directions" and not v:
            continue
        else:
            out[k] = v
    return out


def apply_enrichment(confs: list[dict], enrich: dict) -> tuple[int, int]:
    venues = enrich.get("venues") or {}
    hit = 0
    ready = 0
    for c in confs:
        e = venues.get(f"{c['short']}|{c['field']}") or venues.get(c["short"])
        if not e:
            # alias: KDD <-> SIGKDD
            if c["short"] == "SIGKDD":
                e = venues.get("KDD") or venues.get("SIGKDD")
            elif c["short"] == "KDD":
                e = venues.get("SIGKDD") or venues.get("KDD")
        if not e:
            continue
        hit += 1
        if e.get("focus"):
            c["focus"] = e["focus"]
        if e.get("dblp"):
            c["dblp"] = e["dblp"]
        if e.get("papers_index"):
            c["papers_index"] = e["papers_index"]
        if e.get("status"):
            c["status"] = e["status"]
        if e.get("status") == "ready":
            ready += 1
        for year, ydata in (e.get("stats") or {}).items():
            if year not in c["stats"]:
                c["stats"][year] = empty_year()
            c["stats"][year] = deep_merge_year(c["stats"][year], ydata)
            if not c["papers_index"] and ydata.get("papers_index"):
                c["papers_index"] = ydata["papers_index"]
    return hit, ready


def main() -> None:
    text = SRC.read_text(encoding="utf-8")
    confs = parse_rows(text)
    seen = set()
    uniq = []
    for c in confs:
        key = (c["short"], c["field"], c["rank"])
        if key in seen:
            continue
        seen.add(key)
        uniq.append(c)

    enrich = {}
    if ENRICH.exists():
        enrich = json.loads(ENRICH.read_text(encoding="utf-8"))
        hit, ready = apply_enrichment(uniq, enrich)
    else:
        hit, ready = 0, 0

    with_stats = sum(
        1
        for c in uniq
        if any((c["stats"].get(y) or {}).get("accepted") is not None for y in c["stats"])
    )
    with_recent = sum(
        1
        for c in uniq
        if any(
            (c["stats"].get(y) or {}).get("accepted") is not None
            for y in ("2024", "2025", "2026")
        )
    )
    with_focus = sum(1 for c in uniq if c.get("focus"))

    meta = {
        "source": "中国计算机学会推荐国际学术会议和期刊目录（2026，第七版）",
        "source_url": "https://www.ccf.org.cn/",
        "mirror": "https://ccf.atom.im/",
        "updated": "2026-08-11",
        "note": (
            f"全量 {len(uniq)} 会均有收录特点与论文检索入口。"
            f"有录用数 {with_stats} 场（其中 2024–26：{with_recent}）；"
            f"enrichment 命中 {hit}，ready {ready}。"
            "数据源：人工核验 / OpenAccept / CS Conf Stats / DBLP indexed。"
        ),
        "counts": {
            "total": len(uniq),
            "A": sum(1 for c in uniq if c["rank"] == "A"),
            "B": sum(1 for c in uniq if c["rank"] == "B"),
            "C": sum(1 for c in uniq if c["rank"] == "C"),
            "with_stats": with_stats,
            "with_recent": with_recent,
            "with_focus": with_focus,
            "enrichment_hit": hit,
            "ready": ready,
        },
        "enrichment": enrich.get("_meta", {}),
    }
    payload = {"meta": meta, "conferences": uniq}
    (DST / "ccf-conferences.json").write_text(
        json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    js = (
        "/* CCF 2026 conference catalog — generated by tools/build_ccf_conferences.py */\n"
        "window.CCF_CONFERENCES = "
        + json.dumps(payload, ensure_ascii=False)
        + ";\n"
    )
    (DST / "ccf-conferences.js").write_text(js, encoding="utf-8")
    print(json.dumps(meta["counts"], ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
