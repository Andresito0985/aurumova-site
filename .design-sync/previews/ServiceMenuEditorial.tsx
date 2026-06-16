import { ServiceMenuEditorial } from 'aurumova-site';

const browItems = [
  { name: 'Diseño y depilación de cejas', price: '$450', description: 'Mapeo geométrico + eliminación de pelo por hilo o cera.' },
  { name: 'Laminado de cejas', price: '$850', description: 'Fijación y nutrición de vello. Resultado natural con durabilidad de 4-6 semanas.', featured: true, featuredLabel: 'Signature' },
  { name: 'Lifting de pestañas', price: '$750', description: 'Curvado permanente con efecto "lash lift". Sin extensiones.' },
  { name: 'Tinte de cejas o pestañas', price: '$350' },
];

const facialItems = [
  { name: 'HydraFacial MD — Esencial', price: '$1,200', description: 'Limpieza profunda + extracción + hidratación. 40 min.' },
  { name: 'HydraFacial MD — Intensivo', price: '$1,800', description: 'Protocolo completo con booster de vitamina C o péptidos.', featured: true, featuredLabel: 'Más solicitado' },
  { name: 'Peeling químico superficial', price: '$950', description: 'Ácido mandélico o glicólico. Según fototipos I–IV.' },
  { name: 'Consulta de diagnóstico facial', price: '$500', description: 'Análisis de piel con lente de aumento + diseño de protocolo personalizado.' },
];

export function GraphiteVariant() {
  return (
    <ServiceMenuEditorial
      eyebrow="Boutique Brow & Lash Studio"
      title="Diseño de cejas y"
      titleHighlight="pestañas"
      subtitle="Tratamientos de precisión que definen tu mirada sin pasar por una sala de cirugía."
      items={browItems}
      footnote="Los servicios pueden combinarse según el caso. Consulta disponibilidad."
    />
  );
}

export function CreamVariant() {
  return (
    <ServiceMenuEditorial
      eyebrow="Faciales Clínicos"
      title="Protocolos de"
      titleHighlight="cuidado de piel"
      items={facialItems}
      variant="cream"
      footnote="Precios sujetos a cambio. Paquetes y descuentos disponibles al adquirir sesiones."
    />
  );
}
