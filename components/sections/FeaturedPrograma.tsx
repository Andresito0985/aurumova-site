"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { whatsappLink } from "@/content/site";
import MagneticCTA from "@/components/motion/MagneticCTA";

const includes = [
  "Consulta médica mensual incluida",
  "Plan nutricional personalizado",
  "Inyectables de apoyo si calificas",
  "Seguimiento de métricas y progreso",
  "Ajuste de protocolo mensual",
  "Comunicación directa con el equipo",
];

export default function FeaturedPrograma() {
  const reduce = useReducedMotion();
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={reduce ? { duration: 0 } : undefined}
          >
            <div className="inline-flex items-center gap-2 bg-[#C9A84C]/10 rounded-full px-4 py-1.5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                Programa Principal
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] mb-4 leading-tight">
              Programa Metabólico
              <br />
              <span className="text-[#A8872E]">Integral</span>
            </h2>

            <p className="text-base text-[#6B6B6B] leading-relaxed mb-6">
              Un programa médico mensual completo: evaluación clínica, plan personalizado,
              terapias de apoyo si calificas y seguimiento con métricas reales. No es una
              dieta — es medicina metabólica supervisada.
            </p>

            <ul className="space-y-2.5 mb-8">
              {includes.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#3D3D3D]">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A84C] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <MagneticCTA strength={6}>
                <a
                  href={whatsappLink("Hola, me interesa el Programa Metabólico Integral de Aurum Nova. Me gustaría consultar disponibilidad para evaluación.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#A8872E] text-[#1A1A1A] font-semibold px-7 py-3.5 rounded-full transition-all duration-200 shadow-[0_10px_30px_-10px_rgba(201,168,76,0.55)] hover:shadow-[0_14px_40px_-10px_rgba(201,168,76,0.7)] ring-1 ring-black/5"
                >
                  Consultar disponibilidad
                  <ArrowRight className="w-4 h-4" />
                </a>
              </MagneticCTA>
              <Link
                href="/programa-metabolico"
                className="inline-flex items-center justify-center gap-2 border border-[#E8E4DA] hover:border-[#C9A84C] text-[#1A1A1A] hover:text-[#C9A84C] font-semibold px-7 py-3.5 rounded-full transition-all"
              >
                Ver detalles completos
              </Link>
            </div>

            <p className="mt-4 text-xs text-[#9A9A9A]">
              * Requiere evaluación médica. No todos los pacientes califican. El precio base puede variar
              según el protocolo aprobado.
            </p>
          </motion.div>

          {/* Right — pricing visual */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={reduce ? { duration: 0 } : undefined}
          >
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2D2D2D] rounded-3xl p-8 text-white relative overflow-hidden">
              {/* Gold accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C9A84C] via-[#E2C97E] to-[#A8872E]" />
              <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-[#C9A84C]/5 blur-2xl" />

              <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C] mb-4">
                Membresía mensual
              </p>

              <div className="flex items-end gap-1 mb-1">
                <span className="text-sm text-[#9A9A9A]">desde</span>
                <span className="text-5xl font-bold text-[#E2C97E]">$400</span>
                <span className="text-sm text-[#9A9A9A] mb-1">/mes</span>
              </div>

              <p className="text-sm text-[#9A9A9A] mb-8 leading-relaxed">
                Paquete mensual médico completo con consulta, plan nutricional, inyectables de
                apoyo si aplica y seguimiento de progreso.
              </p>

              <div className="space-y-3 mb-8">
                {includes.slice(0, 4).map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-[#C9A84C]/20 flex items-center justify-center shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
                    </div>
                    <p className="text-sm text-[#9A9A9A]">{item}</p>
                  </div>
                ))}
              </div>

              <MagneticCTA strength={5} className="block w-full">
                <a
                  href={whatsappLink("Hola, me interesa el Programa Metabólico Integral de Aurum Nova desde $400/mes. ¿Cuál es el proceso?")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-[#C9A84C] hover:bg-[#A8872E] text-[#1A1A1A] font-semibold py-3.5 rounded-full transition-all duration-200 shadow-[0_12px_36px_-10px_rgba(201,168,76,0.5)] hover:shadow-[0_16px_44px_-10px_rgba(201,168,76,0.7)] ring-1 ring-black/5"
                >
                  Comenzar evaluación
                </a>
              </MagneticCTA>

              <p className="mt-3 text-[10px] text-[#6B6B6B] text-center leading-relaxed">
                El precio base puede variar. Terapias formuladas bajo prescripción tienen costo adicional.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
