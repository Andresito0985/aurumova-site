import { PremiumComparisonTable } from 'aurumova-site';

const columns = [
  { title: 'Aurum Nova', subtitle: 'Evaluación avanzada', kicker: 'Aurum Nova' },
  { title: 'Panel general' },
];

const rows = [
  { label: 'Panel metabólico completo', values: ['yes', 'no'] },
  { label: 'Monitor continuo de glucosa (CGM)', values: ['yes', 'no'] },
  { label: 'Análisis de composición corporal', values: ['yes', { kind: 'text', text: 'Limitada' }] },
  { label: 'Seguimiento médico personalizado', values: ['yes', 'no'] },
  { label: 'Protocolo de nutrición individual', values: ['yes', 'limited'] },
  { label: 'Análisis hormonal avanzado', values: ['yes', 'no'] },
];

export function Default() {
  return (
    <PremiumComparisonTable
      eyebrow="Comparación clínica"
      title="Más precisión que un"
      titleHighlight="panel general"
      subtitle="Seleccionamos los biomarcadores según tu perfil clínico, no un protocolo genérico."
      columns={columns}
      rows={rows}
      featuredColumnIndex={0}
      disclaimer="Esta comparación es de carácter educativo. Los servicios incluidos varían según el programa seleccionado."
    />
  );
}

export function ThreeColumns() {
  return (
    <PremiumComparisonTable
      eyebrow="Comparación de servicios"
      title="Elige tu"
      titleHighlight="nivel de cuidado"
      columns={[
        { title: 'Aurum Nova Avanzado', kicker: 'Recomendado', subtitle: 'Programa completo' },
        { title: 'Aurum Nova Esencial' },
        { title: 'Clínica estética' },
      ]}
      rows={[
        { label: 'Evaluación médica inicial', values: ['yes', 'yes', 'no'] },
        { label: 'Monitor de glucosa continuo', values: ['yes', 'no', 'no'] },
        { label: 'Seguimiento quincenal', values: ['yes', 'limited', 'no'] },
      ]}
      featuredColumnIndex={0}
    />
  );
}
