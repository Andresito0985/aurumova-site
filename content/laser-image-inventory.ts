export type LaserImageCategory = "machine" | "handpiece" | "room" | "results" | "review-needed";

export type LaserImageOrientation = "landscape" | "portrait" | "near-square";

export interface LaserImageInventoryItem {
  id: string;
  originalFilename: string;
  newFilename: string;
  publicPath: string;
  category: LaserImageCategory;
  width: number;
  height: number;
  orientation: LaserImageOrientation;
  reviewNotes: string;
}

export const laserImageInventory = [
  {
    "id": "laser-machine-01",
    "originalFilename": "4.png",
    "newFilename": "laser-machine-01.png",
    "category": "machine",
    "reviewNotes": "Full laser machine, handpiece, and parameter UI composition. Safe as machine asset; review embedded claims/copy before public placement.",
    "publicPath": "/images/laser/machine/laser-machine-01.png",
    "width": 1536,
    "height": 1024,
    "orientation": "landscape"
  },
  {
    "id": "laser-handpiece-01",
    "originalFilename": "Camara de enfriamiento .png",
    "newFilename": "laser-handpiece-01.png",
    "category": "handpiece",
    "reviewNotes": "Close-up cooling-tip/handpiece asset. Review embedded copy before public placement.",
    "publicPath": "/images/laser/handpiece/laser-handpiece-01.png",
    "width": 1536,
    "height": 1024,
    "orientation": "landscape"
  },
  {
    "id": "laser-handpiece-02",
    "originalFilename": "Equipo Intiutivo .png",
    "newFilename": "laser-handpiece-02.png",
    "category": "handpiece",
    "reviewNotes": "Portrait handpiece product asset. Filename typo retained only in originalFilename; copied name is web-safe.",
    "publicPath": "/images/laser/handpiece/laser-handpiece-02.png",
    "width": 1086,
    "height": 1448,
    "orientation": "portrait"
  },
  {
    "id": "laser-machine-02",
    "originalFilename": "Foto principal .png",
    "newFilename": "laser-machine-02.png",
    "category": "machine",
    "reviewNotes": "Wide hero-style laser machine composition. Review embedded claims/copy before public placement.",
    "publicPath": "/images/laser/machine/laser-machine-02.png",
    "width": 1717,
    "height": 916,
    "orientation": "landscape"
  },
  {
    "id": "laser-room-01",
    "originalFilename": "Modelo ejemplo .png",
    "newFilename": "laser-room-01.png",
    "category": "room",
    "reviewNotes": "Treatment-room action image with visible patient body area but no face. Confirm consent and crop safety before public use.",
    "publicPath": "/images/laser/room/laser-room-01.png",
    "width": 1536,
    "height": 1024,
    "orientation": "landscape"
  },
  {
    "id": "laser-machine-03",
    "originalFilename": "Partametros personalizados .png",
    "newFilename": "laser-machine-03.png",
    "category": "machine",
    "reviewNotes": "Machine interface/parameter composition. Original filename contains typo; review embedded copy before public placement.",
    "publicPath": "/images/laser/machine/laser-machine-03.png",
    "width": 1536,
    "height": 1024,
    "orientation": "landscape"
  },
  {
    "id": "laser-machine-04",
    "originalFilename": "image.png",
    "newFilename": "laser-machine-04.png",
    "category": "machine",
    "reviewNotes": "Machine interface/parameter composition similar to laser-machine-03; possible duplicate/variant. Human should choose preferred version before use.",
    "publicPath": "/images/laser/machine/laser-machine-04.png",
    "width": 1535,
    "height": 1024,
    "orientation": "landscape"
  },
  {
    "id": "axila-case-01-before",
    "originalFilename": "Axila Before.png",
    "newFilename": "axila-case-01-before.png",
    "category": "results",
    "reviewNotes": "Likely before image for axila case based on filename. Do not publish until consent, pairing, zone, sessions, and timeframe are verified.",
    "publicPath": "/images/laser/results/axila-case-01-before.png",
    "width": 1295,
    "height": 1214,
    "orientation": "landscape"
  },
  {
    "id": "axila-case-01-after",
    "originalFilename": "Axila After.png",
    "newFilename": "axila-case-01-after.png",
    "category": "results",
    "reviewNotes": "Likely after image for axila case based on filename. Do not publish until consent, pairing, zone, sessions, and timeframe are verified.",
    "publicPath": "/images/laser/results/axila-case-01-after.png",
    "width": 1293,
    "height": 1216,
    "orientation": "landscape"
  },
  {
    "id": "bikini-case-01-before",
    "originalFilename": "Bikini Before.png",
    "newFilename": "bikini-case-01-before.png",
    "category": "results",
    "reviewNotes": "Likely before image for bikini case based on filename. Sensitive treatment area; do not publish until explicit consent and compliance review are complete.",
    "publicPath": "/images/laser/results/bikini-case-01-before.png",
    "width": 1312,
    "height": 1199,
    "orientation": "landscape"
  },
  {
    "id": "bikini-case-01-after",
    "originalFilename": "Bikini After.png",
    "newFilename": "bikini-case-01-after.png",
    "category": "results",
    "reviewNotes": "Likely after image for bikini case based on filename. Sensitive treatment area; do not publish until explicit consent and compliance review are complete.",
    "publicPath": "/images/laser/results/bikini-case-01-after.png",
    "width": 1305,
    "height": 1205,
    "orientation": "landscape"
  },
  {
    "id": "bozo-case-01-before",
    "originalFilename": "Bozo before.png",
    "newFilename": "bozo-case-01-before.png",
    "category": "results",
    "reviewNotes": "Likely before image for bozo/upper-lip case based on filename. May include identifiable facial area; do not publish until consent and compliance review are complete.",
    "publicPath": "/images/laser/results/bozo-case-01-before.png",
    "width": 1302,
    "height": 1208,
    "orientation": "landscape"
  },
  {
    "id": "bozo-case-01-after",
    "originalFilename": "Bozo After.png",
    "newFilename": "bozo-case-01-after.png",
    "category": "results",
    "reviewNotes": "Likely after image for bozo/upper-lip case based on filename. May include identifiable facial area; do not publish until consent and compliance review are complete.",
    "publicPath": "/images/laser/results/bozo-case-01-after.png",
    "width": 1286,
    "height": 1223,
    "orientation": "landscape"
  },
  {
    "id": "espalda-case-01-before",
    "originalFilename": "Espalda Before.png",
    "newFilename": "espalda-case-01-before.png",
    "category": "results",
    "reviewNotes": "Likely before image for espalda case based on filename. Do not publish until consent, pairing, zone, sessions, and timeframe are verified.",
    "publicPath": "/images/laser/results/espalda-case-01-before.png",
    "width": 1280,
    "height": 1229,
    "orientation": "near-square"
  },
  {
    "id": "espalda-case-01-after",
    "originalFilename": "Espalda After.png",
    "newFilename": "espalda-case-01-after.png",
    "category": "results",
    "reviewNotes": "Likely after image for espalda case based on filename. Do not publish until consent, pairing, zone, sessions, and timeframe are verified.",
    "publicPath": "/images/laser/results/espalda-case-01-after.png",
    "width": 1300,
    "height": 1209,
    "orientation": "landscape"
  },
  {
    "id": "hombro-case-01-before",
    "originalFilename": "Hombro Before.png",
    "newFilename": "hombro-case-01-before.png",
    "category": "results",
    "reviewNotes": "Likely before image for hombro case based on filename. Do not publish until consent, pairing, zone, sessions, and timeframe are verified.",
    "publicPath": "/images/laser/results/hombro-case-01-before.png",
    "width": 1297,
    "height": 1213,
    "orientation": "landscape"
  },
  {
    "id": "hombro-case-01-after",
    "originalFilename": "Hombro after.png",
    "newFilename": "hombro-case-01-after.png",
    "category": "results",
    "reviewNotes": "Likely after image for hombro case based on filename. Do not publish until consent, pairing, zone, sessions, and timeframe are verified.",
    "publicPath": "/images/laser/results/hombro-case-01-after.png",
    "width": 1287,
    "height": 1222,
    "orientation": "landscape"
  },
  {
    "id": "review-needed-01",
    "originalFilename": "Logo.png",
    "newFilename": "review-needed-01.png",
    "category": "review-needed",
    "reviewNotes": "Logo/brand graphic, not a laser diode website photo. Review separately before deciding whether to move into brand assets.",
    "publicPath": "/images/laser/review-needed/review-needed-01.png",
    "width": 1774,
    "height": 887,
    "orientation": "landscape"
  },
  {
    "id": "review-needed-02",
    "originalFilename": "Modelo Weigth loss.png",
    "newFilename": "review-needed-02.png",
    "category": "review-needed",
    "reviewNotes": "Lifestyle/weight-loss model image with identifiable face; not laser-specific. Requires consent/source review before any public use.",
    "publicPath": "/images/laser/review-needed/review-needed-02.png",
    "width": 1023,
    "height": 1537,
    "orientation": "portrait"
  },
  {
    "id": "review-needed-03",
    "originalFilename": "Modelo y syringe .png",
    "newFilename": "review-needed-03.png",
    "category": "review-needed",
    "reviewNotes": "Injectable/syringe image, not laser-specific. Keep out of laser pages unless separately approved; review medication/compliance implications.",
    "publicPath": "/images/laser/review-needed/review-needed-03.png",
    "width": 1032,
    "height": 1523,
    "orientation": "portrait"
  }
] satisfies LaserImageInventoryItem[];
