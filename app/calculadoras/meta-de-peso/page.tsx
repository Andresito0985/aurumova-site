import type { Metadata } from "next";
import { JsonLdScript } from "@/components/JsonLd";
import CalculatorShell from "@/components/calculators/CalculatorShell";
import WeightGoalCalculator from "@/components/calculators/WeightGoalCalculator";
import { buildFaqPageSchema, weightGoalFaqs } from "@/content/calculator-faqs";

export const metadata: Metadata = {
  title: {
    absolute: "Calculadora de Meta de Peso | Aurum Nova Wellness Clinic",
  },
  description:
    "Evalúa tu meta de peso y estima el ritmo semanal necesario para alcanzarla de forma educativa.",
  alternates: { canonical: "/calculadoras/meta-de-peso" },
  openGraph: {
    title: "Calculadora de Meta de Peso | Aurum Nova Wellness Clinic",
    description:
      "Evalúa tu meta de peso y estima el ritmo semanal necesario para alcanzarla de forma educativa.",
    url: "/calculadoras/meta-de-peso",
    siteName: "Aurum Nova Wellness Clinic",
    locale: "es_PR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de Meta de Peso | Aurum Nova Wellness Clinic",
    description:
      "Evalúa tu meta de peso y estima el ritmo semanal necesario para alcanzarla de forma educativa.",
  },
};

export default function CalculadoraMetaDePesoPage() {
  return (
    <>
      <JsonLdScript
        id="meta-de-peso-faq-json-ld"
        data={buildFaqPageSchema("/calculadoras/meta-de-peso", weightGoalFaqs)}
      />
      <CalculatorShell
        badge="Meta de peso"
        title="Evalúa tu meta"
        highlight="con más contexto"
        subtitle="Calcula cuántas libras deseas perder y qué ritmo semanal implicaría tu plazo, sin convertir el número en una promesa."
        currentPath="/calculadoras/meta-de-peso"
        educationTitle="Cómo interpretar una meta"
        educationCopy="Una meta de peso no se evalúa solo por libras. También importan salud metabólica, energía, composición corporal, historial y sostenibilidad."
        educationItems={[
          "Un ritmo conservador o moderado puede seguir requiriendo ajustes clínicos.",
          "Un ritmo agresivo necesita evaluación individual antes de intentar alcanzarlo.",
          "La meta adecuada puede cambiar según medicamentos, condiciones médicas y adherencia.",
        ]}
        disclaimer="Esta calculadora no determina si tu meta es adecuada para tu salud. La evaluación clínica es necesaria para interpretar tu caso. No diagnostica, no prescribe y no determina candidatura."
        faqs={weightGoalFaqs}
        faqTitle="Preguntas frecuentes sobre meta de peso"
        faqSubtitle="La meta de peso debe interpretarse con seguridad, contexto clínico y expectativas realistas."
      >
        <WeightGoalCalculator />
      </CalculatorShell>
    </>
  );
}
