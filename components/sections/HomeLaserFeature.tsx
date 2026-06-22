"use client";

// HomeLaserFeature
// ---------------------------------------------------------------------------
// New Home surface that positions Láser Diodo as the clinic's technology
// service. Composes <VisualFeatureSection> (dark) with an approved laser
// machine photograph (laser-machine-02-clean.png, listed as "experience"
// placement in content/laser-visuals.ts). No "review-needed" assets are
// used here.
//
// Compliance posture:
//   - "Reducción progresiva" — never "permanent" or "elimina"
//   - "Apoyo de enfriamiento" — never "indoloro" / "painless"
//   - Outcome framing is orientative ("puede ayudar", "según evaluación")

import Image from "next/image";
import VisualFeatureSection from "@/components/visual/VisualFeatureSection";
import MediaSlot from "@/components/visual/MediaSlot";
import { aurumMediaAssets } from "@/content/aurum-media-assets";

const technologyPillars = [
  "Tecnología diodo orientada por zona y tipo de piel",
  "Apoyo de enfriamiento por contacto para una experiencia cómoda",
  "Plan personalizado según vello, piel y objetivo",
  "Evaluación clínica antes de comenzar cualquier zona",
];

/**
 * Full-bleed editorial visual for the Home laser block. Uses an approved
 * laser machine photograph framed in a graphite container with a soft gold
 * radial bloom and a thin inset hairline.
 */
function LaserMachineVisual() {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#161616] via-[#121212] to-[#0A0A0A] ring-1 ring-[#C9A84C]/20 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.55)]">
      <Image
        src="/images/laser/machine/laser-machine-02-clean.webp"
        alt="Equipo de láser diodo en una sala de tratamiento cálida y moderna en Aurum Nova."
        fill
        sizes="(min-width: 1024px) 40vw, 100vw"
        className="object-cover"
        priority={false}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.35) 100%), radial-gradient(ellipse at 72% 18%, rgba(201,168,76,0.18) 0%, transparent 55%)",
        }}
      />
      <span
        aria-hidden="true"
        className="absolute inset-3 rounded-2xl ring-1 ring-[#C9A84C]/20"
      />
      <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3">
        <span
          aria-hidden="true"
          className="block h-px w-8 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent"
        />
        <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#E2C97E]">
          Aurum Nova · Láser Diodo
        </p>
      </div>
    </div>
  );
}

export default function HomeLaserFeature() {
  return (
    <VisualFeatureSection
      variant="dark"
      reverse
      eyebrow="Tecnología clínica"
      headline="Láser Diodo"
      highlight="High-Tech"
      body="Reducción progresiva del vello con tecnología diodo, evaluación por zona y una experiencia clínica privada y guiada."
      supportingText="Cada plan se construye sobre tu tipo de piel, densidad de vello, sensibilidad y objetivos. Los resultados pueden variar y no se garantiza eliminación permanente."
      bullets={technologyPillars}
      cta={{
        label: "Ver Láser Diodo",
        href: "/laser-diodo",
      }}
      footnote="Requiere evaluación por zona. La frecuencia y el mantenimiento se orientan según la respuesta individual."
      visual={
        // Diode treatment loop/still when provided; otherwise the optimized
        // machine WebP frame (no downgrade, no layout shift).
        aurumMediaAssets.laser.treatment ? (
          <MediaSlot
            asset={aurumMediaAssets.laser.treatment}
            label="Láser diodo · tecnología clínica"
            ratio="portrait"
            variant="dark"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        ) : (
          <LaserMachineVisual />
        )
      }
    />
  );
}
