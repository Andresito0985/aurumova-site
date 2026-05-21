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

## 6. Modern tech + motion direction

The site should feel more like a premium medical technology and telehealth platform than a static clinic brochure.

Desired motion style:
- subtle
- smooth
- premium
- purposeful
- calm
- not flashy
- not gimmicky
- not overanimated

Use motion to:
- guide attention to CTAs
- reveal sections gently
- make dashboards feel alive
- improve perceived quality
- create a modern digital health experience
- support user understanding

Avoid:
- excessive parallax
- spinning decorative elements
- distracting animations
- animations that delay content
- large bouncy movements
- aggressive scale effects
- motion that makes the site feel like a generic SaaS template
- motion that hurts mobile performance

Recommended motion patterns:
- soft fade + slight upward reveal
- staggered card entrances
- subtle hover lift
- gentle dashboard count/metric reveal
- active card highlight transitions
- smooth accordion open/close
- sticky CTA appearing after scroll
- swipe-friendly mobile interactions
- before/after slider interaction
- reduced-motion safe alternatives

Tech visual language:
- premium telehealth dashboard
- clinical data cards
- glass-like panels used sparingly
- dark graphite sections with gold accents
- abstract metric interfaces
- clean status chips
- soft gradients
- precise spacing
- product-quality interactions

Performance rules:
- Motion must not hurt mobile performance.
- Respect prefers-reduced-motion.
- Prefer CSS/framer-motion microinteractions already in the project.
- Do not add heavy animation libraries unless approved.
- Avoid large 3D or video backgrounds before launch.
- Keep Core Web Vitals in mind.
- Animate opacity/transform, not layout-heavy properties.
- Do not animate large image-heavy sections unnecessarily.

Accessibility rules:
- All motion must be optional or reduced when prefers-reduced-motion is enabled.
- Content should be visible immediately in reduced-motion mode.
- Interactive animated elements must remain keyboard accessible.
- Focus states must stay visible.

## 7. Anti-references

Avoid:
- cheap spa menus
- before/after weight-loss shock marketing
- syringe-focused imagery
- medication packaging
- unrealistic fitness bodies
- exaggerated transformations
- crowded promotional flyers
- overuse of gradients
- too many badges
- excessive icons
- low-contrast gold buttons
- text-heavy mobile sections
- noisy animation
- flashy tech gimmicks
- stock-photo overload

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
