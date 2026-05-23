// Twitter card image — uses the same generator as opengraph-image.tsx.
//
// Next.js requires route segment config (runtime, dynamic, revalidate, etc.)
// to be declared literally in each route file so it can be statically
// analyzed at build time. We can re-use the default function via import,
// but the config constants below must live in this file directly.

import OpenGraphImage from "./opengraph-image";

export const alt =
  "Aurum Nova Wellness Clinic — Premium Medical Wellness, Arecibo Puerto Rico";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export const runtime = "nodejs";

export default OpenGraphImage;
