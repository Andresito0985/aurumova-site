"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Circle, Info } from "lucide-react";
import HeadlineReveal from "@/components/motion/HeadlineReveal";
import { DUR, EASE_OUT_QUART } from "@/components/motion/easing";

const basicPanel = [
  "Glucosa",
  "Electrolitos",
  "Creatinina",
  "Enzimas hepáticas básicas",
  "Colesterol general",
  "Información útil, pero limitada",
];

const advancedPanel = [
  "Resistencia a la insulina",
  "ApoB y carga real de partículas aterogénicas",
  "Lipoproteína(a) como riesgo genético cardiovascular",
  "hsCRP como inflamación cardiometabólica",
  "UACR para riesgo renal temprano",
  "FIB-4 para riesgo de fibrosis hepática metabólica",
  "Marcadores tiroideos y nutricionales según caso",
  "Selección personalizada según condición",
];

export default function BasicVsAdvancedComparator() {
  const reduce = useReducedMotion();

  return (
    <section className="section-padding bg-[#FAF8F4]" id="comparativa">
      <div className="container-max">
        <div className="max-w-2xl mb-10 sm:mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
            Panel general vs evaluación avanzada
          </span>
          <HeadlineReveal
            as="h2"
            onMount={false}
            delay={0.05}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-[#1A1A1A] leading-[1.05] mb-4"
          >
            Un panel básico no siempre cuenta la{" "}
            <span className="text-[#A8872E]">historia completa</span>
          </HeadlineReveal>
          <p className="text-base text-[#6B6B6B] leading-relaxed max-w-xl">
            Lo básico puede estar dentro de rango y aun así existir riesgo
            metabólico que merece evaluación más específica. La pregunta no es
            si pedir más pruebas, sino qué pruebas tienen sentido para tu caso.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 lg:gap-5">
          {/* Basic panel card */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px 0px" }}
            transition={reduce ? { duration: 0 } : { duration: DUR.base, ease: EASE_OUT_QUART }}
            className="rounded-3xl border border-[#E8E4DA] bg-white p-6 sm:p-7 shadow-[0_20px_40px_-30px_rgba(0,0,0,0.15)]"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FAF8F4] border border-[#E8E4DA]">
                <Circle className="h-4 w-4 text-[#9A9A9A]" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#9A9A9A]">
                  Panel metabólico general
                </p>
                <p className="text-base font-semibold text-[#1A1A1A]">
                  Punto de partida útil
                </p>
              </div>
            </div>
            <ul className="space-y-2.5">
              {basicPanel.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-[#3D3D3D] leading-relaxed"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#9A9A9A]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Advanced evaluation card — highlighted */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px 0px" }}
            transition={
              reduce
                ? { duration: 0 }
                : { duration: DUR.base, delay: 0.08, ease: EASE_OUT_QUART }
            }
            className="relative rounded-3xl border border-[#C9A84C]/40 bg-gradient-to-br from-[#1A1A1A] via-[#161616] to-[#0E0E0E] p-6 sm:p-7 shadow-[0_24px_60px_-24px_rgba(201,168,76,0.30)] ring-1 ring-[#C9A84C]/15"
          >
            <div
              aria-hidden="true"
              className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/60 to-transparent"
            />
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C9A84C]/12 ring-1 ring-[#C9A84C]/30">
                <CheckCircle2 className="h-4 w-4 text-[#E2C97E]" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#E2C97E]">
                  Evaluación metabólica avanzada
                </p>
                <p className="text-base font-semibold text-white">
                  Selección personalizada
                </p>
              </div>
            </div>
            <ul className="space-y-2.5">
              {advancedPanel.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-[#D8D2C7] leading-relaxed"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A84C]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Key message banner */}
        <div className="mt-8 rounded-2xl border border-[#E8E4DA] bg-white p-5 sm:p-6 flex items-start gap-3 max-w-3xl">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#C9A84C]/10">
            <Info className="h-4 w-4 text-[#C9A84C]" />
          </div>
          <p className="text-sm leading-relaxed text-[#3D3D3D]">
            <span className="font-semibold text-[#1A1A1A]">
              El objetivo no es ordenar más pruebas, sino ordenar las pruebas
              correctas.
            </span>{" "}
            La selección depende de tu historial, síntomas, medicamentos,
            objetivos y factores de riesgo — y se confirma durante la
            evaluación clínica.
          </p>
        </div>
      </div>
    </section>
  );
}
