"use client";

import { motion } from "framer-motion";
import { TrendingDown, Activity, Target, CheckCircle2, Clock, BarChart2 } from "lucide-react";

const metrics = [
  {
    icon: TrendingDown,
    label: "Peso actual",
    value: "—",
    unit: "kg",
    sub: "Se actualiza cada sesión",
    color: "#C9A84C",
  },
  {
    icon: Activity,
    label: "IMC",
    value: "—",
    unit: "",
    sub: "Índice de masa corporal",
    color: "#C9A84C",
  },
  {
    icon: BarChart2,
    label: "Cintura / talla",
    value: "—",
    unit: "cm",
    sub: "Perímetro de cintura",
    color: "#C9A84C",
  },
  {
    icon: Target,
    label: "Meta 5%",
    value: "—",
    unit: "kg",
    sub: "Primer objetivo clínico",
    color: "#A8872E",
  },
  {
    icon: Target,
    label: "Meta 10%",
    value: "—",
    unit: "kg",
    sub: "Segundo objetivo clínico",
    color: "#A8872E",
  },
  {
    icon: Clock,
    label: "Próximo seguimiento",
    value: "—",
    unit: "",
    sub: "Fecha de próxima sesión",
    color: "#C9A84C",
  },
  {
    icon: CheckCircle2,
    label: "Adherencia",
    value: "—",
    unit: "%",
    sub: "Cumplimiento del protocolo",
    color: "#C9A84C",
  },
  {
    icon: Activity,
    label: "Tolerancia",
    value: "—",
    unit: "",
    sub: "Respuesta a la terapia",
    color: "#C9A84C",
  },
];

export default function MetabolicDashboard() {
  return (
    <section id="calcular-progreso" className="section-padding bg-[#FAF8F4]">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
            Seguimiento clínico
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-4">
            Tu dashboard de progreso
          </h2>
          <p className="text-sm text-[#6B6B6B] max-w-lg mx-auto leading-relaxed">
            Cada sesión actualizamos tus métricas para que tanto tú como tu médico tengan
            visibilidad completa del progreso clínico.
          </p>
        </motion.div>

        {/* Illustrative label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <span className="inline-flex items-center gap-1.5 bg-[#C9A84C]/10 border border-[#C9A84C]/20 text-[#C9A84C] text-xs font-medium px-3 py-1 rounded-full">
            Vista ilustrativa — los datos son tuyos y se actualizan en clínica
          </span>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-[#E8E4DA] rounded-3xl overflow-hidden shadow-xl max-w-3xl mx-auto"
        >
          {/* Dashboard header */}
          <div className="bg-[#1A1A1A] px-6 py-4 flex items-center justify-between">
            <div>
              <p className="text-xs text-[#6B6B6B]">Panel de seguimiento</p>
              <p className="text-sm font-semibold text-white">Programa Metabólico Integral</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#C9A84C]" />
              <span className="text-xs text-[#6B6B6B]">Activo</span>
            </div>
          </div>

          {/* Progress bar placeholder */}
          <div className="px-6 py-4 border-b border-[#E8E4DA] bg-[#FAF8F4]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-[#3D3D3D]">Progreso hacia Meta 5%</span>
              <span className="text-xs text-[#9A9A9A]">— %</span>
            </div>
            <div className="h-2 bg-[#E8E4DA] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: "40%",
                  background: "linear-gradient(90deg, #C9A84C, #E2C97E)",
                }}
              />
            </div>
          </div>

          {/* Metrics grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#E8E4DA]">
            {metrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <div key={metric.label} className="bg-white p-4">
                  <div className="flex items-center gap-1.5 mb-2">
                    <Icon className="w-3.5 h-3.5" style={{ color: metric.color }} />
                    <span className="text-[10px] font-semibold text-[#9A9A9A] uppercase tracking-wide">
                      {metric.label}
                    </span>
                  </div>
                  <p className="text-xl font-bold text-[#1A1A1A]">
                    {metric.value}
                    {metric.unit && (
                      <span className="text-xs font-normal text-[#9A9A9A] ml-1">{metric.unit}</span>
                    )}
                  </p>
                  <p className="text-[10px] text-[#9A9A9A] mt-1 leading-tight">{metric.sub}</p>
                </div>
              );
            })}
          </div>

          {/* Footer note */}
          <div className="px-6 py-3 bg-[#FAF8F4] border-t border-[#E8E4DA]">
            <p className="text-[10px] text-[#9A9A9A] text-center">
              Los datos reales se registran durante cada sesión clínica semanal. Esta vista es ilustrativa.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
