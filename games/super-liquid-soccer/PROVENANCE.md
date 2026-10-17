# Super Liquid Soccer: Local Core Package

Published-host adaptation: see HOSTING-CHANGES.md for the small index.html
changes made after this original preparation record. The core game bytes remain
unchanged. Source downloads and integrity records are retained in this directory
as downloads.json, integrity.json and browser-test.json.

Permission status: **owner-reported-not-verified**. The website owner/user reports
permission from rights holders to copy and self-host this game. This report has
not been independently verified. No license or permission grant is invented or
implied by this package.

Source deployment: https://db.duckmath.org/html/super_liquid_soccer/

Deployment source is **unpinned**: no matching Git commit is claimed. Downloaded
asset URLs, fetch timestamps, byte sizes and SHA256 hashes are recorded in
`_audit/downloads.json`. Hashes identify the exact retrieved bytes, not a license
or an upstream version guarantee.

The original HTML, Godot engine JS, WASM, PCK, background image, SDK loader,
explicitly loaded SDK core, and its declared local JSON resource are retained.
All original scripts and the PCK are preserved byte-for-byte, including embedded
credits and notices. The SDK files already use a `patch/` directory and local
JSON URLs in the source deployment; these are copied unchanged. No origin,
authentication, advertising or DRM behavior has been modified here.

Godot PCK header identifies engine 3.5.1. The HTML's PCK progress-size hint is
13,430,320 bytes, but the actual retrieved PCK is 14,088,880 bytes. The WASM is
13,789,463 bytes and matches its declared size. The size hint is not an integrity
checksum and is left unchanged.

The live source returns 404 for its referenced manifest, icons, service worker,
audio worklet, generic worker and side-WASM paths. These files are not fabricated.
The normal startup uses the main WASM/PCK; `gdnativeLibs` is empty. The SDK's
`?tag=kids` variant and arbitrary SDK-version overrides are outside this core
package. Optional missing files and browser-test results are recorded separately.

Serve over HTTP, not `file://`. A local preview server is supplied at
`_audit/serve.mjs`; run it with Node. No publishing, deployment or host-repository
changes are part of this package.

## Verification

Local Chrome preview reached the rendered soccer field, scoreboard and movement
tutorial at `http://127.0.0.1:49297/`. All eight retained assets matched their
source SHA256s; the WASM validates, and all 736 PCK directory entries passed their
embedded MD5 checks. `SHA256SUMS` and `ASSET-MANIFEST.json` provide portable asset
checks; `_audit/integrity.json` records structural verification.

Missing PWA/icon/service-worker files did not block core startup. No cleanup was
necessary, so the HTML and all downloaded assets remain unmodified. The original
SDK logs an error while processing its supplied empty JSON response, and the
missing service-worker registration logs an error after startup. Details and
untested branches are in `_audit/browser-test.json`. Full match, audio and device
testing remain with the parent browser test; this is not a claim of a pristine
console or complete offline SDK/backend support.
