// Inventory for the photo drop delivered on 2026-05-19 from "/Desktop/Web Fotos".
// Originals were copied (not moved) into the project. Items flagged review-needed
// or not-used are preserved on disk for human review but are NOT wired into any
// public page until explicitly approved.

export type WebsiteImageStatus = "approved" | "review-needed" | "not-used";

export type WebsiteImageOrientation = "portrait" | "landscape" | "square";

export type WebsiteImageCategory =
  | "home-hero"
  | "programa-metabolico"
  | "metabolic-dashboard"
  | "labs"
  | "laser-machine"
  | "laser-handpiece"
  | "laser-room"
  | "brand-editorial"
  | "review-needed";

export interface WebsiteImageInventoryItem {
  id: string;
  originalFilename: string;
  sourcePath: string;
  publicPath: string | null;
  category: WebsiteImageCategory;
  width: number;
  height: number;
  orientation: WebsiteImageOrientation;
  recommendedRoute: string | null;
  recommendedPlacement: string | null;
  alt: string | null;
  status: WebsiteImageStatus;
  notes: string;
}

export const websiteImageInventory = [
  {
    id: "laser-machine-02-clean",
    originalFilename: "Maquina oficial sin informativa.png",
    sourcePath: "/Users/andresalcantara/Desktop/Web Fotos/Maquina oficial sin informativa.png",
    publicPath: "/images/laser/machine/laser-machine-02-clean.png",
    category: "laser-machine",
    width: 1448,
    height: 1086,
    orientation: "landscape",
    recommendedRoute: "/laser-diodo",
    recommendedPlacement: "LaserHero background + LaserVisualStory 'experience' card",
    alt: "Equipo de láser diodo Aurum Nova con interfaz de personalización, sobre fondo oscuro premium.",
    status: "approved",
    notes:
      "Clean studio shot, no burned-in copy. Replaces laser-machine-02.png which had overlay text duplicating the page H1.",
  },
  {
    id: "laser-handpiece-01-clean",
    originalFilename: "Handle Con Maquina.png",
    sourcePath: "/Users/andresalcantara/Desktop/Web Fotos/Handle Con Maquina.png",
    publicPath: "/images/laser/handpiece/laser-handpiece-01-clean.png",
    category: "laser-handpiece",
    width: 1448,
    height: 1086,
    orientation: "landscape",
    recommendedRoute: "/laser-diodo",
    recommendedPlacement: "LaserVisualStory 'handpiece' card",
    alt: "Handpiece del láser diodo en primer plano con la consola difuminada al fondo.",
    status: "approved",
    notes:
      "Clean handpiece shot, no burned-in copy. Replaces laser-handpiece-01.png which had overlay text duplicating the card title.",
  },
  {
    id: "laser-machine-editorial-overlay",
    originalFilename: "Maquina Oficial.png",
    sourcePath: "/Users/andresalcantara/Desktop/Web Fotos/Maquina Oficial.png",
    publicPath: "/images/laser/review-needed/laser-machine-editorial-overlay.png",
    category: "review-needed",
    width: 1448,
    height: 769,
    orientation: "landscape",
    recommendedRoute: null,
    recommendedPlacement: null,
    alt: null,
    status: "review-needed",
    notes:
      "Editorial composition with Spanish headline 'Reducción de vello con tecnología diodo' burned into pixels. Useful as a brochure/social asset but inflexible on a responsive page; the clean version (laser-machine-02-clean) is preferred for the site.",
  },
  {
    id: "laser-handpiece-editorial-overlay",
    originalFilename: "Handle con informativa.png",
    sourcePath: "/Users/andresalcantara/Desktop/Web Fotos/Handle con informativa.png",
    publicPath: "/images/laser/review-needed/laser-handpiece-editorial-overlay.png",
    category: "review-needed",
    width: 1448,
    height: 1086,
    orientation: "landscape",
    recommendedRoute: null,
    recommendedPlacement: null,
    alt: null,
    status: "review-needed",
    notes:
      "Annotated editorial slide ('Enfriamiento de alta gama') with burned-in callouts. Better suited to brochures/IG carousels than to responsive web cards.",
  },
  {
    id: "laser-handpiece-closeup-overlay",
    originalFilename: "handle close up.png",
    sourcePath: "/Users/andresalcantara/Desktop/Web Fotos/handle close up.png",
    publicPath: "/images/laser/review-needed/laser-handpiece-closeup-overlay.png",
    category: "review-needed",
    width: 1448,
    height: 1086,
    orientation: "landscape",
    recommendedRoute: null,
    recommendedPlacement: null,
    alt: null,
    status: "review-needed",
    notes:
      "Close-up handpiece editorial slide with technical callouts in Spanish. Same reasoning as -overlay variants; keep for offline materials, not the live site.",
  },
  {
    id: "incoming-model-fitness",
    originalFilename: "Modelo Weigth loss.png",
    sourcePath: "/Users/andresalcantara/Desktop/Web Fotos/Modelo Weigth loss.png",
    publicPath: "/images/review-needed/incoming-model-fitness.png",
    category: "review-needed",
    width: 1024,
    height: 1280,
    orientation: "portrait",
    recommendedRoute: null,
    recommendedPlacement: null,
    alt: null,
    status: "not-used",
    notes:
      "Identifiable model in athletic wear. Violates project rules: no identifiable patient/person images without explicit approval, no unrealistic fitness/body-transformation imagery, no weight-loss before/after framing. Kept on disk under review-needed for the team to decide separately.",
  },
  {
    id: "incoming-model-syringe",
    originalFilename: "Modelo de inyectable .png",
    sourcePath: "/Users/andresalcantara/Desktop/Web Fotos/Modelo de inyectable .png",
    publicPath: "/images/review-needed/incoming-model-syringe.png",
    category: "review-needed",
    width: 1024,
    height: 1280,
    orientation: "portrait",
    recommendedRoute: null,
    recommendedPlacement: null,
    alt: null,
    status: "not-used",
    notes:
      "Hands holding a syringe with 'Aurum Nova' label against bare torso. Violates project rules: no injection close-ups, no syringe-focused images, no medication-style labels. Compliance risk — keep out of all public surfaces.",
  },
] satisfies WebsiteImageInventoryItem[];

export const websiteImageInventoryByStatus = {
  approved: websiteImageInventory.filter((item) => item.status === "approved"),
  reviewNeeded: websiteImageInventory.filter((item) => item.status === "review-needed"),
  notUsed: websiteImageInventory.filter((item) => item.status === "not-used"),
} as const;
