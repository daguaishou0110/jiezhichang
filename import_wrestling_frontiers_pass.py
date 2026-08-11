# -*- coding: utf-8 -*-
"""Import wrestling-yolo papers_pass_frontiers into CS papers gallery."""
from __future__ import annotations

import csv
import importlib.util
import json
import re
import shutil
from pathlib import Path

SRC_ROOT = Path(
    r"D:\hyf\freelance-work\niumayuan\2026\农业yolo数据集\wrestling-yolo\papers_pass_frontiers"
)
DST_ROOT = Path(__file__).resolve().parent
DST_DIR = DST_ROOT / "cs-chenggao"
DST_JSON = DST_DIR / "papers.json"
DST_HTML = DST_ROOT / "cs-papers.html"

_spec = importlib.util.spec_from_file_location(
    "med_imp", DST_ROOT / "import_medical_chenggao.py"
)
_med = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(_med)

_med.GROUP_LABELS = {
    "W": "摔跤动作识别",
}


def clean_tex(s: str) -> str:
    s = re.sub(r"\\cite\{[^}]*\}", "", s)
    s = re.sub(r"\\[a-zA-Z]+\*?(\[[^\]]*\])?(\{[^}]*\})?", "", s)
    s = s.replace("{", "").replace("}", "")
    s = re.sub(r"\s+", " ", s).strip()
    return s


def extract_abstract(tex_path: Path) -> str:
    if not tex_path.is_file():
        return ""
    tex = tex_path.read_text(encoding="utf-8", errors="ignore")
    m = re.search(r"\\begin\{abstract\}(.*?)\\end\{abstract\}", tex, re.S)
    return clean_tex(m.group(1)) if m else ""


def pick_figure(paper_dir: Path) -> Path | None:
    figs = paper_dir / "figures"
    for name in (
        "framework.png",
        "fig_model_architecture.png",
        "architecture.png",
        "framework_C01.png",
    ):
        p = figs / name
        if p.is_file():
            return p
    # prefer framework*
    if figs.is_dir():
        fw = sorted(figs.glob("framework*.png"))
        if fw:
            return fw[0]
        pngs = sorted(figs.glob("*.png"))
        return pngs[0] if pngs else None
    return None


def load_index() -> list[dict]:
    rows = []
    with (SRC_ROOT / "INDEX.csv").open(encoding="utf-8") as f:
        for r in csv.DictReader(f):
            if not (r.get("dir") or "").strip():
                continue
            rows.append(r)
    return rows


def build_wrestle_papers() -> list[dict]:
    out = []
    for i, r in enumerate(load_index(), start=1):
        dname = r["dir"].strip()
        paper_dir = SRC_ROOT / dname
        if not paper_dir.is_dir():
            print("missing", dname)
            continue
        method = (r.get("method") or dname).strip()
        m1 = (r.get("m1") or "").strip()
        m2 = (r.get("m2") or "").strip()
        gate = (r.get("gate") or "").strip()
        try:
            acc = float(r.get("val_acc") or 0)
        except Exception:
            acc = 0.0
        if acc <= 1.5:
            acc_pct = acc * 100 if acc <= 1.0 else acc
        else:
            acc_pct = acc

        abs_text = extract_abstract(paper_dir / "manuscript.tex")
        pid = f"WR{i:02d}"
        fig_src = pick_figure(paper_dir)
        web_fig = ""
        if fig_src:
            rel = f"chenggao_assets/{pid}/{fig_src.name}"
            dst = DST_DIR / rel
            dst.parent.mkdir(parents=True, exist_ok=True)
            if not dst.exists() or dst.stat().st_size != fig_src.stat().st_size:
                shutil.copy2(fig_src, dst)
            web_fig = f"cs-chenggao/{rel}"

        mods = " + ".join(x for x in (m1, m2) if x) or "dual-module"
        out.append(
            {
                "id": pid,
                "title": f"{method}: Dual-module network for wrestling action recognition",
                "direction": "摔跤动作 / 相位识别",
                "dataset": "摔跤动作视频项目集",
                "journal": "Frontiers（PASS 包装）",
                "alt_journal": "Sensors；Scientific Reports；体育工程向专刊",
                "cas": "按目标刊再定",
                "status": "成稿",
                "local": f"wrestling-yolo/papers_pass_frontiers/{dname}",
                "paper_dir": f"wrestling-yolo/papers_pass_frontiers/{dname}",
                "method": method,
                "abstract": abs_text
                or (
                    f"Wrestling action / phase recognition with dual-module design "
                    f"({mods}). Validation accuracy = {acc_pct:.2f}%."
                    + (f" Gate: {gate}." if gate else "")
                ),
                "figure": web_fig,
                "figure_note": "",
                "group": "W",
                "val_acc": round(acc_pct, 2),
                "gate": gate,
            }
        )
    return out


def main() -> None:
    existing = []
    if DST_JSON.is_file():
        existing = json.loads(DST_JSON.read_text(encoding="utf-8"))
    kept = [p for p in existing if not str(p.get("id", "")).startswith("WR")]
    wr = build_wrestle_papers()
    merged = kept + wr
    for p in merged:
        p["_web_figure"] = p.get("figure") or ""

    DST_DIR.mkdir(parents=True, exist_ok=True)
    clean = [{k: v for k, v in p.items() if not k.startswith("_")} for p in merged]
    DST_JSON.write_text(json.dumps(clean, ensure_ascii=False, indent=2), encoding="utf-8")

    html = _med.build_html(merged)
    html = html.replace("医工交叉成稿库 · 解知常", "CV · 动作识别成稿 · 解知常")
    html = html.replace("Medical imaging × CS manuscripts", "会议/期刊辅导 · 一级 CV · 二级 动作识别")
    html = html.replace("<h1>医工交叉成稿库</h1>", "<h1>本类成稿 · 动作识别</h1>")
    html = html.replace("--acc:#0c7a5f", "--acc:#0b6e8a")
    html = html.replace("--deep:#074d3d", "--deep:#0b4f63")
    html = html.replace("医学成稿", "本类成稿")

    old_nav = """  <div class="nav-links">
    <a href="index.html">首页</a>
    <a href="journals.html">期刊调研</a>
    <a class="on" href="imaging-papers.html">医工成稿</a>
    <a href="https://paper-doctor.onrender.com/" target="_blank" rel="noopener">组学成稿库</a>
    <a href="journals.html#mdpi-qa">MDPI桌拒QA</a>
  </div>"""
    new_nav = """  <div class="nav-links">
    <a href="index.html">业务</a>
    <a href="track-cs.html">计算机</a>
    <a href="package-cs-venue.html">会议/期刊辅导</a>
    <a href="package-cs-venue.html#cv">CV</a>
    <a class="on" href="cs-papers.html">动作识别成稿</a>
  </div>"""
    html = html.replace(old_nav, new_nav)

    html = html.replace(
        "列表点进看英文摘要与模型图。仅收录<strong>医学 / 医工交叉</strong>成稿；农业（番茄、茶叶、水稻等）与工业检测已排除。多癌种组学预后成稿见右侧组学库。",
        "不是计算机总库，只挂<strong>这一类</strong>样例：摔跤动作 / 相位识别 Frontiers PASS。回<a href=\"package-cs-venue.html#cv-action\">CV · 动作识别</a>。",
    )
    html = html.replace(
        "本页从本地 YOLO 医学项目成稿表筛选导入；不含番茄/茶叶/水稻/梨/钢丝绳等非医学条目。",
        "来源 wrestling-yolo/papers_pass_frontiers；主指标验证集准确率（非 mAP）。医工检测见<a href=\"imaging-papers.html\">医工成稿</a>。",
    )
    if "wrestling-yolo" not in html:
        html = html.replace(
            "不含番茄/茶叶/水稻/梨/钢丝绳等非医学条目。",
            "来源 wrestling-yolo/papers_pass_frontiers；主指标验证集准确率（非 mAP）。",
        )
    DST_HTML.write_text(html, encoding="utf-8")
    print(f"kept={len(kept)} wr={len(wr)} total={len(merged)} -> {DST_HTML.name}")


if __name__ == "__main__":
    main()
