# Aurum Nova — 3D Models

This directory holds the GLB assets used by the interactive laser experience
on `/laser-diodo` (component: `Laser3DExperience`).

## Expected files

| File | Used by | Required |
| ---- | ------- | -------- |
| `aurum-laser-machine.glb` | Main 3D viewer (full machine) | Recommended |
| `aurum-laser-handpiece.glb` | Optional close-up section (handpiece detail) | Optional |

If a file is missing, the section automatically renders a premium fallback
(real machine photo + interactive markers). No errors are thrown.

## Drop-in steps

1. Export the model as `.glb` (binary glTF, embedded textures).
2. Name it exactly `aurum-laser-machine.glb`.
3. Place it inside `public/models/`.
4. Refresh the `/laser-diodo` page. The viewer detects the file via a
   `HEAD` request and switches from fallback → live 3D automatically.

For a separate handpiece scene, repeat with `aurum-laser-handpiece.glb`.

## Optimization checklist

- Target weight: **under 5–10 MB**. Lower is better for mobile.
- Apply **Draco** mesh compression when exporting.
- Use **PBR materials** (metallic-roughness workflow). Bake AO when possible.
- Texture sizes: **2048 max** for primary surfaces, 1024 for accents.
- Center the pivot at the geometric center (the viewer auto-frames).
- Keep the model facing forward (touchscreen toward camera).
- Background should be transparent / neutral (the scene already provides
  studio lighting and a graphite backdrop).
- Test rotation on mobile after dropping the file in.

## Material reference (visual continuity)

- Body: pearl white (slightly matte, faint subsurface warmth).
- Touchscreen: glossy black, very low roughness, subtle blue UI emissive.
- Accents: champagne gold (≈ `#C9A86A`), metallic.
- Side vents / panels: graphite (`#1A1A1A` – `#242424`).
- Handpiece LED strip: emissive sky-blue (`#38BDF8`).
- Emergency button: red (`#E03A3A`), low metallic.
- Cable: grey corrugated (~2.5 cm dia).
- Handpiece treatment window: **gold / amber sapphire** (warm, slightly
  emissive), not dark glass — this is the machine's key identifier.

## Generated model

The shipped `aurum-laser-machine.glb` is built parametrically from the
real reference photos + measured dimensions by
`scripts/build-laser-console.py` (Blender, headless). Regenerate with:

```
/Applications/Blender.app/Contents/MacOS/Blender --background \
    --python scripts/build-laser-console.py
```

Console-only (no cart). Measured: body ~40 H x 38 W x 52 D cm; screen
frame 31 x 23 x 4 cm tilted ~20 deg back; handpiece ~26 cm.

**Draco is intentionally disabled.** The mesh is tiny (~0.35 MB), and
shipping plain glTF removes model-viewer's runtime dependency on an
external Draco-decoder CDN (more robust on clinic networks).
`scripts/_render-preview.py` renders QA stills of the exported GLB.

## Do **not** include in the model

- Brand text, medical claims, prices, or promotional copy baked into
  textures or geometry. All copy lives in HTML for SEO, accessibility,
  and easy editing.
- Cartoonish proportions or sci-fi exaggerations. Keep it premium-medical.

## Generation prompt (for Meshy / Tripo / Spline / external 3D AI)

> Create a premium stylized but realistic 3D model of a diode laser hair
> removal machine for Aurum Nova Wellness Clinic.
>
> Visual characteristics:
> - white/pearl medical-aesthetic body
> - glossy black vertical touchscreen on the front
> - champagne-gold metallic accents (thin trims)
> - graphite side panels with subtle vents
> - red emergency button and key switch on the front lower area
> - mounted handpiece on the right side
> - white/pearl handpiece with rectangular sapphire/contact-cooling head
> - small front display on the handpiece
> - blue LED strip on the side of the handpiece
> - grey corrugated cable from machine to handpiece
> - clean, premium, elegant, realistic but slightly idealized
>
> Do NOT add medical claims, logos, or promotional text on the model.
> Keep it suitable for a high-end medical aesthetics website.
>
> Export as:
> - GLB (binary glTF), web-optimized
> - PBR materials, Draco-compressed
> - transparent-background-friendly
> - under 10 MB if possible
> - named `aurum-laser-machine.glb`
>
> Also provide a separate close-up handpiece named
> `aurum-laser-handpiece.glb`.

## Library used

The viewer is rendered with [`@google/model-viewer`](https://modelviewer.dev/),
loaded as a CDN script (no npm dependency added). It supports
`camera-controls`, `auto-rotate`, neutral environment lighting, and
graceful fallback when the GLB is missing.
