# -*- coding: utf-8 -*-
"""Local sync server for imaging-datasets editor.

Usage:
  cd jiezhichang
  python tools/serve_imaging_datasets.py

Open http://127.0.0.1:18765/imaging-datasets.html
Click 「同步到本地文件」 — writes data/imaging-datasets.js
"""
from __future__ import annotations

import json
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parents[1]
DATA_JS = ROOT / "data" / "imaging-datasets.js"
HOST, PORT = "127.0.0.1", 18765


def wrap_js(payload: dict) -> str:
    body = json.dumps(payload, ensure_ascii=False, indent=2)
    return (
        "/** 医学影像公开数据集目录 — 按部位/模态类目补充。"
        "编辑本文件即可，刷新 imaging-datasets.html。 */\n"
        f"window.IMAGING_DATASETS = {body};\n"
    )


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def _cors(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")

    def do_OPTIONS(self):
        self.send_response(204)
        self._cors()
        self.end_headers()

    def do_POST(self):
        path = urlparse(self.path).path
        if path != "/api/imaging-datasets":
            self.send_error(404)
            return
        length = int(self.headers.get("Content-Length", "0"))
        raw = self.rfile.read(length)
        try:
            payload = json.loads(raw.decode("utf-8"))
            if not isinstance(payload, dict) or "categories" not in payload:
                raise ValueError("need object with categories")
            DATA_JS.parent.mkdir(parents=True, exist_ok=True)
            DATA_JS.write_text(wrap_js(payload), encoding="utf-8")
        except Exception as e:
            msg = str(e).encode("utf-8")
            self.send_response(400)
            self._cors()
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Content-Length", str(len(msg) + 20))
            self.end_headers()
            self.wfile.write(b'{"ok":false,"error":' + json.dumps(str(e)).encode("utf-8") + b"}")
            return
        out = b'{"ok":true,"path":"data/imaging-datasets.js"}'
        self.send_response(200)
        self._cors()
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(out)))
        self.end_headers()
        self.wfile.write(out)

    def log_message(self, fmt, *args):
        print("[%s] %s" % (self.log_date_time_string(), fmt % args))


def main():
    print(f"Root: {ROOT}")
    print(f"Will write: {DATA_JS}")
    print(f"Open: http://{HOST}:{PORT}/imaging-datasets.html")
    ThreadingHTTPServer((HOST, PORT), Handler).serve_forever()


if __name__ == "__main__":
    main()
