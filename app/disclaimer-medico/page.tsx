import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Aviso Médico y Legal | Aurum Nova Wellness Clinic",
  description:
    "Aviso médico y legal completo de Aurum Nova Wellness Clinic. Información sobre el uso educativo del sitio, terapias médicas, medicamentos formulados, sueroterapia, láser y emergencias.",

  alternates: { canonical: "https://aurumnovawellnessclinic.com/disclaimer-medico" },
  openGraph: {
    title: "Aviso Médico y Legal | Aurum Nova Wellness Clinic",
    description: "Aviso médico y legal completo de Aurum Nova Wellness Clinic. Uso educativo del sitio, terapias médicas, medicamentos formulados, sueroterapia, láser y emergencias.",
    url: "https://aurumnovawellnessclinic.com/disclaimer-medico",
    siteName: "Aurum Nova Wellness Clinic",
    locale: "es_PR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aviso Médico y Legal | Aurum Nova Wellness Clinic",
    description: "Aviso médico y legal completo de Aurum Nova Wellness Clinic. Uso educativo del sitio, terapias médicas, medicamentos formulados, sueroterapia, láser y emergencias.",
  },
  robots: { index: false, follow: false },
};

const sections = [
  {
    num: "1",
    title: "Propósito educativo del sitio web",
    body: "El sitio web de Aurum Nova Wellness Clinic tiene propósito informativo y educativo exclusivamente. La información aquí presentada no constituye consejo médico, diagnóstico clínico, prescripción de medicamentos ni recomendación de tratamiento para ninguna condición de salud específica. No debes tomar decisiones de salud basándote únicamente en la información de este sitio web.",
  },
  {
    num: "2",
    title: "Evaluación médica individual requerida",
    body: "Todos los programas, terapias e intervenciones ofrecidas por Aurum Nova Wellness Clinic requieren una evaluación médica individualizada antes de comenzar. La elegibilidad se determina exclusivamente por el proveedor de salud basándose en el historial clínico completo, medicamentos actuales, contraindicaciones y factores de riesgo individuales.",
    highlight: "No todos los pacientes son candidatos para todos los programas o terapias.",
  },
  {
    num: "3",
    title: "Sin garantía de resultados",
    body: "Aurum Nova Wellness Clinic no garantiza resultados específicos de pérdida de peso, mejora estética, recuperación capilar, cambios en composición corporal ni de ningún otro parámetro clínico. Los resultados individuales varían y dependen de múltiples factores: historial médico previo, adherencia al protocolo, perfil metabólico individual, condiciones subyacentes y respuesta individual a las terapias.",
  },
  {
    num: "4",
    title: "Medicamentos formulados (compounding)",
    highlighted: true,
    body: "Los medicamentos formulados disponibles a través de Aurum Nova Wellness Clinic, cuando clínicamente indicado, son preparados por farmacias de formulación acreditadas bajo prescripción médica individual.",
    points: [
      "Los medicamentos formulados (compounded medications) no son aprobados por la FDA.",
      "No son equivalentes genéricos de medicamentos aprobados por FDA.",
      "No han sido evaluados por FDA en cuanto a seguridad, efectividad ni calidad de manufactura en su forma compuesta.",
      "Su uso requiere evaluación médica individual, prescripción profesional y revisión detallada de riesgos, beneficios, historial clínico, medicamentos actuales y contraindicaciones.",
      "Los riesgos y beneficios deben discutirse individualmente con el proveedor de salud antes de iniciar cualquier terapia formulada.",
    ],
  },
  {
    num: "5",
    title: "Terapias intravenosas (sueroterapia)",
    body: "Las terapias intravenosas son procedimientos médicos que requieren evaluación clínica previa, indicación profesional y supervisión durante la administración. No están disponibles sin evaluación médica previa. No constituyen tratamiento para condiciones médicas diagnosticadas. Existen contraindicaciones importantes; la evaluación médica las identifica para cada paciente individual.",
  },
  {
    num: "6",
    title: "Láser diodo — depilación",
    body: "El tratamiento con láser diodo es un procedimiento de reducción de vello no deseado que requiere evaluación de elegibilidad previa. Los resultados varían según tipo de piel, color y grosor del vello, y respuesta individual. No se garantiza eliminación permanente del 100% del vello. Existen contraindicaciones (embarazo, bronceado reciente, ciertos medicamentos fotosensibilizantes, entre otras) que la evaluación identifica para cada caso.",
  },
  {
    num: "7",
    title: "Herramientas educativas y calculadoras",
    body: "Las calculadoras y herramientas disponibles en este sitio (incluyendo la calculadora de progreso metabólico e IMC) tienen propósito exclusivamente educativo. No constituyen diagnóstico médico, no determinan elegibilidad para ningún programa y no reemplazan la evaluación clínica profesional. Los valores calculados son estimaciones orientativas.",
  },
  {
    num: "8",
    title: "Complemento al cuidado médico primario",
    body: "Los programas de Aurum Nova Wellness Clinic están diseñados para complementar el cuidado médico existente del paciente, no para reemplazarlo. Los pacientes deben mantener su relación con su médico de cabecera, especialistas y demás proveedores de salud. En caso de condiciones médicas activas, consulta siempre con tu médico tratante antes de iniciar cualquier programa nuevo.",
  },
  {
    num: "9",
    title: "Emergencias médicas",
    highlighted: true,
    body: "Aurum Nova Wellness Clinic no es un servicio de emergencias médicas.",
    points: [
      "Ante cualquier emergencia médica — dolor severo, dificultad para respirar, reacción alérgica grave, pérdida de conciencia, presión arterial extrema u otros síntomas urgentes — llama al 911 inmediatamente.",
      "Acude al área de emergencias del hospital más cercano.",
      "No esperes contactar a Aurum Nova ante una emergencia.",
    ],
  },
  {
    num: "10",
    title: "Preguntas sobre este aviso",
    body: "Para preguntas sobre este aviso médico, sobre los programas o para coordinar una evaluación:",
    contact: true,
  },
];

export default function DisclaimerMedicoPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F4] pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#C9A84C] hover:text-[#A8872E] font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>

        <div className="flex items-center gap-3 mb-2">
          <ShieldCheck className="w-6 h-6 text-[#C9A84C]" />
          <h1 className="text-3xl font-semibold text-[#1A1A1A]">Aviso Médico y Legal</h1>
        </div>
        <p className="text-sm text-[#9A9A9A] mb-8">Aurum Nova Wellness Clinic · Última actualización: 2026</p>

        <div className="bg-[#1A1A1A] border border-[#2D2D2D] rounded-2xl p-5 mb-8">
          <p className="text-sm text-[#9A9A9A] leading-relaxed">
            Este aviso explica el alcance y las limitaciones de la información presentada en este
            sitio web, así como los requisitos clínicos aplicables a los servicios de Aurum Nova
            Wellness Clinic. Su lectura es importante para comprender correctamente nuestros
            programas y servicios.
          </p>
        </div>

        <div className="space-y-4">
          {sections.map((s) => (
            <div
              key={s.num}
              className={`rounded-2xl p-6 border ${
                s.highlighted
                  ? "bg-[#FAF8F0] border-[#C9A84C]/30"
                  : "bg-white border-[#E8E4DA]"
              }`}
            >
              <h2 className="text-base font-semibold text-[#1A1A1A] mb-3 flex items-start gap-2">
                <span className="text-[#C9A84C] font-bold shrink-0">{s.num}.</span>
                {s.title}
              </h2>
              <p className="text-sm text-[#6B6B6B] leading-relaxed mb-3">{s.body}</p>
              {s.highlight && (
                <p className="text-sm font-semibold text-[#1A1A1A] mb-3">{s.highlight}</p>
              )}
              {s.points && (
                <ul className="space-y-2 mt-3">
                  {s.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[#6B6B6B] leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0 mt-1.5" />
                      {pt}
                    </li>
                  ))}
                </ul>
              )}
              {s.contact && (
                <div className="mt-3 bg-[#FAF8F4] border border-[#E8E4DA] rounded-xl p-4 space-y-1.5 text-sm">
                  <p className="font-semibold text-[#1A1A1A]">Aurum Nova Wellness Clinic</p>
                  <p className="text-[#6B6B6B]">
                    Ave. Barbosa 65, Arecibo Medical Plaza, Suite 201, Arecibo, Puerto Rico
                  </p>
                  <a href="mailto:aurumnovawc@gmail.com" className="block text-[#C9A84C] hover:underline">
                    aurumnovawc@gmail.com
                  </a>
                  <a
                    href="https://wa.me/19396410504"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[#C9A84C] hover:underline"
                  >
                    WhatsApp: 939-641-0504
                  </a>
                  <a href="tel:17873499161" className="block text-[#C9A84C] hover:underline">
                    Llamadas: 787-349-9161 (solo llamadas)
                  </a>
                  <a
                    href="https://maps.app.goo.gl/irSRUko1XABujM4a6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[#C9A84C] hover:underline"
                  >
                    Ver ubicación en Google Maps
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#C9A84C] hover:text-[#A8872E] font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
