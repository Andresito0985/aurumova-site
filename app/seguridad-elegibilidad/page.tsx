import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CTABanner from "@/components/ui/CTABanner";
import MedicalDisclaimer from "@/components/ui/MedicalDisclaimer";
import { ShieldCheck, AlertCircle, CheckCircle2, XCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguridad y Elegibilidad | Aurum Nova Wellness Clinic",
  description:
    "Cómo Aurum Nova evalúa la elegibilidad y garantiza la seguridad de cada paciente. Contraindicaciones, proceso de evaluación y protocolo de seguridad clínica.",

  alternates: { canonical: "https://aurumnovawellnessclinic.com/seguridad-elegibilidad" },
  openGraph: {
    title: "Seguridad y Elegibilidad | Aurum Nova Wellness Clinic",
    description: "Cómo Aurum Nova evalúa la elegibilidad y garantiza la seguridad de cada paciente. Contraindicaciones, proceso de evaluación y protocolo de seguridad clínica.",
    url: "https://aurumnovawellnessclinic.com/seguridad-elegibilidad",
    siteName: "Aurum Nova Wellness Clinic",
    locale: "es_PR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seguridad y Elegibilidad | Aurum Nova Wellness Clinic",
    description: "Cómo Aurum Nova evalúa la elegibilidad y garantiza la seguridad de cada paciente. Contraindicaciones, proceso de evaluación y protocolo de seguridad clínica.",
  },
};

const safetyProtocol = [
  "Revisión completa de historial médico",
  "Análisis de medicamentos actuales e interacciones",
  "Evaluación de contraindicaciones absolutas y relativas",
  "Análisis de laboratorio cuando aplica",
  "Consentimiento informado antes de iniciar",
  "Monitoreo durante terapias que lo requieren",
  "Seguimiento clínico activo durante el programa",
];

const generalContraindications = [
  "Embarazo o lactancia activa",
  "Insuficiencia renal o hepática grave",
  "Enfermedades cardíacas no controladas",
  "Historia de pancreatitis (para ciertos programas)",
  "Alergias a componentes de las terapias",
  "Trastornos de alimentación activos",
  "Condiciones psiquiátricas no controladas",
];

export default function SeguridadElegibilidadPage() {
  return (
    <>
      <PageHero
        badge="Seguridad y Elegibilidad"
        title="Tu seguridad es"
        highlight="el protocolo"
        subtitle="La evaluación de elegibilidad no es un trámite — es una protección clínica real. Explicamos cómo determinamos si un paciente es candidato y qué factores de seguridad revisamos."
        ctaText="Comenzar mi evaluación"
        ctaMessage="Hola, quisiera comenzar mi evaluación de elegibilidad en Aurum Nova Wellness Clinic."
        disclaimer="No todos los pacientes son candidatos. La evaluación médica determina la elegibilidad."
      />

      {/* Who qualifies */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-4 text-center">
              ¿Quién puede calificar?
            </h2>
            <p className="text-base text-[#6B6B6B] leading-relaxed text-center mb-10">
              No existe una respuesta universal. La elegibilidad se determina individualmente en cada
              evaluación. Estos son los factores generales que el médico revisa.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-[#EFF5EF] border border-[#C8E0C8] rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-[#6B8F6B]" />
                  <h3 className="text-sm font-bold text-[#3D5C3D]">Factores que favorecen la elegibilidad</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    "Adultos mayores de 18 años",
                    "Sin contraindicaciones médicas absolutas",
                    "Historial médico estable y documentado",
                    "Medicamentos actuales revisados y compatibles",
                    "Objetivos de salud realistas y alcanzables",
                    "Disposición para el seguimiento clínico",
                  ].map((item) => (
                    <li key={item} className="text-sm text-[#3D5C3D] flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-[#6B8F6B] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#FAF0EA] border border-[#E8C8B0] rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <XCircle className="w-5 h-5 text-[#A07060]" />
                  <h3 className="text-sm font-bold text-[#6B3D2D]">Contraindicaciones generales</h3>
                </div>
                <ul className="space-y-2">
                  {generalContraindications.map((item) => (
                    <li key={item} className="text-sm text-[#6B3D2D] flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-[#A07060] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-[#9A7060] mt-3 leading-relaxed">
                  Esta lista no es exhaustiva. El médico determina contraindicaciones específicas según cada caso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety protocol */}
      <section className="section-padding bg-[#FAF8F4]">
        <div className="container-max max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-[#C9A84C]" />
            </div>
            <h2 className="text-xl font-semibold text-[#1A1A1A]">
              Protocolo de seguridad clínica
            </h2>
          </div>
          <ul className="space-y-3">
            {safetyProtocol.map((item, i) => (
              <li
                key={item}
                className="flex items-center gap-3 bg-white border border-[#E8E4DA] rounded-xl px-4 py-3 text-sm text-[#3D3D3D]"
              >
                <span className="text-xs font-bold text-[#C9A84C] w-5 shrink-0 text-center">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container-max max-w-2xl">
          <div className="flex items-start gap-3 bg-[#FAF8F4] border border-[#E8E4DA] rounded-xl p-5">
            <AlertCircle className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
            <div className="space-y-2 text-sm text-[#6B6B6B] leading-relaxed">
              <p>
                <strong className="text-[#1A1A1A]">Aviso importante sobre elegibilidad:</strong>{" "}
                Aurum Nova se reserva el derecho de no ofrecer programas a pacientes que, según
                la evaluación médica, no sean candidatos apropiados. La seguridad del paciente
                siempre tiene prioridad sobre las consideraciones comerciales.
              </p>
              <p>
                Si tienes condiciones médicas preexistentes, te recomendamos comunicarlo
                durante el primer contacto para que el equipo pueda orientarte adecuadamente
                antes de agendar tu evaluación.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IV therapy safety */}
      <section className="section-padding bg-[#1A1A1A]">
        <div className="container-max max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
              Sueroterapia IV
            </span>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">
              Seguridad en terapias intravenosas
            </h2>
            <p className="text-sm text-[#9A9A9A] leading-relaxed max-w-xl mx-auto">
              Las terapias IV son intervenciones médicas reales — no son suplementos sin riesgo. La evaluación previa identifica contraindicaciones y asegura que el protocolo sea seguro para cada paciente.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Contraindicaciones IV frecuentes", items: ["Insuficiencia renal o hepática significativa", "Trastornos cardíacos no controlados", "Alergia a componentes de la infusión", "Ciertos trastornos hemáticos", "Embarazo (en la mayoría de los protocolos)"] },
              { title: "Protocolo de seguridad IV", items: ["Evaluación médica individual obligatoria", "Revisión de medicamentos e interacciones", "Supervisión clínica durante toda la infusión", "Monitoreo de signos vitales cuando aplica", "Protocolo de respuesta ante reacciones"] },
            ].map((block) => (
              <div key={block.title} className="bg-[#242424] border border-[#2D2D2D] rounded-2xl p-5">
                <h3 className="text-sm font-semibold text-white mb-3">{block.title}</h3>
                <ul className="space-y-2">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-[#9A9A9A]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Laser diode safety */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
              Láser Diodo
            </span>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#1A1A1A] mb-3">
              Seguridad en depilación láser
            </h2>
            <p className="text-sm text-[#6B6B6B] leading-relaxed max-w-xl mx-auto">
              La evaluación previa al láser determina los parámetros seguros para tu tipo de piel y las condiciones que requieren precaución o posponer el tratamiento.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Cuándo posponer o contraindicar", items: ["Embarazo", "Bronceado o quemadura solar reciente", "Herpes activo en zona a tratar", "Medicamentos fotosensibilizantes activos", "Irritación o lesión activa en la piel", "Ciertos trastornos de pigmentación"] },
              { title: "Qué se evalúa antes del láser", items: ["Fototipo de piel y tono", "Color y grosor del vello", "Historial de sensibilidad cutánea", "Medicamentos actuales", "Exposición solar reciente", "Historial de reacciones a tratamientos previos"] },
            ].map((block) => (
              <div key={block.title} className="bg-[#FAF8F4] border border-[#E8E4DA] rounded-2xl p-5">
                <h3 className="text-sm font-semibold text-[#1A1A1A] mb-3">{block.title}</h3>
                <ul className="space-y-2">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-[#6B6B6B]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compounded medication safety */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-[#FAF8F4]">
        <div className="container-max max-w-2xl">
          <MedicalDisclaimer variant="box" includeCompounding />
        </div>
      </section>

      <CTABanner
        title="¿Tienes dudas sobre si calificas?"
        subtitle="Contáctanos. Con gusto respondemos tus preguntas antes de que agendes tu evaluación."
        ctaText="Consultar por WhatsApp"
        ctaMessage="Hola, tengo algunas preguntas sobre si calificaría para algún programa de Aurum Nova antes de agendar mi evaluación."
        variant="dark"
      />
    </>
  );
}
