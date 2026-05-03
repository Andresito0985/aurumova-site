export type LabCategory = {
  title: string;
  tag: string;
  description: string;
  markers: string[];
  patientInsight: string;
};

export const labCategories: LabCategory[] = [
  {
    title: "Metabolic Health",
    tag: "Glucose & Insulin",
    description:
      "Evaluates glucose regulation, insulin resistance, and markers related to metabolic syndrome and weight response.",
    markers: [
      "Fasting glucose",
      "Hemoglobin A1c",
      "Fasting insulin",
      "HOMA-IR calculation",
      "C-peptide, when clinically indicated",
      "Uric acid",
    ],
    patientInsight:
      "Helps identify patterns that may affect cravings, appetite, energy crashes, weight resistance, and diabetes risk.",
  },
  {
    title: "Heart Health",
    tag: "Cardiometabolic Risk",
    description:
      "Reviews cholesterol patterns and cardiovascular risk markers that may be influenced by genetics, nutrition, inflammation, and insulin resistance.",
    markers: [
      "Total cholesterol",
      "LDL cholesterol",
      "HDL cholesterol",
      "Triglycerides",
      "Non-HDL cholesterol",
      "ApoB",
      "Lipoprotein(a), when clinically indicated",
      "hs-CRP",
    ],
    patientInsight: "Helps evaluate risk patterns beyond weight alone.",
  },
  {
    title: "Thyroid Health",
    tag: "Metabolic Regulation",
    description:
      "Assesses thyroid function and autoimmune thyroid markers that may influence metabolism, temperature regulation, energy, mood, and weight trends.",
    markers: [
      "TSH",
      "Free T4",
      "Free T3",
      "TPO antibodies, when clinically indicated",
      "Thyroglobulin antibodies, when clinically indicated",
    ],
    patientInsight:
      "Useful for patients with fatigue, weight changes, cold intolerance, hair changes, constipation, or sluggish energy.",
  },
  {
    title: "Hormone Health",
    tag: "Hormonal Balance",
    description:
      "Evaluates hormone patterns that may influence energy, libido, mood, menstrual regularity, appetite, body composition, and treatment response.",
    markers: [
      "Total testosterone",
      "Free testosterone",
      "SHBG",
      "Estradiol",
      "LH",
      "FSH",
      "DHEA-S",
      "Prolactin, when clinically indicated",
      "Progesterone, cycle-timed when applicable",
      "PSA, when age/risk appropriate",
    ],
    patientInsight:
      "Helps guide care when symptoms suggest hormonal imbalance or when weight progress is more complex.",
  },
  {
    title: "Inflammation & Stress",
    tag: "Internal Stress Load",
    description:
      "Reviews inflammatory and physiologic stress markers that may influence fatigue, recovery, cardiometabolic risk, and treatment response.",
    markers: [
      "hs-CRP",
      "Ferritin",
      "ESR, optional",
      "Cortisol AM, when clinically indicated",
      "DHEA-S, when clinically indicated",
      "Uric acid",
    ],
    patientInsight:
      "Helps detect patterns of inflammation or stress that may interfere with wellness goals.",
  },
  {
    title: "Liver Health",
    tag: "Metabolic Liver Function",
    description:
      "Assesses liver enzymes and protein markers that may reflect fatty liver risk, medication tolerance, alcohol exposure, or metabolic liver stress.",
    markers: [
      "ALT",
      "AST",
      "Alkaline phosphatase",
      "GGT",
      "Total bilirubin",
      "Albumin",
      "Total protein",
      "Globulin",
      "Albumin/globulin ratio",
    ],
    patientInsight:
      "Important for patients with obesity, insulin resistance, abnormal lipids, or suspected fatty liver patterns.",
  },
  {
    title: "Kidney Health & Electrolytes",
    tag: "Safety Monitoring",
    description:
      "Evaluates kidney filtration, hydration-related markers, and electrolyte balance.",
    markers: [
      "BUN",
      "Creatinine",
      "eGFR",
      "BUN/creatinine ratio",
      "Sodium",
      "Potassium",
      "Chloride",
      "Carbon dioxide / bicarbonate",
      "Calcium",
    ],
    patientInsight:
      "Supports safer planning for nutrition, supplementation, medication use, and follow-up monitoring.",
  },
  {
    title: "Nutrient Status",
    tag: "Micronutrient Balance",
    description:
      "Identifies deficiencies or imbalances that may affect energy, hair health, mood, muscle function, immune support, and treatment tolerance.",
    markers: [
      "Vitamin D, 25-OH",
      "Vitamin B12",
      "Folate",
      "Ferritin",
      "Iron",
      "TIBC",
      "Iron saturation",
      "Magnesium",
      "Zinc, when clinically indicated",
    ],
    patientInsight:
      "Correcting deficiencies can support better energy, adherence, and overall wellness.",
  },
  {
    title: "Blood & Immune Health",
    tag: "CBC & Differential",
    description:
      "Evaluates anemia patterns, immune cell balance, platelet status, and overall systemic health.",
    markers: [
      "White blood cell count",
      "Red blood cell count",
      "Hemoglobin",
      "Hematocrit",
      "Platelets",
      "Neutrophils",
      "Lymphocytes",
      "Monocytes",
      "Eosinophils",
      "Basophils",
      "RDW",
      "MCV",
      "MCH",
      "MCHC",
    ],
    patientInsight:
      "Helps identify anemia clues, immune patterns, infection signals, and nutritional deficiency patterns.",
  },
];

export type LabHowItWorksStep = {
  number: string;
  title: string;
  body: string;
};

export const labHowItWorks: LabHowItWorksStep[] = [
  {
    number: "01",
    title: "Clinical Evaluation",
    body: "We review your history, symptoms, medications, lifestyle, goals, and risk factors.",
  },
  {
    number: "02",
    title: "Targeted Lab Testing",
    body: "Your provider recommends labs based on what is clinically appropriate for your case.",
  },
  {
    number: "03",
    title: "Personalized Interpretation",
    body: "Your results are reviewed in context to identify relevant metabolic, nutritional, hormonal, or inflammatory patterns.",
  },
  {
    number: "04",
    title: "Care Plan & Follow-Up",
    body: "Your plan may include nutrition guidance, activity goals, supplementation, medical therapy, monitoring, or referral when needed.",
  },
];

export const labDashboardLabels: string[] = [
  "Metabolic Pattern Review",
  "Glucose Regulation",
  "Inflammation",
  "Lipid Pattern",
  "Thyroid Function",
  "Nutrient Status",
  "Organ Function",
  "Treatment Readiness",
];
