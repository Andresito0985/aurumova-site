import type { Metadata } from "next";
import SkinGlowPage from "@/components/pages/SkinGlowPage";

export const metadata: Metadata = {
  title: "Skin Glow | Piel Saludable desde Adentro | Aurum Nova",
  description:
    "Protocolos de bienestar para la salud de tu piel en Arecibo, Puerto Rico. Hidratación profunda, nutrición específica y sueroterapia IV de soporte. Sin procedimientos estéticos.",
  keywords: [
    "skin glow", "piel saludable", "hidratación IV", "bienestar piel", "skin Puerto Rico",
    "glow wellness", "piel glow Arecibo", "event ready protocol",
  ],

  alternates: { canonical: "https://aurumnovawellnessclinic.com/skin-glow" },
  openGraph: {
    title: "Skin Glow | Piel Saludable desde Adentro | Aurum Nova",
    description: "Protocolos de bienestar para la salud de tu piel en Arecibo, Puerto Rico. Hidratación profunda, nutrición específica y sueroterapia IV de soporte. Sin procedimientos estéticos.",
    url: "https://aurumnovawellnessclinic.com/skin-glow",
    siteName: "Aurum Nova Wellness Clinic",
    locale: "es_PR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skin Glow | Piel Saludable desde Adentro | Aurum Nova",
    description: "Protocolos de bienestar para la salud de tu piel en Arecibo, Puerto Rico. Hidratación profunda, nutrición específica y sueroterapia IV de soporte. Sin procedimientos estéticos.",
  },
};

export default function SkinGlow() {
  return <SkinGlowPage />;
}
