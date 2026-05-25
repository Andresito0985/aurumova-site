"use client";

// PremiumComparisonTable
// ---------------------------------------------------------------------------
// Editorial comparison table for premium service surfaces. Renders a
// 2-to-4-column comparator with an optional featured (gold-elevated) column.
// On desktop it uses a semantic CSS-Grid table with `role="table"`. On
// mobile it collapses into stacked premium cards — one card per row, with
// the row label on top and value pills below.
//
// Apple-like posture: editorial, restrained, accessible. No icons doing the
// heavy lifting alone; every cell carries a screen-reader label.
//
// Scope: section-scale. Renders its own <section> chrome with cream
// background and gold radial accents — caller does not wrap.

import { Check, Minus, Sparkles } from "lucide-react";
import HeadlineReveal from "@/components/motion/HeadlineReveal";

export type ComparisonCellValue =
  | "yes"
  | "no"
  | "limited"
  /** Free-text cell content. Use for nuanced values. */
  | { kind: "text"; text: string };

export interface ComparisonColumn {
  /** Column heading (e.g. "Aurum Nova", "Panel general"). */
  title: string;
  /** Optional eyebrow above the title (e.g. "Evaluación avanzada"). */
  subtitle?: string;
  /** Optional short eyebrow rendered as a tracking label above the title. */
  kicker?: string;
}

export interface ComparisonRow {
  /** Row label on the left. */
  label: string;
  /** One value per column. Length must match `columns.length`. */
  values: ComparisonCellValue[];
}

export interface PremiumComparisonTableProps {
  /** Section title. */
  title: string;
  /** Optional accent fragment appended to the title in gold. */
  titleHighlight?: string;
  /** Optional eyebrow above the title. */
  eyebrow?: string;
  /** Optional subtitle paragraph under the title. */
  subtitle?: string;
  /** Columns being compared (2-4). */
  columns: ComparisonColumn[];
  /** Comparison rows. */
  rows: ComparisonRow[];
  /**
   * Optional index of the column to feature (0-based). The featured column
   * receives an elevated gold-tinted card background that spans every row.
   */
  featuredColumnIndex?: number;
  /** Optional disclaimer rendered under the table in a soft ivory pill. */
  disclaimer?: string;
  /** Left-most column header label. Default: "Qué puede evaluar". */
  leftHeaderLabel?: string;
}

/** Soft gold-tinted circle wrapping a check — for the featured column. */
function FeaturedYesMark() {
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#C9A84C]/12 ring-1 ring-[#C9A84C]/35 shadow-[0_4px_12px_-6px_rgba(201,168,76,0.45)]"
    >
      <Check className="h-4 w-4 text-[#A8872E]" strokeWidth={2.5} />
    </span>
  );
}

/** Neutral check / dash / limited pill for non-featured columns. */
function NeutralMark({ value }: { value: ComparisonCellValue }) {
  if (typeof value === "object" && value.kind === "text") {
    return (
      <span className="inline-flex items-center rounded-full bg-[#F0EDE6] px-3 py-1.5 text-[11px] font-medium text-[#6B6B6B]">
        {value.text}
      </span>
    );
  }
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

function srLabel(value: ComparisonCellValue, columnTitle: string) {
  if (typeof value === "object" && value.kind === "text") {
    return `${value.text} en ${columnTitle}`;
  }
  if (value === "yes") return `Incluido en ${columnTitle}`;
  if (value === "limited") return `Limitada en ${columnTitle}`;
  return `No incluido en ${columnTitle}`;
}

/** CSS grid-template-columns string built from column count. */
function buildGridTemplate(count: number) {
  // Label column slightly wider than value columns.
  return `minmax(0,1.55fr) ${"minmax(0,1fr) ".repeat(count).trim()}`;
}

/**
 * Editorial comparator with optional featured column.
 *
 * @example
 *   <PremiumComparisonTable
 *     eyebrow="Comparación clínica"
 *     title="Más precisión que un"
 *     titleHighlight="panel general"
 *     subtitle="Selección de marcadores según perfil clínico."
 *     columns={[
 *       { title: "Aurum Nova", subtitle: "Evaluación avanzada", kicker: "Aurum Nova" },
 *       { title: "Panel general" },
 *     ]}
 *     rows={comparisonRows}
 *     featuredColumnIndex={0}
 *     disclaimer="Esta comparación es educativa…"
 *   />
 */
export default function PremiumComparisonTable({
  title,
  titleHighlight,
  eyebrow,
  subtitle,
  columns,
  rows,
  featuredColumnIndex,
  disclaimer,
  leftHeaderLabel = "Qué puede evaluar",
}: PremiumComparisonTableProps) {
  const colCount = columns.length;
  const gridTemplate = buildGridTemplate(colCount);
  const totalGridRows = rows.length + 1; // header + N data rows
  const hasFeatured =
    typeof featuredColumnIndex === "number" &&
    featuredColumnIndex >= 0 &&
    featuredColumnIndex < colCount;

  // Featured column's CSS grid column index (1-based, accounting for the
  // leading label column at column 1).
  const featuredGridColumn = hasFeatured ? featuredColumnIndex! + 2 : undefined;

  return (
    <section className="relative bg-gradient-to-b from-[#FAF8F4] via-[#F4EBD0]/25 to-[#FAF8F4] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="container-max">
        {/* Editorial header */}
        <div className="mx-auto mb-12 max-w-[760px] text-center sm:mb-16">
          {eyebrow && (
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
              {eyebrow}
            </span>
          )}
          <HeadlineReveal
            as="h2"
            onMount={false}
            delay={0.05}
            className="mb-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.025em] leading-[1.04] text-[#1A1A1A]"
          >
            {titleHighlight ? (
              <>
                {title}{" "}
                <span className="text-[#A8872E]">{titleHighlight}</span>
              </>
            ) : (
              title
            )}
          </HeadlineReveal>
          {subtitle && (
            <p className="mx-auto max-w-[640px] text-base sm:text-lg leading-relaxed text-[#6B6B6B]">
              {subtitle}
            </p>
          )}
        </div>

        {/* Card shell */}
        <div className="mx-auto max-w-[1040px] rounded-[2rem] border border-[#E8E4DA] bg-white p-4 sm:p-6 lg:p-8 shadow-[0_40px_120px_-50px_rgba(0,0,0,0.25)]">
          {/* Desktop grid table */}
          <div
            role="table"
            aria-label={`Comparación: ${columns.map((c) => c.title).join(" vs ")}`}
            className="relative hidden md:grid"
            style={{ gridTemplateColumns: gridTemplate }}
          >
            {/* Decorative elevated card behind the featured column */}
            {hasFeatured && (
              <div
                aria-hidden="true"
                className="pointer-events-none rounded-3xl bg-gradient-to-b from-[#FAF8F4] via-[#FAF8F4] to-white ring-1 ring-[#C9A84C]/25 shadow-[0_30px_70px_-30px_rgba(201,168,76,0.40)]"
                style={{
                  gridColumn: featuredGridColumn,
                  gridRow: `1 / span ${totalGridRows}`,
                }}
              />
            )}

            {/* Header row */}
            <div role="row" className="contents">
              <div
                role="columnheader"
                className="self-end px-6 lg:px-8 pt-7 pb-6"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9A9A9A]">
                  {leftHeaderLabel}
                </span>
              </div>
              {columns.map((col, i) => {
                const featured = i === featuredColumnIndex;
                return (
                  <div
                    key={col.title}
                    role="columnheader"
                    className={`relative px-6 lg:px-8 ${
                      featured ? "pt-8 pb-7" : "pt-7 pb-6 self-end"
                    } text-center`}
                  >
                    {featured && col.kicker && (
                      <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-[#C9A84C]/35 bg-white px-3 py-1 shadow-sm">
                        <Sparkles
                          className="h-3 w-3 text-[#C9A84C]"
                          aria-hidden="true"
                        />
                        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#A8872E]">
                          {col.kicker}
                        </span>
                      </div>
                    )}
                    {!featured && (
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9A9A9A]">
                        {col.title}
                      </span>
                    )}
                    {featured && (
                      <p className="text-base font-semibold leading-tight text-[#1A1A1A]">
                        {col.subtitle ?? col.title}
                      </p>
                    )}
                    {featured && (
                      <span
                        aria-hidden="true"
                        className="mx-auto mt-3 block h-px w-14 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent"
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Data rows */}
            {rows.map((row, rIdx) => {
              const notLast = rIdx !== rows.length - 1;
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
                  {row.values.map((value, cIdx) => {
                    const col = columns[cIdx];
                    const featured = cIdx === featuredColumnIndex;
                    return (
                      <div
                        key={`${row.label}-${cIdx}`}
                        role="cell"
                        aria-label={srLabel(value, col.title)}
                        className={`relative px-6 lg:px-8 py-5 lg:py-6 text-center ${
                          notLast && !featured
                            ? "border-b border-[#F0EDE6]"
                            : ""
                        }`}
                      >
                        {featured ? (
                          value === "yes" ? (
                            <FeaturedYesMark />
                          ) : (
                            <NeutralMark value={value} />
                          )
                        ) : (
                          <NeutralMark value={value} />
                        )}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>

          {/* Mobile stacked cards */}
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
                <div
                  className={`grid gap-2.5 ${
                    colCount === 2
                      ? "grid-cols-2"
                      : colCount === 3
                        ? "grid-cols-3"
                        : "grid-cols-2"
                  }`}
                >
                  {row.values.map((value, cIdx) => {
                    const col = columns[cIdx];
                    const featured = cIdx === featuredColumnIndex;
                    return (
                      <div
                        key={`${row.label}-m-${cIdx}`}
                        className={
                          featured
                            ? "rounded-xl border border-[#C9A84C]/30 bg-gradient-to-b from-[#FAF8F4] to-white px-3 py-3 shadow-[0_8px_20px_-14px_rgba(201,168,76,0.5)]"
                            : "rounded-xl border border-[#E8E4DA] bg-white px-3 py-3"
                        }
                      >
                        <p
                          className={`mb-2 inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-[0.18em] ${
                            featured ? "text-[#A8872E]" : "text-[#9A9A9A]"
                          }`}
                        >
                          {featured && (
                            <Sparkles
                              className="h-2.5 w-2.5"
                              aria-hidden="true"
                            />
                          )}
                          {col.kicker ?? col.title}
                        </p>
                        <div
                          className="flex items-center"
                          aria-label={srLabel(value, col.title)}
                        >
                          {featured ? (
                            value === "yes" ? (
                              <FeaturedYesMark />
                            ) : (
                              <NeutralMark value={value} />
                            )
                          ) : (
                            <NeutralMark value={value} />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {disclaimer && (
          <div className="mx-auto mt-10 max-w-[760px] rounded-2xl border border-[#E8E4DA] bg-[#FAF8F4]/65 px-5 py-4 backdrop-blur-sm">
            <p className="text-center text-xs leading-relaxed text-[#6B6B6B]">
              {disclaimer}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
