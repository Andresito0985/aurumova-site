export interface LaserResultCase {
  id: string;
  zone: string;
  beforeSrc: string;
  afterSrc: string;
  sessions: string;
  timeframe: string;
  consentConfirmed: boolean;
  caption?: string;
  aspectRatio?: string;
  objectPositionBefore?: string;
  objectPositionAfter?: string;
}

export const laserResults: LaserResultCase[] = [
  {
    id: "axila-case-01",
    zone: "Axila",
    beforeSrc: "/images/laser/results/axila-case-01-before.webp",
    afterSrc: "/images/laser/results/axila-case-01-after.webp",
    sessions: "4 sesiones",
    timeframe: "8–12 semanas",
    consentConfirmed: true,
    caption: "Ejemplo individual de progreso en una zona común de tratamiento.",
    aspectRatio: "aspect-[1294/1215]",
  },
  {
    id: "bikini-case-01",
    zone: "Bikini",
    beforeSrc: "/images/laser/results/bikini-case-01-before.webp",
    afterSrc: "/images/laser/results/bikini-case-01-after.webp",
    sessions: "4 sesiones",
    timeframe: "8–12 semanas",
    consentConfirmed: true,
    caption: "Comparación visual orientativa en zona de bikini.",
    aspectRatio: "aspect-[1308/1202]",
  },
  {
    id: "bozo-case-01",
    zone: "Bozo / labio superior",
    beforeSrc: "/images/laser/results/bozo-case-01-before.webp",
    afterSrc: "/images/laser/results/bozo-case-01-after.webp",
    sessions: "4 sesiones",
    timeframe: "8–12 semanas",
    consentConfirmed: true,
    caption: "Ejemplo de seguimiento en una zona facial pequeña.",
    aspectRatio: "aspect-[1294/1216]",
  },
  {
    id: "espalda-case-01",
    zone: "Espalda",
    beforeSrc: "/images/laser/results/espalda-case-01-before.webp",
    afterSrc: "/images/laser/results/espalda-case-01-after.webp",
    sessions: "4 sesiones",
    timeframe: "8–12 semanas",
    consentConfirmed: true,
    caption: "Ejemplo visual en zona amplia con densidad de vello variable.",
    aspectRatio: "aspect-[1290/1219]",
  },
  {
    id: "hombro-case-01",
    zone: "Hombro",
    beforeSrc: "/images/laser/results/hombro-case-01-before.webp",
    afterSrc: "/images/laser/results/hombro-case-01-after.webp",
    sessions: "4 sesiones",
    timeframe: "8–12 semanas",
    consentConfirmed: true,
    caption: "Comparación orientativa en zona localizada.",
    aspectRatio: "aspect-[1292/1218]",
  },
];
