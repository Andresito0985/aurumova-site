"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, Activity, ClipboardList, LineChart } from "lucide-react";

/**
 * ⚠️ LAUNCH-SAFE — NO publicar testimonios ni citas de pacientes inventadas.
 *
 * Esta sección NO muestra testimonios mientras no existan declaraciones
 * REALES y AUTORIZADAS por escrito por cada paciente. En su lugar describe,
 * de forma factual, en qué consiste la experiencia del programa (proceso
 * clínico ya descrito en el resto del sitio).
 *
 * CÓMO AÑADIR TESTIMONIOS REALES (solo con autorización):
 *   1. Obtén consentimiento por escrito del paciente para publicar su
 *      testimonio (texto y atribución).
 *   2. No uses nombre completo salvo consentimiento explícito; usa
 *      iniciales SOLO si el paciente lo autoriza.
 *   3. No incluyas afirmaciones de resultados garantizados ni
 *      comparaciones "antes/después". Mantén el disclaimer de que los
 *      resultados varían.
 *   4. Recupera el patrón de slider premium desde el historial de git
 *      (commit anterior) o pídelo de nuevo, y rellénalo con el array de
 *      testimonios reales autorizados.
 *
 * Hasta entonces, este componente debe permanecer sin citas de pacientes.
 */

const experiencePoints = [
  {
    icon: ClipboardList,
    title: "Evaluación inicial",
    description:
      "Revisamos tu historial, objetivos y elegibilidad antes de proponer cualquier protocolo.",
  },
  {
    icon: Activity,
    title: "Plan personalizado",
    description:
      "Cada protocolo se diseña según criterio clínico y tus características individuales.",
  },
  {
    icon: LineChart,
    title: "Seguimiento medible",
    description:
      "Acompañamiento con métricas reales y ajustes a lo largo del proceso.",
  },
];

const trustSignals = [
  { icon: ShieldCheck, label: "Supervisión médica" },
  { icon: Activity, label: "Seguimiento clínico" },
  { icon: ClipboardList, label: "Protocolo personalizado" },
];

export default function TestimonialsSection() {
  const reduce = useReducedMotion();

  return (
    <section className="section-padding bg-[#FAF8F4]">
      <div className="container-max">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reduce ? { duration: 0 } : undefined}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
            Experiencia del programa
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] mb-4">
            Cómo es el acompañamiento
          </h2>
          <p className="text-base text-[#6B6B6B] max-w-md mx-auto leading-relaxed">
            Cada proceso es individual y supervisado. Los testimonios de
            pacientes se publicarán únicamente cuando contemos con su
            autorización por escrito.
          </p>
        </motion.div>

        {/* Premium card — experiencia del programa (sin citas de pacientes) */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reduce ? { duration: 0 } : { duration: 0.4 }}
          className="mx-auto max-w-2xl rounded-3xl border border-[#E8E4DA] bg-white p-6 sm:p-8 shadow-sm"
        >
          {/* Trust signals */}
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 border-b border-[#F0EDE6] pb-6">
            {trustSignals.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#3D3D3D]"
              >
                <Icon className="h-4 w-4 text-[#C9A84C]" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>

          {/* Qué esperar — factual, basado en el proceso clínico del sitio */}
          <ul className="grid gap-6 pt-6 sm:grid-cols-3">
            {experiencePoints.map(({ icon: Icon, title, description }) => (
              <li key={title} className="flex flex-col gap-3 text-center sm:text-left">
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-[#C9A84C]/10 sm:mx-0">
                  <Icon className="h-5 w-5 text-[#C9A84C]" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-[#1A1A1A]">{title}</span>
                <span className="text-xs leading-relaxed text-[#6B6B6B]">
                  {description}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        <p className="text-center text-xs text-[#9A9A9A] mt-6">
          Los resultados individuales varían. No se publican testimonios sin la
          autorización por escrito del paciente.
        </p>
      </div>
    </section>
  );
}
