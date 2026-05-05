export const WHATSAPP_NUMBER = "19396410504";
export const CALL_NUMBER = "17873499161";
export const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/irSRUko1XABujM4a6";

export const siteConfig = {
  name: "Aurum Nova Wellness Clinic",
  tagline: "Medicina Metabólica de Precisión",
  description:
    "Clínica wellness en Arecibo, Puerto Rico. Programa metabólico integral, depilación láser diodo, sueroterapia NAD+, inyectables metabólicos y seguimiento clínico personalizado.",
  phone: "787-349-9161",
  phoneRaw: CALL_NUMBER,
  callNumber: CALL_NUMBER,
  callDisplay: "787-349-9161",
  whatsapp: WHATSAPP_NUMBER,
  whatsappDisplay: "939-641-0504",
  instagram: "@aurumnovawc",
  instagramUrl: "https://instagram.com/aurumnovawc",
  email: "aurumnovawc@gmail.com",
  address: "Ave. Barbosa 65, Arecibo Medical Plaza, Suite 201, Arecibo, Puerto Rico",
  addressShort: "Ave. Barbosa 65, Arecibo Medical Plaza, Suite 201",
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
