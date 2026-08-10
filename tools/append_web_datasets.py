# -*- coding: utf-8 -*-
"""Append web-verified public medical imaging datasets into imaging-datasets.js."""
from __future__ import annotations
import json
from pathlib import Path

OUT = Path(__file__).resolve().parents[1] / "data" / "imaging-datasets.js"

# (department_id, secondary_id, name, url, note, kind)
NEW = [
    # GI / polyps / endoscopy
    ("gi", "colorectal-polyp-det", "Kvasir-Instrument", "https://datasets.simula.no/kvasir-instrument/", "590 帧器械；含框", "seg→box"),
    ("gi", "colorectal-polyp-det", "Kvasir-Instrument OSF", "https://osf.io/kp6my", "镜像下载", "seg→box"),
    ("gi", "colorectal-polyp-det", "Kvasir-Sessile", "https://datasets.simula.no/downloads/kvasir-sessile.zip", "扁平息肉子集", "seg→box"),
    ("gi", "colorectal-polyp-det", "CVC-EndoSceneStill", "http://pages.cvc.uab.es/CVC-Colon/index.php/databases/cvc-endoscenestill/", "912 帧；场景分割", "seg→box"),
    ("gi", "colorectal-polyp-det", "BKAI-IGH NeoPolyp", "https://www.kaggle.com/c/bkai-igh-neopolyp", "新息肉分割挑战", "seg→box"),
    ("gi", "colorectal-polyp-det", "SUN Colonoscopy Database", "https://github.com/ndbaek/SUN-database", "视频息肉检测；需申请", "detection"),
    ("gi", "colorectal-polyp-det", "LDPolypVideo", "https://github.com/dashishi/LDPolypVideo-Benchmark", "长视频息肉基准", "detection"),
    ("gi", "colorectal-polyp-det", "ASU-Mayo Clinic Colonoscopy", "https://polyp.grand-challenge.org/AsuMayo/", "经典视频集；常需申请", "detection"),
    ("gi", "colorectal-polyp-det", "EndoMapper", "https://endomapper.github.io/", "内镜 SLAM / 3D", "mixed"),
    ("gi", "gastroscopy-multi", "Cholec80", "http://camma.u-strasbg.fr/datasets", "80 腹腔镜胆囊手术视频", "mixed"),
    ("gi", "gastroscopy-multi", "CholecT50", "http://camma.u-strasbg.fr/datasets", "器械+动作三联标注", "detection"),
    ("gi", "gastroscopy-multi", "EndoVis Challenges", "https://endovis.grand-challenge.org/", "MICCAI 内镜系列总入口", "mixed"),
    ("gi", "gastroscopy-multi", "GastroVision Kaggle", "https://www.kaggle.com/datasets/debeshjha1/gastrovision", "多类胃肠内镜镜像", "classification"),
    # Liver / abdomen
    ("hepatobiliary", "liver-ct-tumor", "CHAOS", "https://chaos.grand-challenge.org/", "腹多器官 MRI/CT", "seg→box"),
    ("hepatobiliary", "liver-ct-tumor", "3D-IRCADb", "https://www.ircad.fr/research/data-sets/liver-segmentation-3d-ircadb-01/", "肝血管/肿瘤", "seg→box"),
    ("hepatobiliary", "liver-ct-tumor", "SLIVER07", "https://sliver07.grand-challenge.org/", "肝轮廓经典", "seg→box"),
    ("hepatobiliary", "liver-ct-tumor", "MSD Liver Task03", "http://medicaldecathlon.com/", "Medical Decathlon 肝", "seg→box"),
    ("hepatobiliary", "liver-ct-tumor", "MSD Hepatic Vessel Task08", "http://medicaldecathlon.com/", "肝血管", "seg→box"),
    ("hepatobiliary", "liver-ct-tumor", "ATLAS Liver MRI", "https://atlas-challenge.u-bourgogne.fr/", "肝 MRI 病变", "seg→box"),
    ("hepatobiliary", "abdomen-ct-lesion", "TotalSegmentator", "https://github.com/wasserth/TotalSegmentator", "1228 CT；117 结构", "seg→box"),
    ("hepatobiliary", "abdomen-ct-lesion", "TotalSegmentator dataset", "https://zenodo.org/records/10047292", "Zenodo 发布", "seg→box"),
    ("hepatobiliary", "abdomen-ct-lesion", "AbdomenCT-1K", "https://github.com/JunMa11/AbdomenCT-1K", "1064 腹 CT 多器官", "seg→box"),
    ("hepatobiliary", "abdomen-ct-lesion", "FLARE23", "https://flare23.grand-challenge.org/", "腹器官+泛癌分割", "seg→box"),
    ("hepatobiliary", "abdomen-ct-lesion", "FLARE24", "https://flare24.grand-challenge.org/", "年更腹部分割挑战", "seg→box"),
    ("hepatobiliary", "abdomen-ct-lesion", "AbdomenAtlas", "https://github.com/MrGiovanni/AbdomenAtlas", "大规模腹 CT 多结构", "seg→box"),
    ("hepatobiliary", "abdomen-ct-lesion", "WORD", "https://github.com/HiLab-git/WORD", "腹部分割域泛化", "seg→box"),
    ("hepatobiliary", "abdomen-ct-lesion", "BTCV", "https://www.synapse.org/#!Synapse:syn3193805", "多器官腹 CT 经典", "seg→box"),
    ("hepatobiliary", "pancreas-ct", "MSD Colon Task10", "http://medicaldecathlon.com/", "结肠癌分割对照", "seg→box"),
    # Respiratory
    ("respiratory", "lung-ct-nodule", "NSCLC-Radiomics", "https://www.cancerimagingarchive.net/collection/nsclc-radiomics/", "422 例；分割+临床", "seg→box"),
    ("respiratory", "lung-ct-nodule", "MSD Lung Task06", "http://medicaldecathlon.com/", "肺癌分割", "seg→box"),
    ("respiratory", "lung-ct-nodule", "COVID-CT", "https://github.com/UCSD-AI4H/COVID-CT", "COVID CT；注意偏差", "classification"),
    ("respiratory", "chest-xray", "CheXpert", "https://stanfordmlgroup.github.io/competitions/chexpert/", "22 万胸片", "classification"),
    ("respiratory", "chest-xray", "MIMIC-CXR", "https://physionet.org/content/mimic-cxr/", "37 万；含报告", "classification"),
    ("respiratory", "chest-xray", "PadChest", "https://bimcv.cipf.es/bimcv-projects/padchest/", "16 万西语报告", "classification"),
    ("respiratory", "chest-xray", "COVID-19 Radiography", "https://www.kaggle.com/datasets/tawsifurrahman/covid19-radiography-database", "万级胸片分类", "classification"),
    ("respiratory", "chest-xray", "SIIM-ACR Pneumothorax", "https://www.kaggle.com/c/siim-acr-pneumothorax-segmentation", "气胸分割", "seg→box"),
    ("respiratory", "chest-xray", "RSNA Pulmonary Embolism CT", "https://www.kaggle.com/c/rsna-str-pulmonary-embolism-detection", "肺栓塞 CT", "detection"),
    ("respiratory", "lung-us-bline", "UUSIC25 超声挑战", "https://uusic2025.github.io/", "多器官超声分类/分割汇总", "mixed"),
    ("respiratory", "lung-us-bline", "UUSIC25 Zenodo", "https://zenodo.org/records/15094669", "公开超声 bundle", "mixed"),
    # Cardiology
    ("cardiology", "echo", "ACDC", "https://www.creatis.insa-lyon.fr/Challenge/acdc/", "150 例心脏 MRI", "seg→box"),
    ("cardiology", "echo", "MM-WHS", "http://www.sdspeople.fudan.edu.cn/zhuangxiahai/0/mmwhs/", "全心 CT/MRI", "seg→box"),
    ("cardiology", "echo", "M&Ms", "https://www.ub.edu/mnms/", "多中心心脏 MRI 域泛化", "seg→box"),
    ("cardiology", "coronary-xca", "DCA1 coronary", "https://github.com/Maltaweel/Deep-Coronary-Artery-Segmentation", "冠脉分割小样本", "seg→box"),
    # Neuro
    ("neurology", "brain-tumor-mri", "MSD Brain Tumour Task01", "http://medicaldecathlon.com/", "脑肿瘤分割", "seg→box"),
    ("neurology", "brain-tumor-mri", "ISLES", "https://www.isles-challenge.org/", "卒中病灶", "seg→box"),
    ("neurology", "brain-tumor-mri", "ATLAS Stroke", "https://fcon_1000.projects.nitrc.org/indi/retro/atlas.html", "慢性卒中 MRI", "seg→box"),
    ("neurology", "brain-tumor-mri", "OASIS", "https://www.oasis-brains.org/", "老化/认知 MRI", "classification"),
    ("neurology", "brain-tumor-mri", "IXI Brain", "https://brain-development.org/ixi-dataset/", "正常脑 MRI ~600", "classification"),
    ("neurology", "brain-tumor-mri", "FastMRI", "https://fastmri.med.nyu.edu/", "脑/膝 MRI 重建", "mixed"),
    ("neurology", "brain-tumor-mri", "Br35H HuggingFace", "https://huggingface.co/datasets/dddraxxx/brain-tumour-br35h-dataset", "YOLO 友好镜像", "detection"),
    ("neurology", "brain-ct-bleed", "RSNA Intracranial Hemorrhage", "https://www.kaggle.com/c/rsna-intracranial-hemorrhage-detection", "大规模 ICH", "classification"),
    # Ophthalmology
    ("ophthalmology", "fundus-lesion", "RFMiD / RIADD", "https://riadd.grand-challenge.org/", "眼底多病多标签", "classification"),
    ("ophthalmology", "fundus-lesion", "RFMiD Download", "https://riadd.grand-challenge.org/Download/", "下载页", "classification"),
    ("ophthalmology", "fundus-lesion", "EyePACS", "https://www.kaggle.com/c/diabetic-retinopathy-detection", "糖网分级大赛", "classification"),
    ("ophthalmology", "fundus-lesion", "Messidor", "https://www.adcis.net/en/third-party/messidor/", "糖网分级经典", "classification"),
    ("ophthalmology", "fundus-vessel", "HRF", "https://www5.cs.fau.de/research/data/fundus-images/", "高分辨率眼底", "segmentation"),
    ("ophthalmology", "fundus-oct", "OCT2017 (Kermany)", "https://www.kaggle.com/datasets/paultimothymooney/kermany2018", "OCT 四分类大规模", "classification"),
    ("ophthalmology", "fundus-oct", "ADAM Challenge", "https://adam.grand-challenge.org/", "AMD 检测/分割", "detection"),
    # Dermatology
    ("dermatology", "skin-lesion", "PH2", "https://www.fc.up.pt/addi/ph2%20database.html", "200 皮肤镜；分割+诊断", "seg→box"),
    ("dermatology", "skin-lesion", "ISIC Challenge Data", "https://challenge.isic-archive.com/data/", "2016–2024 挑战数据总入口", "mixed"),
    ("dermatology", "skin-lesion", "ISIC 2019", "https://challenge.isic-archive.com/landing/2019/", "分类挑战", "classification"),
    ("dermatology", "skin-lesion", "ISIC 2020", "https://challenge.isic-archive.com/landing/2020/", "黑色素瘤分类", "classification"),
    ("dermatology", "skin-lesion", "Derm7pt", "https://derm.cs.sfu.ca/Welcome.html", "7 点清单皮肤镜", "classification"),
    # Breast
    ("breast", "breast-us", "BUSIS", "https://doi.org/10.1016/j.dib.2019.104863", "乳腺超声分割补充", "seg→box"),
    ("breast", "breast-mammo", "DDSM", "http://www.eng.usf.edu/cvprg/Mammography/Database.html", "经典钼靶库", "detection"),
    ("breast", "breast-mammo", "MIAS", "https://www.repository.cam.ac.uk/handle/1810/250394", "小型钼靶经典", "classification"),
    # Thyroid
    ("thyroid", "thyroid-us", "TG3K", "https://github.com/haifangong/TRFE-Net-for-thyroid-nodule-segmentation", "3585 甲状腺腺体超声", "seg→box"),
    ("thyroid", "thyroid-us", "TNCD 分类", "https://huggingface.co/datasets/haifan-gong/TN3K", "甲状腺结节分类配套", "classification"),
    # Orthopedics
    ("orthopedics", "fracture-general", "MURA", "https://stanfordmlgroup.github.io/competitions/mura/", "骨骼 X 线异常分类", "classification"),
    ("orthopedics", "knee", "fastMRI Knee", "https://fastmri.med.nyu.edu/", "膝 MRI 重建/分割衍生", "mixed"),
    ("orthopedics", "knee", "OAI", "https://nda.nih.gov/oai", "膝 OA 大规模；需申请", "classification"),
    # Urology
    ("urology", "kidney-tumor", "KiTS24", "https://kits-challenge.org/", "肾肿瘤年更入口", "seg→box"),
    ("urology", "prostate-mri", "PI-CAI", "https://pi-cai.grand-challenge.org/", "前列腺癌 AI 挑战", "detection"),
    ("urology", "prostate-mri", "MSD Prostate Task05", "http://medicaldecathlon.com/", "前列腺分割", "seg→box"),
    # Pathology
    ("pathology-lab", "pathology-nuclei", "MoNuSeg", "https://monuseg.grand-challenge.org/", "多器官核分割", "seg→box"),
    ("pathology-lab", "pathology-nuclei", "NuCLS", "https://sites.google.com/view/nucls/", "核分类/检测", "detection"),
    ("pathology-lab", "pathology-nuclei", "MoNuSAC", "https://monusac-2020.grand-challenge.org/", "核实例多类", "detection"),
    ("pathology-lab", "pathology-nuclei", "CoNSeP", "https://warwick.ac.uk/fac/cross_fac/tia/data/hovernet/", "核分割经典", "seg→box"),
    ("pathology-lab", "pathology-metastasis", "DigestPath 2019", "https://digestpath2019.grand-challenge.org/", "消化道病理", "seg→box"),
    ("pathology-lab", "pathology-crc", "NCT-CRC-HE-100K", "https://zenodo.org/records/1214456", "CRC patch 10 万", "classification"),
    ("pathology-lab", "blood-cell", "Raabin-WBC", "https://raabindata.com/free-data/", "白细胞公开集", "detection"),
    # Obgyn / fetal / US multi
    ("obgyn", "fetal-us", "Fetal HC / HC18", "https://hc18.grand-challenge.org/", "胎头围", "detection"),
    ("obgyn", "cervix", "SIPaKMeD", "https://www.cs.uoi.gr/~marina/sipakmed.html", "宫颈细胞学五类", "classification"),
    ("obgyn", "cervix", "Herlev Pap Smear", "https://mde-lab.aegean.gr/index.php/downloads/", "Pap 涂片经典", "classification"),
    # Stomatology
    ("stomatology", "oral-opg", "Tufts Dental Database", "https://tdd.tufts.edu/", "牙科影像；核许可", "mixed"),
    # Skin / lymph extras already covered
    # Ultrasound multi-organ redirects
    ("hepatobiliary", "gallbladder-us", "UUSIC 公开超声包", "https://uusic2025.github.io/", "含肝/肾/乳腺/甲状腺等公开集汇总", "mixed"),
    ("breast", "breast-us", "UUSIC Breast bundle", "https://uusic2025.github.io/", "BUSI/BUSIS/BUS-BRA 挑战汇总", "seg→box"),
    ("urology", "kidney-tumor", "KidneyUS", "https://uusic2025.github.io/", "肾超声轮廓；挑战收录", "seg→box"),
]


def kind_default(k):
    return k or "mixed"


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
    missing_sec = []
    for dept_id, sec_id, name, url, note, kind in NEW:
        nu = url.rstrip("/").lower()
        if nu in seen:
            continue
        c = index.get((dept_id, sec_id))
        if not c:
            missing_sec.append((dept_id, sec_id, name))
            continue
        c.setdefault("datasets", []).append(
            {"name": name, "url": url, "note": note, "license": "", "kind": kind_default(kind)}
        )
        seen.add(nu)
        added += 1
        if c.get("status") == "empty":
            c["status"] = "partial"

    data["meta"]["updated"] = "2026-08-10"
    data["meta"]["note"] = "含联网补充公开检测/分割/分类数据集"
    data["categories"] = []
    for d in data["departments"]:
        for c in d.get("children") or []:
            data["categories"].append({**c, "department_id": d["id"], "department_zh": d["name_zh"]})

    n = sum(len(c.get("datasets") or []) for d in data["departments"] for c in d.get("children") or [])
    OUT.write_text(
        "/** 医学影像公开数据集目录 — 科室 → 二级标题 → 数据集。 */\n"
        + "window.IMAGING_DATASETS = "
        + json.dumps(data, ensure_ascii=False, indent=2)
        + ";\n",
        encoding="utf-8",
    )
    print(f"added={added} total={n} missing_sec={len(missing_sec)}")
    for m in missing_sec[:20]:
        print(" missing", m)


if __name__ == "__main__":
    main()
