// Quiz → WhatsApp message builder.
//
// Compliance note: this message is sent through an unencrypted consumer
// channel and stays in the user's chat history. We deliberately omit
// sensitive details (medication history, contraindication flags, internal
// scoring) and only include what the user has already seen on screen and
// would knowingly share with the clinic.

export interface MetabolicQuizWhatsAppPayload {
  firstName: string;
  lastName: string;
  phone?: string;
  /** BMI value as user-facing string, e.g. "27.3". */
  bmi: string;
  /** BMI category label, e.g. "Sobrepeso". */
  bmiCategory: string;
  /** Primary goal label, e.g. "Bajar 21–40 lb". */
  primaryGoal: string;
  /** Lab status summary already shown to the user. */
  labStatus: string;
  /** Suggested protocol label to discuss in evaluation. */
  suggestedProtocol: string;
  /** Main need detected, e.g. "Revisión clínica antes de discutir cualquier protocolo". */
  mainNeed: string;
  /** Whether the system suggests clinical review before any protocol. */
  clinicalReviewFirst?: boolean;
}

export function buildMetabolicQuizWhatsAppMessage(payload: MetabolicQuizWhatsAppPayload) {
  const fullName = [payload.firstName, payload.lastName].filter(Boolean).join(" ").trim();
  const greetingName = fullName || "(nombre por confirmar)";

  const protocolBlock = payload.clinicalReviewFirst
    ? [
        "- Sugerencia del sistema: Evaluación clínica individualizada primero",
        "- Necesidad principal: Revisión clínica antes de discutir cualquier protocolo",
      ]
    : [
        `- Protocolo sugerido para discutir: ${payload.suggestedProtocol}`,
        `- Necesidad principal detectada: ${payload.mainNeed}`,
      ];

  return [
    `Hola Aurum Nova, soy ${greetingName} y completé el Quiz Metabólico.`,
    "Me gustaría compartir mi resultado orientativo para coordinar evaluación.",
    "",
    "Resumen del quiz (orientativo):",
    payload.phone ? `- Teléfono de contacto: ${payload.phone}` : null,
    `- BMI estimado: ${payload.bmi}`,
    `- Categoría BMI: ${payload.bmiCategory}`,
    `- Meta principal: ${payload.primaryGoal}`,
    `- Estado de laboratorios: ${payload.labStatus}`,
    "",
    "Sugerencia del sistema:",
    ...protocolBlock,
    "",
    "Nota: Este resumen es educativo y orientativo. La recomendación final depende de evaluación clínica individualizada.",
  ]
    .filter((line): line is string => Boolean(line))
    .join("\n");
}
