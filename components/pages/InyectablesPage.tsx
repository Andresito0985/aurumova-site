"use client";

import { motion } from "framer-motion";
import { Syringe, CheckCircle2, ArrowRight, Info } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import FAQSection from "@/components/sections/FAQSection";
import CTABanner from "@/components/ui/CTABanner";
import MedicalDisclaimer from "@/components/ui/MedicalDisclaimer";
import { whatsappLink } from "@/content/site";

const injectables = [
  {
    name: "L-Carnitina",
    tagline: "Transporte de ácidos grasos",
    description:
      "Aminoácido que participa en el transporte de ácidos grasos de cadena larga hacia la mitocondria para su uso como energía. La vía inyectable ofrece mayor biodisponibilidad que la oral.",
    details: [
      "Apoyo en metabolismo energético",
      "Complemento a plan de ejercicio y nutrición",
      "Administración subcutánea o IM según protocolo",
      "Evaluación previa requerida",
    ],
    note: "No sustituye hábitos de alimentación ni actividad física.",
  },
  {
    name: "Lipo Mino MIC",
    tagline: "Complejo lipotrópico con soporte B12",
    description:
      "Combinación de compuestos lipotrópicos y vitaminas del complejo B. Formulación diseñada para apoyar el metabolismo de lípidos y mantener niveles de energía durante planes de control de peso.",
    details: [
      "Metionina, Inositol, Colina (MIC)",
      "Complejo vitamínico B incluido",
      "Apoyo complementario durante programa metabólico",
      "Plan de sesiones orientado por el proveedor",
    ],
    note: "Complemento metabólico; no reemplaza plan médico integral.",
  },
  {
    name: "MIC",
    tagline: "Metionina · Inositol · Colina",
    description:
      "Combinación lipotrópica clásica de tres compuestos que participan en el metabolismo hepático de las grasas. Se utiliza como apoyo complementario en programas de bienestar metabólico.",
    details: [
      "Apoya el metabolismo de lípidos hepático",
      "Complemento a plan nutricional y ejercicio",
      "Sin vitamina B12 adicional vs. Lipo Mino",
      "Evaluación para seleccionar formulación adecuada",
    ],
    note: "Los tres compuestos actúan de forma complementaria.",
  },
];

const howItWorks = [
  { step: "01", title: "Evaluación médica", desc: "Revisión de historial, laboratorios relevantes y objetivos de salud para determinar elegibilidad." },
  { step: "02", title: "Selección de formulación", desc: "El proveedor selecciona el inyectable más apropiado según tu perfil metabólico y plan activo." },
  { step: "03", title: "Administración clínica", desc: "Inyección administrada en clínica o con instrucción para auto-administración cuando aplica." },
  { step: "04", title: "Seguimiento y ajuste", desc: "Evaluación de respuesta y continuidad del plan según progreso y tolerancia." },
];

const faqs = [
  {
    question: "¿Los inyectables metabólicos reducen grasa directamente?",
    answer:
      "No. Los inyectables metabólicos son complementos de apoyo al plan de bienestar. Su función es apoyar procesos metabólicos como el transporte de ácidos grasos y el metabolismo hepático de lípidos. No reducen grasa directamente ni reemplazan los beneficios de la nutrición y el ejercicio.",
  },
  {
    question: "¿Cuánto tiempo se tarda en ver resultados?",
    answer:
      "Los resultados varían según el paciente, el plan de nutrición, nivel de actividad física y la respuesta individual. Los inyectables se utilizan como complemento de un plan integral, no como tratamiento aislado. El proveedor orienta sobre expectativas realistas.",
  },
  {
    question: "¿Con qué frecuencia se aplican?",
    answer:
      "La frecuencia depende del formulado seleccionado y el plan del paciente. El proveedor determina el intervalo adecuado durante la evaluación inicial y puede ajustar según respuesta.",
  },
  {
    question: "¿Hay contraindicaciones?",
    answer:
      "Sí. Condiciones hepáticas, alergias a componentes, ciertos medicamentos y condiciones médicas activas pueden ser contraindicaciones. La evaluación médica revisa estos factores antes de iniciar cualquier protocolo.",
  },
  {
    question: "¿Puedo combinarlos con el Programa Metabólico Integral?",
    answer:
      "Sí. Los inyectables metabólicos frecuentemente se integran al Programa Metabólico Integral como complemento. El plan conjunto se coordina durante la evaluación médica para asegurar que sea apropiado para tu caso.",
  },
  {
    question: "¿Son medicamentos aprobados por FDA?",
    answer:
      "Algunos componentes están disponibles en formulaciones compuestas. Los medicamentos formulados no son aprobados por FDA como medicamentos de referencia. Su uso requiere evaluación médica individual, prescripción profesional y revisión de riesgos y beneficios.",
  },
];

export default function InyectablesPage() {
  return (
    <>
      <PageHero
        badge="Inyectables Metabólicos"
        title="Soporte inyectable"
        highlight="para tu metabolismo"
        subtitle="L-Carnitina, Lipo Mino MIC y MIC como complemento de apoyo a tu plan de bienestar metabólico. Administración clínica con evaluación médica previa."
        ctaText="Consultar opciones disponibles"
        ctaMessage="Hola, me interesan los Inyectables Metabólicos en Aurum Nova. ¿Qué opciones están disponibles y qué evaluación se requiere?"
        disclaimer="Complemento de apoyo; no reemplaza plan médico integral. Requiere evaluación."
      />

      {/* What they are */}
      <section className="section-padding bg-[#FAF8F4]">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center mb-10"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
              ¿Qué son?
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-4">
              Apoyo metabólico inyectable
            </h2>
            <p className="text-sm text-[#6B6B6B] leading-relaxed">
              Los inyectables metabólicos son compuestos que apoyan procesos como el transporte de
              ácidos grasos, el metabolismo hepático de lípidos y el mantenimiento de energía
              celular. Se usan como complemento de un plan integral de bienestar, nunca como
              sustituto.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {injectables.map((inj, i) => (
              <motion.div
                key={inj.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-[#E8E4DA] rounded-2xl p-6 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center">
                    <Syringe className="w-4 h-4 text-[#C9A84C]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#1A1A1A]">{inj.name}</h3>
                    <p className="text-[10px] text-[#C9A84C] font-medium">{inj.tagline}</p>
                  </div>
                </div>
                <p className="text-xs text-[#6B6B6B] leading-relaxed mb-4">{inj.description}</p>
                <ul className="space-y-2 mb-4 flex-1">
                  {inj.details.map((d) => (
                    <li key={d} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3 h-3 text-[#C9A84C] shrink-0 mt-0.5" />
                      <span className="text-xs text-[#6B6B6B]">{d}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-start gap-2 bg-[#FAF8F4] rounded-xl p-3 mt-auto">
                  <Info className="w-3 h-3 text-[#C9A84C] shrink-0 mt-0.5" />
                  <p className="text-[10px] text-[#9A9A9A] leading-relaxed">{inj.note}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-[#1A1A1A]">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
              Proceso
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
              Cómo funciona el protocolo
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
            {howItWorks.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-[#242424] border border-[#2D2D2D] rounded-2xl p-5"
              >
                <span className="text-2xl font-bold text-[#C9A84C]/30 block mb-3">{item.step}</span>
                <h3 className="text-sm font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-[#6B6B6B] leading-relaxed">{item.desc}</p>
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
              includeCompounding
              custom="Los inyectables metabólicos son complementos de apoyo y no garantizan pérdida de peso ni cambios en composición corporal. Los medicamentos formulados no son aprobados por FDA. Su uso requiere evaluación médica individual, prescripción y revisión de riesgos, beneficios, historial clínico y contraindicaciones."
            />
          </motion.div>
        </div>
      </section>

      {/* CTA section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-4">
                ¿Son los inyectables metabólicos para ti?
              </h2>
              <p className="text-sm text-[#6B6B6B] leading-relaxed mb-6">
                La evaluación médica determina qué formulación es apropiada para tu caso y cómo se
                integra a tu plan de bienestar actual. Contacta al equipo para orientación inicial.
              </p>
              <a
                href={whatsappLink("Hola, me interesan los Inyectables Metabólicos en Aurum Nova. Quisiera una orientación sobre opciones disponibles y evaluación inicial.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-7 py-3.5 rounded-full text-sm transition-all duration-200"
              >
                Solicitar orientación por WhatsApp
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <FAQSection
        faqs={faqs}
        title="Preguntas frecuentes sobre inyectables metabólicos"
        subtitle="Respuestas sobre qué son, qué hacen y cómo se integran a tu plan."
        variant="dark"
      />

      <CTABanner
        title="Complementa tu plan con soporte inyectable"
        subtitle="Los inyectables metabólicos se evalúan individualmente y se integran como complemento de tu programa de bienestar."
        ctaText="Consultar por WhatsApp"
        ctaMessage="Hola, me interesan los Inyectables Metabólicos en Aurum Nova. ¿Cuáles opciones están disponibles y cuál es el proceso?"
        variant="dark"
      />
    </>
  );
}
