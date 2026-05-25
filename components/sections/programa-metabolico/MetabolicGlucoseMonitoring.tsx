"use client";

// MetabolicGlucoseMonitoring
// ---------------------------------------------------------------------------
// Refactored to the Apple-inspired visual system. The bespoke 24-hour
// glucose SVG is replaced by the canonical <ClinicalMetricGraph> primitive,
// and the 4-block "what we look for / who / why / what it's not" pattern is
// rebalanced into a cleaner editorial layout.
//
// Compliance posture:
//   - "Puede ayudar a pacientes seleccionados visualizar patrones"
//   - "Según evaluación clínica"
//   - "Patrones de glucosa", "demanda de insulina", "ambiente metabólico
//     más favorable"
//   - NEVER: "diagnostica diabetes", "normaliza glucosa", "reemplaza
//     laboratorios", "es obligatorio para todos", "revierte diabetes"

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  ClipboardList,
  Lightbulb,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import { whatsappLink } from "@/content/site";
import MedicalDisclaimer from "@/components/ui/MedicalDisclaimer";
import ClinicalMetricGraph from "@/components/visual/ClinicalMetricGraph";

const CGM_WHATSAPP_MESSAGE =
  "Hola, quiero saber si el monitoreo de glucosa puede aplicar a mi programa metabólico.";

// Illustrative 24-hour glucose curve. Values are visual references only —
// no clinical meaning — used to render a smooth example trace. The label
// inside <ClinicalMetricGraph> says "Vista ilustrativa".
const glucoseCurve = [
  { x: "00", y: 92 },
  { x: "03", y: 88 },
  { x: "06", y: 95 },
  { x: "08", y: 132 },
  { x: "10", y: 108 },
  { x: "12", y: 145 },
  { x: "14", y: 118 },
  { x: "16", y: 102 },
  { x: "18", y: 138 },
  { x: "20", y: 122 },
  { x: "22", y: 104 },
  { x: "24", y: 94 },
];

// Why patterns matter — three short, compliance-safe lines.
const whyPatterns = [
  {
    icon: Lightbulb,
    title: "Información que un laboratorio puntual no muestra",
    description:
      "Una glucosa o A1C en un momento dado es útil, pero no refleja el comportamiento real durante varios días.",
  },
  {
    icon: Target,
    title: "Ajustes más precisos del plan clínico",
    description:
      "Puede ayudar al equipo a personalizar nutrición, hábitos y ritmo del programa con datos individuales — no supuestos.",
  },
  {
    icon: Sparkles,
    title: "Educación tangible para el paciente",
    description:
      "Ver tus propios patrones puede facilitar entender por qué ciertos hábitos importan más que otros para tu caso.",
  },
];

// What can affect glucose readings — meals, timing, sleep, stress, activity,
// treatment response. Stated as orientative factors, never causal claims.
const affectsReadings = [
  "Comidas, tipo de alimento y tamaño de porción.",
  "Horarios de las comidas y patrones diarios.",
  "Sueño, descanso y estrés cotidiano.",
  "Nivel de actividad física.",
  "Respuesta individual al protocolo clínico vigente.",
];

// Who may benefit — selected patients only. Eligibility is decided
// individually during evaluation. Framed as "puede aplicar", never "should".
const candidateProfiles = [
  "Pacientes con historial familiar de alteraciones metabólicas",
  "Personas con energía irregular o fatiga después de comer",
  "Pacientes en programa metabólico que buscan datos más finos para ajustar el plan",
  "Pacientes que usan o consideran terapias incretínicas, según evaluación clínica",
];

// What CGM is NOT — keeps the compliance posture firm.
const limitations = [
  "No es un diagnóstico de diabetes ni de prediabetes.",
  "No reemplaza laboratorios clínicos ni evaluación médica.",
  "No es obligatorio dentro del programa metabólico.",
  "No normaliza la glucosa por sí solo — la interpretación es clínica.",
  "No garantiza pérdida de peso ni resultados estéticos.",
];

export default function MetabolicGlucoseMonitoring() {
  const reduce = useReducedMotion();

  const fadeIn = reduce
    ? { initial: false, animate: { opacity: 1, y: 0 } }
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px 0px" },
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
      };

  return (
    <section
      id="monitoreo-glucosa"
      className="section-padding bg-[#1A1A1A] relative overflow-hidden"
    >
      {/* Subtle gold radial accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 12% 18%, rgba(201,168,76,0.18) 0%, transparent 55%), radial-gradient(ellipse at 88% 82%, rgba(168,135,46,0.12) 0%, transparent 60%)",
        }}
      />

      <div className="container-max relative z-10">
        {/* Heading */}
        <motion.div {...fadeIn} className="mb-12 max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C9A84C]/25 bg-[#C9A84C]/10 px-4 py-1.5">
            <Activity className="h-3.5 w-3.5 text-[#C9A84C]" />
            <span className="text-[10px] font-semibold uppercase tracking-widest text-[#E2C97E]">
              Monitoreo clínico opcional
            </span>
          </div>
          <h2 className="mb-5 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] leading-[1.1] text-white">
            Patrones de{" "}
            <span className="text-[#C9A84C]">glucosa</span>
          </h2>
          <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-[#BDB7AA]">
            En pacientes seleccionados, observar cómo se comporta la glucosa
            durante varios días puede aportar contexto clínico fino que
            complementa los laboratorios. Se considera según evaluación
            clínica — no como parte obligatoria del programa.
          </p>
        </motion.div>

        {/* ClinicalMetricGraph — illustrative 24h curve */}
        <motion.div
          {...fadeIn}
          transition={{ ...(fadeIn.transition ?? {}), delay: 0.1 }}
          className="mb-12 rounded-3xl border border-[#2A2A2A] bg-gradient-to-br from-[#0F0F0F] to-[#1A1A1A] p-5 sm:p-7 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)]"
        >
          <div className="mb-5">
            <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-widest text-[#9A9A9A]">
              Patrón de un día típico — vista ilustrativa
            </p>
            <h3 className="text-lg sm:text-xl font-semibold text-white">
              Cómo puede comportarse la glucosa a lo largo del día
            </h3>
          </div>

          <ClinicalMetricGraph
            label="Glucosa estimada"
            unit="mg/dL"
            points={glucoseCurve}
            referenceBand={{
              min: 70,
              max: 140,
              caption: "Rango referencia",
            }}
            variant="dark"
            ariaLabel="Gráfico ilustrativo de un patrón de glucosa de 24 horas con rango de referencia."
          />

          <p className="mt-4 text-[10px] leading-relaxed text-[#6B6B6B]">
            Vista ilustrativa con valores de referencia. Los datos reales se
            registran en clínica según el equipo, el dispositivo y el
            protocolo individual. No representa información de un paciente.
          </p>
        </motion.div>

        {/* 3 content blocks — Why patterns matter / Who may benefit / Limits */}
        <div className="grid gap-5 mb-10 lg:grid-cols-3">
          {/* Block 1 — Why patterns matter */}
          <motion.div
            {...fadeIn}
            className="rounded-2xl border border-[#2A2A2A] bg-[#111111] p-6 sm:p-7"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C9A84C]/12 ring-1 ring-[#C9A84C]/25">
                <Sparkles className="h-4 w-4 text-[#C9A84C]" />
              </div>
              <h3 className="text-lg font-semibold text-white">
                Por qué importa
              </h3>
            </div>
            <ul className="space-y-4">
              {whyPatterns.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.title} className="flex gap-3">
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A84C]" />
                    <div>
                      <p className="text-sm font-medium leading-snug text-white">
                        {item.title}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-[#9A9A9A]">
                        {item.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* Block 2 — What can affect readings + who may benefit */}
          <motion.div
            {...fadeIn}
            className="rounded-2xl border border-[#2A2A2A] bg-[#111111] p-6 sm:p-7"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C9A84C]/12 ring-1 ring-[#C9A84C]/25">
                <Activity className="h-4 w-4 text-[#C9A84C]" />
              </div>
              <h3 className="text-lg font-semibold text-white">
                Qué puede afectar las lecturas
              </h3>
            </div>
            <ul className="mb-5 space-y-3">
              {affectsReadings.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed text-[#BDB7AA]"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A84C]"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="border-t border-[#2A2A2A] pt-4 text-xs leading-relaxed text-[#9A9A9A]">
              Reducir picos repetidos de glucosa puede apoyar un ambiente
              metabólico más favorable, en pacientes seleccionados y según
              evaluación clínica.
            </p>
          </motion.div>

          {/* Block 3 — What CGM is NOT */}
          <motion.div
            {...fadeIn}
            className="rounded-2xl border border-[#C9A84C]/20 bg-gradient-to-br from-[#161513] to-[#1A1A1A] p-6 sm:p-7"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C9A84C]/12 ring-1 ring-[#C9A84C]/25">
                <ShieldCheck className="h-4 w-4 text-[#C9A84C]" />
              </div>
              <h3 className="text-lg font-semibold text-white">
                Lo que el monitoreo no es
              </h3>
            </div>
            <ul className="space-y-3">
              {limitations.map((limit) => (
                <li
                  key={limit}
                  className="flex items-start gap-3 text-sm leading-relaxed text-[#BDB7AA]"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1 w-3 shrink-0 rounded-full bg-[#C9A84C]/50"
                  />
                  <span>{limit}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-[#2A2A2A] pt-4 text-xs leading-relaxed text-[#9A9A9A]">
              El monitoreo es una herramienta complementaria, opcional y
              supeditada al criterio clínico del equipo.
            </p>
          </motion.div>
        </div>

        {/* Who may benefit — compact list */}
        <motion.div
          {...fadeIn}
          className="mb-10 rounded-2xl border border-[#2A2A2A] bg-[#111111] p-6 sm:p-7"
        >
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C9A84C]/12 ring-1 ring-[#C9A84C]/25">
              <ClipboardList className="h-4 w-4 text-[#C9A84C]" />
            </div>
            <h3 className="text-lg font-semibold text-white">
              A quién puede aplicar
            </h3>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {candidateProfiles.map((profile) => (
              <li
                key={profile}
                className="flex items-start gap-3 text-sm leading-relaxed text-[#BDB7AA]"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A84C]"
                />
                <span>{profile}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 border-t border-[#2A2A2A] pt-4 text-xs leading-relaxed text-[#6B6B6B]">
            La elegibilidad y la conveniencia clínica las determina el equipo
            durante la evaluación individual. No todos los pacientes lo
            necesitan; no todos los pacientes son candidatos.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          {...fadeIn}
          className="mb-8 rounded-3xl border border-[#2A2A2A] bg-[#0F0F0F] p-6 sm:p-8"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-[#E2C97E]">
                Próximo paso
              </p>
              <h3 className="mb-2 text-xl sm:text-2xl font-semibold leading-snug text-white">
                ¿Quieres saber si aplica a tu caso?
              </h3>
              <p className="text-sm leading-relaxed text-[#9A9A9A]">
                El equipo evalúa si el monitoreo aporta información clínica
                relevante para tu programa individual.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
              <Link
                href="/evaluacion-metabolica-avanzada"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A84C] px-6 py-3 text-sm font-semibold text-[#1A1A1A] shadow-[0_10px_30px_-10px_rgba(201,168,76,0.55)] transition-all duration-200 hover:bg-[#A8872E] hover:shadow-[0_14px_40px_-10px_rgba(201,168,76,0.7)]"
              >
                Ver evaluación avanzada
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={whatsappLink(CGM_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#3D3D3D] bg-transparent px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:border-[#C9A84C] hover:text-[#C9A84C]"
              >
                <MessageCircle className="h-4 w-4" />
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <MedicalDisclaimer
          variant="inline"
          className="mx-auto max-w-3xl text-[#9A9A9A]"
          custom="El monitoreo de glucosa se considera según el perfil clínico del paciente. No sustituye laboratorios, diagnóstico médico ni evaluación profesional. La interpretación debe realizarse dentro de un plan clínico individualizado."
        />
      </div>
    </section>
  );
}
