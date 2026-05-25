"use client";

// HomeAdvancedEvaluation
// ---------------------------------------------------------------------------
// New Home surface that previews the Evaluación Metabólica Avanzada
// product page. Composes <VisualFeatureSection> (dark) with a
// <DeviceDashboardMockup> styled as a biomarker map — visually consistent
// with the hero of /evaluacion-metabolica-avanzada (also migrated to the
// same primitives).
//
// Compliance posture:
//   - "Educativo · orientativo"
//   - "La selección de marcadores se individualiza durante la evaluación"
//   - "No todos los pacientes requieren todos los marcadores"
//   - No diagnosis claims

import VisualFeatureSection from "@/components/visual/VisualFeatureSection";
import DeviceDashboardMockup from "@/components/visual/DeviceDashboardMockup";
import { heroBiomarkerChips } from "@/content/metabolic-advanced";

const evaluationPillars = [
  "Selección personalizada de paneles según perfil clínico",
  "Glucosa, insulina, ApoB, Lp(a), hsCRP, FIB-4, UACR y más",
  "Interpretación orientada a próximos pasos clínicos",
  "Educativa, orientativa y supeditada a evaluación profesional",
];

export default function HomeAdvancedEvaluation() {
  return (
    <VisualFeatureSection
      variant="dark"
      eyebrow="Health-tech clínico"
      headline="Evaluación Metabólica"
      highlight="Avanzada"
      body="Más allá de un panel general: una forma más precisa de entender el metabolismo, el riesgo cardiometabólico y los laboratorios que realmente pueden aportar valor según tu perfil."
      supportingText="No todos los pacientes requieren todos los marcadores. La selección es individualizada durante la evaluación clínica."
      bullets={evaluationPillars}
      cta={{
        label: "Conocer la evaluación",
        href: "/evaluacion-metabolica-avanzada",
      }}
      footnote="Esta página es educativa y orientativa. La interpretación clínica corresponde al equipo profesional durante la evaluación."
      visual={
        <DeviceDashboardMockup
          eyebrow="Mapa de biomarcadores"
          title="Selección clínica personalizada"
          chips={heroBiomarkerChips.map((chip) => ({
            name: chip.name,
            fill: chip.fill,
          }))}
          footerNote="Visualización abstracta. La selección final depende de evaluación."
        />
      }
    />
  );
}
