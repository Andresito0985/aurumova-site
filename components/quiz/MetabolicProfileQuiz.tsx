"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  AlertCircle,
  Check,
  ChevronRight,
  ClipboardList,
  CalendarCheck,
  MessageCircle,
  Download,
  Share2,
} from "lucide-react";
import { buildWhatsAppUrl, getWhatsAppUrl } from "@/lib/whatsapp-intents";
import {
  GENERAL_PROTOCOL_PRICING_DISCLAIMER,
  getSuggestedProtocol,
  metabolicProtocols,
  type MetabolicProtocol,
  type SuggestedProtocolResult,
} from "@/content/metabolic-protocols";
import {
  trackAppointmentClick,
  trackEvent,
  trackQuizStarted,
  trackQuizCompleted,
  trackWhatsAppClick,
} from "@/lib/tracking";
import { buildMetabolicQuizWhatsAppMessage } from "@/lib/metabolic-whatsapp";

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
  firstName: string;
  lastName: string;
  phone: string;
  hasRecentLabs: string;
  recentLabTiming: string;
  wantsLabAnalysis: string;
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
  safetyConditions: [], firstName: "", lastName: "", phone: "",
  hasRecentLabs: "", recentLabTiming: "", wantsLabAnalysis: "",
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
  { v: "metabolic_injection", l: "Sí, terapia metabólica inyectable" },
  { v: "oral_weight_med", l: "Sí, medicamento oral para bajar de peso" },
  { v: "wellness_peptide", l: "Sí, péptido o terapia wellness" },
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
const LAB_STATUS_OPTS = [
  { v: "yes", l: "Sí" },
  { v: "no", l: "No" },
  { v: "not_sure", l: "No estoy seguro/a" },
];
const LAB_TIMING_OPTS = [
  { v: "less_30", l: "Menos de 30 días" },
  { v: "1_3_months", l: "1 a 3 meses" },
  { v: "3_6_months", l: "3 a 6 meses" },
  { v: "over_6_months", l: "Más de 6 meses" },
  { v: "dont_remember", l: "No recuerdo" },
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
  { label: "Salud, laboratorios y contacto", sub: "Seguridad y seguimiento" },
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
    case 8: {
      const hasContact = !!(a.firstName.trim() && a.lastName.trim() && a.phone.trim());
      const hasLabs = !!(
        a.hasRecentLabs &&
        a.wantsLabAnalysis &&
        (a.hasRecentLabs !== "yes" || a.recentLabTiming)
      );
      return !!(
        a.metabolicConditions.length > 0 &&
        a.currentMedications.length > 0 &&
        a.safetyConditions.length > 0 &&
        hasContact &&
        hasLabs
      );
    }
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

type QuizResult = NonNullable<ReturnType<typeof computeResult>>;
type OptionItem = { v: string; l: string };

function getOptionLabel(options: OptionItem[], value?: string, fallback = "No especificado") {
  if (!value) return fallback;
  return options.find((option) => option.v === value)?.l ?? fallback;
}

function getNutritionSummary(a: Answers) {
  if (!a.eatingHabits && !a.dailyProtein) return "No especificado";
  if (["structured", "healthy_no_loss"].includes(a.eatingHabits)) {
    return "Estructura presente, se interpreta en evaluación";
  }
  if (["no_structure", "skip_binge", "eat_out", "carbs_sugar"].includes(a.eatingHabits)) {
    return "Podría beneficiarse de más estructura";
  }
  if (["dont_know", "very_little", "1meal"].includes(a.dailyProtein)) {
    return "Proteína y estructura por revisar";
  }
  return getOptionLabel(EATING_OPTS, a.eatingHabits, "Se revisa en evaluación");
}

function getActivitySummary(a: Answers) {
  return getOptionLabel(ACTIVITY_OPTS, a.currentActivity, "Se revisa en evaluación");
}

function getHeightSummary(a: Answers) {
  if (a.heightUnit === "cm") return a.heightCm ? `${a.heightCm} cm` : "No especificado";
  const feet = a.heightFt || "0";
  const inches = a.heightIn || "0";
  return `${feet}'${inches}"`;
}

function getYesNoLabel(value?: string) {
  return getOptionLabel(LAB_STATUS_OPTS, value, "No especificado");
}

function getLabTimingLabel(a: Answers) {
  if (a.hasRecentLabs === "no") return "No aplica";
  if (a.hasRecentLabs === "not_sure") return "No estoy seguro/a";
  return getOptionLabel(LAB_TIMING_OPTS, a.recentLabTiming, "No especificado");
}

function getPriorTherapySummary(a: Answers) {
  if (a.prevMedication === "none") return "Sin experiencia previa";
  return getOptionLabel(PREV_MED_OPTS, a.prevMedication, "No especificado");
}

function getToleranceSummary(result: QuizResult) {
  if (result.tolerance === "high") return "Historial de tolerancia favorable";
  if (result.tolerance === "cautious") return "Requiere vigilancia de tolerancia";
  return "Sin historial previo";
}

function getSafetySummary(result: QuizResult, suggestion: SuggestedProtocolResult) {
  if (suggestion.hasMajorCaution) return "Revisión clínica primero";
  if (result.category === "C" || result.category === "D") return "Requiere evaluación individual";
  return "Sujeto a evaluación clínica";
}

function getWeightReference(result: QuizResult) {
  if (result.weightLb <= 0) return "Pendiente de evaluación clínica";
  return `Referencia 5-10%: ${result.targets.p5}-${result.targets.p10} lb`;
}

function getWhatsAppProtocolLabel(suggestion: SuggestedProtocolResult) {
  if (suggestion.id === "clinical_review_first") {
    return "Evaluación clínica individualizada primero";
  }
  return suggestion.protocol?.name.replace("Protocolo ", "") ?? "Por confirmar";
}

function getLabStatusSummary(a: Answers): string {
  if (a.hasRecentLabs === "yes") {
    const timing = getLabTimingLabel(a);
    return `Cuenta con laboratorios recientes (${timing.toLowerCase()})`;
  }
  if (a.wantsLabAnalysis === "yes") {
    return "Solicita análisis de laboratorios en evaluación";
  }
  return "Pendiente de coordinar en evaluación";
}

function buildProtocolWAMsg(a: Answers, result: QuizResult, suggestion: SuggestedProtocolResult): string {
  const protocolLabel =
    suggestion.id === "clinical_review_first"
      ? "Evaluación clínica individualizada primero"
      : getWhatsAppProtocolLabel(suggestion);
  return buildMetabolicQuizWhatsAppMessage({
    firstName: a.firstName.trim(),
    lastName: a.lastName.trim(),
    phone: a.phone.trim(),
    bmi: result.bmi ? `${result.bmi}` : "No disponible",
    bmiCategory: result.bmiInfo?.label ?? "No disponible",
    primaryGoal: getOptionLabel(GOAL_OPTS, a.mainGoal, "No especificado"),
    labStatus: getLabStatusSummary(a),
    suggestedProtocol: protocolLabel,
    mainNeed: suggestion.mainNeed,
    clinicalReviewFirst: suggestion.id === "clinical_review_first",
  });
}

function SummaryTile({
  label,
  value,
  helper,
}: {
  label: string;
  value: string;
  helper?: string;
}) {
  return (
    <div className="rounded-2xl border border-[#E8E4DA] bg-white p-4">
      <p className="text-[10px] font-bold uppercase tracking-widest text-[#9A9A9A] mb-1.5">
        {label}
      </p>
      <p className="text-sm font-semibold leading-snug text-[#1A1A1A]">{value}</p>
      {helper && <p className="mt-1 text-[11px] leading-relaxed text-[#6B6B6B]">{helper}</p>}
    </div>
  );
}

function ProtocolComparisonCard({
  protocol,
  isSuggested,
}: {
  protocol: MetabolicProtocol;
  isSuggested: boolean;
}) {
  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl border p-5 transition-colors ${
        isSuggested
          ? "border-[#C9A84C]/60 bg-[#C9A84C]/5"
          : "border-[#E8E4DA] bg-white"
      }`}
    >
      {isSuggested && (
        <span className="mb-3 inline-flex w-fit rounded-full bg-[#C9A84C] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]">
          Protocolo sugerido
        </span>
      )}
      <div className="mb-4 flex-1">
        <h5 className="text-base font-semibold text-[#1A1A1A]">{protocol.name}</h5>
        <p className="mt-1 text-xs font-medium text-[#6B6B6B]">{protocol.duration}</p>
        <div className="mt-3">
          <p className="text-lg font-semibold leading-none text-[#C9A84C]">
            {protocol.priceLabel}
          </p>
          {protocol.packageLabel && (
            <p className="mt-1 text-xs font-medium leading-relaxed text-[#6B6B6B]">
              {protocol.packageLabel}
            </p>
          )}
        </div>
        {protocol.comparisonLabel && (
          <p className="mt-2 text-[11px] leading-relaxed text-[#6B6B6B]">
            {protocol.comparisonLabel}
          </p>
        )}
        {protocol.savingsLabel && (
          <p className="mt-1 text-[11px] font-semibold leading-relaxed text-[#C9A84C]">
            {protocol.savingsLabel}
          </p>
        )}
      </div>

      <Link
        href="/agendar-evaluacion"
        onClick={() => trackAppointmentClick(`quiz_protocol_${protocol.id}`)}
        className="mt-auto inline-flex items-center justify-center gap-2 rounded-full border border-[#E8E4DA] px-4 py-2.5 text-xs font-semibold text-[#1A1A1A] transition-colors hover:border-[#C9A84C] hover:text-[#C9A84C]"
      >
        Discutir este protocolo
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
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
  const [suggestion, setSuggestion] = useState<SuggestedProtocolResult | null>(null);
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
      const protocolSuggestion = getSuggestedProtocol({
        ageGroup: a.ageGroup,
        bmi: r.bmi,
        bmiCategory: r.bmiInfo?.label,
        mainGoal: a.mainGoal,
        timeAttempting: a.timeAttempting,
        whatHappens: a.whatHappens,
        eatingHabits: a.eatingHabits,
        foodChallenge: a.foodChallenge,
        dailyProtein: a.dailyProtein,
        currentActivity: a.currentActivity,
        lifestyle: r.lifestyle,
        hydrationHigh: r.hydrationHigh,
        tolerance: r.tolerance,
        metabolicConditions: a.metabolicConditions,
        currentMedications: a.currentMedications,
        safetyConditions: a.safetyConditions,
        priorities: r.priorities,
      });
      setResult(r);
      setSuggestion(protocolSuggestion);
      trackQuizCompleted(r?.category);
      trackEvent("ProtocolSuggested", { protocol: protocolSuggestion.id });
      goTo(9);
    } else {
      goTo(screen + 1);
    }
  }

  function restart() {
    setA(INIT);
    setResult(null);
    setSuggestion(null);
    setStepError("");
    goTo(0);
  }

  const showPrevExp = a.prevMedication && !["none", "not_sure"].includes(a.prevMedication);
  const showFastingSx = a.fastingPractice && !["never", "not_sure_f", "tried_failed"].includes(a.fastingPractice);
  const resultWhatsappMessage = result && suggestion ? buildProtocolWAMsg(a, result, suggestion) : "";

  function getResultSummaryFields() {
    if (!result || !suggestion) return null;
    const fullName = [a.firstName, a.lastName].map((s) => s.trim()).filter(Boolean).join(" ");
    const protocolLabel =
      suggestion.id === "clinical_review_first"
        ? "Evaluación clínica individualizada primero"
        : getWhatsAppProtocolLabel(suggestion);
    return {
      patientName: fullName || "Por confirmar",
      date: new Date().toLocaleDateString("es-PR", { year: "numeric", month: "long", day: "numeric" }),
      bmi: result.bmi ? `${result.bmi}` : "No disponible",
      bmiCategory: result.bmiInfo?.label ?? "No disponible",
      primaryGoal: getOptionLabel(GOAL_OPTS, a.mainGoal, "No especificado"),
      labStatus: getLabStatusSummary(a),
      protocolLabel,
      mainNeed: suggestion.mainNeed,
      clinicalReviewFirst: suggestion.id === "clinical_review_first",
    };
  }

  function escapeHtml(s: string): string {
    return s.replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string)
    );
  }

  function buildPrintHtml(): string | null {
    const f = getResultSummaryFields();
    if (!f) return null;
    const e = escapeHtml;
    return `<!doctype html><html lang="es"><head><meta charset="utf-8" />
<title>Resumen Quiz Metabólico — Aurum Nova Wellness Clinic</title>
<style>
  *{box-sizing:border-box;}
  body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Inter,Helvetica,Arial,sans-serif;color:#1A1A1A;margin:0;padding:48px 56px;line-height:1.5;background:#fff;}
  header{border-bottom:1px solid #E8E4DA;padding-bottom:24px;margin-bottom:32px;}
  .eyebrow{font-size:11px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:#C9A84C;margin:0 0 8px;}
  h1{font-size:24px;font-weight:600;margin:0 0 4px;}
  .meta{font-size:13px;color:#6B6B6B;margin:0;}
  section{margin-bottom:28px;}
  h2{font-size:13px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#C9A84C;margin:0 0 12px;}
  dl{margin:0;display:grid;grid-template-columns:170px 1fr;gap:8px 16px;font-size:14px;}
  dt{color:#6B6B6B;font-weight:500;}
  dd{margin:0;color:#1A1A1A;font-weight:600;}
  .note{background:#FAF8F4;border:1px solid #E8E4DA;border-radius:12px;padding:14px 16px;font-size:12px;color:#6B6B6B;}
  .disclaimer{margin-top:32px;font-size:11px;color:#6B6B6B;line-height:1.55;border-top:1px solid #E8E4DA;padding-top:20px;}
  footer{margin-top:24px;font-size:11px;color:#9A9A9A;}
  @media print{body{padding:24px 32px;} @page{size:letter;margin:18mm;}}
</style></head><body>
<header>
  <p class="eyebrow">Aurum Nova Wellness Clinic</p>
  <h1>Resumen — Quiz Metabólico</h1>
  <p class="meta">Generado el ${e(f.date)} · Documento educativo y orientativo</p>
</header>
<section>
  <h2>Datos</h2>
  <dl>
    <dt>Paciente</dt><dd>${e(f.patientName)}</dd>
    <dt>BMI estimado</dt><dd>${e(f.bmi)}</dd>
    <dt>Categoría BMI</dt><dd>${e(f.bmiCategory)}</dd>
    <dt>Meta principal</dt><dd>${e(f.primaryGoal)}</dd>
    <dt>Estado de laboratorios</dt><dd>${e(f.labStatus)}</dd>
  </dl>
</section>
<section>
  <h2>Sugerencia del sistema</h2>
  <dl>
    <dt>Protocolo a discutir</dt><dd>${e(f.protocolLabel)}</dd>
    <dt>Necesidad principal</dt><dd>${e(f.mainNeed)}</dd>
  </dl>
</section>
<section>
  <h2>Próximo paso</h2>
  <div class="note">
    Coordina una evaluación clínica. WhatsApp abrirá un mensaje editable con este resumen para
    que el equipo pueda orientarte. La evaluación clínica confirma elegibilidad y plan.
  </div>
</section>
<p class="disclaimer">
  Este resumen es educativo y orientativo. No diagnostica, no prescribe, no confirma elegibilidad
  y no sustituye una evaluación clínica. No todos los pacientes cualifican para terapia
  metabólica semanal. Los resultados pueden variar. La recomendación final depende de una
  evaluación clínica individualizada.
</p>
<footer>Aurum Nova Wellness Clinic · aurumnovawellnessclinic.com</footer>
<script>window.addEventListener('load',function(){setTimeout(function(){window.focus();window.print();},150);});</script>
</body></html>`;
  }

  function handleDownloadPdf() {
    if (typeof window === "undefined") return;
    const html = buildPrintHtml();
    if (!html) return;
    const win = window.open("", "_blank", "noopener,noreferrer,width=820,height=900");
    if (!win) return;
    win.document.open();
    win.document.write(html);
    win.document.close();
    trackEvent("QuizPDFDownloaded");
  }

  async function handleShareSummary() {
    if (typeof window === "undefined") return;
    const message = resultWhatsappMessage;
    if (!message) return;
    const nav = navigator as Navigator & { share?: (data: ShareData) => Promise<void> };
    if (typeof nav.share === "function") {
      try {
        await nav.share({
          title: "Resumen Quiz Metabólico — Aurum Nova",
          text: message,
        });
        trackEvent("QuizSummaryShared", { method: "web_share" });
        return;
      } catch {
        // user cancelled or unsupported — fall through to WhatsApp
      }
    }
    trackEvent("QuizSummaryShared", { method: "whatsapp_fallback" });
    window.open(getWhatsAppUrl("quiz_completed", { firstName: a.firstName.trim() || undefined }), "_blank", "noopener,noreferrer");
  }

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
        <div className={`${screen === 9 ? "max-w-5xl" : "max-w-2xl"} mx-auto`} ref={cardRef}>
          <div
            className={`${screen === 9 ? "bg-[#FAF8F4]" : "bg-white"} rounded-3xl shadow-2xl overflow-hidden`}
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
                        Completa este quiz clínico de 2–3 minutos para organizar tu punto
                        de partida antes de una evaluación clínica.
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
                      onClick={() => { trackQuizStarted(); goTo(1); }}
                      className="w-full flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#A8872E] text-[#1A1A1A] font-semibold py-4 rounded-2xl text-sm transition-all duration-200 shadow-lg shadow-[#C9A84C]/20"
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

                    <div className="rounded-2xl border border-[#E8E4DA] bg-[#FAF8F4] p-4">
                      <SectionLabel>Contacto para orientación</SectionLabel>
                      <StepHeading>¿Cómo podemos identificar tu resultado si decides enviarlo?</StepHeading>
                      <div className="grid gap-3 sm:grid-cols-2">
                        <div>
                          <label className="mb-1.5 block text-xs font-medium text-[#6B6B6B]">
                            Nombre
                          </label>
                          <input
                            type="text"
                            autoComplete="given-name"
                            value={a.firstName}
                            onChange={(e) => set("firstName", e.target.value)}
                            className="w-full rounded-xl border-2 border-[#E8E4DA] px-4 py-3 text-sm text-[#1A1A1A] outline-none transition-colors focus:border-[#C9A84C]"
                            placeholder="ej. María"
                          />
                        </div>
                        <div>
                          <label className="mb-1.5 block text-xs font-medium text-[#6B6B6B]">
                            Apellido
                          </label>
                          <input
                            type="text"
                            autoComplete="family-name"
                            value={a.lastName}
                            onChange={(e) => set("lastName", e.target.value)}
                            className="w-full rounded-xl border-2 border-[#E8E4DA] px-4 py-3 text-sm text-[#1A1A1A] outline-none transition-colors focus:border-[#C9A84C]"
                            placeholder="ej. López"
                          />
                        </div>
                        <div className="sm:col-span-2">
                          <label className="mb-1.5 block text-xs font-medium text-[#6B6B6B]">
                            Teléfono
                          </label>
                          <input
                            type="tel"
                            autoComplete="tel"
                            value={a.phone}
                            onChange={(e) => set("phone", e.target.value)}
                            className="w-full rounded-xl border-2 border-[#E8E4DA] px-4 py-3 text-sm text-[#1A1A1A] outline-none transition-colors focus:border-[#C9A84C]"
                            placeholder="ej. 787-000-0000"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <SectionLabel>Laboratorios recientes</SectionLabel>
                      <StepHeading>¿Tienes laboratorios recientes de los últimos 3 a 6 meses?</StepHeading>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {LAB_STATUS_OPTS.map((o) => (
                          <OptionCard key={o.v} label={o.l} selected={a.hasRecentLabs === o.v} onClick={() => set("hasRecentLabs", o.v)} />
                        ))}
                      </div>
                    </div>

                    {a.hasRecentLabs === "yes" && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <SectionLabel>Fecha aproximada</SectionLabel>
                        <StepHeading>¿Hace cuánto fueron realizados?</StepHeading>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {LAB_TIMING_OPTS.map((o) => (
                            <OptionCard key={o.v} label={o.l} selected={a.recentLabTiming === o.v} onClick={() => set("recentLabTiming", o.v)} />
                          ))}
                        </div>
                      </motion.div>
                    )}

                    <div>
                      <SectionLabel>Análisis de laboratorios</SectionLabel>
                      <StepHeading>¿Te gustaría que revisemos tus laboratorios como parte de tu evaluación?</StepHeading>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {LAB_STATUS_OPTS.map((o) => (
                          <OptionCard key={o.v} label={o.l} selected={a.wantsLabAnalysis === o.v} onClick={() => set("wantsLabAnalysis", o.v)} />
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* ── RESULT ── */}
                {screen === 9 && result && suggestion && (
                  <div className="space-y-6 px-4 py-5 sm:px-8 sm:py-8">
                    {/* Section 1: completion header */}
                    <div className="rounded-3xl border border-[#E8E4DA] bg-white p-6 sm:p-8">
                      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                        <div className="max-w-2xl">
                          <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-[#C9A84C]">
                            Perfil metabólico inicial
                          </p>
                          <h3 className="text-2xl font-semibold leading-tight text-[#1A1A1A] sm:text-3xl">
                            Tu perfil inicial ya está listo
                          </h3>
                          <p className="mt-3 text-sm leading-relaxed text-[#6B6B6B] sm:text-base">
                            Completaste una primera orientación sobre peso, hábitos, metas y
                            seguridad clínica. Este resultado no sustituye una evaluación médica,
                            pero te ayuda a llegar a tu consulta con mayor claridad.
                          </p>
                        </div>
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#C9A84C]/10 text-[#C9A84C]">
                          <ClipboardList className="h-7 w-7" />
                        </div>
                      </div>
                    </div>

                    {/* Section 2: profile summary */}
                    <section className="rounded-3xl border border-[#E8E4DA] bg-[#FDFCF9] p-5 sm:p-6">
                      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-widest text-[#C9A84C]">
                            Resumen de tu perfil
                          </p>
                          <h4 className="mt-1 text-xl font-semibold text-[#1A1A1A]">
                            Lo que tus respuestas sugieren inicialmente
                          </h4>
                        </div>
                        <p className="text-xs text-[#6B6B6B]">
                          Resultados orientativos, sujetos a evaluación clínica.
                        </p>
                      </div>

                      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        <SummaryTile
                          label="IMC"
                          value={result.bmi ? `${result.bmi}` : "No disponible"}
                          helper={result.bmiInfo?.label ?? "Se revisa en evaluación"}
                        />
                        <SummaryTile
                          label="Referencia de peso"
                          value={getWeightReference(result)}
                          helper="No es una promesa ni una meta automática."
                        />
                        <SummaryTile
                          label="Actividad"
                          value={getActivitySummary(a)}
                          helper={`Preparación: ${result.lifestyle}`}
                        />
                        <SummaryTile
                          label="Nutrición"
                          value={getNutritionSummary(a)}
                          helper="Se interpreta junto a hábitos, apetito y contexto clínico."
                        />
                        <SummaryTile
                          label="Necesidad principal"
                          value={suggestion.mainNeed}
                          helper="Punto de conversación para la consulta."
                        />
                        <SummaryTile
                          label="Laboratorios"
                          value={getYesNoLabel(a.hasRecentLabs)}
                          helper={a.hasRecentLabs === "yes" ? getLabTimingLabel(a) : "Se revisa en evaluación."}
                        />
                      </div>
                    </section>

                    {/* Section 3: suggested protocol */}
                    <section
                      className={`rounded-3xl border p-5 sm:p-6 ${
                        suggestion.id === "clinical_review_first"
                          ? "border-[#E8934C]/40 bg-[#FFF8EF]"
                          : "border-[#C9A84C]/50 bg-white"
                      }`}
                    >
                      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-widest text-[#C9A84C]">
                            Protocolo sugerido para discutir en evaluación
                          </p>
                          <h4 className="mt-2 text-2xl font-semibold text-[#1A1A1A]">
                            {suggestion.title}
                          </h4>
                          <p className="mt-3 text-sm leading-relaxed text-[#6B6B6B]">
                            {suggestion.id === "clinical_review_first"
                              ? "Tus respuestas incluyen factores que requieren revisión clínica antes de sugerir un protocolo. Podemos orientarte, revisar tu historial y determinar si alguno de los protocolos es apropiado para ti."
                              : "Según tus respuestas, este protocolo podría ser el punto de partida más adecuado para discutir durante tu evaluación clínica."}
                          </p>

                          {suggestion.id === "clinical_review_first" ? (
                            <Link
                              href="/agendar-evaluacion"
                              onClick={() => trackAppointmentClick("quiz_clinical_review_first")}
                              className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-[#1A1A1A] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#C9A84C]"
                            >
                              Agendar evaluación clínica
                              <CalendarCheck className="h-4 w-4" />
                            </Link>
                          ) : (
                            <div className="mt-5 grid gap-3 sm:grid-cols-2">
                              <SummaryTile
                                label="Duración"
                                value={suggestion.protocol?.duration ?? "Se confirma en evaluación"}
                              />
                              <SummaryTile
                                label="Inversión"
                                value={suggestion.protocol?.priceLabel ?? "Se confirma en evaluación"}
                                helper={suggestion.protocol?.packageLabel ?? "Sujeto a evaluación clínica."}
                              />
                              {suggestion.protocol?.comparisonLabel && (
                                <SummaryTile
                                  label={suggestion.protocol.id === "integral" ? "Valor estimado" : "Referencia"}
                                  value={suggestion.protocol.comparisonLabel}
                                />
                              )}
                              {suggestion.protocol?.savingsLabel && (
                                <SummaryTile
                                  label="Ahorro"
                                  value={suggestion.protocol.savingsLabel}
                                  helper="El contenido exacto puede variar según criterio clínico."
                                />
                              )}
                            </div>
                          )}
                        </div>

                        <div className="rounded-2xl bg-[#1A1A1A] p-5 text-white">
                          <p className="text-[11px] font-bold uppercase tracking-widest text-[#C9A84C]">
                            Importante
                          </p>
                          <p className="mt-3 text-sm leading-relaxed text-[#D8D2C7]">
                            {suggestion.id === "clinical_review_first"
                              ? "No se sugiere un protocolo comercial primero cuando hay factores que requieren revisión clínica. La elegibilidad se confirma durante evaluación clínica."
                              : "Este protocolo es una orientación para conversar, no una aprobación. Está sujeto a evaluación clínica, historial, metas, seguridad y criterio clínico."}
                          </p>
                          <p className="mt-3 text-xs leading-relaxed text-[#9A9A9A]">
                            Esta herramienta no diagnostica, no prescribe y no confirma elegibilidad.
                            La recomendación final depende de una evaluación clínica individualizada.
                          </p>
                        </div>
                      </div>
                    </section>

                    {/* Section 4: why this protocol */}
                    <section className="rounded-3xl border border-[#E8E4DA] bg-white p-5 sm:p-6">
                      <p className="text-[11px] font-bold uppercase tracking-widest text-[#C9A84C]">
                        ¿Por qué este protocolo?
                      </p>
                      <div className="mt-4 grid gap-3 md:grid-cols-2">
                        {suggestion.reasons.slice(0, 3).map((reason) => (
                          <div
                            key={reason}
                            className="flex items-start gap-3 rounded-2xl border border-[#E8E4DA] bg-[#FAF8F4] p-4"
                          >
                            <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A84C]" />
                            <p className="text-sm leading-relaxed text-[#3D3D3D]">{reason}</p>
                          </div>
                        ))}
                      </div>
                    </section>

                    {/* Section 5: protocol comparison */}
                    <section>
                      <div className="mb-4">
                        <p className="text-[11px] font-bold uppercase tracking-widest text-[#C9A84C]">
                          Compara tus opciones
                        </p>
                        <h4 className="mt-1 text-xl font-semibold text-[#1A1A1A]">
                          Protocolos disponibles para discutir
                        </h4>
                      </div>
                      <div className="grid gap-4 lg:grid-cols-3">
                        {metabolicProtocols.map((protocol) => (
                          <ProtocolComparisonCard
                            key={protocol.id}
                            protocol={protocol}
                            isSuggested={suggestion.id === protocol.id}
                          />
                        ))}
                      </div>
                      <div className="mt-4 rounded-2xl border border-[#E8E4DA] bg-white p-4">
                        <p className="text-xs leading-relaxed text-[#6B6B6B]">
                          {GENERAL_PROTOCOL_PRICING_DISCLAIMER}
                        </p>
                      </div>
                    </section>

                    {/* Section 7: next step */}
                    <section className="rounded-3xl bg-[#1A1A1A] p-6 sm:p-8">
                      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-widest text-[#C9A84C]">
                            Tu próximo paso
                          </p>
                          <h4 className="mt-2 text-2xl font-semibold text-white">
                            Descarga, comparte o agenda tu evaluación
                          </h4>
                          <p className="mt-3 text-sm leading-relaxed text-[#D8D2C7]">
                            Guarda tu resumen orientativo y coordina la evaluación clínica para
                            revisar historial, laboratorios, metas y seguridad. En la consulta
                            confirmamos si cualificas y cuál protocolo hace más sentido para ti.
                          </p>
                          <p className="mt-3 text-xs leading-relaxed text-[#9A9A9A]">
                            El PDF resume tu resultado orientativo. WhatsApp abrirá un mensaje
                            editable para que nuestro equipo pueda orientarte. La evaluación
                            clínica confirma elegibilidad y plan.
                          </p>
                        </div>
                        <div className="space-y-3">
                          <Link
                            href="/agendar-evaluacion"
                            onClick={() => trackAppointmentClick("quiz_result_primary")}
                            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#C9A84C] px-5 py-3.5 text-sm font-semibold text-[#1A1A1A] shadow-lg shadow-[#C9A84C]/20 transition-colors hover:bg-[#A8872E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1A1A]"
                          >
                            Agendar evaluación inicial
                            <CalendarCheck className="h-4 w-4" />
                          </Link>
                          <a
                            href={buildWhatsAppUrl(resultWhatsappMessage)}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackWhatsAppClick("quiz_result_protocol_summary")}
                            className="flex w-full items-center justify-center gap-2 rounded-2xl border border-[#C9A84C]/40 bg-[#C9A84C]/10 px-5 py-3 text-sm font-semibold text-[#F4EBD0] transition-colors hover:border-[#C9A84C] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1A1A]"
                          >
                            Compartir por WhatsApp
                            <MessageCircle className="h-4 w-4" />
                          </a>
                          <div className="grid grid-cols-2 gap-3">
                            <button
                              type="button"
                              onClick={handleDownloadPdf}
                              className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/15 px-4 py-3 text-xs font-semibold text-[#D8D2C7] transition-colors hover:border-[#C9A84C]/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1A1A]"
                            >
                              <Download className="h-3.5 w-3.5" />
                              Descargar resumen PDF
                            </button>
                            <button
                              type="button"
                              onClick={handleShareSummary}
                              className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/15 px-4 py-3 text-xs font-semibold text-[#D8D2C7] transition-colors hover:border-[#C9A84C]/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1A1A]"
                            >
                              <Share2 className="h-3.5 w-3.5" />
                              Compartir resumen
                            </button>
                          </div>
                        </div>
                      </div>
                    </section>

                    {/* Section 8: disclaimer */}
                    <div className="flex items-start gap-3 rounded-2xl border border-[#E8E4DA] bg-white p-4">
                      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A84C]" />
                      <p className="text-xs leading-relaxed text-[#6B6B6B]">
                        Este resultado es educativo y orientativo. No diagnostica, no prescribe,
                        no confirma elegibilidad y no sustituye una evaluación clínica. No todos
                        los pacientes cualifican para terapia metabólica semanal. Los resultados
                        pueden variar. La recomendación final depende de una evaluación clínica
                        individualizada.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={restart}
                      className="w-full py-2 text-xs text-[#9A9A9A] transition-colors hover:text-[#C9A84C]"
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
          </div>
        </div>
      </div>
    </section>
  );
}
