/** 医学影像公开数据集目录 — 科室 → 二级标题 → 数据集类型与链接。 */
window.IMAGING_DATASETS = {
  "meta": {
    "title": "医学影像数据集目录",
    "subtitle": "科室 → 二级标题（病症/模态）→ 各类型公开数据集与链接",
    "updated": "2026-08-10",
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
          "status": "partial",
          "local": "胃镜",
          "datasets": [
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
            }
          ],
          "todo": ""
        },
        {
          "id": "esophagus",
          "name_zh": "二级：食管 · Barrett / 早癌内镜",
          "modality": "食管内镜",
          "task": "检测 / 分割转框",
          "status": "partial",
          "local": "食管",
          "datasets": [
            {
              "name": "HyperKvasir（食管相关类）",
              "url": "https://datasets.simula.no/hyper-kvasir/",
              "note": "从多类筛食管标签",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "Kvasir",
              "url": "https://datasets.simula.no/kvasir/",
              "note": "含食管相关类别",
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
          "task": "分类 / 部分检测",
          "status": "partial",
          "local": "胶囊内镜",
          "datasets": [
            {
              "name": "Kvasir-Capsule",
              "url": "https://datasets.simula.no/kvasir-capsule/",
              "note": "分类为主",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "Kvasir-Capsule OSF",
              "url": "https://osf.io/dv2ag",
              "note": "labeled-images",
              "license": "",
              "kind": "classification"
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
              "note": "Medical Decathlon",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "DeepLesion（胰区）",
              "url": "https://nihcc.box.com/v/DeepLesion",
              "note": "多器官框筛胰",
              "license": "",
              "kind": "detection"
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
              "name": "LUS-BALD",
              "url": "",
              "note": "B-line 成稿主集；补公开发布页",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "POCUS COVID ultrasound",
              "url": "https://github.com/jannisborn/covid19_pocus_ultrasound",
              "note": "肺超声补充",
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
          "task": "定位 / 检测衍生",
          "status": "partial",
          "local": "心脏超声",
          "datasets": [
            {
              "name": "EchoNet-Dynamic",
              "url": "https://echonet.github.io/dynamic/",
              "note": "需申请；可衍生定位",
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
          "task": "斑块检测 / 分类",
          "status": "partial",
          "local": "颈动脉",
          "datasets": [
            {
              "name": "公开斑块检测研究（YOLO）",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11683696/",
              "note": "多中心斑块检测论文；数据申请见原文",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "检索入口：Zenodo carotid plaque",
              "url": "https://zenodo.org/search?q=carotid%20plaque%20ultrasound",
              "note": "逐条核许可与标注类型",
              "license": "",
              "kind": "mixed"
            }
          ],
          "todo": "部分集需向作者申请"
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
              "note": "OCT 积液分割",
              "license": "",
              "kind": "segmentation"
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
              "note": "皮肤镜总入口",
              "license": "",
              "kind": "mixed"
            },
            {
              "name": "HAM10000",
              "url": "https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/DBW86T",
              "note": "7 类皮损",
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
              "name": "BraTS",
              "url": "https://www.synapse.org/",
              "note": "胶质瘤分割年更",
              "license": "",
              "kind": "seg→box"
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
              "note": "头颅 CT 急症",
              "license": "",
              "kind": "classification"
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
              "note": "从 FracAtlas 筛髋",
              "license": "",
              "kind": "detection"
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
              "note": "分级为主；可辅定位",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "MRNet",
              "url": "https://stanfordmlgroup.github.io/competitions/mrnet/",
              "note": "膝 MRI；ACL 等（申请）",
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
              "note": "起步推荐",
              "license": "",
              "kind": "detection"
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
              "name": "CystoDS",
              "url": "https://github.com/liaolabsu/CystoDS",
              "note": "8067 张；分类+部分分割",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "CystoDS Scientific Data",
              "url": "https://doi.org/10.1038/s41597-025-00000-0",
              "note": "以 GitHub/论文最终 DOI 为准",
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
              "note": "腹腔镜病灶",
              "license": "",
              "kind": "detection"
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
              "name": "IARC Cervical Cancer Image Bank",
              "url": "https://screening.iarc.fr/cervicalimagebank.php",
              "note": "官方图库；需申请",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "IARC Colposcopy Atlas（入口）",
              "url": "https://screening.iarc.fr/",
              "note": "阴道镜图谱资源",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "IARC Image ColpoBank（IEEE DataPort）",
              "url": "https://ieee-dataport.org/documents/iarc-image-colpobank",
              "note": "衍生整理；核许可",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "Zenodo 检索 colposcopy",
              "url": "https://zenodo.org/search?q=colposcopy",
              "note": "逐条核标注类型",
              "license": "",
              "kind": "mixed"
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
              "note": "胎头围",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "FETAL_PLANES_DB",
              "url": "https://zenodo.org/records/3904280",
              "note": "标准切面",
              "license": "",
              "kind": "classification"
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
              "note": "全景检测挑战",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "Dental OPG XRAY（项目常用）",
              "url": "",
              "note": "成稿 6 类；补官方页",
              "license": "",
              "kind": "detection"
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
              "name": "检索：axillary lymph node ultrasound dataset",
              "url": "https://zenodo.org/search?q=lymph%20node%20ultrasound",
              "note": "逐条核框标注",
              "license": "",
              "kind": "mixed"
            },
            {
              "name": "DeepLesion（淋巴结相关）",
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
      "status": "partial",
      "local": "胃镜",
      "datasets": [
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
      "status": "partial",
      "local": "食管",
      "datasets": [
        {
          "name": "HyperKvasir（食管相关类）",
          "url": "https://datasets.simula.no/hyper-kvasir/",
          "note": "从多类筛食管标签",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "Kvasir",
          "url": "https://datasets.simula.no/kvasir/",
          "note": "含食管相关类别",
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
      "task": "分类 / 部分检测",
      "status": "partial",
      "local": "胶囊内镜",
      "datasets": [
        {
          "name": "Kvasir-Capsule",
          "url": "https://datasets.simula.no/kvasir-capsule/",
          "note": "分类为主",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "Kvasir-Capsule OSF",
          "url": "https://osf.io/dv2ag",
          "note": "labeled-images",
          "license": "",
          "kind": "classification"
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
          "note": "Medical Decathlon",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "DeepLesion（胰区）",
          "url": "https://nihcc.box.com/v/DeepLesion",
          "note": "多器官框筛胰",
          "license": "",
          "kind": "detection"
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
          "name": "LUS-BALD",
          "url": "",
          "note": "B-line 成稿主集；补公开发布页",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "POCUS COVID ultrasound",
          "url": "https://github.com/jannisborn/covid19_pocus_ultrasound",
          "note": "肺超声补充",
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
      "task": "定位 / 检测衍生",
      "status": "partial",
      "local": "心脏超声",
      "datasets": [
        {
          "name": "EchoNet-Dynamic",
          "url": "https://echonet.github.io/dynamic/",
          "note": "需申请；可衍生定位",
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
      "task": "斑块检测 / 分类",
      "status": "partial",
      "local": "颈动脉",
      "datasets": [
        {
          "name": "公开斑块检测研究（YOLO）",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11683696/",
          "note": "多中心斑块检测论文；数据申请见原文",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "检索入口：Zenodo carotid plaque",
          "url": "https://zenodo.org/search?q=carotid%20plaque%20ultrasound",
          "note": "逐条核许可与标注类型",
          "license": "",
          "kind": "mixed"
        }
      ],
      "todo": "部分集需向作者申请",
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
          "note": "OCT 积液分割",
          "license": "",
          "kind": "segmentation"
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
          "note": "皮肤镜总入口",
          "license": "",
          "kind": "mixed"
        },
        {
          "name": "HAM10000",
          "url": "https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/DBW86T",
          "note": "7 类皮损",
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
          "name": "BraTS",
          "url": "https://www.synapse.org/",
          "note": "胶质瘤分割年更",
          "license": "",
          "kind": "seg→box"
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
          "note": "头颅 CT 急症",
          "license": "",
          "kind": "classification"
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
          "note": "从 FracAtlas 筛髋",
          "license": "",
          "kind": "detection"
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
          "note": "分级为主；可辅定位",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "MRNet",
          "url": "https://stanfordmlgroup.github.io/competitions/mrnet/",
          "note": "膝 MRI；ACL 等（申请）",
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
          "note": "起步推荐",
          "license": "",
          "kind": "detection"
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
          "name": "CystoDS",
          "url": "https://github.com/liaolabsu/CystoDS",
          "note": "8067 张；分类+部分分割",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "CystoDS Scientific Data",
          "url": "https://doi.org/10.1038/s41597-025-00000-0",
          "note": "以 GitHub/论文最终 DOI 为准",
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
          "note": "腹腔镜病灶",
          "license": "",
          "kind": "detection"
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
          "name": "IARC Cervical Cancer Image Bank",
          "url": "https://screening.iarc.fr/cervicalimagebank.php",
          "note": "官方图库；需申请",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "IARC Colposcopy Atlas（入口）",
          "url": "https://screening.iarc.fr/",
          "note": "阴道镜图谱资源",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "IARC Image ColpoBank（IEEE DataPort）",
          "url": "https://ieee-dataport.org/documents/iarc-image-colpobank",
          "note": "衍生整理；核许可",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "Zenodo 检索 colposcopy",
          "url": "https://zenodo.org/search?q=colposcopy",
          "note": "逐条核标注类型",
          "license": "",
          "kind": "mixed"
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
          "note": "胎头围",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "FETAL_PLANES_DB",
          "url": "https://zenodo.org/records/3904280",
          "note": "标准切面",
          "license": "",
          "kind": "classification"
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
          "note": "全景检测挑战",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "Dental OPG XRAY（项目常用）",
          "url": "",
          "note": "成稿 6 类；补官方页",
          "license": "",
          "kind": "detection"
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
          "name": "检索：axillary lymph node ultrasound dataset",
          "url": "https://zenodo.org/search?q=lymph%20node%20ultrasound",
          "note": "逐条核框标注",
          "license": "",
          "kind": "mixed"
        },
        {
          "name": "DeepLesion（淋巴结相关）",
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
