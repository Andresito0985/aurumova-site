"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ClipboardList, UserCheck, LineChart, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    number: "01",
    word: "Evaluar",
    title: "Evaluación clínica completa",
    description:
      "Historial médico, análisis de laboratorio, composición corporal y perfil metabólico. No comenzamos sin saber quién eres clínicamente.",
  },
  {
    icon: UserCheck,
    number: "02",
    word: "Personalizar",
    title: "Protocolo diseñado para ti",
    description:
      "El médico diseña tu plan. No hay paquetes genéricos — cada protocolo responde a tu perfil, objetivos y condiciones individuales.",
  },
  {
    icon: LineChart,
    number: "03",
    word: "Medir",
    title: "Métricas clínicas reales",
    description:
      "Peso, circunferencias, composición corporal, apetito, tolerancia y adherencia. El progreso se documenta, no se imagina.",
  },
  {
    icon: RefreshCw,
    number: "04",
    word: "Optimizar",
    title: "Ajuste continuo del protocolo",
    description:
      "El médico revisa tu respuesta mensualmente y ajusta el plan. Un programa que no evoluciona contigo no es personalizado.",
  },
];

export default function MetodoAurum() {
  const reduce = useReducedMotion();
  return (
    <section className="section-padding bg-[#1A1A1A]">
      <div className="container-max">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reduce ? { duration: 0 } : undefined}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
            Nuestro Método
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
            El Método{" "}
            <span className="gold-text-gradient">Aurum</span>
          </h2>
          <p className="text-base text-[#9A9A9A] max-w-xl mx-auto leading-relaxed">
            Cuatro pasos que definen cómo trabajamos: sin atajos, sin promesas vacías,
            con precisión médica en cada etapa del proceso.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={reduce ? { duration: 0 } : { delay: i * 0.1 }}
                className="relative bg-[#242424] border border-[#2D2D2D] hover:border-[#C9A84C]/30 rounded-2xl p-6 transition-all duration-300 group"
              >
                {/* Connector */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(100%+10px)] w-5 h-px bg-[#C9A84C]/20 z-10" />
                )}

                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/10 group-hover:bg-[#C9A84C]/15 flex items-center justify-center transition-colors">
                    <Icon className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-[#C9A84C]/50 tracking-widest">
                      {step.number}
                    </span>
                    <span className="block text-sm font-bold text-[#C9A84C]">{step.word}</span>
                  </div>
                </div>

                <h3 className="text-sm font-semibold text-white mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-[#9A9A9A] leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
