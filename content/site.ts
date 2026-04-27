export const siteConfig = {
  name: "Aurum Nova Wellness Clinic",
  tagline: "Medicina Metabólica de Precisión",
  description:
    "Clínica wellness en Arecibo, Puerto Rico. Programa metabólico integral, depilación láser diodo, sueroterapia NAD+, inyectables metabólicos y seguimiento clínico personalizado.",
  phone: "939-641-0504",
  whatsapp: "19396410504",
  instagram: "@aurumnovawc",
  instagramUrl: "https://instagram.com/aurumnovawc",
  email: "aurumnovawc@gmail.com",
  address: "Arecibo Medical Plaza, Suite 201, Arecibo, Puerto Rico",
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
  `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;

export const defaultWhatsappMessage =
  "Hola, me gustaría obtener más información sobre los programas de Aurum Nova Wellness Clinic.";
