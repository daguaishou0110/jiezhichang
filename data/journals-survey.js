window.JOURNAL_SURVEY = {
  "meta": {
    "title": "好投快刊短名单",
    "purpose": "优先：相对容易录用 + 周期较短；贴公开数据四条路径",
    "partition_standard": "新锐期刊分区表 2026 大类（仅作档位参考）",
    "caveat": "「好投快」不等于水、也不保证录用。Frontiers / MDPI / Mega 刊许多单位认定偏严——接单前必须先问清。一区传统顶刊不在此名单。",
    "updated": "2026-08",
    "scope": "数字医学预测 · 菌群跨队列 · 骨质疏松 · 公开影像检测/分割"
  },
  "groups": [
    {
      "id": "fastest",
      "name": "最快保底",
      "blurb": "发文量大、周转通常最短。档位多为三区/综合刊，对外别包装成一区。",
      "journals": [
        {
          "id": "frontiers_public_health",
          "name": "Frontiers in Public Health",
          "publisher": "Frontiers",
          "xr": {
            "edition": "2026-03",
            "major": "医学",
            "zone": 3,
            "top": false
          },
          "track": "骨质疏松",
          "ease": "高",
          "cycle": "常见约 1–3 个月量级（OA 流水线）",
          "fit_label": "最快保底 · 公卫",
          "accepts": [
            "NHANES 等调查数据预测",
            "人群风险分层",
            "公卫数字健康"
          ],
          "avoid": [
            "包装成医学一区",
            "单位不认 Frontiers"
          ],
          "our_types": [
            "02"
          ],
          "note": "要速度时的第一保底；先确认单位认不认 Frontiers。"
        },
        {
          "id": "frontiers_medicine",
          "name": "Frontiers in Medicine",
          "publisher": "Frontiers",
          "xr": {
            "edition": "2026-03",
            "major": "医学",
            "zone": 3,
            "top": false
          },
          "track": "数字医学",
          "ease": "高",
          "cycle": "常见约 1–3 个月量级",
          "fit_label": "最快保底 · 医学综合",
          "accepts": [
            "医学综合应用",
            "完整公开数据预测包"
          ],
          "avoid": [
            "对外说成顶刊"
          ],
          "our_types": [
            "02",
            "01"
          ],
          "note": "题目稍杂也能装；适合尽快落稿。"
        },
        {
          "id": "frontiers_oncology",
          "name": "Frontiers in Oncology",
          "publisher": "Frontiers",
          "xr": {
            "edition": "2026-03",
            "major": "医学",
            "zone": 3,
            "top": false
          },
          "track": "公开影像",
          "ease": "高",
          "cycle": "常见约 1–3 个月量级；发文极大",
          "fit_label": "最快保底 · 肿瘤影像",
          "accepts": [
            "肿瘤影像检测/分割",
            "CRC 相关公开计算（贴肿瘤）"
          ],
          "avoid": [
            "非肿瘤题目硬投"
          ],
          "our_types": [
            "05",
            "03"
          ],
          "note": "影像/CRC 线高频快出口。"
        },
        {
          "id": "diagnostics",
          "name": "Diagnostics",
          "publisher": "MDPI",
          "xr": {
            "edition": "2026-03",
            "major": "医学",
            "zone": 3,
            "top": false
          },
          "track": "公开影像",
          "ease": "高",
          "cycle": "常见约数周–2 个月（特刊更快）",
          "fit_label": "最快保底 · MDPI 诊断",
          "accepts": [
            "诊断方法",
            "医学影像 AI",
            "检测应用"
          ],
          "avoid": [
            "单位不认 MDPI",
            "无对照刷分"
          ],
          "our_types": [
            "05",
            "02"
          ],
          "note": "Mega 气质；速度优先时常用。"
        },
        {
          "id": "sensors",
          "name": "Sensors",
          "publisher": "MDPI",
          "xr": {
            "edition": "2026-03",
            "major": "综合性期刊",
            "zone": 3,
            "top": false
          },
          "track": "公开影像",
          "ease": "高",
          "cycle": "常见约数周–2 个月",
          "fit_label": "最快保底 · Sensors",
          "accepts": [
            "传感/成像 + AI 分析（需贴传感叙事）"
          ],
          "avoid": [
            "纯临床预测与 Sensors 无关"
          ],
          "our_types": [
            "05"
          ],
          "note": "本仓库 MDPI 影像稿常见快出口。"
        },
        {
          "id": "sci_reports",
          "name": "Scientific Reports",
          "publisher": "Nature Portfolio",
          "xr": {
            "edition": "2026-03",
            "major": "综合性期刊",
            "zone": 3,
            "top": false
          },
          "track": "综合出口",
          "ease": "中高",
          "cycle": "常见约 2–4 个月（看外审）",
          "fit_label": "保底 · Nature 综合三区",
          "accepts": [
            "方法完整、结果扎实的跨学科工作"
          ],
          "avoid": [
            "对外说成 Nature 一区子刊"
          ],
          "our_types": [
            "02",
            "05",
            "03"
          ],
          "note": "比 Frontiers/MDPI 略稳一点，但仍是综合三区。"
        },
        {
          "id": "plos_one",
          "name": "PLOS ONE",
          "publisher": "PLOS",
          "xr": {
            "edition": "2026-03",
            "major": "综合性期刊",
            "zone": 3,
            "top": false
          },
          "track": "综合出口",
          "ease": "中高",
          "cycle": "常见约 2–4 个月",
          "fit_label": "保底 · PLOS 综合",
          "accepts": [
            "技术正确、可复现的完整研究"
          ],
          "avoid": [
            "冲区叙事"
          ],
          "our_types": [
            "02",
            "05"
          ],
          "note": "审扎实与透明，不审「故事有多顶」。"
        },
        {
          "id": "ieee_access",
          "name": "IEEE Access",
          "publisher": "IEEE",
          "xr": {
            "edition": "2026-03",
            "major": "计算机科学",
            "zone": 3,
            "top": false
          },
          "track": "公开影像",
          "ease": "高",
          "cycle": "常见约 1–2 个月量级",
          "fit_label": "最快保底 · 工程宽刊",
          "accepts": [
            "检测/分割系统报告",
            "应用 AI"
          ],
          "avoid": [
            "对外说成医学分区"
          ],
          "our_types": [
            "05"
          ],
          "note": "大类计算机；客户要医学分区时慎用。"
        },
        {
          "id": "peerj",
          "name": "PeerJ",
          "publisher": "PeerJ",
          "xr": {
            "edition": "2026-03",
            "major": "生物学",
            "zone": 3,
            "top": false
          },
          "track": "菌群",
          "ease": "中高",
          "cycle": "常见约 1–3 个月",
          "fit_label": "保底 · 生物综合",
          "accepts": [
            "生命科学完整研究",
            "部分计算生物"
          ],
          "avoid": [
            "主方案冲区"
          ],
          "our_types": [
            "03",
            "02"
          ],
          "note": "菌群/生信弱包保底。"
        }
      ]
    },
    {
      "id": "balanced",
      "name": "稍好一点还能较快",
      "blurb": "仍偏「相对好投 + 周期不拖」。多为二区或信息学刊；比上面保底难一档，但仍远快于顶刊。",
      "journals": [
        {
          "id": "frontiers_dh",
          "name": "Frontiers in Digital Health",
          "publisher": "Frontiers",
          "xr": {
            "edition": "2026-03",
            "major": "医学",
            "zone": 2,
            "top": false
          },
          "track": "数字医学",
          "ease": "中高",
          "cycle": "常见约 1–3 个月",
          "fit_label": "路径最贴 · 数字健康二区",
          "accepts": [
            "公开数据风险预测",
            "数字健康工具/评价",
            "NHANES 时间外推"
          ],
          "avoid": [
            "单位不认 Frontiers"
          ],
          "our_types": [
            "02",
            "01"
          ],
          "note": "骨质疏松/公开预测 Frontiers 线首选。"
        },
        {
          "id": "frontiers_micro",
          "name": "Frontiers in Microbiology",
          "publisher": "Frontiers",
          "xr": {
            "edition": "2026-03",
            "major": "生物学",
            "zone": 2,
            "top": true
          },
          "track": "菌群",
          "ease": "中高",
          "cycle": "常见约 1–3 个月；发文量大",
          "fit_label": "菌群 · 二区快",
          "accepts": [
            "菌群关联/计算",
            "多队列方法（需一点生物学故事）"
          ],
          "avoid": [
            "完全无微生物叙事"
          ],
          "our_types": [
            "03"
          ],
          "note": "结直肠公开方案的 Frontiers 主备选。"
        },
        {
          "id": "frontiers_bbe",
          "name": "Frontiers in Bioengineering and Biotechnology",
          "publisher": "Frontiers",
          "xr": {
            "edition": "2026-03",
            "major": "生物学",
            "zone": 2,
            "top": false
          },
          "track": "公开影像",
          "ease": "中高",
          "cycle": "常见约 1–3 个月",
          "fit_label": "影像方法 · 二区快",
          "accepts": [
            "医学影像方法",
            "检测分割工程"
          ],
          "avoid": [
            "与 bioengineering 无关"
          ],
          "our_types": [
            "05",
            "04"
          ],
          "note": "YOLO/分割类 Frontiers 线常投。"
        },
        {
          "id": "frontiers_nutrition",
          "name": "Frontiers in Nutrition",
          "publisher": "Frontiers",
          "xr": {
            "edition": "2026-03",
            "major": "农林科学",
            "zone": 2,
            "top": true
          },
          "track": "骨质疏松",
          "ease": "中高",
          "cycle": "常见约 1–3 个月",
          "fit_label": "营养-骨 · 二区快",
          "accepts": [
            "膳食-骨健康",
            "NHANES 营养预测"
          ],
          "avoid": [
            "无营养问题的纯算法"
          ],
          "our_types": [
            "02"
          ],
          "note": "大类农林科学，对外说清。"
        },
        {
          "id": "frontiers_endo",
          "name": "Frontiers in Endocrinology",
          "publisher": "Frontiers",
          "xr": {
            "edition": "2026-03",
            "major": "医学",
            "zone": 2,
            "top": false
          },
          "track": "骨质疏松",
          "ease": "中高",
          "cycle": "常见约 1–3 个月",
          "fit_label": "内分泌骨 · 二区快",
          "accepts": [
            "骨质疏松风险（贴内分泌/骨代谢）"
          ],
          "avoid": [
            "完全无内分泌对话"
          ],
          "our_types": [
            "02"
          ],
          "note": "比专科骨科学刊更好走通公开数据包。"
        },
        {
          "id": "frontiers_ai",
          "name": "Frontiers in Artificial Intelligence",
          "publisher": "Frontiers",
          "xr": {
            "edition": "2026-03",
            "major": "计算机科学",
            "zone": 3,
            "top": false
          },
          "track": "公开影像",
          "ease": "高",
          "cycle": "常见约 1–3 个月",
          "fit_label": "AI 快刊 · 计算机大类",
          "accepts": [
            "医学 AI 应用",
            "检测/预测工程报告"
          ],
          "avoid": [
            "说成医学分区"
          ],
          "our_types": [
            "05",
            "01"
          ],
          "note": "大类计算机三区。"
        },
        {
          "id": "frontiers_medtech",
          "name": "Frontiers in Medical Technology",
          "publisher": "Frontiers",
          "xr": {
            "edition": "2026-03",
            "major": "医学",
            "zone": 3,
            "top": false
          },
          "track": "公开影像",
          "ease": "高",
          "cycle": "常见约 1–3 个月",
          "fit_label": "医疗技术快刊",
          "accepts": [
            "检测/辅助诊断系统",
            "医疗技术 AI"
          ],
          "avoid": [
            "无技术贡献的纯统计"
          ],
          "our_types": [
            "05"
          ],
          "note": "写法 05 要速度时可用。"
        },
        {
          "id": "frontiers_bioinfo",
          "name": "Frontiers in Bioinformatics",
          "publisher": "Frontiers",
          "xr": {
            "edition": "2026-03",
            "major": "生物学",
            "zone": 3,
            "top": false
          },
          "track": "菌群/方法",
          "ease": "高",
          "cycle": "常见约 1–3 个月",
          "fit_label": "生信方法快刊",
          "accepts": [
            "多队列流程/工具",
            "菌群计算管道"
          ],
          "avoid": [
            "空洞 novelty"
          ],
          "our_types": [
            "03",
            "04"
          ],
          "note": "方法包完整即可冲速度。"
        },
        {
          "id": "frontiers_aging",
          "name": "Frontiers in Aging",
          "publisher": "Frontiers",
          "xr": {
            "edition": "2026-03",
            "major": "医学",
            "zone": 3,
            "top": false
          },
          "track": "骨质疏松",
          "ease": "高",
          "cycle": "常见约 1–3 个月",
          "fit_label": "衰老快刊",
          "accepts": [
            "老年骨健康/风险预测"
          ],
          "avoid": [
            "题目不贴衰老"
          ],
          "our_types": [
            "02"
          ],
          "note": "骨质疏松老年叙事 + 要速度。"
        },
        {
          "id": "jmir_med_inform",
          "name": "JMIR Medical Informatics",
          "publisher": "JMIR Publications",
          "xr": {
            "edition": "2026-03",
            "major": "医学",
            "zone": 2,
            "top": false
          },
          "track": "数字医学",
          "ease": "中",
          "cycle": "常见约 2–4 个月（比 Frontiers 略慢）",
          "fit_label": "信息学二区 · 稍稳",
          "accepts": [
            "临床信息学",
            "公开调查/EHR 预测",
            "可部署工具"
          ],
          "avoid": [
            "与 JMIR 主刊混淆对外承诺一区"
          ],
          "our_types": [
            "02",
            "01"
          ],
          "note": "比 Frontiers 稍难一点，但单位认可度往往更好问。"
        },
        {
          "id": "bmc_midm",
          "name": "BMC Medical Informatics and Decision Making",
          "publisher": "BMC",
          "xr": {
            "edition": "2026-03",
            "major": "医学",
            "zone": 2,
            "top": false
          },
          "track": "数字医学",
          "ease": "中",
          "cycle": "常见约 2–5 个月（有时偏慢）",
          "fit_label": "BMC 信息学 · 稳妥",
          "accepts": [
            "医学信息学",
            "决策支持",
            "风险模型评价"
          ],
          "avoid": [
            "指望「两周就中」"
          ],
          "our_types": [
            "02",
            "01"
          ],
          "note": "国人友好；周期不如 Frontiers/MDPI，但认定常更稳。"
        }
      ]
    },
    {
      "id": "path_pick",
      "name": "按路径怎么选",
      "blurb": "开会时只推 1 主投 + 1 保底，别一次甩十几本。",
      "journals": [
        {
          "id": "pick_osteo",
          "name": "骨质疏松 / NHANES",
          "publisher": "—",
          "xr": {
            "edition": "2026-03",
            "major": "选刊组合",
            "zone": null,
            "top": false
          },
          "track": "骨质疏松",
          "ease": "—",
          "cycle": "要速度：公卫/营养线",
          "fit_label": "主投→保底",
          "accepts": [
            "主投：Frontiers in Digital Health 或 Nutrition / Endocrinology",
            "保底：Frontiers in Public Health 或 Aging"
          ],
          "avoid": [
            "一上来承诺 npj DigMed / Bone 顶刊周期"
          ],
          "our_types": [
            "02"
          ],
          "note": "单位若排斥 Frontiers，改 JMIR Med Inform / BMC MIDM。"
        },
        {
          "id": "pick_crc",
          "name": "结直肠菌群",
          "publisher": "—",
          "xr": {
            "edition": "2026-03",
            "major": "选刊组合",
            "zone": null,
            "top": false
          },
          "track": "菌群",
          "ease": "—",
          "cycle": "要速度：Frontiers 微生物/生信",
          "fit_label": "主投→保底",
          "accepts": [
            "主投：Frontiers in Microbiology",
            "保底：Frontiers in Bioinformatics 或 PeerJ"
          ],
          "avoid": [
            "把 Gut / Microbiome 一区说成「好投快」"
          ],
          "our_types": [
            "03"
          ],
          "note": "真要冲 Microbiome/npj Biofilms，别放进「好投快」叙事。"
        },
        {
          "id": "pick_img",
          "name": "公开影像 / YOLO",
          "publisher": "—",
          "xr": {
            "edition": "2026-03",
            "major": "选刊组合",
            "zone": null,
            "top": false
          },
          "track": "公开影像",
          "ease": "—",
          "cycle": "要速度：Frontiers/MDPI",
          "fit_label": "主投→保底",
          "accepts": [
            "主投：Frontiers in Bioengineering 或 Oncology（肿瘤题）",
            "保底：Diagnostics / Sensors / Medical Technology"
          ],
          "avoid": [
            "MedIA / IEEE TMI 当快刊推销"
          ],
          "our_types": [
            "05"
          ],
          "note": "客户要医学分区：优先 Oncology / Diagnostics / MedTech，慎用 IEEE Access。"
        },
        {
          "id": "pick_digmed",
          "name": "数字医学多库预测",
          "publisher": "—",
          "xr": {
            "edition": "2026-03",
            "major": "选刊组合",
            "zone": null,
            "top": false
          },
          "track": "数字医学",
          "ease": "—",
          "cycle": "要速度：Frontiers；要认定：JMIR/BMC",
          "fit_label": "主投→保底",
          "accepts": [
            "主投：Frontiers in Digital Health 或 Medicine",
            "保底：Public Health；认定优先则 JMIR Med Inform"
          ],
          "avoid": [
            "把 npj DigMed 说成周期短好中"
          ],
          "our_types": [
            "01",
            "02",
            "04"
          ],
          "note": "一区数字医学可以冲，但不属于本页「好投快」清单。"
        }
      ]
    }
  ]
};
