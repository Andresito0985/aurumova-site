import type { Metadata } from "next";
import { JsonLdScript } from "@/components/JsonLd";
import CalculatorShell from "@/components/calculators/CalculatorShell";
import BMICalculatorTool from "@/components/calculators/BMICalculatorTool";
import { bmiFaqs, buildFaqPageSchema } from "@/content/calculator-faqs";

export const metadata: Metadata = {
  title: {
    absolute: "Calculadora de IMC | Aurum Nova Wellness Clinic",
  },
  description:
    "Calcula tu índice de masa corporal de forma orientativa y conoce qué puede significar para tu punto de partida metabólico.",
  alternates: { canonical: "/calculadoras/imc" },
  openGraph: {
    title: "Calculadora de IMC | Aurum Nova Wellness Clinic",
    description:
      "Calcula tu índice de masa corporal de forma orientativa y conoce qué puede significar para tu punto de partida metabólico.",
    url: "/calculadoras/imc",
    siteName: "Aurum Nova Wellness Clinic",
    locale: "es_PR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de IMC | Aurum Nova Wellness Clinic",
    description:
      "Calcula tu índice de masa corporal de forma orientativa y conoce qué puede significar para tu punto de partida metabólico.",
  },
};

export default function CalculadoraIMCPage() {
  return (
    <>
      <JsonLdScript
        id="imc-faq-json-ld"
        data={buildFaqPageSchema("/calculadoras/imc", bmiFaqs)}
      />
      <CalculatorShell
        badge="Calculadora de IMC"
        title="Calcula tu IMC"
        highlight="de forma orientativa"
        subtitle="Conoce tu índice de masa corporal como punto de partida educativo antes de interpretar tu salud metabólica con un equipo clínico."
        currentPath="/calculadoras/imc"
        educationTitle="Qué significa el IMC"
        educationCopy="El IMC es una herramienta inicial. No mide composición corporal, distribución de grasa, masa muscular ni historial clínico."
        educationItems={[
          "Puede servir para ordenar una conversación sobre peso y salud metabólica.",
          "No determina diagnóstico, riesgo individual ni candidatura a tratamiento.",
          "Se interpreta mejor junto a cintura, laboratorios, medicamentos, hábitos y síntomas.",
        ]}
        disclaimer="El IMC es orientativo y no sustituye evaluación clínica. Esta herramienta no diagnostica, no prescribe y no determina candidatura a ningún tratamiento."
        faqs={bmiFaqs}
        faqTitle="Preguntas frecuentes sobre el IMC"
        faqSubtitle="El IMC puede ser útil como referencia inicial, pero no reemplaza una interpretación clínica completa."
      >
        <BMICalculatorTool />
      </CalculatorShell>
    </>
  );
}
