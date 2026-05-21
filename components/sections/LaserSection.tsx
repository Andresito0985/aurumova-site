"use client";

import { motion } from "framer-motion";
import { Zap, CheckCircle2 } from "lucide-react";
import { whatsappLink } from "@/content/site";

const benefits = [
  "Tecnología láser de diodo de última generación",
  "Efectivo para múltiples fototipos de piel",
  "Tratamiento rápido y con mínimas molestias",
  "Resultados duraderos con el protocolo completo",
  "Personal clínico capacitado y certificado",
  "Evaluación previa de tipo de piel y vello",
];

const areas = [
  "Piernas",
  "Axilas",
  "Bikini",
  "Espalda",
  "Abdomen",
  "Brazos",
  "Rostro",
  "Cuello",
];

export default function LaserSection() {
  return (
    <section id="laser-diodo" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#EDE8DC] to-[#D8D0C0] flex items-center justify-center overflow-hidden">
                {/* Editorial laser visual fallback */}
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-[#C9A84C]/20 flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-10 h-10 text-[#C9A84C]" />
                  </div>
                  <p className="text-[#6B6B6B] text-sm font-medium">
                    Tecnología Láser de Diodo
                  </p>
                  <p className="text-[#9A9A9A] text-xs mt-1">
                    Evaluación por zona y fototipo
                  </p>
                </div>
              </div>

              {/* Areas floating card */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-[#E8E4DA]"
              >
                <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-wider mb-2">
                  Áreas de Tratamiento
                </p>
                <div className="grid grid-cols-2 gap-1">
                  {areas.map((area) => (
                    <span key={area} className="text-xs text-[#3D3D3D] py-0.5">
                      · {area}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
              Remoción Láser
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] mb-4">
              Láser de Diodo
              <br />
              <span className="gold-text-gradient">de alta tecnología</span>
            </h2>
            <p className="text-base text-[#6B6B6B] leading-relaxed mb-8">
              Sistema de láser de diodo de última generación para remoción
              permanente de vello. Eficaz en múltiples tipos de piel, con
              tratamientos diseñados y supervisados por nuestro equipo clínico.
            </p>

            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, i) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-center gap-3 text-sm text-[#3D3D3D]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#C9A84C] shrink-0" />
                  {benefit}
                </motion.li>
              ))}
            </ul>

            <a
              href={whatsappLink(
                "Hola, quisiera información sobre el tratamiento de remoción de vello láser en Aurum Nova. ¿Cómo agendar mi consulta?",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#A8872E] text-[#1A1A1A] font-semibold px-7 py-3.5 rounded-full text-base transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Zap className="w-4 h-4" />
              Consultar Tratamiento Láser
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
