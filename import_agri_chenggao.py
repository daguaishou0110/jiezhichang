# -*- coding: utf-8 -*-
"""Import agriculture chenggao papers into jiezhichang (tomato / tea / rice…)."""
from __future__ import annotations

import json
import re
import shutil
from datetime import date
from pathlib import Path

SRC_DOCS = Path(r"D:\hyf\freelance-work\niumayuan\2026\农业yolo数据集\docs")
SRC_JSON = SRC_DOCS / "chenggao_papers.json"
SRC_ASSETS = SRC_DOCS / "chenggao_assets"

DST_ROOT = Path(__file__).resolve().parent
DST_DIR = DST_ROOT / "agri-chenggao"
DST_ASSETS = DST_DIR / "chenggao_assets"
DST_JSON = DST_DIR / "papers.json"
DST_HTML = DST_ROOT / "agri-papers.html"

GROUP_LABELS = {
    "T": "番茄 / 茶叶检测",
    "R": "水稻 / 遥感",
}

AGRI_GROUPS = {"T", "R"}


def is_agri(p: dict) -> bool:
    gid = str(p.get("group") or "")
    pid = str(p.get("id") or "")
    if gid in AGRI_GROUPS:
        return True
    if pid.startswith(("T", "TEA", "R")):
        return True
    blob = " ".join(
        [
            pid,
            gid,
            str(p.get("local") or ""),
            str(p.get("paper_dir") or ""),
            str(p.get("direction") or ""),
            str(p.get("title") or ""),
        ]
    ).lower()
    agri_kw = (
        "tomato",
        "tea",
        "rice",
        "pear",
        "番茄",
        "茶叶",
        "水稻",
        "梨",
        "农业",
        "uav",
        "teanet",
    )
    return any(k in blob for k in agri_kw)


def status_class(st: str) -> str:
    s = st or ""
    if "成稿" in s or "可投" in s:
        return "ok"
    if "未" in s or "草稿" in s:
        return "warn"
    return "mid"


def esc(s: str) -> str:
    return (
        str(s or "")
        .replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace('"', "&quot;")
    )


def preview(abs_text: str, n: int = 140) -> str:
    t = re.sub(r"\s+", " ", abs_text or "").strip()
    return t if len(t) <= n else t[: n - 1] + "…"


def copy_figure(p: dict) -> str | None:
    fig = p.get("figure") or ""
    src = None
    if fig:
        cand = SRC_DOCS / fig
        if cand.is_file():
            src = cand
    if src is None:
        folder = SRC_ASSETS / p["id"]
        if folder.is_dir():
            pngs = sorted(folder.glob("*.png")) + sorted(folder.glob("*.jpg"))
            if pngs:
                src = pngs[0]
    if src is None:
        return None
    rel = f"chenggao_assets/{p['id']}/{src.name}"
    dst = DST_DIR / rel
    dst.parent.mkdir(parents=True, exist_ok=True)
    if not dst.exists() or dst.stat().st_size != src.stat().st_size:
        shutil.copy2(src, dst)
    return f"agri-chenggao/{rel}"


def build_html(papers: list[dict]) -> str:
    by_g: dict[str, list] = {}
    for p in papers:
        by_g.setdefault(p.get("group") or "Z", []).append(p)

    sections = []
    for g in sorted(by_g.keys()):
        label = GROUP_LABELS.get(g, f"分组 {g}")
        cards = []
        for p in by_g[g]:
            fig = p.get("_web_figure") or ""
            media = (
                f'<img class="thumb" src="{esc(fig)}" alt="model" loading="lazy" />'
                if fig
                else '<div class="thumb empty">暂无框架图</div>'
            )
            method = p.get("method") or p.get("id")
            cards.append(
                f"""
<article class="card" data-id="{esc(p['id'])}" tabindex="0" role="button">
  <div class="card-media">{media}</div>
  <div class="card-body">
    <div class="row"><span class="id">{esc(p['id'])}</span>
      <span class="st {status_class(p.get('status',''))}">{esc(p.get('status') or '')}</span></div>
    <h3>{esc(method)}</h3>
    <p class="dir">{esc(p.get('direction') or '')}</p>
    <p class="meta-line">{esc(p.get('journal') or '')} · {esc(p.get('cas') or '')}</p>
    <p class="abs-preview">{esc(preview(p.get('abstract') or ''))}</p>
    <span class="more">点击查看完整摘要与模型图 →</span>
  </div>
</article>"""
            )
        sections.append(
            f"<section id='g-{esc(g)}'><h2>{esc(label)} <small>{len(by_g[g])}</small></h2>"
            f"<div class='grid'>{''.join(cards)}</div></section>"
        )

    papers_js = json.dumps(
        [
            {k: v for k, v in p.items() if not k.startswith("_")}
            | {"figure": p.get("_web_figure") or p.get("figure") or ""}
            for p in papers
        ],
        ensure_ascii=False,
    )
    today = date.today().isoformat()

    return f"""<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>农业交叉成稿库 · 解知常</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,750&family=Sora:wght@400;500;600;700&display=swap" rel="stylesheet" />
<style>
:root {{
  --bg:#f3f0e8; --ink:#1a1712; --muted:#6b6358; --line:rgba(26,23,18,.12); --card:#fffdf8;
  --acc:#9a3412; --deep:#7c2d12; --ok:#065f46; --warn:#9a3412;
}}
* {{ box-sizing:border-box; margin:0; padding:0; }}
body {{
  color:var(--ink); font-family:Sora,sans-serif; background:var(--bg); line-height:1.55; font-size:15px;
}}
h1,h2,h3,.brand {{ font-family:Fraunces,serif; letter-spacing:-.02em; }}
a {{ color:var(--deep); text-underline-offset:3px; }}
.wrap {{ width:min(1100px, calc(100% - 2rem)); margin:0 auto; }}
.nav {{ position:sticky; top:0; z-index:40; backdrop-filter:blur(12px); background:rgba(243,240,232,.95); border-bottom:1px solid var(--line); }}
.nav-inner {{ display:flex; flex-wrap:wrap; gap:.5rem 1rem; justify-content:space-between; align-items:center; padding:.7rem 0; font-size:.82rem; }}
.nav-brand {{ font-family:Fraunces,serif; font-weight:750; color:var(--deep); text-decoration:none; font-size:1.05rem; }}
.nav-links {{ display:flex; flex-wrap:wrap; gap:.4rem .75rem; }}
.nav-links a {{ text-decoration:none; color:var(--muted); font-weight:600; }}
.nav-links a.on, .nav-links a:hover {{ color:var(--acc); }}
header.page {{ padding:1.6rem 0 1rem; }}
.kicker {{ font-size:.7rem; letter-spacing:.14em; text-transform:uppercase; font-weight:700; color:var(--acc); margin-bottom:.35rem; }}
h1 {{ font-size:clamp(1.55rem,3.5vw,2.15rem); color:var(--deep); margin-bottom:.4rem; }}
.lead {{ color:var(--muted); max-width:62ch; font-size:.92rem; }}
.warn {{ margin-top:.7rem; padding:.7rem .85rem; border-radius:12px; background:#fff7ed; border:1px solid #fdba74; color:#7c2d12; font-size:.84rem; }}
.chips {{ display:flex; flex-wrap:wrap; gap:.45rem; margin:.8rem 0; }}
.chip {{ background:var(--card); border:1px solid var(--line); border-radius:999px; padding:.28rem .7rem; font-size:.8rem; color:var(--muted); }}
.chip b {{ color:var(--deep); }}
.tools {{ display:flex; flex-wrap:wrap; gap:.55rem; align-items:center; margin-bottom:1rem; }}
.tools input {{ flex:1; min-width:200px; border:1px solid var(--line); border-radius:10px; padding:.55rem .8rem; font:inherit; background:#fff; }}
.tools a {{ text-decoration:none; color:var(--muted); border:1px solid var(--line); background:#fff; padding:.45rem .75rem; border-radius:999px; font-size:.8rem; font-weight:700; }}
.tools a:hover {{ color:var(--acc); }}
section {{ margin:1.4rem 0 1.8rem; }}
h2 {{ font-size:1.08rem; color:var(--deep); margin:0 0 .7rem; }}
h2 small {{ color:var(--muted); font-weight:600; }}
.grid {{ display:grid; grid-template-columns:repeat(auto-fill,minmax(280px,1fr)); gap:.85rem; }}
.card {{
  background:var(--card); border:1px solid var(--line); border-radius:14px; overflow:hidden;
  cursor:pointer; display:flex; flex-direction:column; transition:transform .15s, border-color .15s;
}}
.card:hover, .card:focus {{ transform:translateY(-2px); border-color:#fdba74; outline:none; }}
.card-media {{ background:#2a2118; min-height:140px; display:flex; align-items:center; justify-content:center; }}
.thumb {{ width:100%; max-height:170px; object-fit:contain; display:block; background:#2a2118; }}
.thumb.empty {{ color:#c4b5a0; font-size:.82rem; min-height:140px; display:flex; align-items:center; justify-content:center; width:100%; }}
.card-body {{ padding:.85rem .95rem 1rem; display:flex; flex-direction:column; gap:.3rem; flex:1; }}
.row {{ display:flex; justify-content:space-between; align-items:center; gap:.5rem; }}
.id {{ font-weight:800; color:var(--acc); }}
.card-body h3 {{ font-size:1rem; }}
.dir {{ color:var(--muted); font-size:.86rem; }}
.meta-line {{ font-size:.78rem; color:#3d4b57; }}
.abs-preview {{ font-size:.8rem; color:#475569; display:-webkit-box; -webkit-line-clamp:3; -webkit-box-orient:vertical; overflow:hidden; }}
.more {{ margin-top:auto; padding-top:.35rem; font-size:.8rem; font-weight:700; color:var(--acc); }}
.st {{ display:inline-block; padding:.1rem .4rem; border-radius:999px; font-size:.7rem; font-weight:700; }}
.st.ok {{ background:#ecfdf5; color:var(--ok); }}
.st.warn {{ background:#ffedd5; color:var(--warn); }}
.st.mid {{ background:#eef2ff; color:#3730a3; }}
.hidden {{ display:none !important; }}
.foot {{ padding:1.2rem 0 2rem; color:var(--muted); font-size:.78rem; border-top:1px solid var(--line); }}
.backdrop {{
  position:fixed; inset:0; background:rgba(20,14,8,.55); display:none; align-items:flex-start;
  justify-content:center; padding:3vh 1rem; z-index:50; overflow:auto;
}}
.backdrop.open {{ display:flex; }}
.modal {{
  width:min(960px,100%); background:var(--card); border-radius:16px; border:1px solid var(--line);
  box-shadow:0 20px 60px rgba(0,0,0,.28); overflow:hidden; margin-bottom:4vh;
}}
.modal-head {{
  display:flex; justify-content:space-between; gap:1rem; padding:1rem 1.1rem; border-bottom:1px solid var(--line);
}}
.modal-head h2 {{ margin:0; font-size:1.15rem; color:var(--deep); }}
.modal-head .sub {{ color:var(--muted); font-size:.86rem; margin-top:.25rem; }}
.close {{
  border:1px solid var(--line); background:#fff; border-radius:8px; width:36px; height:36px;
  font-size:1.2rem; cursor:pointer; line-height:1;
}}
.modal-body {{ display:grid; grid-template-columns:1.05fr .95fr; gap:0; }}
@media (max-width:860px) {{ .modal-body {{ grid-template-columns:1fr; }} }}
.modal-fig {{ background:#2a2118; min-height:260px; display:flex; align-items:center; justify-content:center; padding:1rem; }}
.modal-fig img {{ max-width:100%; max-height:min(70vh,520px); object-fit:contain; }}
.modal-fig .note {{ color:#c4b5a0; padding:2rem; text-align:center; }}
.modal-text {{ padding:1.05rem 1.15rem 1.25rem; }}
.kv {{ display:grid; grid-template-columns:5.2rem 1fr; gap:.25rem .55rem; font-size:.86rem; margin-bottom:.9rem; }}
.kv dt {{ color:var(--muted); }}
.kv dd {{ margin:0; }}
.abstract h3 {{ margin:0 0 .45rem; font-size:.95rem; color:var(--acc); }}
.abstract {{ font-size:.9rem; color:#1f2937; }}
</style>
</head>
<body>
<nav class="nav"><div class="wrap nav-inner">
  <a class="nav-brand" href="index.html">解知常</a>
  <div class="nav-links">
    <a href="index.html">业务</a>
    <a href="track-agri.html">农业交叉</a>
    <a href="agri-datasets.html">农业数据</a>
    <a class="on" href="agri-papers.html">农业成稿</a>
    <a href="imaging-papers.html">医工成稿</a>
    <a href="types.html">写法</a>
  </div>
</div></nav>

<header class="page wrap">
  <div class="kicker">Agriculture × CS manuscripts</div>
  <h1>农业交叉成稿库</h1>
  <p class="lead">列表点进看英文摘要与模型图。收录番茄、茶叶、水稻等农业 YOLO 成稿；医学条目在医工成稿库。</p>
  <div class="warn">本页从本地农业 YOLO 成稿表筛选导入（分组 T / R）。公开数据集见「农业数据」。</div>
  <div class="chips">
    <span class="chip">农业成稿 <b>{len(papers)}</b></span>
    <span class="chip">更新 <b>{today}</b></span>
    <span class="chip">对应 track-agri</span>
  </div>
  <div class="tools">
    <input id="q" type="search" placeholder="搜索题目 / 方法名 / 方向 / 期刊…" />
    <a href="agri-datasets.html">农业数据集</a>
    <a href="track-agri.html">农业交叉</a>
    <a href="imaging-papers.html">医工成稿</a>
  </div>
</header>

<main class="wrap">
{''.join(sections)}
</main>

<div class="backdrop" id="backdrop" aria-hidden="true">
  <div class="modal" role="dialog" aria-modal="true" aria-labelledby="mTitle">
    <div class="modal-head">
      <div>
        <h2 id="mTitle">—</h2>
        <div class="sub" id="mSub"></div>
      </div>
      <button class="close" type="button" id="btnClose" aria-label="关闭">×</button>
    </div>
    <div class="modal-body">
      <div class="modal-fig" id="mFig"><div class="note">暂无框架图</div></div>
      <div class="modal-text">
        <dl class="kv" id="mKv"></dl>
        <div class="abstract"><h3>Abstract</h3><div id="mAbs"></div></div>
      </div>
    </div>
  </div>
</div>

<footer class="foot"><div class="wrap">数据源：农业yolo数据集/docs/chenggao_papers.json（农业子集） · 图：agri-chenggao/chenggao_assets/</div></footer>

<script>
const PAPERS = {papers_js};
const byId = Object.fromEntries(PAPERS.map(p => [p.id, p]));
const qEl = document.getElementById('q');
const backdrop = document.getElementById('backdrop');

function openModal(id) {{
  const p = byId[id]; if (!p) return;
  document.getElementById('mTitle').textContent = p.method || p.id;
  document.getElementById('mSub').textContent = (p.direction || '') + (p.status ? ' · ' + p.status : '');
  const fig = document.getElementById('mFig');
  if (p.figure) fig.innerHTML = '<img src="' + p.figure + '" alt="framework" />';
  else fig.innerHTML = '<div class="note">暂无框架图</div>';
  const kv = [
    ['ID', p.id], ['期刊', p.journal || '—'], ['分区', p.cas || '—'],
    ['备选刊', p.alt_journal || '—'], ['数据', p.dataset || '—'], ['本地', p.local || p.paper_dir || '—']
  ];
  document.getElementById('mKv').innerHTML = kv.map(([k,v]) => '<dt>'+k+'</dt><dd>'+String(v).replace(/</g,'&lt;')+'</dd>').join('');
  document.getElementById('mAbs').textContent = p.abstract || '（暂无摘要）';
  backdrop.classList.add('open'); backdrop.setAttribute('aria-hidden','false');
}}
function closeModal() {{ backdrop.classList.remove('open'); backdrop.setAttribute('aria-hidden','true'); }}

document.querySelectorAll('.card').forEach(card => {{
  card.addEventListener('click', () => openModal(card.dataset.id));
  card.addEventListener('keydown', e => {{ if (e.key === 'Enter' || e.key === ' ') {{ e.preventDefault(); openModal(card.dataset.id); }} }});
}});
document.getElementById('btnClose').onclick = closeModal;
backdrop.addEventListener('click', e => {{ if (e.target === backdrop) closeModal(); }});
document.addEventListener('keydown', e => {{ if (e.key === 'Escape') closeModal(); }});

qEl.addEventListener('input', () => {{
  const s = qEl.value.trim().toLowerCase();
  document.querySelectorAll('.card').forEach(card => {{
    const p = byId[card.dataset.id] || {{}};
    const blob = [p.id,p.method,p.direction,p.title,p.journal,p.dataset,p.abstract].join(' ').toLowerCase();
    card.classList.toggle('hidden', s && !blob.includes(s));
  }});
  document.querySelectorAll('main section').forEach(sec => {{
    const any = [...sec.querySelectorAll('.card')].some(c => !c.classList.contains('hidden'));
    sec.classList.toggle('hidden', s && !any);
  }});
}});
</script>
</body>
</html>
"""


def main() -> None:
    raw = json.loads(SRC_JSON.read_text(encoding="utf-8"))
    papers = [p for p in raw if is_agri(p)]
    DST_DIR.mkdir(parents=True, exist_ok=True)
    for p in papers:
        p["_web_figure"] = copy_figure(p)
    DST_JSON.write_text(json.dumps(papers, ensure_ascii=False, indent=2), encoding="utf-8")
    DST_HTML.write_text(build_html(papers), encoding="utf-8")
    print(f"agri papers={len(papers)} -> {DST_HTML}")
    print("ids", [p["id"] for p in papers])


if __name__ == "__main__":
    main()
