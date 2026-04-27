import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Términos de Uso | Aurum Nova Wellness Clinic",
  description: "Términos y condiciones de uso del sitio web de Aurum Nova Wellness Clinic.",
  alternates: { canonical: "https://aurumnovawellnessclinic.com/terminos" },
  openGraph: {
    title: "Términos de Uso | Aurum Nova Wellness Clinic",
    description: "Términos y condiciones de uso del sitio web de Aurum Nova Wellness Clinic.",
    url: "https://aurumnovawellnessclinic.com/terminos",
    siteName: "Aurum Nova Wellness Clinic",
    locale: "es_PR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Términos de Uso | Aurum Nova Wellness Clinic",
    description: "Términos y condiciones de uso del sitio web de Aurum Nova Wellness Clinic.",
  },
  robots: { index: false, follow: false },
};

export default function TerminosPage() {
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

        <h1 className="text-3xl font-semibold text-[#1A1A1A] mb-2">Términos de Uso</h1>
        <p className="text-sm text-[#9A9A9A] mb-8">Última actualización: {new Date().getFullYear()}</p>

        <div className="bg-white border border-[#E8E4DA] rounded-2xl p-8 text-[#3D3D3D] space-y-6">
          <section>
            <h2 className="text-lg font-semibold text-[#1A1A1A] mb-3">1. Uso del sitio web</h2>
            <p className="text-sm leading-relaxed">
              Este sitio web es de carácter informativo y educativo. La información aquí
              presentada no constituye consejo médico, diagnóstico ni prescripción. Aurum
              Nova Wellness Clinic se reserva el derecho de modificar el contenido en cualquier
              momento.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1A1A1A] mb-3">2. Aviso médico</h2>
            <p className="text-sm leading-relaxed">
              Todos los programas, terapias e intervenciones médicas requieren evaluación
              clínica individualizada. No todos los pacientes son candidatos. Los resultados
              individuales varían. Este sitio no ofrece diagnósticos médicos ni prescripciones.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1A1A1A] mb-3">3. Medicamentos formulados</h2>
            <p className="text-sm leading-relaxed">
              Los medicamentos formulados no son aprobados por FDA ni son equivalentes genéricos
              de medicamentos aprobados por FDA. Su uso requiere evaluación médica individual,
              prescripción profesional y revisión de riesgos, beneficios, historial clínico,
              medicamentos actuales y contraindicaciones.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1A1A1A] mb-3">4. Limitación de responsabilidad</h2>
            <p className="text-sm leading-relaxed">
              Aurum Nova Wellness Clinic no garantiza resultados específicos de ningún programa.
              Los resultados dependen de factores individuales incluyendo historial médico,
              adherencia al protocolo y respuesta individual al tratamiento.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1A1A1A] mb-3">5. Contacto</h2>
            <p className="text-sm leading-relaxed">
              Para preguntas sobre estos términos, contáctenos en:{" "}
              <a href="mailto:aurumnovawc@gmail.com" className="text-[#C9A84C] hover:underline">
                aurumnovawc@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
