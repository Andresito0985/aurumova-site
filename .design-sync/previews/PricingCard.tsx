import { PricingCard } from 'aurumova-site';

const basicPricing = {
  label: 'Programa Esencial',
  from: '$1,800',
  period: 'mes',
  description: 'Evaluación médica inicial + protocolo personalizado + seguimiento mensual.',
  includes: [
    'Consulta médica inicial completa',
    'Análisis de composición corporal',
    'Protocolo de nutrición individualizado',
    'Seguimiento mensual por videollamada',
  ],
  note: 'Duración mínima recomendada: 3 meses.',
};

const premiumPricing = {
  label: 'Programa Avanzado',
  from: '$3,200',
  period: 'mes',
  description: 'Panel metabólico completo + monitoreo continuo con glucómetro inteligente.',
  includes: [
    'Todo lo del Programa Esencial',
    'Panel metabólico avanzado (15 biomarcadores)',
    'Monitor continuo de glucosa (CGM) incluido',
    'Consulta quincenal presencial',
    'Ajuste dinámico de protocolo',
  ],
  disclaimer: 'Precio puede variar según perfil clínico. Consultar disponibilidad.',
};

export function Essential() {
  return (
    <div style={{ padding: '16px', maxWidth: '360px' }}>
      <PricingCard pricing={basicPricing} ctaHref="#contacto" />
    </div>
  );
}

export function Advanced() {
  return (
    <div style={{ padding: '16px', maxWidth: '360px' }}>
      <PricingCard
        pricing={premiumPricing}
        ctaHref="#contacto"
        ctaText="Consultar disponibilidad"
      />
    </div>
  );
}
