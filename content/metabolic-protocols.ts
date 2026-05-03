export type MetabolicProtocolId = "inicial" | "avanzado" | "integral";
export type SuggestedProtocolId = MetabolicProtocolId | "clinical_review_first";

export interface IndividualPricingItem {
  key: string;
  label: string;
  priceLabel: string;
  publicLabel?: string;
}

export interface ValueBreakdownItem {
  label: string;
  detail: string;
  value?: string;
}

export interface MetabolicProtocol {
  id: MetabolicProtocolId;
  name: string;
  duration: string;
  priceLabel: string;
  packagePriceLabel: string;
  individualValueLabel: string;
  savingsLabel: string;
  regularPrice?: string;
  packagePrice?: string;
  shortDescription: string;
  positioning: string;
  bestFor: string[];
  includes: string[];
  clinicalSupport: string[];
  laboratoryAnalysis: string[];
  weeklyFollowUp: string[];
  lifestyleSupport: string[];
  advancedTools: string[];
  valueBreakdown: ValueBreakdownItem[];
  addOns: string[];
  disclaimer: string;
  complianceNote: string;
  ctaLabel: string;
  priority: number;
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

export const LAB_ANALYSIS_WORDING =
  "La orden de laboratorios y el análisis clínico de resultados están incluidos. Costos externos del laboratorio pueden variar.";

export const REQUIRED_TOOL_DISCLAIMER =
  "Esta herramienta no diagnostica, no prescribe y no confirma elegibilidad. La recomendación final depende de una evaluación clínica individualizada.";

export const PROTOCOL_PRICING_DISCLAIMER =
  "Los precios individuales son referencias internas de servicios por separado. El contenido exacto del protocolo puede variar según evaluación clínica, tolerancia, disponibilidad y criterio profesional. La terapia metabólica semanal requiere evaluación y no garantiza elegibilidad.";

export const GENERAL_PROTOCOL_PRICING_DISCLAIMER = PROTOCOL_PRICING_DISCLAIMER;

export const CGM_ADDON_NOTE =
  "Monitor metabólico disponible como add-on en Protocolo Inicial o Avanzado: +$125/mes si se recomienda durante la evaluación clínica y el paciente desea añadirlo.";

const CGM_ADDON =
  "Monitor metabólico: +$125/mes si se recomienda durante evaluación clínica y el paciente desea añadirlo.";

export const individualMetabolicPricing: IndividualPricingItem[] = [
  { key: "initial_consult", label: "Consulta inicial", priceLabel: "$60" },
  { key: "lipotropic_each", label: "Inyectables lipotrópicos", priceLabel: "$35 cada uno" },
  {
    key: "lipotropic_month",
    label: "Soporte lipotrópico mensual",
    priceLabel: "4 x $35 = $140",
  },
  {
    key: "therapy_level_1",
    label: "Terapia metabólica semanal inicial",
    priceLabel: "$100 cada una",
  },
  {
    key: "therapy_level_1_month",
    label: "Terapia metabólica semanal inicial mensual",
    priceLabel: "4 x $100 = $400",
  },
  {
    key: "therapy_level_2",
    label: "Terapia metabólica semanal intermedia",
    priceLabel: "$125 cada una",
  },
  {
    key: "therapy_level_2_month",
    label: "Terapia metabólica semanal intermedia mensual",
    priceLabel: "4 x $125 = $500",
  },
  {
    key: "therapy_level_3",
    label: "Terapia metabólica semanal avanzada",
    priceLabel: "$150 cada una",
  },
  {
    key: "therapy_level_3_month",
    label: "Terapia metabólica semanal avanzada mensual",
    priceLabel: "4 x $150 = $600",
  },
  { key: "weekly_meals", label: "Comidas semanales", priceLabel: "$150 semanal" },
  {
    key: "daily_meal_plan",
    label: "Plan diario de comidas",
    priceLabel: "$30 diario",
    publicLabel: "Incluye 2 comidas y 2 snacks",
  },
  { key: "metabolic_monitor", label: "Monitor metabólico", priceLabel: "$125/mes" },
  {
    key: "metabolic_monitor_3_months",
    label: "Monitor metabólico por 3 meses",
    priceLabel: "3 x $125 = $375",
  },
  { key: "weight_scale", label: "Báscula de peso", priceLabel: "$25" },
];

export const metabolicProtocols: MetabolicProtocol[] = [
  {
    id: "inicial",
    name: "Protocolo Inicial",
    duration: "4 semanas",
    priceLabel: "$400 paquete inicial",
    packagePriceLabel: "Precio paquete inicial: $400",
    individualValueLabel: "Valor individual estimado desde $600+",
    savingsLabel: "Ahorro estimado desde $200+",
    packagePrice: "$400",
    shortDescription:
      "Ideal para comenzar con una evaluación metabólica supervisada, revisar laboratorios y establecer objetivos iniciales.",
    positioning:
      "Ideal para comenzar con una evaluación metabólica supervisada, revisar laboratorios, establecer objetivos iniciales y comenzar terapia semanal si el paciente cualifica.",
    bestFor: [
      "Pacientes que desean iniciar de forma estructurada.",
      "Personas sin seguimiento metabólico reciente.",
      "Pacientes que necesitan orientación clínica antes de comprometerse a un plan más largo.",
      "Pacientes que desean validar tolerancia y respuesta inicial.",
    ],
    includes: [
      "Evaluación clínica inicial.",
      "Revisión de historial médico, medicamentos, antecedentes y objetivos.",
      "Cálculo de BMI, categoría metabólica y medidas iniciales.",
      "Orden de laboratorios iniciales.",
      "Análisis clínico de resultados de laboratorio.",
      "Discusión de riesgos, beneficios, contraindicaciones y expectativas realistas.",
      "4 visitas semanales en clínica.",
      "Terapia metabólica semanal si cualifica.",
      "4 inyectables lipotrópicos de soporte, según criterio clínico.",
      "Seguimiento semanal de tolerancia, apetito, hábitos y progreso.",
      "Recomendaciones iniciales de nutrición, hidratación y actividad física.",
      "Plan de continuidad para el segundo mes si el paciente decide continuar.",
    ],
    clinicalSupport: [
      "Evaluación clínica inicial.",
      "Revisión de historial médico, medicamentos, antecedentes y objetivos.",
      "Discusión de riesgos, beneficios, contraindicaciones y expectativas realistas.",
    ],
    laboratoryAnalysis: [
      "Orden de laboratorios iniciales.",
      "Análisis clínico de resultados de laboratorio.",
      LAB_ANALYSIS_WORDING,
    ],
    weeklyFollowUp: [
      "4 visitas semanales en clínica.",
      "Seguimiento semanal de tolerancia, apetito, hábitos y progreso.",
    ],
    lifestyleSupport: [
      "Recomendaciones iniciales de nutrición, hidratación y actividad física.",
      "Plan de continuidad para el segundo mes si el paciente decide continuar.",
    ],
    advancedTools: [CGM_ADDON],
    valueBreakdown: [
      { label: "Consulta inicial", detail: "$60" },
      { label: "Soporte lipotrópico mensual", detail: "4 x $35", value: "$140" },
      {
        label: "Terapia metabólica semanal inicial",
        detail: "4 x $100",
        value: "$400",
      },
      { label: "Seguimiento semanal", detail: "Incluido dentro del paquete" },
      { label: "Laboratorios", detail: LAB_ANALYSIS_WORDING },
      { label: "Valor individual estimado", detail: "Desde $600+" },
    ],
    addOns: [CGM_ADDON],
    disclaimer: LAB_ANALYSIS_WORDING,
    complianceNote:
      "El paquete no garantiza elegibilidad a terapia. La recomendación final depende de evaluación clínica, historial, laboratorios y criterio profesional.",
    ctaLabel: "Comenzar evaluación",
    priority: 1,
  },
  {
    id: "avanzado",
    name: "Protocolo Avanzado",
    duration: "12 semanas",
    priceLabel: "$1,500 regular / $1,250 al iniciar",
    packagePriceLabel: "Precio regular: $1,500 / Precio al iniciar: $1,250",
    individualValueLabel: "Valor individual estimado desde $1,980+",
    savingsLabel: "Ahorro estimado desde $480 hasta $730+",
    regularPrice: "$1,500",
    packagePrice: "$1,250 si se adquiere al inicio",
    shortDescription:
      "Acompañamiento estructurado de 3 meses con seguimiento semanal, análisis metabólico y ajustes clínicos.",
    positioning:
      "Diseñado para pacientes que desean un acompañamiento estructurado de 3 meses con seguimiento semanal, análisis metabólico y ajustes clínicos según evolución y tolerancia.",
    bestFor: [
      "Pacientes que buscan estructura durante varios meses.",
      "Pacientes con sobrepeso u obesidad que requieren seguimiento más cercano.",
      "Pacientes con resistencia a la insulina, historial familiar o factores metabólicos.",
      "Pacientes que desean consistencia, supervisión y educación continua.",
      "Pacientes que ya intentaron cambios de estilo de vida sin resultados sostenibles.",
    ],
    includes: [
      "Todo lo incluido en el Protocolo Inicial.",
      "Cobertura estructurada de 3 meses.",
      "Evaluación metabólica inicial y seguimiento longitudinal.",
      "Orden de laboratorios y análisis clínico de resultados.",
      "Revisión de marcadores relacionados a metabolismo, glucosa, lípidos, función hepática, función renal, tiroides y factores de riesgo.",
      "12 visitas semanales de seguimiento en clínica.",
      "Terapia metabólica semanal si cualifica, ajustada según evaluación clínica.",
      "Inyectables lipotrópicos de soporte según criterio clínico.",
      "Monitoreo de tolerancia, apetito, efectos secundarios, adherencia y progreso.",
      "Revisión mensual de tendencia de peso, medidas y respuesta clínica.",
      "Educación sobre nutrición, hidratación, proteína, actividad física y hábitos sostenibles.",
      "Discusión de continuidad, pausa o ajuste del plan según evolución.",
      "Soporte para pacientes con metas moderadas o historial de dificultad para perder peso.",
    ],
    clinicalSupport: [
      "Todo lo incluido en el Protocolo Inicial.",
      "Evaluación metabólica inicial y seguimiento longitudinal.",
      "Discusión de continuidad, pausa o ajuste del plan según evolución.",
    ],
    laboratoryAnalysis: [
      "Orden de laboratorios y análisis clínico de resultados.",
      "Revisión de marcadores relacionados a metabolismo, glucosa, lípidos, función hepática, función renal, tiroides y factores de riesgo.",
      LAB_ANALYSIS_WORDING,
    ],
    weeklyFollowUp: [
      "12 visitas semanales de seguimiento en clínica.",
      "Monitoreo de tolerancia, apetito, efectos secundarios, adherencia y progreso.",
      "Revisión mensual de tendencia de peso, medidas y respuesta clínica.",
    ],
    lifestyleSupport: [
      "Educación sobre nutrición, hidratación, proteína, actividad física y hábitos sostenibles.",
      "Soporte para pacientes con metas moderadas o historial de dificultad para perder peso.",
    ],
    advancedTools: [CGM_ADDON],
    valueBreakdown: [
      { label: "Consulta inicial", detail: "$60" },
      { label: "Soporte lipotrópico mensual", detail: "$140/mes" },
      {
        label: "Terapia metabólica semanal intermedia",
        detail: "4 x $125",
        value: "$500/mes",
      },
      {
        label: "Valor mensual terapia/soporte",
        detail: "$140 + $500",
        value: "$640/mes",
      },
      {
        label: "Valor estimado 3 meses",
        detail: "$640 x 3 + consulta inicial",
        value: "$1,980+",
      },
      { label: "Seguimiento semanal", detail: "12 visitas semanales en clínica" },
      { label: "Laboratorios", detail: LAB_ANALYSIS_WORDING },
    ],
    addOns: [CGM_ADDON],
    disclaimer: "Los ajustes del protocolo dependen de tolerancia, evolución clínica y evaluación profesional. No se prometen resultados específicos.",
    complianceNote:
      "Los ajustes del protocolo dependen de tolerancia, evolución clínica y evaluación profesional. No se prometen resultados específicos.",
    ctaLabel: "Discutir protocolo avanzado",
    priority: 2,
  },
  {
    id: "integral",
    name: "Protocolo Integral",
    duration: "12 semanas",
    priceLabel: "$3,200 paquete integral",
    packagePriceLabel: "Precio paquete integral: $3,200",
    individualValueLabel: "Valor individual estimado sobre $3,900",
    savingsLabel: "Ahorro estimado desde $700+",
    packagePrice: "$3,200",
    shortDescription:
      "Opción más completa para análisis metabólico profundo, seguimiento estrecho y herramientas avanzadas cuando estén indicadas.",
    positioning:
      "La opción más completa para pacientes que necesitan un enfoque médico más intensivo, análisis metabólico profundo, seguimiento estrecho y herramientas avanzadas de monitoreo cuando estén clínicamente indicadas.",
    bestFor: [
      "Pacientes con obesidad, resistencia a la insulina o desregulación metabólica.",
      "Pacientes con laboratorios alterados o historial de riesgo metabólico.",
      "Pacientes que necesitan seguimiento cercano y educación continua.",
      "Pacientes que se beneficiarían de herramientas avanzadas de monitoreo.",
      "Pacientes que desean el enfoque más completo de Aurum Nova.",
    ],
    includes: [
      "Todo lo incluido en el Protocolo Avanzado.",
      "Acompañamiento clínico de alto contacto.",
      "Evaluación médica metabólica más detallada.",
      "Análisis integral de laboratorios y factores de riesgo.",
      "Revisión de historial de peso, intentos previos, medicamentos, sueño, estrés, actividad física, alimentación y barreras principales.",
      "Seguimiento semanal en clínica.",
      "Terapia metabólica semanal si cualifica.",
      "Soporte lipotrópico según criterio clínico.",
      "Revisión periódica de medidas, peso, síntomas, tolerancia y adherencia.",
      "Discusión de herramientas avanzadas de monitoreo metabólico, incluyendo sensor de glucosa continua si es clínicamente apropiado.",
      "Educación sobre patrones de glucosa, alimentación, hidratación, movimiento y hábitos sostenibles.",
      "Plan de seguimiento personalizado según objetivos y evolución.",
      "Mayor nivel de estructura para pacientes con necesidad de soporte más intensivo.",
    ],
    clinicalSupport: [
      "Todo lo incluido en el Protocolo Avanzado.",
      "Acompañamiento clínico de alto contacto.",
      "Evaluación médica metabólica más detallada.",
      "Revisión de historial de peso, intentos previos, medicamentos, sueño, estrés, actividad física, alimentación y barreras principales.",
    ],
    laboratoryAnalysis: [
      "Análisis integral de laboratorios y factores de riesgo.",
      "Revisión de marcadores metabólicos según historial, síntomas y objetivos.",
      LAB_ANALYSIS_WORDING,
    ],
    weeklyFollowUp: [
      "Seguimiento semanal en clínica.",
      "Revisión periódica de medidas, peso, síntomas, tolerancia y adherencia.",
      "Plan de seguimiento personalizado según objetivos y evolución.",
    ],
    lifestyleSupport: [
      "Educación sobre patrones de glucosa, alimentación, hidratación, movimiento y hábitos sostenibles.",
      "Mayor nivel de estructura para pacientes con necesidad de soporte más intensivo.",
      "Comidas semanales como herramienta de estructura nutricional cuando el protocolo lo incluye.",
    ],
    advancedTools: [
      "Discusión de herramientas avanzadas de monitoreo metabólico, incluyendo sensor de glucosa continua si es clínicamente apropiado.",
      "Monitor metabólico durante el programa cuando se determine apropiado.",
      "Báscula de peso como herramienta de seguimiento.",
    ],
    valueBreakdown: [
      { label: "Consulta inicial", detail: "$60" },
      { label: "Soporte lipotrópico mensual", detail: "$140/mes" },
      {
        label: "Terapia metabólica semanal avanzada",
        detail: "4 x $150",
        value: "$600/mes",
      },
      {
        label: "Valor mensual terapia/soporte",
        detail: "$140 + $600",
        value: "$740/mes",
      },
      {
        label: "Valor terapia/soporte 3 meses",
        detail: "$740 x 3",
        value: "$2,220",
      },
      { label: "Comidas semanales", detail: "$150/semana x 12 semanas", value: "$1,800" },
      {
        label: "Contexto alterno de comidas",
        detail: "$30/día por 2 comidas y 2 snacks",
      },
      { label: "Monitor metabólico", detail: "$125/mes x 3 meses", value: "$375" },
      { label: "Báscula de peso", detail: "$25" },
      { label: "Seguimiento semanal", detail: "Incluido dentro del paquete" },
      { label: "Laboratorios", detail: LAB_ANALYSIS_WORDING },
      { label: "Valor público conservador", detail: "Valor individual estimado sobre $3,900" },
    ],
    addOns: [
      "En el Protocolo Integral, el monitor metabólico está incluido durante el programa cuando su uso sea clínicamente apropiado.",
    ],
    disclaimer:
      "El uso de sensores, terapias o herramientas avanzadas se discute caso a caso y depende de elegibilidad clínica, laboratorios, historial y criterio profesional.",
    complianceNote:
      "El uso de sensores, terapias o herramientas avanzadas se discute caso a caso y depende de elegibilidad clínica, laboratorios, historial y criterio profesional.",
    ctaLabel: "Discutir protocolo integral",
    priority: 3,
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
    addReason(reasons, "El monitoreo metabólico podría discutirse si hay interés o necesidad de mayor seguimiento.");
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
