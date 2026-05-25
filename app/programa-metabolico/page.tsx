import type { Metadata } from "next";
// Section imports — order below the metadata reflects new educate-before-price flow
import Link from "next/link";
import { ArrowRight, FlaskConical } from "lucide-react";
import MetabolicHero from "@/components/sections/programa-metabolico/MetabolicHero";
import MetabolicWhatIs from "@/components/sections/programa-metabolico/MetabolicWhatIs";
import MetabolicWho from "@/components/sections/programa-metabolico/MetabolicWho";
import MetabolicIncludes from "@/components/sections/programa-metabolico/MetabolicIncludes";
import MetabolicPricing from "@/components/sections/programa-metabolico/MetabolicPricing";
import MetabolicProfileQuiz from "@/components/quiz/MetabolicProfileQuiz";
import MetabolicCalculatorLinks from "@/components/sections/programa-metabolico/MetabolicCalculatorLinks";
import MetabolicProgressCalculator from "@/components/calculators/metabolic-progress-calculator";
import MetabolicDashboard from "@/components/sections/programa-metabolico/MetabolicDashboard";
import MetabolicGlucoseMonitoring from "@/components/sections/programa-metabolico/MetabolicGlucoseMonitoring";
import MetabolicSafety from "@/components/sections/programa-metabolico/MetabolicSafety";
import MetabolicCompounding from "@/components/sections/programa-metabolico/MetabolicCompounding";
import FAQSection from "@/components/sections/FAQSection";
import MetabolicLeadForm from "@/components/forms/MetabolicLeadForm";
import CTABanner from "@/components/ui/CTABanner";

export const metadata: Metadata = {
  title: "Programa Metabólico Integral | Aurum Nova Wellness Clinic",
  description:
    "Programa clínico supervisado de manejo del peso con evaluación médica, plan personalizado, terapia semanal si cualificas, apoyo lipotrópico y seguimiento continuo. Arecibo, Puerto Rico.",
  keywords: [
    "programa metabólico", "manejo de peso", "obesidad", "sobrepeso",
    "resistencia a la insulina", "síndrome metabólico", "médico Arecibo",
    "clínica wellness Puerto Rico", "terapia metabólica semanal", "seguimiento metabólico",
  ],

  alternates: { canonical: "https://aurumnovawellnessclinic.com/programa-metabolico" },
  openGraph: {
    title: "Programa Metabólico Integral | Aurum Nova Wellness Clinic",
    description: "Programa clínico supervisado de manejo del peso con evaluación médica, plan personalizado, terapia semanal si cualificas, apoyo lipotrópico y seguimiento continuo. Arecibo, Puerto Rico.",
    url: "https://aurumnovawellnessclinic.com/programa-metabolico",
    siteName: "Aurum Nova Wellness Clinic",
    locale: "es_PR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Programa Metabólico Integral | Aurum Nova Wellness Clinic",
    description: "Programa clínico supervisado de manejo del peso con evaluación médica, plan personalizado, terapia semanal si cualificas, apoyo lipotrópico y seguimiento continuo. Arecibo, Puerto Rico.",
  },
};

const faqs = [
  {
    question: "¿Quién determina si soy candidato para el programa?",
    answer:
      "El médico tratante, exclusivamente, durante la evaluación médica inicial. La elegibilidad depende de tu historial clínico, laboratorios, medicamentos actuales y condiciones preexistentes. No existe forma de determinar candidatura sin evaluación presencial.",
  },
  {
    question: "¿El programa incluye algún inyectable de forma automática?",
    answer:
      "No. Los inyectables, incluidos los medicamentos de apoyo metabólico, son prescritos únicamente cuando el médico determina que están indicados clínicamente para tu caso. No todos los pacientes del programa reciben inyectables.",
  },
  {
    question: "¿Qué tan rápido voy a perder peso?",
    answer:
      "Aurum Nova no garantiza resultados específicos de pérdida de peso ni velocidad de progreso. Los resultados dependen de tu perfil metabólico, adherencia al protocolo, condiciones subyacentes y respuesta individual a las terapias. El médico puede establecer metas clínicas realistas después de tu evaluación.",
  },
  {
    question: "¿Los medicamentos formulados son seguros?",
    answer:
      "Los medicamentos formulados no son aprobados por FDA y no han sido evaluados por FDA en cuanto a seguridad, efectividad ni calidad. Su uso implica riesgos que se discuten individualmente con el médico durante la evaluación. Son preparados por farmacias de formulación acreditadas bajo prescripción médica individual.",
  },
  {
    question: "¿Cuánto tiempo dura el programa?",
    answer:
      "La duración es individualizada y la determina el médico según tu respuesta al protocolo y tus objetivos clínicos. No hay un plazo fijo estándar — algunos pacientes requieren menos tiempo y otros un acompañamiento más prolongado.",
  },
  {
    question: "¿Tengo que hacer dieta o ejercicio para que funcione?",
    answer:
      "El programa incluye guía nutricional médica. El médico puede indicar cambios de hábitos como parte del protocolo. El nivel de actividad física recomendado se individualiza según tu condición. El programa no reemplaza el valor de hábitos saludables — los complementa clínicamente.",
  },
  {
    question: "¿Puedo estar en el programa si tengo diabetes o hipertensión?",
    answer:
      "Algunas condiciones como diabetes o hipertensión pueden ser compatibles con el programa si están bajo control médico. Otras pueden ser contraindicaciones dependiendo del estado actual. El médico evaluará tu caso específico durante la consulta inicial.",
  },
  {
    question: "¿Qué pasa si no tolero algún elemento del protocolo?",
    answer:
      "El seguimiento semanal existe precisamente para detectar esto. Si hay intolerancia a algún elemento — inyectable, suplemento o cualquier otra intervención — el médico ajusta o suspende ese componente. Tu seguridad y tolerancia tienen prioridad sobre el ritmo del programa.",
  },
  {
    question: "¿Cómo empiezo? ¿Hay que pagar la evaluación?",
    answer:
      "El primer paso es contactarnos por WhatsApp o el formulario de esta página. Te informamos sobre la disponibilidad y los detalles de la evaluación médica inicial. El equipo te explica el proceso completo antes de coordinar la cita.",
  },
];

const CTA_MESSAGE =
  "Hola, me interesa comenzar una evaluación para discutir el Programa Metabólico de Aurum Nova. ¿Cuáles son los próximos pasos?";

export default function ProgramaMetabolicoPage() {
  return (
    <>
      {/* Educate-before-price flow — reordered per launch audit */}
      <MetabolicHero />
      <MetabolicWhatIs />
      <MetabolicWho />
      <MetabolicIncludes />
      <MetabolicPricing />
      <MetabolicProfileQuiz />
      <MetabolicCalculatorLinks />
      {/* Subtle related-resource card pointing to the advanced evaluation page */}
      <section className="bg-[#FAF8F4] px-4 pb-12 sm:px-6 lg:px-8">
        <div className="container-max">
          <Link
            href="/evaluacion-metabolica-avanzada"
            className="group relative flex flex-col gap-4 overflow-hidden rounded-3xl border border-[#1A1A1A] bg-[#1A1A1A] p-5 sm:p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.6)] lg:flex-row lg:items-center lg:gap-6"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-25"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse at 88% 18%, rgba(201,168,76,0.35) 0%, transparent 55%)",
              }}
            />
            <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#C9A84C]/12 ring-1 ring-[#C9A84C]/30">
              <FlaskConical className="h-5 w-5 text-[#C9A84C]" />
            </div>
            <div className="relative z-10 flex-1">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#E2C97E]">
                Recurso relacionado
              </p>
              <h3 className="mt-1.5 text-lg sm:text-xl font-semibold leading-tight text-white">
                Evaluación Metabólica Avanzada
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#BDB7AA] max-w-2xl">
                Más allá de un panel general: cómo seleccionamos paneles
                clínicos según perfil, historial, síntomas y factores de riesgo
                — educativo, orientativo y supeditado a evaluación clínica.
              </p>
            </div>
            <span className="relative z-10 inline-flex shrink-0 items-center gap-2 self-start lg:self-center rounded-full border border-[#C9A84C]/35 bg-[#C9A84C]/10 px-4 py-2 text-xs font-semibold text-[#E2C97E] transition-colors group-hover:border-[#C9A84C] group-hover:text-white">
              Conocer la evaluación
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </section>
      <MetabolicProgressCalculator />
      <MetabolicDashboard />
      <MetabolicGlucoseMonitoring />
      <MetabolicSafety />
      <MetabolicCompounding />
      <FAQSection
        faqs={faqs}
        title="Preguntas frecuentes sobre el programa"
        subtitle="Respuestas claras sobre elegibilidad, terapias, seguridad y qué esperar del proceso."
        variant="dark"
      />
      <MetabolicLeadForm />
      <CTABanner
        title="El primer paso es la evaluación médica"
        subtitle="Sin evaluación no hay protocolo. Así confirmamos que lo que se discute sea apropiado para tu caso."
        ctaText="Agendar evaluación por WhatsApp"
        ctaMessage={CTA_MESSAGE}
        variant="dark"
      />
    </>
  );
}
