import type { Metadata } from "next";
import AdvancedMetabolicHero from "@/components/metabolic-advanced/AdvancedMetabolicHero";
import BasicVsAdvancedComparator from "@/components/metabolic-advanced/BasicVsAdvancedComparator";
import PatientProfileSelector from "@/components/metabolic-advanced/PatientProfileSelector";
import ClinicalPanelsGrid from "@/components/metabolic-advanced/ClinicalPanelsGrid";
import BiomarkerMap from "@/components/metabolic-advanced/BiomarkerMap";
import EvidenceSection from "@/components/metabolic-advanced/EvidenceSection";
import ProcessTimeline from "@/components/metabolic-advanced/ProcessTimeline";
import AdvancedMetabolicFinalCTA from "@/components/metabolic-advanced/AdvancedMetabolicFinalCTA";
import FAQSection from "@/components/sections/FAQSection";
import { advancedMetabolicFaqs } from "@/content/metabolic-advanced";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title:
    "Evaluación Metabólica Avanzada | Aurum Nova Wellness Clinic",
  description:
    "Conoce una evaluación metabólica avanzada y personalizada para entender glucosa, insulina, lípidos avanzados, inflamación, hígado, riñón, tiroides y riesgo cardiometabólico según tu perfil clínico.",
  keywords: [
    "evaluación metabólica avanzada",
    "perfil metabólico",
    "resistencia a la insulina",
    "ApoB",
    "Lipoproteína(a)",
    "hsCRP",
    "hígado graso",
    "FIB-4",
    "UACR",
    "control de peso",
    "Aurum Nova Wellness Clinic",
    "Arecibo",
    "Puerto Rico",
  ],
  alternates: {
    canonical: `${siteConfig.url}/evaluacion-metabolica-avanzada`,
  },
  openGraph: {
    title:
      "Evaluación Metabólica Avanzada | Aurum Nova Wellness Clinic",
    description:
      "Más allá de un panel general: una evaluación clínica personalizada según tu perfil, objetivos y factores de riesgo.",
    url: `${siteConfig.url}/evaluacion-metabolica-avanzada`,
    siteName: siteConfig.name,
    locale: siteConfig.ogLocale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Evaluación Metabólica Avanzada | Aurum Nova Wellness Clinic",
    description:
      "Glucosa, insulina, ApoB, Lp(a), hsCRP, FIB-4, UACR, TSH — la selección depende del perfil clínico.",
  },
};

export default function EvaluacionMetabolicaAvanzadaPage() {
  return (
    <>
      {/* 1 — Hero (dark, biomarker dashboard mock) */}
      <AdvancedMetabolicHero />
      {/* 2 — Problem: basic vs advanced (cream) */}
      <BasicVsAdvancedComparator />
      {/* 3 — Patient profile selector (white, interactive) */}
      <PatientProfileSelector />
      {/* 4 — Clinical panels grid (dark) */}
      <ClinicalPanelsGrid />
      {/* 5 — Biomarker map (cream) */}
      <BiomarkerMap />
      {/* 6 — Evidence / clinical framework (white) */}
      <EvidenceSection />
      {/* 7 — Process timeline (dark) */}
      <ProcessTimeline />
      {/* 8 — FAQ accordion (cream, reuses shared component) */}
      <FAQSection
        faqs={advancedMetabolicFaqs}
        title="Preguntas frecuentes sobre la evaluación avanzada"
        subtitle="Respuestas educativas sobre por qué seleccionamos paneles según perfil, qué cubren los marcadores y qué decide el criterio clínico."
        variant="light"
      />
      {/* 9 — Final CTA + medical disclaimer (dark) */}
      <AdvancedMetabolicFinalCTA />
    </>
  );
}
