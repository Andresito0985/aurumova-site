import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ResultsTracking from "@/components/sections/ResultsTracking";
import BMICalculator from "@/components/calculators/BMICalculator";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTABanner from "@/components/ui/CTABanner";
import MedicalDisclaimer from "@/components/ui/MedicalDisclaimer";

export const metadata: Metadata = {
  title: "Resultados Medibles | Aurum Nova Wellness Clinic",
  description:
    "Cómo Aurum Nova mide el progreso clínico: peso, IMC, circunferencias, composición corporal, adherencia y seguimiento. Sin promesas vacías — métricas reales.",

  alternates: { canonical: "https://aurumnovawellnessclinic.com/resultados" },
  openGraph: {
    title: "Resultados Medibles | Aurum Nova Wellness Clinic",
    description: "Cómo Aurum Nova mide el progreso clínico: peso, IMC, circunferencias, composición corporal, adherencia y seguimiento. Sin promesas vacías — métricas reales.",
    url: "https://aurumnovawellnessclinic.com/resultados",
    siteName: "Aurum Nova Wellness Clinic",
    locale: "es_PR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resultados Medibles | Aurum Nova Wellness Clinic",
    description: "Cómo Aurum Nova mide el progreso clínico: peso, IMC, circunferencias, composición corporal, adherencia y seguimiento. Sin promesas vacías — métricas reales.",
  },
};

export default function ResultadosPage() {
  return (
    <>
      <PageHero
        badge="Resultados Medibles"
        title="Progreso que"
        highlight="se documenta"
        subtitle="En Aurum Nova medimos el progreso con métricas clínicas objetivas, no con promesas. Peso, IMC, circunferencias, composición corporal, adherencia y respuesta clínica — todo documentado."
        ctaText="Comenzar mi evaluación"
        ctaMessage="Hola, me interesa comenzar mi evaluación médica en Aurum Nova para empezar a medir mi progreso real."
        secondaryCtaText="Ver programas"
        secondaryCtaHref="/programa-metabolico"
        disclaimer="Los resultados individuales varían. Aurum Nova no garantiza resultados específicos."
      />

      <ResultsTracking />

      {/* What we don't promise */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-6 text-center">
            Honestidad como parte del protocolo
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Lo que SÍ hacemos",
                items: [
                  "Evaluación clínica completa antes de empezar",
                  "Métricas objetivas en cada seguimiento",
                  "Ajuste del protocolo según tu respuesta real",
                  "Identificación de obstáculos médicos subyacentes",
                  "Comunicación transparente sobre el progreso",
                  "Documentación del historial de cada paciente",
                ],
                color: "#6B8F6B",
                bg: "#EFF5EF",
              },
              {
                title: "Lo que NO prometemos",
                items: [
                  "Pérdida de peso garantizada",
                  "Resultados específicos en plazos fijos",
                  "El mismo protocolo para todos",
                  "Resultados sin adherencia al programa",
                  "Terapias sin evaluación médica previa",
                  "Medicamentos sin prescripción individual",
                ],
                color: "#A07060",
                bg: "#FAF0EA",
              },
            ].map((col) => (
              <div
                key={col.title}
                className="rounded-2xl border border-[#E8E4DA] p-5"
                style={{ backgroundColor: col.bg + "50" }}
              >
                <p className="text-sm font-bold mb-4" style={{ color: col.color }}>
                  {col.title}
                </p>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#3D3D3D]">
                      <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: col.color }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BMICalculator />
      <TestimonialsSection />

      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-[#FAF8F4]">
        <div className="container-max max-w-2xl">
          <MedicalDisclaimer
            variant="box"
            custom="Los resultados individuales varían significativamente según historial médico, adherencia, perfil metabólico y respuesta individual. Aurum Nova no garantiza resultados específicos de pérdida de peso ni de ningún otro parámetro clínico. Los testimonios publicados serán autorizados por cada paciente y reflejan experiencias individuales."
          />
        </div>
      </section>

      <CTABanner
        title="¿Listo para medir tu progreso real?"
        subtitle="Agenda tu evaluación inicial y comienza con métricas de partida documentadas."
        ctaText="Agendar evaluación"
        ctaMessage="Hola, quiero comenzar mi evaluación médica en Aurum Nova para establecer mis métricas de partida."
        variant="dark"
      />
    </>
  );
}
