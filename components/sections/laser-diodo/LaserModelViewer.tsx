"use client";

import Script from "next/script";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import type { LaserFeature } from "./laser3dData";

const MODEL_VIEWER_SRC =
  "https://unpkg.com/@google/model-viewer@3.5.0/dist/model-viewer.min.js";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": ModelViewerElementAttributes;
    }
  }
}

type ModelViewerElementAttributes = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  src?: string;
  alt?: string;
  poster?: string;
  ar?: boolean | "true" | "false";
  "camera-controls"?: boolean | "true" | "false";
  "auto-rotate"?: boolean | "true" | "false";
  "rotation-per-second"?: string;
  "shadow-intensity"?: string;
  exposure?: string;
  "environment-image"?: string;
  loading?: "auto" | "lazy" | "eager";
  reveal?: "auto" | "interaction" | "manual";
  "interaction-prompt"?: "auto" | "when-focused" | "none";
  "disable-zoom"?: boolean | "true" | "false";
  "touch-action"?: string;
  "camera-orbit"?: string;
  "field-of-view"?: string;
  style?: CSSProperties;
};

interface LaserModelViewerProps {
  src: string;
  alt: string;
  poster?: string;
  className?: string;
  /** When true, paints subtle hotspots over the 3D model. Default false until
   *  marker positions are tied to the actual GLB. */
  showHotspots?: boolean;
  features?: LaserFeature[];
  activeFeatureId?: string;
  onFeatureSelect?: (id: string) => void;
  onError?: () => void;
}

export default function LaserModelViewer({
  src,
  alt,
  poster,
  className = "",
  showHotspots = false,
  features = [],
  activeFeatureId,
  onFeatureSelect,
  onError,
}: LaserModelViewerProps) {
  const viewerRef = useRef<HTMLElement | null>(null);
  const [scriptReady, setScriptReady] = useState(false);

  useEffect(() => {
    const node = viewerRef.current;
    if (!node) return;
    const handleError = () => onError?.();
    node.addEventListener("error", handleError);
    return () => node.removeEventListener("error", handleError);
  }, [onError, scriptReady]);

  return (
    <>
      <Script
        src={MODEL_VIEWER_SRC}
        type="module"
        strategy="lazyOnload"
        onLoad={() => setScriptReady(true)}
        onError={() => onError?.()}
      />
      <div
        className={`relative h-full w-full overflow-hidden rounded-[28px] border border-white/[0.06] bg-[#080808] shadow-[0_50px_120px_-40px_rgba(0,0,0,0.95)] ${className}`}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 75% at 50% 30%, rgba(201,168,106,0.16), transparent 55%), radial-gradient(60% 50% at 50% 95%, rgba(201,168,106,0.10), transparent 65%), linear-gradient(180deg, #0E0E0E 0%, #080808 60%, #050505 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,106,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,106,0.5) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
            maskImage:
              "radial-gradient(70% 70% at 50% 50%, #000 35%, transparent 80%)",
          }}
        />

        {scriptReady ? (
          // @ts-expect-error custom element is not in JSX intrinsic types
          <model-viewer
            ref={viewerRef}
            src={src}
            alt={alt}
            poster={poster}
            ar="false"
            camera-controls="true"
            auto-rotate="true"
            rotation-per-second="14deg"
            shadow-intensity="0.95"
            exposure="1"
            environment-image="neutral"
            interaction-prompt="none"
            reveal="auto"
            loading="lazy"
            touch-action="pan-y"
            field-of-view="32deg"
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "transparent",
              "--poster-color": "transparent",
            } as CSSProperties}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 backdrop-blur-md">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#C9A86A]" />
              <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/70">
                Cargando vista 3D
              </span>
            </div>
          </div>
        )}

        {/* Pedestal */}
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

        {/* Vignette */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 80% at 50% 50%, transparent 50%, rgba(0,0,0,0.55) 100%)",
          }}
        />

        {/* Corner chips */}
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

        {showHotspots &&
          features.map((feature) => {
            const isActive = feature.id === activeFeatureId;
            return (
              <button
                key={feature.id}
                type="button"
                onClick={() => onFeatureSelect?.(feature.id)}
                aria-label={`Ver detalle: ${feature.title}`}
                aria-pressed={isActive}
                style={{
                  top: feature.markerPosition.top,
                  left: feature.markerPosition.left,
                }}
                className="group absolute z-20 -translate-x-1/2 -translate-y-1/2 focus:outline-none"
              >
                <span
                  className={`relative flex h-6 w-6 items-center justify-center rounded-full border transition-all duration-300 ${
                    isActive
                      ? "border-[#C9A86A] bg-[#C9A86A]/15 shadow-[0_0_22px_rgba(201,168,106,0.55)]"
                      : "border-white/30 bg-black/50 backdrop-blur-sm group-hover:border-[#C9A86A]/60"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                      isActive ? "bg-[#F2D987]" : "bg-white/70"
                    }`}
                  />
                  {isActive && (
                    <span
                      aria-hidden
                      className="absolute inset-0 animate-ping rounded-full border border-[#C9A86A]/60"
                    />
                  )}
                </span>
              </button>
            );
          })}
      </div>
    </>
  );
}
