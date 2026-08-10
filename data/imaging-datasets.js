/** 医学影像公开数据集目录 — 科室 → 二级标题 → 数据集。 */
window.IMAGING_DATASETS = {
  "meta": {
    "title": "医学影像数据集目录",
    "subtitle": "科室 → 二级标题（病症/模态）→ 各类型公开数据集与链接",
    "updated": "2026-08-10",
    "note": "含联网补充公开检测/分割/分类数据集",
    "structure": "department → secondary title → datasets",
    "scope": "优先目标检测；含可转外接框的分割集与少数分类入口",
    "source": "jiezhichang + D:/hyf/.../农业yolo数据集/docs/_gen_med_catalog_links.py + 中文部位目录"
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
          "local": "colorectal-yolo · 农业yolo/结直肠",
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
            },
            {
              "name": "BKAI-IGH NeoPolyp",
              "url": "https://www.kaggle.com/c/bkai-igh-neopolyp",
              "note": "~1200 · Kaggle · 新息肉挑战",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Kvasir Instrument",
              "url": "https://datasets.simula.no/kvasir-instrument/",
              "note": "590 · Simula · 器械分割",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "SUN Colonoscopy Database",
              "url": "https://github.com/ndbaek/SUN-database",
              "note": "视频帧 · GitHub/申请 · 息肉检测视频",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "LDPolypVideo",
              "url": "https://github.com/dashishi/LDPolypVideo-Benchmark",
              "note": "视频 · 论文/GitHub · 长视频息肉",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "PolypGen",
              "url": "https://www.synapse.org/#!Synapse:syn25999963",
              "note": "多中心 · Synergy / 论文 · 多中心泛化",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "EndoMapper",
              "url": "https://endomapper.github.io/",
              "note": "视频 · 官网 · 3D重建/定位",
              "license": "",
              "kind": "mixed"
            },
            {
              "name": "EndoCV / EAD 内镜伪影",
              "url": "https://endocv2021.grand-challenge.org/",
              "note": "挑战 · EndoCV · 伪影/器械",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "GIANA / polyp detection 历史",
              "url": "https://endovissub2017-giana.grand-challenge.org/",
              "note": "挑战 · EndoVis · 早期息肉挑战",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "NERTHUS / 肠道准备评分",
              "url": "https://datasets.simula.no/",
              "note": "视频帧 · Simula相关 · 准备质量",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "Kvasir-Instrument OSF",
              "url": "https://osf.io/kp6my",
              "note": "镜像下载",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Kvasir-Sessile",
              "url": "https://datasets.simula.no/downloads/kvasir-sessile.zip",
              "note": "扁平息肉子集",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "CVC-EndoSceneStill",
              "url": "http://pages.cvc.uab.es/CVC-Colon/index.php/databases/cvc-endoscenestill/",
              "note": "912 帧；场景分割",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "ASU-Mayo Clinic Colonoscopy",
              "url": "https://polyp.grand-challenge.org/AsuMayo/",
              "note": "经典视频集；常需申请",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "Github",
              "url": "https://github.com/CAMMA-public/TF-Cholec80",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Github",
              "url": "https://github.com/DebeshJha/2020-MediaEval-Medico-polyp-segmentation/tree/master",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Github",
              "url": "https://github.com/SURA23/Sinus-Surgery-Endoscopic-Image-Datasets?tab=readme-ov-file",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Github",
              "url": "https://github.com/CapsuleEndoscope/EndoSLAM",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Kaggle",
              "url": "https://www.kaggle.com/datasets/newslab/cholecseg8k",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Github",
              "url": "https://github.com/CAMMA-public/cholect45",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Github",
              "url": "https://github.com/tampapath/lung_colon_image_set",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Github",
              "url": "https://github.com/ai4colonoscopy/IntelliScope",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
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
          "local": "胃镜 · 农业yolo/胃镜",
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
            },
            {
              "name": "GastroVision",
              "url": "https://www.kaggle.com/datasets/debeshjha1/gastrovision",
              "note": "千级 · Kaggle/论文 · 多类病变",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "Cholec80",
              "url": "http://camma.u-strasbg.fr/datasets",
              "note": "80视频 · CAMMA · 手术阶段识别",
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
          "local": "食管 · 农业yolo/食管",
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
          "local": "胶囊内镜 · 农业yolo/胶囊内镜",
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
            },
            {
              "name": "WCE Curated Colon Disease",
              "url": "https://www.kaggle.com/datasets/francismon/curated-colon-dataset-for-deep-learning",
              "note": "千级 · Kaggle · 胶囊结肠",
              "license": "",
              "kind": "classification"
            }
          ],
          "todo": ""
        },
        {
          "id": "crc-microbiome",
          "name_zh": "二级：结直肠 · 粪便菌群（非影像）",
          "modality": "宏基因组",
          "task": "分类 / 风险评分",
          "status": "partial",
          "local": "crc-microbiome",
          "datasets": [
            {
              "name": "Wirbel 2019 Meta-analysis",
              "url": "https://doi.org/10.5281/zenodo.3517209",
              "note": "n=824/9队列 · Zenodo · CRC 风险评分核心 · 本地:crc-microbiome",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "Zeller 2014",
              "url": "https://www.ebi.ac.uk/ena/browser/view/ERP005534",
              "note": "百例 · ENA · 欧洲队列",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "Yachida 2019",
              "url": "https://www.nature.com/articles/s41591-019-0458-7",
              "note": "亚洲 · Nature Med · 分期相关",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "Gupta 2020 / Hannigan 2018",
              "url": "https://waldronlab.io/curatedMetagenomicData/",
              "note": "外测 · CMD · 独立外测 · 本地:crc-microbiome",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "HMP2 IBD Multi-omics",
              "url": "https://ibdmdb.org/",
              "note": "IBD纵向 · IBDMDB · IBD 纵向",
              "license": "",
              "kind": "mixed"
            },
            {
              "name": "MetaHIT",
              "url": "https://www.ebi.ac.uk/ena/browser/view/ERP002061",
              "note": "欧人 · ENA · 早期大队列",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "American Gut / Qiita",
              "url": "https://qiita.ucsd.edu/",
              "note": "万级 · Qiita · 人群队列",
              "license": "",
              "kind": "classification"
            }
          ],
          "todo": ""
        },
        {
          "id": "gi-radiomics",
          "name_zh": "二级：直肠 / 消化道 · 影像组学入口",
          "modality": "MRI / CT",
          "task": "组学 / 分类",
          "status": "partial",
          "local": "",
          "datasets": [
            {
              "name": "Rectal-cancer MRI radiomics (公开子集)",
              "url": "https://www.cancerimagingarchive.net/",
              "note": "百例级 · TCIA 检索 · 检索 rectal",
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
          "local": "liver-yolo · 农业yolo/肝",
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
            },
            {
              "name": "LiTS17",
              "url": "https://competitions.codalab.org/competitions/17095",
              "note": "201训练 · CodaLab · 肝/肿瘤分割 · 本地:liver-yolo",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "CHAOS",
              "url": "https://chaos.grand-challenge.org/",
              "note": "40例级 · Grand Challenge · 腹多器官",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "3D-IRCADb",
              "url": "https://www.ircad.fr/research/data-sets/liver-segmentation-3d-ircadb-01/",
              "note": "20例 · IRCAD · 肝血管肿瘤",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "SLIVER07",
              "url": "https://sliver07.grand-challenge.org/",
              "note": "20+10 · SLIVER · 肝轮廓",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "ATLAS Liver MRI",
              "url": "https://atlas-challenge.u-bourgogne.fr/",
              "note": "挑战 · Grand Challenge · 肝MRI病变",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Grand Challenge",
              "url": "https://chaos.grand-challenge.org/Combined_Healthy_Abdominal_Organ_Segmentation/",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "TCIA",
              "url": "https://www.cancerimagingarchive.net/collection/colorectal-liver-metastases/",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
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
          "local": "胰腺 · 农业yolo/胰腺",
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
          "local": "胆囊 · 农业yolo/胆囊",
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
            },
            {
              "name": "US-Nerve / 臂丛超声",
              "url": "https://www.kaggle.com/c/ultrasound-nerve-segmentation",
              "note": "挑战 · Kaggle · 神经超声",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "OpenKidney Ultrasound",
              "url": "https://zenodo.org/records/6592354",
              "note": "百级 · Zenodo · 肾超声",
              "license": "",
              "kind": "seg→box"
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
          "local": "腹部CT · 农业yolo/腹部CT",
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
            },
            {
              "name": "TotalSegmentator",
              "url": "https://github.com/wasserth/TotalSegmentator",
              "note": "千级 · GitHub · 全身器官",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "AbdomenCT-1K",
              "url": "https://github.com/JunMa11/AbdomenCT-1K",
              "note": "1112 · GitHub · 腹部分割",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "WORD / FLARE",
              "url": "https://flare.grand-challenge.org/",
              "note": "挑战系列 · Grand Challenge · 腹部分割挑战",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "PyRadiomics 示例队列",
              "url": "https://pyradiomics.readthedocs.io/",
              "note": "多 · 文档 · 特征工具",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "IU X-Ray",
              "url": "https://openi.nlm.nih.gov/faq#collection",
              "note": "7k · Open-i · 报告生成",
              "license": "",
              "kind": "mixed"
            },
            {
              "name": "Open-i",
              "url": "https://openi.nlm.nih.gov/",
              "note": "聚合 · NLM · 检索",
              "license": "",
              "kind": "mixed"
            },
            {
              "name": "HeiCo",
              "url": "https://www.synapse.org/#!Synapse:syn18824884",
              "note": "挑战 · EndoVis · 结直肠手术",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "ROBUST-MIS",
              "url": "https://www.synapse.org/#!Synapse:syn18780267",
              "note": "挑战 · EndoVis · 器械鲁棒",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "SurgicalActions160 / LapGyn4",
              "url": "https://ftp.itec.aau.at/datasets/",
              "note": "视频 · 文献 · 妇科腹腔镜",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "Papers With Code · Medical",
              "url": "https://paperswithcode.com/datasets?mod=medical",
              "note": "索引 · PWC · SOTA+数据",
              "license": "",
              "kind": "mixed"
            },
            {
              "name": "Hugging Face Datasets",
              "url": "https://huggingface.co/datasets",
              "note": "增长中 · HF · 注意许可",
              "license": "",
              "kind": "mixed"
            },
            {
              "name": "Kaggle Medical",
              "url": "https://www.kaggle.com/datasets?search=medical",
              "note": "海量 · Kaggle · 竞赛",
              "license": "",
              "kind": "mixed"
            },
            {
              "name": "Figshare / Dryad",
              "url": "https://figshare.com/",
              "note": "海量 · Figshare · 补充材料",
              "license": "",
              "kind": "mixed"
            },
            {
              "name": "GEO / SRA / ENA",
              "url": "https://www.ncbi.nlm.nih.gov/geo/",
              "note": "海量 · NCBI/EBI · 组学检索",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "GTEx",
              "url": "https://gtexportal.org/",
              "note": "万级 · GTEx · 正常组织",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "AlphaFold DB / PDB",
              "url": "https://alphafold.ebi.ac.uk/",
              "note": "亿/20万 · EBI/RCSB · 结构特征",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "Human Cell Atlas",
              "url": "https://data.humancellatlas.org/",
              "note": "海量 · HCA · 细胞图谱",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "gnomAD / ClinVar",
              "url": "https://gnomad.broadinstitute.org/",
              "note": "海量 · Broad/NCBI · 变异注释",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "Therapeutics Data Commons",
              "url": "https://tdcommons.ai/",
              "note": "多任务 · TDC · 药物基准",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "PubChem / DrugBank",
              "url": "https://pubchem.ncbi.nlm.nih.gov/",
              "note": "海量 · PubChem · 化合物",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "Totalsegmentator dataset v2",
              "url": "https://doi.org/10.5281/zenodo.10047292",
              "note": "1228 · Zenodo · 全身标签",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "CT-ORG",
              "url": "https://www.cancerimagingarchive.net/collection/ct-org/",
              "note": "140 · TCIA · 多器官",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "SAR-RARP / 机器人手术",
              "url": "https://surgtoolloc.grand-challenge.org/",
              "note": "挑战 · EndoVis · 器械定位",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "CholecSeg8k",
              "url": "https://www.synapse.org/#!Synapse:syn25101790",
              "note": "8080帧 · 官网 · 语义分割",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "OpenNeuro",
              "url": "https://openneuro.org/",
              "note": "海量 · OpenNeuro · BIDS脑影像",
              "license": "",
              "kind": "mixed"
            },
            {
              "name": "Imaging Data Commons (IDC)",
              "url": "https://imaging.datacommons.cancer.gov/",
              "note": "海量 · NCI IDC · 云上TCIA等",
              "license": "",
              "kind": "mixed"
            },
            {
              "name": "MedMNIST",
              "url": "https://medmnist.com/",
              "note": "70万+ · 官网 · 轻量基准教学",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "TorchXRayVision datasets 索引",
              "url": "https://github.com/mlmed/torchxrayvision",
              "note": "聚合 · GitHub · 胸片库索引",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "MONAI Bundles / Model Zoo 数据说明",
              "url": "https://monai.io/model-zoo.html",
              "note": "多 · MONAI · 预训练+数据指引",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "TotalSegmentator dataset",
              "url": "https://zenodo.org/records/10047292",
              "note": "Zenodo 发布",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "FLARE23",
              "url": "https://flare23.grand-challenge.org/",
              "note": "腹器官+泛癌分割",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "FLARE24",
              "url": "https://flare24.grand-challenge.org/",
              "note": "年更腹部分割挑战",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "AbdomenAtlas",
              "url": "https://github.com/MrGiovanni/AbdomenAtlas",
              "note": "大规模腹 CT 多结构",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "WORD",
              "url": "https://github.com/HiLab-git/WORD",
              "note": "腹部分割域泛化",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Grand Challenge",
              "url": "https://uls23.grand-challenge.org/",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Grand Challenge",
              "url": "https://flare22.grand-challenge.org/",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
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
          "local": "lung-yolo · 农业yolo/肺",
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
            },
            {
              "name": "MIMIC-III",
              "url": "https://physionet.org/content/mimiciii/",
              "note": "6万+ · PhysioNet · 经典",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "HiRID",
              "url": "https://physionet.org/content/hirid/",
              "note": "3万+ · PhysioNet · 高分辨生命体征",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "AmsterdamUMCdb",
              "url": "https://amsterdammedicaldatascience.nl/",
              "note": "申请 · 官网 · 欧洲ICU",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "PhysioNet waveform",
              "url": "https://physionet.org/",
              "note": "多套 · PhysioNet · 波形",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "MIMIC-IV-ED",
              "url": "https://physionet.org/content/mimic-iv-ed/",
              "note": "40万+ · PhysioNet · 急诊分流",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "SICdb / 其他欧洲ICU(申请)",
              "url": "https://www.sicdb.at/",
              "note": "申请 · 官网检索 · 奥地利ICU",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "UUSIC25 超声挑战",
              "url": "https://uusic2025.github.io/",
              "note": "多器官超声分类/分割汇总",
              "license": "",
              "kind": "mixed"
            },
            {
              "name": "UUSIC25 Zenodo",
              "url": "https://zenodo.org/records/15094669",
              "note": "公开超声 bundle",
              "license": "",
              "kind": "mixed"
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
          "local": "lung-yolo · 农业yolo/肺",
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
            },
            {
              "name": "LUNA16",
              "url": "https://luna16.grand-challenge.org/",
              "note": "888扫描 · Grand Challenge · 肺结节检测 · 本地:lung-yolo",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "JSRT 肺结节胸片",
              "url": "http://db.jsrt.or.jp/eng.php",
              "note": "247 · JSRT · 经典结节胸片",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "Grand Challenge",
              "url": "https://luna16.grand-challenge.org/Home/",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "TCIA",
              "url": "https://www.cancerimagingarchive.net/analysis-result/qin-lungct-seg/",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "TCIA",
              "url": "https://www.cancerimagingarchive.net/analysis-result/rider-lungct-seg/",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
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
          "local": "胸部 · 农业yolo/胸部",
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
            },
            {
              "name": "NSCLC-Radiomics",
              "url": "https://www.cancerimagingarchive.net/collection/nsclc-radiomics/",
              "note": "422例 · TCIA · 分割+临床",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "NSCLC-Radiomics-Genomics",
              "url": "https://www.cancerimagingarchive.net/collection/nsclc-radiomics-genomics/",
              "note": "多模态 · TCIA · 影像基因组",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "COVID-CT",
              "url": "https://github.com/UCSD-AI4H/COVID-CT",
              "note": "千级 · GitHub · 注意偏差",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "COVID-19 Radiography Database",
              "url": "https://www.kaggle.com/datasets/tawsifurrahman/covid19-radiography-database",
              "note": "万级 · Kaggle · 标签噪声",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "CheXpert",
              "url": "https://stanfordmlgroup.github.io/competitions/chexpert/",
              "note": "224k · Stanford · 不确定标签",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "MIMIC-CXR / CXR-JPG",
              "url": "https://physionet.org/content/mimic-cxr/",
              "note": "37万 · PhysioNet · 报告/VLM",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "PadChest",
              "url": "https://bimcv.cipf.es/bimcv-projects/padchest/",
              "note": "16万 · BIMCV · 西语报告",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "VinDr-CXR",
              "url": "https://physionet.org/content/vindr-cxr/",
              "note": "1.8万 · PhysioNet · 越南胸片",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "RSNA Pneumonia Detection",
              "url": "https://www.kaggle.com/c/rsna-pneumonia-detection-challenge",
              "note": "3万 · Kaggle/RSNA · 肺炎检测",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "RSNA Pulmonary Embolism CT",
              "url": "https://www.kaggle.com/c/rsna-str-pulmonary-embolism-detection",
              "note": "挑战 · Kaggle/RSNA · 肺栓塞",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "SIIM-ACR Pneumothorax",
              "url": "https://www.kaggle.com/c/siim-acr-pneumothorax-segmentation",
              "note": "挑战 · Kaggle · 气胸",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "ICBHI 2017 Respiratory Sound",
              "url": "https://bhichallenge.med.auth.gr/",
              "note": "~920 · 挑战官网 · 肺音分类",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "NLST (申请)",
              "url": "https://cdas.cancer.gov/nlst/",
              "note": "万级 · NCI · 需申请",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "HMP / MetaHIT",
              "url": "https://www.hmpdacc.org/",
              "note": "千级 · 官网/ENA · 人体微生物组",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "NCBI Virus / GISAID(申请)",
              "url": "https://www.ncbi.nlm.nih.gov/labs/virus/",
              "note": "海量 · NCBI · 病原基因组",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "SHCXR / VinBigData Chest",
              "url": "https://www.kaggle.com/c/vinbigdata-chest-xray-abnormalities-detection",
              "note": "1.8万 · Kaggle · 多异常框",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "COVID-19 CT Segmentation (意大利等)",
              "url": "http://medicalsegmentation.com/covid19/",
              "note": "百例 · MedicalSegmentation · 早期COVID分割",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "MosMedData COVID CT",
              "url": "https://mosmed.ai/datasets/covid19_1110/",
              "note": "千例 · 图库 · 俄COVID",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Kaggle",
              "url": "https://www.kaggle.com/datasets/raddar/tuberculosis-chest-xrays-shenzhen",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Kaggle",
              "url": "https://www.kaggle.com/datasets/vbookshelf/pneumothorax-chest-xray-images-and-masks/data",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Kaggle",
              "url": "https://www.kaggle.com/datasets/praveengovi/coronahack-chest-xraydataset/data",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Github",
              "url": "https://github.com/Holipori/Medical-CXR-VQA",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
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
          "local": "支气管镜 · 农业yolo/支气管镜",
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
            },
            {
              "name": "OTOLOGY / otoendoscopy 公开集",
              "url": "https://www.kaggle.com/datasets?search=otoscope",
              "note": "千级 · Kaggle/Zenodo · 检索 otoscope",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "Eardrum / OtoMatch",
              "url": "https://github.com/Auditory-Research/OtoMatch",
              "note": "百~千 · 论文GitHub · 鼓膜",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "Thyroid Ultrasound CINE / DDTI",
              "url": "https://www.kaggle.com/datasets/sabermalek/ddti-thyroid-ultrasound-images",
              "note": "百~千 · 论文/Kaggle · 甲状腺结节",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Project Homepage",
              "url": "https://figshare.com/articles/dataset/BM-BronchoLC/24243670",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
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
          "local": "heart · 农业yolo/心血管",
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
            },
            {
              "name": "ACDC",
              "url": "https://www.creatis.insa-lyon.fr/Challenge/acdc/",
              "note": "150例 · Creatis · 心室分割 · 本地:heart",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "MM-WHS",
              "url": "http://www.sdspeople.fudan.edu.cn/zhuangxiahai/0/mmwhs/",
              "note": "20+20 · 复旦存档 · 全心分割",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "M&Ms / M&Ms-2",
              "url": "https://www.ub.edu/mnms/",
              "note": "多中心 · Grand Challenge · 域泛化",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Cardiac MRI cine (UK Biobank 申请)",
              "url": "https://www.ukbiobank.ac.uk/",
              "note": "万级 · UKB · 需申请",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "DCA1 coronary",
              "url": "https://github.com/Maltaweel/Deep-Coronary-Artery-Segmentation",
              "note": "小样本 · 论文存档 · 冠脉分割",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "PTB-XL",
              "url": "https://physionet.org/content/ptb-xl/",
              "note": "21k · PhysioNet · 心电图分类",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "MIT-BIH Arrhythmia",
              "url": "https://physionet.org/content/mitdb/",
              "note": "48记录 · PhysioNet · 心律经典",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "Chapman-Shaoxing ECG",
              "url": "https://physionet.org/content/ecg-arrhythmia/",
              "note": "4.5万 · PhysioNet · 中国队列ECG",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "CPSC 2018 / 2020 ECG",
              "url": "https://physionet.org/content/challenge-2020/",
              "note": "挑战 · PhysioNet/挑战 · 心律挑战",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "CirCor DigiScope Heart Sound",
              "url": "https://physionet.org/content/circor-heart-sound/",
              "note": "千级 · PhysioNet · 儿科心音",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "PhysioNet CinC Challenge 系列",
              "url": "https://physionet.org/about/challenge/",
              "note": "逐年 · PhysioNet · 总入口",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "AortaSeg / 主动脉公开集",
              "url": "https://grand-challenge.org/",
              "note": "百例级 · Grand Challenge检索 · 搜 aorta",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Sunnybrook Cardiac MRI",
              "url": "http://www.cardiacatlas.org/studies/sunnybrook-cardiac-data/",
              "note": "45例 · Cardiac Atlas · 经典心磁",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "HVSMR 心脏血管",
              "url": "https://hvsmr2016.weebly.com/",
              "note": "挑战 · MICCAI · 先心病血管",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "MIT-BIH AF / NSRDB",
              "url": "https://physionet.org/about/database/",
              "note": "多库 · PhysioNet · 房颤等",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "CPSC2018 十二导联",
              "url": "http://2018.icbeb.org/Challenge.html",
              "note": "6877 · 挑战镜像 · 中国心电挑战",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "Github",
              "url": "https://github.com/XiaoweiXu/ImageCAS-A-Large-Scale-Dataset-and-Benchmark-for-Coronary-Artery-Segmentation-based-on-CT",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
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
          "local": "心脏超声 · 农业yolo/心脏超声",
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
            },
            {
              "name": "Github",
              "url": "https://github.com/xmed-lab/GraphEcho",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
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
          "local": "颈动脉 · 农业yolo/颈动脉",
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
          "local": "乳腺 · 农业yolo/乳腺",
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
            },
            {
              "name": "MIAS / mini-MIAS",
              "url": "https://www.repository.cam.ac.uk/handle/1810/250394",
              "note": "322 · 官网 · 经典小集",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "VinDr-Mammo",
              "url": "https://physionet.org/content/vindr-mammo/",
              "note": "2万 · PhysioNet · 越南钼靶",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "CSAW / CSAW-S",
              "url": "https://www.kaggle.com/datasets/orvile/csaw-m-mammography-dataset",
              "note": "瑞典 · 申请 · 筛查队列",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Duke Breast Cancer MRI",
              "url": "https://www.cancerimagingarchive.net/collection/duke-breast-cancer-mri/",
              "note": "922 · TCIA · 乳腺MRI",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "BreakHis",
              "url": "https://web.inf.ufpr.br/vri/databases/breast-cancer-histopathological-database-breakhis/",
              "note": "~9k · UFPR · 乳腺病理",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "BACH / ICIAR2018",
              "url": "https://iciar2018-challenge.grand-challenge.org/",
              "note": "400 · Grand Challenge · 乳腺病理分类",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "DDSM 原始",
              "url": "http://www.eng.usf.edu/cvprg/Mammography/Database.html",
              "note": "万级 · USF · CBIS上游",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "BCDR",
              "url": "https://bcdr.eu/",
              "note": "千级 · BCDR · 需注册",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "CMMD 中国乳腺钼靶",
              "url": "https://www.cancerimagingarchive.net/collection/cmmd/",
              "note": "1775 · TCIA · 中国队列",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "Kaggle",
              "url": "https://www.kaggle.com/datasets/kmader/mias-mammography",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
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
          "local": "乳腺超声 · 农业yolo/乳腺超声",
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
            },
            {
              "name": "BUSIS",
              "url": "https://doi.org/10.1016/j.dib.2019.104863",
              "note": "乳腺超声分割补充",
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
          "local": "甲状腺 · 农业yolo/甲状腺",
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
            },
            {
              "name": "Pima Indians Diabetes (UCI)",
              "url": "https://archive.ics.uci.edu/dataset/34/diabetes",
              "note": "768 · UCI · 教学级",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "NHANES",
              "url": "https://www.cdc.gov/nchs/nhanes/",
              "note": "万级 · CDC · 代谢综合征",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "Foot ulcer / DFUC",
              "url": "https://dfuc2020.grand-challenge.org/",
              "note": "挑战 · Grand Challenge · 糖尿病足",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "DFUC 2022",
              "url": "https://dfuc2022.grand-challenge.org/",
              "note": "挑战 · Grand Challenge · 糖尿病足续",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "CDC Diabetes Health Indicators",
              "url": "https://archive.ics.uci.edu/dataset/891/cdc+diabetes+health+indicators",
              "note": "25万 · UCI/Kaggle · 问卷风险",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "Grand Challenge",
              "url": "https://tn-scui2020.grand-challenge.org/Home/",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
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
          "local": "眼底 · 农业yolo/眼底",
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
            },
            {
              "name": "IOSTAR / RC-SLO",
              "url": "https://www.retinacheck.org/",
              "note": "小 · 官网检索 · 血管",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Messidor / Messidor-2",
              "url": "https://www.adcis.net/en/third-party/messidor/",
              "note": "千级 · ADCIS申请 · 糖网分级",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "EyePACS",
              "url": "https://www.kaggle.com/c/diabetic-retinopathy-detection",
              "note": "8万+ · Kaggle · 大规模糖网",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "IDRiD",
              "url": "https://ieee-dataport.org/open-access/indian-diabetic-retinopathy-image-dataset-idrid",
              "note": "516 · IEEE DataPort · 病灶分割",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "REFUGE / REFUGE2",
              "url": "https://refuge.grand-challenge.org/",
              "note": "挑战 · Grand Challenge · 青光眼",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "ORIGA / RIM-ONE",
              "url": "https://imed.nimte.ac.cn/origa-650.html",
              "note": "百~千 · 论文页 · 青光眼视盘",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "AGE Challenge",
              "url": "https://age.grand-challenge.org/",
              "note": "挑战 · Grand Challenge · 前节OCT",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "GAMMA",
              "url": "https://gamma.grand-challenge.org/",
              "note": "挑战 · Grand Challenge · 青光眼多模态",
              "license": "",
              "kind": "mixed"
            },
            {
              "name": "CATARACTS",
              "url": "https://cataracts.grand-challenge.org/",
              "note": "视频 · 官网 · 手术阶段",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "RFMiD",
              "url": "https://riadd.grand-challenge.org/",
              "note": "3200 · Grand Challenge · 多病种眼底",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "ARIA 眼底",
              "url": "https://www.damianjjfrazier.com/ARIA/",
              "note": "143 · 官网 · 血管+病变",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "DRIONS-DB 视盘",
              "url": "https://www.ia.uned.es/~ejimenez/research.html",
              "note": "110 · 官网 · 视盘轮廓",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Drishti-GS",
              "url": "http://cvit.iiit.ac.in/projects/mip/drishti-gs/mip-dataset2/Home.php",
              "note": "101 · 官网 · 青光眼",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "ODIR-5K",
              "url": "https://odir2019.grand-challenge.org/",
              "note": "5千 · Grand Challenge · 多病种眼底",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "PALM 病理性近视",
              "url": "https://palm.grand-challenge.org/",
              "note": "挑战 · ISBI · 病理性近视",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "ROSE OCTA 血管",
              "url": "https://rose.grand-challenge.org/",
              "note": "挑战 · 官网 · OCT血管",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "RFMiD Download",
              "url": "https://riadd.grand-challenge.org/Download/",
              "note": "下载页",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "Grand Challenge",
              "url": "https://idrid.grand-challenge.org/Home/",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Kaggle",
              "url": "https://www.kaggle.com/datasets/linchundan/fundusimage1000",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Kaggle",
              "url": "https://www.kaggle.com/datasets/obulisainaren/retinal-oct-c8",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Project Homepage",
              "url": "https://figshare.com/articles/figure/FIVES_A_Fundus_Image_Dataset_for_AI-based_Vessel_Segmentation/19688169/1",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Grand Challenge",
              "url": "https://riadd.grand-challenge.org/Home/",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Kaggle",
              "url": "https://www.kaggle.com/datasets/nafin59/ocular-toxoplasmosis-fundus-images-dataset",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Kaggle",
              "url": "https://www.kaggle.com/datasets/pkdarabi/diagnosis-of-diabetic-retinopathy?resource=download-directory",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
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
          "local": "fundus-vessel-yolo · 农业yolo/眼底",
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
            },
            {
              "name": "HRF",
              "url": "https://www5.cs.fau.de/research/data/fundus-images/",
              "note": "45 · FAU · 高分辨率",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Grand Challenge",
              "url": "https://vessel-wall-segmentation-2022.grand-challenge.org/",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Grand Challenge",
              "url": "https://vessel12.grand-challenge.org/",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Github",
              "url": "https://github.com/AbdullahSarhan/ICPRVessels",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Github",
              "url": "https://github.com/mirtanvirislam/Deep-Learning-Based-Glaucoma-Detection-with-Cropped-Optic-Cup-and-Disc-and-Blood-Vessel-Segmentation",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "detection"
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
          "local": "眼底OCT · 农业yolo/眼底OCT",
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
            },
            {
              "name": "OCT2017 (Kermany)",
              "url": "https://www.kaggle.com/datasets/paultimothymooney/kermany2018",
              "note": "OCT 四分类大规模",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "ADAM Challenge",
              "url": "https://adam.grand-challenge.org/",
              "note": "AMD 检测/分割",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "Grand Challenge",
              "url": "https://retouch.grand-challenge.org/Home/",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Github",
              "url": "https://github.com/aishangcengloua/OCT_Classification?tab=readme-ov-file",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "Project Homepage",
              "url": "https://ieee-dataport.org/open-access/octa-500",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
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
          "local": "skin · 农业yolo/皮肤",
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
            },
            {
              "name": "ISIC Challenge 历年",
              "url": "https://challenge.isic-archive.com/",
              "note": "年更 · Challenge · 官方挑战 · 本地:skin",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "PH2",
              "url": "https://www.fc.up.pt/addi/ph2%20database.html",
              "note": "200 · UPORTO · 精标小样本",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Derm7pt",
              "url": "https://derm.cs.sfu.ca/Welcome.html",
              "note": "1011 · 官网 · 7点清单",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "PAD-UFES-20",
              "url": "https://data.mendeley.com/datasets/zr7vgbcyr2/1",
              "note": "2298 · Mendeley · 智能手机皮损",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "Fitzpatrick17k",
              "url": "https://github.com/mattgroh/fitzpatrick17k",
              "note": "1.6万 · GitHub · 肤色公平性",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "DDI (Diverse Dermatology Images)",
              "url": "https://ddi-dataset.github.io/",
              "note": "656 · Stanford · 肤色多样性",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "MED-NODE",
              "url": "http://www.cs.rug.nl/~imaging/databases/melanoma_naevi/",
              "note": "170 · 官网 · 黑素瘤/痣",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "DermNetNZ 图库(许可注意)",
              "url": "https://dermnetnz.org/",
              "note": "海量 · DermNet · 教学图，商用受限",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "SD-198 / SD-260",
              "url": "https://web.fudan.edu.cn/",
              "note": "6k+ · 论文 · 检索 SD-198 skin",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "ISIC Challenge Data",
              "url": "https://challenge.isic-archive.com/data/",
              "note": "2016–2024 挑战数据总入口",
              "license": "",
              "kind": "mixed"
            },
            {
              "name": "ISIC 2019",
              "url": "https://challenge.isic-archive.com/landing/2019/",
              "note": "分类挑战",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "ISIC 2020",
              "url": "https://challenge.isic-archive.com/landing/2020/",
              "note": "黑色素瘤分类",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "Kaggle",
              "url": "https://www.kaggle.com/datasets/arafathussain/monkeypox-skin-image-dataset-2022",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Kaggle",
              "url": "https://www.kaggle.com/datasets/syedalinaqvi/augmented-skin-conditions-image-dataset",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Kaggle",
              "url": "https://www.kaggle.com/competitions/isic-2024-challenge",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
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
          "local": "脑 · 农业yolo/脑",
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
            },
            {
              "name": "BraTS (年更)",
              "url": "https://www.synapse.org/",
              "note": "千例/年 · Synapse · 胶质瘤分割",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "ISLES",
              "url": "https://www.isles-challenge.org/",
              "note": "百例 · 官网 · 卒中病灶",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "ATLAS Stroke",
              "url": "https://fcon_1000.projects.nitrc.org/indi/retro/atlas.html",
              "note": "千级 · 官网 · 慢性卒中",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "OASIS-1/2/3",
              "url": "https://www.oasis-brains.org/",
              "note": "数百~千 · OASIS · 老化认知",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "ADNI",
              "url": "https://adni.loni.usc.edu/",
              "note": "千例 · LONI申请 · 阿尔茨海默",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "IXI Brain",
              "url": "https://brain-development.org/ixi-dataset/",
              "note": "600 · IXI · 正常脑",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "HCP (Human Connectome)",
              "url": "https://www.humanconnectome.org/",
              "note": "千级 · ConnectomeDB · 需注册",
              "license": "",
              "kind": "mixed"
            },
            {
              "name": "FastMRI Knee/Brain",
              "url": "https://fastmri.med.nyu.edu/",
              "note": "千级 · NYU · 重建",
              "license": "",
              "kind": "mixed"
            },
            {
              "name": "MSSEG / ISBI MS lesion",
              "url": "https://portal.fli-iam.irisa.fr/msseg-2/",
              "note": "挑战 · Grand Challenge · 多发硬化",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "EEG Motor Imagery (PhysioNet)",
              "url": "https://physionet.org/content/eegmmidb/",
              "note": "多套 · PhysioNet · 运动想象",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "TUH EEG Corpus",
              "url": "https://isip.piconepress.com/projects/tuh_eeg/",
              "note": "万级小时 · Temple · 临床EEG",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "CHB-MIT Scalp EEG",
              "url": "https://physionet.org/content/chbmit/",
              "note": "儿科癫痫 · PhysioNet · 癫痫发作",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "Sleep-EDF / Sleep Heart Health",
              "url": "https://physionet.org/content/sleep-edfx/",
              "note": "多套 · PhysioNet · 睡眠分期",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "AutoPET / AutoPET II",
              "url": "https://autopet.grand-challenge.org/",
              "note": "挑战 · Grand Challenge · 全身病灶",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "HECKTOR",
              "url": "https://hecktor.grand-challenge.org/",
              "note": "挑战 · Grand Challenge · 头颈肿瘤",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Lung-PET-CT-Dx",
              "url": "https://www.cancerimagingarchive.net/collection/lung-pet-ct-dx/",
              "note": "百例 · TCIA · 肺诊断",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "ISBI MS Lesion Challenge",
              "url": "https://smart-stats-tools.org/lesion-challenge",
              "note": "挑战 · ISBI · MS病灶",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "WMH Segmentation Challenge",
              "url": "https://wmh.isi.uu.nl/",
              "note": "60+110 · WMH · 白质高信号",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "CrossMoDA",
              "url": "https://crossmoda.grand-challenge.org/",
              "note": "挑战 · Grand Challenge · 前庭神经鞘瘤",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "FeTA fetal brain",
              "url": "https://feta.grand-challenge.org/",
              "note": "挑战 · Grand Challenge · 胎儿脑",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "iSeg infant brain",
              "url": "https://iseg2019.web.unc.edu/",
              "note": "挑战 · iSeg · 婴儿脑分割",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "HECKTOR 2022",
              "url": "https://www.aicrowd.com/challenges/miccai-2022-hecktor",
              "note": "挑战 · Grand Challenge · 头颈",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Br35H HuggingFace",
              "url": "https://huggingface.co/datasets/dddraxxx/brain-tumour-br35h-dataset",
              "note": "YOLO 友好镜像",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "Grand Challenge",
              "url": "https://autopet-ii.grand-challenge.org/",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Grand Challenge",
              "url": "https://autopet-iii.grand-challenge.org/task/",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Kaggle",
              "url": "https://kaggle.com/competitions/ultrasound-nerve-segmentation",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "TCIA",
              "url": "https://www.cancerimagingarchive.net/analysis-result/brats-tcga-lgg/",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "TCIA",
              "url": "https://www.cancerimagingarchive.net/analysis-result/brats-tcga-gbm/",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Grand Challenge",
              "url": "https://atlas.grand-challenge.org/",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Grand Challenge",
              "url": "https://brainptm-2021.grand-challenge.org/",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Grand Challenge",
              "url": "https://isles22.grand-challenge.org/",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "CodaLab",
              "url": "https://codalab.lisn.upsaclay.fr/competitions/9804",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Codabench",
              "url": "https://www.codabench.org/competitions/2139/#/pages-tab",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "CodaLab",
              "url": "https://competitions.codalab.org/competitions/21145",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Kaggle",
              "url": "https://www.kaggle.com/competitions/siim-covid19-detection/data",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "CodaLab",
              "url": "https://codalab.lisn.upsaclay.fr/competitions/13238",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Kaggle",
              "url": "https://www.kaggle.com/competitions/uw-madison-gi-tract-image-segmentation/overview",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "CodaLab",
              "url": "https://codalab.lisn.upsaclay.fr/competitions/12239",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Codabench",
              "url": "https://www.codabench.org/competitions/2319",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Codabench",
              "url": "https://www.codabench.org/competitions/2296",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Codabench",
              "url": "https://www.codabench.org/competitions/2333/",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
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
          "local": "脑 · 农业yolo/脑",
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
            },
            {
              "name": "Kaggle",
              "url": "https://www.kaggle.com/datasets/felipekitamura/head-ct-hemorrhage",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Grand Challenge",
              "url": "https://instance.grand-challenge.org/",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "awesome-multimodal-in-medical-imaging",
              "url": "https://github.com/richard-peng-xia/awesome-multimodal-in-medical-imaging",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
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
          "local": "骨骼骨折 · 农业yolo/骨骼骨折",
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
            },
            {
              "name": "RSNA Bone Age",
              "url": "https://www.rsna.org/rsnai/ai-image-challenge/rsna-pediatric-bone-age-challenge-2017",
              "note": "~12k · RSNA · 骨龄",
              "license": "",
              "kind": "mixed"
            },
            {
              "name": "VerSe 2019/2020",
              "url": "https://verse2020.grand-challenge.org/",
              "note": "百例 · Grand Challenge · 椎体分割",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "FracAtlas",
              "url": "https://figshare.com/articles/dataset/The_dataset/22363012",
              "note": "4083 · Figshare · 骨折检测",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "RSNA Bone Age Soft Tissue 变体",
              "url": "https://www.kaggle.com/datasets/kmader/rsna-bone-age",
              "note": "12k · Kaggle镜像 · 骨龄常用镜像",
              "license": "",
              "kind": "mixed"
            },
            {
              "name": "Kaggle",
              "url": "https://www.kaggle.com/competitions/fractured-bone-detection-challenge/overview",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
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
          "local": "腕关节 · 农业yolo/腕关节",
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
            },
            {
              "name": "GRAZPEDWRI-DX",
              "url": "https://figshare.com/articles/dataset/GRAZPEDWRI-DX/14825193",
              "note": "两万+ · Figshare · 儿科骨折",
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
          "local": "脊柱 · 农业yolo/脊柱",
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
            },
            {
              "name": "SpineWeb / xVertSeg",
              "url": "http://spineweb.digitalimaginggroup.ca/",
              "note": "多套 · 官网 · 脊柱聚合",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "VinDr-SpineXR",
              "url": "https://physionet.org/content/vindr-spinexr/",
              "note": "万级 · PhysioNet · 脊柱异常",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "Github",
              "url": "https://github.com/MIRACLE-Center/CTSpine1K",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
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
          "local": "髋部 · 农业yolo/髋部",
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
          "local": "膝关节 · 农业yolo/膝关节",
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
            },
            {
              "name": "MOST / OAI X-ray KL grade 公开子集",
              "url": "https://www.kaggle.com/datasets/tommyngx/kneeoa",
              "note": "千级 · Kaggle镜像 · 膝OA分级",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "RA / hand X-ray 公开小集",
              "url": "https://www.kaggle.com/datasets?search=rheumatoid",
              "note": "百~千 · Kaggle检索 · 类风关",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "ImmPort",
              "url": "https://www.immport.org/",
              "note": "多试验 · ImmPort · 需注册",
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
          "local": "骨质疏松 · 农业yolo/骨质疏松",
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
          "local": "肾 · 农业yolo/肾",
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
          "local": "肾 · 农业yolo/肾",
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
            },
            {
              "name": "BTCV / Synapse multi-organ",
              "url": "https://www.synapse.org/#!Synapse:syn3193805",
              "note": "30+20 · Synapse · 腹多器官经典",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Chronic Kidney Disease (UCI)",
              "url": "https://archive.ics.uci.edu/dataset/336/chronic+kidney+disease",
              "note": "400 · UCI · 教学级",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "KiTS21",
              "url": "https://kits-challenge.org/",
              "note": "300 · 官网 · KiTS系列",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "TCIA",
              "url": "https://www.cancerimagingarchive.net/collection/adrenal-acc-ki67-seg/",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
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
          "local": "膀胱镜 · 农业yolo/膀胱镜",
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
          "local": "前列腺 · 农业yolo/前列腺",
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
            },
            {
              "name": "PANDA Prostate",
              "url": "https://www.kaggle.com/c/prostate-cancer-grade-assessment",
              "note": "~10k · Kaggle · 前列腺癌分级",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "Promise12",
              "url": "https://promise12.grand-challenge.org/",
              "note": "50+30 · Grand Challenge · 前列腺分割",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "PICAI",
              "url": "https://pi-cai.grand-challenge.org/",
              "note": "挑战 · Grand Challenge · 前列腺癌AI",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "Prostate158",
              "url": "https://zenodo.org/records/6481141",
              "note": "158 · Zenodo · 前列腺MRI",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "TCIA",
              "url": "https://www.cancerimagingarchive.net/collection/qin-prostate-repeatability/",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
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
          "local": "endometriosis-yolo · 农业yolo/子宫内膜异位",
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
            },
            {
              "name": "Endometrium ultrasound 公开小集",
              "url": "https://www.kaggle.com/datasets?search=endometrium",
              "note": "百级 · Kaggle检索 · 质量参差",
              "license": "",
              "kind": "classification"
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
          "local": "endometriosis-seg · 农业yolo/子宫内膜异位",
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
          "local": "宫颈 · 农业yolo/宫颈",
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
            },
            {
              "name": "Cervical cancer cytology / SIPaKMeD",
              "url": "https://www.cs.uoi.gr/~marina/sipakmed.html",
              "note": "4k+ · 官网 · 宫颈细胞",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "CRIC Cervix",
              "url": "https://zenodo.org/records/5546281",
              "note": "千级 · Zenodo · 宫颈细胞",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "Intel&MobileODT Cervical",
              "url": "https://www.kaggle.com/c/intel-mobileodt-cervical-cancer-screening",
              "note": "挑战 · Kaggle · 宫颈分型",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "Cervix93 / Herlev 细胞",
              "url": "https://mde-lab.aegean.gr/index.php/downloads/",
              "note": "917 · 论文经典 · 宫颈细胞经典",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "Kaggle",
              "url": "https://kaggle.com/competitions/intel-mobileodt-cervical-cancer-screening",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
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
          "local": "胎儿超声 · 农业yolo/胎儿超声",
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
            },
            {
              "name": "FH-PS-AOP fetal head",
              "url": "https://ps-rah.grand-challenge.org/",
              "note": "挑战 · Grand Challenge · 胎头/产道",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "USSIM&SEG / ACOUSLIC",
              "url": "https://acouslic-ai.grand-challenge.org/",
              "note": "挑战 · Grand Challenge · 胎儿腹部",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Pediatric Chest X-ray (广州妇女儿童等镜像)",
              "url": "https://www.kaggle.com/datasets/paultimothymooney/chest-xray-pneumonia",
              "note": "5k+ · Kaggle · 儿童肺炎",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "VinDr-PCXR 儿童胸片",
              "url": "https://physionet.org/content/vindr-pcxr/",
              "note": "9125 · PhysioNet · 儿童胸片",
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
          "local": "oral-yolo · 农业yolo/口腔",
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
            },
            {
              "name": "Oral Cancer / lesion photos",
              "url": "https://www.kaggle.com/datasets/shivam1729/oral-cancer-images",
              "note": "千级 · Kaggle · 口腔癌病损 · 本地:oral-yolo",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "Roboflow dental / oral sets",
              "url": "https://universe.roboflow.com/",
              "note": "千级 · Roboflow · 检索 dental · 本地:oral-yolo",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "Tufts Dental Database",
              "url": "https://www.kaggle.com/datasets/imtkaggleteam/dental-radiography",
              "note": "千级 · Kaggle镜像 · 牙科放射",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "Children's Dental Panoramic",
              "url": "https://github.com/ZhangData123/Children-s-Dental-Panoramic-Radiographs-Dataset",
              "note": "百~千 · IEEE/论文 · 儿童全景",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "CariesXray / 龋齿公开集",
              "url": "https://zenodo.org/",
              "note": "千级 · Zenodo/Kaggle检索 · 搜 dental caries",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "ToothFairy / Mandibular canal",
              "url": "https://toothfairy.grand-challenge.org/",
              "note": "挑战 · Grand Challenge · 下牙槽神经管",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "3DTeethSeg",
              "url": "https://teeth3ds.grand-challenge.org/",
              "note": "挑战 · Grand Challenge · 牙冠分割",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "UFBA-UESC Dental Images",
              "url": "https://github.com/IvisionLab/dental-image",
              "note": "1500 · GitHub · 牙检测",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "Mask R-CNN teeth datasets (聚合)",
              "url": "https://universe.roboflow.com/search?q=teeth",
              "note": "多 · Roboflow · 质量筛选 · 本地:oral-yolo",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "Github",
              "url": "https://github.com/DCBIA-OrthoLab/3DTeethSeg22_challenge",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Grand Challenge",
              "url": "https://toothfairy.grand-challenge.org/toothfairy/",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Kaggle",
              "url": "https://www.kaggle.com/datasets/henriquerezermosqur/dental-x-ray-computacional-vision-segmentation/data",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
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
          "local": "病理切片 · 农业yolo/病理切片",
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
            },
            {
              "name": "PAIP 2020",
              "url": "https://paip2020.grand-challenge.org/",
              "note": "挑战 · Grand Challenge · 肝病理也可对照",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "MoNuSeg / MoNuSAC",
              "url": "https://monuseg.grand-challenge.org/",
              "note": "数十~百 · Grand Challenge · 核分割",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Data Science Bowl 2018",
              "url": "https://www.kaggle.com/c/data-science-bowl-2018",
              "note": "~670 · Kaggle · 细胞核",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "CoNSeP / PanopTILs",
              "url": "https://warwick.ac.uk/fac/cross_fac/tia/data/",
              "note": "小~中 · Warwick TIA · 核/TIL",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "CPTAC Pathology",
              "url": "https://proteomic.datacommons.cancer.gov/",
              "note": "多癌 · PDC · 蛋白组对齐",
              "license": "",
              "kind": "mixed"
            },
            {
              "name": "MIDOG",
              "url": "https://midog.grand-challenge.org/",
              "note": "挑战 · Grand Challenge · 核分裂象",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "MIMIC-IV labevents",
              "url": "https://physionet.org/content/mimiciv/",
              "note": "数十万 · PhysioNet · ICU检验",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "eICU lab",
              "url": "https://physionet.org/content/eicu-crd/",
              "note": "20万+ · PhysioNet · 多中心",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "UCI ILPD / HCV 等小表",
              "url": "https://archive.ics.uci.edu/",
              "note": "百~千 · UCI · 教学级",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "16S / shotgun 公开粪便",
              "url": "https://www.ebi.ac.uk/ena/",
              "note": "多 · ENA/SRA · 与消化交叉",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "NuCLS",
              "url": "https://sites.google.com/view/nucls",
              "note": "22万核 · 官网 · 核分类",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "Lizard / CoNIC",
              "url": "https://conic-challenge.grand-challenge.org/",
              "note": "挑战 · Grand Challenge · 核实例",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "BCSS 乳腺癌语义分割",
              "url": "https://bcsegmentation.grand-challenge.org/",
              "note": "WSI区域 · Grand Challenge · 乳腺组织成分",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "GlaS 腺体分割",
              "url": "https://warwick.ac.uk/fac/cross_fac/tia/data/glascontest/",
              "note": "165 · Warwick · 腺体",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "PhysioNet Challenge 2019 Sepsis",
              "url": "https://physionet.org/content/challenge-2019/",
              "note": "4万+ · PhysioNet · 脓毒症早期",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "PhysioNet Challenge 2021 ECG+",
              "url": "https://physionet.org/content/challenge-2021/",
              "note": "挑战 · PhysioNet · 心电扩展导联",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "MoNuSAC",
              "url": "https://monusac-2020.grand-challenge.org/",
              "note": "核实例多类",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "Grand Challenge",
              "url": "https://monuseg.grand-challenge.org/Home/",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
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
            },
            {
              "name": "Project Homepage",
              "url": "https://patchcamelyon.grand-challenge.org/",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
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
          "local": "血细胞 · 农业yolo/血细胞",
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
            },
            {
              "name": "cBioPortal",
              "url": "https://www.cbioportal.org/",
              "note": "海量 · 官网 · 临床基因组",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "DepMap / CCLE",
              "url": "https://depmap.org/portal/",
              "note": "千级 · DepMap · 药敏",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "GDSC",
              "url": "https://www.cancerrxgene.org/",
              "note": "千级 · 官网 · 药物基因组",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "AML / ALL 骨髓涂片公开集",
              "url": "https://www.kaggle.com/datasets?search=leukemia",
              "note": "千级 · Kaggle/Zenodo · 检索 leukemia",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "C-NMC Leukemia",
              "url": "https://competitions.codalab.org/competitions/20395",
              "note": "1.5万 · Grand Challenge · 急性淋巴细胞",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "SEER",
              "url": "https://seer.cancer.gov/data/",
              "note": "百万 · 申请 · 人群登记",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "ALL-IDB 白血病",
              "url": "https://homes.di.unimi.it/scotti/all/",
              "note": "百~千 · 官网 · ALL检测",
              "license": "",
              "kind": "detection"
            },
            {
              "name": "Matek AML Cytomorphology",
              "url": "https://wiki.cancerimagingarchive.net/",
              "note": "1.8万 · The Cancer Imaging Archive相关/官网 · AML形态",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "Github",
              "url": "https://github.com/MahmudulAlam/Complete-Blood-Cell-Count-Dataset",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
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
          "local": "淋巴结 · 农业yolo/淋巴结",
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
            },
            {
              "name": "Kaggle",
              "url": "https://www.kaggle.com/datasets/andrewmvd/malignant-lymphoma-classification",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "classification"
            }
          ],
          "todo": ""
        },
        {
          "id": "pathology-crc",
          "name_zh": "二级：结直肠病理 · patch / WSI",
          "modality": "病理切片",
          "task": "分类 / 分割",
          "status": "partial",
          "local": "",
          "datasets": [
            {
              "name": "NCT-CRC-HE-100K",
              "url": "https://zenodo.org/records/1214456",
              "note": "10万 · Zenodo · CRC 组织分类",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "TCGA-COAD / READ",
              "url": "https://portal.gdc.cancer.gov/",
              "note": "百例 · GDC · 结直肠癌组学",
              "license": "",
              "kind": "classification"
            },
            {
              "name": "DigestPath 2019",
              "url": "https://digestpath2019.grand-challenge.org/",
              "note": "挑战 · Grand Challenge · 消化道病理",
              "license": "",
              "kind": "seg→box"
            },
            {
              "name": "Grand Challenge",
              "url": "https://digestpath2019.grand-challenge.org/Home/",
              "note": "Awesome-Medical-Dataset / 公开挑战入口",
              "license": "",
              "kind": "seg→box"
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
      "local": "colorectal-yolo · 农业yolo/结直肠",
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
        },
        {
          "name": "BKAI-IGH NeoPolyp",
          "url": "https://www.kaggle.com/c/bkai-igh-neopolyp",
          "note": "~1200 · Kaggle · 新息肉挑战",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Kvasir Instrument",
          "url": "https://datasets.simula.no/kvasir-instrument/",
          "note": "590 · Simula · 器械分割",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "SUN Colonoscopy Database",
          "url": "https://github.com/ndbaek/SUN-database",
          "note": "视频帧 · GitHub/申请 · 息肉检测视频",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "LDPolypVideo",
          "url": "https://github.com/dashishi/LDPolypVideo-Benchmark",
          "note": "视频 · 论文/GitHub · 长视频息肉",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "PolypGen",
          "url": "https://www.synapse.org/#!Synapse:syn25999963",
          "note": "多中心 · Synergy / 论文 · 多中心泛化",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "EndoMapper",
          "url": "https://endomapper.github.io/",
          "note": "视频 · 官网 · 3D重建/定位",
          "license": "",
          "kind": "mixed"
        },
        {
          "name": "EndoCV / EAD 内镜伪影",
          "url": "https://endocv2021.grand-challenge.org/",
          "note": "挑战 · EndoCV · 伪影/器械",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "GIANA / polyp detection 历史",
          "url": "https://endovissub2017-giana.grand-challenge.org/",
          "note": "挑战 · EndoVis · 早期息肉挑战",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "NERTHUS / 肠道准备评分",
          "url": "https://datasets.simula.no/",
          "note": "视频帧 · Simula相关 · 准备质量",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "Kvasir-Instrument OSF",
          "url": "https://osf.io/kp6my",
          "note": "镜像下载",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Kvasir-Sessile",
          "url": "https://datasets.simula.no/downloads/kvasir-sessile.zip",
          "note": "扁平息肉子集",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "CVC-EndoSceneStill",
          "url": "http://pages.cvc.uab.es/CVC-Colon/index.php/databases/cvc-endoscenestill/",
          "note": "912 帧；场景分割",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "ASU-Mayo Clinic Colonoscopy",
          "url": "https://polyp.grand-challenge.org/AsuMayo/",
          "note": "经典视频集；常需申请",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "Github",
          "url": "https://github.com/CAMMA-public/TF-Cholec80",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Github",
          "url": "https://github.com/DebeshJha/2020-MediaEval-Medico-polyp-segmentation/tree/master",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Github",
          "url": "https://github.com/SURA23/Sinus-Surgery-Endoscopic-Image-Datasets?tab=readme-ov-file",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Github",
          "url": "https://github.com/CapsuleEndoscope/EndoSLAM",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Kaggle",
          "url": "https://www.kaggle.com/datasets/newslab/cholecseg8k",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Github",
          "url": "https://github.com/CAMMA-public/cholect45",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Github",
          "url": "https://github.com/tampapath/lung_colon_image_set",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Github",
          "url": "https://github.com/ai4colonoscopy/IntelliScope",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
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
      "local": "胃镜 · 农业yolo/胃镜",
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
        },
        {
          "name": "GastroVision",
          "url": "https://www.kaggle.com/datasets/debeshjha1/gastrovision",
          "note": "千级 · Kaggle/论文 · 多类病变",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "Cholec80",
          "url": "http://camma.u-strasbg.fr/datasets",
          "note": "80视频 · CAMMA · 手术阶段识别",
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
      "local": "食管 · 农业yolo/食管",
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
      "local": "胶囊内镜 · 农业yolo/胶囊内镜",
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
        },
        {
          "name": "WCE Curated Colon Disease",
          "url": "https://www.kaggle.com/datasets/francismon/curated-colon-dataset-for-deep-learning",
          "note": "千级 · Kaggle · 胶囊结肠",
          "license": "",
          "kind": "classification"
        }
      ],
      "todo": "",
      "department_id": "gi",
      "department_zh": "消化内科 / 消化内镜科"
    },
    {
      "id": "crc-microbiome",
      "name_zh": "二级：结直肠 · 粪便菌群（非影像）",
      "modality": "宏基因组",
      "task": "分类 / 风险评分",
      "status": "partial",
      "local": "crc-microbiome",
      "datasets": [
        {
          "name": "Wirbel 2019 Meta-analysis",
          "url": "https://doi.org/10.5281/zenodo.3517209",
          "note": "n=824/9队列 · Zenodo · CRC 风险评分核心 · 本地:crc-microbiome",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "Zeller 2014",
          "url": "https://www.ebi.ac.uk/ena/browser/view/ERP005534",
          "note": "百例 · ENA · 欧洲队列",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "Yachida 2019",
          "url": "https://www.nature.com/articles/s41591-019-0458-7",
          "note": "亚洲 · Nature Med · 分期相关",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "Gupta 2020 / Hannigan 2018",
          "url": "https://waldronlab.io/curatedMetagenomicData/",
          "note": "外测 · CMD · 独立外测 · 本地:crc-microbiome",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "HMP2 IBD Multi-omics",
          "url": "https://ibdmdb.org/",
          "note": "IBD纵向 · IBDMDB · IBD 纵向",
          "license": "",
          "kind": "mixed"
        },
        {
          "name": "MetaHIT",
          "url": "https://www.ebi.ac.uk/ena/browser/view/ERP002061",
          "note": "欧人 · ENA · 早期大队列",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "American Gut / Qiita",
          "url": "https://qiita.ucsd.edu/",
          "note": "万级 · Qiita · 人群队列",
          "license": "",
          "kind": "classification"
        }
      ],
      "todo": "",
      "department_id": "gi",
      "department_zh": "消化内科 / 消化内镜科"
    },
    {
      "id": "gi-radiomics",
      "name_zh": "二级：直肠 / 消化道 · 影像组学入口",
      "modality": "MRI / CT",
      "task": "组学 / 分类",
      "status": "partial",
      "local": "",
      "datasets": [
        {
          "name": "Rectal-cancer MRI radiomics (公开子集)",
          "url": "https://www.cancerimagingarchive.net/",
          "note": "百例级 · TCIA 检索 · 检索 rectal",
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
      "local": "liver-yolo · 农业yolo/肝",
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
        },
        {
          "name": "LiTS17",
          "url": "https://competitions.codalab.org/competitions/17095",
          "note": "201训练 · CodaLab · 肝/肿瘤分割 · 本地:liver-yolo",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "CHAOS",
          "url": "https://chaos.grand-challenge.org/",
          "note": "40例级 · Grand Challenge · 腹多器官",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "3D-IRCADb",
          "url": "https://www.ircad.fr/research/data-sets/liver-segmentation-3d-ircadb-01/",
          "note": "20例 · IRCAD · 肝血管肿瘤",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "SLIVER07",
          "url": "https://sliver07.grand-challenge.org/",
          "note": "20+10 · SLIVER · 肝轮廓",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "ATLAS Liver MRI",
          "url": "https://atlas-challenge.u-bourgogne.fr/",
          "note": "挑战 · Grand Challenge · 肝MRI病变",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Grand Challenge",
          "url": "https://chaos.grand-challenge.org/Combined_Healthy_Abdominal_Organ_Segmentation/",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "TCIA",
          "url": "https://www.cancerimagingarchive.net/collection/colorectal-liver-metastases/",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
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
      "local": "胰腺 · 农业yolo/胰腺",
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
      "local": "胆囊 · 农业yolo/胆囊",
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
        },
        {
          "name": "US-Nerve / 臂丛超声",
          "url": "https://www.kaggle.com/c/ultrasound-nerve-segmentation",
          "note": "挑战 · Kaggle · 神经超声",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "OpenKidney Ultrasound",
          "url": "https://zenodo.org/records/6592354",
          "note": "百级 · Zenodo · 肾超声",
          "license": "",
          "kind": "seg→box"
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
      "local": "腹部CT · 农业yolo/腹部CT",
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
        },
        {
          "name": "TotalSegmentator",
          "url": "https://github.com/wasserth/TotalSegmentator",
          "note": "千级 · GitHub · 全身器官",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "AbdomenCT-1K",
          "url": "https://github.com/JunMa11/AbdomenCT-1K",
          "note": "1112 · GitHub · 腹部分割",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "WORD / FLARE",
          "url": "https://flare.grand-challenge.org/",
          "note": "挑战系列 · Grand Challenge · 腹部分割挑战",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "PyRadiomics 示例队列",
          "url": "https://pyradiomics.readthedocs.io/",
          "note": "多 · 文档 · 特征工具",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "IU X-Ray",
          "url": "https://openi.nlm.nih.gov/faq#collection",
          "note": "7k · Open-i · 报告生成",
          "license": "",
          "kind": "mixed"
        },
        {
          "name": "Open-i",
          "url": "https://openi.nlm.nih.gov/",
          "note": "聚合 · NLM · 检索",
          "license": "",
          "kind": "mixed"
        },
        {
          "name": "HeiCo",
          "url": "https://www.synapse.org/#!Synapse:syn18824884",
          "note": "挑战 · EndoVis · 结直肠手术",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "ROBUST-MIS",
          "url": "https://www.synapse.org/#!Synapse:syn18780267",
          "note": "挑战 · EndoVis · 器械鲁棒",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "SurgicalActions160 / LapGyn4",
          "url": "https://ftp.itec.aau.at/datasets/",
          "note": "视频 · 文献 · 妇科腹腔镜",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "Papers With Code · Medical",
          "url": "https://paperswithcode.com/datasets?mod=medical",
          "note": "索引 · PWC · SOTA+数据",
          "license": "",
          "kind": "mixed"
        },
        {
          "name": "Hugging Face Datasets",
          "url": "https://huggingface.co/datasets",
          "note": "增长中 · HF · 注意许可",
          "license": "",
          "kind": "mixed"
        },
        {
          "name": "Kaggle Medical",
          "url": "https://www.kaggle.com/datasets?search=medical",
          "note": "海量 · Kaggle · 竞赛",
          "license": "",
          "kind": "mixed"
        },
        {
          "name": "Figshare / Dryad",
          "url": "https://figshare.com/",
          "note": "海量 · Figshare · 补充材料",
          "license": "",
          "kind": "mixed"
        },
        {
          "name": "GEO / SRA / ENA",
          "url": "https://www.ncbi.nlm.nih.gov/geo/",
          "note": "海量 · NCBI/EBI · 组学检索",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "GTEx",
          "url": "https://gtexportal.org/",
          "note": "万级 · GTEx · 正常组织",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "AlphaFold DB / PDB",
          "url": "https://alphafold.ebi.ac.uk/",
          "note": "亿/20万 · EBI/RCSB · 结构特征",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "Human Cell Atlas",
          "url": "https://data.humancellatlas.org/",
          "note": "海量 · HCA · 细胞图谱",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "gnomAD / ClinVar",
          "url": "https://gnomad.broadinstitute.org/",
          "note": "海量 · Broad/NCBI · 变异注释",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "Therapeutics Data Commons",
          "url": "https://tdcommons.ai/",
          "note": "多任务 · TDC · 药物基准",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "PubChem / DrugBank",
          "url": "https://pubchem.ncbi.nlm.nih.gov/",
          "note": "海量 · PubChem · 化合物",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "Totalsegmentator dataset v2",
          "url": "https://doi.org/10.5281/zenodo.10047292",
          "note": "1228 · Zenodo · 全身标签",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "CT-ORG",
          "url": "https://www.cancerimagingarchive.net/collection/ct-org/",
          "note": "140 · TCIA · 多器官",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "SAR-RARP / 机器人手术",
          "url": "https://surgtoolloc.grand-challenge.org/",
          "note": "挑战 · EndoVis · 器械定位",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "CholecSeg8k",
          "url": "https://www.synapse.org/#!Synapse:syn25101790",
          "note": "8080帧 · 官网 · 语义分割",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "OpenNeuro",
          "url": "https://openneuro.org/",
          "note": "海量 · OpenNeuro · BIDS脑影像",
          "license": "",
          "kind": "mixed"
        },
        {
          "name": "Imaging Data Commons (IDC)",
          "url": "https://imaging.datacommons.cancer.gov/",
          "note": "海量 · NCI IDC · 云上TCIA等",
          "license": "",
          "kind": "mixed"
        },
        {
          "name": "MedMNIST",
          "url": "https://medmnist.com/",
          "note": "70万+ · 官网 · 轻量基准教学",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "TorchXRayVision datasets 索引",
          "url": "https://github.com/mlmed/torchxrayvision",
          "note": "聚合 · GitHub · 胸片库索引",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "MONAI Bundles / Model Zoo 数据说明",
          "url": "https://monai.io/model-zoo.html",
          "note": "多 · MONAI · 预训练+数据指引",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "TotalSegmentator dataset",
          "url": "https://zenodo.org/records/10047292",
          "note": "Zenodo 发布",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "FLARE23",
          "url": "https://flare23.grand-challenge.org/",
          "note": "腹器官+泛癌分割",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "FLARE24",
          "url": "https://flare24.grand-challenge.org/",
          "note": "年更腹部分割挑战",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "AbdomenAtlas",
          "url": "https://github.com/MrGiovanni/AbdomenAtlas",
          "note": "大规模腹 CT 多结构",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "WORD",
          "url": "https://github.com/HiLab-git/WORD",
          "note": "腹部分割域泛化",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Grand Challenge",
          "url": "https://uls23.grand-challenge.org/",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Grand Challenge",
          "url": "https://flare22.grand-challenge.org/",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
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
      "local": "lung-yolo · 农业yolo/肺",
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
        },
        {
          "name": "MIMIC-III",
          "url": "https://physionet.org/content/mimiciii/",
          "note": "6万+ · PhysioNet · 经典",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "HiRID",
          "url": "https://physionet.org/content/hirid/",
          "note": "3万+ · PhysioNet · 高分辨生命体征",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "AmsterdamUMCdb",
          "url": "https://amsterdammedicaldatascience.nl/",
          "note": "申请 · 官网 · 欧洲ICU",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "PhysioNet waveform",
          "url": "https://physionet.org/",
          "note": "多套 · PhysioNet · 波形",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "MIMIC-IV-ED",
          "url": "https://physionet.org/content/mimic-iv-ed/",
          "note": "40万+ · PhysioNet · 急诊分流",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "SICdb / 其他欧洲ICU(申请)",
          "url": "https://www.sicdb.at/",
          "note": "申请 · 官网检索 · 奥地利ICU",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "UUSIC25 超声挑战",
          "url": "https://uusic2025.github.io/",
          "note": "多器官超声分类/分割汇总",
          "license": "",
          "kind": "mixed"
        },
        {
          "name": "UUSIC25 Zenodo",
          "url": "https://zenodo.org/records/15094669",
          "note": "公开超声 bundle",
          "license": "",
          "kind": "mixed"
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
      "local": "lung-yolo · 农业yolo/肺",
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
        },
        {
          "name": "LUNA16",
          "url": "https://luna16.grand-challenge.org/",
          "note": "888扫描 · Grand Challenge · 肺结节检测 · 本地:lung-yolo",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "JSRT 肺结节胸片",
          "url": "http://db.jsrt.or.jp/eng.php",
          "note": "247 · JSRT · 经典结节胸片",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "Grand Challenge",
          "url": "https://luna16.grand-challenge.org/Home/",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "TCIA",
          "url": "https://www.cancerimagingarchive.net/analysis-result/qin-lungct-seg/",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "TCIA",
          "url": "https://www.cancerimagingarchive.net/analysis-result/rider-lungct-seg/",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
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
      "local": "胸部 · 农业yolo/胸部",
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
        },
        {
          "name": "NSCLC-Radiomics",
          "url": "https://www.cancerimagingarchive.net/collection/nsclc-radiomics/",
          "note": "422例 · TCIA · 分割+临床",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "NSCLC-Radiomics-Genomics",
          "url": "https://www.cancerimagingarchive.net/collection/nsclc-radiomics-genomics/",
          "note": "多模态 · TCIA · 影像基因组",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "COVID-CT",
          "url": "https://github.com/UCSD-AI4H/COVID-CT",
          "note": "千级 · GitHub · 注意偏差",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "COVID-19 Radiography Database",
          "url": "https://www.kaggle.com/datasets/tawsifurrahman/covid19-radiography-database",
          "note": "万级 · Kaggle · 标签噪声",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "CheXpert",
          "url": "https://stanfordmlgroup.github.io/competitions/chexpert/",
          "note": "224k · Stanford · 不确定标签",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "MIMIC-CXR / CXR-JPG",
          "url": "https://physionet.org/content/mimic-cxr/",
          "note": "37万 · PhysioNet · 报告/VLM",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "PadChest",
          "url": "https://bimcv.cipf.es/bimcv-projects/padchest/",
          "note": "16万 · BIMCV · 西语报告",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "VinDr-CXR",
          "url": "https://physionet.org/content/vindr-cxr/",
          "note": "1.8万 · PhysioNet · 越南胸片",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "RSNA Pneumonia Detection",
          "url": "https://www.kaggle.com/c/rsna-pneumonia-detection-challenge",
          "note": "3万 · Kaggle/RSNA · 肺炎检测",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "RSNA Pulmonary Embolism CT",
          "url": "https://www.kaggle.com/c/rsna-str-pulmonary-embolism-detection",
          "note": "挑战 · Kaggle/RSNA · 肺栓塞",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "SIIM-ACR Pneumothorax",
          "url": "https://www.kaggle.com/c/siim-acr-pneumothorax-segmentation",
          "note": "挑战 · Kaggle · 气胸",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "ICBHI 2017 Respiratory Sound",
          "url": "https://bhichallenge.med.auth.gr/",
          "note": "~920 · 挑战官网 · 肺音分类",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "NLST (申请)",
          "url": "https://cdas.cancer.gov/nlst/",
          "note": "万级 · NCI · 需申请",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "HMP / MetaHIT",
          "url": "https://www.hmpdacc.org/",
          "note": "千级 · 官网/ENA · 人体微生物组",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "NCBI Virus / GISAID(申请)",
          "url": "https://www.ncbi.nlm.nih.gov/labs/virus/",
          "note": "海量 · NCBI · 病原基因组",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "SHCXR / VinBigData Chest",
          "url": "https://www.kaggle.com/c/vinbigdata-chest-xray-abnormalities-detection",
          "note": "1.8万 · Kaggle · 多异常框",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "COVID-19 CT Segmentation (意大利等)",
          "url": "http://medicalsegmentation.com/covid19/",
          "note": "百例 · MedicalSegmentation · 早期COVID分割",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "MosMedData COVID CT",
          "url": "https://mosmed.ai/datasets/covid19_1110/",
          "note": "千例 · 图库 · 俄COVID",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Kaggle",
          "url": "https://www.kaggle.com/datasets/raddar/tuberculosis-chest-xrays-shenzhen",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Kaggle",
          "url": "https://www.kaggle.com/datasets/vbookshelf/pneumothorax-chest-xray-images-and-masks/data",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Kaggle",
          "url": "https://www.kaggle.com/datasets/praveengovi/coronahack-chest-xraydataset/data",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Github",
          "url": "https://github.com/Holipori/Medical-CXR-VQA",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
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
      "local": "支气管镜 · 农业yolo/支气管镜",
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
        },
        {
          "name": "OTOLOGY / otoendoscopy 公开集",
          "url": "https://www.kaggle.com/datasets?search=otoscope",
          "note": "千级 · Kaggle/Zenodo · 检索 otoscope",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "Eardrum / OtoMatch",
          "url": "https://github.com/Auditory-Research/OtoMatch",
          "note": "百~千 · 论文GitHub · 鼓膜",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "Thyroid Ultrasound CINE / DDTI",
          "url": "https://www.kaggle.com/datasets/sabermalek/ddti-thyroid-ultrasound-images",
          "note": "百~千 · 论文/Kaggle · 甲状腺结节",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Project Homepage",
          "url": "https://figshare.com/articles/dataset/BM-BronchoLC/24243670",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
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
      "local": "heart · 农业yolo/心血管",
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
        },
        {
          "name": "ACDC",
          "url": "https://www.creatis.insa-lyon.fr/Challenge/acdc/",
          "note": "150例 · Creatis · 心室分割 · 本地:heart",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "MM-WHS",
          "url": "http://www.sdspeople.fudan.edu.cn/zhuangxiahai/0/mmwhs/",
          "note": "20+20 · 复旦存档 · 全心分割",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "M&Ms / M&Ms-2",
          "url": "https://www.ub.edu/mnms/",
          "note": "多中心 · Grand Challenge · 域泛化",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Cardiac MRI cine (UK Biobank 申请)",
          "url": "https://www.ukbiobank.ac.uk/",
          "note": "万级 · UKB · 需申请",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "DCA1 coronary",
          "url": "https://github.com/Maltaweel/Deep-Coronary-Artery-Segmentation",
          "note": "小样本 · 论文存档 · 冠脉分割",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "PTB-XL",
          "url": "https://physionet.org/content/ptb-xl/",
          "note": "21k · PhysioNet · 心电图分类",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "MIT-BIH Arrhythmia",
          "url": "https://physionet.org/content/mitdb/",
          "note": "48记录 · PhysioNet · 心律经典",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "Chapman-Shaoxing ECG",
          "url": "https://physionet.org/content/ecg-arrhythmia/",
          "note": "4.5万 · PhysioNet · 中国队列ECG",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "CPSC 2018 / 2020 ECG",
          "url": "https://physionet.org/content/challenge-2020/",
          "note": "挑战 · PhysioNet/挑战 · 心律挑战",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "CirCor DigiScope Heart Sound",
          "url": "https://physionet.org/content/circor-heart-sound/",
          "note": "千级 · PhysioNet · 儿科心音",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "PhysioNet CinC Challenge 系列",
          "url": "https://physionet.org/about/challenge/",
          "note": "逐年 · PhysioNet · 总入口",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "AortaSeg / 主动脉公开集",
          "url": "https://grand-challenge.org/",
          "note": "百例级 · Grand Challenge检索 · 搜 aorta",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Sunnybrook Cardiac MRI",
          "url": "http://www.cardiacatlas.org/studies/sunnybrook-cardiac-data/",
          "note": "45例 · Cardiac Atlas · 经典心磁",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "HVSMR 心脏血管",
          "url": "https://hvsmr2016.weebly.com/",
          "note": "挑战 · MICCAI · 先心病血管",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "MIT-BIH AF / NSRDB",
          "url": "https://physionet.org/about/database/",
          "note": "多库 · PhysioNet · 房颤等",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "CPSC2018 十二导联",
          "url": "http://2018.icbeb.org/Challenge.html",
          "note": "6877 · 挑战镜像 · 中国心电挑战",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "Github",
          "url": "https://github.com/XiaoweiXu/ImageCAS-A-Large-Scale-Dataset-and-Benchmark-for-Coronary-Artery-Segmentation-based-on-CT",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
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
      "local": "心脏超声 · 农业yolo/心脏超声",
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
        },
        {
          "name": "Github",
          "url": "https://github.com/xmed-lab/GraphEcho",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
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
      "local": "颈动脉 · 农业yolo/颈动脉",
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
      "local": "乳腺 · 农业yolo/乳腺",
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
        },
        {
          "name": "MIAS / mini-MIAS",
          "url": "https://www.repository.cam.ac.uk/handle/1810/250394",
          "note": "322 · 官网 · 经典小集",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "VinDr-Mammo",
          "url": "https://physionet.org/content/vindr-mammo/",
          "note": "2万 · PhysioNet · 越南钼靶",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "CSAW / CSAW-S",
          "url": "https://www.kaggle.com/datasets/orvile/csaw-m-mammography-dataset",
          "note": "瑞典 · 申请 · 筛查队列",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Duke Breast Cancer MRI",
          "url": "https://www.cancerimagingarchive.net/collection/duke-breast-cancer-mri/",
          "note": "922 · TCIA · 乳腺MRI",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "BreakHis",
          "url": "https://web.inf.ufpr.br/vri/databases/breast-cancer-histopathological-database-breakhis/",
          "note": "~9k · UFPR · 乳腺病理",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "BACH / ICIAR2018",
          "url": "https://iciar2018-challenge.grand-challenge.org/",
          "note": "400 · Grand Challenge · 乳腺病理分类",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "DDSM 原始",
          "url": "http://www.eng.usf.edu/cvprg/Mammography/Database.html",
          "note": "万级 · USF · CBIS上游",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "BCDR",
          "url": "https://bcdr.eu/",
          "note": "千级 · BCDR · 需注册",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "CMMD 中国乳腺钼靶",
          "url": "https://www.cancerimagingarchive.net/collection/cmmd/",
          "note": "1775 · TCIA · 中国队列",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "Kaggle",
          "url": "https://www.kaggle.com/datasets/kmader/mias-mammography",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
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
      "local": "乳腺超声 · 农业yolo/乳腺超声",
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
        },
        {
          "name": "BUSIS",
          "url": "https://doi.org/10.1016/j.dib.2019.104863",
          "note": "乳腺超声分割补充",
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
      "local": "甲状腺 · 农业yolo/甲状腺",
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
        },
        {
          "name": "Pima Indians Diabetes (UCI)",
          "url": "https://archive.ics.uci.edu/dataset/34/diabetes",
          "note": "768 · UCI · 教学级",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "NHANES",
          "url": "https://www.cdc.gov/nchs/nhanes/",
          "note": "万级 · CDC · 代谢综合征",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "Foot ulcer / DFUC",
          "url": "https://dfuc2020.grand-challenge.org/",
          "note": "挑战 · Grand Challenge · 糖尿病足",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "DFUC 2022",
          "url": "https://dfuc2022.grand-challenge.org/",
          "note": "挑战 · Grand Challenge · 糖尿病足续",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "CDC Diabetes Health Indicators",
          "url": "https://archive.ics.uci.edu/dataset/891/cdc+diabetes+health+indicators",
          "note": "25万 · UCI/Kaggle · 问卷风险",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "Grand Challenge",
          "url": "https://tn-scui2020.grand-challenge.org/Home/",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
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
      "local": "眼底 · 农业yolo/眼底",
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
        },
        {
          "name": "IOSTAR / RC-SLO",
          "url": "https://www.retinacheck.org/",
          "note": "小 · 官网检索 · 血管",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Messidor / Messidor-2",
          "url": "https://www.adcis.net/en/third-party/messidor/",
          "note": "千级 · ADCIS申请 · 糖网分级",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "EyePACS",
          "url": "https://www.kaggle.com/c/diabetic-retinopathy-detection",
          "note": "8万+ · Kaggle · 大规模糖网",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "IDRiD",
          "url": "https://ieee-dataport.org/open-access/indian-diabetic-retinopathy-image-dataset-idrid",
          "note": "516 · IEEE DataPort · 病灶分割",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "REFUGE / REFUGE2",
          "url": "https://refuge.grand-challenge.org/",
          "note": "挑战 · Grand Challenge · 青光眼",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "ORIGA / RIM-ONE",
          "url": "https://imed.nimte.ac.cn/origa-650.html",
          "note": "百~千 · 论文页 · 青光眼视盘",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "AGE Challenge",
          "url": "https://age.grand-challenge.org/",
          "note": "挑战 · Grand Challenge · 前节OCT",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "GAMMA",
          "url": "https://gamma.grand-challenge.org/",
          "note": "挑战 · Grand Challenge · 青光眼多模态",
          "license": "",
          "kind": "mixed"
        },
        {
          "name": "CATARACTS",
          "url": "https://cataracts.grand-challenge.org/",
          "note": "视频 · 官网 · 手术阶段",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "RFMiD",
          "url": "https://riadd.grand-challenge.org/",
          "note": "3200 · Grand Challenge · 多病种眼底",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "ARIA 眼底",
          "url": "https://www.damianjjfrazier.com/ARIA/",
          "note": "143 · 官网 · 血管+病变",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "DRIONS-DB 视盘",
          "url": "https://www.ia.uned.es/~ejimenez/research.html",
          "note": "110 · 官网 · 视盘轮廓",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Drishti-GS",
          "url": "http://cvit.iiit.ac.in/projects/mip/drishti-gs/mip-dataset2/Home.php",
          "note": "101 · 官网 · 青光眼",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "ODIR-5K",
          "url": "https://odir2019.grand-challenge.org/",
          "note": "5千 · Grand Challenge · 多病种眼底",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "PALM 病理性近视",
          "url": "https://palm.grand-challenge.org/",
          "note": "挑战 · ISBI · 病理性近视",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "ROSE OCTA 血管",
          "url": "https://rose.grand-challenge.org/",
          "note": "挑战 · 官网 · OCT血管",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "RFMiD Download",
          "url": "https://riadd.grand-challenge.org/Download/",
          "note": "下载页",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "Grand Challenge",
          "url": "https://idrid.grand-challenge.org/Home/",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Kaggle",
          "url": "https://www.kaggle.com/datasets/linchundan/fundusimage1000",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Kaggle",
          "url": "https://www.kaggle.com/datasets/obulisainaren/retinal-oct-c8",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Project Homepage",
          "url": "https://figshare.com/articles/figure/FIVES_A_Fundus_Image_Dataset_for_AI-based_Vessel_Segmentation/19688169/1",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Grand Challenge",
          "url": "https://riadd.grand-challenge.org/Home/",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Kaggle",
          "url": "https://www.kaggle.com/datasets/nafin59/ocular-toxoplasmosis-fundus-images-dataset",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Kaggle",
          "url": "https://www.kaggle.com/datasets/pkdarabi/diagnosis-of-diabetic-retinopathy?resource=download-directory",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
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
      "local": "fundus-vessel-yolo · 农业yolo/眼底",
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
        },
        {
          "name": "HRF",
          "url": "https://www5.cs.fau.de/research/data/fundus-images/",
          "note": "45 · FAU · 高分辨率",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Grand Challenge",
          "url": "https://vessel-wall-segmentation-2022.grand-challenge.org/",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Grand Challenge",
          "url": "https://vessel12.grand-challenge.org/",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Github",
          "url": "https://github.com/AbdullahSarhan/ICPRVessels",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Github",
          "url": "https://github.com/mirtanvirislam/Deep-Learning-Based-Glaucoma-Detection-with-Cropped-Optic-Cup-and-Disc-and-Blood-Vessel-Segmentation",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "detection"
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
      "local": "眼底OCT · 农业yolo/眼底OCT",
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
        },
        {
          "name": "OCT2017 (Kermany)",
          "url": "https://www.kaggle.com/datasets/paultimothymooney/kermany2018",
          "note": "OCT 四分类大规模",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "ADAM Challenge",
          "url": "https://adam.grand-challenge.org/",
          "note": "AMD 检测/分割",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "Grand Challenge",
          "url": "https://retouch.grand-challenge.org/Home/",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Github",
          "url": "https://github.com/aishangcengloua/OCT_Classification?tab=readme-ov-file",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "Project Homepage",
          "url": "https://ieee-dataport.org/open-access/octa-500",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
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
      "local": "skin · 农业yolo/皮肤",
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
        },
        {
          "name": "ISIC Challenge 历年",
          "url": "https://challenge.isic-archive.com/",
          "note": "年更 · Challenge · 官方挑战 · 本地:skin",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "PH2",
          "url": "https://www.fc.up.pt/addi/ph2%20database.html",
          "note": "200 · UPORTO · 精标小样本",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Derm7pt",
          "url": "https://derm.cs.sfu.ca/Welcome.html",
          "note": "1011 · 官网 · 7点清单",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "PAD-UFES-20",
          "url": "https://data.mendeley.com/datasets/zr7vgbcyr2/1",
          "note": "2298 · Mendeley · 智能手机皮损",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "Fitzpatrick17k",
          "url": "https://github.com/mattgroh/fitzpatrick17k",
          "note": "1.6万 · GitHub · 肤色公平性",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "DDI (Diverse Dermatology Images)",
          "url": "https://ddi-dataset.github.io/",
          "note": "656 · Stanford · 肤色多样性",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "MED-NODE",
          "url": "http://www.cs.rug.nl/~imaging/databases/melanoma_naevi/",
          "note": "170 · 官网 · 黑素瘤/痣",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "DermNetNZ 图库(许可注意)",
          "url": "https://dermnetnz.org/",
          "note": "海量 · DermNet · 教学图，商用受限",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "SD-198 / SD-260",
          "url": "https://web.fudan.edu.cn/",
          "note": "6k+ · 论文 · 检索 SD-198 skin",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "ISIC Challenge Data",
          "url": "https://challenge.isic-archive.com/data/",
          "note": "2016–2024 挑战数据总入口",
          "license": "",
          "kind": "mixed"
        },
        {
          "name": "ISIC 2019",
          "url": "https://challenge.isic-archive.com/landing/2019/",
          "note": "分类挑战",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "ISIC 2020",
          "url": "https://challenge.isic-archive.com/landing/2020/",
          "note": "黑色素瘤分类",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "Kaggle",
          "url": "https://www.kaggle.com/datasets/arafathussain/monkeypox-skin-image-dataset-2022",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Kaggle",
          "url": "https://www.kaggle.com/datasets/syedalinaqvi/augmented-skin-conditions-image-dataset",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Kaggle",
          "url": "https://www.kaggle.com/competitions/isic-2024-challenge",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
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
      "local": "脑 · 农业yolo/脑",
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
        },
        {
          "name": "BraTS (年更)",
          "url": "https://www.synapse.org/",
          "note": "千例/年 · Synapse · 胶质瘤分割",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "ISLES",
          "url": "https://www.isles-challenge.org/",
          "note": "百例 · 官网 · 卒中病灶",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "ATLAS Stroke",
          "url": "https://fcon_1000.projects.nitrc.org/indi/retro/atlas.html",
          "note": "千级 · 官网 · 慢性卒中",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "OASIS-1/2/3",
          "url": "https://www.oasis-brains.org/",
          "note": "数百~千 · OASIS · 老化认知",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "ADNI",
          "url": "https://adni.loni.usc.edu/",
          "note": "千例 · LONI申请 · 阿尔茨海默",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "IXI Brain",
          "url": "https://brain-development.org/ixi-dataset/",
          "note": "600 · IXI · 正常脑",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "HCP (Human Connectome)",
          "url": "https://www.humanconnectome.org/",
          "note": "千级 · ConnectomeDB · 需注册",
          "license": "",
          "kind": "mixed"
        },
        {
          "name": "FastMRI Knee/Brain",
          "url": "https://fastmri.med.nyu.edu/",
          "note": "千级 · NYU · 重建",
          "license": "",
          "kind": "mixed"
        },
        {
          "name": "MSSEG / ISBI MS lesion",
          "url": "https://portal.fli-iam.irisa.fr/msseg-2/",
          "note": "挑战 · Grand Challenge · 多发硬化",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "EEG Motor Imagery (PhysioNet)",
          "url": "https://physionet.org/content/eegmmidb/",
          "note": "多套 · PhysioNet · 运动想象",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "TUH EEG Corpus",
          "url": "https://isip.piconepress.com/projects/tuh_eeg/",
          "note": "万级小时 · Temple · 临床EEG",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "CHB-MIT Scalp EEG",
          "url": "https://physionet.org/content/chbmit/",
          "note": "儿科癫痫 · PhysioNet · 癫痫发作",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "Sleep-EDF / Sleep Heart Health",
          "url": "https://physionet.org/content/sleep-edfx/",
          "note": "多套 · PhysioNet · 睡眠分期",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "AutoPET / AutoPET II",
          "url": "https://autopet.grand-challenge.org/",
          "note": "挑战 · Grand Challenge · 全身病灶",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "HECKTOR",
          "url": "https://hecktor.grand-challenge.org/",
          "note": "挑战 · Grand Challenge · 头颈肿瘤",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Lung-PET-CT-Dx",
          "url": "https://www.cancerimagingarchive.net/collection/lung-pet-ct-dx/",
          "note": "百例 · TCIA · 肺诊断",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "ISBI MS Lesion Challenge",
          "url": "https://smart-stats-tools.org/lesion-challenge",
          "note": "挑战 · ISBI · MS病灶",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "WMH Segmentation Challenge",
          "url": "https://wmh.isi.uu.nl/",
          "note": "60+110 · WMH · 白质高信号",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "CrossMoDA",
          "url": "https://crossmoda.grand-challenge.org/",
          "note": "挑战 · Grand Challenge · 前庭神经鞘瘤",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "FeTA fetal brain",
          "url": "https://feta.grand-challenge.org/",
          "note": "挑战 · Grand Challenge · 胎儿脑",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "iSeg infant brain",
          "url": "https://iseg2019.web.unc.edu/",
          "note": "挑战 · iSeg · 婴儿脑分割",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "HECKTOR 2022",
          "url": "https://www.aicrowd.com/challenges/miccai-2022-hecktor",
          "note": "挑战 · Grand Challenge · 头颈",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Br35H HuggingFace",
          "url": "https://huggingface.co/datasets/dddraxxx/brain-tumour-br35h-dataset",
          "note": "YOLO 友好镜像",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "Grand Challenge",
          "url": "https://autopet-ii.grand-challenge.org/",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Grand Challenge",
          "url": "https://autopet-iii.grand-challenge.org/task/",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Kaggle",
          "url": "https://kaggle.com/competitions/ultrasound-nerve-segmentation",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "TCIA",
          "url": "https://www.cancerimagingarchive.net/analysis-result/brats-tcga-lgg/",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "TCIA",
          "url": "https://www.cancerimagingarchive.net/analysis-result/brats-tcga-gbm/",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Grand Challenge",
          "url": "https://atlas.grand-challenge.org/",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Grand Challenge",
          "url": "https://brainptm-2021.grand-challenge.org/",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Grand Challenge",
          "url": "https://isles22.grand-challenge.org/",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "CodaLab",
          "url": "https://codalab.lisn.upsaclay.fr/competitions/9804",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Codabench",
          "url": "https://www.codabench.org/competitions/2139/#/pages-tab",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "CodaLab",
          "url": "https://competitions.codalab.org/competitions/21145",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Kaggle",
          "url": "https://www.kaggle.com/competitions/siim-covid19-detection/data",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "CodaLab",
          "url": "https://codalab.lisn.upsaclay.fr/competitions/13238",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Kaggle",
          "url": "https://www.kaggle.com/competitions/uw-madison-gi-tract-image-segmentation/overview",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "CodaLab",
          "url": "https://codalab.lisn.upsaclay.fr/competitions/12239",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Codabench",
          "url": "https://www.codabench.org/competitions/2319",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Codabench",
          "url": "https://www.codabench.org/competitions/2296",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Codabench",
          "url": "https://www.codabench.org/competitions/2333/",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
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
      "local": "脑 · 农业yolo/脑",
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
        },
        {
          "name": "Kaggle",
          "url": "https://www.kaggle.com/datasets/felipekitamura/head-ct-hemorrhage",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Grand Challenge",
          "url": "https://instance.grand-challenge.org/",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "awesome-multimodal-in-medical-imaging",
          "url": "https://github.com/richard-peng-xia/awesome-multimodal-in-medical-imaging",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
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
      "local": "骨骼骨折 · 农业yolo/骨骼骨折",
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
        },
        {
          "name": "RSNA Bone Age",
          "url": "https://www.rsna.org/rsnai/ai-image-challenge/rsna-pediatric-bone-age-challenge-2017",
          "note": "~12k · RSNA · 骨龄",
          "license": "",
          "kind": "mixed"
        },
        {
          "name": "VerSe 2019/2020",
          "url": "https://verse2020.grand-challenge.org/",
          "note": "百例 · Grand Challenge · 椎体分割",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "FracAtlas",
          "url": "https://figshare.com/articles/dataset/The_dataset/22363012",
          "note": "4083 · Figshare · 骨折检测",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "RSNA Bone Age Soft Tissue 变体",
          "url": "https://www.kaggle.com/datasets/kmader/rsna-bone-age",
          "note": "12k · Kaggle镜像 · 骨龄常用镜像",
          "license": "",
          "kind": "mixed"
        },
        {
          "name": "Kaggle",
          "url": "https://www.kaggle.com/competitions/fractured-bone-detection-challenge/overview",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
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
      "local": "腕关节 · 农业yolo/腕关节",
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
        },
        {
          "name": "GRAZPEDWRI-DX",
          "url": "https://figshare.com/articles/dataset/GRAZPEDWRI-DX/14825193",
          "note": "两万+ · Figshare · 儿科骨折",
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
      "local": "脊柱 · 农业yolo/脊柱",
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
        },
        {
          "name": "SpineWeb / xVertSeg",
          "url": "http://spineweb.digitalimaginggroup.ca/",
          "note": "多套 · 官网 · 脊柱聚合",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "VinDr-SpineXR",
          "url": "https://physionet.org/content/vindr-spinexr/",
          "note": "万级 · PhysioNet · 脊柱异常",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "Github",
          "url": "https://github.com/MIRACLE-Center/CTSpine1K",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
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
      "local": "髋部 · 农业yolo/髋部",
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
      "local": "膝关节 · 农业yolo/膝关节",
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
        },
        {
          "name": "MOST / OAI X-ray KL grade 公开子集",
          "url": "https://www.kaggle.com/datasets/tommyngx/kneeoa",
          "note": "千级 · Kaggle镜像 · 膝OA分级",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "RA / hand X-ray 公开小集",
          "url": "https://www.kaggle.com/datasets?search=rheumatoid",
          "note": "百~千 · Kaggle检索 · 类风关",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "ImmPort",
          "url": "https://www.immport.org/",
          "note": "多试验 · ImmPort · 需注册",
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
      "local": "骨质疏松 · 农业yolo/骨质疏松",
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
      "local": "肾 · 农业yolo/肾",
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
      "local": "肾 · 农业yolo/肾",
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
        },
        {
          "name": "BTCV / Synapse multi-organ",
          "url": "https://www.synapse.org/#!Synapse:syn3193805",
          "note": "30+20 · Synapse · 腹多器官经典",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Chronic Kidney Disease (UCI)",
          "url": "https://archive.ics.uci.edu/dataset/336/chronic+kidney+disease",
          "note": "400 · UCI · 教学级",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "KiTS21",
          "url": "https://kits-challenge.org/",
          "note": "300 · 官网 · KiTS系列",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "TCIA",
          "url": "https://www.cancerimagingarchive.net/collection/adrenal-acc-ki67-seg/",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
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
      "local": "膀胱镜 · 农业yolo/膀胱镜",
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
      "local": "前列腺 · 农业yolo/前列腺",
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
        },
        {
          "name": "PANDA Prostate",
          "url": "https://www.kaggle.com/c/prostate-cancer-grade-assessment",
          "note": "~10k · Kaggle · 前列腺癌分级",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "Promise12",
          "url": "https://promise12.grand-challenge.org/",
          "note": "50+30 · Grand Challenge · 前列腺分割",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "PICAI",
          "url": "https://pi-cai.grand-challenge.org/",
          "note": "挑战 · Grand Challenge · 前列腺癌AI",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "Prostate158",
          "url": "https://zenodo.org/records/6481141",
          "note": "158 · Zenodo · 前列腺MRI",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "TCIA",
          "url": "https://www.cancerimagingarchive.net/collection/qin-prostate-repeatability/",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
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
      "local": "endometriosis-yolo · 农业yolo/子宫内膜异位",
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
        },
        {
          "name": "Endometrium ultrasound 公开小集",
          "url": "https://www.kaggle.com/datasets?search=endometrium",
          "note": "百级 · Kaggle检索 · 质量参差",
          "license": "",
          "kind": "classification"
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
      "local": "endometriosis-seg · 农业yolo/子宫内膜异位",
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
      "local": "宫颈 · 农业yolo/宫颈",
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
        },
        {
          "name": "Cervical cancer cytology / SIPaKMeD",
          "url": "https://www.cs.uoi.gr/~marina/sipakmed.html",
          "note": "4k+ · 官网 · 宫颈细胞",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "CRIC Cervix",
          "url": "https://zenodo.org/records/5546281",
          "note": "千级 · Zenodo · 宫颈细胞",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "Intel&MobileODT Cervical",
          "url": "https://www.kaggle.com/c/intel-mobileodt-cervical-cancer-screening",
          "note": "挑战 · Kaggle · 宫颈分型",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "Cervix93 / Herlev 细胞",
          "url": "https://mde-lab.aegean.gr/index.php/downloads/",
          "note": "917 · 论文经典 · 宫颈细胞经典",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "Kaggle",
          "url": "https://kaggle.com/competitions/intel-mobileodt-cervical-cancer-screening",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
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
      "local": "胎儿超声 · 农业yolo/胎儿超声",
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
        },
        {
          "name": "FH-PS-AOP fetal head",
          "url": "https://ps-rah.grand-challenge.org/",
          "note": "挑战 · Grand Challenge · 胎头/产道",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "USSIM&SEG / ACOUSLIC",
          "url": "https://acouslic-ai.grand-challenge.org/",
          "note": "挑战 · Grand Challenge · 胎儿腹部",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Pediatric Chest X-ray (广州妇女儿童等镜像)",
          "url": "https://www.kaggle.com/datasets/paultimothymooney/chest-xray-pneumonia",
          "note": "5k+ · Kaggle · 儿童肺炎",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "VinDr-PCXR 儿童胸片",
          "url": "https://physionet.org/content/vindr-pcxr/",
          "note": "9125 · PhysioNet · 儿童胸片",
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
      "local": "oral-yolo · 农业yolo/口腔",
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
        },
        {
          "name": "Oral Cancer / lesion photos",
          "url": "https://www.kaggle.com/datasets/shivam1729/oral-cancer-images",
          "note": "千级 · Kaggle · 口腔癌病损 · 本地:oral-yolo",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "Roboflow dental / oral sets",
          "url": "https://universe.roboflow.com/",
          "note": "千级 · Roboflow · 检索 dental · 本地:oral-yolo",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "Tufts Dental Database",
          "url": "https://www.kaggle.com/datasets/imtkaggleteam/dental-radiography",
          "note": "千级 · Kaggle镜像 · 牙科放射",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "Children's Dental Panoramic",
          "url": "https://github.com/ZhangData123/Children-s-Dental-Panoramic-Radiographs-Dataset",
          "note": "百~千 · IEEE/论文 · 儿童全景",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "CariesXray / 龋齿公开集",
          "url": "https://zenodo.org/",
          "note": "千级 · Zenodo/Kaggle检索 · 搜 dental caries",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "ToothFairy / Mandibular canal",
          "url": "https://toothfairy.grand-challenge.org/",
          "note": "挑战 · Grand Challenge · 下牙槽神经管",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "3DTeethSeg",
          "url": "https://teeth3ds.grand-challenge.org/",
          "note": "挑战 · Grand Challenge · 牙冠分割",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "UFBA-UESC Dental Images",
          "url": "https://github.com/IvisionLab/dental-image",
          "note": "1500 · GitHub · 牙检测",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "Mask R-CNN teeth datasets (聚合)",
          "url": "https://universe.roboflow.com/search?q=teeth",
          "note": "多 · Roboflow · 质量筛选 · 本地:oral-yolo",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "Github",
          "url": "https://github.com/DCBIA-OrthoLab/3DTeethSeg22_challenge",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Grand Challenge",
          "url": "https://toothfairy.grand-challenge.org/toothfairy/",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Kaggle",
          "url": "https://www.kaggle.com/datasets/henriquerezermosqur/dental-x-ray-computacional-vision-segmentation/data",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
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
      "local": "病理切片 · 农业yolo/病理切片",
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
        },
        {
          "name": "PAIP 2020",
          "url": "https://paip2020.grand-challenge.org/",
          "note": "挑战 · Grand Challenge · 肝病理也可对照",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "MoNuSeg / MoNuSAC",
          "url": "https://monuseg.grand-challenge.org/",
          "note": "数十~百 · Grand Challenge · 核分割",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Data Science Bowl 2018",
          "url": "https://www.kaggle.com/c/data-science-bowl-2018",
          "note": "~670 · Kaggle · 细胞核",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "CoNSeP / PanopTILs",
          "url": "https://warwick.ac.uk/fac/cross_fac/tia/data/",
          "note": "小~中 · Warwick TIA · 核/TIL",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "CPTAC Pathology",
          "url": "https://proteomic.datacommons.cancer.gov/",
          "note": "多癌 · PDC · 蛋白组对齐",
          "license": "",
          "kind": "mixed"
        },
        {
          "name": "MIDOG",
          "url": "https://midog.grand-challenge.org/",
          "note": "挑战 · Grand Challenge · 核分裂象",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "MIMIC-IV labevents",
          "url": "https://physionet.org/content/mimiciv/",
          "note": "数十万 · PhysioNet · ICU检验",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "eICU lab",
          "url": "https://physionet.org/content/eicu-crd/",
          "note": "20万+ · PhysioNet · 多中心",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "UCI ILPD / HCV 等小表",
          "url": "https://archive.ics.uci.edu/",
          "note": "百~千 · UCI · 教学级",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "16S / shotgun 公开粪便",
          "url": "https://www.ebi.ac.uk/ena/",
          "note": "多 · ENA/SRA · 与消化交叉",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "NuCLS",
          "url": "https://sites.google.com/view/nucls",
          "note": "22万核 · 官网 · 核分类",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "Lizard / CoNIC",
          "url": "https://conic-challenge.grand-challenge.org/",
          "note": "挑战 · Grand Challenge · 核实例",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "BCSS 乳腺癌语义分割",
          "url": "https://bcsegmentation.grand-challenge.org/",
          "note": "WSI区域 · Grand Challenge · 乳腺组织成分",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "GlaS 腺体分割",
          "url": "https://warwick.ac.uk/fac/cross_fac/tia/data/glascontest/",
          "note": "165 · Warwick · 腺体",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "PhysioNet Challenge 2019 Sepsis",
          "url": "https://physionet.org/content/challenge-2019/",
          "note": "4万+ · PhysioNet · 脓毒症早期",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "PhysioNet Challenge 2021 ECG+",
          "url": "https://physionet.org/content/challenge-2021/",
          "note": "挑战 · PhysioNet · 心电扩展导联",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "MoNuSAC",
          "url": "https://monusac-2020.grand-challenge.org/",
          "note": "核实例多类",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "Grand Challenge",
          "url": "https://monuseg.grand-challenge.org/Home/",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
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
        },
        {
          "name": "Project Homepage",
          "url": "https://patchcamelyon.grand-challenge.org/",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
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
      "local": "血细胞 · 农业yolo/血细胞",
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
        },
        {
          "name": "cBioPortal",
          "url": "https://www.cbioportal.org/",
          "note": "海量 · 官网 · 临床基因组",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "DepMap / CCLE",
          "url": "https://depmap.org/portal/",
          "note": "千级 · DepMap · 药敏",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "GDSC",
          "url": "https://www.cancerrxgene.org/",
          "note": "千级 · 官网 · 药物基因组",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "AML / ALL 骨髓涂片公开集",
          "url": "https://www.kaggle.com/datasets?search=leukemia",
          "note": "千级 · Kaggle/Zenodo · 检索 leukemia",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "C-NMC Leukemia",
          "url": "https://competitions.codalab.org/competitions/20395",
          "note": "1.5万 · Grand Challenge · 急性淋巴细胞",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "SEER",
          "url": "https://seer.cancer.gov/data/",
          "note": "百万 · 申请 · 人群登记",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "ALL-IDB 白血病",
          "url": "https://homes.di.unimi.it/scotti/all/",
          "note": "百~千 · 官网 · ALL检测",
          "license": "",
          "kind": "detection"
        },
        {
          "name": "Matek AML Cytomorphology",
          "url": "https://wiki.cancerimagingarchive.net/",
          "note": "1.8万 · The Cancer Imaging Archive相关/官网 · AML形态",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "Github",
          "url": "https://github.com/MahmudulAlam/Complete-Blood-Cell-Count-Dataset",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
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
      "local": "淋巴结 · 农业yolo/淋巴结",
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
        },
        {
          "name": "Kaggle",
          "url": "https://www.kaggle.com/datasets/andrewmvd/malignant-lymphoma-classification",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "classification"
        }
      ],
      "todo": "",
      "department_id": "pathology-lab",
      "department_zh": "病理科 / 检验显微"
    },
    {
      "id": "pathology-crc",
      "name_zh": "二级：结直肠病理 · patch / WSI",
      "modality": "病理切片",
      "task": "分类 / 分割",
      "status": "partial",
      "local": "",
      "datasets": [
        {
          "name": "NCT-CRC-HE-100K",
          "url": "https://zenodo.org/records/1214456",
          "note": "10万 · Zenodo · CRC 组织分类",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "TCGA-COAD / READ",
          "url": "https://portal.gdc.cancer.gov/",
          "note": "百例 · GDC · 结直肠癌组学",
          "license": "",
          "kind": "classification"
        },
        {
          "name": "DigestPath 2019",
          "url": "https://digestpath2019.grand-challenge.org/",
          "note": "挑战 · Grand Challenge · 消化道病理",
          "license": "",
          "kind": "seg→box"
        },
        {
          "name": "Grand Challenge",
          "url": "https://digestpath2019.grand-challenge.org/Home/",
          "note": "Awesome-Medical-Dataset / 公开挑战入口",
          "license": "",
          "kind": "seg→box"
        }
      ],
      "todo": "",
      "department_id": "pathology-lab",
      "department_zh": "病理科 / 检验显微"
    }
  ]
};
