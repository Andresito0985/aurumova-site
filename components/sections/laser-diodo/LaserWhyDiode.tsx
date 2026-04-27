"use client";

import { motion } from "framer-motion";
import { Zap, Clock, Target, ShieldCheck, Thermometer, ClipboardList } from "lucide-react";

const points = [
  {
    icon: Zap,
    title: "Tecnología diodo avanzada",
    description:
      "Tecnología diodo high-tech similar en categoría a plataformas avanzadas de láser diodo utilizadas en estética médica.",
  },
  {
    icon: Target,
    title: "Múltiples zonas de tratamiento",
    description:
      "Apta para rostro y cuerpo: bigote, axilas, brazos, piernas, espalda, área de bikini y más.",
  },
  {
    icon: Clock,
    title: "Sesiones según la zona",
    description:
      "La duración de cada sesión varía según la zona y el plan indicado. Zonas pequeñas requieren menos tiempo.",
  },
  {
    icon: ClipboardList,
    title: "Plan individualizado",
    description:
      "El plan de tratamiento se determina según el tipo de piel, características del vello y la zona a tratar.",
  },
  {
    icon: Thermometer,
    title: "Experiencia cómoda",
    description:
      "Tecnología diseñada para ofrecer una experiencia de tratamiento cómoda. El proveedor orienta sobre qué esperar en cada sesión.",
  },
  {
    icon: ShieldCheck,
    title: "Evaluación de seguridad previa",
    description:
      "Antes de comenzar, se realiza una evaluación por zona para determinar el protocolo adecuado y revisar posibles contraindicaciones.",
  },
];

export default function LaserWhyDiode() {
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
              Por qué láser diodo
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-5 leading-tight">
              Tecnología diseñada para resultados progresivos y seguros
            </h2>
            <div className="space-y-4 text-[#6B6B6B] text-sm leading-relaxed">
              <p>
                El láser diodo es una de las tecnologías más utilizadas en estética médica para la
                reducción del vello no deseado. Opera en longitudes de onda diseñadas para actuar
                sobre el folículo piloso, con el objetivo de reducir progresivamente la cantidad y
                densidad del vello en la zona tratada.
              </p>
              <p>
                Los resultados varían entre personas según el tipo de piel, el color y grosor del
                vello, la zona tratada, y la adherencia al plan de sesiones. El número de sesiones
                recomendado se determina durante la evaluación individual.
              </p>
            </div>

            <div className="mt-6 bg-[#FAF8F4] border border-[#E8E4DA] rounded-xl p-4">
              <p className="text-xs text-[#6B6B6B] leading-relaxed italic">
                Los tratamientos de láser diodo no garantizan eliminación permanente del vello. Se
                espera reducción progresiva sobre una serie de sesiones. La permanencia de los
                resultados varía individualmente.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {points.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="bg-[#FAF8F4] border border-[#E8E4DA] rounded-2xl p-4"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#C9A84C]/12 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4 text-[#C9A84C]" />
                  </div>
                  <h3 className="text-sm font-semibold text-[#1A1A1A] mb-1">{p.title}</h3>
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
