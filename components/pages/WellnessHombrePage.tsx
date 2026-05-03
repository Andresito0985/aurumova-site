"use client";

import { motion } from "framer-motion";
import { Activity, Flame, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import FAQSection from "@/components/sections/FAQSection";
import CTABanner from "@/components/ui/CTABanner";
import MedicalDisclaimer from "@/components/ui/MedicalDisclaimer";
import { whatsappLink } from "@/content/site";

const pillars = [
  {
    icon: Flame,
    title: "Metabolismo y composición corporal",
    desc: "Evaluación metabólica masculina con enfoque en composición corporal, peso, cintura y respuesta al plan de nutrición y actividad física.",
    items: [
      "Evaluación metabólica individual",
      "Seguimiento de IMC, cintura y composición",
      "Plan nutricional orientado a objetivos",
      "Coordinación con programa metabólico cuando aplica",
    ],
  },
  {
    icon: Activity,
    title: "Energía y rendimiento",
    desc: "Evaluación de niveles de energía, calidad de sueño, estado de ánimo y rendimiento general. Identificación de factores clínicos que pueden estar afectando la vitalidad.",
    items: [
      "Evaluación de síntomas de fatiga y energía",
      "Laboratorios de referencia cuando indicados",
      "Orientación sobre hábitos de recuperación",
      "Enfoque clínico sin promesas de rendimiento específico",
    ],
  },
  {
    icon: Activity,
    title: "Evaluación hormonal cuando aplica",
    desc: "Evaluación hormonal inicial cuando clínicamente apropiado. Referido o manejo especializado cuando la situación lo requiere.",
    items: [
      "Evaluación de indicadores hormonales relevantes",
      "Derivación a endocrinología cuando aplica",
      "Sin terapia hormonal sin evaluación completa",
      "Comunicación transparente sobre alcance del programa",
    ],
  },
];

const faqs = [
  {
    question: "¿El programa incluye terapia de testosterona?",
    answer:
      "El programa evalúa indicadores hormonales cuando clínicamente apropiado. La terapia hormonal de reemplazo requiere evaluación médica completa, laboratorios específicos y criterio clínico. Cuando aplica, se coordina el manejo apropiado o se refiere a endocrinología.",
  },
  {
    question: "¿Qué diferencia este programa del Programa Metabólico Integral?",
    answer:
      "El Programa Metabólico Integral se enfoca en control de peso, GLP/GIP terapia y composición corporal. El programa de Wellness Hombre tiene un enfoque más amplio: energía, rendimiento, evaluación hormonal y bienestar masculino integral. Ambos pueden complementarse.",
  },
  {
    question: "¿Puedo mejorar mi rendimiento deportivo con este programa?",
    answer:
      "El programa evalúa factores clínicos que pueden afectar la energía y recuperación. No ofrecemos programas de rendimiento atlético de élite ni suplementación de alto rendimiento. El enfoque es bienestar clínico, no optimización deportiva.",
  },
  {
    question: "¿Qué laboratorios se solicitan?",
    answer:
      "Los laboratorios dependen de la evaluación individual y los síntomas presentados. El proveedor determina qué pruebas son clínicamente relevantes para tu caso. No se solicitan laboratorios de forma rutinaria sin justificación clínica.",
  },
  {
    question: "¿El programa incluye inyectables metabólicos?",
    answer:
      "Cuando clínicamente apropiado, los inyectables metabólicos pueden integrarse al plan de wellness masculino. Cada servicio tiene evaluación independiente y se coordina según el perfil del paciente.",
  },
  {
    question: "¿Cuántas consultas incluye el programa?",
    answer:
      "El plan se estructura durante la evaluación inicial. Puede incluir consulta inicial, seguimiento periódico y ajustes de plan según progreso. La frecuencia se determina individualmente.",
  },
];

export default function WellnessHombrePage() {
  return (
    <>
      <PageHero
        badge="Wellness Masculino"
        title="Bienestar integral"
        highlight="para el hombre"
        subtitle="Evaluación clínica enfocada en metabolismo, energía, composición corporal y bienestar masculino. Evaluación hormonal cuando clínicamente apropiado, con referido especializado cuando la situación lo requiere."
        ctaText="Solicitar evaluación inicial"
        ctaMessage="Hola, me interesa el programa de Wellness Hombre en Aurum Nova. Quisiera conocer cómo funciona la evaluación inicial."
        disclaimer="Evaluación hormonal cuando clínicamente apropiado. No reemplaza endocrinología especializada."
      />

      {/* Pillars */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
              Enfoque clínico
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-4">
              Bienestar masculino con perspectiva clínica
            </h2>
            <p className="text-sm text-[#6B6B6B] max-w-lg mx-auto leading-relaxed">
              Más allá del control de peso. El programa masculino aborda los factores que más
              afectan la calidad de vida del hombre en cada etapa.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#FAF8F4] border border-[#E8E4DA] rounded-2xl p-6"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <h3 className="text-sm font-semibold text-[#1A1A1A] mb-2">{pillar.title}</h3>
                  <p className="text-xs text-[#6B6B6B] leading-relaxed mb-4">{pillar.desc}</p>
                  <ul className="space-y-2">
                    {pillar.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-[#C9A84C] shrink-0 mt-0.5" />
                        <span className="text-xs text-[#6B6B6B]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-padding bg-[#1A1A1A]">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-4">
                Nuestro enfoque
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-5">
                Responsabilidad clínica en cada decisión
              </h2>
              <p className="text-sm text-[#9A9A9A] leading-relaxed mb-6">
                El programa de wellness masculino no promete resultados de rendimiento atlético, no
                prescribe terapias hormonales sin evaluación completa, y no compite con la atención
                de especialistas. Cada decisión clínica se toma con criterio médico individual.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Evaluación antes de cualquier protocolo", desc: "Historial clínico completo revisado antes de recomendar cualquier plan." },
                  { title: "Derivación cuando aplica", desc: "Referidos a endocrinología u otros especialistas cuando la situación lo requiere." },
                  { title: "Sin sobreprometer", desc: "Comunicación honesta sobre qué puede y qué no puede lograr el programa." },
                  { title: "Seguimiento continuo", desc: "Monitoreo de métricas clave y ajuste del plan según respuesta individual." },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex gap-4"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-white mb-0.5">{item.title}</p>
                      <p className="text-xs text-[#6B6B6B]">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="bg-[#242424] border border-[#2D2D2D] rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="w-5 h-5 text-[#C9A84C]" />
                  <h3 className="text-sm font-semibold text-white">Lo que sí hacemos</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    "Evaluación clínica integral masculina",
                    "Laboratorios de referencia cuando indicados",
                    "Plan metabólico y nutricional personalizado",
                    "Seguimiento de métricas de salud",
                    "Coordinación de servicios complementarios",
                    "Referidos especializados cuando aplica",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3 h-3 text-[#C9A84C] shrink-0 mt-0.5" />
                      <span className="text-xs text-[#9A9A9A]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <MedicalDisclaimer
                variant="box"
                custom="El programa de Wellness Hombre es de bienestar integral y no constituye diagnóstico ni tratamiento de condiciones hormonales o endocrinológicas. La evaluación hormonal se realiza cuando clínicamente apropiado. Todos los planes requieren evaluación médica individual."
              />
            </motion.div>
          </div>
        </div>
      </section>

      <FAQSection
        faqs={faqs}
        title="Preguntas frecuentes — Wellness Hombre"
        subtitle="Todo lo que necesitas saber sobre el programa de bienestar masculino."
        variant="dark"
      />

      <CTABanner
        title="Da el primer paso hacia tu bienestar integral"
        subtitle="El equipo te orienta sobre el programa más apropiado para tus objetivos de salud."
        ctaText="Solicitar evaluación por WhatsApp"
        ctaMessage="Hola, me interesa el programa de Wellness Hombre en Aurum Nova. Quisiera conocer cómo comenzar."
        variant="dark"
      />
    </>
  );
}
