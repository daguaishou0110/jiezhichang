# -*- coding: utf-8 -*-
"""Download ccfddl conference YAMLs and merge into enrichment + site fields.

Adds per-venue:
  - dblp path (https://dblp.org/db/conf/<id>/index.html)
  - website / latest edition link
  - deadline / date / place for recent years (2024–2027)

Writes:
  data/ccfddl_cache.json
  patches data/ccf-enrichment.json (in place, non-destructive)
"""
from __future__ import annotations

import json
import re
import shutil
import subprocess
import tempfile
from copy import deepcopy
from datetime import date
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data"
ENRICH = DATA / "ccf-enrichment.json"
CACHE = DATA / "ccfddl_cache.json"
CCF = DATA / "ccf-conferences.json"

ALIASES = {
    "SIGKDD": ["KDD", "SIGKDD"],
    "KDD": ["KDD", "SIGKDD"],
    "ACM MM": ["MM", "ACM MM", "ACMMM"],
    "MM": ["MM", "ACM MM"],
    "S&P": ["S&P", "SP", "Oakland", "IEEE S&P"],
    "IEEE S&P": ["S&P", "IEEE S&P"],
    "FSE": ["FSE", "ESEC/FSE", "ESEC-FSE"],
    "ESEC/FSE": ["FSE", "ESEC/FSE"],
    "CODES+ISSS": ["CODES+ISSS", "CODES-ISSS"],
    "NeurIPS": ["NeurIPS", "NIPS"],
    "WWW": ["WWW", "TheWebConf"],
    "USENIX ATC": ["ATC", "USENIX ATC", "SIGOPS ATC"],
    "ACM SIGOPS ATC": ["ATC", "USENIX ATC", "SIGOPS ATC"],
    "HOT CHIPS": ["HotChips", "HOT CHIPS", "Hot Chips"],
    "Euro-Par": ["Euro-Par", "EuroPar"],
    "ICSME": ["ICSME", "ICSM"],
    "SIGGRAPH Asia": ["SIGGRAPH Asia", "SIGGRAPHASIA"],
    "UbiComp": ["UbiComp", "UbiComp/ISWC"],
    "Performance": ["Performance", "SIGMETRICS", "ACM SIGMETRICS"],
    "ICWSM": ["ICWSM"],
    "CGO": ["CGO", "IEEE/ACM CGO"],
    "CASES": ["CASES"],
    "APWeb": ["APWeb", "APWeb-WAIM"],
    "WAIM": ["WAIM", "APWeb-WAIM"],
}


def norm(s: str) -> str:
    return re.sub(r"[^a-z0-9]+", "", (s or "").lower())


def clone_ccfddl(dest: Path) -> Path:
    """Prefer local zip extract; fall back to git sparse clone."""
    local = DATA / "_ccfddl_src" / "ccf-deadlines-main" / "conference"
    if local.exists() and any(local.rglob("*.yml")):
        print("using local ccfddl extract", local)
        return local
    if dest.exists():
        shutil.rmtree(dest, ignore_errors=True)
    dest.mkdir(parents=True, exist_ok=True)
    subprocess.run(
        [
            "git",
            "clone",
            "--depth",
            "1",
            "--filter=blob:none",
            "--sparse",
            "https://github.com/ccfddl/ccf-deadlines.git",
            str(dest),
        ],
        check=True,
        capture_output=True,
        text=True,
    )
    subprocess.run(
        ["git", "-C", str(dest), "sparse-checkout", "set", "conference"],
        check=True,
        capture_output=True,
        text=True,
    )
    return dest / "conference"


def load_yaml_venues(conf_root: Path) -> dict[str, dict]:
    by_title: dict[str, dict] = {}
    for yml in conf_root.rglob("*.yml"):
        try:
            docs = yaml.safe_load(yml.read_text(encoding="utf-8")) or []
        except Exception as e:
            print("yaml fail", yml, e)
            continue
        if not isinstance(docs, list):
            docs = [docs]
        for doc in docs:
            if not isinstance(doc, dict) or not doc.get("title"):
                continue
            title = str(doc["title"]).strip()
            by_title[title] = {
                "title": title,
                "description": doc.get("description") or "",
                "sub": doc.get("sub") or "",
                "rank": (doc.get("rank") or {}).get("ccf") or "",
                "dblp": doc.get("dblp") or "",
                "confs": doc.get("confs") or [],
                "source_file": str(yml.relative_to(conf_root)).replace("\\", "/"),
            }
    return by_title


def pick_recent_confs(confs: list[dict], years=(2024, 2025, 2026, 2027)) -> list[dict]:
    want = {int(y) for y in years}
    out = []
    for c in confs or []:
        try:
            y = int(c.get("year"))
        except Exception:
            continue
        if y in want:
            out.append(c)
    return sorted(out, key=lambda x: int(x["year"]))


def nearest_deadline(timeline: list[dict]) -> dict | None:
    if not timeline:
        return None
    today = date.today().isoformat()
    future, past = [], []
    for t in timeline:
        dl = (t or {}).get("deadline") or ""
        if not dl or str(dl).upper() == "TBD":
            continue
        day = str(dl)[:10]
        item = {
            "deadline": str(dl),
            "abstract_deadline": (t or {}).get("abstract_deadline") or "",
            "comment": (t or {}).get("comment") or "",
        }
        (future if day >= today else past).append(item)
    if future:
        return sorted(future, key=lambda x: x["deadline"])[0]
    if past:
        return sorted(past, key=lambda x: x["deadline"])[-1]
    return None


def summarize_edition(c: dict) -> dict:
    nd = nearest_deadline(c.get("timeline") or [])
    return {
        "year": int(c.get("year")),
        "id": c.get("id") or "",
        "link": c.get("link") or "",
        "date": c.get("date") or "",
        "place": c.get("place") or "",
        "timezone": c.get("timezone") or "",
        "deadline": (nd or {}).get("deadline") or "",
        "abstract_deadline": (nd or {}).get("abstract_deadline") or "",
        "deadline_comment": (nd or {}).get("comment") or "",
    }


def build_slim(by_title: dict[str, dict]) -> dict[str, dict]:
    slim = {}
    for title, v in by_title.items():
        recent = [summarize_edition(c) for c in pick_recent_confs(v.get("confs") or [])]
        slim[title] = {
            "title": title,
            "description": v["description"],
            "sub": v["sub"],
            "rank": v["rank"],
            "dblp": v["dblp"],
            "source_file": v["source_file"],
            "recent": recent,
            "latest": recent[-1] if recent else None,
        }
    return slim


def lookup_slim(slim: dict[str, dict], short: str) -> dict | None:
    index = {norm(t): ent for t, ent in slim.items()}
    for k in [short] + ALIASES.get(short, []):
        if k in slim:
            return slim[k]
        ent = index.get(norm(k))
        if ent:
            return ent
    return None


def main() -> None:
    with tempfile.TemporaryDirectory(prefix="ccfddl_") as tmp:
        conf_root = clone_ccfddl(Path(tmp) / "repo")
        by_title = load_yaml_venues(conf_root)
        print("ccfddl raw titles:", len(by_title))
        slim = build_slim(by_title)

    CACHE.write_text(json.dumps(slim, ensure_ascii=False, indent=2), encoding="utf-8")
    print("wrote", CACHE, "entries", len(slim))

    ccf = json.loads(CCF.read_text(encoding="utf-8"))
    enrich = json.loads(ENRICH.read_text(encoding="utf-8")) if ENRICH.exists() else {"venues": {}}
    venues = enrich.setdefault("venues", {})

    hit = 0
    dblp_fix = 0
    ddl_set = 0
    missing = []
    for c in ccf["conferences"]:
        short = c["short"]
        ddl = lookup_slim(slim, short)
        if not ddl:
            missing.append(f"{c['rank']}:{short}")
            continue
        hit += 1
        v = deepcopy(venues.get(short) or {})
        if ddl.get("dblp"):
            url = f"https://dblp.org/db/conf/{ddl['dblp']}/index.html"
            if "dblp.org/db/" not in (v.get("dblp") or ""):
                v["dblp"] = url
                dblp_fix += 1
            if not v.get("papers_index") or "search?q=" in (v.get("papers_index") or ""):
                v["papers_index"] = url
        latest = ddl.get("latest") or {}
        if latest.get("link"):
            v["website"] = latest["link"]
        v["ccfddl"] = {
            "title": ddl["title"],
            "sub": ddl.get("sub") or "",
            "rank": ddl.get("rank") or "",
            "recent": ddl.get("recent") or [],
            "latest": latest,
        }
        stats = v.setdefault("stats", {})
        for ed in ddl.get("recent") or []:
            ys = str(ed["year"])
            if ys not in stats:
                stats[ys] = {
                    "accepted": None,
                    "submitted": None,
                    "notes": "",
                    "directions": [],
                    "papers_index": "",
                }
            bits = []
            if ed.get("deadline"):
                bits.append(f"截稿 {ed['deadline'][:10]}")
                ddl_set += 1
            if ed.get("date"):
                bits.append(f"会期 {ed['date']}")
            if ed.get("place"):
                bits.append(ed["place"])
            note = "；".join(bits)
            if note:
                old = stats[ys].get("notes") or ""
                if "截稿" not in old and "会期" not in old:
                    stats[ys]["notes"] = f"{old}｜{note}".strip("｜") if old else note
            if ed.get("link") and (
                not stats[ys].get("papers_index")
                or "search?q=" in (stats[ys].get("papers_index") or "")
            ):
                # keep official paper lists if already set; else homepage
                if "dblp.org" not in (stats[ys].get("papers_index") or ""):
                    pass
            stats[ys]["deadline"] = ed.get("deadline") or ""
            stats[ys]["date"] = ed.get("date") or ""
            stats[ys]["place"] = ed.get("place") or ""
            stats[ys]["website"] = ed.get("link") or ""
        venues[short] = v

    meta = enrich.setdefault("_meta", {})
    meta["updated"] = date.today().isoformat()
    sources = list(meta.get("sources") or [])
    src = "https://github.com/ccfddl/ccf-deadlines"
    if src not in sources:
        sources.append(src)
    meta["sources"] = sources
    meta["ccfddl"] = {
        "matched": hit,
        "unmatched": len(missing),
        "dblp_fixed": dblp_fix,
        "deadline_year_hits": ddl_set,
        "unmatched_sample": missing[:40],
    }
    ENRICH.write_text(json.dumps(enrich, ensure_ascii=False, indent=2), encoding="utf-8")
    print(json.dumps(meta["ccfddl"], ensure_ascii=False, indent=2))
    print("wrote", ENRICH)


if __name__ == "__main__":
    main()
