"use client";

// MetabolicDashboardSection
// ---------------------------------------------------------------------------
// Refactored dashboard surface. Replaces the bespoke 177-line
// MetabolicDashboard implementation with the canonical
// <DeviceDashboardMockup> primitive at section scale.
//
// Apple-like posture: one centered "official" dashboard, illustrative
// values only, no fake patient names or guaranteed outcomes.
//
// The section keeps the `id="calcular-progreso"` anchor for any legacy
// links pointing at the original surface.

import { motion, useReducedMotion } from "framer-motion";
import HeadlineReveal from "@/components/motion/HeadlineReveal";
import DeviceDashboardMockup from "@/components/visual/DeviceDashboardMockup";
import { DUR, EASE_OUT_QUART } from "@/components/motion/easing";

// Process chips show the *phases* of the program. No patient values.
const dashboardChips = [
  { name: "Evaluación", caption: "Inicio" },
  { name: "Plan médico", caption: "Personalizado" },
  { name: "Seguimiento", caption: "Semanal" },
  { name: "Revisión", caption: "Mensual" },
  { name: "Comunicación", caption: "Entre citas" },
  { name: "Próxima sesión", caption: "Coordinada" },
];

// Placeholder metric tiles — every value is "—" by design.
const dashboardMetrics = [
  { label: "Peso", value: "—", unit: "kg", sub: "Cada sesión" },
  { label: "IMC", value: "—", unit: "", sub: "Revisión clínica" },
  { label: "Cintura", value: "—", unit: "cm", sub: "Perímetro guía" },
  { label: "Meta 5%", value: "—", unit: "kg", sub: "Primer objetivo" },
  { label: "Adherencia", value: "—", unit: "%", sub: "Cumplimiento" },
  { label: "Tolerancia", value: "—", unit: "", sub: "Respuesta clínica" },
  { label: "Síntomas", value: "—", unit: "", sub: "Revisión semanal" },
  { label: "Próxima cita", value: "—", unit: "", sub: "Coordinada" },
];

export default function MetabolicDashboardSection() {
  const reduce = useReducedMotion();
  return (
    <section
      id="calcular-progreso"
      className="section-padding bg-[#FAF8F4]"
    >
      <div className="container-max">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
            Seguimiento clínico
          </span>
          <HeadlineReveal
            as="h2"
            onMount={false}
            delay={0.05}
            className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] leading-[1.05] text-[#1A1A1A]"
          >
            Tu dashboard de{" "}
            <span className="text-[#A8872E]">progreso</span>
          </HeadlineReveal>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-[#6B6B6B]">
            Cada sesión actualizamos tus métricas. Tu equipo clínico y tú
            tienen visibilidad continua del proceso — no dependemos de cómo te
            "sientes" ese día.
          </p>

          <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#C9A84C]/25 bg-[#C9A84C]/[0.08] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A8872E]">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-[#C9A84C]"
            />
            Vista ilustrativa
          </span>
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
          className="mx-auto max-w-3xl"
        >
          <DeviceDashboardMockup
            eyebrow="Panel de seguimiento"
            title="Programa Metabólico Integral"
            subtitle="Cada sesión actualiza tus métricas"
            chips={dashboardChips}
            metrics={dashboardMetrics}
            footerNote="Los datos reales se registran durante cada sesión clínica semanal. Esta vista es ilustrativa y no representa información de un paciente."
          />
        </motion.div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-[#9A9A9A]">
          No prometemos números específicos. Los resultados pueden variar
          según historial, adherencia y respuesta individual al protocolo.
        </p>
      </div>
    </section>
  );
}
