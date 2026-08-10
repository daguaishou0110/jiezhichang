/** 医学影像公开数据集目录 — 按部位/模态/病症细分预填。可继续在页面增补。 */
window.IMAGING_DATASETS = {
  "meta": {
    "title": "医学影像数据集目录",
    "subtitle": "按解剖部位/模态/病症细分；优先公开目标检测或可转外接框的分割集。",
    "updated": "2026-08-10",
    "how_to_fill": "可在页面继续手动增补；同步见 tools/serve_imaging_datasets.py",
    "scope": "仅医学影像；不含菌群/检验等非影像"
  },
  "categories": [
    {
      "id": "colorectal-polyp",
      "name_zh": "结直肠 · 结肠镜息肉检测",
      "modality": "结肠镜",
      "task": "目标检测 / 分割转框",
      "status": "ready",
      "local": "colorectal-yolo",
      "datasets": [
        {
          "name": "Kvasir-SEG",
          "url": "https://datasets.simula.no/kvasir-seg/",
          "note": "1000 张；分割可转框；YOLO 常用",
          "license": ""
        },
        {
          "name": "CVC-ClinicDB",
          "url": "https://polyp.grand-challenge.org/CVCClinicDB/",
          "note": "612 张；跨源常用",
          "license": ""
        },
        {
          "name": "CVC-ColonDB",
          "url": "https://polyp.grand-challenge.org/CVCColonDB/",
          "note": "外测经典",
          "license": ""
        },
        {
          "name": "ETIS-LaribPolypDB",
          "url": "https://polyp.grand-challenge.org/ETISLarib/",
          "note": "小目标难例",
          "license": ""
        },
        {
          "name": "PolypGen",
          "url": "https://www.synapse.org/#!Synapse:syn45200214",
          "note": "多中心；需 Synapse 账号",
          "license": ""
        },
        {
          "name": "PolypDB",
          "url": "https://osf.io/pr7ms/",
          "note": "多中心多模态；含 bounding boxes",
          "license": ""
        },
        {
          "name": "REAL-Colon",
          "url": "https://doi.org/10.25452/figshare.plus.22202866",
          "note": "视频级框；大规模",
          "license": ""
        },
        {
          "name": "GPolypOD",
          "url": "https://doi.org/10.57760/sciencedb.j00001.01467",
          "note": "2026 胃肠镜息肉检测集",
          "license": ""
        }
      ],
      "todo": ""
    },
    {
      "id": "gastroscopy",
      "name_zh": "胃镜 · 上消化道多类病灶",
      "modality": "胃镜",
      "task": "分类 / 检测",
      "status": "partial",
      "local": "胃镜",
      "datasets": [
        {
          "name": "HyperKvasir",
          "url": "https://datasets.simula.no/hyper-kvasir/",
          "note": "大规模多类；部分可做定位",
          "license": ""
        },
        {
          "name": "HyperKvasir OSF",
          "url": "https://osf.io/mh9sj",
          "note": "镜像下载",
          "license": ""
        },
        {
          "name": "Kvasir",
          "url": "https://datasets.simula.no/kvasir/",
          "note": "经典内镜分类入口",
          "license": ""
        }
      ],
      "todo": "原生 bbox 少于息肉线，优先挑带框子集"
    },
    {
      "id": "esophagus",
      "name_zh": "食管 · Barrett/早癌内镜",
      "modality": "食管内镜",
      "task": "检测 / 分割转框",
      "status": "partial",
      "local": "食管",
      "datasets": [
        {
          "name": "HyperKvasir（食管相关类）",
          "url": "https://datasets.simula.no/hyper-kvasir/",
          "note": "从多类中筛选食管相关标签",
          "license": ""
        }
      ],
      "todo": "独立故事时可再补专用食管集"
    },
    {
      "id": "capsule",
      "name_zh": "胶囊内镜 · 小肠病灶",
      "modality": "胶囊内镜",
      "task": "分类 / 部分检测",
      "status": "partial",
      "local": "胶囊内镜",
      "datasets": [
        {
          "name": "Kvasir-Capsule",
          "url": "https://datasets.simula.no/kvasir-capsule/",
          "note": "分类为主；含 labeled-images",
          "license": ""
        },
        {
          "name": "Kvasir-Capsule OSF",
          "url": "https://osf.io/dv2ag",
          "note": "labeled-images 下载",
          "license": ""
        }
      ],
      "todo": ""
    },
    {
      "id": "endometriosis-lap",
      "name_zh": "妇科 · 子宫内膜异位（腹腔镜）",
      "modality": "腹腔镜",
      "task": "检测 / 分割",
      "status": "partial",
      "local": "endometriosis-yolo",
      "datasets": [
        {
          "name": "GLENDA",
          "url": "https://ftp.itec.aau.at/datasets/GLENDA/",
          "note": "腹腔镜子宫内膜异位病灶",
          "license": ""
        }
      ],
      "todo": ""
    },
    {
      "id": "endometriosis-mri",
      "name_zh": "妇科 · 子宫内膜异位（盆腔 MRI）",
      "modality": "MRI",
      "task": "分割 / 转框",
      "status": "partial",
      "local": "endometriosis-seg",
      "datasets": [
        {
          "name": "UT-EndoMRI",
          "url": "https://zenodo.org/records/13749613",
          "note": "盆腔 MRI",
          "license": ""
        }
      ],
      "todo": ""
    },
    {
      "id": "cervix",
      "name_zh": "宫颈 · 阴道镜/细胞学",
      "modality": "阴道镜 / 细胞学",
      "task": "检测",
      "status": "empty",
      "local": "宫颈",
      "datasets": [],
      "todo": "公开带框集较少，补阴道镜挑战赛集"
    },
    {
      "id": "cystoscopy",
      "name_zh": "膀胱镜 · 膀胱肿瘤",
      "modality": "膀胱镜",
      "task": "检测 / 分割转框",
      "status": "empty",
      "local": "膀胱镜",
      "datasets": [],
      "todo": "公开原生检测集少"
    },
    {
      "id": "bronchoscopy",
      "name_zh": "支气管镜 · 气道病灶",
      "modality": "支气管镜",
      "task": "检测",
      "status": "empty",
      "local": "支气管镜",
      "datasets": [],
      "todo": "公开集稀缺"
    },
    {
      "id": "oral-opg",
      "name_zh": "口腔 · 全景片病灶检测",
      "modality": "X 线全景 OPG",
      "task": "多类检测",
      "status": "partial",
      "local": "oral-yolo",
      "datasets": [
        {
          "name": "DENTEX",
          "url": "https://dentex.grand-challenge.org/",
          "note": "牙科全景检测挑战",
          "license": ""
        },
        {
          "name": "Dental OPG XRAY（项目常用）",
          "url": "",
          "note": "成稿 6 类主集；补官方发布页",
          "license": ""
        }
      ],
      "todo": ""
    },
    {
      "id": "liver-ct-tumor",
      "name_zh": "肝 · CT 小肿瘤检测",
      "modality": "CT",
      "task": "检测 / 分割转框",
      "status": "ready",
      "local": "liver-yolo",
      "datasets": [
        {
          "name": "SLTD",
          "url": "https://github.com/XLIAaron/Small_LiverTumor",
          "note": "小肝肿瘤检测；成稿主集",
          "license": ""
        },
        {
          "name": "LiTS",
          "url": "https://competitions.codalab.org/competitions/17094",
          "note": "肝/肿瘤分割→外接框",
          "license": ""
        },
        {
          "name": "DeepLesion（肝区子集）",
          "url": "https://nihcc.box.com/v/DeepLesion",
          "note": "多器官病灶框；筛肝区",
          "license": ""
        }
      ],
      "todo": ""
    },
    {
      "id": "lung-us-bline",
      "name_zh": "肺 · 超声 B-line 检测",
      "modality": "肺超声",
      "task": "目标检测",
      "status": "partial",
      "local": "lung-yolo",
      "datasets": [
        {
          "name": "LUS-BALD",
          "url": "",
          "note": "B-line 成稿主集；补公开发布链接",
          "license": ""
        },
        {
          "name": "POCUS COVID ultrasound",
          "url": "https://github.com/jannisborn/covid19_pocus_ultrasound",
          "note": "肺超声补充",
          "license": ""
        }
      ],
      "todo": ""
    },
    {
      "id": "lung-ct-nodule",
      "name_zh": "肺 · CT 结节检测",
      "modality": "CT",
      "task": "结节检测",
      "status": "ready",
      "local": "lung / lung-yolo",
      "datasets": [
        {
          "name": "LUNA16",
          "url": "https://luna16.grand-challenge.org/Data/",
          "note": "结节坐标→框",
          "license": ""
        },
        {
          "name": "LIDC-IDRI",
          "url": "https://www.cancerimagingarchive.net/collection/lidc-idri/",
          "note": "结节精标；TCIA",
          "license": ""
        }
      ],
      "todo": ""
    },
    {
      "id": "coronary-xca",
      "name_zh": "心血管 · 冠脉造影狭窄",
      "modality": "XCA",
      "task": "分割 / 实例分割→框",
      "status": "ready",
      "local": "heart",
      "datasets": [
        {
          "name": "ARCADE",
          "url": "https://arcade.grand-challenge.org/",
          "note": "狭窄分割/检测挑战",
          "license": ""
        },
        {
          "name": "ARCADE Zenodo",
          "url": "https://doi.org/10.5281/zenodo.10390295",
          "note": "数据下载",
          "license": ""
        }
      ],
      "todo": ""
    },
    {
      "id": "echo",
      "name_zh": "心脏 · 超声心动",
      "modality": "超声心动",
      "task": "结构定位 / 检测",
      "status": "partial",
      "local": "心脏超声",
      "datasets": [
        {
          "name": "EchoNet-Dynamic",
          "url": "https://echonet.github.io/dynamic/",
          "note": "心超视频；需申请；可衍生定位任务",
          "license": ""
        }
      ],
      "todo": ""
    },
    {
      "id": "carotid",
      "name_zh": "颈动脉 · 斑块超声",
      "modality": "超声",
      "task": "斑块/IMT 检测",
      "status": "empty",
      "local": "颈动脉",
      "datasets": [],
      "todo": "检索 Figshare/Zenodo carotid plaque ultrasound，核许可"
    },
    {
      "id": "osteoporosis-lumbar",
      "name_zh": "骨质疏松 · 腰椎多模态",
      "modality": "X 线 / CT",
      "task": "筛查 / 检测",
      "status": "partial",
      "local": "骨质疏松",
      "datasets": [
        {
          "name": "LUMOS",
          "url": "https://keyueshi.github.io/LUMOS/",
          "note": "项目页",
          "license": ""
        },
        {
          "name": "LUMOS Zenodo",
          "url": "https://doi.org/10.5281/zenodo.18173664",
          "note": "全量约 46GB；CC BY-NC 4.0",
          "license": "CC BY-NC 4.0"
        }
      ],
      "todo": ""
    },
    {
      "id": "chest-xray",
      "name_zh": "胸部 · 胸片多病灶检测",
      "modality": "X 线胸片",
      "task": "多类病灶框",
      "status": "ready",
      "local": "胸部",
      "datasets": [
        {
          "name": "VinDr-CXR",
          "url": "https://physionet.org/content/vindr-cxr/1.0.0/",
          "note": "原生 bbox；需 PhysioNet/CITI",
          "license": ""
        },
        {
          "name": "RSNA Pneumonia Detection",
          "url": "https://www.kaggle.com/c/rsna-pneumonia-detection-challenge/data",
          "note": "肺炎框",
          "license": ""
        },
        {
          "name": "NIH ChestX-ray14",
          "url": "https://nihcc.app.box.com/v/ChestXray-NIHCC",
          "note": "多标签分类为主；部分弱定位",
          "license": ""
        }
      ],
      "todo": ""
    },
    {
      "id": "fracture-general",
      "name_zh": "骨骼骨折 · 全身 X 光",
      "modality": "X 线",
      "task": "骨折检测",
      "status": "ready",
      "local": "骨骼骨折",
      "datasets": [
        {
          "name": "FracAtlas",
          "url": "https://doi.org/10.6084/m9.figshare.22363012",
          "note": "框+分割；含多部位",
          "license": ""
        }
      ],
      "todo": ""
    },
    {
      "id": "fracture-wrist",
      "name_zh": "腕关节 · 儿童腕部骨折",
      "modality": "X 线",
      "task": "骨折检测",
      "status": "ready",
      "local": "腕关节",
      "datasets": [
        {
          "name": "GRAZPEDWRI-DX",
          "url": "https://doi.org/10.6084/m9.figshare.14825193",
          "note": "儿童腕；含 YOLO 格式",
          "license": ""
        }
      ],
      "todo": ""
    },
    {
      "id": "fracture-spine",
      "name_zh": "脊柱 · 椎体/骨折",
      "modality": "X 线 / CT",
      "task": "检测",
      "status": "partial",
      "local": "脊柱",
      "datasets": [
        {
          "name": "VinDr-SpineXR",
          "url": "https://physionet.org/content/vindr-spinexr/1.0.0/",
          "note": "脊柱；需 CITI",
          "license": ""
        },
        {
          "name": "RSNA Cervical Spine Fracture",
          "url": "https://www.kaggle.com/c/rsna-2022-cervical-spine-fracture-detection",
          "note": "颈椎骨折检测",
          "license": ""
        }
      ],
      "todo": ""
    },
    {
      "id": "fracture-hip",
      "name_zh": "髋部 · 骨折检测",
      "modality": "X 线",
      "task": "骨折检测",
      "status": "partial",
      "local": "髋部",
      "datasets": [
        {
          "name": "FracAtlas（髋子集）",
          "url": "https://doi.org/10.6084/m9.figshare.22363012",
          "note": "从 FracAtlas 筛髋部",
          "license": ""
        }
      ],
      "todo": ""
    },
    {
      "id": "breast-mammo",
      "name_zh": "乳腺 · 钼靶肿块/钙化",
      "modality": "钼靶",
      "task": "检测",
      "status": "ready",
      "local": "乳腺",
      "datasets": [
        {
          "name": "VinDr-Mammo",
          "url": "https://physionet.org/content/vindr-mammo/1.0.0/",
          "note": "原生框；需 CITI",
          "license": ""
        },
        {
          "name": "CBIS-DDSM",
          "url": "https://www.cancerimagingarchive.net/collection/cbis-ddsm/",
          "note": "TCIA；肿块/钙化",
          "license": ""
        },
        {
          "name": "INbreast",
          "url": "https://www.kaggle.com/datasets/ramanathansp20/inbreast-dataset",
          "note": "经典钼靶；镜像需核许可",
          "license": ""
        }
      ],
      "todo": ""
    },
    {
      "id": "breast-us",
      "name_zh": "乳腺 · 超声肿块",
      "modality": "超声",
      "task": "检测 / 分割转框",
      "status": "ready",
      "local": "乳腺超声",
      "datasets": [
        {
          "name": "BUSI",
          "url": "https://www.kaggle.com/datasets/aryashah2k/breast-ultrasound-images-dataset",
          "note": "分割→外接框",
          "license": ""
        },
        {
          "name": "BUSI Curated Zenodo",
          "url": "https://doi.org/10.5281/zenodo.19047974",
          "note": "整理版",
          "license": ""
        }
      ],
      "todo": ""
    },
    {
      "id": "thyroid-us",
      "name_zh": "甲状腺 · 超声结节",
      "modality": "超声",
      "task": "检测 / 分割转框",
      "status": "ready",
      "local": "甲状腺",
      "datasets": [
        {
          "name": "TN3K",
          "url": "https://github.com/haifangong/TRFE-Net-for-thyroid-nodule-segmentation",
          "note": "分割转框；常用入口",
          "license": ""
        },
        {
          "name": "TN3K HuggingFace",
          "url": "https://huggingface.co/datasets/haifan-gong/TN3K",
          "note": "镜像",
          "license": ""
        },
        {
          "name": "DDTI",
          "url": "https://www.kaggle.com/datasets/dasmehdixtr/ddti-thyroid-ultrasound-images",
          "note": "小集易下",
          "license": ""
        },
        {
          "name": "TN-SCUI 2020",
          "url": "https://tn-scui2020.grand-challenge.org/",
          "note": "挑战赛",
          "license": ""
        }
      ],
      "todo": ""
    },
    {
      "id": "fundus-lesion",
      "name_zh": "眼底 · 彩照糖网病灶检测",
      "modality": "眼底照相",
      "task": "病灶框 / 分割",
      "status": "ready",
      "local": "眼底",
      "datasets": [
        {
          "name": "IDRiD",
          "url": "https://idrid.grand-challenge.org/",
          "note": "糖网病灶定位",
          "license": ""
        },
        {
          "name": "DDR",
          "url": "https://github.com/nkicsl/DDR-dataset",
          "note": "糖网分级+病灶",
          "license": ""
        }
      ],
      "todo": ""
    },
    {
      "id": "fundus-vessel",
      "name_zh": "眼底 · 血管分割（可转检测）",
      "modality": "眼底照相",
      "task": "分割",
      "status": "partial",
      "local": "fundus-vessel-yolo",
      "datasets": [
        {
          "name": "FIVES",
          "url": "https://doi.org/10.6084/m9.figshare.19688169.v1",
          "note": "血管分割主集",
          "license": ""
        },
        {
          "name": "DRIVE",
          "url": "https://drive.grand-challenge.org/",
          "note": "经典血管",
          "license": ""
        },
        {
          "name": "CHASE_DB1",
          "url": "https://blogs.kingston.ac.uk/retinal/chasedb1/",
          "note": "儿童眼底",
          "license": ""
        },
        {
          "name": "STARE",
          "url": "https://cecas.clemson.edu/~ahoover/stare/",
          "note": "小样本",
          "license": ""
        }
      ],
      "todo": "分割向；检测故事弱于病灶框"
    },
    {
      "id": "fundus-oct",
      "name_zh": "眼底 · OCT 积液/病灶",
      "modality": "OCT",
      "task": "分割 / 检测",
      "status": "partial",
      "local": "眼底OCT",
      "datasets": [
        {
          "name": "RETOUCH",
          "url": "https://retouch.grand-challenge.org/",
          "note": "OCT 积液分割挑战",
          "license": ""
        }
      ],
      "todo": ""
    },
    {
      "id": "skin-lesion",
      "name_zh": "皮肤 · 皮肤镜/临床皮损",
      "modality": "皮肤镜 / 临床照",
      "task": "检测 / 分类",
      "status": "ready",
      "local": "skin",
      "datasets": [
        {
          "name": "iToBoS",
          "url": "https://doi.org/10.1038/s41597-025-05483-x",
          "note": "全身摄影 YOLO 框",
          "license": ""
        },
        {
          "name": "ISIC Archive",
          "url": "https://www.isic-archive.com/",
          "note": "皮肤镜总入口",
          "license": ""
        },
        {
          "name": "HAM10000",
          "url": "https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/DBW86T",
          "note": "7 类皮损",
          "license": ""
        }
      ],
      "todo": ""
    },
    {
      "id": "brain-tumor-mri",
      "name_zh": "脑 · MRI/CT 肿瘤检测",
      "modality": "MRI / CT",
      "task": "检测 / 分割转框",
      "status": "ready",
      "local": "脑",
      "datasets": [
        {
          "name": "Br35H",
          "url": "https://www.kaggle.com/datasets/ahmedhamada0/brain-tumor-detection",
          "note": "易下；YOLO 友好",
          "license": ""
        },
        {
          "name": "Br35H YOLO 参考",
          "url": "https://github.com/mkang315/RCS-YOLO/tree/main/dataset-Br35H",
          "note": "标注参考",
          "license": ""
        },
        {
          "name": "BraTS",
          "url": "https://www.synapse.org/",
          "note": "胶质瘤分割年更；转框需处理",
          "license": ""
        }
      ],
      "todo": ""
    },
    {
      "id": "brain-ct-bleed",
      "name_zh": "脑 · 头颅 CT 出血/急症",
      "modality": "CT",
      "task": "检测 / 分类",
      "status": "partial",
      "local": "脑",
      "datasets": [
        {
          "name": "CQ500",
          "url": "http://headctstudy.qure.ai/dataset",
          "note": "头颅 CT 急症",
          "license": ""
        }
      ],
      "todo": ""
    },
    {
      "id": "kidney-stone",
      "name_zh": "肾 · 结石检测",
      "modality": "超声 / CT",
      "task": "目标检测",
      "status": "partial",
      "local": "肾",
      "datasets": [
        {
          "name": "Kidney Stone Images (YOLO)",
          "url": "https://www.kaggle.com/datasets/safurahajiheidari/kidney-stone-images",
          "note": "起步推荐",
          "license": ""
        }
      ],
      "todo": ""
    },
    {
      "id": "kidney-tumor",
      "name_zh": "肾 · 肿瘤（分割转框）",
      "modality": "CT",
      "task": "分割转框",
      "status": "partial",
      "local": "肾",
      "datasets": [
        {
          "name": "KiTS23",
          "url": "https://kits-challenge.org/kits23/",
          "note": "肾肿瘤分割→外接框",
          "license": ""
        }
      ],
      "todo": ""
    },
    {
      "id": "pancreas-ct",
      "name_zh": "胰腺 · CT 病灶",
      "modality": "CT",
      "task": "分割转框",
      "status": "partial",
      "local": "胰腺",
      "datasets": [
        {
          "name": "MSD Pancreas (Task07)",
          "url": "http://medicaldecathlon.com/",
          "note": "Medical Decathlon",
          "license": ""
        }
      ],
      "todo": ""
    },
    {
      "id": "abdomen-ct-lesion",
      "name_zh": "腹部 CT · 多器官病灶框",
      "modality": "CT",
      "task": "病灶检测",
      "status": "ready",
      "local": "腹部CT",
      "datasets": [
        {
          "name": "DeepLesion",
          "url": "https://nihcc.box.com/v/DeepLesion",
          "note": "多器官病灶框首选",
          "license": ""
        },
        {
          "name": "AMOS22",
          "url": "https://amos22.grand-challenge.org/",
          "note": "腹多器官分割",
          "license": ""
        }
      ],
      "todo": ""
    },
    {
      "id": "gallbladder-us",
      "name_zh": "胆囊 · 超声结石/息肉",
      "modality": "超声",
      "task": "检测",
      "status": "empty",
      "local": "胆囊",
      "datasets": [],
      "todo": "Kaggle 胆囊集质量需核"
    },
    {
      "id": "lymph-node",
      "name_zh": "淋巴结 · 超声/CT",
      "modality": "超声 / CT",
      "task": "检测",
      "status": "empty",
      "local": "淋巴结",
      "datasets": [],
      "todo": "公开专用检测集少"
    },
    {
      "id": "prostate-mri",
      "name_zh": "前列腺 · MRI",
      "modality": "MRI",
      "task": "分割 / 检测稀缺",
      "status": "partial",
      "local": "前列腺",
      "datasets": [
        {
          "name": "PROSTATEx",
          "url": "https://www.cancerimagingarchive.net/collection/prostatex/",
          "note": "TCIA；检测原生较少",
          "license": ""
        }
      ],
      "todo": "优先分割故事，原生检测弱"
    },
    {
      "id": "fetal-us",
      "name_zh": "胎儿超声 · 结构测量/切面",
      "modality": "产科超声",
      "task": "定位 / 检测",
      "status": "partial",
      "local": "胎儿超声",
      "datasets": [
        {
          "name": "HC18",
          "url": "https://hc18.grand-challenge.org/",
          "note": "胎头围",
          "license": ""
        },
        {
          "name": "FETAL_PLANES_DB",
          "url": "https://zenodo.org/records/3904280",
          "note": "标准切面",
          "license": ""
        }
      ],
      "todo": ""
    },
    {
      "id": "blood-cell",
      "name_zh": "血细胞 · 显微检测",
      "modality": "显微",
      "task": "目标检测",
      "status": "ready",
      "local": "血细胞",
      "datasets": [
        {
          "name": "BCCD",
          "url": "https://github.com/Shenggan/BCCD_Dataset",
          "note": "VOC 框；最易起步",
          "license": ""
        }
      ],
      "todo": ""
    },
    {
      "id": "pathology-nuclei",
      "name_zh": "病理 · 细胞核实例",
      "modality": "病理切片",
      "task": "实例→框",
      "status": "ready",
      "local": "病理切片",
      "datasets": [
        {
          "name": "PanNuke",
          "url": "https://warwick.ac.uk/fac/cross_fac/tia/data/pannuke",
          "note": "核实例→框",
          "license": ""
        },
        {
          "name": "CoNSeP",
          "url": "https://warwick.ac.uk/fac/cross_fac/tia/data/hovernet/",
          "note": "核分割相关入口",
          "license": ""
        }
      ],
      "todo": ""
    },
    {
      "id": "pathology-metastasis",
      "name_zh": "病理 · 淋巴结转移",
      "modality": "WSI",
      "task": "检测 / 分类",
      "status": "partial",
      "local": "病理切片",
      "datasets": [
        {
          "name": "Camelyon17",
          "url": "https://camelyon17.grand-challenge.org/",
          "note": "淋巴结转移",
          "license": ""
        }
      ],
      "todo": ""
    },
    {
      "id": "knee",
      "name_zh": "膝关节 · X 线/MRI",
      "modality": "X 线 / MRI",
      "task": "检测 / 分割转框",
      "status": "empty",
      "local": "膝关节",
      "datasets": [],
      "todo": "OAI 等多为分类/分割，检测需自转"
    }
  ]
};
