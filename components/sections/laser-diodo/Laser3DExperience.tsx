"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { whatsappLink } from "@/content/site";
import { laserVisualByPlacement } from "@/content/laser-visuals";
import Laser3DFallback from "./Laser3DFallback";
import LaserModelViewer from "./LaserModelViewer";
import LaserTechnologyHotspots from "./LaserTechnologyHotspots";
import {
  laser3DCopy,
  laserFeatures,
  laserModelPaths,
  type LaserFeature,
} from "./laser3dData";

interface Laser3DExperienceProps {
  modelSrc?: string;
  className?: string;
}

export default function Laser3DExperience({
  modelSrc = laserModelPaths.machine,
  className = "",
}: Laser3DExperienceProps) {
  const prefersReducedMotion = useReducedMotion();
  const [activeFeatureId, setActiveFeatureId] = useState<string>(
    laserFeatures[0]?.id ?? ""
  );
  const [modelAvailable, setModelAvailable] = useState<boolean | null>(null);
  const featurePanelRef = useRef<HTMLDivElement | null>(null);

  // Prefer the cleanest available product photo (handpiece / technology
  // close-up) over the wider treatment-room shot, which gets cropped
  // awkwardly in a tall stage.
  const fallbackVisual =
    laserVisualByPlacement.handpiece ??
    laserVisualByPlacement.technology ??
    laserVisualByPlacement.experience;

  useEffect(() => {
    if (!modelSrc) return;
    let cancelled = false;
    fetch(modelSrc, { method: "HEAD" })
      .then((res) => {
        if (!cancelled) setModelAvailable(res.ok);
      })
      .catch(() => {
        if (!cancelled) setModelAvailable(false);
      });
    return () => {
      cancelled = true;
    };
  }, [modelSrc]);

  const activeFeature: LaserFeature =
    laserFeatures.find((f) => f.id === activeFeatureId) ?? laserFeatures[0];

  const handleFeatureSelect = useCallback((id: string) => {
    setActiveFeatureId(id);
  }, []);

  const handleSecondaryCta = useCallback(() => {
    const node = featurePanelRef.current;
    if (!node) return;
    node.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "center",
    });
    const firstChip = node.querySelector<HTMLButtonElement>('[role="tab"]');
    firstChip?.focus({ preventScroll: true });
  }, [prefersReducedMotion]);

  const showViewer = modelAvailable === true;

  const baseMotion = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.6 },
      };

  return (
    <section
      aria-labelledby="laser-3d-experience-title"
      className={`relative overflow-hidden bg-[#070707] py-20 sm:py-24 lg:py-32 ${className}`}
    >
      {/* Backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 55% at 78% 18%, rgba(201,168,106,0.10), transparent 60%), radial-gradient(55% 55% at 12% 82%, rgba(56,189,248,0.04), transparent 65%), linear-gradient(180deg, #070707 0%, #0F0F0F 55%, #070707 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#C9A86A 1px, transparent 1px), linear-gradient(90deg, #C9A86A 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(80% 80% at 50% 50%, #000 28%, transparent 80%)",
        }}
      />

      <div className="container-max relative px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-16 lg:gap-y-12">
          {/* COPY (left col, row 1) */}
          <motion.div
            {...baseMotion}
            className="lg:col-span-5 lg:col-start-1 lg:row-start-1"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#C9A86A]/30 bg-black/40 px-3.5 py-1.5 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-[#C9A86A]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C9A86A]">
                {laser3DCopy.badge}
              </span>
            </span>

            <h2
              id="laser-3d-experience-title"
              className="mt-6 text-3xl font-semibold leading-[1.1] text-white sm:text-4xl lg:text-[2.5rem]"
            >
              Una experiencia láser más precisa, moderna y{" "}
              <span className="bg-gradient-to-r from-[#C9A86A] via-[#F2D987] to-[#C9A86A] bg-clip-text text-transparent">
                personalizada
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#D4CDBE]">
              {laser3DCopy.subtitle}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink(laser3DCopy.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A86A] px-7 py-3.5 text-sm font-semibold text-[#141414] shadow-[0_18px_40px_-15px_rgba(201,168,106,0.55)] transition-all duration-200 hover:bg-[#D8BE7A]"
              >
                {laser3DCopy.ctaPrimary}
                <ArrowRight className="h-4 w-4" />
              </a>
              <button
                type="button"
                onClick={handleSecondaryCta}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-7 py-3.5 text-sm font-medium text-[#E8E4DA] backdrop-blur transition-all duration-200 hover:border-[#C9A86A]/45 hover:text-[#F2D987]"
              >
                {laser3DCopy.ctaSecondary}
              </button>
            </div>
          </motion.div>

          {/* PRODUCT STAGE (right col, full row span) */}
          <motion.div
            {...baseMotion}
            transition={
              prefersReducedMotion
                ? undefined
                : { duration: 0.7, delay: 0.05 }
            }
            className="lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1"
          >
            <div className="relative h-[440px] sm:h-[520px] lg:h-full lg:min-h-[640px]">
              {showViewer ? (
                <LaserModelViewer
                  src={modelSrc}
                  alt="Equipo de láser diodo Aurum Nova en vista 3D interactiva."
                  showHotspots={false}
                  features={laserFeatures}
                  activeFeatureId={activeFeatureId}
                  onFeatureSelect={handleFeatureSelect}
                  onError={() => setModelAvailable(false)}
                />
              ) : (
                <Laser3DFallback
                  fallbackImageSrc={fallbackVisual?.src}
                  fallbackImageAlt={fallbackVisual?.alt}
                />
              )}
            </div>
          </motion.div>

          {/* ACTIVE PANEL + CHIPS (left col, row 2 — under stage on mobile) */}
          <div
            ref={featurePanelRef}
            className="lg:col-span-5 lg:col-start-1 lg:row-start-2"
          >
            <ActiveFeaturePanel
              feature={activeFeature}
              prefersReducedMotion={!!prefersReducedMotion}
            />

            <div className="mt-5">
              <LaserTechnologyHotspots
                features={laserFeatures}
                activeFeatureId={activeFeatureId}
                onSelect={handleFeatureSelect}
              />
            </div>

            <p className="mt-6 max-w-md text-xs leading-relaxed text-[#7A7367]">
              {laser3DCopy.microcopy}
            </p>
          </div>
        </div>

        {/* Editorial footnote */}
        <p className="mt-16 max-w-2xl text-sm leading-relaxed text-[#9C9588]">
          {laser3DCopy.body}
        </p>
      </div>
    </section>
  );
}

/* ---------- Active feature panel ---------- */

function ActiveFeaturePanel({
  feature,
  prefersReducedMotion,
}: {
  feature: LaserFeature;
  prefersReducedMotion: boolean;
}) {
  const Icon = feature.icon;

  return (
    <div
      id="laser-active-feature-panel"
      role="tabpanel"
      aria-live="polite"
      className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.035] via-white/[0.015] to-transparent p-5 backdrop-blur-md sm:p-6"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A86A]/55 to-transparent"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,106,0.18), transparent 70%)",
          filter: "blur(8px)",
        }}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={feature.id}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -4 }}
          transition={{ duration: 0.35 }}
          className="relative flex items-start gap-4"
        >
          <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#C9A86A]/40 bg-[#C9A86A]/10 text-[#F2D987]">
            <Icon className="h-5 w-5" strokeWidth={1.6} />
          </span>

          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#C9A86A]">
              {feature.eyebrow}
            </p>
            <h3 className="mt-1.5 text-lg font-semibold text-white sm:text-xl">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#C8C0B1]">
              {feature.description}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
