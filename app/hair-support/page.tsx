import type { Metadata } from "next";
import HairSupportPage from "@/components/pages/HairSupportPage";

export const metadata: Metadata = {
  title: "Hair Support | Salud Capilar Médica | Aurum Nova Wellness",
  description:
    "Evaluación y soporte nutricional para la caída de cabello en Arecibo, Puerto Rico. Identificación de deficiencias, soporte durante pérdida de peso y derivación especializada.",
  keywords: [
    "hair support", "caída de cabello", "salud capilar", "efluvio telogénico",
    "caída por pérdida de peso", "biotina", "cabello Puerto Rico", "hair support Arecibo",
  ],

  alternates: { canonical: "https://aurumnovawellnessclinic.com/hair-support" },
  openGraph: {
    title: "Hair Support | Salud Capilar Médica | Aurum Nova Wellness",
    description: "Evaluación y soporte nutricional para la caída de cabello en Arecibo, Puerto Rico. Identificación de deficiencias, soporte durante pérdida de peso y derivación especializada.",
    url: "https://aurumnovawellnessclinic.com/hair-support",
    siteName: "Aurum Nova Wellness Clinic",
    locale: "es_PR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hair Support | Salud Capilar Médica | Aurum Nova Wellness",
    description: "Evaluación y soporte nutricional para la caída de cabello en Arecibo, Puerto Rico. Identificación de deficiencias, soporte durante pérdida de peso y derivación especializada.",
  },
};

export default function HairSupport() {
  return <HairSupportPage />;
}
