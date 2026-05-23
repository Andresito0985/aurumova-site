"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BookOpen } from "lucide-react";
import HeadlineReveal from "@/components/motion/HeadlineReveal";
import MedicalDisclaimer from "@/components/ui/MedicalDisclaimer";
import { DUR, EASE_OUT_QUART } from "@/components/motion/easing";
import { evidenceFrameworks } from "@/content/metabolic-advanced";

export default function EvidenceSection() {
  const reduce = useReducedMotion();

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-12 items-start">
          {/* Left — copy */}
          <div className="max-w-xl">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
              Base clínica
            </span>
            <HeadlineReveal
              as="h2"
              onMount={false}
              delay={0.05}
              className="text-3xl sm:text-4xl font-bold tracking-[-0.02em] text-[#1A1A1A] leading-[1.05] mb-4"
            >
              Diseñado con base clínica{" "}
              <span className="text-[#A8872E]">actualizada</span>
            </HeadlineReveal>
            <p className="text-base text-[#6B6B6B] leading-relaxed mb-5">
              Nuestros protocolos se diseñan considerando recomendaciones
              clínicas de áreas como diabetes, prevención cardiovascular, salud
              renal, hígado graso metabólico, endocrinología y SOP/PCOS.
            </p>
            <p className="text-sm text-[#9A9A9A] leading-relaxed mb-6">
              Trabajamos basado en marcos clínicos de referencia como los
              listados a la derecha. Aurum Nova Wellness Clinic no está
              oficialmente afiliada a estas organizaciones.
            </p>
            <MedicalDisclaimer
              variant="inline"
              custom="La selección de pruebas se individualiza. Esta página es educativa y no sustituye una evaluación médica."
            />
          </div>

          {/* Right — framework grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {evidenceFrameworks.map((framework, idx) => (
              <motion.article
                key={framework.shortName}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px 0px" }}
                transition={
                  reduce
                    ? { duration: 0 }
                    : {
                        duration: DUR.base,
                        delay: 0.05 + idx * 0.05,
                        ease: EASE_OUT_QUART,
                      }
                }
                className="rounded-2xl border border-[#E8E4DA] bg-[#FAF8F4] p-4 sm:p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#C9A84C]/10 ring-1 ring-[#C9A84C]/20">
                    <BookOpen className="h-4 w-4 text-[#C9A84C]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-[#1A1A1A] leading-tight">
                      {framework.shortName}
                    </p>
                    <p className="mt-0.5 text-[11px] font-medium text-[#6B6B6B] leading-snug">
                      {framework.fullName}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-[#3D3D3D]">
                      {framework.area}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
