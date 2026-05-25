"use client";

// LaserCoolingComfort (refactored)
// ---------------------------------------------------------------------------
// Refactored to use the canonical <VisualFeatureSection> primitive (white,
// reverse). The previous bordered 3-card reassurance grid is replaced by
// 4 clean editorial bullets inside the primitive.
//
// Compliance posture preserved verbatim:
//   - "Apoyo de enfriamiento" — NEVER "indoloro" / "sin dolor"
//   - "Sensación puede variar"
//   - "Parámetros se ajustan por zona, piel, densidad y tolerancia"
//   - No guaranteed comfort, no painless claims

import Image from "next/image";
import { laserVisualByPlacement } from "@/content/laser-visuals";
import VisualFeatureSection from "@/components/visual/VisualFeatureSection";

const comfortPillars = [
  "Apoyo de enfriamiento por contacto durante la sesión",
  "Parámetros ajustables por zona, fototipo y densidad del vello",
  "Orientación antes y después de cada sesión",
  "Sensación puede variar — la tolerancia es individual",
];

/**
 * Premium framed visual for the comfort section. Uses the approved
 * "experience" image (laser-machine-02-clean.png) — falls back to the
 * handpiece if needed.
 */
function ComfortVisual() {
  const visual =
    laserVisualByPlacement.experience ?? laserVisualByPlacement.handpiece;
  if (!visual) {
    return (
      <div
        aria-hidden="true"
        className="aspect-[4/5] w-full rounded-3xl bg-gradient-to-br from-[#FAF8F4] via-white to-[#F0EDE6] ring-1 ring-[#E8E4DA]"
      />
    );
  }
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-[#FAF8F4] ring-1 ring-[#E8E4DA] shadow-[0_24px_60px_-24px_rgba(0,0,0,0.18)]">
      <Image
        src={visual.src}
        alt={visual.alt}
        fill
        sizes="(min-width: 1024px) 480px, 100vw"
        className="object-cover"
        style={{ objectPosition: visual.objectPosition ?? "center center" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/35 via-transparent to-transparent"
      />
      <span
        aria-hidden="true"
        className="absolute inset-3 rounded-2xl ring-1 ring-white/15"
      />
      <div className="absolute bottom-5 left-5 right-5">
        <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#E2C97E] drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          Experiencia clínica
        </p>
        <p className="mt-1 text-sm font-semibold leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
          Sala privada · equipo guiado
        </p>
      </div>
    </div>
  );
}

export default function LaserCoolingComfort() {
  return (
    <VisualFeatureSection
      variant="white"
      reverse
      eyebrow="Comodidad clínica"
      headline="Más comodidad no significa"
      highlight="menos tecnología"
      body="La sensación durante la sesión puede variar según la zona, la densidad del vello, la sensibilidad individual y los parámetros configurados. El apoyo de enfriamiento ayuda a que la experiencia sea más tolerable."
      supportingText="No prometemos una experiencia sin sensación. Trabajamos con precisión, cuidado clínico y seguimiento por zona — y ajustamos cuando es necesario."
      bullets={comfortPillars}
      footnote="La sensibilidad varía entre pacientes y zonas tratadas. El número de sesiones, la frecuencia y la experiencia individual dependen de la evaluación clínica."
      visual={<ComfortVisual />}
    />
  );
}
