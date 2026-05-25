"use client";

// ClinicalMetricGraph
// ---------------------------------------------------------------------------
// Pure-SVG line/area graph for metabolic dashboards: CGM curves, weight
// progress, lab trends. Renders an editorial graphite/gold visualization
// with optional reference band and optional point annotations.
//
// Apple-like posture: restrained, accessible, subtle motion. The curve
// animates its pathLength on first viewport entry; reduced motion renders
// instantly.
//
// Compliance: this is a visual primitive. The caller decides what the
// values mean. Use placeholder / illustrative data and always pair the
// rendered graph with copy that clarifies "vista ilustrativa" — do not
// imply real patient data.

import { useId, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT_QUART } from "@/components/motion/easing";

export interface MetricPoint {
  /** X-axis label (e.g. hour "08", week "S1", date "Jan"). */
  x: string;
  /** Y-axis value. */
  y: number;
}

export interface MetricAnnotation {
  /** Index into `points` to anchor the annotation. */
  pointIndex: number;
  /** Short label rendered above the point. */
  label: string;
}

export interface MetricReferenceBand {
  /** Lower bound of the reference band. */
  min: number;
  /** Upper bound of the reference band. */
  max: number;
  /** Optional caption rendered in the legend area. */
  caption?: string;
}

export interface ClinicalMetricGraphProps {
  /** Series label (e.g. "Glucosa estimada"). */
  label: string;
  /** Optional unit shown next to the label in the legend. */
  unit?: string;
  /** Data points (4+ recommended for a meaningful curve). */
  points: MetricPoint[];
  /**
   * Optional reference band rendered as a soft gold-tinted band behind the
   * curve. Use to show typical clinical ranges for the illustration only.
   */
  referenceBand?: MetricReferenceBand;
  /** Optional point annotations. */
  annotations?: MetricAnnotation[];
  /**
   * Pixel height of the chart (excluding label area). Width is fluid.
   * Default: 200.
   */
  height?: number;
  /**
   * Accessible description used in `aria-label`. Default is generated from
   * `label` and the X-range; pass a custom string for richer SR copy.
   */
  ariaLabel?: string;
  /**
   * Variant of the surrounding chrome.
   * "dark"  → graphite card with gold accents (default).
   * "flat"  → no card chrome, just the SVG. Use when the graph sits inside
   *           a parent visual surface like <DeviceDashboardMockup>.
   */
  variant?: "dark" | "flat";
}

/** Smooth cubic-bezier path generator from a normalized point set. */
function buildPath(points: { x: number; y: number }[]) {
  if (points.length === 0) return "";
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const cx1 = (prev.x + curr.x) / 2;
    const cx2 = (prev.x + curr.x) / 2;
    d += ` C ${cx1} ${prev.y}, ${cx2} ${curr.y}, ${curr.x} ${curr.y}`;
  }
  return d;
}

/**
 * Pure-SVG metric graph with optional reference band.
 *
 * @example
 *   <ClinicalMetricGraph
 *     label="Glucosa estimada"
 *     unit="mg/dL"
 *     points={glucoseCurve}
 *     referenceBand={{ min: 70, max: 140, caption: "Rango referencia" }}
 *   />
 */
export default function ClinicalMetricGraph({
  label,
  unit,
  points,
  referenceBand,
  annotations,
  height = 200,
  ariaLabel,
  variant = "dark",
}: ClinicalMetricGraphProps) {
  const reduce = useReducedMotion();
  const reactId = useId();
  const gradientId = `cmg-area-${reactId.replace(/[:]/g, "")}`;

  // Compute domain padding so the curve has breathing room.
  const { domainMin, domainMax } = useMemo(() => {
    const ys = points.map((p) => p.y);
    if (referenceBand) {
      ys.push(referenceBand.min, referenceBand.max);
    }
    const rawMin = Math.min(...ys);
    const rawMax = Math.max(...ys);
    const pad = (rawMax - rawMin) * 0.18 || 1;
    return { domainMin: rawMin - pad, domainMax: rawMax + pad };
  }, [points, referenceBand]);

  // Layout
  const W = 600;
  const H = height;
  const paddingX = 4;
  const innerW = W - paddingX * 2;

  const stepX = points.length > 1 ? innerW / (points.length - 1) : 0;
  const scaleY = (v: number) =>
    H - ((v - domainMin) / (domainMax - domainMin)) * (H - 16) - 8;

  const normalized = points.map((p, i) => ({
    x: paddingX + i * stepX,
    y: scaleY(p.y),
  }));

  const d = buildPath(normalized);
  const areaPath = d ? `${d} L ${paddingX + (points.length - 1) * stepX} ${H} L ${paddingX} ${H} Z` : "";

  const bandTop = referenceBand ? scaleY(referenceBand.max) : 0;
  const bandBottom = referenceBand ? scaleY(referenceBand.min) : 0;

  const computedAriaLabel =
    ariaLabel ??
    `Gráfico de ${label}${unit ? ` en ${unit}` : ""}: vista ilustrativa con ${points.length} puntos.`;

  // X-axis tick stride: show roughly 6 labels.
  const labelStride = Math.max(1, Math.ceil(points.length / 6));

  const wrapperClasses =
    variant === "dark"
      ? "relative w-full overflow-hidden rounded-2xl bg-[#0A0A0A] border border-[#2A2A2A] p-4 sm:p-5"
      : "relative w-full overflow-hidden p-0";

  return (
    <div className={wrapperClasses}>
      {/* Legend row */}
      <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#E2C97E]">
            {label}
            {unit && (
              <span className="ml-1 font-medium text-[#9A9A9A]">· {unit}</span>
            )}
          </p>
          <p className="mt-0.5 text-[10px] text-[#6B6B6B]">
            Vista ilustrativa
          </p>
        </div>
        <div className="flex items-center gap-4 text-[10px] text-[#9A9A9A]">
          <div className="flex items-center gap-1.5">
            <span className="h-[2px] w-3 rounded-full bg-[#C9A84C]" />
            <span>{label}</span>
          </div>
          {referenceBand && (
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-3 rounded-sm border border-[#C9A84C]/30 bg-[#C9A84C]/15" />
              <span>{referenceBand.caption ?? "Rango referencia"}</span>
            </div>
          )}
        </div>
      </div>

      {/* SVG */}
      <svg
        viewBox={`0 0 ${W} ${H + 28}`}
        className="h-auto w-full"
        role="img"
        aria-label={computedAriaLabel}
      >
        {/* Gridlines */}
        {[0, 1, 2, 3, 4].map((i) => (
          <line
            key={`grid-${i}`}
            x1={0}
            x2={W}
            y1={(H / 4) * i + 6}
            y2={(H / 4) * i + 6}
            stroke="#1F1F1F"
            strokeDasharray="3 5"
          />
        ))}

        {/* Reference band */}
        {referenceBand && (
          <>
            <rect
              x={0}
              y={bandTop}
              width={W}
              height={Math.max(0, bandBottom - bandTop)}
              fill="#C9A84C"
              opacity={0.06}
            />
            <line
              x1={0}
              x2={W}
              y1={bandTop}
              y2={bandTop}
              stroke="#C9A84C"
              strokeOpacity={0.25}
              strokeDasharray="2 6"
            />
            <line
              x1={0}
              x2={W}
              y1={bandBottom}
              y2={bandBottom}
              stroke="#C9A84C"
              strokeOpacity={0.25}
              strokeDasharray="2 6"
            />
          </>
        )}

        {/* Area gradient under the curve */}
        <defs>
          <linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#C9A84C" stopOpacity="0" />
          </linearGradient>
        </defs>
        {areaPath && <path d={areaPath} fill={`url(#${gradientId})`} />}

        {/* Curve */}
        {d && (
          <motion.path
            d={d}
            fill="none"
            stroke="#C9A84C"
            strokeWidth={2.25}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={reduce ? false : { pathLength: 0 }}
            whileInView={reduce ? undefined : { pathLength: 1 }}
            viewport={{ once: true, margin: "-80px 0px" }}
            transition={
              reduce
                ? { duration: 0 }
                : { duration: 1.4, ease: EASE_OUT_QUART }
            }
          />
        )}

        {/* Points */}
        {normalized.map((p, i) => (
          <circle
            key={`pt-${i}`}
            cx={p.x}
            cy={p.y}
            r={2.5}
            fill={variant === "dark" ? "#1A1A1A" : "#FFFFFF"}
            stroke="#C9A84C"
            strokeWidth={1.5}
          />
        ))}

        {/* Annotations */}
        {annotations?.map((a, i) => {
          const p = normalized[a.pointIndex];
          if (!p) return null;
          return (
            <g key={`ann-${i}`}>
              <line
                x1={p.x}
                x2={p.x}
                y1={Math.max(0, p.y - 18)}
                y2={p.y - 6}
                stroke="#C9A84C"
                strokeOpacity={0.6}
                strokeWidth={1}
              />
              <text
                x={p.x}
                y={Math.max(10, p.y - 22)}
                fontSize="9"
                fill="#E2C97E"
                textAnchor="middle"
                fontFamily="ui-sans-serif, system-ui"
              >
                {a.label}
              </text>
            </g>
          );
        })}

        {/* X labels */}
        {points
          .map((p, i) => ({ p, i }))
          .filter(({ i }) => i % labelStride === 0)
          .map(({ p, i }) => (
            <text
              key={`xl-${i}`}
              x={paddingX + i * stepX}
              y={H + 22}
              fontSize="9"
              fill="#6B6B6B"
              textAnchor="middle"
              fontFamily="ui-sans-serif, system-ui"
            >
              {p.x}
            </text>
          ))}
      </svg>
    </div>
  );
}
