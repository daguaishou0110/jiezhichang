# -*- coding: utf-8 -*-
"""Import thyroid-yolo papers_pass_frontiers (53) into medical imaging-papers gallery."""
from __future__ import annotations

import csv
import importlib.util
import json
import re
import shutil
from pathlib import Path

SRC_ROOT = Path(
    r"D:\hyf\freelance-work\niumayuan\2026\农业yolo数据集\thyroid-yolo\papers_pass_frontiers"
)
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

_med.GROUP_LABELS["B"] = "口腔全景 OPG"
_med.GROUP_LABELS["H"] = "甲状腺超声"


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
    for name in ("framework.png", "fig_model_architecture.png", "architecture.png"):
        p = figs / name
        if p.is_file():
            return p
    pngs = sorted(figs.glob("*.png")) if figs.is_dir() else []
    return pngs[0] if pngs else None


def load_index() -> list[dict]:
    rows = []
    with (SRC_ROOT / "INDEX.csv").open(encoding="utf-8") as f:
        for r in csv.DictReader(f):
            if not (r.get("dir") or "").strip():
                continue
            rows.append(r)
    return rows


def build_thy_papers() -> list[dict]:
    out = []
    for i, r in enumerate(load_index(), start=1):
        dname = r["dir"].strip()
        paper_dir = SRC_ROOT / dname
        if not paper_dir.is_dir():
            print("missing", dname)
            continue
        meta_path = paper_dir / "meta.json"
        meta = json.loads(meta_path.read_text(encoding="utf-8")) if meta_path.is_file() else {}
        method = (r.get("method") or meta.get("method") or dname).strip()
        m1 = (r.get("m1") or meta.get("m1") or "").strip()
        m2 = (r.get("m2") or meta.get("m2") or "").strip()
        gate = (r.get("gate") or "").strip()
        try:
            map50 = float(r.get("map50") or meta.get("map50") or 0)
        except Exception:
            map50 = float(meta.get("map50") or 0)
        if map50 <= 1.5:
            map50_pct = map50 * 100 if map50 <= 1.0 else map50
        else:
            map50_pct = map50

        abs_text = extract_abstract(paper_dir / "manuscript.tex")
        if not abs_text:
            for cand in paper_dir.glob("*.tex"):
                abs_text = extract_abstract(cand)
                if abs_text:
                    break

        pid = f"THY{i:02d}"
        fig_src = pick_figure(paper_dir)
        web_fig = ""
        if fig_src:
            rel = f"chenggao_assets/{pid}/{fig_src.name}"
            dst = DST_DIR / rel
            dst.parent.mkdir(parents=True, exist_ok=True)
            if not dst.exists() or dst.stat().st_size != fig_src.stat().st_size:
                shutil.copy2(fig_src, dst)
            web_fig = f"imaging-chenggao/{rel}"

        mods = " + ".join(x for x in (m1, m2) if x) or "dual-module"
        title = f"{method}: Dual-module YOLO for thyroid ultrasound nodule detection"
        out.append(
            {
                "id": pid,
                "title": title,
                "direction": "甲状腺超声结节检测",
                "dataset": "甲状腺超声公开/项目检测集",
                "journal": "Frontiers in Medicine（PASS 包装）",
                "alt_journal": "Sensors (MDPI)；Ultrasound in Medicine & Biology；BMC Medical Imaging",
                "cas": "三区（可冲二区下）",
                "status": "成稿",
                "local": f"thyroid-yolo/papers_pass_frontiers/{dname}",
                "paper_dir": f"thyroid-yolo/papers_pass_frontiers/{dname}",
                "method": method,
                "abstract": abs_text
                or (
                    f"Thyroid ultrasound nodule detection with dual-module YOLO "
                    f"({mods}). Primary metric mAP@0.5 = {map50_pct:.2f}%."
                    + (f" Gate: {gate}." if gate else "")
                ),
                "figure": web_fig,
                "figure_note": "",
                "group": "H",
                "map50": round(map50_pct, 2),
                "gate": gate,
            }
        )
    return out


def main() -> None:
    existing = []
    if DST_JSON.is_file():
        existing = json.loads(DST_JSON.read_text(encoding="utf-8"))
    kept = [p for p in existing if not str(p.get("id", "")).startswith("THY")]
    thy = build_thy_papers()
    merged = kept + thy
    for p in merged:
        if p.get("figure") and not p.get("_web_figure"):
            p["_web_figure"] = p["figure"]

    DST_DIR.mkdir(parents=True, exist_ok=True)
    clean = [{k: v for k, v in p.items() if not k.startswith("_")} for p in merged]
    DST_JSON.write_text(json.dumps(clean, ensure_ascii=False, indent=2), encoding="utf-8")

    for p in merged:
        p["_web_figure"] = p.get("figure") or ""
    html = _med.build_html(merged)
    html = html.replace(
        """  <div class="nav-links">
    <a href="index.html">首页</a>
    <a href="journals.html">期刊调研</a>
    <a class="on" href="imaging-papers.html">医工成稿</a>
    <a href="https://paper-doctor.onrender.com/" target="_blank" rel="noopener">组学成稿库</a>
    <a href="journals.html#mdpi-qa">MDPI桌拒QA</a>
  </div>""",
        """  <div class="nav-links">
    <a href="index.html">业务</a>
    <a href="track-medical.html">医学交叉</a>
    <a href="types.html">写法</a>
    <a href="journals.html">选刊</a>
    <a href="imaging-datasets.html">数据</a>
    <a class="on" href="imaging-papers.html">成稿</a>
    <a href="agri-papers.html">农业成稿</a>
    <a href="https://paper-doctor.onrender.com/" target="_blank" rel="noopener">组学成稿</a>
  </div>""",
    )
    html = html.replace(
        "仅收录<strong>医学 / 医工交叉</strong>成稿；农业（番茄、茶叶、水稻等）与工业检测已排除。",
        "仅收录<strong>医学 / 医工交叉</strong>成稿；含口腔 OPG 与甲状腺超声 Frontiers PASS。农业成稿见农业库。",
    )
    html = html.replace(
        "不含番茄/茶叶/水稻/梨/钢丝绳等非医学条目。",
        "甲状腺组 THY01–THY53 来自 thyroid-yolo/papers_pass_frontiers；按 INDEX 排序。",
    )
    # also update if oral text already replaced
    if "甲状腺" not in html:
        html = html.replace(
            "口腔组含 papers_pass_frontiers 共 39 套；按 mAP@0.5 排序展示。",
            "口腔 OPG 39 套 + 甲状腺超声 53 套（Frontiers PASS）；按 INDEX / mAP 展示。",
        )
    DST_HTML.write_text(html, encoding="utf-8")
    print(f"kept={len(kept)} thy={len(thy)} total={len(merged)} -> {DST_HTML.name}")


if __name__ == "__main__":
    main()
