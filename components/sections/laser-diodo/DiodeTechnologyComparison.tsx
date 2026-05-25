"use client";

// DiodeTechnologyComparison (refactored)
// ---------------------------------------------------------------------------
// Refactored to use the canonical <PremiumComparisonTable> primitive.
//
// Compares IPL · Alexandrita · Diodo (featured) · Nd:YAG across 5 neutral
// trait rows. Every cell uses *text* values (no yes/no icons) so the
// comparison reads as informational, not as an attack on other
// technologies. Diodo is the featured column because it is Aurum Nova's
// choice, but no row implies that any technology is universally inferior.
//
// Compliance posture:
//   - No "best for everyone" claims.
//   - No attacks on other technologies.
//   - Each cell is a short neutral descriptor.
//   - Final paragraph clarifies that the choice depends on individual
//     evaluation, never on a marketing preference.

import { Info } from "lucide-react";
import PremiumComparisonTable, {
  type ComparisonRow,
} from "@/components/visual/PremiumComparisonTable";

// Neutral text helper for cells.
function txt(text: string) {
  return { kind: "text" as const, text };
}

const rows: ComparisonRow[] = [
  {
    label: "Tipo de tecnología",
    values: [
      txt("Luz pulsada"),
      txt("Láser 755 nm"),
      txt("Láser 808–810 nm"),
      txt("Láser 1064 nm"),
    ],
  },
  {
    label: "Versatilidad por zona",
    values: [
      txt("Variable"),
      txt("Buena en perfiles específicos"),
      txt("Amplia"),
      txt("Selecta"),
    ],
  },
  {
    label: "Profundidad de trabajo",
    values: [
      txt("Superficial"),
      txt("Media"),
      txt("Media"),
      txt("Mayor"),
    ],
  },
  {
    label: "Apoyo de enfriamiento",
    values: [
      txt("Según equipo"),
      txt("Según equipo"),
      txt("Avanzado por contacto"),
      txt("Según equipo"),
    ],
  },
  {
    label: "Personalización clínica",
    values: [
      txt("Caso por caso"),
      txt("Caso por caso"),
      txt("Caso por caso"),
      txt("Caso por caso"),
    ],
  },
];

export default function DiodeTechnologyComparison() {
  return (
    <>
      <PremiumComparisonTable
        eyebrow="Comparativa educativa"
        title="¿Por qué trabajamos con"
        titleHighlight="láser diodo?"
        subtitle="Existen distintas tecnologías para reducción de vello. Cada una tiene su perfil, sus contextos y sus consideraciones clínicas."
        leftHeaderLabel="Trait"
        columns={[
          { title: "IPL" },
          { title: "Alexandrita" },
          {
            title: "Diodo",
            subtitle: "Aurum Nova",
            kicker: "Aurum Nova",
          },
          { title: "Nd:YAG" },
        ]}
        rows={rows}
        featuredColumnIndex={2}
        disclaimer="Esta comparación es educativa. La elegibilidad y el plan dependen de tu evaluación clínica individual — historial, fototipo, densidad del vello, zona y tolerancia. Ninguna tecnología es universalmente mejor para todos los pacientes."
      />

      {/* Closing rationale — why Aurum Nova selected diode */}
      <section className="bg-[#FAF8F4] px-4 pb-16 sm:px-6 lg:px-8">
        <div className="container-max">
          <div className="mx-auto flex max-w-3xl items-start gap-3 rounded-2xl border border-[#E8E4DA] bg-white p-5 sm:p-6">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#C9A84C]/10 ring-1 ring-[#C9A84C]/20">
              <Info className="h-4 w-4 text-[#C9A84C]" />
            </span>
            <p className="text-sm leading-relaxed text-[#3D3D3D]">
              <span className="font-semibold text-[#1A1A1A]">
                En Aurum Nova seleccionamos el diodo
              </span>{" "}
              porque su balance — versatilidad por zona, apoyo de enfriamiento
              avanzado y personalización clínica de parámetros — se alinea con
              nuestra forma de trabajar. La elegibilidad final depende de la
              evaluación clínica individual.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
