# -*- coding: utf-8 -*-
"""Full-catalog enrichment for CCF conferences.

Merges:
  - data/ccf-enrichment.json (manual curated, highest priority)
  - OpenAccept metadata (github)
  - CS Conf Stats conf.json
  - field / full-name heuristics for the rest

Writes updated data/ccf-enrichment.json covering every CCF short name.
Then run tools/build_ccf_conferences.py.
"""
from __future__ import annotations

import json
import re
import time
import urllib.parse
import urllib.request
from copy import deepcopy
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data"
CCF_JSON = DATA / "ccf-conferences.json"
ENRICH = DATA / "ccf-enrichment.json"
CS_STATS = DATA / "cs-conf-stats.json"
MANUAL = DATA / "ccf-manual-stats.json"
DBLP_CACHE = DATA / "dblp_year_counts.json"
OA_DIR = DATA / "openaccept_cache"
OA_PATHS = DATA / "_oa_paths.json"

UA = {"User-Agent": "jiezhichang-ccf-enricher/1.0"}
YEARS = [str(y) for y in range(2020, 2027)]
RECENT_YEARS = ["2024", "2025", "2026"]

# CCF short → external dataset keys
ALIASES = {
    "SIGKDD": ["KDD", "SIGKDD"],
    "KDD": ["KDD", "SIGKDD"],
    "ACM MM": ["ACM MM", "MM", "ACMMM"],
    "MM": ["ACM MM", "MM"],
    "IEEE VIS": ["VIS", "IEEE VIS"],
    "VIS": ["VIS", "IEEE VIS"],
    "S&P": ["IEEE S&P", "S&P", "SP", "Oakland"],
    "IEEE S&P": ["IEEE S&P", "S&P"],
    "FSE": ["FSE", "FSE-ESEC", "ESEC/FSE", "ESEC-FSE"],
    "ESEC/FSE": ["FSE", "FSE-ESEC", "ESEC/FSE"],
    "CODES+ISSS": ["CODES-ISSS", "CODES+ISSS"],
    "NeurIPS": ["NeurIPS", "NIPS"],
    "NIPS": ["NeurIPS", "NIPS"],
    "WWW": ["WWW", "TheWebConf", "The Web Conference"],
    "SIGGRAPH Asia": ["SIGGRAPH Asia", "SIGGRAPHASIA"],
    "USENIX Security": ["USENIX Security", "Security"],
    "PPoPP": ["PPoPP", "PPOPP"],
    "ACM SIGOPS ATC": ["USENIX ATC", "ATC", "USENIXATC"],
    "USENIX ATC": ["USENIX ATC", "ATC", "ACM SIGOPS ATC"],
    "ATC": ["USENIX ATC", "ATC"],
    "ICWSM": ["ICWSM"],
    "RecSys": ["RecSys"],
    "SIGGRAPH": ["SIGGRAPH"],
    "UbiComp": ["UbiComp", "UbiComp/ISWC"],
    "HOT CHIPS": ["HotChips", "HOT CHIPS", "Hot Chips"],
    "Performance": ["Performance", "SIGMETRICS"],
}

FIELD_FOCUS = {
    "计算机体系结构/并行与分布计算/存储系统": "体系结构、并行/分布式、存储与高性能计算系统。",
    "计算机网络": "网络协议、无线/移动、数据中心网络与测量。",
    "网络与信息安全": "密码、系统/网络安全、隐私与可信。",
    "软件工程/系统软件/程序设计语言": "程序语言、软件工程、操作系统与验证。",
    "数据库/数据挖掘/内容检索": "数据系统、挖掘、检索推荐与知识管理。",
    "计算机科学理论": "算法、复杂度、理论计算机科学。",
    "计算机图形学与多媒体": "图形、视觉、多媒体与多模态内容。",
    "人工智能": "机器学习、视觉、NLP、规划与综合 AI。",
    "人机交互与普适计算": "人机交互、普适计算、协作与社会计算。",
    "交叉/综合/新兴": "交叉与新兴方向（Web、实时、机器人、生物信息等）。",
}

FIELD_DIRS = {
    "计算机体系结构/并行与分布计算/存储系统": [
        {"name": "体系结构 / 微架构", "share": "常见"},
        {"name": "并行与分布式", "share": "常见"},
        {"name": "存储 / 文件系统", "share": "常见"},
    ],
    "计算机网络": [
        {"name": "网络系统与协议", "share": "常见"},
        {"name": "无线 / 移动 / IoT", "share": "常见"},
        {"name": "测量与性能", "share": "中"},
    ],
    "网络与信息安全": [
        {"name": "系统 / 网络安全", "share": "常见"},
        {"name": "密码学", "share": "常见"},
        {"name": "隐私 / 可信", "share": "中"},
    ],
    "软件工程/系统软件/程序设计语言": [
        {"name": "软件工程 / 测试", "share": "常见"},
        {"name": "程序语言 / 编译", "share": "常见"},
        {"name": "系统软件", "share": "中"},
    ],
    "数据库/数据挖掘/内容检索": [
        {"name": "数据系统", "share": "常见"},
        {"name": "挖掘 / 图 / 推荐", "share": "常见"},
        {"name": "检索与知识", "share": "中"},
    ],
    "计算机科学理论": [
        {"name": "算法与复杂度", "share": "常见"},
        {"name": "理论 CS", "share": "常见"},
    ],
    "计算机图形学与多媒体": [
        {"name": "图形 / 渲染 / 几何", "share": "常见"},
        {"name": "视觉 / 多媒体", "share": "常见"},
        {"name": "多模态内容", "share": "中"},
    ],
    "人工智能": [
        {"name": "机器学习", "share": "常见"},
        {"name": "视觉 / NLP", "share": "常见"},
        {"name": "规划 / 推理 / agent", "share": "中"},
    ],
    "人机交互与普适计算": [
        {"name": "HCI / 交互", "share": "常见"},
        {"name": "普适 / 可穿戴", "share": "中"},
        {"name": "协作 / 社会计算", "share": "中"},
    ],
    "交叉/综合/新兴": [
        {"name": "交叉应用", "share": "常见"},
        {"name": "新兴系统 / Web / 机器人等", "share": "视具体会"},
    ],
}

KEYWORD_FOCUS = [
    (r"vision|visual|image|pattern recognition|CVPR|ICCV|ECCV", "计算机视觉：识别/检测/分割/生成等。"),
    (r"natural language|computational linguistics|ACL|EMNLP|NAACL|COLING", "自然语言处理与计算语言学。"),
    (r"machine learning|neural information|learning representations|ICML|NeurIPS|ICLR", "机器学习 / 深度学习方法与理论。"),
    (r"data mining|knowledge discovery|KDD|ICDM", "数据挖掘与知识发现。"),
    (r"information retrieval|SIGIR|search", "信息检索、搜索与排序。"),
    (r"database|data engineering|VLDB|SIGMOD|ICDE", "数据库与数据工程系统。"),
    (r"security|crypto|privacy|NDSS|CCS", "安全、密码与隐私。"),
    (r"network|INFOCOM|SIGCOMM|NSDI|MobiCom", "计算机网络与移动网络。"),
    (r"software engineering|ICSE|ASE|ISSTA|FSE", "软件工程：分析、测试、自动化。"),
    (r"programming language|PLDI|POPL|OOPSLA|ICFP", "程序设计语言与编译。"),
    (r"operating system|SOSP|OSDI|EuroSys", "操作系统与系统软件。"),
    (r"computer architecture|ISCA|MICRO|HPCA|ASPLOS", "计算机体系结构。"),
    (r"robot|ICRA|IROS|RSS", "机器人：感知、规划与控制。"),
    (r"graphic|SIGGRAPH|rendering|Eurographics", "计算机图形学。"),
    (r"multimedia|ACM MM", "多媒体与多模态。"),
    (r"human.computer|CHI|UIST|CSCW|UbiComp|interaction", "人机交互与协作。"),
    (r"medical|MICCAI|biomedical|ISMB|RECOMB|bioinformatics", "生物医学计算 / 医学影像 / 生物信息。"),
    (r"real.time|RTSS|RTAS|embedded", "实时与嵌入式系统。"),
    (r"verification|CAV|TACAS|formal", "形式化方法与验证。"),
    (r"theory|STOC|FOCS|SODA|ICALP|LICS", "理论计算机科学。"),
    (r"web|WWW|WSDM", "Web、社交与网络数据挖掘。"),
    (r"virtual reality|VR|VIS|visuali[sz]ation", "可视化 / 虚拟现实。"),
]


def get(url: str) -> bytes:
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=60) as r:
        return r.read()


def empty_year() -> dict:
    return {
        "accepted": None,
        "submitted": None,
        "notes": "",
        "directions": [],
        "papers_index": "",
    }


def norm_key(s: str) -> str:
    return re.sub(r"[^a-z0-9]+", "", (s or "").lower())


def candidate_keys(short: str) -> list[str]:
    keys = [short] + ALIASES.get(short, [])
    # also stripped variants
    out = []
    seen = set()
    for k in keys:
        for v in (k, k.replace(" ", ""), k.replace("&", "")):
            if v and v not in seen:
                seen.add(v)
                out.append(v)
    return out


def focus_from_full(full: str, field: str) -> str:
    blob = full or ""
    for pat, note in KEYWORD_FOCUS:
        if re.search(pat, blob, re.I):
            return note
    return FIELD_FOCUS.get(field, "见 CCF 专业领域与会议全称。")


def download_openaccept() -> dict[str, dict]:
    """Load cached OpenAccept JSONs; optionally fetch missing with a short timeout budget."""
    OA_DIR.mkdir(parents=True, exist_ok=True)
    by_name: dict[str, dict] = {}

    def ingest(obj: dict, path: str = "") -> None:
        obj = dict(obj)
        obj["_path"] = path
        name = obj.get("name") or Path(path).stem
        for key in filter(None, [name, Path(path).stem, norm_key(name), norm_key(Path(path).stem)]):
            by_name[key] = obj

    # always load cache first
    for cache in OA_DIR.glob("*.json"):
        try:
            obj = json.loads(cache.read_text(encoding="utf-8"))
            ingest(obj, cache.name.replace("__", "/"))
        except Exception:
            continue
    print(f"OpenAccept from cache: {len(list(OA_DIR.glob('*.json')))} files")

    # try to refresh path list + fill gaps, but don't block forever
    try:
        if not OA_PATHS.exists():
            tree = json.loads(
                get(
                    "https://api.github.com/repos/OpenAccept/openaccept-metadata/git/trees/master?recursive=1"
                ).decode()
            )
            paths = [
                t["path"]
                for t in tree.get("tree", [])
                if t["path"].endswith(".json") and not t["path"].startswith(".github")
            ]
            OA_PATHS.write_text(json.dumps(paths, indent=2), encoding="utf-8")
        paths = json.loads(OA_PATHS.read_text(encoding="utf-8"))
    except Exception as e:
        print("skip OA path refresh:", e)
        return by_name

    missing = []
    for path in paths:
        cache = OA_DIR / path.replace("/", "__")
        if not cache.exists():
            missing.append(path)

    # fetch remaining missing (URL-encoded); all should be cached after one full pass
    for i, path in enumerate(missing):
        cache = OA_DIR / path.replace("/", "__")
        url = (
            "https://raw.githubusercontent.com/OpenAccept/openaccept-metadata/master/"
            + urllib.parse.quote(path)
        )
        try:
            raw = get(url)
            cache.write_bytes(raw)
            ingest(json.loads(raw.decode("utf-8")), path)
            print("ok", path)
        except Exception as e:
            print("OA fail", path, e)
        if (i + 1) % 20 == 0:
            print(f"  OA fetched {i+1}/{len(missing)}")
    print(f"OpenAccept index keys: {len(by_name)}")
    return by_name


def load_cs_stats() -> dict[str, dict]:
    if not CS_STATS.exists():
        raw = get(
            "https://raw.githubusercontent.com/Xovee/cs-conf-stats/main/data/conf.json"
        )
        CS_STATS.write_bytes(raw)
    data = json.loads(CS_STATS.read_text(encoding="utf-8"))
    by = {}
    for c in data.get("conferences") or []:
        series = c.get("series")
        if not series or series == "Template":
            continue
        by[series] = c
        by[norm_key(series)] = c
    print(f"CS Conf Stats loaded: {len(data.get('conferences') or [])} series")
    return by


def year_from_oa(obj: dict, year: int) -> dict | None:
    for y in obj.get("yearly_data") or []:
        if y.get("year") == year and y.get("accepted") is not None:
            return {
                "accepted": y.get("accepted"),
                "submitted": y.get("submitted"),
                "notes": f"来源 OpenAccept（{obj.get('name') or obj.get('_path')}）。",
                "directions": [],
                "papers_index": obj.get("dblp") or "",
            }
    return None


def year_from_cs(obj: dict, year: int) -> dict | None:
    for y in obj.get("yearly_data") or []:
        if y.get("year") != year:
            continue
        mt = y.get("main_track") or {}
        acc, sub = mt.get("num_acc"), mt.get("num_sub")
        if acc is None:
            continue
        return {
            "accepted": acc,
            "submitted": sub,
            "notes": f"来源 CS Conf Stats（{obj.get('series')}）。",
            "directions": [],
            "papers_index": "",
        }
    return None


def lookup(maps: list[dict], short: str):
    for key in candidate_keys(short):
        for m in maps:
            if key in m:
                return m[key]
            nk = norm_key(key)
            if nk in m:
                return m[nk]
    return None


def merge_year(dst: dict, src: dict | None, prefer_existing: bool) -> dict:
    if not src:
        return dst
    out = deepcopy(dst)
    for k in ("accepted", "submitted", "notes", "papers_index"):
        if prefer_existing and out.get(k) not in (None, ""):
            continue
        if src.get(k) not in (None, ""):
            out[k] = src[k]
    if (not prefer_existing or not out.get("directions")) and src.get("directions"):
        out["directions"] = src["directions"]
    return out


def main() -> None:
    ccf = json.loads(CCF_JSON.read_text(encoding="utf-8"))
    conferences = ccf["conferences"]
    old = {}
    if ENRICH.exists():
        old = json.loads(ENRICH.read_text(encoding="utf-8"))
    old_venues = old.get("venues") or {}

    print("Downloading OpenAccept…")
    oa = download_openaccept()
    cs = load_cs_stats()
    manual = {}
    if MANUAL.exists():
        manual = (json.loads(MANUAL.read_text(encoding="utf-8")).get("venues") or {})
        print(f"manual stats venues: {len(manual)}")
    dblp_counts = {}
    if DBLP_CACHE.exists():
        dblp_counts = json.loads(DBLP_CACHE.read_text(encoding="utf-8"))
        print(f"dblp year counts: {len(dblp_counts)}")
    stream_map = {}
    sm_path = DATA / "dblp_stream_map.json"
    if sm_path.exists():
        stream_map = json.loads(sm_path.read_text(encoding="utf-8"))
    else:
        # bootstrap from fill script seeds
        try:
            from fill_dblp_counts import SEED_STREAMS  # type: ignore

            stream_map = dict(SEED_STREAMS)
        except Exception:
            pass

    venues: dict[str, dict] = {}
    stats_hit = 0
    for c in conferences:
        short = c["short"]
        curated = deepcopy(old_venues.get(short) or {})
        # composite key for duplicate shorts
        composite = f"{short}|{c['field']}"
        if composite in old_venues:
            curated = deepcopy(old_venues[composite])
        # alias curated
        if not curated:
            for a in ALIASES.get(short, []):
                if a in old_venues:
                    curated = deepcopy(old_venues[a])
                    break

        oa_obj = lookup([oa], short)
        cs_obj = lookup([cs], short)
        # avoid wrong merge for known ambiguous shorts
        if short == "FSE" and "软件" not in c["field"]:
            # Fast Software Encryption ≠ Foundations of Software Engineering
            if cs_obj and (cs_obj.get("series") == "FSE"):
                cs_obj = None
            if oa_obj and "software engineering" in (oa_obj.get("full_name") or "").lower():
                oa_obj = None
        if short == "SEC":
            # Edge Computing vs IFIP Security — do not auto-attach generic SEC stats
            oa_obj = None
            cs_obj = None

        focus = (
            curated.get("focus")
            or (focus_from_full(c["full"], c["field"]) if c.get("full") else None)
            or FIELD_FOCUS.get(c["field"], "")
        )
        # enrich focus with CS disciplines if generic
        if cs_obj and "见 CCF" in focus:
            meta = cs_obj.get("metadata") or {}
            discs = (meta.get("main_discipline") or []) + (meta.get("other_discipline") or [])
            if discs:
                focus = "；".join(discs[:4]) + "。"

        dblp = (
            curated.get("dblp")
            or (oa_obj or {}).get("dblp")
            or (
                f"https://dblp.org/db/{stream_map[short]}/index.html"
                if short in stream_map
                else f"https://dblp.org/search?q={short}"
            )
        )
        papers_index = (
            curated.get("papers_index")
            or (oa_obj or {}).get("dblp")
            or dblp
        )

        stats = {y: empty_year() for y in YEARS}
        # curated first
        for y, ydata in (curated.get("stats") or {}).items():
            ys = str(y)
            if ys not in stats:
                stats[ys] = empty_year()
            stats[ys] = merge_year(stats[ys], ydata, prefer_existing=False)

        # manual overlay (second priority after curated fields already in curated)
        manual_v = manual.get(short) or manual.get(composite) or {}
        if manual_v:
            if manual_v.get("focus"):
                focus = manual_v["focus"]
            if manual_v.get("papers_index"):
                papers_index = manual_v["papers_index"]
            if manual_v.get("dblp"):
                dblp = manual_v["dblp"]
            for y, ydata in (manual_v.get("stats") or {}).items():
                ys = str(y)
                if ys not in stats:
                    stats[ys] = empty_year()
                # manual fills gaps only
                stats[ys] = merge_year(stats[ys], ydata, prefer_existing=True)

        for year in range(2020, 2027):
            ys = str(year)
            if stats[ys].get("accepted") is None and oa_obj:
                stats[ys] = merge_year(stats[ys], year_from_oa(oa_obj, year), False)
            if stats[ys].get("accepted") is None and cs_obj:
                stats[ys] = merge_year(stats[ys], year_from_cs(cs_obj, year), False)
            # DBLP indexed count as last resort (proxy for accepted papers)
            dc_entry = dblp_counts.get(short) or dblp_counts.get(norm_key(short))
            if stats[ys].get("accepted") is None and dc_entry:
                dc = (dc_entry or {}).get(ys)
                if isinstance(dc, dict) and dc.get("accepted"):
                    stats[ys] = merge_year(
                        stats[ys],
                        {
                            "accepted": dc["accepted"],
                            "submitted": dc.get("submitted"),
                            "notes": dc.get("notes")
                            or "DBLP 当年 indexed 论文数（近似录用规模，含短文/workshop 时可能偏高）。",
                            "directions": [],
                            "papers_index": dc.get("papers_index") or dblp,
                        },
                        False,
                    )

        # directions default for recent years + any year that has numbers
        years_to_fill = sorted(set(RECENT_YEARS) | {y for y, s in stats.items() if s.get("accepted") is not None})
        for ys in years_to_fill:
            if ys not in stats:
                continue
            if not stats[ys].get("directions"):
                if cs_obj:
                    meta = cs_obj.get("metadata") or {}
                    discs = meta.get("main_discipline") or []
                    oth = meta.get("other_discipline") or []
                    dirs = [{"name": d, "share": "主"} for d in discs[:3]]
                    dirs += [{"name": d, "share": "相关"} for d in oth[:3]]
                    if dirs:
                        stats[ys]["directions"] = dirs
                    else:
                        stats[ys]["directions"] = deepcopy(FIELD_DIRS.get(c["field"], []))
                else:
                    stats[ys]["directions"] = deepcopy(FIELD_DIRS.get(c["field"], []))

            if stats[ys].get("accepted") is None and ys in RECENT_YEARS:
                older = [
                    f"{y}:{stats[y]['accepted']}"
                    for y in sorted(stats.keys(), reverse=True)
                    if y < ys and stats[y].get("accepted") is not None
                ]
                note = stats[ys].get("notes") or ""
                if older and (
                    not note
                    or "尚未汇总" in note
                    or "请用右侧" in note
                ):
                    stats[ys]["notes"] = f"该年公开录用数未汇总；近年参考 {', '.join(older[:3])}。"
                elif not note:
                    stats[ys]["notes"] = (
                        "公开录用统计尚未汇总；请用右侧论文列表 / DBLP 检索当年录用论文。"
                    )
            if not stats[ys].get("papers_index"):
                stats[ys]["papers_index"] = papers_index

        has_num = any(stats[y].get("accepted") is not None for y in stats)
        has_recent = any(stats[y].get("accepted") is not None for y in RECENT_YEARS)
        if has_num:
            stats_hit += 1
        status = curated.get("status") or manual_v.get("status")
        if not status:
            status = "ready" if has_recent else ("profiling" if has_num else "listed")
        elif status == "listed" and has_recent:
            status = "ready"
        elif status == "listed" and has_num:
            status = "profiling"

        venues[short] = {
            "focus": focus,
            "papers_index": papers_index,
            "dblp": dblp,
            "status": status,
            "stats": stats,
        }
        # also store composite for ambiguous shorts
        if short in {"FSE", "SEC"}:
            venues[composite] = deepcopy(venues[short])
            # specialize focus for ambiguous names
            if short == "FSE" and "软件" in c["field"]:
                venues[composite]["focus"] = "软件工程基础（FSE）；分析、测试、自动化与实证 SE。"
            elif short == "FSE":
                venues[composite]["focus"] = "快速软件加密（对称密码）；密码算法设计与分析。"
                venues[composite]["status"] = "listed"
                for ys in venues[composite]["stats"]:
                    venues[composite]["stats"][ys]["accepted"] = None
                    venues[composite]["stats"][ys]["submitted"] = None
                    venues[composite]["stats"][ys]["notes"] = "与软件工程 FSE 同名不同会；录用统计勿混用。"
            if short == "SEC" and "安全" in c["field"]:
                venues[composite]["focus"] = "IFIP 信息安全会议；安全理论与应用。"
            elif short == "SEC":
                venues[composite]["focus"] = "边缘计算（SEC）；边缘系统、云边协同与边缘智能。"

    # preserve ccfddl / website / deadline fields from prior merge
    if old_venues:
        for k, ov in old_venues.items():
            if k not in venues or not isinstance(ov, dict):
                continue
            if ov.get("ccfddl") and not venues[k].get("ccfddl"):
                venues[k]["ccfddl"] = ov["ccfddl"]
            if ov.get("website") and not venues[k].get("website"):
                venues[k]["website"] = ov["website"]
            for ys, yold in (ov.get("stats") or {}).items():
                if ys not in venues[k]["stats"]:
                    continue
                for fld in ("deadline", "date", "place", "website"):
                    if yold.get(fld) and not venues[k]["stats"][ys].get(fld):
                        venues[k]["stats"][ys][fld] = yold[fld]

    payload = {
        "_meta": {
            "note": (
                "全量 enrichment：人工核验优先，其次 OpenAccept / CS Conf Stats / ccfddl；"
                "无公开录用数时用 DBLP indexed 篇数作规模近似。"
            ),
            "updated": __import__("datetime").date.today().isoformat(),
            "sources": [
                "data/ccf-enrichment.json (manual)",
                "https://github.com/OpenAccept/openaccept-metadata",
                "https://github.com/Xovee/cs-conf-stats",
                "https://github.com/ccfddl/ccf-deadlines",
                "DBLP year indexed counts (proxy)",
            ],
            "coverage": {
                "venues": len(venues),
                "with_acceptance_numbers": stats_hit,
            },
            "ccfddl": (old.get("_meta") or {}).get("ccfddl"),
        },
        "venues": venues,
    }
    ENRICH.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
    print(json.dumps(payload["_meta"]["coverage"], ensure_ascii=False, indent=2))
    print("wrote", ENRICH)


if __name__ == "__main__":
    main()
