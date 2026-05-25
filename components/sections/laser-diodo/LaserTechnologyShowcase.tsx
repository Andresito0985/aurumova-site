"use client";

// LaserTechnologyShowcase (refactored)
// ---------------------------------------------------------------------------
// Consolidates the previous LaserTechnologyShowcase + LaserVisualStory into
// one premium "machine showcase" section. The dramatic equipment moment
// lives here (not in the hero) so the photograph can be presented at full
// scale.
//
// Layout:
//   - Editorial header (eyebrow + headline + intro paragraph)
//   - Large dark frame around the approved machine image with a caption
//     strip overlay
//   - 4 clean editorial points laid out in a row — no bordered tile cards
//   - Two smaller frames below (handpiece + clinical experience), each with
//     a single caption line
//   - Footer compliance line
//
// Compliance preserved:
//   - "Reducción progresiva", "según evaluación clínica"
//   - "Apoyo de enfriamiento" — never "indoloro"
//   - "Resultados pueden variar"

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  Settings2,
  ShieldCheck,
  Snowflake,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import HeadlineReveal from "@/components/motion/HeadlineReveal";
import { DUR, EASE_OUT_QUART } from "@/components/motion/easing";
import { laserVisualByPlacement } from "@/content/laser-visuals";

type Feature = {
  icon: LucideIcon;
  label: string;
  copy: string;
};

const features: Feature[] = [
  {
    icon: Sparkles,
    label: "Diodo de alta precisión",
    copy: "Energía dirigida al folículo con enfoque progresivo, según evaluación por zona.",
  },
  {
    icon: Snowflake,
    label: "Enfriamiento avanzado",
    copy: "Apoyo de enfriamiento por contacto que ayuda a manejar la sensación térmica.",
  },
  {
    icon: Settings2,
    label: "Parámetros personalizables",
    copy: "Configuración ajustable según zona, fototipo, densidad del vello y tolerancia.",
  },
  {
    icon: ShieldCheck,
    label: "Experiencia clínica privada",
    copy: "Sesiones organizadas con preparación, seguimiento y orientación antes y después.",
  },
];

export default function LaserTechnologyShowcase() {
  const reduce = useReducedMotion();

  // Hero machine image — primary technology placement; falls back to
  // handpiece if technology isn't available.
  const mainVisual =
    laserVisualByPlacement.technology ?? laserVisualByPlacement.handpiece;
  const handpieceVisual = laserVisualByPlacement.handpiece;
  const experienceVisual = laserVisualByPlacement.experience;

  return (
    <section className="section-padding relative overflow-hidden bg-[#0E0E0E]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
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
        <div className="mb-12 max-w-2xl sm:mb-14">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-[#E2C97E]">
            Tecnología
          </span>
          <HeadlineReveal
            as="h2"
            onMount={false}
            delay={0.05}
            className="mb-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] leading-[1.05] text-white"
          >
            Equipo diodo en una sala{" "}
            <span className="text-[#E2C97E]">clínica privada</span>
          </HeadlineReveal>
          <p className="max-w-xl text-base sm:text-lg leading-relaxed text-[#9A9A9A]">
            Trabajamos con láser diodo por su balance entre profundidad,
            versatilidad y precisión. La tecnología apoya el plan clínico
            personalizado — no lo reemplaza.
          </p>
        </div>

        {/* Hero machine frame — large editorial moment */}
        <motion.figure
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px 0px" }}
          transition={
            reduce
              ? { duration: 0 }
              : { duration: DUR.slow, ease: EASE_OUT_QUART }
          }
          className="relative mb-12 aspect-[16/10] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#161616] via-[#121212] to-[#0A0A0A] ring-1 ring-[#C9A84C]/18 shadow-[0_30px_90px_-30px_rgba(0,0,0,0.65)] sm:aspect-[2/1] lg:aspect-[21/9]"
        >
          {mainVisual && (
            <Image
              src={mainVisual.src}
              alt={mainVisual.alt}
              fill
              sizes="(min-width: 1024px) 1040px, 100vw"
              className="object-cover"
              style={{
                objectPosition: mainVisual.objectPosition ?? "center center",
              }}
            />
          )}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.45) 100%), radial-gradient(ellipse at 78% 14%, rgba(201,168,76,0.18) 0%, transparent 55%)",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />
          <span
            aria-hidden="true"
            className="absolute inset-3 rounded-2xl ring-1 ring-[#C9A84C]/20 sm:inset-4"
          />
          <figcaption className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C9A84C]/30 bg-[#0E0E0E]/70 px-3 py-1 backdrop-blur-md">
              <Sparkles className="h-3 w-3 text-[#E2C97E]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#E2C97E]">
                Sistema diodo
              </span>
            </div>
            <p className="mt-3 max-w-xl text-base sm:text-lg font-semibold leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              Más allá de un equipo estético genérico
            </p>
            <p className="mt-1 max-w-md text-xs leading-relaxed text-[#BDB7AA]">
              Punto de partida de una experiencia guiada por evaluación clínica
              y parámetros personalizables.
            </p>
          </figcaption>
        </motion.figure>

        {/* Features — editorial row, no bordered tile cards */}
        <div className="mb-14 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.label}
                initial={reduce ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px 0px" }}
                transition={
                  reduce
                    ? { duration: 0 }
                    : {
                        duration: DUR.base,
                        delay: idx * 0.06,
                        ease: EASE_OUT_QUART,
                      }
                }
                className="flex gap-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#C9A84C]/[0.08] ring-1 ring-[#C9A84C]/25">
                  <Icon className="h-4 w-4 text-[#C9A84C]" />
                </span>
                <div>
                  <p className="mb-2 text-sm font-semibold leading-snug text-white">
                    {feature.label}
                  </p>
                  <p className="text-xs leading-relaxed text-[#A8A8A8]">
                    {feature.copy}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Secondary frames — handpiece + clinical experience */}
        <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
          <motion.figure
            initial={reduce ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px 0px" }}
            transition={
              reduce
                ? { duration: 0 }
                : { duration: DUR.slow, ease: EASE_OUT_QUART }
            }
            className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-[#161616] via-[#121212] to-[#0A0A0A] ring-1 ring-[#C9A84C]/15"
          >
            {handpieceVisual && (
              <Image
                src={handpieceVisual.src}
                alt={handpieceVisual.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                style={{
                  objectPosition:
                    handpieceVisual.objectPosition ?? "center center",
                }}
              />
            )}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/65 via-[#0A0A0A]/20 to-transparent"
            />
            <figcaption className="absolute bottom-5 left-5 right-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#E2C97E]">
                Handpiece con enfriamiento
              </p>
              <p className="mt-1.5 text-sm font-semibold leading-tight text-white">
                Punta de contacto para trabajo por zonas
              </p>
            </figcaption>
          </motion.figure>

          <motion.figure
            initial={reduce ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px 0px" }}
            transition={
              reduce
                ? { duration: 0 }
                : {
                    duration: DUR.slow,
                    delay: 0.08,
                    ease: EASE_OUT_QUART,
                  }
            }
            className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-[#161616] via-[#121212] to-[#0A0A0A] ring-1 ring-[#C9A84C]/15"
          >
            {experienceVisual && (
              <Image
                src={experienceVisual.src}
                alt={experienceVisual.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                style={{
                  objectPosition:
                    experienceVisual.objectPosition ?? "center center",
                }}
              />
            )}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/65 via-[#0A0A0A]/20 to-transparent"
            />
            <figcaption className="absolute bottom-5 left-5 right-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#E2C97E]">
                Experiencia clínica privada
              </p>
              <p className="mt-1.5 text-sm font-semibold leading-tight text-white">
                Sala guiada y seguimiento clínico
              </p>
            </figcaption>
          </motion.figure>
        </div>

        <p className="mt-10 max-w-2xl text-xs leading-relaxed text-[#6B6B6B]">
          La configuración del equipo y la cadencia del plan se discuten
          durante la evaluación. La reducción del vello es progresiva, y los
          resultados pueden variar según características individuales y la
          zona tratada.
        </p>
      </div>
    </section>
  );
}
