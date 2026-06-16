import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button } from 'aurumova-site';

export function Default() {
  return (
    <div style={{ padding: '8px', maxWidth: '360px' }}>
      <Card>
        <CardHeader>
          <CardTitle>Programa Metabólico</CardTitle>
          <CardDescription>Seguimiento médico continuo</CardDescription>
        </CardHeader>
        <CardContent>
          <p style={{ margin: 0, fontSize: '14px', color: '#6B6B6B' }}>
            Protocolo diseñado a partir de métricas individuales.
          </p>
        </CardContent>
        <CardFooter>
          <Button>Agendar evaluación</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export function WithMultipleActions() {
  return (
    <div style={{ padding: '8px', maxWidth: '360px' }}>
      <Card>
        <CardHeader>
          <CardTitle>Láser Diodo</CardTitle>
          <CardDescription>Depilación definitiva</CardDescription>
        </CardHeader>
        <CardContent>
          <p style={{ margin: 0, fontSize: '14px', color: '#6B6B6B' }}>
            Hasta 6 zonas por sesión. Todos los tipos de piel.
          </p>
        </CardContent>
        <CardFooter style={{ gap: '8px' }}>
          <Button>Consultar</Button>
          <Button variant="outline">Ver paquetes</Button>
        </CardFooter>
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
        </CardHeader>
        <CardFooter>
          <Button size="sm" variant="ghost">Más información</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
