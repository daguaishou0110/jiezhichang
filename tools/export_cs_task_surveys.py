# -*- coding: utf-8 -*-
"""Export fine-grained Excel surveys → jiezhichang/data/cs-task-surveys.{json,js}."""
from __future__ import annotations

import json
import re
from collections import defaultdict
from pathlib import Path

import openpyxl

FINE = Path(r"c:\Users\13594\Desktop\医学期刊\调研\会议辅导_细粒度A会调研_2025-2026")
TAX = FINE / "00_细粒度任务清单.json"
DST = Path(r"c:\Users\13594\Desktop\医学期刊\jiezhichang\data")

L1_SLUG = {
    "计算机视觉": "cv",
    "自然语言处理": "nlp",
    "图神经网络": "gnn",
    "多模态": "mm",
    "机器学习与数据挖掘": "ml",
    "交叉挂载": "x",
}


def safe_id(*parts: str) -> str:
    s = "__".join(parts)
    s = re.sub(r"[^\w\u4e00-\u9fff\-]+", "_", s)
    return s.strip("_")


def parse_filename(name: str) -> tuple[str, str, str] | None:
    # 调研文献汇总表_2025-2026A会_{l1}_{l2}_{leaf}.xlsx
    m = re.match(r"调研文献汇总表_2025-2026A会_(.+)\.xlsx$", name)
    if not m:
        return None
    rest = m.group(1)
    # Prefer tax match later; heuristic split: known l1 prefixes
    for l1 in sorted(L1_SLUG.keys(), key=len, reverse=True):
        if rest.startswith(l1 + "_"):
            rem = rest[len(l1) + 1 :]
            # rem = l2_leaf — l2 may contain underscores rarely; use tax
            return l1, rem, ""
    return None


def load_sheet(path: Path) -> list[dict]:
    wb = openpyxl.load_workbook(path, read_only=True, data_only=True)
    ws = wb.active
    rows = list(ws.iter_rows(values_only=True))
    if not rows:
        return []
    header = [str(h or "").strip() for h in rows[0]]
    out = []
    for row in rows[1:]:
        if not row or all(c is None or str(c).strip() == "" for c in row):
            continue
        d = {header[i]: (row[i] if i < len(row) else None) for i in range(len(header))}
        title = str(d.get("论文标题") or "").strip()
        if not title:
            continue
        out.append(
            {
                "title": title,
                "venue": str(d.get("发表会议/期刊") or "").strip(),
                "year": d.get("年份"),
                "task": str(d.get("研究任务") or "").strip(),
                "method": str(d.get("核心方法") or "").strip(),
                "dataset": str(d.get("数据集") or "").strip(),
                "metric": str(d.get("评价指标") or "").strip(),
                "result": str(d.get("核心结果") or "").strip(),
                "code": str(d.get("是否有代码") or "").strip(),
                "note": str(d.get("备注") or "").strip(),
                "url": str(d.get("备注") or "").strip()
                if str(d.get("备注") or "").startswith("http")
                else (
                    str(d.get("备注") or "").strip()
                    if "http" in str(d.get("备注") or "")
                    else ""
                ),
            }
        )
        # Prefer explicit URL in 备注 if it contains http
        note = str(d.get("备注") or "")
        m = re.search(r"https?://\S+", note)
        if m:
            out[-1]["url"] = m.group(0).rstrip(")。,;")
    return out


def main() -> None:
    tax = []
    if TAX.is_file():
        tax = json.loads(TAX.read_text(encoding="utf-8"))
    tax_map = {(t["l1"], t["l2"], t["leaf"]): t for t in tax}

    # filename → (l1,l2,leaf) via tax leaf unique names under l1_l2
    by_leaf_key = {}
    for t in tax:
        by_leaf_key[(t["l1"], t["l2"], t["leaf"])] = t

    tasks = []
    papers_by_id = {}
    tree = defaultdict(lambda: defaultdict(list))

    files = sorted(FINE.glob("调研文献汇总表_2025-2026A会_*.xlsx"))
    matched = 0
    for f in files:
        stem = f.stem.replace("调研文献汇总表_2025-2026A会_", "")
        hit = None
        for (l1, l2, leaf), t in by_leaf_key.items():
            prefix = f"{l1}_{l2}_{leaf}"
            # filenames may have sanitized chars
            pref_safe = re.sub(r'[\\/:*?"<>|]+', "-", prefix)
            if stem == pref_safe or stem == prefix:
                hit = (l1, l2, leaf)
                break
        if not hit:
            # fallback: longest prefix match
            cands = []
            for (l1, l2, leaf) in by_leaf_key:
                pref = f"{l1}_{l2}_"
                if stem.startswith(pref):
                    cands.append((len(pref), l1, l2, stem[len(pref) :]))
            if cands:
                cands.sort(reverse=True)
                _, l1, l2, leaf = cands[0]
                hit = (l1, l2, leaf)
        if not hit:
            print("skip unmatched", f.name)
            continue

        l1, l2, leaf = hit
        papers = load_sheet(f)
        tid = safe_id(L1_SLUG.get(l1, l1), l2, leaf)
        task = {
            "id": tid,
            "l1": l1,
            "l1_slug": L1_SLUG.get(l1, l1),
            "l2": l2,
            "leaf": leaf,
            "n": len(papers),
        }
        tasks.append(task)
        papers_by_id[tid] = papers
        tree[l1][l2].append({"id": tid, "leaf": leaf, "n": len(papers)})
        matched += 1

    # sort leaves in tree
    tree_out = {}
    for l1, secs in tree.items():
        tree_out[l1] = {
            "slug": L1_SLUG.get(l1, l1),
            "l2": {
                l2: sorted(leaves, key=lambda x: (-x["n"], x["leaf"]))
                for l2, leaves in secs.items()
            },
        }

    payload = {
        "meta": {
            "title": "会议辅导 · 任务调研",
            "years": "2025–2026",
            "scope": "CCF A 会为主（CVPR/ICCV/NeurIPS/ICML/ICLR/ACL/EMNLP/KDD/WWW 等）",
            "disclaimer": "支撑定题与对齐会刊；不承诺中稿。方法/结果字段多为检索占位，细读后补全。",
            "task_count": len(tasks),
            "paper_rows": sum(t["n"] for t in tasks),
        },
        "tree": tree_out,
        "tasks": sorted(tasks, key=lambda t: (t["l1"], t["l2"], -t["n"], t["leaf"])),
        "papers": papers_by_id,
    }

    DST.mkdir(parents=True, exist_ok=True)
    json_path = DST / "cs-task-surveys.json"
    js_path = DST / "cs-task-surveys.js"
    text = json.dumps(payload, ensure_ascii=False, indent=2)
    json_path.write_text(text, encoding="utf-8")
    js_path.write_text(
        "window.CS_TASK_SURVEYS = " + text + ";\n", encoding="utf-8"
    )
    print(
        f"matched={matched} tasks={len(tasks)} papers={payload['meta']['paper_rows']} -> {json_path}"
    )


if __name__ == "__main__":
    main()
