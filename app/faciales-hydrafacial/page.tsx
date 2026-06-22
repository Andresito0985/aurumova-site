import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronLeft,
  Droplet,
  Droplets,
  Leaf,
  Sparkles,
  Sun,
  type LucideIcon,
} from "lucide-react";
import CTABanner from "@/components/ui/CTABanner";
import FAQSection from "@/components/sections/FAQSection";
import MedicalDisclaimer from "@/components/ui/MedicalDisclaimer";
import ProductHeroBlock from "@/components/visual/ProductHeroBlock";
import VisualFeatureSection from "@/components/visual/VisualFeatureSection";
import ServiceMenuEditorial from "@/components/visual/ServiceMenuEditorial";
import { siteConfig, whatsappLink } from "@/content/site";
import {
  FACIALS_RESULTS_DISCLAIMER,
  FACIALS_WHATSAPP_MESSAGE,
  facialServices,
  facialsFaqs,
} from "@/content/facials-services";

export const metadata: Metadata = {
  title:
    "Faciales Profundos & Hydrafacial | Aurum Nova Wellness Clinic",
  description:
    "Faciales profundos, hidratación avanzada y protocolos de skin glow personalizados para mejorar la apariencia y luminosidad de la piel.",
  keywords: [
    "faciales profundos Arecibo",
    "Hydrafacial Puerto Rico",
    "limpieza facial profunda",
    "facial hidratante",
    "skin glow facial",
    "facial pre evento",
    "facial Arecibo",
    "Aurum Nova",
  ],
  alternates: { canonical: `${siteConfig.url}/faciales-hydrafacial` },
  openGraph: {
    title: "Faciales Profundos & Hydrafacial | Aurum Nova",
    description:
      "Una experiencia facial clínica para limpiar, hidratar y revitalizar la piel con protocolos personalizados.",
    url: `${siteConfig.url}/faciales-hydrafacial`,
    siteName: siteConfig.name,
    locale: siteConfig.ogLocale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faciales Profundos & Hydrafacial | Aurum Nova",
    description:
      "Limpieza profunda, hidratación avanzada y protocolos personalizados.",
  },
};

// Hydrafacial pillars — the 4 high-level capabilities of the signature
// service. Used as bullets inside the VisualFeatureSection. Each line is
// orientative ("puede ayudar a") to preserve the no-medical-claim posture.
const hydrafacialPillars = [
  "Limpieza profunda con sistema de vacío",
  "Exfoliación y preparación de la piel según tipo",
  "Hidratación con sueros personalizados",
  "Glow y mantenimiento de luminosidad",
];

// Step-by-step Hydrafacial protocol shown in the "Protocolo visual" section.
// Iconography is restrained, hydration-themed — never the primary visual.
const protocoloSteps: {
  num: string;
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    num: "01",
    title: "Limpieza y exfoliación",
    description:
      "Sistema de vacío para retirar impurezas superficiales y suavizar la piel.",
    icon: Droplets,
  },
  {
    num: "02",
    title: "Extracción asistida",
    description:
      "Extracción guiada sin pinzas, ajustada al tipo de piel del momento.",
    icon: Sparkles,
  },
  {
    num: "03",
    title: "Infusión de sueros",
    description:
      "Aplicación de sueros personalizados según necesidad y objetivo estético.",
    icon: Droplet,
  },
  {
    num: "04",
    title: "Hidratación de cierre",
    description:
      "Hidratación profunda y mascarilla calmante para acabado luminoso y cómodo.",
    icon: Sun,
  },
];

// Home-care orientation. Compliance: no brands, no prices, no ecommerce.
// Every line defers to the clinic team and individual evaluation.
const homeCareBullets = [
  "Rutina simple de limpieza adaptada a tu tipo de piel.",
  "Hidratación diaria para sostener confort y luminosidad.",
  "Apoyo a la barrera cutánea con activos suaves según evaluación.",
  "Glow maintenance entre sesiones según ritmo individual.",
  "Productos complementarios disponibles en clínica, sugeridos según evaluación.",
];

const whoFor = [
  "Piel apagada o con falta de luminosidad.",
  "Sensación de piel deshidratada o tirante.",
  "Textura irregular o poros congestionados.",
  "Preparación de piel antes de un evento.",
  "Mantenimiento mensual del cuidado facial.",
];

const beforeBullets = [
  "Evita exfoliantes potentes 48 horas antes.",
  "Avísanos si usas retinoides, tretinoína o ácidos.",
  "Llega sin maquillaje en el rostro.",
  "Comunica condiciones de piel sensible o reacciones recientes.",
];

const afterBullets = [
  "Evita exposición solar directa el primer día.",
  "Usa SPF como rutina diaria.",
  "Evita productos exfoliantes potentes 48 a 72 horas.",
  "Sigue las indicaciones específicas según el protocolo realizado.",
];

/**
 * Editorial hydration motif used as the visual slot of the Hydrafacial
 * signature feature. Pure CSS + SVG — no fake device photo, no patient
 * face, no stock spa imagery. Concentric gold ripples + soft droplet
 * glyphs evoke hydration without making a product claim.
 */
function HydrafacialVisual() {
  return (
    <div
      className="relative aspect-square lg:aspect-[4/5] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#161616] via-[#121212] to-[#0A0A0A] ring-1 ring-[#C9A84C]/20 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.55)]"
      role="img"
      aria-label="Visualización editorial: Hydrafacial Aurum Nova"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 62% 38%, rgba(201,168,76,0.30) 0%, transparent 55%), radial-gradient(ellipse at 22% 78%, rgba(168,135,46,0.18) 0%, transparent 60%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Concentric ripple SVG — abstract hydration motif */}
      <svg
        viewBox="0 0 400 400"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="hf-ripple-fade" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.35" />
            <stop offset="60%" stopColor="#C9A84C" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#C9A84C" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="200" cy="200" r="160" fill="url(#hf-ripple-fade)" />
        {[60, 100, 140, 180, 220].map((r, i) => (
          <circle
            key={r}
            cx="200"
            cy="200"
            r={r}
            fill="none"
            stroke="#C9A84C"
            strokeOpacity={0.35 - i * 0.05}
            strokeWidth={i === 1 ? 1.25 : 0.85}
          />
        ))}
        {/* Tiny droplet glyphs orbiting the rings */}
        <g opacity="0.65">
          <circle cx="118" cy="138" r="3.5" fill="#E2C97E" />
          <circle cx="306" cy="158" r="2.5" fill="#C9A84C" />
          <circle cx="266" cy="276" r="3" fill="#E2C97E" />
          <circle cx="132" cy="282" r="2" fill="#C9A84C" />
          <circle cx="200" cy="58" r="2.5" fill="#E2C97E" />
        </g>
      </svg>

      {/* Centered editorial mark */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
        <span
          aria-hidden="true"
          className="block h-px w-14 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent"
        />
        <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#E2C97E]">
          Signature · Hydrafacial
        </p>
        <p className="text-2xl sm:text-3xl font-semibold tracking-[-0.01em] text-white">
          Hidratación
          <br />
          <span className="text-[#E2C97E]">en profundidad</span>
        </p>
        <span
          aria-hidden="true"
          className="block h-px w-10 bg-gradient-to-r from-transparent via-[#C9A84C]/70 to-transparent"
        />
        <p className="max-w-[220px] text-[11px] leading-relaxed text-[#BDB7AA]">
          Visualización editorial. Los faciales son servicios estéticos, no
          tratamientos médicos.
        </p>
      </div>
    </div>
  );
}

/**
 * Cream editorial frame used as the visual slot of the "Rutina en casa
 * recomendada" section. Abstract — no real product photo, no SKU image.
 */
function HomeCareVisual() {
  return (
    <div
      className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#FAF8F4] via-white to-[#F0EDE6] ring-1 ring-[#E8E4DA]"
      role="img"
      aria-label="Visualización editorial: rutina en casa recomendada"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 72% 28%, rgba(201,168,76,0.22) 0%, transparent 60%), radial-gradient(ellipse at 22% 78%, rgba(168,135,46,0.10) 0%, transparent 55%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#A8872E 1px, transparent 1px), linear-gradient(90deg, #A8872E 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <span
        aria-hidden="true"
        className="absolute inset-3 rounded-2xl ring-1 ring-[#C9A84C]/25"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
        <span
          aria-hidden="true"
          className="block h-px w-12 bg-gradient-to-r from-transparent via-[#A8872E] to-transparent"
        />
        <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#A8872E]">
          Aurum Nova
        </p>
        <Leaf className="h-5 w-5 text-[#A8872E]" />
        <span
          aria-hidden="true"
          className="block h-px w-8 bg-gradient-to-r from-transparent via-[#A8872E]/60 to-transparent"
        />
      </div>
    </div>
  );
}

export default function FacialesHydrafacialPage() {
  return (
    <>
      {/* 1 — Hero (cream editorial via ProductHeroBlock) */}
      <ProductHeroBlock
        variant="cream"
        eyebrow="Faciales clínicos"
        headline="Faciales Profundos &"
        highlight="Hydrafacial"
        subhead="Una experiencia facial clínica, profunda y elegante para limpiar, hidratar y revitalizar la piel con protocolos personalizados según tu tipo de piel y objetivo estético."
        primaryCta={{
          label: "Agendar facial",
          href: whatsappLink(FACIALS_WHATSAPP_MESSAGE),
          external: true,
        }}
        secondaryCta={{
          label: "Consultar qué facial me conviene",
          href: "#menu",
        }}
        footnote="Los faciales son protocolos estéticos y de bienestar — no son tratamientos médicos. Los resultados pueden variar según tipo de piel, sensibilidad y cuidado posterior."
        topSlot={
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-[#9A9A9A] hover:text-[#C9A84C] transition-colors"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            Inicio
          </Link>
        }
      />

      {/* 2 — Hydrafacial Signature feature — the main product moment.
              Replaces both the previous "Qué trabajamos" 4-card focus grid
              and the old Hydrafacial split section. */}
      <VisualFeatureSection
        variant="dark"
        eyebrow="Signature · Hydrafacial"
        headline="Hidratación avanzada"
        highlight="paso a paso"
        body="Limpieza, exfoliación, extracción suave e hidratación en un solo protocolo — con sistema de vacío y sueros ajustados a tu piel del momento."
        supportingText="No es un tratamiento médico ni reemplaza una evaluación dermatológica si tienes una condición médica de la piel."
        bullets={hydrafacialPillars}
        cta={{
          label: "Agendar Hydrafacial",
          href: whatsappLink(FACIALS_WHATSAPP_MESSAGE),
          external: true,
        }}
        footnote="Los resultados pueden variar según tipo de piel, historial y evaluación del profesional."
        visual={<HydrafacialVisual />}
      />

      {/* 3 — Menu (graphite stage with cream menu card via ServiceMenuEditorial)
              Hydrafacial flagged as featured (Signature). Prices omitted —
              the menu's footnote covers the "Precio según evaluación"
              compliance line alongside FACIALS_RESULTS_DISCLAIMER. */}
      <div id="menu">
        <ServiceMenuEditorial
          variant="graphite"
          eyebrow="Menú facial"
          title="Protocolos faciales"
          titleHighlight="disponibles"
          subtitle="Cada protocolo se adapta según tipo de piel y objetivo. La recomendación final se confirma durante la consulta."
          items={facialServices.map((service) => ({
            name: service.name,
            description: service.description,
            featured: service.featured,
            featuredLabel: service.featured ? "Signature" : undefined,
          }))}
          footnote={`Precio según evaluación clínica. ${FACIALS_RESULTS_DISCLAIMER}`}
        />
      </div>

      {/* 4 — Protocolo visual del facial — large, step-based, no card forest.
              Subtle hydration motif: each step has a soft gold ring +
              numbered kicker, connected by a hairline gold line on desktop. */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-2xl mb-12 sm:mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
              Protocolo visual del facial
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] leading-[1.05] text-[#1A1A1A] mb-4">
              Cuatro pasos para una piel{" "}
              <span className="text-[#A8872E]">renovada</span>
            </h2>
            <p className="text-base sm:text-lg text-[#6B6B6B] leading-relaxed">
              Cada sesión sigue una secuencia clínica cuidada. La intensidad y
              los activos se ajustan a tu piel del momento.
            </p>
          </div>

          {/* Connecting hairline behind the row on desktop */}
          <div className="relative">
            <span
              aria-hidden="true"
              className="absolute left-0 right-0 top-7 hidden lg:block h-px bg-gradient-to-r from-transparent via-[#C9A84C]/35 to-transparent"
            />
            <ol className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {protocoloSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <li
                    key={step.num}
                    className="relative flex flex-col items-start"
                  >
                    {/* Step glyph — gold ring + icon */}
                    <div className="relative mb-5">
                      <span
                        aria-hidden="true"
                        className="absolute -inset-2 rounded-full bg-[#C9A84C]/8"
                      />
                      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white ring-1 ring-[#C9A84C]/35 shadow-[0_8px_24px_-12px_rgba(201,168,76,0.45)]">
                        <Icon className="h-5 w-5 text-[#A8872E]" />
                      </span>
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#A8872E] mb-1.5">
                      Paso {step.num}
                    </span>
                    <h3 className="text-lg sm:text-xl font-semibold text-[#1A1A1A] leading-snug mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#6B6B6B]">
                      {step.description}
                    </p>
                  </li>
                );
              })}
            </ol>
          </div>

          <p className="mt-12 max-w-2xl text-xs leading-relaxed text-[#9A9A9A]">
            La secuencia se adapta según el protocolo elegido y la piel del
            momento. {FACIALS_RESULTS_DISCLAIMER}
          </p>
        </div>
      </section>

      {/* 5 — Rutina en casa recomendada — implicit product readiness.
              No brands, no SKUs, no prices, no ecommerce. */}
      <VisualFeatureSection
        variant="cream"
        reverse
        eyebrow="Rutina en casa recomendada"
        headline="Sosten el glow"
        highlight="día a día"
        body="El resultado del facial se mantiene mejor con una rutina simple. El equipo orienta sobre los pasos básicos según tu tipo de piel y el protocolo realizado."
        supportingText="No hay receta universal. La recomendación final depende del tipo de piel, sensibilidad, historial y evaluación del profesional."
        bullets={homeCareBullets}
        footnote="Sin venta en línea, sin marcas patrocinadas: los productos complementarios disponibles en clínica se sugieren únicamente según la evaluación individual de cada caso."
        visual={<HomeCareVisual />}
      />

      {/* 6 — Consolidated: Para quién + Antes + Después
              One premium 3-column panel replaces the previous "Who is for"
              split section and the separate Before/Aftercare 2-card layout. */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-2xl mb-10 sm:mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
              Para quién, antes y después
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.02em] leading-[1.05] text-[#1A1A1A] mb-4">
              Cuidado facial con{" "}
              <span className="text-[#A8872E]">contexto clínico</span>
            </h2>
            <p className="text-base text-[#6B6B6B] leading-relaxed">
              Una guía orientativa. Las indicaciones específicas se entregan al
              cierre de tu sesión según el protocolo realizado.
            </p>
          </div>

          <div className="rounded-3xl ring-1 ring-[#E8E4DA] overflow-hidden">
            <div className="grid lg:grid-cols-3">
              {/* Para quién */}
              <div className="bg-[#FAF8F4] p-7 sm:p-8 lg:p-9 lg:border-r border-b lg:border-b-0 border-[#E8E4DA]">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#A8872E] mb-3">
                  Para quién
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-[#1A1A1A] mb-5 leading-snug">
                  Pacientes que buscan cuidado facial
                </h3>
                <ul className="space-y-3 mb-5">
                  {whoFor.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-relaxed text-[#3D3D3D]"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A84C]"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <MedicalDisclaimer
                  variant="inline"
                  custom="Los faciales son servicios estéticos y de bienestar. No son tratamientos médicos para condiciones dermatológicas. Si tienes acné severo, melasma, rosácea, dermatitis u otra condición médica, consulta con un dermatólogo."
                />
              </div>

              {/* Antes */}
              <div className="bg-white p-7 sm:p-8 lg:p-9 lg:border-r border-b lg:border-b-0 border-[#E8E4DA]">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#A8872E] mb-3">
                  Antes de tu facial
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-[#1A1A1A] mb-5 leading-snug">
                  Preparación recomendada
                </h3>
                <ul className="space-y-3">
                  {beforeBullets.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-relaxed text-[#3D3D3D]"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A84C]"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Después */}
              <div className="relative bg-gradient-to-br from-[#1A1A1A] via-[#161616] to-[#0E0E0E] p-7 sm:p-8 lg:p-9 text-white">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "radial-gradient(ellipse at 80% 18%, rgba(201,168,76,0.20) 0%, transparent 55%)",
                  }}
                />
                <div className="relative z-10">
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#E2C97E] mb-3">
                    Cuidado posterior
                  </p>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-5 leading-snug">
                    Indicaciones después de tu facial
                  </h3>
                  <ul className="space-y-3">
                    {afterBullets.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-relaxed text-[#BDB7AA]"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A84C]"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7 — FAQ */}
      <FAQSection
        faqs={facialsFaqs}
        title="Preguntas frecuentes sobre faciales y Hydrafacial"
        subtitle="Respuestas claras sobre tipos de facial, expectativas, preparación y cuidado posterior."
        variant="light"
      />

      {/* 8 — Final CTA */}
      <CTABanner
        title="Agenda tu facial personalizado"
        subtitle="Escríbenos por WhatsApp y el equipo orienta sobre el protocolo que más le conviene a tu piel."
        ctaText="Escribir por WhatsApp"
        ctaMessage={FACIALS_WHATSAPP_MESSAGE}
        variant="dark"
        trackingSource="facials_final_cta"
        disclaimerText="Los resultados pueden variar. Los faciales no son tratamientos médicos."
      />
    </>
  );
}
