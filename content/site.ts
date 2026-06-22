export const WHATSAPP_NUMBER = "19396410504";
export const CALL_NUMBER = "19396410504";
export const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/FzhFftbpyGhMNzvE6";

export const siteConfig = {
  name: "Aurum Nova Wellness Clinic",
  tagline: "Medicina Metabólica de Precisión",
  description:
    "Clínica wellness en Arecibo, Puerto Rico. Programa metabólico integral, depilación láser diodo, sueroterapia NAD+, inyectables metabólicos y seguimiento clínico personalizado.",
  phone: "+1 (939) 641-0504",
  phoneRaw: CALL_NUMBER,
  callNumber: CALL_NUMBER,
  callDisplay: "+1 (939) 641-0504",
  whatsapp: WHATSAPP_NUMBER,
  whatsappDisplay: "+1 (939) 641-0504",
  instagram: "@aurumnovawc",
  instagramUrl: "https://instagram.com/aurumnovawc",
  email: "aurumnovawc@gmail.com",
  address: "16 Calle Ana Lens Susoni, Infinity Health Shared Spaces, Arecibo, Puerto Rico",
  addressShort: "16 Calle Ana Lens Susoni, Infinity Health Shared Spaces",
  mapsUrl: GOOGLE_MAPS_URL,
  city: "Arecibo",
  state: "PR",
  country: "US",
  zip: "00612",
  domain: "aurumnovawellnessclinic.com",
  url: "https://aurumnovawellnessclinic.com",
  locale: "es-PR",
  ogLocale: "es_PR",
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const callLink = () => `tel:${CALL_NUMBER}`;

export const defaultWhatsappMessage =
  "Hola, me gustaría obtener más información sobre los programas de Aurum Nova Wellness Clinic.";
