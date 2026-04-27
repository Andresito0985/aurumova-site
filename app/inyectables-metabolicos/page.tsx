import type { Metadata } from "next";
import InyectablesPage from "@/components/pages/InyectablesPage";

export const metadata: Metadata = {
  title: "Inyectables Metabólicos de Apoyo | Aurum Nova Wellness",
  description:
    "L-carnitina, Lipo Mino MIC y MIC como apoyo metabólico complementario. Requieren evaluación médica. Solo disponibles para pacientes que califiquen en Aurum Nova.",
  keywords: [
    "inyectables metabólicos", "L-carnitina", "Lipo Mino MIC", "MIC", "inyectables Puerto Rico",
    "apoyo metabólico", "lipotrópicos", "inyectables Arecibo",
  ],

  alternates: { canonical: "https://aurumnovawellnessclinic.com/inyectables-metabolicos" },
  openGraph: {
    title: "Inyectables Metabólicos de Apoyo | Aurum Nova Wellness",
    description: "L-carnitina, Lipo Mino MIC y MIC como apoyo metabólico complementario. Requieren evaluación médica. Solo disponibles para pacientes que califiquen en Aurum Nova, Arecibo.",
    url: "https://aurumnovawellnessclinic.com/inyectables-metabolicos",
    siteName: "Aurum Nova Wellness Clinic",
    locale: "es_PR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inyectables Metabólicos de Apoyo | Aurum Nova Wellness",
    description: "L-carnitina, Lipo Mino MIC y MIC como apoyo metabólico complementario. Requieren evaluación médica. Solo disponibles para pacientes que califiquen en Aurum Nova, Arecibo.",
  },
};

export default function InyectablesMetabolicos() {
  return <InyectablesPage />;
}
