"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const conditions = [
  {
    title: "Sobrepeso u obesidad",
    description: "IMC ≥ 25 con dificultad para manejar el peso con dieta y ejercicio convencional.",
  },
  {
    title: "Resistencia a la insulina",
    description: "Niveles alterados de glucosa o insulina en ayuno confirmados por laboratorio.",
  },
  {
    title: "Síndrome metabólico",
    description: "Combinación de factores como presión alta, triglicéridos elevados, cintura aumentada y glucosa alterada.",
  },
  {
    title: "Hipotiroidismo compensado",
    description: "Función tiroidea bajo control médico activo que dificulta el manejo del peso.",
  },
  {
    title: "Perimenopausia y menopausia",
    description: "Cambios hormonales que alteran la composición corporal y el metabolismo.",
  },
  {
    title: "Historial de yo-yo dieting",
    description: "Ciclos repetidos de pérdida y recuperación de peso que requieren enfoque clínico estructurado.",
  },
  {
    title: "Comorbilidades metabólicas",
    description: "Condiciones como hígado graso, dislipidemia u otras que se benefician de supervisión médica continua.",
  },
];

export default function MetabolicWho() {
  return (
    <section className="section-padding bg-[#FAF8F4]">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
            Elegibilidad
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-4">
            ¿Para quién puede ser este programa?
          </h2>
          <p className="text-base text-[#6B6B6B] max-w-xl mx-auto leading-relaxed">
            El programa puede ser adecuado para personas con alguna de las siguientes condiciones,
            siempre sujeto a evaluación médica individual. La elegibilidad final la determina el médico.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 max-w-4xl mx-auto sm:auto-rows-fr">
          {conditions.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="h-full lg:col-span-2 last:sm:col-span-2 last:lg:col-start-3 last:lg:col-span-2 bg-white border border-[#E8E4DA] rounded-2xl p-5 hover:border-[#C9A84C]/30 hover:shadow-sm transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-[#1A1A1A] mb-1">{c.title}</h3>
                  <p className="text-xs text-[#6B6B6B] leading-relaxed">{c.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 max-w-2xl mx-auto bg-[#1A1A1A] rounded-2xl p-5 flex items-start gap-3"
        >
          <span className="text-[#C9A84C] text-lg leading-none shrink-0">⚕</span>
          <p className="text-xs text-[#9A9A9A] leading-relaxed">
            <span className="text-white font-semibold">Importante:</span> Esta lista es orientativa,
            no diagnóstica. La candidatura al programa se determina exclusivamente durante la evaluación
            médica inicial. Pueden existir contraindicaciones que el médico identificará en esa consulta.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
