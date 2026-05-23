"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Info } from "lucide-react";
import HeadlineReveal from "@/components/motion/HeadlineReveal";
import { DUR, EASE_OUT_QUART } from "@/components/motion/easing";

type Technology = {
  id: string;
  name: string;
  shortType: string;
  points: string[];
  featured?: boolean;
};

const technologies: Technology[] = [
  {
    id: "ipl",
    name: "IPL",
    shortType: "Luz pulsada intensa",
    points: [
      "No es técnicamente un láser.",
      "Puede ser útil en algunos contextos.",
      "Resultados dependen mucho del equipo y del perfil clínico.",
    ],
  },
  {
    id: "alexandrite",
    name: "Alexandrita",
    shortType: "Longitud de onda 755 nm",
    points: [
      "Comúnmente usada en depilación.",
      "Puede ser eficaz en ciertos perfiles de piel.",
      "Requiere selección cuidadosa según piel y vello.",
    ],
  },
  {
    id: "diode",
    name: "Diodo",
    shortType: "Longitud de onda 808–810 nm",
    points: [
      "Balance entre profundidad, precisión y versatilidad.",
      "Adecuado para múltiples zonas.",
      "Permite protocolos personalizados según evaluación clínica.",
    ],
    featured: true,
  },
  {
    id: "ndyag",
    name: "Nd:YAG",
    shortType: "Longitud de onda 1064 nm",
    points: [
      "Puede considerarse en ciertos fototipos o contextos clínicos.",
      "Mayor profundidad de penetración.",
      "Requiere evaluación especializada según el caso.",
    ],
  },
];

/**
 * Educational comparison of common hair-reduction laser technologies.
 * Presents IPL, Alexandrite, Diode and Nd:YAG side-by-side in a clean
 * card grid. Diode is highlighted as Aurum Nova's choice without making
 * absolute or comparative claims against the others.
 *
 * Compliance posture:
 *  - No "best for everyone" claims.
 *  - No attacks on other technologies.
 *  - Each card lists factual technical traits + a generic context note.
 */
export default function DiodeTechnologyComparison() {
  const reduce = useReducedMotion();

  return (
    <section className="section-padding bg-[#FAF8F4]">
      <div className="container-max">
        <div className="max-w-2xl mb-10 sm:mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
            Comparativa educativa
          </span>
          <HeadlineReveal
            as="h2"
            onMount={false}
            delay={0.05}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-[#1A1A1A] leading-[1.05] mb-4"
          >
            ¿Por qué trabajamos con{" "}
            <span className="text-[#A8872E]">láser diodo?</span>
          </HeadlineReveal>
          <p className="text-base text-[#6B6B6B] leading-relaxed max-w-xl">
            Existen distintas tecnologías para reducción de vello. Cada una
            tiene su perfil, sus contextos y sus consideraciones clínicas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {technologies.map((tech, idx) => (
            <motion.article
              key={tech.id}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px 0px" }}
              transition={
                reduce
                  ? { duration: 0 }
                  : { duration: DUR.base, delay: idx * 0.06, ease: EASE_OUT_QUART }
              }
              className={`relative flex h-full flex-col rounded-2xl border p-5 sm:p-6 transition-shadow ${
                tech.featured
                  ? "border-[#C9A84C]/55 bg-gradient-to-br from-[#1A1A1A] via-[#161616] to-[#0E0E0E] shadow-[0_24px_60px_-24px_rgba(201,168,76,0.30)]"
                  : "border-[#E8E4DA] bg-white shadow-[0_16px_40px_-30px_rgba(0,0,0,0.12)]"
              }`}
            >
              {tech.featured && (
                <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full border border-[#C9A84C]/40 bg-[#0E0E0E]/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-[#E2C97E] backdrop-blur">
                  Aurum Nova
                </span>
              )}

              <p
                className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${
                  tech.featured ? "text-[#E2C97E]" : "text-[#A8872E]"
                }`}
              >
                {tech.shortType}
              </p>
              <h3
                className={`text-xl font-bold tracking-tight mb-4 ${
                  tech.featured ? "text-white" : "text-[#1A1A1A]"
                }`}
              >
                {tech.name}
              </h3>

              <ul className="space-y-2 flex-1">
                {tech.points.map((p) => (
                  <li
                    key={p}
                    className={`flex items-start gap-2 text-xs leading-relaxed ${
                      tech.featured ? "text-[#D8D2C7]" : "text-[#3D3D3D]"
                    }`}
                  >
                    <CheckCircle2
                      className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${
                        tech.featured ? "text-[#C9A84C]" : "text-[#C9A84C]/80"
                      }`}
                    />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        {/* Key takeaway banner */}
        <div className="mt-8 rounded-2xl border border-[#E8E4DA] bg-white p-5 sm:p-6 flex items-start gap-3 max-w-3xl">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#C9A84C]/10">
            <Info className="h-4 w-4 text-[#C9A84C]" />
          </div>
          <p className="text-sm leading-relaxed text-[#3D3D3D]">
            <span className="font-semibold text-[#1A1A1A]">
              En Aurum Nova seleccionamos el diodo porque ofrece un balance
              tecnológico que se alinea con nuestra forma de trabajar:
            </span>{" "}
            evaluación por zona, personalización y comodidad. La elegibilidad
            final depende de evaluación clínica individual.
          </p>
        </div>
      </div>
    </section>
  );
}
