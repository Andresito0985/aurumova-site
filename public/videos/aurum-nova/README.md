# `public/videos/aurum-nova/`

Short, muted, seamless video loops for `<MediaSlot>` (registry:
`content/aurum-media-assets.ts`). Rendered `autoPlay muted loop playsInline
preload="metadata"` with a poster still, so they never block first paint and
never require audio/captions.

## Specs
- **H.264 MP4** (optionally a `.webm` twin for smaller delivery).
- Muted, seamless **6–10 s** loop, **≤ 1080p**, **≤ ~3 MB**.
- Always pair with a poster still under `public/images/aurum-nova/...`.

## Expected files
| File | Registry slot | Poster | Subject |
|---|---|---|---|
| `hero-loop.mp4` | `hero.clinic` | `images/aurum-nova/hero/hero-clinic.webp` | Ambient clinic / laser-room |
| `laser-loop.mp4` | `laser.treatment` | `images/aurum-nova/laser/laser-treatment-01.webp` | Diode device / handpiece detail |

## Compliance
Premium clinical wellness only. No sexualized imagery, no exaggerated
body-transformation / before-after content, no unsupported medical claims.
