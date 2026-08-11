# jiezhichang · 公开数据成稿业务操作系统

线上：https://jiezhichang.onrender.com  
仓库：https://github.com/daguaishou0110/jiezhichang

## 信息架构

```text
业务（index）
├─ 医学交叉（track-medical）★
│  ├─ 写法 01–05（types / type-*）
│  ├─ 分区档 S/A/B（journals + MDPI QA）
│  └─ 路径卡：CRC / 骨质疏松 / 影像 YOLO
├─ 农业交叉（track-agri）薄入口
│  └─ agri-datasets + agri-papers
├─ 文科交叉（track-humanities）多分支
│  ├─ 经管/MBA · 金融 · 传播 · 语言 · 教育心理
│  ├─ 每支：写法 / 范文 / 数据集 / 成稿
│  └─ hum-types · hum-datasets · hum-papers · package-hum-*
└─ 计算机（track-cs）三种交付
   ├─ 返修（package-cs-revision）
   ├─ 硕论辅导（package-cs-thesis）
   └─ 会议/期刊辅导（package-cs-venue）
      · 能力底座仍挂写法 04/05 → 交叉路径卡
工具层：选刊 · 数据 · 成稿 · 组学成稿（paper-doctor）
```

## 主路径

1. **业务** — 接公开数据成稿，不接机制文主叙事  
2. **赛道** — 医学（主）/ 农业 / 文科 / 计算机  
3. **写法** — 医学 01–05；文科 H1–H5  
4. **分区档** — S 冲刺 / A 稳妥 / B 含 MDPI  
5. **路径卡** — 方案 + 数据 + 选刊 + 范文/成稿  

## 页面

| 文件 | 角色 |
|------|------|
| index.html | 业务中枢 + 四赛道 + 说服四步 |
| track-medical.html | 医学枢纽：路径卡 + 写法×分区 |
| track-agri.html | 农业枢纽 |
| track-humanities.html | 文科枢纽（五分支） |
| hum-types.html | 文科写法 H1–H5 |
| hum-datasets.html | 文科公开数据集（按分支） |
| hum-papers.html | 文科成稿卡 |
| package-hum-*.html | 文科分支路径卡 |
| agri-datasets.html | 农业公开数据集 |
| agri-papers.html | 农业 YOLO 成稿库 |
| track-cs.html | 计算机：返修 / 硕论 / 会刊辅导 |
| package-cs-revision.html | 返修骨架卡 |
| package-cs-thesis.html | 硕论辅导骨架卡 |
| package-cs-venue.html | 会议/期刊辅导（方向一级×二级） |
| ccf-conferences.html | CCF A/B/C 会议全量目录（2026 第七版） |
| cs-papers.html | 会刊辅导 · CV · 动作识别 · 本类成稿（摔跤） |
| package-imaging-yolo.html | 写法 05 路径卡 |
| crc-microbiome.html / osteoporosis.html | 写法 03 / 02 路径卡 |
| types.html + type-01…05 | 医学写法层 |
| journals.html | 选刊 / 分区 + MDPI QA |
| imaging-datasets.html | 影像数据 |
| imaging-papers.html | 医工成稿 |
| confidence.html / portal.html / two-paths.html | 底气 / 百科 / 分流 |

## 本地预览

打开 `index.html`，或 `npx serve .`

## Render

Static Site，Publish directory = `.`
