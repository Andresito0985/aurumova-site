# Aurum Nova brand assets

Place official brand files here.

## Expected file

`aurum-nova-logo-transparent-4096.png`

- 4096 px wide (or larger) PNG with transparent background
- The logo lockup or mark, depending on what's available
- Used by `components/sections/HomeHero.tsx` in the dark dashboard card
  (currently shows the `AN` monogram fallback while this file is missing)

## How the code consumes it

The site does **not** assume the file exists. Components fall back to a
text monogram (`AN`) until the official logo is placed at the expected
path. When ready, update the relevant component to swap the inline
monogram for `next/image`:

```tsx
import Image from "next/image";

<Image
  src="/brand/aurum-nova-logo-transparent-4096.png"
  alt="Aurum Nova"
  width={48}
  height={48}
  className="object-contain"
  priority
/>
```

## Do not

- Do not invent or generate a substitute logo.
- Do not stretch, crop, or recolor the official asset.
- Do not commit unauthorized variants under different filenames.
