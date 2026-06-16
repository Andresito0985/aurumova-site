import { FAQSection } from 'aurumova-site';

const laserFaqs = [
  {
    question: '¿Cuántas sesiones necesito para ver resultados?',
    answer: 'La mayoría de los pacientes observan una reducción significativa a partir de la tercera o cuarta sesión. El número total depende del área tratada, el tipo de vello y el tono de piel.',
  },
  {
    question: '¿Es seguro para todo tipo de piel?',
    answer: 'Sí. La tecnología Soprano ICE Titanium está aprobada para todos los fototipos, incluyendo piel oscura (Fitzpatrick VI). El médico evalúa el caso antes de comenzar.',
  },
  {
    question: '¿Duele el tratamiento?',
    answer: 'El sistema ICE incluye enfriamiento continuo integrado. La mayoría de los pacientes describen una sensación de calor suave; es considerablemente más cómodo que otros métodos.',
  },
];

const metabolicFaqs = [
  {
    question: '¿El programa requiere una dieta muy restrictiva?',
    answer: 'No. Trabajamos con protocolos adaptados a tu perfil metabólico, estilo de vida y preferencias. El objetivo es sostenibilidad a largo plazo, no restricción extrema.',
  },
  {
    question: '¿Cuánto tiempo dura la evaluación inicial?',
    answer: 'La consulta inicial dura entre 60 y 90 minutos. Incluye análisis de composición corporal, revisión de historial clínico y diseño preliminar del protocolo.',
  },
];

export function LightVariant() {
  return (
    <FAQSection
      faqs={laserFaqs}
      title="Preguntas sobre Láser Diodo"
      subtitle="Respondemos las dudas más frecuentes sobre el tratamiento."
    />
  );
}

export function DarkVariant() {
  return (
    <FAQSection
      faqs={metabolicFaqs}
      title="Sobre el Programa Metabólico"
      variant="dark"
    />
  );
}
