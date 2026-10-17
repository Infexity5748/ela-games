# Provenance

- Local archive source: /Users/arnavagrawal/Documents/Unblocked Games Website/game-host-project/archive/games/basketballstars
- Archive repository recorded in archive/SOURCE.json: https://github.com/HTML5GameArchive/gfiles
- Recorded original archive source commit: 870aeb6cd4d4d14ad8d7f0a537eb8d7a42fe1f3a
- Prepared destination: /private/tmp/ela-games-release-20261016/games/basketball-stars
- Preparation date: 2026-10-16

## Permission Status

The site owner reports creator permission to restore, host, and publish this game. That permission has not been independently verified and no supporting permission grant was supplied in this task. This package is NOT verified-open-source; no new license or redistribution rights are asserted. Existing third-party credits, license notices, advertising requirements, SDK integrations, and origin/authentication checks were not removed or bypassed.

The source commit is taken from the archive's recorded provenance, not independently compared against an upstream checkout. The archive and original game exports were not edited. The complete source folder was copied, including ancillary files; no remote dependencies were downloaded.

## Preparation and Runtime

Removed the missing portal-only /js/main.js import from index.html. Game code, the local GameDistribution SDK, game ID 69d78d071f704fa183d75b4114ae40ec, SDK event callbacks, Google IMA import, advertising, and credits remain unchanged.

The main runtime is assets/basketball_legends_2019.min.js, as supplied by the archive. It dynamically loads BlurX/BlurY filters from cdn.rawgit.com and cachebuster/storage plugins from cdn.jsdelivr.net. The SDK contacts GameDistribution and advertising/analytics services. These dependencies were retained, not replaced with stubs, and their reachability and origin authorization were not tested. WOFF fonts exist; optional EOT/TTF/SVG alternatives are absent. This is not an offline/self-contained package.

## Verification Scope

Local static checks only: copied-file comparison, HTML/CSS path inspection, JSON parsing, JavaScript syntax checks, and Unity manifest/payload inspection where applicable. No browser testing, remote service testing, push, or deployment was performed. Browser validation is delegated to the parent task. This document does not certify playability or fulfillment of third-party SDK/domain requirements.

# Local runtime libraries

The archived SDK's Base64 UTF-8 byte-range expression had mojibake characters
and threw Range out of order at runtime. It now uses the original UTF-8 byte
ranges written as ASCII Unicode escapes. No other SDK logic is changed.

Hosting repair on 2026-10-17: four runtime library URLs in
assets/basketball_legends_2019.min.js now point to vendor/ files instead
of the retired RawGit CDN and external jsDelivr requests. GameDistribution
SDK, advertising callbacks and origin checks are unchanged.

- phaser-cachebuster 2.0.0 and phaser-super-storage 1.0.4, OrangeGames, MIT.
  Exact browser distributions and licences from their npm releases are retained.
- Phaser CE BlurX / BlurY filters from photonstorm/phaser-ce commit
  92a329f4c79996785c7942809813ce36550fa64d, MIT licence retained.

