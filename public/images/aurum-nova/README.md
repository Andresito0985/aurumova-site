# `public/images/aurum-nova/` & `public/videos/aurum-nova/`

Premium hero / section media for the Aurum Nova site. Drives every
`<MediaSlot>` via the registry at `content/aurum-media-assets.ts`.

## How activation works
1. Drop an approved file into the matching folder below.
2. Set the corresponding slot in `content/aurum-media-assets.ts` (flip `null`
   → an `AurumMediaAsset` object with the public path + `alt`).
3. The consuming section renders the video/image automatically. Until then it
   renders its **fallback** (the section's current visual) or the editorial
   placeholder — never a broken file, never layout shift.

## Brand & compliance (all assets)
- Premium clinical wellness · minimalist · white / cream / gold / charcoal.
- ❌ No cheap-spa aesthetic. ❌ No sexualized treatment imagery.
- ❌ No exaggerated body-transformation or before/after imagery.
- ❌ No unsupported medical claims in `alt` text.

## Video specs (loops)
- Format: **H.264 MP4** (optionally a `.webm` twin), muted, seamless **6–10 s**.
- Size: **≤ ~3 MB**, **≤ 1080p**. Always ship a matching **poster** still.
- Rendered as `autoPlay muted loop playsInline preload="metadata"`.

## Image specs (stills / posters)
- Format: **WebP** preferred (JPG acceptable), sRGB.
- Hero/landscape: ~1920×1080. Portrait slots: ~1600×2000.
- Compress to a sane weight (target ≤ ~300 KB for stills).

## Folders & expected files
| Folder | File (suggested) | Slot in registry | Subject |
|---|---|---|---|
| `hero/` | `hero-clinic.webp` (poster) | `hero.clinic` | Premium clinic / laser-room still |
| `../../videos/aurum-nova/` | `hero-loop.mp4` | `hero.clinic` | Ambient clinic / laser-room loop |
| `laser/` | `laser-treatment-01.webp` | `laser.treatment` | Clinical diode device / treatment detail |
| `../../videos/aurum-nova/` | `laser-loop.mp4` | `laser.treatment` | Diode device / handpiece loop |
| `metabolic/` | `metabolic-consult-01.webp` | `metabolic.consult` | Consultation / body-composition / follow-up |
| `facials/` | `facial-treatment-01.webp` | `facials.treatment` | Facial room / treatment detail |
| `brows/` | `brows-detail-01.webp` | `brows.detail` | Brow detail / tools editorial |
| `team/` | `team-portrait-01.webp` | `team.portrait` | Provider / clinic-team editorial portrait |
| `clinic/` | `clinic-room-01.webp` | `clinic.room` | Real clinic / Infinity Health Shared Spaces room |
| `clinic/` | `clinic-detail-01.webp` | `clinic.detail` | Interior detail (reception, gold accents, texture) |
| `laser/` | `laser-hero.webp` | `laser.hero` | /laser-diodo hero device/room still |
| `../../videos/aurum-nova/` | `laser-loop.mp4` | `laser.hero` / `laser.treatment` | Diode device / handpiece loop |
