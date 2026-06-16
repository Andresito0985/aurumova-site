import { Card, CardHeader, CardTitle, CardDescription } from 'aurumova-site';

export function Default() {
  return (
    <div style={{ padding: '8px', maxWidth: '360px' }}>
      <Card>
        <CardHeader>
          <CardTitle>Programa Metabólico</CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
}

export function Sizes() {
  return (
    <div style={{ padding: '8px', display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '360px' }}>
      <Card>
        <CardHeader>
          <CardTitle>Título en Card default</CardTitle>
          <CardDescription>Descripción de apoyo</CardDescription>
        </CardHeader>
      </Card>
      <Card size="sm">
        <CardHeader>
          <CardTitle>Título en Card pequeño</CardTitle>
          <CardDescription>Descripción de apoyo</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
