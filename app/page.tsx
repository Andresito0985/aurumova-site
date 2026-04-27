import type { Metadata } from "next";
import HomeHero from "@/components/sections/HomeHero";
import CategoryStrip from "@/components/sections/CategoryStrip";
import FeaturedPrograma from "@/components/sections/FeaturedPrograma";
import FeaturedLaser from "@/components/sections/FeaturedLaser";
import HomeWellnessGrid from "@/components/sections/HomeWellnessGrid";
import MetodoAurum from "@/components/sections/MetodoAurum";
import ResultsTracking from "@/components/sections/ResultsTracking";
import TeamSection from "@/components/sections/TeamSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import GeneralLeadForm from "@/components/forms/GeneralLeadForm";
import CTASection from "@/components/sections/CTASection";
import StatsSection from "@/components/sections/StatsSection";

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
      <HomeHero />
      <CategoryStrip />
      <StatsSection />
      <FeaturedPrograma />
      <FeaturedLaser />
      <HomeWellnessGrid />
      <MetodoAurum />
      <ResultsTracking />
      <TeamSection />
      <TestimonialsSection />
      <GeneralLeadForm />
      <CTASection />
    </>
  );
}
