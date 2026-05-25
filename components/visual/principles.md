# Aurum Nova — Visual System Principles

A developer-facing reference for the Apple-inspired visual language of the Aurum Nova Wellness Clinic website. This document is the source of truth for how reusable visual components in `components/visual/` should look, feel, and be composed.

> **Apple-like means restraint, not imitation.** Do not copy Apple branding, typography choices specific to Apple, or Apple product assets. The principles below describe a *design posture* — large editorial typography, restrained motion, service-as-product framing — translated into the Aurum Nova brand.

---

## 1. Brand translation

Aurum Nova reads as **premium clinical wellness**, not consumer tech. The Apple-like restraint should be expressed through clinical luxury, not minimalist tech polish.

- **Palette**
  - Graphite — `#0E0E0E`, `#111111`, `#1A1A1A`, `#171717` (dark sections)
  - Cream — `#FAF8F4`, `#F0EDE6`, `#EDE8DC` (light sections, menu cards)
  - White — `#FFFFFF` (cards on cream)
  - Champagne gold — `#C9A84C` (primary accent), `#A8872E` (hover / dense gold), `#E2C97E` (light gold, kicker text)
- **Texture** — Subtle gold radial blooms (`radial-gradient(ellipse … rgba(201,168,76,0.10–0.18) 0%, transparent …)`) and 32 px dotted grid overlays at 3–4% opacity. Never both at full strength in the same section.
- **Imagery** — Official Aurum Nova photography when available. Avoid generic spa stock (towels, candles, lotus flowers, smiling stock-model close-ups). Prefer device close-ups, treatment-room ambience, and editorial product framing.

---

## 2. Composition

### One main idea per section
A section that says two things must be split or one of the ideas dropped. The reader should be able to summarize the section in one sentence after passing it.

### Large editorial typography
- Display headings: `text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.025em] leading-[1.02]`.
- Body copy: `text-base sm:text-lg leading-relaxed`.
- Kicker / eyebrow: `text-xs font-semibold uppercase tracking-widest text-[#C9A84C]` (or `#E2C97E` on dark).
- Reserve `text-7xl` and `text-display-*` for the home hero and one product-page hero per service.

### More whitespace
- "Product" sections use `py-24 sm:py-32 lg:py-40`. Supporting sections use the existing `section-padding` (`py-16 md:py-24`).
- A section with one core message earns the extra padding. Card grids do not.

### Fewer small cards
- If a section has more than 4 visible cards, ask whether a `VisualFeatureSection` or `SplitFeaturePanel` would communicate the idea better.
- Avoid 3+ card grids back-to-back. Break the rhythm with a full-bleed visual section.
- When a card grid is the right answer (e.g. service menu, package selector), make the cards taller, looser, and editorial — not utility tiles.

### Visual-first
- Every "product" section earns one large visual: a dashboard mockup, a device photo, an editorial menu card, or a SVG metric graph.
- Lucide icons stay for utility surfaces (forms, FAQ chevrons, contact tiles). They are not the primary visual on a product surface.

---

## 3. Color rules

### Gold is an accent, never a fill
- Gold appears as: kicker text, dotted dividers, a single chip per section, a thin border on featured cards, animated `pathLength` strokes, hover halos.
- Gold does **not** appear as: large solid background fills, button backgrounds outside the primary CTA, full-width banners.
- One primary CTA per section is filled gold. Secondary CTAs are outline or transparent.

### Cream / graphite rhythm
Adjacent sections never share the same background unless the transition is cinematically intentional (e.g. two consecutive dark sections that visually continue a single product story). The default sequence on a page is `cream → white → dark → cream → dark`.

---

## 4. Motion

- **One motion budget per section.** A single `HeadlineReveal` and one `Reveal` block per section, not per-card animation past the first viewport.
- **Subtle.** Distances stay under 24 px, durations under 800 ms, easing is `EASE_OUT_QUART` or `EASE_OUT_EXPO`.
- **`useReducedMotion` is mandatory** on every animated component. Reduced motion renders the final state instantly.
- **No parallax**, no continuous loops, no animated backgrounds. Scroll-driven reveals are allowed; ambient motion is not.

---

## 5. Composition recipes

| Need | Reach for |
|---|---|
| Premium service page hero | `ProductHeroBlock` with optional `DeviceDashboardMockup` as the visual slot |
| One-idea section with a visual | `VisualFeatureSection` |
| Side-by-side service comparator | `PremiumComparisonTable` |
| Animated dashboard metric (CGM, weight, lab trend) | `ClinicalMetricGraph` |
| Brows / facials menu card | `ServiceMenuEditorial` |

Compose these in pages. Do **not** wrap them inside layout containers that change their padding or width — they are designed to render at section scale on their own.

---

## 6. Compliance guardrails

Carry these through every component, copy update, and visual asset choice.

- No claims that any service **diagnoses, prevents, or cures** a medical condition.
- No language implying **guaranteed results** ("vas a perder X kg", "tu piel quedará perfecta", "elimina el vello para siempre").
- No language implying **everyone needs advanced labs** or that basic panels are useless. The framing is *individualized clinical selection*.
- No before/after weight-loss imagery in heroes.
- No syringe imagery as the primary visual on Home or Programa Metabólico.
- No identifiable patient faces in stock or commissioned photography.
- Medical disclaimer copy lives in `<MedicalDisclaimer>` (existing primitive) — do not paraphrase it across card footers.
- Preserve "según evaluación clínica", "puede ayudar", "orientativo", "no todos los pacientes son candidatos".

---

## 7. Anti-patterns to avoid

- Three card grids in a row without a visual break.
- Mixing gold backgrounds with gold borders and gold text in the same surface.
- Repeating the same disclaimer in 4 places on one page. Use one canonical `<MedicalDisclaimer>` per page region.
- Generic spa/clinic stock (lotus flowers, lit candles, model in white robe).
- "Read more" CTA chains. Each section earns at most one primary CTA and one secondary.
- Animating every card on scroll. The reader notices the noise, not the content.
- Treating `Lucide` icons as art direction. Icons support, never substitute for, a real visual.

---

## 8. Component scope

The components in `components/visual/` are **composition primitives**. They:

- Accept content via props or slots and stay opinion-free about the copy itself.
- Render at section scale; they do not require a wrapping `<section>` from the caller.
- Stay compliance-neutral. Compliance language is the caller's responsibility, with `<MedicalDisclaimer>` available as a primitive.
- Honor `useReducedMotion` internally so callers never have to.
- Do not introduce new dependencies. Tailwind, framer-motion (already installed), lucide-react (already installed), and existing motion primitives are the entire toolkit.

Anything that violates these scopes belongs in `components/sections/` (page-specific) or `components/ui/` (UI primitives like buttons), not in `components/visual/`.
