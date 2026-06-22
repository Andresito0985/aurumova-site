"use client";

// HomeHeroPremium
// ---------------------------------------------------------------------------
// Optimized, conversion-focused Home hero. Composes <ProductHeroBlock> (cream)
// with a <DeviceDashboardMockup> visual. The primary CTA is the WhatsApp
// evaluation request (the site's main conversion action); the secondary CTA
// scrolls to the in-page services overview (#servicios).
//
// Compliance: educational framing only, no guaranteed outcomes. Eligibility is
// always confirmed during a professional evaluation.

import { MessageCircle, LayoutGrid } from "lucide-react";
import { whatsappLink } from "@/content/site";
import ProductHeroBlock from "@/components/visual/ProductHeroBlock";
import DeviceDashboardMockup from "@/components/visual/DeviceDashboardMockup";
import MediaSlot from "@/components/visual/MediaSlot";
import { aurumMediaAssets } from "@/content/aurum-media-assets";

const HERO_WHATSAPP_MESSAGE =
  "Hola, quiero agendar una evaluación en Aurum Nova Wellness Clinic. Me interesa orientación sobre control metabólico, láser diodo o estética clínica.";

const journeyChips = [
  { name: "Evaluación inicial", caption: "Punto de partida" },
  { name: "Plan personalizado", caption: "Criterio clínico" },
  { name: "Seguimiento", caption: "Métricas reales" },
  { name: "Orientación", caption: "Equipo profesional" },
];

export default function HomeHeroPremium() {
  return (
    <div id="inicio" className="scroll-mt-24">
      <ProductHeroBlock
        variant="cream"
        eyebrow="Wellness Clinic · Arecibo, PR"
        headline="Bienestar clínico y estética avanzada en"
        highlight="Arecibo"
        subhead="Programas de control metabólico, láser diodo y estética clínica con seguimiento personalizado, orientación profesional y una experiencia premium desde tu primera visita."
        primaryCta={{
          label: "Agendar evaluación por WhatsApp",
          href: whatsappLink(HERO_WHATSAPP_MESSAGE),
          external: true,
          icon: <MessageCircle className="h-4 w-4" />,
        }}
        secondaryCta={{
          label: "Ver servicios",
          href: "#servicios",
          icon: <LayoutGrid className="h-4 w-4" />,
        }}
        footnote="La información es educativa y no sustituye una evaluación médica. La elegibilidad clínica se confirma únicamente mediante evaluación profesional."
        visual={
          // Premium clinic / laser-room loop when the asset is provided;
          // otherwise the editorial dashboard mockup (no downgrade, no shift).
          aurumMediaAssets.hero.clinic ? (
            <MediaSlot
              asset={aurumMediaAssets.hero.clinic}
              label="Entorno clínico Aurum Nova"
              ratio="portrait"
              variant="cream"
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          ) : (
            <DeviceDashboardMockup
              eyebrow="Aurum Nova · Wellness Clinic"
              title="Tu proceso, evaluado en clínica"
              subtitle="Infinity Health Shared Spaces · Arecibo"
              chips={journeyChips}
              footerNote="Visualización abstracta del recorrido clínico. La candidatura final se confirma durante la evaluación profesional."
            />
          )
        }
      />
    </div>
  );
}
