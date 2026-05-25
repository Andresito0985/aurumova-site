"use client";

// MetabolicHowWeWork
// ---------------------------------------------------------------------------
// Editorial narrative section that consolidates three previous card-heavy
// sections (MetabolicWhatIs, MetabolicWho, MetabolicIncludes) into a single
// "Cómo trabajamos" surface.
//
// Four scenes — Evaluamos · Personalizamos · Medimos · Ajustamos — laid out
// without bordered cards. Each scene is a clean editorial block with a
// large gold step number, a short title, and a 2-sentence paragraph.
//
// Compliance:
//   - "Evaluación antes de cualquier protocolo" — preserved verbatim.
//   - "Sin paquetes genéricos · cada plan responde a tu perfil" — preserved.
//   - No outcome promises. The page-level disclaimer continues to apply.

import { motion, useReducedMotion } from "framer-motion";
import HeadlineReveal from "@/components/motion/HeadlineReveal";
import { DUR, EASE_OUT_QUART } from "@/components/motion/easing";

interface Scene {
  num: string;
  title: string;
  body: string;
}

const scenes: Scene[] = [
  {
    num: "01",
    title: "Evaluamos",
    body: "Historia clínica completa, examen físico, revisión de medicamentos actuales y panel metabólico de laboratorio cuando aplica. No iniciamos ningún protocolo sin evaluación médica previa.",
  },
  {
    num: "02",
    title: "Personalizamos",
    body: "El médico diseña tu protocolo individual según historial, laboratorios, metas, tolerancia y elegibilidad. Sin paquetes genéricos — cada plan responde a tu perfil.",
  },
  {
    num: "03",
    title: "Medimos",
    body: "Cada sesión actualiza tus métricas: peso, IMC, perímetro de cintura, adherencia, tolerancia y respuesta clínica. El progreso se documenta, no se asume.",
  },
  {
    num: "04",
    title: "Ajustamos",
    body: "Revisión mensual del protocolo y comunicación entre citas cuando aplica. Un programa que no evoluciona contigo no es personalizado.",
  },
];

export default function MetabolicHowWeWork() {
  const reduce = useReducedMotion();

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="mb-12 sm:mb-16 max-w-2xl">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
            Cómo trabajamos
          </span>
          <HeadlineReveal
            as="h2"
            onMount={false}
            delay={0.05}
            className="mb-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] leading-[1.05] text-[#1A1A1A]"
          >
            Evaluar antes de{" "}
            <span className="text-[#A8872E]">recomendar</span>
          </HeadlineReveal>
          <p className="text-base sm:text-lg leading-relaxed text-[#6B6B6B]">
            El programa no es un plan de dieta ni un régimen de ejercicio. Es
            un protocolo médico supervisado que se construye sobre evaluación,
            personalización, métricas y ajustes — en ese orden.
          </p>
        </div>

        <div className="grid gap-x-10 gap-y-12 max-w-5xl lg:grid-cols-2 lg:gap-x-14 lg:gap-y-16">
          {scenes.map((scene, i) => (
            <motion.article
              key={scene.num}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px 0px" }}
              transition={
                reduce
                  ? { duration: 0 }
                  : {
                      duration: DUR.slow,
                      delay: i * 0.08,
                      ease: EASE_OUT_QUART,
                    }
              }
              className="flex items-start gap-5 sm:gap-6"
            >
              <span
                aria-hidden="true"
                className="shrink-0 text-5xl sm:text-6xl font-bold leading-none tracking-tight text-[#C9A84C]"
              >
                {scene.num}
              </span>
              <div>
                <h3 className="mb-3 text-xl sm:text-2xl font-semibold leading-tight text-[#1A1A1A]">
                  {scene.title}
                </h3>
                <p className="text-base leading-relaxed text-[#6B6B6B]">
                  {scene.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="mt-12 max-w-2xl text-xs leading-relaxed text-[#9A9A9A]">
          Cada elemento del programa requiere evaluación médica previa. La
          elegibilidad, las intervenciones específicas y la duración del
          protocolo son determinadas individualmente por el médico tratante.
        </p>
      </div>
    </section>
  );
}
