// Centralized WhatsApp intent system.
//
// Each WhatsAppIntent maps to a Spanish prefilled message that explains *why*
// the user is reaching out. Page-specific CTAs can still pass a custom message
// to whatsappLink directly; this module is for the global components
// (WhatsAppFloat, StickyMobileCTA, Header) that need to vary the message
// by route, and for the quiz so the message stays compliance-safe.

import { WHATSAPP_NUMBER, whatsappLink } from "@/content/site";

export type WhatsAppIntent =
  | "home_general"
  | "programa_metabolico"
  | "quiz_started"
  | "quiz_completed"
  | "laser_diodo"
  | "laser_zone_interest"
  | "servicios_general"
  | "calculadora_result"
  | "laboratorios"
  | "contacto_general"
  | "agendar_evaluacion"
  | "inyectables"
  | "sueroterapia"
  | "nutricion"
  | "coaching"
  | "skin_glow"
  | "hair_support"
  | "wellness_hombre"
  | "wellness_mujer";

export type WhatsAppIntentParams = {
  /** Optional patient first name. Used for personalized messages. */
  firstName?: string;
  /** Optional zone (e.g. "axila", "bikini") for laser intents. */
  zone?: string;
  /** Optional calculator name (e.g. "IMC", "Meta de peso"). */
  calculator?: string;
  /** Optional appended free-form line, e.g. "Quisiera saber paquetes." */
  extra?: string;
};

const BASE_MESSAGES: Record<WhatsAppIntent, (p?: WhatsAppIntentParams) => string> = {
  home_general: () =>
    "Hola, quiero orientación sobre los servicios de Aurum Nova Wellness Clinic.",
  programa_metabolico: () =>
    "Hola, me interesa el Programa Metabólico de Aurum Nova. Quisiera orientación para saber si puedo cualificar.",
  quiz_started: () =>
    "Hola, comencé el Quiz Metabólico de Aurum Nova y quisiera orientación.",
  quiz_completed: (p) => {
    const who = p?.firstName ? ` Soy ${p.firstName}.` : "";
    return `Hola, completé el Quiz Metabólico de Aurum Nova.${who} Quisiera compartir mi resultado para orientación.`;
  },
  laser_diodo: () =>
    "Hola, me interesa el láser diodo de Aurum Nova. Quisiera orientación sobre zonas, paquetes y evaluación.",
  laser_zone_interest: (p) => {
    const zone = p?.zone ? ` en la zona ${p.zone}` : "";
    return `Hola, me interesa el láser diodo de Aurum Nova${zone}. Quisiera orientación sobre paquetes y evaluación por zona.`;
  },
  servicios_general: () =>
    "Hola, quisiera orientación sobre los servicios de Aurum Nova Wellness Clinic y cuál podría aplicar a mi caso.",
  calculadora_result: (p) => {
    const tool = p?.calculator ? ` (${p.calculator})` : "";
    return `Hola, usé una calculadora educativa${tool} de Aurum Nova y quisiera orientación sobre mis resultados.`;
  },
  laboratorios: () =>
    "Hola, me interesa orientación sobre análisis de laboratorios y perfil metabólico en Aurum Nova.",
  contacto_general: () =>
    "Hola, tengo preguntas sobre Aurum Nova Wellness Clinic.",
  agendar_evaluacion: () =>
    "Hola, quiero coordinar una evaluación en Aurum Nova Wellness Clinic.",
  inyectables: () =>
    "Hola, me interesa orientación sobre el apoyo wellness inyectable en Aurum Nova y la evaluación inicial.",
  sueroterapia: () =>
    "Hola, me interesa orientación sobre sueroterapia IV en Aurum Nova y la evaluación inicial.",
  nutricion: () =>
    "Hola, me interesa orientación nutricional clínica en Aurum Nova.",
  coaching: () =>
    "Hola, me interesa orientación sobre coaching y seguimiento clínico en Aurum Nova.",
  skin_glow: () =>
    "Hola, me interesa orientación sobre Skin Glow en Aurum Nova.",
  hair_support: () =>
    "Hola, me interesa orientación sobre Hair Support en Aurum Nova.",
  wellness_hombre: () =>
    "Hola, me interesa orientación sobre wellness para hombre en Aurum Nova.",
  wellness_mujer: () =>
    "Hola, me interesa orientación sobre wellness para mujer en Aurum Nova.",
};

export function getWhatsAppMessage(
  intent: WhatsAppIntent,
  params?: WhatsAppIntentParams
): string {
  const base = BASE_MESSAGES[intent](params);
  if (params?.extra) {
    return `${base} ${params.extra}`.trim();
  }
  return base;
}

export function buildWhatsAppUrl(message: string): string {
  return whatsappLink(message);
}

export function getWhatsAppUrl(
  intent: WhatsAppIntent,
  params?: WhatsAppIntentParams
): string {
  return buildWhatsAppUrl(getWhatsAppMessage(intent, params));
}

// Path → intent map for global components (float, sticky CTA, header).
// Order matters: most specific first.
const PATH_INTENTS: ReadonlyArray<[RegExp, WhatsAppIntent]> = [
  [/^\/quiz-metabolico/, "quiz_started"],
  [/^\/perfil-metabolico/, "quiz_completed"],
  [/^\/programa-metabolico/, "programa_metabolico"],
  [/^\/laser-diodo/, "laser_diodo"],
  [/^\/servicios/, "servicios_general"],
  [/^\/analisis-laboratorios/, "laboratorios"],
  [/^\/calculadoras/, "calculadora_result"],
  [/^\/agendar-evaluacion/, "agendar_evaluacion"],
  [/^\/contacto/, "contacto_general"],
  [/^\/inyectables-metabolicos/, "inyectables"],
  [/^\/sueroterapia/, "sueroterapia"],
  [/^\/nutricion/, "nutricion"],
  [/^\/coaching-seguimiento/, "coaching"],
  [/^\/skin-glow/, "skin_glow"],
  [/^\/hair-support/, "hair_support"],
  [/^\/wellness-hombre/, "wellness_hombre"],
  [/^\/wellness-mujer/, "wellness_mujer"],
];

export function getIntentForPath(pathname: string | null | undefined): WhatsAppIntent {
  if (!pathname) return "home_general";
  for (const [re, intent] of PATH_INTENTS) {
    if (re.test(pathname)) return intent;
  }
  return "home_general";
}

export { WHATSAPP_NUMBER };
