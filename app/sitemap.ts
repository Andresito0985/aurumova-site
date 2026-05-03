import type { MetadataRoute } from "next";

const BASE_URL = "https://aurumnovawellnessclinic.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // High-priority service pages — most SEO value
  const servicePages: MetadataRoute.Sitemap = [
    "/servicios",
    "/programa-metabolico",
    "/quiz-metabolico",
    "/laser-diodo",
    "/sueroterapia",
    "/inyectables-metabolicos",
    "/wellness-mujer",
    "/wellness-hombre",
    "/skin-glow",
    "/hair-support",
    "/nutricion",
    "/suplementacion",
    "/coaching-seguimiento",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const calculatorPages: MetadataRoute.Sitemap = [
    "/calculadoras",
    "/calculadoras/imc",
    "/calculadoras/meta-de-peso",
    "/calculadoras/deficit-calorico",
    "/calculadoras/hidratacion-electrolitos",
    "/perfil-metabolico",
    "/analisis-laboratorios",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority:
      path === "/perfil-metabolico"
        ? 0.9
        : path === "/calculadoras"
          ? 0.85
          : 0.8,
  }));

  // Core pages
  const corePages: MetadataRoute.Sitemap = [
    { path: "/", priority: 1.0, freq: "weekly" },
    { path: "/agendar-evaluacion", priority: 0.95, freq: "monthly" },
    { path: "/contacto", priority: 0.8, freq: "monthly" },
    { path: "/sobre-nosotros", priority: 0.7, freq: "monthly" },
    { path: "/enfoque-clinico", priority: 0.8, freq: "monthly" },
    { path: "/seguridad-elegibilidad", priority: 0.75, freq: "monthly" },
    { path: "/preguntas-frecuentes", priority: 0.75, freq: "monthly" },
    { path: "/resultados", priority: 0.7, freq: "monthly" },
  ].map(({ path, priority, freq }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: freq as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority,
  }));

  // Legal pages — low priority
  const legalPages: MetadataRoute.Sitemap = [
    "/privacidad",
    "/terminos",
    "/disclaimer-medico",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }));

  return [...corePages, ...servicePages, ...calculatorPages, ...legalPages];
}
