"use client";

// LaserPrepAftercare (refactored)
// ---------------------------------------------------------------------------
// Consolidates the previous two sub-sections (prep/aftercare 2-card layout
// + 6-card "Cuándo consultar" grid) into ONE premium editorial surface.
//
// Layout:
//   - Section header (eyebrow + headline + intro)
//   - One rounded shell with three columns on lg+:
//       Preparación · Cuidado posterior · Cuándo consultar
//     Each column is a clean bulleted list, no inner bordered tile cards.
//   - On mobile the columns stack with subtle dividers.
//
// Compliance preserved verbatim — every line carried over from the previous
// content (prepSteps, aftercareSteps, evalCards) without paraphrase.

import { motion, useReducedMotion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import HeadlineReveal from "@/components/motion/HeadlineReveal";
import { DUR, EASE_OUT_QUART } from "@/components/motion/easing";

const prepBullets = [
  "Evita exposición solar en la zona a tratar en los días previos cuando sea posible.",
  "No depilar con cera ni arrancar el vello antes de las sesiones.",
  "Afeita la zona antes de la cita si así lo indica el proveedor.",
  "Informa sobre medicamentos actuales o sensibilidad en la piel.",
  "La evaluación inicial es necesaria antes de comenzar cualquier plan.",
];

const aftercareBullets = [
  "Evita exposición solar excesiva después de las sesiones.",
  "Aplica protector solar en zonas tratadas cuando corresponda.",
  "Evita productos irritantes en la zona por el tiempo que indique el proveedor.",
  "Sigue las instrucciones específicas del proveedor para cada zona.",
  "Reporta cualquier irritación inesperada o inusual al equipo.",
];

const consultBullets = [
  "Quemadura solar reciente — consulta antes de tratar zonas afectadas.",
  "Irritación activa en la piel — puede requerir posponer el tratamiento.",
  "Medicamentos fotosensibilizantes — algunos requieren evaluación previa.",
  "Embarazo o condiciones especiales — informa al equipo antes de la evaluación.",
  "Depilación reciente con cera — espera el tiempo indicado antes de la sesión.",
  "Historial de sensibilidad cutánea — el proveedor evalúa el protocolo adecuado.",
];

export default function LaserPrepAftercare() {
  const reduce = useReducedMotion();

  return (
    <section className="section-padding bg-[#FAF8F4]">
      <div className="container-max">
        <div className="mb-10 max-w-2xl sm:mb-12">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
            Antes y después
          </span>
          <HeadlineReveal
            as="h2"
            onMount={false}
            delay={0.05}
            className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] leading-[1.05] text-[#1A1A1A]"
          >
            Preparación, cuidado y{" "}
            <span className="text-[#A8872E]">cuándo consultar</span>
          </HeadlineReveal>
          <p className="text-base leading-relaxed text-[#6B6B6B]">
            Instrucciones simples para que la evaluación y la sesión se
            realicen de forma organizada. Las indicaciones específicas se
            entregan al cierre de cada sesión según el protocolo realizado.
          </p>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px 0px" }}
          transition={
            reduce
              ? { duration: 0 }
              : { duration: DUR.slow, ease: EASE_OUT_QUART }
          }
          className="overflow-hidden rounded-3xl border border-[#E8E4DA] bg-white"
        >
          <div className="grid lg:grid-cols-3">
            {/* Preparación */}
            <div className="border-b border-[#E8E4DA] p-7 sm:p-8 lg:border-b-0 lg:border-r lg:p-9">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#A8872E]">
                Preparación
              </p>
              <h3 className="mb-5 text-xl font-semibold leading-snug text-[#1A1A1A]">
                Antes de tu sesión
              </h3>
              <ul className="space-y-3">
                {prepBullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-sm leading-relaxed text-[#3D3D3D]"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A84C]"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cuidado posterior */}
            <div className="border-b border-[#E8E4DA] bg-[#FAF8F4] p-7 sm:p-8 lg:border-b-0 lg:border-r lg:p-9">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#A8872E]">
                Cuidado posterior
              </p>
              <h3 className="mb-5 text-xl font-semibold leading-snug text-[#1A1A1A]">
                Después de tu sesión
              </h3>
              <ul className="space-y-3">
                {aftercareBullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-sm leading-relaxed text-[#3D3D3D]"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A84C]"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cuándo consultar */}
            <div className="p-7 sm:p-8 lg:p-9">
              <p className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#A8872E]">
                <AlertCircle className="h-3.5 w-3.5 text-[#C9A84C]" />
                Cuándo consultar
              </p>
              <h3 className="mb-5 text-xl font-semibold leading-snug text-[#1A1A1A]">
                Informa al equipo antes
              </h3>
              <ul className="space-y-3">
                {consultBullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-sm leading-relaxed text-[#3D3D3D]"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A84C]"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <p className="mt-8 max-w-2xl text-xs leading-relaxed text-[#9A9A9A]">
          Las recomendaciones son orientativas. El proveedor entrega
          instrucciones específicas al cierre de cada sesión según la zona
          tratada y el protocolo individual.
        </p>
      </div>
    </section>
  );
}
