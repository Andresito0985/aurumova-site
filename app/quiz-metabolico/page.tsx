import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import MetabolicProfileQuiz from "@/components/quiz/MetabolicProfileQuiz";
import CTABanner from "@/components/ui/CTABanner";
import MedicalDisclaimer from "@/components/ui/MedicalDisclaimer";
import { whatsappLink } from "@/content/site";

export const metadata: Metadata = {
  title: "Quiz Metabólico | Aurum Nova Wellness Clinic",
  description:
    "Descubre tu Perfil Metabólico Inicial con un quiz orientativo de Aurum Nova Wellness Clinic. Herramienta educativa para organizar tus metas antes de una evaluación clínica.",
  keywords: [
    "quiz metabólico",
    "perfil metabólico",
    "control de peso Arecibo",
    "programa metabólico Puerto Rico",
    "evaluación metabólica",
    "Aurum Nova quiz",
  ],
  alternates: { canonical: "https://aurumnovawellnessclinic.com/quiz-metabolico" },
  openGraph: {
    title: "Quiz Metabólico | Aurum Nova Wellness Clinic",
    description:
      "Contesta preguntas simples sobre peso, apetito, hábitos, historial y objetivos. Resultado orientativo; no sustituye evaluación clínica.",
    url: "https://aurumnovawellnessclinic.com/quiz-metabolico",
    siteName: "Aurum Nova Wellness Clinic",
    locale: "es_PR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quiz Metabólico | Aurum Nova Wellness Clinic",
    description:
      "Descubre tu Perfil Metabólico Inicial en minutos con una herramienta educativa y orientativa.",
  },
};

const CTA_MESSAGE =
  "Hola, completé o quiero completar el Quiz de Perfil Metabólico de Aurum Nova. Me gustaría orientación sobre el próximo paso.";

const steps = [
  "Revisas tu resultado orientativo.",
  "Nos compartes tu información de contacto si deseas orientación.",
  "Coordinamos evaluación clínica si aplica.",
  "El proveedor determina elegibilidad y plan.",
];

export default function QuizMetabolicoPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#FAF8F4] pt-28 pb-12">
        <div
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 78% 18%, rgba(201,168,76,0.24) 0%, transparent 58%)",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />

        <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white border border-[#E8E4DA] rounded-full px-4 py-1.5 mb-5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
              <span className="text-xs font-semibold tracking-widest uppercase text-[#C9A84C]">
                Quiz Metabólico
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] text-[#1A1A1A] mb-5">
              Descubre tu Perfil Metabólico Inicial{" "}
              <span className="gold-text-gradient">en minutos</span>
            </h1>

            <p className="text-lg text-[#6B6B6B] leading-relaxed mb-8 max-w-2xl">
              Contesta unas preguntas simples sobre peso, apetito, hábitos, historial y
              objetivos. El resultado es orientativo y no sustituye una evaluación clínica.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="#quiz-metabolico"
                className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#A8872E] text-[#1A1A1A] font-semibold px-7 py-3.5 rounded-full text-base transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Comenzar quiz
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={whatsappLink(CTA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white border border-[#E8E4DA] hover:border-[#C9A84C] text-[#1A1A1A] hover:text-[#C9A84C] font-semibold px-7 py-3.5 rounded-full text-base transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                Pedir orientación
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3 max-w-3xl">
              {[
                "Educativo y orientativo",
                "No determina candidatura",
                "Requiere evaluación clínica",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-2xl border border-[#E8E4DA] bg-white/80 px-4 py-3 text-sm font-medium text-[#3D3D3D]"
                >
                  <ShieldCheck className="h-4 w-4 shrink-0 text-[#C9A84C]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <MetabolicProfileQuiz />

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
              Después del resultado
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] mt-3 mb-4">
              ¿Qué pasa después del quiz?
            </h2>
            <p className="text-base text-[#6B6B6B] leading-relaxed">
              El quiz organiza tu información inicial, pero el próximo paso depende de tu
              historial, seguridad, objetivos y criterio clínico.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step, index) => (
              <div
                key={step}
                className="rounded-2xl border border-[#E8E4DA] bg-[#FAF8F4] p-5"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#C9A84C] text-sm font-bold text-[#1A1A1A]">
                  {index + 1}
                </div>
                <p className="text-sm font-medium leading-relaxed text-[#3D3D3D]">{step}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 max-w-3xl">
            <MedicalDisclaimer
              variant="box"
              custom="Este quiz es educativo y orientativo. No diagnostica, no determina candidatura médica, no recomienda medicamentos y no sustituye una evaluación clínica presencial o telemédica con un proveedor autorizado."
            />
          </div>
        </div>
      </section>

      <CTABanner
        title="¿Quieres orientación después del quiz?"
        subtitle="Comparte tu contexto con el equipo y coordinamos el próximo paso si aplica."
        ctaText="Escribir por WhatsApp"
        ctaMessage={CTA_MESSAGE}
        variant="dark"
        secondaryHref="/programa-metabolico"
        secondaryText="Ver programa metabólico"
      />
    </>
  );
}
