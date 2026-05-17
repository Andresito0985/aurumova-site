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
    id: "laser-device-hero",
    title: "Equipo láser diodo",
    category: "machine",
    src: "/images/laser-device/front-3-4.webp",
    alt: "Equipo láser diodo en vista diagonal sin marcas visibles.",
    purpose:
      "Imagen principal del nuevo paquete visual del equipo, limpia y sin marcas visibles.",
    placement: "hero",
    priority: true,
    width: 1600,
    height: 1600,
    objectPosition: "center center",
  },
  {
    id: "laser-device-interface-primary",
    title: "Interfaz de personalización láser",
    category: "technology",
    src: "/images/laser-device/screen-closeup.webp",
    alt: "Detalle de interfaz de control de equipo láser diodo.",
    purpose:
      "Apoyar la explicación educativa sobre evaluación por zona, tipo de piel y densidad del vello.",
    placement: "technology",
    priority: false,
    width: 1600,
    height: 1600,
    objectPosition: "center center",
  },
  {
    id: "laser-device-handpiece-cooling",
    title: "Handpiece con enfriamiento por contacto",
    category: "handpiece",
    src: "/images/laser-device/handpiece-closeup.webp",
    alt: "Detalle de pieza de mano de equipo láser diodo.",
    purpose:
      "Mostrar la punta de contacto y el apoyo de enfriamiento usado para organizar la sesión por zonas.",
    placement: "handpiece",
    priority: false,
    width: 1600,
    height: 1600,
    objectPosition: "center center",
  },
  {
    id: "laser-device-experience",
    title: "Equipo láser sobre carro clínico",
    category: "machine",
    src: "/images/laser-device/device-on-cart.webp",
    alt: "Equipo láser diodo completo sobre carro clínico.",
    purpose:
      "Refuerza la experiencia clínica, privada y guiada sin mostrar imágenes de resultados.",
    placement: "experience",
    priority: false,
    width: 1600,
    height: 1600,
    objectPosition: "center center",
  },
  {
    id: "laser-device-handpiece-product",
    title: "Detalle del handpiece",
    category: "handpiece",
    src: "/images/laser-device/handpiece.webp",
    alt: "Pieza de mano de equipo láser diodo vista de perfil.",
    purpose:
      "Alternativa vertical para composiciones donde se necesita un detalle del equipo sin paciente.",
    placement: "handpiece",
    priority: false,
    width: 1600,
    height: 1600,
    objectPosition: "center center",
  },
  {
    id: "laser-device-interface-secondary",
    title: "Parámetros personalizados",
    category: "technology",
    src: "/images/laser-device/front-control.webp",
    alt: "Detalle frontal de pantalla y pieza de mano del equipo láser diodo.",
    purpose:
      "Alternativa de tecnología para secciones educativas sobre personalización de la sesión.",
    placement: "technology",
    priority: false,
    width: 1600,
    height: 1600,
    objectPosition: "center center",
  },
  {
    id: "laser-device-interface-variant",
    title: "Vista de interfaz del equipo",
    category: "technology",
    src: "/images/laser-device/front.webp",
    alt: "Vista frontal de equipo láser diodo sin marcas visibles.",
    purpose:
      "Variante visual para futuras pruebas de composición o páginas internas del servicio.",
    placement: "technology",
    priority: false,
    width: 1600,
    height: 1600,
    objectPosition: "center center",
  },
] satisfies LaserVisual[];

export const laserVisualByPlacement = {
  hero: laserVisuals.find((visual) => visual.placement === "hero"),
  technology: laserVisuals.find((visual) => visual.id === "laser-device-interface-primary"),
  handpiece: laserVisuals.find((visual) => visual.id === "laser-device-handpiece-cooling"),
  experience: laserVisuals.find((visual) => visual.id === "laser-device-experience"),
} satisfies Record<LaserVisualPlacement, LaserVisual | undefined>;
