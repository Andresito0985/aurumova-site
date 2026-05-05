export interface LaserResultDraftItem {
  id: string;
  zone: "pendiente";
  beforeSrc: string;
  afterSrc: string;
  sessions: "pendiente";
  timeframe: "pendiente";
  note: "pendiente";
  consentConfirmed: false;
  reviewStatus: "needs-human-review";
}

export const laserResultsDraft = [
  {
    "id": "axila-case-01",
    "zone": "pendiente",
    "beforeSrc": "/images/laser/results/axila-case-01-before.png",
    "afterSrc": "/images/laser/results/axila-case-01-after.png",
    "sessions": "pendiente",
    "timeframe": "pendiente",
    "note": "pendiente",
    "consentConfirmed": false,
    "reviewStatus": "needs-human-review"
  },
  {
    "id": "bikini-case-01",
    "zone": "pendiente",
    "beforeSrc": "/images/laser/results/bikini-case-01-before.png",
    "afterSrc": "/images/laser/results/bikini-case-01-after.png",
    "sessions": "pendiente",
    "timeframe": "pendiente",
    "note": "pendiente",
    "consentConfirmed": false,
    "reviewStatus": "needs-human-review"
  },
  {
    "id": "bozo-case-01",
    "zone": "pendiente",
    "beforeSrc": "/images/laser/results/bozo-case-01-before.png",
    "afterSrc": "/images/laser/results/bozo-case-01-after.png",
    "sessions": "pendiente",
    "timeframe": "pendiente",
    "note": "pendiente",
    "consentConfirmed": false,
    "reviewStatus": "needs-human-review"
  },
  {
    "id": "espalda-case-01",
    "zone": "pendiente",
    "beforeSrc": "/images/laser/results/espalda-case-01-before.png",
    "afterSrc": "/images/laser/results/espalda-case-01-after.png",
    "sessions": "pendiente",
    "timeframe": "pendiente",
    "note": "pendiente",
    "consentConfirmed": false,
    "reviewStatus": "needs-human-review"
  },
  {
    "id": "hombro-case-01",
    "zone": "pendiente",
    "beforeSrc": "/images/laser/results/hombro-case-01-before.png",
    "afterSrc": "/images/laser/results/hombro-case-01-after.png",
    "sessions": "pendiente",
    "timeframe": "pendiente",
    "note": "pendiente",
    "consentConfirmed": false,
    "reviewStatus": "needs-human-review"
  }
] satisfies LaserResultDraftItem[];
