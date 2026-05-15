"use client";

import Image from "next/image";

interface Laser3DFallbackProps {
  fallbackImageSrc?: string;
  fallbackImageAlt?: string;
  /** Optional aspect-ratio of the source image (width/height). Used to decide
   *  if the photo is clean enough to use as the centerpiece. */
  fallbackImageRatio?: number;
}

/**
 * Premium product-stage placeholder for the future GLB. Uses a clean image
 * (object-contain) when one is provided, otherwise renders a CSS mockup of
 * the diode laser machine on a champagne pedestal — never a cropped photo,
 * never floating markers, never a public "model pending" message.
 */
export default function Laser3DFallback({
  fallbackImageSrc,
  fallbackImageAlt,
}: Laser3DFallbackProps) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[28px] border border-white/[0.06] bg-[#080808] shadow-[0_50px_120px_-40px_rgba(0,0,0,0.95)]">
      <StageBackdrop />

      <div className="absolute inset-0 flex items-center justify-center px-6 sm:px-10 lg:px-12">
        <div className="relative flex h-full w-full max-w-[640px] items-center justify-center">
          {fallbackImageSrc ? (
            <Image
              src={fallbackImageSrc}
              alt={fallbackImageAlt ?? "Equipo de láser diodo Aurum Nova"}
              fill
              sizes="(min-width: 1024px) 640px, 90vw"
              className="object-contain object-center drop-shadow-[0_30px_40px_rgba(0,0,0,0.55)]"
              priority={false}
            />
          ) : (
            <CssMachineMockup />
          )}
        </div>
      </div>

      <Pedestal />
      <StageVignette />
      <CornerChips />
    </div>
  );
}

function StageBackdrop() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 75% at 50% 30%, rgba(201,168,106,0.18), transparent 55%), radial-gradient(60% 50% at 50% 95%, rgba(201,168,106,0.10), transparent 65%), linear-gradient(180deg, #0E0E0E 0%, #080808 60%, #050505 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,106,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,106,0.5) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
          maskImage:
            "radial-gradient(70% 70% at 50% 50%, #000 35%, transparent 80%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "conic-gradient(from 200deg at 50% 50%, rgba(255,255,255,0) 0deg, rgba(201,168,106,0.18) 60deg, rgba(255,255,255,0) 120deg, rgba(56,189,248,0.06) 200deg, rgba(255,255,255,0) 320deg)",
          maskImage:
            "radial-gradient(60% 60% at 50% 50%, #000 30%, transparent 75%)",
        }}
      />
    </>
  );
}

function Pedestal() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col items-center">
      <div
        aria-hidden
        className="h-[1px] w-[72%] max-w-[520px] bg-gradient-to-r from-transparent via-[#C9A86A]/55 to-transparent"
      />
      <div
        aria-hidden
        className="-mt-[1px] h-12 w-[80%] max-w-[600px]"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(201,168,106,0.22), transparent 70%)",
          filter: "blur(6px)",
        }}
      />
    </div>
  );
}

function StageVignette() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          "radial-gradient(120% 80% at 50% 50%, transparent 50%, rgba(0,0,0,0.55) 100%)",
      }}
    />
  );
}

function CornerChips() {
  return (
    <>
      <div className="pointer-events-none absolute left-5 top-5 hidden items-center gap-2 rounded-full border border-white/10 bg-black/45 px-3 py-1.5 backdrop-blur-md sm:inline-flex">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#38BDF8]" />
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/65">
          Vista 3D · Aurum Nova
        </span>
      </div>
      <div className="pointer-events-none absolute right-5 top-5 hidden items-center gap-2 rounded-full border border-[#C9A86A]/30 bg-black/45 px-3 py-1.5 backdrop-blur-md sm:inline-flex">
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#C9A86A]">
          Diodo · 755 / 808 / 1064
        </span>
      </div>
      <div className="pointer-events-none absolute bottom-5 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-black/55 px-3 py-1.5 backdrop-blur-md">
        <span className="h-1.5 w-1.5 rounded-full bg-[#C9A86A]" />
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/65">
          Arrastra para rotar
        </span>
      </div>
    </>
  );
}

/* ---------- CSS-only luxury machine mockup (used when no image is given) --------- */

function CssMachineMockup() {
  return (
    <div className="relative flex h-full w-full items-end justify-center pb-10 sm:pb-14">
      <div className="relative h-[78%] w-[58%] max-w-[320px]">
        {/* Reflection */}
        <div
          aria-hidden
          className="absolute -bottom-12 left-1/2 h-12 w-[110%] -translate-x-1/2 rounded-[50%] opacity-70"
          style={{
            background:
              "radial-gradient(ellipse, rgba(255,255,255,0.18), transparent 70%)",
            filter: "blur(8px)",
          }}
        />

        {/* Upper body */}
        <div className="absolute inset-x-0 top-0 h-[60%] overflow-hidden rounded-[28px] border border-white/15 bg-gradient-to-b from-[#F4F1EA] via-[#E2DCCD] to-[#B8B0A0] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.85)]">
          {/* Touchscreen */}
          <div className="absolute left-1/2 top-4 h-[72%] w-[60%] -translate-x-1/2 overflow-hidden rounded-[18px] border border-black/40 bg-gradient-to-b from-[#0B0B0B] via-[#161616] to-[#0B0B0B]">
            <div className="absolute inset-1.5 rounded-[12px] border border-[#C9A86A]/25 bg-[radial-gradient(circle_at_30%_25%,rgba(201,168,106,0.18),transparent_55%)]">
              <div className="absolute inset-x-3 top-3 space-y-1.5">
                <div className="h-1 w-12 rounded-full bg-[#C9A86A]/75" />
                <div className="h-0.5 w-20 rounded-full bg-white/30" />
                <div className="h-0.5 w-16 rounded-full bg-white/15" />
              </div>
              <div className="absolute inset-x-3 top-1/2 grid -translate-y-1/2 grid-cols-3 gap-1.5">
                <div className="h-2 rounded bg-white/10" />
                <div className="h-2 rounded bg-[#C9A86A]/45" />
                <div className="h-2 rounded bg-white/10" />
              </div>
              <div className="absolute inset-x-3 bottom-3 grid grid-cols-4 gap-1">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-1.5 rounded bg-white/10"
                    style={{
                      backgroundColor:
                        i === 1 ? "rgba(56,189,248,0.45)" : undefined,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
          {/* Champagne bezel line */}
          <div className="absolute inset-x-6 top-3 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#C9A86A]/70 to-transparent" />
          {/* Front controls */}
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#FF4D4D] shadow-[0_0_8px_rgba(255,77,77,0.6)]" />
            <span className="h-1.5 w-6 rounded-full bg-[#C9A86A]/75" />
          </div>
        </div>

        {/* Handpiece on holster */}
        <div className="absolute -right-7 top-[26%] h-[42%] w-12 overflow-hidden rounded-[14px] border border-white/15 bg-gradient-to-b from-[#F4F1EA] via-[#DCD5C5] to-[#A89F8B] shadow-[0_18px_36px_-12px_rgba(0,0,0,0.85)]">
          <div className="absolute left-1/2 top-2 h-3 w-7 -translate-x-1/2 rounded-sm bg-black/85" />
          <div className="absolute left-1/2 top-7 h-[2px] w-8 -translate-x-1/2 rounded-full bg-[#38BDF8] shadow-[0_0_10px_rgba(56,189,248,0.85)]" />
          <div className="absolute left-1/2 top-9 h-[2px] w-8 -translate-x-1/2 rounded-full bg-[#38BDF8]/55" />
        </div>

        {/* Lower body / vents */}
        <div className="absolute inset-x-0 bottom-0 h-[40%] overflow-hidden rounded-b-[28px] border border-white/[0.06] bg-gradient-to-b from-[#1A1A1A] via-[#111111] to-[#070707] shadow-[0_30px_60px_-25px_rgba(0,0,0,0.95)]">
          <div className="absolute inset-x-7 top-5 grid grid-cols-7 gap-1 opacity-70">
            {Array.from({ length: 21 }).map((_, idx) => (
              <span key={idx} className="h-0.5 rounded-full bg-white/15" />
            ))}
          </div>
          <div className="absolute bottom-3 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-[#C9A86A]/45" />
        </div>
      </div>
    </div>
  );
}
