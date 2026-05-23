"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  Snowflake,
  Stethoscope,
  ShieldCheck,
  Activity,
  type LucideIcon,
} from "lucide-react";
import HeadlineReveal from "@/components/motion/HeadlineReveal";
import { DUR, EASE_OUT_QUART } from "@/components/motion/easing";
import { laserVisualByPlacement } from "@/content/laser-visuals";

type Reassurance = {
  icon: LucideIcon;
  title: string;
  copy: string;
};

const reassurances: Reassurance[] = [
  {
    icon: Snowflake,
    title: "Enfriamiento avanzado",
    copy: "El sistema de enfriamiento ayuda a que la experiencia sea más tolerable y a manejar la sensación térmica durante la sesión.",
  },
  {
    icon: Activity,
    title: "Parámetros precisos",
    copy: "La configuración se ajusta según zona, fototipo y densidad del vello para trabajar con cuidado y seguimiento.",
  },
  {
    icon: Stethoscope,
    title: "Preparación y orientación",
    copy: "Antes y después de cada sesión, el equipo orienta sobre cuidado de la piel, expectativas y próximos pasos.",
  },
];

/**
 * Cooling + comfort reassurance section. Clinically responsible language —
 * never claims "painless", "sin dolor", or guaranteed comfort. Communicates
 * that sensation varies and that cooling supports a more tolerable
 * experience.
 */
export default function LaserCoolingComfort() {
  const reduce = useReducedMotion();

  // Prefer the experience/room visual; fall back to handpiece.
  const visual =
    laserVisualByPlacement.experience ?? laserVisualByPlacement.handpiece;

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-[1fr_0.95fr] gap-10 lg:gap-14 items-center">
          {/* Copy + reassurance cards */}
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
              Comodidad clínica
            </span>
            <HeadlineReveal
              as="h2"
              onMount={false}
              delay={0.05}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-[#1A1A1A] leading-[1.05] mb-4"
            >
              Más comodidad no significa{" "}
              <span className="text-[#A8872E]">menos tecnología</span>
            </HeadlineReveal>
            <p className="text-base text-[#6B6B6B] leading-relaxed mb-6 max-w-xl">
              La sensación durante la sesión puede variar según la zona, la
              densidad del vello, la sensibilidad individual y los parámetros
              configurados. El enfriamiento avanzado ayuda a que la experiencia
              sea más tolerable, y el equipo trabaja con precisión, cuidado y
              seguimiento clínico.
            </p>

            <div className="grid sm:grid-cols-3 gap-3">
              {reassurances.map((r, idx) => {
                const Icon = r.icon;
                return (
                  <motion.div
                    key={r.title}
                    initial={reduce ? false : { opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px 0px" }}
                    transition={
                      reduce
                        ? { duration: 0 }
                        : { duration: DUR.base, delay: idx * 0.07, ease: EASE_OUT_QUART }
                    }
                    className="rounded-2xl border border-[#E8E4DA] bg-[#FAF8F4] p-4"
                  >
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[#C9A84C]/10 ring-1 ring-[#C9A84C]/20">
                      <Icon className="h-4 w-4 text-[#C9A84C]" />
                    </div>
                    <p className="text-sm font-semibold text-[#1A1A1A] leading-tight mb-2">
                      {r.title}
                    </p>
                    <p className="text-xs leading-relaxed text-[#6B6B6B]">
                      {r.copy}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-6 flex items-start gap-2 text-xs leading-relaxed text-[#6B6B6B]">
              <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#C9A84C]" />
              <p>
                La sensibilidad puede variar según cada paciente y zona tratada.
                No todos los pacientes responden igual; el número de sesiones y
                la experiencia individual dependen de la evaluación clínica.
              </p>
            </div>
          </div>

          {/* Visual — clinical room or handpiece, premium framing */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px 0px" }}
            transition={
              reduce ? { duration: 0 } : { duration: DUR.base, ease: EASE_OUT_QUART }
            }
            className="relative rounded-3xl overflow-hidden ring-1 ring-[#E8E4DA] shadow-[0_24px_60px_-24px_rgba(0,0,0,0.18)] min-h-[360px] lg:min-h-[460px] bg-[#FAF8F4]"
          >
            {visual && (
              <Image
                src={visual.src}
                alt={visual.alt}
                fill
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover"
                style={{
                  objectPosition: visual.objectPosition ?? "center center",
                }}
              />
            )}
            {/* Subtle warm overlay for cohesion */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/35 via-transparent to-transparent"
            />
            <div className="absolute bottom-5 left-5 right-5">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FAF8F4]/90 backdrop-blur-md border border-[#E8E4DA] px-3 py-1 mb-2">
                <Snowflake className="h-3 w-3 text-[#C9A84C]" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#A8872E]">
                  Experiencia clínica
                </span>
              </div>
              <p className="text-sm font-semibold text-white leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                Sala privada · Equipo guiado · Seguimiento clínico
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
