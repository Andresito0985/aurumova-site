"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ClipboardList,
  FlaskConical,
  LineChart,
  UserCheck,
  type LucideIcon,
} from "lucide-react";
import HeadlineReveal from "@/components/motion/HeadlineReveal";
import { DUR, EASE_OUT_QUART } from "@/components/motion/easing";
import { processSteps } from "@/content/metabolic-advanced";

const STEP_ICONS: LucideIcon[] = [
  ClipboardList,
  UserCheck,
  FlaskConical,
  LineChart,
];

export default function ProcessTimeline() {
  const reduce = useReducedMotion();

  return (
    <section className="section-padding bg-[#1A1A1A] relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 80% 0%, rgba(201,168,76,0.12) 0%, transparent 55%), radial-gradient(ellipse at 0% 100%, rgba(201,168,76,0.08) 0%, transparent 50%)",
        }}
      />
      <div className="container-max relative z-10">
        <div className="max-w-2xl mb-10 sm:mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#E2C97E] mb-3">
            Cómo funciona
          </span>
          <HeadlineReveal
            as="h2"
            onMount={false}
            delay={0.05}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-white leading-[1.05] mb-4"
          >
            Cuatro pasos para una evaluación{" "}
            <span className="text-[#E2C97E]">personalizada</span>
          </HeadlineReveal>
          <p className="text-base text-[#9A9A9A] leading-relaxed max-w-xl">
            Tu metabolismo, tus objetivos y tu historial clínico definen el
            panel — no un menú genérico de pruebas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {processSteps.map((step, i) => {
            const Icon = STEP_ICONS[i] ?? ClipboardList;
            return (
              <motion.div
                key={step.num}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px 0px" }}
                transition={
                  reduce
                    ? { duration: 0 }
                    : {
                        duration: DUR.base,
                        delay: 0.05 + i * 0.08,
                        ease: EASE_OUT_QUART,
                      }
                }
                className="relative rounded-2xl border border-[#2D2D2D] bg-[#242424] p-5 sm:p-6 transition-colors hover:border-[#C9A84C]/30"
              >
                {/* Desktop horizontal connector */}
                {i < processSteps.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="hidden lg:block absolute top-10 left-[calc(100%+4px)] w-4 h-px bg-[#C9A84C]/25 z-10"
                  />
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C9A84C]/10 ring-1 ring-[#C9A84C]/25">
                    <Icon className="h-4 w-4 text-[#C9A84C]" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold tracking-widest text-[#C9A84C]/60">
                      {step.num}
                    </span>
                  </div>
                </div>

                <h3 className="text-sm sm:text-base font-semibold text-white leading-snug mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-[#A8A8A8]">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
