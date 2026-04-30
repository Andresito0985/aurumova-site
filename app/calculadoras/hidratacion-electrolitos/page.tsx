import type { Metadata } from "next";
import { JsonLdScript } from "@/components/JsonLd";
import CalculatorShell from "@/components/calculators/CalculatorShell";
import HydrationElectrolytesCalculator from "@/components/calculators/HydrationElectrolytesCalculator";
import {
  buildBreadcrumbSchema,
  buildFaqPageSchema,
  hydrationFaqs,
} from "@/content/calculator-faqs";

export const metadata: Metadata = {
  title: {
    absolute: "Calculadora de Hidratación y Electrolitos | Aurum Nova Wellness Clinic",
  },
  description:
    "Estima un rango educativo de hidratación diaria según peso, actividad y sudoración. No sustituye evaluación clínica.",
  alternates: { canonical: "/calculadoras/hidratacion-electrolitos" },
  openGraph: {
    title: "Calculadora de Hidratación y Electrolitos | Aurum Nova Wellness Clinic",
    description:
      "Estima un rango educativo de hidratación diaria según peso, actividad y sudoración. No sustituye evaluación clínica.",
    url: "/calculadoras/hidratacion-electrolitos",
    siteName: "Aurum Nova Wellness Clinic",
    locale: "es_PR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de Hidratación y Electrolitos | Aurum Nova Wellness Clinic",
    description:
      "Estima un rango educativo de hidratación diaria según peso, actividad y sudoración. No sustituye evaluación clínica.",
  },
};

export default function CalculadoraHidratacionPage() {
  return (
    <>
      <JsonLdScript
        id="hidratacion-faq-json-ld"
        data={buildFaqPageSchema("/calculadoras/hidratacion-electrolitos", hydrationFaqs)}
      />
      <JsonLdScript
        id="hidratacion-breadcrumb-json-ld"
        data={buildBreadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Calculadoras", path: "/calculadoras" },
          {
            name: "Hidratación y Electrolitos",
            path: "/calculadoras/hidratacion-electrolitos",
          },
        ])}
      />
      <CalculatorShell
        badge="Hidratación y electrolitos"
        title="Estima tu hidratación"
        highlight="con cautela clínica"
        subtitle="Calcula un rango educativo de líquidos diarios según peso, actividad y sudoración, sin indicar dosis de electrolitos."
        currentPath="/calculadoras/hidratacion-electrolitos"
        educationTitle="Electrolitos no son una receta"
        educationCopy="La hidratación diaria depende de peso, clima, actividad, alimentación, sudoración, medicamentos y condiciones médicas."
        educationItems={[
          "La actividad y sudoración pueden aumentar necesidades de líquido.",
          "Los electrolitos requieren cautela si hay presión alta, enfermedad renal, enfermedad cardíaca o diuréticos.",
          "Esta herramienta no indica dosis de sodio, potasio, magnesio ni productos específicos.",
        ]}
        disclaimer="Esta herramienta no sustituye evaluación médica, especialmente si tienes enfermedad renal, cardíaca, presión alta o usas diuréticos. No diagnostica, no prescribe y no determina candidatura."
        methodology={{
          formula: "30–35 mL/kg/día + ajustes por actividad y sudoración",
          points: [
            "Usa un rango general de 30 a 35 mL por kilogramo de peso al día.",
            "Añade ajustes simples por nivel de actividad y sudoración reportada.",
            "Convierte el resultado a litros y botellas aproximadas de 16.9 oz.",
            "No prescribe dosis de electrolitos ni productos específicos.",
            "Historial renal, cardíaco, presión arterial o uso de diuréticos requiere guía clínica.",
          ],
          note: "Este cálculo es educativo y orientativo. No diagnostica, no prescribe líquidos o electrolitos y no sustituye evaluación clínica.",
        }}
        faqs={hydrationFaqs}
        faqTitle="Preguntas frecuentes sobre hidratación y electrolitos"
        faqSubtitle="Los líquidos y electrolitos pueden requerir cautela clínica, especialmente con condiciones médicas o medicamentos."
      >
        <HydrationElectrolytesCalculator />
      </CalculatorShell>
    </>
  );
}
