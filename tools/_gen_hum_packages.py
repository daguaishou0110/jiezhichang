# -*- coding: utf-8 -*-
from pathlib import Path

root = Path(__file__).resolve().parents[1]

css = """
:root{--ink:#101820;--muted:#5a6770;--paper:#f0eee9;--card:#fff;--line:rgba(16,24,32,.12);--wine:#7a3e4a;--deep:#4a2430;--max:1000px}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:Sora,sans-serif;color:var(--ink);background:var(--paper);font-size:16px;line-height:1.65}
h1,h2,h3,.brand{font-family:Fraunces,serif;letter-spacing:-.02em;line-height:1.12}
a{color:var(--deep);text-underline-offset:3px}
.wrap{width:min(var(--max),calc(100% - 2.2rem));margin:0 auto}
.nav{position:sticky;top:0;z-index:40;backdrop-filter:blur(12px);background:rgba(240,238,233,.95);border-bottom:1px solid var(--line)}
.nav-inner{display:flex;flex-wrap:wrap;gap:.5rem 1rem;justify-content:space-between;align-items:center;padding:.7rem 0;font-size:.82rem}
.nav-brand{font-family:Fraunces,serif;font-weight:750;color:var(--deep);text-decoration:none;font-size:1.05rem}
.nav-links{display:flex;flex-wrap:wrap;gap:.4rem .75rem}
.nav-links a{text-decoration:none;color:var(--muted);font-weight:600}
.nav-links a.on,.nav-links a:hover{color:var(--wine)}
.hero{padding:2.2rem 0 1rem}
.kicker{font-size:.7rem;letter-spacing:.14em;text-transform:uppercase;font-weight:700;color:var(--wine);margin-bottom:.35rem}
.brand{font-size:clamp(1.8rem,4.2vw,2.6rem);font-weight:750;color:var(--deep);margin-bottom:.4rem}
.lead{color:var(--muted);max-width:54ch}
.badges{display:flex;flex-wrap:wrap;gap:.35rem;margin:.8rem 0 0}
.badge{font-size:.7rem;font-weight:700;padding:.2rem .55rem;border-radius:999px;background:#fff;border:1px solid var(--line);color:var(--muted)}
.badge.ok{background:#fce8ec;color:var(--wine);border-color:#e8b4be}
section{padding:1.4rem 0;scroll-margin-top:4rem}
h2{font-size:1.3rem;margin-bottom:.55rem;color:var(--deep)}
.card{background:var(--card);border:1px solid var(--line);border-radius:16px;padding:1.1rem;margin-bottom:.75rem}
.card h3{font-size:1.02rem;margin-bottom:.4rem}
.card p,.card li{color:var(--muted);font-size:.9rem}
.card ul{padding-left:1.1rem;display:grid;gap:.28rem}
.grid2{display:grid;grid-template-columns:1fr 1fr;gap:.75rem}
@media(max-width:800px){.grid2{grid-template-columns:1fr}}
.links{display:flex;flex-wrap:wrap;gap:.45rem;margin-top:.7rem}
.btn{display:inline-flex;padding:.55rem .9rem;border-radius:999px;font-weight:700;font-size:.84rem;text-decoration:none;border:1px solid var(--line);background:#fff;color:var(--ink)}
.btn.primary{background:var(--wine);color:#fff;border-color:transparent}
.tone{display:grid;grid-template-columns:1fr 1fr;gap:.7rem;margin-top:.7rem}
@media(max-width:800px){.tone{grid-template-columns:1fr}}
.tone div{border-radius:12px;padding:.85rem .95rem;font-size:.88rem}
.yes{background:#ecfdf5;border:1px solid #a7f3d0;color:#065f46}
.no{background:#fff7ed;border:1px solid #fdba74;color:#7c2d12}
.foot{padding:1.2rem 0 2rem;border-top:1px solid var(--line);color:var(--muted);font-size:.8rem}
"""

font = "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,750&family=Sora:wght@400;500;600;700&display=swap"


def page(fname, branch, bid, title, lead, badges, writing, exemplars, data_bits, papers_bits, yes, no):
    nav = f"""<nav class="nav"><div class="wrap nav-inner">
  <a class="nav-brand" href="index.html">解知常</a>
  <div class="nav-links">
    <a href="index.html">业务</a>
    <a href="track-humanities.html">文科交叉</a>
    <a class="on" href="{fname}">{branch}</a>
    <a href="hum-types.html">写法</a>
    <a href="hum-datasets.html#branch={bid}">数据</a>
    <a href="hum-papers.html#branch={bid}">成稿</a>
  </div>
</div></nav>"""
    html = f"""<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>{title} · 文科路径卡 · 解知常</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="{font}" rel="stylesheet" />
<style>{css}</style>
</head>
<body>
{nav}
<header class="hero wrap">
  <div class="kicker">路径卡 · 文科交叉 · {branch}</div>
  <div class="brand">{title}</div>
  <p class="lead">{lead}</p>
  <div class="badges">{badges}</div>
</header>
<main class="wrap">
  <section id="write">
    <h2>1 · 写法</h2>
    {writing}
  </section>
  <section id="ex">
    <h2>2 · 范文</h2>
    {exemplars}
  </section>
  <section id="data">
    <h2>3 · 数据集</h2>
    {data_bits}
  </section>
  <section id="papers">
    <h2>4 · 成稿</h2>
    {papers_bits}
  </section>
  <section>
    <h2>承诺边界</h2>
    <div class="tone">
      <div class="yes"><b>承诺：</b>{yes}</div>
      <div class="no"><b>不承诺：</b>{no}</div>
    </div>
    <div class="links">
      <a class="btn primary" href="track-humanities.html#{bid}">回文科枢纽</a>
      <a class="btn" href="hum-types.html">写法总表</a>
      <a class="btn" href="hum-datasets.html#branch={bid}">本支数据</a>
      <a class="btn" href="hum-papers.html#branch={bid}">本支成稿</a>
    </div>
  </section>
</main>
<footer class="foot"><div class="wrap">文科路径卡 · 写法 / 范文 / 数据 / 成稿</div></footer>
</body>
</html>
"""
    (root / fname).write_text(html, encoding="utf-8")
    print("wrote", fname)


page(
    "package-hum-mgmt.html",
    "经管 / MBA",
    "mgmt",
    "经管 / MBA 公开数据成稿",
    "卖的是可申请的社会调查 + 可核对的回归/博弈算例，不是空问卷故事。",
    '<span class="badge ok">H1 / H2 / H4</span><span class="badge">CGSS · CLDS · 碳电公开参数</span>',
    """<div class="card"><h3>主写法</h3><ul>
  <li><b>H1</b> 调查微观关联（劳动合同/社保 → 幸福感）</li>
  <li><b>H2</b> 多波次或区域外推</li>
  <li><b>H4</b> Stackelberg + 多省公开算例（管理科学）</li>
  </ul>
  <div class="links"><a class="btn" href="hum-types.html#h1">H1</a><a class="btn" href="hum-types.html#h4">H4</a></div></div>""",
    """<div class="card"><h3>同类逻辑（对客户讲）</h3><ul>
  <li>顶级刊社会调查幸福感/就业实证：强调变量表、稳健性、公开数据可申请。</li>
  <li>管理科学储能/园区博弈：公开政策参数 + 可复现算例，不靠私有台账。</li>
  <li>Water Resources and Economics：区域治理与资源经济投稿气质。</li>
  </ul><p>具体 DOI 进成稿包核对；会上先讲逻辑对齐，再点范文。</p></div>""",
    """<div class="grid2">
  <div class="card"><h3>微观（申请）</h3><ul><li>CGSS · CNSDA</li><li>CLDS · 中山社科</li><li>CFPS 备选</li></ul>
  <div class="links"><a class="btn primary" href="hum-datasets.html#branch=mgmt">打开数据卡</a></div></div>
  <div class="card"><h3>宏观 / 算例（公开）</h3><ul><li>World Bank / ILO</li><li>碳市场 · 绿电 · 消纳权重</li><li>OWID Energy</li></ul></div>
  </div>""",
    """<div class="card"><h3>库存成稿卡</h3><ul>
  <li>H-MBA01 劳动合同与社保 → 幸福感（CGSS）</li>
  <li>H-MS01 / H-MS02 零碳园区博弈与实证</li>
  <li>H-WRE01 水资源经济</li>
  </ul>
  <div class="links"><a class="btn primary" href="hum-papers.html#branch=mgmt">打开成稿库</a></div></div>""",
    "验证包（变量表/切分/稳健性或算例可复现）写进验收。",
    "保证录用某一本核心或 SCI；也不保证 CGSS 审核当天通过。",
)

page(
    "package-hum-finance.html",
    "金融 / AI+经济",
    "finance",
    "金融 / AI+经济 预测成稿",
    "信用、波动、压力预警：公开序列 + 锁死切分 + 硬基线 + 校准/解释。",
    '<span class="badge ok">写法 H5</span><span class="badge">UCI · FRED · 行情</span>',
    """<div class="card"><h3>主写法 H5</h3><ul>
  <li>开发/验证切分冻结；外测只评一次</li>
  <li>打过强基线（逻辑回归 / 树模型等）</li>
  <li>分类报校准；回归报误差分解；弱外测诚实</li>
  </ul>
  <div class="links"><a class="btn" href="hum-types.html#h5">打开 H5</a></div></div>""",
    """<div class="card"><h3>范文怎么用</h3><ul>
  <li>公开信用违约 / 可解释评分录用文：对齐「公开表 + 复现实验」</li>
  <li>宏观金融预警文：对齐 FRED 类公开特征，不吹私有行内库</li>
  <li>Sustainability / Mathematics 路径：经济叙事 + 可复现计算</li>
  </ul></div>""",
    """<div class="card"><h3>数据集</h3><ul>
  <li>UCI Credit / Default 类</li>
  <li>FRED 宏观序列</li>
  <li>公开行情（脚本固定下载日）</li>
  </ul>
  <div class="links"><a class="btn primary" href="hum-datasets.html#branch=finance">打开数据卡</a></div></div>""",
    """<div class="card"><h3>成稿</h3><ul>
  <li>H-FIN01 AI+经济多稿题库</li>
  <li>H-FIN02 信用 / 解释 / 波动 / 压力子题</li>
  </ul>
  <div class="links"><a class="btn primary" href="hum-papers.html#branch=finance">打开成稿库</a></div></div>""",
    "切分、基线、指标表写进验收。",
    "保证发顶刊或保证回测收益。",
)

page(
    "package-hum-comm.html",
    "计算传播",
    "comm",
    "计算传播成稿路径",
    "非问卷主路径：公开文本/网络 + 可复现指标。五套实验可按客户背景选型。",
    '<span class="badge ok">写法 H5</span><span class="badge">计算社科</span>',
    """<div class="card"><h3>主写法 H5</h3><ul>
  <li>语料快照固定；指标脚本可复现</li>
  <li>能不用深度学习就不用；传统 ML / 网络指标优先</li>
  <li>对照条件写清（AIGC vs 人工等）</li>
  </ul>
  <div class="links"><a class="btn" href="hum-types.html#h5">打开 H5</a></div></div>""",
    """<div class="card"><h3>范文</h3><ul>
  <li>计算传播 / 人机传播对照文：公开语料 + 透明测量</li>
  <li>谣言/级联网络文：网络指标与统计检验写死</li>
  <li>MDPI 传播向：方法可复制优先于故事煽情</li>
  </ul></div>""",
    """<div class="card"><h3>数据集</h3><ul>
  <li>子题锁定的公开微博/社交语料</li>
  <li>Zenodo 等 DOI 固化包</li>
  </ul>
  <div class="links"><a class="btn primary" href="hum-datasets.html#branch=comm">打开数据卡</a></div></div>""",
    """<div class="card"><h3>成稿</h3><ul>
  <li>H-COM01 五套实验题库（传播传媒新）</li>
  </ul>
  <div class="links"><a class="btn primary" href="hum-papers.html#branch=comm">打开成稿库</a></div></div>""",
    "语料清单、指标表、对照设计写进验收。",
    "保证申博或保证发 CSSCI。",
)

page(
    "package-hum-lang.html",
    "语言 / 出海政策",
    "lang",
    "语言政策与文化传播语料",
    "只用公开网页/开放语料；编码表与抓取清单可复现。",
    '<span class="badge ok">H1 / H5</span><span class="badge">语料编码</span>',
    """<div class="card"><h3>写法</h3><ul>
  <li><b>H1</b> 外显语言政策编码实证</li>
  <li><b>H5</b> 跨平台话语的计算语言学交叉</li>
  </ul>
  <div class="links"><a class="btn" href="hum-types.html#h1">H1</a><a class="btn" href="hum-types.html#h5">H5</a></div></div>""",
    """<div class="card"><h3>范文</h3><ul>
  <li>SAGE Open 类：企业语言政策 / 多语实践实证</li>
  <li>Frontiers in Communication：跨平台文化话语</li>
  </ul></div>""",
    """<div class="card"><h3>数据集</h3><ul>
  <li>出海企业官网多语公开文本（清单制）</li>
  <li>Common Crawl 等开放网页子集</li>
  </ul>
  <div class="links"><a class="btn primary" href="hum-datasets.html#branch=lang">打开数据卡</a></div></div>""",
    """<div class="card"><h3>成稿</h3><ul>
  <li>H-LANG01 出海民企语言政策</li>
  <li>H-LANG02 跨平台文化传播 · Frontiers</li>
  </ul>
  <div class="links"><a class="btn primary" href="hum-papers.html#branch=lang">打开成稿库</a></div></div>""",
    "codebook、清单、编码信度写进验收。",
    "保证发 SSCI 或保证企业合作数据。",
)

page(
    "package-hum-edupsy.html",
    "教育心理",
    "edupsy",
    "教育心理公开测评 / 筛查",
    "国际公开测评或开放表；ML 榜单要可复现切分与硬基线。",
    '<span class="badge ok">写法 H5</span><span class="badge">PISA · 公开心理表</span>',
    """<div class="card"><h3>主写法 H5</h3><ul>
  <li>锁切分；多模型对照；指标表固定</li>
  <li>教育叙事服务验证，不替代验证</li>
  </ul>
  <div class="links"><a class="btn" href="hum-types.html#h5">打开 H5</a></div></div>""",
    """<div class="card"><h3>范文</h3><ul>
  <li>Frontiers in Psychology：教育情境 + 可复现 ML</li>
  <li>PISA 二次分析类：国际测评公开库气质</li>
  </ul></div>""",
    """<div class="card"><h3>数据集</h3><ul>
  <li>OECD PISA</li>
  <li>学生心理健康公开表（成稿包锁定具体集）</li>
  <li>TIMSS / PIRLS 备选</li>
  </ul>
  <div class="links"><a class="btn primary" href="hum-datasets.html#branch=edupsy">打开数据卡</a></div></div>""",
    """<div class="card"><h3>成稿</h3><ul>
  <li>H-EDU01 学生抑郁筛查分类器榜单</li>
  </ul>
  <div class="links"><a class="btn primary" href="hum-papers.html#branch=edupsy">打开成稿库</a></div></div>""",
    "切分、基线、伦理声明（公开数据）写进验收。",
    "保证临床诊断效力或保证发一区心理刊。",
)

