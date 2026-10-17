# Provenance

- Local archive source: /Users/arnavagrawal/Documents/Unblocked Games Website/game-host-project/archive/games/tanukisunset
- Archive repository recorded in archive/SOURCE.json: https://github.com/HTML5GameArchive/gfiles
- Recorded original archive source commit: 870aeb6cd4d4d14ad8d7f0a537eb8d7a42fe1f3a
- Prepared destination: /private/tmp/ela-games-release-20261016/games/tanuki-sunset
- Preparation date: 2026-10-16

## Permission Status

The site owner reports creator permission to restore, host, and publish this game. That permission has not been independently verified and no supporting permission grant was supplied in this task. This package is NOT verified-open-source; no new license or redistribution rights are asserted. Existing third-party credits, license notices, advertising requirements, SDK integrations, and origin/authentication checks were not removed or bypassed.

The source commit is taken from the archive's recorded provenance, not independently compared against an upstream checkout. The archive and original game exports were not edited. The complete source folder was copied, including ancillary files; no remote dependencies were downloaded.

## Preparation and Runtime

Removed only an already-commented portal /js/main.js import from index.html; runtime code and tanuki.json are unchanged.

tanuki.json resolves its data, WASM code, and framework files under unity/. All three gzip payloads decompress successfully; data and WASM signatures are valid. The bundled UnityLoader includes gzip decompression support. Template progress/footer image references in css/style.css are absent. Embedded engine/analytics strings, including an HTTP IP-address endpoint, were observed but not exercised.

## Verification Scope

Local static checks only: copied-file comparison, HTML/CSS path inspection, JSON parsing, JavaScript syntax checks, and Unity manifest/payload inspection where applicable. No browser testing, remote service testing, push, or deployment was performed. Browser validation is delegated to the parent task. This document does not certify playability or fulfillment of third-party SDK/domain requirements.

