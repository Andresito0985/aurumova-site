import { Separator } from 'aurumova-site';

export function Horizontal() {
  return (
    <div style={{ padding: '24px', width: '300px' }}>
      <p style={{ margin: '0 0 12px', fontSize: '14px', color: '#3D3D3D' }}>Arriba del separador</p>
      <Separator />
      <p style={{ margin: '12px 0 0', fontSize: '14px', color: '#3D3D3D' }}>Debajo del separador</p>
    </div>
  );
}

export function Vertical() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '24px', height: '48px' }}>
      <span style={{ fontSize: '14px', color: '#3D3D3D' }}>Consulta</span>
      <Separator orientation="vertical" />
      <span style={{ fontSize: '14px', color: '#3D3D3D' }}>Reserva</span>
      <Separator orientation="vertical" />
      <span style={{ fontSize: '14px', color: '#3D3D3D' }}>Contacto</span>
    </div>
  );
}

export function InCard() {
  return (
    <div style={{ padding: '24px', maxWidth: '320px' }}>
      <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '20px' }}>
        <p style={{ margin: '0 0 8px', fontWeight: 600, fontSize: '14px' }}>Programa Metabólico</p>
        <Separator />
        <p style={{ margin: '8px 0 0', fontSize: '13px', color: '#6B6B6B' }}>Desde $1,800/mes</p>
      </div>
    </div>
  );
}
