import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Calculator,
  ClipboardList,
  Droplets,
  Flame,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import CTABanner from "@/components/ui/CTABanner";
import MedicalDisclaimer from "@/components/ui/MedicalDisclaimer";
import { JsonLdScript } from "@/components/JsonLd";
import FAQBlock from "@/components/seo/FAQBlock";
import {
  buildBreadcrumbSchema,
  buildFaqPageSchema,
  calculatorHubFaqs,
} from "@/content/calculator-faqs";

export const metadata: Metadata = {
  title: {
    absolute: "Calculadoras de Peso y Bienestar | Aurum Nova Wellness Clinic",
  },
  description:
    "Explora calculadoras educativas de IMC, meta de peso, déficit calórico e hidratación para conocer tu punto de partida. Resultados orientativos, no sustituyen evaluación clínica.",
  keywords: [
    "calculadoras de peso",
    "calculadora IMC Puerto Rico",
    "calculadora déficit calórico",
    "calculadora hidratación",
    "meta de peso",
    "bienestar metabólico",
  ],
  alternates: { canonical: "/calculadoras" },
  openGraph: {
    title: "Calculadoras de Peso y Bienestar | Aurum Nova Wellness Clinic",
    description:
      "Herramientas educativas para entender IMC, metas de peso, déficit calórico e hidratación como punto de partida orientativo.",
    url: "/calculadoras",
    siteName: "Aurum Nova Wellness Clinic",
    locale: "es_PR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadoras de Peso y Bienestar | Aurum Nova Wellness Clinic",
    description:
      "Calculadoras educativas para conocer tu punto de partida antes de una evaluación clínica.",
  },
};

const calculatorCards = [
  {
    href: "/calculadoras/imc",
    title: "Calculadora de IMC",
    description:
      "Calcula tu índice de masa corporal y entiende tu categoría de forma orientativa.",
    cta: "Calcular IMC",
    icon: Calculator,
  },
  {
    href: "/calculadoras/meta-de-peso",
    title: "Calculadora de meta de peso",
    description:
      "Evalúa cuántas libras deseas perder y qué ritmo semanal implicaría tu meta.",
    cta: "Calcular meta",
    icon: Target,
  },
  {
    href: "/calculadoras/deficit-calorico",
    title: "Calculadora de déficit calórico",
    description:
      "Estima mantenimiento y déficit moderado usando datos básicos y nivel de actividad.",
    cta: "Estimar déficit",
    icon: Flame,
  },
  {
    href: "/calculadoras/hidratacion-electrolitos",
    title: "Hidratación y electrolitos",
    description:
      "Estima un rango general de hidratación diaria según peso, actividad y sudoración.",
    cta: "Estimar hidratación",
    icon: Droplets,
  },
];

const QUIZ_MESSAGE =
  "Hola, quiero completar el Quiz Metabólico de Aurum Nova después de revisar las calculadoras.";

export default function CalculadorasPage() {
  return (
    <>
      <JsonLdScript
        id="calculadoras-faq-json-ld"
        data={buildFaqPageSchema("/calculadoras", calculatorHubFaqs)}
      />
      <JsonLdScript
        id="calculadoras-breadcrumb-json-ld"
        data={buildBreadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Calculadoras", path: "/calculadoras" },
        ])}
      />

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
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E8E4DA] bg-white px-4 py-1.5 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                Calculadoras
              </span>
            </div>

            <h1 className="mb-5 text-4xl font-semibold leading-[1.1] text-[#1A1A1A] sm:text-5xl lg:text-6xl">
              Conoce tu punto de partida{" "}
              <span className="gold-text-gradient">antes de comenzar</span>
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-[#6B6B6B]">
              Usa herramientas educativas para entender mejor tu peso, metas, hidratación y
              hábitos. Los resultados son orientativos y no sustituyen evaluación clínica.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/quiz-metabolico"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A84C] px-7 py-3.5 text-base font-semibold text-white shadow-md transition-all duration-200 hover:bg-[#A8872E] hover:shadow-lg focus:outline-none focus:ring-3 focus:ring-[#C9A84C]/30"
              >
                Hacer quiz metabólico
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/programa-metabolico"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E8E4DA] bg-white px-7 py-3.5 text-base font-semibold text-[#1A1A1A] transition-all duration-200 hover:border-[#C9A84C] hover:text-[#C9A84C] focus:outline-none focus:ring-3 focus:ring-[#C9A84C]/20"
              >
                Ver programa
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { label: "Educativas", icon: ClipboardList },
                { label: "Orientativas", icon: BarChart3 },
                { label: "No reemplazan evaluación", icon: ShieldCheck },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 rounded-2xl border border-[#E8E4DA] bg-white/85 px-4 py-3 text-sm font-medium text-[#3D3D3D]"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-[#C9A84C]" />
                    {item.label}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                Herramientas
              </span>
              <h2 className="mt-3 text-3xl font-semibold text-[#1A1A1A] sm:text-4xl">
                Escoge una calculadora
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-[#6B6B6B]">
              Empieza por el dato que más te interesa y usa el resultado como conversación
              inicial, no como diagnóstico ni prescripción.
            </p>
          </div>

          <Link
            href="/perfil-metabolico"
            className="group relative mb-6 flex flex-col gap-5 overflow-hidden rounded-3xl border border-[#1A1A1A] bg-[#1A1A1A] p-6 text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:p-8 lg:flex-row lg:items-center lg:justify-between"
          >
            <div
              className="absolute inset-0 opacity-30 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse at 85% 15%, rgba(201,168,76,0.45) 0%, transparent 55%)",
              }}
            />
            <div className="relative z-10 flex flex-col gap-3 lg:max-w-2xl">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[#E2C97E]">
                <Sparkles className="h-3 w-3" />
                Nuevo · Recomendado
              </span>
              <h3 className="text-2xl font-semibold leading-tight sm:text-3xl">
                Perfil Metabólico Integral
              </h3>
              <p className="text-sm leading-relaxed text-white/70 sm:text-base">
                Una sola herramienta combina IMC, ritmo, energía e hidratación
                con cautelas clínicas. Ingresa tus datos una vez y revisa todo
                el contexto en un reporte educativo.
              </p>
            </div>
            <span className="relative z-10 inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A84C] px-6 py-3 text-sm font-semibold text-[#1A1A1A] transition-colors group-hover:bg-[#E2C97E]">
              Comenzar perfil
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>

          <div className="grid gap-4 md:grid-cols-2">
            {calculatorCards.map((calculator) => {
              const Icon = calculator.icon;
              return (
                <Link
                  key={calculator.href}
                  href={calculator.href}
                  className="group flex h-full flex-col rounded-2xl border border-[#E8E4DA] bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C9A84C]/50 hover:shadow-lg hover:shadow-[#1A1A1A]/5 sm:p-6"
                >
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#C9A84C]/10">
                      <Icon className="h-5 w-5 text-[#C9A84C]" />
                    </div>
                    <ArrowRight className="h-4 w-4 text-[#C9A84C] opacity-45 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100" />
                  </div>
                  <h3 className="text-xl font-semibold leading-snug text-[#1A1A1A]">
                    {calculator.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#6B6B6B]">
                    {calculator.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#C9A84C]">
                    {calculator.cta}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#FAF8F4]">
        <div className="container-max">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                Interpretación
              </span>
              <h2 className="mt-3 text-3xl font-semibold text-[#1A1A1A] sm:text-4xl">
                Cómo usar estos resultados
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#6B6B6B]">
                Estas calculadoras sirven para educación inicial. Tu historial, medicamentos,
                hábitos, composición corporal y condiciones médicas pueden cambiar la
                interpretación. Para una orientación personalizada, comienza con el quiz metabólico
                o agenda evaluación.
              </p>
            </div>

            <MedicalDisclaimer
              variant="box"
              custom="Estas herramientas son educativas y no sustituyen una evaluación médica. No diagnostican, no prescriben y no determinan candidatura a ningún tratamiento."
              className="bg-white"
            />
          </div>
        </div>
      </section>

      <FAQBlock
        faqs={calculatorHubFaqs}
        title="Preguntas frecuentes sobre las calculadoras"
        subtitle="Estas respuestas ayudan a usar los resultados como punto de partida educativo, no como diagnóstico ni tratamiento."
        variant="white"
      />

      <CTABanner
        title="Convierte tus números en un plan"
        subtitle="Completa el quiz metabólico y recibe orientación sobre el próximo paso según tus objetivos."
        ctaText="Hacer quiz metabólico"
        ctaHref="/quiz-metabolico"
        ctaMessage={QUIZ_MESSAGE}
        variant="dark"
        secondaryHref="/programa-metabolico"
        secondaryText="Ver programa metabólico"
      />
    </>
  );
}
