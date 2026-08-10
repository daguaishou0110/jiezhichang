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
                "ready",
                [
                    ds("GastroVision", "https://osf.io/84e7f/", "8000 张；27 类上下消化道；OSF 直下", kind="classification"),
                    ds("GastroVision GitHub", "https://github.com/DebeshJha/GastroVision", "说明与引用", kind="classification"),
                    ds("HyperKvasir", "https://datasets.simula.no/hyper-kvasir/", "大规模多类内镜", kind="classification"),
                    ds("HyperKvasir OSF", "https://osf.io/mh9sj", "镜像下载", kind="classification"),
                    ds("Kvasir", "https://datasets.simula.no/kvasir/", "经典内镜分类", kind="classification"),
                    ds("EDD2020（含胃/食管/肠）", "https://edd2020.grand-challenge.org/", "多类框+掩膜；含 Barrett/息肉等", kind="detection"),
                    ds("EDD2020 IEEE DataPort", "https://ieee-dataport.org/competitions/endoscopy-disease-detection-and-segmentation-edd2020", "官方数据镜像", kind="detection"),
                ],
                "胃镜",
            ),
            sub(
                "esophagus",
                "二级：食管 · Barrett / 早癌内镜",
                "食管内镜",
                "检测 / 分割转框",
                "ready",
                [
                    ds("EDD2020", "https://edd2020.grand-challenge.org/", "含 BE / suspicious / HGD / cancer 框与掩膜", kind="detection"),
                    ds("EDD2020 Kaggle 镜像", "https://www.kaggle.com/datasets/orvile/edd2020-endoscopy-detection-and-segmentation", "386 张；VOC 框", kind="detection"),
                    ds("EDD2020 GitHub", "https://github.com/sharib-vision/EDD2020", "类别与评测脚本", kind="detection"),
                    ds("GastroVision（Barrett 等类）", "https://osf.io/84e7f/", "多类含 Barrett’s Esophagus", kind="classification"),
                    ds("HyperKvasir（食管相关类）", "https://datasets.simula.no/hyper-kvasir/", "从多类筛食管标签", kind="classification"),
                ],
                "食管",
            ),
            sub(
                "capsule",
                "二级：胶囊内镜 · 小肠病灶",
                "胶囊内镜",
                "分类 / 部分检测（含框）",
                "ready",
                [
                    ds("Kvasir-Capsule", "https://datasets.simula.no/kvasir-capsule/", "47238 标注帧；部分含 anomaly 框", kind="detection"),
                    ds("Kvasir-Capsule OSF", "https://osf.io/dv2ag", "labeled-images 直下", kind="detection"),
                    ds("Kvasir-Capsule GitHub", "https://github.com/simula/kvasir-capsule", "说明与镜像链接", kind="detection"),
                    ds("Kvasir-Capsule Scientific Data", "https://doi.org/10.1038/s41597-021-00920-z", "正式论文与数据说明", kind="detection"),
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
                    ds("MSD Pancreas (Task07)", "http://medicaldecathlon.com/", "Medical Decathlon 胰腺分割", kind="seg→box"),
                    ds("NIH Pancreas-CT (TCIA)", "https://www.cancerimagingarchive.net/collection/pancreas-ct/", "82 例腹 CT 胰腺掩膜", kind="seg→box"),
                    ds("DeepLesion（胰区）", "https://nihcc.box.com/v/DeepLesion", "多器官框筛胰", kind="detection"),
                    ds("AMOS22（含胰腺）", "https://amos22.grand-challenge.org/", "腹多器官分割含胰", kind="seg→box"),
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
                    ds("LUS-BALD（Mendeley）", "https://data.mendeley.com/datasets/h923m366sf/1", "401 张；YOLO 多边形框；CC BY 4.0", kind="detection"),
                    ds("LUS-BALD DOI", "https://doi.org/10.17632/h923m366sf.2", "Mendeley Data V2", kind="detection"),
                    ds("LUS-BALD Scientific Data", "https://doi.org/10.1038/s41597-025-05854-4", "论文说明", kind="detection"),
                    ds("LUS-BALD 预处理代码", "https://github.com/Marconi-Lab/lus-bline-artifact-prep/", "预处理脚本", kind="detection"),
                    ds("POCUS COVID ultrasound", "https://github.com/jannisborn/covid19_pocus_ultrasound", "COVID 肺超声分类补充", kind="classification"),
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
                    ds("LNDb", "https://lndb.grand-challenge.org/", "肺结节检测挑战", kind="detection"),
                    ds("Node21", "https://node21.grand-challenge.org/", "胸片结节检测", kind="detection"),
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
                "分割 / 定位衍生",
                "ready",
                [
                    ds("CAMUS", "https://www.creatis.insa-lyon.fr/Challenge/camus/", "500 例 2D 心超；LV/LA 分割", kind="seg→box"),
                    ds("CAMUS 数据下载", "https://humanheart-project.creatis.insa-lyon.fr/database/", "CREATIS Human Heart Project", kind="seg→box"),
                    ds("EchoNet-Dynamic", "https://echonet.github.io/dynamic/", "视频心超；需申请", kind="video"),
                    ds("EchoNet-LVH", "https://echonet.github.io/LVH/", "左室肥厚相关；需申请", kind="video"),
                ],
                "心脏超声",
            ),
            sub(
                "carotid",
                "二级：颈动脉超声 · 斑块检测",
                "超声",
                "斑块分割 / 检测",
                "ready",
                [
                    ds("Ar-PlaqSegm1（Mendeley）", "https://doi.org/10.17632/8srkpz52dy.2", "阿根廷颈动脉 B 超斑块分割；CC BY", kind="seg→box"),
                    ds("Ar-PlaqSegm1 Scientific Data", "https://www.nature.com/articles/s41597-026-06952-7", "论文与数据说明", kind="seg→box"),
                    ds("颈动脉斑块运动序列（Figshare）", "https://doi.org/10.6084/m9.figshare.22086377.v4", "B-mode 序列；含 YOLO 相关数据", kind="detection"),
                    ds("多中心斑块检测论文（数据需申请）", "https://doi.org/10.31083/j.rcm2512454", "5611 张；非全公开，见原文申请", kind="detection"),
                ],
                "颈动脉",
                "大规模多中心集常需申请；Ar-PlaqSegm1 可直接下",
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
                    ds("BUS-BRA", "https://doi.org/10.5281/zenodo.8231412", "1875 张 / 1064 患者；含分割与 BI-RADS", kind="seg→box"),
                    ds("BUS-BRA GitHub", "https://github.com/wgomezf/BUS-BRA", "分割/分类复现代码", kind="seg→box"),
                    ds("OASBUD", "https://doi.org/10.5281/zenodo.545928", "乳腺超声；含 ROI", kind="seg→box"),
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
                    ds("APTOS 2019", "https://www.kaggle.com/c/aptos2019-blindness-detection", "糖网分级（分类）", kind="classification"),
                    ds("Messidor-2", "https://www.adcis.net/en/third-party/messidor2/", "糖网分级经典；需注册", kind="classification"),
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
                    ds("RETOUCH", "https://retouch.grand-challenge.org/", "OCT 积液分割挑战", kind="segmentation"),
                    ds("OCTDL", "https://doi.org/10.5281/zenodo.10370472", "2000+ B-scan；AMD/DME 等多类", kind="classification"),
                    ds("OCTDL Scientific Data", "https://doi.org/10.1038/s41597-024-03182-7", "论文说明", kind="classification"),
                    ds("Kermany OCT", "https://data.mendeley.com/datasets/rscbjbr9sj/2", "CNV/DME/Drusen/Normal 大规模", kind="classification"),
                    ds("Duke OCT（Srinivasan 2014）", "https://people.duke.edu/~sf59/Srinivasan_BOE_2014_dataset.htm", "正常/干性AMD/DME 体积", kind="classification"),
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
                    ds("ISIC Archive", "https://www.isic-archive.com/", "皮肤镜总入口；可下挑战子集", kind="mixed"),
                    ds("ISIC 2018 Challenge", "https://challenge.isic-archive.com/landing/2018/", "病变分割+分类", kind="seg→box"),
                    ds("HAM10000", "https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/DBW86T", "7 类皮损", kind="classification"),
                    ds("PAD-UFES-20", "https://doi.org/10.17632/zr7vgbf538.1", "临床皮损照+元数据", kind="classification"),
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
                    ds("BraTS 2023（Synapse）", "https://www.synapse.org/#!Synapse:syn51156910", "胶质瘤分割年更；需注册", kind="seg→box"),
                    ds("BraTS 挑战门户", "https://www.synapse.org/brats", "历年入口", kind="seg→box"),
                    ds("Figshare Brain Tumor MRI", "https://doi.org/10.6084/m9.figshare.1512427.v5", "Cheng 脑肿瘤 MRI 分类经典", kind="classification"),
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
                    ds("CQ500", "http://headctstudy.qure.ai/dataset", "491 例头颅 CT 急症（含 ICH）", kind="classification"),
                    ds("RSNA Intracranial Hemorrhage", "https://www.kaggle.com/c/rsna-intracranial-hemorrhage-detection", "大规模 ICH 亚型分类", kind="classification"),
                    ds("PhysioNet CT-ICH", "https://physionet.org/content/ct-ich/", "75 例公开；切片级出血分割", kind="seg→box"),
                    ds("BHX（Brain Hemorrhage Extended）", "https://physionet.org/content/bhx-brain-bounding-box/", "ICH 边界框扩展标注", kind="detection"),
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
                    ds("FracAtlas（髋子集）", "https://doi.org/10.6084/m9.figshare.22363012", "全身骨折集含髋；YOLO/COCO", kind="detection"),
                    ds("FracAtlas Scientific Data", "https://doi.org/10.1038/s41597-023-02432-4", "论文说明", kind="detection"),
                    ds("MURA（含肩/肘等；异常分类）", "https://stanfordmlgroup.github.io/competitions/mura/", "骨骼 X 线异常分类；可辅筛", kind="classification"),
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
                    ds("Knee Osteoarthritis Dataset (Kaggle)", "https://www.kaggle.com/datasets/tommyngx/kneeosteoarthritis", "分级为主", kind="classification"),
                    ds("MRNet", "https://stanfordmlgroup.github.io/competitions/mrnet/", "膝 MRI；ACL 等（申请）", kind="classification"),
                    ds("PlaTiF 胫骨平台骨折", "https://zenodo.org/records/18007397", "膝 X 线+冠状 CT；Schatzker 分级", kind="classification"),
                    ds("OAI（Osteoarthritis Initiative）", "https://nda.nih.gov/oai", "大规模膝 OA；需申请", kind="classification"),
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
                    ds("Kidney Stone Images (YOLO)", "https://www.kaggle.com/datasets/safurahajiheidari/kidney-stone-images", "起步推荐；YOLO 框", kind="detection"),
                    ds("CT Kidney Dataset (Kaggle)", "https://www.kaggle.com/datasets/nazmul0087/ct-kidney-dataset-normal-cyst-tumor-stone", "正常/囊肿/肿瘤/结石四类 CT", kind="classification"),
                    ds("KiTS23（可筛结石相关）", "https://kits-challenge.org/kits23/", "肾/肿瘤分割；结石需另筛", kind="seg→box"),
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
                    ds("KiTS21", "https://kits-challenge.org/kits21/", "前代挑战", kind="seg→box"),
                    ds("KiTS19", "https://kits19.grand-challenge.org/", "经典肾肿瘤分割", kind="seg→box"),
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
                    ds("CystoDS OSF 下载", "https://osf.io/xvdhy/", "8067 张 / 160 患者；768 张分割", kind="classification"),
                    ds("CystoDS Scientific Data", "https://doi.org/10.1038/s41597-026-06887-z", "正式论文 DOI", kind="classification"),
                    ds("CystoDS GitHub", "https://github.com/liaolabsu/CystoDS", "代码与说明", kind="classification"),
                    ds("CystoDS OSF DOI", "https://doi.org/10.17605/OSF.IO/XVDHY", "OSF 持久标识", kind="classification"),
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
                    ds("GLENDA", "https://ftp.itec.aau.at/datasets/GLENDA/", "腹腔镜子宫内膜异位病灶", kind="detection"),
                    ds("EndoVis / MICCAI 内镜挑战入口", "https://endovis.grand-challenge.org/", "多届腹腔镜/内镜挑战总入口", kind="mixed"),
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
                    ds("Intel & MobileODT Cervical（Kaggle）", "https://www.kaggle.com/competitions/intel-mobileodt-cervical-cancer-screening", "阴道镜宫颈类型三分类；公开竞赛数据", kind="classification"),
                    ds("MobileODT 精炼子集（Zenodo）", "https://doi.org/10.5281/zenodo.19212544", "人工质控 ROI；766 张", kind="classification"),
                    ds("IARC Cervical Cancer Image Bank", "https://screening.iarc.fr/cervicalimagebank.php", "官方图库；需申请", kind="classification"),
                    ds("IARC Image ColpoBank（IEEE DataPort）", "https://ieee-dataport.org/documents/iarc-image-colpobank", "约 200 例患者阴道镜；需登录", kind="classification"),
                    ds("HyCervix 高光谱阴道镜", "https://zenodo.org/records/18208664", "77 例 HS 立方；GitHub: carlosvegagc/HyCervix", kind="classification"),
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
                    ds("HC18", "https://hc18.grand-challenge.org/", "胎头围测量", kind="detection"),
                    ds("FETAL_PLANES_DB", "https://zenodo.org/records/3904280", "标准切面分类", kind="classification"),
                    ds("FPUS23 胎儿平面（GitHub）", "https://github.com/bharathprabakaran/FPUS23", "体模超声；含平面/方位/框", kind="detection"),
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
                    ds("DENTEX", "https://dentex.grand-challenge.org/", "全景牙位/诊断分层检测挑战", kind="detection"),
                    ds("DENTEX GitHub", "https://github.com/ibrahimethemhamamci/DENTEX", "说明与引用", kind="detection"),
                    ds("Tufts Dental Database", "https://tdd.tufts.edu/", "牙科全景等；核许可与申请", kind="mixed"),
                    ds("Children's Dental Panoramic Radiographs", "https://doi.org/10.6084/m9.figshare.14806545.v3", "儿童全景；常用公开补充", kind="classification"),
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
                    ds("BCCD Kaggle 镜像", "https://www.kaggle.com/datasets/coldfir3/bccd-dataset-with-yolov5-labels", "YOLO 标签镜像", kind="detection"),
                    ds("Raabin-WBC", "https://raabindata.com/free-data/", "白细胞分类/检测公开集", kind="detection"),
                    ds("LISC", "http://users.cecs.anu.edu.au/~hrezatofighi/Data/Leukocyte%20Data.htm", "白细胞分割经典小集", kind="seg→box"),
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
                    ds("ALN-Ultra（Zenodo）", "https://zenodo.org/records/18483501", "257 例早期乳腺癌腋窝淋巴结超声图+视频", kind="classification"),
                    ds("Breast & LN US（Figshare 子集）", "https://doi.org/10.6084/m9.figshare.30112000.v2", "乳腺+腋窝淋巴结超声；含 Labelme 标注", kind="detection"),
                    ds("LLNM 多模态（HuggingFace）", "https://huggingface.co/datasets/Snowinbio/LLNM_Multimodal_dataset", "甲状腺侧颈淋巴结；需同意条款", kind="classification"),
                    ds("DeepLesion（淋巴结相关 CT）", "https://nihcc.box.com/v/DeepLesion", "CT 病灶框可筛淋巴结区", kind="detection"),
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
        "note": "条目经联网核实到具体下载页/DOI；检索页与空链接已替换",
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
