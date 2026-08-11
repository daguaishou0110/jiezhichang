/* 文科交叉 · 公开数据集（仅公开入口；需申请的标注 apply） */
window.HUM_DATASETS = [
  /* —— 经管 / MBA —— */
  {
    id: "cgss",
    branch: "mgmt",
    tier: "featured",
    name: "CGSS 中国综合社会调查",
    why: "MBA/HR/组织行为微观实证主库；幸福感、就业、社保等题项齐全。",
    access: "apply",
    url: "https://www.cnsda.org",
    notes: "CNSDA 注册审核；常用 2021 / 2023"
  },
  {
    id: "clds",
    branch: "mgmt",
    tier: "featured",
    name: "CLDS 中国劳动力动态调查",
    why: "最贴人力资源：职业流动、劳动合同、工作条件；可做多波次。",
    access: "apply",
    url: "https://css.sysu.edu.cn",
    notes: "中山大学社科调查中心"
  },
  {
    id: "cfps",
    branch: "mgmt",
    tier: "more",
    name: "CFPS 中国家庭追踪调查",
    why: "家庭—劳动—收入面板；备选微观库。",
    access: "apply",
    url: "https://www.isss.pku.edu.cn/cfps/",
    notes: "北大社科调查"
  },
  {
    id: "worldbank-labor",
    branch: "mgmt",
    tier: "more",
    name: "World Bank · 中国劳动宏观指标",
    why: "失业率/劳动参与率等宏观背景与稳健性。",
    access: "open",
    url: "https://data.worldbank.org/",
    notes: "API 可直下"
  },
  {
    id: "ilo-china",
    branch: "mgmt",
    tier: "more",
    name: "ILOSTAT · 中国就业指标",
    why: "国际劳工组织公开就业序列，补宏观。",
    access: "open",
    url: "https://ilostat.ilo.org/",
    notes: "公开"
  },
  {
    id: "owid-energy-cn",
    branch: "mgmt",
    tier: "featured",
    name: "Our World in Data · China Energy",
    why: "管理科学/双碳：能源结构宏观背景。",
    access: "open",
    url: "https://ourworldindata.org/energy",
    notes: "CSV 公开"
  },
  {
    id: "carbon-market-public",
    branch: "mgmt",
    tier: "featured",
    name: "中国碳市场公开成交（整理入口）",
    why: "零碳园区 / Stackelberg 算例常用碳价时序。",
    access: "open",
    url: "https://www.cneeex.com/",
    notes: "以交易所公开行情为准；项目内已有整理表"
  },

  /* —— 金融 / AI+经济 —— */
  {
    id: "uci-credit",
    branch: "finance",
    tier: "featured",
    name: "UCI Credit Approval / Default 类公开集",
    why: "信用违约预测、可解释评分的经典公开对照。",
    access: "open",
    url: "https://archive.ics.uci.edu/",
    notes: "选 Credit / Default of Credit Card Clients 等"
  },
  {
    id: "fred",
    branch: "finance",
    tier: "featured",
    name: "FRED 宏观金融序列",
    why: "波动率/压力预警的宏观特征源。",
    access: "open",
    url: "https://fred.stlouisfed.org/",
    notes: "API 公开"
  },
  {
    id: "yahoo-finance",
    branch: "finance",
    tier: "more",
    name: "公开行情（Yahoo Finance 等）",
    why: "市场波动预测实验的价格序列。",
    access: "open",
    url: "https://finance.yahoo.com/",
    notes: "注意许可与复现脚本固定切分"
  },

  /* —— 计算传播 —— */
  {
    id: "weibo-cascade-public",
    branch: "comm",
    tier: "featured",
    name: "公开微博/社交级联语料（项目整理入口）",
    why: "谣言网络、互动回归、AIGC vs 人工新闻对照。",
    access: "open",
    url: "https://github.com/",
    notes: "以各子题 README 锁定的公开集为准；禁止私有爬取未授权库"
  },
  {
    id: "zenodo-comms",
    branch: "comm",
    tier: "more",
    name: "Zenodo 计算传播开放数据集",
    why: "可检索 DOI 固化的传播/网络公开包。",
    access: "open",
    url: "https://zenodo.org/",
    notes: "按题检索 communication / cascade"
  },

  /* —— 语言 / 出海政策 —— */
  {
    id: "corp-website-multilang",
    branch: "lang",
    tier: "featured",
    name: "出海企业官网多语公开文本（自建语料规范）",
    why: "外显语言政策实证；仅用公开网页、可复现抓取清单。",
    access: "open",
    url: "https://jiezhichang.onrender.com/hum-datasets.html#branch=lang",
    notes: "语料清单与 codebook 进成稿包；不托管原始整站镜像"
  },
  {
    id: "common-crawl-subset",
    branch: "lang",
    tier: "more",
    name: "Common Crawl / 开放网页语料子集",
    why: "跨平台话语、文化传播定量的大规模公开源。",
    access: "open",
    url: "https://commoncrawl.org/",
    notes: "需固定快照与过滤脚本"
  },

  /* —— 教育心理 —— */
  {
    id: "pisa",
    branch: "edupsy",
    tier: "featured",
    name: "OECD PISA 公开测评数据",
    why: "教育测评、学习结果预测的国际公开库。",
    access: "open",
    url: "https://www.oecd.org/pisa/data/",
    notes: "公开"
  },
  {
    id: "student-depression-public",
    branch: "edupsy",
    tier: "featured",
    name: "学生心理健康公开表（英文教育情境 ML 对照）",
    why: "分类器榜单 / 可复现 leaderboard 题。",
    access: "open",
    url: "https://www.kaggle.com/",
    notes: "以成稿包锁定的具体 Kaggle/OpenML 集为准"
  },
  {
    id: "timss",
    branch: "edupsy",
    tier: "more",
    name: "IEA TIMSS / PIRLS",
    why: "国际教育测评备选。",
    access: "open",
    url: "https://timssandpirls.bc.edu/",
    notes: "需注册下载"
  }
];

window.HUM_BRANCHES = {
  mgmt: { label: "经管 / MBA", accent: "mgmt" },
  finance: { label: "金融 / AI+经济", accent: "finance" },
  comm: { label: "计算传播", accent: "comm" },
  lang: { label: "语言 / 出海政策", accent: "lang" },
  edupsy: { label: "教育心理", accent: "edupsy" }
};
