# -*- coding: utf-8 -*-
"""Assign tier tags: featured | more | portal."""
from __future__ import annotations
import json
from pathlib import Path
import importlib.util

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "data" / "imaging-datasets.js"

# load curated urls/names from upsert script
spec = importlib.util.spec_from_file_location(
    "upsert", ROOT / "tools" / "upsert_curated_manuscript_sets.py"
)
mod = importlib.util.module_from_spec(spec)
spec.loader.exec_module(mod)

feat_urls = set()
feat_names = set()
for *_, items in mod.CURATED:
    for x in items:
        u = mod.norm_url(x.get("url") or "")
        n = (x.get("name") or "").strip().lower()
        if u:
            feat_urls.add(u)
        if n:
            feat_names.add(n)


def is_portal_sec(c: dict) -> bool:
    cid = c.get("id") or ""
    name = c.get("name_zh") or ""
    return "portal" in cid or "门户" in name or "索引" in (c.get("modality") or "")


def is_junk_name(name: str) -> bool:
    n = (name or "").strip().lower()
    return n in {
        "github",
        "kaggle",
        "tcia",
        "grand challenge",
        "codalab",
        "codabench",
        "project homepage",
        "papers with code · medical",
        "hugging face datasets",
        "figshare / dryad",
    } or "awesome-medical-dataset" in n


def main():
    t = OUT.read_text(encoding="utf-8")
    data = json.loads(t[t.index("{") : t.rindex("}") + 1])
    counts = {"featured": 0, "more": 0, "portal": 0}

    for d in data["departments"]:
        for c in d.get("children") or []:
            portal_sec = is_portal_sec(c)
            for x in c.get("datasets") or []:
                note = (x.get("note") or "").lower()
                name = x.get("name") or ""
                u = mod.norm_url(x.get("url") or "")
                if portal_sec or is_junk_name(name) or "awesome-medical-dataset" in note:
                    tier = "portal"
                elif u in feat_urls or name.strip().lower() in feat_names:
                    tier = "featured"
                elif "成稿" in (x.get("note") or "") or "主集" in (x.get("note") or ""):
                    tier = "featured"
                else:
                    tier = "more"
                x["tier"] = tier
                counts[tier] += 1

    data["meta"]["updated"] = "2026-08-11"
    data["meta"]["tiers"] = counts
    data["meta"]["note"] = "含 featured/more/portal 分层；默认展示成稿推荐"
    data["categories"] = []
    for d in data["departments"]:
        for c in d.get("children") or []:
            data["categories"].append({**c, "department_id": d["id"], "department_zh": d["name_zh"]})

    OUT.write_text(
        "/** 医学影像公开数据集目录 — 科室 → 二级标题 → 数据集。 */\n"
        + "window.IMAGING_DATASETS = "
        + json.dumps(data, ensure_ascii=False, indent=2)
        + ";\n",
        encoding="utf-8",
    )
    print(counts)


if __name__ == "__main__":
    main()
