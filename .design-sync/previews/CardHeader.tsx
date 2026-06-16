import { Card, CardHeader, CardTitle, CardDescription, CardAction, Badge } from 'aurumova-site';

export function Default() {
  return (
    <div style={{ padding: '8px', maxWidth: '360px' }}>
      <Card>
        <CardHeader>
          <CardTitle>Programa Metabólico</CardTitle>
          <CardDescription>Seguimiento clínico personalizado</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}

export function WithAction() {
  return (
    <div style={{ padding: '8px', maxWidth: '360px' }}>
      <Card>
        <CardHeader>
          <CardTitle>Láser Diodo</CardTitle>
          <CardAction><Badge>Popular</Badge></CardAction>
          <CardDescription>Soprano ICE Titanium · Apto todo tipo de piel</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}

export function Compact() {
  return (
    <div style={{ padding: '8px', maxWidth: '320px' }}>
      <Card size="sm">
        <CardHeader>
          <CardTitle>Sueroterapia NAD+</CardTitle>
          <CardDescription>Bienestar celular</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
