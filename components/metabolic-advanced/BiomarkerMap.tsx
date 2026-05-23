"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  Droplets,
  Flame,
  Heart,
  Leaf,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import HeadlineReveal from "@/components/motion/HeadlineReveal";
import { DUR, EASE_OUT_QUART } from "@/components/motion/easing";
import {
  type BiomarkerCategoryId,
  biomarkerMap,
} from "@/content/metabolic-advanced";

const CATEGORY_ICON: Record<BiomarkerCategoryId, LucideIcon> = {
  glucosa: Activity,
  lipidos: Heart,
  inflamacion: Flame,
  higado: ShieldCheck,
  rinon: Droplets,
  tiroides: Sparkles,
  nutricion: Leaf,
};

export default function BiomarkerMap() {
  const reduce = useReducedMotion();

  return (
    <section className="section-padding bg-[#FAF8F4]">
      <div className="container-max">
        <div className="max-w-2xl mb-10 sm:mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
            Biomarcadores clave
          </span>
          <HeadlineReveal
            as="h2"
            onMount={false}
            delay={0.05}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-[#1A1A1A] leading-[1.05] mb-4"
          >
            Marcadores que pueden formar parte de tu{" "}
            <span className="text-[#A8872E]">evaluación</span>
          </HeadlineReveal>
          <p className="text-base text-[#6B6B6B] leading-relaxed max-w-xl">
            Estos marcadores se consideran según contexto clínico. No todos
            aplican a todos los pacientes — la selección depende de tu perfil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {biomarkerMap.map((group, idx) => {
            const Icon = CATEGORY_ICON[group.id];
            return (
              <motion.div
                key={group.id}
                initial={reduce ? false : { opacity: 0, y: 16 }}
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
                className="rounded-2xl border border-[#E8E4DA] bg-white p-5 sm:p-6 shadow-[0_16px_40px_-30px_rgba(0,0,0,0.15)]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C9A84C]/10 ring-1 ring-[#C9A84C]/20">
                    <Icon className="h-4 w-4 text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A8872E]">
                      Categoría
                    </p>
                    <p className="text-base font-semibold text-[#1A1A1A] leading-tight">
                      {group.label}
                    </p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className="rounded-xl border border-[#F0EDE6] bg-[#FAF8F4] px-3.5 py-3"
                    >
                      <p className="text-sm font-semibold text-[#1A1A1A] leading-tight">
                        {item.name}
                      </p>
                      <p className="mt-1.5 text-xs leading-relaxed text-[#6B6B6B]">
                        {item.explanation}
                      </p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-8 text-xs leading-relaxed text-[#9A9A9A] max-w-2xl">
          Un resultado normal no siempre significa que el riesgo metabólico esté
          completamente evaluado, ni un resultado fuera de rango implica
          diagnóstico automático. La interpretación clínica considera contexto
          individual.
        </p>
      </div>
    </section>
  );
}
