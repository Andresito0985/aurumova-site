"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import { whatsappLink } from "@/content/site";
import HeadlineReveal from "@/components/motion/HeadlineReveal";
import MagneticCTA from "@/components/motion/MagneticCTA";
import { DUR, EASE_OUT_EXPO } from "@/components/motion/easing";
import { ADVANCED_METABOLIC_WHATSAPP_MESSAGE } from "@/content/metabolic-advanced";

export default function AdvancedMetabolicFinalCTA() {
  const reduce = useReducedMotion();

  return (
    <section className="section-padding bg-[#0E0E0E] relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.20) 0%, transparent 55%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent"
      />

      <div className="container-max relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <HeadlineReveal
            as="h2"
            onMount={false}
            delay={0.05}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-white leading-[1.05] mb-5"
          >
            Tu metabolismo merece una evaluación más precisa que un{" "}
            <span className="text-[#E2C97E]">panel genérico</span>
          </HeadlineReveal>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px 0px" }}
            transition={
              reduce
                ? { duration: 0 }
                : { duration: DUR.slow, delay: 0.25, ease: EASE_OUT_EXPO }
            }
            className="text-base sm:text-lg text-[#BDB7AA] leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            Agenda una evaluación clínica para conocer qué panel puede aportar
            más valor según tu perfil, tus objetivos y tus condiciones.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px 0px" }}
            transition={
              reduce
                ? { duration: 0 }
                : { duration: DUR.base, delay: 0.35 }
            }
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <MagneticCTA strength={7}>
              <Link
                href="/agendar-evaluacion"
                className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#A8872E] text-[#1A1A1A] font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 shadow-[0_14px_42px_-12px_rgba(201,168,76,0.6)] hover:shadow-[0_18px_50px_-12px_rgba(201,168,76,0.75)] ring-1 ring-black/10"
              >
                Solicitar evaluación metabólica
                <ArrowRight className="w-4 h-4" />
              </Link>
            </MagneticCTA>
            <a
              href={whatsappLink(ADVANCED_METABOLIC_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white/[0.05] hover:bg-white/[0.10] border border-white/10 hover:border-[#C9A84C]/40 text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5" />
              Escribir por WhatsApp
            </a>
          </motion.div>

          {/* Inline disclaimer tuned for dark surface contrast — uses #9A9A9A
              (~8.5:1 on #0E0E0E) instead of MedicalDisclaimer's default
              #6B6B6B which targets cream/white surfaces. */}
          <div className="mt-10 max-w-2xl mx-auto">
            <div className="flex items-start gap-2.5 text-xs leading-relaxed text-[#9A9A9A] text-left">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C9A84C] shrink-0 mt-0.5" />
              <p>
                La información presentada tiene fines educativos y no sustituye
                una evaluación médica individualizada. La selección de
                laboratorios depende del historial clínico, síntomas,
                medicamentos, factores de riesgo y criterio del profesional de
                salud. No todos los pacientes requieren todos los marcadores
                mencionados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
