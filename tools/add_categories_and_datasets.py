# -*- coding: utf-8 -*-
"""Add new clinical categories + public datasets into imaging-datasets.js."""
from __future__ import annotations
import json
from pathlib import Path

OUT = Path(__file__).resolve().parents[1] / "data" / "imaging-datasets.js"


def ds(name, url, note="", kind="detection", license=""):
    return {"name": name, "url": url, "note": note, "license": license, "kind": kind}


def sub(id_, name_zh, modality, task, status, datasets, local="", todo=""):
    return {
        "id": id_,
        "name_zh": name_zh,
        "modality": modality,
        "task": task,
        "status": status,
        "local": local,
        "datasets": datasets,
        "todo": todo,
    }


# New secondary folders: (dept_id, secondary_dict)
NEW_SECONDARIES = [
    (
        "respiratory",
        sub(
            "pediatric-cxr",
            "二级：儿科胸片 · 小儿胸部病灶",
            "X 线胸片（儿科）",
            "检测 / 分类",
            "ready",
            [
                ds("VinDr-PCXR / PediCXR", "https://physionet.org/content/vindr-pcxr/1.0.0/", "9125 例小儿胸片；含 bbox；需 CITI", "detection"),
                ds("PediCXR Scientific Data", "https://doi.org/10.1038/s41597-023-02102-5", "论文说明", "detection"),
                ds("Chest X-Ray Pneumonia (儿科)", "https://www.kaggle.com/datasets/paultimothymooney/chest-xray-pneumonia", "5863 张小儿肺炎/正常", "classification"),
            ],
        ),
    ),
    (
        "respiratory",
        sub(
            "covid-ct",
            "二级：COVID 肺 CT · 病灶分割",
            "CT",
            "分割转框 / 分类",
            "ready",
            [
                ds("COVID-19-20 CT Lesion Seg", "https://covid-segmentation.grand-challenge.org/Data/", "COVID 肺 CT 病灶分割挑战", "seg→box"),
                ds("CT Images in COVID-19 (TCIA)", "https://doi.org/10.7937/tcia.2020.gqry-nc81", "TCIA COVID CT", "seg→box"),
                ds("COVID-CT", "https://github.com/UCSD-AI4H/COVID-CT", "COVID CT 分类补充", "classification"),
                ds("MosMedData COVID", "https://mosmed.ai/datasets/covid19/", "莫斯科 COVID CT", "classification"),
            ],
        ),
    ),
    (
        "hepatobiliary",
        sub(
            "pet-ct",
            "二级：全身 PET/CT · 肿瘤病灶",
            "PET/CT",
            "病灶分割",
            "ready",
            [
                ds("autoPET", "https://autopet.grand-challenge.org/", "全身 FDG-PET/CT 病灶；TCIA", "seg→box"),
                ds("autoPET Dataset 页", "https://autopet.grand-challenge.org/Dataset/", "下载说明", "seg→box"),
                ds("autoPET-V", "https://autopet-v.grand-challenge.org/datasets/", "FDG+PSMA；年更", "seg→box"),
                ds("autoPET III", "https://autopet-iii.grand-challenge.org/task/", "多中心多示踪剂", "seg→box"),
            ],
        ),
    ),
    (
        "orthopedics",
        sub(
            "shoulder",
            "二级：肩关节 · X 线 / MRI",
            "X 线 / MRI",
            "分类 / 分割转框",
            "partial",
            [
                ds("MURA Shoulder", "https://stanfordmlgroup.github.io/competitions/mura/", "肩部骨骼异常分类", "classification"),
                ds("FracAtlas（肩子集）", "https://doi.org/10.6084/m9.figshare.22363012", "全身骨折含肩", "detection"),
            ],
        ),
    ),
    (
        "obgyn",
        sub(
            "placenta-us",
            "二级：胎盘 / 产科结构 · 超声",
            "产科超声",
            "分割 / 分类",
            "partial",
            [
                ds("FETAL_PLANES_DB", "https://zenodo.org/records/3904280", "含胎盘相关标准切面", "classification"),
                ds("HC18", "https://hc18.grand-challenge.org/", "胎头围；产科结构对照", "detection"),
                ds("FPUS23", "https://github.com/bharathprabakaran/FPUS23", "胎儿体模平面/框", "detection"),
            ],
        ),
    ),
    (
        "neurology",
        sub(
            "head-ct-abnormal",
            "二级：头颅 CT · 正常/异常筛查",
            "CT",
            "分类 / 重建",
            "partial",
            [
                ds("SinoCT (Stanford AIMI)", "https://aimi.stanford.edu/datasets/sinoct", "9000+ 头颅 CT 正常/异常；含 sinogram", "classification"),
                ds("SinoCT DOI", "https://doi.org/10.71718/6tfs-tm78", "引用 DOI", "classification"),
                ds("CQ500", "http://headctstudy.qure.ai/dataset", "头颅急症", "classification"),
            ],
        ),
    ),
    (
        "gi",
        sub(
            "ercp",
            "二级：ERCP · 胆管胰管透视",
            "ERCP 透视",
            "分类",
            "ready",
            [
                ds("MIQR-CC ERCP", "https://doi.org/10.6084/m9.figshare.31079236.v1", "1.9 万透视图 / 1602 例", "classification"),
                ds("ERCP Scientific Data", "https://doi.org/10.1038/s41597-026-07679-1", "论文说明", "classification"),
            ],
        ),
    ),
]

# New department: ENT
ENT_DEPT = {
    "id": "ent",
    "name_zh": "耳鼻喉科 / 头颈",
    "blurb": "耳镜、耳鼻喉内镜与头颈影像",
    "children": [
        sub(
            "otoscopy",
            "二级：耳镜 · 中耳 / 鼓膜病灶",
            "耳镜 / 耳内镜",
            "分类",
            "ready",
            [
                ds("Ear imagery database (Viscaíno)", "https://doi.org/10.6084/m9.figshare.11886630", "880 张；COM/硬化/耵聍/正常", "classification"),
                ds("Otitis media GitHub", "https://github.com/zcomert/otitis-media", "中耳炎耳镜研究与数据说明", "classification"),
                ds("Sumotosima / OCASD 论文", "https://arxiv.org/abs/2408.06755", "500 张五类耳镜+摘要", "classification"),
            ],
        ),
        sub(
            "ent-endoscopy",
            "二级：耳鼻喉内镜 · 解剖 / 病灶",
            "ENT 内镜",
            "分类 / 检索",
            "partial",
            [
                ds("ENTRep Challenge", "https://aichallenge.hcmus.edu.vn/acm-mm-2025/entrep", "ACM MM 2025 ENT 内镜分类+检索", "classification"),
                ds("ENTRep 论文", "https://arxiv.org/html/2508.04801v1", "挑战说明与数据描述", "classification"),
                ds("ENTRep DOI", "https://doi.org/10.1145/3746027.3762080", "ACM 正式页", "classification"),
            ],
        ),
        sub(
            "head-neck-ct",
            "二级：头颈 · CT / 结构分割",
            "CT / MRI",
            "分割转框",
            "ready",
            [
                ds("StructSeg2019", "https://structseg2019.grand-challenge.org/", "头颈危及器官分割", "seg→box"),
                ds("HaN-Seg", "https://han-seg2023.grand-challenge.org/", "头颈 OAR 分割", "seg→box"),
                ds("SegRap 2023", "https://segrap2023.grand-challenge.org/", "头颈 47 类 OAR", "seg→box"),
                ds("HECKTOR", "https://hecktor.grand-challenge.org/", "头颈肿瘤 PET/CT", "seg→box"),
                ds("PDDCA", "https://www.imagenglab.com/newsite/pddca/", "头颈器官 CT 经典", "seg→box"),
            ],
        ),
    ],
}

# Extra datasets into existing secondaries
EXTRA = [
    ("respiratory", "chest-xray", ds("VinDr-PCXR（成人对照入口）", "https://physionet.org/content/vindr-pcxr/1.0.0/", "儿科主用；可对照 VinDr-CXR", "detection")),
    ("cardiology", "coronary-xca", ds("AortaSeg24", "https://aortaseg24.grand-challenge.org/", "主动脉分支 CTA", "seg→box")),
    ("stomatology", "oral-opg", ds("ToothFairy2", "https://toothfairy2.grand-challenge.org/", "CBCT 多结构", "seg→box")),
    ("ophthalmology", "fundus-lesion", ds("ODIR-5K", "https://odir2019.grand-challenge.org/dataset/", "双眼底多病 5K", "classification")),
    ("dermatology", "skin-lesion", ds("PAD-UFES-20 Mendeley", "https://doi.org/10.17632/zr7vgbcyr2.1", "手机皮损照", "classification")),
    ("urology", "kidney-tumor", ds("TRUSTED Figshare", "https://doi.org/10.6084/m9.figshare.27981050", "肾 US+CT 成对", "seg→box")),
    ("thyroid", "thyroid-us", ds("SegThy 官网", "https://www.cs.cit.tum.de/camp/publications/segthy-dataset/", "甲状腺+颈血管 3D US/MRI", "seg→box")),
    ("obgyn", "fetal-us", ds("FeTA", "https://feta.grand-challenge.org/", "胎儿脑 MRI", "seg→box")),
    ("pathology-lab", "pathology-nuclei", ds("Lizard", "https://warwick.ac.uk/fac/cross_fac/tia/data/lizard", "结肠核实例", "detection")),
]


def main():
    t = OUT.read_text(encoding="utf-8")
    data = json.loads(t[t.index("{") : t.rindex("}") + 1])
    depts = {d["id"]: d for d in data["departments"]}

    # ensure ENT dept
    if "ent" not in depts:
        data["departments"].append(ENT_DEPT)
        depts["ent"] = ENT_DEPT
        print("added dept ent")
    else:
        # merge missing ENT children
        existing = {c["id"] for c in depts["ent"].get("children") or []}
        for c in ENT_DEPT["children"]:
            if c["id"] not in existing:
                depts["ent"].setdefault("children", []).append(c)
                print("added ent child", c["id"])

    # add secondaries
    for dept_id, child in NEW_SECONDARIES:
        d = depts.get(dept_id)
        if not d:
            print("missing dept", dept_id)
            continue
        kids = d.setdefault("children", [])
        if any(c.get("id") == child["id"] for c in kids):
            # merge datasets only
            cur = next(c for c in kids if c["id"] == child["id"])
            seen = {(x.get("url") or "").rstrip("/").lower() for x in cur.get("datasets") or []}
            for x in child["datasets"]:
                u = (x.get("url") or "").rstrip("/").lower()
                if u and u not in seen:
                    cur.setdefault("datasets", []).append(x)
                    seen.add(u)
            print("merged into", dept_id, child["id"])
        else:
            kids.append(child)
            print("added secondary", dept_id, child["id"])

    # extras
    index = {}
    for d in data["departments"]:
        for c in d.get("children") or []:
            index[(d["id"], c["id"])] = c
    seen_all = {
        (x.get("url") or "").rstrip("/").lower()
        for d in data["departments"]
        for c in d.get("children") or []
        for x in c.get("datasets") or []
    }
    added_extra = 0
    for dept_id, sec_id, item in EXTRA:
        c = index.get((dept_id, sec_id))
        if not c:
            continue
        u = (item.get("url") or "").rstrip("/").lower()
        if not u or u in seen_all:
            continue
        c.setdefault("datasets", []).append(item)
        seen_all.add(u)
        added_extra += 1

    data["meta"]["updated"] = "2026-08-10"
    data["meta"]["note"] = "含新科室耳鼻喉及儿科胸片/COVID-CT/PET-CT 等二级目录"
    data["categories"] = []
    for d in data["departments"]:
        for c in d.get("children") or []:
            data["categories"].append({**c, "department_id": d["id"], "department_zh": d["name_zh"]})

    n_dept = len(data["departments"])
    n_sec = sum(len(d.get("children") or []) for d in data["departments"])
    n_ds = sum(len(c.get("datasets") or []) for d in data["departments"] for c in d.get("children") or [])
    OUT.write_text(
        "/** 医学影像公开数据集目录 — 科室 → 二级标题 → 数据集。 */\n"
        + "window.IMAGING_DATASETS = "
        + json.dumps(data, ensure_ascii=False, indent=2)
        + ";\n",
        encoding="utf-8",
    )
    print(f"depts={n_dept} secondary={n_sec} datasets={n_ds} extras={added_extra}")


if __name__ == "__main__":
    main()
