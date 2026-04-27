export interface Program {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: string;
  category: "metabolic" | "aesthetic" | "iv" | "wellness";
  whatsappMessage: string;
}

export const programs: Program[] = [
  {
    id: "metabolico-integral",
    title: "Programa Metabólico Integral",
    subtitle: "Transformación clínica personalizada",
    description:
      "Programa médico supervisado que combina evaluación metabólica completa, seguimiento clínico continuo y terapias personalizadas para resultados medibles y sostenibles.",
    features: [
      "Evaluación metabólica completa",
      "Plan personalizado por médico",
      "Seguimiento clínico periódico",
      "Ajuste de protocolo según progreso",
      "Soporte nutricional integrado",
      "Métricas de progreso cuantificables",
    ],
    icon: "Activity",
    category: "metabolic",
    whatsappMessage:
      "Hola, me interesa el Programa Metabólico Integral de Aurum Nova. ¿Cómo puedo comenzar mi evaluación?",
  },
  {
    id: "laser-diodo",
    title: "Remoción de Vello Láser",
    subtitle: "Tecnología de diodo de última generación",
    description:
      "Sistema de láser de diodo de alta tecnología para remoción permanente de vello en todas las áreas del cuerpo, con resultados clínicamente comprobados para todos los tipos de piel.",
    features: [
      "Tecnología láser de diodo avanzada",
      "Adecuado para múltiples fototipos",
      "Tratamiento rápido y preciso",
      "Mínimas molestias",
      "Resultados duraderos",
      "Protocolo personalizado por zona",
    ],
    icon: "Zap",
    category: "aesthetic",
    whatsappMessage:
      "Hola, quisiera información sobre el tratamiento de remoción de vello láser en Aurum Nova.",
  },
  {
    id: "terapia-iv",
    title: "Terapias IV",
    subtitle: "NAD+ · Myers · Fórmulas personalizadas",
    description:
      "Terapias intravenosas de nutrientes y micronutrientes administradas bajo supervisión médica, disponibles solo para pacientes que califiquen tras evaluación clínica individualizada.",
    features: [
      "NAD+ IV para bienestar celular",
      "Cóctel de Myers personalizado",
      "Fórmulas IV a medida",
      "Supervisión médica continua",
      "Solo disponible tras evaluación clínica",
      "Monitoreo de respuesta del paciente",
    ],
    icon: "Droplets",
    category: "iv",
    whatsappMessage:
      "Hola, me gustaría conocer más sobre las terapias IV en Aurum Nova y cómo calificar.",
  },
  {
    id: "inyectables-metabolicos",
    title: "Inyectables Metabólicos",
    subtitle: "Solo para pacientes que califican",
    description:
      "Terapias inyectables metabólicas disponibles exclusivamente para pacientes que califiquen tras una evaluación médica completa, revisión de historial clínico y análisis de contraindicaciones.",
    features: [
      "Evaluación clínica previa obligatoria",
      "Prescripción médica individualizada",
      "Ajuste de protocolo según respuesta",
      "No disponible sin evaluación médica",
      "Seguimiento de seguridad incluido",
      "Revisión de contraindicaciones",
    ],
    icon: "Syringe",
    category: "metabolic",
    whatsappMessage:
      "Hola, quisiera información sobre los inyectables metabólicos y cómo calificar para el programa.",
  },
  {
    id: "bienestar-femenino",
    title: "Bienestar Femenino",
    subtitle: "Salud integral para la mujer",
    description:
      "Programa integral de bienestar para la mujer que aborda balance hormonal, salud metabólica, nutrición y calidad de vida en cada etapa de la vida.",
    features: [
      "Evaluación hormonal femenina",
      "Balance metabólico integral",
      "Salud en etapas de la vida",
      "Nutrición y composición corporal",
      "Bienestar emocional y físico",
      "Plan de seguimiento continuo",
    ],
    icon: "Heart",
    category: "wellness",
    whatsappMessage:
      "Hola, me interesa el programa de Bienestar Femenino de Aurum Nova. ¿Cuál es el proceso?",
  },
  {
    id: "bienestar-masculino",
    title: "Bienestar Masculino",
    subtitle: "Rendimiento y vitalidad clínica",
    description:
      "Programa médico masculino orientado a optimizar la composición corporal, niveles de energía, rendimiento físico y salud metabólica con seguimiento clínico.",
    features: [
      "Evaluación hormonal masculina",
      "Optimización de composición corporal",
      "Salud cardiovascular y metabólica",
      "Protocolo de nutrición clínica",
      "Seguimiento de progreso medible",
      "Plan personalizado por médico",
    ],
    icon: "Shield",
    category: "wellness",
    whatsappMessage:
      "Hola, me interesa el programa de Bienestar Masculino de Aurum Nova.",
  },
  {
    id: "skin-glow",
    title: "Skin & Glow",
    subtitle: "Medicina estética de precisión",
    description:
      "Tratamientos médico-estéticos diseñados para revitalizar, iluminar y rejuvenecer la piel con protocolos clínicos personalizados y tecnología de punta.",
    features: [
      "Análisis de piel profesional",
      "Tratamientos de bioestimulación",
      "Protocolos de luminosidad",
      "Procedimientos mínimamente invasivos",
      "Combinación de modalidades",
      "Plan de mantenimiento incluido",
    ],
    icon: "Sparkles",
    category: "aesthetic",
    whatsappMessage:
      "Hola, quisiera conocer los tratamientos de Skin & Glow en Aurum Nova.",
  },
  {
    id: "soporte-capilar",
    title: "Soporte Capilar",
    subtitle: "Salud del cabello con base clínica",
    description:
      "Evaluación y tratamiento del cabello desde una perspectiva médica integral, abordando causas subyacentes y ofreciendo soluciones basadas en evidencia clínica.",
    features: [
      "Evaluación capilar y sistémica",
      "Identificación de causas subyacentes",
      "Terapias capilares médicas",
      "Nutrición orientada a la salud capilar",
      "Suplementación clínica si aplica",
      "Seguimiento de progreso",
    ],
    icon: "Leaf",
    category: "wellness",
    whatsappMessage:
      "Hola, me interesa el programa de Soporte Capilar de Aurum Nova.",
  },
  {
    id: "nutricion",
    title: "Orientación Nutricional",
    subtitle: "Nutrición clínica personalizada",
    description:
      "Guía nutricional basada en tu perfil metabólico, análisis de laboratorio y objetivos de salud, integrada al plan médico global de cada paciente.",
    features: [
      "Evaluación nutricional personalizada",
      "Plan basado en perfil metabólico",
      "Integrado al programa médico",
      "Ajuste continuo según progreso",
      "Educación en hábitos alimentarios",
      "Soporte de seguimiento incluido",
    ],
    icon: "Apple",
    category: "wellness",
    whatsappMessage:
      "Hola, quisiera información sobre la orientación nutricional en Aurum Nova.",
  },
];
