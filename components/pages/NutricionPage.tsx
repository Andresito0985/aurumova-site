"use client";

import { motion } from "framer-motion";
import { Utensils, Droplets, Target, CheckCircle2, ArrowRight } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import FAQSection from "@/components/sections/FAQSection";
import CTABanner from "@/components/ui/CTABanner";
import MedicalDisclaimer from "@/components/ui/MedicalDisclaimer";
import { whatsappLink } from "@/content/site";

const pillars = [
  {
    icon: Target,
    title: "Meta de proteína personalizada",
    desc: "La proteína es el macronutriente más importante para preservar masa muscular durante un plan de control de peso. Tu meta se calcula con base en tu peso, objetivos y nivel de actividad.",
    points: [
      "Cálculo individualizado por peso y objetivo",
      "Fuentes de proteína de alta calidad",
      "Distribución a lo largo del día",
      "Ajuste según respuesta y tolerancia",
    ],
  },
  {
    icon: Droplets,
    title: "Hidratación óptima",
    desc: "El agua es esencial para el metabolismo, la saciedad y el funcionamiento óptimo durante el programa. La meta de hidratación se adapta a tu peso, clima y nivel de actividad.",
    points: [
      "Meta diaria de agua personalizada",
      "Estrategias prácticas de hidratación",
      "Electrolitos cuando corresponda",
      "Seguimiento de adherencia",
    ],
  },
  {
    icon: Utensils,
    title: "Estructura de comidas",
    desc: "La frecuencia y composición de las comidas se adapta a tu estilo de vida y al plan clínico activo. Se prioriza la adherencia práctica sobre la restricción extrema.",
    points: [
      "Estructura de comidas adaptada a tu rutina",
      "Balance de macronutrientes orientado",
      "Opciones de comidas accesibles en Puerto Rico",
      "Sin dietas extremas ni restricciones no sostenibles",
    ],
  },
];

const glpSupport = [
  {
    title: "Alto volumen, baja densidad calórica",
    desc: "Vegetales, fibra y agua para mayor volumen de comida con menos calorías.",
  },
  {
    title: "Proteína en cada comida",
    desc: "Aumenta la saciedad y preserva masa muscular durante el déficit calórico.",
  },
  {
    title: "Carbohidratos de calidad",
    desc: "Selección de carbohidratos con menor impacto glucémico y mayor aporte de fibra.",
  },
  {
    title: "Grasas saludables moderadas",
    desc: "Aguacate, nueces y aceite de oliva en porciones adecuadas al plan.",
  },
  {
    title: "Minimizar ultraprocesados",
    desc: "Reducción de alimentos altamente procesados que interfieren con la saciedad.",
  },
  {
    title: "Consistencia vs. perfección",
    desc: "El plan más efectivo es el que puedes mantener. Adherencia sostenible como meta.",
  },
];

const maintenancePhases = [
  { phase: "Activo", desc: "Plan calórico y proteico orientado a pérdida gradual de peso con preservación muscular." },
  { phase: "Estabilización", desc: "Ajuste gradual de calorías al alcanzar la meta. Monitoreo de respuesta al nuevo nivel." },
  { phase: "Mantenimiento", desc: "Plan sostenible a largo plazo. Seguimiento periódico para prevenir recuperación de peso." },
];

const faqs = [
  {
    question: "¿La guía nutricional incluye un plan de comidas específico?",
    answer:
      "La guía nutricional incluye estructura de comidas, metas de macronutrientes y recomendaciones prácticas adaptadas a tu plan. El nivel de detalle varía según el paquete y las preferencias del paciente. El objetivo es orientación práctica, no un menú rígido.",
  },
  {
    question: "¿Necesito contar calorías?",
    answer:
      "Depende del paciente y el plan. Algunos prefieren seguimiento detallado; otros logran mejores resultados con estrategias de porciones y calidad alimentaria. El proveedor orienta sobre el método más apropiado para tu caso.",
  },
  {
    question: "¿La nutrición es parte del Programa Metabólico Integral?",
    answer:
      "Sí. La guía nutricional es uno de los componentes del Programa Metabólico Integral. También puede consultarse como servicio independiente para pacientes que buscan orientación nutricional sin los demás componentes del programa.",
  },
  {
    question: "¿Se adapta la nutrición si tomo medicamentos para el peso?",
    answer:
      "Sí. La nutrición se ajusta al contexto clínico del paciente, incluyendo medicamentos activos. Ciertos medicamentos pueden afectar el apetito, la tolerancia a ciertos alimentos y las necesidades nutricionales. El plan se coordina con el tratamiento médico.",
  },
  {
    question: "¿Puedo seguir el plan siendo diabético?",
    answer:
      "Sí, con adaptaciones. Los pacientes con diabetes tipo 2 tienen consideraciones nutricionales específicas, especialmente en el manejo de carbohidratos y glucemia. El proveedor ajusta el plan teniendo en cuenta la condición y medicamentos actuales.",
  },
  {
    question: "¿Qué pasa en la fase de mantenimiento?",
    answer:
      "En mantenimiento, el plan calórico se ajusta gradualmente para estabilizar el nuevo peso. Se continúa el seguimiento periódico para monitorear y prevenir recuperación. Es una de las fases más críticas del programa y recibe atención especial.",
  },
];

export default function NutricionPage() {
  return (
    <>
      <PageHero
        badge="Guía Nutricional"
        title="Nutrición que apoya"
        highlight="tu plan médico"
        subtitle="Plan nutricional personalizado que complementa tu programa de bienestar. Estructura de comidas, metas de proteína, hidratación y estrategias sostenibles a largo plazo."
        ctaText="Consultar plan nutricional"
        ctaMessage="Hola, me interesa la orientación nutricional en Aurum Nova. Quisiera conocer cómo se adapta el plan a mis objetivos."
        disclaimer="La guía nutricional es parte del plan de bienestar y no reemplaza la consulta con nutricionista certificada."
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
              Pilares nutricionales
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-4">
              Los fundamentos de tu plan
            </h2>
            <p className="text-sm text-[#6B6B6B] max-w-lg mx-auto leading-relaxed">
              Tres áreas clave que guían la nutrición en el contexto de un programa de bienestar
              metabólico integral.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p, i) => {
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
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-[#C9A84C] shrink-0 mt-0.5" />
                        <span className="text-xs text-[#6B6B6B]">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GLP-supportive foods */}
      <section className="section-padding bg-[#1A1A1A]">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
              Nutrición de soporte
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
              Elecciones alimentarias que apoyan el metabolismo
            </h2>
            <p className="text-sm text-[#9A9A9A] max-w-lg mx-auto leading-relaxed">
              Independientemente del tratamiento médico activo, estas estrategias nutricionales
              apoyan el metabolismo, la saciedad y la adherencia al plan.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
            {glpSupport.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-[#242424] border border-[#2D2D2D] rounded-2xl p-5"
              >
                <h3 className="text-sm font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-[#6B6B6B] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance phases */}
      <section className="section-padding bg-[#FAF8F4]">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
              Fases del plan
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-4">
              Nutrición en cada etapa del programa
            </h2>
            <p className="text-sm text-[#6B6B6B] max-w-lg mx-auto leading-relaxed">
              El plan nutricional se ajusta según la fase activa del programa. La transición entre
              fases es gradual y monitorizada.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto mb-8">
            {maintenancePhases.map((phase, i) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex-1 bg-white border border-[#E8E4DA] rounded-2xl p-5"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-6 h-6 rounded-full bg-[#C9A84C] text-[#1A1A1A] text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <h3 className="text-sm font-semibold text-[#1A1A1A]">Fase {phase.phase}</h3>
                </div>
                <p className="text-xs text-[#6B6B6B] leading-relaxed">{phase.desc}</p>
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
              custom="La guía nutricional es orientación clínica de bienestar. Para planes nutricionales terapéuticos específicos (enfermedad renal, enfermedad hepática, etc.), se recomienda la consulta con nutricionista certificada. Los planes requieren evaluación médica individual."
            />
          </motion.div>
        </div>
      </section>

      <FAQSection
        faqs={faqs}
        title="Preguntas frecuentes sobre nutrición"
        subtitle="Todo sobre el plan nutricional, estructura de comidas y mantenimiento."
        variant="dark"
      />

      <CTABanner
        title="Diseña tu plan nutricional personalizado"
        subtitle="La nutrición es el fundamento de cualquier programa de bienestar. El equipo te orienta sobre cómo estructurar tu plan."
        ctaText="Consultar por WhatsApp"
        ctaMessage="Hola, me interesa la guía nutricional en Aurum Nova. Quisiera orientación sobre cómo se adapta el plan a mis objetivos."
        variant="dark"
      />
    </>
  );
}
