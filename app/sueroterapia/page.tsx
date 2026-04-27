import type { Metadata } from "next";
import SueroterapiaPage from "@/components/pages/SueroterapiaPage";

export const metadata: Metadata = {
  title: "Sueroterapia NAD+ y Myers | Terapia IV | Aurum Nova",
  description:
    "Sueroterapia médica intravenosa en Arecibo, Puerto Rico. NAD+ y Cóctel de Myers administrados bajo supervisión médica. Requiere evaluación clínica previa.",
  keywords: [
    "sueroterapia", "terapia IV", "NAD+", "Myers Cocktail", "sueroterapia Puerto Rico",
    "vitaminas IV", "sueroterapia Arecibo", "infusión IV", "bienestar IV",
  ],

  alternates: { canonical: "https://aurumnovawellnessclinic.com/sueroterapia" },
  openGraph: {
    title: "Sueroterapia NAD+ y Myers | Terapia IV | Aurum Nova",
    description: "Sueroterapia médica intravenosa en Arecibo, Puerto Rico. NAD+ y Cóctel de Myers administrados bajo supervisión médica. Requiere evaluación clínica previa.",
    url: "https://aurumnovawellnessclinic.com/sueroterapia",
    siteName: "Aurum Nova Wellness Clinic",
    locale: "es_PR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sueroterapia NAD+ y Myers | Terapia IV | Aurum Nova",
    description: "Sueroterapia médica intravenosa en Arecibo, Puerto Rico. NAD+ y Cóctel de Myers administrados bajo supervisión médica. Requiere evaluación clínica previa.",
  },
};

export default function Sueroterapia() {
  return <SueroterapiaPage />;
}
