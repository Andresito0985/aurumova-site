export type MetabolicProtocolId = "inicial" | "avanzado" | "integral";
export type SuggestedProtocolId = MetabolicProtocolId | "clinical_review_first";

export interface MetabolicProtocol {
  id: MetabolicProtocolId;
  name: string;
  duration: string;
  priceLabel: string;
  regularPrice?: string;
  packagePrice?: string;
  savingsLabel?: string;
  shortDescription: string;
  bestFor: string[];
  includes: string[];
  addOns: string[];
  disclaimer: string;
  priority: number;
  valueContext?: string[];
}

export interface ProtocolRecommendationInput {
  ageGroup?: string;
  bmi?: number | null;
  bmiCategory?: string;
  mainGoal?: string;
  timeAttempting?: string;
  whatHappens?: string;
  eatingHabits?: string;
  foodChallenge?: string;
  dailyProtein?: string;
  currentActivity?: string;
  lifestyle?: "Alta" | "Moderada" | "Baja";
  hydrationHigh?: boolean;
  tolerance?: "high" | "cautious" | "none";
  metabolicConditions?: string[];
  currentMedications?: string[];
  safetyConditions?: string[];
  priorities?: string[];
}

export interface SuggestedProtocolResult {
  id: SuggestedProtocolId;
  protocol?: MetabolicProtocol;
  title: string;
  mainNeed: string;
  followUpIntensity: string;
  reasons: string[];
  scores: Record<MetabolicProtocolId, number>;
  hasMajorCaution: boolean;
}

export const GENERAL_PROTOCOL_PRICING_DISCLAIMER =
  "Precios sujetos a disponibilidad y evaluación clínica. La orden de laboratorios y análisis de resultados están incluidos; costos externos del laboratorio pueden variar.";

export const CGM_ADDON_NOTE =
  "Monitor continuo de glucosa disponible como add-on en Protocolo Inicial o Avanzado: +$125/mes si se recomienda durante la evaluación clínica y el paciente desea añadirlo.";

const LAB_WORDING =
  "La orden de laboratorios y el análisis clínico de resultados están incluidos. Costos externos del laboratorio pueden variar.";

const CGM_ADDON =
  "Monitor continuo de glucosa: +$125/mes si se recomienda durante evaluación clínica y el paciente desea añadirlo.";

export const metabolicProtocols: MetabolicProtocol[] = [
  {
    id: "inicial",
    name: "Protocolo Inicial",
    duration: "4 semanas",
    priceLabel: "$400 paquete inicial",
    packagePrice: "$400",
    shortDescription:
      "Punto de partida estructurado para evaluación, laboratorios, tolerancia inicial y seguimiento semanal.",
    bestFor: [
      "Comenzar el programa",
      "Evaluar tolerancia inicial",
      "Metas conservadoras",
      "Pacientes que desean una estructura inicial de 4 semanas",
    ],
    includes: [
      "Evaluación inicial",
      "Orden de laboratorios",
      "Análisis clínico de resultados",
      "4 visitas semanales en clínica",
      "Terapia metabólica semanal si cualifica",
      "B12 como soporte dentro del protocolo semanal si aplica",
      "4 inyectables lipotrópicos de soporte",
      "Seguimiento semanal",
      "Monitoreo de tolerancia y progreso",
    ],
    addOns: [CGM_ADDON],
    disclaimer: LAB_WORDING,
    priority: 1,
  },
  {
    id: "avanzado",
    name: "Protocolo Avanzado",
    duration: "12 semanas",
    priceLabel: "$1,500 regular / $1,250 al iniciar",
    regularPrice: "$1,500",
    packagePrice: "$1,250 si se adquiere al inicio",
    shortDescription:
      "Ruta de continuidad con 12 semanas de seguimiento, ajustes progresivos y monitoreo de adherencia.",
    bestFor: [
      "Pacientes que desean continuidad",
      "Metas de 12 semanas",
      "Necesidad de ajustes progresivos",
      "Seguimiento más completo",
    ],
    includes: [
      "Todo lo del Protocolo Inicial",
      "12 semanas de seguimiento",
      "Terapia metabólica semanal si cualifica",
      "Ajustes progresivos según tolerancia, respuesta y criterio clínico",
      "Soporte lipotrópico",
      "Monitoreo de progreso y adherencia",
    ],
    addOns: [CGM_ADDON],
    disclaimer: "Ajustes progresivos según tolerancia, respuesta y criterio clínico.",
    priority: 2,
  },
  {
    id: "integral",
    name: "Protocolo Integral",
    duration: "12 semanas",
    priceLabel: "$3,200 paquete integral",
    packagePrice: "$3,200",
    savingsLabel: "Ahorro estimado: $225",
    shortDescription:
      "Ruta más completa para pacientes que desean estructura nutricional física y mayor monitoreo durante el programa.",
    bestFor: [
      "Pacientes que desean estructura nutricional física",
      "Pacientes que podrían beneficiarse de monitoreo glucémico",
      "Mayor necesidad de adherencia y organización",
      "Ruta más completa de seguimiento metabólico",
    ],
    includes: [
      "Todo lo del Protocolo Avanzado",
      "Monitor continuo de glucosa durante el programa",
      "Meal prep físico por 12 semanas",
      "5 días por semana",
      "2 comidas + 2 snacks por día",
      "Mayor estructura nutricional",
      "Seguimiento semanal y ajustes progresivos",
    ],
    addOns: [
      "En el Protocolo Integral, el monitor continuo de glucosa está incluido durante el programa.",
    ],
    disclaimer:
      "Meal prep físico incluido: 5 días por semana, 2 comidas + 2 snacks por día. El uso de monitor continuo se discute clínicamente según historial, metas, seguridad y criterio clínico.",
    priority: 3,
    valueContext: [
      "Valor estimado de componentes: $3,425",
      "Avanzado al iniciar: $1,250",
      "CGM 3 meses: $375",
      "Meal prep físico 12 semanas: $1,800",
      "Ahorro estimado: $225",
    ],
  },
];

export const protocolById = metabolicProtocols.reduce(
  (acc, protocol) => {
    acc[protocol.id] = protocol;
    return acc;
  },
  {} as Record<MetabolicProtocolId, MetabolicProtocol>,
);

const MAJOR_SAFETY_CONDITIONS = [
  "pancreatitis",
  "gallbladder_severe",
  "renal_advanced",
  "gastroparesis",
  "eating_disorder",
  "mtc",
  "men2",
  "pregnancy",
];

const RISK_MEDICATIONS = ["insulin", "glucose_lowering", "diuretics"];

const MONITORING_CONDITIONS = [
  "prediabetes",
  "diabetes_t2",
  "fatty_liver",
  "pcos",
  "sleep_apnea",
];

function hasAny(values: string[] | undefined, candidates: string[]) {
  return values?.some((value) => candidates.includes(value)) ?? false;
}

function addReason(reasons: string[], reason: string) {
  if (!reasons.includes(reason)) reasons.push(reason);
}

function selectMainNeed(input: ProtocolRecommendationInput, hasMajorCaution: boolean) {
  if (hasMajorCaution) return "Evaluación clínica individualizada";
  if (hasAny(input.metabolicConditions, ["prediabetes", "diabetes_t2"])) {
    return "Monitoreo glucémico";
  }
  if (
    ["no_structure", "skip_binge", "eat_out", "carbs_sugar"].includes(input.eatingHabits ?? "") ||
    ["no_time", "dont_know_food"].includes(input.foodChallenge ?? "")
  ) {
    return "Estructura nutricional";
  }
  if (["constant_hunger", "sugar_cravings", "night_eating", "large_portions"].includes(input.foodChallenge ?? "")) {
    return "Control de apetito y hábitos";
  }
  if (
    ["no_follow", "plateau", "regain"].includes(input.whatHappens ?? "") ||
    ["1-3y", "over_3y", "yo_yo"].includes(input.timeAttempting ?? "")
  ) {
    return "Seguimiento semanal";
  }
  if (input.currentActivity === "sedentary" || input.lifestyle === "Baja") {
    return "Seguimiento semanal";
  }
  if (input.tolerance === "cautious") return "Ajustes progresivos según tolerancia";
  return "Evaluación clínica individualizada";
}

function selectFollowUpIntensity(
  id: SuggestedProtocolId,
  hasMajorCaution: boolean,
) {
  if (hasMajorCaution) return "Revisión clínica antes de definir intensidad";
  if (id === "integral") return "Alta estructura y seguimiento de 12 semanas";
  if (id === "avanzado") return "Seguimiento progresivo de 12 semanas";
  return "Estructura inicial de 4 semanas";
}

function buildClinicalReviewResult(scores: Record<MetabolicProtocolId, number>): SuggestedProtocolResult {
  return {
    id: "clinical_review_first",
    title: "Evaluación clínica individualizada primero",
    mainNeed: "Evaluación clínica individualizada",
    followUpIntensity: "Revisión clínica antes de definir intensidad",
    scores,
    hasMajorCaution: true,
    reasons: [
      "Tus respuestas incluyen factores que requieren revisión clínica antes de sugerir un protocolo.",
      "La seguridad, elegibilidad y próximos pasos dependen de historial, medicamentos, laboratorios y criterio clínico.",
      "Podemos orientarte y determinar si alguno de los protocolos es apropiado para ti durante la evaluación.",
    ],
  };
}

export function getSuggestedProtocol(input: ProtocolRecommendationInput): SuggestedProtocolResult {
  const scores: Record<MetabolicProtocolId, number> = {
    inicial: 0,
    avanzado: 0,
    integral: 0,
  };
  const bmi = typeof input.bmi === "number" ? input.bmi : null;
  const hasMajorCaution =
    input.ageGroup === "under18" ||
    (typeof bmi === "number" && bmi < 18.5) ||
    hasAny(input.safetyConditions, MAJOR_SAFETY_CONDITIONS) ||
    hasAny(input.currentMedications, RISK_MEDICATIONS);

  if (hasMajorCaution) {
    return buildClinicalReviewResult(scores);
  }

  scores.inicial += 1;

  if (typeof bmi === "number") {
    if (bmi >= 35) {
      scores.integral += 3;
      scores.avanzado += 1;
    } else if (bmi >= 30) {
      scores.avanzado += 2;
      scores.integral += 1;
    } else if (bmi >= 25) {
      scores.avanzado += 1;
      scores.inicial += 1;
    } else {
      scores.inicial += 2;
    }
  }

  if (["lose_over_40", "improve_glucose"].includes(input.mainGoal ?? "")) {
    scores.integral += 2;
    scores.avanzado += 1;
  }
  if (["lose_21_40", "reduce_belly"].includes(input.mainGoal ?? "")) {
    scores.avanzado += 2;
    scores.integral += 1;
  }
  if (["lose_10_20", "maintain"].includes(input.mainGoal ?? "")) {
    scores.inicial += 2;
  }
  if (input.mainGoal === "not_sure") {
    scores.inicial += 1;
    scores.avanzado += 1;
  }

  if (["over_3y", "yo_yo"].includes(input.timeAttempting ?? "")) {
    scores.integral += 2;
    scores.avanzado += 1;
  }
  if (["1-3y", "3-12m"].includes(input.timeAttempting ?? "")) {
    scores.avanzado += 1;
  }
  if (["never_formal", "under_3m"].includes(input.timeAttempting ?? "")) {
    scores.inicial += 2;
  }

  if (["regain", "plateau", "no_follow"].includes(input.whatHappens ?? "")) {
    scores.avanzado += 2;
    scores.integral += 1;
  }
  if (["appetite", "diet", "no_results"].includes(input.whatHappens ?? "")) {
    scores.avanzado += 1;
    scores.integral += 1;
  }

  if (["no_structure", "skip_binge", "eat_out", "carbs_sugar"].includes(input.eatingHabits ?? "")) {
    scores.avanzado += 1;
    scores.integral += 2;
  }
  if (["dont_know", "very_little", "1meal"].includes(input.dailyProtein ?? "")) {
    scores.avanzado += 1;
    scores.integral += 1;
  }
  if (["no_time", "dont_know_food"].includes(input.foodChallenge ?? "")) {
    scores.integral += 2;
    scores.avanzado += 1;
  }
  if (["constant_hunger", "sugar_cravings", "night_eating", "large_portions"].includes(input.foodChallenge ?? "")) {
    scores.integral += 1;
    scores.avanzado += 1;
  }

  if (input.currentActivity === "sedentary" || input.lifestyle === "Baja") {
    scores.avanzado += 1;
    scores.integral += 1;
  }
  if (input.lifestyle === "Alta") {
    scores.inicial += 1;
  }
  if (input.hydrationHigh) {
    scores.avanzado += 1;
  }
  if (input.tolerance === "cautious") {
    scores.inicial += 1;
    scores.avanzado += 1;
  }

  if (hasAny(input.metabolicConditions, MONITORING_CONDITIONS)) {
    scores.integral += 2;
    scores.avanzado += 1;
  }
  if (hasAny(input.metabolicConditions, ["htn", "dyslipidemia", "hypothyroidism"])) {
    scores.avanzado += 1;
    scores.integral += 1;
  }

  const selectedId = (Object.entries(scores) as [MetabolicProtocolId, number][])
    .sort((a, b) => b[1] - a[1] || protocolById[b[0]].priority - protocolById[a[0]].priority)[0][0];
  const protocol = protocolById[selectedId];
  const mainNeed = selectMainNeed(input, false);
  const reasons: string[] = [];

  if (selectedId === "integral") {
    addReason(reasons, "Tu perfil sugiere beneficio de una ruta con mayor estructura y seguimiento durante 12 semanas.");
  } else if (selectedId === "avanzado") {
    addReason(reasons, "Tu meta sugiere beneficio de seguimiento más allá de 4 semanas.");
  } else {
    addReason(reasons, "Podrías comenzar discutiendo una estructura inicial de 4 semanas, sujeto a evaluación clínica.");
  }

  if (input.currentActivity === "sedentary" || input.lifestyle === "Baja") {
    addReason(reasons, "Tu nivel de actividad sugiere que podrías beneficiarte de acompañamiento semanal y metas progresivas.");
  }
  if (["no_structure", "skip_binge", "eat_out", "carbs_sugar"].includes(input.eatingHabits ?? "")) {
    addReason(reasons, "Tu estructura nutricional sugiere que podrías beneficiarte de más organización y seguimiento.");
  }
  if (hasAny(input.metabolicConditions, MONITORING_CONDITIONS)) {
    addReason(reasons, "El monitor continuo de glucosa podría discutirse si hay interés o necesidad de mayor monitoreo.");
  }
  if (input.tolerance === "cautious") {
    addReason(reasons, "El seguimiento semanal ayuda a evaluar tolerancia, adherencia y progreso.");
  }
  addReason(reasons, "La evaluación clínica confirma seguridad, elegibilidad y próximos pasos.");

  return {
    id: selectedId,
    protocol,
    title: protocol.name,
    mainNeed,
    followUpIntensity: selectFollowUpIntensity(selectedId, false),
    reasons: reasons.slice(0, 5),
    scores,
    hasMajorCaution: false,
  };
}
