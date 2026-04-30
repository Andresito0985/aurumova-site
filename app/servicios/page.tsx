import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Calculator,
  CheckCircle2,
  ClipboardList,
  Droplets,
  Heart,
  MessageCircle,
  Sparkles,
  Syringe,
  Target,
  Utensils,
  Wind,
  Zap,
} from "lucide-react";
import CTABanner from "@/components/ui/CTABanner";
import MedicalDisclaimer from "@/components/ui/MedicalDisclaimer";
import { whatsappLink } from "@/content/site";

export const metadata: Metadata = {
  title: "Servicios | Aurum Nova Wellness Clinic",
  description:
    "Explora los servicios de Aurum Nova Wellness Clinic en Arecibo: programa metabólico, quiz metabólico, láser diodo, inyectables, sueroterapia, nutrición y wellness médico-estético.",
  keywords: [
    "servicios Aurum Nova",
    "clínica wellness Arecibo",
    "programa metabólico Puerto Rico",
    "quiz metabólico",
    "láser diodo Arecibo",
    "sueroterapia Puerto Rico",
    "inyectables metabólicos",
    "wellness médico estético",
  ],
  alternates: { canonical: "https://aurumnovawellnessclinic.com/servicios" },
  openGraph: {
    title: "Servicios | Aurum Nova Wellness Clinic",
    description:
      "Encuentra el servicio adecuado para tu objetivo: control metabólico, láser diodo y wellness médico-estético con evaluación clínica en Arecibo.",
    url: "https://aurumnovawellnessclinic.com/servicios",
    siteName: "Aurum Nova Wellness Clinic",
    locale: "es_PR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios | Aurum Nova Wellness Clinic",
    description:
      "Encuentra el servicio adecuado para tu objetivo con la guía clínica de Aurum Nova Wellness Clinic.",
  },
};

const services = [
  {
    title: "Programa Metabólico Integral",
    goal: "Quiero trabajar mi peso y salud metabólica",
    description:
      "Evaluación clínica, plan individualizado, seguimiento y apoyo terapéutico si cualificas según historial y criterio clínico.",
    href: "/programa-metabolico",
    cta: "Ver programa",
    icon: Activity,
  },
  {
    title: "Quiz de Perfil Metabólico",
    goal: "No sé por dónde empezar",
    description:
      "Herramienta orientativa para entender tu punto de partida antes de solicitar orientación clínica.",
    href: "/quiz-metabolico",
    cta: "Hacer quiz",
    icon: ClipboardList,
  },
  {
    title: "Láser Diodo High-Tech",
    goal: "Quiero reducir vello no deseado",
    description:
      "Planes por zona y paquetes personalizados para rostro y cuerpo, con orientación según piel, zona y objetivos.",
    href: "/laser-diodo",
    cta: "Ver láser",
    icon: Zap,
  },
  {
    title: "Inyectables Metabólicos",
    goal: "Busco apoyo wellness supervisado",
    description:
      "Opciones de apoyo metabólico y wellness que requieren evaluación, elegibilidad y prescripción cuando aplique.",
    href: "/inyectables-metabolicos",
    cta: "Conocer opciones",
    icon: Syringe,
  },
  {
    title: "Sueroterapia",
    goal: "Quiero hidratación y soporte wellness",
    description:
      "Protocolos IV como NAD+ y Myers según objetivos, tolerancia, historial y evaluación profesional.",
    href: "/sueroterapia",
    cta: "Ver sueroterapia",
    icon: Droplets,
  },
  {
    title: "Nutrición Personalizada",
    goal: "Necesito estructura para comer mejor",
    description:
      "Guía nutricional práctica para acompañar metas metabólicas, energía, adherencia y cambios sostenibles.",
    href: "/nutricion",
    cta: "Ver nutrición",
    icon: Utensils,
  },
  {
    title: "Coaching y Seguimiento",
    goal: "Quiero mantenerme consistente",
    description:
      "Acompañamiento con métricas, ajustes, hábitos y seguimiento para sostener el progreso de forma realista.",
    href: "/coaching-seguimiento",
    cta: "Ver seguimiento",
    icon: BarChart3,
  },
  {
    title: "Skin & Glow",
    goal: "Quiero mejorar apariencia y luminosidad",
    description:
      "Wellness médico-estético orientado a piel, glow y cuidado integral, con expectativas realistas.",
    href: "/skin-glow",
    cta: "Ver Skin & Glow",
    icon: Sparkles,
  },
  {
    title: "Hair Support",
    goal: "Me preocupa la salud capilar",
    description:
      "Apoyo orientativo para metas de cabello y bienestar, según evaluación, historial y necesidades individuales.",
    href: "/hair-support",
    cta: "Ver Hair Support",
    icon: Wind,
  },
  {
    title: "Wellness Hombre",
    goal: "Busco optimizar energía y bienestar masculino",
    description:
      "Enfoque integral para hombres con metas de rendimiento, composición corporal, energía y seguimiento clínico.",
    href: "/wellness-hombre",
    cta: "Ver wellness hombre",
    icon: Target,
  },
  {
    title: "Wellness Mujer",
    goal: "Busco apoyo integral para bienestar femenino",
    description:
      "Acompañamiento para metas de energía, composición corporal, hábitos, estética y bienestar femenino.",
    href: "/wellness-mujer",
    cta: "Ver wellness mujer",
    icon: Heart,
  },
];

const guidePoints = [
  "Si tu meta principal es peso, apetito o metabolismo, comienza con el quiz o el Programa Metabólico.",
  "Si tu prioridad es estética corporal, láser o skin glow pueden ser mejores primeros pasos.",
  "Si tienes dudas clínicas, historial complejo o medicamentos actuales, una evaluación ayuda a ordenar prioridades.",
];

const WHATSAPP_MESSAGE =
  "Hola, quiero orientación para escoger el servicio adecuado en Aurum Nova Wellness Clinic. Mi objetivo principal es: ___.";

export default function ServiciosPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#FAF8F4] pt-28 pb-16">
        <div
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 82% 18%, rgba(201,168,76,0.22) 0%, transparent 58%)",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />

        <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white border border-[#E8E4DA] rounded-full px-4 py-1.5 mb-5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
              <span className="text-xs font-semibold tracking-widest uppercase text-[#C9A84C]">
                Servicios
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] text-[#1A1A1A] mb-5">
              Encuentra el servicio adecuado para tu objetivo en{" "}
              <span className="gold-text-gradient">Aurum Nova</span>
            </h1>

            <p className="text-lg text-[#6B6B6B] leading-relaxed mb-8 max-w-2xl">
              Control metabólico, láser diodo y wellness médico-estético con evaluación
              clínica, seguimiento y experiencia premium en Arecibo, Puerto Rico.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/quiz-metabolico"
                className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-7 py-3.5 rounded-full text-base transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Hacer quiz metabólico
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={whatsappLink(WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white border border-[#E8E4DA] hover:border-[#C9A84C] text-[#1A1A1A] hover:text-[#C9A84C] font-semibold px-7 py-3.5 rounded-full text-base transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                Escribir por WhatsApp
              </a>
            </div>

            <p className="mt-4 text-xs text-[#9A9A9A]">
              Cada servicio puede requerir evaluación clínica. Los resultados pueden variar.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                Guía por objetivo
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] mt-3">
                ¿Qué quieres mejorar?
              </h2>
            </div>
            <p className="text-sm text-[#6B6B6B] leading-relaxed max-w-xl">
              Usa estas opciones como mapa inicial. La recomendación final depende de tu
              historial, metas, tolerancia, seguridad y criterio clínico.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group flex h-full flex-col rounded-2xl border border-[#E8E4DA] bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C9A84C]/50 hover:shadow-lg hover:shadow-[#1A1A1A]/5"
                >
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#C9A84C]/10">
                      <Icon className="h-5 w-5 text-[#C9A84C]" />
                    </div>
                    <ArrowRight className="h-4 w-4 text-[#C9A84C] opacity-40 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100" />
                  </div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#9A9A9A]">
                    {service.goal}
                  </p>
                  <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#6B6B6B] flex-1">
                    {service.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#C9A84C]">
                    {service.cta}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="mt-6 rounded-2xl border border-[#E8E4DA] bg-[#FAF8F4] p-5 sm:p-6">
            <div className="grid gap-5 lg:grid-cols-[auto_1fr_auto] lg:items-center">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#C9A84C]/10">
                <Calculator className="h-5 w-5 text-[#C9A84C]" />
              </div>
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#9A9A9A]">
                  Recurso educativo
                </p>
                <h3 className="text-xl font-semibold text-[#1A1A1A]">
                  Calculadoras educativas
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#6B6B6B]">
                  Explora IMC, meta de peso, hidratación y déficit calórico de forma
                  orientativa. No diagnostican ni sustituyen evaluación clínica.
                </p>
              </div>
              <Link
                href="/calculadoras"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#1A1A1A] ring-1 ring-[#E8E4DA] transition-all duration-200 hover:text-[#C9A84C] hover:ring-[#C9A84C]/60 focus:outline-none focus:ring-3 focus:ring-[#C9A84C]/20"
              >
                Ver calculadoras
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#FAF8F4]">
        <div className="container-max">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                Primer paso
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] mt-3 mb-4">
                Si no sabes por dónde empezar
              </h2>
              <p className="text-base text-[#6B6B6B] leading-relaxed">
                El quiz metabólico puede ayudarte a ordenar tus metas de forma orientativa.
                Si prefieres hablar con el equipo, una evaluación clínica permite revisar
                historial, medicamentos, seguridad y prioridades antes de diseñar cualquier plan.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E8E4DA] bg-white p-5 sm:p-6">
              <div className="space-y-4">
                {guidePoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#C9A84C]" />
                    <p className="text-sm leading-relaxed text-[#3D3D3D]">{point}</p>
                  </div>
                ))}
              </div>
              <MedicalDisclaimer
                variant="inline"
                className="mt-6 border-t border-[#E8E4DA] pt-5"
                custom="La orientación inicial no determina candidatura médica. Cualquier terapia, protocolo o recomendación clínica requiere evaluación individual y criterio profesional."
              />
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Te ayudamos a escoger el próximo paso"
        subtitle="Cuéntanos tu objetivo principal y el equipo te orienta sobre el servicio que mejor encaja como punto de partida."
        ctaText="Escribir por WhatsApp"
        ctaMessage={WHATSAPP_MESSAGE}
        variant="dark"
        secondaryHref="/quiz-metabolico"
        secondaryText="Hacer quiz metabólico"
      />
    </>
  );
}
