import type { Metadata } from "next";
import WellnessHombrePage from "@/components/pages/WellnessHombrePage";

export const metadata: Metadata = {
  title: "Wellness Hombre | Metabolismo y Vitalidad | Aurum Nova",
  description:
    "Programa médico de bienestar masculino en Arecibo, Puerto Rico. Grasa abdominal, energía, metabolismo, rendimiento y soporte capilar con seguimiento clínico.",
  keywords: [
    "wellness hombre", "salud masculina", "metabolismo hombre", "vitalidad masculina",
    "wellness Puerto Rico", "bienestar hombre", "wellness Arecibo",
  ],

  alternates: { canonical: "https://aurumnovawellnessclinic.com/wellness-hombre" },
  openGraph: {
    title: "Wellness Hombre | Metabolismo y Vitalidad | Aurum Nova",
    description: "Programa médico de bienestar masculino en Arecibo, Puerto Rico. Grasa abdominal, energía, metabolismo, rendimiento y soporte capilar con seguimiento clínico.",
    url: "https://aurumnovawellnessclinic.com/wellness-hombre",
    siteName: "Aurum Nova Wellness Clinic",
    locale: "es_PR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wellness Hombre | Metabolismo y Vitalidad | Aurum Nova",
    description: "Programa médico de bienestar masculino en Arecibo, Puerto Rico. Grasa abdominal, energía, metabolismo, rendimiento y soporte capilar con seguimiento clínico.",
  },
};

export default function WellnessHombre() {
  return <WellnessHombrePage />;
}
