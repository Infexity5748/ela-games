# Retro Bowl browser package

Imported from HTML5GameArchive/gfiles, retrobowl/, commit
870aeb6cd4d4d14ad8d7f0a537eb8d7a42fe1f3a.

Publication authorization: the ELA Hub owner reports receiving permission
in person from the rights holders to copy and publicly self-host this package.
This report has not been independently verified and is not an open-source licence.
Original game and asset ownership remain with their respective rights holders.

Hosting changes: removed the root-relative script that loads a second game
engine; retained the html5game/ engine and its assets. Optional SDK calls
now use guarded window.PokiSDK references, so the existing unavailable-SDK
callback runs instead of throwing ReferenceError. No successful ad completion,
reward, authentication or ownership status is fabricated.
