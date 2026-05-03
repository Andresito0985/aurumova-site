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
import { LAB_ANALYSIS_WORDING } from "@/content/metabolic-protocols";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Análisis de Laboratorios | Aurum Nova Wellness Clinic",
  description:
    "Conoce cómo Aurum Nova utiliza marcadores de laboratorio para orientar planes metabólicos, wellness y manejo de peso de forma personalizada y segura.",
  alternates: { canonical: `${siteConfig.url}/analisis-laboratorios` },
  openGraph: {
    title: "Análisis de Laboratorios | Aurum Nova Wellness Clinic",
    description:
      "Evaluación educativa de marcadores metabólicos, glucosa, lípidos, tiroides, función hepática, renal y estado nutricional.",
    url: `${siteConfig.url}/analisis-laboratorios`,
    siteName: siteConfig.name,
    locale: siteConfig.ogLocale,
    type: "website",
  },
};

const markerCategories = [
  {
    title: "Glucosa y regulación metabólica",
    icon: Activity,
    markers: [
      "Glucosa en ayunas",
      "Hemoglobina A1c",
      "Insulina en ayunas, si se ordena",
      "Marcadores estimados de resistencia a la insulina, cuando sea clínicamente apropiado",
    ],
    purpose:
      "Ayuda a evaluar control de glucosa, posible resistencia a la insulina y riesgo metabólico.",
  },
  {
    title: "Lípidos y riesgo cardiovascular",
    icon: HeartPulse,
    markers: ["Colesterol total", "LDL", "HDL", "Triglicéridos", "Colesterol no-HDL, si está disponible"],
    purpose: "Ayuda a evaluar patrones de riesgo cardiovascular y metabólico.",
  },
  {
    title: "Función hepática y renal",
    icon: ShieldCheck,
    markers: ["AST", "ALT", "Fosfatasa alcalina", "Bilirrubina", "Creatinina", "eGFR", "BUN"],
    purpose:
      "Ayuda a valorar consideraciones de seguridad, metabolismo general y necesidad de seguimiento adicional.",
  },
  {
    title: "Tiroides y regulación de energía",
    icon: Sparkles,
    markers: [
      "TSH",
      "T4 libre, si es clínicamente apropiado",
      "Marcadores adicionales de tiroides si están indicados",
    ],
    purpose:
      "Ayuda a identificar posibles factores relacionados a fatiga, cambios de peso y síntomas metabólicos.",
  },
  {
    title: "Conteo sanguíneo y salud general",
    icon: Microscope,
    markers: ["CBC", "Hemoglobina", "Hematocrito", "Plaquetas", "Glóbulos blancos"],
    purpose:
      "Ayuda a identificar patrones de anemia, señales inflamatorias o hallazgos generales que requieren revisión.",
  },
  {
    title: "Vitaminas y estado nutricional",
    icon: Droplets,
    markers: ["Vitamina D", "B12", "Folato, si está indicado", "Estudios de hierro, si están indicados"],
    purpose: "Ayuda a evaluar fatiga, bienestar general y soporte nutricional.",
  },
  {
    title: "Marcadores hormonales y avanzados",
    icon: ClipboardCheck,
    markers: [
      "Hormonas sexuales cuando sea clínicamente apropiado",
      "Cortisol u otros marcadores solo si están indicados",
      "Marcadores adicionales según síntomas e historial",
    ],
    purpose:
      "Se utilizan de forma selectiva cuando los síntomas, historial o hallazgos clínicos justifican una evaluación más profunda.",
  },
];

const processSteps = [
  {
    title: "Historial clínico y objetivos",
    text: "Revisamos síntomas, medicamentos, antecedentes, metas y factores de riesgo antes de interpretar cualquier marcador.",
  },
  {
    title: "Orden de laboratorios y colección",
    text: "El proveedor define qué pruebas son apropiadas para tu caso y orienta sobre el proceso de colección.",
  },
  {
    title: "Revisión e interpretación clínica",
    text: "Los resultados se interpretan junto a tu contexto clínico, no como números aislados.",
  },
  {
    title: "Discusión de plan personalizado",
    text: "Con esa información se discute si conviene iniciar, pausar, modificar o evitar ciertos componentes.",
  },
];

function LabHeroVisual() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-[#E8E4DA] bg-white p-5 shadow-xl shadow-black/5">
      <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[#C9A84C]/10 blur-3xl" />
      <div className="relative">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#C9A84C]">
              Panel metabólico
            </p>
            <p className="mt-1 text-sm font-semibold text-[#1A1A1A]">Revisión clínica guiada</p>
          </div>
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#1A1A1A] text-[#C9A84C]">
            <FlaskConical className="h-5 w-5" />
          </div>
        </div>

        <div className="space-y-3">
          {[
            { label: "Glucosa", value: "Se interpreta con historial", pct: 72 },
            { label: "Lípidos", value: "Riesgo cardiometabólico", pct: 58 },
            { label: "Tiroides", value: "Energía y síntomas", pct: 44 },
            { label: "Función renal/hepática", value: "Seguridad clínica", pct: 66 },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-[#E8E4DA] bg-[#FAF8F4] p-4">
              <div className="mb-2 flex items-center justify-between gap-4">
                <p className="text-sm font-semibold text-[#1A1A1A]">{item.label}</p>
                <p className="text-[11px] text-[#6B6B6B]">{item.value}</p>
              </div>
              <div className="h-2 rounded-full bg-[#E8E4DA]">
                <div
                  className="h-2 rounded-full bg-[#C9A84C]"
                  style={{ width: `${item.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-2xl bg-[#1A1A1A] p-4">
          <p className="text-xs font-semibold text-white">Interpretación individualizada</p>
          <p className="mt-1 text-[11px] leading-relaxed text-[#9A9A9A]">
            Los marcadores se revisan junto a síntomas, medicamentos, objetivos y seguridad clínica.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AnalisisLaboratoriosPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#FAF8F4] pt-28 pb-16">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 78% 14%, rgba(201,168,76,0.26) 0%, transparent 58%)",
          }}
        />
        <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E8E4DA] bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                Laboratorios
              </span>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl">
                Análisis de laboratorios para cuidado metabólico personalizado
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#6B6B6B]">
                Evaluamos marcadores clave para entender mejor tu metabolismo, identificar
                factores de riesgo y diseñar un plan clínico más preciso según tus necesidades.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/agendar-evaluacion"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A84C] px-7 py-3.5 text-base font-semibold text-white shadow-md transition-colors hover:bg-[#A8872E]"
                >
                  Comenzar evaluación
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/programa-metabolico"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E8E4DA] bg-white px-7 py-3.5 text-base font-semibold text-[#1A1A1A] transition-colors hover:border-[#C9A84C] hover:text-[#C9A84C]"
                >
                  Ver programa metabólico
                </Link>
              </div>
            </div>
            <LabHeroVisual />
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                Por qué importa
              </span>
              <h2 className="mt-3 text-3xl font-semibold text-[#1A1A1A] sm:text-4xl">
                Tu metabolismo cuenta una historia más completa que el peso
              </h2>
            </div>
            <div className="space-y-4 text-base leading-relaxed text-[#6B6B6B]">
              <p>
                El peso y el metabolismo están influenciados por más que calorías. La regulación
                de glucosa, resistencia a la insulina, lípidos, tiroides, función hepática,
                función renal, inflamación, vitaminas y hormonas pueden cambiar cómo progresa un
                paciente.
              </p>
              <p>
                Los laboratorios ayudan a orientar un cuidado más seguro y personalizado. No
                sustituyen una evaluación individualizada, pero ofrecen contexto clínico para
                decidir qué opciones pueden ser apropiadas y cuáles requieren cautela.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#FAF8F4]">
        <div className="container-max">
          <div className="mb-10 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
              Marcadores
            </span>
            <h2 className="mt-3 text-3xl font-semibold text-[#1A1A1A] sm:text-4xl">
              Categorías que pueden orientar tu evaluación
            </h2>
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
                  <p className="mt-2 text-sm leading-relaxed text-[#6B6B6B]">{category.purpose}</p>
                  <ul className="mt-4 space-y-2">
                    {category.markers.map((marker) => (
                      <li key={marker} className="flex items-start gap-2 text-xs leading-relaxed text-[#3D3D3D]">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A84C]" />
                        {marker}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="mb-10 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
              Proceso
            </span>
            <h2 className="mt-3 text-3xl font-semibold text-[#1A1A1A] sm:text-4xl">
              Cómo usamos tus resultados
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step.title} className="rounded-2xl border border-[#E8E4DA] bg-[#FAF8F4] p-5">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#1A1A1A] text-sm font-bold text-[#C9A84C]">
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
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                Protocolos metabólicos
              </span>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Conexión con el programa metabólico
              </h2>
            </div>
            <div className="rounded-3xl border border-[#2D2D2D] bg-[#242424] p-6">
              <p className="text-base leading-relaxed text-[#D8D2C7]">
                Los laboratorios forman parte del proceso del programa metabólico. La orden y el
                análisis clínico están integrados para ayudar a decidir si el paciente debe iniciar,
                pausar, modificar o evitar ciertas terapias o herramientas.
              </p>
              <div className="mt-5 rounded-2xl border border-[#C9A84C]/30 bg-[#C9A84C]/10 p-4">
                <p className="text-sm font-semibold leading-relaxed text-[#F1E6C3]">
                  {LAB_ANALYSIS_WORDING}
                </p>
              </div>
              <div className="mt-5">
                <MedicalDisclaimer
                  variant="inline"
                  custom="Los laboratorios ayudan a orientar la evaluación clínica, pero no sustituyen una consulta médica. La interpretación final depende del historial, síntomas, medicamentos, factores de riesgo y criterio clínico."
                  className="text-[#9A9A9A]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Comienza con una evaluación metabólica más completa"
        subtitle="Completa el quiz o agenda una evaluación para revisar objetivos, seguridad clínica y laboratorios cuando aplique."
        ctaText="Tomar quiz metabólico"
        ctaHref="/quiz-metabolico"
        variant="cream"
        secondaryHref="/agendar-evaluacion"
        secondaryText="Agendar evaluación"
      />
    </>
  );
}
