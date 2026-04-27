"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, CheckCircle2, ArrowRight } from "lucide-react";
import { whatsappLink } from "@/content/site";

const zones = [
  { area: "Labio superior", from: "$20" },
  { area: "Axilas", from: "$40" },
  { area: "Bikini clásico", from: "$60" },
  { area: "Piernas completas", from: "$150" },
  { area: "Espalda completa", from: "$120" },
  { area: "Rostro completo", from: "$80" },
];

const benefits = [
  "Tecnología diodo de última generación",
  "Adecuado para múltiples fototipos",
  "Evaluación inicial sin costo",
  "Paquetes multi-sesión disponibles",
  "Personal clínico certificado",
];

export default function FeaturedLaser() {
  return (
    <section className="section-padding bg-[#FAF8F4]">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — visual zones card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="bg-white border border-[#E8E4DA] rounded-3xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#8B7355]/10 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-[#8B7355]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1A1A1A]">Zonas disponibles</p>
                  <p className="text-xs text-[#9A9A9A]">Precios orientativos · paquetes disponibles</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-5">
                {zones.map((zone) => (
                  <div
                    key={zone.area}
                    className="bg-[#FAF8F4] rounded-xl p-3 flex flex-col"
                  >
                    <span className="text-xs text-[#6B6B6B] mb-0.5">{zone.area}</span>
                    <span className="text-sm font-bold text-[#1A1A1A]">
                      desde{" "}
                      <span className="text-[#C9A84C]">{zone.from}</span>
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-[#9A9A9A] text-center leading-relaxed">
                Todas las zonas corporales disponibles. El precio final varía según zona, sesiones y paquete.
                La evaluación inicial es gratuita.
              </p>
            </div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 bg-[#8B7355]/10 rounded-full px-4 py-1.5 mb-5">
              <Zap className="w-3.5 h-3.5 text-[#8B7355]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#8B7355]">
                Tecnología de Punta
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] mb-4 leading-tight">
              Láser Diodo
              <br />
              <span className="gold-text-gradient">High-Tech</span>
            </h2>

            <p className="text-base text-[#6B6B6B] leading-relaxed mb-6">
              Remoción de vello permanente con tecnología diodo avanzada. Planes
              personalizados por zona, paquetes de sesiones y evaluación inicial gratuita
              para determinar el protocolo más adecuado para tu tipo de piel.
            </p>

            <ul className="space-y-2.5 mb-8">
              {benefits.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#3D3D3D]">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A84C] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappLink("Hola, me interesa el tratamiento de depilación láser diodo en Aurum Nova. ¿Pueden darme información sobre zonas y paquetes?")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 shadow-md"
              >
                Consultar zonas y paquetes
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/laser-diodo"
                className="inline-flex items-center justify-center gap-2 border border-[#E8E4DA] hover:border-[#C9A84C] text-[#1A1A1A] hover:text-[#C9A84C] font-semibold px-7 py-3.5 rounded-full transition-all"
              >
                Más información
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
