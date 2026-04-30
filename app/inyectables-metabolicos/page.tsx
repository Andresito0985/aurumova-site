import type { Metadata } from "next";
import InyectablesPage from "@/components/pages/InyectablesPage";

const description =
  "Apoyo wellness inyectable complementario al programa metabólico en Aurum Nova Wellness Clinic, Arecibo. Sujeto a evaluación clínica, historial y criterio profesional. No todos los pacientes cualifican.";

export const metadata: Metadata = {
  title: "Inyectables Metabólicos de Apoyo | Aurum Nova Wellness",
  description,
  keywords: [
    "inyectables metabólicos",
    "apoyo wellness inyectable",
    "inyectables Puerto Rico",
    "apoyo metabólico",
    "inyectables Arecibo",
    "wellness clinic Arecibo",
  ],

  alternates: { canonical: "https://aurumnovawellnessclinic.com/inyectables-metabolicos" },
  openGraph: {
    title: "Inyectables Metabólicos de Apoyo | Aurum Nova Wellness",
    description,
    url: "https://aurumnovawellnessclinic.com/inyectables-metabolicos",
    siteName: "Aurum Nova Wellness Clinic",
    locale: "es_PR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inyectables Metabólicos de Apoyo | Aurum Nova Wellness",
    description,
  },
};

export default function InyectablesMetabolicos() {
  return <InyectablesPage />;
}
