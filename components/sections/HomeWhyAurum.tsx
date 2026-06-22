// HomeWhyAurum
// ---------------------------------------------------------------------------
// "Why choose Aurum Nova" comparison. Thin wrapper around the design-system
// <PremiumComparisonTable> with curated, compliance-safe rows that contrast a
// clinical, structured experience against a generic approach.
//
// Compliance: rows describe the *service experience*, not clinical outcomes.
// No guarantees, no superlatives ("best in PR"), no risk-free claims.

import PremiumComparisonTable from "@/components/visual/PremiumComparisonTable";

export default function HomeWhyAurum() {
  return (
    <PremiumComparisonTable
      eyebrow="Por qué Aurum Nova"
      title="Una experiencia clínica, no un"
      titleHighlight="enfoque genérico"
      subtitle="Así se siente trabajar con un equipo que evalúa, personaliza y acompaña cada paso del proceso."
      leftHeaderLabel="Qué puedes esperar"
      columns={[
        { title: "Aurum Nova", subtitle: "Enfoque clínico", kicker: "Aurum Nova" },
        { title: "Enfoque genérico" },
      ]}
      rows={[
        { label: "Evaluación inicial personalizada", values: ["yes", "no"] },
        { label: "Plan diseñado por criterio clínico", values: ["yes", "limited"] },
        { label: "Seguimiento estructurado con métricas", values: ["yes", "no"] },
        {
          label: "Tecnología y servicios en un mismo lugar",
          values: ["yes", "limited"],
        },
        { label: "Orientación profesional continua", values: ["yes", "limited"] },
        {
          label: "Entorno clínico premium y privado",
          values: ["yes", { kind: "text", text: "Variable" }],
        },
      ]}
      featuredColumnIndex={0}
      disclaimer="Comparación general del enfoque de servicio. No representa resultados clínicos garantizados; cada caso se evalúa individualmente y los resultados pueden variar."
    />
  );
}
