"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { whatsappLink } from "@/content/site";

const packages = [
  {
    name: "Plan por zona",
    description: "Paquete de sesiones enfocado en una zona específica. Ideal para quienes comienzan con una sola área prioritaria.",
    features: ["Zona de tu elección", "Continuidad de sesiones", "Mejor valor vs. sesiones sueltas", "Plan ajustado a tu zona"],
    cta: "Consultar plan por zona",
    msg: "Hola, me interesa el Plan por Zona de Láser Diodo en Aurum Nova. ¿Cuáles son las opciones disponibles?",
    highlight: false,
  },
  {
    name: "Plan combinado",
    description: "Combinación de dos o más zonas en un paquete. Permite trabajar varias áreas con planificación y mejor costo.",
    features: ["2+ zonas a elegir", "Sesiones coordinadas", "Mayor eficiencia por visita", "Orientación personalizada"],
    cta: "Consultar plan combinado",
    msg: "Hola, me interesa el Plan Combinado de Láser Diodo en Aurum Nova. ¿Cuáles zonas puedo combinar?",
    highlight: true,
  },
  {
    name: "Plan full body",
    description: "Cobertura de múltiples zonas del cuerpo en un plan integral. Para quienes buscan tratamiento comprensivo.",
    features: ["Múltiples zonas", "Plan de sesiones integral", "Mejor valor por zona", "Seguimiento incluido"],
    cta: "Consultar plan full body",
    msg: "Hola, me interesa el Plan Full Body de Láser Diodo en Aurum Nova. ¿Qué zonas incluye y cuáles son los precios?",
    highlight: false,
  },
  {
    name: "Plan mantenimiento",
    description: "Para quienes ya completaron un plan inicial y desean mantener los resultados con sesiones de seguimiento.",
    features: ["Sesiones de mantenimiento", "Flexibilidad de calendario", "Cobertura de zonas previas", "Plan adaptado a tu estado actual"],
    cta: "Consultar mantenimiento",
    msg: "Hola, me interesa el Plan de Mantenimiento de Láser Diodo en Aurum Nova. Ya tengo sesiones previas y quisiera continuar.",
    highlight: false,
  },
];

export default function LaserPackages() {
  return (
    <section className="section-padding bg-[#1A1A1A]">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
            Mejor valor en paquetes
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
            Planes diseñados para mayor continuidad
          </h2>
          <p className="text-sm text-[#9A9A9A] max-w-lg mx-auto leading-relaxed">
            Las sesiones individuales están disponibles, pero los paquetes permiten mayor
            continuidad, planificación y mejor valor por sesión. El plan recomendado se
            determina durante la evaluación.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className={`relative flex flex-col rounded-2xl p-5 border transition-all duration-300 ${
                pkg.highlight
                  ? "bg-[#C9A84C]/8 border-[#C9A84C]/40"
                  : "bg-[#242424] border-[#2D2D2D]"
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C9A84C] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
                  Más popular
                </div>
              )}
              <div className="mb-4">
                <h3 className="text-base font-semibold text-white mb-2">{pkg.name}</h3>
                <p className="text-xs text-[#6B6B6B] leading-relaxed">{pkg.description}</p>
              </div>
              <ul className="space-y-2 mb-6 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A84C] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#9A9A9A]">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink(pkg.msg)}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  pkg.highlight
                    ? "bg-[#C9A84C] hover:bg-[#A8872E] text-white"
                    : "border border-[#3D3D3D] hover:border-[#C9A84C]/40 text-[#9A9A9A] hover:text-[#C9A84C]"
                }`}
              >
                {pkg.cta}
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-[#4A4A4A] mt-6 leading-relaxed"
        >
          Los precios de paquetes se informan durante la evaluación según zonas seleccionadas,
          densidad del vello y plan recomendado. Contacta para conocer opciones disponibles.
        </motion.p>
      </div>
    </section>
  );
}
