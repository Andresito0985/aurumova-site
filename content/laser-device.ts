export type LaserDeviceFeatureId =
  | "screen"
  | "handpiece"
  | "cooling"
  | "multi-wavelength"
  | "tracking"
  | "experience";

export interface LaserDeviceFeature {
  id: LaserDeviceFeatureId;
  eyebrow: string;
  title: string;
  description: string;
}

export interface LaserDeviceHotspot {
  id: LaserDeviceFeatureId;
  x: number;
  y: number;
}

export interface LaserDeviceView {
  id:
    | "front-3-4"
    | "front"
    | "right"
    | "left"
    | "device-on-cart"
    | "front-control"
    | "handpiece"
    | "handpiece-closeup"
    | "screen-closeup";
  label: string;
  imageSrc: string;
  alt: string;
  kind: "angle" | "detail";
  hotspots: LaserDeviceHotspot[];
}

export const laserDeviceFeatures: LaserDeviceFeature[] = [
  {
    id: "screen",
    eyebrow: "Pantalla táctil",
    title: "Interfaz de control",
    description:
      "Permite visualizar y ajustar parámetros de trabajo según la zona y evaluación clínica.",
  },
  {
    id: "handpiece",
    eyebrow: "Pieza de mano",
    title: "Pieza de mano ergonómica",
    description:
      "Diseñada para precisión, control y estabilidad durante la sesión.",
  },
  {
    id: "cooling",
    eyebrow: "Sistema de enfriamiento",
    title: "Contacto frío",
    description: "Ayuda a mejorar la comodidad durante el tratamiento.",
  },
  {
    id: "multi-wavelength",
    eyebrow: "Tecnología",
    title: "Tecnología diode multi-wavelength",
    description:
      "Permite adaptar el tratamiento a diferentes zonas y características del vello bajo evaluación profesional.",
  },
  {
    id: "tracking",
    eyebrow: "Seguimiento por zona",
    title: "Seguimiento progresivo",
    description:
      "Facilita documentar sesiones por zona y ajustar el plan según la respuesta del paciente.",
  },
  {
    id: "experience",
    eyebrow: "Proceso clínico",
    title: "Experiencia organizada",
    description:
      "Cada sesión se integra dentro de un proceso estructurado de evaluación, educación y seguimiento.",
  },
];

export const laserDeviceViews: LaserDeviceView[] = [
  {
    id: "front",
    label: "Frontal",
    imageSrc: "/images/laser-device/front.webp",
    alt: "Vista frontal de equipo láser diodo con pantalla y controles visibles.",
    kind: "angle",
    hotspots: [
      { id: "screen", x: 49, y: 35 },
      { id: "multi-wavelength", x: 50, y: 55 },
      { id: "tracking", x: 49, y: 76 },
    ],
  },
  {
    id: "front-3-4",
    label: "3/4",
    imageSrc: "/images/laser-device/front-3-4.webp",
    alt: "Vista diagonal de equipo láser diodo sin marcas visibles.",
    kind: "angle",
    hotspots: [
      { id: "screen", x: 38, y: 33 },
      { id: "handpiece", x: 77, y: 37 },
      { id: "cooling", x: 82, y: 31 },
    ],
  },
  {
    id: "right",
    label: "Derecha",
    imageSrc: "/images/laser-device/right.webp",
    alt: "Vista lateral derecha de equipo láser diodo con pieza de mano.",
    kind: "angle",
    hotspots: [
      { id: "handpiece", x: 75, y: 40 },
      { id: "cooling", x: 78, y: 31 },
      { id: "experience", x: 46, y: 74 },
    ],
  },
  {
    id: "left",
    label: "Izquierda",
    imageSrc: "/images/laser-device/left.webp",
    alt: "Vista lateral izquierda de equipo láser diodo sin marcas visibles.",
    kind: "angle",
    hotspots: [
      { id: "screen", x: 60, y: 33 },
      { id: "multi-wavelength", x: 44, y: 58 },
      { id: "experience", x: 48, y: 76 },
    ],
  },
  {
    id: "device-on-cart",
    label: "Equipo",
    imageSrc: "/images/laser-device/device-on-cart.webp",
    alt: "Equipo láser diodo completo sobre carro clínico.",
    kind: "angle",
    hotspots: [
      { id: "screen", x: 50, y: 28 },
      { id: "tracking", x: 50, y: 68 },
      { id: "experience", x: 50, y: 84 },
    ],
  },
  {
    id: "front-control",
    label: "Control",
    imageSrc: "/images/laser-device/front-control.webp",
    alt: "Detalle frontal de pantalla y pieza de mano de equipo láser diodo.",
    kind: "detail",
    hotspots: [
      { id: "screen", x: 41, y: 31 },
      { id: "handpiece", x: 69, y: 54 },
    ],
  },
  {
    id: "handpiece",
    label: "Handpiece",
    imageSrc: "/images/laser-device/handpiece.webp",
    alt: "Detalle de pieza de mano ergonómica de equipo láser diodo.",
    kind: "detail",
    hotspots: [
      { id: "handpiece", x: 48, y: 58 },
      { id: "cooling", x: 50, y: 22 },
    ],
  },
  {
    id: "handpiece-closeup",
    label: "Punta",
    imageSrc: "/images/laser-device/handpiece-closeup.webp",
    alt: "Detalle cercano de la punta de contacto de pieza de mano láser.",
    kind: "detail",
    hotspots: [
      { id: "cooling", x: 60, y: 36 },
      { id: "handpiece", x: 66, y: 68 },
    ],
  },
  {
    id: "screen-closeup",
    label: "Pantalla",
    imageSrc: "/images/laser-device/screen-closeup.webp",
    alt: "Detalle cercano de la interfaz de control de equipo láser diodo.",
    kind: "detail",
    hotspots: [
      { id: "screen", x: 50, y: 40 },
      { id: "tracking", x: 50, y: 72 },
    ],
  },
];

export const laserDeviceBenefits = [
  "Evaluación personalizada antes del tratamiento",
  "Parámetros ajustados según zona y objetivo",
  "Pieza de mano ergonómica",
  "Enfoque en comodidad durante la sesión",
  "Seguimiento progresivo por área tratada",
];

export const laserDeviceCopy = {
  eyebrow: "Tecnología Láser Diodo",
  title: "Precisión, comodidad y seguimiento en cada sesión",
  description:
    "Nuestro sistema de láser diodo permite trabajar diferentes zonas con un enfoque estructurado, ajustando parámetros según evaluación, tipo de vello, zona tratada y tolerancia del paciente.",
  disclaimer:
    "Los resultados pueden variar según tipo de vello, zona, fototipo, constancia del tratamiento y evaluación profesional.",
};
