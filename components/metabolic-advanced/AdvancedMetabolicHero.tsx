"use client";

// AdvancedMetabolicHero
// ---------------------------------------------------------------------------
// Proof-of-concept migration to the Apple-inspired visual system.
// This component is now a thin composition over:
//   - <ProductHeroBlock>      — section chrome, headline, CTAs
//   - <DeviceDashboardMockup> — graphite biomarker dashboard
//
// All clinical copy, the WhatsApp message, the breadcrumb, and the
// compliance footnote are preserved verbatim from the previous version.

import Link from "next/link";
import { ChevronLeft, ClipboardList } from "lucide-react";
import { whatsappLink } from "@/content/site";
import ProductHeroBlock from "@/components/visual/ProductHeroBlock";
import DeviceDashboardMockup from "@/components/visual/DeviceDashboardMockup";
import {
  ADVANCED_METABOLIC_WHATSAPP_MESSAGE,
  heroBiomarkerChips,
} from "@/content/metabolic-advanced";

export default function AdvancedMetabolicHero() {
  return (
    <ProductHeroBlock
      variant="dark"
      eyebrow="Evaluación Metabólica Avanzada"
      headline="Evaluación Metabólica"
      highlight="Avanzada"
      subhead="Más allá de un panel general: una forma más precisa de entender tu metabolismo, tu riesgo cardiometabólico y los laboratorios que realmente pueden aportar valor según tu perfil."
      supportingText="En Aurum Nova Wellness Clinic evaluamos el metabolismo desde una perspectiva clínica personalizada: glucosa, insulina, lípidos avanzados, inflamación, hígado, riñón, tiroides y marcadores específicos según tus objetivos y condiciones."
      primaryCta={{
        label: "Solicitar evaluación metabólica",
        href: whatsappLink(ADVANCED_METABOLIC_WHATSAPP_MESSAGE),
        external: true,
      }}
      secondaryCta={{
        label: "Ver paneles clínicos",
        href: "#paneles-clinicos",
      }}
      footnote="Esta página es educativa. La selección de pruebas se individualiza durante la evaluación clínica, considerando historial, síntomas, medicamentos y factores de riesgo."
      topSlot={
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-[#9A9A9A] hover:text-[#C9A84C] transition-colors"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          Inicio
        </Link>
      }
      visual={
        <div className="relative">
          <DeviceDashboardMockup
            eyebrow="Mapa de biomarcadores"
            title="Selección clínica personalizada"
            chips={heroBiomarkerChips.map((chip) => ({
              name: chip.name,
              fill: chip.fill,
            }))}
            footerNote="Visualización abstracta de marcadores que pueden formar parte de un panel clínico. La selección final depende de evaluación."
          />
          {/* Floating supporting chip — preserved from previous design. */}
          <div className="absolute -bottom-5 -left-5 hidden lg:flex items-center gap-2 rounded-full border border-[#C9A84C]/30 bg-[#1A1A1A]/90 px-4 py-2 backdrop-blur-md shadow-xl shadow-black/40">
            <ClipboardList className="h-3.5 w-3.5 text-[#E2C97E]" />
            <span className="text-[11px] font-semibold text-white">
              Selección por perfil clínico
            </span>
          </div>
        </div>
      }
    />
  );
}
