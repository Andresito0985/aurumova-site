// Source of truth for /brows-cejas
//
// Compliance posture:
//   - Boutique beauty service positioning, not medical claims
//   - "Resultados pueden variar según vello, piel, cuidado posterior y técnica"
//   - No promises of perfect symmetry, no permanent results, no exaggerated
//     beauty claims
//   - No ecommerce language, no product brand names, no "buy now"

export const BROWS_WHATSAPP_MESSAGE =
  "Hola, quiero información sobre los servicios de cejas y pestañas en Aurum Nova.";

export interface BrowService {
  id: string;
  name: string;
  /** Price string without dollar sign (rendered with $ prefix). */
  price: string;
  description: string;
  /**
   * Editorial procedure detail rendered in the "Trabajos y detalle del
   * procedimiento" section. Short, descriptive — what happens during the
   * service without making outcome promises.
   */
  procedureDetail?: string;
  /**
   * The Aurum Nova touch — what makes this service feel boutique. Avoids
   * superlatives like "el mejor" or "perfecto" by design.
   */
  aurumTouch?: string;
  /**
   * Care note — short orientative line about maintenance and care after the
   * service. Defers to the in-clinic team for full instructions.
   */
  careNote?: string;
}

export const browServices: BrowService[] = [
  {
    id: "shaping",
    name: "Brow shaping",
    price: "20",
    description:
      "Diseño y limpieza de cejas para definir la forma natural según tu rostro.",
    procedureDetail:
      "Evaluamos la forma natural, mapeamos puntos guía y limpiamos el contorno con técnica cuidada.",
    aurumTouch:
      "Diseño orientado a tu estructura facial, sin sobreajustes ni formas estandarizadas.",
    careNote:
      "Mantenimiento sugerido cada 3 a 4 semanas según el ritmo individual del vello.",
  },
  {
    id: "shaping-tint",
    name: "Brow shaping & tint",
    price: "45",
    description:
      "Diseño, limpieza y tinte para realzar la definición y el color de las cejas.",
    procedureDetail:
      "Diseño y limpieza combinados con un tinte profesional para acentuar densidad visual y color.",
    aurumTouch:
      "Selección de tono adaptada a tu cabello, piel y estilo personal.",
    careNote:
      "El tinte puede atenuarse gradualmente según el tipo de piel, vello y rutina diaria.",
  },
  {
    id: "lamination",
    name: "Brow lamination",
    price: "75",
    description:
      "Efecto lift & set para cejas más ordenadas, pulidas y con dirección.",
    procedureDetail:
      "Técnica de lift & set que reorganiza el vello en una dirección uniforme con productos profesionales.",
    aurumTouch:
      "Acabado pulido y natural, no rígido — pensado para verse elegante en el día a día.",
    careNote:
      "Evita agua, vapor y exfoliantes potentes las primeras horas según la indicación del equipo.",
  },
  {
    id: "lash-lifting",
    name: "Lash lifting",
    price: "85",
    description:
      "Elevación y curvatura natural de pestañas, sin extensiones ni adhesivos.",
    procedureDetail:
      "Elevación y curvatura de la pestaña natural mediante una técnica controlada, sin adhesivos ni extensiones.",
    aurumTouch:
      "Curvatura suave y orientada a un acabado natural, no exagerado.",
    careNote:
      "Las primeras horas evita maquillaje en el área y respeta las indicaciones de cierre de la sesión.",
  },
];

export interface BrowFaq {
  question: string;
  answer: string;
}

export const browsFaqs: BrowFaq[] = [
  {
    question: "¿Cuánto duran los resultados?",
    answer:
      "La duración varía según el servicio, el vello, la piel, el cuidado posterior y la rutina individual. En general, brow lamination y lash lifting pueden mantenerse varias semanas; el tinte depende del tipo de piel y vello.",
  },
  {
    question: "¿Es seguro para piel sensible?",
    answer:
      "Algunos servicios usan productos con activos químicos. Si tienes piel sensible, dermatitis activa, ojos irritados o has tenido reacciones previas, infórmalo antes de agendar para que el equipo determine si el servicio es apropiado o si conviene posponerlo.",
  },
  {
    question: "¿Garantizan simetría perfecta?",
    answer:
      "No prometemos simetría perfecta. Las cejas naturales rara vez son idénticas. El objetivo es realzar la forma natural y conseguir un resultado equilibrado y elegante.",
  },
  {
    question: "¿Cómo me preparo para la cita?",
    answer:
      "Evita exfoliantes fuertes 24 a 48 horas antes. Llega sin maquillaje en el área a tratar. Si usas retinoides o productos exfoliantes potentes, infórmalo antes de la cita.",
  },
  {
    question: "¿Hay cuidado posterior?",
    answer:
      "Sí. El equipo orienta sobre evitar agua y vapor las primeras horas, productos exfoliantes algunos días, y exposición solar directa según corresponda. Los detalles se entregan al final de la cita.",
  },
  {
    question: "¿Puedo combinar varios servicios el mismo día?",
    answer:
      "En muchos casos sí, dependiendo del tipo de piel, sensibilidad y tiempo de recuperación entre técnicas. El equipo orienta sobre la mejor combinación durante la consulta.",
  },
];

export const BROWS_RESULTS_DISCLAIMER =
  "Los resultados pueden variar según el vello, piel, cuidado posterior y técnica indicada. No prometemos simetría perfecta ni resultados permanentes.";
