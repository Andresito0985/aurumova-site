import { Button, Badge, Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, CardAction } from 'aurumova-site';

export function Default() {
  return (
    <div style={{ maxWidth: '360px', padding: '8px' }}>
      <Card>
        <CardHeader>
          <CardTitle>Programa Metabólico</CardTitle>
          <CardDescription>Seguimiento clínico personalizado</CardDescription>
        </CardHeader>
        <CardContent>
          <p style={{ fontSize: '14px', color: 'var(--muted-foreground)' }}>
            Evaluación inicial, protocolo diseñado por el médico y métricas reales a lo largo del proceso.
          </p>
        </CardContent>
        <CardFooter>
          <Button>Agendar evaluación</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export function WithAction() {
  return (
    <div style={{ maxWidth: '360px', padding: '8px' }}>
      <Card>
        <CardHeader>
          <CardTitle>Láser Diodo</CardTitle>
          <CardAction><Badge>Popular</Badge></CardAction>
          <CardDescription>Depilación definitiva con Soprano ICE Titanium</CardDescription>
        </CardHeader>
        <CardContent>
          <p style={{ fontSize: '14px', color: 'var(--muted-foreground)' }}>
            Hasta 6 zonas en una sesión. Apto para todo tipo de piel.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="outline">Ver paquetes</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export function SmallSize() {
  return (
    <div style={{ maxWidth: '320px', padding: '8px' }}>
      <Card size="sm">
        <CardHeader>
          <CardTitle>Sueroterapia NAD+</CardTitle>
          <CardDescription>Terapia de bienestar celular</CardDescription>
        </CardHeader>
        <CardContent>
          <p style={{ fontSize: '13px', color: 'var(--muted-foreground)' }}>Sesiones individuales disponibles.</p>
        </CardContent>
      </Card>
    </div>
  );
}
