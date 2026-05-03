"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { whatsappLink } from "@/content/site";

const pillars = [
  "Evaluación médica individualizada",
  "Protocolos clínicos personalizados",
  "Seguimiento y métricas de progreso",
  "Resultados medibles y sostenibles",
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#FAF8F4]">
      {/* Background texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#FAF8F4] to-[#EDE8DC]" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 70% 30%, rgba(201,168,76,0.12) 0%, transparent 60%),
                            radial-gradient(circle at 20% 80%, rgba(201,168,76,0.08) 0%, transparent 50%)`,
        }}
      />

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent opacity-60" />

      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white border border-[#E8E4DA] rounded-full px-4 py-1.5 mb-6 shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
              <span className="text-xs font-semibold tracking-widest uppercase text-[#C9A84C]">
                Arecibo Medical Plaza · Suite 201
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] text-[#1A1A1A] mb-6">
              Medicina
              <br />
              <span className="gold-text-gradient">Metabólica</span>
              <br />
              de Precisión
            </h1>

            <p className="text-lg text-[#6B6B6B] leading-relaxed mb-8 max-w-lg">
              Programas clínicos personalizados diseñados para transformar tu
              salud metabólica con resultados medibles, bajo supervisión médica
              continua en Puerto Rico.
            </p>

            {/* Pillars */}
            <ul className="space-y-3 mb-10">
              {pillars.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3 text-sm text-[#3D3D3D] font-medium"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#C9A84C] shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href={whatsappLink(
                  "Hola, quisiera agendar mi consulta inicial en Aurum Nova Wellness Clinic.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-7 py-3.5 rounded-full text-base transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Agendar mi Consulta
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#programas"
                className="inline-flex items-center justify-center gap-2 bg-white border border-[#E8E4DA] hover:border-[#C9A84C] text-[#1A1A1A] hover:text-[#C9A84C] font-semibold px-7 py-3.5 rounded-full text-base transition-all duration-200"
              >
                Ver Programas
              </a>
            </motion.div>

            <p className="mt-4 text-xs text-[#9A9A9A]">
              * Todos los programas requieren evaluación médica previa. No todos
              los pacientes califican.
            </p>
          </motion.div>

          {/* Right — visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-[#EDE8DC] to-[#D8D0C0] flex items-center justify-center">
              {/* Editorial fallback visual */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#EDE8DC] via-[#E5DDD0] to-[#D4C9B0]" />
              <div className="relative z-10 text-center p-8">
                <div className="w-24 h-24 rounded-full gold-gradient mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl text-white font-bold">AN</span>
                </div>
                <p className="text-[#6B6B6B] text-sm font-medium">
                  Aurum Nova Wellness Clinic
                </p>
                <p className="text-[#9A9A9A] text-xs mt-1">
                  Ruta clínica inicial · Arecibo Medical Plaza
                </p>
              </div>

              {/* Floating stat cards */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute top-6 right-4 bg-white rounded-2xl shadow-lg p-4 max-w-[160px]"
              >
                <p className="text-xs text-[#9A9A9A] font-medium uppercase tracking-wider mb-1">
                  Programas
                </p>
                <p className="text-2xl font-bold text-[#1A1A1A]">9+</p>
                <p className="text-xs text-[#C9A84C] font-medium">
                  Especializados
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-8 left-4 bg-white rounded-2xl shadow-lg p-4 max-w-[160px]"
              >
                <p className="text-xs text-[#9A9A9A] font-medium uppercase tracking-wider mb-1">
                  Enfoque
                </p>
                <p className="text-sm font-bold text-[#1A1A1A] leading-tight">
                  Medicina de Precisión
                </p>
                <p className="text-xs text-[#C9A84C] font-medium mt-0.5">
                  Supervisión médica
                </p>
              </motion.div>
            </div>

            {/* Gold decoration */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-[#C9A84C] opacity-10 blur-2xl" />
            <div className="absolute -top-4 -left-4 w-32 h-32 rounded-full bg-[#C9A84C] opacity-8 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
