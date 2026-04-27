export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQItem[] = [
  // ── Evaluación ────────────────────────────────────────────────────────────
  {
    category: "Evaluación",
    question: "¿Cómo sé si califico para un programa de Aurum Nova?",
    answer:
      "La elegibilidad se determina en la evaluación médica inicial. El proveedor revisa historial clínico, medicamentos actuales, condiciones activas y posibles contraindicaciones. No existe una lista de requisitos fijos — cada caso se evalúa individualmente. La evaluación es el primer paso.",
  },
  {
    category: "Evaluación",
    question: "¿Qué sucede durante la evaluación médica inicial?",
    answer:
      "La consulta incluye revisión de historial médico, análisis de composición corporal, revisión de medicamentos actuales, evaluación de contraindicaciones y determinación del protocolo apropiado para tu perfil. Al finalizar, el proveedor te explica las opciones disponibles y cuál recomienda.",
  },
  {
    category: "Evaluación",
    question: "¿Necesito traer laboratorios previos?",
    answer:
      "Si tienes estudios recientes (menos de 6 meses) es útil traerlos. No es obligatorio. El proveedor determina qué estudios adicionales son necesarios según tu evaluación individual.",
  },
  {
    category: "Evaluación",
    question: "¿Puedo participar si tengo condiciones médicas crónicas?",
    answer:
      "Depende de la condición y su grado de control. Algunas condiciones son contraindicaciones para ciertas terapias; otras simplemente requieren precauciones adicionales. La evaluación médica determina si puedes participar y en qué modalidad.",
  },
  {
    category: "Evaluación",
    question: "¿Con qué frecuencia se realizan los seguimientos?",
    answer:
      "La frecuencia se determina durante la evaluación inicial según el programa y tus objetivos. El Programa Metabólico incluye seguimientos mensuales con posibilidad de más frecuencia en el primer mes. Los demás programas tienen estructura de seguimiento adaptada al protocolo.",
  },
  {
    category: "Evaluación",
    question: "¿Puedo tener preguntas antes de agendar?",
    answer:
      "Sí. Puedes contactarnos por WhatsApp antes de tu evaluación para aclarar dudas sobre los programas, los requisitos o el proceso. El equipo responde orientación general; las recomendaciones clínicas específicas se dan durante la evaluación.",
  },

  // ── Programa Metabólico Integral ──────────────────────────────────────────
  {
    category: "Programa Metabólico Integral",
    question: "¿Qué incluye el Programa Metabólico Integral?",
    answer:
      "El programa incluye consulta médica mensual, plan nutricional personalizado, inyectables de apoyo cuando clínicamente indicados, seguimiento de métricas (peso, cintura, IMC, adherencia, tolerancia), ajuste de protocolo y comunicación con el equipo clínico. Las terapias formuladas bajo prescripción tienen costo adicional.",
  },
  {
    category: "Programa Metabólico Integral",
    question: "¿Cuánto tiempo dura el programa?",
    answer:
      "El programa es mensual y renovable. Se recomienda un mínimo de 3 meses para observar progreso clínico significativo, aunque esto varía por persona. La duración óptima se discute durante la evaluación inicial según tus objetivos y respuesta individual.",
  },
  {
    category: "Programa Metabólico Integral",
    question: "¿Las terapias formuladas están incluidas en el precio mensual?",
    answer:
      "No. El precio base del programa cubre los componentes clínicos: consulta, plan nutricional, inyectables de apoyo cuando aplican y seguimiento. Las terapias formuladas bajo prescripción tienen costo adicional que varía según el protocolo específico indicado.",
  },
  {
    category: "Programa Metabólico Integral",
    question: "¿Garantizan pérdida de peso?",
    answer:
      "No se garantizan resultados específicos de pérdida de peso. Los resultados dependen de múltiples factores: historial médico, adherencia al plan, perfil metabólico individual, condiciones subyacentes y respuesta individual. Lo que garantizamos es un protocolo médico serio, supervisado y documentado.",
  },
  {
    category: "Programa Metabólico Integral",
    question: "¿Puedo combinar el programa con láser diodo o sueroterapia?",
    answer:
      "Sí. Muchos pacientes combinan el Programa Metabólico con otros servicios de Aurum Nova. Cada servicio tiene su propia evaluación. El equipo coordina los planes cuando es apropiado para el perfil del paciente.",
  },
  {
    category: "Programa Metabólico Integral",
    question: "¿Qué pasa si no veo progreso?",
    answer:
      "El seguimiento clínico existe precisamente para detectar esto. Si hay falta de progreso, el proveedor revisa el protocolo, evalúa las posibles causas y ajusta el plan. Puede haber factores metabólicos, de adherencia o condiciones subyacentes que requieran atención específica.",
  },

  // ── Láser Diodo ──────────────────────────────────────────────────────────
  {
    category: "Láser Diodo",
    question: "¿Cuántas sesiones necesito?",
    answer:
      "El número varía según zona, tipo y grosor del vello, fototipo de piel y respuesta individual. No hay un número fijo estándar. El proveedor orienta sobre el plan recomendado durante la evaluación inicial, que es necesaria antes de comenzar cualquier plan.",
  },
  {
    category: "Láser Diodo",
    question: "¿Los resultados son permanentes?",
    answer:
      "El láser diodo busca reducción progresiva y significativa del vello no deseado. Los resultados no se garantizan como permanentes al 100%. La mayoría de las personas experimenta reducción notable en densidad y grosor del vello. Algunas zonas pueden requerir sesiones de mantenimiento.",
  },
  {
    category: "Láser Diodo",
    question: "¿Es seguro para todos los tonos de piel?",
    answer:
      "La tecnología de diodo es efectiva en múltiples fototipos. La evaluación inicial determina los parámetros seguros para tu tipo de piel. Algunos fototipos requieren configuraciones específicas. La exposición solar reciente puede afectar la seguridad del tratamiento.",
  },
  {
    category: "Láser Diodo",
    question: "¿Duele?",
    answer:
      "La experiencia varía según la zona, el tipo de piel y la sensibilidad individual. El proveedor orienta sobre qué esperar en cada sesión. La tecnología diodo está diseñada para ofrecer una experiencia cómoda, aunque las sensaciones varían por persona y zona.",
  },
  {
    category: "Láser Diodo",
    question: "¿Puedo hacerme láser si estoy bronceado o embarazada?",
    answer:
      "El bronceado reciente puede afectar la seguridad y efectividad del tratamiento; se recomienda evitarlo antes de las sesiones. El embarazo es una contraindicación para el láser diodo. Informa al equipo sobre estas situaciones durante la evaluación.",
  },
  {
    category: "Láser Diodo",
    question: "¿Qué zonas están disponibles?",
    answer:
      "Trabajamos múltiples zonas de rostro y cuerpo: bigote, axilas, brazos, pecho, bikini, Brazilian, full Brazilian, media pierna, piernas completas y espalda. También hay planes combinados para varias zonas. Consulta para zonas adicionales.",
  },

  // ── Sueroterapia ─────────────────────────────────────────────────────────
  {
    category: "Sueroterapia",
    question: "¿Por qué necesito evaluación médica para la sueroterapia?",
    answer:
      "Las terapias intravenosas son intervenciones médicas con contraindicaciones importantes: insuficiencia renal, trastornos cardíacos no controlados, alergias a componentes, entre otros. La evaluación protege tu seguridad. No es un trámite — es una necesidad clínica real.",
  },
  {
    category: "Sueroterapia",
    question: "¿Qué diferencia hay entre el Protocolo NAD+ y el Myers?",
    answer:
      "El NAD+ es una coenzima esencial para el metabolismo energético celular, administrada en infusión lenta. El Cóctel de Myers es una mezcla de vitaminas del complejo B, magnesio y micronutrientes en solución IV. Son protocolos distintos con propósitos diferentes; el proveedor determina cuál es apropiado para tu caso.",
  },
  {
    category: "Sueroterapia",
    question: "¿Qué son los add-ons y están incluidos en el precio?",
    answer:
      "Los add-ons (Zofran, Pepcid, Decadron, Toradol) son medicamentos de apoyo disponibles como complemento a la infusión IV cuando clínicamente indicados. No están incluidos por defecto — su inclusión depende de la evaluación médica y tiene costo adicional desde $25.",
  },
  {
    category: "Sueroterapia",
    question: "¿La sueroterapia reemplaza mi tratamiento médico actual?",
    answer:
      "No. La sueroterapia es un complemento de bienestar y no reemplaza tratamientos médicos prescritos, medicamentos actuales ni el cuidado de tu médico principal. Informa al equipo sobre todos tus medicamentos durante la evaluación.",
  },
  {
    category: "Sueroterapia",
    question: "¿Con qué frecuencia se puede repetir?",
    answer:
      "La frecuencia depende del protocolo y la respuesta individual. Puede ser una sesión única, una serie inicial o mantenimiento periódico. El proveedor orienta sobre el intervalo adecuado durante la evaluación.",
  },

  // ── Inyectables ───────────────────────────────────────────────────────────
  {
    category: "Inyectables",
    question: "¿Los inyectables metabólicos reducen grasa directamente?",
    answer:
      "No. Los inyectables metabólicos (L-Carnitina, Lipo Mino MIC, MIC) son complementos de apoyo al plan de bienestar. Su función es apoyar procesos metabólicos como el transporte de ácidos grasos y el metabolismo hepático de lípidos. No reducen grasa directamente ni reemplazan la nutrición y el ejercicio.",
  },
  {
    category: "Inyectables",
    question: "¿Qué diferencia hay entre L-Carnitina, Lipo Mino MIC y MIC?",
    answer:
      "L-Carnitina apoya el transporte de ácidos grasos hacia la mitocondria. MIC (Metionina, Inositol, Colina) apoya el metabolismo hepático de lípidos. Lipo Mino MIC combina los compuestos MIC con vitaminas del complejo B. El proveedor selecciona la formulación más apropiada según tu perfil.",
  },
  {
    category: "Inyectables",
    question: "¿Tienen contraindicaciones?",
    answer:
      "Sí. Condiciones hepáticas, alergias a componentes, ciertos medicamentos y condiciones médicas activas pueden ser contraindicaciones. La evaluación médica revisa estos factores antes de iniciar cualquier protocolo inyectable.",
  },
  {
    category: "Inyectables",
    question: "¿Son medicamentos aprobados por FDA?",
    answer:
      "Algunos componentes están disponibles en formulaciones compuestas. Los medicamentos formulados no son aprobados por FDA como medicamentos de referencia. Su uso requiere evaluación médica individual, prescripción profesional y revisión de riesgos, beneficios y contraindicaciones.",
  },
  {
    category: "Inyectables",
    question: "¿Con qué frecuencia se aplican?",
    answer:
      "La frecuencia depende del formulado seleccionado y el plan del paciente. El proveedor determina el intervalo adecuado durante la evaluación inicial y puede ajustarlo según la respuesta.",
  },

  // ── Precios ───────────────────────────────────────────────────────────────
  {
    category: "Precios",
    question: "¿Cuánto cuesta el Programa Metabólico Integral?",
    answer:
      "El Programa Metabólico Integral tiene un precio base de $400/mes, que incluye consulta médica, plan nutricional, inyectables de apoyo cuando aplican y seguimiento de métricas. Las terapias formuladas bajo prescripción tienen costo adicional según el protocolo específico. El precio final se determina en la evaluación.",
  },
  {
    category: "Precios",
    question: "¿Cuánto cuestan las sesiones de láser diodo?",
    answer:
      "Los precios de referencia por sesión individual van desde $20 (bigote) hasta $100 (piernas completas, espalda). Los paquetes de sesiones ofrecen mejor valor por sesión. El precio final varía según evaluación, zona y plan recomendado.",
  },
  {
    category: "Precios",
    question: "¿Aceptan seguro médico?",
    answer:
      "Los programas de wellness y medicina metabólica de Aurum Nova son servicios privados y actualmente no se facturan a planes médicos. Contáctanos para información actualizada sobre modalidades de pago disponibles.",
  },
  {
    category: "Precios",
    question: "¿Cuánto cuesta la evaluación inicial?",
    answer:
      "El costo de la evaluación médica inicial se informa durante el primer contacto. Contáctanos por WhatsApp para orientación sobre precios de consulta y coordinación de tu evaluación.",
  },
  {
    category: "Precios",
    question: "¿Hay planes de pago disponibles?",
    answer:
      "Contacta al equipo para información sobre modalidades de pago disponibles. Los detalles sobre opciones de financiamiento o planes de pago se discuten durante el proceso de consulta.",
  },
  {
    category: "Precios",
    question: "¿Qué incluye la sueroterapia y cuánto cuesta?",
    answer:
      "El costo de la sueroterapia depende del protocolo (NAD+ o Myers) y si se incluyen add-ons. Los precios se informan durante la evaluación médica según el protocolo recomendado para tu caso. Contacta al equipo para orientación inicial sobre rangos de precio.",
  },

  // ── Seguridad ─────────────────────────────────────────────────────────────
  {
    category: "Seguridad",
    question: "¿Cómo determinan si soy candidato seguro para un programa?",
    answer:
      "La evaluación médica revisa historial clínico completo, medicamentos actuales, posibles interacciones, contraindicaciones absolutas y relativas, y factores de riesgo individuales. Si no eres candidato para un programa específico, el proveedor te lo comunica con claridad y puede orientarte hacia alternativas apropiadas.",
  },
  {
    category: "Seguridad",
    question: "¿Qué contraindicaciones existen para las terapias IV?",
    answer:
      "Contraindicaciones generales para sueroterapia incluyen insuficiencia renal o hepática significativa, trastornos cardíacos no controlados, alergias a componentes de la infusión y ciertos trastornos hemáticos. La evaluación individual identifica contraindicaciones específicas para cada paciente.",
  },
  {
    category: "Seguridad",
    question: "¿Los programas son seguros si tomo medicamentos prescritos?",
    answer:
      "La revisión de medicamentos actuales es parte esencial de la evaluación. Algunas combinaciones requieren precauciones adicionales o son contraindicaciones. Por eso es fundamental informar al proveedor sobre todos los medicamentos, suplementos y terapias actuales antes de iniciar cualquier programa.",
  },
  {
    category: "Seguridad",
    question: "¿Qué sucede si tengo una reacción adversa?",
    answer:
      "Las sesiones de sueroterapia se realizan bajo supervisión clínica para monitorear y responder a reacciones. Para programas ambulatorios, se orienta al paciente sobre señales de alerta y cómo contactar al equipo. En caso de emergencia médica, llama al 911 o acude al área de emergencias más cercana.",
  },
  {
    category: "Seguridad",
    question: "¿Los medicamentos formulados son seguros?",
    answer:
      "Los medicamentos formulados no son aprobados por FDA ni equivalentes genéricos de medicamentos aprobados por FDA. No han sido evaluados por FDA en cuanto a seguridad, efectividad ni calidad en su forma compuesta. Su uso requiere evaluación médica individual, prescripción profesional y revisión de riesgos y beneficios con el proveedor.",
  },
  {
    category: "Seguridad",
    question: "¿Cuándo debo ir a emergencias en lugar de contactar a Aurum Nova?",
    answer:
      "Ante cualquier emergencia médica — dolor severo, dificultad para respirar, reacción alérgica grave, pérdida de conciencia u otros síntomas urgentes — llama al 911 o acude inmediatamente al área de emergencias más cercana. Aurum Nova no es un servicio de emergencias médicas.",
  },
];

export const faqCategories = [
  "Evaluación",
  "Programa Metabólico Integral",
  "Láser Diodo",
  "Sueroterapia",
  "Inyectables",
  "Precios",
  "Seguridad",
];
