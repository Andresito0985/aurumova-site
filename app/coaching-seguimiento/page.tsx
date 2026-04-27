import type { Metadata } from "next";
import CoachingPage from "@/components/pages/CoachingPage";

export const metadata: Metadata = {
  title: "Coaching & Seguimiento Clínico | Aurum Nova Wellness",
  description:
    "Seguimiento clínico continuo, check-ins de progreso y acompañamiento profesional en Aurum Nova Wellness Clinic. El progreso se mide, no se imagina.",
  keywords: [
    "coaching bienestar", "seguimiento clínico", "seguimiento metabólico", "check-in progreso",
    "acompañamiento médico", "coaching Puerto Rico", "seguimiento Arecibo",
  ],

  alternates: { canonical: "https://aurumnovawellnessclinic.com/coaching-seguimiento" },
  openGraph: {
    title: "Coaching & Seguimiento Clínico | Aurum Nova Wellness",
    description: "Seguimiento clínico continuo, check-ins de progreso y acompañamiento profesional en Aurum Nova Wellness Clinic, Arecibo. El progreso se mide, no se imagina.",
    url: "https://aurumnovawellnessclinic.com/coaching-seguimiento",
    siteName: "Aurum Nova Wellness Clinic",
    locale: "es_PR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coaching & Seguimiento Clínico | Aurum Nova Wellness",
    description: "Seguimiento clínico continuo, check-ins de progreso y acompañamiento profesional en Aurum Nova Wellness Clinic, Arecibo. El progreso se mide, no se imagina.",
  },
};

export default function CoachingSeguimiento() {
  return <CoachingPage />;
}
