import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import GroupedFAQAccordion from "@/components/sections/GroupedFAQAccordion";
import MedicalDisclaimer from "@/components/ui/MedicalDisclaimer";
import { whatsappLink } from "@/content/site";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes | Aurum Nova Wellness Clinic",
  description:
    "Respuestas claras sobre elegibilidad, programas, terapias, precios y seguridad en Aurum Nova Wellness Clinic en Arecibo, Puerto Rico.",

  alternates: { canonical: "https://aurumnovawellnessclinic.com/preguntas-frecuentes" },
  openGraph: {
    title: "Preguntas Frecuentes | Aurum Nova Wellness Clinic",
    description: "Respuestas claras sobre elegibilidad, programas, terapias, precios y seguridad en Aurum Nova Wellness Clinic en Arecibo, Puerto Rico.",
    url: "https://aurumnovawellnessclinic.com/preguntas-frecuentes",
    siteName: "Aurum Nova Wellness Clinic",
    locale: "es_PR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Preguntas Frecuentes | Aurum Nova Wellness Clinic",
    description: "Respuestas claras sobre elegibilidad, programas, terapias, precios y seguridad en Aurum Nova Wellness Clinic en Arecibo, Puerto Rico.",
  },
};

export default function PreguntasFrecuentesPage() {
  return (
    <>
      <PageHero
        badge="FAQ"
        title="Preguntas"
        highlight="frecuentes"
        subtitle="Respuestas claras y honestas sobre elegibilidad, terapias, precios y seguridad. Si tu pregunta no aparece aquí, escríbenos directamente."
        ctaText="Preguntar por WhatsApp"
        ctaMessage="Hola, tengo algunas preguntas sobre los programas de Aurum Nova que no encontré en las FAQ."
      />

      {/* Main FAQ section */}
      <section className="section-padding bg-[#FAF8F4]">
        <div className="container-max">
          <div className="max-w-3xl mx-auto">
            <GroupedFAQAccordion />
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container-max max-w-2xl">
          <MedicalDisclaimer variant="box" includeCompounding />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#1A1A1A]">
        <div className="container-max max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-3">
            ¿No encontraste tu respuesta?
          </h2>
          <p className="text-sm text-[#9A9A9A] leading-relaxed mb-8">
            Escríbenos por WhatsApp y el equipo responde tu pregunta directamente. También puedes
            revisar nuestras páginas de seguridad y enfoque clínico.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={whatsappLink("Hola, tengo una pregunta sobre los programas de Aurum Nova que no encontré en las preguntas frecuentes.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#A8872E] text-[#1A1A1A] font-semibold px-7 py-3.5 rounded-full text-sm transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4" />
              Preguntar por WhatsApp
            </a>
            <Link
              href="/seguridad-elegibilidad"
              className="inline-flex items-center justify-center gap-2 border border-[#3D3D3D] hover:border-[#C9A84C]/40 text-white hover:text-[#C9A84C] font-semibold px-7 py-3.5 rounded-full text-sm transition-all duration-200"
            >
              Seguridad y elegibilidad
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
