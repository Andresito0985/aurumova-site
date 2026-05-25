import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  ChevronLeft,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import CTABanner from "@/components/ui/CTABanner";
import FAQSection from "@/components/sections/FAQSection";
import HeadlineReveal from "@/components/motion/HeadlineReveal";
import MagneticCTA from "@/components/motion/MagneticCTA";
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

const whatToExpect = [
  {
    icon: Sparkles,
    title: "Consulta breve",
    copy: "Conversamos sobre tu estilo, forma natural y el resultado que buscas antes de iniciar.",
  },
  {
    icon: ShieldCheck,
    title: "Técnica cuidada",
    copy: "Trabajamos paso a paso, con productos profesionales y atención al detalle.",
  },
  {
    icon: Calendar,
    title: "Mantenimiento simple",
    copy: "Recibes orientación de cuidado posterior y frecuencia recomendada para tu caso.",
  },
];

const beforeAfter = {
  before: [
    "Evita exfoliantes fuertes 24 a 48 horas antes.",
    "Llega sin maquillaje en el área a tratar.",
    "Avísanos si usas retinoides o tretinoína.",
    "Avísanos si tu piel está sensible o irritada.",
  ],
  after: [
    "Evita agua y vapor las primeras horas según el servicio.",
    "Evita exfoliantes potentes algunos días.",
    "Usa SPF si te expones al sol directo.",
    "Sigue las indicaciones específicas del equipo al cerrar la sesión.",
  ],
};

export default function BrowsCejasPage() {
  return (
    <>
      {/* Hero — cream editorial */}
      <section className="relative overflow-hidden bg-[#FAF8F4] pt-28 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 78% 18%, rgba(201,168,76,0.22) 0%, transparent 58%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent"
        />

        <div className="container-max relative z-10">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-1.5 text-xs text-[#9A9A9A] hover:text-[#C9A84C] transition-colors"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            Inicio
          </Link>

          <div className="max-w-3xl">
            <span className="mb-4 inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C]">
              Boutique Brow Menu
            </span>

            <HeadlineReveal
              as="h1"
              delay={0.15}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.025em] leading-[1.02] text-[#1A1A1A] mb-5"
            >
              Diseño de Cejas &{" "}
              <span className="text-[#A8872E]">Brow Wellness</span>
            </HeadlineReveal>

            <p className="text-lg text-[#6B6B6B] leading-relaxed mb-8 max-w-2xl">
              Un servicio boutique para definir, levantar y armonizar la mirada
              con un estilo limpio, elegante y natural.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <MagneticCTA strength={6}>
                <a
                  href="#menu"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A84C] hover:bg-[#A8872E] text-[#1A1A1A] font-semibold px-7 py-3.5 text-base transition-all duration-200 shadow-[0_12px_36px_-10px_rgba(201,168,76,0.55)] hover:shadow-[0_16px_44px_-10px_rgba(201,168,76,0.7)] ring-1 ring-black/5"
                >
                  Ver menú de servicios
                  <ArrowRight className="w-4 h-4" />
                </a>
              </MagneticCTA>
              <a
                href={whatsappLink(BROWS_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E8E4DA] hover:border-[#C9A84C] bg-white text-[#1A1A1A] hover:text-[#A8872E] font-semibold px-7 py-3.5 text-base transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                Escribir por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Boutique brow menu — luxury editorial */}
      <section
        id="menu"
        className="relative bg-[#1A1A1A] py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* Background gold accents */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 16% 18%, rgba(201,168,76,0.20) 0%, transparent 55%), radial-gradient(ellipse at 86% 88%, rgba(201,168,76,0.14) 0%, transparent 50%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/55 to-transparent"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/55 to-transparent"
        />
        {/* Subtle texture grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        <div className="container-max relative z-10">
          <div className="mx-auto max-w-[640px]">
            {/* Cream menu card */}
            <div className="relative rounded-[2rem] bg-gradient-to-b from-[#FAF8F4] to-[#F4EBD0]/40 ring-1 ring-[#C9A84C]/30 shadow-[0_40px_120px_-40px_rgba(201,168,76,0.45)] px-8 sm:px-12 py-10 sm:py-12">
              {/* Decorative top hairline gold pair */}
              <div className="mb-6 flex flex-col items-center">
                <span
                  aria-hidden="true"
                  className="block h-px w-24 bg-gradient-to-r from-transparent via-[#A8872E] to-transparent"
                />
                <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.32em] text-[#A8872E]">
                  Boutique Brow Menu
                </p>
                <span
                  aria-hidden="true"
                  className="mt-3 block h-px w-12 bg-gradient-to-r from-transparent via-[#A8872E]/60 to-transparent"
                />
              </div>

              <h2 className="text-center font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#1A1A1A] mb-2">
                Servicios de cejas y pestañas
              </h2>
              <p className="text-center text-sm text-[#6B6B6B] mb-8 sm:mb-10">
                Atención personalizada en cada sesión
              </p>

              {/* Service list with dotted gold leaders */}
              <ul className="space-y-6">
                {browServices.map((service) => (
                  <li key={service.id}>
                    <div className="flex items-baseline gap-3">
                      <h3 className="text-base sm:text-lg font-semibold text-[#1A1A1A] whitespace-nowrap">
                        {service.name}
                      </h3>
                      <span
                        aria-hidden="true"
                        className="flex-1 border-b border-dotted border-[#A8872E]/50 translate-y-[-3px]"
                      />
                      <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#A8872E] whitespace-nowrap">
                        ${service.price}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#6B6B6B]">
                      {service.description}
                    </p>
                  </li>
                ))}
              </ul>

              {/* Bottom hairline + closing label */}
              <div className="mt-10 flex flex-col items-center">
                <span
                  aria-hidden="true"
                  className="block h-px w-12 bg-gradient-to-r from-transparent via-[#A8872E]/60 to-transparent"
                />
                <p className="mt-4 text-center text-xs leading-relaxed text-[#6B6B6B] max-w-md">
                  {BROWS_RESULTS_DISCLAIMER}
                </p>
              </div>
            </div>

            {/* CTAs below the menu card */}
            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <MagneticCTA strength={6}>
                <a
                  href={whatsappLink(BROWS_WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A84C] hover:bg-[#A8872E] text-[#1A1A1A] font-semibold px-7 py-3.5 text-base transition-all duration-200 shadow-[0_12px_36px_-10px_rgba(201,168,76,0.55)] ring-1 ring-black/5"
                >
                  Agendar servicio de cejas
                  <ArrowRight className="w-4 h-4" />
                </a>
              </MagneticCTA>
              <a
                href={whatsappLink(BROWS_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] text-white hover:border-[#C9A84C]/50 hover:text-[#E2C97E] font-semibold px-7 py-3.5 text-base transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                Escribir por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-2xl mb-10 sm:mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
              Qué esperar
            </span>
            <HeadlineReveal
              as="h2"
              onMount={false}
              delay={0.05}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-[#1A1A1A] leading-[1.05] mb-4"
            >
              Boutique, ordenado y{" "}
              <span className="text-[#A8872E]">personalizado</span>
            </HeadlineReveal>
            <p className="text-base text-[#6B6B6B] leading-relaxed">
              Cada sesión se trabaja con tiempo, calidad y atención individual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {whatToExpect.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#E8E4DA] bg-[#FAF8F4] p-5"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#C9A84C]/10 ring-1 ring-[#C9A84C]/20">
                    <Icon className="h-4 w-4 text-[#C9A84C]" />
                  </div>
                  <h3 className="text-base font-semibold text-[#1A1A1A] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#6B6B6B]">
                    {item.copy}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Before / Aftercare */}
      <section className="section-padding bg-[#FAF8F4]">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="rounded-3xl border border-[#E8E4DA] bg-white p-6 sm:p-7">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#A8872E] mb-3">
                Antes de tu cita
              </p>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">
                Preparación recomendada
              </h3>
              <ul className="space-y-2.5">
                {beforeAfter.before.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-[#3D3D3D] leading-relaxed"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A84C]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-[#1A1A1A]/10 bg-gradient-to-br from-[#1A1A1A] via-[#161616] to-[#0E0E0E] p-6 sm:p-7 text-white ring-1 ring-[#C9A84C]/20">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#E2C97E] mb-3">
                Cuidado posterior
              </p>
              <h3 className="text-xl font-bold text-white mb-4">
                Recomendaciones después de tu cita
              </h3>
              <ul className="space-y-2.5">
                {beforeAfter.after.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-[#BDB7AA] leading-relaxed"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A84C]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        faqs={browsFaqs}
        title="Preguntas frecuentes sobre cejas y pestañas"
        subtitle="Respuestas claras sobre técnicas, duración, preparación y cuidado posterior."
        variant="light"
      />

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
