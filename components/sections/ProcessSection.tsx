"use client";

import { motion } from "framer-motion";
import { ClipboardList, Microscope, LineChart, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Consulta Inicial",
    description:
      "Evaluación médica completa de tu historial clínico, objetivos de salud, análisis de laboratorio y perfil metabólico.",
  },
  {
    icon: Microscope,
    number: "02",
    title: "Diagnóstico Clínico",
    description:
      "El médico determina si calificas para el programa solicitado y diseña un protocolo personalizado según tu evaluación.",
  },
  {
    icon: LineChart,
    number: "03",
    title: "Inicio del Protocolo",
    description:
      "Comienzas tu programa con supervisión médica activa, métricas de progreso y ajustes según tu respuesta clínica.",
  },
  {
    icon: RefreshCw,
    number: "04",
    title: "Seguimiento Continuo",
    description:
      "Revisiones periódicas para evaluar progreso, ajustar el protocolo y garantizar tu seguridad y resultados óptimos.",
  },
];

export default function ProcessSection() {
  return (
    <section className="section-padding bg-[#1A1A1A] text-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
            Tu Proceso Clínico
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
            Del diagnóstico al resultado
          </h2>
          <p className="text-base text-[#9A9A9A] max-w-xl mx-auto leading-relaxed">
            Un proceso médico estructurado y supervisado en cada etapa, diseñado para maximizar
            la seguridad y la efectividad de tu programa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(100%+12px)] w-6 h-px bg-[#C9A84C]/30 z-10" />
                )}

                <div className="bg-[#242424] border border-[#2D2D2D] hover:border-[#C9A84C]/30 rounded-2xl p-6 transition-all duration-300 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#C9A84C]" />
                    </div>
                    <span className="text-xs font-bold text-[#C9A84C]/60 tracking-widest">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-[#9A9A9A] leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
