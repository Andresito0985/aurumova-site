import type { Metadata } from "next";
// Refactored /programa-metabolico flow — Apple-inspired visual system.
//
// Page narrative: "No es solo bajar peso. Es medir, interpretar, ajustar
// y acompañar." Nine sections, each carrying one main idea.
//
// Sections removed from this page (files retained in repo for future use):
//   - MetabolicWhatIs           → folded into MetabolicHowWeWork
//   - MetabolicWho              → folded into MetabolicSafetyEligibility
//   - MetabolicIncludes         → folded into MetabolicHowWeWork
//   - MetabolicDashboard        → replaced by MetabolicDashboardSection
//   - MetabolicSafety           → folded into MetabolicSafetyEligibility
//   - MetabolicCompounding      → folded into MetabolicSafetyEligibility
//   - MetabolicCalculatorLinks  → demoted; calculators have their own routes
//   - MetabolicProgressCalculator → demoted; available on its own surface
//   - Related-resource card to /evaluacion-metabolica-avanzada → demoted

import MetabolicHero from "@/components/sections/programa-metabolico/MetabolicHero";
import MetabolicHowWeWork from "@/components/sections/programa-metabolico/MetabolicHowWeWork";
import MetabolicDashboardSection from "@/components/sections/programa-metabolico/MetabolicDashboardSection";
import MetabolicGlucoseMonitoring from "@/components/sections/programa-metabolico/MetabolicGlucoseMonitoring";
import MetabolicPricing from "@/components/sections/programa-metabolico/MetabolicPricing";
import MetabolicProfileQuiz from "@/components/quiz/MetabolicProfileQuiz";
import MetabolicSafetyEligibility from "@/components/sections/programa-metabolico/MetabolicSafetyEligibility";
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

/**
 * Programa Metabólico — Apple-inspired visual system.
 *
 *   1. MetabolicHero               — dark hero + DeviceDashboardMockup
 *   2. MetabolicHowWeWork          — Evaluamos / Personalizamos / Medimos / Ajustamos
 *   3. MetabolicDashboardSection   — official dashboard mockup
 *   4. MetabolicGlucoseMonitoring  — patrones de glucosa + ClinicalMetricGraph
 *   5. MetabolicPricing            — protocols (unchanged)
 *   6. MetabolicProfileQuiz        — quiz (unchanged)
 *   7. MetabolicSafetyEligibility  — Safety + Eligibility + Compounding
 *   8. FAQSection                  — unchanged FAQ list
 *   9. MetabolicLeadForm + CTABanner — final conversion surface
 */
export default function ProgramaMetabolicoPage() {
  return (
    <>
      <MetabolicHero />
      <MetabolicHowWeWork />
      <MetabolicDashboardSection />
      <MetabolicGlucoseMonitoring />
      <MetabolicPricing />
      <MetabolicProfileQuiz />
      <MetabolicSafetyEligibility />
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
