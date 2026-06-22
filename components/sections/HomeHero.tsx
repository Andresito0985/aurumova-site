"use client";

// HomeHero
// ---------------------------------------------------------------------------
// Refactored to the Apple-inspired visual system.
// Composes <ProductHeroBlock> (cream variant) with a <DeviceDashboardMockup>
// as the visual slot. The quiz remains the primary CTA; WhatsApp is the
// secondary CTA. Compliance language is preserved in the footnote.

import { ClipboardList, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/content/site";
import ProductHeroBlock from "@/components/visual/ProductHeroBlock";
import DeviceDashboardMockup from "@/components/visual/DeviceDashboardMockup";

const HERO_WHATSAPP_MESSAGE =
  "Hola, quiero agendar una evaluación en Aurum Nova Wellness Clinic. Me interesa orientación sobre control metabólico o láser diodo.";

// Process chips for the visual — never "patient data". Each chip names a
// phase of the Aurum Nova journey so the dashboard reads as a clinical
// orientation surface, not a personal record.
const journeyChips = [
  { name: "Quiz metabólico", caption: "Punto de partida" },
  { name: "Evaluación clínica", caption: "Revisión individual" },
  { name: "Seguimiento", caption: "Métricas reales" },
  { name: "Próximo paso", caption: "Orientación clínica" },
];

export default function HomeHero() {
  return (
    <ProductHeroBlock
      variant="cream"
      eyebrow="Arecibo · Wellness Clinic"
      headline="Wellness clínico con"
      highlight="seguimiento real"
      subhead="Programa metabólico supervisado, láser diodo y servicios boutique en Arecibo, Puerto Rico — con evaluación clínica, tecnología y experiencia premium."
      primaryCta={{
        label: "Hacer quiz metabólico",
        href: "/quiz-metabolico",
        icon: <ClipboardList className="w-4 h-4" />,
      }}
      secondaryCta={{
        label: "WhatsApp",
        href: whatsappLink(HERO_WHATSAPP_MESSAGE),
        external: true,
        icon: <MessageCircle className="w-4 h-4" />,
      }}
      footnote="La información es educativa y no sustituye una evaluación médica. La elegibilidad clínica se confirma únicamente mediante evaluación."
      visual={
        <DeviceDashboardMockup
          eyebrow="Aurum Nova · Wellness Clinic"
          title="Tu proceso, evaluado en clínica"
          subtitle="Infinity Health Shared Spaces · Arecibo"
          chips={journeyChips}
          footerNote="Visualización abstracta del recorrido clínico. La candidatura final se confirma durante la evaluación profesional."
        />
      }
    />
  );
}
