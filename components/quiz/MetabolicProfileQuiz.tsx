"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  AlertCircle,
  XCircle,
  AlertTriangle,
  Check,
  ChevronRight,
} from "lucide-react";
import { whatsappLink } from "@/content/site";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Answers {
  // Step 1
  ageGroup: string;
  sex: string;
  heightUnit: "ftin" | "cm";
  heightFt: string;
  heightIn: string;
  heightCm: string;
  weightLb: string;
  // Step 2
  mainGoal: string;
  timeAttempting: string;
  whatHappens: string;
  // Step 3
  prevMedication: string;
  prevExperience: string;
  prevSideEffects: string[];
  // Step 4
  eatingHabits: string;
  foodChallenge: string;
  dailyProtein: string;
  // Step 5
  fastingPractice: string;
  fastingSymptoms: string;
  // Step 6
  dailyWater: string;
  electrolyteUse: string;
  dehydrationSymptoms: string[];
  // Step 7
  currentActivity: string;
  physicalLimitations: string[];
  daysWilling: string;
  // Step 8
  metabolicConditions: string[];
  currentMedications: string[];
  safetyConditions: string[];
}

type ResultCategory = "A" | "B" | "C" | "D";

// ─── Initial state ────────────────────────────────────────────────────────────

const INIT: Answers = {
  ageGroup: "", sex: "", heightUnit: "ftin", heightFt: "",
  heightIn: "0", heightCm: "", weightLb: "", mainGoal: "",
  timeAttempting: "", whatHappens: "", prevMedication: "",
  prevExperience: "", prevSideEffects: [], eatingHabits: "",
  foodChallenge: "", dailyProtein: "", fastingPractice: "",
  fastingSymptoms: "", dailyWater: "", electrolyteUse: "",
  dehydrationSymptoms: [], currentActivity: "", physicalLimitations: [],
  daysWilling: "", metabolicConditions: [], currentMedications: [],
  safetyConditions: [],
};

// ─── Options ──────────────────────────────────────────────────────────────────

const AGE_OPTS = [
  { v: "under18", l: "Menor de 18" }, { v: "18-24", l: "18–24" },
  { v: "25-34", l: "25–34" }, { v: "35-44", l: "35–44" },
  { v: "45-54", l: "45–54" }, { v: "55-64", l: "55–64" },
  { v: "65+", l: "65+" },
];
const SEX_OPTS = [
  { v: "female", l: "Femenino" }, { v: "male", l: "Masculino" },
  { v: "prefer_not", l: "Prefiero no decir" },
];
const GOAL_OPTS = [
  { v: "lose_10_20", l: "Bajar 10–20 lb" },
  { v: "lose_21_40", l: "Bajar 21–40 lb" },
  { v: "lose_over_40", l: "Bajar más de 40 lb" },
  { v: "reduce_belly", l: "Reducir grasa abdominal" },
  { v: "improve_glucose", l: "Mejorar glucosa, insulina o metabolismo" },
  { v: "maintain", l: "Mantener el peso después de haber bajado" },
  { v: "not_sure", l: "No estoy seguro/a, quiero orientación" },
];
const TIME_OPTS = [
  { v: "under_3m", l: "Menos de 3 meses" },
  { v: "3-12m", l: "3–12 meses" },
  { v: "1-3y", l: "1–3 años" },
  { v: "over_3y", l: "Más de 3 años" },
  { v: "yo_yo", l: "He subido y bajado varias veces" },
  { v: "never_formal", l: "Nunca he hecho un programa formal" },
];
const HAPPENS_OPTS = [
  { v: "plateau", l: "Bajo al principio, luego me estanco" },
  { v: "regain", l: "Bajo, pero recupero el peso" },
  { v: "appetite", l: "Me cuesta controlar el apetito" },
  { v: "diet", l: "Me cuesta mantener la dieta" },
  { v: "no_results", l: "No veo cambios aunque como poco" },
  { v: "no_follow", l: "Nunca he tenido seguimiento profesional" },
];
const PREV_MED_OPTS = [
  { v: "tirzepatide", l: "Sí, tirzepatida" },
  { v: "semaglutide", l: "Sí, semaglutida" },
  { v: "liraglutide", l: "Sí, liraglutida" },
  { v: "other_med", l: "Sí, otro medicamento para bajar de peso" },
  { v: "none", l: "No, nunca" },
  { v: "not_sure", l: "No estoy seguro/a" },
];
const PREV_EXP_OPTS = [
  { v: "lost_well", l: "Bajé de peso y lo toleré bien" },
  { v: "lost_side_effects", l: "Bajé de peso, pero tuve náuseas o efectos secundarios" },
  { v: "no_expected", l: "No bajé lo esperado" },
  { v: "stopped_se", l: "Lo suspendí por efectos secundarios" },
  { v: "stopped_cost", l: "Lo suspendí por costo o disponibilidad" },
  { v: "still_using", l: "Lo sigo usando actualmente" },
  { v: "na", l: "No aplica" },
];
const SIDE_EFFECTS_OPTS = [
  { v: "nausea", l: "Náuseas" }, { v: "vomiting", l: "Vómitos" },
  { v: "constipation", l: "Estreñimiento" }, { v: "diarrhea", l: "Diarrea" },
  { v: "reflux", l: "Reflujo" }, { v: "abdominal_pain", l: "Dolor abdominal" },
  { v: "fatigue", l: "Fatiga" }, { v: "headache", l: "Dolor de cabeza" },
  { v: "none", l: "Ninguno" }, { v: "na", l: "No aplica" },
];
const EATING_OPTS = [
  { v: "structured", l: "Como 2–3 comidas estructuradas al día" },
  { v: "grazing", l: "Pico mucho entre comidas" },
  { v: "skip_binge", l: "Me salto comidas y luego como mucho" },
  { v: "eat_out", l: "Como mayormente fuera de casa" },
  { v: "carbs_sugar", l: "Como muchas harinas, dulces o bebidas azucaradas" },
  { v: "healthy_no_loss", l: "Como saludable, pero no bajo de peso" },
  { v: "no_structure", l: "No tengo estructura clara" },
];
const FOOD_CHALLENGE_OPTS = [
  { v: "constant_hunger", l: "Hambre constante" },
  { v: "sugar_cravings", l: "Antojos de azúcar o carbohidratos" },
  { v: "night_eating", l: "Comer de noche" },
  { v: "large_portions", l: "Porciones grandes" },
  { v: "anxiety_stress", l: "Ansiedad o estrés" },
  { v: "no_time", l: "Falta de tiempo" },
  { v: "social", l: "Comer social / fines de semana" },
  { v: "dont_know_food", l: "No sé qué comer" },
];
const PROTEIN_OPTS = [
  { v: "dont_know", l: "No sé" }, { v: "very_little", l: "Muy poca" },
  { v: "1meal", l: "En 1 comida al día" }, { v: "2meals", l: "En 2 comidas al día" },
  { v: "3meals", l: "En 3 comidas al día" },
  { v: "supplements", l: "Uso batidos o suplementos de proteína" },
];
const FASTING_OPTS = [
  { v: "12h", l: "Sí, 12 horas" }, { v: "14-16h", l: "Sí, 14–16 horas" },
  { v: "over16h", l: "Sí, más de 16 horas" },
  { v: "tried_failed", l: "Lo intenté, pero no lo toleré" },
  { v: "never", l: "No, nunca" }, { v: "not_sure_f", l: "No estoy seguro/a" },
];
const FASTING_SX_OPTS = [
  { v: "well_energy", l: "Me siento bien y con energía" },
  { v: "anxiety_hunger", l: "Me da ansiedad o mucha hambre" },
  { v: "headache_f", l: "Me da dolor de cabeza" },
  { v: "dizzy_weak", l: "Me mareo o me siento débil" },
  { v: "overeat_after", l: "Termino comiendo demasiado después" },
  { v: "na", l: "No aplica" },
];
const WATER_OPTS = [
  { v: "less_1L", l: "Menos de 1 litro" }, { v: "1-2L", l: "1–2 litros" },
  { v: "2-3L", l: "2–3 litros" }, { v: "over_3L", l: "Más de 3 litros" },
  { v: "not_sure_w", l: "No estoy seguro/a" },
];
const ELECTROLYTE_OPTS = [
  { v: "daily", l: "Sí, diariamente" },
  { v: "exercise", l: "Sí, cuando hago ejercicio" },
  { v: "occasional", l: "Sí, ocasionalmente" },
  { v: "no", l: "No" },
  { v: "dont_know_e", l: "No sé cuáles usar" },
];
const DEHYDRATION_OPTS = [
  { v: "headache_d", l: "Dolor de cabeza" },
  { v: "dizzy_standing", l: "Mareos al levantarte" },
  { v: "dry_mouth", l: "Boca seca" },
  { v: "cramps", l: "Calambres" },
  { v: "constipation_d", l: "Estreñimiento" },
  { v: "fatigue_d", l: "Fatiga" },
  { v: "dark_urine", l: "Orina muy oscura" },
  { v: "none", l: "Ninguno" },
];
const ACTIVITY_OPTS = [
  { v: "sedentary", l: "Sedentario/a" },
  { v: "walk_occ", l: "Camino ocasionalmente" },
  { v: "walk_regular", l: "Camino 3+ veces por semana" },
  { v: "cardio", l: "Hago cardio frecuente" },
  { v: "weights", l: "Hago pesas / resistencia" },
  { v: "both", l: "Hago cardio y resistencia" },
];
const LIMITATIONS_OPTS = [
  { v: "knee", l: "Dolor de rodillas" }, { v: "back", l: "Dolor de espalda" },
  { v: "breath", l: "Falta de aire con esfuerzo" }, { v: "injury", l: "Lesión reciente" },
  { v: "fatigue_l", l: "Fatiga marcada" }, { v: "none", l: "Ninguna" },
  { v: "not_sure_l", l: "No estoy seguro/a" },
];
const DAYS_OPTS = [
  { v: "1-2", l: "1–2 días" }, { v: "3", l: "3 días" },
  { v: "4-5", l: "4–5 días" }, { v: "everyday", l: "Todos los días algo ligero" },
  { v: "not_sure_d", l: "No estoy seguro/a" },
];
const METABOLIC_OPTS = [
  { v: "prediabetes", l: "Prediabetes" }, { v: "diabetes_t2", l: "Diabetes tipo 2" },
  { v: "htn", l: "Presión alta" }, { v: "dyslipidemia", l: "Colesterol o triglicéridos altos" },
  { v: "fatty_liver", l: "Hígado graso" }, { v: "sleep_apnea", l: "Apnea del sueño" },
  { v: "pcos", l: "PCOS / ovarios poliquísticos" }, { v: "hypothyroidism", l: "Hipotiroidismo" },
  { v: "none", l: "Ninguna" }, { v: "not_sure", l: "No estoy seguro/a" },
];
const MEDICATIONS_OPTS = [
  { v: "insulin", l: "Insulina" },
  { v: "glucose_lowering", l: "Medicamentos que bajan azúcar" },
  { v: "bp_meds", l: "Medicamentos para presión" },
  { v: "diuretics", l: "Diuréticos" },
  { v: "antidepressants", l: "Antidepresivos o antipsicóticos" },
  { v: "steroids", l: "Esteroides frecuentes" },
  { v: "none", l: "Ninguno" }, { v: "not_sure", l: "No estoy seguro/a" },
];
const SAFETY_OPTS = [
  { v: "pancreatitis", l: "Pancreatitis" },
  { v: "gallbladder_severe", l: "Problemas severos de vesícula" },
  { v: "renal_advanced", l: "Enfermedad renal avanzada" },
  { v: "gastroparesis", l: "Gastroparesia" },
  { v: "eating_disorder", l: "Trastorno alimentario activo" },
  { v: "mtc", l: "Cáncer medular de tiroides (personal o familiar)" },
  { v: "men2", l: "MEN2" },
  { v: "pregnancy", l: "Embarazo, lactancia o buscando embarazo" },
  { v: "none", l: "Ninguna" }, { v: "not_sure", l: "No estoy seguro/a" },
];

// ─── Steps metadata ───────────────────────────────────────────────────────────

const STEPS = [
  { label: "Datos básicos", sub: "Tu información esencial" },
  { label: "Meta principal", sub: "Objetivos e historial" },
  { label: "Historial con medicamentos", sub: "Experiencia previa" },
  { label: "Hábitos alimenticios", sub: "Patrones y retos" },
  { label: "Ayuno intermitente", sub: "Experiencia y tolerancia" },
  { label: "Hidratación", sub: "Agua y electrolitos" },
  { label: "Actividad física", sub: "Movimiento y limitaciones" },
  { label: "Salud y seguridad", sub: "Condiciones y medicamentos" },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

const EXCLUSIVE_VALS = ["none", "na", "not_sure", "not_sure_l", "not_sure_d", "not_sure_w", "not_sure_f"];

function toggleMulti(arr: string[], val: string): string[] {
  if (EXCLUSIVE_VALS.includes(val)) {
    return arr.includes(val) ? [] : [val];
  }
  const filtered = arr.filter((v) => !EXCLUSIVE_VALS.includes(v));
  return filtered.includes(val)
    ? filtered.filter((v) => v !== val)
    : [...filtered, val];
}

function getBMI(a: Answers): number | null {
  let hIn: number;
  if (a.heightUnit === "ftin") {
    const ft = parseFloat(a.heightFt) || 0;
    const ins = parseFloat(a.heightIn) || 0;
    hIn = ft * 12 + ins;
  } else {
    const cm = parseFloat(a.heightCm) || 0;
    hIn = cm / 2.54;
  }
  const w = parseFloat(a.weightLb) || 0;
  if (!hIn || !w) return null;
  return (w * 703) / (hIn * hIn);
}

function getBMIInfo(bmi: number) {
  if (bmi < 18.5) return { label: "Bajo peso", color: "#6B9FD4", pct: Math.min(100, ((bmi - 10) / 40) * 100) };
  if (bmi < 25) return { label: "Peso saludable", color: "#4CAF82", pct: Math.min(100, ((bmi - 10) / 40) * 100) };
  if (bmi < 30) return { label: "Sobrepeso", color: "#E8C547", pct: Math.min(100, ((bmi - 10) / 40) * 100) };
  if (bmi < 35) return { label: "Obesidad Grado I", color: "#E8934C", pct: Math.min(100, ((bmi - 10) / 40) * 100) };
  if (bmi < 40) return { label: "Obesidad Grado II", color: "#E8634C", pct: Math.min(100, ((bmi - 10) / 40) * 100) };
  return { label: "Obesidad Grado III", color: "#D64545", pct: 100 };
}

function isStepComplete(step: number, a: Answers): boolean {
  switch (step) {
    case 1: {
      const hasH = a.heightUnit === "ftin"
        ? parseFloat(a.heightFt) > 0
        : parseFloat(a.heightCm) > 0;
      return !!(a.ageGroup && a.sex && hasH && parseFloat(a.weightLb) > 0);
    }
    case 2: return !!(a.mainGoal && a.timeAttempting && a.whatHappens);
    case 3: {
      if (!a.prevMedication) return false;
      if (["none", "not_sure"].includes(a.prevMedication)) return true;
      return !!(a.prevExperience && a.prevSideEffects.length > 0);
    }
    case 4: return !!(a.eatingHabits && a.foodChallenge && a.dailyProtein);
    case 5: {
      if (!a.fastingPractice) return false;
      if (["never", "not_sure_f", "tried_failed"].includes(a.fastingPractice)) return true;
      return !!a.fastingSymptoms;
    }
    case 6: return !!(a.dailyWater && a.electrolyteUse && a.dehydrationSymptoms.length > 0);
    case 7: return !!(a.currentActivity && a.physicalLimitations.length > 0 && a.daysWilling);
    case 8: return !!(a.metabolicConditions.length > 0 && a.currentMedications.length > 0 && a.safetyConditions.length > 0);
    default: return true;
  }
}

// ─── Compute result ───────────────────────────────────────────────────────────

function computeResult(a: Answers) {
  const bmi = getBMI(a);
  const bmiInfo = bmi ? getBMIInfo(bmi) : null;
  const w = parseFloat(a.weightLb) || 0;

  const hasPrediabetes = a.metabolicConditions.includes("prediabetes");
  const hasDiabetes = a.metabolicConditions.includes("diabetes_t2");
  const hasHTN = a.metabolicConditions.includes("htn");
  const hasDyslipidemia = a.metabolicConditions.includes("dyslipidemia");
  const hasFattyLiver = a.metabolicConditions.includes("fatty_liver");
  const hasSleepApnea = a.metabolicConditions.includes("sleep_apnea");
  const hasPCOS = a.metabolicConditions.includes("pcos");
  const hasHypothyroidism = a.metabolicConditions.includes("hypothyroidism");
  const hasComorbidity = hasPrediabetes || hasDiabetes || hasHTN || hasDyslipidemia || hasFattyLiver || hasSleepApnea || hasPCOS;

  // Absolute contraindications
  const isUnder18 = a.ageGroup === "under18";
  const hasAbsoluteCI = a.safetyConditions.some((c) =>
    ["eating_disorder", "mtc", "men2", "pregnancy"].includes(c)
  );
  const isUnderweight = bmi !== null && bmi < 18.5;

  // Review conditions
  const hasSafetyC = a.safetyConditions.some((c) =>
    ["pancreatitis", "gallbladder_severe", "renal_advanced", "gastroparesis"].includes(c)
  );
  const hasRiskMed = a.currentMedications.some((m) =>
    ["insulin", "glucose_lowering", "diuretics"].includes(m)
  );

  let category: ResultCategory;
  if (isUnder18 || hasAbsoluteCI || isUnderweight) category = "D";
  else if (hasSafetyC || hasRiskMed) category = "C";
  else if (bmi !== null && (bmi >= 30 || (bmi >= 27 && hasComorbidity))) category = "A";
  else category = "B";

  // Tolerance
  let tolerance: "high" | "cautious" | "none";
  if (!a.prevMedication || a.prevMedication === "none") tolerance = "none";
  else if (["lost_well", "still_using"].includes(a.prevExperience)) tolerance = "high";
  else tolerance = "cautious";

  // Hydration priority
  const hydrationHigh =
    a.dailyWater === "less_1L" ||
    a.dehydrationSymptoms.filter((s) => s !== "none").length >= 2;

  // Lifestyle readiness
  const actPts = ["cardio", "weights", "both"].includes(a.currentActivity) ? 2
    : ["walk_regular"].includes(a.currentActivity) ? 1 : 0;
  const watPts = ["2-3L", "over_3L"].includes(a.dailyWater) ? 1 : 0;
  const protPts = ["2meals", "3meals", "supplements"].includes(a.dailyProtein) ? 1 : 0;
  const fastPts = ["12h", "14-16h", "over16h"].includes(a.fastingPractice) ? 1 : 0;
  const daysPts = ["4-5", "everyday"].includes(a.daysWilling) ? 1 : 0;
  const lsScore = actPts + watPts + protPts + fastPts + daysPts;
  const lifestyle: "Alta" | "Moderada" | "Baja" = lsScore >= 4 ? "Alta" : lsScore >= 2 ? "Moderada" : "Baja";

  // Priorities
  const priorities: string[] = [];
  if (hydrationHigh) priorities.push("Optimizar hidratación y electrolitos");
  if (["dont_know", "very_little", "1meal"].includes(a.dailyProtein)) priorities.push("Aumentar ingesta de proteína diaria");
  if (["constant_hunger", "sugar_cravings", "night_eating"].includes(a.foodChallenge)) priorities.push("Control de apetito y antojos");
  if (a.currentActivity === "sedentary") priorities.push("Iniciar actividad física gradual");
  if (tolerance === "cautious") priorities.push("Vigilancia estrecha de tolerancia GI");
  if (hasHypothyroidism) priorities.push("Coordinación con manejo tiroideo");
  if (hasDiabetes || hasPrediabetes) priorities.push("Monitoreo glucémico integrado");
  if (["carbs_sugar", "no_structure", "skip_binge"].includes(a.eatingHabits)) priorities.push("Estructura nutricional y hábitos alimenticios");
  if (priorities.length === 0) priorities.push("Evaluación médica para definir protocolo personalizado");

  return {
    bmi: bmi ? parseFloat(bmi.toFixed(1)) : null,
    bmiInfo,
    weightLb: w,
    targets: {
      p5: Math.round(w * 0.05), w5: Math.round(w - w * 0.05),
      p10: Math.round(w * 0.10), w10: Math.round(w - w * 0.10),
      p15: Math.round(w * 0.15), w15: Math.round(w - w * 0.15),
      p20: Math.round(w * 0.20), w20: Math.round(w - w * 0.20),
    },
    category,
    tolerance,
    hydrationHigh,
    lifestyle,
    priorities: priorities.slice(0, 4),
    hasComorbidity,
  };
}

// ─── Result config ────────────────────────────────────────────────────────────

const RESULT_CFG = {
  A: {
    label: "Candidato fuerte",
    color: "#C9A84C",
    Icon: CheckCircle2,
    title: "Tu perfil sugiere que podrías ser un candidato sólido",
    description: "Un BMI ≥ 30, o ≥ 27 con condición metabólica asociada, sin contraindicaciones absolutas. Una evaluación clínica puede confirmar elegibilidad y definir tu protocolo.",
    recommendation: "Programa Metabólico Integral con evaluación médica completa.",
  },
  B: {
    label: "Candidato posible con evaluación",
    color: "#7B9AB5",
    Icon: AlertCircle,
    title: "Una evaluación individualizada puede orientarte",
    description: "Tu perfil presenta factores que requieren valoración clínica para determinar opciones disponibles, seguridad y plan apropiado.",
    recommendation: "Evaluación médica inicial para determinar elegibilidad y opciones.",
  },
  C: {
    label: "Requiere revisión médica primero",
    color: "#E8934C",
    Icon: AlertTriangle,
    title: "Tu caso necesita valoración médica antes de iniciar",
    description: "Algunas condiciones o medicamentos en tu perfil requieren revisión médica previa para determinar si es seguro proceder y en qué condiciones.",
    recommendation: "Consulta médica obligatoria. El médico determina si y cómo puede proceder.",
  },
  D: {
    label: "No recomendado actualmente",
    color: "#D64545",
    Icon: XCircle,
    title: "Este programa no es apropiado para tu perfil actual",
    description: "Tu perfil incluye contraindicaciones para este tipo de terapias. Te recomendamos hablar con tu médico de cabecera sobre las alternativas más seguras.",
    recommendation: "Consulta con tu médico sobre alternativas apropiadas para tu situación.",
  },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function OptionCard({
  label, selected, onClick,
}: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left px-4 py-3.5 rounded-2xl border-2 transition-all duration-200 flex items-center justify-between gap-3 group ${
        selected
          ? "bg-[#1A1A1A] border-[#C9A84C] text-white shadow-md shadow-[#C9A84C]/10"
          : "bg-white border-[#E8E4DA] text-[#1A1A1A] hover:border-[#C9A84C]/50 hover:bg-[#FAF8F4]"
      }`}
    >
      <span className="text-sm font-medium leading-snug">{label}</span>
      <span className={`shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
        selected
          ? "bg-[#C9A84C] border-[#C9A84C]"
          : "border-[#E8E4DA] group-hover:border-[#C9A84C]/50"
      }`}>
        {selected && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
      </span>
    </button>
  );
}

function MultiCard({
  label, selected, onClick,
}: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all duration-200 flex items-center gap-3 group ${
        selected
          ? "bg-[#1A1A1A] border-[#C9A84C] text-white"
          : "bg-white border-[#E8E4DA] text-[#1A1A1A] hover:border-[#C9A84C]/50"
      }`}
    >
      <span className={`shrink-0 w-4 h-4 rounded border-2 flex items-center justify-center transition-all ${
        selected ? "bg-[#C9A84C] border-[#C9A84C]" : "border-[#C0BAB0]"
      }`}>
        {selected && <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />}
      </span>
      <span className="text-sm font-medium leading-snug">{label}</span>
    </button>
  );
}

function ProgressBar({ step }: { step: number }) {
  const pct = step === 0 ? 0 : (step / 8) * 100;
  return (
    <div className="w-full h-1 bg-[#E8E4DA] rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-[#C9A84C] rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${pct}%` }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-bold uppercase tracking-widest text-[#C9A84C] mb-3">
      {children}
    </p>
  );
}

function StepHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-base font-semibold text-[#1A1A1A] mb-4 leading-snug">
      {children}
    </h3>
  );
}

// ─── WhatsApp message ─────────────────────────────────────────────────────────

function buildWAMsg(a: Answers, r: ReturnType<typeof computeResult>): string {
  const resultLabel = RESULT_CFG[r.category].label;
  const bmiText = r.bmi ? `${r.bmi} — ${r.bmiInfo?.label}` : "No disponible";
  const lines = [
    "Hola, completé el Quiz de Perfil Metabólico de Aurum Nova.",
    "",
    `📊 *RESULTADO: ${resultLabel.toUpperCase()}*`,
    `IMC: ${bmiText}`,
    r.weightLb > 0 && `Peso actual: ${r.weightLb} lb`,
    "",
    "📋 *MI PERFIL*",
    a.ageGroup && `Grupo de edad: ${a.ageGroup}`,
    a.sex === "female" ? "Sexo: Femenino" : a.sex === "male" ? "Sexo: Masculino" : "",
    a.mainGoal && `Meta: ${GOAL_OPTS.find((o) => o.v === a.mainGoal)?.l ?? ""}`,
    "",
    "⚠️ Entiendo que este quiz es orientativo y no sustituye evaluación médica.",
    "Quiero saber más sobre el Programa Metabólico Integral de Aurum Nova.",
  ];
  return lines.filter(Boolean).join("\n");
}

// ─── Animation variants ───────────────────────────────────────────────────────

// slideVariants intentionally removed — inline initial/animate/exit props on the
// motion.div child capture dir at render time, avoiding framer-motion custom prop issues.

// ─── Main component ───────────────────────────────────────────────────────────

export default function MetabolicProfileQuiz() {
  const [screen, setScreen] = useState<number>(0); // 0=intro, 1-8=steps, 9=result
  const [dir, setDir] = useState(1);
  const [a, setA] = useState<Answers>(INIT);
  const [result, setResult] = useState<ReturnType<typeof computeResult> | null>(null);
  const [stepError, setStepError] = useState("");
  const cardRef = useRef<HTMLDivElement>(null);

  function set<K extends keyof Answers>(k: K, v: Answers[K]) {
    setA((prev) => ({ ...prev, [k]: v }));
    setStepError("");
  }

  function multi(field: keyof Answers, val: string) {
    const current = a[field] as string[];
    set(field, toggleMulti(current, val) as Answers[typeof field]);
  }

  function goTo(next: number) {
    setDir(next > screen ? 1 : -1);
    setScreen(next);
    setStepError("");
    setTimeout(() => {
      cardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }

  function handleNext() {
    if (screen >= 1 && screen <= 8 && !isStepComplete(screen, a)) {
      setStepError("Por favor responde todas las preguntas de esta sección antes de continuar.");
      return;
    }
    if (screen === 8) {
      const r = computeResult(a);
      setResult(r);
      goTo(9);
    } else {
      goTo(screen + 1);
    }
  }

  function restart() {
    setA(INIT);
    setResult(null);
    setStepError("");
    goTo(0);
  }

  const showPrevExp = a.prevMedication && !["none", "not_sure"].includes(a.prevMedication);
  const showFastingSx = a.fastingPractice && !["never", "not_sure_f", "tried_failed"].includes(a.fastingPractice);

  return (
    <section className="section-padding bg-[#0E0E0E]" id="quiz-metabolico">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 bg-[#C9A84C]/10 border border-[#C9A84C]/20 text-[#C9A84C] text-xs font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4">
            Herramienta Clínica Orientativa
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-3">
            Tu Perfil Metabólico Aurum Nova
          </h2>
          <p className="text-sm text-[#9A9A9A] max-w-xl mx-auto leading-relaxed">
            Este quiz no sustituye una evaluación médica, diagnóstico ni tratamiento. Los resultados son
            orientación inicial. La elegibilidad final requiere evaluación clínica individual.
          </p>
        </motion.div>

        {/* Quiz card */}
        <div className="max-w-2xl mx-auto" ref={cardRef}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Progress header (steps 1-8) */}
            {screen >= 1 && screen <= 8 && (
              <div className="px-6 pt-5 pb-4 border-b border-[#F0EDE6]">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-[#C9A84C]">
                      Paso {screen} de 8
                    </p>
                    <p className="text-sm font-semibold text-[#1A1A1A] mt-0.5">
                      {STEPS[screen - 1].label}
                    </p>
                  </div>
                  <p className="text-xs text-[#9A9A9A]">{STEPS[screen - 1].sub}</p>
                </div>
                <ProgressBar step={screen} />
              </div>
            )}

            {/* Screens */}
            <div className="relative">
              <div key={screen}>
                {/* ── INTRO ── */}
                {screen === 0 && (
                  <div className="px-6 py-8 sm:px-10 sm:py-12">
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 bg-[#C9A84C]/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                        <ShieldCheck className="w-8 h-8 text-[#C9A84C]" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">
                        Descubre tu Perfil Metabólico
                      </h3>
                      <p className="text-sm text-[#6B6B6B] leading-relaxed max-w-md mx-auto">
                        Completa este quiz clínico de 2–3 minutos para conocer si podrías ser
                        candidato a nuestro programa de control de peso.
                      </p>
                    </div>

                    <div className="bg-[#FAF8F4] border border-[#E8E4DA] rounded-2xl p-4 mb-8">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" />
                        <p className="text-xs text-[#6B6B6B] leading-relaxed">
                          <span className="font-semibold text-[#3D3D3D]">Aviso médico: </span>
                          Este quiz no sustituye una evaluación médica, diagnóstico ni tratamiento.
                          Los resultados son una orientación inicial basada en tus respuestas. La
                          elegibilidad final para cualquier terapia médica requiere evaluación
                          clínica, revisión de historial, medicamentos, laboratorios y criterio
                          profesional.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                      {STEPS.map((s, i) => (
                        <div key={i} className="text-center p-3 bg-[#FAF8F4] rounded-xl">
                          <p className="text-[10px] font-bold text-[#C9A84C] mb-1">0{i + 1}</p>
                          <p className="text-[11px] text-[#3D3D3D] font-medium leading-tight">{s.label}</p>
                        </div>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => goTo(1)}
                      className="w-full flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold py-4 rounded-2xl text-sm transition-all duration-200 shadow-lg shadow-[#C9A84C]/20"
                    >
                      Comenzar quiz
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <p className="mt-3 text-[11px] text-[#9A9A9A] text-center">
                      Tus respuestas no se almacenan en servidores
                    </p>
                  </div>
                )}

                {/* ── STEP 1: Datos básicos ── */}
                {screen === 1 && (
                  <div className="px-6 py-6 sm:px-8 space-y-6">
                    {/* Age */}
                    <div>
                      <SectionLabel>Rango de edad</SectionLabel>
                      <StepHeading>¿Cuál es tu rango de edad?</StepHeading>
                      <div className="grid grid-cols-2 gap-2">
                        {AGE_OPTS.map((o) => (
                          <OptionCard key={o.v} label={o.l} selected={a.ageGroup === o.v} onClick={() => set("ageGroup", o.v)} />
                        ))}
                      </div>
                    </div>

                    {/* Sex */}
                    <div>
                      <SectionLabel>Sexo biológico</SectionLabel>
                      <StepHeading>¿Cuál es tu sexo biológico?</StepHeading>
                      <div className="grid grid-cols-1 gap-2">
                        {SEX_OPTS.map((o) => (
                          <OptionCard key={o.v} label={o.l} selected={a.sex === o.v} onClick={() => set("sex", o.v)} />
                        ))}
                      </div>
                    </div>

                    {/* Height */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <SectionLabel>Estatura</SectionLabel>
                          <StepHeading>¿Cuánto mides?</StepHeading>
                        </div>
                        <button
                          type="button"
                          onClick={() => set("heightUnit", a.heightUnit === "ftin" ? "cm" : "ftin")}
                          className="text-xs font-semibold text-[#C9A84C] border border-[#C9A84C]/30 rounded-lg px-3 py-1.5 hover:bg-[#C9A84C]/5 transition-colors"
                        >
                          {a.heightUnit === "ftin" ? "Cambiar a cm" : "Cambiar a ft/in"}
                        </button>
                      </div>
                      {a.heightUnit === "ftin" ? (
                        <div className="flex gap-3">
                          <div className="flex-1">
                            <label className="block text-xs text-[#6B6B6B] mb-1.5">Pies</label>
                            <input
                              type="number" min={3} max={8} placeholder="ej. 5"
                              value={a.heightFt}
                              onChange={(e) => set("heightFt", e.target.value)}
                              className="w-full border-2 border-[#E8E4DA] rounded-xl px-4 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#C9A84C] transition-colors"
                            />
                          </div>
                          <div className="flex-1">
                            <label className="block text-xs text-[#6B6B6B] mb-1.5">Pulgadas</label>
                            <input
                              type="number" min={0} max={11} placeholder="ej. 6"
                              value={a.heightIn}
                              onChange={(e) => set("heightIn", e.target.value)}
                              className="w-full border-2 border-[#E8E4DA] rounded-xl px-4 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#C9A84C] transition-colors"
                            />
                          </div>
                        </div>
                      ) : (
                        <input
                          type="number" min={100} max={250} placeholder="ej. 165"
                          value={a.heightCm}
                          onChange={(e) => set("heightCm", e.target.value)}
                          className="w-full border-2 border-[#E8E4DA] rounded-xl px-4 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#C9A84C] transition-colors"
                        />
                      )}
                    </div>

                    {/* Weight */}
                    <div>
                      <SectionLabel>Peso actual</SectionLabel>
                      <StepHeading>¿Cuánto pesas actualmente? <span className="text-[#9A9A9A] font-normal">(en libras)</span></StepHeading>
                      <input
                        type="number" min={80} max={600} placeholder="ej. 185"
                        value={a.weightLb}
                        onChange={(e) => set("weightLb", e.target.value)}
                        className="w-full border-2 border-[#E8E4DA] rounded-xl px-4 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#C9A84C] transition-colors"
                      />
                      <p className="text-xs text-[#9A9A9A] mt-1.5">Solo necesitamos libras para calcular tu IMC</p>
                    </div>
                  </div>
                )}

                {/* ── STEP 2: Meta principal ── */}
                {screen === 2 && (
                  <div className="px-6 py-6 sm:px-8 space-y-6">
                    <div>
                      <SectionLabel>Meta principal</SectionLabel>
                      <StepHeading>¿Cuál es tu objetivo principal?</StepHeading>
                      <div className="grid grid-cols-1 gap-2">
                        {GOAL_OPTS.map((o) => (
                          <OptionCard key={o.v} label={o.l} selected={a.mainGoal === o.v} onClick={() => set("mainGoal", o.v)} />
                        ))}
                      </div>
                    </div>

                    <div>
                      <SectionLabel>Historial de intentos</SectionLabel>
                      <StepHeading>¿Cuánto tiempo llevas intentando bajar de peso?</StepHeading>
                      <div className="grid grid-cols-1 gap-2">
                        {TIME_OPTS.map((o) => (
                          <OptionCard key={o.v} label={o.l} selected={a.timeAttempting === o.v} onClick={() => set("timeAttempting", o.v)} />
                        ))}
                      </div>
                    </div>

                    <div>
                      <SectionLabel>Patrón habitual</SectionLabel>
                      <StepHeading>¿Qué suele pasar cuando intentas bajar de peso?</StepHeading>
                      <div className="grid grid-cols-1 gap-2">
                        {HAPPENS_OPTS.map((o) => (
                          <OptionCard key={o.v} label={o.l} selected={a.whatHappens === o.v} onClick={() => set("whatHappens", o.v)} />
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* ── STEP 3: Historial medicamentos ── */}
                {screen === 3 && (
                  <div className="px-6 py-6 sm:px-8 space-y-6">
                    <div>
                      <SectionLabel>Historial farmacológico</SectionLabel>
                      <StepHeading>¿Has usado algún medicamento o péptido para bajar de peso?</StepHeading>
                      <div className="grid grid-cols-1 gap-2">
                        {PREV_MED_OPTS.map((o) => (
                          <OptionCard key={o.v} label={o.l} selected={a.prevMedication === o.v} onClick={() => set("prevMedication", o.v)} />
                        ))}
                      </div>
                    </div>

                    {showPrevExp && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <SectionLabel>Experiencia previa</SectionLabel>
                        <StepHeading>¿Cómo fue tu experiencia con ese medicamento?</StepHeading>
                        <div className="grid grid-cols-1 gap-2">
                          {PREV_EXP_OPTS.map((o) => (
                            <OptionCard key={o.v} label={o.l} selected={a.prevExperience === o.v} onClick={() => set("prevExperience", o.v)} />
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {showPrevExp && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25, delay: 0.05 }}
                      >
                        <SectionLabel>Efectos secundarios previos</SectionLabel>
                        <StepHeading>¿Experimentaste alguno de estos efectos? <span className="text-[#9A9A9A] font-normal text-sm">(selecciona todos los que apliquen)</span></StepHeading>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {SIDE_EFFECTS_OPTS.map((o) => (
                            <MultiCard key={o.v} label={o.l} selected={a.prevSideEffects.includes(o.v)} onClick={() => multi("prevSideEffects", o.v)} />
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {!showPrevExp && a.prevMedication && (
                      <div className="bg-[#FAF8F4] border border-[#E8E4DA] rounded-xl p-4 text-center">
                        <p className="text-sm text-[#6B6B6B]">Puedes avanzar al siguiente paso.</p>
                      </div>
                    )}
                  </div>
                )}

                {/* ── STEP 4: Hábitos alimenticios ── */}
                {screen === 4 && (
                  <div className="px-6 py-6 sm:px-8 space-y-6">
                    <div>
                      <SectionLabel>Patrones de alimentación</SectionLabel>
                      <StepHeading>¿Cuál describe mejor cómo comes normalmente?</StepHeading>
                      <div className="grid grid-cols-1 gap-2">
                        {EATING_OPTS.map((o) => (
                          <OptionCard key={o.v} label={o.l} selected={a.eatingHabits === o.v} onClick={() => set("eatingHabits", o.v)} />
                        ))}
                      </div>
                    </div>

                    <div>
                      <SectionLabel>Mayor reto</SectionLabel>
                      <StepHeading>¿Cuál es tu mayor reto con la comida?</StepHeading>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {FOOD_CHALLENGE_OPTS.map((o) => (
                          <OptionCard key={o.v} label={o.l} selected={a.foodChallenge === o.v} onClick={() => set("foodChallenge", o.v)} />
                        ))}
                      </div>
                    </div>

                    <div>
                      <SectionLabel>Proteína diaria</SectionLabel>
                      <StepHeading>¿Cómo dirías que es tu consumo de proteína al día?</StepHeading>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {PROTEIN_OPTS.map((o) => (
                          <OptionCard key={o.v} label={o.l} selected={a.dailyProtein === o.v} onClick={() => set("dailyProtein", o.v)} />
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* ── STEP 5: Ayuno intermitente ── */}
                {screen === 5 && (
                  <div className="px-6 py-6 sm:px-8 space-y-6">
                    <div>
                      <SectionLabel>Ayuno intermitente</SectionLabel>
                      <StepHeading>¿Practicas o has practicado ayuno intermitente?</StepHeading>
                      <div className="grid grid-cols-1 gap-2">
                        {FASTING_OPTS.map((o) => (
                          <OptionCard key={o.v} label={o.l} selected={a.fastingPractice === o.v} onClick={() => set("fastingPractice", o.v)} />
                        ))}
                      </div>
                    </div>

                    {showFastingSx && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <SectionLabel>Síntomas durante el ayuno</SectionLabel>
                        <StepHeading>¿Cómo te sientes durante el ayuno?</StepHeading>
                        <div className="grid grid-cols-1 gap-2">
                          {FASTING_SX_OPTS.map((o) => (
                            <OptionCard key={o.v} label={o.l} selected={a.fastingSymptoms === o.v} onClick={() => set("fastingSymptoms", o.v)} />
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                )}

                {/* ── STEP 6: Hidratación ── */}
                {screen === 6 && (
                  <div className="px-6 py-6 sm:px-8 space-y-6">
                    <div>
                      <SectionLabel>Hidratación diaria</SectionLabel>
                      <StepHeading>¿Cuánta agua consumes al día aproximadamente?</StepHeading>
                      <div className="grid grid-cols-1 gap-2">
                        {WATER_OPTS.map((o) => (
                          <OptionCard key={o.v} label={o.l} selected={a.dailyWater === o.v} onClick={() => set("dailyWater", o.v)} />
                        ))}
                      </div>
                    </div>

                    <div>
                      <SectionLabel>Electrolitos</SectionLabel>
                      <StepHeading>¿Usas electrolitos o sales minerales?</StepHeading>
                      <div className="grid grid-cols-1 gap-2">
                        {ELECTROLYTE_OPTS.map((o) => (
                          <OptionCard key={o.v} label={o.l} selected={a.electrolyteUse === o.v} onClick={() => set("electrolyteUse", o.v)} />
                        ))}
                      </div>
                    </div>

                    <div>
                      <SectionLabel>Señales de deshidratación</SectionLabel>
                      <StepHeading>¿Experimentas alguno de estos síntomas? <span className="text-[#9A9A9A] font-normal text-sm">(selecciona todos los que apliquen)</span></StepHeading>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {DEHYDRATION_OPTS.map((o) => (
                          <MultiCard key={o.v} label={o.l} selected={a.dehydrationSymptoms.includes(o.v)} onClick={() => multi("dehydrationSymptoms", o.v)} />
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* ── STEP 7: Actividad física ── */}
                {screen === 7 && (
                  <div className="px-6 py-6 sm:px-8 space-y-6">
                    <div>
                      <SectionLabel>Actividad física actual</SectionLabel>
                      <StepHeading>¿Cuál describe mejor tu nivel de actividad?</StepHeading>
                      <div className="grid grid-cols-1 gap-2">
                        {ACTIVITY_OPTS.map((o) => (
                          <OptionCard key={o.v} label={o.l} selected={a.currentActivity === o.v} onClick={() => set("currentActivity", o.v)} />
                        ))}
                      </div>
                    </div>

                    <div>
                      <SectionLabel>Limitaciones físicas</SectionLabel>
                      <StepHeading>¿Tienes alguna de estas limitaciones? <span className="text-[#9A9A9A] font-normal text-sm">(selecciona todas las que apliquen)</span></StepHeading>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {LIMITATIONS_OPTS.map((o) => (
                          <MultiCard key={o.v} label={o.l} selected={a.physicalLimitations.includes(o.v)} onClick={() => multi("physicalLimitations", o.v)} />
                        ))}
                      </div>
                    </div>

                    <div>
                      <SectionLabel>Disponibilidad</SectionLabel>
                      <StepHeading>¿Cuántos días estarías dispuesto/a a moverte?</StepHeading>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {DAYS_OPTS.map((o) => (
                          <OptionCard key={o.v} label={o.l} selected={a.daysWilling === o.v} onClick={() => set("daysWilling", o.v)} />
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* ── STEP 8: Salud y seguridad ── */}
                {screen === 8 && (
                  <div className="px-6 py-6 sm:px-8 space-y-6">
                    <div className="bg-[#FAF8F4] border border-[#E8E4DA] rounded-xl p-4 mb-2">
                      <p className="text-xs text-[#6B6B6B] leading-relaxed">
                        Esta sección evalúa factores de seguridad clínica. Es importante responder con precisión. Si no estás seguro/a, selecciona "No estoy seguro/a".
                      </p>
                    </div>

                    <div>
                      <SectionLabel>Condiciones metabólicas</SectionLabel>
                      <StepHeading>¿Tienes alguna de estas condiciones? <span className="text-[#9A9A9A] font-normal text-sm">(selecciona todas las que apliquen)</span></StepHeading>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {METABOLIC_OPTS.map((o) => (
                          <MultiCard key={o.v} label={o.l} selected={a.metabolicConditions.includes(o.v)} onClick={() => multi("metabolicConditions", o.v)} />
                        ))}
                      </div>
                    </div>

                    <div>
                      <SectionLabel>Medicamentos actuales</SectionLabel>
                      <StepHeading>¿Tomas alguno de estos medicamentos? <span className="text-[#9A9A9A] font-normal text-sm">(selecciona todos los que apliquen)</span></StepHeading>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {MEDICATIONS_OPTS.map((o) => (
                          <MultiCard key={o.v} label={o.l} selected={a.currentMedications.includes(o.v)} onClick={() => multi("currentMedications", o.v)} />
                        ))}
                      </div>
                    </div>

                    <div>
                      <SectionLabel>Factores de seguridad</SectionLabel>
                      <StepHeading>¿Tienes alguna de estas condiciones? <span className="text-[#9A9A9A] font-normal text-sm">(selecciona todas las que apliquen)</span></StepHeading>
                      <div className="grid grid-cols-1 gap-2">
                        {SAFETY_OPTS.map((o) => (
                          <MultiCard key={o.v} label={o.l} selected={a.safetyConditions.includes(o.v)} onClick={() => multi("safetyConditions", o.v)} />
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* ── RESULT ── */}
                {screen === 9 && result && (
                  <div className="px-6 py-6 sm:px-8 space-y-5">
                    {/* Result header */}
                    <div className="text-center pb-2">
                      <p className="text-[11px] font-bold uppercase tracking-widest text-[#C9A84C] mb-2">
                        Tu Perfil Metabólico está listo
                      </p>
                      <h3 className="text-lg font-semibold text-[#1A1A1A] mb-1">
                        {RESULT_CFG[result.category].title}
                      </h3>
                    </div>

                    {/* Category badge */}
                    {(() => {
                      const cfg = RESULT_CFG[result.category];
                      const Icon = cfg.Icon;
                      return (
                        <div
                          className="rounded-2xl border-2 p-5"
                          style={{ borderColor: cfg.color, backgroundColor: `${cfg.color}0D` }}
                        >
                          <div className="flex items-start gap-4">
                            <div
                              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                              style={{ backgroundColor: `${cfg.color}20` }}
                            >
                              <Icon className="w-5 h-5" style={{ color: cfg.color }} />
                            </div>
                            <div>
                              <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: cfg.color }}>
                                {cfg.label}
                              </p>
                              <p className="text-sm text-[#3D3D3D] leading-relaxed">{cfg.description}</p>
                              <p className="text-xs font-semibold text-[#1A1A1A] mt-2">
                                Recomendación: <span className="font-normal text-[#6B6B6B]">{cfg.recommendation}</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })()}

                    {/* BMI card */}
                    {result.bmi && result.bmiInfo && (
                      <div className="bg-[#FAF8F4] border border-[#E8E4DA] rounded-2xl p-4">
                        <p className="text-[11px] font-bold uppercase tracking-widest text-[#9A9A9A] mb-3">
                          Índice de Masa Corporal
                        </p>
                        <div className="flex items-end justify-between mb-2">
                          <div>
                            <span className="text-3xl font-bold" style={{ color: result.bmiInfo.color }}>
                              {result.bmi}
                            </span>
                            <span className="text-sm text-[#9A9A9A] ml-1.5">IMC</span>
                          </div>
                          <span
                            className="text-sm font-semibold px-3 py-1 rounded-full"
                            style={{ color: result.bmiInfo.color, backgroundColor: `${result.bmiInfo.color}15` }}
                          >
                            {result.bmiInfo.label}
                          </span>
                        </div>
                        <div className="h-2.5 bg-gradient-to-r from-[#6B9FD4] via-[#4CAF82] via-[#E8C547] via-[#E8934C] to-[#D64545] rounded-full relative overflow-hidden">
                          <div
                            className="absolute top-0 h-full w-0.5 bg-white rounded-full shadow-sm"
                            style={{ left: `${result.bmiInfo.pct}%` }}
                          />
                        </div>
                        <div className="flex justify-between mt-1">
                          <span className="text-[10px] text-[#9A9A9A]">10</span>
                          <span className="text-[10px] text-[#9A9A9A]">25</span>
                          <span className="text-[10px] text-[#9A9A9A]">30</span>
                          <span className="text-[10px] text-[#9A9A9A]">40+</span>
                        </div>
                      </div>
                    )}

                    {/* Weight targets */}
                    {result.weightLb > 0 && (
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-widest text-[#9A9A9A] mb-3">
                          Metas de referencia educativas
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {([
                            { pct: 5, loss: result.targets.p5, proj: result.targets.w5 },
                            { pct: 10, loss: result.targets.p10, proj: result.targets.w10 },
                            { pct: 15, loss: result.targets.p15, proj: result.targets.w15 },
                            { pct: 20, loss: result.targets.p20, proj: result.targets.w20 },
                          ] as const).map((t) => (
                            <motion.div
                              key={t.pct}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: t.pct / 100 }}
                              className="bg-white border border-[#E8E4DA] rounded-xl p-3 text-center"
                            >
                              <p className="text-[10px] font-bold text-[#C9A84C] mb-1">Meta {t.pct}%</p>
                              <p className="text-base font-bold text-[#1A1A1A]">−{t.loss} lb</p>
                              <p className="text-[10px] text-[#9A9A9A] mt-0.5">{t.proj} lb</p>
                            </motion.div>
                          ))}
                        </div>
                        <p className="text-[10px] text-[#9A9A9A] mt-2 leading-relaxed">
                          Estos rangos son referencias educativas y no garantizan resultados. Los resultados reales dependen del perfil clínico y supervisión médica.
                        </p>
                      </div>
                    )}

                    {/* Indicators row */}
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        {
                          label: "Tolerancia previa",
                          value: result.tolerance === "high" ? "Alta" : result.tolerance === "cautious" ? "Cautelosa" : "Sin historial",
                          color: result.tolerance === "high" ? "#4CAF82" : result.tolerance === "cautious" ? "#E8934C" : "#9A9A9A",
                        },
                        {
                          label: "Hidratación",
                          value: result.hydrationHigh ? "Prioritaria" : "Adecuada",
                          color: result.hydrationHigh ? "#E8934C" : "#4CAF82",
                        },
                        {
                          label: "Readiness",
                          value: result.lifestyle,
                          color: result.lifestyle === "Alta" ? "#4CAF82" : result.lifestyle === "Moderada" ? "#E8C547" : "#E8934C",
                        },
                      ].map((ind) => (
                        <div key={ind.label} className="bg-[#FAF8F4] border border-[#E8E4DA] rounded-xl p-3 text-center">
                          <p className="text-[9px] font-bold uppercase tracking-wider text-[#9A9A9A] mb-1">{ind.label}</p>
                          <p className="text-sm font-bold" style={{ color: ind.color }}>{ind.value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Priorities */}
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-widest text-[#9A9A9A] mb-3">
                        Prioridades iniciales personalizadas
                      </p>
                      <div className="space-y-2">
                        {result.priorities.map((p, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.08 }}
                            className="flex items-center gap-3 bg-white border border-[#E8E4DA] rounded-xl px-4 py-3"
                          >
                            <ChevronRight className="w-4 h-4 text-[#C9A84C] shrink-0" />
                            <span className="text-sm text-[#3D3D3D]">{p}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="bg-[#1A1A1A] rounded-2xl p-5 space-y-3">
                      <p className="text-sm font-semibold text-white">¿Quieres hablar con nuestro equipo?</p>
                      <p className="text-xs text-[#9A9A9A] leading-relaxed">
                        La elegibilidad final se determina solo con evaluación médica presencial.
                      </p>
                      <a
                        href={whatsappLink(buildWAMsg(a, result))}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold py-3.5 rounded-2xl text-sm transition-all duration-200 shadow-lg shadow-[#C9A84C]/20"
                      >
                        Agendar evaluación médica
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <a
                        href={whatsappLink(buildWAMsg(a, result))}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full bg-transparent border border-[#2D2D2D] hover:border-[#C9A84C]/40 text-[#9A9A9A] hover:text-white font-medium py-3 rounded-2xl text-sm transition-all duration-200"
                      >
                        Enviar mi resultado por WhatsApp
                      </a>
                    </div>

                    {/* Disclaimer */}
                    <div className="flex items-start gap-3 bg-[#FAF8F4] border border-[#E8E4DA] rounded-xl p-4">
                      <ShieldCheck className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" />
                      <p className="text-[11px] text-[#6B6B6B] leading-relaxed">
                        Este quiz no sustituye una evaluación médica, diagnóstico ni tratamiento. Los resultados son una orientación inicial basada en tus respuestas. La elegibilidad final para cualquier terapia médica requiere evaluación clínica, revisión de historial, medicamentos, laboratorios y criterio profesional.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={restart}
                      className="w-full text-xs text-[#9A9A9A] hover:text-[#C9A84C] transition-colors py-2"
                    >
                      Reiniciar quiz
                    </button>
                  </div>
                )}
                </div>
            </div>

            {/* Navigation footer (steps 1-8) */}
            {screen >= 1 && screen <= 8 && (
              <div className="px-6 pb-6 sm:px-8 pt-2 border-t border-[#F0EDE6]">
                {stepError && (
                  <div className="flex items-center gap-2 mb-3 bg-red-50 border border-red-200 rounded-xl px-4 py-2.5">
                    <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                    <p className="text-xs text-red-600">{stepError}</p>
                  </div>
                )}
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => goTo(screen - 1)}
                    className="flex items-center gap-1.5 px-5 py-3 border-2 border-[#E8E4DA] rounded-2xl text-sm font-medium text-[#6B6B6B] hover:border-[#C9A84C]/40 hover:text-[#1A1A1A] transition-all"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Atrás
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex-1 flex items-center justify-center gap-2 bg-[#1A1A1A] hover:bg-[#C9A84C] text-white font-semibold py-3 rounded-2xl text-sm transition-all duration-200"
                  >
                    {screen === 8 ? "Ver mi perfil" : "Continuar"}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
