// Source of truth for /faciales-hydrafacial
//
// Compliance posture:
//   - No claims about curing acne, melasma, rosacea, dermatitis, scars
//   - "Puede ayudar a mejorar la apariencia de la piel" only
//   - Recommendation depends on skin type / evaluation
//   - No pricing — "Precio según evaluación" reflects current convention

export const FACIALS_WHATSAPP_MESSAGE =
  "Hola, quiero información sobre faciales profundos y Hydrafacial en Aurum Nova.";

export interface FacialService {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  /** Mark as the featured / signature service to give visual emphasis. */
  featured?: boolean;
}

export const facialServices: FacialService[] = [
  {
    id: "deep-clean",
    name: "Limpieza facial profunda",
    tagline: "Renovación clínica de la piel",
    description:
      "Protocolo profundo de limpieza, extracción guiada y preparación de la piel para retomar luminosidad y comodidad.",
    features: [
      "Doble limpieza personalizada",
      "Extracción guiada según tipo de piel",
      "Mascarilla calmante",
      "Hidratación y SPF al cierre",
    ],
  },
  {
    id: "hydrafacial",
    name: "Hydrafacial",
    tagline: "Hidratación avanzada con tecnología",
    description:
      "Facial hidratante avanzado que combina limpieza, exfoliación, extracción suave e hidratación con sueros personalizados.",
    features: [
      "Limpieza y exfoliación con vacío",
      "Extracción asistida sin pinzas",
      "Infusión de sueros según necesidad",
      "Acabado con hidratación profunda",
    ],
    featured: true,
  },
  {
    id: "skin-glow",
    name: "Skin glow facial",
    tagline: "Luminosidad inmediata",
    description:
      "Protocolo orientado a luminosidad y textura uniforme con activos que pueden ayudar a mejorar la apariencia de la piel.",
    features: [
      "Exfoliación suave personalizada",
      "Mascarilla de luminosidad",
      "Sueros antioxidantes",
      "Masaje facial relajante",
    ],
  },
  {
    id: "maintenance",
    name: "Facial de mantenimiento",
    tagline: "Cuidado mensual de la piel",
    description:
      "Sesión periódica para sostener una rutina facial profesional según el tipo de piel y el plan de cuidado.",
    features: [
      "Evaluación de la piel actual",
      "Limpieza adaptada al momento",
      "Hidratación según necesidad",
      "Orientación de rutina en casa",
    ],
  },
  {
    id: "pre-event",
    name: "Facial pre-evento",
    tagline: "Piel preparada para tu día",
    description:
      "Protocolo enfocado en hidratación, luminosidad y comodidad antes de un evento importante.",
    features: [
      "Limpieza y exfoliación suave",
      "Mascarilla calmante e hidratante",
      "Acabado glow sin irritación",
      "Recomendaciones para el día del evento",
    ],
  },
];

export interface FacialFaq {
  question: string;
  answer: string;
}

export const facialsFaqs: FacialFaq[] = [
  {
    question: "¿Cómo elijo qué facial me conviene?",
    answer:
      "La recomendación depende del tipo de piel, sensibilidad, historial, objetivos estéticos y evaluación profesional. Durante la consulta, el equipo orienta sobre el protocolo más apropiado para tu caso.",
  },
  {
    question: "¿Los faciales tratan condiciones médicas como acné o melasma?",
    answer:
      "No. Los faciales son protocolos estéticos y de bienestar que pueden ayudar a mejorar la apariencia de la piel, pero no son tratamientos médicos para acné, melasma, rosácea, dermatitis o cualquier condición dermatológica. Si tienes una condición médica de piel, consulta con un dermatólogo.",
  },
  {
    question: "¿Qué incluye un Hydrafacial?",
    answer:
      "Es un protocolo facial hidratante que combina limpieza, exfoliación, extracción asistida y aplicación de sueros mediante tecnología de vacío. Los pasos exactos se adaptan al tipo de piel durante la sesión.",
  },
  {
    question: "¿Cuántas sesiones necesito?",
    answer:
      "Depende del objetivo y del estado actual de tu piel. Algunas personas notan cambios desde la primera sesión; para resultados sostenidos suele recomendarse una rutina periódica. El equipo orienta durante la consulta.",
  },
  {
    question: "¿Es seguro antes de un evento?",
    answer:
      "El facial pre-evento se diseña para minimizar irritación y maximizar comodidad. Aun así, idealmente se realiza con varios días de anticipación; si nunca has tenido un facial antes, consulta antes de agendarlo justo antes del evento.",
  },
  {
    question: "¿Puedo combinarlo con láser u otros servicios?",
    answer:
      "La combinación depende del estado de la piel y del tiempo entre tratamientos. El equipo orienta sobre qué secuencia tiene más sentido para tu caso durante la consulta.",
  },
  {
    question: "¿Hay cuidado posterior?",
    answer:
      "Sí. El equipo orienta sobre evitar exposición solar directa, productos exfoliantes potentes y maquillaje pesado las primeras horas o días según corresponda al protocolo realizado.",
  },
];

export const FACIALS_RESULTS_DISCLAIMER =
  "Los resultados pueden variar. La recomendación del facial depende del tipo de piel, sensibilidad, historial, objetivos y evaluación del profesional. Los faciales son servicios estéticos y de bienestar, no tratamientos médicos.";
