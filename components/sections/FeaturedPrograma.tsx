"use client";

// FeaturedPrograma
// ---------------------------------------------------------------------------
// Refactored to the Apple-inspired visual system. The Home page's main
// product moment for the Programa Metabólico Integral.
//
// Composition:
//   <VisualFeatureSection variant="dark">
//     visual = <DeviceDashboardMockup ... />
//
// Programa Metabólico is positioned as a service-as-product on Home. The
// 3-package pricing grid that used to live here remains the source of truth
// on /programa-metabolico — this Home surface educates and routes traffic
// to that page, where pricing is presented in full.
//
// Pricing and WhatsApp logic are not changed by this refactor. The Home CTA
// continues to deep-link to /programa-metabolico (primary) and
// /quiz-metabolico (secondary).

import VisualFeatureSection from "@/components/visual/VisualFeatureSection";
import DeviceDashboardMockup from "@/components/visual/DeviceDashboardMockup";

// Program-level capabilities, framed as orientative pillars. No patient
// data, no medication doses, no outcome guarantees.
const programPillars = [
  "Consulta médica mensual incluida",
  "Plan nutricional personalizado",
  "Inyectables de apoyo si calificas",
  "Seguimiento de métricas y progreso",
];

// Metric placeholders for the dashboard. Every value is "—" so the surface
// reads as illustrative, not a personal record.
const dashboardMetrics = [
  { label: "Peso", value: "—", unit: "kg", sub: "Cada sesión" },
  { label: "IMC", value: "—", unit: "", sub: "Revisión clínica" },
  { label: "Cintura", value: "—", unit: "cm", sub: "Perímetro guía" },
  { label: "Adherencia", value: "—", unit: "%", sub: "Cumplimiento" },
];

// Process chips — phases of the program, not patient values.
const dashboardChips = [
  { name: "Evaluación clínica", caption: "Inicio" },
  { name: "Personalización", caption: "Plan médico" },
  { name: "Seguimiento", caption: "Semanal" },
  { name: "Revisión", caption: "Mensual" },
];

export default function FeaturedPrograma() {
  return (
    <VisualFeatureSection
      variant="dark"
      eyebrow="Programa principal"
      headline="Programa Metabólico"
      highlight="Integral"
      body="Un programa médico mensual completo: evaluación clínica, plan personalizado, terapias de apoyo si calificas y seguimiento con métricas reales."
      supportingText="No es una dieta — es medicina metabólica supervisada. La elegibilidad y los detalles de cualquier terapia se confirman durante la evaluación médica."
      bullets={programPillars}
      cta={{
        label: "Ver Programa Metabólico",
        href: "/programa-metabolico",
      }}
      footnote="Requiere evaluación médica. No todos los pacientes califican. Pricing y paquetes en la página del programa. Si prefieres orientación rápida, escríbenos por WhatsApp."
      visual={
        <DeviceDashboardMockup
          eyebrow="Panel de seguimiento"
          title="Programa Metabólico Integral"
          subtitle="Cada sesión actualiza tus métricas"
          chips={dashboardChips}
          metrics={dashboardMetrics}
          footerNote="Vista ilustrativa. Los datos reales se registran en cada sesión clínica."
        />
      }
    />
  );
}
