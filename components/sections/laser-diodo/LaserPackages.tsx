"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { whatsappLink } from "@/content/site";

const packages = [
  {
    name: "Plan por zona",
    idealFor: "Ideal para comenzar con una zona prioritaria.",
    features: [
      "Evaluación de la zona",
      "Sesiones enfocadas",
      "Plan de continuidad",
      "Orientación previa",
    ],
    cta: "Consultar disponibilidad",
    msg: "Hola, me interesa consultar disponibilidad para un Plan por Zona de Láser Diodo en Aurum Nova.",
    highlight: false,
  },
  {
    name: "Plan combinado",
    idealFor: "Ideal para trabajar dos o más zonas con mejor continuidad.",
    features: [
      "2+ zonas a elegir",
      "Sesiones coordinadas",
      "Mayor eficiencia por visita",
      "Seguimiento por área",
    ],
    cta: "Agendar evaluación",
    msg: "Hola, me interesa agendar una evaluación para un Plan Combinado de Láser Diodo en Aurum Nova.",
    highlight: true,
  },
  {
    name: "Plan full body",
    idealFor: "Ideal para una ruta más amplia de reducción progresiva.",
    features: [
      "Múltiples zonas",
      "Plan integral",
      "Organización por sesiones",
      "Orientación personalizada",
    ],
    cta: "Consultar disponibilidad",
    msg: "Hola, me interesa consultar disponibilidad para el Plan Full Body de Láser Diodo en Aurum Nova.",
    highlight: false,
  },
  {
    name: "Plan mantenimiento",
    idealFor: "Ideal para personas que ya completaron un plan inicial.",
    features: [
      "Sesiones de seguimiento",
      "Frecuencia flexible",
      "Zonas previamente tratadas",
      "Evaluación del progreso",
    ],
    cta: "Consultar mantenimiento",
    msg: "Hola, me interesa consultar un Plan de Mantenimiento de Láser Diodo en Aurum Nova.",
    highlight: false,
  },
];

export default function LaserPackages() {
  return (
    <section id="planes-laser" className="section-padding scroll-mt-24 bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-2xl text-center"
        >
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#C9A84C]/25 bg-[#FAF8F4] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#A8872E]">
            <Sparkles className="h-3.5 w-3.5" />
            Planes disponibles
          </span>
          <h2 className="mb-4 text-2xl font-semibold text-[#1A1A1A] sm:text-3xl">
            Elige una ruta láser con más claridad
          </h2>
          <p className="text-sm leading-relaxed text-[#6B6B6B] sm:text-base">
            Los paquetes ayudan a organizar frecuencia, zonas y seguimiento desde el inicio. La
            disponibilidad y el plan conveniente se confirman durante la evaluación.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className={`relative flex min-h-full flex-col rounded-[1.5rem] border p-5 shadow-sm transition-all duration-300 ${
                pkg.highlight
                  ? "border-[#C9A84C]/70 bg-[#FFFCF4] shadow-[0_24px_70px_rgba(201,168,76,0.18)] ring-1 ring-[#C9A84C]/20"
                  : "border-[#E8E4DA] bg-[#FAF8F4]"
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#C9A84C] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg shadow-[#C9A84C]/20">
                  Recomendado
                </div>
              )}
              <div className="mb-5">
                <h3 className="mb-2 text-lg font-semibold text-[#1A1A1A]">{pkg.name}</h3>
                <p className="text-sm leading-relaxed text-[#6B6B6B]">{pkg.idealFor}</p>
              </div>
              <ul className="mb-6 flex-1 space-y-2.5">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#C9A84C]" />
                    <span className="text-xs leading-relaxed text-[#4A4A4A]">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink(pkg.msg)}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 rounded-full px-4 py-3 text-xs font-semibold transition-all duration-200 ${
                  pkg.highlight
                    ? "bg-[#C9A84C] hover:bg-[#A8872E] text-white"
                    : "border border-[#D8D0C2] text-[#3D3D3D] hover:border-[#C9A84C]/50 hover:text-[#A8872E]"
                }`}
              >
                {pkg.cta}
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-[#6B6B6B]"
        >
          Los planes se orientan según zona, densidad del vello, tipo de piel y disponibilidad.
          La reducción del vello es progresiva y los resultados pueden variar.
        </motion.p>
      </div>
    </section>
  );
}
