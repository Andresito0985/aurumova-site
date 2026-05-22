# PRODUCT.md — Aurum Nova Wellness Clinic

> **register:** brand-led with embedded product surfaces.
> Marketing/landing pages are the dominant surface (Home, Programa, Láser, Servicios, Contacto, Agendar). Quiz, calculators, and lab dashboards are the embedded product surfaces inside the brand. When in doubt, treat the page in focus: hero/landing → brand; quiz steps, calculator inputs, dashboard panels → product.

---

## 1. Product overview

Aurum Nova Wellness Clinic is a premium medical wellness clinic in Arecibo, Puerto Rico. The website educates, orients, and converts prospective patients into WhatsApp conversations or evaluation bookings.

The website should feel like a premium medical wellness ecosystem, not a simple service menu.

The intended patient journey is:
problem recognition → education → quiz/calculator/pre-evaluation → orientation → WhatsApp/evaluation booking → clinical evaluation → follow-up.

## 2. Primary business goals

- Convert visitors to WhatsApp conversations.
- Drive completed metabolic quiz submissions.
- Encourage evaluation bookings.
- Present Programa Metabólico as the primary funnel.
- Support Láser Diodo as a strong secondary service.
- Build trust through clinical tone, responsible disclaimers, and clear next steps.
- Make the site feel modern, premium, tech-enabled, and clinically guided.

## 3. Target users

- Adults in Puerto Rico interested in medically supervised weight management.
- Patients curious about metabolic programs but needing clinical orientation.
- Patients interested in laser diode hair reduction.
- Wellness patients interested in IV therapy, injectables, skin glow, hair support, nutrition, and coaching.
- Mobile-first traffic from Instagram, WhatsApp, Meta Ads, Google, and referrals.

## 4. Brand personality

- Premium
- Clinical
- Modern
- Calm
- Trustworthy
- Health-tech
- High-end but approachable
- Educational
- Responsible
- Not aggressive
- Not gimmicky
- Not cheap spa
- Not generic hospital

## 5. Visual direction

The site should blend:
- premium medical wellness
- modern telehealth
- high-end health-tech dashboard
- elegant product interface
- warm clinical trust

Visual palette:
- black
- graphite
- cream
- pearl white
- muted champagne gold
- soft neutral gradients

Visual principles:
- minimal layouts
- generous spacing
- clean cards
- premium shadows
- strong typography hierarchy
- warm clinical editorial photography
- dashboard/interface-style visuals
- mobile-first composition
- no cluttered flyer aesthetics

The site should not feel like:
- a static PDF brochure
- a generic spa website
- a cold hospital website
- a flashy crypto/SaaS landing page
- a weight-loss shock-marketing funnel
- an influencer transformation page

## 6. Modern tech + motion direction (Editorial Premium)

The site is moving from "subtle/calm" to **editorial premium** — the visual language of Linear, Vercel, Klim Type Foundry, and high-end editorial fashion sites — applied to a clinical wellness brand. Aurum Nova should feel like a luxury health editorial that happens to convert.

Motion is now a primary brand asset, not a decoration. It must be **slow, choreographed, intentional, and refined.** No flashy SaaS reflexes; no acid maximalism. Think Apple product page meets a luxury hotel meets a clinical journal.

### Desired motion style (revised)

- slow, choreographed, deliberate
- staggered cascades over scattered micro-interactions
- magnetic / cursor-aware microinteractions on primary CTAs
- typographic reveals (word-by-word headline cascades)
- smooth section-to-section transitions
- premium glass + ring + shadow layering
- consistent easing language (ease-out-quart / ease-out-expo)
- silence in between movements — restraint is part of the rhythm

### Use motion to

- create one strong arrival moment per page (hero choreography)
- reveal content in editorial cascades (word → line → block)
- guide eyes to CTAs with magnetic / proximity-aware micro-attraction
- bring dashboards alive with count-ups, progress fills, status pulses
- transition between pages with continuity (View Transitions where supported)
- treat hover as a moment, not a state change
- support clinical trust through *measured* movement, not jitter

### Recommended motion patterns

- word-by-word or line-by-line headline reveal on first paint (≤900ms total)
- staggered scroll-into-view reveals with 60–100ms delay between siblings
- magnetic hover on primary CTAs (cursor pulls the button ≤6px)
- soft lift + ring fade on card hover (≤4px translate, ≤200ms)
- count-up / progress-fill on numeric stats and dashboard metrics
- glass shimmer on key panels when entering viewport (one-shot)
- accordion / details expand at ease-out-quart, 250–350ms
- header that gains shadow + backdrop blur on scroll
- sticky CTA that arrives after threshold
- before/after slider with hint nudge on first viewport entry

### Style of easing

- **ease-out-quart**: `cubic-bezier(0.22, 1, 0.36, 1)` for most reveals.
- **ease-out-expo**: `cubic-bezier(0.16, 1, 0.3, 1)` for hero choreography.
- **Never** `ease-in`, `ease-in-out` on entry. **Never** spring with bounce ≥1.2. **Never** elastic.

### Permissions (what's now allowed)

- Headline split-text reveals (word or line stagger).
- Magnetic CTA hover (desktop only).
- Subtle scroll-linked parallax on background gradients (≤12px range).
- Cursor-aware soft highlights on dark surfaces.
- Section-level orchestrated reveals tied to viewport entry.
- Glass panel shimmer on first paint of dashboards.
- View Transitions API for cross-page continuity (if supported by the runtime — progressive enhancement only).
- Number count-up on stats, dashboard metrics, calculator results.

### Still forbidden

- Bounce / elastic / spring with overshoot.
- Spinning or rotating decorative elements.
- Scroll-jacking (taking control of scroll velocity).
- Mouse-locked WebGL / shader-heavy effects on first load.
- Lottie or large animation libraries (use what's already installed).
- Animations that hide content from users on slow connections (always render fallback).
- 3D models on `/laser-diodo` (held per project memory).
- Motion that hurts mobile performance — animate transform/opacity only.
- Hover-only affordances on touch devices (always have a tap-equivalent).

### Performance rules

- All motion must respect `prefers-reduced-motion`. In reduced-motion mode: content renders at final state instantly, hover effects fall back to color/border only, no transforms.
- Magnetic and cursor-aware effects gate behind `(hover: hover) and (pointer: fine)` — never on touch.
- Animate `transform` and `opacity` only. Never animate `width`, `height`, `top`, `left`, or layout properties.
- No new animation dependencies. Framer Motion + Tailwind + CSS only.
- No video backgrounds before launch.
- IntersectionObserver-based reveals must use `once: true` so they don't re-trigger.
- View Transitions are progressive enhancement only — site must work without them.

### Accessibility rules

- Reduced-motion users get the final state immediately. No reduced-amplitude fallbacks that still translate or scale.
- Focus rings always visible, always crossing the new motion layer.
- Magnetic/proximity effects must not interfere with keyboard focus.
- Headline word/line splits must remain a single accessible string for screen readers.
- Count-ups must announce their final value, not the intermediate ticks.

## 7. Anti-references

Avoid:
- cheap spa menus
- before/after weight-loss shock marketing
- syringe-focused imagery
- medication packaging
- unrealistic fitness bodies
- exaggerated transformations
- crowded promotional flyers
- low-contrast gold buttons
- text-heavy mobile sections
- bouncy, elastic, or scroll-jacked motion
- 3D-for-3D's-sake on /laser-diodo
- generic SaaS reflexes: hero with three identical metric tiles, gradient mesh in the background, dark blue + purple, marquee logo strips, "rocket" iconography
- editorial-magazine clichés used as default: drop-cap italics, big serif numerals, Klim-style rule-separated columns, tracked-uppercase kicker above every section heading
- crypto/maximalist tells: neon on black, animated particles, mouse-trailing cursor
- spa/wellness tells: leaf icons everywhere, pastel green gradients, script fonts
- the same fade-up reveal pattern applied indiscriminately to every block

## 8. Core funnels

**Home:**
Hero → journey → metabolic spotlight → quiz CTA → wellness/service grid → method/results → safe experience section → FAQ → final CTA.

**Programa Metabólico:**
Hero → protocols → quiz/profile → calculators → lab analysis → clinical explanation → who it is for → includes → FAQ → CTA.

**Quiz Metabólico:**
Simple guided questions → orientative result → recommended protocol to discuss → PDF/print summary → WhatsApp → evaluation.

**Láser Diodo:**
Hero → differentiators → plans → zones → before/after slider → technology/safety → instructions → FAQ → CTA.

## 9. Compliance principles

All content must avoid:
- guaranteed weight loss
- automatic eligibility
- diagnosis through the website
- prescriptions through quiz/calculators
- medication names/doses/units in promotional surfaces
- permanent hair removal claims
- painless guaranteed claims
- fake testimonials
- unapproved patient imagery
- internal pricing breakdowns
- overclaiming lab results
- suggesting the quiz determines medical eligibility

Preferred language:
- orientativo
- educativo
- requiere evaluación clínica
- resultados pueden variar
- el proveedor determina elegibilidad
- protocolo sugerido para discutir en evaluación
- reducción progresiva del vello
- evaluación por zona
- no todos responden igual

## 10. Conversion rules

- WhatsApp CTAs should be contextual to the page.
- Primary CTAs should be clear and not crowded.
- Mobile sticky CTA should help conversion but not cover forms.
- Quiz final result should guide the patient to download/print summary, share by WhatsApp, or book evaluation.
- The site should never claim a PDF is automatically attached to WhatsApp because standard wa.me links cannot attach files.
- Each page should answer:
  1. What is this?
  2. Who is it for?
  3. Why does it matter?
  4. How does it work?
  5. What is the next step?
  6. What are the safety limitations?

## 11. Accessibility standards

- WCAG AA minimum.
- Brand gold #C9A84C should use dark graphite #1A1A1A text when used as a CTA/badge background.
- Focus states must be visible.
- Respect prefers-reduced-motion.
- Avoid horizontal overflow on mobile.
- Mobile tap targets should be comfortable.
- Motion must not reduce readability or usability.
- Interactive components must be keyboard accessible.

## 12. Performance principles

- Use next/image for public images.
- Avoid unnecessary heavy JS.
- Avoid adding dependencies unless necessary.
- Prefer CSS/pseudo-3D or optimized images over heavy 3D.
- GLB models must be lightweight and optional.
- No broken image paths.
- No external image URLs.
- Keep mobile performance high.
- Avoid unnecessary client components.
- Avoid overusing Framer Motion in large repeated lists.

## 13. Current known priorities

- Final launch audit.
- Verify all WhatsApp CTAs are contextual.
- Verify quiz PDF/print summary behavior.
- Improve perceived technology through dashboards, cards, transitions, and interactive tools.
- Add modern motion and interaction only where it improves clarity or conversion.
- Prioritize mobile-first motion polish.
- Improve Home and Programa Metabólico imagery only with compliant, non-identifiable visuals.
- Keep Láser Diodo stable after reverting failed pseudo-3D and restoring GLB showcase.
- Avoid heavy 3D until the core public launch is stable.
- Avoid adding new features until launch blockers are resolved.

## 14. Definition of launch-ready

The site is launch-ready when:
- Production build passes.
- Mobile QA passes on real device.
- WhatsApp/call/maps links work.
- Site lock works.
- No public placeholders remain.
- No fake testimonials remain.
- No internal pricing/dosing is public.
- No major visual asymmetry remains.
- Key pages feel premium, clean, and modern.
- SEO metadata and sitemap are correct.
- Compliance language is responsible.
- Motion is subtle, accessible, and performance-safe.
