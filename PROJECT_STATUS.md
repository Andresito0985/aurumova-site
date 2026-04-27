# Aurum Nova Website — Project Status

## Active Project Path

/Users/andresalcantara/Documents/aurumova-site

## Project Purpose

Public website for Aurum Nova Wellness Clinic, focused on:
- Programa Metabólico Integral
- Láser Diodo
- Inyectables Metabólicos
- Nutrición
- Sueroterapia
- Wellness Mujer
- Wellness Hombre
- Skin Glow
- Hair Support
- Coaching / Seguimiento

## Tech Stack

- Next.js 16 App Router
- Tailwind CSS v4
- Framer Motion
- Lucide React
- Recharts
- Vercel deployment target

## Important Files

### App Routes

- app/page.tsx
- app/programa-metabolico/page.tsx
- app/laser-diodo/page.tsx
- app/inyectables-metabolicos/page.tsx
- app/nutricion/page.tsx
- app/sueroterapia/page.tsx
- app/coaching-seguimiento/page.tsx
- app/agendar-evaluacion/page.tsx
- app/contacto/page.tsx
- app/preguntas-frecuentes/page.tsx
- app/sobre-nosotros/page.tsx
- app/resultados/page.tsx
- app/seguridad-elegibilidad/page.tsx
- app/disclaimer-medico/page.tsx
- app/privacidad/page.tsx
- app/terminos/page.tsx
- app/sitemap.ts
- app/robots.ts

### Core Components

- components/layout/Header.tsx
- components/layout/Footer.tsx
- components/layout/WhatsAppFloat.tsx
- components/sections/HomeHero.tsx
- components/sections/HomeLeadCapture.tsx
- components/sections/HomeWellnessGrid.tsx
- components/sections/FeaturedPrograma.tsx
- components/sections/FeaturedLaser.tsx
- components/sections/programa-metabolico/
- components/sections/laser-diodo/
- components/forms/
- components/ui/

### Content Files

- content/site.ts
- content/programs.ts
- content/program-pages.ts
- content/faq.ts

## Brand Direction

Luxury medical wellness aesthetic:
- Black
- White
- Cream / beige
- Gold
- Graphite

Tone:
- Premium
- Clinical
- Minimalist
- Professional
- Spanish-first

## Medical / Legal Rules

- Do not use medication brand names.
- Avoid unsafe or guaranteed medical claims.
- All metabolic program language should indicate medical evaluation required.
- Laser diode should be described as hair removal, not fat reduction.
- Pricing and offers should be easy to update from content files.

## Current Known Issue

The site opens on localhost but is not running/rendering correctly. Next step is to run:

npm run build

Then fix build/runtime errors incrementally without deleting routes or components.

## Do Not Delete

- app/
- components/
- content/
- lib/
- public/
- package.json
- package-lock.json
- next.config.ts
- tsconfig.json
- README.md
- PROJECT_STATUS.md
- .git/
- .env files if later added

