# Aurum Nova Wellness Clinic — Website

Premium wellness clinic website built with **Next.js 16** (App Router), **Tailwind CSS v4**, and **Framer Motion**. Optimized for local SEO in Arecibo, Puerto Rico.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, Static) |
| Styling | Tailwind CSS v4 with CSS custom properties |
| Animations | Framer Motion |
| Icons | Lucide React |
| Charts | Recharts (metabolic calculator) |
| Deployment | Vercel |

---

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# → http://localhost:3000

# Type check
npx tsc --noEmit

# Lint
npm run lint

# Production build
npm run build

# Preview production build locally
npm run start
```

---

## Environment Variables

No environment variables are required for core functionality — all lead capture routes to WhatsApp and no backend is needed.

When you add analytics, create `.env.local` (gitignored):

```env
# Meta Pixel — replace with your actual Pixel ID when ready
# NEXT_PUBLIC_META_PIXEL_ID=XXXXXXXXXXXXXXXXXX

# Google Analytics 4 — replace with your Measurement ID when ready
# NEXT_PUBLIC_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
```

Never commit `.env.local` to version control.

---

## Where to Update Content

### Business info (phone, email, address, WhatsApp, Instagram)
**File:** `content/site.ts`

All contact details, WhatsApp number, domain URL, and social links live here. One file updates everything site-wide.

### Navigation links
```
components/layout/Header.tsx   — desktop + mobile nav
components/layout/Footer.tsx   — footer columns (programs, legal, contact)
```

### Service page content
Each program has its own component file. Update copy, pricing, or clinical language here:
```
components/pages/SueroterapiaPage.tsx
components/pages/InyectablesPage.tsx
components/pages/WellnessMujerPage.tsx
components/pages/WellnessHombrePage.tsx
components/pages/NutricionPage.tsx
components/pages/SuplementacionPage.tsx
components/pages/SkinGlowPage.tsx
components/pages/HairSupportPage.tsx
components/pages/CoachingPage.tsx
```

### SEO metadata (title, description, Open Graph) per page
Each `app/[slug]/page.tsx` exports a `metadata` object. Update these as copy evolves.

### FAQ content
**File:** `content/faq.ts` — 42 FAQs in 7 categories. Add, remove, or edit questions here.

---

## Where to Replace Logo & Images

### Logo
Place logo files in `public/brand/`:
```
public/brand/
  logo.png          ← main logo (also referenced in JSON-LD schema)
  logo-dark.png     ← for light backgrounds (optional)
  logo-light.png    ← for dark/gold backgrounds (optional)
```

Then in `components/layout/Header.tsx` and `Footer.tsx`, replace the text-based logo with:
```tsx
import Image from "next/image";

<Image
  src="/brand/logo.png"
  alt="Aurum Nova Wellness Clinic"
  width={140}
  height={40}
  priority
/>
```

### Hero & section images
When you have photography, place optimized images in `public/images/`.

Use Next.js `<Image>` with `priority` for above-the-fold images:
```tsx
import Image from "next/image";

// Hero image (above fold) — use priority
<Image
  src="/images/clinic-hero.jpg"
  alt="Aurum Nova Wellness Clinic — Arecibo, Puerto Rico"
  width={1200}
  height={630}
  priority
  quality={85}
/>

// Below-fold images — omit priority, Next.js lazy-loads automatically
<Image
  src="/images/team.jpg"
  alt="Equipo Aurum Nova"
  width={600}
  height={400}
/>
```

### Open Graph / Social share image
Create a 1200×630 JPG and place it at `public/og-image.jpg`.

Then reference it in `app/layout.tsx`:
```tsx
openGraph: {
  images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Aurum Nova Wellness Clinic" }],
},
```

---

## SEO Files

| File | Output URL | Purpose |
|---|---|---|
| `app/sitemap.ts` | `/sitemap.xml` | Auto-generated sitemap |
| `app/robots.ts` | `/robots.txt` | Crawler instructions |
| `components/JsonLd.tsx` | Injected in `<head>` | LocalBusiness + Organization structured data |
| `lib/seo.ts` | — | Reusable `buildMetadata()` helper |

**After deploying**, submit the sitemap to Google Search Console:
`https://aurumnovawellnessclinic.com/sitemap.xml`

**Update before launch in `components/JsonLd.tsx`:**
- `latitude` / `longitude` → replace approximate coordinates with exact clinic coordinates
- `openingHoursSpecification` → confirm actual operating days and hours

---

## Adding Analytics

### Meta Pixel
Add inside the `<body>` in `app/layout.tsx` (after the children):
```tsx
{/* Meta Pixel — uncomment and replace PIXEL_ID when ready */}
{/*
<Script id="meta-pixel" strategy="afterInteractive">
  {`
    !function(f,b,e,v,n,t,s){...meta pixel code...}
    fbq('init', 'PIXEL_ID');
    fbq('track', 'PageView');
  `}
</Script>
*/}
```

Import `Script` from `"next/script"`.

### Google Analytics 4
```bash
npm install @next/third-parties
```

In `app/layout.tsx`:
```tsx
import { GoogleAnalytics } from "@next/third-parties/google";

// Inside <html>:
<GoogleAnalytics gaId="G-XXXXXXXXXX" />
```

---

## Vercel Deployment

### Steps
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import from GitHub
3. Select the repo
4. **Framework:** Next.js (auto-detected)
5. **Root directory:** `.` (the project root)
6. Click **Deploy**

### Custom domain
Vercel Dashboard → Project → Settings → Domains:
- Add `aurumnovawellnessclinic.com`
- Add `www.aurumnovawellnessclinic.com`
- Set the apex domain (`aurumnovawellnessclinic.com`) as primary

### Build settings (auto-detected by Vercel)
| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Output directory | `.next` |
| Install command | `npm install` |

### Notes
- All pages are **statically generated** — fast CDN delivery, no server costs
- Lead forms open WhatsApp with pre-filled messages — **no API routes or backend required**
- Sitemap and robots.txt are generated automatically on each build
- The `public/brand/` and `public/images/` directories are served as static assets

---

## Brand Colors Reference

| Name | Hex | Usage |
|---|---|---|
| Gold | `#C9A84C` | Primary CTAs, highlights, icons |
| Gold Dark | `#A8872E` | Hover states |
| Dark BG | `#1A1A1A` | Dark section backgrounds |
| Card Dark | `#242424` | Cards on dark sections |
| Border Dark | `#2D2D2D` | Borders on dark sections |
| Light BG | `#FAF8F4` | Light section backgrounds |
| Beige Border | `#E8E4DA` | Borders on light sections |
| Text Muted | `#6B6B6B` | Secondary text |
| Text Dimmer | `#9A9A9A` | Tertiary text |

---

## Legal Pages (noIndex)

| Page | Route |
|---|---|
| Aviso Médico y Legal | `/disclaimer-medico` |
| Política de Privacidad | `/privacidad` |
| Términos de Uso | `/terminos` |

These pages have `robots: { index: false }` and are excluded from the sitemap priority list.

---

## Contact

**Aurum Nova Wellness Clinic**
Arecibo Medical Plaza, Suite 201
Arecibo, Puerto Rico 00612
WhatsApp: 939-641-0504
Email: aurumnovawc@gmail.com
Instagram: [@aurumnovawc](https://instagram.com/aurumnovawc)
