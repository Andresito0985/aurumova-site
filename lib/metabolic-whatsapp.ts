export interface MetabolicQuizWhatsAppPayload {
  firstName: string;
  lastName: string;
  phone?: string;
  age: string;
  height: string;
  weight: string;
  bmi: string;
  bmiCategory: string;
  primaryGoal: string;
  activityLevel: string;
  nutritionPattern: string;
  priorTherapyCategory: string;
  hasRecentLabs: string;
  recentLabTiming: string;
  wantsLabAnalysis: string;
  suggestedProtocol: string;
  mainNeed: string;
  clinicalReviewFirst?: boolean;
}

export function buildMetabolicQuizWhatsAppMessage(payload: MetabolicQuizWhatsAppPayload) {
  const systemSummary = payload.clinicalReviewFirst
    ? [
        "- Protocolo sugerido para discutir: Evaluación clínica individualizada primero",
        "- Necesidad principal detectada: Revisión clínica antes de discutir cualquier protocolo",
        "- Nota clínica: El sistema recomienda revisión clínica antes de discutir cualquier protocolo.",
      ]
    : [
        `- Protocolo sugerido para discutir: ${payload.suggestedProtocol}`,
        `- Necesidad principal detectada: ${payload.mainNeed}`,
        "- Nota: La recomendación final depende de evaluación clínica individualizada.",
      ];

  return [
    "Hola Aurum Nova, completé la evaluación metabólica y deseo discutir mi protocolo.",
    "",
    "Datos del paciente:",
    `- Nombre: ${payload.firstName || "No especificado"}`,
    `- Apellido: ${payload.lastName || "No especificado"}`,
    payload.phone && `- Teléfono: ${payload.phone}`,
    `- Edad: ${payload.age}`,
    "",
    "Medidas calculadas:",
    `- Estatura: ${payload.height}`,
    `- Peso actual: ${payload.weight}`,
    `- BMI estimado: ${payload.bmi}`,
    `- Categoría BMI: ${payload.bmiCategory}`,
    `- Meta principal: ${payload.primaryGoal}`,
    `- Nivel de actividad: ${payload.activityLevel}`,
    `- Hábitos nutricionales: ${payload.nutritionPattern}`,
    `- Experiencia previa con terapia metabólica: ${payload.priorTherapyCategory}`,
    "",
    "Laboratorios:",
    `- Cuenta con laboratorios recientes: ${payload.hasRecentLabs}`,
    `- Fecha aproximada de laboratorios: ${payload.recentLabTiming}`,
    `- Desea análisis de laboratorios: ${payload.wantsLabAnalysis}`,
    "",
    "Resumen del sistema:",
    ...systemSummary,
  ]
    .filter(Boolean)
    .join("\n");
}
