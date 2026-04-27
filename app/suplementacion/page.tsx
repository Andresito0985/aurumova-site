import type { Metadata } from "next";
import SuplementacionPage from "@/components/pages/SuplementacionPage";

export const metadata: Metadata = {
  title: "Suplementación & Wellness Support | Aurum Nova",
  description:
    "Suplementos clínicos de calidad como apoyo al programa de bienestar en Aurum Nova Wellness Clinic. Recomendados por médico según perfil individual.",
  keywords: [
    "suplementación", "suplementos bienestar", "proteína suplemento", "electrolitos",
    "magnesio", "fibra", "colágeno", "suplementos Puerto Rico",
  ],

  alternates: { canonical: "https://aurumnovawellnessclinic.com/suplementacion" },
  openGraph: {
    title: "Suplementación & Wellness Support | Aurum Nova",
    description: "Suplementos clínicos de calidad como apoyo al programa de bienestar en Aurum Nova Wellness Clinic, Arecibo. Recomendados por médico según perfil individual.",
    url: "https://aurumnovawellnessclinic.com/suplementacion",
    siteName: "Aurum Nova Wellness Clinic",
    locale: "es_PR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suplementación & Wellness Support | Aurum Nova",
    description: "Suplementos clínicos de calidad como apoyo al programa de bienestar en Aurum Nova Wellness Clinic, Arecibo. Recomendados por médico según perfil individual.",
  },
};

export default function Suplementacion() {
  return <SuplementacionPage />;
}
