// OfficialImageSlot
// ---------------------------------------------------------------------------
// The canonical consumer of `content/official-visual-assets.ts`. Renders an
// approved <Image> when the asset is populated, OR a premium editorial
// placeholder (cream / dark / graphite) when the asset is null.
//
// Contract:
//   - Never references a file that does not yet exist on disk. If the
//     registry entry is `null`, the component renders the placeholder.
//   - The placeholder always feels intentional: cream / graphite / champagne
//     gold tones, subtle dotted-grid texture, inset hairline ring, small
//     Aurum Nova mark, and the line "Espacio reservado para fotografía
//     oficial".
//   - Accessible: when the asset is set, `alt` comes from the asset (the
//     editor controls it). When the asset is null, the placeholder's
//     accessible `aria-label` is built from the `label` prop.
//   - Responsive: uses Next.js `Image fill` with sensible `sizes`.
//   - Reduced-motion safe: the placeholder is static — no motion required.

import Image from "next/image";
import type { OfficialVisualAsset } from "@/content/official-visual-assets";

export type SlotRatio = "portrait" | "landscape" | "square" | "wide";
export type SlotVariant = "cream" | "dark" | "graphite";

export interface OfficialImageSlotProps {
  /** Registry entry. Pass `officialVisualAssets.<category>.<slot>` directly. */
  asset: OfficialVisualAsset | null;
  /**
   * Short descriptive label for the slot. Used inside the placeholder
   * caption ("Aurum Nova · {label}") and as the placeholder's
   * `aria-label`. Required because the slot must always be locatable
   * by an editor / screen reader even when no photo exists.
   */
  label: string;
  /** Aspect ratio. Default: "portrait". */
  ratio?: SlotRatio;
  /** Visual variant for the placeholder background. Default: "cream". */
  variant?: SlotVariant;
  /** Mark as LCP-critical. Default: false. */
  priority?: boolean;
  /** Extra wrapper classes (e.g. shadow / extra padding). */
  className?: string;
  /**
   * Optional `sizes` override for `next/image`. The default targets a
   * ~50vw image on desktop and full width on mobile, which fits both the
   * hero side-column and the boutique-card slots.
   */
  sizes?: string;
}

const RATIO_CLASS: Record<SlotRatio, string> = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
  wide: "aspect-[16/9]",
};

const DEFAULT_SIZES = "(min-width: 1024px) 50vw, 100vw";

/**
 * Canonical image slot.
 *
 * @example
 *   <OfficialImageSlot
 *     asset={officialVisualAssets.team.providerPortrait}
 *     label="Equipo clínico Aurum Nova"
 *     ratio="portrait"
 *     variant="cream"
 *   />
 */
export default function OfficialImageSlot({
  asset,
  label,
  ratio = "portrait",
  variant = "cream",
  priority,
  className = "",
  sizes,
}: OfficialImageSlotProps) {
  const aspectClass = RATIO_CLASS[ratio];

  // Asset exists → render the approved <Image>.
  if (asset) {
    return (
      <div
        className={`relative w-full overflow-hidden rounded-3xl bg-[#0A0A0A] ring-1 ${variantOuterRingClass(variant)} ${aspectClass} ${className}`}
      >
        <Image
          src={asset.src}
          alt={asset.alt}
          fill
          sizes={sizes ?? DEFAULT_SIZES}
          className="object-cover"
          priority={priority ?? asset.priority ?? false}
        />
        {/* Subtle vignette so the image always reads premium regardless
            of its own contrast. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/25 via-transparent to-transparent"
        />
      </div>
    );
  }

  // Asset is null → render the editorial placeholder for this variant.
  return (
    <EditorialPlaceholder
      label={label}
      ratio={ratio}
      variant={variant}
      className={className}
    />
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Editorial placeholders
// ─────────────────────────────────────────────────────────────────────────

function variantOuterRingClass(variant: SlotVariant): string {
  if (variant === "cream") return "ring-[#E8E4DA]";
  if (variant === "dark") return "ring-[#C9A84C]/20";
  return "ring-[#C9A84C]/15";
}

interface PlaceholderProps {
  label: string;
  ratio: SlotRatio;
  variant: SlotVariant;
  className: string;
}

function EditorialPlaceholder({
  label,
  ratio,
  variant,
  className,
}: PlaceholderProps) {
  const aspectClass = RATIO_CLASS[ratio];

  // Variant-specific tokens.
  const bgClass =
    variant === "cream"
      ? "bg-gradient-to-br from-[#FAF8F4] via-white to-[#F0EDE6]"
      : variant === "dark"
        ? "bg-gradient-to-br from-[#1A1A1A] via-[#161616] to-[#0E0E0E]"
        : "bg-gradient-to-br from-[#161616] via-[#121212] to-[#0A0A0A]";

  const outerRingClass = variantOuterRingClass(variant);
  const insetRingClass =
    variant === "cream" ? "ring-[#C9A84C]/25" : "ring-[#C9A84C]/22";

  const goldText =
    variant === "cream" ? "text-[#A8872E]" : "text-[#E2C97E]";
  const labelColor =
    variant === "cream" ? "text-[#1A1A1A]" : "text-white";
  const captionColor =
    variant === "cream" ? "text-[#6B6B6B]" : "text-[#BDB7AA]";
  const dividerVia =
    variant === "cream" ? "via-[#A8872E]" : "via-[#C9A84C]";
  const dividerFaintVia =
    variant === "cream" ? "via-[#A8872E]/60" : "via-[#C9A84C]/60";

  const radialOverlay =
    variant === "cream"
      ? "radial-gradient(ellipse at 72% 28%, rgba(201,168,76,0.22) 0%, transparent 60%), radial-gradient(ellipse at 22% 78%, rgba(168,135,46,0.10) 0%, transparent 55%)"
      : "radial-gradient(ellipse at 18% 12%, rgba(201,168,76,0.18) 0%, transparent 55%), radial-gradient(ellipse at 86% 88%, rgba(168,135,46,0.12) 0%, transparent 60%)";

  const gridStroke = variant === "cream" ? "#A8872E" : "#C9A84C";

  return (
    <div
      role="img"
      aria-label={`Espacio reservado para fotografía oficial: ${label}`}
      className={`relative w-full overflow-hidden rounded-3xl ring-1 ${outerRingClass} ${bgClass} ${aspectClass} ${className}`}
    >
      {/* Soft gold radial bloom */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60"
        style={{ backgroundImage: radialOverlay }}
      />
      {/* Subtle dotted grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(${gridStroke} 1px, transparent 1px), linear-gradient(90deg, ${gridStroke} 1px, transparent 1px)`,
          backgroundSize: "44px 44px",
        }}
      />
      {/* Inset hairline ring */}
      <span
        aria-hidden="true"
        className={`absolute inset-3 rounded-2xl ring-1 ${insetRingClass}`}
      />

      {/* Centered editorial mark */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
        <span
          aria-hidden="true"
          className={`block h-px w-12 bg-gradient-to-r from-transparent ${dividerVia} to-transparent`}
        />
        <span
          className={`text-[10px] font-bold uppercase tracking-[0.32em] ${goldText}`}
        >
          Aurum Nova
        </span>
        <p className={`text-sm font-semibold leading-snug ${labelColor}`}>
          {label}
        </p>
        <span
          aria-hidden="true"
          className={`block h-px w-8 bg-gradient-to-r from-transparent ${dividerFaintVia} to-transparent`}
        />
        <p
          className={`max-w-[220px] text-[11px] leading-relaxed ${captionColor}`}
        >
          Espacio reservado para fotografía oficial.
        </p>
      </div>
    </div>
  );
}
