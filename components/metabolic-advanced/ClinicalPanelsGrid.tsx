"use client";

import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { whatsappLink } from "@/content/site";
import HeadlineReveal from "@/components/motion/HeadlineReveal";
import { DUR, EASE_OUT_QUART } from "@/components/motion/easing";
import {
  type ClinicalPanel,
  clinicalPanels,
} from "@/content/metabolic-advanced";

function panelWhatsAppMessage(panel: ClinicalPanel) {
  return `Hola, me interesa la Evaluación Metabólica Avanzada de Aurum Nova. Quisiera saber si el ${panel.name} podría aplicar a mi caso.`;
}

function PanelCard({ panel }: { panel: ClinicalPanel }) {
  const reduce = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article
      className={`group relative flex flex-col rounded-3xl border bg-[#1A1A1A] p-6 sm:p-7 transition-shadow ${
        isOpen
          ? "border-[#C9A84C]/45 shadow-[0_24px_60px_-24px_rgba(201,168,76,0.3)]"
          : "border-[#2D2D2D] hover:border-[#C9A84C]/30 shadow-[0_20px_40px_-30px_rgba(0,0,0,0.6)]"
      }`}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#C9A84C]/12 ring-1 ring-[#C9A84C]/30 text-xs font-bold text-[#E2C97E]">
          {panel.letter}
        </span>
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#C9A84C]">
          Panel clínico
        </span>
      </div>

      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight mb-3">
        {panel.name}
      </h3>

      <div className="mb-4">
        <p className="text-[10px] font-bold uppercase tracking-widest text-[#E2C97E] mb-1.5">
          Para quién es
        </p>
        <p className="text-sm leading-relaxed text-[#D8D2C7]">{panel.forWhom}</p>
      </div>

      <p className="text-sm leading-relaxed text-[#BDB7AA] mb-5 flex-1">
        {panel.description}
      </p>

      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        aria-controls={`panel-${panel.id}-details`}
        className="flex items-center justify-between gap-2 rounded-2xl border border-[#2D2D2D] bg-[#0E0E0E] px-4 py-3 text-sm font-semibold text-[#E2C97E] hover:border-[#C9A84C]/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1A1A]"
      >
        <span>
          {isOpen ? "Ocultar marcadores" : "Ver marcadores principales"}
        </span>
        <ChevronDown
          className={`h-4 w-4 transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`panel-${panel.id}-details`}
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={
              reduce
                ? { duration: 0 }
                : { duration: DUR.base, ease: EASE_OUT_QUART }
            }
            className="overflow-hidden"
          >
            <div className="pt-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#C9A84C] mb-3">
                Marcadores principales
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                {panel.markers.map((m) => (
                  <li
                    key={m}
                    className="flex items-start gap-2 text-xs leading-relaxed text-[#D8D2C7]"
                  >
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#C9A84C]" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
              {panel.note && (
                <p className="mt-3 text-[11px] leading-relaxed text-[#9A9A9A]">
                  {panel.note}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-5">
        <a
          href={whatsappLink(panelWhatsAppMessage(panel))}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#C9A84C] hover:bg-[#A8872E] text-[#1A1A1A] font-semibold px-5 py-3 text-sm transition-colors shadow-[0_10px_30px_-12px_rgba(201,168,76,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1A1A]"
        >
          <MessageCircle className="h-3.5 w-3.5" />
          Consultar si aplica a mí
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>

      <div className="mt-3 flex items-start gap-2 text-[11px] leading-relaxed text-[#6B6B6B]">
        <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#C9A84C]/70" />
        <p>La selección final depende de evaluación clínica.</p>
      </div>
    </article>
  );
}

export default function ClinicalPanelsGrid() {
  return (
    <section
      id="paneles-clinicos"
      className="section-padding bg-[#0E0E0E] relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 12% 0%, rgba(201,168,76,0.14) 0%, transparent 55%), radial-gradient(ellipse at 88% 100%, rgba(201,168,76,0.08) 0%, transparent 55%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/35 to-transparent"
      />

      <div className="container-max relative z-10">
        <div className="max-w-2xl mb-10 sm:mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#E2C97E] mb-3">
            Paneles clínicos disponibles
          </span>
          <HeadlineReveal
            as="h2"
            onMount={false}
            delay={0.05}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-white leading-[1.05] mb-4"
          >
            La precisión clínica comienza con saber{" "}
            <span className="text-[#E2C97E]">qué buscar</span>
          </HeadlineReveal>
          <p className="text-base text-[#9A9A9A] leading-relaxed max-w-xl">
            Paneles diseñados según patrones clínicos comunes. La selección
            final se individualiza durante la evaluación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-5">
          {clinicalPanels.map((panel) => (
            <PanelCard key={panel.id} panel={panel} />
          ))}
        </div>
      </div>
    </section>
  );
}
