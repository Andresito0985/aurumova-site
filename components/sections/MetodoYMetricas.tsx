"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ClipboardList,
  UserCheck,
  LineChart,
  RefreshCw,
  Scale,
  Ruler,
  TrendingDown,
  Heart,
  CheckCircle2,
  BarChart2,
} from "lucide-react";
import HeadlineReveal from "@/components/motion/HeadlineReveal";
import RevealStagger from "@/components/motion/RevealStagger";
import { DUR, EASE_OUT_QUART } from "@/components/motion/easing";

// 4 method steps — was MetodoAurum
const methodSteps = [
  {
    icon: ClipboardList,
    number: "01",
    word: "Evaluar",
    description:
      "Historial, laboratorios, composición corporal y perfil metabólico. No comenzamos sin saber quién eres clínicamente.",
  },
  {
    icon: UserCheck,
    number: "02",
    word: "Personalizar",
    description:
      "El médico diseña tu plan. Sin paquetes genéricos — cada protocolo responde a tu perfil y objetivos.",
  },
  {
    icon: LineChart,
    number: "03",
    word: "Medir",
    description:
      "Peso, circunferencias, composición, apetito, tolerancia y adherencia. El progreso se documenta.",
  },
  {
    icon: RefreshCw,
    number: "04",
    word: "Optimizar",
    description:
      "Revisión mensual del protocolo. Un programa que no evoluciona contigo no es personalizado.",
  },
];

// Metrics — was ResultsTracking
const metrics = [
  { icon: Scale, label: "Peso corporal" },
  { icon: BarChart2, label: "IMC" },
  { icon: Ruler, label: "Circunferencias" },
  { icon: TrendingDown, label: "Composición corporal" },
  { icon: Heart, label: "Apetito y tolerancia" },
  { icon: CheckCircle2, label: "Adherencia" },
];

/**
 * Merged dark section that replaces MetodoAurum + ResultsTracking.
 *
 * Left column (method) explains the 4-step clinical approach.
 * Right column (metrics) lists what gets measured in each follow-up.
 *
 * Stacks on mobile. Single dark anchor instead of two consecutive sections.
 */
export default function MetodoYMetricas() {
  const reduce = useReducedMotion();

  return (
    <section className="section-padding bg-[#0E0E0E] relative overflow-hidden">
      {/* Subtle gold radial accents */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 18% 12%, rgba(201,168,76,0.16) 0%, transparent 52%), radial-gradient(ellipse at 86% 88%, rgba(201,168,76,0.10) 0%, transparent 48%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/35 to-transparent"
      />

      <div className="container-max relative z-10">
        <div className="max-w-2xl mb-12 sm:mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#E2C97E] mb-3">
            Método clínico
          </span>
          <HeadlineReveal
            as="h2"
            onMount={false}
            delay={0.1}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-white leading-[1.05] mb-4"
          >
            Cómo trabajamos y qué{" "}
            <span className="text-[#E2C97E]">medimos</span>
          </HeadlineReveal>
          <p className="text-base text-[#9A9A9A] leading-relaxed max-w-xl">
            Sin atajos, sin promesas vacías. Cuatro pasos de precisión clínica y
            métricas objetivas en cada seguimiento — no dependemos de cómo te
            "sientes" ese día.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          {/* Method — 4 steps */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#C9A84C] mb-5">
              El método
            </p>
            <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {methodSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.number}
                    className="group relative rounded-2xl border border-[#2A2A2A] bg-[#171717] p-5 transition-colors hover:border-[#C9A84C]/30"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C9A84C]/10 ring-1 ring-[#C9A84C]/25">
                        <Icon className="h-4 w-4 text-[#C9A84C]" />
                      </div>
                      <div>
                        <span className="block text-[10px] font-bold tracking-widest text-[#C9A84C]/60">
                          {step.number}
                        </span>
                        <span className="block text-sm font-semibold text-[#E2C97E]">
                          {step.word}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs leading-relaxed text-[#A8A8A8]">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </RevealStagger>
          </div>

          {/* Metrics — chip-style list */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#C9A84C] mb-5">
              Lo que medimos
            </p>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px 0px" }}
              transition={reduce ? { duration: 0 } : { duration: DUR.base, ease: EASE_OUT_QUART }}
              className="rounded-3xl border border-[#2A2A2A] bg-[#121212] p-5 sm:p-6"
            >
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {metrics.map((m, i) => {
                  const Icon = m.icon;
                  return (
                    <motion.li
                      key={m.label}
                      initial={reduce ? false : { opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={
                        reduce
                          ? { duration: 0 }
                          : { duration: DUR.base, delay: 0.1 + i * 0.06, ease: EASE_OUT_QUART }
                      }
                      className="flex items-center gap-3 rounded-2xl border border-[#1F1F1F] bg-[#171717] px-3 py-2.5"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#C9A84C]/10">
                        <Icon className="h-4 w-4 text-[#C9A84C]" aria-hidden="true" />
                      </span>
                      <span className="text-xs font-medium leading-snug text-[#E8E4DA]">
                        {m.label}
                      </span>
                    </motion.li>
                  );
                })}
              </ul>

              <div className="mt-5 rounded-2xl border border-[#C9A84C]/25 bg-[#C9A84C]/[0.06] p-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#E2C97E] mb-2">
                  Próximamente
                </p>
                <p className="text-xs leading-relaxed text-[#BDB7AA]">
                  Dashboard digital de seguimiento con tus métricas e historial
                  en tiempo real.
                </p>
              </div>
            </motion.div>

            <p className="mt-5 text-xs leading-relaxed text-[#6B6B6B]">
              No prometemos números específicos. Los resultados pueden variar
              según historial, adherencia y respuesta individual al protocolo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
