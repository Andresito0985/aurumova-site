import type { Metadata } from "next";
import HomeHero from "@/components/sections/HomeHero";
import FeaturedPrograma from "@/components/sections/FeaturedPrograma";
import HomeLaserFeature from "@/components/sections/HomeLaserFeature";
import HomeBoutiqueWellness from "@/components/sections/HomeBoutiqueWellness";
import HomeAdvancedEvaluation from "@/components/sections/HomeAdvancedEvaluation";
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

/**
 * Home — Apple-inspired Aurum Nova visual system (Phase 3).
 *
 * Six sections, each carrying one main idea, presented at section-scale
 * with the cream / graphite / champagne-gold rhythm:
 *
 *   1. HomeHero            — cream "what is Aurum Nova" hero
 *   2. FeaturedPrograma    — dark Programa Metabólico product feature
 *   3. HomeLaserFeature    — dark Láser Diodo technology feature
 *   4. HomeBoutiqueWellness — cream Brows + Faciales editorial split
 *   5. HomeAdvancedEvaluation — dark Evaluación Metabólica Avanzada feature
 *   6. CTASection          — dark final conversion surface
 *
 * Sections removed from Home: HomeJourney, MetodoYMetricas, HomeWellnessGrid,
 * HomeQuizCTA, HomeCalculatorBridge, TestimonialsSection, HomeFAQPreview.
 * Their files are kept in the repo so they remain available for future use.
 */
export default function HomePage() {
  return (
    <>
      <HomeHero />
      <FeaturedPrograma />
      <HomeLaserFeature />
      <HomeBoutiqueWellness />
      <HomeAdvancedEvaluation />
      <CTASection />
    </>
  );
}
