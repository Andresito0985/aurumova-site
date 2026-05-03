"use client";

import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  FlaskConical,
  Info,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { whatsappLink } from "@/content/site";
import {
  individualMetabolicPricing,
  metabolicProtocols,
  PROTOCOL_PRICING_DISCLAIMER,
} from "@/content/metabolic-protocols";

const CTA_MESSAGE =
  "Hola, me interesa comenzar una evaluación para discutir los protocolos metabólicos de Aurum Nova.";

export default function MetabolicPricing() {
  return (
    <section className="section-padding bg-[#1A1A1A]">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
            Protocolos y valor
          </span>
          <h2 className="mb-4 text-2xl font-semibold text-white sm:text-3xl">
            Tres rutas metabólicas, una evaluación clínica primero
          </h2>
          <p className="text-sm leading-relaxed text-[#9A9A9A]">
            Cada protocolo agrupa evaluación, seguimiento, soporte metabólico y análisis clínico.
            El paquete puede representar mejor valor que pagar cada componente por separado, pero
            la selección final depende de evaluación clínica.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-3">
          {metabolicProtocols.map((protocol, index) => (
            <motion.article
              key={protocol.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className={`flex h-full flex-col rounded-3xl border p-5 sm:p-6 ${
                protocol.id === "avanzado"
                  ? "border-[#C9A84C]/60 bg-[#C9A84C]/10"
                  : "border-[#2D2D2D] bg-[#242424]"
              }`}
            >
              <div className="mb-5">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div>
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-[#C9A84C]">
                      {protocol.duration}
                    </p>
                    <h3 className="text-xl font-semibold text-white">{protocol.name}</h3>
                  </div>
                  {protocol.id === "avanzado" && (
                    <span className="rounded-full bg-[#C9A84C] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                      3 meses
                    </span>
                  )}
                </div>
                <p className="text-sm leading-relaxed text-[#BDB7AA]">{protocol.positioning}</p>
              </div>

              <div className="mb-5 grid gap-2">
                <div className="rounded-2xl border border-[#C9A84C]/25 bg-[#C9A84C]/10 p-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#C9A84C]">
                    Precio paquete
                  </p>
                  <p className="mt-1 text-lg font-semibold text-white">{protocol.priceLabel}</p>
                </div>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <div className="rounded-2xl border border-[#2D2D2D] bg-[#1A1A1A] p-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#6B6B6B]">
                      Valor individual
                    </p>
                    <p className="mt-1 text-sm font-semibold text-[#E8E4DA]">
                      {protocol.individualValueLabel}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[#2D2D2D] bg-[#1A1A1A] p-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#6B6B6B]">
                      Ahorro
                    </p>
                    <p className="mt-1 text-sm font-semibold text-[#E8E4DA]">
                      {protocol.savingsLabel}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-5 rounded-2xl border border-[#2D2D2D] bg-[#1A1A1A] p-4">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-[#C9A84C]">
                  Ideal para
                </p>
                <ul className="space-y-2">
                  {protocol.bestFor.slice(0, 3).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs leading-relaxed text-[#D8D2C7]">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#C9A84C]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-5 space-y-2">
                {[
                  { title: "Soporte clínico", items: protocol.clinicalSupport, icon: ShieldCheck },
                  { title: "Laboratorios", items: protocol.laboratoryAnalysis, icon: FlaskConical },
                  { title: "Seguimiento semanal", items: protocol.weeklyFollowUp, icon: ClipboardList },
                  { title: "Soporte lifestyle/metabólico", items: protocol.lifestyleSupport, icon: Activity },
                  { title: "Add-ons y herramientas", items: protocol.advancedTools, icon: Info },
                ].map((group) => {
                  const Icon = group.icon;
                  return (
                    <details
                      key={group.title}
                      className="group rounded-2xl border border-[#2D2D2D] bg-[#1A1A1A]"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm font-semibold text-white">
                        <span className="flex items-center gap-2">
                          <Icon className="h-4 w-4 text-[#C9A84C]" />
                          {group.title}
                        </span>
                        <ChevronDown className="h-4 w-4 text-[#6B6B6B] transition-transform group-open:rotate-180" />
                      </summary>
                      <ul className="space-y-2 border-t border-[#2D2D2D] px-4 py-3">
                        {group.items.slice(0, 4).map((item) => (
                          <li key={item} className="text-xs leading-relaxed text-[#9A9A9A]">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </details>
                  );
                })}

                <details className="group rounded-2xl border border-[#2D2D2D] bg-[#1A1A1A]">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm font-semibold text-white">
                    <span>Ver desglose individual</span>
                    <ChevronDown className="h-4 w-4 text-[#6B6B6B] transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="border-t border-[#2D2D2D] px-4 py-3">
                    <div className="space-y-2">
                      {protocol.valueBreakdown.map((item) => (
                        <div
                          key={`${protocol.id}-${item.label}-${item.detail}`}
                          className="flex items-start justify-between gap-3 border-b border-[#2D2D2D] pb-2 text-xs last:border-0 last:pb-0"
                        >
                          <span className="leading-relaxed text-[#9A9A9A]">
                            {item.label}
                            <span className="block text-[#5F5F5F]">{item.detail}</span>
                          </span>
                          {item.value && (
                            <span className="shrink-0 font-semibold text-[#E8E4DA]">
                              {item.value}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </details>
              </div>

              <div className="mt-auto space-y-4">
                <p className="rounded-2xl border border-[#2D2D2D] bg-[#1A1A1A] p-3 text-[11px] leading-relaxed text-[#9A9A9A]">
                  {protocol.complianceNote}
                </p>
                <a
                  href={whatsappLink(`${CTA_MESSAGE} Me gustaría ${protocol.ctaLabel.toLowerCase()}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#C9A84C] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#A8872E]"
                >
                  {protocol.ctaLabel}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 grid gap-5 lg:grid-cols-[1fr_0.8fr]"
        >
          <div className="rounded-3xl border border-[#2D2D2D] bg-[#242424] p-6">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-[#C9A84C]">
              Valor del paquete
            </p>
            <h3 className="mb-3 text-xl font-semibold text-white">
              ¿Por qué el paquete representa mejor valor?
            </h3>
            <p className="text-sm leading-relaxed text-[#BDB7AA]">
              Los protocolos agrupan evaluación, seguimiento, soporte metabólico y análisis
              clínico para que el paciente no tenga que pagar cada componente por separado. El
              valor individual estimado ayuda a visualizar el ahorro del paquete, pero la
              recomendación final depende de evaluación clínica.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/analisis-laboratorios"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#3D3D3D] px-5 py-3 text-sm font-semibold text-[#E8E4DA] transition-colors hover:border-[#C9A84C]/60 hover:text-[#C9A84C]"
              >
                Ver análisis de laboratorios
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/quiz-metabolico"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#3D3D3D] px-5 py-3 text-sm font-semibold text-[#E8E4DA] transition-colors hover:border-[#C9A84C]/60 hover:text-[#C9A84C]"
              >
                Tomar quiz metabólico
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-[#2D2D2D] bg-[#111111] p-6">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-[#C9A84C]">
              Precios individuales de referencia
            </p>
            <div className="space-y-2">
              {individualMetabolicPricing.map((item) => (
                <div
                  key={item.key}
                  className="flex items-start justify-between gap-4 border-b border-[#242424] pb-2 text-xs last:border-0 last:pb-0"
                >
                  <span className="text-[#9A9A9A]">{item.label}</span>
                  <span className="shrink-0 font-semibold text-[#E8E4DA]">{item.priceLabel}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 flex max-w-3xl items-start gap-3"
        >
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#4A4A4A]" />
          <p className="text-xs leading-relaxed text-[#6B6B6B]">
            {PROTOCOL_PRICING_DISCLAIMER}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
