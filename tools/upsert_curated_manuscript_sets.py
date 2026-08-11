# -*- coding: utf-8 -*-
"""Upsert curated public datasets from user list (no local project paths)."""
from __future__ import annotations
import json
from pathlib import Path

OUT = Path(__file__).resolve().parents[1] / "data" / "imaging-datasets.js"


def ds(name, url, note="", kind="detection"):
    return {"name": name, "url": url, "note": note, "license": "", "kind": kind}


def norm_url(u: str) -> str:
    u = (u or "").strip().rstrip("/").lower()
    u = u.replace("http://", "https://")
    return u


def ensure_child(dept, child_id, name_zh, modality, task, status="ready"):
    kids = dept.setdefault("children", [])
    for c in kids:
        if c.get("id") == child_id:
            # refresh labels if empty-ish
            c["name_zh"] = name_zh
            c["modality"] = modality
            c["task"] = task
            return c
    c = {
        "id": child_id,
        "name_zh": name_zh,
        "modality": modality,
        "task": task,
        "status": status,
        "local": "",
        "datasets": [],
        "todo": "",
    }
    kids.append(c)
    return c


def upsert(child, item):
    arr = child.setdefault("datasets", [])
    nu = norm_url(item["url"])
    nn = (item.get("name") or "").strip().lower()
    for i, x in enumerate(arr):
        xu = norm_url(x.get("url") or "")
        xn = (x.get("name") or "").strip().lower()
        if (nu and xu == nu) or (nn and xn == nn and (not nu or not xu or xu == nu)):
            # update note/kind/url if curated is richer
            merged = dict(x)
            for k in ("name", "url", "note", "kind"):
                if item.get(k):
                    merged[k] = item[k]
            arr[i] = merged
            return "upd"
    arr.append(item)
    return "add"


# (dept_id, child_id, name_zh, modality, task, [datasets...])
CURATED = [
    (
        "gi",
        "polyp-seg",
        "二级：结直肠 · 结肠镜息肉",
        "结肠镜",
        "分割转框 / 检测",
        [
            ds("Kvasir-SEG", "https://datasets.simula.no/kvasir-seg/", "分割转框；成稿主集", "seg→box"),
            ds("CVC-ClinicDB", "https://polyp.grand-challenge.org/CVCClinicDB/", "跨源常用", "seg→box"),
            ds("CVC-ColonDB", "https://polyp.grand-challenge.org/CVCColonDB/", "外测", "seg→box"),
            ds("ETIS-Larib", "https://polyp.grand-challenge.org/ETISLarib/", "小目标难例", "seg→box"),
            ds("PolypGen", "https://www.synapse.org/#!Synapse:syn45200214", "多中心（需账号）", "detection"),
            ds("PolypDB", "https://osf.io/pr7ms/", "多模态", "detection"),
        ],
    ),
    (
        "gi",
        "crc-microbiome",
        "二级：结直肠 · 粪便菌群（非影像）",
        "宏基因组 / 菌群",
        "分类 / 外测",
        [
            ds("Wirbel 2019 Zenodo", "https://doi.org/10.5281/zenodo.3517209", "九队列物种表；主分析", "classification"),
            ds("Wirbel Nat Med 论文", "https://doi.org/10.1038/s41591-019-0406-6", "方法对照", "classification"),
            ds("curatedMetagenomicData", "https://waldronlab.io/curatedMetagenomicData/", "外测队列入口", "classification"),
        ],
    ),
    (
        "stomatology",
        "dental-panorama",
        "二级：口腔 · 全景片病灶",
        "牙科全景 X 线",
        "检测",
        [
            ds("DENTEX", "https://dentex.grand-challenge.org/", "公开牙科全景检测", "detection"),
        ],
    ),
    (
        "hepatobiliary",
        "liver-ct-tumor",
        "二级：肝 · CT 小肿瘤",
        "腹部 CT",
        "检测 / 分割转框",
        [
            ds("SLTD（Small Liver Tumor）", "https://github.com/XLIAaron/Small_LiverTumor", "成稿主集", "detection"),
            ds("LiTS", "https://competitions.codalab.org/competitions/17094", "分割转框补充", "seg→box"),
            ds("DeepLesion（肝区子集）", "https://nihcc.box.com/v/DeepLesion", "多器官病灶框", "detection"),
        ],
    ),
    (
        "respiratory",
        "lung-us-bline",
        "二级：肺 · 肺超声 B 线",
        "肺超声",
        "检测",
        [
            ds("LUS-BALD", "https://data.mendeley.com/datasets/jbrh4g76dm/2", "B-line 检测成稿主集（公开）", "detection"),
            ds("POCUS COVID ultrasound", "https://github.com/jannisborn/covid19_pocus_ultrasound", "肺超声补充", "classification"),
        ],
    ),
    (
        "respiratory",
        "lung-nodule-ct",
        "二级：肺 · CT 结节",
        "胸部 CT",
        "检测",
        [
            ds("LUNA16", "https://luna16.grand-challenge.org/Data/", "CT 结节坐标→框", "detection"),
            ds("LIDC-IDRI", "https://www.cancerimagingarchive.net/collection/lidc-idri/", "结节精标", "detection"),
        ],
    ),
    (
        "cardiology",
        "coronary-angio",
        "二级：心血管 · 冠脉造影狭窄",
        "XCA",
        "分割 / 检测",
        [
            ds("ARCADE", "https://arcade.grand-challenge.org/", "狭窄分割/检测", "seg→box"),
            ds("ARCADE Zenodo", "https://doi.org/10.5281/zenodo.10390295", "数据下载", "seg→box"),
        ],
    ),
    (
        "orthopedics",
        "osteoporosis-lumbar",
        "二级：骨质疏松 · 腰椎多模态筛查",
        "X 线 / CT",
        "分类 / 检测",
        [
            ds("LUMOS 项目页", "https://keyueshi.github.io/LUMOS/", "803 例；X 线 1620；CT 280", "classification"),
            ds("LUMOS Zenodo", "https://doi.org/10.5281/zenodo.18173664", "全量约 46GB；CC BY-NC 4.0", "classification"),
            ds("ACM MM 2025", "https://doi.org/10.1145/3746027.3758282", "数据集文", "classification"),
        ],
    ),
    (
        "obgyn",
        "postpartum-lab",
        "二级：产后 · 检验时序 / 并发症（非影像）",
        "检验时序 / EHR",
        "预测",
        [
            ds("PregnancyMillions（Dryad）", "https://doi.org/10.5061/dryad.1c59zw44t", "约 41M 检验", "classification"),
            ds("Sci Adv 论文", "https://www.science.org/doi/10.1126/sciadv.adr7922", "原始研究", "classification"),
            ds("PregnancyMillions GitHub", "https://github.com/AlonLabWIS/PregnancyMillions", "代码/说明", "classification"),
            ds("PregnancyMillions Zenodo", "https://doi.org/10.5281/zenodo.13996864", "补充发布", "classification"),
        ],
    ),
    (
        "obgyn",
        "endometriosis-lap",
        "二级：子宫内膜异位 · 腹腔镜",
        "腹腔镜",
        "检测 / 分割",
        [
            ds("GLENDA", "https://ftp.itec.aau.at/datasets/GLENDA/", "腹腔镜病灶；检测/分割", "detection"),
        ],
    ),
    (
        "obgyn",
        "endometriosis-mri",
        "二级：子宫内膜异位 · 盆腔 MRI",
        "盆腔 MRI",
        "分割",
        [
            ds("UT-EndoMRI", "https://zenodo.org/records/13749613", "盆腔 MRI", "seg→box"),
        ],
    ),
    (
        "ophthalmology",
        "fundus-vessel",
        "二级：眼底 · 血管分割",
        "眼底彩照",
        "分割",
        [
            ds("FIVES", "https://doi.org/10.6084/m9.figshare.19688169.v1", "血管分割主集", "seg→box"),
            ds("DRIVE", "https://drive.grand-challenge.org/", "经典血管", "seg→box"),
            ds("CHASE_DB1", "https://blogs.kingston.ac.uk/retinal/chasedb1/", "儿童眼底", "seg→box"),
            ds("STARE", "https://cecas.clemson.edu/~ahoover/stare/", "小样本", "seg→box"),
        ],
    ),
    (
        "ophthalmology",
        "fundus-dr",
        "二级：眼底 · 糖网病灶",
        "眼底彩照",
        "检测 / 分级",
        [
            ds("IDRiD", "https://idrid.grand-challenge.org/", "糖网病灶框", "detection"),
            ds("DDR", "https://github.com/nkicsl/DDR-dataset", "糖网分级+病灶", "detection"),
        ],
    ),
    (
        "ophthalmology",
        "oct-fluid",
        "二级：眼底 · OCT 积液",
        "OCT",
        "分割",
        [
            ds("RETOUCH（OCT）", "https://retouch.grand-challenge.org/", "眼底 OCT 积液", "segmentation"),
        ],
    ),
    (
        "dermatology",
        "skin-clinical-photo",
        "二级：皮肤 · 全身皮损摄影",
        "临床照片",
        "检测",
        [
            ds("iToBoS", "https://doi.org/10.1038/s41597-025-05483-x", "YOLO 框；全身摄影", "detection"),
        ],
    ),
    (
        "dermatology",
        "skin-isic",
        "二级：皮肤 · 皮肤镜皮损",
        "皮肤镜",
        "分类 / 分割",
        [
            ds("ISIC Archive", "https://www.isic-archive.com/", "皮肤镜总入口", "mixed"),
            ds("HAM10000", "https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/DBW86T", "7 类皮损", "classification"),
        ],
    ),
    (
        "neurology",
        "glioma-brats",
        "二级：脑 · 肿瘤 MRI",
        "脑 MRI",
        "检测 / 分割",
        [
            ds("Br35H", "https://www.kaggle.com/datasets/ahmedhamada0/brain-tumor-detection", "YOLO 框易下", "detection"),
            ds("Br35H YOLO 参考", "https://github.com/mkang315/RCS-YOLO/tree/main/dataset-Br35H", "标注参考", "detection"),
            ds("Br35H HuggingFace", "https://huggingface.co/datasets/dddraxxx/brain-tumour-br35h-dataset", "镜像", "detection"),
            ds("BraTS", "https://www.synapse.org/", "胶质瘤分割（年更）", "seg→box"),
        ],
    ),
    (
        "neurology",
        "brain-ct-bleed",
        "二级：脑 · 头颅 CT / 出血",
        "头颅 CT",
        "分类 / 检测",
        [
            ds("CQ500", "http://headctstudy.qure.ai/dataset", "头颅 CT", "classification"),
        ],
    ),
    (
        "breast",
        "mammo-detection",
        "二级：乳腺 · 钼靶",
        "乳腺 X 线",
        "检测",
        [
            ds("VinDr-Mammo", "https://physionet.org/content/vindr-mammo/1.0.0/", "直接框；需 CITI", "detection"),
            ds("CBIS-DDSM", "https://www.cancerimagingarchive.net/collection/cbis-ddsm/", "TCIA", "detection"),
        ],
    ),
    (
        "breast",
        "breast-us",
        "二级：乳腺 · 超声",
        "乳腺超声",
        "分割转框",
        [
            ds("BUSI（乳腺超声）", "https://www.kaggle.com/datasets/aryashah2k/breast-ultrasound-images-dataset", "分割转框", "seg→box"),
            ds("BUSI Curated Zenodo", "https://doi.org/10.5281/zenodo.19047974", "整理版", "seg→box"),
        ],
    ),
    (
        "thyroid",
        "thyroid-us",
        "二级：甲状腺 · 超声结节",
        "甲状腺超声",
        "分割转框",
        [
            ds("TN3K", "https://huggingface.co/datasets/haifan-gong/TN3K", "分割转框", "seg→box"),
            ds("DDTI", "https://www.kaggle.com/datasets/dasmehdixtr/ddti-thyroid-ultrasound-images", "小集易下", "classification"),
            ds("TN-SCUI 2020", "https://tn-scui2020.grand-challenge.org/", "挑战赛", "detection"),
        ],
    ),
    (
        "respiratory",
        "cxr-detection",
        "二级：胸部 · 胸片多病灶",
        "X 线胸片",
        "检测",
        [
            ds("VinDr-CXR", "https://physionet.org/content/vindr-cxr/1.0.0/", "直接框；需 CITI", "detection"),
            ds("RSNA Pneumonia", "https://www.kaggle.com/c/rsna-pneumonia-detection-challenge/data", "肺炎框", "detection"),
        ],
    ),
    (
        "respiratory",
        "cxr-multilabel",
        "二级：胸部 · 胸片多标签",
        "X 线胸片",
        "分类",
        [
            ds("ChestX-ray14", "https://nihcc.app.box.com/v/ChestXray-NIHCC", "多标签分类", "classification"),
        ],
    ),
    (
        "orthopedics",
        "fracture-general",
        "二级：骨骼骨折 · 全身 / 综合",
        "X 线",
        "检测",
        [
            ds("FracAtlas", "https://doi.org/10.6084/m9.figshare.22363012", "框+分割；含髋子集", "detection"),
        ],
    ),
    (
        "orthopedics",
        "fracture-wrist",
        "二级：骨骼骨折 · 腕",
        "X 线",
        "检测",
        [
            ds("GRAZPEDWRI-DX", "https://doi.org/10.6084/m9.figshare.14825193", "儿童腕；含 YOLO", "detection"),
        ],
    ),
    (
        "orthopedics",
        "fracture-spine",
        "二级：骨骼骨折 · 脊柱",
        "X 线 / CT",
        "检测",
        [
            ds("VinDr-SpineXR", "https://physionet.org/content/vindr-spinexr/1.0.0/", "脊柱；需 CITI", "detection"),
            ds("RSNA Cervical Spine Fracture", "https://www.kaggle.com/c/rsna-2022-cervical-spine-fracture-detection", "颈椎骨折", "detection"),
        ],
    ),
    (
        "gi",
        "gastroscopy-classify",
        "二级：胃镜 / 食管 · 上消化道内镜",
        "胃镜 / 食管镜",
        "分类",
        [
            ds("HyperKvasir", "https://datasets.simula.no/hyper-kvasir/", "大规模多类", "classification"),
            ds("HyperKvasir OSF", "https://osf.io/mh9sj", "镜像下载", "classification"),
            ds("Kvasir", "https://datasets.simula.no/kvasir/", "经典内镜", "classification"),
        ],
    ),
    (
        "gi",
        "capsule",
        "二级：胶囊内镜 · 小肠",
        "胶囊内镜",
        "分类 / 检测",
        [
            ds("Kvasir-Capsule", "https://datasets.simula.no/kvasir-capsule/", "分类+部分框", "classification"),
            ds("Kvasir-Capsule OSF", "https://osf.io/dv2ag", "labeled-images", "classification"),
        ],
    ),
    (
        "urology",
        "kidney-stone",
        "二级：肾 · 结石",
        "影像",
        "检测",
        [
            ds("Kidney Stone Images（YOLO）", "https://www.kaggle.com/datasets/safurahajiheidari/kidney-stone-images", "起步推荐", "detection"),
        ],
    ),
    (
        "urology",
        "kidney-tumor",
        "二级：肾 · 肿瘤",
        "CT",
        "分割转框",
        [
            ds("KiTS19/23", "https://kits-challenge.org/kits23/", "肾肿瘤分割转框", "seg→box"),
        ],
    ),
    (
        "hepatobiliary",
        "pancreas-ct",
        "二级：胰腺 · CT",
        "腹部 CT",
        "分割转框",
        [
            ds("MSD Pancreas", "http://medicaldecathlon.com/", "Task07 分割转框", "seg→box"),
        ],
    ),
    (
        "hepatobiliary",
        "abdomen-lesion-box",
        "二级：腹部 CT · 多器官病灶框",
        "腹部 CT",
        "检测",
        [
            ds("DeepLesion", "https://nihcc.box.com/v/DeepLesion", "多器官病灶框首选", "detection"),
        ],
    ),
    (
        "hepatobiliary",
        "abdomen-multi-organ",
        "二级：腹部 CT · 多器官分割",
        "腹部 CT",
        "分割转框",
        [
            ds("AMOS22", "https://amos22.grand-challenge.org/", "腹多器官", "seg→box"),
        ],
    ),
    (
        "pathology-lab",
        "blood-cell",
        "二级：血细胞 · 显微",
        "显微镜图像",
        "检测",
        [
            ds("BCCD", "https://github.com/Shenggan/BCCD_Dataset", "VOC 框；最易起步", "detection"),
        ],
    ),
    (
        "pathology-lab",
        "nuclei-instance",
        "二级：病理切片 · 核实例",
        "病理切片",
        "检测",
        [
            ds("PanNuke", "https://warwick.ac.uk/fac/cross_fac/tia/data/pannuke", "核→框", "detection"),
        ],
    ),
    (
        "pathology-lab",
        "pathology-metastasis",
        "二级：病理切片 · 淋巴结转移",
        "病理 WSI",
        "检测 / 分类",
        [
            ds("Camelyon17", "https://camelyon17.grand-challenge.org/", "淋巴结转移", "detection"),
        ],
    ),
    (
        "obgyn",
        "fetal-us",
        "二级：胎儿超声",
        "产科超声",
        "检测 / 分类",
        [
            ds("HC18", "https://hc18.grand-challenge.org/", "胎头围", "detection"),
            ds("FETAL_PLANES_DB", "https://zenodo.org/records/3904280", "标准切面", "classification"),
        ],
    ),
    (
        "cardiology",
        "echo",
        "二级：心脏超声",
        "心超",
        "分割 / EF",
        [
            ds("EchoNet-Dynamic", "https://echonet.github.io/dynamic/", "心超 EF（需申请）", "seg→box"),
        ],
    ),
]


def main():
    t = OUT.read_text(encoding="utf-8")
    data = json.loads(t[t.index("{") : t.rindex("}") + 1])
    depts = {d["id"]: d for d in data["departments"]}

    added = updated = 0
    for dept_id, child_id, name_zh, modality, task, items in CURATED:
        dept = depts.get(dept_id)
        if not dept:
            print("MISSING DEPT", dept_id)
            continue
        child = ensure_child(dept, child_id, name_zh, modality, task)
        for item in items:
            r = upsert(child, item)
            if r == "add":
                added += 1
            else:
                updated += 1
        n = len(child.get("datasets") or [])
        child["status"] = "ready" if n >= 3 else ("partial" if n else "empty")
        # clear local paths per user request
        if child.get("local"):
            child["local"] = ""

    # strip local fields globally (user: 本地的不用放)
    for d in data["departments"]:
        for c in d.get("children") or []:
            if c.get("local"):
                c["local"] = ""

    data["meta"]["updated"] = "2026-08-11"
    data["meta"]["note"] = "成稿相关公开数据集已按清单校对；不含本地工程路径"
    data["categories"] = []
    for d in data["departments"]:
        for c in d.get("children") or []:
            data["categories"].append({**c, "department_id": d["id"], "department_zh": d["name_zh"]})

    n_sec = sum(len(d.get("children") or []) for d in data["departments"])
    n_ds = sum(len(c.get("datasets") or []) for d in data["departments"] for c in d.get("children") or [])
    OUT.write_text(
        "/** 医学影像公开数据集目录 — 科室 → 二级标题 → 数据集。 */\n"
        + "window.IMAGING_DATASETS = "
        + json.dumps(data, ensure_ascii=False, indent=2)
        + ";\n",
        encoding="utf-8",
    )
    print(f"added={added} updated={updated} secondary={n_sec} datasets={n_ds}")


if __name__ == "__main__":
    main()
