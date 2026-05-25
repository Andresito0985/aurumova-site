"use client";

// BasicVsAdvancedComparator
// ---------------------------------------------------------------------------
// Proof-of-concept migration to the Apple-inspired visual system.
// This component is now a thin composition over <PremiumComparisonTable>.
//
// The clinical row labels, the "general" column values, and the disclaimer
// are preserved verbatim from the previous version. No copy meaning has
// changed.

import PremiumComparisonTable, {
  type ComparisonRow,
  type ComparisonCellValue,
} from "@/components/visual/PremiumComparisonTable";

// Clinical-safe comparison rows.
//   yes      → check icon (rendered by the table primitive)
//   no       → neutral dash icon
//   limited  → small neutral pill labeled "Limitada"
type GeneralValue = "yes" | "no" | "limited";

const sourceRows: { label: string; general: GeneralValue }[] = [
  { label: "Selección personalizada según historial y objetivos", general: "no" },
  { label: "Glucosa y HbA1c", general: "yes" },
  { label: "Insulina en ayunas / HOMA-IR cuando aplica", general: "no" },
  { label: "Lípidos avanzados como ApoB y Lp(a) cuando aplica", general: "no" },
  { label: "Inflamación cardiometabólica como hsCRP cuando aplica", general: "no" },
  { label: "Riesgo renal temprano con UACR cuando aplica", general: "no" },
  { label: "Riesgo hepático metabólico con FIB-4 / GGT cuando aplica", general: "no" },
  { label: "Panel hormonal-metabólico femenino / SOP cuando aplica", general: "no" },
  { label: "Interpretación clínica orientada a próximos pasos", general: "limited" },
  {
    label: "Integración con control de peso, wellness o composición corporal",
    general: "no",
  },
];

const rows: ComparisonRow[] = sourceRows.map((r) => ({
  label: r.label,
  // Featured column (index 0) is always "yes" for Aurum Nova; second
  // column carries the row's clinical-safe value.
  values: ["yes" as ComparisonCellValue, r.general as ComparisonCellValue],
}));

export default function BasicVsAdvancedComparator() {
  return (
    <div id="comparativa">
      <PremiumComparisonTable
        eyebrow="Comparación clínica"
        title="Más precisión clínica que un"
        titleHighlight="panel general"
        subtitle="Un panel básico puede ser útil como punto de partida. La diferencia está en seleccionar marcadores según tu perfil, tus objetivos y tus factores de riesgo."
        columns={[
          {
            title: "Aurum Nova",
            subtitle: "Evaluación avanzada",
            kicker: "Aurum Nova",
          },
          { title: "Panel general" },
        ]}
        rows={rows}
        featuredColumnIndex={0}
        disclaimer="Esta comparación es educativa. La selección final de laboratorios depende del historial clínico, síntomas, medicamentos, factores de riesgo y criterio profesional. No todos los pacientes requieren todos los marcadores."
      />
    </div>
  );
}
