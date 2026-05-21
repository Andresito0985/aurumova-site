"use client";

import { motion } from "framer-motion";
import { Sparkles, Droplets, CheckCircle2, ArrowRight, Star } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import FAQSection from "@/components/sections/FAQSection";
import CTABanner from "@/components/ui/CTABanner";
import MedicalDisclaimer from "@/components/ui/MedicalDisclaimer";
import { whatsappLink } from "@/content/site";

const glowPillars = [
  {
    icon: Droplets,
    title: "Hidratación profunda",
    desc: "La hidratación es el fundamento de la piel saludable. Evaluación del estado de hidratación y plan de hidratación oral, con sueroterapia IV como complemento cuando es clínicamente apropiado.",
    items: ["Meta de hidratación individualizada", "Electrolitos cuando corresponda", "Sueroterapia IV de soporte cuando aplica", "Seguimiento de adherencia"],
  },
  {
    icon: Sparkles,
    title: "Nutrición para la piel",
    desc: "La calidad de la piel refleja el estado nutricional del cuerpo. Orientación sobre micronutrientes esenciales: vitaminas C, D, E, zinc y colágeno como apoyo complementario.",
    items: ["Evaluación de micronutrientes relevantes", "Suplementación orientada cuando indica", "Plan alimentario de apoyo", "Sin promesas de resultados estéticos garantizados"],
  },
  {
    icon: Star,
    title: "Glow de bienestar integral",
    desc: "El aspecto de la piel mejora naturalmente cuando el cuerpo está bien nutrido, hidratado y descansado. El programa aborda la causa raíz, no solo la superficie.",
    items: ["Evaluación de estilo de vida", "Soporte de sueño y manejo del estrés", "Coordinación con plan metabólico", "Enfoque de bienestar, no estética superficial"],
  },
];

const protocols = [
  {
    name: "Skin Hydration Protocol",
    desc: "Evaluación de hidratación y plan personalizado. Puede incluir sueroterapia IV de Myers con componentes de soporte de piel cuando es clínicamente apropiado.",
    tag: "Hidratación",
  },
  {
    name: "Glow Nutrition Support",
    desc: "Orientación sobre nutrición y suplementación específica para salud de piel. Colágeno, vitamina C, zinc y antioxidantes según perfil individual.",
    tag: "Nutrición",
  },
  {
    name: "Event Ready Protocol",
    desc: "Protocolo de preparación para eventos especiales. Combinación de hidratación IV, nutrición y cuidados de apoyo en el período previo. Requiere planificación con anticipación.",
    tag: "Evento",
  },
];

const faqs = [
  {
    question: "¿Skin Glow incluye tratamientos faciales o estética?",
    answer:
      "No. El programa de Skin Glow se enfoca en bienestar interno: hidratación, nutrición, micronutrientes y sueroterapia IV. No incluye tratamientos faciales, rellenos, Botox ni procedimientos estéticos. El glow viene desde adentro.",
  },
  {
    question: "¿La sueroterapia IV mejora la piel?",
    answer:
      "La sueroterapia IV mejora la hidratación sistémica y puede incluir vitaminas y antioxidantes que apoyan la salud de la piel. Los resultados varían entre personas y no se garantizan efectos estéticos específicos.",
  },
  {
    question: "¿Puedo combinarlo con el Programa Metabólico?",
    answer:
      "Sí. Muchos pacientes del Programa Metabólico notan mejoras en la calidad de la piel como resultado del mejor estado nutricional, la hidratación y la pérdida de peso gradual. Los servicios se pueden coordinar.",
  },
  {
    question: "¿Cuántas sesiones son necesarias?",
    answer:
      "Depende del protocolo seleccionado y los objetivos del paciente. El proveedor orienta sobre el plan recomendado durante la evaluación inicial. No hay un número fijo estándar.",
  },
  {
    question: "¿El protocolo de preparación para eventos garantiza resultados?",
    answer:
      "No se garantizan resultados estéticos específicos. El Event Ready Protocol es un apoyo de bienestar previo a un evento importante. Los beneficios varían según la respuesta individual y el tiempo de preparación disponible.",
  },
  {
    question: "¿Qué laboratorios se solicitan?",
    answer:
      "Depende del caso. Se pueden solicitar marcadores de hidratación, micronutrientes (vitamina D, zinc, hierro, vitaminas B) y otros según los síntomas presentados. El proveedor determina qué es relevante para tu caso.",
  },
];

export default function SkinGlowPage() {
  return (
    <>
      <PageHero
        badge="Skin Glow"
        title="Piel radiante desde"
        highlight="adentro hacia afuera"
        subtitle="Protocolos de bienestar para la salud de tu piel: hidratación profunda, nutrición específica y sueroterapia IV de soporte. Sin procedimientos estéticos — glow real desde el interior."
        ctaText="Consultar protocolo de glow"
        ctaMessage="Hola, me interesa el programa Skin Glow en Aurum Nova. Quisiera conocer las opciones disponibles."
        disclaimer="Bienestar interno para piel saludable. No incluye procedimientos estéticos ni garantiza resultados cosméticos."
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
              Fundamentos del glow
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-4">
              Tres pilares para piel saludable
            </h2>
            <p className="text-sm text-[#6B6B6B] max-w-lg mx-auto leading-relaxed">
              La piel es el espejo del estado de salud interno. Abordamos hidratación, nutrición y
              bienestar integral para una piel que refleja tu salud real.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {glowPillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#FAF8F4] border border-[#E8E4DA] rounded-2xl p-6"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <h3 className="text-sm font-semibold text-[#1A1A1A] mb-2">{p.title}</h3>
                  <p className="text-xs text-[#6B6B6B] leading-relaxed mb-4">{p.desc}</p>
                  <ul className="space-y-2">
                    {p.items.map((item) => (
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

      {/* Protocols */}
      <section className="section-padding bg-[#1A1A1A]">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
              Protocolos disponibles
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
              Opciones de glow por objetivo
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto mb-8">
            {protocols.map((proto, i) => (
              <motion.div
                key={proto.name}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#242424] border border-[#2D2D2D] rounded-2xl p-5"
              >
                <span className="inline-block text-[10px] font-bold text-[#C9A84C] border border-[#C9A84C]/30 rounded-full px-2 py-0.5 uppercase tracking-wider mb-3">
                  {proto.tag}
                </span>
                <h3 className="text-sm font-semibold text-white mb-2">{proto.name}</h3>
                <p className="text-xs text-[#6B6B6B] leading-relaxed">{proto.desc}</p>
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
              custom="Los protocolos Skin Glow son servicios de bienestar y no son tratamientos médicos para condiciones dermatológicas. No se garantizan resultados estéticos específicos. Para condiciones de piel diagnosticadas, consulta con dermatología."
            />
          </motion.div>
        </div>
      </section>

      {/* Event prep highlight */}
      <section className="section-padding bg-[#FAF8F4]">
        <div className="container-max">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-[#E8E4DA] rounded-2xl p-7"
            >
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-5 h-5 text-[#C9A84C]" />
                <h3 className="text-base font-semibold text-[#1A1A1A]">Event Ready Protocol</h3>
                <span className="ml-auto text-[10px] font-bold text-[#C9A84C] border border-[#C9A84C]/30 rounded-full px-2 py-0.5 uppercase">Preparación</span>
              </div>
              <p className="text-sm text-[#6B6B6B] leading-relaxed mb-5">
                Tienes una boda, quincañero, evento importante o viaje próximo y quieres lucir y
                sentirte en tu mejor versión. El Event Ready Protocol combina hidratación IV,
                orientación nutricional y soporte de micronutrientes en las semanas previas al evento.
              </p>
              <ul className="grid sm:grid-cols-2 gap-2 mb-5">
                {[
                  "Planificación con 2-4 semanas de anticipación",
                  "Sesiones de sueroterapia IV de hidratación",
                  "Optimización nutricional previa al evento",
                  "Soporte de vitaminas y antioxidantes",
                  "Orientación de cuidado de piel complementario",
                  "Seguimiento hasta el evento",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A84C] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#6B6B6B]">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink("Hola, me interesa el Event Ready Protocol de Skin Glow en Aurum Nova. Tengo un evento próximo y me gustaría preparación de bienestar.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#A8872E] text-[#1A1A1A] font-semibold px-6 py-3 rounded-full text-sm transition-all duration-200"
              >
                Consultar Event Ready Protocol
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <FAQSection
        faqs={faqs}
        title="Preguntas frecuentes — Skin Glow"
        subtitle="Todo sobre los protocolos de glow, qué incluyen y qué expectativas son realistas."
        variant="dark"
      />

      <CTABanner
        title="Comienza tu protocolo de glow personalizado"
        subtitle="Piel saludable es bienestar interno visible. El equipo diseña tu plan según tus objetivos y situación clínica."
        ctaText="Consultar por WhatsApp"
        ctaMessage="Hola, me interesa el programa Skin Glow en Aurum Nova. Quisiera conocer opciones y comenzar."
        variant="dark"
      />
    </>
  );
}
