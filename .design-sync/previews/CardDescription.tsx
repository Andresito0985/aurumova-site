import { Card, CardHeader, CardTitle, CardDescription } from 'aurumova-site';

export function Default() {
  return (
    <div style={{ padding: '8px', maxWidth: '360px' }}>
      <Card>
        <CardHeader>
          <CardTitle>Láser Diodo</CardTitle>
          <CardDescription>Depilación definitiva con tecnología Soprano ICE Titanium</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}

export function MultiLine() {
  return (
    <div style={{ padding: '8px', maxWidth: '360px' }}>
      <Card>
        <CardHeader>
          <CardTitle>Programa Metabólico</CardTitle>
          <CardDescription>
            Evaluación clínica personalizada, monitoreo continuo y ajuste de protocolo según tu respuesta metabólica.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
