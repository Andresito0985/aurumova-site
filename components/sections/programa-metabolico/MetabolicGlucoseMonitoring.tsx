"use client";

// Glucose monitoring (CGM) educational section for /programa-metabolico.
//
// Compliance posture:
//   - Educational, not promotional. CGM is positioned as a tool that the
//     clinician may consider, not a default service.
//   - No diagnosis claims. We do NOT say "detects diabetes" or
//     "diagnoses insulin resistance".
//   - No promises about weight loss from CGM use.
//   - Explicitly clarifies that CGM does NOT replace labs, medical
//     evaluation, or clinical judgment.

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

const CGM_WHATSAPP_MESSAGE =
  "Hola, quiero saber si el monitoreo de glucosa puede aplicar a mi programa metabólico.";

const observationPoints = [
  {
    title: "Curvas de glucosa post-comida",
    description:
      "Patrones de cómo responde la glucosa después de comidas típicas de tu día a día.",
  },
  {
    title: "Variabilidad a lo largo del día",
    description:
      "Estabilidad o picos en distintos momentos: mañana, tarde, noche y madrugada.",
  },
  {
    title: "Tendencia nocturna",
    description:
      "Cómo se comporta la glucosa durante el ayuno nocturno y el descanso.",
  },
  {
    title: "Respuesta a estrés y actividad",
    description:
      "Patrones que se observan con cambios de rutina, actividad física o estrés cotidiano.",
  },
];

const candidateProfiles = [
  "Pacientes con historial familiar de alteraciones metabólicas",
  "Personas con fatiga después de comer o energía irregular",
  "Pacientes en programa metabólico que buscan datos más finos para ajustar el plan",
  "Personas con curiosidad clínica sobre cómo reacciona su cuerpo a distintos alimentos",
];

const whyItMatters = [
  {
    icon: Lightbulb,
    title: "Información que un laboratorio puntual no muestra",
    description:
      "Una glucosa o A1C en un momento dado es útil, pero no refleja el comportamiento real durante días completos de vida cotidiana.",
  },
  {
    icon: Target,
    title: "Ajustes más precisos del plan",
    description:
      "Permite que el equipo personalice nutrición, hábitos y ritmo del programa con base en datos individuales — no en supuestos generales.",
  },
  {
    icon: Sparkles,
    title: "Educación tangible para el paciente",
    description:
      "Ver tus propios patrones puede facilitar entender por qué ciertos hábitos importan más que otros para tu caso.",
  },
];

const limitations = [
  "No es un diagnóstico de diabetes ni de prediabetes.",
  "No reemplaza laboratorios clínicos ni evaluación médica.",
  "No es obligatorio dentro del programa metabólico.",
  "No garantiza pérdida de peso ni resultados estéticos.",
];

// Illustrative 24-hour glucose curve points (values are visual references only,
// no clinical meaning — used to render a smooth example trace).
const glucoseCurve = [
  { hour: "00", value: 92 },
  { hour: "03", value: 88 },
  { hour: "06", value: 95 },
  { hour: "08", value: 132 },
  { hour: "10", value: 108 },
  { hour: "12", value: 145 },
  { hour: "14", value: 118 },
  { hour: "16", value: 102 },
  { hour: "18", value: 138 },
  { hour: "20", value: 122 },
  { hour: "22", value: 104 },
  { hour: "24", value: 94 },
];

// Build SVG path data for the smooth glucose curve mockup.
function buildCurvePath(points: { value: number }[], width: number, height: number) {
  const min = 70;
  const max = 160;
  const stepX = width / (points.length - 1);
  const scaleY = (v: number) =>
    height - ((v - min) / (max - min)) * (height - 12) - 6;

  let d = `M 0 ${scaleY(points[0].value)}`;
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const cx1 = (i - 1) * stepX + stepX / 2;
    const cx2 = i * stepX - stepX / 2;
    d += ` C ${cx1} ${scaleY(prev.value)}, ${cx2} ${scaleY(curr.value)}, ${i * stepX} ${scaleY(curr.value)}`;
  }
  return { d, scaleY, stepX };
}

export default function MetabolicGlucoseMonitoring() {
  const prefersReducedMotion = useReducedMotion();
  const width = 600;
  const height = 180;
  const { d, scaleY, stepX } = buildCurvePath(glucoseCurve, width, height);

  // Reference band: typical orientative range for the illustration only.
  const bandTop = scaleY(140);
  const bandBottom = scaleY(70);

  const fadeIn = prefersReducedMotion
    ? { initial: false, animate: { opacity: 1, y: 0 } }
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
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
        <motion.div {...fadeIn} className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 bg-[#C9A84C]/10 border border-[#C9A84C]/25 rounded-full px-4 py-1.5 mb-5">
            <Activity className="w-3.5 h-3.5 text-[#C9A84C]" />
            <span className="text-[10px] font-semibold tracking-widest uppercase text-[#E2C97E]">
              Monitoreo clínico opcional
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] leading-[1.1] text-white mb-5">
            Monitoreo activo de{" "}
            <span className="text-[#C9A84C]">glucosa</span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-[#BDB7AA] max-w-2xl">
            En ciertos casos, observar cómo se comporta la glucosa durante varios
            días aporta información clínica fina que complementa los laboratorios.
            Se considera según el perfil clínico, no como parte obligatoria del
            programa.
          </p>
        </motion.div>

        {/* Mini dashboard — illustrative 24h glucose curve */}
        <motion.div
          {...fadeIn}
          transition={{ ...(fadeIn.transition ?? {}), delay: 0.1 }}
          className="mb-12 rounded-3xl border border-[#2A2A2A] bg-gradient-to-br from-[#0F0F0F] to-[#1A1A1A] p-5 sm:p-7 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)]"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-5">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#9A9A9A] mb-1.5">
                Vista ilustrativa — 24 horas
              </p>
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                Patrón de glucosa de un día típico
              </h3>
            </div>
            <div className="flex items-center gap-4 text-[10px] text-[#9A9A9A]">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-[2px] rounded-full bg-[#C9A84C]" />
                <span>Glucosa estimada</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-2 rounded-sm bg-[#C9A84C]/15 border border-[#C9A84C]/30" />
                <span>Rango referencia</span>
              </div>
            </div>
          </div>

          <div className="relative w-full overflow-hidden rounded-2xl bg-[#0A0A0A] border border-[#2A2A2A] p-4 sm:p-5">
            <svg
              viewBox={`0 0 ${width} ${height + 28}`}
              className="w-full h-auto"
              role="img"
              aria-label="Gráfico ilustrativo de una curva de glucosa de 24 horas con referencias horarias"
            >
              {/* Grid lines */}
              {[0, 1, 2, 3, 4].map((i) => (
                <line
                  key={i}
                  x1={0}
                  x2={width}
                  y1={(height / 4) * i + 6}
                  y2={(height / 4) * i + 6}
                  stroke="#1F1F1F"
                  strokeDasharray="3 5"
                />
              ))}

              {/* Reference band */}
              <rect
                x={0}
                y={bandTop}
                width={width}
                height={bandBottom - bandTop}
                fill="#C9A84C"
                opacity={0.06}
              />
              <line
                x1={0}
                x2={width}
                y1={bandTop}
                y2={bandTop}
                stroke="#C9A84C"
                strokeOpacity={0.25}
                strokeDasharray="2 6"
              />
              <line
                x1={0}
                x2={width}
                y1={bandBottom}
                y2={bandBottom}
                stroke="#C9A84C"
                strokeOpacity={0.25}
                strokeDasharray="2 6"
              />

              {/* Area gradient under curve */}
              <defs>
                <linearGradient id="cgm-area" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#C9A84C" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d={`${d} L ${width} ${height} L 0 ${height} Z`}
                fill="url(#cgm-area)"
              />

              {/* Curve */}
              <motion.path
                d={d}
                fill="none"
                stroke="#C9A84C"
                strokeWidth={2.25}
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={prefersReducedMotion ? false : { pathLength: 0 }}
                whileInView={prefersReducedMotion ? undefined : { pathLength: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
              />

              {/* Data points */}
              {glucoseCurve.map((p, i) => (
                <circle
                  key={p.hour}
                  cx={i * stepX}
                  cy={scaleY(p.value)}
                  r={2.5}
                  fill="#1A1A1A"
                  stroke="#C9A84C"
                  strokeWidth={1.5}
                />
              ))}

              {/* Hour labels */}
              {glucoseCurve
                .filter((_, i) => i % 2 === 0)
                .map((p, i) => (
                  <text
                    key={p.hour}
                    x={i * 2 * stepX}
                    y={height + 22}
                    fontSize="9"
                    fill="#6B6B6B"
                    textAnchor="middle"
                    fontFamily="ui-sans-serif, system-ui"
                  >
                    {p.hour}h
                  </text>
                ))}
            </svg>
          </div>

          <p className="mt-4 text-[10px] text-[#6B6B6B] text-center leading-relaxed">
            Vista ilustrativa con valores de referencia. Los datos reales se
            registran en clínica según el equipo y el protocolo individual.
          </p>
        </motion.div>

        {/* Four content blocks */}
        <div className="grid lg:grid-cols-2 gap-5 mb-10">
          {/* Block 1: What we look for */}
          <motion.div
            {...fadeIn}
            className="rounded-2xl border border-[#2A2A2A] bg-[#111111] p-6 sm:p-7"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C9A84C]/12 ring-1 ring-[#C9A84C]/25">
                <Activity className="w-4 h-4 text-[#C9A84C]" />
              </div>
              <h3 className="text-lg font-semibold text-white">
                Qué observamos
              </h3>
            </div>
            <ul className="space-y-3.5">
              {observationPoints.map((point) => (
                <li key={point.title} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A84C]" />
                  <div>
                    <p className="text-sm font-medium text-white leading-snug">
                      {point.title}
                    </p>
                    <p className="text-xs text-[#9A9A9A] leading-relaxed mt-1">
                      {point.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Block 2: Who may benefit */}
          <motion.div
            {...fadeIn}
            className="rounded-2xl border border-[#2A2A2A] bg-[#111111] p-6 sm:p-7"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C9A84C]/12 ring-1 ring-[#C9A84C]/25">
                <ClipboardList className="w-4 h-4 text-[#C9A84C]" />
              </div>
              <h3 className="text-lg font-semibold text-white">
                A quién puede aplicar
              </h3>
            </div>
            <ul className="space-y-3">
              {candidateProfiles.map((profile) => (
                <li key={profile} className="flex gap-3 items-start">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A84C]" />
                  <p className="text-sm text-[#BDB7AA] leading-relaxed">
                    {profile}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs text-[#6B6B6B] leading-relaxed border-t border-[#2A2A2A] pt-4">
              La elegibilidad y la conveniencia clínica las determina el equipo
              durante la evaluación individual.
            </p>
          </motion.div>

          {/* Block 3: Why it matters */}
          <motion.div
            {...fadeIn}
            className="rounded-2xl border border-[#2A2A2A] bg-[#111111] p-6 sm:p-7"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C9A84C]/12 ring-1 ring-[#C9A84C]/25">
                <Sparkles className="w-4 h-4 text-[#C9A84C]" />
              </div>
              <h3 className="text-lg font-semibold text-white">
                Por qué importa
              </h3>
            </div>
            <ul className="space-y-4">
              {whyItMatters.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.title} className="flex gap-3">
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A84C]" />
                    <div>
                      <p className="text-sm font-medium text-white leading-snug">
                        {item.title}
                      </p>
                      <p className="text-xs text-[#9A9A9A] leading-relaxed mt-1">
                        {item.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* Block 4: What CGM does NOT mean */}
          <motion.div
            {...fadeIn}
            className="rounded-2xl border border-[#C9A84C]/20 bg-gradient-to-br from-[#161513] to-[#1A1A1A] p-6 sm:p-7"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C9A84C]/12 ring-1 ring-[#C9A84C]/25">
                <ShieldCheck className="w-4 h-4 text-[#C9A84C]" />
              </div>
              <h3 className="text-lg font-semibold text-white">
                Lo que el monitoreo no es
              </h3>
            </div>
            <ul className="space-y-3">
              {limitations.map((limit) => (
                <li key={limit} className="flex gap-3 items-start">
                  <span className="mt-2 h-1 w-3 shrink-0 rounded-full bg-[#C9A84C]/50" />
                  <p className="text-sm text-[#BDB7AA] leading-relaxed">
                    {limit}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs text-[#6B6B6B] leading-relaxed border-t border-[#2A2A2A] pt-4">
              El monitoreo es una herramienta complementaria, opcional y supeditada
              al criterio clínico del equipo.
            </p>
          </motion.div>
        </div>

        {/* CTAs */}
        <motion.div
          {...fadeIn}
          className="rounded-3xl border border-[#2A2A2A] bg-[#0F0F0F] p-6 sm:p-8 mb-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-xl">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#E2C97E] mb-2">
                Próximo paso
              </p>
              <h3 className="text-xl sm:text-2xl font-semibold text-white leading-snug mb-2">
                ¿Quieres saber si aplica a tu caso?
              </h3>
              <p className="text-sm text-[#9A9A9A] leading-relaxed">
                El equipo evalúa si el monitoreo aporta información clínica
                relevante para tu programa individual.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:shrink-0">
              <Link
                href="/evaluacion-metabolica-avanzada"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A84C] hover:bg-[#A8872E] text-[#1A1A1A] font-semibold px-6 py-3 text-sm transition-all duration-200 shadow-[0_10px_30px_-10px_rgba(201,168,76,0.55)] hover:shadow-[0_14px_40px_-10px_rgba(201,168,76,0.7)]"
              >
                Ver evaluación avanzada
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={whatsappLink(CGM_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-transparent border border-[#3D3D3D] hover:border-[#C9A84C] text-white hover:text-[#C9A84C] font-semibold px-6 py-3 text-sm transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <MedicalDisclaimer
          variant="inline"
          className="max-w-3xl mx-auto text-[#9A9A9A]"
          custom="El monitoreo de glucosa se considera según el perfil clínico del paciente. No sustituye laboratorios, diagnóstico médico ni evaluación profesional. La interpretación debe realizarse dentro de un plan clínico individualizado."
        />
      </div>
    </section>
  );
}
