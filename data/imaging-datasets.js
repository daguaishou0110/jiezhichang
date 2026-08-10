/** 医学影像公开数据集目录 — 按部位/模态类目补充。编辑本文件即可，刷新 imaging-datasets.html。 */
window.IMAGING_DATASETS = {
  meta: {
    title: "医学影像数据集目录",
    subtitle: "按解剖部位 / 模态分列；先列类目，再逐条补名称、链接、备注。仅公开可获取数据。",
    updated: "2026-08-10",
    how_to_fill: "编辑 data/imaging-datasets.js 中对应 category.datasets[]；status 可写 empty / partial / ready。"
  },
  categories: [
    {
      id: "colorectal-polyp",
      name_zh: "结直肠 · 结肠镜息肉",
      modality: "内镜",
      task: "检测 / 分割转框",
      status: "partial",
      local: "colorectal-yolo",
      datasets: [
        { name: "Kvasir-SEG", url: "https://datasets.simula.no/kvasir-seg/", note: "分割转框；成稿常用", license: "" },
        { name: "CVC-ClinicDB", url: "https://polyp.grand-challenge.org/CVCClinicDB/", note: "跨源常用", license: "" },
        { name: "CVC-ColonDB", url: "https://polyp.grand-challenge.org/CVCColonDB/", note: "外测", license: "" },
        { name: "ETIS-Larib", url: "https://polyp.grand-challenge.org/ETISLarib/", note: "小目标难例", license: "" },
        { name: "PolypGen", url: "https://www.synapse.org/#!Synapse:syn45200214", note: "多中心（需账号）", license: "" },
        { name: "PolypDB", url: "https://osf.io/pr7ms/", note: "多模态", license: "" }
      ],
      todo: "补各集规模、YOLO 转换说明"
    },
    {
      id: "oral-opg",
      name_zh: "口腔 · 全景片病灶",
      modality: "X 线全景",
      task: "多类检测",
      status: "partial",
      local: "oral-yolo",
      datasets: [
        { name: "DENTEX", url: "https://dentex.grand-challenge.org/", note: "公开牙科全景检测", license: "" },
        { name: "Dental OPG XRAY（项目集）", url: "", note: "成稿主集 6 类；补公开源链接", license: "" }
      ],
      todo: "补 OPG 主集官方下载页"
    },
    {
      id: "liver-ct",
      name_zh: "肝 · CT 小肿瘤",
      modality: "CT",
      task: "检测 / 分割转框",
      status: "partial",
      local: "liver-yolo",
      datasets: [
        { name: "SLTD", url: "https://github.com/XLIAaron/Small_LiverTumor", note: "成稿主集", license: "" },
        { name: "LiTS", url: "https://competitions.codalab.org/competitions/17094", note: "分割转框补充", license: "" },
        { name: "DeepLesion（肝区）", url: "https://nihcc.box.com/v/DeepLesion", note: "多器官病灶框子集", license: "" }
      ],
      todo: ""
    },
    {
      id: "lung",
      name_zh: "肺 · 肺超声 / CT 结节",
      modality: "超声 / CT",
      task: "检测",
      status: "partial",
      local: "lung-yolo",
      datasets: [
        { name: "LUS-BALD", url: "", note: "B-line；本地工程主集；补公开链接", license: "" },
        { name: "POCUS COVID ultrasound", url: "https://github.com/jannisborn/covid19_pocus_ultrasound", note: "肺超声补充", license: "" },
        { name: "LUNA16", url: "https://luna16.grand-challenge.org/Data/", note: "CT 结节坐标→框", license: "" },
        { name: "LIDC-IDRI", url: "https://www.cancerimagingarchive.net/collection/lidc-idri/", note: "结节精标", license: "" }
      ],
      todo: "补 LUS-BALD 官方入口"
    },
    {
      id: "coronary-xca",
      name_zh: "心血管 · 冠脉造影狭窄",
      modality: "XCA",
      task: "分割 / 检测",
      status: "partial",
      local: "heart",
      datasets: [
        { name: "ARCADE", url: "https://arcade.grand-challenge.org/", note: "狭窄分割/检测", license: "" },
        { name: "ARCADE Zenodo", url: "https://doi.org/10.5281/zenodo.10390295", note: "数据下载", license: "" }
      ],
      todo: ""
    },
    {
      id: "osteoporosis",
      name_zh: "骨质疏松 · 腰椎多模态",
      modality: "X 线 / CT",
      task: "筛查 / 检测",
      status: "partial",
      local: "骨质疏松",
      datasets: [
        { name: "LUMOS", url: "https://keyueshi.github.io/LUMOS/", note: "项目页", license: "CC BY-NC 4.0" },
        { name: "LUMOS Zenodo", url: "https://doi.org/10.5281/zenodo.18173664", note: "全量约 46GB", license: "CC BY-NC 4.0" }
      ],
      todo: ""
    },
    {
      id: "fundus",
      name_zh: "眼底 · 彩照病灶",
      modality: "眼底照相",
      task: "检测 / 分割",
      status: "empty",
      local: "fundus-vessel-yolo / 眼底",
      datasets: [],
      todo: "补 IDRiD、DDR、血管分割集等"
    },
    {
      id: "fundus-oct",
      name_zh: "眼底 · OCT 积液/病灶",
      modality: "OCT",
      task: "检测 / 分割",
      status: "empty",
      local: "眼底OCT",
      datasets: [],
      todo: "补 RETOUCH 等"
    },
    {
      id: "skin",
      name_zh: "皮肤 · 皮损",
      modality: "皮肤镜 / 临床照",
      task: "检测 / 分类",
      status: "empty",
      local: "skin",
      datasets: [],
      todo: "补 ISIC、iToBoS 等"
    },
    {
      id: "brain",
      name_zh: "脑 · 肿瘤/出血",
      modality: "MRI / CT",
      task: "检测 / 分割转框",
      status: "empty",
      local: "脑",
      datasets: [],
      todo: "补 BraTS、Br35H、CQ500 等"
    },
    {
      id: "breast-mammo",
      name_zh: "乳腺 · 钼靶",
      modality: "钼靶",
      task: "肿块/钙化检测",
      status: "empty",
      local: "乳腺",
      datasets: [],
      todo: "补 VinDr-Mammo、CBIS-DDSM、INbreast"
    },
    {
      id: "breast-us",
      name_zh: "乳腺 · 超声",
      modality: "超声",
      task: "肿块检测/分割",
      status: "empty",
      local: "乳腺超声",
      datasets: [],
      todo: "补 BUSI、BUS-BRA"
    },
    {
      id: "thyroid",
      name_zh: "甲状腺 · 超声结节",
      modality: "超声",
      task: "检测 / 分割",
      status: "empty",
      local: "甲状腺",
      datasets: [],
      todo: "补 DDTI、TN3K、TG3K"
    },
    {
      id: "chest-xray",
      name_zh: "胸部 · 胸片多病灶",
      modality: "X 线",
      task: "检测",
      status: "empty",
      local: "胸部",
      datasets: [],
      todo: "补 VinDr-CXR、RSNA Pneumonia"
    },
    {
      id: "fracture",
      name_zh: "骨骼骨折 · X 光",
      modality: "X 线",
      task: "骨折检测",
      status: "empty",
      local: "骨骼骨折",
      datasets: [],
      todo: "补 FracAtlas、GRAZPEDWRI-DX"
    },
    {
      id: "wrist",
      name_zh: "腕关节",
      modality: "X 线",
      task: "骨折检测",
      status: "empty",
      local: "腕关节",
      datasets: [],
      todo: "可与骨骼骨折共用 GRAZPEDWRI-DX"
    },
    {
      id: "spine",
      name_zh: "脊柱",
      modality: "X 线 / CT / MRI",
      task: "椎体/病变检测",
      status: "empty",
      local: "脊柱",
      datasets: [],
      todo: "补 VinDr-SpineXR 等"
    },
    {
      id: "gastroscopy",
      name_zh: "胃镜 · 上消化道",
      modality: "内镜",
      task: "检测",
      status: "empty",
      local: "胃镜",
      datasets: [],
      todo: "补 HyperKvasir、Kvasir"
    },
    {
      id: "esophagus",
      name_zh: "食管 · Barrett/早癌内镜",
      modality: "内镜",
      task: "检测",
      status: "empty",
      local: "食管",
      datasets: [],
      todo: ""
    },
    {
      id: "capsule",
      name_zh: "胶囊内镜",
      modality: "胶囊内镜",
      task: "检测",
      status: "empty",
      local: "胶囊内镜",
      datasets: [],
      todo: "补 Kvasir-Capsule"
    },
    {
      id: "cystoscopy",
      name_zh: "膀胱镜",
      modality: "内镜",
      task: "检测 / 分割转框",
      status: "empty",
      local: "膀胱镜",
      datasets: [],
      todo: ""
    },
    {
      id: "bronchoscopy",
      name_zh: "支气管镜",
      modality: "内镜",
      task: "检测",
      status: "empty",
      local: "支气管镜",
      datasets: [],
      todo: ""
    },
    {
      id: "kidney",
      name_zh: "肾 · 结石/病灶",
      modality: "超声 / CT",
      task: "检测 / 分割转框",
      status: "empty",
      local: "肾",
      datasets: [],
      todo: "补 KiTS 转框、结石超声集"
    },
    {
      id: "pancreas",
      name_zh: "胰腺",
      modality: "CT",
      task: "分割转框",
      status: "empty",
      local: "胰腺",
      datasets: [],
      todo: "补 MSD Pancreas"
    },
    {
      id: "prostate",
      name_zh: "前列腺",
      modality: "MRI",
      task: "检测 / 分割",
      status: "empty",
      local: "前列腺",
      datasets: [],
      todo: "补 ProstateX 等"
    },
    {
      id: "abdomen-ct",
      name_zh: "腹部 CT · 多器官病灶",
      modality: "CT",
      task: "检测",
      status: "empty",
      local: "腹部CT",
      datasets: [],
      todo: "补 DeepLesion"
    },
    {
      id: "gallbladder",
      name_zh: "胆囊 · 超声",
      modality: "超声",
      task: "结石/息肉检测",
      status: "empty",
      local: "胆囊",
      datasets: [],
      todo: ""
    },
    {
      id: "fetal-us",
      name_zh: "胎儿超声",
      modality: "超声",
      task: "结构检测/测量",
      status: "empty",
      local: "胎儿超声",
      datasets: [],
      todo: "补 HC18 等"
    },
    {
      id: "echo",
      name_zh: "心脏超声",
      modality: "超声心动",
      task: "结构检测",
      status: "empty",
      local: "心脏超声",
      datasets: [],
      todo: "补 EchoNet 衍生集"
    },
    {
      id: "carotid",
      name_zh: "颈动脉 · 斑块超声",
      modality: "超声",
      task: "斑块/IMT 检测",
      status: "empty",
      local: "颈动脉",
      datasets: [],
      todo: ""
    },
    {
      id: "lymph-node",
      name_zh: "淋巴结",
      modality: "超声 / CT",
      task: "检测",
      status: "empty",
      local: "淋巴结",
      datasets: [],
      todo: ""
    },
    {
      id: "blood-cell",
      name_zh: "血细胞 · 显微",
      modality: "显微",
      task: "检测",
      status: "empty",
      local: "血细胞",
      datasets: [],
      todo: "补 BCCD"
    },
    {
      id: "pathology",
      name_zh: "病理切片",
      modality: "WSI / 切片",
      task: "核/有丝分裂/转移灶",
      status: "empty",
      local: "病理切片",
      datasets: [],
      todo: "补 PanNuke、CoNSeP、MITOS"
    },
    {
      id: "cervix",
      name_zh: "宫颈 · 阴道镜/细胞学",
      modality: "阴道镜 / 细胞学",
      task: "检测",
      status: "empty",
      local: "宫颈",
      datasets: [],
      todo: ""
    },
    {
      id: "endometriosis",
      name_zh: "子宫内膜异位",
      modality: "腹腔镜 / MRI",
      task: "检测 / 分割",
      status: "empty",
      local: "子宫内膜异位",
      datasets: [],
      todo: "补 GLENDA、UT-EndoMRI"
    },
    {
      id: "knee",
      name_zh: "膝关节",
      modality: "X 线 / MRI",
      task: "检测 / 分割转框",
      status: "empty",
      local: "膝关节",
      datasets: [],
      todo: ""
    },
    {
      id: "hip",
      name_zh: "髋部骨折",
      modality: "X 线",
      task: "骨折检测",
      status: "empty",
      local: "髋部",
      datasets: [],
      todo: ""
    }
  ]
};
