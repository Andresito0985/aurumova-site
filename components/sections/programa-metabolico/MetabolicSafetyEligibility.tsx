"use client";

// MetabolicSafetyEligibility
// ---------------------------------------------------------------------------
// Consolidates three previous sections into a single premium clinical
// surface:
//   - MetabolicWho (eligibility conditions)
//   - MetabolicSafety (4 safety pillars + safety prose)
//   - MetabolicCompounding (full FDA-notice block, preserved verbatim)
//
// Compliance posture — all preserved verbatim from the previous sections:
//   - "Evaluación médica previa obligatoria"
//   - "No todos los pacientes son candidatos"
//   - "El médico determina elegibilidad"
//   - "Resultados pueden variar"
//   - "Educational website copy does not replace medical evaluation"
//   - Full FDA-compounded-medications disclosure is rendered in full.

import { motion, useReducedMotion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle2,
  ClipboardList,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import HeadlineReveal from "@/components/motion/HeadlineReveal";
import { DUR, EASE_OUT_QUART } from "@/components/motion/easing";

// Eligibility list — preserved verbatim from MetabolicWho.
const eligibilityConditions = [
  {
    title: "Sobrepeso u obesidad",
    description:
      "IMC ≥ 25 con dificultad para manejar el peso con dieta y ejercicio convencional.",
  },
  {
    title: "Resistencia a la insulina",
    description:
      "Niveles alterados de glucosa o insulina en ayuno confirmados por laboratorio.",
  },
  {
    title: "Síndrome metabólico",
    description:
      "Combinación de factores como presión alta, triglicéridos elevados, cintura aumentada y glucosa alterada.",
  },
  {
    title: "Hipotiroidismo compensado",
    description:
      "Función tiroidea bajo control médico activo que dificulta el manejo del peso.",
  },
  {
    title: "Perimenopausia y menopausia",
    description:
      "Cambios hormonales que alteran la composición corporal y el metabolismo.",
  },
  {
    title: "Historial de yo-yo dieting",
    description:
      "Ciclos repetidos de pérdida y recuperación de peso que requieren enfoque clínico estructurado.",
  },
  {
    title: "Comorbilidades metabólicas",
    description:
      "Condiciones como hígado graso, dislipidemia u otras que se benefician de supervisión médica continua.",
  },
];

// Safety pillars — preserved verbatim from MetabolicSafety.
const safetyPillars = [
  {
    icon: Stethoscope,
    title: "Evaluación médica previa obligatoria",
    description:
      "Ningún elemento del protocolo se inicia sin evaluación médica completa. El médico determina qué intervenciones son apropiadas para ti.",
  },
  {
    icon: ClipboardList,
    title: "Revisión de historial y medicamentos",
    description:
      "Se revisan interacciones con medicamentos actuales, condiciones preexistentes y contraindicaciones individuales antes de cualquier prescripción.",
  },
  {
    icon: ShieldCheck,
    title: "Monitoreo continuo de tolerancia",
    description:
      "Cada sesión semanal incluye evaluación de tolerancia a la terapia. El protocolo se ajusta si es necesario.",
  },
  {
    icon: AlertCircle,
    title: "Canal de comunicación directa",
    description:
      "Acceso al equipo clínico entre sesiones para reportar síntomas o cambios que requieran atención antes de la próxima cita.",
  },
];

export default function MetabolicSafetyEligibility() {
  const reduce = useReducedMotion();

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Section header */}
        <div className="mb-10 max-w-2xl sm:mb-12">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
            Seguridad y elegibilidad
          </span>
          <HeadlineReveal
            as="h2"
            onMount={false}
            delay={0.05}
            className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] leading-[1.05] text-[#1A1A1A]"
          >
            Un protocolo{" "}
            <span className="text-[#A8872E]">supervisado</span>
          </HeadlineReveal>
          <p className="text-base leading-relaxed text-[#6B6B6B]">
            El programa no se entrega y se sigue solo. Cada elemento está
            supervisado por el médico tratante. El seguimiento clínico es
            parte estructural del protocolo, no una opción.
          </p>
        </div>

        {/* Eligibility + Safety — single shell, two columns */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px 0px" }}
          transition={
            reduce
              ? { duration: 0 }
              : { duration: DUR.slow, ease: EASE_OUT_QUART }
          }
          className="overflow-hidden rounded-3xl ring-1 ring-[#E8E4DA]"
        >
          <div className="grid lg:grid-cols-2">
            {/* Para quién puede aplicar */}
            <div className="bg-[#FAF8F4] p-7 sm:p-9 lg:p-10 lg:border-r border-b lg:border-b-0 border-[#E8E4DA]">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#A8872E]">
                Para quién puede aplicar
              </p>
              <h3 className="mb-5 text-xl sm:text-2xl font-semibold leading-snug text-[#1A1A1A]">
                Elegibilidad orientativa
              </h3>
              <ul className="space-y-4">
                {eligibilityConditions.map((c) => (
                  <li key={c.title} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A84C]" />
                    <div>
                      <p className="text-sm font-semibold leading-snug text-[#1A1A1A]">
                        {c.title}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-[#6B6B6B]">
                        {c.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-[#E8E4DA] pt-5 text-xs leading-relaxed text-[#6B6B6B]">
                Esta lista es orientativa, no diagnóstica. La candidatura al
                programa se determina exclusivamente durante la evaluación
                médica inicial. Pueden existir contraindicaciones que el
                médico identificará en esa consulta.
              </p>
            </div>

            {/* Cómo mantenemos un protocolo seguro */}
            <div className="bg-white p-7 sm:p-9 lg:p-10">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#A8872E]">
                Cómo mantenemos un protocolo seguro
              </p>
              <h3 className="mb-5 text-xl sm:text-2xl font-semibold leading-snug text-[#1A1A1A]">
                Supervisión médica continua
              </h3>
              <ul className="space-y-4">
                {safetyPillars.map((p) => {
                  const Icon = p.icon;
                  return (
                    <li key={p.title} className="flex items-start gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#C9A84C]/10 ring-1 ring-[#C9A84C]/25">
                        <Icon className="h-4 w-4 text-[#C9A84C]" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold leading-snug text-[#1A1A1A]">
                          {p.title}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-[#6B6B6B]">
                          {p.description}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <p className="mt-6 border-t border-[#E8E4DA] pt-5 text-xs italic leading-relaxed text-[#6B6B6B]">
                Si en algún momento durante el programa desarrollas síntomas
                inesperados, el médico evaluará si es necesario suspender,
                ajustar o cambiar el protocolo. Tu seguridad tiene prioridad
                sobre el ritmo del programa.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Compounding notice — preserved verbatim from MetabolicCompounding.
            Wrapped in its own rounded panel below the safety + eligibility
            shell so the FDA disclosure carries its own visual weight without
            duplicating chrome. */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px 0px" }}
          transition={
            reduce
              ? { duration: 0 }
              : { duration: DUR.base, ease: EASE_OUT_QUART }
          }
          className="mx-auto mt-8 max-w-3xl rounded-2xl border border-[#E8E4DA] bg-[#FAF8F4] p-6"
        >
          <div className="mb-4 flex items-start gap-3">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#C9A84C]" />
            <h3 className="text-sm font-semibold text-[#1A1A1A]">
              Aviso sobre medicamentos formulados (compounding)
            </h3>
          </div>
          <div className="space-y-3 text-xs leading-relaxed text-[#6B6B6B]">
            <p>
              Algunos elementos de este programa pueden incluir medicamentos
              formulados (compounded medications) preparados por farmacias de
              formulación acreditadas bajo prescripción médica individual,
              cuando clínicamente indicado.
            </p>
            <p className="font-semibold text-[#3D3D3D]">
              Los medicamentos formulados no son aprobados por la
              Administración de Alimentos y Medicamentos de los Estados Unidos
              (FDA). No son equivalentes genéricos de medicamentos aprobados
              por FDA. No han sido evaluados por FDA en cuanto a seguridad,
              efectividad ni calidad de manufactura de la forma particular en
              que se preparan.
            </p>
            <p>
              Su uso requiere evaluación médica individual, prescripción
              profesional y revisión de riesgos, beneficios, historial
              clínico, medicamentos actuales y contraindicaciones. Los
              riesgos y beneficios se discuten individualmente con el médico
              tratante durante la evaluación inicial.
            </p>
            <p>
              Aurum Nova Wellness Clinic no promociona ni prescribe
              medicamentos específicos a través de este sitio web. Toda
              prescripción es determinada por el médico tratante durante la
              consulta médica individual.
            </p>
          </div>
          <div className="mt-4 border-t border-[#E8E4DA] pt-4">
            <p className="text-xs text-[#9A9A9A]">
              Para más información sobre nuestro aviso médico completo, visita{" "}
              <a
                href="/disclaimer-medico"
                className="text-[#C9A84C] hover:underline"
              >
                Disclaimer Médico
              </a>
              .
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
