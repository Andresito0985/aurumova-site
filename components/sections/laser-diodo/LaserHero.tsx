"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ArrowRight, Zap, Star } from "lucide-react";
import Link from "next/link";
import { whatsappLink } from "@/content/site";

const CTA_MSG = "Hola, me interesa una evaluación para Láser Diodo High-Tech en Aurum Nova. ¿Cuál es el proceso para comenzar?";

export default function LaserHero() {
  return (
    <section className="relative bg-[#1A1A1A] min-h-[88vh] flex flex-col justify-center overflow-hidden pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#C9A84C]/6 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-[#C9A84C]/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-max relative">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-[#6B6B6B] hover:text-[#C9A84C] transition-colors"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            Inicio
          </Link>
        </motion.div>

        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#C9A84C]/10 border border-[#C9A84C]/25 px-3.5 py-1.5 rounded-full mb-6"
          >
            <Zap className="w-3.5 h-3.5 text-[#C9A84C]" />
            <span className="text-xs font-semibold text-[#C9A84C] tracking-wider uppercase">
              Láser Diodo High-Tech
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-5"
          >
            Reducción de vello con{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #C9A84C 0%, #E2C97E 50%, #C9A84C 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              tecnología diodo
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-[#9A9A9A] leading-relaxed mb-8 max-w-2xl"
          >
            Tecnología diodo para reducción progresiva del vello no deseado, con evaluación por
            zona, orientación personalizada y experiencia clínica premium.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col sm:flex-row gap-3 mb-10"
          >
            <a
              href={whatsappLink(CTA_MSG)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3.5 rounded-full text-sm transition-all duration-200 shadow-lg shadow-[#C9A84C]/20"
            >
              Solicitar evaluación láser
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#zonas-precios"
              className="inline-flex items-center justify-center gap-2 border border-[#3D3D3D] hover:border-[#C9A84C]/40 text-[#E8E4DA] hover:text-[#C9A84C] font-medium px-6 py-3.5 rounded-full text-sm transition-all duration-200"
            >
              Ver zonas y precios
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xs text-[#4A4A4A] leading-relaxed"
          >
            Los resultados varían según zona, tipo de piel, características del vello y adherencia al plan.
            Se requiere evaluación previa.
          </motion.p>
        </div>

        {/* Stat chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-14 flex flex-wrap gap-3"
        >
          {[
            { icon: Zap, label: "Tecnología diodo high-tech" },
            { icon: Star, label: "Evaluación personalizada por zona" },
            { icon: ArrowRight, label: "Múltiples zonas de tratamiento" },
          ].map((chip) => {
            const Icon = chip.icon;
            return (
              <div
                key={chip.label}
                className="flex items-center gap-2 bg-[#242424] border border-[#2D2D2D] px-4 py-2 rounded-full"
              >
                <Icon className="w-3.5 h-3.5 text-[#C9A84C]" />
                <span className="text-xs text-[#9A9A9A]">{chip.label}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
