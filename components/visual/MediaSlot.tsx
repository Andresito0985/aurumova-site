// MediaSlot
// ---------------------------------------------------------------------------
// Video-capable extension of the official visual-slot system. A single slot
// can resolve, in priority order, to:
//
//   1. A muted/looped/playsInline video (with poster) — when `asset.video` set.
//   2. A Next.js <Image> — when only `asset.image` set.
//   3. The canonical editorial placeholder — when `asset` is null.
//
// Contract (mirrors OfficialImageSlot):
//   - NEVER references a file that does not exist on disk. The registry
//     (content/aurum-media-assets.ts) gates this: a slot stays `null` until
//     the approved asset is dropped in, so the page always renders cleanly.
//   - No layout shift: the aspect-ratio box reserves space whether the slot
//     resolves to video, image, or placeholder.
//   - Non-blocking video: muted + autoPlay + loop + playsInline, preload
//     "metadata", with a poster so the first paint is the still frame (the
//     poster doubles as the graceful fallback if the video fails to load).
//   - Accessible: poster/image carry `alt`; the ambient video is muted and
//     decorative (labelled, no audio → no captions required).
//
// Image and placeholder rendering are delegated to <OfficialImageSlot> so the
// two systems stay visually identical.

import OfficialImageSlot, {
  type SlotRatio,
  type SlotVariant,
} from "@/components/visual/OfficialImageSlot";

/** A single media slot entry. All paths must exist on disk before being set. */
export type AurumMediaAsset = {
  /** Public path to a muted loop video (e.g. /videos/aurum-nova/hero-loop.mp4). */
  video?: string;
  /** Optional second source (e.g. WebM) for the same loop. */
  videoWebm?: string;
  /** Poster / still frame shown before & instead of a failed video. */
  poster?: string;
  /** Public path to a still image (used when no video is set). */
  image?: string;
  /** Descriptive, compliance-safe alt / label text. Required. */
  alt: string;
  /** Intrinsic dimensions for the still image (Next.js layout). */
  width?: number;
  height?: number;
  /** LCP-critical (above the fold). */
  priority?: boolean;
};

export interface MediaSlotProps {
  /** Registry entry. Pass `aurumMediaAssets.<group>.<slot>` directly. */
  asset: AurumMediaAsset | null;
  /** Short locatable label, used by the placeholder caption + aria-label. */
  label: string;
  ratio?: SlotRatio;
  variant?: SlotVariant;
  priority?: boolean;
  className?: string;
  sizes?: string;
}

const RATIO_CLASS: Record<SlotRatio, string> = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
  wide: "aspect-[16/9]",
};

export default function MediaSlot({
  asset,
  label,
  ratio = "portrait",
  variant = "cream",
  priority,
  className = "",
  sizes,
}: MediaSlotProps) {
  // 1 — Video slot (muted ambient loop with poster fallback).
  if (asset?.video) {
    const aspectClass = RATIO_CLASS[ratio];
    const posterBg =
      variant === "cream"
        ? "bg-gradient-to-br from-[#FAF8F4] via-white to-[#F0EDE6]"
        : "bg-gradient-to-br from-[#161616] via-[#121212] to-[#0A0A0A]";
    return (
      <div
        className={`relative w-full overflow-hidden rounded-3xl ring-1 ${
          variant === "cream" ? "ring-[#E8E4DA]" : "ring-[#C9A84C]/20"
        } ${posterBg} ${aspectClass} ${className}`}
      >
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={asset.poster ?? asset.image ?? undefined}
          aria-label={asset.alt}
        >
          {asset.videoWebm && <source src={asset.videoWebm} type="video/webm" />}
          <source src={asset.video} type="video/mp4" />
        </video>
        {/* Premium vignette so the loop always reads clinical, not flat. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/25 via-transparent to-transparent"
        />
      </div>
    );
  }

  // 2 & 3 — Image or editorial placeholder: reuse the canonical slot so both
  // systems stay pixel-identical. Bridge AurumMediaAsset → OfficialVisualAsset.
  const imageAsset = asset?.image
    ? {
        src: asset.image,
        alt: asset.alt,
        width: asset.width ?? 1600,
        height: asset.height ?? 1200,
        priority: asset.priority,
      }
    : null;

  return (
    <OfficialImageSlot
      asset={imageAsset}
      label={label}
      ratio={ratio}
      variant={variant}
      priority={priority ?? asset?.priority}
      className={className}
      sizes={sizes}
    />
  );
}
