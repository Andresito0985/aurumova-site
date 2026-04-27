"use client";

import { motion } from "framer-motion";
import { Package, CheckCircle2, Info, ArrowRight } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import FAQSection from "@/components/sections/FAQSection";
import CTABanner from "@/components/ui/CTABanner";
import MedicalDisclaimer from "@/components/ui/MedicalDisclaimer";
import { whatsappLink } from "@/content/site";

const categories = [
  {
    name: "Proteína",
    emoji: "🥩",
    desc: "Suplementos de proteína en polvo o barritas para alcanzar la meta proteica diaria cuando la dieta sola no es suficiente.",
    examples: ["Proteína de suero (whey)", "Proteína vegana", "Caseína", "Barritas de proteína"],
    when: "Cuando la ingesta dietética de proteína es insuficiente para la meta individual.",
  },
  {
    name: "Electrolitos",
    emoji: "⚡",
    desc: "Sodio, potasio y magnesio para mantener el balance hidroelectrolítico, especialmente durante las primeras semanas del programa o con ejercicio intenso.",
    examples: ["Electrolitos en polvo", "Tabletas de electrolitos", "Agua mineral con minerales"],
    when: "Durante adaptación inicial al plan o períodos de ejercicio activo.",
  },
  {
    name: "Fibra",
    emoji: "🌾",
    desc: "Suplementos de fibra soluble e insoluble para apoyar la digestión, la saciedad y la salud intestinal durante el plan.",
    examples: ["Psyllium husk", "Inulina", "Mezclas de fibra", "Fibra de acacia"],
    when: "Cuando la ingesta de fibra dietética es insuficiente o hay necesidad de apoyo digestivo.",
  },
  {
    name: "Magnesio",
    emoji: "🧪",
    desc: "Mineral esencial para más de 300 reacciones enzimáticas. Apoya el sueño, la función muscular y el metabolismo energético.",
    examples: ["Glicinato de magnesio", "Citrato de magnesio", "Óxido de magnesio"],
    when: "Deficiencia identificada por laboratorios o síntomas específicos de déficit.",
  },
  {
    name: "Soporte piel y cabello",
    emoji: "✨",
    desc: "Suplementos de colágeno, biotina, zinc y vitaminas específicas para apoyar la salud de piel y cabello durante el programa.",
    examples: ["Colágeno hidrolizado", "Biotina", "Zinc", "Vitamina C"],
    when: "Como apoyo complementario, especialmente durante pérdida de peso activa.",
  },
  {
    name: "Bienestar metabólico",
    emoji: "🔬",
    desc: "Suplementos de vitaminas y minerales que participan en el metabolismo energético y el bienestar general.",
    examples: ["Vitamina D3", "Vitamina B12", "Hierro", "Omega-3"],
    when: "Según deficiencias identificadas por laboratorios o indicación clínica.",
  },
];

const faqs = [
  {
    question: "¿La suplementación es parte obligatoria del programa?",
    answer:
      "No. La suplementación es opcional y se recomienda cuando hay una necesidad clínica identificada o cuando el paciente no puede cubrir sus necesidades nutricionales solo con la dieta. No todos los pacientes requieren suplementos.",
  },
  {
    question: "¿Qué suplementos son más comunes durante el Programa Metabólico?",
    answer:
      "Los más frecuentes son proteína en polvo para alcanzar la meta proteica, electrolitos durante la adaptación inicial, y magnesio para apoyo del sueño y función muscular. La selección depende del paciente individual.",
  },
  {
    question: "¿Aurum Nova vende suplementos?",
    answer:
      "El equipo orienta sobre qué tipos de suplementos son apropiados y qué marcas de referencia buscar. La disponibilidad de productos en clínica puede variar. El objetivo es guiarte hacia opciones de calidad, no limitarte a marcas específicas.",
  },
  {
    question: "¿Los suplementos garantizan resultados?",
    answer:
      "No. Los suplementos son herramientas de apoyo, no soluciones. Su efectividad depende de que se use el tipo correcto, en la dosis adecuada, en el contexto de un plan nutricional y de actividad física apropiado. No hacen el trabajo por sí solos.",
  },
  {
    question: "¿Puedo tomar suplementos si tengo condiciones médicas?",
    answer:
      "Depende de la condición y el suplemento. Algunos suplementos interactúan con medicamentos o pueden estar contraindicados en ciertas condiciones. La evaluación médica revisa estos factores antes de hacer recomendaciones.",
  },
  {
    question: "¿Cuándo se recomienda tomar colágeno o biotina?",
    answer:
      "Se consideran como apoyo complementario para piel y cabello, especialmente durante períodos de pérdida de peso activa. No son tratamientos médicos para condiciones diagnosticadas de piel o cabello. El proveedor orienta sobre cuándo y si son apropiados.",
  },
];

export default function SuplementacionPage() {
  return (
    <>
      <PageHero
        badge="Suplementación"
        title="Suplementación de apoyo"
        highlight="cuando aplica"
        subtitle="Orientación sobre suplementos que pueden complementar tu plan de bienestar. Proteína, electrolitos, fibra, magnesio y más — solo cuando hay una necesidad real."
        ctaText="Consultar sobre suplementación"
        ctaMessage="Hola, me interesa orientación sobre suplementación en Aurum Nova. ¿Qué suplementos serían apropiados para mi programa?"
        disclaimer="La suplementación es opcional y complementaria. No reemplaza una dieta equilibrada."
      />

      {/* What we don't do */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-4">
                Enfoque honesto
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-5">
                Suplementación con criterio, no por moda
              </h2>
              <p className="text-sm text-[#6B6B6B] leading-relaxed mb-5">
                El mercado de suplementos está lleno de promesas exageradas. En Aurum Nova, la
                suplementación se recomienda solo cuando hay una necesidad identificada y existe
                evidencia de apoyo para el uso específico.
              </p>
              <div className="space-y-4">
                <div className="bg-[#FAF8F4] border border-[#E8E4DA] rounded-xl p-4">
                  <p className="text-xs font-semibold text-[#1A1A1A] mb-1">Lo que hacemos</p>
                  <ul className="space-y-1">
                    {["Evaluar necesidad individual", "Recomendar categorías con evidencia", "Orientar sobre calidad y dosificación", "Ajustar según respuesta y laboratorios"].map(item => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-[#C9A84C] shrink-0 mt-0.5" />
                        <span className="text-xs text-[#6B6B6B]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#FAF8F4] border border-[#E8E4DA] rounded-xl p-4">
                  <p className="text-xs font-semibold text-[#1A1A1A] mb-1">Lo que no hacemos</p>
                  <ul className="space-y-1">
                    {["Recomendar suplementos sin evaluación", "Garantizar resultados por suplementos", "Vender stacks sin criterio clínico", "Prometer resultados de tratamientos no médicos"].map(item => (
                      <li key={item} className="flex items-start gap-2">
                        <Info className="w-3 h-3 text-[#9A9A9A] shrink-0 mt-0.5" />
                        <span className="text-xs text-[#9A9A9A]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <MedicalDisclaimer
                variant="box"
                custom="Los suplementos son productos de soporte nutricional y no son medicamentos aprobados para tratar, diagnosticar ni curar ninguna condición médica. Su uso debe coordinarse con el proveedor de salud, especialmente si hay condiciones médicas activas o medicamentos prescritos. Los resultados individuales varían."
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-[#FAF8F4]">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
              Categorías
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-4">
              Suplementos que complementan tu plan
            </h2>
            <p className="text-sm text-[#6B6B6B] max-w-lg mx-auto leading-relaxed">
              Categorías de suplementos disponibles como apoyo. La selección específica se determina
              durante la evaluación médica según necesidades individuales.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-white border border-[#E8E4DA] rounded-2xl p-5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{cat.emoji}</span>
                  <h3 className="text-sm font-semibold text-[#1A1A1A]">{cat.name}</h3>
                </div>
                <p className="text-xs text-[#6B6B6B] leading-relaxed mb-3">{cat.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {cat.examples.map((ex) => (
                    <span key={ex} className="text-[10px] bg-[#FAF8F4] text-[#6B6B6B] border border-[#E8E4DA] px-2 py-0.5 rounded-full">
                      {ex}
                    </span>
                  ))}
                </div>
                <div className="flex items-start gap-2 bg-[#FAF8F4] rounded-xl p-2.5">
                  <Info className="w-3 h-3 text-[#C9A84C] shrink-0 mt-0.5" />
                  <p className="text-[10px] text-[#9A9A9A] leading-relaxed">{cat.when}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection
        faqs={faqs}
        title="Preguntas frecuentes sobre suplementación"
        subtitle="Respuestas honestas sobre qué, cuándo y por qué suplementar."
        variant="dark"
      />

      <CTABanner
        title="¿Necesitas suplementación en tu plan?"
        subtitle="El equipo evalúa tus necesidades individuales y te orienta sobre qué suplementos, si alguno, son apropiados para ti."
        ctaText="Consultar por WhatsApp"
        ctaMessage="Hola, me interesa orientación sobre suplementación en Aurum Nova. ¿Qué suplementos podrían ser útiles para mi programa de bienestar?"
        variant="dark"
      />
    </>
  );
}
