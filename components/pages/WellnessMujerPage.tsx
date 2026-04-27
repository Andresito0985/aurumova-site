"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import FAQSection from "@/components/sections/FAQSection";
import CTABanner from "@/components/ui/CTABanner";
import MedicalDisclaimer from "@/components/ui/MedicalDisclaimer";
import { whatsappLink } from "@/content/site";

const pillars = [
  {
    icon: Heart,
    title: "Metabolismo y composición corporal",
    desc: "Evaluación metabólica enfocada en la mujer: variaciones hormonales, respuesta al ejercicio y nutrición adaptada a cada etapa de vida.",
    items: ["Evaluación metabólica individual", "Plan nutricional orientado a objetivos", "Seguimiento de peso, cintura e IMC", "Coordinación con programa metabólico cuando aplica"],
  },
  {
    icon: Sparkles,
    title: "Energía y bienestar hormonal",
    desc: "Evaluación de síntomas relacionados con energía, ciclo, estado de ánimo y bienestar general. Orientación clínica y derivación especializada cuando corresponda.",
    items: ["Evaluación de síntomas de energía y ánimo", "Laboratorios de referencia cuando indicados", "Orientación y referido a ginecología/endocrinología si aplica", "Enfoque integral sin reemplazar atención especializada"],
  },
  {
    icon: Heart,
    title: "Piel y cabello",
    desc: "Apoyo nutricional y de micronutrientes para la salud de piel y cabello. Identificación de deficiencias y plan de soporte cuando clínicamente apropiado.",
    items: ["Evaluación de marcadores relevantes", "Soporte de micronutrientes", "Coordinación con servicios de skin-glow y hair-support", "Sin promesas de resultados estéticos garantizados"],
  },
];

const whoIsFor = [
  "Mujeres que buscan optimizar su energía y metabolismo",
  "Pacientes con cambios de peso o composición corporal",
  "Personas con fatiga o energía inconsistente",
  "Quienes quieren apoyo complementario al cuidado ginecológico actual",
  "Mujeres en transición hormonal que buscan soporte de bienestar",
  "Pacientes que desean un enfoque integral y coordinado",
];

const faqs = [
  {
    question: "¿Wellness Mujer reemplaza la consulta ginecológica?",
    answer:
      "No. El programa de wellness femenino es complementario y no reemplaza la atención ginecológica, endocrinológica ni el manejo de condiciones hormonales diagnosticadas. Cuando es apropiado, se deriva a especialistas.",
  },
  {
    question: "¿Se trabaja el balance hormonal?",
    answer:
      "El equipo evalúa síntomas relacionados con bienestar hormonal femenino y puede solicitar laboratorios de referencia. Para manejo hormonal específico (terapia de reemplazo hormonal, anticonceptivos, etc.), se coordina con o se refiere a ginecología o endocrinología.",
  },
  {
    question: "¿Qué diferencia este programa del Programa Metabólico Integral?",
    answer:
      "El Programa Metabólico Integral se enfoca en control de peso, GLP/GIP terapia y composición corporal. El programa de Wellness Mujer tiene un enfoque más amplio en bienestar femenino integral: energía, piel, cabello, bienestar hormonal y calidad de vida. Ambos pueden complementarse.",
  },
  {
    question: "¿Puedo integrar sueroterapia o inyectables?",
    answer:
      "Sí, cuando clínicamente apropiado. Los servicios complementarios se evalúan de forma independiente y se integran al plan de wellness cuando el proveedor lo considera indicado.",
  },
  {
    question: "¿Hay un número mínimo de sesiones?",
    answer:
      "El plan se estructura durante la evaluación inicial según objetivos y necesidades. Puede incluir consultas de seguimiento periódicas, laboratorios y ajustes de plan. No hay un número fijo estándar.",
  },
];

export default function WellnessMujerPage() {
  return (
    <>
      <PageHero
        badge="Wellness Femenino"
        title="Bienestar integral"
        highlight="para la mujer"
        subtitle="Evaluación clínica enfocada en metabolismo, energía, piel, cabello y bienestar hormonal femenino. Un programa diseñado para las necesidades únicas de cada mujer."
        ctaText="Solicitar evaluación inicial"
        ctaMessage="Hola, me interesa el programa de Wellness Mujer en Aurum Nova. Quisiera conocer cómo funciona la evaluación inicial."
        disclaimer="No reemplaza atención ginecológica o endocrinológica especializada."
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
              Tres pilares del bienestar femenino
            </h2>
            <p className="text-sm text-[#6B6B6B] max-w-lg mx-auto leading-relaxed">
              El cuerpo femenino tiene necesidades únicas en cada etapa de vida. El programa aborda
              los aspectos más relevantes de forma integral y coordinada.
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

      {/* Who is it for */}
      <section className="section-padding bg-[#1A1A1A]">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-4">
                ¿Para quién es?
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-5">
                Diseñado para mujeres que quieren más que el mínimo
              </h2>
              <p className="text-sm text-[#9A9A9A] leading-relaxed mb-6">
                El programa de wellness femenino es para mujeres que buscan un enfoque clínico
                integral, más allá de la atención médica de rutina. Evaluación personalizada,
                seguimiento continuo y coordinación de servicios.
              </p>
              <ul className="space-y-3">
                {whoIsFor.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#9A9A9A]">{item}</span>
                  </motion.li>
                ))}
              </ul>
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
                  <h3 className="text-sm font-semibold text-white">Enfoque clínico responsable</h3>
                </div>
                <p className="text-xs text-[#6B6B6B] leading-relaxed">
                  El equipo de Aurum Nova no reemplaza ni compite con ginecología, endocrinología ni
                  ninguna atención especializada. El programa de wellness femenino actúa como capa de
                  apoyo integral y coordina con especialistas cuando es clínicamente apropiado.
                </p>
              </div>
              <MedicalDisclaimer
                variant="box"
                custom="El programa de Wellness Mujer es de bienestar integral y no constituye diagnóstico ni tratamiento de condiciones hormonales, ginecológicas ni endocrinológicas. Todos los planes requieren evaluación médica individual."
              />
            </motion.div>
          </div>
        </div>
      </section>

      <FAQSection
        faqs={faqs}
        title="Preguntas frecuentes — Wellness Mujer"
        subtitle="Todo lo que necesitas saber sobre el programa de bienestar femenino."
        variant="dark"
      />

      <CTABanner
        title="Empieza con una evaluación de bienestar femenino"
        subtitle="El equipo te orienta sobre cómo el programa puede complementar tu cuidado de salud actual."
        ctaText="Solicitar evaluación por WhatsApp"
        ctaMessage="Hola, me interesa el programa de Wellness Mujer en Aurum Nova. Quisiera conocer cómo puedo comenzar."
        variant="dark"
      />
    </>
  );
}
