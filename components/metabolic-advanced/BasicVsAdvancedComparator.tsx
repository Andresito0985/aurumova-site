"use client";

import { Check, Minus, Sparkles } from "lucide-react";
import HeadlineReveal from "@/components/motion/HeadlineReveal";

// Clinical-safe comparison rows. Aurum Nova column is always "yes"; the
// differentiator lives in the Panel general column.
//   yes      → check icon
//   no       → neutral dash icon
//   limited  → small neutral pill labeled "Limitada"
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

/** Soft gold-tinted circle wrapping a check — used in the Aurum Nova column. */
function AurumMark() {
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#C9A84C]/12 ring-1 ring-[#C9A84C]/35 shadow-[0_4px_12px_-6px_rgba(201,168,76,0.45)]"
    >
      <Check className="h-4 w-4 text-[#A8872E]" strokeWidth={2.5} />
    </span>
  );
}

/** Neutral cell content for the Panel general column. */
function GeneralMark({ value }: { value: GeneralValue }) {
  if (value === "yes") {
    return (
      <span
        aria-hidden="true"
        className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#F0EDE6] ring-1 ring-[#E8E4DA]"
      >
        <Check className="h-4 w-4 text-[#9A9A9A]" strokeWidth={2.25} />
      </span>
    );
  }
  if (value === "limited") {
    return (
      <span className="inline-flex items-center rounded-full bg-[#F0EDE6] px-3 py-1.5 text-[11px] font-medium text-[#6B6B6B]">
        Limitada
      </span>
    );
  }
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-9 w-9 items-center justify-center"
    >
      <Minus className="h-4 w-4 text-[#C9C5BD]" strokeWidth={2.75} />
    </span>
  );
}

/** Screen reader equivalent of the visual cell — keeps the ARIA cell text
 *  honest without forcing the visible icon to carry a wordy aria-label. */
function srValueForGeneral(value: GeneralValue) {
  if (value === "yes") return "Incluido";
  if (value === "limited") return "Limitada";
  return "No incluido";
}

const grid3ColTemplate = "grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)_minmax(0,1fr)]";

export default function BasicVsAdvancedComparator() {
  // grid rows = 1 header row + N data rows
  const totalGridRows = rows.length + 1;

  return (
    <section
      className="relative bg-gradient-to-b from-[#FAF8F4] via-[#F4EBD0]/25 to-[#FAF8F4] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
      id="comparativa"
    >
      <div className="container-max">
        {/* Editorial header */}
        <div className="text-center max-w-[760px] mx-auto mb-12 sm:mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-4">
            Comparación clínica
          </span>
          <HeadlineReveal
            as="h2"
            onMount={false}
            delay={0.05}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.025em] text-[#1A1A1A] leading-[1.04] mb-5"
          >
            Más precisión clínica que un{" "}
            <span className="text-[#A8872E]">panel general</span>
          </HeadlineReveal>
          <p className="text-base sm:text-lg text-[#6B6B6B] leading-relaxed max-w-[640px] mx-auto">
            Un panel básico puede ser útil como punto de partida. La diferencia
            está en seleccionar marcadores según tu perfil, tus objetivos y tus
            factores de riesgo.
          </p>
        </div>

        {/* Comparison card shell */}
        <div className="mx-auto max-w-[1040px] rounded-[2rem] border border-[#E8E4DA] bg-white shadow-[0_40px_120px_-50px_rgba(0,0,0,0.25)] p-4 sm:p-6 lg:p-8">
          {/* Desktop: CSS Grid with an elevated AN column.
              Row wrappers use display:contents (Tailwind `contents`) so they
              provide ARIA `role="row"` while their children become direct grid
              children, allowing the decorative AN column to span all rows.
              Modern browsers preserve the row role in the a11y tree. */}
          <div
            role="table"
            aria-label="Comparación entre Evaluación Avanzada Aurum Nova y un panel general"
            className={`relative hidden md:grid ${grid3ColTemplate}`}
          >
            {/* Decorative elevated card behind the Aurum Nova column.
                Placed in grid col 2, spans every row → continuous floating
                card effect. Cells in col 2 sit on top via DOM order. */}
            <div
              aria-hidden="true"
              className="rounded-3xl bg-gradient-to-b from-[#FAF8F4] via-[#FAF8F4] to-white ring-1 ring-[#C9A84C]/25 shadow-[0_30px_70px_-30px_rgba(201,168,76,0.40)] pointer-events-none"
              style={{ gridColumn: 2, gridRow: `1 / span ${totalGridRows}` }}
            />

            {/* Header row */}
            <div role="row" className="contents">
              <div
                role="columnheader"
                className="px-6 lg:px-8 pt-7 pb-6 self-end"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9A9A9A]">
                  Qué puede evaluar
                </span>
              </div>
              <div
                role="columnheader"
                className="relative px-6 lg:px-8 pt-8 pb-7 text-center"
              >
                <div className="inline-flex items-center gap-1.5 rounded-full border border-[#C9A84C]/35 bg-white px-3 py-1 shadow-sm mb-3">
                  <Sparkles
                    className="h-3 w-3 text-[#C9A84C]"
                    aria-hidden="true"
                  />
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#A8872E]">
                    Aurum Nova
                  </span>
                </div>
                <p className="text-base font-semibold text-[#1A1A1A] leading-tight">
                  Evaluación avanzada
                </p>
                <span
                  aria-hidden="true"
                  className="mx-auto mt-3 block h-px w-14 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent"
                />
              </div>
              <div
                role="columnheader"
                className="px-6 lg:px-8 pt-7 pb-6 text-center self-end"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9A9A9A]">
                  Panel general
                </span>
              </div>
            </div>

            {/* Data rows */}
            {rows.map((row, idx) => {
              const notLast = idx !== rows.length - 1;
              return (
                <div role="row" key={row.label} className="contents">
                  <div
                    role="rowheader"
                    className={`relative px-6 lg:px-8 py-5 lg:py-6 text-sm lg:text-[15px] font-medium leading-snug text-[#1A1A1A] ${
                      notLast ? "border-b border-[#F0EDE6]" : ""
                    }`}
                  >
                    {row.label}
                  </div>
                  <div
                    role="cell"
                    aria-label="Incluido en Evaluación Avanzada Aurum Nova"
                    className="relative px-6 lg:px-8 py-5 lg:py-6 text-center"
                  >
                    <AurumMark />
                  </div>
                  <div
                    role="cell"
                    aria-label={srValueForGeneral(row.general) + " en panel general"}
                    className={`relative px-6 lg:px-8 py-5 lg:py-6 text-center ${
                      notLast ? "border-b border-[#F0EDE6]" : ""
                    }`}
                  >
                    <GeneralMark value={row.general} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile: stacked premium cards. Each row becomes a card with the
              label on top and two side-by-side comparison pills below. */}
          <ul
            className="space-y-3 md:hidden"
            aria-label="Comparación por fila"
          >
            {rows.map((row) => (
              <li
                key={row.label}
                className="rounded-2xl border border-[#E8E4DA] bg-white p-4 shadow-[0_8px_24px_-16px_rgba(0,0,0,0.18)]"
              >
                <p className="mb-3.5 text-sm font-medium leading-snug text-[#1A1A1A]">
                  {row.label}
                </p>
                <div className="grid grid-cols-2 gap-2.5">
                  {/* Aurum Nova pill — elevated */}
                  <div className="rounded-xl border border-[#C9A84C]/30 bg-gradient-to-b from-[#FAF8F4] to-white px-3 py-3 shadow-[0_8px_20px_-14px_rgba(201,168,76,0.5)]">
                    <p className="mb-2 inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#A8872E]">
                      <Sparkles
                        className="h-2.5 w-2.5"
                        aria-hidden="true"
                      />
                      Aurum Nova
                    </p>
                    <div
                      className="flex items-center"
                      aria-label="Incluido en Evaluación Avanzada Aurum Nova"
                    >
                      <AurumMark />
                    </div>
                  </div>
                  {/* Panel general pill — neutral */}
                  <div className="rounded-xl border border-[#E8E4DA] bg-white px-3 py-3">
                    <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.18em] text-[#9A9A9A]">
                      Panel general
                    </p>
                    <div
                      className="flex items-center"
                      aria-label={srValueForGeneral(row.general) + " en panel general"}
                    >
                      <GeneralMark value={row.general} />
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Disclaimer — soft ivory pill */}
        <div className="mx-auto mt-10 max-w-[760px] rounded-2xl border border-[#E8E4DA] bg-[#FAF8F4]/65 px-5 py-4 backdrop-blur-sm">
          <p className="text-center text-xs leading-relaxed text-[#6B6B6B]">
            Esta comparación es educativa. La selección final de laboratorios
            depende del historial clínico, síntomas, medicamentos, factores de
            riesgo y criterio profesional. No todos los pacientes requieren
            todos los marcadores.
          </p>
        </div>
      </div>
    </section>
  );
}
