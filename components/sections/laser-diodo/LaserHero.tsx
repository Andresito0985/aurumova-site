"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck, ChevronLeft, ShieldCheck, Sparkles, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { whatsappLink } from "@/content/site";
import { laserVisualByPlacement } from "@/content/laser-visuals";

const CTA_MSG =
  "Hola, me interesa agendar una evaluación para Láser Diodo High-Tech en Aurum Nova. Me gustaría conocer los planes disponibles.";

function HeroImageFallback() {
  return (
    <div className="absolute inset-0 bg-[#141414]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(201,168,76,0.22),transparent_34%),linear-gradient(135deg,#141414_0%,#24201A_52%,#141414_100%)]" />
    </div>
  );
}

export default function LaserHero() {
  const heroVisual =
    laserVisualByPlacement.experience ?? laserVisualByPlacement.technology ?? laserVisualByPlacement.hero;

  return (
    <section className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden bg-[#141414] px-4 pb-16 pt-24 sm:px-6 lg:px-8">
      {heroVisual ? (
        <Image
          src={heroVisual.src}
          alt={heroVisual.alt}
          fill
          preload
          sizes="100vw"
          className="object-cover opacity-70"
          style={{ objectPosition: heroVisual.objectPosition ?? "70% center" }}
        />
      ) : (
        <HeroImageFallback />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/95 via-[#111111]/80 to-[#111111]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-[#111111]/55" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-[radial-gradient(circle_at_24%_40%,rgba(201,168,76,0.2),transparent_45%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="container-max relative">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-[#6B6B6B] hover:text-[#C9A84C] transition-colors"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            Inicio
          </Link>
        </motion.div>

        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C9A84C]/30 bg-black/35 px-3.5 py-1.5 backdrop-blur-md"
          >
            <Zap className="h-3.5 w-3.5 text-[#C9A84C]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A84C]">
              Láser Diodo High-Tech
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mb-5 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Reducción de vello con{" "}
            <span className="bg-gradient-to-r from-[#C9A84C] via-[#F2D987] to-[#C9A84C] bg-clip-text text-transparent">
              tecnología diodo
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 max-w-2xl text-base leading-relaxed text-[#D9D2C5] sm:text-lg"
          >
            Una experiencia láser privada y guiada para trabajar la reducción progresiva del vello
            por zona, con evaluación de piel, densidad de vello y plan de seguimiento.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mb-8 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href={whatsappLink(CTA_MSG)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A84C] px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-[#C9A84C]/25 transition-all duration-200 hover:bg-[#A8872E]"
            >
              Agendar evaluación
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#planes-laser"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-black/25 px-7 py-3.5 text-sm font-medium text-[#F4EFE5] backdrop-blur transition-all duration-200 hover:border-[#C9A84C]/50 hover:text-[#C9A84C]"
            >
              Ver planes disponibles
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="grid gap-3 sm:grid-cols-3"
          >
            {[
              { icon: CalendarCheck, label: "Evaluación por zona" },
              { icon: ShieldCheck, label: "Ambiente clínico privado" },
              { icon: Sparkles, label: "Resultados pueden variar" },
            ].map((chip) => {
              const Icon = chip.icon;
              return (
                <div
                  key={chip.label}
                  className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/35 px-4 py-3 backdrop-blur-md"
                >
                  <Icon className="h-4 w-4 shrink-0 text-[#C9A84C]" />
                  <span className="text-xs font-medium text-[#E8E4DA]">{chip.label}</span>
                </div>
              );
            })}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="mt-5 max-w-xl text-xs leading-relaxed text-[#AFA79A]"
          >
            Los resultados varían según zona, tipo de piel, características del vello y adherencia
            al plan. Se requiere evaluación previa.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
