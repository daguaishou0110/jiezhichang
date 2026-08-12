# -*- coding: utf-8 -*-
"""Import newly found medical manuscripts from 农业yolo数据集 into imaging gallery.

Batches:
  I  endometriosis-seg     子宫内膜异位 MRI 分割
  J  lgg-yolo              低级别胶质瘤 MRI 检测
  K  postpartum-lab-ml     产后检验恢复识别
  L  衰老房颤多组学         房颤衰老多组学
  M  骨质疏松               骨质疏松筛查（npj 向）
"""
from __future__ import annotations

import importlib.util
import json
import re
import shutil
from datetime import date
from pathlib import Path

SRC_ROOT = Path(r"D:\hyf\freelance-work\niumayuan\2026\农业yolo数据集")
DST_ROOT = Path(__file__).resolve().parent
DST_DIR = DST_ROOT / "imaging-chenggao"
DST_ASSETS = DST_DIR / "chenggao_assets"
DST_JSON = DST_DIR / "papers.json"
DST_HTML = DST_ROOT / "imaging-papers.html"

_spec = importlib.util.spec_from_file_location(
    "med_imp", DST_ROOT / "import_medical_chenggao.py"
)
_med = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(_med)

# extend labels used by build_html
_med.GROUP_LABELS.update(
    {
        "I": "子宫内膜异位 MRI 分割",
        "J": "低级别胶质瘤 MRI 检测",
        "K": "产后检验恢复识别",
        "L": "房颤衰老多组学",
        "M": "骨质疏松影像筛查",
    }
)

BATCHES = [
    {
        "group": "I",
        "id_prefix": "EMS",
        "direction": "子宫内膜异位症 MRI 分割",
        "dataset": "子宫内膜异位 MRI 分割公开/项目集",
        "journal": "Sensors (MDPI)",
        "alt_journal": "Frontiers in Medicine；BMC Medical Imaging",
        "cas": "三区（可冲二区下）",
        "roots": [SRC_ROOT / "endometriosis-seg"],
        "glob": "papers_pass/*/manuscript.tex",
    },
    {
        "group": "J",
        "id_prefix": "LGG",
        "direction": "低级别胶质瘤 MRI 肿瘤检测",
        "dataset": "LGG MRI 公开/项目检测集",
        "journal": "Frontiers in Medicine（PASS 包装）",
        "alt_journal": "Sensors (MDPI)；BMC Medical Imaging",
        "cas": "三区（可冲二区下）",
        "roots": [SRC_ROOT / "lgg-yolo"],
        "glob": "paper_*_lgg/manuscript.tex",
    },
    {
        "group": "K",
        "id_prefix": "PP",
        "direction": "产后多检验轨迹恢复识别",
        "dataset": "产后多检验时序 / 留出实验室验证",
        "journal": "Frontiers in Medicine",
        "alt_journal": "npj Digital Medicine；BMC Medical Informatics",
        "cas": "二区–一区（视验证强度）",
        "roots": [SRC_ROOT / "postpartum-lab-ml"],
        "glob": "paper_*/manuscript.tex",
    },
    {
        "group": "L",
        "id_prefix": "AFO",
        "direction": "房颤衰老相关多组学 / 转录组",
        "dataset": "GEO 等多数据库转录组",
        "journal": "Genes (MDPI)",
        "alt_journal": "Frontiers in Genetics；Aging",
        "cas": "三区",
        "roots": [SRC_ROOT / "衰老房颤多组学"],
        "glob": "paper_*/manuscript.tex",
    },
    {
        "group": "M",
        "id_prefix": "OP",
        "direction": "腰椎 X 线骨质疏松机会性筛查",
        "dataset": "多中心腰椎 X 线 / 外部验证",
        "journal": "npj Digital Medicine（目标）",
        "alt_journal": "Frontiers in Endocrinology；Osteoporosis International",
        "cas": "一区（目标）",
        "roots": [SRC_ROOT / "骨质疏松"],
        "glob": "paper_*/manuscript.tex",
    },
]

# Exact id patterns for this importer only (do NOT use startswith("OP") —
# that would wipe oral OPG* entries).
NEW_ID_RE = re.compile(r"^(EMS|LGG|PP|AFO|OP)\d+$")
NEW_GROUPS = {b["group"] for b in BATCHES}


def clean_tex(s: str) -> str:
    s = re.sub(r"\\cite\{[^}]*\}", "", s)
    s = re.sub(r"\\[a-zA-Z]+\*?(\[[^\]]*\])?(\{[^}]*\})?", "", s)
    s = s.replace("{", "").replace("}", "")
    s = re.sub(r"\s+", " ", s).strip()
    return s


def brace_content(tex: str, cmd: str) -> str:
    """Extract first {...} content after \\cmd or \\cmd[...]."""
    m = re.search(rf"\\{cmd}\s*(?:\[[^\]]*\])?\s*\{{", tex)
    if not m:
        return ""
    i = m.end() - 1
    depth = 0
    out = []
    for ch in tex[i:]:
        if ch == "{":
            depth += 1
            if depth == 1:
                continue
        elif ch == "}":
            depth -= 1
            if depth == 0:
                break
        if depth >= 1:
            out.append(ch)
    return "".join(out)


def extract_meta(tex_path: Path) -> dict:
    tex = tex_path.read_text(encoding="utf-8", errors="ignore")
    title = brace_content(tex, "Title") or brace_content(tex, "title")
    method = brace_content(tex, "method") or brace_content(tex, "newcommand")
    # method via \newcommand{\method}{X}
    mm = re.search(r"\\newcommand\{\\method\}\{([^}]*)\}", tex)
    if mm:
        method = mm.group(1).strip()
    abs_m = re.search(r"\\begin\{abstract\}(.*?)\\end\{abstract\}", tex, re.S | re.I)
    if abs_m:
        abstract = clean_tex(abs_m.group(1))
    else:
        # MDPI often uses \abstract{...}
        abstract = clean_tex(brace_content(tex, "abstract"))
    return {
        "title": clean_tex(title) or tex_path.parent.name,
        "method": clean_tex(method) or tex_path.parent.name,
        "abstract": abstract,
    }


def pick_figure(paper_dir: Path) -> Path | None:
    figs = paper_dir / "figures"
    for name in (
        "framework.png",
        "framework_overview.png",
        "fig_model_architecture.png",
        "architecture.png",
        "fig1.png",
    ):
        p = figs / name
        if p.is_file():
            return p
    if figs.is_dir():
        pngs = sorted(figs.glob("*.png")) + sorted(figs.glob("*.jpg"))
        if pngs:
            return pngs[0]
    # any image in paper dir
    for pat in ("*.png", "*.jpg"):
        hits = sorted(paper_dir.glob(pat))
        if hits:
            return hits[0]
    return None


def collect_batch(batch: dict) -> list[dict]:
    papers = []
    tex_files: list[Path] = []
    for root in batch["roots"]:
        if not root.is_dir():
            print("missing root", root)
            continue
        tex_files.extend(sorted(root.glob(batch["glob"])))
    # de-dup
    seen = set()
    uniq = []
    for t in tex_files:
        key = str(t.resolve())
        if key in seen:
            continue
        seen.add(key)
        uniq.append(t)

    for i, tex in enumerate(uniq, start=1):
        paper_dir = tex.parent
        meta = extract_meta(tex)
        pid = f"{batch['id_prefix']}{i:02d}"
        fig_src = pick_figure(paper_dir)
        web_fig = ""
        if fig_src:
            rel = f"chenggao_assets/{pid}/{fig_src.name}"
            dst = DST_DIR / rel
            dst.parent.mkdir(parents=True, exist_ok=True)
            if (not dst.exists()) or dst.stat().st_size != fig_src.stat().st_size:
                shutil.copy2(fig_src, dst)
            web_fig = f"imaging-chenggao/{rel}"

        try:
            rel_local = str(paper_dir.relative_to(SRC_ROOT)).replace("\\", "/")
        except ValueError:
            rel_local = str(paper_dir)

        papers.append(
            {
                "id": pid,
                "title": meta["title"],
                "direction": batch["direction"],
                "dataset": batch["dataset"],
                "journal": batch["journal"],
                "alt_journal": batch["alt_journal"],
                "cas": batch["cas"],
                "status": "成稿",
                "local": rel_local,
                "paper_dir": rel_local,
                "method": meta["method"],
                "abstract": meta["abstract"]
                or f"{meta['method']} manuscript for {batch['direction']}.",
                "figure": web_fig,
                "figure_note": "" if web_fig else "暂无框架图",
                "group": batch["group"],
            }
        )
        print(f"  {pid} {meta['method'][:40]} fig={'Y' if web_fig else 'N'}")
    return papers


def main() -> None:
    existing = []
    if DST_JSON.is_file():
        existing = json.loads(DST_JSON.read_text(encoding="utf-8"))
    kept = [
        p
        for p in existing
        if not NEW_ID_RE.match(str(p.get("id", "")))
        and str(p.get("group") or "") not in NEW_GROUPS
    ]

    new_papers: list[dict] = []
    for batch in BATCHES:
        print("batch", batch["group"], batch["direction"])
        new_papers.extend(collect_batch(batch))

    merged = kept + new_papers
    for p in merged:
        if p.get("figure") and not str(p["figure"]).startswith("imaging-chenggao/"):
            # normalize legacy relative paths
            if p["figure"].startswith("chenggao_assets/"):
                p["figure"] = "imaging-chenggao/" + p["figure"]

    DST_DIR.mkdir(parents=True, exist_ok=True)
    clean = [{k: v for k, v in p.items() if not k.startswith("_")} for p in merged]
    DST_JSON.write_text(json.dumps(clean, ensure_ascii=False, indent=2), encoding="utf-8")

    for p in merged:
        p["_web_figure"] = p.get("figure") or ""
    html = _med.build_html(merged)

    # refresh nav / lead / chips to current IA
    html = re.sub(
        r'<div class="nav-links">.*?</div>',
        """<div class="nav-links">
    <a href="index.html">业务</a>
    <a href="track-medical.html">医学交叉</a>
    <a href="types.html">写法</a>
    <a href="journals.html">选刊</a>
    <a href="imaging-datasets.html">数据</a>
    <a class="on" href="imaging-papers.html">成稿</a>
    <a href="agri-papers.html">农业成稿</a>
    <a href="https://paper-doctor.onrender.com/" target="_blank" rel="noopener">组学成稿</a>
  </div>""",
        html,
        count=1,
        flags=re.S,
    )
    today = date.today().isoformat()
    html = re.sub(
        r'<p class="lead">.*?</p>',
        '<p class="lead">列表点进看英文摘要与模型图。仅收录<strong>医学 / 医工交叉</strong>成稿；含口腔 OPG、甲状腺超声、子宫内膜异位 MRI、LGG、产后检验、房颤多组学与骨质疏松筛查。农业成稿见农业库。</p>',
        html,
        count=1,
        flags=re.S,
    )
    html = re.sub(
        r'<div class="warn">.*?</div>',
        '<div class="warn">本页从本地医学 YOLO / 分割 / 组学 / 风险预测成稿包导入；新增 I–M 组来自农业yolo数据集下的医学子目录。</div>',
        html,
        count=1,
        flags=re.S,
    )
    html = re.sub(
        r'<span class="chip">医学成稿 <b>\d+</b></span>',
        f'<span class="chip">医学成稿 <b>{len(merged)}</b></span>',
        html,
        count=1,
    )
    html = re.sub(
        r'<span class="chip">更新 <b>[^<]*</b></span>',
        f'<span class="chip">更新 <b>{today}</b></span>',
        html,
        count=1,
    )

    DST_HTML.write_text(html, encoding="utf-8")
    print(
        f"kept={len(kept)} new={len(new_papers)} total={len(merged)} -> {DST_HTML.name}"
    )


if __name__ == "__main__":
    main()
