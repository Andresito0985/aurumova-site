"use client";

import { CheckCircle2, Minus } from "lucide-react";
import HeadlineReveal from "@/components/motion/HeadlineReveal";

// Comparison rows — clinical-safe language only.
//   yes      → check icon (gold for Aurum Nova column, neutral for Panel general)
//   no       → neutral dash icon
//   limited  → small neutral pill labeled "Limitada"
//
// Aurum Nova column always shows yes; the differentiation lives in the
// Panel general column. Each cell's icon has an sr-only label so screen
// readers receive an explicit value, not just an icon.
type GeneralValue = "yes" | "no" | "limited";

type ComparisonRow = {
  label: string;
  general: GeneralValue;
};

const rows: ComparisonRow[] = [
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

function AurumCell() {
  return (
    <span className="inline-flex items-center justify-center">
      <CheckCircle2
        className="h-5 w-5 text-[#C9A84C]"
        aria-hidden="true"
        strokeWidth={2.25}
      />
      <span className="sr-only">Incluido en Evaluación Avanzada Aurum Nova</span>
    </span>
  );
}

function GeneralCell({ value }: { value: GeneralValue }) {
  if (value === "yes") {
    return (
      <span className="inline-flex items-center justify-center">
        <CheckCircle2
          className="h-5 w-5 text-[#9A9A9A]"
          aria-hidden="true"
          strokeWidth={2}
        />
        <span className="sr-only">También incluido en panel general</span>
      </span>
    );
  }
  if (value === "limited") {
    return (
      <span className="inline-flex items-center rounded-full bg-[#F0EDE6] px-3 py-1 text-[11px] font-medium text-[#6B6B6B]">
        Limitada
      </span>
    );
  }
  return (
    <span className="inline-flex items-center justify-center">
      <Minus
        className="h-5 w-5 text-[#C9C5BD]"
        aria-hidden="true"
        strokeWidth={2.5}
      />
      <span className="sr-only">No incluido en panel general</span>
    </span>
  );
}

export default function BasicVsAdvancedComparator() {
  return (
    <section className="section-padding bg-[#FAF8F4]" id="comparativa">
      <div className="container-max">
        {/* Centered editorial header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
            Comparación clínica
          </span>
          <HeadlineReveal
            as="h2"
            onMount={false}
            delay={0.05}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-[#1A1A1A] leading-[1.05] mb-4"
          >
            Más precisión clínica que un{" "}
            <span className="text-[#A8872E]">panel general</span>
          </HeadlineReveal>
          <p className="text-base text-[#6B6B6B] leading-relaxed">
            Un panel básico puede ser útil como punto de partida. La diferencia
            está en seleccionar marcadores según tu perfil, tus objetivos y tus
            factores de riesgo.
          </p>
        </div>

        {/* Comparison card */}
        <div
          className="mx-auto max-w-[960px] overflow-hidden rounded-3xl border border-[#E8E4DA] bg-white shadow-[0_30px_70px_-40px_rgba(0,0,0,0.18)]"
          aria-label="Comparación entre Evaluación Avanzada Aurum Nova y un panel general"
        >
          {/* Desktop semantic table */}
          <table className="hidden w-full md:table">
            <caption className="sr-only">
              Qué puede evaluar la Evaluación Avanzada Aurum Nova frente a un
              panel general
            </caption>
            <thead>
              <tr>
                <th
                  scope="col"
                  className="border-b border-[#E8E4DA] px-6 py-5 text-left align-bottom"
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#9A9A9A]">
                    Qué puede evaluar
                  </span>
                </th>
                <th
                  scope="col"
                  className="relative border-b border-l border-r border-[#E8E4DA] bg-[#FAF8F4] px-6 py-5 align-bottom text-center"
                >
                  {/* Gold accent line at the top of the highlighted column */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#E2C97E] via-[#C9A84C] to-[#E2C97E]"
                  />
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-[#A8872E]">
                    Evaluación Avanzada
                  </span>
                  <span className="mt-0.5 block text-base font-semibold text-[#1A1A1A]">
                    Aurum Nova
                  </span>
                </th>
                <th
                  scope="col"
                  className="border-b border-[#E8E4DA] px-6 py-5 align-bottom text-center"
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#9A9A9A]">
                    Panel general
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr
                  key={row.label}
                  className={`group transition-colors hover:bg-[#FAF8F4]/45 ${
                    idx !== rows.length - 1 ? "border-b border-[#F0EDE6]" : ""
                  }`}
                >
                  <th
                    scope="row"
                    className="max-w-[420px] px-6 py-4 text-left text-sm font-medium leading-snug text-[#1A1A1A]"
                  >
                    {row.label}
                  </th>
                  <td className="border-l border-r border-[#E8E4DA] bg-[#FAF8F4]/55 px-6 py-4 text-center group-hover:bg-[#FAF8F4]/80">
                    <AurumCell />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <GeneralCell value={row.general} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile stacked card list */}
          <ul
            className="divide-y divide-[#F0EDE6] md:hidden"
            aria-label="Comparación por fila"
          >
            {rows.map((row) => (
              <li key={row.label} className="px-5 py-5">
                <p className="mb-3 text-sm font-medium leading-snug text-[#1A1A1A]">
                  {row.label}
                </p>
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="rounded-xl border border-[#C9A84C]/25 bg-[#FAF8F4] px-3 py-2.5 shadow-[0_4px_12px_-8px_rgba(201,168,76,0.35)]">
                    <p className="mb-1 text-[9px] font-bold uppercase tracking-widest text-[#A8872E]">
                      Aurum Nova
                    </p>
                    <div className="flex items-center">
                      <AurumCell />
                    </div>
                  </div>
                  <div className="rounded-xl border border-[#E8E4DA] bg-white px-3 py-2.5">
                    <p className="mb-1 text-[9px] font-bold uppercase tracking-widest text-[#9A9A9A]">
                      Panel general
                    </p>
                    <div className="flex items-center">
                      <GeneralCell value={row.general} />
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Educational disclaimer */}
        <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-[#6B6B6B]">
          Esta comparación es educativa. La selección final de laboratorios
          depende del historial clínico, síntomas, medicamentos, factores de
          riesgo y criterio profesional. No todos los pacientes requieren todos
          los marcadores.
        </p>
      </div>
    </section>
  );
}
