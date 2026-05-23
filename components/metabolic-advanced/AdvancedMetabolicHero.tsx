"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  ChevronLeft,
  ClipboardList,
  ShieldCheck,
} from "lucide-react";
import { whatsappLink } from "@/content/site";
import HeadlineReveal from "@/components/motion/HeadlineReveal";
import MagneticCTA from "@/components/motion/MagneticCTA";
import { DUR, EASE_OUT_EXPO } from "@/components/motion/easing";
import {
  ADVANCED_METABOLIC_WHATSAPP_MESSAGE,
  heroBiomarkerChips,
} from "@/content/metabolic-advanced";

export default function AdvancedMetabolicHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative bg-[#1A1A1A] min-h-[72vh] lg:min-h-[88vh] flex flex-col justify-center overflow-hidden pt-24 pb-14 lg:pb-16 px-4 sm:px-6 lg:px-8">
      {/* Background — subtle clinical grid + gold radial accents */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #C9A84C 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[640px] h-[640px] bg-[#C9A84C]/5 rounded-full blur-[120px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-[#C9A84C]/[0.04] rounded-full blur-[110px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/35 to-transparent"
      />

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

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-14 items-center">
          {/* Left — content */}
          <div className="max-w-2xl">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={
                reduce ? { duration: 0 } : { duration: DUR.base }
              }
              className="inline-flex items-center gap-2 bg-[#C9A84C]/10 border border-[#C9A84C]/25 px-3.5 py-1.5 rounded-full mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
              <span className="text-xs font-semibold text-[#C9A84C] tracking-wider uppercase">
                Evaluación Metabólica Avanzada
              </span>
            </motion.div>

            <HeadlineReveal
              as="h1"
              delay={0.15}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.025em] text-white leading-[1.02] mb-5"
            >
              Evaluación Metabólica <span className="text-[#E2C97E]">Avanzada</span>
            </HeadlineReveal>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={
                reduce
                  ? { duration: 0 }
                  : { duration: DUR.slow, delay: 0.45, ease: EASE_OUT_EXPO }
              }
              className="text-base sm:text-lg text-[#BDB7AA] leading-relaxed mb-6 max-w-2xl"
            >
              Más allá de un panel general: una forma más precisa de entender tu
              metabolismo, tu riesgo cardiometabólico y los laboratorios que
              realmente pueden aportar valor según tu perfil.
            </motion.p>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={
                reduce
                  ? { duration: 0 }
                  : { duration: DUR.slow, delay: 0.55, ease: EASE_OUT_EXPO }
              }
              className="text-sm sm:text-base text-[#9A9A9A] leading-relaxed mb-8 max-w-2xl"
            >
              En Aurum Nova Wellness Clinic evaluamos el metabolismo desde una
              perspectiva clínica personalizada: glucosa, insulina, lípidos
              avanzados, inflamación, hígado, riñón, tiroides y marcadores
              específicos según tus objetivos y condiciones.
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={
                reduce
                  ? { duration: 0 }
                  : { duration: DUR.base, delay: 0.65 }
              }
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <MagneticCTA strength={6}>
                <a
                  href={whatsappLink(ADVANCED_METABOLIC_WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#A8872E] text-[#1A1A1A] font-semibold px-7 py-3.5 rounded-full text-sm transition-all duration-200 shadow-[0_12px_36px_-10px_rgba(201,168,76,0.55)] hover:shadow-[0_16px_44px_-10px_rgba(201,168,76,0.7)] ring-1 ring-black/5"
                >
                  Solicitar evaluación metabólica
                  <ArrowRight className="w-4 h-4" />
                </a>
              </MagneticCTA>
              <a
                href="#paneles-clinicos"
                className="inline-flex items-center justify-center gap-2 border border-[#3D3D3D] hover:border-[#C9A84C]/60 text-[#E8E4DA] hover:text-[#E2C97E] font-medium px-7 py-3.5 rounded-full text-sm transition-all duration-200"
              >
                Ver paneles clínicos
              </a>
            </motion.div>

            <motion.p
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={
                reduce ? { duration: 0 } : { duration: DUR.base, delay: 0.8 }
              }
              className="text-xs text-[#6B6B6B] leading-relaxed max-w-xl"
            >
              Esta página es educativa. La selección de pruebas se individualiza
              durante la evaluación clínica, considerando historial, síntomas,
              medicamentos y factores de riesgo.
            </motion.p>
          </div>

          {/* Right — biomarker dashboard mock (desktop only — keeps mobile hero light) */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={
              reduce
                ? { duration: 0 }
                : { duration: DUR.slow, delay: 0.35, ease: EASE_OUT_EXPO }
            }
            className="relative hidden lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#161616] via-[#121212] to-[#0A0A0A] ring-1 ring-[#C9A84C]/15 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.55)] p-6 sm:p-7">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                }}
              />

              {/* Dashboard header */}
              <div className="relative z-10 flex items-center justify-between gap-4 mb-5">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#E2C97E]">
                    Mapa de biomarcadores
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white leading-tight">
                    Selección clínica personalizada
                  </p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#C9A84C]/12 ring-1 ring-[#C9A84C]/30">
                  <Activity className="h-5 w-5 text-[#C9A84C]" />
                </div>
              </div>

              {/* Biomarker chips with subtle fill bars */}
              <div className="relative z-10 grid grid-cols-2 gap-3">
                {heroBiomarkerChips.map((chip) => (
                  <div
                    key={chip.name}
                    className="rounded-2xl border border-[#2A2A2A] bg-[#171717] p-3"
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <p className="text-xs font-semibold text-white leading-tight">
                        {chip.name}
                      </p>
                      <span className="text-[10px] font-medium text-[#9A9A9A]">
                        clínico
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-[#0E0E0E] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#C9A84C] to-[#E2C97E]"
                        style={{ width: `${chip.fill}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer — orientative note */}
              <div className="relative z-10 mt-5 rounded-2xl border border-[#C9A84C]/25 bg-[#C9A84C]/[0.06] p-4">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#E2C97E]" />
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#E2C97E]">
                    Orientativo · no es diagnóstico
                  </p>
                </div>
                <p className="text-[11px] leading-relaxed text-[#BDB7AA]">
                  Visualización abstracta de marcadores que pueden formar parte
                  de un panel clínico. La selección final depende de evaluación.
                </p>
              </div>
            </div>

            {/* Floating supporting chip */}
            <motion.div
              initial={reduce ? false : { opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={
                reduce
                  ? { duration: 0 }
                  : { duration: DUR.slow, delay: 1.1, ease: EASE_OUT_EXPO }
              }
              className="hidden lg:flex absolute -bottom-5 -left-5 items-center gap-2 rounded-full border border-[#C9A84C]/30 bg-[#1A1A1A]/90 px-4 py-2 backdrop-blur-md shadow-xl shadow-black/40"
            >
              <ClipboardList className="h-3.5 w-3.5 text-[#E2C97E]" />
              <span className="text-[11px] font-semibold text-white">
                Selección por perfil clínico
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
