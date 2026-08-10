/** 医学影像公开数据集目录 — 科室 → 二级标题 → 数据集类型与链接。 */
window.IMAGING_DATASETS = {
  "meta": {
    "title": "医学影像数据集目录",
    "subtitle": "科室 → 二级标题（病症/模态）→ 各类型公开数据集与链接",
    "updated": "2026-08-10",
    "note": "条目经联网核实到具体下载页/DOI；检索页与空链接已替换",
    "structure": "department → secondary title → datasets",
    "scope": "优先目标检测；含可转外接框的分割集与少数分类入口"
  },
  "departments": [
    {
      "id": "gi",
      "name_zh": "消化内科 / 消化内镜科",
      "blurb": "结肠镜、胃镜、食管、胶囊等消化道影像",
      "children": [
        {
          "id": "colorectal-polyp-det",
          "name_zh": "二级：结直肠息肉 · 目标检测",
          "modality": "结肠镜",
          "task": "目标检测（原生框 / 分割转框）",
          "status": "ready",
          "local": "colorectal-yolo",
          "datasets": [
            {
              "name": "Kvasir-SEG",
              "url": "https://datasets.simula.no/kvasir-seg/",
              "note": "1000 张；分割可转框；YOLO 常用",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "CVC-ClinicDB",
              "url": "https://polyp.grand-challenge.org/CVCClinicDB/",
              "note": "612 张；跨源常用",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "CVC-ColonDB",
              "url": "https://polyp.grand-challenge.org/CVCColonDB/",
              "note": "外测经典",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "ETIS-LaribPolypDB",
              "url": "https://polyp.grand-challenge.org/ETISLarib/",
              "note": "小目标难例",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "PolypGen",
              "url": "https://www.synapse.org/#!Synapse:syn45200214",
              "note": "多中心；需 Synapse",
              "license": "",
              "kind": "seg/box"
            },
            {
              "name": "PolypDB",
              "url": "https://osf.io/pr7ms/",
              "note": "多中心多模态；含 bounding boxes",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "REAL-Colon",
              "url": "https://doi.org/10.25452/figshare.plus.22202866",
              "note": "视频级框；大规模",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "GPolypOD",
              "url": "https://doi.org/10.57760/sciencedb.j00001.01467",
              "note": "2026 胃肠镜息肉检测",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "PICCOLO",
              "url": "https://www.biobancovasco.org/en/Sample-and-data-catalog/Databases/PD-PICCOLO-EN.html",
              "note": "WLI/NBI；框+掩膜",
              "license": "",
              "kind": "detection"
            }
          ],
          "todo": ""
        },
        {
          "id": "gastroscopy-multi",
          "name_zh": "二级：胃镜 · 上消化道多类病灶",
          "modality": "胃镜",
          "task": "分类 / 部分可做定位",
          "status": "ready",
          "local": "胃镜",
          "datasets": [
            {
              "name": "GastroVision",
              "url": "https://osf.io/84e7f/",
              "note": "8000 张；27 类上下消化道；OSF 直下",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "GastroVision GitHub",
              "url": "https://github.com/DebeshJha/GastroVision",
              "note": "说明与引用",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "HyperKvasir",
              "url": "https://datasets.simula.no/hyper-kvasir/",
              "note": "大规模多类内镜",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "HyperKvasir OSF",
              "url": "https://osf.io/mh9sj",
              "note": "镜像下载",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "Kvasir",
              "url": "https://datasets.simula.no/kvasir/",
              "note": "经典内镜分类",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "EDD2020（含胃/食管/肠）",
              "url": "https://edd2020.grand-challenge.org/",
              "note": "多类框+掩膜；含 Barrett/息肉等",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "EDD2020 IEEE DataPort",
              "url": "https://ieee-dataport.org/competitions/endoscopy-disease-detection-and-segmentation-edd2020",
              "note": "官方数据镜像",
              "license": "",
              "kind": "detection"
            }
          ],
          "todo": ""
        },
        {
          "id": "esophagus",
          "name_zh": "二级：食管 · Barrett / 早癌内镜",
          "modality": "食管内镜",
          "task": "检测 / 分割转框",
          "status": "ready",
          "local": "食管",
          "datasets": [
            {
              "name": "EDD2020",
              "url": "https://edd2020.grand-challenge.org/",
              "note": "含 BE / suspicious / HGD / cancer 框与掩膜",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "EDD2020 Kaggle 镜像",
              "url": "https://www.kaggle.com/datasets/orvile/edd2020-endoscopy-detection-and-segmentation",
              "note": "386 张；VOC 框",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "EDD2020 GitHub",
              "url": "https://github.com/sharib-vision/EDD2020",
              "note": "类别与评测脚本",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "GastroVision（Barrett 等类）",
              "url": "https://osf.io/84e7f/",
              "note": "多类含 Barrett’s Esophagus",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "HyperKvasir（食管相关类）",
              "url": "https://datasets.simula.no/hyper-kvasir/",
              "note": "从多类筛食管标签",
              "license": "",
              "kind": "classification"
            }
          ],
          "todo": ""
        },
        {
          "id": "capsule",
          "name_zh": "二级：胶囊内镜 · 小肠病灶",
          "modality": "胶囊内镜",
          "task": "分类 / 部分检测（含框）",
          "status": "ready",
          "local": "胶囊内镜",
          "datasets": [
            {
              "name": "Kvasir-Capsule",
              "url": "https://datasets.simula.no/kvasir-capsule/",
              "note": "47238 标注帧；部分含 anomaly 框",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "Kvasir-Capsule OSF",
              "url": "https://osf.io/dv2ag",
              "note": "labeled-images 直下",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "Kvasir-Capsule GitHub",
              "url": "https://github.com/simula/kvasir-capsule",
              "note": "说明与镜像链接",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "Kvasir-Capsule Scientific Data",
              "url": "https://doi.org/10.1038/s41597-021-00920-z",
              "note": "正式论文与数据说明",
              "license": "",
              "kind": "detection"
            }
          ],
          "todo": ""
        }
      ]
    },
    {
      "id": "hepatobiliary",
      "name_zh": "肝胆胰外科 / 腹部影像",
      "blurb": "肝肿瘤、胰腺、胆囊、腹部多器官病灶",
      "children": [
        {
          "id": "liver-ct-tumor",
          "name_zh": "二级：肝 CT · 小肿瘤 / 肝病灶检测",
          "modality": "CT",
          "task": "目标检测 / 分割转框",
          "status": "ready",
          "local": "liver-yolo",
          "datasets": [
            {
              "name": "SLTD",
              "url": "https://github.com/XLIAaron/Small_LiverTumor",
              "note": "小肝肿瘤检测；成稿主集",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "LiTS",
              "url": "https://competitions.codalab.org/competitions/17094",
              "note": "肝/肿瘤分割→外接框",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "DeepLesion（肝区子集）",
              "url": "https://nihcc.box.com/v/DeepLesion",
              "note": "多器官病灶框筛肝",
              "license": "",
              "kind": "detection"
            }
          ],
          "todo": ""
        },
        {
          "id": "pancreas-ct",
          "name_zh": "二级：胰腺 CT · 病灶",
          "modality": "CT",
          "task": "分割转框",
          "status": "partial",
          "local": "胰腺",
          "datasets": [
            {
              "name": "MSD Pancreas (Task07)",
              "url": "http://medicaldecathlon.com/",
              "note": "Medical Decathlon 胰腺分割",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "NIH Pancreas-CT (TCIA)",
              "url": "https://www.cancerimagingarchive.net/collection/pancreas-ct/",
              "note": "82 例腹 CT 胰腺掩膜",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "DeepLesion（胰区）",
              "url": "https://nihcc.box.com/v/DeepLesion",
              "note": "多器官框筛胰",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "AMOS22（含胰腺）",
              "url": "https://amos22.grand-challenge.org/",
              "note": "腹多器官分割含胰",
              "license": "",
              "kind": "seg→box"
            }
          ],
          "todo": ""
        },
        {
          "id": "gallbladder-us",
          "name_zh": "二级：胆囊超声 · 结石 / 息肉 / 癌灶",
          "modality": "超声",
          "task": "目标检测 / 分类",
          "status": "ready",
          "local": "胆囊",
          "datasets": [
            {
              "name": "GBCU（Gallbladder Cancer US）",
              "url": "https://gbc-iitd.github.io/data/gbcu",
              "note": "含 bbox；正常/良性/恶性",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "UIdataGB",
              "url": "https://doi.org/10.1016/j.dib.2024.110426",
              "note": "约 1 万张胆囊超声多类",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "UIdataGB Mendeley",
              "url": "https://data.mendeley.com/datasets/xtv5y2ddnh",
              "note": "数据下载入口（以论文为准）",
              "license": "",
              "kind": "classification"
            }
          ],
          "todo": ""
        },
        {
          "id": "abdomen-ct-lesion",
          "name_zh": "二级：腹部 CT · 多器官病灶框",
          "modality": "CT",
          "task": "病灶检测",
          "status": "ready",
          "local": "腹部CT",
          "datasets": [
            {
              "name": "DeepLesion",
              "url": "https://nihcc.box.com/v/DeepLesion",
              "note": "多器官病灶框首选",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "AMOS22",
              "url": "https://amos22.grand-challenge.org/",
              "note": "腹多器官分割",
              "license": "",
              "kind": "seg→box"
            }
          ],
          "todo": ""
        }
      ]
    },
    {
      "id": "respiratory",
      "name_zh": "呼吸科 / 胸外科",
      "blurb": "肺超声、肺结节、胸片、支气管镜",
      "children": [
        {
          "id": "lung-us-bline",
          "name_zh": "二级：肺超声 · B-line 检测",
          "modality": "肺超声",
          "task": "目标检测",
          "status": "partial",
          "local": "lung-yolo",
          "datasets": [
            {
              "name": "LUS-BALD（Mendeley）",
              "url": "https://data.mendeley.com/datasets/h923m366sf/1",
              "note": "401 张；YOLO 多边形框；CC BY 4.0",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "LUS-BALD DOI",
              "url": "https://doi.org/10.17632/h923m366sf.2",
              "note": "Mendeley Data V2",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "LUS-BALD Scientific Data",
              "url": "https://doi.org/10.1038/s41597-025-05854-4",
              "note": "论文说明",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "LUS-BALD 预处理代码",
              "url": "https://github.com/Marconi-Lab/lus-bline-artifact-prep/",
              "note": "预处理脚本",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "POCUS COVID ultrasound",
              "url": "https://github.com/jannisborn/covid19_pocus_ultrasound",
              "note": "COVID 肺超声分类补充",
              "license": "",
              "kind": "classification"
            }
          ],
          "todo": ""
        },
        {
          "id": "lung-ct-nodule",
          "name_zh": "二级：肺 CT · 结节检测",
          "modality": "CT",
          "task": "结节检测",
          "status": "ready",
          "local": "lung-yolo",
          "datasets": [
            {
              "name": "LUNA16",
              "url": "https://luna16.grand-challenge.org/Data/",
              "note": "结节坐标→框",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "LIDC-IDRI",
              "url": "https://www.cancerimagingarchive.net/collection/lidc-idri/",
              "note": "TCIA 精标",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "LNDb",
              "url": "https://lndb.grand-challenge.org/",
              "note": "肺结节检测挑战",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "Node21",
              "url": "https://node21.grand-challenge.org/",
              "note": "胸片结节检测",
              "license": "",
              "kind": "detection"
            }
          ],
          "todo": ""
        },
        {
          "id": "chest-xray",
          "name_zh": "二级：胸片 · 多病灶检测",
          "modality": "X 线胸片",
          "task": "多类病灶框",
          "status": "ready",
          "local": "胸部",
          "datasets": [
            {
              "name": "VinDr-CXR",
              "url": "https://physionet.org/content/vindr-cxr/1.0.0/",
              "note": "原生 bbox；需 CITI",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "RSNA Pneumonia Detection",
              "url": "https://www.kaggle.com/c/rsna-pneumonia-detection-challenge/data",
              "note": "肺炎框",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "NIH ChestX-ray14",
              "url": "https://nihcc.app.box.com/v/ChestXray-NIHCC",
              "note": "多标签；弱定位",
              "license": "",
              "kind": "classification"
            }
          ],
          "todo": ""
        },
        {
          "id": "bronchoscopy",
          "name_zh": "二级：支气管镜 · 解剖标志 / 气道病灶",
          "modality": "支气管镜",
          "task": "检测 / 分割定位",
          "status": "ready",
          "local": "支气管镜",
          "datasets": [
            {
              "name": "BM-BronchoLC",
              "url": "https://doi.org/10.1038/s41597-024-03145-y",
              "note": "地标+病灶定位；Scientific Data",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "UAAL（上气道地标）",
              "url": "https://doi.org/10.1038/s41597-025-06169-0",
              "note": "含 bbox 与实例分割",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "UAAL Figshare",
              "url": "https://doi.org/10.6084/m9.figshare.26342779",
              "note": "coco_ins 下载",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "Bronchoscopy unified HF",
              "url": "https://huggingface.co/datasets/chrisvoncsefalvay/single-bronchoscopy-depth",
              "note": "多源汇总入口",
              "license": "",
              "kind": "mixed"
            }
          ],
          "todo": ""
        }
      ]
    },
    {
      "id": "cardiology",
      "name_zh": "心内科 / 心血管影像",
      "blurb": "冠脉造影、心超、颈动脉斑块",
      "children": [
        {
          "id": "coronary-xca",
          "name_zh": "二级：冠脉造影 · 狭窄检测/分割",
          "modality": "XCA",
          "task": "分割 / 实例→框",
          "status": "ready",
          "local": "heart",
          "datasets": [
            {
              "name": "ARCADE",
              "url": "https://arcade.grand-challenge.org/",
              "note": "狭窄挑战",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "ARCADE Zenodo",
              "url": "https://doi.org/10.5281/zenodo.10390295",
              "note": "数据下载",
              "license": "",
              "kind": "seg→box"
            }
          ],
          "todo": ""
        },
        {
          "id": "echo",
          "name_zh": "二级：心脏超声 · 结构定位",
          "modality": "超声心动",
          "task": "分割 / 定位衍生",
          "status": "ready",
          "local": "心脏超声",
          "datasets": [
            {
              "name": "CAMUS",
              "url": "https://www.creatis.insa-lyon.fr/Challenge/camus/",
              "note": "500 例 2D 心超；LV/LA 分割",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "CAMUS 数据下载",
              "url": "https://humanheart-project.creatis.insa-lyon.fr/database/",
              "note": "CREATIS Human Heart Project",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "EchoNet-Dynamic",
              "url": "https://echonet.github.io/dynamic/",
              "note": "视频心超；需申请",
              "license": "",
              "kind": "video"
            },
            {
              "name": "EchoNet-LVH",
              "url": "https://echonet.github.io/LVH/",
              "note": "左室肥厚相关；需申请",
              "license": "",
              "kind": "video"
            }
          ],
          "todo": ""
        },
        {
          "id": "carotid",
          "name_zh": "二级：颈动脉超声 · 斑块检测",
          "modality": "超声",
          "task": "斑块分割 / 检测",
          "status": "ready",
          "local": "颈动脉",
          "datasets": [
            {
              "name": "Ar-PlaqSegm1（Mendeley）",
              "url": "https://doi.org/10.17632/8srkpz52dy.2",
              "note": "阿根廷颈动脉 B 超斑块分割；CC BY",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Ar-PlaqSegm1 Scientific Data",
              "url": "https://www.nature.com/articles/s41597-026-06952-7",
              "note": "论文与数据说明",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "颈动脉斑块运动序列（Figshare）",
              "url": "https://doi.org/10.6084/m9.figshare.22086377.v4",
              "note": "B-mode 序列；含 YOLO 相关数据",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "多中心斑块检测论文（数据需申请）",
              "url": "https://doi.org/10.31083/j.rcm2512454",
              "note": "5611 张；非全公开，见原文申请",
              "license": "",
              "kind": "detection"
            }
          ],
          "todo": "大规模多中心集常需申请；Ar-PlaqSegm1 可直接下"
        }
      ]
    },
    {
      "id": "breast",
      "name_zh": "乳腺外科 / 乳腺影像",
      "blurb": "钼靶与乳腺超声",
      "children": [
        {
          "id": "breast-mammo",
          "name_zh": "二级：钼靶 · 肿块 / 钙化检测",
          "modality": "钼靶",
          "task": "目标检测",
          "status": "ready",
          "local": "乳腺",
          "datasets": [
            {
              "name": "VinDr-Mammo",
              "url": "https://physionet.org/content/vindr-mammo/1.0.0/",
              "note": "原生框；需 CITI",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "CBIS-DDSM",
              "url": "https://www.cancerimagingarchive.net/collection/cbis-ddsm/",
              "note": "TCIA",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "INbreast",
              "url": "https://www.kaggle.com/datasets/ramanathansp20/inbreast-dataset",
              "note": "经典；核许可",
              "license": "",
              "kind": "detection"
            }
          ],
          "todo": ""
        },
        {
          "id": "breast-us",
          "name_zh": "二级：乳腺超声 · 肿块检测",
          "modality": "超声",
          "task": "检测 / 分割转框",
          "status": "ready",
          "local": "乳腺超声",
          "datasets": [
            {
              "name": "BUSI",
              "url": "https://www.kaggle.com/datasets/aryashah2k/breast-ultrasound-images-dataset",
              "note": "分割→框",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "BUSI Curated Zenodo",
              "url": "https://doi.org/10.5281/zenodo.19047974",
              "note": "整理版",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "BUS-BRA",
              "url": "https://doi.org/10.5281/zenodo.8231412",
              "note": "1875 张 / 1064 患者；含分割与 BI-RADS",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "BUS-BRA GitHub",
              "url": "https://github.com/wgomezf/BUS-BRA",
              "note": "分割/分类复现代码",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "OASBUD",
              "url": "https://doi.org/10.5281/zenodo.545928",
              "note": "乳腺超声；含 ROI",
              "license": "",
              "kind": "seg→box"
            }
          ],
          "todo": ""
        }
      ]
    },
    {
      "id": "thyroid",
      "name_zh": "甲状腺外科 / 内分泌",
      "blurb": "甲状腺超声结节",
      "children": [
        {
          "id": "thyroid-us",
          "name_zh": "二级：甲状腺超声 · 结节检测",
          "modality": "超声",
          "task": "检测 / 分割转框",
          "status": "ready",
          "local": "甲状腺",
          "datasets": [
            {
              "name": "TN3K",
              "url": "https://github.com/haifangong/TRFE-Net-for-thyroid-nodule-segmentation",
              "note": "分割转框常用",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "TN3K HuggingFace",
              "url": "https://huggingface.co/datasets/haifan-gong/TN3K",
              "note": "镜像",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "DDTI",
              "url": "https://www.kaggle.com/datasets/dasmehdixtr/ddti-thyroid-ultrasound-images",
              "note": "小集易下",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "TN-SCUI 2020",
              "url": "https://tn-scui2020.grand-challenge.org/",
              "note": "挑战赛",
              "license": "",
              "kind": "seg→box"
            }
          ],
          "todo": ""
        }
      ]
    },
    {
      "id": "ophthalmology",
      "name_zh": "眼科",
      "blurb": "眼底彩照、血管、OCT",
      "children": [
        {
          "id": "fundus-lesion",
          "name_zh": "二级：眼底彩照 · 糖网病灶检测",
          "modality": "眼底照相",
          "task": "病灶框 / 分割",
          "status": "ready",
          "local": "眼底",
          "datasets": [
            {
              "name": "IDRiD",
              "url": "https://idrid.grand-challenge.org/",
              "note": "糖网病灶定位",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "DDR",
              "url": "https://github.com/nkicsl/DDR-dataset",
              "note": "分级+病灶",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "APTOS 2019",
              "url": "https://www.kaggle.com/c/aptos2019-blindness-detection",
              "note": "糖网分级（分类）",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "Messidor-2",
              "url": "https://www.adcis.net/en/third-party/messidor2/",
              "note": "糖网分级经典；需注册",
              "license": "",
              "kind": "classification"
            }
          ],
          "todo": ""
        },
        {
          "id": "fundus-vessel",
          "name_zh": "二级：眼底 · 血管分割（可转检测）",
          "modality": "眼底照相",
          "task": "分割",
          "status": "partial",
          "local": "fundus-vessel-yolo",
          "datasets": [
            {
              "name": "FIVES",
              "url": "https://doi.org/10.6084/m9.figshare.19688169.v1",
              "note": "血管分割",
              "license": "",
              "kind": "segmentation"
            },
            {
              "name": "DRIVE",
              "url": "https://drive.grand-challenge.org/",
              "note": "经典血管",
              "license": "",
              "kind": "segmentation"
            },
            {
              "name": "CHASE_DB1",
              "url": "https://blogs.kingston.ac.uk/retinal/chasedb1/",
              "note": "儿童眼底",
              "license": "",
              "kind": "segmentation"
            },
            {
              "name": "STARE",
              "url": "https://cecas.clemson.edu/~ahoover/stare/",
              "note": "小样本",
              "license": "",
              "kind": "segmentation"
            }
          ],
          "todo": ""
        },
        {
          "id": "fundus-oct",
          "name_zh": "二级：眼底 OCT · 积液 / 病灶",
          "modality": "OCT",
          "task": "分割 / 检测",
          "status": "partial",
          "local": "眼底OCT",
          "datasets": [
            {
              "name": "RETOUCH",
              "url": "https://retouch.grand-challenge.org/",
              "note": "OCT 积液分割挑战",
              "license": "",
              "kind": "segmentation"
            },
            {
              "name": "OCTDL",
              "url": "https://doi.org/10.5281/zenodo.10370472",
              "note": "2000+ B-scan；AMD/DME 等多类",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "OCTDL Scientific Data",
              "url": "https://doi.org/10.1038/s41597-024-03182-7",
              "note": "论文说明",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "Kermany OCT",
              "url": "https://data.mendeley.com/datasets/rscbjbr9sj/2",
              "note": "CNV/DME/Drusen/Normal 大规模",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "Duke OCT（Srinivasan 2014）",
              "url": "https://people.duke.edu/~sf59/Srinivasan_BOE_2014_dataset.htm",
              "note": "正常/干性AMD/DME 体积",
              "license": "",
              "kind": "classification"
            }
          ],
          "todo": ""
        }
      ]
    },
    {
      "id": "dermatology",
      "name_zh": "皮肤科",
      "blurb": "皮肤镜与全身皮损摄影",
      "children": [
        {
          "id": "skin-lesion",
          "name_zh": "二级：皮损 · 皮肤镜 / 临床照检测",
          "modality": "皮肤镜 / 临床照",
          "task": "检测 / 分类",
          "status": "ready",
          "local": "skin",
          "datasets": [
            {
              "name": "iToBoS",
              "url": "https://doi.org/10.1038/s41597-025-05483-x",
              "note": "全身摄影 YOLO 框",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "ISIC Archive",
              "url": "https://www.isic-archive.com/",
              "note": "皮肤镜总入口；可下挑战子集",
              "license": "",
              "kind": "mixed"
            },
            {
              "name": "ISIC 2018 Challenge",
              "url": "https://challenge.isic-archive.com/landing/2018/",
              "note": "病变分割+分类",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "HAM10000",
              "url": "https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/DBW86T",
              "note": "7 类皮损",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "PAD-UFES-20",
              "url": "https://doi.org/10.17632/zr7vgbf538.1",
              "note": "临床皮损照+元数据",
              "license": "",
              "kind": "classification"
            }
          ],
          "todo": ""
        }
      ]
    },
    {
      "id": "neurology",
      "name_zh": "神经内科 / 神经外科",
      "blurb": "脑肿瘤与头颅 CT 急症",
      "children": [
        {
          "id": "brain-tumor-mri",
          "name_zh": "二级：脑肿瘤 · MRI/CT 检测",
          "modality": "MRI / CT",
          "task": "检测 / 分割转框",
          "status": "ready",
          "local": "脑",
          "datasets": [
            {
              "name": "Br35H",
              "url": "https://www.kaggle.com/datasets/ahmedhamada0/brain-tumor-detection",
              "note": "YOLO 友好",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "Br35H YOLO 参考",
              "url": "https://github.com/mkang315/RCS-YOLO/tree/main/dataset-Br35H",
              "note": "标注参考",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "BraTS 2023（Synapse）",
              "url": "https://www.synapse.org/#!Synapse:syn51156910",
              "note": "胶质瘤分割年更；需注册",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "BraTS 挑战门户",
              "url": "https://www.synapse.org/brats",
              "note": "历年入口",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Figshare Brain Tumor MRI",
              "url": "https://doi.org/10.6084/m9.figshare.1512427.v5",
              "note": "Cheng 脑肿瘤 MRI 分类经典",
              "license": "",
              "kind": "classification"
            }
          ],
          "todo": ""
        },
        {
          "id": "brain-ct-bleed",
          "name_zh": "二级：头颅 CT · 出血 / 急症",
          "modality": "CT",
          "task": "检测 / 分类",
          "status": "partial",
          "local": "脑",
          "datasets": [
            {
              "name": "CQ500",
              "url": "http://headctstudy.qure.ai/dataset",
              "note": "491 例头颅 CT 急症（含 ICH）",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "RSNA Intracranial Hemorrhage",
              "url": "https://www.kaggle.com/c/rsna-intracranial-hemorrhage-detection",
              "note": "大规模 ICH 亚型分类",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "PhysioNet CT-ICH",
              "url": "https://physionet.org/content/ct-ich/",
              "note": "75 例公开；切片级出血分割",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "BHX（Brain Hemorrhage Extended）",
              "url": "https://physionet.org/content/bhx-brain-bounding-box/",
              "note": "ICH 边界框扩展标注",
              "license": "",
              "kind": "detection"
            }
          ],
          "todo": ""
        }
      ]
    },
    {
      "id": "orthopedics",
      "name_zh": "骨科 / 放射骨科",
      "blurb": "骨折与骨质疏松",
      "children": [
        {
          "id": "fracture-general",
          "name_zh": "二级：全身骨折 · X 光检测",
          "modality": "X 线",
          "task": "骨折检测",
          "status": "ready",
          "local": "骨骼骨折",
          "datasets": [
            {
              "name": "FracAtlas",
              "url": "https://doi.org/10.6084/m9.figshare.22363012",
              "note": "框+分割；多部位",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "Bone Fracture Detection (YOLO 常用镜像)",
              "url": "https://www.kaggle.com/datasets/pkdarabi/bone-fracture-detection-computer-vision-project",
              "note": "多部位骨折框；核许可",
              "license": "",
              "kind": "detection"
            }
          ],
          "todo": ""
        },
        {
          "id": "fracture-wrist",
          "name_zh": "二级：腕关节 · 儿童腕骨折检测",
          "modality": "X 线",
          "task": "骨折检测",
          "status": "ready",
          "local": "腕关节",
          "datasets": [
            {
              "name": "GRAZPEDWRI-DX",
              "url": "https://doi.org/10.6084/m9.figshare.14825193",
              "note": "含 YOLO 格式",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "GRAZPEDWRI-DX 论文",
              "url": "https://doi.org/10.1038/s41597-022-01328-z",
              "note": "Scientific Data",
              "license": "",
              "kind": "detection"
            }
          ],
          "todo": ""
        },
        {
          "id": "fracture-spine",
          "name_zh": "二级：脊柱 · 椎体 / 骨折检测",
          "modality": "X 线 / CT",
          "task": "检测",
          "status": "ready",
          "local": "脊柱",
          "datasets": [
            {
              "name": "VinDr-SpineXR",
              "url": "https://physionet.org/content/vindr-spinexr/1.0.0/",
              "note": "需 CITI",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "RSNA Cervical Spine Fracture",
              "url": "https://www.kaggle.com/c/rsna-2022-cervical-spine-fracture-detection",
              "note": "颈椎骨折",
              "license": "",
              "kind": "detection"
            }
          ],
          "todo": ""
        },
        {
          "id": "fracture-hip",
          "name_zh": "二级：髋部 · 骨折检测",
          "modality": "X 线",
          "task": "骨折检测",
          "status": "partial",
          "local": "髋部",
          "datasets": [
            {
              "name": "FracAtlas（髋子集）",
              "url": "https://doi.org/10.6084/m9.figshare.22363012",
              "note": "全身骨折集含髋；YOLO/COCO",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "FracAtlas Scientific Data",
              "url": "https://doi.org/10.1038/s41597-023-02432-4",
              "note": "论文说明",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "MURA（含肩/肘等；异常分类）",
              "url": "https://stanfordmlgroup.github.io/competitions/mura/",
              "note": "骨骼 X 线异常分类；可辅筛",
              "license": "",
              "kind": "classification"
            }
          ],
          "todo": ""
        },
        {
          "id": "knee",
          "name_zh": "二级：膝关节 · X 线 / MRI",
          "modality": "X 线 / MRI",
          "task": "检测 / 分割转框",
          "status": "partial",
          "local": "膝关节",
          "datasets": [
            {
              "name": "Knee Osteoarthritis Dataset (Kaggle)",
              "url": "https://www.kaggle.com/datasets/tommyngx/kneeosteoarthritis",
              "note": "分级为主",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "MRNet",
              "url": "https://stanfordmlgroup.github.io/competitions/mrnet/",
              "note": "膝 MRI；ACL 等（申请）",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "PlaTiF 胫骨平台骨折",
              "url": "https://zenodo.org/records/18007397",
              "note": "膝 X 线+冠状 CT；Schatzker 分级",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "OAI（Osteoarthritis Initiative）",
              "url": "https://nda.nih.gov/oai",
              "note": "大规模膝 OA；需申请",
              "license": "",
              "kind": "classification"
            }
          ],
          "todo": "原生骨折框少于腕/全身集"
        },
        {
          "id": "osteoporosis-lumbar",
          "name_zh": "二级：骨质疏松 · 腰椎筛查",
          "modality": "X 线 / CT",
          "task": "筛查 / 检测",
          "status": "partial",
          "local": "骨质疏松",
          "datasets": [
            {
              "name": "LUMOS",
              "url": "https://keyueshi.github.io/LUMOS/",
              "note": "项目页",
              "license": "",
              "kind": "mixed"
            },
            {
              "name": "LUMOS Zenodo",
              "url": "https://doi.org/10.5281/zenodo.18173664",
              "note": "约 46GB",
              "license": "CC BY-NC 4.0",
              "kind": "mixed"
            }
          ],
          "todo": ""
        }
      ]
    },
    {
      "id": "urology",
      "name_zh": "泌尿外科",
      "blurb": "肾结石/肿瘤、膀胱镜、前列腺",
      "children": [
        {
          "id": "kidney-stone",
          "name_zh": "二级：肾结石 · 目标检测",
          "modality": "超声 / CT",
          "task": "目标检测",
          "status": "partial",
          "local": "肾",
          "datasets": [
            {
              "name": "Kidney Stone Images (YOLO)",
              "url": "https://www.kaggle.com/datasets/safurahajiheidari/kidney-stone-images",
              "note": "起步推荐；YOLO 框",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "CT Kidney Dataset (Kaggle)",
              "url": "https://www.kaggle.com/datasets/nazmul0087/ct-kidney-dataset-normal-cyst-tumor-stone",
              "note": "正常/囊肿/肿瘤/结石四类 CT",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "KiTS23（可筛结石相关）",
              "url": "https://kits-challenge.org/kits23/",
              "note": "肾/肿瘤分割；结石需另筛",
              "license": "",
              "kind": "seg→box"
            }
          ],
          "todo": ""
        },
        {
          "id": "kidney-tumor",
          "name_zh": "二级：肾肿瘤 · CT 分割转框",
          "modality": "CT",
          "task": "分割转框",
          "status": "partial",
          "local": "肾",
          "datasets": [
            {
              "name": "KiTS23",
              "url": "https://kits-challenge.org/kits23/",
              "note": "肾肿瘤分割→框",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "KiTS21",
              "url": "https://kits-challenge.org/kits21/",
              "note": "前代挑战",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "KiTS19",
              "url": "https://kits19.grand-challenge.org/",
              "note": "经典肾肿瘤分割",
              "license": "",
              "kind": "seg→box"
            }
          ],
          "todo": ""
        },
        {
          "id": "cystoscopy",
          "name_zh": "二级：膀胱镜 · 膀胱肿瘤 / 多类病灶",
          "modality": "膀胱镜",
          "task": "分类 / 分割（部分可转框）",
          "status": "partial",
          "local": "膀胱镜",
          "datasets": [
            {
              "name": "CystoDS OSF 下载",
              "url": "https://osf.io/xvdhy/",
              "note": "8067 张 / 160 患者；768 张分割",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "CystoDS Scientific Data",
              "url": "https://doi.org/10.1038/s41597-026-06887-z",
              "note": "正式论文 DOI",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "CystoDS GitHub",
              "url": "https://github.com/liaolabsu/CystoDS",
              "note": "代码与说明",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "CystoDS OSF DOI",
              "url": "https://doi.org/10.17605/OSF.IO/XVDHY",
              "note": "OSF 持久标识",
              "license": "",
              "kind": "classification"
            }
          ],
          "todo": "原生检测框少于息肉线；分割可转框"
        },
        {
          "id": "prostate-mri",
          "name_zh": "二级：前列腺 · MRI",
          "modality": "MRI",
          "task": "分割为主",
          "status": "partial",
          "local": "前列腺",
          "datasets": [
            {
              "name": "PROSTATEx",
              "url": "https://www.cancerimagingarchive.net/collection/prostatex/",
              "note": "TCIA",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Prostate158",
              "url": "https://doi.org/10.5281/zenodo.6481141",
              "note": "前列腺 MRI 分割",
              "license": "",
              "kind": "seg→box"
            }
          ],
          "todo": ""
        }
      ]
    },
    {
      "id": "obgyn",
      "name_zh": "妇产科",
      "blurb": "内膜异位、宫颈、胎儿超声",
      "children": [
        {
          "id": "endometriosis-lap",
          "name_zh": "二级：子宫内膜异位 · 腹腔镜病灶",
          "modality": "腹腔镜",
          "task": "检测 / 分割",
          "status": "partial",
          "local": "endometriosis-yolo",
          "datasets": [
            {
              "name": "GLENDA",
              "url": "https://ftp.itec.aau.at/datasets/GLENDA/",
              "note": "腹腔镜子宫内膜异位病灶",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "EndoVis / MICCAI 内镜挑战入口",
              "url": "https://endovis.grand-challenge.org/",
              "note": "多届腹腔镜/内镜挑战总入口",
              "license": "",
              "kind": "mixed"
            }
          ],
          "todo": ""
        },
        {
          "id": "endometriosis-mri",
          "name_zh": "二级：子宫内膜异位 · 盆腔 MRI",
          "modality": "MRI",
          "task": "分割 / 转框",
          "status": "partial",
          "local": "endometriosis-seg",
          "datasets": [
            {
              "name": "UT-EndoMRI",
              "url": "https://zenodo.org/records/13749613",
              "note": "盆腔 MRI",
              "license": "",
              "kind": "segmentation"
            }
          ],
          "todo": ""
        },
        {
          "id": "cervix",
          "name_zh": "二级：宫颈 · 阴道镜 / 细胞学",
          "modality": "阴道镜 / 细胞学",
          "task": "分类为主（公开原生框较少）",
          "status": "partial",
          "local": "宫颈",
          "datasets": [
            {
              "name": "Intel & MobileODT Cervical（Kaggle）",
              "url": "https://www.kaggle.com/competitions/intel-mobileodt-cervical-cancer-screening",
              "note": "阴道镜宫颈类型三分类；公开竞赛数据",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "MobileODT 精炼子集（Zenodo）",
              "url": "https://doi.org/10.5281/zenodo.19212544",
              "note": "人工质控 ROI；766 张",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "IARC Cervical Cancer Image Bank",
              "url": "https://screening.iarc.fr/cervicalimagebank.php",
              "note": "官方图库；需申请",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "IARC Image ColpoBank（IEEE DataPort）",
              "url": "https://ieee-dataport.org/documents/iarc-image-colpobank",
              "note": "约 200 例患者阴道镜；需登录",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "HyCervix 高光谱阴道镜",
              "url": "https://zenodo.org/records/18208664",
              "note": "77 例 HS 立方；GitHub: carlosvegagc/HyCervix",
              "license": "",
              "kind": "classification"
            }
          ],
          "todo": "多数为分类；带框公开集需逐条核"
        },
        {
          "id": "fetal-us",
          "name_zh": "二级：胎儿超声 · 切面 / 测量定位",
          "modality": "产科超声",
          "task": "定位 / 检测",
          "status": "partial",
          "local": "胎儿超声",
          "datasets": [
            {
              "name": "HC18",
              "url": "https://hc18.grand-challenge.org/",
              "note": "胎头围测量",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "FETAL_PLANES_DB",
              "url": "https://zenodo.org/records/3904280",
              "note": "标准切面分类",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "FPUS23 胎儿平面（GitHub）",
              "url": "https://github.com/bharathprabakaran/FPUS23",
              "note": "体模超声；含平面/方位/框",
              "license": "",
              "kind": "detection"
            }
          ],
          "todo": ""
        }
      ]
    },
    {
      "id": "stomatology",
      "name_zh": "口腔科 / 口腔颌面",
      "blurb": "全景片病灶检测",
      "children": [
        {
          "id": "oral-opg",
          "name_zh": "二级：口腔全景 OPG · 多类病灶检测",
          "modality": "X 线全景",
          "task": "多类检测",
          "status": "partial",
          "local": "oral-yolo",
          "datasets": [
            {
              "name": "DENTEX",
              "url": "https://dentex.grand-challenge.org/",
              "note": "全景牙位/诊断分层检测挑战",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "DENTEX GitHub",
              "url": "https://github.com/ibrahimethemhamamci/DENTEX",
              "note": "说明与引用",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "Tufts Dental Database",
              "url": "https://tdd.tufts.edu/",
              "note": "牙科全景等；核许可与申请",
              "license": "",
              "kind": "mixed"
            },
            {
              "name": "Children's Dental Panoramic Radiographs",
              "url": "https://doi.org/10.6084/m9.figshare.14806545.v3",
              "note": "儿童全景；常用公开补充",
              "license": "",
              "kind": "classification"
            }
          ],
          "todo": ""
        }
      ]
    },
    {
      "id": "pathology-lab",
      "name_zh": "病理科 / 检验显微",
      "blurb": "病理切片与血细胞显微检测",
      "children": [
        {
          "id": "pathology-nuclei",
          "name_zh": "二级：病理 · 细胞核实例检测",
          "modality": "病理切片",
          "task": "实例→框",
          "status": "ready",
          "local": "病理切片",
          "datasets": [
            {
              "name": "PanNuke",
              "url": "https://warwick.ac.uk/fac/cross_fac/tia/data/pannuke",
              "note": "核→框",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "CoNSeP",
              "url": "https://warwick.ac.uk/fac/cross_fac/tia/data/hovernet/",
              "note": "核分割入口",
              "license": "",
              "kind": "seg→box"
            }
          ],
          "todo": ""
        },
        {
          "id": "pathology-metastasis",
          "name_zh": "二级：病理 · 淋巴结转移检测",
          "modality": "WSI",
          "task": "检测 / 分类",
          "status": "partial",
          "local": "病理切片",
          "datasets": [
            {
              "name": "Camelyon17",
              "url": "https://camelyon17.grand-challenge.org/",
              "note": "转移灶",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "Camelyon16",
              "url": "https://camelyon16.grand-challenge.org/",
              "note": "前代挑战",
              "license": "",
              "kind": "detection"
            }
          ],
          "todo": ""
        },
        {
          "id": "blood-cell",
          "name_zh": "二级：血细胞 · 显微目标检测",
          "modality": "显微",
          "task": "目标检测",
          "status": "ready",
          "local": "血细胞",
          "datasets": [
            {
              "name": "BCCD",
              "url": "https://github.com/Shenggan/BCCD_Dataset",
              "note": "VOC 框；最易起步",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "BCCD Kaggle 镜像",
              "url": "https://www.kaggle.com/datasets/coldfir3/bccd-dataset-with-yolov5-labels",
              "note": "YOLO 标签镜像",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "Raabin-WBC",
              "url": "https://raabindata.com/free-data/",
              "note": "白细胞分类/检测公开集",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "LISC",
              "url": "http://users.cecs.anu.edu.au/~hrezatofighi/Data/Leukocyte%20Data.htm",
              "note": "白细胞分割经典小集",
              "license": "",
              "kind": "seg→box"
            }
          ],
          "todo": ""
        },
        {
          "id": "lymph-node-us",
          "name_zh": "二级：浅表淋巴结 · 超声/CT",
          "modality": "超声 / CT",
          "task": "检测",
          "status": "partial",
          "local": "淋巴结",
          "datasets": [
            {
              "name": "ALN-Ultra（Zenodo）",
              "url": "https://zenodo.org/records/18483501",
              "note": "257 例早期乳腺癌腋窝淋巴结超声图+视频",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "Breast & LN US（Figshare 子集）",
              "url": "https://doi.org/10.6084/m9.figshare.30112000.v2",
              "note": "乳腺+腋窝淋巴结超声；含 Labelme 标注",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "LLNM 多模态（HuggingFace）",
              "url": "https://huggingface.co/datasets/Snowinbio/LLNM_Multimodal_dataset",
              "note": "甲状腺侧颈淋巴结；需同意条款",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "DeepLesion（淋巴结相关 CT）",
              "url": "https://nihcc.box.com/v/DeepLesion",
              "note": "CT 病灶框可筛淋巴结区",
              "license": "",
              "kind": "detection"
            }
          ],
          "todo": ""
        }
      ]
    }
  ],
  "categories": [
    {
      "id": "colorectal-polyp-det",
      "name_zh": "二级：结直肠息肉 · 目标检测",
      "modality": "结肠镜",
      "task": "目标检测（原生框 / 分割转框）",
      "status": "ready",
      "local": "colorectal-yolo",
      "datasets": [
        {
          "name": "Kvasir-SEG",
          "url": "https://datasets.simula.no/kvasir-seg/",
          "note": "1000 张；分割可转框；YOLO 常用",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "CVC-ClinicDB",
          "url": "https://polyp.grand-challenge.org/CVCClinicDB/",
          "note": "612 张；跨源常用",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "CVC-ColonDB",
          "url": "https://polyp.grand-challenge.org/CVCColonDB/",
          "note": "外测经典",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "ETIS-LaribPolypDB",
          "url": "https://polyp.grand-challenge.org/ETISLarib/",
          "note": "小目标难例",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "PolypGen",
          "url": "https://www.synapse.org/#!Synapse:syn45200214",
          "note": "多中心；需 Synapse",
          "license": "",
          "kind": "seg/box"
        },
        {
          "name": "PolypDB",
          "url": "https://osf.io/pr7ms/",
          "note": "多中心多模态；含 bounding boxes",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "REAL-Colon",
          "url": "https://doi.org/10.25452/figshare.plus.22202866",
          "note": "视频级框；大规模",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "GPolypOD",
          "url": "https://doi.org/10.57760/sciencedb.j00001.01467",
          "note": "2026 胃肠镜息肉检测",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "PICCOLO",
          "url": "https://www.biobancovasco.org/en/Sample-and-data-catalog/Databases/PD-PICCOLO-EN.html",
          "note": "WLI/NBI；框+掩膜",
          "license": "",
          "kind": "detection"
        }
      ],
      "todo": "",
      "department_id": "gi",
      "department_zh": "消化内科 / 消化内镜科"
    },
    {
      "id": "gastroscopy-multi",
      "name_zh": "二级：胃镜 · 上消化道多类病灶",
      "modality": "胃镜",
      "task": "分类 / 部分可做定位",
      "status": "ready",
      "local": "胃镜",
      "datasets": [
        {
          "name": "GastroVision",
          "url": "https://osf.io/84e7f/",
          "note": "8000 张；27 类上下消化道；OSF 直下",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "GastroVision GitHub",
          "url": "https://github.com/DebeshJha/GastroVision",
          "note": "说明与引用",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "HyperKvasir",
          "url": "https://datasets.simula.no/hyper-kvasir/",
          "note": "大规模多类内镜",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "HyperKvasir OSF",
          "url": "https://osf.io/mh9sj",
          "note": "镜像下载",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "Kvasir",
          "url": "https://datasets.simula.no/kvasir/",
          "note": "经典内镜分类",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "EDD2020（含胃/食管/肠）",
          "url": "https://edd2020.grand-challenge.org/",
          "note": "多类框+掩膜；含 Barrett/息肉等",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "EDD2020 IEEE DataPort",
          "url": "https://ieee-dataport.org/competitions/endoscopy-disease-detection-and-segmentation-edd2020",
          "note": "官方数据镜像",
          "license": "",
          "kind": "detection"
        }
      ],
      "todo": "",
      "department_id": "gi",
      "department_zh": "消化内科 / 消化内镜科"
    },
    {
      "id": "esophagus",
      "name_zh": "二级：食管 · Barrett / 早癌内镜",
      "modality": "食管内镜",
      "task": "检测 / 分割转框",
      "status": "ready",
      "local": "食管",
      "datasets": [
        {
          "name": "EDD2020",
          "url": "https://edd2020.grand-challenge.org/",
          "note": "含 BE / suspicious / HGD / cancer 框与掩膜",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "EDD2020 Kaggle 镜像",
          "url": "https://www.kaggle.com/datasets/orvile/edd2020-endoscopy-detection-and-segmentation",
          "note": "386 张；VOC 框",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "EDD2020 GitHub",
          "url": "https://github.com/sharib-vision/EDD2020",
          "note": "类别与评测脚本",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "GastroVision（Barrett 等类）",
          "url": "https://osf.io/84e7f/",
          "note": "多类含 Barrett’s Esophagus",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "HyperKvasir（食管相关类）",
          "url": "https://datasets.simula.no/hyper-kvasir/",
          "note": "从多类筛食管标签",
          "license": "",
          "kind": "classification"
        }
      ],
      "todo": "",
      "department_id": "gi",
      "department_zh": "消化内科 / 消化内镜科"
    },
    {
      "id": "capsule",
      "name_zh": "二级：胶囊内镜 · 小肠病灶",
      "modality": "胶囊内镜",
      "task": "分类 / 部分检测（含框）",
      "status": "ready",
      "local": "胶囊内镜",
      "datasets": [
        {
          "name": "Kvasir-Capsule",
          "url": "https://datasets.simula.no/kvasir-capsule/",
          "note": "47238 标注帧；部分含 anomaly 框",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "Kvasir-Capsule OSF",
          "url": "https://osf.io/dv2ag",
          "note": "labeled-images 直下",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "Kvasir-Capsule GitHub",
          "url": "https://github.com/simula/kvasir-capsule",
          "note": "说明与镜像链接",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "Kvasir-Capsule Scientific Data",
          "url": "https://doi.org/10.1038/s41597-021-00920-z",
          "note": "正式论文与数据说明",
          "license": "",
          "kind": "detection"
        }
      ],
      "todo": "",
      "department_id": "gi",
      "department_zh": "消化内科 / 消化内镜科"
    },
    {
      "id": "liver-ct-tumor",
      "name_zh": "二级：肝 CT · 小肿瘤 / 肝病灶检测",
      "modality": "CT",
      "task": "目标检测 / 分割转框",
      "status": "ready",
      "local": "liver-yolo",
      "datasets": [
        {
          "name": "SLTD",
          "url": "https://github.com/XLIAaron/Small_LiverTumor",
          "note": "小肝肿瘤检测；成稿主集",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "LiTS",
          "url": "https://competitions.codalab.org/competitions/17094",
          "note": "肝/肿瘤分割→外接框",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "DeepLesion（肝区子集）",
          "url": "https://nihcc.box.com/v/DeepLesion",
          "note": "多器官病灶框筛肝",
          "license": "",
          "kind": "detection"
        }
      ],
      "todo": "",
      "department_id": "hepatobiliary",
      "department_zh": "肝胆胰外科 / 腹部影像"
    },
    {
      "id": "pancreas-ct",
      "name_zh": "二级：胰腺 CT · 病灶",
      "modality": "CT",
      "task": "分割转框",
      "status": "partial",
      "local": "胰腺",
      "datasets": [
        {
          "name": "MSD Pancreas (Task07)",
          "url": "http://medicaldecathlon.com/",
          "note": "Medical Decathlon 胰腺分割",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "NIH Pancreas-CT (TCIA)",
          "url": "https://www.cancerimagingarchive.net/collection/pancreas-ct/",
          "note": "82 例腹 CT 胰腺掩膜",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "DeepLesion（胰区）",
          "url": "https://nihcc.box.com/v/DeepLesion",
          "note": "多器官框筛胰",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "AMOS22（含胰腺）",
          "url": "https://amos22.grand-challenge.org/",
          "note": "腹多器官分割含胰",
          "license": "",
          "kind": "seg→box"
        }
      ],
      "todo": "",
      "department_id": "hepatobiliary",
      "department_zh": "肝胆胰外科 / 腹部影像"
    },
    {
      "id": "gallbladder-us",
      "name_zh": "二级：胆囊超声 · 结石 / 息肉 / 癌灶",
      "modality": "超声",
      "task": "目标检测 / 分类",
      "status": "ready",
      "local": "胆囊",
      "datasets": [
        {
          "name": "GBCU（Gallbladder Cancer US）",
          "url": "https://gbc-iitd.github.io/data/gbcu",
          "note": "含 bbox；正常/良性/恶性",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "UIdataGB",
          "url": "https://doi.org/10.1016/j.dib.2024.110426",
          "note": "约 1 万张胆囊超声多类",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "UIdataGB Mendeley",
          "url": "https://data.mendeley.com/datasets/xtv5y2ddnh",
          "note": "数据下载入口（以论文为准）",
          "license": "",
          "kind": "classification"
        }
      ],
      "todo": "",
      "department_id": "hepatobiliary",
      "department_zh": "肝胆胰外科 / 腹部影像"
    },
    {
      "id": "abdomen-ct-lesion",
      "name_zh": "二级：腹部 CT · 多器官病灶框",
      "modality": "CT",
      "task": "病灶检测",
      "status": "ready",
      "local": "腹部CT",
      "datasets": [
        {
          "name": "DeepLesion",
          "url": "https://nihcc.box.com/v/DeepLesion",
          "note": "多器官病灶框首选",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "AMOS22",
          "url": "https://amos22.grand-challenge.org/",
          "note": "腹多器官分割",
          "license": "",
          "kind": "seg→box"
        }
      ],
      "todo": "",
      "department_id": "hepatobiliary",
      "department_zh": "肝胆胰外科 / 腹部影像"
    },
    {
      "id": "lung-us-bline",
      "name_zh": "二级：肺超声 · B-line 检测",
      "modality": "肺超声",
      "task": "目标检测",
      "status": "partial",
      "local": "lung-yolo",
      "datasets": [
        {
          "name": "LUS-BALD（Mendeley）",
          "url": "https://data.mendeley.com/datasets/h923m366sf/1",
          "note": "401 张；YOLO 多边形框；CC BY 4.0",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "LUS-BALD DOI",
          "url": "https://doi.org/10.17632/h923m366sf.2",
          "note": "Mendeley Data V2",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "LUS-BALD Scientific Data",
          "url": "https://doi.org/10.1038/s41597-025-05854-4",
          "note": "论文说明",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "LUS-BALD 预处理代码",
          "url": "https://github.com/Marconi-Lab/lus-bline-artifact-prep/",
          "note": "预处理脚本",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "POCUS COVID ultrasound",
          "url": "https://github.com/jannisborn/covid19_pocus_ultrasound",
          "note": "COVID 肺超声分类补充",
          "license": "",
          "kind": "classification"
        }
      ],
      "todo": "",
      "department_id": "respiratory",
      "department_zh": "呼吸科 / 胸外科"
    },
    {
      "id": "lung-ct-nodule",
      "name_zh": "二级：肺 CT · 结节检测",
      "modality": "CT",
      "task": "结节检测",
      "status": "ready",
      "local": "lung-yolo",
      "datasets": [
        {
          "name": "LUNA16",
          "url": "https://luna16.grand-challenge.org/Data/",
          "note": "结节坐标→框",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "LIDC-IDRI",
          "url": "https://www.cancerimagingarchive.net/collection/lidc-idri/",
          "note": "TCIA 精标",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "LNDb",
          "url": "https://lndb.grand-challenge.org/",
          "note": "肺结节检测挑战",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "Node21",
          "url": "https://node21.grand-challenge.org/",
          "note": "胸片结节检测",
          "license": "",
          "kind": "detection"
        }
      ],
      "todo": "",
      "department_id": "respiratory",
      "department_zh": "呼吸科 / 胸外科"
    },
    {
      "id": "chest-xray",
      "name_zh": "二级：胸片 · 多病灶检测",
      "modality": "X 线胸片",
      "task": "多类病灶框",
      "status": "ready",
      "local": "胸部",
      "datasets": [
        {
          "name": "VinDr-CXR",
          "url": "https://physionet.org/content/vindr-cxr/1.0.0/",
          "note": "原生 bbox；需 CITI",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "RSNA Pneumonia Detection",
          "url": "https://www.kaggle.com/c/rsna-pneumonia-detection-challenge/data",
          "note": "肺炎框",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "NIH ChestX-ray14",
          "url": "https://nihcc.app.box.com/v/ChestXray-NIHCC",
          "note": "多标签；弱定位",
          "license": "",
          "kind": "classification"
        }
      ],
      "todo": "",
      "department_id": "respiratory",
      "department_zh": "呼吸科 / 胸外科"
    },
    {
      "id": "bronchoscopy",
      "name_zh": "二级：支气管镜 · 解剖标志 / 气道病灶",
      "modality": "支气管镜",
      "task": "检测 / 分割定位",
      "status": "ready",
      "local": "支气管镜",
      "datasets": [
        {
          "name": "BM-BronchoLC",
          "url": "https://doi.org/10.1038/s41597-024-03145-y",
          "note": "地标+病灶定位；Scientific Data",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "UAAL（上气道地标）",
          "url": "https://doi.org/10.1038/s41597-025-06169-0",
          "note": "含 bbox 与实例分割",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "UAAL Figshare",
          "url": "https://doi.org/10.6084/m9.figshare.26342779",
          "note": "coco_ins 下载",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "Bronchoscopy unified HF",
          "url": "https://huggingface.co/datasets/chrisvoncsefalvay/single-bronchoscopy-depth",
          "note": "多源汇总入口",
          "license": "",
          "kind": "mixed"
        }
      ],
      "todo": "",
      "department_id": "respiratory",
      "department_zh": "呼吸科 / 胸外科"
    },
    {
      "id": "coronary-xca",
      "name_zh": "二级：冠脉造影 · 狭窄检测/分割",
      "modality": "XCA",
      "task": "分割 / 实例→框",
      "status": "ready",
      "local": "heart",
      "datasets": [
        {
          "name": "ARCADE",
          "url": "https://arcade.grand-challenge.org/",
          "note": "狭窄挑战",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "ARCADE Zenodo",
          "url": "https://doi.org/10.5281/zenodo.10390295",
          "note": "数据下载",
          "license": "",
          "kind": "seg→box"
        }
      ],
      "todo": "",
      "department_id": "cardiology",
      "department_zh": "心内科 / 心血管影像"
    },
    {
      "id": "echo",
      "name_zh": "二级：心脏超声 · 结构定位",
      "modality": "超声心动",
      "task": "分割 / 定位衍生",
      "status": "ready",
      "local": "心脏超声",
      "datasets": [
        {
          "name": "CAMUS",
          "url": "https://www.creatis.insa-lyon.fr/Challenge/camus/",
          "note": "500 例 2D 心超；LV/LA 分割",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "CAMUS 数据下载",
          "url": "https://humanheart-project.creatis.insa-lyon.fr/database/",
          "note": "CREATIS Human Heart Project",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "EchoNet-Dynamic",
          "url": "https://echonet.github.io/dynamic/",
          "note": "视频心超；需申请",
          "license": "",
          "kind": "video"
        },
        {
          "name": "EchoNet-LVH",
          "url": "https://echonet.github.io/LVH/",
          "note": "左室肥厚相关；需申请",
          "license": "",
          "kind": "video"
        }
      ],
      "todo": "",
      "department_id": "cardiology",
      "department_zh": "心内科 / 心血管影像"
    },
    {
      "id": "carotid",
      "name_zh": "二级：颈动脉超声 · 斑块检测",
      "modality": "超声",
      "task": "斑块分割 / 检测",
      "status": "ready",
      "local": "颈动脉",
      "datasets": [
        {
          "name": "Ar-PlaqSegm1（Mendeley）",
          "url": "https://doi.org/10.17632/8srkpz52dy.2",
          "note": "阿根廷颈动脉 B 超斑块分割；CC BY",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Ar-PlaqSegm1 Scientific Data",
          "url": "https://www.nature.com/articles/s41597-026-06952-7",
          "note": "论文与数据说明",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "颈动脉斑块运动序列（Figshare）",
          "url": "https://doi.org/10.6084/m9.figshare.22086377.v4",
          "note": "B-mode 序列；含 YOLO 相关数据",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "多中心斑块检测论文（数据需申请）",
          "url": "https://doi.org/10.31083/j.rcm2512454",
          "note": "5611 张；非全公开，见原文申请",
          "license": "",
          "kind": "detection"
        }
      ],
      "todo": "大规模多中心集常需申请；Ar-PlaqSegm1 可直接下",
      "department_id": "cardiology",
      "department_zh": "心内科 / 心血管影像"
    },
    {
      "id": "breast-mammo",
      "name_zh": "二级：钼靶 · 肿块 / 钙化检测",
      "modality": "钼靶",
      "task": "目标检测",
      "status": "ready",
      "local": "乳腺",
      "datasets": [
        {
          "name": "VinDr-Mammo",
          "url": "https://physionet.org/content/vindr-mammo/1.0.0/",
          "note": "原生框；需 CITI",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "CBIS-DDSM",
          "url": "https://www.cancerimagingarchive.net/collection/cbis-ddsm/",
          "note": "TCIA",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "INbreast",
          "url": "https://www.kaggle.com/datasets/ramanathansp20/inbreast-dataset",
          "note": "经典；核许可",
          "license": "",
          "kind": "detection"
        }
      ],
      "todo": "",
      "department_id": "breast",
      "department_zh": "乳腺外科 / 乳腺影像"
    },
    {
      "id": "breast-us",
      "name_zh": "二级：乳腺超声 · 肿块检测",
      "modality": "超声",
      "task": "检测 / 分割转框",
      "status": "ready",
      "local": "乳腺超声",
      "datasets": [
        {
          "name": "BUSI",
          "url": "https://www.kaggle.com/datasets/aryashah2k/breast-ultrasound-images-dataset",
          "note": "分割→框",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "BUSI Curated Zenodo",
          "url": "https://doi.org/10.5281/zenodo.19047974",
          "note": "整理版",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "BUS-BRA",
          "url": "https://doi.org/10.5281/zenodo.8231412",
          "note": "1875 张 / 1064 患者；含分割与 BI-RADS",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "BUS-BRA GitHub",
          "url": "https://github.com/wgomezf/BUS-BRA",
          "note": "分割/分类复现代码",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "OASBUD",
          "url": "https://doi.org/10.5281/zenodo.545928",
          "note": "乳腺超声；含 ROI",
          "license": "",
          "kind": "seg→box"
        }
      ],
      "todo": "",
      "department_id": "breast",
      "department_zh": "乳腺外科 / 乳腺影像"
    },
    {
      "id": "thyroid-us",
      "name_zh": "二级：甲状腺超声 · 结节检测",
      "modality": "超声",
      "task": "检测 / 分割转框",
      "status": "ready",
      "local": "甲状腺",
      "datasets": [
        {
          "name": "TN3K",
          "url": "https://github.com/haifangong/TRFE-Net-for-thyroid-nodule-segmentation",
          "note": "分割转框常用",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "TN3K HuggingFace",
          "url": "https://huggingface.co/datasets/haifan-gong/TN3K",
          "note": "镜像",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "DDTI",
          "url": "https://www.kaggle.com/datasets/dasmehdixtr/ddti-thyroid-ultrasound-images",
          "note": "小集易下",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "TN-SCUI 2020",
          "url": "https://tn-scui2020.grand-challenge.org/",
          "note": "挑战赛",
          "license": "",
          "kind": "seg→box"
        }
      ],
      "todo": "",
      "department_id": "thyroid",
      "department_zh": "甲状腺外科 / 内分泌"
    },
    {
      "id": "fundus-lesion",
      "name_zh": "二级：眼底彩照 · 糖网病灶检测",
      "modality": "眼底照相",
      "task": "病灶框 / 分割",
      "status": "ready",
      "local": "眼底",
      "datasets": [
        {
          "name": "IDRiD",
          "url": "https://idrid.grand-challenge.org/",
          "note": "糖网病灶定位",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "DDR",
          "url": "https://github.com/nkicsl/DDR-dataset",
          "note": "分级+病灶",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "APTOS 2019",
          "url": "https://www.kaggle.com/c/aptos2019-blindness-detection",
          "note": "糖网分级（分类）",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "Messidor-2",
          "url": "https://www.adcis.net/en/third-party/messidor2/",
          "note": "糖网分级经典；需注册",
          "license": "",
          "kind": "classification"
        }
      ],
      "todo": "",
      "department_id": "ophthalmology",
      "department_zh": "眼科"
    },
    {
      "id": "fundus-vessel",
      "name_zh": "二级：眼底 · 血管分割（可转检测）",
      "modality": "眼底照相",
      "task": "分割",
      "status": "partial",
      "local": "fundus-vessel-yolo",
      "datasets": [
        {
          "name": "FIVES",
          "url": "https://doi.org/10.6084/m9.figshare.19688169.v1",
          "note": "血管分割",
          "license": "",
          "kind": "segmentation"
        },
        {
          "name": "DRIVE",
          "url": "https://drive.grand-challenge.org/",
          "note": "经典血管",
          "license": "",
          "kind": "segmentation"
        },
        {
          "name": "CHASE_DB1",
          "url": "https://blogs.kingston.ac.uk/retinal/chasedb1/",
          "note": "儿童眼底",
          "license": "",
          "kind": "segmentation"
        },
        {
          "name": "STARE",
          "url": "https://cecas.clemson.edu/~ahoover/stare/",
          "note": "小样本",
          "license": "",
          "kind": "segmentation"
        }
      ],
      "todo": "",
      "department_id": "ophthalmology",
      "department_zh": "眼科"
    },
    {
      "id": "fundus-oct",
      "name_zh": "二级：眼底 OCT · 积液 / 病灶",
      "modality": "OCT",
      "task": "分割 / 检测",
      "status": "partial",
      "local": "眼底OCT",
      "datasets": [
        {
          "name": "RETOUCH",
          "url": "https://retouch.grand-challenge.org/",
          "note": "OCT 积液分割挑战",
          "license": "",
          "kind": "segmentation"
        },
        {
          "name": "OCTDL",
          "url": "https://doi.org/10.5281/zenodo.10370472",
          "note": "2000+ B-scan；AMD/DME 等多类",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "OCTDL Scientific Data",
          "url": "https://doi.org/10.1038/s41597-024-03182-7",
          "note": "论文说明",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "Kermany OCT",
          "url": "https://data.mendeley.com/datasets/rscbjbr9sj/2",
          "note": "CNV/DME/Drusen/Normal 大规模",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "Duke OCT（Srinivasan 2014）",
          "url": "https://people.duke.edu/~sf59/Srinivasan_BOE_2014_dataset.htm",
          "note": "正常/干性AMD/DME 体积",
          "license": "",
          "kind": "classification"
        }
      ],
      "todo": "",
      "department_id": "ophthalmology",
      "department_zh": "眼科"
    },
    {
      "id": "skin-lesion",
      "name_zh": "二级：皮损 · 皮肤镜 / 临床照检测",
      "modality": "皮肤镜 / 临床照",
      "task": "检测 / 分类",
      "status": "ready",
      "local": "skin",
      "datasets": [
        {
          "name": "iToBoS",
          "url": "https://doi.org/10.1038/s41597-025-05483-x",
          "note": "全身摄影 YOLO 框",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "ISIC Archive",
          "url": "https://www.isic-archive.com/",
          "note": "皮肤镜总入口；可下挑战子集",
          "license": "",
          "kind": "mixed"
        },
        {
          "name": "ISIC 2018 Challenge",
          "url": "https://challenge.isic-archive.com/landing/2018/",
          "note": "病变分割+分类",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "HAM10000",
          "url": "https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/DBW86T",
          "note": "7 类皮损",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "PAD-UFES-20",
          "url": "https://doi.org/10.17632/zr7vgbf538.1",
          "note": "临床皮损照+元数据",
          "license": "",
          "kind": "classification"
        }
      ],
      "todo": "",
      "department_id": "dermatology",
      "department_zh": "皮肤科"
    },
    {
      "id": "brain-tumor-mri",
      "name_zh": "二级：脑肿瘤 · MRI/CT 检测",
      "modality": "MRI / CT",
      "task": "检测 / 分割转框",
      "status": "ready",
      "local": "脑",
      "datasets": [
        {
          "name": "Br35H",
          "url": "https://www.kaggle.com/datasets/ahmedhamada0/brain-tumor-detection",
          "note": "YOLO 友好",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "Br35H YOLO 参考",
          "url": "https://github.com/mkang315/RCS-YOLO/tree/main/dataset-Br35H",
          "note": "标注参考",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "BraTS 2023（Synapse）",
          "url": "https://www.synapse.org/#!Synapse:syn51156910",
          "note": "胶质瘤分割年更；需注册",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "BraTS 挑战门户",
          "url": "https://www.synapse.org/brats",
          "note": "历年入口",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Figshare Brain Tumor MRI",
          "url": "https://doi.org/10.6084/m9.figshare.1512427.v5",
          "note": "Cheng 脑肿瘤 MRI 分类经典",
          "license": "",
          "kind": "classification"
        }
      ],
      "todo": "",
      "department_id": "neurology",
      "department_zh": "神经内科 / 神经外科"
    },
    {
      "id": "brain-ct-bleed",
      "name_zh": "二级：头颅 CT · 出血 / 急症",
      "modality": "CT",
      "task": "检测 / 分类",
      "status": "partial",
      "local": "脑",
      "datasets": [
        {
          "name": "CQ500",
          "url": "http://headctstudy.qure.ai/dataset",
          "note": "491 例头颅 CT 急症（含 ICH）",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "RSNA Intracranial Hemorrhage",
          "url": "https://www.kaggle.com/c/rsna-intracranial-hemorrhage-detection",
          "note": "大规模 ICH 亚型分类",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "PhysioNet CT-ICH",
          "url": "https://physionet.org/content/ct-ich/",
          "note": "75 例公开；切片级出血分割",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "BHX（Brain Hemorrhage Extended）",
          "url": "https://physionet.org/content/bhx-brain-bounding-box/",
          "note": "ICH 边界框扩展标注",
          "license": "",
          "kind": "detection"
        }
      ],
      "todo": "",
      "department_id": "neurology",
      "department_zh": "神经内科 / 神经外科"
    },
    {
      "id": "fracture-general",
      "name_zh": "二级：全身骨折 · X 光检测",
      "modality": "X 线",
      "task": "骨折检测",
      "status": "ready",
      "local": "骨骼骨折",
      "datasets": [
        {
          "name": "FracAtlas",
          "url": "https://doi.org/10.6084/m9.figshare.22363012",
          "note": "框+分割；多部位",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "Bone Fracture Detection (YOLO 常用镜像)",
          "url": "https://www.kaggle.com/datasets/pkdarabi/bone-fracture-detection-computer-vision-project",
          "note": "多部位骨折框；核许可",
          "license": "",
          "kind": "detection"
        }
      ],
      "todo": "",
      "department_id": "orthopedics",
      "department_zh": "骨科 / 放射骨科"
    },
    {
      "id": "fracture-wrist",
      "name_zh": "二级：腕关节 · 儿童腕骨折检测",
      "modality": "X 线",
      "task": "骨折检测",
      "status": "ready",
      "local": "腕关节",
      "datasets": [
        {
          "name": "GRAZPEDWRI-DX",
          "url": "https://doi.org/10.6084/m9.figshare.14825193",
          "note": "含 YOLO 格式",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "GRAZPEDWRI-DX 论文",
          "url": "https://doi.org/10.1038/s41597-022-01328-z",
          "note": "Scientific Data",
          "license": "",
          "kind": "detection"
        }
      ],
      "todo": "",
      "department_id": "orthopedics",
      "department_zh": "骨科 / 放射骨科"
    },
    {
      "id": "fracture-spine",
      "name_zh": "二级：脊柱 · 椎体 / 骨折检测",
      "modality": "X 线 / CT",
      "task": "检测",
      "status": "ready",
      "local": "脊柱",
      "datasets": [
        {
          "name": "VinDr-SpineXR",
          "url": "https://physionet.org/content/vindr-spinexr/1.0.0/",
          "note": "需 CITI",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "RSNA Cervical Spine Fracture",
          "url": "https://www.kaggle.com/c/rsna-2022-cervical-spine-fracture-detection",
          "note": "颈椎骨折",
          "license": "",
          "kind": "detection"
        }
      ],
      "todo": "",
      "department_id": "orthopedics",
      "department_zh": "骨科 / 放射骨科"
    },
    {
      "id": "fracture-hip",
      "name_zh": "二级：髋部 · 骨折检测",
      "modality": "X 线",
      "task": "骨折检测",
      "status": "partial",
      "local": "髋部",
      "datasets": [
        {
          "name": "FracAtlas（髋子集）",
          "url": "https://doi.org/10.6084/m9.figshare.22363012",
          "note": "全身骨折集含髋；YOLO/COCO",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "FracAtlas Scientific Data",
          "url": "https://doi.org/10.1038/s41597-023-02432-4",
          "note": "论文说明",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "MURA（含肩/肘等；异常分类）",
          "url": "https://stanfordmlgroup.github.io/competitions/mura/",
          "note": "骨骼 X 线异常分类；可辅筛",
          "license": "",
          "kind": "classification"
        }
      ],
      "todo": "",
      "department_id": "orthopedics",
      "department_zh": "骨科 / 放射骨科"
    },
    {
      "id": "knee",
      "name_zh": "二级：膝关节 · X 线 / MRI",
      "modality": "X 线 / MRI",
      "task": "检测 / 分割转框",
      "status": "partial",
      "local": "膝关节",
      "datasets": [
        {
          "name": "Knee Osteoarthritis Dataset (Kaggle)",
          "url": "https://www.kaggle.com/datasets/tommyngx/kneeosteoarthritis",
          "note": "分级为主",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "MRNet",
          "url": "https://stanfordmlgroup.github.io/competitions/mrnet/",
          "note": "膝 MRI；ACL 等（申请）",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "PlaTiF 胫骨平台骨折",
          "url": "https://zenodo.org/records/18007397",
          "note": "膝 X 线+冠状 CT；Schatzker 分级",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "OAI（Osteoarthritis Initiative）",
          "url": "https://nda.nih.gov/oai",
          "note": "大规模膝 OA；需申请",
          "license": "",
          "kind": "classification"
        }
      ],
      "todo": "原生骨折框少于腕/全身集",
      "department_id": "orthopedics",
      "department_zh": "骨科 / 放射骨科"
    },
    {
      "id": "osteoporosis-lumbar",
      "name_zh": "二级：骨质疏松 · 腰椎筛查",
      "modality": "X 线 / CT",
      "task": "筛查 / 检测",
      "status": "partial",
      "local": "骨质疏松",
      "datasets": [
        {
          "name": "LUMOS",
          "url": "https://keyueshi.github.io/LUMOS/",
          "note": "项目页",
          "license": "",
          "kind": "mixed"
        },
        {
          "name": "LUMOS Zenodo",
          "url": "https://doi.org/10.5281/zenodo.18173664",
          "note": "约 46GB",
          "license": "CC BY-NC 4.0",
          "kind": "mixed"
        }
      ],
      "todo": "",
      "department_id": "orthopedics",
      "department_zh": "骨科 / 放射骨科"
    },
    {
      "id": "kidney-stone",
      "name_zh": "二级：肾结石 · 目标检测",
      "modality": "超声 / CT",
      "task": "目标检测",
      "status": "partial",
      "local": "肾",
      "datasets": [
        {
          "name": "Kidney Stone Images (YOLO)",
          "url": "https://www.kaggle.com/datasets/safurahajiheidari/kidney-stone-images",
          "note": "起步推荐；YOLO 框",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "CT Kidney Dataset (Kaggle)",
          "url": "https://www.kaggle.com/datasets/nazmul0087/ct-kidney-dataset-normal-cyst-tumor-stone",
          "note": "正常/囊肿/肿瘤/结石四类 CT",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "KiTS23（可筛结石相关）",
          "url": "https://kits-challenge.org/kits23/",
          "note": "肾/肿瘤分割；结石需另筛",
          "license": "",
          "kind": "seg→box"
        }
      ],
      "todo": "",
      "department_id": "urology",
      "department_zh": "泌尿外科"
    },
    {
      "id": "kidney-tumor",
      "name_zh": "二级：肾肿瘤 · CT 分割转框",
      "modality": "CT",
      "task": "分割转框",
      "status": "partial",
      "local": "肾",
      "datasets": [
        {
          "name": "KiTS23",
          "url": "https://kits-challenge.org/kits23/",
          "note": "肾肿瘤分割→框",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "KiTS21",
          "url": "https://kits-challenge.org/kits21/",
          "note": "前代挑战",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "KiTS19",
          "url": "https://kits19.grand-challenge.org/",
          "note": "经典肾肿瘤分割",
          "license": "",
          "kind": "seg→box"
        }
      ],
      "todo": "",
      "department_id": "urology",
      "department_zh": "泌尿外科"
    },
    {
      "id": "cystoscopy",
      "name_zh": "二级：膀胱镜 · 膀胱肿瘤 / 多类病灶",
      "modality": "膀胱镜",
      "task": "分类 / 分割（部分可转框）",
      "status": "partial",
      "local": "膀胱镜",
      "datasets": [
        {
          "name": "CystoDS OSF 下载",
          "url": "https://osf.io/xvdhy/",
          "note": "8067 张 / 160 患者；768 张分割",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "CystoDS Scientific Data",
          "url": "https://doi.org/10.1038/s41597-026-06887-z",
          "note": "正式论文 DOI",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "CystoDS GitHub",
          "url": "https://github.com/liaolabsu/CystoDS",
          "note": "代码与说明",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "CystoDS OSF DOI",
          "url": "https://doi.org/10.17605/OSF.IO/XVDHY",
          "note": "OSF 持久标识",
          "license": "",
          "kind": "classification"
        }
      ],
      "todo": "原生检测框少于息肉线；分割可转框",
      "department_id": "urology",
      "department_zh": "泌尿外科"
    },
    {
      "id": "prostate-mri",
      "name_zh": "二级：前列腺 · MRI",
      "modality": "MRI",
      "task": "分割为主",
      "status": "partial",
      "local": "前列腺",
      "datasets": [
        {
          "name": "PROSTATEx",
          "url": "https://www.cancerimagingarchive.net/collection/prostatex/",
          "note": "TCIA",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Prostate158",
          "url": "https://doi.org/10.5281/zenodo.6481141",
          "note": "前列腺 MRI 分割",
          "license": "",
          "kind": "seg→box"
        }
      ],
      "todo": "",
      "department_id": "urology",
      "department_zh": "泌尿外科"
    },
    {
      "id": "endometriosis-lap",
      "name_zh": "二级：子宫内膜异位 · 腹腔镜病灶",
      "modality": "腹腔镜",
      "task": "检测 / 分割",
      "status": "partial",
      "local": "endometriosis-yolo",
      "datasets": [
        {
          "name": "GLENDA",
          "url": "https://ftp.itec.aau.at/datasets/GLENDA/",
          "note": "腹腔镜子宫内膜异位病灶",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "EndoVis / MICCAI 内镜挑战入口",
          "url": "https://endovis.grand-challenge.org/",
          "note": "多届腹腔镜/内镜挑战总入口",
          "license": "",
          "kind": "mixed"
        }
      ],
      "todo": "",
      "department_id": "obgyn",
      "department_zh": "妇产科"
    },
    {
      "id": "endometriosis-mri",
      "name_zh": "二级：子宫内膜异位 · 盆腔 MRI",
      "modality": "MRI",
      "task": "分割 / 转框",
      "status": "partial",
      "local": "endometriosis-seg",
      "datasets": [
        {
          "name": "UT-EndoMRI",
          "url": "https://zenodo.org/records/13749613",
          "note": "盆腔 MRI",
          "license": "",
          "kind": "segmentation"
        }
      ],
      "todo": "",
      "department_id": "obgyn",
      "department_zh": "妇产科"
    },
    {
      "id": "cervix",
      "name_zh": "二级：宫颈 · 阴道镜 / 细胞学",
      "modality": "阴道镜 / 细胞学",
      "task": "分类为主（公开原生框较少）",
      "status": "partial",
      "local": "宫颈",
      "datasets": [
        {
          "name": "Intel & MobileODT Cervical（Kaggle）",
          "url": "https://www.kaggle.com/competitions/intel-mobileodt-cervical-cancer-screening",
          "note": "阴道镜宫颈类型三分类；公开竞赛数据",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "MobileODT 精炼子集（Zenodo）",
          "url": "https://doi.org/10.5281/zenodo.19212544",
          "note": "人工质控 ROI；766 张",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "IARC Cervical Cancer Image Bank",
          "url": "https://screening.iarc.fr/cervicalimagebank.php",
          "note": "官方图库；需申请",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "IARC Image ColpoBank（IEEE DataPort）",
          "url": "https://ieee-dataport.org/documents/iarc-image-colpobank",
          "note": "约 200 例患者阴道镜；需登录",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "HyCervix 高光谱阴道镜",
          "url": "https://zenodo.org/records/18208664",
          "note": "77 例 HS 立方；GitHub: carlosvegagc/HyCervix",
          "license": "",
          "kind": "classification"
        }
      ],
      "todo": "多数为分类；带框公开集需逐条核",
      "department_id": "obgyn",
      "department_zh": "妇产科"
    },
    {
      "id": "fetal-us",
      "name_zh": "二级：胎儿超声 · 切面 / 测量定位",
      "modality": "产科超声",
      "task": "定位 / 检测",
      "status": "partial",
      "local": "胎儿超声",
      "datasets": [
        {
          "name": "HC18",
          "url": "https://hc18.grand-challenge.org/",
          "note": "胎头围测量",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "FETAL_PLANES_DB",
          "url": "https://zenodo.org/records/3904280",
          "note": "标准切面分类",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "FPUS23 胎儿平面（GitHub）",
          "url": "https://github.com/bharathprabakaran/FPUS23",
          "note": "体模超声；含平面/方位/框",
          "license": "",
          "kind": "detection"
        }
      ],
      "todo": "",
      "department_id": "obgyn",
      "department_zh": "妇产科"
    },
    {
      "id": "oral-opg",
      "name_zh": "二级：口腔全景 OPG · 多类病灶检测",
      "modality": "X 线全景",
      "task": "多类检测",
      "status": "partial",
      "local": "oral-yolo",
      "datasets": [
        {
          "name": "DENTEX",
          "url": "https://dentex.grand-challenge.org/",
          "note": "全景牙位/诊断分层检测挑战",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "DENTEX GitHub",
          "url": "https://github.com/ibrahimethemhamamci/DENTEX",
          "note": "说明与引用",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "Tufts Dental Database",
          "url": "https://tdd.tufts.edu/",
          "note": "牙科全景等；核许可与申请",
          "license": "",
          "kind": "mixed"
        },
        {
          "name": "Children's Dental Panoramic Radiographs",
          "url": "https://doi.org/10.6084/m9.figshare.14806545.v3",
          "note": "儿童全景；常用公开补充",
          "license": "",
          "kind": "classification"
        }
      ],
      "todo": "",
      "department_id": "stomatology",
      "department_zh": "口腔科 / 口腔颌面"
    },
    {
      "id": "pathology-nuclei",
      "name_zh": "二级：病理 · 细胞核实例检测",
      "modality": "病理切片",
      "task": "实例→框",
      "status": "ready",
      "local": "病理切片",
      "datasets": [
        {
          "name": "PanNuke",
          "url": "https://warwick.ac.uk/fac/cross_fac/tia/data/pannuke",
          "note": "核→框",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "CoNSeP",
          "url": "https://warwick.ac.uk/fac/cross_fac/tia/data/hovernet/",
          "note": "核分割入口",
          "license": "",
          "kind": "seg→box"
        }
      ],
      "todo": "",
      "department_id": "pathology-lab",
      "department_zh": "病理科 / 检验显微"
    },
    {
      "id": "pathology-metastasis",
      "name_zh": "二级：病理 · 淋巴结转移检测",
      "modality": "WSI",
      "task": "检测 / 分类",
      "status": "partial",
      "local": "病理切片",
      "datasets": [
        {
          "name": "Camelyon17",
          "url": "https://camelyon17.grand-challenge.org/",
          "note": "转移灶",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "Camelyon16",
          "url": "https://camelyon16.grand-challenge.org/",
          "note": "前代挑战",
          "license": "",
          "kind": "detection"
        }
      ],
      "todo": "",
      "department_id": "pathology-lab",
      "department_zh": "病理科 / 检验显微"
    },
    {
      "id": "blood-cell",
      "name_zh": "二级：血细胞 · 显微目标检测",
      "modality": "显微",
      "task": "目标检测",
      "status": "ready",
      "local": "血细胞",
      "datasets": [
        {
          "name": "BCCD",
          "url": "https://github.com/Shenggan/BCCD_Dataset",
          "note": "VOC 框；最易起步",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "BCCD Kaggle 镜像",
          "url": "https://www.kaggle.com/datasets/coldfir3/bccd-dataset-with-yolov5-labels",
          "note": "YOLO 标签镜像",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "Raabin-WBC",
          "url": "https://raabindata.com/free-data/",
          "note": "白细胞分类/检测公开集",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "LISC",
          "url": "http://users.cecs.anu.edu.au/~hrezatofighi/Data/Leukocyte%20Data.htm",
          "note": "白细胞分割经典小集",
          "license": "",
          "kind": "seg→box"
        }
      ],
      "todo": "",
      "department_id": "pathology-lab",
      "department_zh": "病理科 / 检验显微"
    },
    {
      "id": "lymph-node-us",
      "name_zh": "二级：浅表淋巴结 · 超声/CT",
      "modality": "超声 / CT",
      "task": "检测",
      "status": "partial",
      "local": "淋巴结",
      "datasets": [
        {
          "name": "ALN-Ultra（Zenodo）",
          "url": "https://zenodo.org/records/18483501",
          "note": "257 例早期乳腺癌腋窝淋巴结超声图+视频",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "Breast & LN US（Figshare 子集）",
          "url": "https://doi.org/10.6084/m9.figshare.30112000.v2",
          "note": "乳腺+腋窝淋巴结超声；含 Labelme 标注",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "LLNM 多模态（HuggingFace）",
          "url": "https://huggingface.co/datasets/Snowinbio/LLNM_Multimodal_dataset",
          "note": "甲状腺侧颈淋巴结；需同意条款",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "DeepLesion（淋巴结相关 CT）",
          "url": "https://nihcc.box.com/v/DeepLesion",
          "note": "CT 病灶框可筛淋巴结区",
          "license": "",
          "kind": "detection"
        }
      ],
      "todo": "",
      "department_id": "pathology-lab",
      "department_zh": "病理科 / 检验显微"
    }
  ]
};
