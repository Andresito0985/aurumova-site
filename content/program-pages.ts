export interface ProgramFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ProgramPricing {
  label?: string;
  from: string;
  period?: string;
  description: string;
  includes: string[];
  note?: string;
  disclaimer?: string;
}

export interface ProgramProcess {
  step: string;
  title: string;
  description: string;
}

export interface ProgramFAQ {
  question: string;
  answer: string;
}

export interface ProgramPageContent {
  slug: string;
  meta: {
    title: string;
    description: string;
    keywords?: string[];
  };
  hero: {
    badge?: string;
    title: string;
    highlight?: string;
    subtitle: string;
    ctaText: string;
    ctaMessage: string;
    secondaryCtaText?: string;
    secondaryCtaHref?: string;
    disclaimer?: string;
    accentColor?: string;
  };
  overview: {
    title: string;
    body: string[];
  };
  features: ProgramFeature[];
  pricing?: ProgramPricing;
  process?: ProgramProcess[];
  faq?: ProgramFAQ[];
  disclaimer?: string;
  medicalNote?: string;
  relatedSlugs?: string[];
}

// ─────────────────────────────────────────────────────────────────────────────
// PROGRAMA METABÓLICO INTEGRAL
// ─────────────────────────────────────────────────────────────────────────────
export const programaMetabolico: ProgramPageContent = {
  slug: "programa-metabolico",
  meta: {
    title: "Programa Metabólico Integral | Aurum Nova Wellness Clinic",
    description:
      "Programa médico mensual de control metabólico en Arecibo, Puerto Rico. Evaluación clínica, plan personalizado, seguimiento y métricas de progreso desde $400/mes.",
    keywords: [
      "programa metabólico Puerto Rico",
      "control de peso médico Arecibo",
      "programa adelgazamiento médico",
      "medicina metabólica Puerto Rico",
    ],
  },
  hero: {
    badge: "Programa Principal",
    title: "Programa Metabólico",
    highlight: "Integral",
    subtitle:
      "Un programa médico mensual completo: evaluación clínica, plan personalizado, terapias de apoyo si calificas y seguimiento continuo con métricas reales.",
    ctaText: "Ver si califico",
    ctaMessage:
      "Hola, me interesa el Programa Metabólico Integral de Aurum Nova. ¿Cuáles son los requisitos para calificar y cuál es el proceso de evaluación?",
    secondaryCtaText: "Ver preguntas frecuentes",
    secondaryCtaHref: "/preguntas-frecuentes",
    disclaimer:
      "Requiere evaluación médica individual. No todos los pacientes califican.",
    accentColor: "#C9A84C",
  },
  overview: {
    title: "Medicina metabólica con seguimiento clínico real",
    body: [
      "El Programa Metabólico Integral de Aurum Nova no es una dieta ni un suplemento. Es un programa médico mensual diseñado para pacientes que buscan transformar su metabolismo con la supervisión de un profesional de la salud.",
      "Cada paciente comienza con una evaluación clínica completa, que incluye historial médico, análisis de laboratorio y revisión de composición corporal. A partir de ese perfil, el médico diseña un plan personalizado que puede incluir orientación nutricional, manejo del estilo de vida, terapias de apoyo inyectables o, cuando clínicamente indicado y si el paciente califica, fórmulas metabólicas bajo prescripción médica.",
      "El seguimiento es parte del programa. Registramos tus métricas, ajustamos el protocolo según tu respuesta clínica y documentamos tu progreso real.",
    ],
  },
  features: [
    {
      icon: "ClipboardList",
      title: "Evaluación clínica completa",
      description:
        "Historial médico, análisis de laboratorio, composición corporal y perfil metabólico antes de iniciar cualquier terapia.",
    },
    {
      icon: "UserCheck",
      title: "Plan personalizado por médico",
      description:
        "El protocolo es diseñado individualmente. No hay paquetes genéricos — cada plan responde a tu perfil clínico específico.",
    },
    {
      icon: "Syringe",
      title: "Inyectables de apoyo si calificas",
      description:
        "Acceso a inyectables metabólicos de apoyo (L-carnitina, Lipo Mino, MIC) si el médico los indica tras tu evaluación.",
    },
    {
      icon: "FlaskConical",
      title: "Terapias formuladas si aplica",
      description:
        "Cuando clínicamente indicado, coordinación con farmacia de formulación para terapias prescritas. Sujeto a evaluación individual.",
    },
    {
      icon: "LineChart",
      title: "Métricas de progreso reales",
      description:
        "Seguimiento de peso, IMC, circunferencia, apetito, tolerancia y adherencia. Resultados documentados, no promesas.",
    },
    {
      icon: "RefreshCw",
      title: "Ajustes mensuales del protocolo",
      description:
        "El médico revisa tu respuesta y ajusta el plan. El programa evoluciona contigo, no se queda estático.",
    },
  ],
  pricing: {
    label: "Membresía mensual",
    from: "$400",
    period: "mes",
    description:
      "El paquete mensual incluye tu evaluación, plan médico, seguimiento y acceso a terapias de apoyo aprobadas por tu médico.",
    includes: [
      "Consulta médica mensual incluida",
      "Plan nutricional personalizado",
      "Acceso a inyectables de apoyo si calificas",
      "Seguimiento de métricas y progreso",
      "Ajuste de protocolo según respuesta clínica",
      "Comunicación directa con el equipo clínico",
    ],
    note: "El precio base puede variar según el protocolo específico aprobado. Las terapias formuladas bajo prescripción tienen costo adicional.",
    disclaimer:
      "El precio refleja el componente clínico del programa. Terapias adicionales se evalúan individualmente.",
  },
  process: [
    {
      step: "01",
      title: "Evaluación inicial",
      description:
        "Consulta médica completa: historial, laboratorios, composición corporal y revisión de contraindicaciones.",
    },
    {
      step: "02",
      title: "Diseño del protocolo",
      description:
        "El médico diseña tu plan personalizado, determina qué terapias aplican y establece metas clínicas iniciales.",
    },
    {
      step: "03",
      title: "Inicio del programa",
      description:
        "Comienzas tu protocolo con supervisión activa. Primera medición de métricas de partida.",
    },
    {
      step: "04",
      title: "Seguimiento mensual",
      description:
        "Revisión de progreso, ajuste de protocolo y renovación del plan. Tu médico documenta cada cambio.",
    },
  ],
  faq: [
    {
      question: "¿Qué incluye exactamente el programa mensual?",
      answer:
        "Incluye consulta médica, plan nutricional personalizado, seguimiento de métricas y acceso a inyectables de apoyo si tu médico los indica. Las terapias formuladas bajo prescripción tienen costo adicional.",
    },
    {
      question: "¿Todos los pacientes reciben las mismas terapias?",
      answer:
        "No. El protocolo es 100% personalizado. Algunos pacientes pueden ser candidatos a terapias inyectables o fórmulas bajo prescripción; otros solo requieren orientación nutricional y seguimiento. La evaluación clínica determina qué es apropiado para ti.",
    },
    {
      question: "¿Cuánto peso puedo esperar perder?",
      answer:
        "Aurum Nova no garantiza resultados específicos de pérdida de peso. Los resultados dependen de factores individuales: adherencia, historial médico, respuesta metabólica y condiciones subyacentes. Registramos tu progreso real y ajustamos el plan según tu respuesta.",
    },
    {
      question: "¿Qué pasa si no califico para ciertas terapias?",
      answer:
        "Si no calificas para terapias específicas, recibirás un plan médico alternativo igualmente personalizado. La evaluación médica siempre determina el protocolo más seguro y apropiado para ti.",
    },
    {
      question: "¿Puedo cancelar el programa mensual?",
      answer:
        "El programa es mensual. Puedes descontinuarlo al término de cada mes. Recomendamos una consulta de cierre para evaluar tu progreso y recibir orientación de seguimiento.",
    },
  ],
  disclaimer:
    "Los medicamentos formulados no son aprobados por FDA ni son equivalentes genéricos de medicamentos aprobados por FDA. Su uso requiere evaluación médica individual, prescripción profesional y revisión de riesgos, beneficios, historial clínico, medicamentos actuales y contraindicaciones. No todos los pacientes son candidatos. Los resultados individuales varían.",
  medicalNote:
    "Cuando clínicamente indicado, Aurum Nova puede coordinar con farmacias de formulación para terapias personalizadas prescritas según la evaluación individual del paciente.",
  relatedSlugs: ["sueroterapia", "inyectables-metabolicos", "nutricion", "coaching-seguimiento"],
};

// ─────────────────────────────────────────────────────────────────────────────
// LÁSER DIODO
// ─────────────────────────────────────────────────────────────────────────────
export const laserDiodo: ProgramPageContent = {
  slug: "laser-diodo",
  meta: {
    title: "Láser Diodo High-Tech | Remoción de Vello | Aurum Nova",
    description:
      "Remoción de vello con láser diodo de última generación en Arecibo, Puerto Rico. Zonas desde $20. Adecuado para múltiples fototipos. Resultados duraderos.",
    keywords: [
      "láser diodo Puerto Rico",
      "depilación láser Arecibo",
      "remoción vello permanente Puerto Rico",
      "láser diodo Arecibo",
    ],
  },
  hero: {
    badge: "Tecnología de Punta",
    title: "Láser Diodo",
    highlight: "High-Tech",
    subtitle:
      "Remoción de vello permanente con tecnología diodo avanzada. Planes personalizados por zona, múltiples fototipos, mínimas molestias y resultados clínicamente comprobados.",
    ctaText: "Consultar zonas y paquetes",
    ctaMessage:
      "Hola, me interesa el tratamiento de depilación láser diodo en Aurum Nova. ¿Pueden darme información sobre zonas disponibles y paquetes?",
    secondaryCtaText: "Ver preguntas frecuentes",
    secondaryCtaHref: "/preguntas-frecuentes",
    accentColor: "#8B7355",
  },
  overview: {
    title: "Tecnología láser de diodo de última generación",
    body: [
      "El sistema de láser de diodo de Aurum Nova representa lo más avanzado en remoción de vello. A diferencia de tecnologías más antiguas, el diodo opera en longitudes de onda que permiten tratar eficazmente múltiples fototipos de piel con mayor seguridad y menor riesgo de irritación.",
      "Cada tratamiento comienza con una evaluación del tipo de piel y de vello para diseñar el protocolo adecuado. Nuestro personal clínico capacitado ajusta los parámetros del equipo a las características individuales de cada paciente para maximizar la efectividad y minimizar las molestias.",
      "La remoción permanente requiere un ciclo completo de sesiones, ya que el láser actúa durante la fase de crecimiento activo del vello. Te explicamos cuántas sesiones se estiman para tu caso específico durante la evaluación inicial.",
    ],
  },
  features: [
    {
      icon: "Zap",
      title: "Tecnología de diodo avanzada",
      description:
        "Longitud de onda optimizada para mayor penetración y eficacia en el folículo piloso con menor daño al tejido circundante.",
    },
    {
      icon: "Users",
      title: "Múltiples fototipos",
      description:
        "Efectivo en una amplia gama de tonos de piel. La evaluación inicial determina los parámetros seguros para tu tipo de piel específico.",
    },
    {
      icon: "Target",
      title: "Precisión por zona",
      description:
        "Cada zona tiene parámetros y protocolos específicos. Diseñamos el plan según las características del vello en cada área.",
    },
    {
      icon: "Shield",
      title: "Mínimas molestias",
      description:
        "Sistema con enfriamiento integrado que reduce significativamente el discomfort durante el tratamiento.",
    },
    {
      icon: "Clock",
      title: "Sesiones eficientes",
      description:
        "Tiempos de tratamiento optimizados según el área. Zonas pequeñas en minutos, zonas grandes con mayor eficiencia que equipos convencionales.",
    },
    {
      icon: "CheckCircle2",
      title: "Personal clínico certificado",
      description:
        "Todos los tratamientos son realizados por personal capacitado y certificado en el manejo del equipo.",
    },
  ],
  pricing: {
    label: "Precio por zona",
    from: "$20",
    period: "zona",
    description:
      "El precio varía según la zona a tratar, el número de sesiones recomendadas y el plan seleccionado. Ofrecemos paquetes de sesiones con mejor valor.",
    includes: [
      "Evaluación de tipo de piel y vello sin costo",
      "Plan de sesiones personalizado por zona",
      "Paquetes multi-sesión disponibles",
      "Todas las zonas del cuerpo disponibles",
      "Personal clínico certificado",
      "Seguimiento de progreso incluido",
    ],
    note: "El precio final depende de la zona, número de sesiones y paquete seleccionado. La evaluación inicial es sin costo.",
  },
  process: [
    {
      step: "01",
      title: "Evaluación inicial gratuita",
      description:
        "Análisis de tipo de piel (fototipo) y características del vello. Determinamos el protocolo más adecuado y estimamos el número de sesiones.",
    },
    {
      step: "02",
      title: "Diseño del plan",
      description:
        "Seleccionamos zonas, definimos el número de sesiones recomendadas y te presentamos las opciones de paquetes disponibles.",
    },
    {
      step: "03",
      title: "Sesiones de tratamiento",
      description:
        "Cada sesión trata la zona según el protocolo definido. El equipo ajusta los parámetros a tu evolución.",
    },
    {
      step: "04",
      title: "Seguimiento y evaluación",
      description:
        "Evaluamos la respuesta al tratamiento en cada sesión y ajustamos si es necesario para maximizar resultados.",
    },
  ],
  faq: [
    {
      question: "¿Cuántas sesiones necesito?",
      answer:
        "Depende de la zona, el tipo de vello y tu fototipo. Típicamente se requieren entre 6 y 10 sesiones por zona. La evaluación inicial te dará una estimación personalizada.",
    },
    {
      question: "¿Es permanente la remoción con láser diodo?",
      answer:
        "El láser produce una reducción permanente significativa del vello. La mayoría de los pacientes logra una reducción del 80-90% después del protocolo completo. Algunos pueden requerir sesiones de mantenimiento ocasionales.",
    },
    {
      question: "¿Duele el tratamiento?",
      answer:
        "La mayoría de los pacientes describe una sensación de calor breve y ligero hormigueo, similar a un elástico en la piel. El sistema de enfriamiento integrado minimiza el discomfort significativamente.",
    },
    {
      question: "¿Para qué tipos de piel funciona?",
      answer:
        "La tecnología de diodo es efectiva en múltiples fototipos. La evaluación inicial determina si eres candidato ideal y qué parámetros son seguros para tu tono de piel.",
    },
    {
      question: "¿Qué debo hacer antes de una sesión?",
      answer:
        "Debes rasurar (no depilar con cera ni pinzas) el área 24-48 horas antes. Evitar exposición solar intensa en las semanas previas. Te daremos instrucciones completas en tu evaluación inicial.",
    },
  ],
  relatedSlugs: ["skin-glow", "coaching-seguimiento"],
};

// ─────────────────────────────────────────────────────────────────────────────
// SUEROTERAPIA
// ─────────────────────────────────────────────────────────────────────────────
export const sueroterapia: ProgramPageContent = {
  slug: "sueroterapia",
  meta: {
    title: "Sueroterapia NAD+ y Myers | Terapia IV | Aurum Nova",
    description:
      "Sueroterapia médica intravenosa en Arecibo, Puerto Rico. NAD+ y Cóctel de Myers administrados bajo supervisión médica. Requiere evaluación clínica previa.",
    keywords: [
      "sueroterapia Puerto Rico",
      "NAD+ intravenoso Puerto Rico",
      "Myers cocktail Arecibo",
      "terapia IV médica Puerto Rico",
    ],
  },
  hero: {
    badge: "Supervisión Médica Requerida",
    title: "Sueroterapia Médica",
    highlight: "NAD+ & Myers",
    subtitle:
      "Terapias intravenosas de nutrientes y coenzimas administradas bajo supervisión médica activa. Disponibles únicamente para pacientes que califiquen tras evaluación clínica completa.",
    ctaText: "Consultar elegibilidad",
    ctaMessage:
      "Hola, me interesa la sueroterapia médica (NAD+ o Myers) en Aurum Nova. ¿Cuál es el proceso de evaluación para calificar?",
    disclaimer:
      "Requiere evaluación médica previa. No todos los pacientes son candidatos.",
    accentColor: "#5B7FA6",
  },
  overview: {
    title: "Nutrición intravenosa con base clínica",
    body: [
      "La sueroterapia en Aurum Nova no es un servicio de spa — es una intervención médica administrada bajo supervisión clínica activa. Antes de recibir cualquier terapia IV, cada paciente pasa por una evaluación médica que incluye revisión de historial clínico, análisis de laboratorio si aplica y determinación de elegibilidad.",
      "Ofrecemos NAD+ (nicotinamida adenina dinucleótido) intravenoso para apoyo metabólico y bienestar celular, y el Cóctel de Myers, una fórmula de vitaminas y minerales esenciales personalizada según las necesidades de cada paciente.",
      "Todas las infusiones son preparadas y administradas bajo protocolo clínico. Monitoreamos la respuesta del paciente durante y después de cada sesión para garantizar seguridad y tolerancia.",
    ],
  },
  features: [
    {
      icon: "Droplets",
      title: "NAD+ intravenoso",
      description:
        "Coenzima fundamental para la función mitocondrial y el metabolismo energético celular. Disponible solo para pacientes que califiquen.",
    },
    {
      icon: "Star",
      title: "Cóctel de Myers personalizado",
      description:
        "Infusión de vitaminas B, vitamina C, magnesio y minerales esenciales. La fórmula se personaliza según el perfil clínico de cada paciente.",
    },
    {
      icon: "ShieldCheck",
      title: "Evaluación médica previa obligatoria",
      description:
        "No administramos terapias IV sin evaluación clínica completa. Revisamos historial, contraindicaciones y determinamos elegibilidad.",
    },
    {
      icon: "Activity",
      title: "Monitoreo durante la infusión",
      description:
        "Personal clínico presente durante toda la sesión. Monitoreamos tolerancia y respuesta en tiempo real.",
    },
    {
      icon: "RefreshCw",
      title: "Protocolo de frecuencia personalizado",
      description:
        "El médico determina la frecuencia ideal de sesiones según tu perfil, objetivos y respuesta clínica.",
    },
    {
      icon: "FlaskConical",
      title: "Preparación de fórmulas bajo estándar clínico",
      description:
        "Todas las formulaciones se preparan bajo estándares de seguridad y calidad clínica.",
    },
  ],
  faq: [
    {
      question: "¿Por qué necesito una evaluación médica para la sueroterapia?",
      answer:
        "Las terapias IV son intervenciones médicas, no procedimientos cosméticos. Existen contraindicaciones importantes (insuficiencia renal, ciertos trastornos cardíacos, alergias) que deben descartarse antes de administrar cualquier infusión. La evaluación protege tu seguridad.",
    },
    {
      question: "¿Qué beneficios puedo esperar del NAD+?",
      answer:
        "El NAD+ es una coenzima esencial para el metabolismo celular. Sin embargo, no prometemos resultados específicos. Los efectos percibidos varían por individuo y no constituyen un tratamiento médico para ninguna condición específica. La evaluación médica determina si es apropiado para ti.",
    },
    {
      question: "¿Cuánto dura una sesión de sueroterapia?",
      answer:
        "Depende del tipo de infusión. Las sesiones de Myers típicamente toman 30-60 minutos. Las infusiones de NAD+ pueden tomar más tiempo dependiendo de la dosis indicada por el médico.",
    },
    {
      question: "¿Con qué frecuencia puedo recibir sueroterapia?",
      answer:
        "La frecuencia es determinada individualmente por el médico según tu perfil y respuesta clínica. No existe una frecuencia estándar — esto es parte de la personalización del protocolo.",
    },
  ],
  disclaimer:
    "Las terapias intravenosas son procedimientos médicos que requieren evaluación clínica previa, prescripción profesional y supervisión durante la administración. No están disponibles sin evaluación médica. Los resultados individuales varían. No constituyen tratamiento para ninguna condición médica específica.",
  relatedSlugs: ["programa-metabolico", "inyectables-metabolicos", "coaching-seguimiento"],
};

// ─────────────────────────────────────────────────────────────────────────────
// INYECTABLES METABÓLICOS
// ─────────────────────────────────────────────────────────────────────────────
export const inyectablesMetabolicos: ProgramPageContent = {
  slug: "inyectables-metabolicos",
  meta: {
    title: "Inyectables Metabólicos de Apoyo | Aurum Nova Wellness",
    description:
      "L-carnitina, Lipo Mino MIC y MIC como apoyo metabólico complementario. Requieren evaluación médica. Solo disponibles para pacientes que califiquen en Aurum Nova.",
    keywords: [
      "inyectables metabólicos Puerto Rico",
      "L-carnitina inyectable",
      "Lipo Mino Puerto Rico",
      "inyectables bienestar Arecibo",
    ],
  },
  hero: {
    badge: "Apoyo Metabólico Complementario",
    title: "Inyectables",
    highlight: "Metabólicos",
    subtitle:
      "L-carnitina, Lipo Mino MIC y MIC como apoyo metabólico complementario a tu plan médico. Disponibles solo para pacientes que califiquen tras evaluación clínica.",
    ctaText: "Consultar si califico",
    ctaMessage:
      "Hola, me interesa saber más sobre los inyectables metabólicos (L-carnitina, Lipo Mino, MIC) en Aurum Nova y si podría ser candidato/a.",
    disclaimer:
      "Requiere evaluación médica. No todos los pacientes son candidatos.",
    accentColor: "#7B6FA0",
  },
  overview: {
    title: "Apoyo metabólico complementario, no una solución aislada",
    body: [
      "Los inyectables metabólicos de Aurum Nova son herramientas de apoyo complementario al plan médico integral de cada paciente, no tratamientos independientes ni soluciones mágicas. Su uso es indicado por el médico como parte de un protocolo personalizado más amplio.",
      "Ofrecemos tres modalidades de apoyo inyectable: L-carnitina (aminoácido clave en el metabolismo de ácidos grasos), Lipo Mino MIC (fórmula lipotropic con aminoácidos y vitaminas B) y MIC (mezcla de metionina, inositol y colina). Cada uno actúa como cofactor metabólico de apoyo.",
      "Su administración requiere evaluación médica previa, determinación de elegibilidad y supervisión. No los prescribimos como tratamiento aislado, sino como parte del protocolo integral cuando el médico los considera apropiados.",
    ],
  },
  features: [
    {
      icon: "Syringe",
      title: "L-Carnitina",
      description:
        "Aminoácido que participa en el transporte de ácidos grasos a la mitocondria. Apoyo al metabolismo energético cuando el médico lo indica.",
    },
    {
      icon: "Zap",
      title: "Lipo Mino MIC",
      description:
        "Fórmula lipotropic que combina aminoácidos, vitaminas B y cofactores de apoyo metabólico. Solo disponible bajo indicación médica.",
    },
    {
      icon: "Droplets",
      title: "MIC (Metionina, Inositol, Colina)",
      description:
        "Mezcla de cofactores lipotropics que apoyan el metabolismo hepático de grasas. Parte del protocolo cuando aplica clínicamente.",
    },
    {
      icon: "ShieldCheck",
      title: "Evaluación previa obligatoria",
      description:
        "No administramos inyectables sin evaluación clínica. Revisamos historial, contraindicaciones y determinamos elegibilidad.",
    },
    {
      icon: "Activity",
      title: "Parte de un programa integral",
      description:
        "Los inyectables son un componente complementario, no el programa completo. Se usan junto a nutrición, seguimiento y plan médico.",
    },
    {
      icon: "RefreshCw",
      title: "Frecuencia y dosis bajo prescripción",
      description:
        "El médico determina la frecuencia, dosis y duración del protocolo según tu respuesta clínica individual.",
    },
  ],
  faq: [
    {
      question: "¿Son seguros estos inyectables?",
      answer:
        "Cuando son indicados por un médico para un paciente que ha sido evaluado adecuadamente y no tiene contraindicaciones, los inyectables metabólicos tienen un buen perfil de seguridad. La evaluación médica previa es precisamente para garantizar que seas un candidato apropiado.",
    },
    {
      question: "¿Puedo recibir solo los inyectables sin el programa completo?",
      answer:
        "No. Los inyectables metabólicos en Aurum Nova forman parte del programa clínico integral. No los ofrecemos como servicio aislado, ya que su efectividad y seguridad están ligadas al contexto del plan médico personalizado.",
    },
    {
      question: "¿Garantizan pérdida de peso?",
      answer:
        "No. Ningún inyectable garantiza pérdida de peso por sí solo. Son herramientas de apoyo metabólico complementario. Los resultados dependen del programa integral, adherencia, plan nutricional y factores individuales.",
    },
    {
      question: "¿Con qué frecuencia se administran?",
      answer:
        "La frecuencia es determinada por el médico según tu plan y respuesta clínica. Típicamente varían de una a dos veces por semana, pero esto es completamente individualizado.",
    },
  ],
  disclaimer:
    "Los inyectables metabólicos son parte de un programa médico integral y no se ofrecen como servicio aislado. Requieren evaluación médica, prescripción y supervisión. No garantizan pérdida de peso ni ningún resultado específico. Los resultados individuales varían.",
  relatedSlugs: ["programa-metabolico", "sueroterapia", "nutricion"],
};

// ─────────────────────────────────────────────────────────────────────────────
// WELLNESS MUJER
// ─────────────────────────────────────────────────────────────────────────────
export const wellnessMujer: ProgramPageContent = {
  slug: "wellness-mujer",
  meta: {
    title: "Wellness Mujer | Salud Femenina Integral | Aurum Nova",
    description:
      "Programa médico de bienestar femenino en Arecibo, Puerto Rico. Peso, energía, metabolismo, piel, cabello y salud hormonal con seguimiento clínico personalizado.",
    keywords: [
      "wellness mujer Puerto Rico",
      "salud femenina Arecibo",
      "metabolismo mujer Puerto Rico",
      "bienestar femenino médico",
    ],
  },
  hero: {
    badge: "Bienestar Femenino",
    title: "Wellness",
    highlight: "Mujer",
    subtitle:
      "Un programa médico diseñado para la salud integral de la mujer: metabolismo, energía, composición corporal, piel, cabello y bienestar hormonal con seguimiento clínico.",
    ctaText: "Comenzar mi evaluación",
    ctaMessage:
      "Hola, me interesa el programa de Wellness Mujer en Aurum Nova. ¿Cuál es el proceso para comenzar y qué incluye la evaluación inicial?",
    accentColor: "#A0687A",
  },
  overview: {
    title: "Salud femenina con enfoque clínico integral",
    body: [
      "El cuerpo femenino tiene particularidades metabólicas, hormonales y fisiológicas que hacen necesario un enfoque específico. El programa Wellness Mujer de Aurum Nova aborda la salud femenina de forma integral, no solo el peso.",
      "Trabajamos con mujeres en diferentes etapas de la vida: jóvenes adultas, mujeres en edad reproductiva, períodos de cambios hormonales y perimenopausia. Cada etapa presenta desafíos diferentes que requieren protocolos distintos.",
      "El programa comienza con una evaluación clínica completa que incluye revisión de síntomas, historial de salud, análisis y factores de riesgo metabólico. A partir de ese perfil, diseñamos un plan personalizado que puede incluir orientación nutricional, manejo metabólico, soporte de composición corporal, cuidado de piel y cabello, y terapias de apoyo si el médico las considera indicadas.",
    ],
  },
  features: [
    {
      icon: "Heart",
      title: "Salud metabólica femenina",
      description:
        "Evaluación del riesgo metabólico, resistencia a la insulina, composición corporal y factores hormonales que afectan el peso.",
    },
    {
      icon: "Zap",
      title: "Energía y vitalidad",
      description:
        "Identificación de factores que contribuyen al cansancio crónico, niebla mental o bajo rendimiento. Plan de intervención personalizado.",
    },
    {
      icon: "Activity",
      title: "Metabolismo y composición corporal",
      description:
        "Control de peso con enfoque metabólico, no calórico. Métricas reales: peso, circunferencia, composición, no solo la báscula.",
    },
    {
      icon: "Sparkles",
      title: "Piel y bienestar estético",
      description:
        "Integración con programas de Skin & Glow cuando aplica. Abordamos la piel desde adentro y desde afuera.",
    },
    {
      icon: "Leaf",
      title: "Salud del cabello",
      description:
        "Evaluación de caída o deterioro capilar desde una perspectiva médica. Identificación de causas subyacentes.",
    },
    {
      icon: "Shield",
      title: "Cambios hormonales y ciclo de vida",
      description:
        "Acompañamiento médico en etapas de cambio hormonal, incluyendo períodos de transición y ajustes metabólicos.",
    },
  ],
  faq: [
    {
      question: "¿Este programa es solo para pérdida de peso?",
      answer:
        "No. Aunque muchas pacientes vienen con objetivos de manejo de peso, el programa aborda la salud femenina de forma integral: energía, metabolismo, composición corporal, piel, cabello y bienestar general.",
    },
    {
      question: "¿Está disponible para mujeres en menopausia o perimenopausia?",
      answer:
        "Sí. De hecho, los cambios hormonales de la menopausia y perimenopausia tienen impacto metabólico significativo. El médico evalúa tu situación específica y diseña un protocolo apropiado para esta etapa.",
    },
    {
      question: "¿Necesito traer análisis de laboratorio previos?",
      answer:
        "Si tienes análisis recientes, puedes traerlos. Sin embargo, el médico determinará qué estudios adicionales son necesarios según tu evaluación. No es requisito llegar con laboratorios previos.",
    },
  ],
  disclaimer:
    "Este programa no sustituye el cuidado ginecológico o endocrinológico especializado. Aurum Nova complementa pero no reemplaza tu médico de cabecera ni especialistas. No todos los pacientes califican para todas las terapias. Los resultados individuales varían.",
  relatedSlugs: ["programa-metabolico", "nutricion", "skin-glow", "hair-support"],
};

// ─────────────────────────────────────────────────────────────────────────────
// WELLNESS HOMBRE
// ─────────────────────────────────────────────────────────────────────────────
export const wellnessHombre: ProgramPageContent = {
  slug: "wellness-hombre",
  meta: {
    title: "Wellness Hombre | Metabolismo y Vitalidad | Aurum Nova",
    description:
      "Programa médico de bienestar masculino en Arecibo, Puerto Rico. Grasa abdominal, energía, metabolismo, rendimiento y soporte capilar con seguimiento clínico.",
    keywords: [
      "wellness hombre Puerto Rico",
      "metabolismo masculino Arecibo",
      "bienestar hombre médico Puerto Rico",
      "grasa abdominal tratamiento médico",
    ],
  },
  hero: {
    badge: "Bienestar Masculino",
    title: "Wellness",
    highlight: "Hombre",
    subtitle:
      "Control de grasa abdominal, optimización metabólica, energía sostenida y rendimiento. Un programa médico diseñado para la salud integral del hombre con resultados medibles.",
    ctaText: "Comenzar mi evaluación",
    ctaMessage:
      "Hola, me interesa el programa de Wellness Hombre en Aurum Nova. ¿Cuál es el proceso de evaluación?",
    accentColor: "#4A6B8A",
  },
  overview: {
    title: "Optimización metabólica masculina con base clínica",
    body: [
      "El metabolismo masculino tiene características específicas que deben abordarse con un enfoque clínico propio. La acumulación de grasa abdominal, la pérdida de masa muscular con la edad, la fatiga crónica y los cambios en rendimiento son señales de que el cuerpo necesita atención médica, no solo más ejercicio o menos comida.",
      "El programa Wellness Hombre de Aurum Nova evalúa el perfil metabólico, hormonal y de composición corporal de cada paciente para diseñar un protocolo personalizado. Trabajamos con hombres de distintas edades y condiciones, desde jóvenes adultos hasta hombres mayores de 40 con cambios metabólicos significativos.",
      "El programa puede incluir orientación nutricional, manejo de composición corporal, inyectables de apoyo metabólico si el médico los indica, sueroterapia si aplica y soporte capilar cuando es parte del objetivo del paciente.",
    ],
  },
  features: [
    {
      icon: "Target",
      title: "Control de grasa abdominal",
      description:
        "Protocolo médico orientado a la reducción de grasa visceral con enfoque metabólico, no solo calórico.",
    },
    {
      icon: "Zap",
      title: "Energía y rendimiento",
      description:
        "Identificación y manejo de factores que afectan el nivel de energía, rendimiento físico y claridad mental.",
    },
    {
      icon: "Activity",
      title: "Metabolismo y composición corporal",
      description:
        "Métricas de seguimiento reales: peso, circunferencia abdominal, composición, no solo la báscula.",
    },
    {
      icon: "Shield",
      title: "Salud cardiovascular y metabólica",
      description:
        "Evaluación de factores de riesgo metabólico y cardiovascular. Plan orientado a mejorar el perfil de salud general.",
    },
    {
      icon: "Leaf",
      title: "Soporte capilar masculino",
      description:
        "Para hombres con objetivos de salud capilar. Evaluación médica de causas y opciones de soporte.",
    },
    {
      icon: "LineChart",
      title: "Seguimiento de progreso real",
      description:
        "Documentamos tu progreso con métricas clínicas. Ajustamos el protocolo mensualmente según tu respuesta.",
    },
  ],
  faq: [
    {
      question: "¿Este programa incluye terapia hormonal?",
      answer:
        "La evaluación clínica incluye revisión de factores hormonales. Si el médico considera que existe un componente hormonal relevante, puede referirte a un especialista o incluir ese aspecto en el protocolo. No ofrecemos terapia de reemplazo hormonal de rutina — cada caso se evalúa individualmente.",
    },
    {
      question: "¿Cuánto tiempo tarda en verse progreso?",
      answer:
        "Depende del perfil metabólico individual, adherencia y protocolo. Algunos pacientes notan cambios en los primeros 30 días; otros requieren más tiempo. No prometemos plazos específicos — documentamos tu progreso real.",
    },
    {
      question: "¿Puedo combinar el programa con mi rutina de ejercicio?",
      answer:
        "Sí, y de hecho el ejercicio complementa el programa metabólico. El médico puede orientarte sobre el tipo de actividad más compatible con tu protocolo.",
    },
  ],
  disclaimer:
    "Este programa no sustituye el cuidado médico primario ni especialidades como urología o cardiología. Aurum Nova complementa pero no reemplaza tu médico de cabecera. No todos los pacientes califican para todas las terapias. Los resultados individuales varían.",
  relatedSlugs: ["programa-metabolico", "nutricion", "inyectables-metabolicos", "hair-support"],
};

// ─────────────────────────────────────────────────────────────────────────────
// NUTRICIÓN PERSONALIZADA
// ─────────────────────────────────────────────────────────────────────────────
export const nutricion: ProgramPageContent = {
  slug: "nutricion",
  meta: {
    title: "Nutrición Personalizada Clínica | Aurum Nova Wellness",
    description:
      "Orientación nutricional personalizada en Arecibo, Puerto Rico. Plan de un mes basado en tu perfil metabólico, laboratorios y objetivos clínicos. Integrado al plan médico.",
    keywords: [
      "nutrición personalizada Puerto Rico",
      "dieta médica Arecibo",
      "nutrición clínica Puerto Rico",
      "plan nutricional metabólico",
    ],
  },
  hero: {
    badge: "Nutrición Clínica",
    title: "Nutrición",
    highlight: "Personalizada",
    subtitle:
      "Plan nutricional de un mes diseñado a partir de tu perfil metabólico, laboratorios y objetivos clínicos. Integrado al programa médico, no una dieta genérica.",
    ctaText: "Iniciar mi plan nutricional",
    ctaMessage:
      "Hola, me interesa la orientación nutricional personalizada en Aurum Nova. ¿Cómo funciona y qué incluye?",
    accentColor: "#6B8F6B",
  },
  overview: {
    title: "Alimentación diseñada por tu perfil metabólico",
    body: [
      "La nutrición en Aurum Nova no es una dieta de moda ni un plan genérico. Es una intervención nutricional clínica diseñada a partir de tu evaluación médica, resultados de laboratorio, perfil metabólico y objetivos específicos.",
      "El plan de alimentación de un mes incluye estructura de macronutrientes, metas de proteína según tu perfil, distribución de comidas, orientación práctica y adaptaciones según tus preferencias y restricciones. Se diseña para ser aplicable en la vida real, no solo en papel.",
      "Para pacientes en el Programa Metabólico Integral, la nutrición es parte del protocolo integral. También ofrecemos orientación nutricional como servicio independiente para pacientes que buscan un punto de partida estructurado.",
    ],
  },
  features: [
    {
      icon: "Apple",
      title: "Plan de un mes personalizado",
      description:
        "Dieta estructurada mensualmente según tu perfil, objetivos y restricciones. No genérica — diseñada para ti.",
    },
    {
      icon: "Target",
      title: "Meta de proteína individualizada",
      description:
        "Calculamos tu objetivo de proteína según composición corporal y objetivos metabólicos para optimizar la respuesta del plan.",
    },
    {
      icon: "Activity",
      title: "Alimentación de apoyo metabólico",
      description:
        "Estructura nutricional orientada a optimizar la respuesta metabólica y el control del apetito sin usar nombres de medicamentos.",
    },
    {
      icon: "RefreshCw",
      title: "Hábitos sostenibles",
      description:
        "El plan incluye educación en hábitos alimentarios que se mantienen a largo plazo, no solo durante el programa.",
    },
    {
      icon: "LineChart",
      title: "Seguimiento de adherencia",
      description:
        "Revisamos tu adherencia y ajustamos el plan mensualmente según tu progreso y cambios en objetivos.",
    },
    {
      icon: "ClipboardList",
      title: "Integrado al plan médico",
      description:
        "La nutrición no va sola — se coordina con el protocolo médico completo para maximizar la efectividad.",
    },
  ],
  faq: [
    {
      question: "¿Puedo seguir el plan nutricional sin el programa médico completo?",
      answer:
        "Sí. Ofrecemos orientación nutricional como servicio independiente. Sin embargo, recomendamos la evaluación clínica completa para que el plan sea verdaderamente personalizado y seguro.",
    },
    {
      question: "¿El plan considera restricciones alimentarias?",
      answer:
        "Sí. Durante la evaluación informas tus preferencias, alergias, restricciones culturales y condiciones que afecten tu alimentación. El plan se adapta a tu realidad.",
    },
    {
      question: "¿Incluye recetas o solo macros?",
      answer:
        "El plan incluye estructura nutricional, distribución de macronutrientes, lista de alimentos recomendados y orientación práctica. La profundidad del plan depende del protocolo.",
    },
  ],
  relatedSlugs: ["programa-metabolico", "coaching-seguimiento", "wellness-mujer", "wellness-hombre"],
};

// ─────────────────────────────────────────────────────────────────────────────
// SUPLEMENTACIÓN
// ─────────────────────────────────────────────────────────────────────────────
export const suplementacion: ProgramPageContent = {
  slug: "suplementacion",
  meta: {
    title: "Suplementación & Wellness Support | Aurum Nova",
    description:
      "Suplementos clínicos de calidad como apoyo al programa de bienestar en Aurum Nova Wellness Clinic. Recomendados por médico según perfil individual.",
    keywords: [
      "suplementos médicos Puerto Rico",
      "suplementación clínica Arecibo",
      "wellness support suplementos",
      "suplementos bienestar Puerto Rico",
    ],
  },
  hero: {
    badge: "Apoyo Nutricional",
    title: "Suplementación",
    highlight: "& Wellness Support",
    subtitle:
      "Suplementos de calidad clínica recomendados por el médico como apoyo complementario a tu programa. Seleccionados según tu perfil, objetivos y análisis de laboratorio.",
    ctaText: "Consultar recomendaciones",
    ctaMessage:
      "Hola, me interesa la suplementación de apoyo como parte de mi programa en Aurum Nova. ¿Qué opciones tienen disponibles?",
    accentColor: "#8B9A6B",
  },
  overview: {
    title: "Suplementos recomendados, no vendidos al azar",
    body: [
      "En Aurum Nova no vendemos suplementos sin contexto clínico. Las recomendaciones de suplementación se basan en tu perfil individual: análisis de laboratorio, déficits identificados, objetivos del programa y protocolo médico.",
      "Ofrecemos acceso a suplementos de calidad clínica — vitaminas, minerales, adaptógenos y fórmulas de apoyo metabólico — como complemento al plan médico de cada paciente. No son obligatorios ni forman parte automática de ningún protocolo.",
      "El médico revisa tu perfil y determina qué suplementos, si alguno, pueden ser beneficiosos para tu situación específica. Priorizamos la seguridad y la evidencia sobre la venta.",
    ],
  },
  features: [
    {
      icon: "Leaf",
      title: "Vitaminas y minerales esenciales",
      description:
        "Corrección de déficits identificados por laboratorio. Suplementación dirigida, no masiva.",
    },
    {
      icon: "Activity",
      title: "Apoyo metabólico nutracéutico",
      description:
        "Fórmulas de apoyo al metabolismo de calidad clínica, recomendadas según tu protocolo.",
    },
    {
      icon: "Shield",
      title: "Antioxidantes y soporte celular",
      description:
        "Suplementos orientados al bienestar celular y reducción del estrés oxidativo cuando el médico los considera apropiados.",
    },
    {
      icon: "Leaf",
      title: "Soporte capilar y de piel",
      description:
        "Suplementos orientados a la salud del cabello y la piel como complemento a los programas de Hair Support y Skin & Glow.",
    },
    {
      icon: "ShieldCheck",
      title: "Solo de calidad clínica",
      description:
        "Seleccionamos marcas con estándares de pureza, potencia y trazabilidad verificada.",
    },
    {
      icon: "ClipboardList",
      title: "Revisión periódica",
      description:
        "Las recomendaciones se revisan en cada seguimiento médico. Lo que funciona hoy puede ajustarse mañana.",
    },
  ],
  relatedSlugs: ["programa-metabolico", "nutricion", "hair-support", "skin-glow"],
};

// ─────────────────────────────────────────────────────────────────────────────
// SKIN & GLOW
// ─────────────────────────────────────────────────────────────────────────────
export const skinGlow: ProgramPageContent = {
  slug: "skin-glow",
  meta: {
    title: "Skin & Glow | Medicina Estética de Precisión | Aurum Nova",
    description:
      "Tratamientos médico-estéticos para revitalizar, iluminar y rejuvenecer la piel en Arecibo, Puerto Rico. Bioestimulación, luminosidad y protocolos clínicos personalizados.",
    keywords: [
      "skin glow Puerto Rico",
      "medicina estética Arecibo",
      "tratamientos piel Puerto Rico",
      "bioestimulación facial Puerto Rico",
    ],
  },
  hero: {
    badge: "Medicina Estética",
    title: "Skin",
    highlight: "& Glow",
    subtitle:
      "Tratamientos médico-estéticos diseñados para revitalizar, iluminar y rejuvenecer la piel con protocolos clínicos personalizados y tecnología de precisión.",
    ctaText: "Agendar evaluación de piel",
    ctaMessage:
      "Hola, me interesa el programa Skin & Glow de Aurum Nova. ¿Qué tratamientos tienen disponibles y cómo es el proceso de evaluación?",
    accentColor: "#A08060",
  },
  overview: {
    title: "Piel saludable desde un enfoque médico",
    body: [
      "Los tratamientos de Skin & Glow en Aurum Nova parten de un análisis profesional de la piel — no de una lista genérica de procedimientos. Evaluamos el tipo de piel, condiciones subyacentes, factores de envejecimiento y objetivos estéticos del paciente para diseñar un protocolo personalizado.",
      "Ofrecemos modalidades de bioestimulación, tratamientos de luminosidad y protocolos mínimamente invasivos seleccionados según las características individuales de cada piel. Los tratamientos se combinan estratégicamente para maximizar los resultados y mantenerlos en el tiempo.",
      "La salud de la piel también está conectada al estado interno — nutrición, hidratación, metabolismo y factores hormonales. Por eso, Skin & Glow se coordina con el programa médico integral cuando el paciente participa en otros programas de Aurum Nova.",
    ],
  },
  features: [
    {
      icon: "Sparkles",
      title: "Análisis profesional de piel",
      description:
        "Evaluación del tipo de piel, condiciones, factores de envejecimiento y objetivos antes de iniciar cualquier tratamiento.",
    },
    {
      icon: "Star",
      title: "Protocolos de bioestimulación",
      description:
        "Tratamientos orientados a estimular la producción natural de colágeno y elastina para resultados progresivos y naturales.",
    },
    {
      icon: "Zap",
      title: "Luminosidad y uniformidad",
      description:
        "Protocolos especializados para unificar el tono, reducir manchas y devolver luminosidad natural a la piel.",
    },
    {
      icon: "Shield",
      title: "Procedimientos mínimamente invasivos",
      description:
        "Técnicas con mínimo tiempo de recuperación, máxima seguridad y resultados visibles y progresivos.",
    },
    {
      icon: "RefreshCw",
      title: "Plan de mantenimiento",
      description:
        "Los resultados se sostienen con un plan de mantenimiento personalizado. No buscamos procedimientos repetitivos innecesarios.",
    },
    {
      icon: "Heart",
      title: "Coordinación con programa interno",
      description:
        "Se coordina con nutrición, suplementación y plan médico cuando el paciente participa en el programa integral.",
    },
  ],
  relatedSlugs: ["wellness-mujer", "suplementacion", "hair-support"],
};

// ─────────────────────────────────────────────────────────────────────────────
// HAIR SUPPORT
// ─────────────────────────────────────────────────────────────────────────────
export const hairSupport: ProgramPageContent = {
  slug: "hair-support",
  meta: {
    title: "Hair Support | Salud Capilar Médica | Aurum Nova Wellness",
    description:
      "Evaluación y tratamiento de la salud del cabello desde una perspectiva médica en Arecibo, Puerto Rico. Identificación de causas subyacentes y soluciones clínicas.",
    keywords: [
      "hair support Puerto Rico",
      "caída de cabello médica Arecibo",
      "salud capilar médica Puerto Rico",
      "tratamiento cabello Arecibo",
    ],
  },
  hero: {
    badge: "Salud Capilar",
    title: "Hair",
    highlight: "Support",
    subtitle:
      "Evaluación y tratamiento médico del cabello. Identificamos causas subyacentes — metabólicas, nutricionales o sistémicas — y ofrecemos soluciones clínicas basadas en evidencia.",
    ctaText: "Evaluar mi salud capilar",
    ctaMessage:
      "Hola, me interesa el programa de Hair Support en Aurum Nova para evaluar la salud de mi cabello desde una perspectiva médica.",
    accentColor: "#7B6B5B",
  },
  overview: {
    title: "Salud del cabello desde adentro hacia afuera",
    body: [
      "La caída del cabello, el adelgazamiento o el deterioro de su calidad raramente son problemas aislados. Detrás de muchos casos de pérdida o deterioro capilar hay causas médicas identificables: déficits nutricionales, alteraciones metabólicas, desequilibrios hormonales, estrés crónico o condiciones sistémicas.",
      "El programa Hair Support de Aurum Nova aborda el cabello desde una perspectiva médica. Comenzamos con una evaluación clínica que incluye revisión de historial, análisis de laboratorio si aplica y evaluación del cuero cabelludo. A partir de ese diagnóstico, diseñamos un plan que puede incluir orientación nutricional, suplementación clínica, terapias tópicas o de apoyo, y coordinación con el plan médico integral.",
      "No prometemos resultados milagrosos. Lo que ofrecemos es un abordaje serio, documentado y personalizado para la salud capilar.",
    ],
  },
  features: [
    {
      icon: "Leaf",
      title: "Evaluación médica capilar",
      description:
        "Revisión clínica del cuero cabelludo, historial de pérdida, patrones y factores sistémicos contribuyentes.",
    },
    {
      icon: "ClipboardList",
      title: "Análisis de causas subyacentes",
      description:
        "Identificamos si hay déficits nutricionales, factores hormonales, metabólicos o sistémicos que contribuyan al problema.",
    },
    {
      icon: "Apple",
      title: "Nutrición orientada a la salud capilar",
      description:
        "Plan nutricional con énfasis en nutrientes esenciales para el ciclo del cabello: hierro, zinc, proteína, biotina y otros.",
    },
    {
      icon: "Droplets",
      title: "Suplementación clínica si aplica",
      description:
        "Suplementos de calidad clínica seleccionados según los déficits específicos identificados en tu evaluación.",
    },
    {
      icon: "Activity",
      title: "Terapias de apoyo capilar",
      description:
        "Opciones de terapias de soporte según el diagnóstico médico. El médico determina qué es apropiado para tu caso.",
    },
    {
      icon: "LineChart",
      title: "Seguimiento de progreso",
      description:
        "Documentamos el estado inicial y los cambios progresivos. Los resultados capilares toman tiempo — lo medimos honestamente.",
    },
  ],
  faq: [
    {
      question: "¿Pueden curar la alopecia androgénica?",
      answer:
        "No prometemos curas. La alopecia androgénica (calvicie de patrón común) tiene componentes genéticos irreversibles. Lo que podemos hacer es evaluar si hay factores tratables que contribuyen al problema y ofrecer apoyo clínico para optimizar el ambiente del cuero cabelludo y el ciclo capilar.",
    },
    {
      question: "¿En cuánto tiempo veo resultados?",
      answer:
        "El ciclo del cabello es largo — los cambios suelen tomar entre 3 y 6 meses en hacerse visibles. Ser honesto sobre los plazos reales es parte de nuestro enfoque clínico.",
    },
  ],
  relatedSlugs: ["suplementacion", "nutricion", "wellness-mujer", "wellness-hombre"],
};

// ─────────────────────────────────────────────────────────────────────────────
// COACHING & SEGUIMIENTO
// ─────────────────────────────────────────────────────────────────────────────
export const coachingSeguimiento: ProgramPageContent = {
  slug: "coaching-seguimiento",
  meta: {
    title: "Coaching & Seguimiento Clínico | Aurum Nova Wellness",
    description:
      "Seguimiento clínico continuo, check-ins de progreso y acompañamiento profesional en Aurum Nova Wellness Clinic. El progreso se mide, no se imagina.",
    keywords: [
      "coaching médico Puerto Rico",
      "seguimiento clínico Arecibo",
      "seguimiento programa metabólico",
      "acompañamiento médico Puerto Rico",
    ],
  },
  hero: {
    badge: "Seguimiento Clínico",
    title: "Coaching",
    highlight: "& Seguimiento",
    subtitle:
      "El seguimiento es lo que transforma un plan en resultados reales. Check-ins periódicos, métricas documentadas, ajuste de protocolo y acompañamiento profesional continuo.",
    ctaText: "Conocer el sistema de seguimiento",
    ctaMessage:
      "Hola, me interesa conocer cómo funciona el sistema de coaching y seguimiento clínico en Aurum Nova.",
    accentColor: "#5B7B8A",
  },
  overview: {
    title: "El seguimiento es parte del tratamiento",
    body: [
      "La mayoría de los programas de bienestar fallan no por el plan inicial, sino por la ausencia de seguimiento. En Aurum Nova, el acompañamiento clínico continuo es parte fundamental de cada protocolo, no un accesorio opcional.",
      "Cada paciente tiene check-ins programados donde revisamos métricas objetivas, evaluamos tolerancia y adherencia, identificamos obstáculos y ajustamos el protocolo. No esperamos a que el paciente reporte problemas — los buscamos proactivamente.",
      "El sistema de seguimiento incluye documentación de métricas, evaluación de progreso contra metas clínicas iniciales y comunicación directa con el equipo. Preparamos la estructura para integración con una plataforma digital de seguimiento en fases futuras.",
    ],
  },
  features: [
    {
      icon: "LineChart",
      title: "Métricas documentadas",
      description:
        "Peso, IMC, circunferencias, composición corporal, apetito, tolerancia y adherencia. Progreso real, no percibido.",
    },
    {
      icon: "RefreshCw",
      title: "Ajuste periódico del protocolo",
      description:
        "El médico revisa tu respuesta clínica y ajusta el plan mensualmente. Un protocolo que no se ajusta no es personalizado.",
    },
    {
      icon: "MessageCircle",
      title: "Comunicación directa con el equipo",
      description:
        "Acceso a comunicación con el equipo clínico para dudas entre citas. No estás solo en el proceso.",
    },
    {
      icon: "ClipboardList",
      title: "Documentación del progreso",
      description:
        "Historial clínico estructurado. Puedes ver tu evolución documentada a lo largo del tiempo.",
    },
    {
      icon: "Target",
      title: "Revisión de metas clínicas",
      description:
        "Las metas se establecen al inicio y se revisan periódicamente. Ajustamos expectativas con base en tu respuesta real.",
    },
    {
      icon: "Activity",
      title: "Identificación proactiva de obstáculos",
      description:
        "No esperamos a que reportes problemas. El seguimiento está diseñado para identificarlos antes de que afecten el progreso.",
    },
  ],
  relatedSlugs: ["programa-metabolico", "resultados", "nutricion"],
};

export const allPrograms: ProgramPageContent[] = [
  programaMetabolico,
  laserDiodo,
  sueroterapia,
  inyectablesMetabolicos,
  wellnessMujer,
  wellnessHombre,
  nutricion,
  suplementacion,
  skinGlow,
  hairSupport,
  coachingSeguimiento,
];

export function getProgramBySlug(slug: string): ProgramPageContent | undefined {
  return allPrograms.find((p) => p.slug === slug);
}
