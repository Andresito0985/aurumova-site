"use client";

import { motion } from "framer-motion";
import { Wind, FlaskConical, CheckCircle2, ArrowRight, AlertCircle, Info } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import FAQSection from "@/components/sections/FAQSection";
import CTABanner from "@/components/ui/CTABanner";
import MedicalDisclaimer from "@/components/ui/MedicalDisclaimer";
import { whatsappLink } from "@/content/site";

const causes = [
  {
    icon: Wind,
    title: "Caída por pérdida de peso",
    desc: "El efluvio telogénico es una caída temporal del cabello común durante períodos de pérdida de peso significativa o restricción calórica. El cabello generalmente se recupera cuando el cuerpo se estabiliza.",
    key: "Temporal y reversible en la mayoría de los casos.",
  },
  {
    icon: FlaskConical,
    title: "Deficiencias nutricionales",
    desc: "Hierro, ferritina, zinc, biotina, vitaminas B y proteína son nutrientes críticos para el ciclo de crecimiento capilar. Las deficiencias —incluso subclínicas— pueden manifestarse como caída.",
    key: "Identificables con laboratorios específicos.",
  },
  {
    icon: AlertCircle,
    title: "Condiciones médicas subyacentes",
    desc: "Tiroides, niveles hormonales, anemia y otras condiciones pueden causar o exacerbar la caída. La evaluación clínica descarta o identifica estas causas.",
    key: "Requiere evaluación y posible derivación especializada.",
  },
];

const supports = [
  {
    title: "Evaluación nutricional",
    desc: "Revisión de dieta, ingesta proteica y micronutrientes relevantes para el ciclo capilar.",
  },
  {
    title: "Laboratorios de referencia",
    desc: "Ferritina, hierro, zinc, vitaminas B, tiroides y otros marcadores según evaluación clínica.",
  },
  {
    title: "Plan de suplementación",
    desc: "Recomendaciones específicas de biotina, colágeno, zinc, hierro y vitaminas B cuando hay deficiencia identificada.",
  },
  {
    title: "Optimización nutricional",
    desc: "Ajuste del plan para asegurar ingesta adecuada de proteína y micronutrientes durante el programa metabólico.",
  },
  {
    title: "Derivación cuando aplica",
    desc: "Referido a dermatología o tricología cuando la causa supera el alcance del programa de bienestar.",
  },
  {
    title: "Seguimiento de progreso",
    desc: "Monitoreo de síntomas de caída y respuesta al plan de soporte nutricional.",
  },
];

const faqs = [
  {
    question: "¿Es normal perder cabello durante el Programa Metabólico?",
    answer:
      "El efluvio telogénico es una caída temporal del cabello que puede ocurrir 2-4 meses después de comenzar una pérdida de peso significativa. Es un fenómeno conocido, generalmente temporal y reversible. El equipo lo anticipa y tiene protocolos de apoyo nutricional.",
  },
  {
    question: "¿Aurum Nova trata condiciones de alopecia?",
    answer:
      "No. El programa de Hair Support aborda la caída de cabello relacionada con nutrición, deficiencias y pérdida de peso. La alopecia areata, la alopecia androgénica y otras condiciones dermatológicas del cabello requieren atención de dermatología o tricología especializada.",
  },
  {
    question: "¿Qué laboratorios se solicitan para evaluar caída del cabello?",
    answer:
      "Los más relevantes incluyen ferritina, hierro sérico, zinc, vitaminas B12 y B9, TSH, y panel hormonal cuando aplica. El proveedor determina qué laboratorios son apropiados según los síntomas y el historial del paciente.",
  },
  {
    question: "¿La biotina realmente ayuda con el cabello?",
    answer:
      "La biotina es útil principalmente cuando hay deficiencia real. Tomar dosis altas de biotina sin deficiencia documentada tiene beneficio limitado. La evaluación determina si hay una deficiencia que justifique la suplementación.",
  },
  {
    question: "¿Cuánto tiempo tarda en notarse mejoría?",
    answer:
      "El ciclo de crecimiento del cabello es lento. La mejoría en la caída generalmente se nota 3-6 meses después de corregir deficiencias o estabilizar el programa. La respuesta varía según la causa y el individuo.",
  },
  {
    question: "¿Puedo continuar el Programa Metabólico si estoy perdiendo cabello?",
    answer:
      "En la mayoría de los casos sí. El equipo ajusta el plan para asegurar adecuada ingesta proteica y micronutrientes, lo que reduce el riesgo de caída asociada al déficit nutricional. La decisión se toma caso a caso.",
  },
];

export default function HairSupportPage() {
  return (
    <>
      <PageHero
        badge="Hair Support"
        title="Soporte para tu cabello"
        highlight="desde adentro"
        subtitle="Evaluación nutricional y clínica para la caída de cabello relacionada con deficiencias, pérdida de peso y estado de salud general. Soporte integral, derivación especializada cuando se requiere."
        ctaText="Consultar soporte capilar"
        ctaMessage="Hola, me interesa el programa Hair Support en Aurum Nova. Tengo preocupación por caída de cabello y quisiera orientación."
        disclaimer="No trata condiciones dermatológicas del cabello. Derivación a especialistas cuando aplica."
      />

      {/* Causes */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
              Causas frecuentes
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-4">
              ¿Por qué cae el cabello?
            </h2>
            <p className="text-sm text-[#6B6B6B] max-w-lg mx-auto leading-relaxed">
              La caída puede tener múltiples causas. El primer paso es identificar cuál o cuáles
              aplican en tu caso para diseñar el plan de soporte apropiado.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {causes.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#FAF8F4] border border-[#E8E4DA] rounded-2xl p-6"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <h3 className="text-sm font-semibold text-[#1A1A1A] mb-2">{c.title}</h3>
                  <p className="text-xs text-[#6B6B6B] leading-relaxed mb-4">{c.desc}</p>
                  <div className="flex items-start gap-2 bg-white border border-[#E8E4DA] rounded-xl p-3">
                    <Info className="w-3 h-3 text-[#C9A84C] shrink-0 mt-0.5" />
                    <p className="text-[10px] text-[#9A9A9A] leading-relaxed">{c.key}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="section-padding bg-[#1A1A1A]">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
              Nuestro soporte
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
              Cómo apoyamos la salud de tu cabello
            </h2>
            <p className="text-sm text-[#9A9A9A] max-w-lg mx-auto leading-relaxed">
              Sin promesas de recrecimiento específico. Con evaluación real, corrección de deficiencias
              y soporte nutricional basado en tu caso individual.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
            {supports.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-[#242424] border border-[#2D2D2D] rounded-2xl p-5"
              >
                <CheckCircle2 className="w-4 h-4 text-[#C9A84C] mb-3" />
                <h3 className="text-sm font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-xs text-[#6B6B6B] leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <MedicalDisclaimer
              variant="box"
              custom="El programa Hair Support es de soporte nutricional y no es tratamiento médico para condiciones de alopecia, dermatología capilar ni tricología. No se garantiza regrowth ni reducción de caída. Para condiciones diagnosticadas del cabello, consulta con dermatología."
            />
          </motion.div>
        </div>
      </section>

      {/* Weight loss connection */}
      <section className="section-padding bg-[#FAF8F4]">
        <div className="container-max">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-[#E8E4DA] rounded-2xl p-7"
            >
              <h3 className="text-base font-semibold text-[#1A1A1A] mb-4">
                Caída de cabello durante pérdida de peso: lo que debes saber
              </h3>
              <div className="space-y-4 text-sm text-[#6B6B6B] leading-relaxed">
                <p>
                  El efluvio telogénico es una respuesta del cuerpo a cambios significativos,
                  incluyendo la pérdida de peso. Suele comenzar 2-4 meses después de iniciar el
                  programa y puede durar varios meses.
                </p>
                <p>
                  La buena noticia: en la mayoría de los casos es temporal y reversible. El cabello
                  generalmente regresa cuando el cuerpo se estabiliza y los niveles nutricionales
                  se optimizan.
                </p>
                <p>
                  Lo que hace la diferencia es mantener una ingesta adecuada de proteína y
                  micronutrientes durante todo el programa — no solo cuando comienza la caída.
                </p>
              </div>
              <div className="mt-5">
                <a
                  href={whatsappLink("Hola, estoy notando caída de cabello durante mi programa de pérdida de peso. Quisiera orientación sobre el Hair Support en Aurum Nova.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#A8872E] text-[#1A1A1A] font-semibold px-6 py-3 rounded-full text-sm transition-all duration-200"
                >
                  Consultar sobre caída durante programa
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FAQSection
        faqs={faqs}
        title="Preguntas frecuentes — Hair Support"
        subtitle="Todo sobre caída de cabello, deficiencias y soporte durante el programa de bienestar."
        variant="dark"
      />

      <CTABanner
        title="Apoyo real para la salud de tu cabello"
        subtitle="El equipo evalúa las causas nutricionales y clínicas de la caída y diseña un plan de soporte apropiado para tu caso."
        ctaText="Consultar por WhatsApp"
        ctaMessage="Hola, me interesa el programa Hair Support en Aurum Nova. Quisiera evaluación sobre caída de cabello."
        variant="dark"
      />
    </>
  );
}
