# -*- coding: utf-8 -*-
"""Round of additional public medical imaging datasets."""
from __future__ import annotations
import json
from pathlib import Path

OUT = Path(__file__).resolve().parents[1] / "data" / "imaging-datasets.js"

NEW = [
    # GI
    ("gi", "gastroscopy-multi", "GastroHUN 胃系统筛查", "https://doi.org/10.1038/s41597-025-04401-5", "8834 图+4729 序列；23 类胃站位", "classification"),
    ("gi", "gastroscopy-multi", "GastroHUN Figshare", "https://doi.org/10.6084/m9.figshare.27308133", "数据下载 ~97GB", "classification"),
    ("gi", "gastroscopy-multi", "HyperKvasir labeled-images zip", "https://datasets.simula.no/downloads/hyper-kvasir/hyper-kvasir-labeled-images.zip", "10662 标注图直下 3.9GB", "classification"),
    ("gi", "gastroscopy-multi", "HyperKvasir segmentation zip", "https://datasets.simula.no/downloads/hyper-kvasir/hyper-kvasir-segmented-images.zip", "分割子集直下", "seg→box"),
    ("gi", "colorectal-polyp-det", "Kvasir-SEG zip", "https://datasets.simula.no/downloads/kvasir-seg.zip", "息肉分割直下包", "seg→box"),
    ("gi", "colorectal-polyp-det", "Kvasir-VQA", "https://datasets.simula.no/kvasir-vqa/", "内镜视觉问答；图文对", "mixed"),
    ("gi", "capsule", "Kvasir-Capsule labeled zip", "https://datasets.simula.no/downloads/kvasir-capsule/kvasir-capsule-labeled-images.zip", "胶囊标注帧直下", "detection"),
    # Cardio / aorta
    ("cardiology", "coronary-xca", "AortaSeg24", "https://aortaseg24.grand-challenge.org/", "主动脉及分支 CTA 23 类；需 DUA", "seg→box"),
    ("cardiology", "coronary-xca", "AortaSeg24 GitHub", "https://github.com/mirthAI/AortaSeg24", "挑战说明与基线", "seg→box"),
    ("cardiology", "echo", "STACOM 心脏系列", "https://www.cardiacatlas.org/", "心脏建模/分割挑战入口", "seg→box"),
    ("cardiology", "echo", "EchoNet-Pediatric", "https://echonet.github.io/pediatric/", "儿科心超；需申请", "video"),
    # Neuro
    ("neurology", "brain-tumor-mri", "OpenMind MRI HF", "https://huggingface.co/datasets/MIC-DKFZ/OpenMind", "11.4 万头颈 3D MRI；SSL 预训练", "mixed"),
    ("neurology", "brain-tumor-mri", "OpenNeuro", "https://openneuro.org/", "开放神经影像总入口", "mixed"),
    ("neurology", "brain-tumor-mri", "ABIDE", "http://fcon_1000.projects.nitrc.org/indi/abide/", "自闭症脑 MRI", "classification"),
    ("neurology", "brain-ct-bleed", "RSNA Intracranial Hemorrhage", "https://www.rsna.org/rsnai/ai-image-challenge/rsna-intracranial-hemorrhage-detection", "RSNA ICH 官方页", "classification"),
    # Orthopedics / spine US
    ("orthopedics", "fracture-spine", "腰椎 US+CT 成对集", "https://doi.org/10.1038/s41597-025-06047-9", "机器人/手持腰椎超声+CT", "seg→box"),
    ("orthopedics", "fracture-spine", "腰椎 US+CT 数据仓", "https://doi.org/10.48804/3XPCAE", "下载入口", "seg→box"),
    ("orthopedics", "fracture-spine", "ToothFairy2 CBCT", "https://toothfairy2.grand-challenge.org/", "颌面多结构 CBCT（骨科邻近）", "seg→box"),
    ("orthopedics", "knee", "OAI Progressive OA", "https://nda.nih.gov/oai", "膝骨关节炎纵向；需申请", "classification"),
    ("orthopedics", "fracture-general", "FracAtlas HF", "https://huggingface.co/datasets/yh0701/FracAtlas_dataset", "骨折 YOLO/COCO 镜像", "detection"),
    # Stomatology
    ("stomatology", "oral-opg", "ToothFairy2", "https://toothfairy2.grand-challenge.org/dataset/", "CBCT 多结构；需注册", "seg→box"),
    ("stomatology", "oral-opg", "DENTEX 2023", "https://dentex.grand-challenge.org/", "全景分层检测", "detection"),
    # Ophthalmology
    ("ophthalmology", "fundus-lesion", "ODIR-5K", "https://odir2019.grand-challenge.org/dataset/", "5000 患者双眼底多病", "classification"),
    ("ophthalmology", "fundus-lesion", "ORIGA", "https://www.kaggle.com/datasets/arnavjain1/glaucoma-datasets", "青光眼 ORIGA 等合集镜像", "classification"),
    ("ophthalmology", "fundus-lesion", "G1020", "https://doi.org/10.5281/zenodo.3833513", "青光眼眼底 1020", "classification"),
    ("ophthalmology", "fundus-oct", "OCTID", "https://www.openicpsr.org/openicpsr/project/108503/version/V1/view", "OCT 多病分类", "classification"),
    # Dermatology
    ("dermatology", "skin-lesion", "PAD-UFES-20", "https://data.mendeley.com/datasets/zr7vgbcyr2/1", "手机临床照 2298；6 类皮损", "classification"),
    ("dermatology", "skin-lesion", "PAD-UFES-20 GitHub", "https://github.com/labcin-ufes/PAD-UFES-20", "说明与校验脚本", "classification"),
    ("dermatology", "skin-lesion", "Fitzpatrick17k", "https://github.com/mattgroh/fitzpatrick17k", "肤色公平皮损；图需申请", "classification"),
    ("dermatology", "skin-lesion", "ISIC 2024", "https://challenge.isic-archive.com/landing/2024/", "最新 ISIC 挑战入口", "classification"),
    # Breast
    ("breast", "breast-mammo", "CSAW-S", "https://doi.org/10.5281/zenodo.3881526", "乳腺钼靶分割（瑞典）", "seg→box"),
    ("breast", "breast-us", "UDIAT Dataset B", "http://www2.cs.uoi.gr/~marina/datasets.html", "乳腺超声小集经典", "seg→box"),
    # Thyroid / US
    ("thyroid", "thyroid-us", "TNUI-2021", "https://github.com/haifangong/TRFE-Net-for-thyroid-nodule-segmentation", "甲状腺结节超声外测常用", "seg→box"),
    ("hepatobiliary", "gallbladder-us", "Appendix US (UUSIC)", "https://uusic2025.github.io/", "阑尾炎超声分类；挑战收录", "classification"),
    # Pathology
    ("pathology-lab", "pathology-nuclei", "NuClick", "https://github.com/navidstuv/NuClick", "交互式核标注/检测", "detection"),
    ("pathology-lab", "pathology-nuclei", "Lizard", "https://warwick.ac.uk/fac/cross_fac/tia/data/lizard", "结肠核实例大集", "detection"),
    ("pathology-lab", "pathology-crc", "TCGA-COAD", "https://portal.gdc.cancer.gov/", "结直肠癌病理+组学", "classification"),
    ("pathology-lab", "blood-cell", "Blood Cell Count Dataset", "https://www.kaggle.com/datasets/paultimothymooney/blood-cells", "血细胞分类常用", "classification"),
    # Respiratory
    ("respiratory", "chest-xray", "ChestX-ray8", "https://nihcc.app.box.com/v/ChestXray-NIHCC", "NIH 胸片多标签", "classification"),
    ("respiratory", "chest-xray", "VinBigData CXR", "https://www.kaggle.com/c/vinbigdata-chest-xray-abnormalities-detection", "胸片异常检测挑战", "detection"),
    ("respiratory", "lung-ct-nodule", "LNDb", "https://lndb.grand-challenge.org/Data/", "肺结节数据页", "detection"),
    ("respiratory", "lung-us-bline", "COVID-BLUES", "https://github.com/namiyousef/covid-19-lung-ultrasound", "COVID 肺超声补充", "classification"),
    # Urology / obgyn
    ("urology", "kidney-tumor", "KiTS21", "https://kits-challenge.org/kits21/", "肾肿瘤前代挑战", "seg→box"),
    ("urology", "prostate-mri", "ProstateX2", "https://www.cancerimagingarchive.net/collection/prostatex/", "前列腺 MRI（TCIA）", "classification"),
    ("obgyn", "fetal-us", "HC18 Data", "https://hc18.grand-challenge.org/Data/", "胎头围数据页", "detection"),
    ("obgyn", "cervix", "Liquid-based cytology Zenodo", "https://zenodo.org/records/6676799", "液基细胞学补充", "classification"),
    # Abdomen platforms
    ("hepatobiliary", "abdomen-ct-lesion", "CT-ORG", "https://github.com/bbrister/ctOrganSegmentation", "多器官 CT 分割", "seg→box"),
    ("hepatobiliary", "abdomen-ct-lesion", "AbdomenAtlas GitHub", "https://github.com/MrGiovanni/AbdomenAtlas", "大规模腹 CT", "seg→box"),
    ("hepatobiliary", "liver-ct-tumor", "MSD Hepatic Vessel", "http://medicaldecathlon.com/", "肝血管 Task08", "seg→box"),
    # Skin / lymph
    ("pathology-lab", "lymph-node-us", "ALN-Ultra Zenodo", "https://doi.org/10.5281/zenodo.18483501", "腋窝淋巴结超声", "classification"),
]


def main():
    t = OUT.read_text(encoding="utf-8")
    data = json.loads(t[t.index("{") : t.rindex("}") + 1])
    index = {}
    seen = set()
    for d in data["departments"]:
        for c in d.get("children") or []:
            index[(d["id"], c["id"])] = c
            for x in c.get("datasets") or []:
                u = (x.get("url") or "").rstrip("/").lower()
                if u:
                    seen.add(u)
    added = 0
    miss = []
    for dept, sec, name, url, note, kind in NEW:
        nu = url.rstrip("/").lower()
        if nu in seen:
            continue
        c = index.get((dept, sec))
        if not c:
            miss.append((dept, sec, name))
            continue
        c.setdefault("datasets", []).append(
            {"name": name, "url": url, "note": note, "license": "", "kind": kind}
        )
        seen.add(nu)
        added += 1
        if c.get("status") == "empty":
            c["status"] = "partial"
    data["meta"]["updated"] = "2026-08-10"
    data["categories"] = []
    for d in data["departments"]:
        for c in d.get("children") or []:
            data["categories"].append({**c, "department_id": d["id"], "department_zh": d["name_zh"]})
    n = sum(len(c.get("datasets") or []) for d in data["departments"] for c in d["children"])
    OUT.write_text(
        "/** 医学影像公开数据集目录 — 科室 → 二级标题 → 数据集。 */\n"
        + "window.IMAGING_DATASETS = "
        + json.dumps(data, ensure_ascii=False, indent=2)
        + ";\n",
        encoding="utf-8",
    )
    print(f"added={added} total={n} miss={miss}")


if __name__ == "__main__":
    main()
