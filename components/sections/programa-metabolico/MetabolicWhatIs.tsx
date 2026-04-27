"use client";

import { motion } from "framer-motion";
import { Stethoscope, ClipboardList, TrendingUp, Users } from "lucide-react";

const pillars = [
  {
    icon: Stethoscope,
    title: "Evaluación médica completa",
    description: "Revisión de historial clínico, análisis de laboratorio y determinación individual de candidatura antes de iniciar cualquier protocolo.",
  },
  {
    icon: ClipboardList,
    title: "Protocolo personalizado",
    description: "El médico diseña un plan específico para tu perfil metabólico, objetivos y condición de salud. No hay protocolos genéricos.",
  },
  {
    icon: TrendingUp,
    title: "Seguimiento semanal",
    description: "Sesiones de seguimiento clínico para monitorear progreso, ajustar el protocolo y garantizar adherencia y tolerancia.",
  },
  {
    icon: Users,
    title: "Equipo multidisciplinario",
    description: "Médico, nutricionista y especialistas trabajando de forma coordinada alrededor de tu plan individual.",
  },
];

export default function MetabolicWhatIs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-4">
              Qué es el programa
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-5 leading-tight">
              Un programa clínico de manejo del peso, no un plan de dieta
            </h2>
            <div className="space-y-4 text-[#6B6B6B] text-base leading-relaxed">
              <p>
                El Programa Metabólico Integral es un protocolo médico de manejo de peso diseñado
                para personas con sobrepeso u obesidad que han intentado sin éxito otras alternativas,
                o que necesitan supervisión clínica para abordar su condición de forma segura.
              </p>
              <p>
                No es un plan de dieta ni un régimen de ejercicio. Es un protocolo médico supervisado
                que puede incluir — cuando clínicamente indicado — medicación inyectable, apoyo
                lipotrópico, terapia nutricional y seguimiento semanal de métricas corporales.
              </p>
              <p>
                Cada elemento del programa requiere evaluación médica previa. La elegibilidad,
                las intervenciones específicas y la duración del protocolo son determinadas
                individualmente por el médico tratante.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="bg-[#FAF8F4] border border-[#E8E4DA] rounded-2xl p-5"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#C9A84C]/12 flex items-center justify-center mb-3">
                    <Icon className="w-4.5 h-4.5 text-[#C9A84C]" style={{ width: 18, height: 18 }} />
                  </div>
                  <h3 className="text-sm font-semibold text-[#1A1A1A] mb-1.5">{p.title}</h3>
                  <p className="text-xs text-[#6B6B6B] leading-relaxed">{p.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
