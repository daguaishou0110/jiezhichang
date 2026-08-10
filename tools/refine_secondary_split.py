# -*- coding: utf-8 -*-
"""
Refine coarse secondaries into finer disease/modality folders.
Moves datasets by keyword rules; leftovers stay in residual buckets.
"""
from __future__ import annotations
import json
import re
from pathlib import Path
from copy import deepcopy

OUT = Path(__file__).resolve().parents[1] / "data" / "imaging-datasets.js"


def text(x: dict) -> str:
    return " ".join(
        str(x.get(k) or "") for k in ("name", "note", "url", "kind", "license")
    ).lower()


def sub(id_, name_zh, modality, task, status="partial", datasets=None, local="", todo=""):
    return {
        "id": id_,
        "name_zh": name_zh,
        "modality": modality,
        "task": task,
        "status": status,
        "local": local,
        "datasets": datasets or [],
        "todo": todo,
    }


def match_any(t: str, words) -> bool:
    return any(w.lower() in t for w in words)


def is_portal_junk(t: str) -> bool:
    junk = [
        "awesome-medical-dataset",
        "papers with code",
        "hugging face datasets",
        "kaggle medical",
        "figshare / dryad",
        "geo / sra",
        "gtex",
        "alphafold",
        "human cell atlas",
        "gnomad",
        "clinvar",
        "therapeutics data commons",
        "pubchem",
        "drugbank",
        "openneuro",
        "imaging data commons",
        "medmnist",
        "torchxrayvision",
        "monai bundles",
        "cbioportal",
        "depmap",
        "gdsc",
        "seer",
        "hmp / metahit",
        "ncbi virus",
        "gisaid",
        "iu x-ray",  # report gen portal-ish under abdomen wrongly
        "open-i",
        "pyradiomics",
    ]
    # generic placeholder names that are just "Github"/"Kaggle"/"TCIA" with Awesome note
    if "awesome-medical-dataset" in t:
        return True
    if match_any(t, junk):
        return True
    return False


def take(pool: list, pred) -> list:
    kept, rest = [], []
    for x in pool:
        (kept if pred(text(x)) else rest).append(x)
    pool[:] = rest
    return kept


def status_of(n: int) -> str:
    if n >= 5:
        return "ready"
    if n >= 1:
        return "partial"
    return "empty"


def finalize(children: list) -> list:
    out = []
    for c in children:
        n = len(c.get("datasets") or [])
        if n == 0 and c.get("id", "").endswith("-misc"):
            continue
        c["status"] = status_of(n)
        out.append(c)
    return out


def refine_gi(dept):
    by_id = {c["id"]: c for c in dept.get("children") or []}
    polyp = list((by_id.get("colorectal-polyp-det") or {}).get("datasets") or [])
    gastro = list((by_id.get("gastroscopy-multi") or {}).get("datasets") or [])
    pool = polyp + gastro

    # also pull laparoscopy misplaced from other depts later via global — here from pool only
    kids = []
    kids.append(
        sub(
            "polyp-seg",
            "二级：结肠镜 · 息肉分割",
            "结肠镜",
            "分割转框",
            datasets=take(
                pool,
                lambda t: match_any(
                    t,
                    [
                        "kvasir-seg",
                        "cvc-clinic",
                        "cvc-colon",
                        "etis",
                        "bkai",
                        "neopolyp",
                        "piccolo",
                        "polypgen",
                        "kvasir-sessile",
                        "endoscene",
                        "giana",
                    ],
                )
                and not match_any(t, ["video", "real-colon", "ldpolyp", "sun colon"]),
            ),
        )
    )
    kids.append(
        sub(
            "polyp-video",
            "二级：结肠镜 · 息肉视频检测",
            "结肠镜视频",
            "检测",
            datasets=take(
                pool,
                lambda t: match_any(
                    t,
                    [
                        "real-colon",
                        "ldpolyp",
                        "sun colon",
                        "asu-mayo",
                        "gpolypod",
                        "polypdb",
                        "polyp video",
                    ],
                ),
            ),
        )
    )
    kids.append(
        sub(
            "colon-instrument",
            "二级：结肠镜 · 器械 / 伪影",
            "结肠镜",
            "分割 / 检测",
            datasets=take(
                pool,
                lambda t: match_any(t, ["instrument", "ead", "endocv", "artifact", "伪影"]),
            ),
        )
    )
    kids.append(
        sub(
            "colon-quality",
            "二级：结肠镜 · 肠道准备质量",
            "结肠镜",
            "分类",
            datasets=take(pool, lambda t: match_any(t, ["nerthus", "准备"])),
        )
    )
    kids.append(
        sub(
            "submucosal-sel",
            "二级：结肠镜 · 黏膜下病变 SEL",
            "结肠镜双模态",
            "检测",
            datasets=take(pool, lambda t: match_any(t, ["cad-sel", "黏膜下", "sel"])),
        )
    )
    kids.append(
        sub(
            "endoscopy-vqa",
            "二级：内镜 · 视觉问答 / 定位",
            "内镜",
            "多任务",
            datasets=take(pool, lambda t: match_any(t, ["vqa", "endomapper"])),
        )
    )
    kids.append(
        sub(
            "gastroscopy-classify",
            "二级：胃镜 · 多类站位 / 病变分类",
            "胃镜",
            "分类",
            datasets=take(
                pool,
                lambda t: match_any(
                    t, ["gastrovision", "hyperkvasir", "kvasir", "egid", "gastrohun", "胃炎"]
                )
                and "seg" not in t.split()[:1],
            ),
        )
    )
    # HyperKvasir seg zip may remain — catch
    kids[-1]["datasets"] += take(
        pool, lambda t: match_any(t, ["hyperkvasir"]) and "seg" in t
    )
    kids.append(
        sub(
            "gastroscopy-lesion",
            "二级：上下消化道 · 多类病灶框",
            "胃/肠镜",
            "检测",
            datasets=take(pool, lambda t: match_any(t, ["edd2020", "edd 2020", "barrett"])),
        )
    )
    kids.append(
        sub(
            "laparoscopy",
            "二级：腹腔镜 · 手术阶段 / 器械",
            "腹腔镜",
            "检测 / 分割",
            datasets=take(
                pool,
                lambda t: match_any(
                    t, ["cholec", "endoscapes", "heico", "robust-mis", "sar-rarp", "lapgyn", "surgical"]
                ),
            ),
        )
    )
    if pool:
        kids.append(
            sub(
                "gi-endoscopy-misc",
                "二级：消化内镜 · 其他",
                "内镜",
                "混合",
                datasets=list(pool),
            )
        )

    # keep other existing secondaries
    keep_ids = {"esophagus", "capsule", "crc-microbiome", "gi-radiomics", "ercp"}
    for c in dept.get("children") or []:
        if c["id"] in keep_ids:
            kids.append(c)
    dept["children"] = finalize(kids)


def refine_hepatobiliary(dept):
    by_id = {c["id"]: c for c in dept.get("children") or []}
    abdomen = list((by_id.get("abdomen-ct-lesion") or {}).get("datasets") or [])
    liver = list((by_id.get("liver-ct-tumor") or {}).get("datasets") or [])
    portals = take(abdomen, is_portal_junk)
    portals += take(liver, is_portal_junk)

    kids = []
    kids.append(
        sub(
            "liver-ct-tumor",
            "二级：肝脏 · CT/MRI 肿瘤",
            "CT / MRI",
            "分割转框 / 检测",
            datasets=liver
            + take(
                abdomen,
                lambda t: match_any(t, ["lits", "sltd", "ircadb", "sliver", "atlas liver", "肝"]),
            ),
        )
    )
    kids.append(
        sub(
            "abdomen-multi-organ",
            "二级：腹部 · 多器官分割",
            "CT",
            "分割转框",
            datasets=take(
                abdomen,
                lambda t: match_any(
                    t,
                    [
                        "amos",
                        "totalsegmentator",
                        "abdomenct-1k",
                        "word",
                        "flare",
                        "ct-org",
                        "abdomenatlas",
                        "segthor",
                        "chaos",
                    ],
                ),
            ),
        )
    )
    kids.append(
        sub(
            "abdomen-lesion-box",
            "二级：腹部 · 多器官病灶框",
            "CT",
            "检测",
            datasets=take(abdomen, lambda t: match_any(t, ["deeplesion"])),
        )
    )
    # laparoscopy that leaked into abdomen
    lap = take(
        abdomen,
        lambda t: match_any(t, ["heico", "robust-mis", "cholec", "sar-rarp", "surgical", "lapgyn"]),
    )
    if abdomen:
        kids.append(sub("abdomen-misc", "二级：腹部影像 · 其他", "CT / 混合", "混合", datasets=list(abdomen)))

    for c in dept.get("children") or []:
        if c["id"] in {"pancreas-ct", "gallbladder-us", "pet-ct"}:
            kids.append(c)

    # attach lap to a note bucket under hepatobiliary if any
    if lap:
        kids.append(sub("hepatobiliary-lap", "二级：肝胆相关 · 腹腔镜手术影像", "腹腔镜", "分割", datasets=lap))
    if portals:
        kids.append(sub("hb-portals", "二级：开放数据门户（非专项）", "索引", "检索", datasets=portals))
    dept["children"] = finalize(kids)


def refine_respiratory(dept):
    by_id = {c["id"]: c for c in dept.get("children") or []}
    cxr = list((by_id.get("chest-xray") or {}).get("datasets") or [])
    nodule = list((by_id.get("lung-ct-nodule") or {}).get("datasets") or [])
    lus = list((by_id.get("lung-us-bline") or {}).get("datasets") or [])
    portals = take(cxr, is_portal_junk) + take(nodule, is_portal_junk) + take(lus, is_portal_junk)

    kids = []
    kids.append(
        sub(
            "lung-nodule-ct",
            "二级：肺结节 · CT 检测",
            "胸部 CT",
            "检测",
            datasets=take(nodule, lambda t: match_any(t, ["luna", "lidc", "lndb", "nlst"]))
            + take(cxr, lambda t: match_any(t, ["luna", "lidc", "lndb"])),
        )
    )
    kids.append(
        sub(
            "lung-nodule-cxr",
            "二级：肺结节 · 胸片检测",
            "X 线胸片",
            "检测",
            datasets=take(nodule, lambda t: match_any(t, ["node21", "jsrt"]))
            + take(cxr, lambda t: match_any(t, ["node21", "jsrt"])),
        )
    )
    kids.append(
        sub(
            "cxr-detection",
            "二级：胸片 · 多异常框检测",
            "X 线胸片",
            "检测",
            datasets=take(
                cxr,
                lambda t: match_any(t, ["vindr-cxr", "vinbigdata", "shcxr", "rsna pneumonia", "pneumonia detection"]),
            ),
        )
    )
    kids.append(
        sub(
            "cxr-multilabel",
            "二级：胸片 · 多标签分类 / 报告",
            "X 线胸片",
            "分类",
            datasets=take(
                cxr,
                lambda t: match_any(
                    t, ["chestx-ray14", "nih chest", "chexpert", "mimic-cxr", "padchest", "radiography"]
                ),
            ),
        )
    )
    kids.append(
        sub(
            "pneumothorax",
            "二级：气胸 · 胸片分割",
            "X 线胸片",
            "分割转框",
            datasets=take(cxr, lambda t: match_any(t, ["pneumothorax", "siim"])),
        )
    )
    kids.append(
        sub(
            "pe-ct",
            "二级：肺栓塞 · CT",
            "CTPA",
            "检测",
            datasets=take(cxr, lambda t: match_any(t, ["embolism", "pulmonary embolism", "pe ct"])),
        )
    )
    kids.append(
        sub(
            "nsclc-radiomics",
            "二级：肺癌 · 组学 / 基因组",
            "CT",
            "分割 / 分类",
            datasets=take(cxr, lambda t: match_any(t, ["nsclc", "radiomics"])),
        )
    )
    kids.append(
        sub(
            "lung-us-bline",
            "二级：肺超声 · B 线 / COVID",
            "肺超声",
            "检测 / 分类",
            datasets=take(
                lus,
                lambda t: match_any(t, ["lus", "pocus", "blues", "uusic", "超声", "ultrasound", "b-line", "bline"]),
            ),
        )
    )
    kids.append(
        sub(
            "icu-waveform",
            "二级：重症监护 · 生命体征 / ICU",
            "波形 / EHR",
            "分类",
            datasets=take(
                lus,
                lambda t: match_any(t, ["mimic", "hirid", "amsterdam", "physionet", "sicdb", "icu"]),
            ),
        )
    )
    if nodule:
        kids.append(sub("lung-nodule-misc", "二级：肺结节 · 其他", "CT / 胸片", "检测", datasets=list(nodule)))
    if cxr:
        kids.append(sub("chest-xray-misc", "二级：胸部影像 · 其他", "X 线 / CT", "混合", datasets=list(cxr)))
    if lus:
        kids.append(sub("lung-us-misc", "二级：肺超声 · 其他", "超声", "混合", datasets=list(lus)))

    for c in dept.get("children") or []:
        if c["id"] in {"bronchoscopy", "pediatric-cxr", "covid-ct"}:
            kids.append(c)
    if portals:
        kids.append(sub("resp-portals", "二级：呼吸 · 开放数据门户", "索引", "检索", datasets=portals))
    dept["children"] = finalize(kids)


def refine_cardiology(dept):
    by_id = {c["id"]: c for c in dept.get("children") or []}
    coronary = list((by_id.get("coronary-xca") or {}).get("datasets") or [])
    portals = take(coronary, is_portal_junk)

    kids = []
    kids.append(
        sub(
            "coronary-angio",
            "二级：冠脉造影 · 狭窄 / 血管",
            "XCA",
            "分割 / 检测",
            datasets=take(coronary, lambda t: match_any(t, ["arcade", "dca1", "coronary", "xca", "狭窄"])),
        )
    )
    kids.append(
        sub(
            "aorta-cta",
            "二级：主动脉 · CTA 分支分割",
            "CTA",
            "分割转框",
            datasets=take(coronary, lambda t: match_any(t, ["aorta", "aortaseg"])),
        )
    )
    kids.append(
        sub(
            "cardiac-mri",
            "二级：心脏 MRI · 心室 / 全心",
            "Cardiac MRI",
            "分割转框",
            datasets=take(
                coronary,
                lambda t: match_any(
                    t, ["acdc", "mm-whs", "m&ms", "sunnybrook", "hvsmr", "uk biobank", "cardiac mri", "cine"]
                ),
            ),
        )
    )
    kids.append(
        sub(
            "ecg",
            "二级：心电图 · 心律分类",
            "ECG",
            "分类",
            datasets=take(
                coronary,
                lambda t: match_any(
                    t, ["ecg", "ptb-xl", "mit-bih", "chapman", "cpsc", "circor", "arrhythmia", "心电", "心音"]
                ),
            ),
        )
    )
    if coronary:
        kids.append(sub("cardio-misc", "二级：心血管影像 · 其他", "混合", "混合", datasets=list(coronary)))

    for c in dept.get("children") or []:
        if c["id"] in {"echo", "carotid"}:
            kids.append(c)
    if portals:
        kids.append(sub("cardio-portals", "二级：心血管 · 门户", "索引", "检索", datasets=portals))
    dept["children"] = finalize(kids)


def refine_breast(dept):
    by_id = {c["id"]: c for c in dept.get("children") or []}
    mammo = list((by_id.get("breast-mammo") or {}).get("datasets") or [])
    portals = take(mammo, is_portal_junk)
    kids = []
    kids.append(
        sub(
            "mammo-detection",
            "二级：钼靶 · 肿块 / 钙化检测",
            "乳腺 X 线",
            "检测",
            datasets=take(
                mammo,
                lambda t: match_any(t, ["vindr-mammo", "cbis", "inbreast", "csaw", "ddsm"])
                and "patholog" not in t
                and "breakhis" not in t
                and "bach" not in t
                and "mri" not in t,
            ),
        )
    )
    kids.append(
        sub(
            "mammo-classify",
            "二级：钼靶 · 筛查分类",
            "乳腺 X 线",
            "分类",
            datasets=take(mammo, lambda t: match_any(t, ["mias", "bcdr", "cmmd"])),
        )
    )
    kids.append(
        sub(
            "breast-mri",
            "二级：乳腺 MRI",
            "MRI",
            "分类 / 分割",
            datasets=take(mammo, lambda t: match_any(t, ["breast cancer mri", "duke breast", "breast mri"])),
        )
    )
    kids.append(
        sub(
            "breast-histo",
            "二级：乳腺病理 · 组织切片",
            "病理 WSI / 切片",
            "分类",
            datasets=take(mammo, lambda t: match_any(t, ["breakhis", "bach", "iciar"])),
        )
    )
    if mammo:
        kids.append(sub("breast-mammo-misc", "二级：乳腺钼靶 · 其他", "乳腺 X 线", "混合", datasets=list(mammo)))
    for c in dept.get("children") or []:
        if c["id"] == "breast-us":
            kids.append(c)
    if portals:
        kids.append(sub("breast-portals", "二级：乳腺 · 门户", "索引", "检索", datasets=portals))
    dept["children"] = finalize(kids)


def refine_ophthalmology(dept):
    by_id = {c["id"]: c for c in dept.get("children") or []}
    lesion = list((by_id.get("fundus-lesion") or {}).get("datasets") or [])
    oct = list((by_id.get("fundus-oct") or {}).get("datasets") or [])
    portals = take(lesion, is_portal_junk) + take(oct, is_portal_junk)

    kids = []
    kids.append(
        sub(
            "fundus-dr",
            "二级：眼底 · 糖尿病视网膜病变",
            "眼底彩照",
            "检测 / 分级",
            datasets=take(
                lesion,
                lambda t: match_any(t, ["idrid", "ddr", "aptos", "messidor", "eyepacs", "糖网", "diabetic"]),
            ),
        )
    )
    kids.append(
        sub(
            "fundus-glaucoma",
            "二级：眼底 · 青光眼",
            "眼底彩照 / 多模态",
            "分割 / 分类",
            datasets=take(
                lesion,
                lambda t: match_any(
                    t, ["refuge", "origa", "rim-one", "drishti", "g1020", "gamma", "青光眼", "glaucoma"]
                ),
            ),
        )
    )
    kids.append(
        sub(
            "fundus-multi",
            "二级：眼底 · 多病种筛查",
            "眼底彩照",
            "分类",
            datasets=take(
                lesion,
                lambda t: match_any(t, ["rfmid", "odir", "palm", "aria", "pathologic myopia", "近视"]),
            ),
        )
    )
    kids.append(
        sub(
            "cataract-surgery",
            "二级：白内障手术视频",
            "手术视频",
            "分类",
            datasets=take(lesion, lambda t: match_any(t, ["cataract"])),
        )
    )
    kids.append(
        sub(
            "oct-fluid",
            "二级：OCT · 积液 / 病灶分割",
            "OCT",
            "分割",
            datasets=take(oct, lambda t: match_any(t, ["retouch", "fluid", "adam"])),
        )
    )
    kids.append(
        sub(
            "oct-classify",
            "二级：OCT · 疾病分类",
            "OCT",
            "分类",
            datasets=take(
                oct,
                lambda t: match_any(t, ["octdl", "kermany", "oct2017", "duke oct", "octid", "age challenge"]),
            ),
        )
    )
    if lesion:
        kids.append(sub("fundus-misc", "二级：眼底 · 其他", "眼底", "混合", datasets=list(lesion)))
    if oct:
        kids.append(sub("oct-misc", "二级：OCT · 其他", "OCT", "混合", datasets=list(oct)))

    for c in dept.get("children") or []:
        if c["id"] == "fundus-vessel":
            kids.append(c)
        if c["id"] == "fundus-oct" and c.get("datasets"):
            pass  # replaced
    if portals:
        kids.append(sub("oph-portals", "二级：眼科 · 门户", "索引", "检索", datasets=portals))
    dept["children"] = finalize(kids)


def refine_dermatology(dept):
    by_id = {c["id"]: c for c in dept.get("children") or []}
    skin = list((by_id.get("skin-lesion") or {}).get("datasets") or [])
    portals = take(skin, is_portal_junk)
    kids = []
    kids.append(
        sub(
            "skin-isic",
            "二级：皮肤镜 · ISIC / HAM 挑战",
            "皮肤镜",
            "分类 / 分割",
            datasets=take(
                skin,
                lambda t: match_any(t, ["isic", "ham10000", "ph2", "derm7pt", "dermofit"]),
            ),
        )
    )
    kids.append(
        sub(
            "skin-clinical-photo",
            "二级：临床拍照 · 手机 / 全身皮损",
            "临床照片",
            "分类 / 检测",
            datasets=take(
                skin,
                lambda t: match_any(
                    t, ["pad-ufes", "fitzpatrick", "ddi", "itobos", "dermnet", "sd-198", "sd-260", "smartphone"]
                ),
            ),
        )
    )
    kids.append(
        sub(
            "skin-melanoma-small",
            "二级：黑素瘤 · 小样本精标",
            "皮肤镜",
            "分类",
            datasets=take(skin, lambda t: match_any(t, ["med-node", "melanoma"])),
        )
    )
    if skin:
        kids.append(sub("skin-misc", "二级：皮肤病 · 其他", "皮肤影像", "混合", datasets=list(skin)))
    if portals:
        kids.append(sub("derm-portals", "二级：皮肤 · 门户", "索引", "检索", datasets=portals))
    dept["children"] = finalize(kids)


def refine_neurology(dept, all_depts):
    by_id = {c["id"]: c for c in dept.get("children") or []}
    brain = list((by_id.get("brain-tumor-mri") or {}).get("datasets") or [])
    portals = take(brain, is_portal_junk)

    # relocate cross-dept items
    move_pet = take(brain, lambda t: match_any(t, ["autopet", "lung-pet"]))
    move_hn = take(brain, lambda t: match_any(t, ["hecktor"]))
    move_feta = take(brain, lambda t: match_any(t, ["feta"]))

    kids = []
    kids.append(
        sub(
            "glioma-brats",
            "二级：脑胶质瘤 · BraTS / MRI",
            "脑 MRI",
            "分割 / 检测",
            datasets=take(
                brain,
                lambda t: match_any(t, ["brats", "br35h", "ucsf-pdgm", "figshare brain tumor", "cheng", "胶质瘤"]),
            ),
        )
    )
    kids.append(
        sub(
            "stroke-mri",
            "二级：脑卒中 · MRI 病灶",
            "脑 MRI",
            "分割转框",
            datasets=take(brain, lambda t: match_any(t, ["isles", "atlas stroke", "stroke", "卒中"])),
        )
    )
    kids.append(
        sub(
            "ms-wmh",
            "二级：多发硬化 / 白质高信号",
            "脑 MRI",
            "分割转框",
            datasets=take(brain, lambda t: match_any(t, ["msseg", "ms lesion", "wmh", "多发硬化"])),
        )
    )
    kids.append(
        sub(
            "neurodegen",
            "二级：神经退行 / 认知 · MRI",
            "脑 MRI",
            "分类",
            datasets=take(brain, lambda t: match_any(t, ["oasis", "adni", "abide", "阿尔茨海默", "自闭"])),
        )
    )
    kids.append(
        sub(
            "brain-normal-recon",
            "二级：正常脑 / 重建预训练",
            "脑 MRI",
            "重建 / 预训练",
            datasets=take(
                brain,
                lambda t: match_any(t, ["ixi", "hcp", "fastmri", "openmind", "iseg", "infant"]),
            ),
        )
    )
    kids.append(
        sub(
            "schwannoma",
            "二级：前庭神经鞘瘤",
            "脑 MRI",
            "分割转框",
            datasets=take(brain, lambda t: match_any(t, ["crossmoda", "schwannoma", "神经鞘瘤"])),
        )
    )
    kids.append(
        sub(
            "eeg-neurophys",
            "二级：脑电 / 睡眠生理信号",
            "EEG",
            "分类",
            datasets=take(
                brain,
                lambda t: match_any(t, ["eeg", "tuh", "chb-mit", "sleep-edf", "sleep heart", "motor imagery"]),
            ),
        )
    )
    if brain:
        kids.append(sub("brain-misc", "二级：神经影像 · 其他", "脑 MRI", "混合", datasets=list(brain)))

    for c in dept.get("children") or []:
        if c["id"] in {"brain-ct-bleed", "head-ct-abnormal"}:
            kids.append(c)
    if portals:
        kids.append(sub("neuro-portals", "二级：神经 · 门户", "索引", "检索", datasets=portals))
    dept["children"] = finalize(kids)

    # relocate
    hb = next((d for d in all_depts if d["id"] == "hepatobiliary"), None)
    if hb and move_pet:
        pet = next((c for c in hb.get("children") or [] if c["id"] == "pet-ct"), None)
        if pet:
            seen = {(x.get("url") or "").rstrip("/").lower() for x in pet.get("datasets") or []}
            for x in move_pet:
                u = (x.get("url") or "").rstrip("/").lower()
                if u and u not in seen:
                    pet.setdefault("datasets", []).append(x)
                    seen.add(u)
            pet["status"] = status_of(len(pet.get("datasets") or []))
    ent = next((d for d in all_depts if d["id"] == "ent"), None)
    if ent and move_hn:
        hn = next((c for c in ent.get("children") or [] if c["id"] == "head-neck-ct"), None)
        if hn:
            seen = {(x.get("url") or "").rstrip("/").lower() for x in hn.get("datasets") or []}
            for x in move_hn:
                u = (x.get("url") or "").rstrip("/").lower()
                if u and u not in seen:
                    hn.setdefault("datasets", []).append(x)
                    seen.add(u)
            hn["status"] = status_of(len(hn.get("datasets") or []))
    ob = next((d for d in all_depts if d["id"] == "obgyn"), None)
    if ob and move_feta:
        fetal = next((c for c in ob.get("children") or [] if c["id"] == "fetal-us"), None)
        # prefer create fetal-brain-mri
        kids_ob = ob.setdefault("children", [])
        fb = next((c for c in kids_ob if c["id"] == "fetal-brain-mri"), None)
        if not fb:
            fb = sub("fetal-brain-mri", "二级：胎儿脑 · MRI 分割", "胎儿 MRI", "分割转框", datasets=[])
            kids_ob.append(fb)
        fb.setdefault("datasets", []).extend(move_feta)
        fb["status"] = status_of(len(fb["datasets"]))


def refine_stomatology(dept):
    by_id = {c["id"]: c for c in dept.get("children") or []}
    oral = list((by_id.get("oral-opg") or {}).get("datasets") or [])
    portals = take(oral, is_portal_junk)
    kids = []
    kids.append(
        sub(
            "dental-panorama",
            "二级：牙科全景片 · 牙位 / 龋齿",
            "全景 X 线",
            "检测",
            datasets=take(
                oral,
                lambda t: match_any(
                    t, ["dentex", "tufts", "panoramic", "ufba", "caries", "儿童全景", "dental"]
                )
                and not match_any(t, ["toothfairy", "3dteeth", "cbct", "oral cancer", "mucosa"]),
            ),
        )
    )
    kids.append(
        sub(
            "dental-cbct",
            "二级：牙科 CBCT · 神经管 / 牙冠",
            "CBCT",
            "分割转框",
            datasets=take(oral, lambda t: match_any(t, ["toothfairy", "3dteeth", "cbct", "mandibular"])),
        )
    )
    kids.append(
        sub(
            "oral-mucosa",
            "二级：口腔黏膜 · 临床照片病灶",
            "口腔照片",
            "检测",
            datasets=take(oral, lambda t: match_any(t, ["oral cancer", "lesion photo", "roboflow", "mucosa"])),
        )
    )
    if oral:
        kids.append(sub("oral-misc", "二级：口腔 · 其他", "牙科影像", "混合", datasets=list(oral)))
    if portals:
        kids.append(sub("oral-portals", "二级：口腔 · 门户", "索引", "检索", datasets=portals))
    dept["children"] = finalize(kids)


def refine_pathology(dept):
    by_id = {c["id"]: c for c in dept.get("children") or []}
    nuclei = list((by_id.get("pathology-nuclei") or {}).get("datasets") or [])
    blood = list((by_id.get("blood-cell") or {}).get("datasets") or [])
    portals = take(nuclei, is_portal_junk) + take(blood, is_portal_junk)

    kids = []
    kids.append(
        sub(
            "nuclei-instance",
            "二级：病理 · 细胞核实例检测",
            "病理切片",
            "检测 / 分割",
            datasets=take(
                nuclei,
                lambda t: match_any(
                    t,
                    [
                        "pannuke",
                        "consep",
                        "monuseg",
                        "monusac",
                        "nucls",
                        "lizard",
                        "conic",
                        "cryonuseg",
                        "midog",
                        "data science bowl",
                        "nuclick",
                        "panoptils",
                    ],
                ),
            ),
        )
    )
    kids.append(
        sub(
            "path-tissue-seg",
            "二级：病理 · 组织区域 / 腺体",
            "病理 WSI",
            "分割",
            datasets=take(nuclei, lambda t: match_any(t, ["bcss", "glas", "paip", "cptac"])),
        )
    )
    kids.append(
        sub(
            "blood-cell",
            "二级：血细胞 / 骨髓涂片",
            "显微镜图像",
            "检测 / 分类",
            datasets=take(
                blood,
                lambda t: match_any(
                    t, ["bccd", "raabin", "lisc", "all-idb", "matek", "c-nmc", "leukemia", "aml", "blood cell"]
                ),
            )
            + take(nuclei, lambda t: match_any(t, ["leukemia", "blood"])),
        )
    )
    kids.append(
        sub(
            "lab-tabular",
            "二级：检验 / ICU 表格数据",
            "EHR / Lab",
            "分类",
            datasets=take(
                nuclei,
                lambda t: match_any(t, ["mimic-iv lab", "eicu lab", "sepsis", "uci ilpd", "16s", "physionet challenge"]),
            )
            + take(blood, lambda t: match_any(t, ["seer", "cbioportal", "depmap", "gdsc"])),
        )
    )
    if nuclei:
        kids.append(sub("path-misc", "二级：病理 · 其他", "病理", "混合", datasets=list(nuclei)))
    if blood:
        kids.append(sub("blood-misc", "二级：血液 · 其他", "血细胞", "混合", datasets=list(blood)))

    for c in dept.get("children") or []:
        if c["id"] in {"pathology-metastasis", "lymph-node-us", "pathology-crc"}:
            kids.append(c)
    if portals:
        kids.append(sub("path-portals", "二级：病理/组学 · 开放数据门户", "索引", "检索", datasets=portals))
    dept["children"] = finalize(kids)


def main():
    t = OUT.read_text(encoding="utf-8")
    data = json.loads(t[t.index("{") : t.rindex("}") + 1])
    depts = {d["id"]: d for d in data["departments"]}

    refine_gi(depts["gi"])
    refine_hepatobiliary(depts["hepatobiliary"])
    refine_respiratory(depts["respiratory"])
    refine_cardiology(depts["cardiology"])
    refine_breast(depts["breast"])
    refine_ophthalmology(depts["ophthalmology"])
    refine_dermatology(depts["dermatology"])
    refine_neurology(depts["neurology"], data["departments"])
    refine_stomatology(depts["stomatology"])
    refine_pathology(depts["pathology-lab"])

    data["meta"]["updated"] = "2026-08-11"
    data["meta"]["note"] = "二级目录按病症/模态细化；门户类单独归并"
    data["categories"] = []
    for d in data["departments"]:
        for c in d.get("children") or []:
            data["categories"].append({**c, "department_id": d["id"], "department_zh": d["name_zh"]})

    n_dept = len(data["departments"])
    n_sec = sum(len(d.get("children") or []) for d in data["departments"])
    n_ds = sum(len(c.get("datasets") or []) for d in data["departments"] for c in d.get("children") or [])

    OUT.write_text(
        "/** 医学影像公开数据集目录 — 科室 → 二级标题 → 数据集。 */\n"
        + "window.IMAGING_DATASETS = "
        + json.dumps(data, ensure_ascii=False, indent=2)
        + ";\n",
        encoding="utf-8",
    )
    print(f"depts={n_dept} secondary={n_sec} datasets={n_ds}")
    for d in data["departments"]:
        print(f"  {d['id']}: {len(d.get('children') or [])} secs")


if __name__ == "__main__":
    main()
