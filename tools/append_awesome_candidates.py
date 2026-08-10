# -*- coding: utf-8 -*-
"""Route Awesome-Medical-Dataset candidate URLs into imaging-datasets.js."""
from __future__ import annotations
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "data" / "imaging-datasets.js"
CANDS = ROOT / "tools" / "_awesome_cands.json"

# keyword → (dept_id, sec_id)
ROUTES = [
    (("polyp", "colon", "kvasir", "endoscop", "cholec", "gastro"), "gi", "colorectal-polyp-det"),
    (("capsule",), "gi", "capsule"),
    (("barrett", "esophag", "oesophag"), "gi", "esophagus"),
    (("liver", "lits", "hepatic", "chaos", "ircad"), "hepatobiliary", "liver-ct-tumor"),
    (("pancrea",), "hepatobiliary", "pancreas-ct"),
    (("gallbladder", "gbcu"), "hepatobiliary", "gallbladder-us"),
    (("abdomen", "amos", "flare", "totalsegmentator", "btc", "word", "deeplesion", "uls23"), "hepatobiliary", "abdomen-ct-lesion"),
    (("luna", "lidc", "lndb", "lung", "nsclc", "nodule"), "respiratory", "lung-ct-nodule"),
    (("cxr", "chest", "chexpert", "pneumonia", "pneumothorax", "padchest", "mimic-cxr", "jsrt"), "respiratory", "chest-xray"),
    (("bronch",), "respiratory", "bronchoscopy"),
    (("pocus", "lung-us", "b-line", "lus"), "respiratory", "lung-us-bline"),
    (("echo", "camus", "acdc", "cardiac", "heart", "mm-whs", "mnms"), "cardiology", "echo"),
    (("arcade", "coronary", "xca"), "cardiology", "coronary-xca"),
    (("carotid",), "cardiology", "carotid"),
    (("brats", "brain", "glioma", "stroke", "isles", "atlas", "oasis", "ixi", "msseg", "hippocamp"), "neurology", "brain-tumor-mri"),
    (("hemorrh", "ich", "cq500", "head-ct", "instance"), "neurology", "brain-ct-bleed"),
    (("idrid", "ddr", "aptos", "messidor", "eyepacs", "rfmid", "riadd", "fundus", "retin"), "ophthalmology", "fundus-lesion"),
    (("drive", "stare", "chase", "hrf", "fives", "vessel"), "ophthalmology", "fundus-vessel"),
    (("oct", "retouch", "adam"), "ophthalmology", "fundus-oct"),
    (("isic", "derm", "skin", "ph2", "ham10000", "melanoma"), "dermatology", "skin-lesion"),
    (("mammo", "ddsm", "inbreast", "mias", "breast-x"), "breast", "breast-mammo"),
    (("busi", "bus-", "breast-us", "breast ultrasound"), "breast", "breast-us"),
    (("thyroid", "tn3k", "tg3k", "ddti", "tn-scui"), "thyroid", "thyroid-us"),
    (("fracture", "fracatlas", "mura", "bone"), "orthopedics", "fracture-general"),
    (("wrist", "grazped"), "orthopedics", "fracture-wrist"),
    (("spine", "vertebral", "spinexr"), "orthopedics", "fracture-spine"),
    (("knee", "oai", "mrnet", "fastmri"), "orthopedics", "knee"),
    (("hip",), "orthopedics", "fracture-hip"),
    (("osteopor", "lumos"), "orthopedics", "osteoporosis-lumbar"),
    (("kits", "kidney", "renal"), "urology", "kidney-tumor"),
    (("stone",), "urology", "kidney-stone"),
    (("prostate", "pi-cai"), "urology", "prostate-mri"),
    (("cysto", "bladder"), "urology", "cystoscopy"),
    (("cervi", "colpo", "pap", "sipakmed", "herlev"), "obgyn", "cervix"),
    (("fetal", "hc18", "feta", "obstetric"), "obgyn", "fetal-us"),
    (("endometri", "glenda"), "obgyn", "endometriosis-lap"),
    (("dental", "dentex", "tooth", "teeth", "oral"), "stomatology", "oral-opg"),
    (("pannuke", "monuseg", "nucls", "consep", "nuclei", "mitos"), "pathology-lab", "pathology-nuclei"),
    (("camelyon", "metastas"), "pathology-lab", "pathology-metastasis"),
    (("crc", "digestpath", "nct-crc", "pathology"), "pathology-lab", "pathology-crc"),
    (("bccd", "wbc", "blood", "leukocyte", "raabin"), "pathology-lab", "blood-cell"),
    (("lymph",), "pathology-lab", "lymph-node-us"),
    (("pet", "autopet", "hecktor"), "neurology", "brain-tumor-mri"),
    (("ultrasound", "uusic"), "hepatobiliary", "gallbladder-us"),
]


def route(name: str, url: str):
    blob = f"{name} {url}".lower()
    for keys, dept, sec in ROUTES:
        if any(k in blob for k in keys):
            return dept, sec
    return None


def main():
    t = OUT.read_text(encoding="utf-8")
    data = json.loads(t[t.index("{") : t.rindex("}") + 1])
    index = {}
    seen = set()
    for d in data["departments"]:
        for c in d.get("children") or []:
            index[(d["id"], c["id"])] = c
            for x in c.get("datasets") or []:
                u = (x.get("url") or "").rstrip("/").lower()
                if u:
                    seen.add(u)

    cands = json.loads(CANDS.read_text(encoding="utf-8"))
    added = 0
    skipped = 0
    for name, url in cands:
        nu = url.rstrip("/").lower()
        if nu in seen:
            skipped += 1
            continue
        r = route(name, url)
        if not r:
            skipped += 1
            continue
        dept, sec = r
        c = index.get((dept, sec))
        if not c:
            skipped += 1
            continue
        kind = "seg→box"
        low = f"{name} {url}".lower()
        if any(k in low for k in ("detect", "luna", "bbox", "yolo", "object")):
            kind = "detection"
        elif any(k in low for k in ("classif", "chexpert", "aptos", "eyepacs", "ham10000")):
            kind = "classification"
        c.setdefault("datasets", []).append(
            {
                "name": name[:120],
                "url": url,
                "note": "Awesome-Medical-Dataset / 公开挑战入口",
                "license": "",
                "kind": kind,
            }
        )
        seen.add(nu)
        added += 1
        if c.get("status") == "empty":
            c["status"] = "partial"

    data["meta"]["updated"] = "2026-08-10"
    data["categories"] = []
    for d in data["departments"]:
        for c in d.get("children") or []:
            data["categories"].append({**c, "department_id": d["id"], "department_zh": d["name_zh"]})

    n = sum(len(c.get("datasets") or []) for d in data["departments"] for c in d.get("children") or [])
    OUT.write_text(
        "/** 医学影像公开数据集目录 — 科室 → 二级标题 → 数据集。 */\n"
        + "window.IMAGING_DATASETS = "
        + json.dumps(data, ensure_ascii=False, indent=2)
        + ";\n",
        encoding="utf-8",
    )
    print(f"added={added} skipped={skipped} total={n}")


if __name__ == "__main__":
    main()
