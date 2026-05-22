import type { Metadata } from "next";
import HomeHero from "@/components/sections/HomeHero";
import HomeJourney from "@/components/sections/HomeJourney";
import FeaturedPrograma from "@/components/sections/FeaturedPrograma";
import HomeQuizCTA from "@/components/sections/HomeQuizCTA";
import HomeCalculatorBridge from "@/components/sections/HomeCalculatorBridge";
import HomeWellnessGrid from "@/components/sections/HomeWellnessGrid";
import MetodoYMetricas from "@/components/sections/MetodoYMetricas";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import HomeFAQPreview from "@/components/sections/HomeFAQPreview";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Aurum Nova Wellness Clinic | Medicina Metabólica de Precisión en Arecibo",
  description:
    "Clínica wellness en Arecibo, Puerto Rico. Programa metabólico integral, depilación láser diodo, sueroterapia NAD+, inyectables metabólicos y seguimiento clínico personalizado.",
  keywords: [
    "clínica wellness Arecibo",
    "control de peso Arecibo",
    "programa metabólico Arecibo",
    "depilación láser diodo Arecibo",
    "láser diodo Puerto Rico",
    "sueroterapia NAD Puerto Rico",
    "sueroterapia Arecibo",
    "inyectables metabólicos Arecibo",
    "wellness clinic Puerto Rico",
    "control metabólico Puerto Rico",
  ],
  alternates: { canonical: "https://aurumnovawellnessclinic.com" },
  openGraph: {
    title: "Aurum Nova Wellness Clinic | Medicina Metabólica de Precisión en Arecibo",
    description:
      "Clínica wellness en Arecibo, Puerto Rico. Programa metabólico integral, depilación láser diodo, sueroterapia NAD+, inyectables metabólicos y seguimiento clínico personalizado.",
    url: "https://aurumnovawellnessclinic.com",
    siteName: "Aurum Nova Wellness Clinic",
    locale: "es_PR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurum Nova Wellness Clinic | Medicina Metabólica de Precisión en Arecibo",
    description:
      "Clínica wellness en Arecibo, Puerto Rico. Programa metabólico integral, depilación láser diodo, sueroterapia NAD+, inyectables metabólicos y seguimiento clínico personalizado.",
  },
};

export default function HomePage() {
  return (
    <>
      {/* 1 — Hero (cream) */}
      <HomeHero />
      {/* 2 — Primary commercial funnel: Programa Metabólico (white) */}
      <FeaturedPrograma />
      {/* 3 — Visitor journey: 3 pasos (white) */}
      <HomeJourney />
      {/* 4 — Método clínico + métricas (dark) — merged section, replaces MetodoAurum + ResultsTracking */}
      <MetodoYMetricas />
      {/* 5 — Service ecosystem with Láser as secondary feature (white) */}
      <HomeWellnessGrid />
      {/* 6 — Quiz entry (dark) */}
      <HomeQuizCTA />
      {/* 7 — Calculator bridge (cream) */}
      <HomeCalculatorBridge />
      {/* 8 — Launch-safe experience section, no patient testimonials */}
      <TestimonialsSection />
      {/* 9 — FAQ preview */}
      <HomeFAQPreview />
      {/* 10 — Final dark CTA */}
      <CTASection />
    </>
  );
}
