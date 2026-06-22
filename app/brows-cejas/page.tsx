import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronLeft,
  Compass,
  Droplet,
  Eye,
  Leaf,
  Sparkles,
  Wand2,
  type LucideIcon,
} from "lucide-react";
import CTABanner from "@/components/ui/CTABanner";
import FAQSection from "@/components/sections/FAQSection";
import ProductHeroBlock from "@/components/visual/ProductHeroBlock";
import ServiceMenuEditorial from "@/components/visual/ServiceMenuEditorial";
import VisualFeatureSection from "@/components/visual/VisualFeatureSection";
import { siteConfig, whatsappLink } from "@/content/site";
import {
  BROWS_RESULTS_DISCLAIMER,
  BROWS_WHATSAPP_MESSAGE,
  browServices,
  browsFaqs,
} from "@/content/brows-services";

export const metadata: Metadata = {
  title: "Diseño de Cejas & Brow Wellness | Aurum Nova Wellness Clinic",
  description:
    "Servicios boutique de cejas y pestañas en Aurum Nova: brow shaping, tinte, laminado y lash lifting en un ambiente premium y personalizado.",
  keywords: [
    "diseño de cejas Arecibo",
    "brow shaping Puerto Rico",
    "brow lamination",
    "lash lifting Arecibo",
    "brow tint",
    "cejas Aurum Nova",
    "boutique brow menu",
    "Arecibo Puerto Rico",
  ],
  alternates: { canonical: `${siteConfig.url}/brows-cejas` },
  openGraph: {
    title: "Diseño de Cejas & Brow Wellness | Aurum Nova Wellness Clinic",
    description:
      "Servicios boutique de cejas y pestañas en un ambiente premium y personalizado.",
    url: `${siteConfig.url}/brows-cejas`,
    siteName: siteConfig.name,
    locale: siteConfig.ogLocale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diseño de Cejas & Brow Wellness | Aurum Nova",
    description:
      "Brow shaping, tinte, laminado y lash lifting en un ambiente boutique en Arecibo.",
  },
};

// Per-service editorial icon used inside the procedure gallery frames.
// Restrained — one quiet glyph per service, never the primary visual.
const serviceIconById: Record<string, LucideIcon> = {
  shaping: Compass,
  "shaping-tint": Droplet,
  lamination: Wand2,
  "lash-lifting": Eye,
};

// Compliance posture: this section describes maintenance and orientative
// product care, never lists branded products or prices. It mirrors the
// service-as-product framing of the new visual system without becoming a
// product catalog.
const homeCareBullets = [
  "Mantenimiento sugerido según el servicio realizado y tu ritmo individual.",
  "Hidratación y acondicionamiento del vello para sostener un acabado pulido.",
  "Productos complementarios disponibles en clínica, recomendados según evaluación.",
  "Indicaciones específicas entregadas al cierre de cada sesión.",
];

const beforeBullets = [
  "Evita exfoliantes fuertes 24 a 48 horas antes.",
  "Llega sin maquillaje en el área a tratar.",
  "Avísanos si usas retinoides o tretinoína.",
  "Avísanos si tu piel está sensible o irritada.",
];

const afterBullets = [
  "Evita agua y vapor las primeras horas según el servicio.",
  "Evita exfoliantes potentes algunos días.",
  "Usa SPF si te expones al sol directo.",
  "Sigue las indicaciones específicas del equipo al cerrar la sesión.",
];

/**
 * Elegant editorial visual frame for the procedure gallery. Renders a
 * cream gradient with a subtle gold radial bloom, the Aurum Nova hairline
 * mark, and a quiet service glyph. This intentionally reads as an
 * editorial frame — not a missing image placeholder — until commissioned
 * photography ships.
 */
function EditorialFrame({
  Icon,
  label,
  aspect = "landscape",
}: {
  Icon: LucideIcon;
  label: string;
  aspect?: "landscape" | "portrait";
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#FAF8F4] via-white to-[#F0EDE6] ring-1 ring-[#E8E4DA] ${
        aspect === "portrait" ? "aspect-[4/5]" : "aspect-[4/3]"
      }`}
      role="img"
      aria-label={`Aurum Nova · ${label}`}
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
      {/* Inset hairline frame */}
      <span
        aria-hidden="true"
        className="absolute inset-3 rounded-xl ring-1 ring-[#C9A84C]/25"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <span
          aria-hidden="true"
          className="block h-px w-12 bg-gradient-to-r from-transparent via-[#A8872E] to-transparent"
        />
        <span className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#A8872E]">
          Aurum Nova
        </span>
        <Icon className="h-5 w-5 text-[#A8872E]" />
        <span
          aria-hidden="true"
          className="block h-px w-8 bg-gradient-to-r from-transparent via-[#A8872E]/60 to-transparent"
        />
      </div>
    </div>
  );
}

export default function BrowsCejasPage() {
  return (
    <>
      {/* 1 — Hero (cream editorial via ProductHeroBlock) */}
      <ProductHeroBlock
        variant="cream"
        eyebrow="Boutique Brow Menu"
        headline="Diseño de Cejas &"
        highlight="Brow Wellness"
        subhead="Un servicio boutique para definir, levantar y armonizar la mirada con un estilo limpio, elegante y natural."
        primaryCta={{
          label: "Ver menú de servicios",
          href: "#menu",
        }}
        secondaryCta={{
          label: "Escribir por WhatsApp",
          href: whatsappLink(BROWS_WHATSAPP_MESSAGE),
          external: true,
        }}
        footnote="Los resultados pueden variar según vello, piel, cuidado posterior y técnica indicada. No prometemos simetría perfecta ni resultados permanentes."
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

      {/* 2 — Menu (graphite stage with cream menu card) */}
      <div id="menu">
        <ServiceMenuEditorial
          variant="graphite"
          eyebrow="Boutique Brow Menu"
          title="Servicios de cejas y"
          titleHighlight="pestañas"
          subtitle="Atención personalizada en cada sesión."
          items={browServices.map((service) => ({
            name: service.name,
            price: `$${service.price}`,
            description: service.description,
          }))}
          footnote={BROWS_RESULTS_DISCLAIMER}
        />
      </div>

      {/* 3 — Procedure & Aurum Nova touch — editorial gallery
              (elegant editorial frames stand in for commissioned photography
              that doesn't exist yet; no grey "missing image" placeholders) */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-2xl mb-12 sm:mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
              Trabajos y procedimiento
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] leading-[1.05] text-[#1A1A1A] mb-4">
              El detalle detrás de{" "}
              <span className="text-[#A8872E]">cada servicio</span>
            </h2>
            <p className="text-base sm:text-lg text-[#6B6B6B] leading-relaxed">
              Cada sesión se trabaja con tiempo, técnica cuidada y atención
              individual — sin recetas estandarizadas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {browServices.map((service, idx) => {
              const Icon = serviceIconById[service.id] ?? Sparkles;
              const reverse = idx % 2 === 1;
              return (
                <article
                  key={service.id}
                  className="group flex flex-col gap-5 rounded-3xl bg-[#FAF8F4] p-5 sm:p-6 ring-1 ring-[#E8E4DA]"
                >
                  <div className={reverse ? "order-1 sm:order-2" : "order-1"}>
                    <EditorialFrame Icon={Icon} label={service.name} />
                  </div>
                  <div className={reverse ? "order-2 sm:order-1" : "order-2"}>
                    <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#A8872E] mb-2">
                      {service.name}
                    </p>
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#1A1A1A] leading-snug mb-4">
                      {service.procedureDetail ?? service.description}
                    </h3>

                    <dl className="space-y-3.5">
                      <div>
                        <dt className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9A9A9A] mb-1">
                          El detalle Aurum Nova
                        </dt>
                        <dd className="text-sm leading-relaxed text-[#3D3D3D]">
                          {service.aurumTouch ?? service.description}
                        </dd>
                      </div>
                      {service.careNote && (
                        <div>
                          <dt className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9A9A9A] mb-1">
                            Cuidado posterior
                          </dt>
                          <dd className="text-sm leading-relaxed text-[#3D3D3D]">
                            {service.careNote}
                          </dd>
                        </div>
                      )}
                    </dl>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="mt-10 max-w-2xl text-xs leading-relaxed text-[#9A9A9A]">
            {BROWS_RESULTS_DISCLAIMER}
          </p>
        </div>
      </section>

      {/* 4 — Cuidado en casa recomendado (implicit product readiness)
              No brand names, no prices, no ecommerce — service-as-product
              framing only. */}
      <VisualFeatureSection
        variant="cream"
        reverse
        eyebrow="Cuidado en casa recomendado"
        headline="Sosten el acabado"
        highlight="día a día"
        body="Tu resultado dura más con una rutina simple. El equipo te orienta sobre cómo cuidar la zona, qué evitar y qué productos pueden complementarla en casa."
        supportingText="No hay receta universal. La recomendación final depende del servicio realizado, tu tipo de piel y vello, y el cuidado posterior individual."
        bullets={homeCareBullets}
        footnote="Sin venta en línea, sin marcas patrocinadas: los productos complementarios disponibles en clínica se sugieren únicamente según la evaluación individual de cada caso."
        visual={
          <EditorialFrame
            Icon={Leaf}
            label="Cuidado en casa recomendado"
            aspect="portrait"
          />
        }
      />

      {/* 5 — Preparación + Cuidado posterior — consolidated into one
              editorial 2-column panel (replaces the old "What to expect"
              3-card grid and the previous Before/After two-card layout). */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-2xl mb-10 sm:mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
              Antes y después de tu cita
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.02em] leading-[1.05] text-[#1A1A1A] mb-4">
              Preparación y{" "}
              <span className="text-[#A8872E]">cuidado posterior</span>
            </h2>
            <p className="text-base text-[#6B6B6B] leading-relaxed">
              Una guía orientativa. Las indicaciones específicas se entregan al
              cierre de tu sesión según el servicio realizado.
            </p>
          </div>

          <div className="rounded-3xl ring-1 ring-[#E8E4DA] overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="bg-[#FAF8F4] p-7 sm:p-9 lg:p-10 lg:border-r border-b lg:border-b-0 border-[#E8E4DA]">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#A8872E] mb-3">
                  Antes de tu cita
                </p>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#1A1A1A] mb-5 leading-snug">
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

              <div className="relative bg-gradient-to-br from-[#1A1A1A] via-[#161616] to-[#0E0E0E] p-7 sm:p-9 lg:p-10 text-white">
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
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-5 leading-snug">
                    Indicaciones después de tu cita
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

      {/* 6 — FAQ */}
      <FAQSection
        faqs={browsFaqs}
        title="Preguntas frecuentes sobre cejas y pestañas"
        subtitle="Respuestas claras sobre técnicas, duración, preparación y cuidado posterior."
        variant="light"
      />

      {/* 7 — Final CTA */}
      <CTABanner
        title="Agenda tu sesión boutique"
        subtitle="Escríbenos por WhatsApp para coordinar tu cita y orientación sobre el servicio que más te conviene."
        ctaText="Agendar por WhatsApp"
        ctaMessage={BROWS_WHATSAPP_MESSAGE}
        variant="dark"
        trackingSource="brows_final_cta"
        disclaimerText="Los resultados pueden variar según vello, piel y cuidado posterior."
      />
    </>
  );
}
