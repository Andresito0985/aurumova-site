import type { Metadata } from "next";
import dynamic from "next/dynamic";
import PageHero from "@/components/sections/PageHero";
import GeneralLeadForm from "@/components/forms/GeneralLeadForm";
import { CheckCircle2, Clock, ClipboardList, MapPin, MessageCircle, Phone } from "lucide-react";
import { callLink, siteConfig, whatsappLink } from "@/content/site";

// Lazy-load the heavy calculator — it is well below the fold
const MetabolicProgressCalculator = dynamic(
  () => import("@/components/calculators/metabolic-progress-calculator"),
);

export const metadata: Metadata = {
  title: "Agendar Evaluación Médica | Aurum Nova Wellness Clinic",
  description:
    "Agenda tu evaluación médica inicial en Aurum Nova Wellness Clinic, Arecibo. El primer paso para saber si calificas para nuestros programas de bienestar clínico.",

  alternates: { canonical: "https://aurumnovawellnessclinic.com/agendar-evaluacion" },
  openGraph: {
    title: "Agendar Evaluación Médica | Aurum Nova Wellness Clinic",
    description: "Agenda tu evaluación médica inicial en Aurum Nova Wellness Clinic, Arecibo. El primer paso para saber si calificas para nuestros programas de bienestar clínico.",
    url: "https://aurumnovawellnessclinic.com/agendar-evaluacion",
    siteName: "Aurum Nova Wellness Clinic",
    locale: "es_PR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agendar Evaluación Médica | Aurum Nova Wellness Clinic",
    description: "Agenda tu evaluación médica inicial en Aurum Nova Wellness Clinic, Arecibo. El primer paso para saber si calificas para nuestros programas de bienestar clínico.",
  },
};

const steps = [
  {
    icon: MessageCircle,
    title: "Contáctanos por WhatsApp",
    description: "Completa el formulario o escríbenos directamente. Responderemos para confirmar disponibilidad.",
  },
  {
    icon: Clock,
    title: "Coordinamos tu cita",
    description: "Te compartimos disponibilidad y confirmamos la fecha y hora de tu evaluación.",
  },
  {
    icon: ClipboardList,
    title: "Evaluación médica completa",
    description: "El médico revisa tu historial, objetivos y perfil. Al final sabrás qué opciones tienes.",
  },
  {
    icon: CheckCircle2,
    title: "Inicio del programa si calificas",
    description: "Si eres candidato, el médico diseña tu protocolo personalizado y comenzamos.",
  },
];

export default function AgendarEvaluacionPage() {
  return (
    <>
      <PageHero
        badge="Agendar Evaluación"
        title="Tu evaluación médica"
        highlight="inicial"
        subtitle="El primer paso es una evaluación médica completa. Sin evaluación no hay protocolo; primero confirmamos qué opciones pueden ser apropiadas para tu caso."
        ctaText="Agendar por WhatsApp ahora"
        ctaMessage="Hola, quisiera agendar mi evaluación médica inicial en Aurum Nova Wellness Clinic. ¿Cuál es la disponibilidad?"
        disclaimer="La evaluación es el primer paso, no el compromiso final. Puedes decidir después de conocer tus opciones."
      />

      <section className="bg-[#FAF8F4] px-4 py-8 sm:px-6 lg:px-8">
        <div className="container-max">
          <div className="rounded-3xl border border-[#E8E4DA] bg-white p-5 shadow-sm sm:p-6">
            <div className="grid gap-3 sm:grid-cols-3">
              <a
                href={whatsappLink("Hola, quisiera agendar mi evaluación médica inicial en Aurum Nova Wellness Clinic. ¿Cuál es la disponibilidad?")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#C9A84C] px-5 py-3 text-sm font-semibold text-[#1A1A1A] transition-colors hover:bg-[#A8872E]"
              >
                <MessageCircle className="h-4 w-4" />
                Agendar por WhatsApp
              </a>
              <a
                href={callLink()}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#E8E4DA] px-5 py-3 text-sm font-semibold text-[#1A1A1A] transition-colors hover:border-[#C9A84C] hover:text-[#A8872E]"
              >
                <Phone className="h-4 w-4" />
                Llamar
              </a>
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#E8E4DA] px-5 py-3 text-sm font-semibold text-[#1A1A1A] transition-colors hover:border-[#C9A84C] hover:text-[#A8872E]"
              >
                <MapPin className="h-4 w-4" />
                Ver ubicación
              </a>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[#6B6B6B]">
              WhatsApp: {siteConfig.whatsappDisplay} · Llamadas: {siteConfig.callDisplay} solo
              llamadas
              <br />
              Ave. Barbosa 65, Arecibo Medical Plaza, Suite 201
            </p>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] text-center mb-10">
            ¿Qué esperar del proceso?
          </h2>
          <div className="space-y-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="flex items-start gap-4 bg-[#FAF8F4] border border-[#E8E4DA] rounded-2xl p-5"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#C9A84C]" />
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-px h-6 bg-[#C9A84C]/20 mt-2" />
                    )}
                  </div>
                  <div className="pt-1">
                    <p className="text-sm font-semibold text-[#1A1A1A] mb-1">{step.title}</p>
                    <p className="text-sm text-[#6B6B6B] leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <MetabolicProgressCalculator />
      <GeneralLeadForm
        heading="Agenda tu evaluación médica"
        subheading="Comparte tu información y te contactamos para coordinar tu evaluación médica inicial. Sin compromiso — la evaluación determina el plan correcto para ti."
      />
    </>
  );
}
