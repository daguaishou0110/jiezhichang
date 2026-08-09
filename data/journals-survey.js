window.JOURNAL_SURVEY = {
  "meta": {
    "title": "医学期刊写法分布调研",
    "window": "2024–2026",
    "source": "EuropePMC 每刊最多 200 篇；标题+摘要关键词自动分类",
    "caveat": "粗分布，非人工逐篇精标。两套分类体系不要混用。",
    "updated": "2026-08"
  },
  "zones": [
    {
      "id": "z1",
      "name": "一区",
      "status": "ready",
      "blurb": "已完成 8 本相关一区刊抽样。微生物/肠道刊与 npj DigMed 用两套分类。",
      "taxonomies": {
        "microbiome": ["机制/因果实验", "人群关联/队列", "预测/生物标志/ML", "方法/工具/基准", "生态/群落结构", "多组学/系统", "综述/观点", "临床干预/试验", "其他/难分"],
        "npj": ["检测/工具/CAD", "预测/风险分层", "多模态/多组学", "基础模型/LLM", "临床部署", "综述/伦理", "其他/难分"]
      },
      "journals": [
        {
          "id": "npj_digmed",
          "name": "npj Digital Medicine",
          "publisher": "Nature Portfolio",
          "family": "npj",
          "fit": "high",
          "fit_label": "对我们路径最友好",
          "n": 200,
          "accepts": ["公开数据风险预测", "公开影像检测/CAD", "部署与外推", "基础模型/LLM", "综述伦理"],
          "avoid": ["纯湿实验机制", "无外测的刷分模型"],
          "our_types": ["01", "02", "04", "05"],
          "dist": [
            {"label": "临床部署", "pct": 15.0},
            {"label": "综述/伦理", "pct": 22.0},
            {"label": "基础模型/LLM", "pct": 11.0},
            {"label": "预测/风险分层", "pct": 10.0},
            {"label": "检测/工具/CAD", "pct": 7.0},
            {"label": "多模态/多组学", "pct": 1.0},
            {"label": "其他/难分", "pct": 34.0}
          ],
          "note": "公开 ICU / 影像 / 部署策略近两年有真刊路径。"
        },
        {
          "id": "gut_microbes",
          "name": "Gut Microbes",
          "publisher": "Taylor & Francis",
          "family": "microbiome",
          "fit": "low",
          "fit_label": "偏机制，预测难硬刚",
          "n": 200,
          "accepts": ["菌群机制/因果", "宿主互作", "综述", "少量方法与关联"],
          "avoid": ["纯黑盒刷分、无生物学故事的 ML"],
          "our_types": ["03"],
          "dist": [
            {"label": "机制/因果实验", "pct": 40.0},
            {"label": "综述/观点", "pct": 26.0},
            {"label": "人群关联/队列", "pct": 9.0},
            {"label": "方法/工具/基准", "pct": 7.0},
            {"label": "多组学/系统", "pct": 5.0},
            {"label": "临床干预/试验", "pct": 5.0},
            {"label": "生态/群落结构", "pct": 3.0},
            {"label": "预测/生物标志/ML", "pct": 2.0},
            {"label": "其他/难分", "pct": 3.0}
          ],
          "note": "ML/预测仅约 2%。结直肠方案若投此刊，需极强生物学一致性，不宜当纯计算主投。"
        },
        {
          "id": "gut_microbes_reports",
          "name": "Gut Microbes Reports",
          "publisher": "Taylor & Francis",
          "family": "microbiome",
          "fit": "mid",
          "fit_label": "关联/生态更多，仍非计算刊",
          "n": 200,
          "accepts": ["关联队列", "生态结构", "机制", "综述"],
          "avoid": ["无队列外推的纯方法刷分"],
          "our_types": ["03"],
          "dist": [
            {"label": "机制/因果实验", "pct": 25.0},
            {"label": "综述/观点", "pct": 20.0},
            {"label": "人群关联/队列", "pct": 19.0},
            {"label": "生态/群落结构", "pct": 14.0},
            {"label": "其他/难分", "pct": 12.0},
            {"label": "临床干预/试验", "pct": 5.0},
            {"label": "预测/生物标志/ML", "pct": 3.0},
            {"label": "方法/工具/基准", "pct": 1.0},
            {"label": "多组学/系统", "pct": 1.0}
          ],
          "note": "比 Gut Microbes 稍偏关联/生态，预测 ML 仍低。"
        },
        {
          "id": "microbiome",
          "name": "Microbiome",
          "publisher": "BMC",
          "family": "microbiome",
          "fit": "mid",
          "fit_label": "计算-微生物可冲，仍重机制",
          "n": 200,
          "accepts": ["机制", "多组学", "生态", "方法工具", "跨队列计算（需硬）"],
          "avoid": ["无生物学支撑的纯黑盒"],
          "our_types": ["03"],
          "dist": [
            {"label": "机制/因果实验", "pct": 42.0},
            {"label": "多组学/系统", "pct": 15.0},
            {"label": "生态/群落结构", "pct": 13.0},
            {"label": "其他/难分", "pct": 11.0},
            {"label": "综述/观点", "pct": 7.0},
            {"label": "人群关联/队列", "pct": 5.0},
            {"label": "方法/工具/基准", "pct": 4.0},
            {"label": "预测/生物标志/ML", "pct": 3.0},
            {"label": "临床干预/试验", "pct": 0.0}
          ],
          "note": "结直肠 LODO 主攻候选之一；要 LOCO+混杂+弱队列，不能只报平均 AUC。"
        },
        {
          "id": "npj_biofilms",
          "name": "npj Biofilms and Microbiomes",
          "publisher": "Nature Portfolio",
          "family": "microbiome",
          "fit": "mid",
          "fit_label": "跨队列/迁移有近两年路径",
          "n": 200,
          "accepts": ["机制", "生态", "综述", "跨队列预测/迁移（可 HYBRID）"],
          "avoid": ["与内镜伪造融合"],
          "our_types": ["03"],
          "dist": [
            {"label": "机制/因果实验", "pct": 38.0},
            {"label": "综述/观点", "pct": 17.0},
            {"label": "生态/群落结构", "pct": 12.0},
            {"label": "人群关联/队列", "pct": 10.0},
            {"label": "多组学/系统", "pct": 7.0},
            {"label": "预测/生物标志/ML", "pct": 6.0},
            {"label": "其他/难分", "pct": 5.0},
            {"label": "方法/工具/基准", "pct": 4.0},
            {"label": "临床干预/试验", "pct": 1.0}
          ],
          "note": "预测/ML 占比相对微生物刊里略高（~6%）；Meta-iTL 等 HYBRID 范文在此气质。"
        },
        {
          "id": "isme",
          "name": "ISME Journal",
          "publisher": "Nature Portfolio / ISME",
          "family": "microbiome",
          "fit": "low",
          "fit_label": "生态主导，临床预测不主场",
          "n": 200,
          "accepts": ["微生物生态", "群落结构", "机制", "环境微生物"],
          "avoid": ["医院风险分层主叙事"],
          "our_types": [],
          "dist": [
            {"label": "机制/因果实验", "pct": 36.0},
            {"label": "生态/群落结构", "pct": 27.0},
            {"label": "其他/难分", "pct": 16.0},
            {"label": "综述/观点", "pct": 8.0},
            {"label": "人群关联/队列", "pct": 5.0},
            {"label": "多组学/系统", "pct": 4.0},
            {"label": "预测/生物标志/ML", "pct": 3.0},
            {"label": "方法/工具/基准", "pct": 1.0},
            {"label": "临床干预/试验", "pct": 0.0}
          ],
          "note": "一般不作为结直肠风险分层主投。"
        },
        {
          "id": "nat_micro",
          "name": "Nature Microbiology",
          "publisher": "Nature Portfolio",
          "family": "microbiome",
          "fit": "low",
          "fit_label": "顶刊机制/发现，难纯计算",
          "n": 200,
          "accepts": ["重大微生物学发现", "机制", "少量方法"],
          "avoid": ["常规公开数据刷分"],
          "our_types": [],
          "dist": [
            {"label": "其他/难分", "pct": 38.0},
            {"label": "机制/因果实验", "pct": 33.0},
            {"label": "生态/群落结构", "pct": 10.0},
            {"label": "人群关联/队列", "pct": 9.0},
            {"label": "综述/观点", "pct": 4.0},
            {"label": "预测/生物标志/ML", "pct": 3.0},
            {"label": "方法/工具/基准", "pct": 1.0},
            {"label": "多组学/系统", "pct": 1.0},
            {"label": "临床干预/试验", "pct": 1.0}
          ],
          "note": "自动分类「其他」偏高；整体仍非公开数据预测主场。"
        },
        {
          "id": "gut",
          "name": "Gut",
          "publisher": "BMJ",
          "family": "microbiome",
          "fit": "low",
          "fit_label": "临床+机制顶刊，冲刺档",
          "n": 200,
          "accepts": ["临床胃肠", "机制", "干预试验", "关联"],
          "avoid": ["无临床纵深的纯公开计算"],
          "our_types": ["03"],
          "dist": [
            {"label": "其他/难分", "pct": 36.0},
            {"label": "机制/因果实验", "pct": 29.0},
            {"label": "人群关联/队列", "pct": 14.0},
            {"label": "综述/观点", "pct": 9.0},
            {"label": "临床干预/试验", "pct": 8.0},
            {"label": "多组学/系统", "pct": 3.0},
            {"label": "方法/工具/基准", "pct": 1.0},
            {"label": "预测/生物标志/ML", "pct": 0.0},
            {"label": "生态/群落结构", "pct": 0.0}
          ],
          "note": "抽样中预测/ML≈0%。结直肠纯公开方案不宜作主投。"
        }
      ]
    },
    {
      "id": "z2",
      "name": "二区",
      "status": "todo",
      "blurb": "尚未做 EuropePMC 抽样。下面是面向公开数据路径的「常见落点」定性地图，数字待补。",
      "journals": [
        {
          "id": "z2_dighealth",
          "name": "数字健康 / 医学信息学 Q2",
          "fit": "high",
          "fit_label": "02/部分预测常落点",
          "accepts": ["NHANES 时间外推", "电子健康预测", "可解释风险模型"],
          "avoid": ["伪装成机制顶刊叙事"],
          "our_types": ["02", "01"],
          "note": "骨质疏松 L3 包常比硬刚一区数字医学更现实。待补具体刊名分布表。"
        },
        {
          "id": "z2_bioinfo",
          "name": "生物信息 / CSBJ 气质 Q1–Q2",
          "fit": "mid",
          "fit_label": "03/05 方法强调备选",
          "accepts": ["多队列方法", "工具与基准", "公开影像方法"],
          "avoid": ["空洞 novelty 壳子"],
          "our_types": ["03", "05", "04"],
          "note": "验证包够时可作保底；档位对客户要诚实。"
        }
      ]
    },
    {
      "id": "z3",
      "name": "三区",
      "status": "todo",
      "blurb": "未抽样。通常作方法验证或增量不足时的保底，不作为「冲一区」对外承诺。",
      "journals": [
        {
          "id": "z3_method",
          "name": "应用型医学 AI / 专科方法刊",
          "fit": "mid",
          "fit_label": "可发，但不当主叙事",
          "accepts": ["单库或弱外测方法", "复现与工程报告"],
          "avoid": ["对客户承诺一区却投三区不透明"],
          "our_types": ["02", "05"],
          "note": "有结果但跨集/硬对照偏弱时再考虑。待补刊名清单。"
        }
      ]
    },
    {
      "id": "z4",
      "name": "四区",
      "status": "todo",
      "blurb": "未抽样。一般不进入客户主方案；仅内部备胎或非目标成果出口。",
      "journals": [
        {
          "id": "z4_backup",
          "name": "低门槛综合/预印后转投出口",
          "fit": "low",
          "fit_label": "不做主推",
          "accepts": ["完整但增量弱的公开数据工作"],
          "avoid": ["当作一区替代品对外销售"],
          "our_types": [],
          "note": "站点不展示「容易中的四区名单」，避免错误激励。"
        }
      ]
    }
  ]
};
