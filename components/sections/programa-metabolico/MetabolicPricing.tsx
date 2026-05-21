"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Info, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { whatsappLink } from "@/content/site";
import {
  LAB_ANALYSIS_WORDING,
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
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
            Protocolos metabólicos
          </span>
          <h2 className="mb-4 text-2xl font-semibold text-white sm:text-3xl">
            Opciones claras para discutir en evaluación
          </h2>
          <p className="text-base leading-relaxed text-[#BDB7AA]">
            Cada protocolo agrupa evaluación, seguimiento, soporte metabólico y análisis clínico.
            La recomendación final depende de historial, laboratorios, metas, tolerancia y criterio
            profesional.
          </p>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-3 lg:auto-rows-fr">
          {metabolicProtocols.map((protocol, index) => (
            <motion.article
              key={protocol.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className={`flex h-full flex-col rounded-3xl border p-5 sm:p-6 transition-shadow ${
                protocol.id === "avanzado"
                  ? "border-[#C9A84C]/60 bg-[#C9A84C]/10 shadow-[0_24px_60px_-24px_rgba(201,168,76,0.35)] lg:scale-[1.015]"
                  : "border-[#2D2D2D] bg-[#242424] shadow-[0_20px_40px_-30px_rgba(0,0,0,0.6)]"
              }`}
            >
              <div className="mb-5">
                <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-[#C9A84C]">
                  {protocol.duration}
                </p>
                <h3 className="text-xl font-semibold text-white">{protocol.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#BDB7AA]">
                  {protocol.shortDescription}
                </p>
              </div>

              <div className="mb-5 rounded-2xl border border-[#C9A84C]/25 bg-[#C9A84C]/10 p-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#C9A84C]">
                  {protocol.packageLabel ?? "Precio paquete"}
                </p>
                <p className="mt-1 text-3xl font-semibold tracking-tight text-white">
                  {protocol.priceLabel}
                </p>
                {protocol.comparisonLabel && (
                  <p className="mt-2 text-sm font-medium text-[#E8E4DA]">
                    {protocol.comparisonLabel}
                  </p>
                )}
                {protocol.savingsLabel && (
                  <p className="mt-1 text-sm font-semibold text-[#C9A84C]">
                    {protocol.savingsLabel}
                  </p>
                )}
              </div>

              <div className="mb-5 rounded-2xl border border-[#2D2D2D] bg-[#1A1A1A] p-4">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-[#C9A84C]">
                  Ideal para
                </p>
                <p className="text-sm leading-relaxed text-[#D8D2C7]">
                  {protocol.bestFor[0]}
                </p>
              </div>

              <div className="mb-5">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-[#6B6B6B]">
                  Incluye
                </p>
                <ul className="space-y-2.5">
                  {protocol.keyIncludes.slice(0, 3).map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-[#D8D2C7]">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A84C]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {protocol.addOns.length > 0 && (
                <p className="mb-5 rounded-2xl border border-[#2D2D2D] bg-[#1A1A1A] p-3 text-xs leading-relaxed text-[#9A9A9A]">
                  {protocol.addOns[0]}
                </p>
              )}

              <div className="mt-auto space-y-4">
                <p className="text-xs leading-relaxed text-[#6B6B6B]">
                  {protocol.complianceNote}
                </p>
                <a
                  href={whatsappLink(`${CTA_MESSAGE} Me gustaría ${protocol.ctaLabel.toLowerCase()}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[#C9A84C] px-5 py-3 text-sm font-semibold text-[#1A1A1A] transition-colors hover:bg-[#A8872E]"
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
          className="mt-8 grid gap-4 lg:grid-cols-2 lg:auto-rows-fr"
        >
          <div className="rounded-3xl border border-[#2D2D2D] bg-[#242424] p-5 sm:p-6">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#C9A84C]/10 text-[#C9A84C]">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-white">
              Cómo interpretar el valor del paquete
            </h3>
            <p className="text-sm leading-relaxed text-[#BDB7AA]">
              Mostramos el precio del paquete, el valor individual estimado cuando aplica y el
              ahorro correspondiente. El contenido exacto se confirma durante evaluación clínica
              según historial, tolerancia, disponibilidad y criterio profesional.
            </p>
          </div>

          <div className="rounded-3xl border border-[#2D2D2D] bg-[#111111] p-5 sm:p-6">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-[#C9A84C]">
              Laboratorios
            </p>
            <p className="text-sm leading-relaxed text-[#BDB7AA]">
              {LAB_ANALYSIS_WORDING}
            </p>
            <Link
              href="/analisis-laboratorios"
              className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#3D3D3D] px-5 py-3 text-sm font-semibold text-[#E8E4DA] transition-colors hover:border-[#C9A84C]/60 hover:text-[#C9A84C]"
            >
              Ver análisis de laboratorios
              <ArrowRight className="h-4 w-4" />
            </Link>
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
