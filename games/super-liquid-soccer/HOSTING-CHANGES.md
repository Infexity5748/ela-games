# Hosting changes

The source deployment has no PWA manifest, app icons or service worker at the
referenced URLs. This host points the icons at the supplied index.png, removes
the unavailable manifest link, and disables registration of that missing worker.
The engine, game payload and SDK bytes are unchanged. Original source hashes
remain in ASSET-MANIFEST.json; its index.html hash identifies the unmodified
download, not this hosting-adapted HTML. PROVENANCE.md records the source basis.
