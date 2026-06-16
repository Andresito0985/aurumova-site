import { Card, CardHeader, CardTitle, CardDescription, CardContent } from 'aurumova-site';

export function Default() {
  return (
    <div style={{ padding: '8px', maxWidth: '360px' }}>
      <Card>
        <CardHeader>
          <CardTitle>Programa Metabólico</CardTitle>
          <CardDescription>Evaluación clínica personalizada</CardDescription>
        </CardHeader>
        <CardContent>
          <p style={{ margin: 0, fontSize: '14px', color: '#6B6B6B', lineHeight: 1.6 }}>
            Diseñamos tu protocolo a partir de métricas reales: glucosa en ayuno, composición corporal,
            perfil lipídico y respuesta hormonal. Sin suposiciones.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export function WithList() {
  return (
    <div style={{ padding: '8px', maxWidth: '360px' }}>
      <Card>
        <CardHeader>
          <CardTitle>Incluye</CardTitle>
        </CardHeader>
        <CardContent>
          <ul style={{ margin: 0, padding: '0 0 0 16px', fontSize: '14px', color: '#3D3D3D', lineHeight: 2 }}>
            <li>Consulta médica inicial</li>
            <li>Análisis de composición corporal</li>
            <li>Protocolo individualizado</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
