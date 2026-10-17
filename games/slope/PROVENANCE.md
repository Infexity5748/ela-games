# Provenance

- Local archive source: /Users/arnavagrawal/Documents/Unblocked Games Website/game-host-project/archive/games/slope
- Archive repository recorded in archive/SOURCE.json: https://github.com/HTML5GameArchive/gfiles
- Recorded original archive source commit: 870aeb6cd4d4d14ad8d7f0a537eb8d7a42fe1f3a
- Prepared destination: /private/tmp/ela-games-release-20261016/games/slope
- Preparation date: 2026-10-16

## Permission Status

The site owner reports creator permission to restore, host, and publish this game. That permission has not been independently verified and no supporting permission grant was supplied in this task. This package is NOT verified-open-source; no new license or redistribution rights are asserted. Existing third-party credits, license notices, advertising requirements, SDK integrations, and origin/authentication checks were not removed or bypassed.

The source commit is taken from the archive's recorded provenance, not independently compared against an upstream checkout. The archive and original game exports were not edited. The complete source folder was copied, including ancillary files; no remote dependencies were downloaded.

## Preparation and Runtime

Removed the injected WebSocket and XMLHttpRequest proxy overrides from index.html, restoring native request behavior. Removed the missing portal-only /js/main.js import and pointed the shortcut icon to the existing slope4.jpeg. No proxy was added.

Build/slope_27Sept.json resolves its data, WASM code, and framework files within Build/. All three gzip payloads decompress successfully; data and WASM signatures are valid. The optional asm.js code/memory/framework fallback files named in the manifest are absent, so a WebAssembly-capable browser is required. Existing Y8 integration, leaderboard/analytics references, credits, splash assets, and the archived InitExternEval stub are unchanged. Some unused/light-theme/footer CSS image references are missing. Embedded binary URLs are not proof of successful runtime requests.

## Verification Scope

Local static checks only: copied-file comparison, HTML/CSS path inspection, JSON parsing, JavaScript syntax checks, and Unity manifest/payload inspection where applicable. No browser testing, remote service testing, push, or deployment was performed. Browser validation is delegated to the parent task. This document does not certify playability or fulfillment of third-party SDK/domain requirements.

