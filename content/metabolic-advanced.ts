// Data source of truth for /evaluacion-metabolica-avanzada
//
// Compliance posture:
//   - Educational tone only ("orientativo", "según corresponde", "individualizado")
//   - No diagnosis, no prescription, no eligibility guarantee
//   - No medication doses, units, brand names, or compounded protocols
//   - Basic panels are described as "useful but limited", never useless
//   - All panel selection language defers to clinical evaluation
//   - Vitamin D, cortisol, hormones are NOT universalized

export const ADVANCED_METABOLIC_WHATSAPP_MESSAGE =
  "Hola, quiero información sobre la Evaluación Metabólica Avanzada y conocer qué panel clínico podría aplicar a mi caso.";

// ─────────────────────────────────────────────────────────────────────────────
// Patient profiles — used by PatientProfileSelector
// ─────────────────────────────────────────────────────────────────────────────

export interface PatientProfile {
  id: string;
  letter: string;
  /** Full label shown on the chip. */
  label: string;
  /** Short label for tight mobile layouts. */
  shortLabel?: string;
  /** "Qué buscamos identificar" — what we look for in this profile. */
  focus: string;
  /** Marker bullets shown in the detail panel. */
  markers: string[];
  /** Suggested clinical panel — uses one of the panel `name` fields below. */
  suggestedPanel: string;
}

export const patientProfiles: PatientProfile[] = [
  {
    id: "estetico-pre",
    letter: "A",
    label: "Quiero bajar grasa antes de un procedimiento estético",
    shortLabel: "Pre-procedimiento estético",
    focus:
      "Preparación clínica responsable antes de un procedimiento estético: contexto metabólico, lipídico, hepático y de glucosa.",
    markers: [
      "Glucosa en ayunas y HbA1c",
      "Perfil lipídico completo",
      "Función renal y hepática",
      "Inflamación cardiometabólica (hsCRP) según caso",
      "Marcadores nutricionales si hay historial relevante",
    ],
    suggestedPanel: "Perfil Metabólico Integral Aurum Nova",
  },
  {
    id: "wellness-iv",
    letter: "B",
    label: "Estoy en un protocolo wellness o IV therapy",
    shortLabel: "Wellness / IV therapy",
    focus:
      "Confirmar contexto clínico antes y durante un protocolo wellness o sueroterapia: hidratación, riñón, hígado y posibles deficiencias nutricionales.",
    markers: [
      "CMP con eGFR",
      "CBC con plaquetas",
      "Perfil lipídico",
      "B12, ferritina y hierro según historial",
      "Vitamina D solo si está clínicamente indicada",
    ],
    suggestedPanel: "Perfil Metabólico Inicial",
  },
  {
    id: "glp1-gip",
    letter: "C",
    label: "Uso o estoy considerando GLP-1/GIP",
    shortLabel: "GLP-1 / GIP",
    focus:
      "Contexto metabólico antes y durante terapia con incretinas: glucosa, insulina, función renal y hepática, lípidos avanzados, riesgo de hígado graso y posibles deficiencias.",
    markers: [
      "HbA1c y glucosa en ayunas",
      "Insulina en ayunas y HOMA-IR",
      "Función renal (eGFR, UACR) y hepática (GGT, FIB-4)",
      "Lípidos avanzados (ApoB)",
      "Posibles deficiencias según historial (por ejemplo B12)",
    ],
    suggestedPanel:
      "Perfil Metabólico Integral Aurum Nova o Panel de Riesgo Glucémico y Resistencia a la Insulina, según el caso",
  },
  {
    id: "perdida-estancada",
    letter: "D",
    label: "Tengo pérdida de peso estancada",
    shortLabel: "Pérdida estancada",
    focus:
      "Explorar factores que pueden influir en el progreso: resistencia a la insulina, inflamación, función tiroidea, hígado graso o deficiencias nutricionales.",
    markers: [
      "Insulina en ayunas y HOMA-IR",
      "HbA1c",
      "TSH",
      "Perfil lipídico y GGT/FIB-4",
      "hsCRP según corresponda",
      "B12 y ferritina si hay fatiga o historial relevante",
    ],
    suggestedPanel: "Perfil Metabólico Integral Aurum Nova",
  },
  {
    id: "optimizacion",
    letter: "E",
    label: "Quiero optimizar salud, energía y composición corporal",
    shortLabel: "Optimización",
    focus:
      "Visión metabólica integral preventiva: glucosa, lípidos avanzados, inflamación, hígado, riñón, tiroides y soporte nutricional contextual.",
    markers: [
      "HbA1c y glucosa",
      "Insulina en ayunas y HOMA-IR",
      "ApoB, Lp(a) una vez en la vida",
      "hsCRP",
      "TSH",
      "FIB-4 y UACR",
      "Nutricionales solo cuando hay indicación clínica",
    ],
    suggestedPanel: "Perfil Metabólico Integral Aurum Nova",
  },
  {
    id: "prediabetes-diabetes",
    letter: "F",
    label: "Tengo prediabetes, diabetes o historial familiar",
    shortLabel: "Glucosa / familiar",
    focus:
      "Estratificación del riesgo glucémico, resistencia a la insulina y complicaciones tempranas (renal, hepática, cardiovascular).",
    markers: [
      "HbA1c y glucosa en ayunas",
      "Insulina en ayunas y HOMA-IR",
      "CMP y eGFR",
      "UACR",
      "Perfil lipídico y ApoB",
      "FIB-4",
      "B12 si usa metformina o hay neuropatía/anemia",
    ],
    suggestedPanel: "Panel de Riesgo Glucémico y Resistencia a la Insulina",
  },
  {
    id: "lipidos-cv",
    letter: "G",
    label: "Tengo colesterol, triglicéridos altos o riesgo cardiovascular",
    shortLabel: "Cardiometabólico",
    focus:
      "Refinar el riesgo cardiovascular más allá del colesterol total: partículas aterogénicas, riesgo genético, inflamación y daño renal temprano.",
    markers: [
      "Perfil lipídico completo",
      "ApoB",
      "Lipoproteína(a) una vez en la vida",
      "hsCRP",
      "HbA1c",
      "CMP/eGFR y UACR",
      "TSH según caso",
    ],
    suggestedPanel: "Panel Cardiometabólico Avanzado",
  },
  {
    id: "higado-graso",
    letter: "H",
    label: "Sospecho hígado graso o enzimas hepáticas elevadas",
    shortLabel: "Hígado / MASLD",
    focus:
      "Estratificación inicial de riesgo hepático metabólico (MASLD) y orientación sobre la necesidad de estudios adicionales como elastografía.",
    markers: [
      "CMP y CBC con plaquetas",
      "GGT",
      "Perfil lipídico y HbA1c",
      "Ferritina, hierro/TIBC",
      "Hepatitis B/C si enzimas persistentes o sin causa clara",
      "Cálculo FIB-4 (umbral inicial 1.3)",
    ],
    suggestedPanel: "Panel Hepático Metabólico / MASLD",
  },
  {
    id: "sop-pcos",
    letter: "I",
    label: "Mujer con sospecha de SOP/PCOS",
    shortLabel: "SOP / PCOS",
    focus:
      "Evaluación hormonal y metabólica integrada según guías actuales: glucosa, insulina, perfil lipídico, función tiroidea y andrógenos cuando corresponde.",
    markers: [
      "HbA1c y glucosa en ayunas",
      "OGTT 75 g si disponible o alto riesgo",
      "Perfil lipídico y CMP",
      "TSH y prolactina",
      "Testosterona total y libre (o índice de andrógenos libres)",
      "DHEA-S; androstenediona si la sospecha persiste",
      "17-OH progesterona; AMH si se usará como apoyo diagnóstico",
    ],
    suggestedPanel: "Panel Hormonal-Metabólico Femenino / SOP",
  },
  {
    id: "hipertension-renal",
    letter: "J",
    label: "Tengo hipertensión o riesgo renal",
    shortLabel: "Hipertensión / renal",
    focus:
      "Detección temprana de daño renal y refinamiento del riesgo cardiometabólico asociado a presión alta.",
    markers: [
      "CMP con eGFR",
      "UACR (relación albúmina/creatinina en orina)",
      "Perfil lipídico y ApoB",
      "HbA1c",
      "hsCRP",
      "Electrolitos y ácido úrico según caso",
    ],
    suggestedPanel: "Panel Cardiometabólico Avanzado",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Clinical panels — used by ClinicalPanelsGrid
// ─────────────────────────────────────────────────────────────────────────────

export interface ClinicalPanel {
  id: string;
  letter: string;
  name: string;
  forWhom: string;
  description: string;
  markers: string[];
  /** Optional note shown below markers (compliance reminder). */
  note?: string;
}

export const clinicalPanels: ClinicalPanel[] = [
  {
    id: "perfil-inicial",
    letter: "A",
    name: "Perfil Metabólico Inicial",
    forWhom:
      "Pacientes que buscan una primera evaluación clínica de su metabolismo, sin historial reciente de laboratorios.",
    description:
      "Evaluación base para conocer el estado general de glucosa, riñón, hígado, lípidos, tiroides y hemograma. Ideal como punto de partida clínico.",
    markers: [
      "CBC con plaquetas",
      "CMP con eGFR",
      "Glucosa en ayunas",
      "HbA1c",
      "Perfil lipídico",
      "TSH",
      "UACR",
      "Cálculo FIB-4",
    ],
  },
  {
    id: "perfil-integral",
    letter: "B",
    name: "Perfil Metabólico Integral Aurum Nova",
    forWhom:
      "Pacientes que buscan una visión más profunda de su metabolismo, riesgo cardiometabólico, resistencia a la insulina, inflamación y riesgo hepático/renal temprano.",
    description:
      "Evaluación avanzada para entender el contexto clínico completo cuando el panel general no termina de explicar síntomas, progreso o riesgo.",
    markers: [
      "CBC con plaquetas",
      "CMP con eGFR",
      "HbA1c",
      "Glucosa en ayunas",
      "Insulina en ayunas",
      "HOMA-IR",
      "Perfil lipídico completo",
      "ApoB",
      "Lipoproteína(a)",
      "hsCRP",
      "TSH",
      "UACR",
      "Ácido úrico",
      "GGT",
      "Cálculo FIB-4",
      "Vitamina B12",
      "Ferritina + hierro/TIBC según caso",
      "25-OH vitamina D solo si está clínicamente indicada",
    ],
    note: "El contenido exacto se confirma durante la evaluación clínica.",
  },
  {
    id: "glucemico",
    letter: "C",
    name: "Panel de Riesgo Glucémico y Resistencia a la Insulina",
    forWhom:
      "Prediabetes, diabetes, historial familiar, uso de GLP-1/GIP o señales sugestivas de resistencia a la insulina.",
    description:
      "Diseñado para evaluar azúcar, insulina, riesgo renal y hepático asociado, y patrones lipídicos relevantes en disglucemia.",
    markers: [
      "HbA1c",
      "Glucosa en ayunas",
      "Insulina en ayunas",
      "HOMA-IR",
      "CMP con eGFR",
      "UACR",
      "Perfil lipídico",
      "ApoB",
      "Cálculo FIB-4",
      "B12 si usa metformina o hay neuropatía/anemia",
    ],
  },
  {
    id: "hepatico-masld",
    letter: "D",
    name: "Panel Hepático Metabólico / MASLD",
    forWhom:
      "Sospecha de hígado graso, enzimas hepáticas elevadas, obesidad, triglicéridos altos, diabetes o riesgo cardiometabólico.",
    description:
      "Ayuda a estratificar riesgo de fibrosis hepática metabólica y orientar la necesidad de estudios adicionales como elastografía.",
    markers: [
      "CMP",
      "CBC con plaquetas",
      "GGT",
      "Perfil lipídico",
      "HbA1c",
      "Ferritina, hierro/TIBC",
      "Hepatitis B/C si las enzimas persisten o no hay causa clara",
      "Cálculo FIB-4",
      "Considerar elastografía/VCTE si FIB-4 ≥ 1.3 o riesgo alto",
    ],
  },
  {
    id: "cardiometabolico",
    letter: "E",
    name: "Panel Cardiometabólico Avanzado",
    forWhom:
      "Historial familiar cardiovascular, presión alta, colesterol o triglicéridos elevados, diabetes, enfermedad renal o interés en prevención avanzada.",
    description:
      "Evalúa riesgo aterogénico, inflamatorio, renal y metabólico, refinando el contexto cardiovascular más allá del perfil lipídico estándar.",
    markers: [
      "Perfil lipídico",
      "ApoB",
      "Lipoproteína(a) una vez en la vida",
      "hsCRP",
      "HbA1c",
      "CMP con eGFR",
      "UACR",
      "TSH",
    ],
  },
  {
    id: "hormonal-femenino",
    letter: "F",
    name: "Panel Hormonal-Metabólico Femenino / SOP",
    forWhom:
      "Mujeres con irregularidad menstrual, acné, hirsutismo, dificultad para perder peso, infertilidad o sospecha de SOP/PCOS.",
    description:
      "Integra evaluación metabólica y hormonal según guías clínicas actuales sobre SOP/PCOS.",
    markers: [
      "HbA1c",
      "Glucosa en ayunas",
      "OGTT 75 g si disponible o alto riesgo",
      "Perfil lipídico",
      "CMP",
      "TSH",
      "Prolactina",
      "Testosterona total",
      "Testosterona libre o índice de andrógenos libres",
      "DHEA-S",
      "Androstenediona si la testosterona está normal pero la sospecha persiste",
      "17-OH progesterona",
      "AMH si se usará como apoyo diagnóstico",
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Biomarker map — used by BiomarkerMap
// ─────────────────────────────────────────────────────────────────────────────

export type BiomarkerCategoryId =
  | "glucosa"
  | "lipidos"
  | "inflamacion"
  | "higado"
  | "rinon"
  | "tiroides"
  | "nutricion";

export interface BiomarkerCategoryGroup {
  id: BiomarkerCategoryId;
  label: string;
  items: { name: string; explanation: string }[];
}

export const biomarkerMap: BiomarkerCategoryGroup[] = [
  {
    id: "glucosa",
    label: "Glucosa",
    items: [
      { name: "HbA1c", explanation: "Tendencia de glucosa en los últimos meses." },
      {
        name: "Insulina en ayunas / HOMA-IR",
        explanation:
          "Apoyan la evaluación de resistencia a la insulina junto con el contexto clínico.",
      },
    ],
  },
  {
    id: "lipidos",
    label: "Lípidos",
    items: [
      { name: "ApoB", explanation: "Número de partículas aterogénicas en circulación." },
      {
        name: "Lipoproteína(a)",
        explanation:
          "Componente genético del riesgo cardiovascular. Suele medirse una vez en la vida.",
      },
    ],
  },
  {
    id: "inflamacion",
    label: "Inflamación",
    items: [
      {
        name: "hsCRP",
        explanation: "Marcador de inflamación cardiometabólica de baja intensidad.",
      },
    ],
  },
  {
    id: "higado",
    label: "Hígado",
    items: [
      {
        name: "FIB-4",
        explanation:
          "Cálculo inicial para estratificar riesgo de fibrosis hepática metabólica.",
      },
      {
        name: "GGT",
        explanation: "Apoya la evaluación hepática junto con AST/ALT y contexto clínico.",
      },
    ],
  },
  {
    id: "rinon",
    label: "Riñón",
    items: [
      {
        name: "UACR",
        explanation:
          "Relación albúmina/creatinina urinaria: ayuda a detectar daño renal temprano.",
      },
    ],
  },
  {
    id: "tiroides",
    label: "Tiroides",
    items: [
      {
        name: "TSH / T4 libre",
        explanation:
          "Apoyan la evaluación de función tiroidea según síntomas e historial.",
      },
    ],
  },
  {
    id: "nutricion",
    label: "Nutrición",
    items: [
      {
        name: "B12 / ferritina / hierro",
        explanation:
          "Estado nutricional según contexto clínico, síntomas o uso de medicamentos.",
      },
      {
        name: "Vitamina D",
        explanation:
          "Solo cuando hay indicación clínica específica. No se ordena de rutina.",
      },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Clinical framework references — used by EvidenceSection
// ─────────────────────────────────────────────────────────────────────────────

export interface EvidenceFramework {
  shortName: string;
  fullName: string;
  area: string;
}

export const evidenceFrameworks: EvidenceFramework[] = [
  {
    shortName: "ADA",
    fullName: "American Diabetes Association",
    area: "Diabetes, prediabetes y glucemia",
  },
  {
    shortName: "AHA / ACC",
    fullName: "American Heart Association / American College of Cardiology",
    area: "Prevención cardiovascular y manejo de lípidos",
  },
  {
    shortName: "KDIGO",
    fullName: "Kidney Disease: Improving Global Outcomes",
    area: "Salud renal y estratificación del riesgo",
  },
  {
    shortName: "AASLD",
    fullName: "American Association for the Study of Liver Diseases",
    area: "Hígado graso metabólico (MASLD) y fibrosis hepática",
  },
  {
    shortName: "Endocrine Society",
    fullName: "Endocrine Society",
    area: "Endocrinología clínica y trastornos hormonales",
  },
  {
    shortName: "Guía SOP/PCOS",
    fullName: "International Evidence-Based Guideline · PCOS",
    area: "Síndrome de ovario poliquístico",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Process timeline — used by ProcessTimeline
// ─────────────────────────────────────────────────────────────────────────────

export interface ProcessStep {
  num: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    num: "01",
    title: "Evaluación clínica inicial",
    description:
      "Revisamos objetivos, historial, medicamentos, síntomas y factores de riesgo.",
  },
  {
    num: "02",
    title: "Selección del panel",
    description:
      "No todos los pacientes necesitan las mismas pruebas. Seleccionamos el panel que mejor se adapta a tu perfil.",
  },
  {
    num: "03",
    title: "Laboratorios o revisión de resultados recientes",
    description:
      "Podemos orientar el panel recomendado o revisar laboratorios recientes si ya los tienes disponibles.",
  },
  {
    num: "04",
    title: "Interpretación y plan personalizado",
    description:
      "Traducimos los resultados en una estrategia clínica: metabolismo, riesgo, seguimiento y próximos pasos.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// FAQ — consumed by the shared FAQSection component
// ─────────────────────────────────────────────────────────────────────────────

export interface AdvancedMetabolicFaq {
  question: string;
  answer: string;
}

export const advancedMetabolicFaqs: AdvancedMetabolicFaq[] = [
  {
    question: "¿Por qué no basta con un panel metabólico básico?",
    answer:
      "Un panel básico ofrece información útil sobre glucosa, función renal, enzimas hepáticas y colesterol general. En algunos casos, sin embargo, no captura aspectos específicos del riesgo cardiometabólico — como resistencia a la insulina, partículas aterogénicas (ApoB), inflamación (hsCRP), riesgo genético cardiovascular (Lp(a)) o riesgo temprano de fibrosis hepática (FIB-4). Una evaluación más específica puede aportar contexto adicional para decisiones clínicas individualizadas.",
  },
  {
    question: "¿Todos los pacientes necesitan laboratorios avanzados?",
    answer:
      "No. La selección de pruebas depende de tu historial, síntomas, factores de riesgo y objetivos. Para algunos pacientes un panel general es suficiente; para otros, ciertos marcadores adicionales aportan información clínica relevante. La decisión es individualizada durante la evaluación.",
  },
  {
    question: "¿Puedo traer laboratorios recientes?",
    answer:
      "Sí. Si tienes resultados recientes, se revisan durante la evaluación para evitar duplicación innecesaria y decidir si conviene orientar marcadores adicionales según tu perfil clínico.",
  },
  {
    question: "¿Aurum Nova puede orientar qué laboratorios necesito?",
    answer:
      "La orientación sobre el panel apropiado se realiza durante la evaluación clínica, considerando historial, medicamentos, síntomas y objetivos. Esta página es educativa y no determina elegibilidad ni sustituye una consulta médica.",
  },
  {
    question: "¿Estos laboratorios diagnostican enfermedades?",
    answer:
      "Los laboratorios son una herramienta de evaluación, no un diagnóstico automático. Los resultados se interpretan junto a tu historial, síntomas, examen físico y otros estudios cuando corresponde. El diagnóstico es una decisión clínica integral del proveedor.",
  },
  {
    question: "¿Qué pasa si tengo resultados fuera de rango?",
    answer:
      "El proveedor revisa los hallazgos en contexto de tu historial y factores de riesgo. Puede recomendar seguimiento, ajustes, referidos o estudios adicionales según corresponda. Un valor fuera de rango no implica diagnóstico automático ni intervención inmediata.",
  },
  {
    question: "¿Esto aplica si uso GLP-1/GIP?",
    answer:
      "Sí. En pacientes que usan o consideran terapias metabólicas, la evaluación de glucosa, insulina, función renal, función hepática, lípidos y nutrición puede aportar contexto clínico relevante. La selección de marcadores específicos se individualiza durante la evaluación.",
  },
  {
    question:
      "¿Esto aplica si quiero bajar grasa antes de un procedimiento estético?",
    answer:
      "Sí. Conocer tu perfil metabólico, lípidos, glucosa, función hepática y otros marcadores puede ser parte de una preparación clínica responsable. La selección final del panel depende de la evaluación.",
  },
  {
    question: "¿La vitamina D se ordena a todos?",
    answer:
      "No. La vitamina D se considera cuando hay indicación clínica específica — síntomas, factores de riesgo o seguimiento — y no se ordena de forma rutinaria. Las recomendaciones actuales no respaldan tamizaje universal en población sana.",
  },
  {
    question: "¿Qué es ApoB y por qué puede ser importante?",
    answer:
      "La ApoB (apolipoproteína B) refleja el número de partículas aterogénicas en circulación y se considera un indicador adicional del riesgo cardiovascular más allá del colesterol total. Algunas guías clínicas la incluyen para refinar la evaluación de riesgo en pacientes seleccionados.",
  },
  {
    question: "¿Qué es Lipoproteína(a)?",
    answer:
      "La Lp(a) es una partícula lipoproteica con un componente genético que puede aportar información sobre riesgo cardiovascular independiente del colesterol LDL. Suele medirse una vez en la vida en pacientes con historial familiar, riesgo no explicado o interés en prevención avanzada.",
  },
  {
    question: "¿Qué es FIB-4?",
    answer:
      "El FIB-4 es un cálculo clínico no invasivo que combina edad, plaquetas, AST y ALT para estratificar el riesgo inicial de fibrosis hepática metabólica. Es una herramienta de tamizaje; valores elevados pueden orientar la necesidad de estudios adicionales como elastografía hepática.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Hero biomarker chips — used by AdvancedMetabolicHero
// ─────────────────────────────────────────────────────────────────────────────

export const heroBiomarkerChips: { name: string; fill: number }[] = [
  { name: "Glucosa", fill: 62 },
  { name: "Insulina", fill: 74 },
  { name: "ApoB", fill: 58 },
  { name: "Lp(a)", fill: 41 },
  { name: "hsCRP", fill: 55 },
  { name: "FIB-4", fill: 38 },
  { name: "UACR", fill: 46 },
  { name: "TSH", fill: 68 },
];
