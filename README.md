# jiezhichang · 客户说服站

线上：https://jiezhichang.onrender.com  
仓库：https://github.com/daguaishou0110/jiezhichang

## 说服顺序（首页已按此排）

1. **选题** — 能接什么题（CRC / 骨质疏松）
2. **方案** — 问题、数据切分、明确不做
3. **一区标准** — 锁死外测 · 硬对照 · 校准 · 弱外测诚实
4. **范文** — 同类 DOI，对齐哪条标准

## 会上五分钟

认担心 → 给选择题（机制 vs 风险分层）→ 只落一题 → 摊四条标准 → 点 1～2 个 DOI → 停

## 页面

| 文件 | 角色 |
|------|------|
| index.html | **入口**：选题→方案→标准→范文 |
| types.html | **五种写法层级展开**（点开一类） |
| journals.html | **期刊调研**：收公开医学影像×计算方法的刊 + 范文 DOI + **2026 此类发文量** |
| data/journals-imaging-public.json | 期刊调研数据源 |
| data/journals-imaging-counts-2026.json | 各刊 2026 发文量（OpenAlex 估算） |
| data/journals-library.json / journals-survey.json | **已弃用** |
| crc-microbiome.html | 结直肠方案专页 |
| osteoporosis.html | 骨质疏松方案专页 |
| type-05.html#exemplars | 影像 npj 精选 11 篇 |
| confidence.html | 底气/证据（追问用） |
| portal.html | 写法百科大表（附录） |

## 本地预览

打开 `index.html`，或 `npx serve .`

## Render

Static Site，Publish directory = `.`
