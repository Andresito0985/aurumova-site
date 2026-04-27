import type { Metadata } from "next";
import NutricionPage from "@/components/pages/NutricionPage";

export const metadata: Metadata = {
  title: "Nutrición Personalizada Clínica | Aurum Nova Wellness",
  description:
    "Orientación nutricional personalizada en Arecibo, Puerto Rico. Plan de un mes basado en tu perfil metabólico, laboratorios y objetivos clínicos. Integrado al plan médico.",
  keywords: [
    "nutrición clínica", "plan nutricional", "nutrición Puerto Rico", "nutrición Arecibo",
    "plan de comidas", "proteína meta", "nutrición metabólica",
  ],

  alternates: { canonical: "https://aurumnovawellnessclinic.com/nutricion" },
  openGraph: {
    title: "Nutrición Personalizada Clínica | Aurum Nova Wellness",
    description: "Orientación nutricional personalizada en Arecibo, Puerto Rico. Plan basado en tu perfil metabólico, laboratorios y objetivos clínicos. Integrado al plan médico.",
    url: "https://aurumnovawellnessclinic.com/nutricion",
    siteName: "Aurum Nova Wellness Clinic",
    locale: "es_PR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nutrición Personalizada Clínica | Aurum Nova Wellness",
    description: "Orientación nutricional personalizada en Arecibo, Puerto Rico. Plan basado en tu perfil metabólico, laboratorios y objetivos clínicos. Integrado al plan médico.",
  },
};

export default function Nutricion() {
  return <NutricionPage />;
}
