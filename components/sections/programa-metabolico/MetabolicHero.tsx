"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronLeft, ShieldCheck, TrendingDown, Activity } from "lucide-react";
import Link from "next/link";
import { whatsappLink } from "@/content/site";
import HeadlineReveal from "@/components/motion/HeadlineReveal";
import MagneticCTA from "@/components/motion/MagneticCTA";
import { DUR, EASE_OUT_EXPO } from "@/components/motion/easing";

const CTA_MESSAGE = "Hola, me interesa comenzar una evaluación para discutir el Programa Metabólico de Aurum Nova. ¿Cuáles son los próximos pasos?";

const stats = [
  { icon: Activity, label: "Evaluación médica incluida", value: "1ra cita" },
  { icon: TrendingDown, label: "Seguimiento clínico semanal", value: "Cada sesión" },
  { icon: ShieldCheck, label: "Sin garantías de resultado", value: "Requiere evaluación" },
];

export default function MetabolicHero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative bg-[#1A1A1A] min-h-[92vh] flex flex-col justify-center overflow-hidden pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #C9A84C 1px, transparent 0)", backgroundSize: "32px 32px" }}
      />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C9A84C]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C9A84C]/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-max relative">
        {/* Breadcrumb */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduce ? { duration: 0 } : { duration: 0.4 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-[#9A9A9A] hover:text-[#C9A84C] transition-colors"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            Inicio
          </Link>
        </motion.div>

        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reduce ? { duration: 0 } : { duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#C9A84C]/10 border border-[#C9A84C]/25 px-3.5 py-1.5 rounded-full mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
            <span className="text-xs font-semibold text-[#C9A84C] tracking-wider uppercase">
              Programa Metabólico Integral
            </span>
          </motion.div>

          {/* Headline */}
          <HeadlineReveal
            as="h1"
            delay={0.15}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-[-0.02em] mb-6"
          >
            Manejo del peso con{" "}
            <span className="text-[#E2C97E]">supervisión clínica</span>{" "}
            continua
          </HeadlineReveal>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reduce ? { duration: 0 } : { duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-[#9A9A9A] leading-relaxed mb-8 max-w-2xl"
          >
            Evaluación clínica completa, plan médico personalizado, terapia semanal si cualificas,
            apoyo lipotrópico, nutrición guiada y dashboard de progreso. Todo bajo supervisión médica.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reduce ? { duration: 0 } : { duration: DUR.slow, delay: 0.55, ease: EASE_OUT_EXPO }}
            className="flex flex-col sm:flex-row gap-3 mb-10"
          >
            <MagneticCTA strength={6}>
              <a
                href={whatsappLink(CTA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#A8872E] text-[#1A1A1A] font-semibold px-7 py-3.5 rounded-full text-sm transition-all duration-200 shadow-[0_10px_30px_-10px_rgba(201,168,76,0.55)] hover:shadow-[0_14px_38px_-10px_rgba(201,168,76,0.7)] ring-1 ring-black/5"
              >
                Comenzar evaluación
                <ArrowRight className="w-4 h-4" />
              </a>
            </MagneticCTA>
            <a
              href="#calcular-progreso"
              className="inline-flex items-center justify-center gap-2 border border-[#3D3D3D] hover:border-[#C9A84C]/60 text-[#E8E4DA] hover:text-[#E2C97E] font-medium px-7 py-3.5 rounded-full text-sm transition-all duration-200"
            >
              Calcular mi progreso
            </a>
          </motion.div>

          {/* Medical note */}
          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={reduce ? { duration: 0 } : { duration: 0.5, delay: 0.2 }}
            className="text-xs text-[#6B6B6B] leading-relaxed"
          >
            Requiere evaluación médica individual. No todos los pacientes son candidatos. El médico determina elegibilidad.
          </motion.p>
        </div>

        {/* Stats row */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduce ? { duration: 0 } : { duration: 0.6, delay: 0.25 }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl"
        >
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="bg-[#242424] border border-[#2D2D2D] rounded-2xl p-4 flex items-start gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-[#C9A84C]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">{s.value}</p>
                  <p className="text-xs text-[#6B6B6B] mt-0.5 leading-tight">{s.label}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
