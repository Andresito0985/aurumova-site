export type LaserVisualCategory = "machine" | "handpiece" | "room" | "technology";

export type LaserVisualPlacement = "hero" | "technology" | "handpiece" | "experience";

export interface LaserVisual {
  id: string;
  title: string;
  category: LaserVisualCategory;
  src: string;
  alt: string;
  purpose: string;
  placement: LaserVisualPlacement;
  priority: boolean;
  width: number;
  height: number;
  objectPosition?: string;
}

export const laserVisuals = [
  {
    id: "laser-room-treatment-hero",
    title: "Ambiente clínico de tratamiento",
    category: "room",
    src: "/images/laser/room/laser-room-01.png",
    alt: "Sesión de láser diodo en un ambiente clínico privado y premium.",
    purpose:
      "Imagen principal para comunicar privacidad, guía clínica y experiencia premium sin usar resultados de pacientes.",
    placement: "hero",
    priority: true,
    width: 1536,
    height: 1024,
    objectPosition: "center center",
  },
  {
    id: "laser-machine-interface-primary",
    title: "Interfaz de personalización láser",
    category: "technology",
    src: "/images/laser/machine/laser-machine-01.png",
    alt: "Equipo de láser diodo con interfaz de parámetros para evaluación por zona.",
    purpose:
      "Apoyar la explicación educativa sobre evaluación por zona, tipo de piel y densidad del vello.",
    placement: "technology",
    priority: false,
    width: 1536,
    height: 1024,
    objectPosition: "center center",
  },
  {
    id: "laser-handpiece-cooling",
    title: "Handpiece con enfriamiento por contacto",
    category: "handpiece",
    src: "/images/laser/handpiece/laser-handpiece-01.png",
    alt: "Handpiece de láser diodo con punta de contacto y sistema de enfriamiento.",
    purpose:
      "Mostrar la punta de contacto y el apoyo de enfriamiento usado para organizar la sesión por zonas.",
    placement: "handpiece",
    priority: false,
    width: 1536,
    height: 1024,
    objectPosition: "center center",
  },
  {
    id: "laser-machine-experience",
    title: "Equipo láser en sala premium",
    category: "machine",
    src: "/images/laser/machine/laser-machine-02.png",
    alt: "Equipo de láser diodo en una sala de tratamiento cálida y moderna.",
    purpose:
      "Refuerza la experiencia clínica, privada y guiada sin mostrar imágenes de resultados.",
    placement: "experience",
    priority: false,
    width: 1717,
    height: 916,
    objectPosition: "78% center",
  },
  {
    id: "laser-handpiece-product",
    title: "Detalle del handpiece",
    category: "handpiece",
    src: "/images/laser/handpiece/laser-handpiece-02.png",
    alt: "Detalle del handpiece de láser diodo para trabajo por zonas.",
    purpose:
      "Alternativa vertical para composiciones donde se necesita un detalle del equipo sin paciente.",
    placement: "handpiece",
    priority: false,
    width: 1086,
    height: 1448,
    objectPosition: "center center",
  },
  {
    id: "laser-machine-interface-secondary",
    title: "Parámetros personalizados",
    category: "technology",
    src: "/images/laser/machine/laser-machine-03.png",
    alt: "Pantalla de equipo láser con parámetros orientados por zona y tipo de piel.",
    purpose:
      "Alternativa de tecnología para secciones educativas sobre personalización de la sesión.",
    placement: "technology",
    priority: false,
    width: 1536,
    height: 1024,
    objectPosition: "center center",
  },
  {
    id: "laser-machine-interface-variant",
    title: "Vista de interfaz del equipo",
    category: "technology",
    src: "/images/laser/machine/laser-machine-04.png",
    alt: "Vista cercana de interfaz de láser diodo para planificación por área.",
    purpose:
      "Variante visual para futuras pruebas de composición o páginas internas del servicio.",
    placement: "technology",
    priority: false,
    width: 1535,
    height: 1024,
    objectPosition: "center center",
  },
] satisfies LaserVisual[];

export const laserVisualByPlacement = {
  hero: laserVisuals.find((visual) => visual.placement === "hero"),
  technology: laserVisuals.find((visual) => visual.id === "laser-machine-interface-primary"),
  handpiece: laserVisuals.find((visual) => visual.id === "laser-handpiece-cooling"),
  experience: laserVisuals.find((visual) => visual.id === "laser-machine-experience"),
} satisfies Record<LaserVisualPlacement, LaserVisual | undefined>;
