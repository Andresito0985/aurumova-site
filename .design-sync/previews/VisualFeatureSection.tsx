import * as React from 'react';
import { VisualFeatureSection } from 'aurumova-site';

// Placeholder visual — a styled aspect-ratio box simulating an image slot.
function PlaceholderVisual({ label }: { label: string }) {
  return (
    <div style={{
      aspectRatio: '4/5',
      background: 'linear-gradient(135deg, #F4EBD0 0%, #E8E4DA 100%)',
      borderRadius: '24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    }}>
      <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C9A84C' }}>
        {label}
      </span>
    </div>
  );
}

export function WhiteVariant() {
  return (
    <VisualFeatureSection
      eyebrow="Tecnología"
      headline="Soprano ICE"
      highlight="Titanium"
      body="El sistema de depilación láser más avanzado disponible. Combina tres longitudes de onda en una sola pasada para una cobertura total del ciclo capilar."
      bullets={[
        'Apto para todos los fototipos (I–VI)',
        'Sistema de enfriamiento continuo integrado',
        'Hasta 6 zonas por sesión',
      ]}
      visual={<PlaceholderVisual label="Imagen del equipo" />}
      cta={{ label: 'Ver paquetes', href: '#planes-laser' }}
    />
  );
}

export function DarkVariant() {
  return (
    <VisualFeatureSection
      eyebrow="Programa Metabólico"
      headline="Monitor continuo de"
      highlight="glucosa"
      body="El glucómetro inteligente registra tu respuesta metabólica en tiempo real, 24 horas al día, sin punciones adicionales."
      supportingText="Los datos se analizan semanalmente con tu médico para ajustar el protocolo de forma dinámica."
      visual={<PlaceholderVisual label="Monitor CGM" />}
      cta={{ label: 'Conocer el programa', href: '#metabolico', intent: 'primary' }}
      variant="dark"
      reverse
    />
  );
}

export function CreamVariant() {
  return (
    <VisualFeatureSection
      eyebrow="Faciales Clínicos"
      headline="HydraFacial"
      highlight="MD"
      body="Limpieza profunda, extracción sin irritación y nutrición intensiva. Un protocolo médico en 40 minutos de sesión."
      bullets={[
        'Sin tiempo de recuperación',
        'Resultado visible desde la primera sesión',
        'Personalizable con boosters clínicos',
      ]}
      visual={<PlaceholderVisual label="Facial treatment" />}
      variant="cream"
    />
  );
}
