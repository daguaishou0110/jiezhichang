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
└─ 计算机（track-cs）能力底座
工具层：选刊 · 数据 · 成稿 · 组学成稿（paper-doctor）
```

## 主路径

1. **业务** — 接公开数据成稿，不接机制文主叙事  
2. **赛道** — 医学（主）/ 农业 / 计算机  
3. **写法** — 验证协议 01–05  
4. **分区档** — S 冲刺 / A 稳妥 / B 含 MDPI  
5. **路径卡** — 方案 + 数据 + 选刊 + 范文/成稿  

## 页面

| 文件 | 角色 |
|------|------|
| index.html | 业务中枢 + 三赛道 + 说服四步 |
| track-medical.html | 医学枢纽：路径卡 + 写法×分区 |
| track-agri.html / track-cs.html | 农业 / 计算机薄入口 |
| package-imaging-yolo.html | 写法 05 路径卡 |
| crc-microbiome.html / osteoporosis.html | 写法 03 / 02 路径卡 |
| types.html + type-01…05 | 写法层 |
| journals.html | 选刊 / 分区 + MDPI QA |
| imaging-datasets.html | 影像数据（成稿推荐分层） |
| imaging-papers.html | 医工成稿 |
| confidence.html / portal.html / two-paths.html | 底气 / 百科 / 分流 |

## 本地预览

打开 `index.html`，或 `npx serve .`

## Render

Static Site，Publish directory = `.`
