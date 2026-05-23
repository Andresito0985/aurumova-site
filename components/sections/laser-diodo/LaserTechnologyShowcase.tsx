"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  Sparkles,
  Snowflake,
  Settings2,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import HeadlineReveal from "@/components/motion/HeadlineReveal";
import { DUR, EASE_OUT_QUART } from "@/components/motion/easing";
import { laserVisualByPlacement } from "@/content/laser-visuals";

type Feature = {
  icon: LucideIcon;
  letter: string;
  title: string;
  copy: string;
};

const features: Feature[] = [
  {
    icon: Sparkles,
    letter: "A",
    title: "Diodo de alta precisión",
    copy: "Energía dirigida al folículo con un enfoque diseñado para reducción progresiva del vello, según evaluación por zona.",
  },
  {
    icon: Snowflake,
    letter: "B",
    title: "Enfriamiento avanzado",
    copy: "El sistema de enfriamiento ayuda a mejorar la comodidad durante la sesión y a manejar la sensación térmica en la piel.",
  },
  {
    icon: Settings2,
    letter: "C",
    title: "Parámetros personalizables",
    copy: "La configuración se ajusta según zona, densidad del vello, tolerancia, fototipo y criterio clínico.",
  },
  {
    icon: ShieldCheck,
    letter: "D",
    title: "Experiencia clínica privada",
    copy: "Cada sesión se trabaja de forma ordenada, con preparación, seguimiento y orientación antes y después del tratamiento.",
  },
];

/**
 * Premium dark product-stage section that introduces the diode laser
 * technology. Combines a real machine/handpiece image with 4 clinical
 * feature cards that explain why the technology is meaningful — without
 * absolute claims.
 *
 * Replaces the legacy LaserValueProps as the first major content block on
 * /laser-diodo after the hero, opening the "technology-first" narrative.
 */
export default function LaserTechnologyShowcase() {
  const reduce = useReducedMotion();

  // Prefer the handpiece "cooling-clean" image — closest match to a product
  // stage shot. Fall back to the technology machine image.
  const visual =
    laserVisualByPlacement.handpiece ?? laserVisualByPlacement.technology;

  return (
    <section className="section-padding bg-[#0E0E0E] relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 18% 12%, rgba(201,168,76,0.18) 0%, transparent 55%), radial-gradient(ellipse at 88% 90%, rgba(201,168,76,0.12) 0%, transparent 50%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent"
      />

      <div className="container-max relative z-10">
        <div className="max-w-2xl mb-10 sm:mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#E2C97E] mb-3">
            Tecnología
          </span>
          <HeadlineReveal
            as="h2"
            onMount={false}
            delay={0.05}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-white leading-[1.05] mb-4"
          >
            Tecnología diodo avanzada, diseñada para precisión y{" "}
            <span className="text-[#E2C97E]">comodidad</span>
          </HeadlineReveal>
          <p className="text-base text-[#9A9A9A] leading-relaxed max-w-xl">
            Aurum Nova trabaja con láser diodo por su balance entre profundidad,
            versatilidad y precisión. El sistema apoya planes de tratamiento
            según zona, perfil de piel, densidad del vello, tolerancia y
            criterio clínico.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12 items-stretch">
          {/* Product-stage image card */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px 0px" }}
            transition={
              reduce ? { duration: 0 } : { duration: DUR.base, ease: EASE_OUT_QUART }
            }
            className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#161616] via-[#121212] to-[#0A0A0A] ring-1 ring-[#C9A84C]/15 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.55)] min-h-[420px] lg:min-h-[520px]"
          >
            {visual && (
              <Image
                src={visual.src}
                alt={visual.alt}
                fill
                sizes="(min-width: 1024px) 540px, 100vw"
                className="object-cover opacity-90"
                style={{ objectPosition: visual.objectPosition ?? "center center" }}
              />
            )}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/45 to-transparent"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  "linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)",
                backgroundSize: "52px 52px",
              }}
            />
            {/* Top chip */}
            <div className="absolute top-5 left-5 inline-flex items-center gap-1.5 rounded-full border border-[#C9A84C]/30 bg-[#0E0E0E]/70 px-3 py-1 backdrop-blur-md">
              <Sparkles className="h-3 w-3 text-[#E2C97E]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#E2C97E]">
                Sistema diodo
              </span>
            </div>
            {/* Bottom caption */}
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#E2C97E]">
                Tecnología clínica
              </p>
              <p className="mt-1 text-base sm:text-lg font-semibold text-white leading-tight">
                Más allá de un equipo estético genérico
              </p>
              <p className="mt-1 text-xs leading-relaxed text-[#BDB7AA]">
                Punto de partida de una experiencia guiada por evaluación
                clínica y parámetros personalizables.
              </p>
            </div>
          </motion.div>

          {/* Feature cards stack */}
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 content-start">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.article
                  key={feature.title}
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px 0px" }}
                  transition={
                    reduce
                      ? { duration: 0 }
                      : { duration: DUR.base, delay: 0.05 + idx * 0.07, ease: EASE_OUT_QUART }
                  }
                  className="rounded-2xl border border-[#2A2A2A] bg-[#171717] p-5 transition-colors hover:border-[#C9A84C]/30"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#C9A84C]/12 ring-1 ring-[#C9A84C]/25">
                      <Icon className="h-4 w-4 text-[#C9A84C]" />
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#C9A84C]/70">
                      {feature.letter}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-white leading-tight mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-[#A8A8A8]">
                    {feature.copy}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>

        <p className="mt-8 text-xs leading-relaxed text-[#6B6B6B] max-w-2xl">
          La tecnología apoya el plan clínico, no lo reemplaza. La evaluación
          por zona, el tipo de piel y la densidad del vello determinan el
          enfoque individual. Los resultados pueden variar.
        </p>
      </div>
    </section>
  );
}
