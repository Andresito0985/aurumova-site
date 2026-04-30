import type { Metadata } from "next";
import { JsonLdScript } from "@/components/JsonLd";
import CalculatorShell from "@/components/calculators/CalculatorShell";
import CalorieDeficitCalculator from "@/components/calculators/CalorieDeficitCalculator";
import { buildFaqPageSchema, calorieDeficitFaqs } from "@/content/calculator-faqs";

export const metadata: Metadata = {
  title: {
    absolute: "Calculadora de Déficit Calórico | Aurum Nova Wellness Clinic",
  },
  description:
    "Estima calorías de mantenimiento y un déficit moderado de forma educativa usando peso, estatura, edad, sexo y actividad.",
  alternates: { canonical: "/calculadoras/deficit-calorico" },
  openGraph: {
    title: "Calculadora de Déficit Calórico | Aurum Nova Wellness Clinic",
    description:
      "Estima calorías de mantenimiento y un déficit moderado de forma educativa usando peso, estatura, edad, sexo y actividad.",
    url: "/calculadoras/deficit-calorico",
    siteName: "Aurum Nova Wellness Clinic",
    locale: "es_PR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de Déficit Calórico | Aurum Nova Wellness Clinic",
    description:
      "Estima calorías de mantenimiento y un déficit moderado de forma educativa usando peso, estatura, edad, sexo y actividad.",
  },
};

export default function CalculadoraDeficitCaloricoPage() {
  return (
    <>
      <JsonLdScript
        id="deficit-calorico-faq-json-ld"
        data={buildFaqPageSchema("/calculadoras/deficit-calorico", calorieDeficitFaqs)}
      />
      <CalculatorShell
        badge="Déficit calórico"
        title="Estima tu mantenimiento"
        highlight="y un déficit moderado"
        subtitle="Usa datos básicos para obtener una referencia educativa de gasto diario, sin convertir la cifra en una dieta rígida."
        currentPath="/calculadoras/deficit-calorico"
        educationTitle="Por qué es una estimación"
        educationCopy="Las fórmulas calóricas ayudan a estimar, pero no capturan todo lo que determina tu necesidad real de energía."
        educationItems={[
          "Sueño, estrés, medicamentos, masa muscular y condiciones metabólicas pueden cambiar el cálculo.",
          "Un déficit demasiado bajo puede afectar energía, adherencia y seguridad.",
          "La planificación nutricional debe individualizarse, especialmente si hay condiciones médicas.",
        ]}
        disclaimer="No uses esta herramienta para dietas extremas. La planificación nutricional debe individualizarse. Esta calculadora es educativa, no diagnostica, no prescribe y no determina elegibilidad."
        faqs={calorieDeficitFaqs}
        faqTitle="Preguntas frecuentes sobre déficit calórico"
        faqSubtitle="Una estimación calórica puede orientar preguntas, pero no crea un plan nutricional por sí sola."
      >
        <CalorieDeficitCalculator />
      </CalculatorShell>
    </>
  );
}
