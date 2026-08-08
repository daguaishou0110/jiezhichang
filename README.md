# jiezhichang · 客户说服站（公开数据一区路径）

线上：https://jiezhichang.onrender.com  
仓库：https://github.com/daguaishou0110/jiezhichang

## 客户阅读顺序（会上）

1. `index.html` — 说服首页（两种路径 + 两个方案 + 真刊依据）
2. `crc-microbiome.html` / `osteoporosis.html` — 可买方案专页
3. `confidence.html` — 被追问时打开的底气/证据页
4. `portal.html` — 五种写法百科（附录，二次会议）

## 本地预览

用浏览器打开 `index.html`，或：

```bash
npx serve .
```

## 页面地图

| 文件 | 角色 |
|------|------|
| index.html | **入口**：说服漏斗 |
| two-paths.html | 两种一区展开版 |
| crc-microbiome.html | 结直肠菌群方案 |
| osteoporosis.html | 骨质疏松方案 |
| confidence.html | 底气与真刊证据 |
| portal.html | 写法百科（附录） |
| type-01…05.html | 单类详解 |
| lists/ | 完整期刊列表 |

## Render

Static Site，Publish directory = `.`（或用根目录 `render.yaml`）。
