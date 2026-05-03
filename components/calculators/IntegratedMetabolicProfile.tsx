"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Activity,
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  CalendarRange,
  CheckCircle2,
  ClipboardList,
  Droplets,
  Flame,
  Info,
  RotateCcw,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Target,
  TriangleAlert,
} from "lucide-react";
import NumberInput from "@/components/calculators/NumberInput";
import { trackCalculatorUsed } from "@/lib/tracking";

type Sex = "mujer" | "hombre";
type Activity = "sedentario" | "ligero" | "moderado" | "activo";
type HydrationActivity = "baja" | "moderada" | "alta";
type SweatLevel = "bajo" | "moderado" | "alto";
type Timeframe = "1m" | "3m" | "6m" | "12m" | "unsure";

const SYMPTOM_OPTIONS = [
  "Estreñimiento",
  "Náuseas",
  "Dolor de cabeza",
  "Fatiga",
  "Ninguno",
] as const;

const CAUTION_OPTIONS = [
  "Enfermedad renal",
  "Enfermedad cardíaca",
  "Presión alta descontrolada",
  "Uso de diuréticos",
  "Uso de medicamentos para presión arterial",
  "Uso de insulina o medicamentos para glucosa",
  "Cirugía bariátrica previa",
  "Embarazo o lactancia",
  "Historial de pancreatitis",
  "Historial de trastornos alimentarios",
  "Menor de 18 años",
  "Ninguna",
] as const;

const ELECTROLYTE_RISK_CAUTIONS = new Set<string>([
  "Enfermedad renal",
  "Enfermedad cardíaca",
  "Presión alta descontrolada",
  "Uso de diuréticos",
  "Uso de medicamentos para presión arterial",
  "Uso de insulina o medicamentos para glucosa",
]);

const HARD_GATE_CAUTIONS = new Set<string>(["Menor de 18 años"]);

const SOFT_GATE_CAUTIONS = new Set<string>([
  "Embarazo o lactancia",
  "Historial de trastornos alimentarios",
]);

const ACTIVITY_MULT: Record<Activity, { label: string; multiplier: number }> = {
  sedentario: { label: "Sedentario", multiplier: 1.2 },
  ligero: { label: "Ligero", multiplier: 1.375 },
  moderado: { label: "Moderado", multiplier: 1.55 },
  activo: { label: "Activo", multiplier: 1.725 },
};

const HYDRATION_ACTIVITY: Record<
  HydrationActivity,
  { label: string; adjustment: number }
> = {
  baja: { label: "Baja", adjustment: 0 },
  moderada: { label: "Moderada", adjustment: 300 },
  alta: { label: "Alta", adjustment: 600 },
};

const SWEAT: Record<SweatLevel, { label: string; adjustment: number }> = {
  bajo: { label: "Bajo", adjustment: 0 },
  moderado: { label: "Moderado", adjustment: 250 },
  alto: { label: "Alto", adjustment: 500 },
};

const TIMEFRAME_OPTIONS: {
  value: Timeframe;
  label: string;
  weeks: number | null;
}[] = [
  { value: "1m", label: "1 mes", weeks: 4 },
  { value: "3m", label: "3 meses", weeks: 12 },
  { value: "6m", label: "6 meses", weeks: 26 },
  { value: "12m", label: "12 meses", weeks: 52 },
  { value: "unsure", label: "No estoy seguro", weeks: null },
];

interface FormState {
  age: string;
  sex: Sex;
  feet: string;
  inches: string;
  weight: string;
  goalWeight: string;
  timeframe: Timeframe;
  activity: Activity;
  hydrationActivity: HydrationActivity;
  sweat: SweatLevel;
  symptoms: string[];
  cautions: string[];
}

interface ReportData {
  // basics
  ageValue: number;
  sex: Sex;
  weightLb: number;
  goalLb: number;
  weightKg: number;
  heightIn: number;
  heightCm: number;
  // bmi
  bmi: number;
  bmiCategory: { label: string; color: string; bg: string };
  // weight loss
  poundsToLose: number;
  weeklyPace: number | null;
  paceClassification: string;
  paceWarning?: string;
  paceNote?: string;
  fivePctLoss: number;
  tenPctLoss: number;
  // energy
  bmr: number;
  maintenance: number;
  activityLabel: string;
  deficitLowConservative: number; // -300
  deficitHighConservative: number; // -500
  deficitLowClinical: number; // -500
  deficitHighClinical: number; // -750
  threshold: number;
  belowFloorWarning?: string;
  // hydration
  hydrationLowMl: number;
  hydrationHighMl: number;
  bottlesLow: number;
  bottlesHigh: number;
  hydrationActivityLabel: string;
  sweatLabel: string;
  symptomNote?: string;
  electrolyteCautionStrong?: string;
  electrolyteCautionGeneral?: string;
  // cautions
  selectedCautions: string[];
  hasClinicalCautions: boolean;
  hasSoftGate: boolean;
  // meta
  timeframeLabel: string;
  timeframeUnsure: boolean;
}

interface ValidationResult {
  ok: boolean;
  data?: ReportData;
  hardGate?: { title: string; message: string };
  fieldError?: string;
}

const initialState: FormState = {
  age: "",
  sex: "mujer",
  feet: "",
  inches: "",
  weight: "",
  goalWeight: "",
  timeframe: "3m",
  activity: "ligero",
  hydrationActivity: "moderada",
  sweat: "moderado",
  symptoms: ["Ninguno"],
  cautions: ["Ninguna"],
};

const STEPS = [
  { id: 0, label: "Datos básicos", icon: ClipboardList },
  { id: 1, label: "Meta y tiempo", icon: Target },
  { id: 2, label: "Actividad", icon: Activity },
  { id: 3, label: "Hidratación", icon: Droplets },
  { id: 4, label: "Precauciones", icon: ShieldCheck },
  { id: 5, label: "Reporte", icon: Sparkles },
] as const;

function bmiCategory(bmi: number) {
  if (bmi < 18.5)
    return { label: "Bajo peso", color: "#5B7FA6", bg: "#EBF2FA" };
  if (bmi < 25)
    return { label: "Peso saludable", color: "#6B8F6B", bg: "#EBF4EB" };
  if (bmi < 30)
    return { label: "Sobrepeso", color: "#C9A84C", bg: "#FDF6E8" };
  return { label: "Obesidad", color: "#C05050", bg: "#FAEAEA" };
}

function classifyPace(weeklyPace: number) {
  if (weeklyPace <= 1) {
    return {
      classification: "Ritmo conservador",
      note: "El ritmo semanal estimado es conservador. Aun así, la meta debe interpretarse con historial, hábitos y condiciones médicas.",
    };
  }
  if (weeklyPace <= 2) {
    return {
      classification: "Ritmo moderado",
      note: "El ritmo semanal estimado es moderado. La planificación debe individualizarse para proteger masa muscular, energía, adherencia y seguridad.",
    };
  }
  return {
    classification: "Ritmo agresivo",
    warning:
      "Tu meta requiere una pérdida mayor de 2 lb por semana. Esto puede ser demasiado agresivo sin supervisión clínica. Recomendamos evaluación antes de intentar este ritmo.",
  };
}

function formatCalories(value: number) {
  return `${(Math.round(value / 10) * 10).toLocaleString("en-US")} kcal`;
}

function formatLiters(ml: number) {
  return `${(ml / 1000).toFixed(1)} L`;
}

function toggleListValue(
  value: string,
  current: string[],
  noneLabel: string,
) {
  if (value === noneLabel) {
    return current.includes(noneLabel) ? [] : [noneLabel];
  }
  const withoutNone = current.filter((item) => item !== noneLabel);
  return withoutNone.includes(value)
    ? withoutNone.filter((item) => item !== value)
    : [...withoutNone, value];
}

function buildReport(state: FormState): ValidationResult {
  const ageValue = Number.parseFloat(state.age);
  const feetValue = Number.parseFloat(state.feet);
  const inchesValue = Number.parseFloat(state.inches || "0");
  const weightLb = Number.parseFloat(state.weight);
  const goalLb = Number.parseFloat(state.goalWeight);

  if (
    !Number.isFinite(ageValue) ||
    !Number.isFinite(feetValue) ||
    !Number.isFinite(inchesValue) ||
    !Number.isFinite(weightLb) ||
    !Number.isFinite(goalLb)
  ) {
    return {
      ok: false,
      fieldError:
        "Completa edad, sexo, estatura, peso actual y peso meta antes de generar el reporte.",
    };
  }

  if (ageValue < 18) {
    return {
      ok: false,
      hardGate: {
        title: "Esta herramienta es para adultos",
        message:
          "Para personas menores de 18 años, las decisiones sobre peso, hidratación, electrolitos y nutrición requieren evaluación pediátrica especializada. Recomendamos consultar con un proveedor antes de usar herramientas de este tipo.",
      },
    };
  }

  if (ageValue > 100) {
    return {
      ok: false,
      fieldError: "Ingresa una edad razonable para adultos (18 a 100).",
    };
  }

  if (feetValue < 3 || feetValue > 8 || inchesValue < 0 || inchesValue > 11) {
    return {
      ok: false,
      fieldError: "Verifica la estatura en pies y pulgadas.",
    };
  }

  if (weightLb < 50 || weightLb > 800 || goalLb < 50 || goalLb > 800) {
    return {
      ok: false,
      fieldError: "Verifica el peso actual y el peso meta en libras.",
    };
  }

  if (state.cautions.includes("Menor de 18 años")) {
    return {
      ok: false,
      hardGate: {
        title: "Esta herramienta es para adultos",
        message:
          "Indicaste ser menor de 18 años. Para personas menores de edad, recomendamos evaluación pediátrica antes de usar herramientas de peso, calorías, hidratación o electrolitos.",
      },
    };
  }

  // BMI
  const heightIn = feetValue * 12 + inchesValue;
  const bmi = (weightLb / (heightIn * heightIn)) * 703;
  const category = bmiCategory(bmi);

  // weight loss
  const poundsToLose = weightLb - goalLb;
  let weeklyPace: number | null = null;
  let paceClassification = "Meta no válida o ya alcanzada";
  let paceWarning: string | undefined;
  let paceNote: string | undefined;
  const tf = TIMEFRAME_OPTIONS.find((t) => t.value === state.timeframe);
  const timeframeUnsure = state.timeframe === "unsure";

  if (poundsToLose <= 0) {
    paceNote =
      "Tu peso meta es igual o mayor que tu peso actual. Esta herramienta está enfocada en pérdida de peso; otras metas (mantener, ganar masa, recomposición) requieren un enfoque distinto.";
  } else if (timeframeUnsure || !tf?.weeks) {
    paceNote =
      "No seleccionaste un plazo específico. Un ritmo de referencia comúnmente usado es aproximadamente 1–2 lb por semana. El plazo adecuado depende de tu historial y debe individualizarse.";
  } else {
    weeklyPace = poundsToLose / tf.weeks;
    const cls = classifyPace(weeklyPace);
    paceClassification = cls.classification;
    paceNote = cls.note;
    paceWarning = cls.warning;
  }

  // Energy / Mifflin-St Jeor
  const weightKg = weightLb / 2.20462;
  const heightCm = heightIn * 2.54;
  const bmr =
    state.sex === "hombre"
      ? 10 * weightKg + 6.25 * heightCm - 5 * ageValue + 5
      : 10 * weightKg + 6.25 * heightCm - 5 * ageValue - 161;
  const maintenance = bmr * ACTIVITY_MULT[state.activity].multiplier;
  const threshold = state.sex === "hombre" ? 1500 : 1200;

  const deficitLowConservative = maintenance - 500; // low end of conservative (target lower bound)
  const deficitHighConservative = maintenance - 300; // high end (closer to maintenance)
  const deficitLowClinical = maintenance - 750;
  const deficitHighClinical = maintenance - 500;

  const lowestTarget = Math.min(deficitLowClinical, deficitLowConservative);
  const belowFloorWarning =
    lowestTarget < threshold
      ? "Este nivel calórico puede ser demasiado restrictivo sin supervisión clínica. Consulta con un proveedor o nutricionista antes de usarlo como meta."
      : undefined;

  // Hydration
  const hydAdj =
    HYDRATION_ACTIVITY[state.hydrationActivity].adjustment +
    SWEAT[state.sweat].adjustment;
  const hydrationLowMl = weightKg * 30 + hydAdj;
  const hydrationHighMl = weightKg * 35 + hydAdj;
  const bottlesLow = hydrationLowMl / 500;
  const bottlesHigh = hydrationHighMl / 500;

  const hasSymptoms =
    state.symptoms.length > 0 && !state.symptoms.includes("Ninguno");
  const hasMovementContext =
    state.hydrationActivity !== "baja" || state.sweat !== "bajo";
  const cleanedCautions = state.cautions.filter((c) => c !== "Ninguna");
  const hasClinicalCautions = cleanedCautions.length > 0;
  const hasElectrolyteRisk = cleanedCautions.some((c) =>
    ELECTROLYTE_RISK_CAUTIONS.has(c),
  );
  const hasSoftGate = cleanedCautions.some((c) => SOFT_GATE_CAUTIONS.has(c));

  const symptomNote = hasSymptoms
    ? "Los síntomas seleccionados pueden tener muchas causas (hidratación, alimentación, sueño, medicamentos, condiciones médicas). Si son persistentes, intensos o nuevos, requieren orientación clínica."
    : undefined;

  const electrolyteCautionStrong = hasElectrolyteRisk
    ? "Por tu historial seleccionado, evita ajustar líquidos o electrolitos agresivamente sin evaluación clínica. Algunas condiciones y medicamentos pueden hacer que los cambios en electrolitos sean riesgosos."
    : undefined;

  const electrolyteCautionGeneral = hasMovementContext
    ? "Con actividad o sudoración, algunas personas pueden beneficiarse de electrolitos. La cantidad y el tipo deben considerar dieta, presión arterial, riñón, corazón y medicamentos."
    : undefined;

  return {
    ok: true,
    data: {
      ageValue,
      sex: state.sex,
      weightLb,
      goalLb,
      weightKg,
      heightIn,
      heightCm,
      bmi: Math.round(bmi * 10) / 10,
      bmiCategory: category,
      poundsToLose,
      weeklyPace,
      paceClassification,
      paceWarning,
      paceNote,
      fivePctLoss: weightLb * 0.05,
      tenPctLoss: weightLb * 0.1,
      bmr,
      maintenance,
      activityLabel: ACTIVITY_MULT[state.activity].label,
      deficitLowConservative,
      deficitHighConservative,
      deficitLowClinical,
      deficitHighClinical,
      threshold,
      belowFloorWarning,
      hydrationLowMl,
      hydrationHighMl,
      bottlesLow,
      bottlesHigh,
      hydrationActivityLabel: HYDRATION_ACTIVITY[state.hydrationActivity].label,
      sweatLabel: SWEAT[state.sweat].label,
      symptomNote,
      electrolyteCautionStrong,
      electrolyteCautionGeneral,
      selectedCautions: cleanedCautions,
      hasClinicalCautions,
      hasSoftGate,
      timeframeLabel: tf?.label ?? "No estoy seguro",
      timeframeUnsure,
    },
  };
}

/* -------------------------------- UI bits -------------------------------- */

function ChipButton<T extends string>({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  value?: T;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`min-h-11 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-3 focus:ring-[#C9A84C]/25 ${
        active
          ? "border-[#C9A84C] bg-[#C9A84C] text-white shadow-sm"
          : "border-[#E8E4DA] bg-white text-[#3D3D3D] hover:border-[#C9A84C]/60"
      }`}
    >
      {children}
    </button>
  );
}

function StepHeader({
  step,
  total,
  title,
  subtitle,
  icon: Icon,
}: {
  step: number;
  total: number;
  title: string;
  subtitle: string;
  icon: React.ElementType;
}) {
  return (
    <div className="mb-6 flex items-start gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#C9A84C]/10 ring-1 ring-[#C9A84C]/20">
        <Icon className="h-5 w-5 text-[#A8872E]" />
      </div>
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-widest text-[#A8872E]">
          Paso {step} de {total}
        </p>
        <h3 className="mt-1 text-xl font-semibold leading-tight text-[#1A1A1A] sm:text-2xl">
          {title}
        </h3>
        <p className="mt-1 max-w-xl text-sm leading-relaxed text-[#6B6B6B]">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

function ProgressBar({ active, total }: { active: number; total: number }) {
  return (
    <div className="mb-8 flex items-center gap-2">
      {STEPS.slice(0, total).map((s, i) => {
        const reached = i <= active;
        return (
          <div key={s.id} className="flex flex-1 items-center gap-2">
            <div
              className={`h-1.5 flex-1 rounded-full transition-colors ${
                reached ? "bg-[#C9A84C]" : "bg-[#E8E4DA]"
              }`}
            />
            {i === STEPS.length - 1 && (
              <span className="hidden text-[10px] font-semibold uppercase tracking-widest text-[#9A9A9A] sm:inline">
                Reporte
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}

function ReportSection({
  icon: Icon,
  title,
  eyebrow,
  children,
  tone = "light",
}: {
  icon: React.ElementType;
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <section
      className={`rounded-3xl p-6 sm:p-7 ${
        dark
          ? "border border-[#2D2D2D] bg-[#1A1A1A] text-white"
          : "border border-[#E8E4DA] bg-white"
      }`}
    >
      <div className="mb-5 flex items-start gap-3">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${
            dark ? "bg-[#C9A84C]/15" : "bg-[#C9A84C]/10"
          }`}
        >
          <Icon className="h-5 w-5 text-[#C9A84C]" />
        </div>
        <div>
          {eyebrow && (
            <p
              className={`text-[10px] font-semibold uppercase tracking-widest ${
                dark ? "text-[#E2C97E]" : "text-[#A8872E]"
              }`}
            >
              {eyebrow}
            </p>
          )}
          <h3
            className={`mt-1 text-lg font-semibold ${
              dark ? "text-white" : "text-[#1A1A1A]"
            }`}
          >
            {title}
          </h3>
        </div>
      </div>
      {children}
    </section>
  );
}

function MetricRow({
  label,
  value,
  detail,
  dark,
}: {
  label: string;
  value: string;
  detail?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-4 ${
        dark
          ? "border border-white/10 bg-white/[0.04]"
          : "border border-[#EDE8DC] bg-[#FAF8F4]"
      }`}
    >
      <p
        className={`text-[10px] font-semibold uppercase tracking-widest ${
          dark ? "text-white/55" : "text-[#9A9A9A]"
        }`}
      >
        {label}
      </p>
      <p
        className={`mt-1 text-lg font-semibold ${
          dark ? "text-white" : "text-[#1A1A1A]"
        }`}
      >
        {value}
      </p>
      {detail && (
        <p
          className={`mt-1 text-xs leading-relaxed ${
            dark ? "text-white/55" : "text-[#6B6B6B]"
          }`}
        >
          {detail}
        </p>
      )}
    </div>
  );
}

function NoteCard({
  tone,
  icon: Icon,
  title,
  children,
}: {
  tone: "info" | "warn" | "alert";
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  const styles =
    tone === "alert"
      ? "border-[#C05050]/30 bg-[#FAEAEA] text-[#7A2A2A]"
      : tone === "warn"
        ? "border-[#C9A84C]/35 bg-[#FDF6E8] text-[#7A5C18]"
        : "border-[#E8E4DA] bg-[#FAF8F4] text-[#3D3D3D]";
  return (
    <div className={`rounded-2xl border p-4 ${styles}`}>
      <div className="flex items-start gap-3">
        <Icon className="mt-0.5 h-4 w-4 shrink-0" />
        <div className="text-sm leading-relaxed">
          <p className="font-semibold">{title}</p>
          <div className="mt-1 text-[13px] leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------- Main view ------------------------------- */

export default function IntegratedMetabolicProfile() {
  const [step, setStep] = useState(0);
  const [state, setState] = useState<FormState>(initialState);
  const [error, setError] = useState("");
  const [hardGate, setHardGate] = useState<{
    title: string;
    message: string;
  } | null>(null);
  const [report, setReport] = useState<ReportData | null>(null);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };

  const goNext = () => {
    setError("");
    if (step === 0) {
      // light validation for basics so users don't reach the report empty
      const hasAll =
        state.age && state.feet && state.weight && state.goalWeight;
      if (!hasAll) {
        setError(
          "Completa edad, estatura, peso actual y peso meta para continuar.",
        );
        return;
      }
      const ageNum = Number.parseFloat(state.age);
      if (Number.isFinite(ageNum) && ageNum < 18) {
        setHardGate({
          title: "Esta herramienta es para adultos",
          message:
            "Para personas menores de 18 años, las decisiones sobre peso, hidratación, electrolitos y nutrición requieren evaluación pediátrica especializada. Recomendamos consultar con un proveedor antes de usar herramientas de este tipo.",
        });
        setStep(STEPS.length - 1);
        return;
      }
    }
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };

  const goBack = () => {
    setError("");
    setStep((s) => Math.max(s - 1, 0));
  };

  const generate = () => {
    setError("");
    const result = buildReport(state);
    if (!result.ok) {
      if (result.hardGate) {
        setHardGate(result.hardGate);
        setReport(null);
      } else {
        setError(result.fieldError ?? "Verifica tus respuestas e intenta de nuevo.");
        return;
      }
    } else {
      setHardGate(null);
      setReport(result.data ?? null);
      trackCalculatorUsed("perfil-metabolico");
    }
    setStep(STEPS.length - 1);
  };

  const reset = () => {
    setStep(0);
    setState(initialState);
    setError("");
    setReport(null);
    setHardGate(null);
  };

  const reviewSummary = useMemo(() => {
    const items: { label: string; value: string }[] = [];
    if (state.age) items.push({ label: "Edad", value: `${state.age} años` });
    items.push({
      label: "Sexo",
      value: state.sex === "mujer" ? "Mujer" : "Hombre",
    });
    if (state.feet || state.inches)
      items.push({
        label: "Estatura",
        value: `${state.feet || "–"} ft ${state.inches || "0"} in`,
      });
    if (state.weight)
      items.push({ label: "Peso actual", value: `${state.weight} lb` });
    if (state.goalWeight)
      items.push({ label: "Peso meta", value: `${state.goalWeight} lb` });
    items.push({
      label: "Plazo",
      value:
        TIMEFRAME_OPTIONS.find((t) => t.value === state.timeframe)?.label ??
        "—",
    });
    items.push({
      label: "Actividad",
      value: ACTIVITY_MULT[state.activity].label,
    });
    return items;
  }, [state]);

  /* --------------------------------- Steps --------------------------------- */

  const renderStep0 = () => (
    <div>
      <StepHeader
        step={1}
        total={STEPS.length - 1}
        title="Datos básicos"
        subtitle="Edad, sexo, estatura y peso. Estos datos sirven solo para estimaciones educativas."
        icon={ClipboardList}
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberInput
          id="pmi-age"
          label="Edad"
          value={state.age}
          onChange={(v) => update("age", v)}
          placeholder="38"
          min={1}
          max={100}
        />
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#1A1A1A]">
            Sexo
          </label>
          <div className="grid grid-cols-2 gap-2">
            <ChipButton
              active={state.sex === "mujer"}
              onClick={() => update("sex", "mujer")}
            >
              Mujer
            </ChipButton>
            <ChipButton
              active={state.sex === "hombre"}
              onClick={() => update("sex", "hombre")}
            >
              Hombre
            </ChipButton>
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <NumberInput
          id="pmi-feet"
          label="Estatura"
          value={state.feet}
          onChange={(v) => update("feet", v)}
          placeholder="5"
          min={3}
          max={8}
          suffix="ft"
        />
        <NumberInput
          id="pmi-inches"
          label="Pulgadas"
          value={state.inches}
          onChange={(v) => update("inches", v)}
          placeholder="6"
          min={0}
          max={11}
          suffix="in"
        />
        <NumberInput
          id="pmi-weight"
          label="Peso actual"
          value={state.weight}
          onChange={(v) => update("weight", v)}
          placeholder="180"
          min={50}
          max={800}
          suffix="lb"
        />
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <NumberInput
          id="pmi-goal"
          label="Peso meta"
          value={state.goalWeight}
          onChange={(v) => update("goalWeight", v)}
          placeholder="160"
          min={50}
          max={800}
          suffix="lb"
          hint="No usamos el concepto de “peso ideal”. La meta debe individualizarse."
        />
      </div>
    </div>
  );

  const renderStep1 = () => (
    <div>
      <StepHeader
        step={2}
        total={STEPS.length - 1}
        title="Meta y tiempo"
        subtitle="Selecciona el plazo que estás considerando. Si no estás seguro, lo tomamos como exploración."
        icon={CalendarRange}
      />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {TIMEFRAME_OPTIONS.map((t) => (
          <ChipButton
            key={t.value}
            active={state.timeframe === t.value}
            onClick={() => update("timeframe", t.value)}
          >
            {t.label}
          </ChipButton>
        ))}
      </div>
      <div className="mt-5 rounded-2xl border border-[#E8E4DA] bg-[#FAF8F4] p-4">
        <p className="text-xs leading-relaxed text-[#6B6B6B]">
          Un ritmo comúnmente utilizado como referencia sostenible es
          aproximadamente 1–2 lb por semana. Ritmos mayores pueden requerir
          supervisión clínica.
        </p>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div>
      <StepHeader
        step={3}
        total={STEPS.length - 1}
        title="Actividad física general"
        subtitle="Tu nivel de actividad cotidiano se usa para estimar el gasto energético total."
        icon={Activity}
      />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {(Object.keys(ACTIVITY_MULT) as Activity[]).map((k) => (
          <ChipButton
            key={k}
            active={state.activity === k}
            onClick={() => update("activity", k)}
          >
            {ACTIVITY_MULT[k].label}
          </ChipButton>
        ))}
      </div>
      <div className="mt-5 rounded-2xl border border-[#E8E4DA] bg-[#FAF8F4] p-4">
        <p className="text-xs leading-relaxed text-[#6B6B6B]">
          Esta herramienta usa la ecuación Mifflin-St Jeor, una fórmula común
          para estimar gasto energético en adultos. Es una aproximación; el
          metabolismo real puede variar por composición corporal, genética,
          medicamentos, condiciones médicas y otros factores.
        </p>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div>
      <StepHeader
        step={4}
        total={STEPS.length - 1}
        title="Hidratación, sudoración y síntomas"
        subtitle="Ayuda a estimar un rango educativo de líquidos y a contextualizar señales recientes."
        icon={Droplets}
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#1A1A1A]">
            Actividad física diaria
          </label>
          <div className="grid grid-cols-3 gap-2">
            {(Object.keys(HYDRATION_ACTIVITY) as HydrationActivity[]).map(
              (k) => (
                <ChipButton
                  key={k}
                  active={state.hydrationActivity === k}
                  onClick={() => update("hydrationActivity", k)}
                >
                  {HYDRATION_ACTIVITY[k].label}
                </ChipButton>
              ),
            )}
          </div>
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#1A1A1A]">
            Sudoración habitual
          </label>
          <div className="grid grid-cols-3 gap-2">
            {(Object.keys(SWEAT) as SweatLevel[]).map((k) => (
              <ChipButton
                key={k}
                active={state.sweat === k}
                onClick={() => update("sweat", k)}
              >
                {SWEAT[k].label}
              </ChipButton>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <p className="mb-3 text-sm font-semibold text-[#1A1A1A]">
          Síntomas recientes
        </p>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {SYMPTOM_OPTIONS.map((item) => (
            <label
              key={item}
              className="flex min-h-11 cursor-pointer items-center gap-3 rounded-xl border border-[#E8E4DA] bg-white px-3 py-2 text-sm font-medium text-[#3D3D3D] transition-colors hover:border-[#C9A84C]/50"
            >
              <input
                type="checkbox"
                checked={state.symptoms.includes(item)}
                onChange={() =>
                  update(
                    "symptoms",
                    toggleListValue(item, state.symptoms, "Ninguno"),
                  )
                }
                className="h-4 w-4 accent-[#C9A84C]"
              />
              {item}
            </label>
          ))}
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-[#E8E4DA] bg-[#FAF8F4] p-4">
        <p className="text-xs leading-relaxed text-[#6B6B6B]">
          Las necesidades de hidratación varían por peso, actividad,
          sudoración, clima, medicamentos y condiciones médicas.
        </p>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div>
      <StepHeader
        step={5}
        total={STEPS.length - 1}
        title="Precauciones clínicas"
        subtitle="Marca lo que aplique. Estas señales se usan solo para mostrarte cautelas adicionales."
        icon={ShieldCheck}
      />
      <div className="grid gap-2 sm:grid-cols-2">
        {CAUTION_OPTIONS.map((item) => (
          <label
            key={item}
            className="flex min-h-11 cursor-pointer items-center gap-3 rounded-xl border border-[#E8E4DA] bg-white px-3 py-2 text-sm font-medium text-[#3D3D3D] transition-colors hover:border-[#C9A84C]/50"
          >
            <input
              type="checkbox"
              checked={state.cautions.includes(item)}
              onChange={() =>
                update(
                  "cautions",
                  toggleListValue(item, state.cautions, "Ninguna"),
                )
              }
              className="h-4 w-4 accent-[#C9A84C]"
            />
            {item}
          </label>
        ))}
      </div>

      <div className="mt-5 rounded-2xl border border-[#E8E4DA] bg-[#FAF8F4] p-4">
        <p className="text-xs leading-relaxed text-[#6B6B6B]">
          No uses esta herramienta como guía única si estás embarazada,
          lactando, eres menor de 18 años o tienes historial de trastornos
          alimentarios. En esos casos, la evaluación clínica es esencial.
        </p>
      </div>

      <div className="mt-4 rounded-2xl border border-[#E8E4DA] bg-white p-4">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-[#A8872E]">
          Resumen rápido
        </p>
        <ul className="grid gap-1.5 sm:grid-cols-2">
          {reviewSummary.map((row) => (
            <li
              key={row.label}
              className="flex items-center justify-between gap-3 text-xs text-[#3D3D3D]"
            >
              <span className="text-[#9A9A9A]">{row.label}</span>
              <span className="font-medium">{row.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  /* -------------------------------- Report -------------------------------- */

  const renderReport = () => {
    if (hardGate) {
      return (
        <div className="rounded-3xl border border-[#C05050]/30 bg-[#FAEAEA] p-6 sm:p-8">
          <div className="flex items-start gap-3">
            <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-[#C05050]" />
            <div>
              <h3 className="text-xl font-semibold text-[#7A2A2A]">
                {hardGate.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#7A2A2A]/85">
                {hardGate.message}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/agendar-evaluacion"
                  className="inline-flex items-center gap-2 rounded-full bg-[#1A1A1A] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#3D3D3D]"
                >
                  Agendar evaluación
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <button
                  type="button"
                  onClick={reset}
                  className="inline-flex items-center gap-2 rounded-full border border-[#7A2A2A]/25 bg-white px-5 py-2.5 text-sm font-semibold text-[#7A2A2A] transition-colors hover:bg-[#F4D9D9]"
                >
                  <RotateCcw className="h-4 w-4" />
                  Reiniciar
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (!report) {
      return (
        <div className="rounded-3xl border border-[#E8E4DA] bg-white p-6 text-sm text-[#6B6B6B]">
          Completa los pasos anteriores para generar tu reporte educativo.
        </div>
      );
    }

    const r = report;
    const goalReached = r.poundsToLose <= 0;
    const fivePctTarget = r.weightLb - r.fivePctLoss;
    const tenPctTarget = r.weightLb - r.tenPctLoss;

    return (
      <div className="space-y-5">
        {/* Soft gate banner */}
        {r.hasSoftGate && (
          <NoteCard
            tone="warn"
            icon={TriangleAlert}
            title="Tu contexto requiere evaluación clínica"
          >
            Marcaste embarazo, lactancia o historial de trastornos
            alimentarios. Esta herramienta no debe usarse como guía única en
            estos casos. Habla con un proveedor antes de aplicar cualquier
            estimado de calorías, hidratación o pérdida de peso.
          </NoteCard>
        )}

        {/* 1. Resumen metabólico */}
        <ReportSection
          icon={ClipboardList}
          title="Resumen metabólico"
          eyebrow="Sección 1"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div
              className="rounded-2xl border p-5"
              style={{
                borderColor: `${r.bmiCategory.color}30`,
                backgroundColor: r.bmiCategory.bg,
              }}
            >
              <p
                className="text-[10px] font-semibold uppercase tracking-widest"
                style={{ color: r.bmiCategory.color }}
              >
                IMC estimado
              </p>
              <p
                className="mt-1 text-4xl font-semibold"
                style={{ color: r.bmiCategory.color }}
              >
                {r.bmi}
              </p>
              <p
                className="mt-2 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
                style={{
                  backgroundColor: `${r.bmiCategory.color}20`,
                  color: r.bmiCategory.color,
                }}
              >
                {r.bmiCategory.label}
              </p>
            </div>
            <div className="grid gap-3">
              <MetricRow
                label="Pérdida planteada"
                value={
                  goalReached
                    ? "Meta no aplica (peso meta ≥ peso actual)"
                    : `${r.poundsToLose.toFixed(1)} lb`
                }
              />
              <MetricRow
                label="Plazo seleccionado"
                value={r.timeframeLabel}
                detail={
                  r.timeframeUnsure
                    ? "Sin plazo: no calculamos ritmo semanal."
                    : undefined
                }
              />
            </div>
          </div>

          <div className="mt-5">
            <NoteCard
              tone="info"
              icon={Info}
              title="Limitaciones del IMC"
            >
              El IMC es una herramienta inicial basada en peso y estatura. No
              mide grasa corporal, masa muscular ni distribución de grasa.
              Debe interpretarse junto con historial clínico, medidas
              corporales y evaluación profesional.
            </NoteCard>
          </div>
        </ReportSection>

        {/* 2. Meta y ritmo */}
        <ReportSection
          icon={Target}
          title="Meta y ritmo"
          eyebrow="Sección 2"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <MetricRow
              label="Clasificación de ritmo"
              value={r.paceClassification}
              detail={
                r.weeklyPace
                  ? `${r.weeklyPace.toFixed(1)} lb/semana aprox.`
                  : "Sin plazo seleccionado o meta no aplicable."
              }
            />
            <MetricRow
              label="Referencias 5% / 10%"
              value={
                goalReached
                  ? "—"
                  : `${(r.fivePctLoss).toFixed(1)} lb / ${(r.tenPctLoss).toFixed(1)} lb`
              }
              detail={
                goalReached
                  ? undefined
                  : `Equivalente a llegar a ~${fivePctTarget.toFixed(1)} lb / ${tenPctTarget.toFixed(1)} lb`
              }
            />
          </div>

          {r.paceWarning && (
            <div className="mt-4">
              <NoteCard
                tone="alert"
                icon={TriangleAlert}
                title="Ritmo agresivo"
              >
                {r.paceWarning}
              </NoteCard>
            </div>
          )}

          {r.paceNote && !r.paceWarning && (
            <div className="mt-4">
              <NoteCard tone="info" icon={Info} title="Lectura del ritmo">
                {r.paceNote}
              </NoteCard>
            </div>
          )}

          <div className="mt-4 rounded-2xl border border-[#EDE8DC] bg-[#FAF8F4] p-4 text-xs leading-relaxed text-[#6B6B6B]">
            Muchas guías utilizan 5%–10% del peso inicial como meta inicial
            clínicamente significativa en aproximadamente 6 meses, pero la
            meta debe individualizarse.
          </div>
        </ReportSection>

        {/* 3. Energía estimada */}
        <ReportSection
          icon={Flame}
          title="Energía estimada"
          eyebrow="Sección 3"
          tone="dark"
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <MetricRow
              dark
              label="BMR / RMR"
              value={formatCalories(r.bmr)}
              detail="Mifflin-St Jeor."
            />
            <MetricRow
              dark
              label="Mantenimiento"
              value={formatCalories(r.maintenance)}
              detail={`Actividad: ${r.activityLabel}`}
            />
            <MetricRow
              dark
              label="Rango prudente (-300 a -500)"
              value={`${formatCalories(r.deficitLowConservative)} – ${formatCalories(
                r.deficitHighConservative,
              )}`}
              detail="Educativo. No es plan nutricional."
            />
            <MetricRow
              dark
              label="Rango clínico frecuente (-500 a -750)"
              value={`${formatCalories(r.deficitLowClinical)} – ${formatCalories(
                r.deficitHighClinical,
              )}`}
              detail="Suele requerir acompañamiento profesional."
            />
            <MetricRow
              dark
              label="Umbral de cautela"
              value={formatCalories(r.threshold)}
              detail={
                r.sex === "hombre"
                  ? "Hombres: no bajar de 1500 kcal sin supervisión."
                  : "Mujeres: no bajar de 1200 kcal sin supervisión."
              }
            />
          </div>

          {r.belowFloorWarning && (
            <div className="mt-4 flex items-start gap-3 rounded-2xl border border-[#C9A84C]/25 bg-[#C9A84C]/10 p-4">
              <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0 text-[#E2C97E]" />
              <p className="text-xs leading-relaxed text-white/80">
                {r.belowFloorWarning}
              </p>
            </div>
          )}

          <p className="mt-4 text-xs leading-relaxed text-white/65">
            Esta estimación no crea un plan nutricional. Sueño, medicamentos,
            masa muscular, condiciones metabólicas y adherencia pueden cambiar
            tus necesidades. Las dietas de muy baja caloría (≤800 kcal/día)
            requieren supervisión médica y no las recomendamos por defecto.
          </p>
        </ReportSection>

        {/* 4. Hidratación */}
        <ReportSection
          icon={Droplets}
          title="Hidratación"
          eyebrow="Sección 4"
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <MetricRow
              label="Rango diario"
              value={`${formatLiters(r.hydrationLowMl)} – ${formatLiters(r.hydrationHighMl)}`}
              detail={`Actividad: ${r.hydrationActivityLabel} · Sudoración: ${r.sweatLabel}`}
            />
            <MetricRow
              label="Botellas 16.9 oz aprox."
              value={`${r.bottlesLow.toFixed(1)} – ${r.bottlesHigh.toFixed(1)}`}
              detail="Aprox. 500 mL por botella."
            />
          </div>

          {r.symptomNote && (
            <div className="mt-4">
              <NoteCard
                tone="info"
                icon={Info}
                title="Sobre los síntomas seleccionados"
              >
                {r.symptomNote}
              </NoteCard>
            </div>
          )}

          {r.electrolyteCautionStrong && (
            <div className="mt-3">
              <NoteCard
                tone="alert"
                icon={ShieldAlert}
                title="Cautela con líquidos y electrolitos"
              >
                {r.electrolyteCautionStrong}
              </NoteCard>
            </div>
          )}

          {!r.electrolyteCautionStrong && r.electrolyteCautionGeneral && (
            <div className="mt-3">
              <NoteCard
                tone="info"
                icon={Info}
                title="Electrolitos: nota general"
              >
                {r.electrolyteCautionGeneral} Esta herramienta no recomienda
                dosis de sodio, potasio ni magnesio.
              </NoteCard>
            </div>
          )}
        </ReportSection>

        {/* 5. Precauciones clínicas */}
        {r.hasClinicalCautions && (
          <ReportSection
            icon={ShieldAlert}
            title="Precauciones clínicas"
            eyebrow="Sección 5"
          >
            <NoteCard
              tone="warn"
              icon={ShieldAlert}
              title="Tus respuestas requieren evaluación clínica"
            >
              Tus respuestas incluyen factores que requieren evaluación clínica
              antes de modificar dieta, hidratación, electrolitos o considerar
              opciones metabólicas.
            </NoteCard>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {r.selectedCautions.map((c) => (
                <li
                  key={c}
                  className="flex items-center gap-2 rounded-xl border border-[#EDE8DC] bg-[#FAF8F4] px-3 py-2 text-xs font-medium text-[#3D3D3D]"
                >
                  <ShieldAlert className="h-3.5 w-3.5 shrink-0 text-[#A8872E]" />
                  {c}
                </li>
              ))}
            </ul>
          </ReportSection>
        )}

        {/* 6. Interpretación educativa */}
        <ReportSection
          icon={Info}
          title="Interpretación educativa"
          eyebrow="Sección 6"
        >
          <ul className="grid gap-3 text-sm leading-relaxed text-[#3D3D3D]">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A84C]" />
              Los resultados son estimaciones generales y educativas, no datos
              clínicos individuales.
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A84C]" />
              No incluyen historial completo, laboratorios, medicamentos,
              composición corporal ni examen físico.
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A84C]" />
              El próximo paso recomendado es completar el quiz metabólico o
              agendar una evaluación clínica.
            </li>
          </ul>

          <div className="mt-5 rounded-2xl border border-[#E8E4DA] bg-[#FAF8F4] p-4 text-xs leading-relaxed text-[#6B6B6B]">
            Esta herramienta ofrece estimados educativos generales. No
            diagnostica, no prescribe, no determina candidatura a tratamiento y
            no sustituye una evaluación clínica. No crea una relación
            proveedor-paciente. Consulta con un profesional de salud antes de
            iniciar un programa de pérdida de peso, cambiar tu alimentación o
            usar suplementos.
          </div>
        </ReportSection>

        {/* 7. CTAs */}
        <div className="rounded-3xl border border-[#2D2D2D] bg-[#1A1A1A] p-6 text-white sm:p-8">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-[#E2C97E]">
            Próximo paso
          </p>
          <h3 className="mt-2 text-2xl font-semibold leading-tight">
            Convierte tus números en una conversación clínica
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
            El quiz metabólico recopila contexto adicional (apetito, hábitos,
            historial) que una calculadora no puede medir. Sigue siendo
            educativo y no sustituye evaluación clínica.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/quiz-metabolico"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A84C] px-6 py-3 text-sm font-semibold text-[#1A1A1A] transition-colors hover:bg-[#E2C97E]"
            >
              Hacer quiz metabólico
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/agendar-evaluacion"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Agendar evaluación
            </Link>
            <Link
              href="/programa-metabolico"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-transparent px-6 py-3 text-sm font-semibold text-white/85 transition-colors hover:text-white"
            >
              Ver programa metabólico
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-full border border-[#E8E4DA] bg-white px-5 py-2.5 text-sm font-semibold text-[#3D3D3D] transition-colors hover:border-[#C9A84C]/50"
          >
            <RotateCcw className="h-4 w-4" />
            Reiniciar perfil
          </button>
          <Link
            href="/calculadoras"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#A8872E] hover:text-[#C9A84C]"
          >
            Ver calculadoras individuales
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    );
  };

  /* --------------------------------- Shell --------------------------------- */

  return (
    <div className="rounded-[2rem] border border-[#E8E4DA] bg-white p-5 shadow-sm sm:p-8">
      <ProgressBar active={Math.min(step, STEPS.length - 1)} total={STEPS.length} />

      {step < STEPS.length - 1 && (
        <div>
          {step === 0 && renderStep0()}
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}
          {step === 4 && renderStep4()}

          {error && (
            <div className="mt-5 flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
              <p>{error}</p>
            </div>
          )}

          <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={goBack}
              disabled={step === 0}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E8E4DA] bg-white px-5 py-2.5 text-sm font-semibold text-[#3D3D3D] transition-colors hover:border-[#C9A84C]/50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver
            </button>

            {step < STEPS.length - 2 ? (
              <button
                type="button"
                onClick={goNext}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1A1A1A] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#3D3D3D]"
              >
                Continuar
                <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={generate}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A84C] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#A8872E]"
              >
                <Sparkles className="h-4 w-4" />
                Generar perfil metabólico
              </button>
            )}
          </div>
        </div>
      )}

      {step === STEPS.length - 1 && renderReport()}
    </div>
  );
}
