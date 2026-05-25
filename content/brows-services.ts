// Source of truth for /brows-cejas
//
// Compliance posture:
//   - Boutique beauty service positioning, not medical claims
//   - "Resultados pueden variar según vello, piel, cuidado posterior y técnica"
//   - No promises of perfect symmetry, no permanent results, no exaggerated
//     beauty claims

export const BROWS_WHATSAPP_MESSAGE =
  "Hola, quiero información sobre los servicios de cejas y pestañas en Aurum Nova.";

export interface BrowService {
  id: string;
  name: string;
  /** Price string without dollar sign (rendered with $ prefix). */
  price: string;
  description: string;
}

export const browServices: BrowService[] = [
  {
    id: "shaping",
    name: "Brow shaping",
    price: "20",
    description:
      "Diseño y limpieza de cejas para definir la forma natural según tu rostro.",
  },
  {
    id: "shaping-tint",
    name: "Brow shaping & tint",
    price: "45",
    description:
      "Diseño, limpieza y tinte para realzar la definición y el color de las cejas.",
  },
  {
    id: "lamination",
    name: "Brow lamination",
    price: "75",
    description:
      "Efecto lift & set para cejas más ordenadas, pulidas y con dirección.",
  },
  {
    id: "lash-lifting",
    name: "Lash lifting",
    price: "85",
    description:
      "Elevación y curvatura natural de pestañas, sin extensiones ni adhesivos.",
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
