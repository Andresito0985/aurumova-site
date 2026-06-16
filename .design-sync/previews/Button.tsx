import { Button } from 'aurumova-site';

export function Default() {
  return <Button>Agendar consulta</Button>;
}

export function Variants() {
  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', padding: '8px' }}>
      <Button>Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  );
}

export function Sizes() {
  return (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap', padding: '8px' }}>
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button>Default</Button>
      <Button size="lg">Large</Button>
    </div>
  );
}

export function Disabled() {
  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', padding: '8px' }}>
      <Button disabled>Deshabilitado</Button>
      <Button variant="outline" disabled>Outline deshabilitado</Button>
    </div>
  );
}
