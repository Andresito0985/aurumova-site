import { siteConfig } from "@/content/site";

export interface CalculatorFAQ {
  question: string;
  answer: string;
}

export interface BreadcrumbEntry {
  name: string;
  path: string;
}

export interface CalculatorMethodology {
  formula?: string;
  points: string[];
  note: string;
}

export const calculatorHubFaqs: CalculatorFAQ[] = [
  {
    question: "¿Para qué sirven estas calculadoras?",
    answer:
      "Sirven como herramientas educativas y orientativas para entender mejor tu punto de partida en IMC, meta de peso, déficit calórico e hidratación. No diagnostican, no prescriben y no sustituyen evaluación clínica.",
  },
  {
    question: "¿Los resultados sustituyen una evaluación médica?",
    answer:
      "No. Los resultados son estimaciones educativas. Tu historial, medicamentos, composición corporal, síntomas y condiciones médicas pueden cambiar la interpretación, por eso una evaluación clínica sigue siendo necesaria.",
  },
  {
    question: "¿Cuál calculadora debo usar primero?",
    answer:
      "Puedes comenzar con la calculadora de IMC si quieres una referencia general de peso y estatura. Si ya tienes una meta clara, puedes revisar meta de peso, déficit calórico o hidratación como apoyo educativo.",
  },
  {
    question: "¿Qué hago después de calcular mi IMC o meta?",
    answer:
      "Usa el resultado como una conversación inicial, no como diagnóstico. El próximo paso recomendado es completar el quiz metabólico para organizar tu contexto antes de recibir orientación personalizada.",
  },
  {
    question: "¿Puedo usar los resultados para comenzar un tratamiento?",
    answer:
      "No. Estas herramientas no determinan candidatura a ningún tratamiento, programa o terapia. Cualquier plan médico requiere evaluación clínica individual, revisión de seguridad y criterio profesional.",
  },
  {
    question: "¿Por qué completar el quiz metabólico después?",
    answer:
      "Porque el quiz recopila contexto que una calculadora no puede medir, como hábitos, apetito, historial, objetivos y señales metabólicas. Sigue siendo educativo y no sustituye evaluación clínica.",
  },
];

export const bmiFaqs: CalculatorFAQ[] = [
  {
    question: "¿Qué significa el IMC?",
    answer:
      "El IMC es una relación entre peso y estatura que se usa como referencia educativa inicial. Puede ayudar a ubicar un punto de partida, pero no diagnostica ni sustituye evaluación clínica.",
  },
  {
    question: "¿El IMC mide grasa corporal?",
    answer:
      "No. El IMC no mide grasa corporal, masa muscular, distribución de grasa, cintura ni historial clínico. Dos personas con el mismo IMC pueden tener perfiles metabólicos muy diferentes.",
  },
  {
    question: "¿Qué hago si mi IMC sale elevado?",
    answer:
      "Tómalo como una señal orientativa para revisar tu contexto con un profesional. Completar el quiz metabólico puede ayudarte a organizar metas, hábitos y preguntas antes de una evaluación clínica.",
  },
  {
    question: "¿El IMC determina si cualifico para un programa?",
    answer:
      "No. El IMC no determina candidatura, diagnóstico ni tratamiento. La elegibilidad para cualquier programa requiere evaluación clínica individual y los resultados pueden variar.",
  },
];

export const weightGoalFaqs: CalculatorFAQ[] = [
  {
    question: "¿Qué ritmo de pérdida de peso se considera más conservador?",
    answer:
      "En esta herramienta, un ritmo de hasta 1 libra por semana se clasifica como conservador. Aun así, sigue siendo una referencia educativa y debe interpretarse con historial, salud y objetivos.",
  },
  {
    question: "¿Qué pasa si mi meta requiere perder más de 2 lb por semana?",
    answer:
      "La calculadora lo marca como un ritmo agresivo. No significa que sea adecuado ni seguro para ti; requiere evaluación clínica, planificación individual y cautela para evitar restricciones extremas.",
  },
  {
    question: "¿La calculadora determina mi peso ideal?",
    answer:
      "No. Evitamos prometer un peso ideal automático. La meta adecuada depende de composición corporal, salud metabólica, hábitos, historial, seguridad y preferencias personales.",
  },
  {
    question: "¿Por qué necesito evaluación clínica?",
    answer:
      "Porque una meta de peso puede verse afectada por medicamentos, condiciones médicas, sueño, apetito, laboratorios y adherencia. La calculadora no diagnostica, no prescribe y no determina candidatura.",
  },
];

export const calorieDeficitFaqs: CalculatorFAQ[] = [
  {
    question: "¿Qué es un déficit calórico?",
    answer:
      "Es una estimación en la que la energía ingerida queda por debajo del mantenimiento estimado. Esta calculadora lo presenta de forma educativa y no crea una dieta ni una prescripción.",
  },
  {
    question: "¿Debo comer siempre menos calorías?",
    answer:
      "No necesariamente. Comer menos no siempre es el mejor paso. Sueño, masa muscular, medicamentos, actividad, hambre, adherencia y condiciones metabólicas pueden cambiar la estrategia adecuada.",
  },
  {
    question: "¿Qué pasa si el resultado sale muy bajo?",
    answer:
      "Si el rango se acerca a niveles demasiado bajos, requiere supervisión clínica. Evita dietas extremas o restricciones intensas sin evaluación individual.",
  },
  {
    question: "¿Esta calculadora crea un plan nutricional?",
    answer:
      "No. Solo estima mantenimiento y un déficit moderado orientativo. Un plan nutricional debe individualizarse y no se determina únicamente con una fórmula.",
  },
];

export const hydrationFaqs: CalculatorFAQ[] = [
  {
    question: "¿Cuánta agua debo tomar al día?",
    answer:
      "La calculadora estima un rango educativo según peso, actividad y sudoración. La necesidad real puede cambiar por clima, dieta, medicamentos, síntomas y condiciones médicas.",
  },
  {
    question: "¿Necesito electrolitos todos los días?",
    answer:
      "No necesariamente. Algunas personas pueden beneficiarse según actividad o sudoración, pero no debe asumirse ni dosificarse sin considerar dieta, presión arterial, riñón, corazón y medicamentos.",
  },
  {
    question: "¿Qué condiciones requieren cuidado con líquidos o electrolitos?",
    answer:
      "Enfermedad renal, enfermedad cardíaca, presión alta descontrolada y uso de diuréticos requieren especial cautela. Evita ajustes agresivos sin evaluación clínica.",
  },
  {
    question: "¿Esta calculadora indica dosis de sodio, potasio o magnesio?",
    answer:
      "No. No indica dosis de sodio, potasio, magnesio ni productos específicos. Es una herramienta educativa, no diagnostica, no prescribe y no sustituye evaluación médica.",
  },
];

export function buildFaqPageSchema(path: string, faqs: CalculatorFAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteConfig.url}${path}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(items: BreadcrumbEntry[]) {
  const current = items[items.length - 1];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${siteConfig.url}${current.path}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}
