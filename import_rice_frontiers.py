# -*- coding: utf-8 -*-
"""Import rice-yolo Frontiers packages into agri-papers gallery."""
from __future__ import annotations

import importlib.util
import json
import re
import shutil
from pathlib import Path

SRC_ROOT = Path(r"D:\hyf\freelance-work\niumayuan\2026\农业yolo数据集\rice-yolo")
DST_ROOT = Path(__file__).resolve().parent
DST_DIR = DST_ROOT / "agri-chenggao"
DST_JSON = DST_DIR / "papers.json"
DST_HTML = DST_ROOT / "agri-papers.html"

_spec = importlib.util.spec_from_file_location(
    "agri_imp", DST_ROOT / "import_agri_chenggao.py"
)
_agri = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(_agri)

_agri.GROUP_LABELS["T"] = "番茄 / 茶叶检测"
_agri.GROUP_LABELS["R"] = "水稻检测（含 R1）"
_agri.GROUP_LABELS["RF"] = "水稻 Frontiers PASS"


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


def extract_method(paper_dir: Path) -> str:
    tex = paper_dir / "manuscript.tex"
    if tex.is_file():
        t = tex.read_text(encoding="utf-8", errors="ignore")
        m = re.search(r"\\newcommand\{\\method\}\{([^}]+)\}", t)
        if m:
            return m.group(1).strip()
    # folder paper_acanet_frontiers -> ACA-Net guess
    name = paper_dir.name
    m = re.match(r"paper_([a-z0-9]+)_frontiers", name)
    if m:
        raw = m.group(1)
        return raw.upper() + "-Net" if not raw.upper().endswith("NET") else raw.upper()
    return name


def pick_figure(paper_dir: Path) -> Path | None:
    figs = paper_dir / "figures"
    for name in (
        "framework.png",
        "fig_model_architecture.png",
        "architecture.png",
    ):
        p = figs / name
        if p.is_file():
            return p
    if figs.is_dir():
        fw = sorted(figs.glob("framework*.png"))
        fw = [p for p in fw if "backup" not in p.name and "schematic" not in p.name]
        if fw:
            return fw[0]
        pngs = sorted(figs.glob("*.png"))
        return pngs[0] if pngs else None
    return None


def parse_index_metrics() -> dict[str, dict]:
    """folder -> {method, m1, m2, map50} from PAPERS_FRONTIERS_INDEX.md"""
    idx = SRC_ROOT / "PAPERS_FRONTIERS_INDEX.md"
    out: dict[str, dict] = {}
    if not idx.is_file():
        return out
    text = idx.read_text(encoding="utf-8", errors="ignore")
    # | DGF-Net | `paper_dgfnet_frontiers` | DynamicConv | GFPNLite | 91.23 | ...
    for m in re.finditer(
        r"\|\s*([A-Za-z0-9\-]+)\s*\|\s*`?(paper_[a-z0-9]+_frontiers)`?\s*\|\s*([^|]+)\|\s*([^|]+)\|(?:\s*([0-9.]+)\s*\|)?",
        text,
    ):
        method, folder, a, b, drpd = m.group(1), m.group(2), m.group(3).strip(), m.group(4).strip(), m.group(5)
        info = {"method": method, "m1": a, "m2": b}
        if drpd:
            try:
                info["map50"] = float(drpd)
            except ValueError:
                pass
        out[folder] = info
    return out


def list_packs() -> list[Path]:
    return sorted(
        d
        for d in SRC_ROOT.iterdir()
        if d.is_dir() and d.name.startswith("paper_") and d.name.endswith("_frontiers")
    )


def build_rice_papers() -> list[dict]:
    metrics = parse_index_metrics()
    out = []
    for i, paper_dir in enumerate(list_packs(), start=1):
        meta = metrics.get(paper_dir.name, {})
        method = meta.get("method") or extract_method(paper_dir)
        m1 = meta.get("m1", "")
        m2 = meta.get("m2", "")
        map50 = meta.get("map50")
        abs_text = extract_abstract(paper_dir / "manuscript.tex")
        pid = f"RF{i:02d}"
        fig_src = pick_figure(paper_dir)
        web_fig = ""
        if fig_src:
            rel = f"chenggao_assets/{pid}/{fig_src.name}"
            dst = DST_DIR / rel
            dst.parent.mkdir(parents=True, exist_ok=True)
            if not dst.exists() or dst.stat().st_size != fig_src.stat().st_size:
                shutil.copy2(fig_src, dst)
            web_fig = f"agri-chenggao/{rel}"

        mods = " + ".join(x for x in (m1, m2) if x) or "dual-module"
        metric_line = f" DRPD mAP@0.5 = {map50:.2f}%." if map50 is not None else ""
        out.append(
            {
                "id": pid,
                "title": f"{method}: Dual-module YOLO for rice pest/disease detection",
                "direction": "水稻病虫害 / 多公开集检测",
                "dataset": "DRPD / BD / WANG 等水稻公开检测集",
                "journal": "Frontiers in Plant Science（PASS 包装）",
                "alt_journal": "Sensors；Remote Sensing；Agriculture (MDPI)",
                "cas": "按目标刊再定",
                "status": "成稿",
                "local": f"rice-yolo/{paper_dir.name}",
                "paper_dir": f"rice-yolo/{paper_dir.name}",
                "method": method,
                "abstract": abs_text
                or (
                    f"Rice pest/disease detection with dual-module YOLO ({mods})."
                    + metric_line
                ),
                "figure": web_fig,
                "figure_note": "",
                "group": "RF",
                "map50": map50,
                "m1": m1,
                "m2": m2,
            }
        )
    return out


def main() -> None:
    existing = []
    if DST_JSON.is_file():
        existing = json.loads(DST_JSON.read_text(encoding="utf-8"))
    kept = [p for p in existing if not str(p.get("id", "")).startswith("RF")]
    rice = build_rice_papers()
    merged = kept + rice
    for p in merged:
        p["_web_figure"] = p.get("figure") or ""

    DST_DIR.mkdir(parents=True, exist_ok=True)
    clean = [{k: v for k, v in p.items() if not k.startswith("_")} for p in merged]
    DST_JSON.write_text(json.dumps(clean, ensure_ascii=False, indent=2), encoding="utf-8")

    html = _agri.build_html(merged)
    # keep agri nav; refresh lead/chips if template still old
    html = html.replace(
        "番茄 / 茶叶 / 水稻等作物检测 YOLO 成稿",
        "番茄 / 茶叶 / 水稻成稿；水稻含 Frontiers PASS 多套双模块包装",
    )
    if "RF01" not in html and "水稻 Frontiers" not in html:
        html = html.replace(
            "农业交叉成稿库",
            "农业交叉成稿库",
        )
    # ensure chip count uses total
    DST_HTML.write_text(html, encoding="utf-8")
    print(f"kept={len(kept)} rice={len(rice)} total={len(merged)} -> {DST_HTML.name}")


if __name__ == "__main__":
    main()
