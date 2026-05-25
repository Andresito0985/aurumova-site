import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  Droplets,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Sun,
  Wind,
} from "lucide-react";
import CTABanner from "@/components/ui/CTABanner";
import FAQSection from "@/components/sections/FAQSection";
import HeadlineReveal from "@/components/motion/HeadlineReveal";
import MagneticCTA from "@/components/motion/MagneticCTA";
import MedicalDisclaimer from "@/components/ui/MedicalDisclaimer";
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

const focusAreas = [
  {
    icon: Droplets,
    title: "Limpieza profunda",
    copy: "Doble limpieza, exfoliación según tipo de piel y extracción guiada para retomar comodidad.",
  },
  {
    icon: Sparkles,
    title: "Hidratación avanzada",
    copy: "Sueros e infusiones que pueden ayudar a mejorar la apariencia, suavidad y luminosidad.",
  },
  {
    icon: Sun,
    title: "Glow y textura",
    copy: "Activos que apoyan una piel más uniforme y luminosa según tu objetivo.",
  },
  {
    icon: Wind,
    title: "Calma post-tratamiento",
    copy: "Mascarilla calmante, hidratación de cierre y orientación de cuidado en casa.",
  },
];

const whoFor = [
  "Piel apagada o con falta de luminosidad.",
  "Sensación de piel deshidratada o tirante.",
  "Textura irregular o poros congestionados.",
  "Preparación de piel antes de un evento.",
  "Mantenimiento mensual del cuidado facial.",
  "Acompañamiento estético responsable.",
];

const beforeAfter = {
  before: [
    "Evita exfoliantes potentes 48 horas antes.",
    "Avísanos si usas retinoides, tretinoína o ácidos.",
    "Llega sin maquillaje en el rostro.",
    "Comunica condiciones de piel sensible o reacciones recientes.",
  ],
  after: [
    "Evita exposición solar directa el primer día.",
    "Usa SPF como rutina diaria.",
    "Evita productos exfoliantes potentes 48 a 72 horas.",
    "Sigue las indicaciones específicas según el protocolo realizado.",
  ],
};

const hydrafacialSteps = [
  "Limpieza y exfoliación con sistema de vacío.",
  "Extracción asistida sin pinzas.",
  "Infusión de sueros personalizados.",
  "Hidratación profunda de cierre.",
];

export default function FacialesHydrafacialPage() {
  return (
    <>
      {/* Hero — cream editorial */}
      <section className="relative overflow-hidden bg-[#FAF8F4] pt-28 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 82% 18%, rgba(201,168,76,0.22) 0%, transparent 58%)",
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
              Faciales clínicos
            </span>

            <HeadlineReveal
              as="h1"
              delay={0.15}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.025em] leading-[1.02] text-[#1A1A1A] mb-5"
            >
              Faciales Profundos &{" "}
              <span className="text-[#A8872E]">Hydrafacial</span>
            </HeadlineReveal>

            <p className="text-lg text-[#6B6B6B] leading-relaxed mb-8 max-w-2xl">
              Una experiencia facial clínica, profunda y elegante para limpiar,
              hidratar y revitalizar la piel con protocolos personalizados
              según tu tipo de piel y objetivo estético.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <MagneticCTA strength={6}>
                <a
                  href={whatsappLink(FACIALS_WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A84C] hover:bg-[#A8872E] text-[#1A1A1A] font-semibold px-7 py-3.5 text-base transition-all duration-200 shadow-[0_12px_36px_-10px_rgba(201,168,76,0.55)] hover:shadow-[0_16px_44px_-10px_rgba(201,168,76,0.7)] ring-1 ring-black/5"
                >
                  Agendar facial
                  <ArrowRight className="w-4 h-4" />
                </a>
              </MagneticCTA>
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E8E4DA] hover:border-[#C9A84C] bg-white text-[#1A1A1A] hover:text-[#A8872E] font-semibold px-7 py-3.5 text-base transition-all duration-200"
              >
                Consultar qué facial me conviene
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Qué trabajamos — focus areas */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-2xl mb-10 sm:mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
              Qué trabajamos
            </span>
            <HeadlineReveal
              as="h2"
              onMount={false}
              delay={0.05}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-[#1A1A1A] leading-[1.05] mb-4"
            >
              Cuidado facial con{" "}
              <span className="text-[#A8872E]">enfoque clínico</span>
            </HeadlineReveal>
            <p className="text-base text-[#6B6B6B] leading-relaxed">
              Los faciales son protocolos estéticos y de bienestar, no
              tratamientos médicos. Pueden ayudar a mejorar la apariencia de la
              piel cuando se eligen según el caso.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {focusAreas.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#E8E4DA] bg-[#FAF8F4] p-5"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#C9A84C]/10 ring-1 ring-[#C9A84C]/20">
                    <Icon className="h-4 w-4 text-[#C9A84C]" />
                  </div>
                  <h3 className="text-sm font-semibold text-[#1A1A1A] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-[#6B6B6B]">
                    {item.copy}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Facial menu cards */}
      <section id="menu" className="section-padding bg-[#FAF8F4]">
        <div className="container-max">
          <div className="max-w-2xl mb-10 sm:mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
              Menú facial
            </span>
            <HeadlineReveal
              as="h2"
              onMount={false}
              delay={0.05}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-[#1A1A1A] leading-[1.05] mb-4"
            >
              Protocolos faciales{" "}
              <span className="text-[#A8872E]">disponibles</span>
            </HeadlineReveal>
            <p className="text-base text-[#6B6B6B] leading-relaxed">
              Cada protocolo se adapta según tipo de piel y objetivo. La
              recomendación final se confirma durante la consulta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-5">
            {facialServices.map((service) => (
              <article
                key={service.id}
                className={`relative flex h-full flex-col rounded-3xl border p-6 sm:p-7 transition-shadow ${
                  service.featured
                    ? "border-[#C9A84C]/55 bg-gradient-to-br from-[#1A1A1A] via-[#161616] to-[#0E0E0E] shadow-[0_24px_60px_-24px_rgba(201,168,76,0.35)]"
                    : "border-[#E8E4DA] bg-white shadow-[0_16px_40px_-30px_rgba(0,0,0,0.15)]"
                }`}
              >
                {service.featured && (
                  <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full border border-[#C9A84C]/40 bg-[#0E0E0E]/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-[#E2C97E] backdrop-blur">
                    Signature
                  </span>
                )}

                <p
                  className={`text-[10px] font-bold uppercase tracking-widest mb-1.5 ${
                    service.featured ? "text-[#E2C97E]" : "text-[#A8872E]"
                  }`}
                >
                  {service.tagline}
                </p>
                <h3
                  className={`text-xl sm:text-2xl font-bold tracking-tight mb-3 ${
                    service.featured ? "text-white" : "text-[#1A1A1A]"
                  }`}
                >
                  {service.name}
                </h3>
                <p
                  className={`text-sm leading-relaxed mb-5 ${
                    service.featured ? "text-[#BDB7AA]" : "text-[#6B6B6B]"
                  }`}
                >
                  {service.description}
                </p>

                <ul className="space-y-2 flex-1">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-2 text-xs leading-relaxed ${
                        service.featured ? "text-[#D8D2C7]" : "text-[#3D3D3D]"
                      }`}
                    >
                      <CheckCircle2
                        className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${
                          service.featured ? "text-[#C9A84C]" : "text-[#C9A84C]/85"
                        }`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <p
                  className={`mt-5 text-[11px] font-medium ${
                    service.featured ? "text-[#A8872E]/90" : "text-[#9A9A9A]"
                  }`}
                >
                  Precio según evaluación
                </p>
              </article>
            ))}
          </div>

          <p className="mt-6 text-xs leading-relaxed text-[#9A9A9A] max-w-2xl">
            {FACIALS_RESULTS_DISCLAIMER}
          </p>
        </div>
      </section>

      {/* Hydrafacial explanation */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-start">
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
                Hydrafacial
              </span>
              <HeadlineReveal
                as="h2"
                onMount={false}
                delay={0.05}
                className="text-3xl sm:text-4xl font-bold tracking-[-0.02em] text-[#1A1A1A] leading-[1.05] mb-4"
              >
                Hidratación avanzada{" "}
                <span className="text-[#A8872E]">paso a paso</span>
              </HeadlineReveal>
              <p className="text-base text-[#6B6B6B] leading-relaxed mb-5">
                Hydrafacial combina limpieza, exfoliación, extracción suave e
                hidratación en un solo protocolo. La aplicación se personaliza
                según tipo de piel y objetivo estético del momento.
              </p>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">
                No es un tratamiento médico ni reemplaza una evaluación
                dermatológica si tienes una condición médica de la piel.
              </p>
            </div>

            <ol className="space-y-3">
              {hydrafacialSteps.map((step, i) => (
                <li
                  key={step}
                  className="flex items-start gap-4 rounded-2xl border border-[#E8E4DA] bg-[#FAF8F4] p-4 sm:p-5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#1A1A1A] text-sm font-bold text-[#E2C97E]">
                    {i + 1}
                  </span>
                  <p className="text-sm sm:text-base font-medium leading-snug text-[#1A1A1A]">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="section-padding bg-[#FAF8F4]">
        <div className="container-max">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-start">
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
                Para quién
              </span>
              <HeadlineReveal
                as="h2"
                onMount={false}
                delay={0.05}
                className="text-3xl sm:text-4xl font-bold tracking-[-0.02em] text-[#1A1A1A] leading-[1.05] mb-4"
              >
                Pacientes que buscan{" "}
                <span className="text-[#A8872E]">cuidado facial</span>
              </HeadlineReveal>
              <p className="text-base text-[#6B6B6B] leading-relaxed">
                Si tienes una condición médica de la piel, conviene consultar
                con un dermatólogo antes de agendar.
              </p>
            </div>

            <div className="rounded-3xl border border-[#E8E4DA] bg-white p-6 sm:p-7">
              <ul className="space-y-2.5">
                {whoFor.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-[#3D3D3D] leading-relaxed"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A84C]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <MedicalDisclaimer
                  variant="inline"
                  custom="Los faciales son servicios estéticos y de bienestar. No son tratamientos médicos para condiciones dermatológicas. Si tienes acné severo, melasma, rosácea, dermatitis u otra condición médica, consulta con un dermatólogo."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before / Aftercare */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="rounded-3xl border border-[#E8E4DA] bg-[#FAF8F4] p-6 sm:p-7">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#A8872E] mb-3">
                Antes de tu facial
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
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A84C]" />
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
                Recomendaciones después del facial
              </h3>
              <ul className="space-y-2.5">
                {beforeAfter.after.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-[#BDB7AA] leading-relaxed"
                  >
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A84C]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        faqs={facialsFaqs}
        title="Preguntas frecuentes sobre faciales y Hydrafacial"
        subtitle="Respuestas claras sobre tipos de facial, expectativas, preparación y cuidado posterior."
        variant="light"
      />

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
