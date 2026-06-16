import { Badge } from 'aurumova-site';

export function Default() {
  return <Badge>Nuevo</Badge>;
}

export function Variants() {
  return (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', padding: '8px' }}>
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="ghost">Ghost</Badge>
      <Badge variant="destructive">Destructivo</Badge>
    </div>
  );
}

export function UseCases() {
  return (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', padding: '8px' }}>
      <Badge>Programa activo</Badge>
      <Badge variant="secondary">Evaluación pendiente</Badge>
      <Badge variant="outline">Popular</Badge>
    </div>
  );
}
