/** 农业公开数据集目录 — 作物/类型 → 二级任务 → 数据集。 */
window.AGRI_DATASETS = {
  "meta": {
    "updated": "2026-08-11",
    "note": "农业公开数据集；本地路径不收录；成稿推荐=featured",
    "tiers": {
      "featured": 32
    }
  },
  "departments": [
    {
      "id": "通用-叶片病害基准",
      "name_zh": "通用·叶片病害基准",
      "blurb": "10 条公开入口",
      "children": [
        {
          "id": "通用-叶片病害基准-classification",
          "name_zh": "二级：分类 / 病害识别",
          "modality": "叶片 / 果实",
          "task": "分类",
          "status": "ready",
          "local": "",
          "datasets": [
            {
              "name": "PlantVillage",
              "url": "https://github.com/spMohanty/PlantVillage-Dataset",
              "note": "5.4万+ · GitHub/Kaggle镜像 · 经典病害分类（实验室背景）",
              "license": "",
              "kind": "classification",
              "tier": "featured"
            },
            {
              "name": "PlantVillage + PlantDoc 组合评测",
              "url": "https://github.com/pratikkayal/PlantDoc-Dataset",
              "note": "— · 文献常用 · 域偏移故事",
              "license": "",
              "kind": "classification",
              "tier": "featured"
            },
            {
              "name": "IP102 害虫",
              "url": "https://github.com/xpwu95/IP102",
              "note": "7.5万/102类 · 官网 · 害虫细粒度分类",
              "license": "",
              "kind": "classification",
              "tier": "featured"
            },
            {
              "name": "CCD / CGIAR 作物病害镜像",
              "url": "https://www.kaggle.com/datasets?search=plant+disease",
              "note": "多 · Kaggle · 竞赛镜像多",
              "license": "",
              "kind": "classification",
              "tier": "portal"
            },
            {
              "name": "AI Challenger 农作物病害（历史）",
              "url": "https://github.com/AIChallenger/AI_Challenger_2018",
              "note": "万级 · 竞赛存档 · 中国挑战历史",
              "license": "",
              "kind": "classification",
              "tier": "more"
            },
            {
              "name": "Leafsnap",
              "url": "http://leafsnap.com/dataset/",
              "note": "3万+ · 官网 · 树种叶片（偏分类）",
              "license": "",
              "kind": "classification",
              "tier": "more"
            },
            {
              "name": "Flavia leaf",
              "url": "https://flavia.sourceforge.net/",
              "note": "1907 · 官网 · 叶片形状经典",
              "license": "",
              "kind": "classification",
              "tier": "featured"
            }
          ],
          "todo": ""
        },
        {
          "id": "通用-叶片病害基准-detection",
          "name_zh": "二级：目标检测",
          "modality": "田间 / 果实 / 害虫 RGB",
          "task": "检测",
          "status": "ready",
          "local": "",
          "datasets": [
            {
              "name": "PlantDoc",
              "url": "https://github.com/pratikkayal/PlantDoc-Dataset",
              "note": "2.5k+ · GitHub · 真实场景病叶",
              "license": "",
              "kind": "detection",
              "tier": "more"
            },
            {
              "name": "Pest24 / 农业害虫检测",
              "url": "https://github.com/xuejianhuang/Pest24-dataset",
              "note": "2.5万+ · 论文/下载页 · 害虫检测",
              "license": "",
              "kind": "detection",
              "tier": "more"
            },
            {
              "name": "AgriPest / 多害虫公开聚合",
              "url": "https://universe.roboflow.com/search?q=pest",
              "note": "多 · Roboflow/Kaggle · 质量筛选",
              "license": "",
              "kind": "detection",
              "tier": "portal"
            }
          ],
          "todo": ""
        }
      ]
    },
    {
      "id": "番茄-茄果类",
      "name_zh": "番茄·茄果类",
      "blurb": "7 条公开入口",
      "children": [
        {
          "id": "番茄-茄果类-detection",
          "name_zh": "二级：目标检测",
          "modality": "田间 / 果实 / 害虫 RGB",
          "task": "检测",
          "status": "ready",
          "local": "",
          "datasets": [
            {
              "name": "tomatOD",
              "url": "https://github.com/opendr-eu/datasets",
              "note": "千级 · 论文/项目 · 本仓库番茄检测",
              "license": "",
              "kind": "detection",
              "tier": "featured"
            },
            {
              "name": "Laboro Tomato",
              "url": "https://github.com/laboroai/LaboroTomato",
              "note": "千级 · Laboro · 成熟度+实例",
              "license": "",
              "kind": "detection",
              "tier": "featured"
            },
            {
              "name": "Tomato detection Roboflow 聚合",
              "url": "https://universe.roboflow.com/search?q=tomato",
              "note": "多 · Roboflow · 质量参差",
              "license": "",
              "kind": "detection",
              "tier": "portal"
            }
          ],
          "todo": ""
        },
        {
          "id": "番茄-茄果类-classification",
          "name_zh": "二级：分类 / 病害识别",
          "modality": "叶片 / 果实",
          "task": "分类",
          "status": "ready",
          "local": "",
          "datasets": [
            {
              "name": "Tomato leaf disease (PlantVillage子集)",
              "url": "https://github.com/spMohanty/PlantVillage-Dataset",
              "note": "万级 · PlantVillage · 早疫病等",
              "license": "",
              "kind": "classification",
              "tier": "featured"
            },
            {
              "name": "Pepper / Capsicum disease",
              "url": "https://www.kaggle.com/datasets?search=pepper+disease",
              "note": "千级 · PlantVillage/Kaggle · 辣椒病害",
              "license": "",
              "kind": "classification",
              "tier": "portal"
            },
            {
              "name": "Eggplant / 茄子病害小集",
              "url": "https://www.kaggle.com/datasets?search=eggplant",
              "note": "百~千 · Kaggle · 茄类扩展",
              "license": "",
              "kind": "classification",
              "tier": "portal"
            },
            {
              "name": "Greenhouse tomato ripeness 公开小集",
              "url": "https://zenodo.org/",
              "note": "千级 · Zenodo/Kaggle · 搜 tomato ripeness",
              "license": "",
              "kind": "classification",
              "tier": "portal"
            }
          ],
          "todo": ""
        }
      ]
    },
    {
      "id": "茶叶",
      "name_zh": "茶叶",
      "blurb": "5 条公开入口",
      "children": [
        {
          "id": "茶叶-classification",
          "name_zh": "二级：分类 / 病害识别",
          "modality": "叶片 / 果实",
          "task": "分类",
          "status": "ready",
          "local": "",
          "datasets": [
            {
              "name": "Mendeley Tea Leaf Disease",
              "url": "https://data.mendeley.com/",
              "note": "千级 · Mendeley · 本仓 tea-datasets",
              "license": "",
              "kind": "classification",
              "tier": "featured"
            },
            {
              "name": "Tea sickness dataset (Kaggle常见)",
              "url": "https://www.kaggle.com/datasets?search=tea+leaf+disease",
              "note": "千级 · Kaggle · 多镜像",
              "license": "",
              "kind": "classification",
              "tier": "portal"
            },
            {
              "name": "Assam / 印度茶叶病害小集",
              "url": "https://data.mendeley.com/",
              "note": "千级 · Mendeley/Figshare · 检索 tea disease",
              "license": "",
              "kind": "classification",
              "tier": "portal"
            }
          ],
          "todo": ""
        },
        {
          "id": "茶叶-detection",
          "name_zh": "二级：目标检测",
          "modality": "田间 / 果实 / 害虫 RGB",
          "task": "检测",
          "status": "partial",
          "local": "",
          "datasets": [
            {
              "name": "teadata / 茶叶检测工程数据",
              "url": "https://github.com/",
              "note": "项目集 · 本地 · 本仓 teadata",
              "license": "",
              "kind": "detection",
              "tier": "featured"
            },
            {
              "name": "Tea bud / 嫩芽检测公开小集",
              "url": "https://universe.roboflow.com/search?q=tea+bud",
              "note": "百~千 · Roboflow · 采摘机器人向",
              "license": "",
              "kind": "detection",
              "tier": "portal"
            }
          ],
          "todo": ""
        }
      ]
    },
    {
      "id": "梨-仁果类",
      "name_zh": "梨·仁果类",
      "blurb": "5 条公开入口",
      "children": [
        {
          "id": "梨-仁果类-detection",
          "name_zh": "二级：目标检测",
          "modality": "田间 / 果实 / 害虫 RGB",
          "task": "检测",
          "status": "ready",
          "local": "",
          "datasets": [
            {
              "name": "MinneApple",
              "url": "https://github.com/nicolaihaug/MinneApple",
              "note": "1万+果 · UMN · 苹果检测分割金标准之一",
              "license": "",
              "kind": "detection",
              "tier": "featured"
            },
            {
              "name": "Fuji apple / 苹果缺陷公开小集",
              "url": "https://universe.roboflow.com/search?q=apple+defect",
              "note": "千级 · Roboflow/Kaggle · 外观分级",
              "license": "",
              "kind": "detection",
              "tier": "portal"
            },
            {
              "name": "PFruit / 桃李杏公开聚合",
              "url": "https://universe.roboflow.com/search?q=peach",
              "note": "多 · Roboflow · 核果扩展",
              "license": "",
              "kind": "detection",
              "tier": "portal"
            },
            {
              "name": "ACFR Orchard Fruit Datasets",
              "url": "http://data.acfr.usyd.edu.au/ag/treecrops/2016-multifruit/",
              "note": "多套 · ACFR Sydney · 苹果杏仁芒果等",
              "license": "",
              "kind": "detection",
              "tier": "more"
            }
          ],
          "todo": ""
        },
        {
          "id": "梨-仁果类-classification",
          "name_zh": "二级：分类 / 病害识别",
          "modality": "叶片 / 果实",
          "task": "分类",
          "status": "partial",
          "local": "",
          "datasets": [
            {
              "name": "Apple leaf disease (PlantVillage/Kaggle)",
              "url": "https://www.kaggle.com/datasets?search=apple+leaf+disease",
              "note": "万级 · Kaggle · 黑星病等",
              "license": "",
              "kind": "classification",
              "tier": "featured"
            }
          ],
          "todo": ""
        }
      ]
    },
    {
      "id": "柑橘类",
      "name_zh": "柑橘类",
      "blurb": "5 条公开入口",
      "children": [
        {
          "id": "柑橘类-classification",
          "name_zh": "二级：分类 / 病害识别",
          "modality": "叶片 / 果实",
          "task": "分类",
          "status": "ready",
          "local": "",
          "datasets": [
            {
              "name": "Citrus Leaves / Citrus Disease",
              "url": "https://www.kaggle.com/datasets/jonathansilva2020/citrus-leaves",
              "note": "千级 · Kaggle/UCI · 柑橘病害",
              "license": "",
              "kind": "classification",
              "tier": "more"
            },
            {
              "name": "PlantVillage Citrus 子集",
              "url": "https://github.com/spMohanty/PlantVillage-Dataset",
              "note": "千级 · PlantVillage · 黄龙病相关标签需核",
              "license": "",
              "kind": "classification",
              "tier": "featured"
            },
            {
              "name": "HLB / 黄龙病图像公开小集",
              "url": "https://data.mendeley.com/",
              "note": "千级 · Mendeley/Figshare · 搜 Huanglongbing",
              "license": "",
              "kind": "classification",
              "tier": "portal"
            },
            {
              "name": "Orange / Lemon defect grading",
              "url": "https://www.kaggle.com/datasets?search=orange+defect",
              "note": "千级 · Kaggle · 外观分级",
              "license": "",
              "kind": "classification",
              "tier": "portal"
            }
          ],
          "todo": ""
        },
        {
          "id": "柑橘类-detection",
          "name_zh": "二级：目标检测",
          "modality": "田间 / 果实 / 害虫 RGB",
          "task": "检测",
          "status": "partial",
          "local": "",
          "datasets": [
            {
              "name": "Citrus fruit detection Roboflow",
              "url": "https://universe.roboflow.com/search?q=citrus",
              "note": "多 · Roboflow · 采收检测",
              "license": "",
              "kind": "detection",
              "tier": "portal"
            }
          ],
          "todo": ""
        }
      ]
    },
    {
      "id": "葡萄-浆果",
      "name_zh": "葡萄·浆果",
      "blurb": "6 条公开入口",
      "children": [
        {
          "id": "葡萄-浆果-classification",
          "name_zh": "二级：分类 / 病害识别",
          "modality": "叶片 / 果实",
          "task": "分类",
          "status": "partial",
          "local": "",
          "datasets": [
            {
              "name": "Grape leaf disease (PlantVillage)",
              "url": "https://github.com/spMohanty/PlantVillage-Dataset",
              "note": "千级 · PlantVillage · 霜霉/黑腐等",
              "license": "",
              "kind": "classification",
              "tier": "featured"
            }
          ],
          "todo": ""
        },
        {
          "id": "葡萄-浆果-detection",
          "name_zh": "二级：目标检测",
          "modality": "田间 / 果实 / 害虫 RGB",
          "task": "检测",
          "status": "ready",
          "local": "",
          "datasets": [
            {
              "name": "WGISD Wine Grape Instance Segmentation",
              "url": "https://github.com/thsant/wgisd",
              "note": "300图 · GitHub · 葡萄串实例",
              "license": "",
              "kind": "detection",
              "tier": "featured"
            },
            {
              "name": "Strawberry detection / 草莓公开集",
              "url": "https://universe.roboflow.com/search?q=strawberry",
              "note": "千级 · Roboflow/Kaggle · 采摘",
              "license": "",
              "kind": "detection",
              "tier": "portal"
            },
            {
              "name": "Blueberry / 蓝莓小集",
              "url": "https://universe.roboflow.com/search?q=blueberry",
              "note": "百~千 · Roboflow · 小果检测难",
              "license": "",
              "kind": "detection",
              "tier": "portal"
            },
            {
              "name": "Raspberry / 树莓小集",
              "url": "https://universe.roboflow.com/search?q=raspberry",
              "note": "百级 · Roboflow · 稀缺",
              "license": "",
              "kind": "detection",
              "tier": "portal"
            }
          ],
          "todo": ""
        },
        {
          "id": "葡萄-浆果-segmentation",
          "name_zh": "二级：分割 / 实例",
          "modality": "RGB / 航拍",
          "task": "分割转框",
          "status": "partial",
          "local": "",
          "datasets": [
            {
              "name": "Embrapa WGISD 扩展引用集",
              "url": "https://github.com/thsant/wgisd",
              "note": "— · 同上 · 酿酒葡萄",
              "license": "",
              "kind": "seg→box",
              "tier": "featured"
            }
          ],
          "todo": ""
        }
      ]
    },
    {
      "id": "水稻",
      "name_zh": "水稻",
      "blurb": "6 条公开入口",
      "children": [
        {
          "id": "水稻-classification",
          "name_zh": "二级：分类 / 病害识别",
          "modality": "叶片 / 果实",
          "task": "分类",
          "status": "partial",
          "local": "",
          "datasets": [
            {
              "name": "Rice leaf disease (多源)",
              "url": "https://www.kaggle.com/datasets?search=rice+leaf+disease",
              "note": "千~万 · Kaggle/Mendeley · 稻瘟/白叶枯等",
              "license": "",
              "kind": "classification",
              "tier": "portal"
            },
            {
              "name": "Dhan-Shomadhan / 孟加拉水稻病害",
              "url": "https://data.mendeley.com/",
              "note": "千级 · Mendeley · 检索 rice Bangladesh",
              "license": "",
              "kind": "classification",
              "tier": "portal"
            }
          ],
          "todo": ""
        },
        {
          "id": "水稻-detection",
          "name_zh": "二级：目标检测",
          "modality": "田间 / 果实 / 害虫 RGB",
          "task": "检测",
          "status": "ready",
          "local": "",
          "datasets": [
            {
              "name": "Rice Pest / 水稻害虫",
              "url": "https://www.kaggle.com/datasets?search=rice+pest",
              "note": "千级 · Kaggle · 害虫",
              "license": "",
              "kind": "detection",
              "tier": "portal"
            },
            {
              "name": "Rice seedling / 秧苗检测",
              "url": "https://universe.roboflow.com/search?q=rice+seedling",
              "note": "千级 · Roboflow · 密度估计向",
              "license": "",
              "kind": "detection",
              "tier": "portal"
            },
            {
              "name": "Rice panicle / 稻穗检测小集",
              "url": "https://zenodo.org/",
              "note": "百~千 · Zenodo/论文 · 搜 rice panicle",
              "license": "",
              "kind": "detection",
              "tier": "portal"
            }
          ],
          "todo": ""
        },
        {
          "id": "水稻-segmentation",
          "name_zh": "二级：分割 / 实例",
          "modality": "RGB / 航拍",
          "task": "分割转框",
          "status": "partial",
          "local": "",
          "datasets": [
            {
              "name": "Sentinel 水稻物候/面积（区域）",
              "url": "https://developers.google.com/earth-engine/datasets",
              "note": "区域级 · GEE/ESA · 遥感估产",
              "license": "",
              "kind": "seg→box",
              "tier": "more"
            }
          ],
          "todo": ""
        }
      ]
    },
    {
      "id": "小麦",
      "name_zh": "小麦",
      "blurb": "5 条公开入口",
      "children": [
        {
          "id": "小麦-detection",
          "name_zh": "二级：目标检测",
          "modality": "田间 / 果实 / 害虫 RGB",
          "task": "检测",
          "status": "ready",
          "local": "",
          "datasets": [
            {
              "name": "Global Wheat Head Detection (GWHD)",
              "url": "https://www.global-wheat.com/",
              "note": "万级穗 · 官网 · 麦穗检测金标准",
              "license": "",
              "kind": "detection",
              "tier": "featured"
            },
            {
              "name": "GWHD 2021 扩展",
              "url": "https://www.global-wheat.com/",
              "note": "多域 · 同上 · 域泛化故事好",
              "license": "",
              "kind": "detection",
              "tier": "featured"
            },
            {
              "name": "ACFR Wheat spikes 历史",
              "url": "http://data.acfr.usyd.edu.au/",
              "note": "小 · ACFR · 早期穗检测",
              "license": "",
              "kind": "detection",
              "tier": "more"
            }
          ],
          "todo": ""
        },
        {
          "id": "小麦-classification",
          "name_zh": "二级：分类 / 病害识别",
          "modality": "叶片 / 果实",
          "task": "分类",
          "status": "partial",
          "local": "",
          "datasets": [
            {
              "name": "Wheat rust / 小麦锈病",
              "url": "https://www.kaggle.com/c/cgiar-wheat-disease",
              "note": "千级 · CGIAR/Kaggle · 锈病挑战",
              "license": "",
              "kind": "classification",
              "tier": "more"
            },
            {
              "name": "Wheat leaf disease 聚合",
              "url": "https://www.kaggle.com/datasets?search=wheat+disease",
              "note": "千级 · Kaggle · 多病",
              "license": "",
              "kind": "classification",
              "tier": "portal"
            }
          ],
          "todo": ""
        }
      ]
    },
    {
      "id": "玉米",
      "name_zh": "玉米",
      "blurb": "4 条公开入口",
      "children": [
        {
          "id": "玉米-classification",
          "name_zh": "二级：分类 / 病害识别",
          "modality": "叶片 / 果实",
          "task": "分类",
          "status": "ready",
          "local": "",
          "datasets": [
            {
              "name": "Corn leaf disease (PlantVillage/Kaggle)",
              "url": "https://www.kaggle.com/datasets?search=corn+leaf+disease",
              "note": "万级 · Kaggle · 大斑病等",
              "license": "",
              "kind": "classification",
              "tier": "featured"
            },
            {
              "name": "Corn kernel / 籽粒品质小集",
              "url": "https://www.kaggle.com/datasets?search=corn+kernel",
              "note": "千级 · Kaggle · 分级",
              "license": "",
              "kind": "classification",
              "tier": "portal"
            },
            {
              "name": "CGIAR maize lethal necrosis 相关",
              "url": "https://plantvillage.psu.edu/",
              "note": "千级 · PlantVillage/CGIAR · MLN等",
              "license": "",
              "kind": "classification",
              "tier": "more"
            }
          ],
          "todo": ""
        },
        {
          "id": "玉米-detection",
          "name_zh": "二级：目标检测",
          "modality": "田间 / 果实 / 害虫 RGB",
          "task": "检测",
          "status": "partial",
          "local": "",
          "datasets": [
            {
              "name": "Maize tassel / 雄穗检测",
              "url": "https://github.com/",
              "note": "百~千 · 论文/GitHub · 搜 maize tassel",
              "license": "",
              "kind": "detection",
              "tier": "portal"
            }
          ],
          "todo": ""
        }
      ]
    },
    {
      "id": "大豆-豆类",
      "name_zh": "大豆·豆类",
      "blurb": "4 条公开入口",
      "children": [
        {
          "id": "大豆-豆类-classification",
          "name_zh": "二级：分类 / 病害识别",
          "modality": "叶片 / 果实",
          "task": "分类",
          "status": "ready",
          "local": "",
          "datasets": [
            {
              "name": "Soybean leaf disease",
              "url": "https://www.kaggle.com/datasets?search=soybean+disease",
              "note": "千级 · Kaggle/Mendeley · 大豆病害",
              "license": "",
              "kind": "classification",
              "tier": "portal"
            },
            {
              "name": "Bean disease (IBEA/Kaggle)",
              "url": "https://www.kaggle.com/c/bean-leaf-diseases-classification",
              "note": "千级 · Makerere/Kaggle · 菜豆",
              "license": "",
              "kind": "classification",
              "tier": "more"
            },
            {
              "name": "Cassava Leaf Disease Classification",
              "url": "https://www.kaggle.com/c/cassava-leaf-disease-classification",
              "note": "2万+ · Kaggle · 木薯（热带主粮）",
              "license": "",
              "kind": "classification",
              "tier": "more"
            },
            {
              "name": "Chickpea / 鹰嘴豆小集",
              "url": "https://www.kaggle.com/datasets?search=chickpea",
              "note": "百~千 · Kaggle · 稀缺",
              "license": "",
              "kind": "classification",
              "tier": "portal"
            }
          ],
          "todo": ""
        }
      ]
    },
    {
      "id": "棉花-经济作物",
      "name_zh": "棉花·经济作物",
      "blurb": "5 条公开入口",
      "children": [
        {
          "id": "棉花-经济作物-detection",
          "name_zh": "二级：目标检测",
          "modality": "田间 / 果实 / 害虫 RGB",
          "task": "检测",
          "status": "ready",
          "local": "",
          "datasets": [
            {
              "name": "Cotton weed / CottonWeedDet",
              "url": "https://github.com/JungWooChul/CottonWeedDet3",
              "note": "千级 · GitHub · 棉田杂草",
              "license": "",
              "kind": "detection",
              "tier": "more"
            },
            {
              "name": "Cotton boll / 棉桃检测小集",
              "url": "https://universe.roboflow.com/search?q=cotton+boll",
              "note": "百~千 · Roboflow · 产量相关",
              "license": "",
              "kind": "detection",
              "tier": "portal"
            },
            {
              "name": "Oilseed rape / 油菜花计数",
              "url": "https://zenodo.org/",
              "note": "百~千 · Zenodo/论文 · 搜 oilseed rape flower",
              "license": "",
              "kind": "detection",
              "tier": "portal"
            }
          ],
          "todo": ""
        },
        {
          "id": "棉花-经济作物-classification",
          "name_zh": "二级：分类 / 病害识别",
          "modality": "叶片 / 果实",
          "task": "分类",
          "status": "partial",
          "local": "",
          "datasets": [
            {
              "name": "DeepWeeds",
              "url": "https://github.com/AlexOlsen/DeepWeeds",
              "note": "1.7万 · GitHub · 澳洲杂草经典",
              "license": "",
              "kind": "classification",
              "tier": "featured"
            },
            {
              "name": "Cotton leaf disease",
              "url": "https://www.kaggle.com/datasets?search=cotton+leaf+disease",
              "note": "千级 · Kaggle · 棉花病害",
              "license": "",
              "kind": "classification",
              "tier": "portal"
            }
          ],
          "todo": ""
        }
      ]
    },
    {
      "id": "马铃薯-薯类",
      "name_zh": "马铃薯·薯类",
      "blurb": "4 条公开入口",
      "children": [
        {
          "id": "马铃薯-薯类-classification",
          "name_zh": "二级：分类 / 病害识别",
          "modality": "叶片 / 果实",
          "task": "分类",
          "status": "ready",
          "local": "",
          "datasets": [
            {
              "name": "Potato leaf blight (PlantVillage)",
              "url": "https://github.com/spMohanty/PlantVillage-Dataset",
              "note": "千级 · PlantVillage · 晚疫病等",
              "license": "",
              "kind": "classification",
              "tier": "featured"
            },
            {
              "name": "PlantVillage Potato 子集镜像",
              "url": "https://www.kaggle.com/datasets?search=potato+disease",
              "note": "千级 · Kaggle · 常用教学",
              "license": "",
              "kind": "classification",
              "tier": "featured"
            },
            {
              "name": "Sweet potato / 甘薯病害小集",
              "url": "https://www.kaggle.com/datasets?search=sweet+potato",
              "note": "百~千 · Kaggle · 稀缺",
              "license": "",
              "kind": "classification",
              "tier": "portal"
            }
          ],
          "todo": ""
        },
        {
          "id": "马铃薯-薯类-detection",
          "name_zh": "二级：目标检测",
          "modality": "田间 / 果实 / 害虫 RGB",
          "task": "检测",
          "status": "partial",
          "local": "",
          "datasets": [
            {
              "name": "Potato tuber defect 外观",
              "url": "https://universe.roboflow.com/search?q=potato+defect",
              "note": "千级 · Roboflow · 商品化分级",
              "license": "",
              "kind": "detection",
              "tier": "portal"
            }
          ],
          "todo": ""
        }
      ]
    },
    {
      "id": "瓜类-设施蔬菜",
      "name_zh": "瓜类·设施蔬菜",
      "blurb": "4 条公开入口",
      "children": [
        {
          "id": "瓜类-设施蔬菜-classification",
          "name_zh": "二级：分类 / 病害识别",
          "modality": "叶片 / 果实",
          "task": "分类",
          "status": "partial",
          "local": "",
          "datasets": [
            {
              "name": "Cucumber disease / CCD",
              "url": "https://www.kaggle.com/datasets?search=cucumber+disease",
              "note": "千级 · Kaggle/论文 · 黄瓜病害",
              "license": "",
              "kind": "classification",
              "tier": "portal"
            }
          ],
          "todo": ""
        },
        {
          "id": "瓜类-设施蔬菜-detection",
          "name_zh": "二级：目标检测",
          "modality": "田间 / 果实 / 害虫 RGB",
          "task": "检测",
          "status": "ready",
          "local": "",
          "datasets": [
            {
              "name": "Melon / Watermelon detection",
              "url": "https://universe.roboflow.com/search?q=watermelon",
              "note": "千级 · Roboflow · 采收",
              "license": "",
              "kind": "detection",
              "tier": "portal"
            },
            {
              "name": "Pumpkin / 南瓜小集",
              "url": "https://universe.roboflow.com/search?q=pumpkin",
              "note": "百~千 · Roboflow · 扩展",
              "license": "",
              "kind": "detection",
              "tier": "portal"
            },
            {
              "name": "Greenhouse vegetable multi-crop",
              "url": "https://universe.roboflow.com/search?q=greenhouse",
              "note": "多 · Roboflow · 多作物混检",
              "license": "",
              "kind": "detection",
              "tier": "portal"
            }
          ],
          "todo": ""
        }
      ]
    },
    {
      "id": "香蕉-热带果",
      "name_zh": "香蕉·热带果",
      "blurb": "7 条公开入口",
      "children": [
        {
          "id": "香蕉-热带果-classification",
          "name_zh": "二级：分类 / 病害识别",
          "modality": "叶片 / 果实",
          "task": "分类",
          "status": "ready",
          "local": "",
          "datasets": [
            {
              "name": "Banana leaf disease",
              "url": "https://www.kaggle.com/datasets?search=banana+leaf+disease",
              "note": "千级 · Mendeley/Kaggle · 香蕉叶斑等",
              "license": "",
              "kind": "classification",
              "tier": "portal"
            },
            {
              "name": "Banana fruit grading",
              "url": "https://www.kaggle.com/datasets?search=banana+ripeness",
              "note": "千级 · Kaggle · 成熟度",
              "license": "",
              "kind": "classification",
              "tier": "portal"
            },
            {
              "name": "MangoLeafBD",
              "url": "https://data.mendeley.com/datasets/hxsnvwty3r/1",
              "note": "4千 · Mendeley · 孟加拉芒果叶病",
              "license": "",
              "kind": "classification",
              "tier": "more"
            },
            {
              "name": "Papaya / 番木瓜小集",
              "url": "https://www.kaggle.com/datasets?search=papaya",
              "note": "百~千 · Kaggle · 热带扩展",
              "license": "",
              "kind": "classification",
              "tier": "portal"
            }
          ],
          "todo": ""
        },
        {
          "id": "香蕉-热带果-detection",
          "name_zh": "二级：目标检测",
          "modality": "田间 / 果实 / 害虫 RGB",
          "task": "检测",
          "status": "ready",
          "local": "",
          "datasets": [
            {
              "name": "Mango YOLO / Mangoset",
              "url": "http://data.acfr.usyd.edu.au/ag/treecrops/2016-multifruit/",
              "note": "千级 · ACFR/Roboflow · 芒果检测",
              "license": "",
              "kind": "detection",
              "tier": "more"
            },
            {
              "name": "Pineapple detection 小集",
              "url": "https://universe.roboflow.com/search?q=pineapple",
              "note": "百级 · Roboflow · 稀缺",
              "license": "",
              "kind": "detection",
              "tier": "portal"
            },
            {
              "name": "Dragon fruit / 火龙果小集",
              "url": "https://universe.roboflow.com/search?q=dragon+fruit",
              "note": "百~千 · Roboflow · 新兴作物",
              "license": "",
              "kind": "detection",
              "tier": "portal"
            }
          ],
          "todo": ""
        }
      ]
    },
    {
      "id": "咖啡-可可",
      "name_zh": "咖啡·可可",
      "blurb": "4 条公开入口",
      "children": [
        {
          "id": "咖啡-可可-segmentation",
          "name_zh": "二级：分割 / 实例",
          "modality": "RGB / 航拍",
          "task": "分割转框",
          "status": "partial",
          "local": "",
          "datasets": [
            {
              "name": "BRACOL Coffee leaf",
              "url": "https://github.com/Caninha/BRACOL-Dataset",
              "note": "千级 · GitHub · 咖啡叶病",
              "license": "",
              "kind": "seg→box",
              "tier": "more"
            }
          ],
          "todo": ""
        },
        {
          "id": "咖啡-可可-classification",
          "name_zh": "二级：分类 / 病害识别",
          "modality": "叶片 / 果实",
          "task": "分类",
          "status": "ready",
          "local": "",
          "datasets": [
            {
              "name": "JMuBEN / JMuBEN2 Coffee",
              "url": "https://data.mendeley.com/datasets/t2r6kmhvdb/1",
              "note": "万级 · Mendeley · 肯尼亚咖啡",
              "license": "",
              "kind": "classification",
              "tier": "more"
            },
            {
              "name": "RoCoLe Coffee leaf",
              "url": "https://data.mendeley.com/datasets/c5yvn32dzg/2",
              "note": "1560 · 数据页 · 咖啡锈病等",
              "license": "",
              "kind": "classification",
              "tier": "more"
            },
            {
              "name": "Cocoa disease 公开小集",
              "url": "https://www.kaggle.com/datasets?search=cocoa+disease",
              "note": "千级 · Kaggle/CGIAR · 黑荚等",
              "license": "",
              "kind": "classification",
              "tier": "portal"
            }
          ],
          "todo": ""
        }
      ]
    },
    {
      "id": "杂草-精准农业",
      "name_zh": "杂草·精准农业",
      "blurb": "6 条公开入口",
      "children": [
        {
          "id": "杂草-精准农业-classification",
          "name_zh": "二级：分类 / 病害识别",
          "modality": "叶片 / 果实",
          "task": "分类",
          "status": "partial",
          "local": "",
          "datasets": [
            {
              "name": "DeepWeeds",
              "url": "https://github.com/AlexOlsen/DeepWeeds",
              "note": "17509 · GitHub · 8类杂草",
              "license": "",
              "kind": "classification",
              "tier": "featured"
            },
            {
              "name": "Open Sprayer / 杂草喷药相关",
              "url": "https://www.kaggle.com/datasets?search=weed",
              "note": "千级 · Kaggle/社区 · 检索筛选",
              "license": "",
              "kind": "classification",
              "tier": "portal"
            }
          ],
          "todo": ""
        },
        {
          "id": "杂草-精准农业-detection",
          "name_zh": "二级：目标检测",
          "modality": "田间 / 果实 / 害虫 RGB",
          "task": "检测",
          "status": "partial",
          "local": "",
          "datasets": [
            {
              "name": "CottonWeedDet / 棉田杂草",
              "url": "https://github.com/JungWooChul/CottonWeedDet3",
              "note": "千级 · GitHub · 检测向",
              "license": "",
              "kind": "detection",
              "tier": "more"
            },
            {
              "name": "Early crop weeds / Carrot-Weed",
              "url": "https://github.com/",
              "note": "百~千 · 论文集 · 搜 carrot weed dataset",
              "license": "",
              "kind": "detection",
              "tier": "portal"
            }
          ],
          "todo": ""
        },
        {
          "id": "杂草-精准农业-segmentation",
          "name_zh": "二级：分割 / 实例",
          "modality": "RGB / 航拍",
          "task": "分割转框",
          "status": "partial",
          "local": "",
          "datasets": [
            {
              "name": "WeedNet / sugar beet weeds",
              "url": "https://github.com/cwfid/dataset",
              "note": "小 · 论文 · CWFID作物行",
              "license": "",
              "kind": "seg→box",
              "tier": "more"
            },
            {
              "name": "CWFID Crop/Weed Field Image Dataset",
              "url": "https://github.com/cwfid/dataset",
              "note": "60 · GitHub · 经典小集",
              "license": "",
              "kind": "seg→box",
              "tier": "featured"
            }
          ],
          "todo": ""
        }
      ]
    },
    {
      "id": "害虫专题",
      "name_zh": "害虫专题",
      "blurb": "5 条公开入口",
      "children": [
        {
          "id": "害虫专题-classification",
          "name_zh": "二级：分类 / 病害识别",
          "modality": "叶片 / 果实",
          "task": "分类",
          "status": "partial",
          "local": "",
          "datasets": [
            {
              "name": "IP102",
              "url": "https://github.com/xpwu95/IP102",
              "note": "75222 · GitHub · 102类",
              "license": "",
              "kind": "classification",
              "tier": "featured"
            }
          ],
          "todo": ""
        },
        {
          "id": "害虫专题-detection",
          "name_zh": "二级：目标检测",
          "modality": "田间 / 果实 / 害虫 RGB",
          "task": "检测",
          "status": "ready",
          "local": "",
          "datasets": [
            {
              "name": "Pest24",
              "url": "https://github.com/xuejianhuang/Pest24-dataset",
              "note": "2.5万 · GitHub · 24类检测",
              "license": "",
              "kind": "detection",
              "tier": "more"
            },
            {
              "name": "IP102 detection 改编标注",
              "url": "https://github.com/xpwu95/IP102",
              "note": "衍生 · 社区 · 需自查标注质量",
              "license": "",
              "kind": "detection",
              "tier": "featured"
            },
            {
              "name": "Agricultural pest Roboflow Universe",
              "url": "https://universe.roboflow.com/search?q=insect+pest",
              "note": "海量 · Roboflow · 参差",
              "license": "",
              "kind": "detection",
              "tier": "portal"
            },
            {
              "name": "Sticky trap insect counting 小集",
              "url": "https://zenodo.org/",
              "note": "百~千 · Zenodo/Kaggle · 搜 sticky trap insect",
              "license": "",
              "kind": "detection",
              "tier": "portal"
            }
          ],
          "todo": ""
        }
      ]
    },
    {
      "id": "遥感-地块制图",
      "name_zh": "遥感·地块制图",
      "blurb": "10 条公开入口",
      "children": [
        {
          "id": "遥感-地块制图-segmentation",
          "name_zh": "二级：分割 / 实例",
          "modality": "RGB / 航拍",
          "task": "分割转框",
          "status": "ready",
          "local": "",
          "datasets": [
            {
              "name": "Agriculture-Vision",
              "url": "https://www.agriculture-vision.com/",
              "note": "9.4万图 · CVPR挑战 · 田间异常模式分割",
              "license": "",
              "kind": "seg→box",
              "tier": "featured"
            },
            {
              "name": "Agriculture-Vision 2022+",
              "url": "https://www.agriculture-vision.com/",
              "note": "扩展 · 同上 · 年更关注官网",
              "license": "",
              "kind": "seg→box",
              "tier": "featured"
            },
            {
              "name": "Sen4AgriNet / 哨兵作物",
              "url": "https://github.com/",
              "note": "大 · Zenodo/论文 · 搜 Sen4AgriNet",
              "license": "",
              "kind": "seg→box",
              "tier": "portal"
            },
            {
              "name": "PASTIS / PASTIS-R",
              "url": "https://github.com/VSainteuf/pastis-benchmark",
              "note": "2.4k地块 · 官网 · 地块分割时序",
              "license": "",
              "kind": "seg→box",
              "tier": "more"
            }
          ],
          "todo": ""
        },
        {
          "id": "遥感-地块制图-classification",
          "name_zh": "二级：分类 / 病害识别",
          "modality": "叶片 / 果实",
          "task": "分类",
          "status": "ready",
          "local": "",
          "datasets": [
            {
              "name": "EuroCrops",
              "url": "https://github.com/maja601/EuroCrops",
              "note": "千万地块级 · GitHub · 欧洲作物申报",
              "license": "",
              "kind": "classification",
              "tier": "more"
            },
            {
              "name": "CropHarvest",
              "url": "https://github.com/nasaharvest/cropharvest",
              "note": "全球 · GitHub · 作物有无分类",
              "license": "",
              "kind": "classification",
              "tier": "more"
            },
            {
              "name": "BigEarthNet",
              "url": "https://bigearth.net/",
              "note": "59万 · 官网 · 土地覆盖偏遥感",
              "license": "",
              "kind": "classification",
              "tier": "more"
            },
            {
              "name": "EuroSAT",
              "url": "https://github.com/phelber/eurosat",
              "note": "2.7万 · GitHub · 土地利用教学",
              "license": "",
              "kind": "classification",
              "tier": "more"
            },
            {
              "name": "South Africa Crop Type / Radiant MLHub",
              "url": "https://mlhub.earth/",
              "note": "多 · Radiant · 非洲作物类型",
              "license": "",
              "kind": "classification",
              "tier": "more"
            }
          ],
          "todo": ""
        },
        {
          "id": "遥感-地块制图-other",
          "name_zh": "二级：其他任务",
          "modality": "多模态",
          "task": "混合",
          "status": "partial",
          "local": "",
          "datasets": [
            {
              "name": "NASA Harvest / Radiant 农业目录",
              "url": "https://mlhub.earth/",
              "note": "聚合 · Radiant MLHub · 遥感农业总入口",
              "license": "",
              "kind": "multi",
              "tier": "more"
            }
          ],
          "todo": ""
        }
      ]
    },
    {
      "id": "无人机-表型组学",
      "name_zh": "无人机·表型组学",
      "blurb": "4 条公开入口",
      "children": [
        {
          "id": "无人机-表型组学-detection",
          "name_zh": "二级：目标检测",
          "modality": "田间 / 果实 / 害虫 RGB",
          "task": "检测",
          "status": "ready",
          "local": "",
          "datasets": [
            {
              "name": "PhenoBench",
              "url": "https://www.phenobench.org/",
              "note": "挑战级 · 官网 · 作物/杂草/叶片实例",
              "license": "",
              "kind": "detection",
              "tier": "featured"
            },
            {
              "name": "Global Wheat 航拍子集",
              "url": "https://www.global-wheat.com/",
              "note": "见GWHD · GWHD · 部分域为无人机",
              "license": "",
              "kind": "detection",
              "tier": "more"
            },
            {
              "name": "UAV crop counting 公开小集",
              "url": "https://zenodo.org/",
              "note": "多作物 · Zenodo · 搜 UAV plant counting",
              "license": "",
              "kind": "detection",
              "tier": "portal"
            }
          ],
          "todo": ""
        },
        {
          "id": "无人机-表型组学-segmentation",
          "name_zh": "二级：分割 / 实例",
          "modality": "RGB / 航拍",
          "task": "分割转框",
          "status": "partial",
          "local": "",
          "datasets": [
            {
              "name": "PlantCV 示例图像",
              "url": "https://plantcv.danforthcenter.org/",
              "note": "示例 · PlantCV · 工具+示例",
              "license": "",
              "kind": "seg→box",
              "tier": "more"
            }
          ],
          "todo": ""
        }
      ]
    },
    {
      "id": "水果通用-外观分级",
      "name_zh": "水果通用·外观分级",
      "blurb": "5 条公开入口",
      "children": [
        {
          "id": "水果通用-外观分级-classification",
          "name_zh": "二级：分类 / 病害识别",
          "modality": "叶片 / 果实",
          "task": "分类",
          "status": "ready",
          "local": "",
          "datasets": [
            {
              "name": "Fruits-360",
              "url": "https://github.com/Horea94/Fruit-Images-Dataset",
              "note": "9万+ · GitHub/Kaggle · 实验室单果，易过拟合",
              "license": "",
              "kind": "classification",
              "tier": "more"
            },
            {
              "name": "FruitNet / 品质分级",
              "url": "https://www.kaggle.com/datasets?search=fruit+quality",
              "note": "千~万 · Kaggle · 品质",
              "license": "",
              "kind": "classification",
              "tier": "portal"
            },
            {
              "name": "Date fruit / 椰枣数据集",
              "url": "https://data.mendeley.com/",
              "note": "千级 · Mendeley · 搜 date fruit dataset",
              "license": "",
              "kind": "classification",
              "tier": "portal"
            },
            {
              "name": "Olive / 橄榄病害小集",
              "url": "https://www.kaggle.com/datasets?search=olive+disease",
              "note": "千级 · Kaggle · 油橄榄",
              "license": "",
              "kind": "classification",
              "tier": "portal"
            }
          ],
          "todo": ""
        },
        {
          "id": "水果通用-外观分级-detection",
          "name_zh": "二级：目标检测",
          "modality": "田间 / 果实 / 害虫 RGB",
          "task": "检测",
          "status": "partial",
          "local": "",
          "datasets": [
            {
              "name": "Pomegranate / 石榴小集",
              "url": "https://universe.roboflow.com/search?q=pomegranate",
              "note": "百~千 · Roboflow · 扩展",
              "license": "",
              "kind": "detection",
              "tier": "portal"
            }
          ],
          "todo": ""
        }
      ]
    },
    {
      "id": "畜牧-养殖",
      "name_zh": "畜牧·养殖",
      "blurb": "6 条公开入口",
      "children": [
        {
          "id": "畜牧-养殖-detection",
          "name_zh": "二级：目标检测",
          "modality": "田间 / 果实 / 害虫 RGB",
          "task": "检测",
          "status": "ready",
          "local": "",
          "datasets": [
            {
              "name": "Cattle detection / counting 公开集",
              "url": "https://www.kaggle.com/datasets?search=cattle+detection",
              "note": "千级 · Kaggle/Roboflow · 牛只计数",
              "license": "",
              "kind": "detection",
              "tier": "portal"
            },
            {
              "name": "Pig tracking / 猪只检测",
              "url": "https://universe.roboflow.com/search?q=pig",
              "note": "千级 · Roboflow · 养殖监测",
              "license": "",
              "kind": "detection",
              "tier": "portal"
            },
            {
              "name": "Sheep / 羊只公开小集",
              "url": "https://universe.roboflow.com/search?q=sheep",
              "note": "百~千 · Roboflow · 扩展",
              "license": "",
              "kind": "detection",
              "tier": "portal"
            },
            {
              "name": "Chicken / 禽只行为小集",
              "url": "https://www.kaggle.com/datasets?search=chicken+detection",
              "note": "千级 · Kaggle · 行为/计数",
              "license": "",
              "kind": "detection",
              "tier": "portal"
            }
          ],
          "todo": ""
        },
        {
          "id": "畜牧-养殖-classification",
          "name_zh": "二级：分类 / 病害识别",
          "modality": "叶片 / 果实",
          "task": "分类",
          "status": "partial",
          "local": "",
          "datasets": [
            {
              "name": "Livestock face / 个体识别小集",
              "url": "https://zenodo.org/",
              "note": "百~千 · 论文/Zenodo · 个体ID难",
              "license": "",
              "kind": "classification",
              "tier": "portal"
            }
          ],
          "todo": ""
        },
        {
          "id": "畜牧-养殖-other",
          "name_zh": "二级：其他任务",
          "modality": "多模态",
          "task": "混合",
          "status": "partial",
          "local": "",
          "datasets": [
            {
              "name": "Animal Pose / AP-10K（偏通用）",
              "url": "https://github.com/AlexTheBad/AP-10K",
              "note": "万级 · 官网 · 姿态估计交叉",
              "license": "",
              "kind": "pose",
              "tier": "more"
            }
          ],
          "todo": ""
        }
      ]
    },
    {
      "id": "水产养殖",
      "name_zh": "水产养殖",
      "blurb": "5 条公开入口",
      "children": [
        {
          "id": "水产养殖-detection",
          "name_zh": "二级：目标检测",
          "modality": "田间 / 果实 / 害虫 RGB",
          "task": "检测",
          "status": "ready",
          "local": "",
          "datasets": [
            {
              "name": "Fish4Knowledge / 鱼类检测",
              "url": "https://homepages.inf.ed.ac.uk/rbf/Fish4Knowledge/",
              "note": "万级 · 官网镜像 · 鱼类监测",
              "license": "",
              "kind": "detection",
              "tier": "more"
            },
            {
              "name": "DeepFish",
              "url": "https://github.com/alzayats/DeepFish",
              "note": "千级 · GitHub · 鱼检测分割",
              "license": "",
              "kind": "detection",
              "tier": "more"
            },
            {
              "name": "Aquaculture cage / 网箱小集",
              "url": "https://universe.roboflow.com/search?q=fish+farm",
              "note": "百级 · Roboflow · 稀缺",
              "license": "",
              "kind": "detection",
              "tier": "portal"
            },
            {
              "name": "Shrimp / 对虾检测小集",
              "url": "https://universe.roboflow.com/search?q=shrimp",
              "note": "百~千 · Roboflow · 扩展",
              "license": "",
              "kind": "detection",
              "tier": "portal"
            }
          ],
          "todo": ""
        },
        {
          "id": "水产养殖-classification",
          "name_zh": "二级：分类 / 病害识别",
          "modality": "叶片 / 果实",
          "task": "分类",
          "status": "partial",
          "local": "",
          "datasets": [
            {
              "name": "FishNet / 鱼种分类",
              "url": "https://fishnet-2023.github.io/",
              "note": "万级 · 官网 · 细粒度鱼种",
              "license": "",
              "kind": "classification",
              "tier": "more"
            }
          ],
          "todo": ""
        }
      ]
    },
    {
      "id": "林业-生态",
      "name_zh": "林业·生态",
      "blurb": "4 条公开入口",
      "children": [
        {
          "id": "林业-生态-detection",
          "name_zh": "二级：目标检测",
          "modality": "田间 / 果实 / 害虫 RGB",
          "task": "检测",
          "status": "partial",
          "local": "",
          "datasets": [
            {
              "name": "Tree species / NeonTreeEvaluation",
              "url": "https://github.com/weecology/NeonTreeEvaluation",
              "note": "千级 · GitHub · 树冠检测",
              "license": "",
              "kind": "detection",
              "tier": "more"
            },
            {
              "name": "Timber / 原木缺陷（工业交叉）",
              "url": "https://universe.roboflow.com/search?q=wood+defect",
              "note": "千级 · Roboflow · 与工业缺陷近",
              "license": "",
              "kind": "detection",
              "tier": "portal"
            }
          ],
          "todo": ""
        },
        {
          "id": "林业-生态-segmentation",
          "name_zh": "二级：分割 / 实例",
          "modality": "RGB / 航拍",
          "task": "分割转框",
          "status": "partial",
          "local": "",
          "datasets": [
            {
              "name": "Forest fire / 山火遥感公开集",
              "url": "https://www.kaggle.com/datasets?search=forest+fire",
              "note": "多 · Kaggle · 火情",
              "license": "",
              "kind": "seg→box",
              "tier": "portal"
            }
          ],
          "todo": ""
        },
        {
          "id": "林业-生态-classification",
          "name_zh": "二级：分类 / 病害识别",
          "modality": "叶片 / 果实",
          "task": "分类",
          "status": "partial",
          "local": "",
          "datasets": [
            {
              "name": "Bark / 树皮病虫害小集",
              "url": "https://www.kaggle.com/datasets?search=tree+bark",
              "note": "百~千 · Kaggle · 林业病虫害",
              "license": "",
              "kind": "classification",
              "tier": "portal"
            }
          ],
          "todo": ""
        }
      ]
    },
    {
      "id": "土壤-高光谱-传感",
      "name_zh": "土壤·高光谱·传感",
      "blurb": "4 条公开入口",
      "children": [
        {
          "id": "土壤-高光谱-传感-classification",
          "name_zh": "二级：分类 / 病害识别",
          "modality": "叶片 / 果实",
          "task": "分类",
          "status": "partial",
          "local": "",
          "datasets": [
            {
              "name": "Indian Pines / Salinas / Pavia",
              "url": "https://www.ehu.eus/ccwintco/index.php/Hyperspectral_Remote_Sensing_Scenes",
              "note": "经典 · UGR · 高光谱地物经典",
              "license": "",
              "kind": "classification",
              "tier": "featured"
            }
          ],
          "todo": ""
        },
        {
          "id": "土壤-高光谱-传感-other",
          "name_zh": "二级：其他任务",
          "modality": "多模态",
          "task": "混合",
          "status": "ready",
          "local": "",
          "datasets": [
            {
              "name": "Soil spectral libraries (公开子集)",
              "url": "https://www.isric.org/",
              "note": "千~万 · ISRIC/OSL · 土壤属性估测",
              "license": "",
              "kind": "reg",
              "tier": "more"
            },
            {
              "name": "Crop nitrogen / 叶绿素 UAV 小集",
              "url": "https://zenodo.org/",
              "note": "百级 · Zenodo · 搜 crop nitrogen UAV",
              "license": "",
              "kind": "reg",
              "tier": "portal"
            },
            {
              "name": "IoT farm sensor 公开时序小集",
              "url": "https://www.kaggle.com/datasets?search=agriculture+iot",
              "note": "多 · Kaggle · 环境预测",
              "license": "",
              "kind": "reg",
              "tier": "portal"
            }
          ],
          "todo": ""
        }
      ]
    },
    {
      "id": "种子-品质-仓储",
      "name_zh": "种子·品质·仓储",
      "blurb": "3 条公开入口",
      "children": [
        {
          "id": "种子-品质-仓储-classification",
          "name_zh": "二级：分类 / 病害识别",
          "modality": "叶片 / 果实",
          "task": "分类",
          "status": "partial",
          "local": "",
          "datasets": [
            {
              "name": "Seed classification 公开集",
              "url": "https://www.kaggle.com/datasets?search=seed+classification",
              "note": "千~万 · Kaggle · 品种识别",
              "license": "",
              "kind": "classification",
              "tier": "portal"
            },
            {
              "name": "Stored grain pest 小集",
              "url": "https://www.kaggle.com/datasets?search=stored+grain+pest",
              "note": "百~千 · Kaggle · 仓储",
              "license": "",
              "kind": "classification",
              "tier": "portal"
            }
          ],
          "todo": ""
        },
        {
          "id": "种子-品质-仓储-detection",
          "name_zh": "二级：目标检测",
          "modality": "田间 / 果实 / 害虫 RGB",
          "task": "检测",
          "status": "partial",
          "local": "",
          "datasets": [
            {
              "name": "Grain impurity / 粮食品质",
              "url": "https://www.kaggle.com/datasets?search=grain+quality",
              "note": "千级 · Kaggle · 杂质/破损",
              "license": "",
              "kind": "detection",
              "tier": "portal"
            }
          ],
          "todo": ""
        }
      ]
    },
    {
      "id": "工业缺陷-同库交叉",
      "name_zh": "工业缺陷·同库交叉",
      "blurb": "3 条公开入口",
      "children": [
        {
          "id": "工业缺陷-同库交叉-segmentation",
          "name_zh": "二级：分割 / 实例",
          "modality": "RGB / 航拍",
          "task": "分割转框",
          "status": "partial",
          "local": "",
          "datasets": [
            {
              "name": "Severstal Steel Defect",
              "url": "https://www.kaggle.com/c/severstal-steel-defect-detection",
              "note": "竞赛 · Kaggle · 本仓 severstal-yolo",
              "license": "",
              "kind": "seg→box",
              "tier": "featured"
            },
            {
              "name": "MVTec AD",
              "url": "https://www.mvtec.com/company/research/datasets/mvtec-ad",
              "note": "5k+ · MVTec · 异常检测范式",
              "license": "",
              "kind": "seg→box",
              "tier": "more"
            }
          ],
          "todo": ""
        },
        {
          "id": "工业缺陷-同库交叉-detection",
          "name_zh": "二级：目标检测",
          "modality": "田间 / 果实 / 害虫 RGB",
          "task": "检测",
          "status": "partial",
          "local": "",
          "datasets": [
            {
              "name": "NEU surface defect / KolektorSDD",
              "url": "http://faculty.neu.edu.cn/yunhyan/NEU_surface_defect_database.html",
              "note": "千级 · NEU/Kolektor · 方法可迁移到果表缺陷",
              "license": "",
              "kind": "detection",
              "tier": "more"
            }
          ],
          "todo": ""
        }
      ]
    },
    {
      "id": "平台聚合-农业",
      "name_zh": "平台聚合·农业",
      "blurb": "10 条公开入口",
      "children": [
        {
          "id": "平台聚合-农业-other",
          "name_zh": "二级：其他任务",
          "modality": "多模态",
          "task": "混合",
          "status": "ready",
          "local": "",
          "datasets": [
            {
              "name": "Papers With Code · Agriculture",
              "url": "https://paperswithcode.com/datasets?q=agriculture",
              "note": "索引 · PWC · SOTA+数据",
              "license": "",
              "kind": "multi",
              "tier": "more"
            },
            {
              "name": "Kaggle Agriculture",
              "url": "https://www.kaggle.com/datasets?search=agriculture",
              "note": "海量 · Kaggle · 竞赛",
              "license": "",
              "kind": "multi",
              "tier": "portal"
            },
            {
              "name": "Mendeley Data · crop/plant",
              "url": "https://data.mendeley.com/",
              "note": "海量 · Mendeley · 茶叶等常在此",
              "license": "",
              "kind": "multi",
              "tier": "featured"
            },
            {
              "name": "Zenodo Agriculture",
              "url": "https://zenodo.org/",
              "note": "海量 · Zenodo · DOI友好",
              "license": "",
              "kind": "multi",
              "tier": "portal"
            },
            {
              "name": "Google Earth Engine Data Catalog",
              "url": "https://developers.google.com/earth-engine/datasets",
              "note": "海量 · GEE · 遥感入口",
              "license": "",
              "kind": "multi",
              "tier": "more"
            },
            {
              "name": "Radiant MLHub",
              "url": "https://mlhub.earth/",
              "note": "多挑战 · Radiant · 农业遥感挑战",
              "license": "",
              "kind": "multi",
              "tier": "more"
            },
            {
              "name": "Open Agriculture Dataset 索引博文/列表",
              "url": "https://github.com/search?q=awesome-agriculture-dataset",
              "note": "— · 社区列表 · 搜 awesome agriculture dataset",
              "license": "",
              "kind": "multi",
              "tier": "portal"
            },
            {
              "name": "Hugging Face · plant/crop",
              "url": "https://huggingface.co/datasets?search=plant",
              "note": "增长中 · HF · 注意许可",
              "license": "",
              "kind": "multi",
              "tier": "portal"
            }
          ],
          "todo": ""
        },
        {
          "id": "平台聚合-农业-detection",
          "name_zh": "二级：目标检测",
          "modality": "田间 / 果实 / 害虫 RGB",
          "task": "检测",
          "status": "partial",
          "local": "",
          "datasets": [
            {
              "name": "Roboflow Universe · Agriculture",
              "url": "https://universe.roboflow.com/search?q=agriculture",
              "note": "海量 · Roboflow · 最快找标注",
              "license": "",
              "kind": "detection",
              "tier": "portal"
            }
          ],
          "todo": ""
        },
        {
          "id": "平台聚合-农业-classification",
          "name_zh": "二级：分类 / 病害识别",
          "modality": "叶片 / 果实",
          "task": "分类",
          "status": "partial",
          "local": "",
          "datasets": [
            {
              "name": "PlantVillage 官方门户",
              "url": "https://plantvillage.psu.edu/",
              "note": "门户 · PSU · 知识+部分数据指引",
              "license": "",
              "kind": "classification",
              "tier": "featured"
            }
          ],
          "todo": ""
        }
      ]
    }
  ],
  "categories": []
};
