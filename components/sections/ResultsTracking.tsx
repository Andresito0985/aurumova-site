"use client";

import { motion } from "framer-motion";
import {
  Scale, Ruler, TrendingDown, Heart, ClipboardList,
  CheckCircle2, BarChart2,
} from "lucide-react";

const metrics = [
  { icon: Scale, label: "Peso corporal", description: "Registro en cada seguimiento" },
  { icon: BarChart2, label: "IMC", description: "Índice de masa corporal progresivo" },
  { icon: Ruler, label: "Circunferencias", description: "Abdominal, cadera y otras zonas" },
  { icon: TrendingDown, label: "Composición corporal", description: "Más allá del número en la báscula" },
  { icon: Heart, label: "Apetito y tolerancia", description: "Cómo responde tu cuerpo al protocolo" },
  { icon: CheckCircle2, label: "Adherencia", description: "Seguimiento del cumplimiento del plan" },
  { icon: ClipboardList, label: "Revisiones médicas", description: "Documentadas en cada cita" },
];

export default function ResultsTracking() {
  return (
    <section className="section-padding bg-[#FAF8F4]">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
              Progreso Medible
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] mb-4">
              El progreso que
              <br />
              <span className="text-[#A8872E]">no se puede ignorar</span>
            </h2>
            <p className="text-base text-[#6B6B6B] leading-relaxed mb-6">
              En Aurum Nova no dependemos de cómo te "sientes" ese día ni de fotos de antes
              y después. Documentamos métricas clínicas objetivas en cada seguimiento para
              que tu progreso sea real, visible y trazable.
            </p>
            <p className="text-base text-[#6B6B6B] leading-relaxed mb-8">
              No prometemos números específicos. Prometemos un sistema de seguimiento serio
              que detecta cuando algo funciona, cuando hay que ajustar y cuando hay factores
              que atender médicamente.
            </p>

            <div className="bg-white border border-[#E8E4DA] rounded-xl p-4 flex items-start gap-3">
              <BarChart2 className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
              <p className="text-sm text-[#3D3D3D] leading-relaxed">
                <strong>Dashboard próximamente:</strong> Estamos preparando una plataforma digital
                de seguimiento donde podrás ver tus métricas, historial y progreso en tiempo real.
              </p>
            </div>
          </motion.div>

          {/* Right — metrics grid */}
          <div className="grid grid-cols-2 gap-3">
            {metrics.map((metric, i) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className={`bg-white border border-[#E8E4DA] rounded-xl p-4 hover:border-[#C9A84C]/30 transition-colors ${
                    i === metrics.length - 1 && metrics.length % 2 !== 0
                      ? "col-span-2 sm:col-span-1"
                      : ""
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center mb-2">
                    <Icon className="w-4 h-4 text-[#C9A84C]" />
                  </div>
                  <p className="text-sm font-semibold text-[#1A1A1A] mb-0.5">{metric.label}</p>
                  <p className="text-xs text-[#9A9A9A]">{metric.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
