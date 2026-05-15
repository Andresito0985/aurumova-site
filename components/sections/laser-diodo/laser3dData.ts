import {
  Activity,
  MonitorDot,
  ScanLine,
  ShieldCheck,
  SlidersHorizontal,
  Snowflake,
  type LucideIcon,
} from "lucide-react";

export interface LaserFeatureMarker {
  top: string;
  left: string;
}

export interface LaserFeature {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  /**
   * Approximate hotspot position over the 3D viewer when a real GLB is loaded.
   * Used only by the live model viewer if `showHotspots` is enabled. The
   * fallback never paints these to avoid misalignment with a flat photo.
   */
  markerPosition: LaserFeatureMarker;
}

export const laserFeatures: LaserFeature[] = [
  {
    id: "multi-wavelength",
    eyebrow: "Tecnología diodo",
    title: "Tecnología multidiodo",
    description:
      "Longitudes de onda diseñadas para trabajar distintas profundidades y características del folículo piloso.",
    icon: Activity,
    markerPosition: { top: "58%", left: "52%" },
  },
  {
    id: "personalized-settings",
    eyebrow: "Personalización inteligente",
    title: "Parámetros personalizados",
    description:
      "Ajustes según área, tipo de piel, densidad y características del vello.",
    icon: SlidersHorizontal,
    markerPosition: { top: "42%", left: "48%" },
  },
  {
    id: "contact-cooling",
    eyebrow: "Enfriamiento avanzado",
    title: "Contacto frío constante",
    description:
      "Enfriamiento por contacto que ayuda a mejorar la comodidad durante la sesión.",
    icon: Snowflake,
    markerPosition: { top: "34%", left: "72%" },
  },
  {
    id: "zone-precision",
    eyebrow: "Tratamiento por área",
    title: "Precisión por zona",
    description:
      "Configuración adaptada a áreas como rostro, axilas, bikini, piernas y espalda.",
    icon: ScanLine,
    markerPosition: { top: "50%", left: "64%" },
  },
  {
    id: "smart-interface",
    eyebrow: "Control visual",
    title: "Interfaz inteligente",
    description:
      "Pantalla intuitiva que permite seleccionar área, tipo de piel y características del vello.",
    icon: MonitorDot,
    markerPosition: { top: "30%", left: "44%" },
  },
  {
    id: "clinical-protocols",
    eyebrow: "Seguridad clínica",
    title: "Protocolos clínicos",
    description:
      "Evaluación previa y parámetros controlados para una experiencia responsable.",
    icon: ShieldCheck,
    markerPosition: { top: "68%", left: "44%" },
  },
];

export const laser3DCopy = {
  badge: "Tecnología láser avanzada",
  title: "Una experiencia láser más precisa, moderna y personalizada",
  subtitle:
    "Explora nuestra plataforma de láser diodo y conoce cómo adaptamos cada sesión según tu piel, vello y área de tratamiento.",
  body:
    "En Aurum Nova combinamos tecnología multidiodo, enfriamiento por contacto y parámetros individualizados para ofrecer una experiencia de depilación láser más cómoda, visualmente guiada y clínicamente responsable.",
  ctaPrimary: "Agendar evaluación",
  ctaSecondary: "Explorar tecnología",
  microcopy:
    "Cada tratamiento requiere evaluación previa. Los resultados y parámetros pueden variar según las características de cada paciente.",
  whatsappMessage:
    "Hola, quiero agendar una evaluación de láser diodo en Aurum Nova. Me gustaría conocer cómo personalizan la sesión según mi piel y zona.",
};

export const laserModelPaths = {
  machine: "/models/aurum-laser-machine.glb",
  handpiece: "/models/aurum-laser-handpiece.glb",
};
