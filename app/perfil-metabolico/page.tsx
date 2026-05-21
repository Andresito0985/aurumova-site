import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  ClipboardList,
  ShieldCheck,
} from "lucide-react";
import { JsonLdScript } from "@/components/JsonLd";
import IntegratedMetabolicProfile from "@/components/calculators/IntegratedMetabolicProfile";
import FAQBlock from "@/components/seo/FAQBlock";
import MedicalDisclaimer from "@/components/ui/MedicalDisclaimer";
import CTABanner from "@/components/ui/CTABanner";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";
import {
  buildBreadcrumbSchema,
  buildFaqPageSchema,
} from "@/content/calculator-faqs";
import { perfilMetabolicoFaqs } from "@/content/perfil-metabolico";

export const metadata: Metadata = {
  title: {
    absolute: "Perfil Metabólico Integral | Aurum Nova Wellness Clinic",
  },
  description:
    "Calcula de forma educativa tu IMC, meta de peso, estimado calórico e hidratación en una sola herramienta orientativa. No sustituye evaluación clínica.",
  keywords: [
    "perfil metabólico",
    "calculadora metabólica integral",
    "IMC y déficit calórico",
    "hidratación y metabolismo",
    "Aurum Nova",
  ],
  alternates: { canonical: "/perfil-metabolico" },
  openGraph: {
    title: "Perfil Metabólico Integral | Aurum Nova Wellness Clinic",
    description:
      "Una sola herramienta educativa que combina IMC, ritmo de pérdida, estimado calórico e hidratación con cautelas clínicas.",
    url: "/perfil-metabolico",
    siteName: "Aurum Nova Wellness Clinic",
    locale: "es_PR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Perfil Metabólico Integral | Aurum Nova Wellness Clinic",
    description:
      "Calcula IMC, meta, energía e hidratación en una sola herramienta orientativa.",
  },
};

const QUIZ_MESSAGE =
  "Hola, completé el Perfil Metabólico Integral en Aurum Nova y quisiera continuar con el quiz metabólico.";

export default function PerfilMetabolicoPage() {
  return (
    <>
      <JsonLdScript
        id="perfil-metabolico-faq-json-ld"
        data={buildFaqPageSchema("/perfil-metabolico", perfilMetabolicoFaqs)}
      />
      <JsonLdScript
        id="perfil-metabolico-breadcrumb-json-ld"
        data={buildBreadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Perfil Metabólico Integral", path: "/perfil-metabolico" },
        ])}
      />

      <section className="relative overflow-hidden bg-[#FAF8F4] pt-28 pb-14">
        <div
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 82% 18%, rgba(201,168,76,0.22) 0%, transparent 58%)",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />

        <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/calculadoras"
            className="mb-8 inline-flex items-center gap-1.5 text-xs font-medium text-[#9A9A9A] transition-colors hover:text-[#C9A84C]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Calculadoras
          </Link>

          <div className="max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E8E4DA] bg-white px-4 py-1.5 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                Perfil Metabólico Integral
              </span>
            </div>

            <h1 className="mb-5 text-4xl font-semibold leading-[1.1] text-[#1A1A1A] sm:text-5xl lg:text-6xl">
              Tus números en un solo lugar,{" "}
              <span className="text-[#A8872E]">de forma educativa</span>
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-[#6B6B6B]">
              Un formulario guiado combina IMC, ritmo de pérdida de peso,
              estimado calórico e hidratación con notas de cautela según tu
              contexto. Es orientativo y no sustituye una evaluación clínica.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="#perfil"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A84C] px-7 py-3.5 text-base font-semibold text-[#1A1A1A] shadow-md transition-all duration-200 hover:bg-[#A8872E] hover:shadow-lg focus:outline-none focus:ring-3 focus:ring-[#C9A84C]/30"
              >
                Comenzar el formulario
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/quiz-metabolico"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E8E4DA] bg-white px-7 py-3.5 text-base font-semibold text-[#1A1A1A] transition-all duration-200 hover:border-[#C9A84C] hover:text-[#C9A84C] focus:outline-none focus:ring-3 focus:ring-[#C9A84C]/20"
              >
                Hacer quiz metabólico
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { label: "Educativo", icon: ClipboardList },
                { label: "Orientativo", icon: BarChart3 },
                { label: "No diagnostica", icon: ShieldCheck },
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

      <section id="perfil" className="section-padding bg-white">
        <div className="container-max">
          <div className="mb-10 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
              Herramienta educativa
            </span>
            <h2 className="mt-3 text-3xl font-semibold text-[#1A1A1A] sm:text-4xl">
              Completa el formulario en pocos pasos
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#6B6B6B] sm:text-base">
              Ingresa tus datos una sola vez. Al final recibirás un reporte
              educativo con BMI y categoría, ritmo de pérdida estimado,
              referencia 5%–10%, BMR y mantenimiento, rangos de déficit,
              hidratación y cautelas clínicas relevantes.
            </p>
          </div>

          <IntegratedMetabolicProfile />

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-2xl border border-[#E8E4DA] bg-[#FAF8F4] p-5 sm:p-6">
              <h3 className="text-2xl font-semibold text-[#1A1A1A]">
                Cómo se interpreta este reporte
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#6B6B6B]">
                El reporte combina herramientas educativas que ya existen en
                Aurum Nova para que puedas ver tu contexto en una sola vista.
                No diagnostica ni reemplaza una evaluación clínica.
              </p>
              <div className="mt-5 grid gap-3">
                {[
                  "El IMC es un punto de partida; no mide composición corporal ni distribución de grasa.",
                  "Los rangos de calorías son educativos. Sueño, medicamentos, masa muscular y adherencia pueden cambiar tus necesidades.",
                  "Las recomendaciones de hidratación dependen también de clima, dieta, sudoración real y condiciones médicas.",
                  "No incluimos dosis de sodio, potasio ni magnesio. Las decisiones de electrolitos requieren contexto clínico.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A84C]" />
                    <p className="text-sm leading-relaxed text-[#3D3D3D]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <MedicalDisclaimer
              variant="box"
              custom="Esta herramienta ofrece estimados educativos generales. No diagnostica, no prescribe, no determina candidatura a tratamiento y no sustituye una evaluación clínica. No crea una relación proveedor-paciente. Consulta con un profesional de salud antes de iniciar un programa de pérdida de peso, cambiar tu alimentación o usar suplementos."
              className="bg-white"
            />
          </div>
        </div>
      </section>

      <RelatedCalculators currentPath="/perfil-metabolico" />

      <FAQBlock
        faqs={perfilMetabolicoFaqs}
        title="Preguntas frecuentes sobre el Perfil Metabólico Integral"
        subtitle="Respuestas breves para usar esta herramienta como conversación inicial, no como diagnóstico."
        variant="cream"
      />

      <CTABanner
        title="Convierte tus números en una conversación clínica"
        subtitle="Completa el quiz metabólico para añadir contexto que una calculadora no puede medir."
        ctaText="Hacer quiz metabólico"
        ctaHref="/quiz-metabolico"
        ctaMessage={QUIZ_MESSAGE}
        variant="dark"
        secondaryHref="/agendar-evaluacion"
        secondaryText="Agendar evaluación"
        trackingSource="perfil_metabolico_cta"
      />
    </>
  );
}
