import type { Metadata } from "next";
import HomeHeroPremium from "@/components/sections/HomeHeroPremium";
import HomeTrustStrip from "@/components/sections/HomeTrustStrip";
import HomeServicesOverview from "@/components/sections/HomeServicesOverview";
import FeaturedPrograma from "@/components/sections/FeaturedPrograma";
import HomeLaserFeature from "@/components/sections/HomeLaserFeature";
import MetodoAurum from "@/components/sections/MetodoAurum";
import HomePricingPreview from "@/components/sections/HomePricingPreview";
import HomeWhyAurum from "@/components/sections/HomeWhyAurum";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TeamSection from "@/components/sections/TeamSection";
import HomeLocationSection from "@/components/sections/HomeLocationSection";
import HomeFAQPreview from "@/components/sections/HomeFAQPreview";
import CTASection from "@/components/sections/CTASection";
import MedicalDisclaimer from "@/components/ui/MedicalDisclaimer";

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
 * Home — premium, conversion-focused homepage for Aurum Nova Wellness Clinic.
 *
 * Primary conversion action: WhatsApp evaluation request (wa.me/19396410504),
 * reinforced by the global Header CTA and the global mobile sticky CTA.
 *
 * Section order (required anchors in parentheses):
 *   Sticky nav            — global <Header> (app/layout.tsx)
 *   1. HomeHeroPremium        (#inicio)   — hero + WhatsApp CTA
 *   2. HomeTrustStrip                     — medical-supervision trust strip
 *   3. HomeServicesOverview   (#servicios)— five core service lines
 *   4. FeaturedPrograma                   — metabolic / weight-control feature
 *   5. HomeLaserFeature                   — láser diodo feature
 *   6. MetodoAurum            (#metodo)   — patient journey / método
 *   7. HomePricingPreview     (#precios)  — real "desde" pricing anchors
 *   8. HomeWhyAurum                       — why-choose comparison table
 *   9. TestimonialsSection                — patient-experience proof (no fake quotes)
 *  10. TeamSection                        — clinical team / environment
 *  11. HomeLocationSection               — location / Google Maps
 *  12. HomeFAQPreview                     — FAQ
 *  13. MedicalDisclaimer                  — medical disclaimer
 *  14. CTASection           (#contacto)   — final WhatsApp conversion surface
 *   Mobile sticky CTA     — global <StickyMobileCTA> (app/layout.tsx)
 */
export default function HomePage() {
  return (
    <>
      <HomeHeroPremium />
      <HomeTrustStrip />
      <HomeServicesOverview />
      <FeaturedPrograma />
      <HomeLaserFeature />
      <div id="metodo" className="scroll-mt-24">
        <MetodoAurum />
      </div>
      <HomePricingPreview />
      <HomeWhyAurum />
      <TestimonialsSection />
      <TeamSection />
      <HomeLocationSection />
      <HomeFAQPreview />
      <section className="section-padding bg-white">
        <div className="container-max max-w-3xl">
          <MedicalDisclaimer variant="box" includeCompounding />
        </div>
      </section>
      <CTASection />
    </>
  );
}
