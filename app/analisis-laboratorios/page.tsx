import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  ClipboardCheck,
  Droplets,
  FlaskConical,
  HeartPulse,
  Microscope,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import CTABanner from "@/components/ui/CTABanner";
import MedicalDisclaimer from "@/components/ui/MedicalDisclaimer";
import HeadlineReveal from "@/components/motion/HeadlineReveal";
import MagneticCTA from "@/components/motion/MagneticCTA";
import { LAB_ANALYSIS_WORDING } from "@/content/metabolic-protocols";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Análisis de Laboratorios | Aurum Nova Wellness Clinic",
  description:
    "Conoce cómo Aurum Nova utiliza marcadores de laboratorio para orientar planes metabólicos, wellness y manejo de peso de forma educativa y clínica.",
  alternates: { canonical: `${siteConfig.url}/analisis-laboratorios` },
  openGraph: {
    title: "Análisis de Laboratorios | Aurum Nova Wellness Clinic",
    description:
      "Laboratorios para contextualizar metabolismo, glucosa, lípidos, tiroides, función hepática, renal y próximos pasos clínicos.",
    url: `${siteConfig.url}/analisis-laboratorios`,
    siteName: siteConfig.name,
    locale: siteConfig.ogLocale,
    type: "website",
  },
};

const markerCategories = [
  {
    title: "Glucosa y metabolismo",
    icon: Activity,
    mayInclude: "Puede incluir glucosa en ayunas, A1c e insulina si se ordena.",
    purpose: "Ayuda a contextualizar regulación de glucosa, riesgo metabólico y seguimiento.",
  },
  {
    title: "Lípidos y salud cardiometabólica",
    icon: HeartPulse,
    mayInclude: "Puede incluir colesterol total, LDL, HDL, triglicéridos y no-HDL.",
    purpose: "Ayuda a revisar patrones de riesgo cardiovascular y metabolismo.",
  },
  {
    title: "Función hepática y renal",
    icon: ShieldCheck,
    mayInclude: "Puede incluir AST, ALT, bilirrubina, creatinina, eGFR y BUN.",
    purpose: "Ayuda a identificar consideraciones de seguridad y necesidad de seguimiento.",
  },
  {
    title: "Tiroides y energía",
    icon: Sparkles,
    mayInclude: "Puede incluir TSH y otros marcadores si el historial lo justifica.",
    purpose: "Ayuda a discutir fatiga, cambios de peso y síntomas relacionados.",
  },
  {
    title: "Vitaminas y micronutrientes",
    icon: Droplets,
    mayInclude: "Puede incluir vitamina D, B12, folato o hierro según evaluación.",
    purpose: "Ayuda a orientar soporte nutricional y bienestar general.",
  },
  {
    title: "Otros marcadores según evaluación",
    icon: Microscope,
    mayInclude: "Puede incluir conteo sanguíneo, hormonas u otros estudios selectivos.",
    purpose: "Se consideran cuando síntomas, historial o hallazgos clínicos lo ameritan.",
  },
];

const processSteps = [
  {
    title: "Orden de laboratorios",
    text: "El proveedor define qué marcadores son apropiados según historial, metas y seguridad clínica.",
  },
  {
    title: "Resultados",
    text: "Los resultados se revisan como punto de partida, no como diagnóstico automático.",
  },
  {
    title: "Análisis clínico",
    text: "Cada marcador se interpreta junto a síntomas, medicamentos, antecedentes y factores de riesgo.",
  },
  {
    title: "Discusión en evaluación",
    text: "Se conversa qué hallazgos requieren seguimiento y qué opciones podrían discutirse.",
  },
  {
    title: "Ajuste del plan",
    text: "El plan puede iniciar, pausarse o modificarse según elegibilidad, tolerancia y criterio clínico.",
  },
];

const protocolConnections = [
  {
    title: "Inicial",
    text: "Punto de partida para revisar historial, ordenar laboratorios y discutir próximos pasos si cualifica.",
  },
  {
    title: "Avanzado",
    text: "Continuidad de 12 semanas con seguimiento clínico, educación y ajustes según evolución.",
  },
  {
    title: "Integral",
    text: "Monitoreo y estructura adicional cuando el paciente podría beneficiarse de mayor acompañamiento.",
  },
];

const faqs = [
  {
    question: "¿Los laboratorios están incluidos?",
    answer:
      "La orden y el análisis clínico están incluidos dentro de los protocolos. Costos externos del laboratorio pueden variar.",
  },
  {
    question: "¿Qué significa análisis clínico de resultados?",
    answer:
      "Significa que los valores se interpretan junto a tu historial, síntomas, medicamentos, metas y factores de riesgo. No se revisan como números aislados.",
  },
  {
    question: "¿Los laboratorios determinan si cualifico?",
    answer:
      "No por sí solos. Ayudan a orientar la evaluación, pero la elegibilidad depende de una revisión clínica individualizada y criterio profesional.",
  },
  {
    question: "¿Qué pasa si tengo resultados alterados?",
    answer:
      "El proveedor puede recomendar seguimiento, ajustes, referidos o pausar ciertos componentes hasta revisar seguridad y contexto clínico.",
  },
  {
    question: "¿Necesito laboratorios recientes?",
    answer:
      "Si tienes resultados recientes, pueden revisarse durante la evaluación. Si no, el proveedor puede ordenar estudios cuando sea apropiado.",
  },
  {
    question: "¿Qué hago después?",
    answer:
      "Agenda evaluación para revisar historial, objetivos, laboratorios y opciones de seguimiento. El quiz metabólico también puede ayudarte a organizar tu punto de partida.",
  },
];

function LabHeroVisual() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-[#E8E4DA] bg-white p-5 shadow-xl shadow-black/5">
      <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-[#C9A84C]/10 blur-3xl" />
      <div className="relative space-y-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#C9A84C]">
              Panel clínico
            </p>
            <p className="mt-1 text-sm font-semibold text-[#1A1A1A]">
              Interpretación guiada
            </p>
          </div>
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#1A1A1A] text-[#C9A84C]">
            <FlaskConical className="h-5 w-5" />
          </div>
        </div>

        {["Glucosa", "Lípidos", "Tiroides", "Función hepática y renal"].map((label, index) => (
          <div key={label} className="rounded-2xl border border-[#E8E4DA] bg-[#FAF8F4] p-4">
            <div className="mb-2 flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-[#1A1A1A]">{label}</p>
              <p className="text-[11px] text-[#6B6B6B]">Según historial</p>
            </div>
            <div className="h-2 rounded-full bg-[#E8E4DA]">
              <div
                className="h-2 rounded-full bg-[#C9A84C]"
                style={{ width: `${56 + index * 8}%` }}
              />
            </div>
          </div>
        ))}

        <div className="rounded-2xl bg-[#1A1A1A] p-4">
          <p className="text-xs font-semibold text-white">Próximos pasos clínicos</p>
          <p className="mt-1 text-[11px] leading-relaxed text-[#B8B0A3]">
            Los resultados orientan conversación, seguridad y seguimiento. No confirman elegibilidad.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AnalisisLaboratoriosPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#FAF8F4] pt-28 pb-14 sm:pb-16">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 78% 14%, rgba(201,168,76,0.24) 0%, transparent 58%)",
          }}
        />
        <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E8E4DA] bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                Análisis de Laboratorios
              </span>
              <HeadlineReveal
                as="h1"
                delay={0.15}
                className="max-w-3xl text-4xl sm:text-5xl lg:text-7xl font-bold tracking-[-0.025em] leading-[1.02] text-[#1A1A1A]"
              >
                Datos clínicos para entender tu metabolismo
              </HeadlineReveal>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#6B6B6B] sm:text-lg">
                En Aurum Nova usamos laboratorios como una herramienta educativa y clínica para
                entender mejor tu punto de partida, identificar áreas de seguimiento y orientar
                próximos pasos durante la evaluación.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <MagneticCTA strength={6}>
                  <Link
                    href="/agendar-evaluacion"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A84C] px-7 py-3.5 text-sm font-semibold text-[#1A1A1A] shadow-[0_10px_30px_-10px_rgba(201,168,76,0.55)] hover:shadow-[0_14px_40px_-10px_rgba(201,168,76,0.7)] ring-1 ring-black/5 transition-all hover:bg-[#A8872E] sm:text-base"
                  >
                    Agendar evaluación
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </MagneticCTA>
                <Link
                  href="/programa-metabolico"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E8E4DA] bg-white px-7 py-3.5 text-sm font-semibold text-[#1A1A1A] transition-colors hover:border-[#C9A84C] hover:text-[#C9A84C] sm:text-base"
                >
                  Ver programa metabólico
                </Link>
              </div>
              <p className="mt-4 max-w-xl text-xs leading-relaxed text-[#7B746A]">
                {LAB_ANALYSIS_WORDING}
              </p>
            </div>
            <LabHeroVisual />
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                Por qué importa
              </span>
              <h2 className="mt-3 text-3xl font-semibold text-[#1A1A1A] sm:text-4xl">
                Más que números aislados
              </h2>
            </div>
            <div className="rounded-3xl border border-[#E8E4DA] bg-[#FAF8F4] p-5 sm:p-6">
              <p className="text-base leading-relaxed text-[#6B6B6B]">
                Los resultados ayudan a contextualizar peso, energía, glucosa, lípidos, función
                hepática, función renal, tiroides y otros factores relevantes según tu historial.
                Son una herramienta para orientar conversación clínica, no una conclusión automática.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#FAF8F4]">
        <div className="container-max">
          <div className="mb-9 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
              Marcadores
            </span>
            <h2 className="mt-3 text-3xl font-semibold text-[#1A1A1A] sm:text-4xl">
              Categorías que pueden revisarse
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#6B6B6B]">
              Cada orden se individualiza. No todos los pacientes necesitan los mismos marcadores.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {markerCategories.map((category) => {
              const Icon = category.icon;
              return (
                <article
                  key={category.title}
                  className="rounded-2xl border border-[#E8E4DA] bg-white p-5"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#C9A84C]/10 text-[#C9A84C]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold text-[#1A1A1A]">{category.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#6B6B6B]">
                    {category.purpose}
                  </p>
                  <p className="mt-4 rounded-2xl bg-[#FAF8F4] p-3 text-xs leading-relaxed text-[#3D3D3D]">
                    {category.mayInclude}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="mb-9 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
              Proceso
            </span>
            <h2 className="mt-3 text-3xl font-semibold text-[#1A1A1A] sm:text-4xl">
              Cómo funciona
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <div key={step.title} className="rounded-2xl border border-[#E8E4DA] bg-[#FAF8F4] p-5">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#1A1A1A] text-sm font-bold text-[#C9A84C]">
                  {index + 1}
                </div>
                <h3 className="text-sm font-semibold text-[#1A1A1A]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6B6B6B]">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#1A1A1A]">
        <div className="container-max">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                Protocolos
              </span>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Cómo se conecta con el programa metabólico
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#B8B0A3]">
                Los resultados pueden influir en si conviene iniciar, pausar, modificar o evitar
                ciertos componentes del plan.
              </p>
            </div>
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                {protocolConnections.map((protocol) => (
                  <article key={protocol.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#C9A84C]">
                      {protocol.title}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-[#D8D2C7]">
                      {protocol.text}
                    </p>
                  </article>
                ))}
              </div>
              <div className="rounded-2xl border border-[#C9A84C]/30 bg-[#C9A84C]/10 p-4">
                <p className="text-sm font-semibold leading-relaxed text-[#F1E6C3]">
                  {LAB_ANALYSIS_WORDING}
                </p>
              </div>
              <MedicalDisclaimer
                variant="inline"
                custom="Los laboratorios ayudan a orientar la evaluación clínica, pero no diagnostican, no prescriben y no sustituyen una consulta médica. La interpretación final depende del historial, síntomas, medicamentos, factores de riesgo y criterio clínico."
                className="text-[#9A9A9A]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="mx-auto mb-9 max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
              Preguntas frecuentes
            </span>
            <h2 className="mt-3 text-3xl font-semibold text-[#1A1A1A] sm:text-4xl">
              Antes de tu evaluación
            </h2>
          </div>
          <div className="mx-auto max-w-3xl space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-[#E8E4DA] bg-[#FAF8F4] p-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-[#1A1A1A]">
                  {faq.question}
                  <ClipboardCheck className="h-4 w-4 shrink-0 text-[#C9A84C] transition-transform group-open:rotate-6" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-[#6B6B6B]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Convierte tus resultados en próximos pasos"
        subtitle="Agenda evaluación para revisar historial, laboratorios y opciones de seguimiento."
        ctaText="Agendar evaluación"
        ctaHref="/agendar-evaluacion"
        variant="cream"
        secondaryHref="/quiz-metabolico"
        secondaryText="Tomar quiz metabólico"
      />
    </>
  );
}
