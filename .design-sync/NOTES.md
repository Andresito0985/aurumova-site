# Design-Sync Notes — aurumova-site

## Setup
- Project: Next.js 16 website (not a standalone design system package)
- Shape: `package` (synth-entry mode — no dist; converter synthesizes bundle from `components/`)
- `srcDir: components/ui` for UI primitives; section/visual components pinned via `componentSrcMap`
- No Storybook; no published package

## CSS compilation (must run before converter on every re-sync)
- Tailwind CSS v4 — uses `@import "tailwindcss"` with `@tailwindcss/postcss`
- Raw `app/globals.css` cannot be consumed by esbuild directly
- **Always run `node .design-sync/compile-css.mjs` first** — this outputs `ds-bundle-tmp/compiled-tailwind.css`
- The compile-css script adds `@source` directives to scan `components/**/*.tsx` + `app/**/*.tsx` for utility class usage
- Without this, Tailwind only generates ~15KB of base styles; with it, ~142KB including all utilities

## Re-sync order
1. `node .design-sync/compile-css.mjs`
2. `node .ds-sync/package-build.mjs --config .design-sync/config.json --node-modules ./node_modules --out ./ds-bundle`
3. `node .ds-sync/package-validate.mjs ./ds-bundle`

Or via driver (after first sync):
1. `node .design-sync/compile-css.mjs`
2. `node .ds-sync/resync.mjs --config .design-sync/config.json --node-modules ./node_modules --out ./ds-bundle --remote .design-sync/.cache/remote-sync.json`

## bundle.mjs override (.design-sync/overrides/bundle.mjs)
- **process shim** — Next.js internals reference `process.env.__NEXT_IMAGE_OPTS`, `process.env.__NEXT_ROUTER_BASEPATH`, etc. which crash the browser sandbox. The override adds `banner.js: 'var process=typeof process!=="undefined"?process:{env:{NODE_ENV:"development"},platform:"browser"};'`
- **next/* stubs** — `nextShim` esbuild plugin intercepts `next/image`, `next/link`, `next/head`, `next/navigation`, `next/router`, `next/font/*` and replaces them with lightweight browser stubs. This dropped the bundle from 882 KB to 620 KB.
- esbuild lives in `.ds-sync/node_modules/` (not repo root) — override imports via `../../.ds-sync/node_modules/esbuild/lib/main.js`

## Known issues
- `BeforeAfterSlider` and `CTABanner` import from `next/image`/`next/link` — shimmed to plain `<img>` / `<a>` in preview context
- `CTASection` imports from `@/content/site` — resolves via tsconfig `@/*` alias to `./content/site.ts`; contact links use real Aurum Nova data
- `GroupedFAQAccordion` and `CTASection` are hardcoded with Aurum Nova content (no props) — previews are informative but not prop-configurable
- `HeadlineReveal whileInView` — motion headlines start at opacity:0 but trigger in Playwright because the full page is in viewport on load; subsequent scrolling renders are unaffected

## Re-sync risks
- Tailwind utility classes: if new utility classes are added to components, re-run compile-css.mjs to capture them
- Brand token changes in `app/globals.css` require re-running compile-css.mjs
- `@/content/site` is bundled at sync time — if clinic info changes, re-sync is needed
- `srcDir: components/ui` means new components in `components/ui/` are auto-discovered; components in other directories need explicit `componentSrcMap` entries
