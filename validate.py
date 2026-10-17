"""Validate the explicitly approved static release, not the local archive."""
import json
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parent


class Assets(HTMLParser):
    def __init__(self):
        super().__init__()
        self.paths = []
        self.base = ""

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "base":
            self.base = attrs.get("href", "")
        if tag in {"script", "img", "audio", "source"} and attrs.get("src"):
            self.paths.append(attrs["src"])
        if tag == "link" and attrs.get("href") and attrs.get("rel") in {
            "stylesheet", "icon", "shortcut icon", "image_src"
        }:
            self.paths.append(attrs["href"])


manifest = json.loads((ROOT / "games-manifest.json").read_text())
assert {p.name for p in (ROOT / "games").iterdir()} == {g["id"] for g in manifest}
for game in manifest:
    folder = ROOT / "games" / game["id"]
    assert (ROOT / game["notice"]).is_file(), game
    assert (folder / "PROVENANCE.md").is_file(), game
    assert (folder / "index.html").is_file(), game
    for required in game.get("required", []):
        asset = folder / required
        assert asset.is_file() and asset.stat().st_size, (game["id"], required)
    if game.get("unityManifest"):
        configuration = folder / game["unityManifest"]
        unity = json.loads(configuration.read_text(encoding="utf-8-sig"))
        # These releases target modern WebAssembly browsers, not the old asm.js fallback.
        for key in ["dataUrl", "wasmCodeUrl", "wasmFrameworkUrl"]:
            asset = configuration.parent / unity[key]
            assert asset.is_file() and asset.stat().st_size, (game["id"], key)
    for page in [folder / "index.html"]:
        parser = Assets()
        parser.feed(page.read_text(errors="replace"))
        for raw in parser.paths:
            if "'+" in raw or "+'" in raw:
                continue  # Language assets assembled by the original runtime.
            url = urlsplit(raw)
            if url.scheme or url.netloc:
                assert url.hostname in game.get("remoteResources", []), (page, raw, "unreviewed external runtime")
                continue
            asset = page.parent / parser.base / unquote(url.path)
            assert asset.is_file(), (page, raw, "missing asset")
    print("Validated:", game["title"])
for path in ROOT.rglob("*"):
    if ".git" in path.parts:
        continue
    assert not path.is_symlink(), path
    if path.is_file():
        assert path.stat().st_size < 50 * 1024 * 1024, path
        assert path.name not in {".env", ".env.local"}, path
