# -*- coding: utf-8 -*-
"""Merge agri YOLO medical catalog (_gen_med_catalog_links.py) into imaging-datasets.js."""
from __future__ import annotations

import ast
import json
import re
from pathlib import Path

AGRI = Path(r"D:\hyf\freelance-work\niumayuan\2026\农业yolo数据集")
SRC = AGRI / "docs" / "_gen_med_catalog_links.py"
OUT = Path(__file__).resolve().parents[1] / "data" / "imaging-datasets.js"
CUR = OUT

# agri dept prefix → jiezhichang department id（名称须与 _gen_med_catalog_links.py 完全一致）
DEPT_MAP = {
    "消化内科·内镜": "gi",
    "消化内科·微生物组": "gi",
    "消化内科·病理": "pathology-lab",
    "消化内科·影像组学": "gi",
    "肝胆胰外科·肝病": "hepatobiliary",
    "呼吸与危重症·胸外": "respiratory",
    "心血管内科·心外": "cardiology",
    "神经内外科": "neurology",
    "眼科": "ophthalmology",
    "皮肤科": "dermatology",
    "乳腺外科·乳腺影像": "breast",
    "内分泌·代谢": "thyroid",
    "骨科·脊柱": "orthopedics",
    "泌尿外科·肾内": "urology",
    "肾内科": "urology",
    "妇产科·生殖": "obgyn",
    "口腔科·口腔颌面": "stomatology",
    "病理科": "pathology-lab",
    "耳鼻喉科·头颈": "respiratory",
    "急诊·重症医学": "respiratory",
    "风湿免疫科": "orthopedics",
    "感染科": "respiratory",
    "核医学·PET": "neurology",
    "放射科·影像平台": "hepatobiliary",
    "平台聚合·跨科室": "hepatobiliary",
    "超声科": "hepatobiliary",
    "血液·肿瘤内科": "pathology-lab",
    "普外·介入·手术": "hepatobiliary",
    "检验科·临床实验室": "pathology-lab",
    "儿科": "obgyn",
}

# agri dept → preferred secondary id under mapped dept (create if missing)
SECONDARY_MAP = {
    "消化内科·内镜": "colorectal-polyp-det",
    "消化内科·微生物组": "crc-microbiome",
    "消化内科·病理": "pathology-crc",
    "消化内科·影像组学": "gi-radiomics",
    "肝胆胰外科·肝病": "liver-ct-tumor",
    "呼吸与危重症·胸外": "chest-xray",
    "心血管内科·心外": "coronary-xca",
    "神经内外科": "brain-tumor-mri",
    "眼科": "fundus-lesion",
    "皮肤科": "skin-lesion",
    "乳腺外科·乳腺影像": "breast-mammo",
    "内分泌·代谢": "thyroid-us",
    "骨科·脊柱": "fracture-general",
    "泌尿外科·肾内": "kidney-tumor",
    "肾内科": "kidney-tumor",
    "妇产科·生殖": "cervix",
    "口腔科·口腔颌面": "oral-opg",
    "病理科": "pathology-nuclei",
    "耳鼻喉科·头颈": "bronchoscopy",
    "急诊·重症医学": "lung-us-bline",
    "风湿免疫科": "knee",
    "感染科": "chest-xray",
    "核医学·PET": "brain-tumor-mri",
    "放射科·影像平台": "abdomen-ct-lesion",
    "平台聚合·跨科室": "abdomen-ct-lesion",
    "超声科": "gallbladder-us",
    "血液·肿瘤内科": "blood-cell",
    "普外·介入·手术": "abdomen-ct-lesion",
    "检验科·临床实验室": "pathology-nuclei",
    "儿科": "fetal-us",
}

SECONDARY_META = {
    "crc-microbiome": ("二级：结直肠 · 粪便菌群（非影像）", "宏基因组", "分类 / 风险评分", "partial"),
    "pathology-crc": ("二级：结直肠病理 · patch / WSI", "病理切片", "分类 / 分割", "partial"),
    "gi-radiomics": ("二级：直肠 / 消化道 · 影像组学入口", "MRI / CT", "组学 / 分类", "partial"),
}


def kind_from_task(task: str) -> str:
    t = (task or "").lower()
    if "det" in t:
        return "detection"
    if "seg" in t:
        return "seg→box"
    if "cls" in t or "tab" in t or "surv" in t:
        return "classification"
    if "video" in t or "multi" in t:
        return "mixed"
    return "mixed"


def parse_agri_rows(text: str) -> list[tuple]:
    pat = re.compile(r"^add\((.*)\)$", re.M)
    rows = []
    for m in pat.finditer(text):
        args = list(ast.literal_eval("(" + m.group(1) + ")"))
        while len(args) < 11:
            args.append("")
        rows.append(tuple(args[:11]))
    return rows


def load_current() -> dict:
    t = CUR.read_text(encoding="utf-8")
    return json.loads(t[t.index("{") : t.rindex("}") + 1])


def norm_url(u: str) -> str:
    return (u or "").strip().rstrip("/").lower()


def merge() -> dict:
    rows = parse_agri_rows(SRC.read_text(encoding="utf-8"))
    data = load_current()
    depts = {d["id"]: d for d in data["departments"]}

    # index existing urls
    seen: set[str] = set()
    for d in data["departments"]:
        for c in d.get("children") or []:
            for x in c.get("datasets") or []:
                u = norm_url(x.get("url"))
                if u:
                    seen.add(u)

    added = 0
    skipped_no_map = 0
    skipped_dup = 0
    skipped_bad = 0

    for dept_zh, write, name, modality, task, size, access, url, local, note, repo in rows:
        dept_id = DEPT_MAP.get(dept_zh)
        if not dept_id or dept_id not in depts:
            skipped_no_map += 1
            continue
        url = (url or "").strip()
        if not url.startswith("http"):
            skipped_bad += 1
            continue
        nu = norm_url(url)
        if nu in seen:
            skipped_dup += 1
            continue

        sec_id = SECONDARY_MAP.get(dept_zh)
        children = depts[dept_id].setdefault("children", [])
        child = next((c for c in children if c.get("id") == sec_id), None)
        if child is None and sec_id in SECONDARY_META:
            title, mod, tsk, st = SECONDARY_META[sec_id]
            child = {
                "id": sec_id,
                "name_zh": title,
                "modality": mod,
                "task": tsk,
                "status": st,
                "local": repo if repo and repo != "—" else "",
                "datasets": [],
                "todo": "",
            }
            children.append(child)
        if child is None:
            # fallback: first child of dept
            if not children:
                skipped_no_map += 1
                continue
            child = children[0]

        # refine routing by modality / name keywords
        hints = f"{modality}|{name}|{note}|{task}".lower()
        best = None
        score = -1

        def consider(cid_sub: str, zh_sub: str, keys: tuple[str, ...], w: int = 10) -> None:
            nonlocal best, score
            for c in children:
                cid = c.get("id", "")
                nz = c.get("name_zh", "")
                if cid_sub and cid_sub not in cid and zh_sub not in nz:
                    continue
                if any(k in hints for k in keys):
                    if w > score:
                        best, score = c, w

        consider("capsule", "胶囊", ("胶囊", "capsule"), 20)
        consider("esophagus", "食管", ("食管", "barrett", "oesophag", "esophag"), 18)
        consider("colorectal", "息肉", ("polyp", "息肉", "colon", "kvasir-seg", "cvc-", "etis", "polypgen"), 16)
        consider("gastroscopy", "胃镜", ("gastro", "胃镜", "hyperkvasir", "cholec"), 14)
        consider("breast-us", "乳腺超声", ("busi", "bus-bra", "oasbud", "breast ultrasound", "乳腺超声"), 18)
        consider("breast-mammo", "钼靶", ("mammo", "ddsm", "inbreast", "钼靶"), 16)
        consider("lung-ct", "肺 CT", ("luna", "lidc", "lndb", "nodule", "肺结节"), 16)
        consider("lung-us", "肺超声", ("pocus", "b-line", "lus-bald", "lung ultrasound", "肺超声"), 18)
        consider("chest-xray", "胸片", ("cxr", "chestx", "chexpert", "pneumonia", "胸片", "padchest", "mimic-cxr"), 14)
        consider("bronchoscopy", "支气管", ("bronch", "支气管"), 18)
        consider("echo", "心脏超声", ("echo", "camus", "心超", "echonet"), 18)
        consider("coronary", "冠脉", ("arcade", "xca", "coronary", "冠脉"), 16)
        consider("carotid", "颈动脉", ("carotid", "plaque", "颈动脉"), 18)
        consider("fundus-oct", "OCT", ("retouch", "octdl", "oct ", "octd"), 18)
        consider("fundus-vessel", "血管", ("drive", "stare", "chase", "fives", "hrf", "血管分割"), 16)
        consider("fundus-lesion", "眼底", ("idrid", "ddr", "aptos", "messidor", "糖网", "眼底"), 12)
        consider("gallbladder", "胆囊", ("gallbladder", "gbcu", "胆囊"), 18)
        consider("pancreas", "胰腺", ("pancreas", "胰腺"), 18)
        consider("liver", "肝", ("lits", "sltd", "liver", "ircad", "chaos", "肝"), 14)
        consider("cystoscopy", "膀胱", ("cysto", "膀胱"), 18)
        consider("cervix", "宫颈", ("cervi", "colpo", "mobileodt", "宫颈"), 18)
        consider("oral", "口腔", ("dental", "dentex", "opg", "口腔", "全景"), 18)
        consider("blood-cell", "血细胞", ("bccd", "wbc", "blood", "leukocyte", "血细胞"), 18)
        consider("fracture-wrist", "腕", ("wrist", "grazped", "腕"), 18)
        consider("fracture-spine", "脊柱", ("spine", "vertebral", "脊柱", "颈椎"), 16)
        consider("fracture-hip", "髋", ("hip", "髋"), 16)
        consider("fracture-general", "骨折", ("fracatlas", "fracture", "mura", "骨折"), 12)
        consider("knee", "膝", ("knee", "oai", "mrnet", "膝"), 16)
        consider("osteoporosis", "骨质疏松", ("lumos", "osteopor", "骨松"), 18)
        consider("endometriosis", "内膜异位", ("glenda", "endo-mri", "endometri", "内膜异位"), 18)
        consider("prostate", "前列腺", ("prostate", "pi-cai", "前列腺"), 18)
        consider("kidney-stone", "结石", ("stone", "结石"), 16)
        consider("kidney-tumor", "肾肿瘤", ("kits", "kidney", "肾"), 12)
        consider("brain-ct-bleed", "出血", ("hemorrh", "cq500", "ich", "bleed", "bhx", "出血"), 18)
        consider("brain-tumor", "脑肿瘤", ("brats", "br35h", "brain tumor", "脑肿瘤", "glioma"), 14)
        consider("thyroid", "甲状腺", ("thyroid", "tn3k", "ddti", "tn-scui", "甲状腺"), 18)
        consider("skin", "皮肤", ("isic", "ham10000", "itobos", "皮肤", "derm"), 16)
        consider("fetal", "胎儿", ("fetal", "hc18", "胎儿", "产科"), 16)
        consider("lymph", "淋巴结", ("lymph", "aln-", "淋巴结"), 16)
        consider("pathology", "病理", ("pannuke", "camelyon", "consep", "病理", "mitos"), 14)
        consider("crc-microbiome", "菌群", ("wirbel", "metagenom", "microbiome", "菌群", "cmd"), 20)
        consider("pathology-crc", "结直肠病理", ("nct-crc", "digestpath", "crc-val", "tcga-coad"), 18)

        if best is not None:
            child = best

        bits = [x for x in [size, access, note] if x]
        if local == "yes" and repo and repo != "—":
            bits.append(f"本地:{repo}")
        entry = {
            "name": name,
            "url": url,
            "note": " · ".join(bits)[:180],
            "license": "",
            "kind": kind_from_task(task),
        }
        child.setdefault("datasets", []).append(entry)
        seen.add(nu)
        added += 1

        # attach local Chinese folder hint when repo known
        if repo and repo != "—" and not child.get("local"):
            child["local"] = repo

    # attach Chinese dir locals from agri root for common mappings
    zh_local = {
        "colorectal-polyp-det": "结直肠",
        "gastroscopy-multi": "胃镜",
        "esophagus": "食管",
        "capsule": "胶囊内镜",
        "liver-ct-tumor": "肝",
        "pancreas-ct": "胰腺",
        "gallbladder-us": "胆囊",
        "abdomen-ct-lesion": "腹部CT",
        "lung-us-bline": "肺",
        "lung-ct-nodule": "肺",
        "chest-xray": "胸部",
        "bronchoscopy": "支气管镜",
        "coronary-xca": "心血管",
        "echo": "心脏超声",
        "carotid": "颈动脉",
        "breast-mammo": "乳腺",
        "breast-us": "乳腺超声",
        "thyroid-us": "甲状腺",
        "fundus-lesion": "眼底",
        "fundus-vessel": "眼底",
        "fundus-oct": "眼底OCT",
        "skin-lesion": "皮肤",
        "brain-tumor-mri": "脑",
        "brain-ct-bleed": "脑",
        "fracture-general": "骨骼骨折",
        "fracture-wrist": "腕关节",
        "fracture-spine": "脊柱",
        "fracture-hip": "髋部",
        "knee": "膝关节",
        "osteoporosis-lumbar": "骨质疏松",
        "kidney-stone": "肾",
        "kidney-tumor": "肾",
        "cystoscopy": "膀胱镜",
        "prostate-mri": "前列腺",
        "endometriosis-lap": "子宫内膜异位",
        "endometriosis-mri": "子宫内膜异位",
        "cervix": "宫颈",
        "fetal-us": "胎儿超声",
        "oral-opg": "口腔",
        "pathology-nuclei": "病理切片",
        "blood-cell": "血细胞",
        "lymph-node-us": "淋巴结",
    }
    for d in data["departments"]:
        for c in d.get("children") or []:
            zh = zh_local.get(c.get("id"))
            if zh and (AGRI / zh).is_dir():
                prev = c.get("local") or ""
                tag = f"农业yolo/{zh}"
                if tag not in prev:
                    c["local"] = f"{prev + ' · ' if prev else ''}{tag}"

    data["meta"]["updated"] = "2026-08-10"
    data["meta"]["source"] = (
        "jiezhichang + D:/hyf/.../农业yolo数据集/docs/_gen_med_catalog_links.py + 中文部位目录"
    )
    data["categories"] = []
    for d in data["departments"]:
        for c in d.get("children") or []:
            data["categories"].append(
                {**c, "department_id": d["id"], "department_zh": d["name_zh"]}
            )

    n_ds = sum(len(c.get("datasets") or []) for d in data["departments"] for c in d["children"])
    print(
        f"added={added} dup={skipped_dup} no_map={skipped_no_map} bad={skipped_bad} total_datasets={n_ds}"
    )
    return data


def main() -> None:
    data = merge()
    OUT.write_text(
        "/** 医学影像公开数据集目录 — 科室 → 二级标题 → 数据集（含农业YOLO医学目录导入）。 */\n"
        + "window.IMAGING_DATASETS = "
        + json.dumps(data, ensure_ascii=False, indent=2)
        + ";\n",
        encoding="utf-8",
    )
    print("wrote", OUT)


if __name__ == "__main__":
    main()
