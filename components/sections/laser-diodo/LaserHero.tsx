"use client";

// LaserHero
// ---------------------------------------------------------------------------
// Refactored to the Apple-inspired visual system. Composes <ProductHeroBlock>
// (dark) with an editorial machine visual in the right column on desktop.
//
// The dramatic full-bleed background pattern from the previous version is
// retired in favor of the system's hero composition — the dramatic
// equipment moment moves into <LaserMachineShowcase> directly below, where
// the photograph can be presented at full scale.
//
// Compliance preserved:
//   - "Reducción progresiva" — never "permanente" / "elimina"
//   - "Apoyo de enfriamiento" — never "indoloro" / "sin dolor"
//   - "Resultados pueden variar" — preserved in footnote
//   - Requires per-zone evaluation

import Link from "next/link";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import { whatsappLink } from "@/content/site";
import ProductHeroBlock from "@/components/visual/ProductHeroBlock";
import {
  laserVisualByPlacement,
  type LaserVisual,
} from "@/content/laser-visuals";

const CTA_WHATSAPP_MESSAGE =
  "Hola, me interesa agendar una evaluación para Láser Diodo High-Tech en Aurum Nova. Me gustaría conocer los planes disponibles.";

/**
 * Editorial dark frame for the hero visual slot. Renders the approved
 * "experience" machine photograph (laser-machine-02-clean.png) inside a
 * graphite container with a soft gold radial bloom and a small caption
 * strip.
 */
function LaserHeroVisual({ visual }: { visual?: LaserVisual }) {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#161616] via-[#121212] to-[#0A0A0A] ring-1 ring-[#C9A84C]/20 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
      {visual && (
        <Image
          src={visual.src}
          alt={visual.alt}
          fill
          sizes="(min-width: 1024px) 42vw, 100vw"
          className="object-cover"
          priority
          style={{ objectPosition: visual.objectPosition ?? "center center" }}
        />
      )}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.4) 100%), radial-gradient(ellipse at 72% 18%, rgba(201,168,76,0.20) 0%, transparent 55%)",
        }}
      />
      <span
        aria-hidden="true"
        className="absolute inset-3 rounded-2xl ring-1 ring-[#C9A84C]/22"
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

export default function LaserHero() {
  const heroVisual =
    laserVisualByPlacement.experience ??
    laserVisualByPlacement.technology ??
    laserVisualByPlacement.hero;

  return (
    <ProductHeroBlock
      variant="dark"
      eyebrow="Láser Diodo High-Tech"
      headline="Reducción de vello con"
      highlight="tecnología diodo"
      subhead="Una experiencia láser privada y guiada para trabajar la reducción progresiva del vello por zona, con evaluación de piel, densidad de vello y plan de seguimiento."
      supportingText="El diodo nos ofrece un balance clínico entre precisión, apoyo de enfriamiento y personalización por zona — sin atajos ni promesas absolutas."
      primaryCta={{
        label: "Agendar evaluación",
        href: whatsappLink(CTA_WHATSAPP_MESSAGE),
        external: true,
      }}
      secondaryCta={{
        label: "Ver planes disponibles",
        href: "#planes-laser",
      }}
      footnote="Los resultados varían según zona, tipo de piel, características del vello y adherencia al plan. Se requiere evaluación previa por zona. No prometemos eliminación permanente ni una experiencia sin sensación."
      topSlot={
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-[#9A9A9A] hover:text-[#C9A84C] transition-colors"
        >
          <ChevronLeft className="h-3.5 w-3.5" />
          Inicio
        </Link>
      }
      visual={<LaserHeroVisual visual={heroVisual} />}
    />
  );
}
