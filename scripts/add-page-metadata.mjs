/**
 * Script: add-page-metadata.mjs
 * Adds alternates/openGraph/twitter to every page's metadata export.
 * Run once: node scripts/add-page-metadata.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const BASE = "https://aurumnovawellnessclinic.com";
const SITE = "Aurum Nova Wellness Clinic";

const pages = [
  {
    slug: "programa-metabolico",
    title: "Programa Metabólico Integral | Aurum Nova Wellness Clinic",
    desc: "Programa clínico supervisado de manejo del peso con evaluación médica, plan personalizado, terapia semanal si cualificas, apoyo lipotrópico y seguimiento continuo. Arecibo, Puerto Rico.",
    kw: ["programa metabólico Arecibo", "control de peso Arecibo", "control metabólico Puerto Rico"],
  },
  {
    slug: "laser-diodo",
    title: "Láser Diodo High-Tech | Aurum Nova Wellness Clinic",
    desc: "Depilación láser avanzada con tecnología diodo para rostro y cuerpo. Planes personalizados por zona, evaluación individualizada y experiencia clínica premium en Arecibo, Puerto Rico.",
    kw: ["depilación láser diodo Arecibo", "láser diodo Puerto Rico"],
  },
  {
    slug: "sueroterapia",
    title: "Sueroterapia NAD+ y Myers | Terapia IV | Aurum Nova",
    desc: "Sueroterapia médica intravenosa en Arecibo, Puerto Rico. NAD+ y Cóctel de Myers administrados bajo supervisión médica. Requiere evaluación clínica previa.",
    kw: ["sueroterapia NAD Puerto Rico", "sueroterapia Arecibo"],
  },
  {
    slug: "inyectables-metabolicos",
    title: "Inyectables Metabólicos de Apoyo | Aurum Nova Wellness",
    desc: "L-carnitina, Lipo Mino MIC y MIC como apoyo metabólico complementario. Requieren evaluación médica. Solo disponibles para pacientes que califiquen en Aurum Nova, Arecibo.",
    kw: ["inyectables metabólicos Arecibo"],
  },
  {
    slug: "wellness-mujer",
    title: "Wellness Mujer | Salud Femenina Integral | Aurum Nova",
    desc: "Programa médico de bienestar femenino en Arecibo, Puerto Rico. Peso, energía, metabolismo, piel, cabello y salud hormonal con seguimiento clínico personalizado.",
    kw: ["wellness clinic Puerto Rico"],
  },
  {
    slug: "wellness-hombre",
    title: "Wellness Hombre | Metabolismo y Vitalidad | Aurum Nova",
    desc: "Programa médico de bienestar masculino en Arecibo, Puerto Rico. Grasa abdominal, energía, metabolismo, rendimiento y soporte capilar con seguimiento clínico.",
    kw: ["wellness clinic Puerto Rico"],
  },
  {
    slug: "coaching-seguimiento",
    title: "Coaching & Seguimiento Clínico | Aurum Nova Wellness",
    desc: "Seguimiento clínico continuo, check-ins de progreso y acompañamiento profesional en Aurum Nova Wellness Clinic, Arecibo. El progreso se mide, no se imagina.",
    kw: [],
  },
  {
    slug: "skin-glow",
    title: "Skin Glow | Piel Saludable desde Adentro | Aurum Nova",
    desc: "Protocolos de bienestar para la salud de tu piel en Arecibo, Puerto Rico. Hidratación profunda, nutrición específica y sueroterapia IV de soporte. Sin procedimientos estéticos.",
    kw: [],
  },
  {
    slug: "hair-support",
    title: "Hair Support | Salud Capilar Médica | Aurum Nova Wellness",
    desc: "Evaluación y soporte nutricional para la caída de cabello en Arecibo, Puerto Rico. Identificación de deficiencias, soporte durante pérdida de peso y derivación especializada.",
    kw: [],
  },
  {
    slug: "nutricion",
    title: "Nutrición Personalizada Clínica | Aurum Nova Wellness",
    desc: "Orientación nutricional personalizada en Arecibo, Puerto Rico. Plan basado en tu perfil metabólico, laboratorios y objetivos clínicos. Integrado al plan médico.",
    kw: [],
  },
  {
    slug: "suplementacion",
    title: "Suplementación & Wellness Support | Aurum Nova",
    desc: "Suplementos clínicos de calidad como apoyo al programa de bienestar en Aurum Nova Wellness Clinic, Arecibo. Recomendados por médico según perfil individual.",
    kw: [],
  },
  {
    slug: "resultados",
    title: "Resultados Medibles | Aurum Nova Wellness Clinic",
    desc: "Cómo Aurum Nova mide el progreso clínico: peso, IMC, circunferencias, composición corporal, adherencia y seguimiento. Sin promesas vacías — métricas reales.",
    kw: [],
  },
  {
    slug: "sobre-nosotros",
    title: "Sobre Aurum Nova Wellness Clinic | Arecibo, Puerto Rico",
    desc: "Conoce Aurum Nova Wellness Clinic: clínica premium de bienestar médico en Arecibo, Puerto Rico. Medicina metabólica, estética y wellness con enfoque clínico.",
    kw: ["clínica wellness Arecibo"],
  },
  {
    slug: "agendar-evaluacion",
    title: "Agendar Evaluación Médica | Aurum Nova Wellness Clinic",
    desc: "Agenda tu evaluación médica inicial en Aurum Nova Wellness Clinic, Arecibo. El primer paso para saber si calificas para nuestros programas de bienestar clínico.",
    kw: ["clínica wellness Arecibo"],
  },
  {
    slug: "contacto",
    title: "Contacto | Aurum Nova Wellness Clinic",
    desc: "Contacta a Aurum Nova Wellness Clinic en Arecibo, Puerto Rico. WhatsApp, teléfono, email e Instagram. Agenda tu evaluación médica inicial.",
    kw: [],
  },
  {
    slug: "preguntas-frecuentes",
    title: "Preguntas Frecuentes | Aurum Nova Wellness Clinic",
    desc: "Respuestas claras sobre elegibilidad, programas, terapias, precios y seguridad en Aurum Nova Wellness Clinic en Arecibo, Puerto Rico.",
    kw: [],
  },
  {
    slug: "enfoque-clinico",
    title: "Nuestro Enfoque Clínico | Aurum Nova Wellness Clinic",
    desc: "El enfoque clínico de Aurum Nova: evaluación individualizada, plan personalizado, terapia médica cuando aplica, nutrición, seguimiento continuo y referidos cuando es necesario.",
    kw: [],
  },
  {
    slug: "seguridad-elegibilidad",
    title: "Seguridad y Elegibilidad | Aurum Nova Wellness Clinic",
    desc: "Cómo Aurum Nova evalúa la elegibilidad y garantiza la seguridad de cada paciente. Contraindicaciones, proceso de evaluación y protocolo de seguridad clínica.",
    kw: [],
  },
  {
    slug: "privacidad",
    title: "Política de Privacidad | Aurum Nova Wellness Clinic",
    desc: "Política de privacidad de Aurum Nova Wellness Clinic. Información sobre qué datos recopilamos, cómo los usamos y cómo protegemos tu información.",
    noIndex: true,
    kw: [],
  },
  {
    slug: "disclaimer-medico",
    title: "Aviso Médico y Legal | Aurum Nova Wellness Clinic",
    desc: "Aviso médico y legal completo de Aurum Nova Wellness Clinic. Uso educativo del sitio, terapias médicas, medicamentos formulados, sueroterapia, láser y emergencias.",
    noIndex: true,
    kw: [],
  },
  {
    slug: "terminos",
    title: "Términos de Uso | Aurum Nova Wellness Clinic",
    desc: "Términos y condiciones de uso del sitio web de Aurum Nova Wellness Clinic.",
    noIndex: true,
    kw: [],
  },
];

// Home page
const homePage = {
  slug: "",
  title: "Aurum Nova Wellness Clinic | Medicina Metabólica de Precisión en Arecibo",
  desc: "Clínica wellness en Arecibo, Puerto Rico. Programa metabólico integral, depilación láser diodo, sueroterapia NAD+, inyectables metabólicos y seguimiento clínico personalizado.",
  kw: ["clínica wellness Arecibo", "control de peso Arecibo", "programa metabólico Arecibo", "depilación láser diodo Arecibo", "láser diodo Puerto Rico", "sueroterapia NAD Puerto Rico", "sueroterapia Arecibo", "inyectables metabólicos Arecibo", "wellness clinic Puerto Rico", "control metabólico Puerto Rico"],
};

function buildOgBlock(title, desc, slug, noIndex) {
  const url = `${BASE}${slug ? `/${slug}` : ""}`;
  const kwLine = "";
  return `  alternates: { canonical: "${url}" },
  openGraph: {
    title: "${title}",
    description: "${desc}",
    url: "${url}",
    siteName: "${SITE}",
    locale: "es_PR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "${title}",
    description: "${desc}",
  },${noIndex ? `
  robots: { index: false, follow: false },` : ""}`;
}

function processPage(filePath, title, desc, slug, noIndex = false) {
  if (!fs.existsSync(filePath)) {
    console.log(`SKIP (not found): ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, "utf-8");

  // Skip if already has openGraph
  if (content.includes("openGraph:")) {
    console.log(`SKIP (already has OG): ${filePath}`);
    return;
  }

  const ogBlock = buildOgBlock(title, desc, slug, noIndex);

  // Find the metadata closing `};` — it's the one right after the metadata = { block
  // Strategy: find "export const metadata" then find its closing };
  const metaStart = content.indexOf("export const metadata");
  if (metaStart === -1) {
    // Page has no metadata yet — insert a basic one
    console.log(`NO METADATA: ${filePath}`);
    return;
  }

  // Find the closing `};` of the metadata block
  let depth = 0;
  let i = content.indexOf("{", metaStart);
  let closeIdx = -1;
  while (i < content.length) {
    if (content[i] === "{") depth++;
    else if (content[i] === "}") {
      depth--;
      if (depth === 0) {
        closeIdx = i;
        break;
      }
    }
    i++;
  }

  if (closeIdx === -1) {
    console.log(`COULD NOT FIND closing }: ${filePath}`);
    return;
  }

  // Insert before the closing `}`
  const before = content.slice(0, closeIdx);
  const after = content.slice(closeIdx);

  // Make sure there's a comma before we insert
  const trimmed = before.trimEnd();
  const needsComma = !trimmed.endsWith(",");

  content = before + (needsComma ? ",\n" : "\n") + ogBlock + "\n" + after;

  fs.writeFileSync(filePath, content, "utf-8");
  console.log(`UPDATED: ${filePath}`);
}

// Process all pages
for (const page of pages) {
  const filePath = path.join(ROOT, "app", page.slug, "page.tsx");
  processPage(filePath, page.title, page.desc, page.slug, page.noIndex ?? false);
}

// Process home page (app/page.tsx)
const homeFile = path.join(ROOT, "app", "page.tsx");
let homeContent = fs.readFileSync(homeFile, "utf-8");
if (homeContent.includes("openGraph:")) {
  console.log("SKIP home (already has OG)");
} else {
  // Home page has no metadata yet — we need to add one
  const homeMetadata = `import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "${homePage.title}",
  description: "${homePage.desc}",
  keywords: ${JSON.stringify(homePage.kw)},
  alternates: { canonical: "${BASE}" },
  openGraph: {
    title: "${homePage.title}",
    description: "${homePage.desc}",
    url: "${BASE}",
    siteName: "${SITE}",
    locale: "es_PR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "${homePage.title}",
    description: "${homePage.desc}",
  },
};

`;
  homeContent = homeMetadata + homeContent;
  fs.writeFileSync(homeFile, homeContent, "utf-8");
  console.log("UPDATED: app/page.tsx");
}

console.log("\nDone!");
