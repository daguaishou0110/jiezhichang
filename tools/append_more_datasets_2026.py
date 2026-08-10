# -*- coding: utf-8 -*-
"""Append newly found public datasets (Scientific Data / challenges) into catalog."""
from __future__ import annotations
import json
from pathlib import Path

OUT = Path(__file__).resolve().parents[1] / "data" / "imaging-datasets.js"

# (dept, sec, name, url, note, kind)
NEW = [
    # GI — new Scientific Data / endoscopy
    ("gi", "gastroscopy-multi", "EGID 胃炎内镜多标签", "https://doi.org/10.1038/s41597-026-07666-6", "5883 张 / 229 例；Hp/萎缩等多标签", "classification"),
    ("gi", "gastroscopy-multi", "EGID Figshare part1", "https://doi.org/10.6084/m9.figshare.30997345.v4", "数据下载 part1", "classification"),
    ("gi", "gastroscopy-multi", "EGID Figshare part2", "https://doi.org/10.6084/m9.figshare.30996127.v4", "数据下载 part2", "classification"),
    ("gi", "colorectal-polyp-det", "CAD-SEL 黏膜下病变", "https://doi.org/10.1038/s41597-026-07331-y", "双模态结肠镜 SEL；4912 图 / 641 例", "detection"),
    ("gi", "colorectal-polyp-det", "CAD-SEL Figshare", "https://doi.org/10.6084/m9.figshare.29945483.v2", "数据下载", "detection"),
    ("gi", "colorectal-polyp-det", "EndoCV2021", "https://endocv2021.grand-challenge.org/", "息肉泛化检测/分割挑战", "detection"),
    ("gi", "colorectal-polyp-det", "PolypGen Scientific Data", "https://doi.org/10.1038/s41597-023-01981-y", "多中心息肉论文", "detection"),
    ("gi", "gastroscopy-multi", "Endoscapes2023", "https://physionet.org/content/endoscapes-2023/", "腹腔镜胆囊切除；器械/解剖分割；需 DUA", "detection"),
    ("gi", "gi-radiomics", "MIQR-CC ERCP 透视", "https://doi.org/10.6084/m9.figshare.31079236.v1", "ERCP 透视 1.9 万图 / 1602 例；5519 标注", "classification"),
    ("gi", "gi-radiomics", "ERCP curated Scientific Data", "https://doi.org/10.1038/s41597-026-07679-1", "胆管胰管 ERCP 数据集文", "classification"),
    # Hepatobiliary / pancreas
    ("hepatobiliary", "pancreas-ct", "NIH Pancreas-CT", "https://www.cancerimagingarchive.net/collection/pancreas-ct/", "82 例腹 CT 胰腺", "seg→box"),
    ("hepatobiliary", "pancreas-ct", "MSD Pancreas Task07", "http://medicaldecathlon.com/", "Medical Decathlon 胰腺", "seg→box"),
    ("hepatobiliary", "gallbladder-us", "Endoscapes / Cholec 胆囊手术", "https://physionet.org/content/endoscapes-2023/", "腹腔镜胆囊场景", "detection"),
    ("hepatobiliary", "liver-ct-tumor", "AutoPET", "https://autopet.grand-challenge.org/", "全身 PET-CT 肿瘤", "seg→box"),
    ("hepatobiliary", "abdomen-ct-lesion", "ULS23", "https://uls23.grand-challenge.org/", "全身病灶分割大规模", "seg→box"),
    ("hepatobiliary", "abdomen-ct-lesion", "SegTHOR", "https://segthor.grand-challenge.org/", "胸腔器官分割", "seg→box"),
    # Kidney / urology sparse
    ("urology", "kidney-tumor", "TRUSTED 肾 US+CT", "https://doi.org/10.1038/s41597-025-04467-1", "48 例成对 3DUS+CT；需签署 DUA", "seg→box"),
    ("urology", "kidney-tumor", "TRUSTED Figshare", "https://doi.org/10.6084/m9.figshare.27981050", "数据下载入口", "seg→box"),
    ("urology", "kidney-stone", "CT Kidney 四类", "https://www.kaggle.com/datasets/nazmul0087/ct-kidney-dataset-normal-cyst-tumor-stone", "正常/囊肿/肿瘤/结石", "classification"),
    ("urology", "kidney-stone", "Kidney Stone Detection YOLO", "https://www.kaggle.com/datasets/mohammedhagagg/kidney-stone-images", "结石检测补充", "detection"),
    ("urology", "cystoscopy", "CystoDS OSF", "https://osf.io/xvdhy/", "8067 张膀胱镜", "classification"),
    ("urology", "prostate-mri", "PROMISE12", "https://promise12.grand-challenge.org/", "前列腺 MRI 分割经典", "seg→box"),
    ("urology", "prostate-mri", "MR-US Prostate Reg Zenodo", "https://doi.org/10.5281/zenodo.7870105", "MR-US 配准挑战数据", "mixed"),
    # Thyroid / carotid
    ("thyroid", "thyroid-us", "SegThy", "https://www.cs.cit.tum.de/camp/publications/segthy-dataset/", "甲状腺+颈血管 3D US/MRI", "seg→box"),
    ("thyroid", "thyroid-us", "SegThy US zip", "https://www.campar.in.tum.de/public_datasets/2022_plosone_eilers/US_data.zip", "US 直下", "seg→box"),
    ("thyroid", "thyroid-us", "SegThy MRI zip", "https://www.campar.in.tum.de/public_datasets/2022_plosone_eilers/MRI_data.zip", "MRI 直下", "seg→box"),
    ("cardiology", "carotid", "COSMOS2022 颈动脉壁", "https://vessel-wall-segmentation-2022.grand-challenge.org/", "颈动脉壁分割挑战", "seg→box"),
    ("cardiology", "carotid", "CAS2023 脑动脉", "https://codalab.lisn.upsaclay.fr/competitions/9804", "脑动脉分割", "seg→box"),
    # Orthopedics sparse
    ("orthopedics", "fracture-wrist", "MURA Wrist 子集", "https://stanfordmlgroup.github.io/competitions/mura/", "腕部异常分类可辅", "classification"),
    ("orthopedics", "fracture-hip", "HFValid 股骨 CT", "https://amsacta.unibo.it/id/eprint/7277/", "101 例股骨 CT+标志点", "seg→box"),
    ("orthopedics", "fracture-hip", "PlaTiF 胫骨平台", "https://zenodo.org/records/18007397", "膝/近髋骨折相关补充", "classification"),
    ("orthopedics", "osteoporosis-lumbar", "LUMOS ACM MM", "https://doi.org/10.1145/3746027.3758282", "腰椎骨质疏松数据集文", "mixed"),
    ("orthopedics", "osteoporosis-lumbar", "VerSe 椎体", "https://verse2020.grand-challenge.org/", "椎体分割/定位", "seg→box"),
    ("orthopedics", "fracture-spine", "VerSe 2019/2020", "https://github.com/anjany/verse", "脊柱椎体标注", "detection"),
    ("orthopedics", "knee", "SKI10", "https://ski10.grand-challenge.org/", "膝软骨/骨分割", "seg→box"),
    # Obgyn sparse
    ("obgyn", "endometriosis-lap", "ROBUST-MIS", "https://www.synapse.org/#!Synapse:syn18779624", "腹腔镜器械鲁棒分割", "detection"),
    ("obgyn", "endometriosis-lap", "EndoVis 2017/2018", "https://endovis.grand-challenge.org/", "器械/组织挑战总入口", "detection"),
    ("obgyn", "endometriosis-mri", "FeTA 胎儿脑 MRI", "https://feta.grand-challenge.org/", "胎儿脑组织；妇产相关 MRI", "seg→box"),
    ("obgyn", "cervix", "Cervix93", "https://github.com/CancerDataScience/Cervix93", "宫颈细胞学补充", "classification"),
    ("obgyn", "fetal-us", "FeTA", "https://feta.grand-challenge.org/", "胎儿脑 MRI", "seg→box"),
    # Pathology sparse
    ("pathology-lab", "pathology-metastasis", "Camelyon16", "https://camelyon16.grand-challenge.org/", "淋巴结转移前代", "detection"),
    ("pathology-lab", "pathology-metastasis", "PAIP 2019", "https://paip2019.grand-challenge.org/", "肝病理分割", "seg→box"),
    ("pathology-lab", "pathology-crc", "DigestPath 2019", "https://digestpath2019.grand-challenge.org/", "消化道病理", "seg→box"),
    ("pathology-lab", "pathology-crc", "CRC-VAL-HE-7K", "https://zenodo.org/records/1214456", "CRC 验证 7K", "classification"),
    ("pathology-lab", "pathology-nuclei", "CryoNuSeg", "https://zenodo.org/records/4551984", "冰冻切片核分割", "seg→box"),
    # Neuro / others
    ("neurology", "brain-ct-bleed", "INSTANCE 2022", "https://instance.grand-challenge.org/", "颅内出血分割", "seg→box"),
    ("neurology", "brain-tumor-mri", "BraTS2023-MEN", "https://www.synapse.org/#!Synapse:syn51156910", "脑膜瘤分割", "seg→box"),
    ("neurology", "brain-tumor-mri", "UCSF-PDGM", "https://www.cancerimagingarchive.net/collection/ucsf-pdgm/", "弥漫胶质瘤 MRI", "seg→box"),
    ("respiratory", "bronchoscopy", "EXACT09", "https://exact09.grand-challenge.org/", "气道提取经典", "seg→box"),
    ("respiratory", "lung-ct-nodule", "LNDb", "https://lndb.grand-challenge.org/", "肺结节检测", "detection"),
    ("ophthalmology", "fundus-lesion", "REFUGE", "https://refuge.grand-challenge.org/", "青光眼视盘/杯", "seg→box"),
    ("ophthalmology", "fundus-lesion", "PALM", "https://palm.grand-challenge.org/", "病理性近视", "classification"),
    ("dermatology", "skin-lesion", "Dermofit", "https://licensing.edinburgh-innovations.ed.ac.uk/product/dermofit-image-library", "皮肤镜库；需许可", "classification"),
    ("stomatology", "oral-opg", "ToothFairy", "https://toothfairy.grand-challenge.org/", "CBCT 下牙槽神经", "seg→box"),
    ("stomatology", "oral-opg", "Teeth3DS", "https://github.com/DCBIA-OrthoLab/3DTeethSeg22_challenge", "三维牙分割", "seg→box"),
    ("breast", "breast-mammo", "VinDr-Mammo", "https://physionet.org/content/vindr-mammo/1.0.0/", "钼靶框；需 CITI", "detection"),
    ("breast", "breast-us", "BUSIS", "https://doi.org/10.1016/j.dib.2019.104863", "乳腺超声分割", "seg→box"),
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
        if c.get("status") in ("empty", None, ""):
            c["status"] = "partial"
        elif c.get("status") == "partial" and len(c["datasets"]) >= 6:
            c["status"] = "ready"

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
    print(f"added={added} total={n} miss={len(miss)}")
    for m in miss:
        print(" miss", m)


if __name__ == "__main__":
    main()
