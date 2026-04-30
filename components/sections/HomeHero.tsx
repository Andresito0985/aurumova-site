"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const trust = [
  "Evaluación clínica individualizada",
  "Protocolos médicos personalizados",
  "Seguimiento con métricas reales",
  "No todos califican — lo decimos con honestidad",
];

export default function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#FAF8F4]">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#FAF8F4] to-[#EDE8DC]" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(ellipse at 70% 25%, rgba(201,168,76,0.14) 0%, transparent 55%),
                            radial-gradient(ellipse at 15% 80%, rgba(201,168,76,0.08) 0%, transparent 45%)`,
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent" />

      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center gap-2 bg-white border border-[#E8E4DA] rounded-full px-4 py-1.5 mb-6 shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
              <span className="text-xs font-semibold tracking-widest uppercase text-[#C9A84C]">
                Arecibo Medical Plaza · Suite 201
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] text-[#1A1A1A] mb-6">
              Transformación
              <br />
              <span className="gold-text-gradient">metabólica,</span>
              <br />
              estética y wellness
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#6B6B6B]">
                con seguimiento clínico.
              </span>
            </h1>

            <p className="text-lg text-[#6B6B6B] leading-relaxed mb-8 max-w-xl">
              Programas médicos personalizados en Arecibo para control metabólico, láser
              diodo, sueroterapia e inyectables wellness — con evaluación clínica y progreso
              medible.
            </p>

            {/* Trust signals */}
            <ul className="space-y-2.5 mb-10">
              {trust.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="flex items-center gap-3 text-sm text-[#3D3D3D] font-medium"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#C9A84C] shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                href="/quiz-metabolico"
                className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-7 py-3.5 rounded-full text-base transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Hacer quiz metabólico
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/servicios"
                className="inline-flex items-center justify-center gap-2 bg-white border border-[#E8E4DA] hover:border-[#C9A84C] text-[#1A1A1A] hover:text-[#C9A84C] font-semibold px-7 py-3.5 rounded-full text-base transition-all duration-200"
              >
                Ver servicios
              </Link>
            </motion.div>

            <p className="mt-4 text-xs text-[#9A9A9A]">
              Requiere evaluación clínica. No todos los pacientes cualifican. Los
              resultados pueden variar.
            </p>
          </motion.div>

          {/* Right — visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-[#EDE8DC] to-[#D4C9B0] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[#EDE8DC]/80 via-[#E5DDD0] to-[#D4C9B0]" />
              <div className="relative z-10 text-center p-8">
                <div className="w-24 h-24 rounded-full gold-gradient mx-auto mb-6 flex items-center justify-center shadow-xl">
                  <span className="text-2xl text-white font-bold tracking-wider">AN</span>
                </div>
                <p className="text-[#6B6B6B] text-sm font-semibold">Aurum Nova Wellness Clinic</p>
                <p className="text-[#9A9A9A] text-xs mt-1">Arecibo Medical Plaza · Suite 201</p>
                <p className="text-[#9A9A9A] text-xs">Foto de clínica próximamente</p>
              </div>

              {/* Floating stat */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 }}
                className="absolute top-6 right-4 bg-white rounded-2xl shadow-lg p-4 max-w-[160px]"
              >
                <p className="text-[10px] text-[#9A9A9A] font-semibold uppercase tracking-wider mb-1">Programas</p>
                <p className="text-2xl font-bold text-[#1A1A1A]">10+</p>
                <p className="text-xs text-[#C9A84C] font-medium">Especializados</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3 }}
                className="absolute bottom-8 left-4 bg-white rounded-2xl shadow-lg p-4 max-w-[160px]"
              >
                <p className="text-[10px] text-[#9A9A9A] font-semibold uppercase tracking-wider mb-1">Método</p>
                <p className="text-sm font-bold text-[#1A1A1A] leading-tight">Evaluar · Personalizar · Medir</p>
                <p className="text-xs text-[#C9A84C] font-medium mt-0.5">100% supervisado</p>
              </motion.div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-[#C9A84C] opacity-8 blur-3xl" />
            <div className="absolute -top-6 -left-6 w-40 h-40 rounded-full bg-[#C9A84C] opacity-6 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
