"use client";

// DeviceDashboardMockup
// ---------------------------------------------------------------------------
// The official Aurum Nova dashboard chrome. Renders a graphite "device" panel
// with gold accents, an editorial header, optional biomarker / metric chips,
// optional inline metric bars, and an optional footer note.
//
// Use as the visual slot of <ProductHeroBlock> or as a standalone visual
// inside <VisualFeatureSection>. The component is opinion-free about the
// data; the caller decides what to render.
//
// Compliance: no fake patient data, no diagnosis claims, no medication doses.
// Chips/metrics are explicitly labeled "clínico" / "orientativo" so the
// surface reads as a clinical visualization, not a personal record.

import type { ReactNode } from "react";
import { Activity, ShieldCheck } from "lucide-react";

export type DashboardChip = {
  /** Chip label (biomarker name, category, etc.). */
  name: string;
  /** Optional fill percentage (0-100) for the gold progress strip. */
  fill?: number;
  /** Optional small caption rendered under the chip name. Default: "clínico". */
  caption?: string;
};

export type DashboardMetric = {
  /** Metric label. */
  label: string;
  /** Display value. Use placeholders like "—" when no patient data exists. */
  value: string;
  /** Optional unit shown next to the value. */
  unit?: string;
  /** Optional supporting line under the metric. */
  sub?: string;
};

export interface DeviceDashboardMockupProps {
  /** Eyebrow kicker in gold tracking. */
  eyebrow?: string;
  /** Main title shown in the header (e.g. "Mapa de biomarcadores"). */
  title: string;
  /** Subtitle shown under the title. */
  subtitle?: string;
  /** Optional grid of chips (2-column on all breakpoints). */
  chips?: DashboardChip[];
  /** Optional grid of metric tiles (2 or 4-column responsive). */
  metrics?: DashboardMetric[];
  /**
   * Optional footer note. Use to communicate the "orientativo / no es
   * diagnóstico" stance — the component does not insert this automatically
   * to avoid duplicating disclaimers.
   */
  footerNote?: string;
  /**
   * Optional custom body slot — renders between chips and footer. Use when
   * the caller needs to embed a <ClinicalMetricGraph> or other custom
   * visualization.
   */
  children?: ReactNode;
  /**
   * "raised" → with outer shadow, ring, full chrome (default; for heroes).
   * "flat"  → no outer shadow, sits inside a parent visual surface.
   */
  variant?: "raised" | "flat";
}

/**
 * Official Aurum Nova dashboard chrome — graphite device with gold accents.
 *
 * @example
 *   <DeviceDashboardMockup
 *     eyebrow="Mapa de biomarcadores"
 *     title="Selección clínica personalizada"
 *     chips={heroBiomarkerChips}
 *     footerNote="Visualización abstracta. La selección final depende de evaluación."
 *   />
 */
export default function DeviceDashboardMockup({
  eyebrow,
  title,
  subtitle,
  chips,
  metrics,
  footerNote,
  children,
  variant = "raised",
}: DeviceDashboardMockupProps) {
  const raised = variant === "raised";

  return (
    <div
      className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#161616] via-[#121212] to-[#0A0A0A] p-6 sm:p-7 ${
        raised
          ? "ring-1 ring-[#C9A84C]/15 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.55)]"
          : "ring-1 ring-[#2A2A2A]/60"
      }`}
      role="img"
      aria-label={
        subtitle ? `${title} — ${subtitle}` : title
      }
    >
      {/* Subtle gold grid overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Header */}
      <div className="relative z-10 mb-5 flex items-center justify-between gap-4">
        <div>
          {eyebrow && (
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#E2C97E]">
              {eyebrow}
            </p>
          )}
          <p className="mt-1 text-sm font-semibold leading-tight text-white">
            {title}
          </p>
          {subtitle && (
            <p className="mt-1 text-[11px] leading-relaxed text-[#9A9A9A]">
              {subtitle}
            </p>
          )}
        </div>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#C9A84C]/12 ring-1 ring-[#C9A84C]/30">
          <Activity className="h-5 w-5 text-[#C9A84C]" />
        </div>
      </div>

      {/* Chips */}
      {chips && chips.length > 0 && (
        <div className="relative z-10 grid grid-cols-2 gap-3">
          {chips.map((chip) => {
            const fill =
              typeof chip.fill === "number"
                ? Math.max(0, Math.min(100, chip.fill))
                : null;
            return (
              <div
                key={chip.name}
                className="rounded-2xl border border-[#2A2A2A] bg-[#171717] p-3"
              >
                <div className="mb-2 flex items-center justify-between gap-2">
                  <p className="text-xs font-semibold leading-tight text-white">
                    {chip.name}
                  </p>
                  <span className="text-[10px] font-medium text-[#9A9A9A]">
                    {chip.caption ?? "clínico"}
                  </span>
                </div>
                {fill !== null && (
                  <div className="h-1.5 overflow-hidden rounded-full bg-[#0E0E0E]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#C9A84C] to-[#E2C97E]"
                      style={{ width: `${fill}%` }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Metrics */}
      {metrics && metrics.length > 0 && (
        <div className="relative z-10 mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-[#2A2A2A] sm:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="bg-[#171717] p-4">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-[#9A9A9A]">
                {metric.label}
              </p>
              <p className="mt-1 text-lg font-bold text-white">
                {metric.value}
                {metric.unit && (
                  <span className="ml-1 text-xs font-normal text-[#9A9A9A]">
                    {metric.unit}
                  </span>
                )}
              </p>
              {metric.sub && (
                <p className="mt-1 text-[10px] leading-tight text-[#9A9A9A]">
                  {metric.sub}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Custom body slot */}
      {children && <div className="relative z-10 mt-5">{children}</div>}

      {/* Footer note */}
      {footerNote && (
        <div className="relative z-10 mt-5 rounded-2xl border border-[#C9A84C]/25 bg-[#C9A84C]/[0.06] p-4">
          <div className="mb-2 flex items-center gap-2">
            <ShieldCheck className="h-3.5 w-3.5 text-[#E2C97E]" />
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#E2C97E]">
              Orientativo · no es diagnóstico
            </p>
          </div>
          <p className="text-[11px] leading-relaxed text-[#BDB7AA]">
            {footerNote}
          </p>
        </div>
      )}
    </div>
  );
}
