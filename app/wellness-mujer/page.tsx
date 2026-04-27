import type { Metadata } from "next";
import WellnessMujerPage from "@/components/pages/WellnessMujerPage";

export const metadata: Metadata = {
  title: "Wellness Mujer | Salud Femenina Integral | Aurum Nova",
  description:
    "Programa médico de bienestar femenino en Arecibo, Puerto Rico. Peso, energía, metabolismo, piel, cabello y salud hormonal con seguimiento clínico personalizado.",
  keywords: [
    "wellness mujer", "salud femenina", "bienestar hormonal", "wellness Puerto Rico",
    "salud integral mujer", "energía femenina", "wellness Arecibo",
  ],

  alternates: { canonical: "https://aurumnovawellnessclinic.com/wellness-mujer" },
  openGraph: {
    title: "Wellness Mujer | Salud Femenina Integral | Aurum Nova",
    description: "Programa médico de bienestar femenino en Arecibo, Puerto Rico. Peso, energía, metabolismo, piel, cabello y salud hormonal con seguimiento clínico personalizado.",
    url: "https://aurumnovawellnessclinic.com/wellness-mujer",
    siteName: "Aurum Nova Wellness Clinic",
    locale: "es_PR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wellness Mujer | Salud Femenina Integral | Aurum Nova",
    description: "Programa médico de bienestar femenino en Arecibo, Puerto Rico. Peso, energía, metabolismo, piel, cabello y salud hormonal con seguimiento clínico personalizado.",
  },
};

export default function WellnessMujer() {
  return <WellnessMujerPage />;
}
