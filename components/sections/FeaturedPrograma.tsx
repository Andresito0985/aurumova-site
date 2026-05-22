"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { whatsappLink } from "@/content/site";
import { metabolicProtocols, type MetabolicProtocol } from "@/content/metabolic-protocols";
import MagneticCTA from "@/components/motion/MagneticCTA";
import HeadlineReveal from "@/components/motion/HeadlineReveal";

// Program-level (not package-level) intro bullets. Stay clinically responsible.
const programIncludes = [
  "Consulta médica mensual incluida",
  "Plan nutricional personalizado",
  "Inyectables de apoyo si calificas",
  "Seguimiento de métricas y progreso",
  "Ajuste de protocolo mensual",
  "Comunicación directa con el equipo",
];

const INTRO_WHATSAPP_MESSAGE =
  "Hola, me interesa el Programa Metabólico Integral de Aurum Nova. Me gustaría consultar disponibilidad para evaluación.";

function packageWhatsAppMessage(protocol: MetabolicProtocol) {
  return `Hola, me interesa el ${protocol.name} de Aurum Nova. Me gustaría ${protocol.ctaLabel.toLowerCase()}.`;
}

/**
 * Compact preview card used in the Home `FeaturedPrograma` carousel/grid.
 * Pulls every field from `metabolicProtocols` to avoid drifting from the
 * source of truth in /programa-metabolico.
 *
 * Featured plan (`avanzado`) gets a warm gold halo and a "Recomendado" chip
 * to communicate it's the typical middle option; same treatment used in the
 * MetabolicPricing grid on /programa-metabolico for consistency.
 */
function PackageCard({
  protocol,
  featured,
}: {
  protocol: MetabolicProtocol;
  featured: boolean;
}) {
  return (
    <article
      className={`relative flex h-full flex-col overflow-hidden rounded-3xl border p-5 sm:p-6 transition-shadow ${
        featured
          ? "border-[#C9A84C]/60 bg-[#C9A84C]/10 shadow-[0_24px_60px_-24px_rgba(201,168,76,0.35)]"
          : "border-[#2D2D2D] bg-[#1A1A1A] shadow-[0_20px_40px_-30px_rgba(0,0,0,0.6)]"
      }`}
    >
      {featured && (
        <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full border border-[#C9A84C]/40 bg-[#1A1A1A]/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-[#E2C97E] backdrop-blur">
          Recomendado
        </span>
      )}

      <p className="text-[10px] font-bold uppercase tracking-widest text-[#C9A84C]">
        {protocol.duration}
      </p>
      <h3 className="mt-1.5 text-xl sm:text-2xl font-bold tracking-tight text-white">
        {protocol.name}
      </h3>
      <p className="mt-3 text-xs leading-relaxed text-[#BDB7AA] sm:text-sm">
        {protocol.shortDescription}
      </p>

      {/* Price block */}
      <div className="mt-5 rounded-2xl border border-[#C9A84C]/25 bg-[#C9A84C]/[0.08] p-4">
        <p className="text-[10px] font-bold uppercase tracking-widest text-[#E2C97E]">
          {protocol.packageLabel ?? "Precio paquete"}
        </p>
        <p className="mt-1 text-3xl font-bold tracking-tight text-[#E2C97E]">
          {protocol.priceLabel}
        </p>
        {protocol.comparisonLabel && (
          <p className="mt-2 text-xs leading-snug text-[#D8D2C7]">
            {protocol.comparisonLabel}
          </p>
        )}
        {protocol.savingsLabel && (
          <p className="mt-1 text-xs font-semibold text-[#C9A84C]">
            {protocol.savingsLabel}
          </p>
        )}
      </div>

      {/* Includes (3 max keeps the card compact) */}
      <ul className="mt-5 space-y-2 flex-1">
        {protocol.keyIncludes.slice(0, 3).map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-xs leading-relaxed text-[#D8D2C7]"
          >
            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#C9A84C]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <a
        href={whatsappLink(packageWhatsAppMessage(protocol))}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#C9A84C] px-5 py-3 text-sm font-semibold text-[#1A1A1A] transition-colors hover:bg-[#A8872E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C]/70 focus-visible:ring-offset-2 ${
          featured
            ? "shadow-[0_12px_36px_-10px_rgba(201,168,76,0.55)] focus-visible:ring-offset-[#1A1A1A]"
            : "focus-visible:ring-offset-[#1A1A1A]"
        }`}
      >
        {protocol.ctaLabel}
        <ArrowRight className="h-3.5 w-3.5" />
      </a>

      <p className="mt-3 text-[10px] leading-relaxed text-[#6B6B6B]">
        {protocol.complianceNote}
      </p>
    </article>
  );
}

export default function FeaturedPrograma() {
  const reduce = useReducedMotion();

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Header — compact intro instead of the old 2-col side-card layout */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reduce ? { duration: 0 } : undefined}
          className="max-w-3xl mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#C9A84C]/10 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
              Programa Principal
            </span>
          </div>

          <HeadlineReveal
            as="h2"
            onMount={false}
            delay={0.05}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-[#1A1A1A] mb-4 leading-[1.05]"
          >
            Programa Metabólico{" "}
            <span className="text-[#A8872E]">Integral</span>
          </HeadlineReveal>

          <p className="text-base text-[#6B6B6B] leading-relaxed mb-6 max-w-2xl">
            Un programa médico mensual completo: evaluación clínica, plan
            personalizado, terapias de apoyo si calificas y seguimiento con
            métricas reales. No es una dieta — es medicina metabólica
            supervisada.
          </p>

          <ul className="grid gap-x-6 gap-y-2.5 sm:grid-cols-2 max-w-2xl mb-7">
            {programIncludes.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm text-[#3D3D3D]"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A84C]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-3 max-w-2xl">
            <MagneticCTA strength={6}>
              <a
                href={whatsappLink(INTRO_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#A8872E] text-[#1A1A1A] font-semibold px-7 py-3.5 rounded-full transition-all duration-200 shadow-[0_10px_30px_-10px_rgba(201,168,76,0.55)] hover:shadow-[0_14px_40px_-10px_rgba(201,168,76,0.7)] ring-1 ring-black/5"
              >
                Consultar disponibilidad
                <ArrowRight className="w-4 h-4" />
              </a>
            </MagneticCTA>
            <Link
              href="/programa-metabolico"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 border border-[#E8E4DA] hover:border-[#C9A84C] text-[#1A1A1A] hover:text-[#A8872E] font-semibold px-7 py-3.5 rounded-full transition-all"
            >
              Ver detalles completos
            </Link>
          </div>
        </motion.div>

        {/* Mobile swipe hint */}
        <div className="lg:hidden mb-3 flex items-center justify-between">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#9A9A9A]">
            Paquetes disponibles
          </p>
          <p className="inline-flex items-center gap-1.5 text-xs text-[#9A9A9A]">
            Desliza
            <span aria-hidden="true" className="inline-block">
              →
            </span>
          </p>
        </div>

        {/* Mobile carousel — native scroll-snap, no JS, no new deps */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px 0px" }}
          transition={reduce ? { duration: 0 } : { duration: 0.6 }}
          role="region"
          aria-label="Paquetes de control metabólico"
          className="lg:hidden no-scrollbar -mx-4 sm:-mx-6 overflow-x-auto snap-x snap-mandatory"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <div className="flex gap-4 px-4 sm:px-6 pb-4">
            {metabolicProtocols.map((protocol) => (
              <div
                key={protocol.id}
                className="snap-start shrink-0 w-[85%] max-w-sm"
              >
                <PackageCard
                  protocol={protocol}
                  featured={protocol.id === "avanzado"}
                />
              </div>
            ))}
            {/* Tiny end-spacer so the last card snaps cleanly into view */}
            <div aria-hidden="true" className="shrink-0 w-px" />
          </div>
        </motion.div>

        {/* Desktop grid — 3 cards in a row, no carousel */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px 0px" }}
          transition={reduce ? { duration: 0 } : { duration: 0.6 }}
          className="hidden lg:grid lg:grid-cols-3 gap-5"
        >
          {metabolicProtocols.map((protocol) => (
            <PackageCard
              key={protocol.id}
              protocol={protocol}
              featured={protocol.id === "avanzado"}
            />
          ))}
        </motion.div>

        <p className="mt-6 sm:mt-8 text-xs leading-relaxed text-[#9A9A9A] max-w-2xl">
          * Requiere evaluación médica. No todos los pacientes califican. El
          precio base puede variar según el protocolo aprobado.
        </p>
      </div>
    </section>
  );
}
