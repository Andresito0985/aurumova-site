import { Card, CardHeader, CardTitle, CardDescription, CardAction, Badge, Button } from 'aurumova-site';

export function WithBadge() {
  return (
    <div style={{ padding: '8px', maxWidth: '360px' }}>
      <Card>
        <CardHeader>
          <CardTitle>Láser Diodo</CardTitle>
          <CardAction><Badge>Popular</Badge></CardAction>
          <CardDescription>Soprano ICE Titanium · hasta 6 zonas</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}

export function WithButton() {
  return (
    <div style={{ padding: '8px', maxWidth: '360px' }}>
      <Card>
        <CardHeader>
          <CardTitle>Programa Metabólico</CardTitle>
          <CardAction>
            <Button size="sm" variant="outline">Detalles</Button>
          </CardAction>
          <CardDescription>Seguimiento médico continuo</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
