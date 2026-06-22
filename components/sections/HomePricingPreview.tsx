// HomePricingPreview
// ---------------------------------------------------------------------------
// Pricing preview (#precios). Surfaces "desde" anchors for the program
// ($350/mes opening price — regular $400 — for the initial package; mirrors
// content/metabolic-protocols.ts) and láser ($20/zona) plus an
// evaluation-based card for aesthetics & complementary therapies.
//
// Compliance: every price is framed as "desde / según evaluación" and carries
// the existing variability disclaimers. No guaranteed outcomes, no final
// quotes — the plan and investment are defined during the evaluation.

import Link from "next/link";
import { Check, ArrowRight, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/content/site";

type Plan = {
  eyebrow: string;
  name: string;
  /** Small leading label before the price (e.g. "Desde", "Planes desde"). Omit for none. */
  priceLabel?: string;
  from: string;
  period: string;
  description: string;
  includes: string[];
  href: string;
  whatsapp: string;
  featured?: boolean;
};

const plans: Plan[] = [
  {
    eyebrow: "Programa metabólico",
    name: "Membresía mensual",
    priceLabel: "Planes desde",
    from: "$350",
    period: "/ mes",
    description:
      "Dosis inicial, evaluación, labs y enzima lipotrópica, con seguimiento clínico. Precio de apertura por nuestra reubicación a un nuevo espacio privado.",
    includes: [
      "Consulta médica mensual incluida",
      "Plan nutricional personalizado",
      "Seguimiento de métricas y progreso",
    ],
    href: "/programa-metabolico",
    whatsapp:
      "Hola, me interesa el Programa Metabólico de Aurum Nova. Quisiera orientación sobre la membresía mensual y cómo empezar mi evaluación.",
    featured: true,
  },
  {
    eyebrow: "Láser diodo",
    name: "Precio por zona",
    priceLabel: "Desde",
    from: "$20",
    period: "/ zona",
    description:
      "El precio varía según la zona, el número de sesiones recomendadas y el paquete seleccionado.",
    includes: [
      "Evaluación de piel y vello sin costo",
      "Plan de sesiones personalizado por zona",
      "Paquetes multi-sesión disponibles",
    ],
    href: "/laser-diodo",
    whatsapp:
      "Hola, me interesa el láser diodo de Aurum Nova. Quisiera orientación sobre zonas, paquetes y la evaluación inicial.",
  },
  {
    eyebrow: "Estética & terapias",
    name: "Según evaluación",
    from: "Plan",
    period: "personalizado",
    description:
      "Estética clínica, faciales y terapias complementarias. El plan y la inversión se definen en tu evaluación inicial.",
    includes: [
      "Evaluación y orientación profesional",
      "Protocolo según tu tipo de piel u objetivo",
      "Servicios disponibles cuando aplica",
    ],
    href: "/servicios",
    whatsapp:
      "Hola, me interesa orientación sobre estética clínica y terapias complementarias en Aurum Nova, y cómo definir mi plan en la evaluación.",
  },
];

export default function HomePricingPreview() {
  return (
    <section id="precios" className="section-padding scroll-mt-24 bg-white">
      <div className="container-max">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
            Precios
          </span>
          <h2 className="mb-4 text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-[#1A1A1A] sm:text-4xl lg:text-5xl">
            Precios claros, <span className="text-[#A8872E]">sin sorpresas</span>
          </h2>
          <p className="text-base leading-relaxed text-[#6B6B6B] sm:text-lg">
            Cifras de referencia para orientarte. El precio final depende del
            protocolo aprobado en tu evaluación. Los resultados pueden variar.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:auto-rows-fr">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`flex h-full flex-col rounded-3xl border p-6 sm:p-7 ${
                plan.featured
                  ? "border-[#C9A84C]/55 bg-[#FAF8F4] shadow-[0_24px_60px_-30px_rgba(201,168,76,0.4)] lg:scale-[1.015]"
                  : "border-[#E8E4DA] bg-white shadow-[0_16px_40px_-32px_rgba(0,0,0,0.25)]"
              }`}
            >
              <div className="mb-5 flex items-center justify-between">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#A8872E]">
                  {plan.eyebrow}
                </p>
                {plan.featured && (
                  <span className="rounded-full bg-[#C9A84C] px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-[#1A1A1A]">
                    Principal
                  </span>
                )}
              </div>

              <h3 className="text-lg font-semibold text-[#1A1A1A]">{plan.name}</h3>
              <div className="mt-3 flex items-baseline gap-1.5">
                {plan.priceLabel && (
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-[#9A9A9A]">
                    {plan.priceLabel}
                  </span>
                )}
                <span className="text-3xl font-bold tracking-tight text-[#1A1A1A]">
                  {plan.from}
                </span>
                <span className="text-sm font-medium text-[#6B6B6B]">
                  {plan.period}
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-[#6B6B6B]">
                {plan.description}
              </p>

              <ul className="mt-5 space-y-2.5 flex-1">
                {plan.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-[#3D3D3D]"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A84C]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-col gap-2.5">
                <a
                  href={whatsappLink(plan.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 ${
                    plan.featured
                      ? "bg-[#C9A84C] text-[#1A1A1A] hover:bg-[#A8872E]"
                      : "bg-[#1A1A1A] text-white hover:bg-[#000000]"
                  }`}
                >
                  <MessageCircle className="h-4 w-4" />
                  Consultar por WhatsApp
                </a>
                <Link
                  href={plan.href}
                  className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#A8872E] transition-colors hover:text-[#C9A84C]"
                >
                  Ver detalles
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-[#9A9A9A]">
          Los precios son orientativos y pueden variar según el protocolo
          específico aprobado. Todos los programas requieren evaluación médica
          individual; no todos los pacientes califican. La evaluación inicial de
          láser es sin costo.
        </p>
      </div>
    </section>
  );
}
