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
    "id": "laser-device-front-3-4",
    "originalFilename": "01_three_quarter_product_render_clean.webp",
    "newFilename": "front-3-4.webp",
    "category": "machine",
    "reviewNotes": "Cleaned three-quarter product view for the pseudo-3D experience. Visible branding/UI text has been softened.",
    "publicPath": "/images/laser-device/front-3-4.webp",
    "width": 1600,
    "height": 1600,
    "orientation": "near-square"
  },
  {
    "id": "laser-device-front",
    "originalFilename": "03_front_full_body_clean.webp",
    "newFilename": "front.webp",
    "category": "machine",
    "reviewNotes": "Cleaned frontal device view for the pseudo-3D sequence.",
    "publicPath": "/images/laser-device/front.webp",
    "width": 1600,
    "height": 1600,
    "orientation": "near-square"
  },
  {
    "id": "laser-device-right",
    "originalFilename": "05_three_quarter_right_body_clean.webp",
    "newFilename": "right.webp",
    "category": "machine",
    "reviewNotes": "Cleaned right-side device view.",
    "publicPath": "/images/laser-device/right.webp",
    "width": 1600,
    "height": 1600,
    "orientation": "near-square"
  },
  {
    "id": "laser-device-left",
    "originalFilename": "10_three_quarter_left_body_clean.webp",
    "newFilename": "left.webp",
    "category": "machine",
    "reviewNotes": "Cleaned left-side device view.",
    "publicPath": "/images/laser-device/left.webp",
    "width": 1600,
    "height": 1600,
    "orientation": "near-square"
  },
  {
    "id": "laser-device-cart",
    "originalFilename": "04_full_machine_cart_front_clean.webp",
    "newFilename": "device-on-cart.webp",
    "category": "machine",
    "reviewNotes": "Cleaned full-device view on cart for context and scale.",
    "publicPath": "/images/laser-device/device-on-cart.webp",
    "width": 1600,
    "height": 1600,
    "orientation": "near-square"
  },
  {
    "id": "laser-device-handpiece",
    "originalFilename": "06_handpiece_side_profile_clean.webp",
    "newFilename": "handpiece.webp",
    "category": "handpiece",
    "reviewNotes": "Cleaned handpiece profile view.",
    "publicPath": "/images/laser-device/handpiece.webp",
    "width": 1600,
    "height": 1600,
    "orientation": "near-square"
  },
  {
    "id": "laser-device-handpiece-closeup",
    "originalFilename": "07_handpiece_contact_tip_closeup_clean.webp",
    "newFilename": "handpiece-closeup.webp",
    "category": "handpiece",
    "reviewNotes": "Cleaned close-up of the handpiece contact area.",
    "publicPath": "/images/laser-device/handpiece-closeup.webp",
    "width": 1600,
    "height": 1600,
    "orientation": "near-square"
  },
  {
    "id": "laser-device-screen-closeup",
    "originalFilename": "09_screen_closeup_front_clean.webp",
    "newFilename": "screen-closeup.webp",
    "category": "machine",
    "reviewNotes": "Cleaned screen close-up with softened visible UI text.",
    "publicPath": "/images/laser-device/screen-closeup.webp",
    "width": 1600,
    "height": 1600,
    "orientation": "near-square"
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
