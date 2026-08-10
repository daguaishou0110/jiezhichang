# -*- coding: utf-8 -*-
"""Regenerate imaging-datasets.js: dept → secondary title → datasets (filled)."""
from __future__ import annotations
import json
from pathlib import Path

OUT = Path(__file__).resolve().parents[1] / "data" / "imaging-datasets.js"


def ds(name, url, note="", license="", kind="detection"):
    return {"name": name, "url": url, "note": note, "license": license, "kind": kind}


def sub(id, name_zh, modality, task, status, datasets, local="", todo=""):
    return {
        "id": id,
        "name_zh": name_zh,
        "modality": modality,
        "task": task,
        "status": status,
        "local": local,
        "datasets": datasets,
        "todo": todo,
    }


def dept(id, name_zh, blurb, children):
    return {"id": id, "name_zh": name_zh, "blurb": blurb, "children": children}


depts = [
    dept(
        "gi",
        "消化内科 / 消化内镜科",
        "结肠镜、胃镜、食管、胶囊等消化道影像",
        [
            sub(
                "colorectal-polyp-det",
                "二级：结直肠息肉 · 目标检测",
                "结肠镜",
                "目标检测（原生框 / 分割转框）",
                "ready",
                [
                    ds("Kvasir-SEG", "https://datasets.simula.no/kvasir-seg/", "1000 张；分割可转框；YOLO 常用", kind="seg→box"),
                    ds("CVC-ClinicDB", "https://polyp.grand-challenge.org/CVCClinicDB/", "612 张；跨源常用", kind="seg→box"),
                    ds("CVC-ColonDB", "https://polyp.grand-challenge.org/CVCColonDB/", "外测经典", kind="seg→box"),
                    ds("ETIS-LaribPolypDB", "https://polyp.grand-challenge.org/ETISLarib/", "小目标难例", kind="seg→box"),
                    ds("PolypGen", "https://www.synapse.org/#!Synapse:syn45200214", "多中心；需 Synapse", kind="seg/box"),
                    ds("PolypDB", "https://osf.io/pr7ms/", "多中心多模态；含 bounding boxes", kind="detection"),
                    ds("REAL-Colon", "https://doi.org/10.25452/figshare.plus.22202866", "视频级框；大规模", kind="detection"),
                    ds("GPolypOD", "https://doi.org/10.57760/sciencedb.j00001.01467", "2026 胃肠镜息肉检测", kind="detection"),
                    ds("PICCOLO", "https://www.biobancovasco.org/en/Sample-and-data-catalog/Databases/PD-PICCOLO-EN.html", "WLI/NBI；框+掩膜", kind="detection"),
                ],
                "colorectal-yolo",
            ),
            sub(
                "gastroscopy-multi",
                "二级：胃镜 · 上消化道多类病灶",
                "胃镜",
                "分类 / 部分可做定位",
                "partial",
                [
                    ds("HyperKvasir", "https://datasets.simula.no/hyper-kvasir/", "大规模多类内镜", kind="classification"),
                    ds("HyperKvasir OSF", "https://osf.io/mh9sj", "镜像下载", kind="classification"),
                    ds("Kvasir", "https://datasets.simula.no/kvasir/", "经典内镜分类", kind="classification"),
                ],
                "胃镜",
            ),
            sub(
                "esophagus",
                "二级：食管 · Barrett / 早癌内镜",
                "食管内镜",
                "检测 / 分割转框",
                "partial",
                [
                    ds("HyperKvasir（食管相关类）", "https://datasets.simula.no/hyper-kvasir/", "从多类筛食管标签", kind="classification"),
                    ds("Kvasir", "https://datasets.simula.no/kvasir/", "含食管相关类别", kind="classification"),
                ],
                "食管",
            ),
            sub(
                "capsule",
                "二级：胶囊内镜 · 小肠病灶",
                "胶囊内镜",
                "分类 / 部分检测",
                "partial",
                [
                    ds("Kvasir-Capsule", "https://datasets.simula.no/kvasir-capsule/", "分类为主", kind="classification"),
                    ds("Kvasir-Capsule OSF", "https://osf.io/dv2ag", "labeled-images", kind="classification"),
                ],
                "胶囊内镜",
            ),
        ],
    ),
    dept(
        "hepatobiliary",
        "肝胆胰外科 / 腹部影像",
        "肝肿瘤、胰腺、胆囊、腹部多器官病灶",
        [
            sub(
                "liver-ct-tumor",
                "二级：肝 CT · 小肿瘤 / 肝病灶检测",
                "CT",
                "目标检测 / 分割转框",
                "ready",
                [
                    ds("SLTD", "https://github.com/XLIAaron/Small_LiverTumor", "小肝肿瘤检测；成稿主集", kind="detection"),
                    ds("LiTS", "https://competitions.codalab.org/competitions/17094", "肝/肿瘤分割→外接框", kind="seg→box"),
                    ds("DeepLesion（肝区子集）", "https://nihcc.box.com/v/DeepLesion", "多器官病灶框筛肝", kind="detection"),
                ],
                "liver-yolo",
            ),
            sub(
                "pancreas-ct",
                "二级：胰腺 CT · 病灶",
                "CT",
                "分割转框",
                "partial",
                [
                    ds("MSD Pancreas (Task07)", "http://medicaldecathlon.com/", "Medical Decathlon", kind="seg→box"),
                    ds("DeepLesion（胰区）", "https://nihcc.box.com/v/DeepLesion", "多器官框筛胰", kind="detection"),
                ],
                "胰腺",
            ),
            sub(
                "gallbladder-us",
                "二级：胆囊超声 · 结石 / 息肉 / 癌灶",
                "超声",
                "目标检测 / 分类",
                "ready",
                [
                    ds("GBCU（Gallbladder Cancer US）", "https://gbc-iitd.github.io/data/gbcu", "含 bbox；正常/良性/恶性", kind="detection"),
                    ds("UIdataGB", "https://doi.org/10.1016/j.dib.2024.110426", "约 1 万张胆囊超声多类", kind="classification"),
                    ds("UIdataGB Mendeley", "https://data.mendeley.com/datasets/xtv5y2ddnh", "数据下载入口（以论文为准）", kind="classification"),
                ],
                "胆囊",
            ),
            sub(
                "abdomen-ct-lesion",
                "二级：腹部 CT · 多器官病灶框",
                "CT",
                "病灶检测",
                "ready",
                [
                    ds("DeepLesion", "https://nihcc.box.com/v/DeepLesion", "多器官病灶框首选", kind="detection"),
                    ds("AMOS22", "https://amos22.grand-challenge.org/", "腹多器官分割", kind="seg→box"),
                ],
                "腹部CT",
            ),
        ],
    ),
    dept(
        "respiratory",
        "呼吸科 / 胸外科",
        "肺超声、肺结节、胸片、支气管镜",
        [
            sub(
                "lung-us-bline",
                "二级：肺超声 · B-line 检测",
                "肺超声",
                "目标检测",
                "partial",
                [
                    ds("LUS-BALD", "", "B-line 成稿主集；补公开发布页", kind="detection"),
                    ds("POCUS COVID ultrasound", "https://github.com/jannisborn/covid19_pocus_ultrasound", "肺超声补充", kind="classification"),
                ],
                "lung-yolo",
            ),
            sub(
                "lung-ct-nodule",
                "二级：肺 CT · 结节检测",
                "CT",
                "结节检测",
                "ready",
                [
                    ds("LUNA16", "https://luna16.grand-challenge.org/Data/", "结节坐标→框", kind="detection"),
                    ds("LIDC-IDRI", "https://www.cancerimagingarchive.net/collection/lidc-idri/", "TCIA 精标", kind="detection"),
                ],
                "lung-yolo",
            ),
            sub(
                "chest-xray",
                "二级：胸片 · 多病灶检测",
                "X 线胸片",
                "多类病灶框",
                "ready",
                [
                    ds("VinDr-CXR", "https://physionet.org/content/vindr-cxr/1.0.0/", "原生 bbox；需 CITI", kind="detection"),
                    ds("RSNA Pneumonia Detection", "https://www.kaggle.com/c/rsna-pneumonia-detection-challenge/data", "肺炎框", kind="detection"),
                    ds("NIH ChestX-ray14", "https://nihcc.app.box.com/v/ChestXray-NIHCC", "多标签；弱定位", kind="classification"),
                ],
                "胸部",
            ),
            sub(
                "bronchoscopy",
                "二级：支气管镜 · 解剖标志 / 气道病灶",
                "支气管镜",
                "检测 / 分割定位",
                "ready",
                [
                    ds("BM-BronchoLC", "https://doi.org/10.1038/s41597-024-03145-y", "地标+病灶定位；Scientific Data", kind="detection"),
                    ds("UAAL（上气道地标）", "https://doi.org/10.1038/s41597-025-06169-0", "含 bbox 与实例分割", kind="detection"),
                    ds("UAAL Figshare", "https://doi.org/10.6084/m9.figshare.26342779", "coco_ins 下载", kind="detection"),
                    ds("Bronchoscopy unified HF", "https://huggingface.co/datasets/chrisvoncsefalvay/single-bronchoscopy-depth", "多源汇总入口", kind="mixed"),
                ],
                "支气管镜",
            ),
        ],
    ),
    dept(
        "cardiology",
        "心内科 / 心血管影像",
        "冠脉造影、心超、颈动脉斑块",
        [
            sub(
                "coronary-xca",
                "二级：冠脉造影 · 狭窄检测/分割",
                "XCA",
                "分割 / 实例→框",
                "ready",
                [
                    ds("ARCADE", "https://arcade.grand-challenge.org/", "狭窄挑战", kind="seg→box"),
                    ds("ARCADE Zenodo", "https://doi.org/10.5281/zenodo.10390295", "数据下载", kind="seg→box"),
                ],
                "heart",
            ),
            sub(
                "echo",
                "二级：心脏超声 · 结构定位",
                "超声心动",
                "定位 / 检测衍生",
                "partial",
                [
                    ds("EchoNet-Dynamic", "https://echonet.github.io/dynamic/", "需申请；可衍生定位", kind="video"),
                ],
                "心脏超声",
            ),
            sub(
                "carotid",
                "二级：颈动脉超声 · 斑块检测",
                "超声",
                "斑块检测 / 分类",
                "partial",
                [
                    ds("公开斑块检测研究（YOLO）", "https://pmc.ncbi.nlm.nih.gov/articles/PMC11683696/", "多中心斑块检测论文；数据申请见原文", kind="detection"),
                    ds("检索入口：Zenodo carotid plaque", "https://zenodo.org/search?q=carotid%20plaque%20ultrasound", "逐条核许可与标注类型", kind="mixed"),
                ],
                "颈动脉",
                "部分集需向作者申请",
            ),
        ],
    ),
    dept(
        "breast",
        "乳腺外科 / 乳腺影像",
        "钼靶与乳腺超声",
        [
            sub(
                "breast-mammo",
                "二级：钼靶 · 肿块 / 钙化检测",
                "钼靶",
                "目标检测",
                "ready",
                [
                    ds("VinDr-Mammo", "https://physionet.org/content/vindr-mammo/1.0.0/", "原生框；需 CITI", kind="detection"),
                    ds("CBIS-DDSM", "https://www.cancerimagingarchive.net/collection/cbis-ddsm/", "TCIA", kind="detection"),
                    ds("INbreast", "https://www.kaggle.com/datasets/ramanathansp20/inbreast-dataset", "经典；核许可", kind="detection"),
                ],
                "乳腺",
            ),
            sub(
                "breast-us",
                "二级：乳腺超声 · 肿块检测",
                "超声",
                "检测 / 分割转框",
                "ready",
                [
                    ds("BUSI", "https://www.kaggle.com/datasets/aryashah2k/breast-ultrasound-images-dataset", "分割→框", kind="seg→box"),
                    ds("BUSI Curated Zenodo", "https://doi.org/10.5281/zenodo.19047974", "整理版", kind="seg→box"),
                ],
                "乳腺超声",
            ),
        ],
    ),
    dept(
        "thyroid",
        "甲状腺外科 / 内分泌",
        "甲状腺超声结节",
        [
            sub(
                "thyroid-us",
                "二级：甲状腺超声 · 结节检测",
                "超声",
                "检测 / 分割转框",
                "ready",
                [
                    ds("TN3K", "https://github.com/haifangong/TRFE-Net-for-thyroid-nodule-segmentation", "分割转框常用", kind="seg→box"),
                    ds("TN3K HuggingFace", "https://huggingface.co/datasets/haifan-gong/TN3K", "镜像", kind="seg→box"),
                    ds("DDTI", "https://www.kaggle.com/datasets/dasmehdixtr/ddti-thyroid-ultrasound-images", "小集易下", kind="seg→box"),
                    ds("TN-SCUI 2020", "https://tn-scui2020.grand-challenge.org/", "挑战赛", kind="seg→box"),
                ],
                "甲状腺",
            ),
        ],
    ),
    dept(
        "ophthalmology",
        "眼科",
        "眼底彩照、血管、OCT",
        [
            sub(
                "fundus-lesion",
                "二级：眼底彩照 · 糖网病灶检测",
                "眼底照相",
                "病灶框 / 分割",
                "ready",
                [
                    ds("IDRiD", "https://idrid.grand-challenge.org/", "糖网病灶定位", kind="detection"),
                    ds("DDR", "https://github.com/nkicsl/DDR-dataset", "分级+病灶", kind="detection"),
                ],
                "眼底",
            ),
            sub(
                "fundus-vessel",
                "二级：眼底 · 血管分割（可转检测）",
                "眼底照相",
                "分割",
                "partial",
                [
                    ds("FIVES", "https://doi.org/10.6084/m9.figshare.19688169.v1", "血管分割", kind="segmentation"),
                    ds("DRIVE", "https://drive.grand-challenge.org/", "经典血管", kind="segmentation"),
                    ds("CHASE_DB1", "https://blogs.kingston.ac.uk/retinal/chasedb1/", "儿童眼底", kind="segmentation"),
                    ds("STARE", "https://cecas.clemson.edu/~ahoover/stare/", "小样本", kind="segmentation"),
                ],
                "fundus-vessel-yolo",
            ),
            sub(
                "fundus-oct",
                "二级：眼底 OCT · 积液 / 病灶",
                "OCT",
                "分割 / 检测",
                "partial",
                [
                    ds("RETOUCH", "https://retouch.grand-challenge.org/", "OCT 积液分割", kind="segmentation"),
                ],
                "眼底OCT",
            ),
        ],
    ),
    dept(
        "dermatology",
        "皮肤科",
        "皮肤镜与全身皮损摄影",
        [
            sub(
                "skin-lesion",
                "二级：皮损 · 皮肤镜 / 临床照检测",
                "皮肤镜 / 临床照",
                "检测 / 分类",
                "ready",
                [
                    ds("iToBoS", "https://doi.org/10.1038/s41597-025-05483-x", "全身摄影 YOLO 框", kind="detection"),
                    ds("ISIC Archive", "https://www.isic-archive.com/", "皮肤镜总入口", kind="mixed"),
                    ds("HAM10000", "https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/DBW86T", "7 类皮损", kind="classification"),
                ],
                "skin",
            ),
        ],
    ),
    dept(
        "neurology",
        "神经内科 / 神经外科",
        "脑肿瘤与头颅 CT 急症",
        [
            sub(
                "brain-tumor-mri",
                "二级：脑肿瘤 · MRI/CT 检测",
                "MRI / CT",
                "检测 / 分割转框",
                "ready",
                [
                    ds("Br35H", "https://www.kaggle.com/datasets/ahmedhamada0/brain-tumor-detection", "YOLO 友好", kind="detection"),
                    ds("Br35H YOLO 参考", "https://github.com/mkang315/RCS-YOLO/tree/main/dataset-Br35H", "标注参考", kind="detection"),
                    ds("BraTS", "https://www.synapse.org/", "胶质瘤分割年更", kind="seg→box"),
                ],
                "脑",
            ),
            sub(
                "brain-ct-bleed",
                "二级：头颅 CT · 出血 / 急症",
                "CT",
                "检测 / 分类",
                "partial",
                [
                    ds("CQ500", "http://headctstudy.qure.ai/dataset", "头颅 CT 急症", kind="classification"),
                ],
                "脑",
            ),
        ],
    ),
    dept(
        "orthopedics",
        "骨科 / 放射骨科",
        "骨折与骨质疏松",
        [
            sub(
                "fracture-general",
                "二级：全身骨折 · X 光检测",
                "X 线",
                "骨折检测",
                "ready",
                [
                    ds("FracAtlas", "https://doi.org/10.6084/m9.figshare.22363012", "框+分割；多部位", kind="detection"),
                    ds("Bone Fracture Detection (YOLO 常用镜像)", "https://www.kaggle.com/datasets/pkdarabi/bone-fracture-detection-computer-vision-project", "多部位骨折框；核许可", kind="detection"),
                ],
                "骨骼骨折",
            ),
            sub(
                "fracture-wrist",
                "二级：腕关节 · 儿童腕骨折检测",
                "X 线",
                "骨折检测",
                "ready",
                [
                    ds("GRAZPEDWRI-DX", "https://doi.org/10.6084/m9.figshare.14825193", "含 YOLO 格式", kind="detection"),
                    ds("GRAZPEDWRI-DX 论文", "https://doi.org/10.1038/s41597-022-01328-z", "Scientific Data", kind="detection"),
                ],
                "腕关节",
            ),
            sub(
                "fracture-spine",
                "二级：脊柱 · 椎体 / 骨折检测",
                "X 线 / CT",
                "检测",
                "ready",
                [
                    ds("VinDr-SpineXR", "https://physionet.org/content/vindr-spinexr/1.0.0/", "需 CITI", kind="detection"),
                    ds("RSNA Cervical Spine Fracture", "https://www.kaggle.com/c/rsna-2022-cervical-spine-fracture-detection", "颈椎骨折", kind="detection"),
                ],
                "脊柱",
            ),
            sub(
                "fracture-hip",
                "二级：髋部 · 骨折检测",
                "X 线",
                "骨折检测",
                "partial",
                [
                    ds("FracAtlas（髋子集）", "https://doi.org/10.6084/m9.figshare.22363012", "从 FracAtlas 筛髋", kind="detection"),
                ],
                "髋部",
            ),
            sub(
                "knee",
                "二级：膝关节 · X 线 / MRI",
                "X 线 / MRI",
                "检测 / 分割转框",
                "partial",
                [
                    ds("Knee Osteoarthritis Dataset (Kaggle)", "https://www.kaggle.com/datasets/tommyngx/kneeosteoarthritis", "分级为主；可辅定位", kind="classification"),
                    ds("MRNet", "https://stanfordmlgroup.github.io/competitions/mrnet/", "膝 MRI；ACL 等（申请）", kind="classification"),
                ],
                "膝关节",
                "原生骨折框少于腕/全身集",
            ),
            sub(
                "osteoporosis-lumbar",
                "二级：骨质疏松 · 腰椎筛查",
                "X 线 / CT",
                "筛查 / 检测",
                "partial",
                [
                    ds("LUMOS", "https://keyueshi.github.io/LUMOS/", "项目页", kind="mixed"),
                    ds("LUMOS Zenodo", "https://doi.org/10.5281/zenodo.18173664", "约 46GB", "CC BY-NC 4.0", "mixed"),
                ],
                "骨质疏松",
            ),
        ],
    ),
    dept(
        "urology",
        "泌尿外科",
        "肾结石/肿瘤、膀胱镜、前列腺",
        [
            sub(
                "kidney-stone",
                "二级：肾结石 · 目标检测",
                "超声 / CT",
                "目标检测",
                "partial",
                [
                    ds("Kidney Stone Images (YOLO)", "https://www.kaggle.com/datasets/safurahajiheidari/kidney-stone-images", "起步推荐", kind="detection"),
                ],
                "肾",
            ),
            sub(
                "kidney-tumor",
                "二级：肾肿瘤 · CT 分割转框",
                "CT",
                "分割转框",
                "partial",
                [
                    ds("KiTS23", "https://kits-challenge.org/kits23/", "肾肿瘤分割→框", kind="seg→box"),
                ],
                "肾",
            ),
            sub(
                "cystoscopy",
                "二级：膀胱镜 · 膀胱肿瘤 / 多类病灶",
                "膀胱镜",
                "分类 / 分割（部分可转框）",
                "partial",
                [
                    ds("CystoDS", "https://github.com/liaolabsu/CystoDS", "8067 张；分类+部分分割", kind="classification"),
                    ds("CystoDS 论文/Scientific Data", "https://www.nature.com/search?q=CystoDS+cystoscopy", "以 GitHub README 最终 DOI 为准", kind="classification"),
                ],
                "膀胱镜",
                "原生检测框少于息肉线；分割可转框",
            ),
            sub(
                "prostate-mri",
                "二级：前列腺 · MRI",
                "MRI",
                "分割为主",
                "partial",
                [
                    ds("PROSTATEx", "https://www.cancerimagingarchive.net/collection/prostatex/", "TCIA", kind="seg→box"),
                    ds("Prostate158", "https://doi.org/10.5281/zenodo.6481141", "前列腺 MRI 分割", kind="seg→box"),
                ],
                "前列腺",
            ),
        ],
    ),
    dept(
        "obgyn",
        "妇产科",
        "内膜异位、宫颈、胎儿超声",
        [
            sub(
                "endometriosis-lap",
                "二级：子宫内膜异位 · 腹腔镜病灶",
                "腹腔镜",
                "检测 / 分割",
                "partial",
                [
                    ds("GLENDA", "https://ftp.itec.aau.at/datasets/GLENDA/", "腹腔镜病灶", kind="detection"),
                ],
                "endometriosis-yolo",
            ),
            sub(
                "endometriosis-mri",
                "二级：子宫内膜异位 · 盆腔 MRI",
                "MRI",
                "分割 / 转框",
                "partial",
                [
                    ds("UT-EndoMRI", "https://zenodo.org/records/13749613", "盆腔 MRI", kind="segmentation"),
                ],
                "endometriosis-seg",
            ),
            sub(
                "cervix",
                "二级：宫颈 · 阴道镜 / 细胞学",
                "阴道镜 / 细胞学",
                "分类为主（公开原生框较少）",
                "partial",
                [
                    ds("IARC Cervical Cancer Image Bank", "https://screening.iarc.fr/cervicalimagebank.php", "官方图库；需申请", kind="classification"),
                    ds("IARC Colposcopy Atlas（入口）", "https://screening.iarc.fr/", "阴道镜图谱资源", kind="classification"),
                    ds("IARC Image ColpoBank（IEEE DataPort）", "https://ieee-dataport.org/documents/iarc-image-colpobank", "衍生整理；核许可", kind="classification"),
                    ds("Zenodo 检索 colposcopy", "https://zenodo.org/search?q=colposcopy", "逐条核标注类型", kind="mixed"),
                ],
                "宫颈",
                "多数为分类；带框公开集需逐条核",
            ),
            sub(
                "fetal-us",
                "二级：胎儿超声 · 切面 / 测量定位",
                "产科超声",
                "定位 / 检测",
                "partial",
                [
                    ds("HC18", "https://hc18.grand-challenge.org/", "胎头围", kind="detection"),
                    ds("FETAL_PLANES_DB", "https://zenodo.org/records/3904280", "标准切面", kind="classification"),
                ],
                "胎儿超声",
            ),
        ],
    ),
    dept(
        "stomatology",
        "口腔科 / 口腔颌面",
        "全景片病灶检测",
        [
            sub(
                "oral-opg",
                "二级：口腔全景 OPG · 多类病灶检测",
                "X 线全景",
                "多类检测",
                "partial",
                [
                    ds("DENTEX", "https://dentex.grand-challenge.org/", "全景检测挑战", kind="detection"),
                    ds("Dental OPG XRAY（项目常用）", "", "成稿 6 类；补官方页", kind="detection"),
                ],
                "oral-yolo",
            ),
        ],
    ),
    dept(
        "pathology-lab",
        "病理科 / 检验显微",
        "病理切片与血细胞显微检测",
        [
            sub(
                "pathology-nuclei",
                "二级：病理 · 细胞核实例检测",
                "病理切片",
                "实例→框",
                "ready",
                [
                    ds("PanNuke", "https://warwick.ac.uk/fac/cross_fac/tia/data/pannuke", "核→框", kind="detection"),
                    ds("CoNSeP", "https://warwick.ac.uk/fac/cross_fac/tia/data/hovernet/", "核分割入口", kind="seg→box"),
                ],
                "病理切片",
            ),
            sub(
                "pathology-metastasis",
                "二级：病理 · 淋巴结转移检测",
                "WSI",
                "检测 / 分类",
                "partial",
                [
                    ds("Camelyon17", "https://camelyon17.grand-challenge.org/", "转移灶", kind="detection"),
                    ds("Camelyon16", "https://camelyon16.grand-challenge.org/", "前代挑战", kind="detection"),
                ],
                "病理切片",
            ),
            sub(
                "blood-cell",
                "二级：血细胞 · 显微目标检测",
                "显微",
                "目标检测",
                "ready",
                [
                    ds("BCCD", "https://github.com/Shenggan/BCCD_Dataset", "VOC 框；最易起步", kind="detection"),
                ],
                "血细胞",
            ),
            sub(
                "lymph-node-us",
                "二级：浅表淋巴结 · 超声/CT",
                "超声 / CT",
                "检测",
                "partial",
                [
                    ds("检索：axillary lymph node ultrasound dataset", "https://zenodo.org/search?q=lymph%20node%20ultrasound", "逐条核框标注", kind="mixed"),
                    ds("DeepLesion（淋巴结相关）", "https://nihcc.box.com/v/DeepLesion", "CT 病灶框可筛淋巴结区", kind="detection"),
                ],
                "淋巴结",
            ),
        ],
    ),
]

n_sub = sum(len(d["children"]) for d in depts)
n_ds = sum(len(c["datasets"]) for d in depts for c in d["children"])
empty = sum(1 for d in depts for c in d["children"] if not c["datasets"])

payload = {
    "meta": {
        "title": "医学影像数据集目录",
        "subtitle": "科室 → 二级标题（病症/模态）→ 各类型公开数据集与链接",
        "updated": "2026-08-10",
        "structure": "department → secondary title → datasets",
        "scope": "优先目标检测；含可转外接框的分割集与少数分类入口",
    },
    "departments": depts,
    "categories": [],
}
for d in depts:
    for c in d["children"]:
        payload["categories"].append({**c, "department_id": d["id"], "department_zh": d["name_zh"]})

OUT.write_text(
    "/** 医学影像公开数据集目录 — 科室 → 二级标题 → 数据集类型与链接。 */\n"
    + "window.IMAGING_DATASETS = "
    + json.dumps(payload, ensure_ascii=False, indent=2)
    + ";\n",
    encoding="utf-8",
)
print(f"depts={len(depts)} secondary={n_sub} datasets={n_ds} empty_secondary={empty}")
