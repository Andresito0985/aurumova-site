"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  HeartPulse,
  LineChart,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { callLink, siteConfig, whatsappLink } from "@/content/site";
import HeadlineReveal from "@/components/motion/HeadlineReveal";
import MagneticCTA from "@/components/motion/MagneticCTA";
import { DUR, EASE_OUT_EXPO } from "@/components/motion/easing";

const trust = [
  "Evaluación clínica individualizada",
  "Protocolos médicos personalizados",
  "Seguimiento con métricas reales",
  "No todos califican — lo decimos con honestidad",
];

const visualLabels = [
  { label: "Quiz metabólico", detail: "Punto de partida", icon: ClipboardList },
  {
    label: "Evaluación clínica",
    detail: "Revisión individual",
    icon: ShieldCheck,
  },
  {
    label: "Seguimiento semanal",
    detail: "Métricas y ajustes",
    icon: LineChart,
  },
  {
    label: "Orientación personalizada",
    detail: "Próximo paso",
    icon: HeartPulse,
  },
];

const visualMetrics = [
  { label: "Hábitos", value: "Revisión", width: "72%" },
  { label: "Meta", value: "Orientativa", width: "58%" },
  { label: "Plan", value: "Clínico", width: "86%" },
];

const HERO_WHATSAPP_MESSAGE =
  "Hola, quiero agendar una evaluación en Aurum Nova Wellness Clinic. Me interesa orientación sobre control metabólico o láser diodo.";

export default function HomeHero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative flex min-h-[78vh] items-center overflow-hidden bg-[#FAF8F4] lg:min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#FAF8F4] to-[#EDE8DC]" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(ellipse at 70% 25%, rgba(201,168,76,0.14) 0%, transparent 55%),
                            radial-gradient(ellipse at 15% 80%, rgba(201,168,76,0.08) 0%, transparent 45%)`,
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent" />

      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-10 sm:pt-24 lg:pb-20">
        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reduce ? { duration: 0 } : { duration: 0.7 }}
          >
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reduce ? { duration: 0 } : { delay: 0.15 }}
              className="inline-flex items-center gap-2 bg-white border border-[#E8E4DA] rounded-full px-3.5 py-1.5 mb-5 shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-[#C9A84C]">
                Arecibo · Wellness Clinic
              </span>
            </motion.div>

            <HeadlineReveal
              as="h1"
              delay={0.15}
              className="text-[2.5rem] sm:text-5xl lg:text-7xl font-bold tracking-[-0.025em] leading-[1.02] text-[#1A1A1A] mb-3 sm:mb-4"
            >
              Control metabólico y{" "}
              <span className="text-[#A8872E]">láser diodo</span>
            </HeadlineReveal>
            <HeadlineReveal
              as="p"
              delay={0.55}
              y={16}
              className="text-xl sm:text-3xl lg:text-4xl font-normal text-[#6B6B6B] leading-[1.15] tracking-tight mb-5 sm:mb-6"
            >
              con seguimiento médico real.
            </HeadlineReveal>

            <p className="text-base sm:text-lg text-[#6B6B6B] leading-relaxed mb-6 sm:mb-8 max-w-xl">
              <span className="sm:hidden">
                Evaluación clínica, protocolo personal y seguimiento medible.
              </span>
              <span className="hidden sm:inline">
                Evaluación, protocolos personalizados y seguimiento guiado para que tu proceso sea
                claro, cómodo y responsable desde la primera visita.
              </span>
            </p>

            {/* Trust signals — solo 2 en mobile, 4 en sm+ */}
            <ul className="space-y-2 sm:space-y-2.5 mb-7 sm:mb-10">
              {trust.map((item, i) => (
                <motion.li
                  key={item}
                  initial={reduce ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={reduce ? { duration: 0 } : { delay: 0.4 + i * 0.08 }}
                  className={`flex items-center gap-3 text-sm text-[#3D3D3D] font-medium ${
                    i > 1 ? "hidden sm:flex" : ""
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-[#C9A84C] shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reduce ? { duration: 0 } : { delay: 0.75 }}
              className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3"
            >
              {/* Primary: Quiz */}
              <MagneticCTA strength={6}>
                <Link
                  href="/quiz-metabolico"
                  className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#A8872E] text-[#1A1A1A] font-semibold px-7 py-3.5 rounded-full text-base transition-all duration-200 shadow-[0_10px_30px_-10px_rgba(201,168,76,0.55)] hover:shadow-[0_16px_40px_-10px_rgba(201,168,76,0.7)] ring-1 ring-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1A1A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF8F4]"
                >
                  <ClipboardList className="w-4 h-4" />
                  Hacer quiz metabólico
                </Link>
              </MagneticCTA>
              {/* Secondary: WhatsApp (still primary contact intent, just demoted visually) */}
              <a
                href={whatsappLink(HERO_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white border border-[#E8E4DA] hover:border-[#C9A84C] text-[#1A1A1A] hover:text-[#A8872E] font-semibold px-7 py-3.5 rounded-full text-base transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1A1A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF8F4]"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <Link
                href="/programa-metabolico"
                className="hidden sm:inline-flex items-center justify-center gap-2 bg-transparent text-[#3D3D3D] hover:text-[#A8872E] font-semibold px-3 py-3.5 rounded-full text-base transition-colors duration-200"
              >
                Ver programa
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={callLink()}
                className="hidden lg:inline-flex items-center justify-center gap-2 bg-transparent text-[#3D3D3D] hover:text-[#A8872E] font-semibold px-3 py-3.5 rounded-full text-base transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                Llamar
              </a>
            </motion.div>

            {/* Acciones secundarias compactas solo en mobile */}
            <div className="flex sm:hidden items-center gap-4 mt-4 text-sm">
              <a
                href={callLink()}
                className="inline-flex items-center gap-1.5 text-[#3D3D3D] hover:text-[#C9A84C] font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-[#C9A84C]" />
                Llamar
              </a>
              <span className="text-[#E8E4DA]">·</span>
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#3D3D3D] hover:text-[#C9A84C] font-medium"
              >
                <MapPin className="w-3.5 h-3.5 text-[#C9A84C]" />
                Ubicación
              </a>
            </div>

            <p className="hidden sm:block mt-4 text-xs leading-relaxed text-[#9A9A9A]">
              WhatsApp: {siteConfig.whatsappDisplay} · Llamadas: {siteConfig.callDisplay} solo
              llamadas
              <br className="sm:hidden" /> {siteConfig.addressShort}
            </p>
          </motion.div>

          {/* Right — visual */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reduce ? { duration: 0 } : { duration: 0.55, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative lg:h-[680px] rounded-3xl overflow-hidden bg-gradient-to-br from-[#161616] via-[#121212] to-[#0A0A0A] ring-1 ring-[#C9A84C]/15 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.55)] flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(201,168,76,0.18),transparent_32%),radial-gradient(circle_at_82%_10%,rgba(201,168,76,0.12),transparent_28%),linear-gradient(145deg,#161616_0%,#121212_52%,#0A0A0A_100%)]" />
              <div className="absolute inset-x-8 top-8 h-36 rounded-full bg-[#C9A84C]/10 blur-3xl" />
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent" />
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                }}
              />

              <div className="relative z-10 flex h-full w-full flex-col p-5 sm:p-6 lg:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1A1A1A] p-1 ring-1 ring-[#C9A84C]/35 shadow-xl shadow-black/30">
                      <Image
                        src="/brand/aurum-nova-logo-transparent-4096.png"
                        alt="Aurum Nova"
                        width={64}
                        height={64}
                        priority
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <p className="text-sm font-semibold text-white">
                      Aurum Nova Wellness Clinic
                    </p>
                    <p className="mt-1 text-[11px] font-medium text-[#9A9A9A]">
                      Arecibo Medical Plaza · Suite 201
                    </p>
                  </div>
                  <div className="rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#E2C97E] shadow-sm">
                    Premium wellness
                  </div>
                </div>

                <div className="mt-6 rounded-[1.75rem] border border-[#C9A84C]/15 bg-[#171717]/85 p-4 shadow-2xl shadow-black/30 backdrop-blur">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[#E2C97E]">
                        Ruta inicial
                      </p>
                      <h2 className="mt-1 text-lg font-semibold leading-tight text-white">
                        Evaluar antes de recomendar
                      </h2>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#C9A84C]/12 ring-1 ring-[#C9A84C]/30">
                      <Activity className="h-5 w-5 text-[#C9A84C]" />
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {visualLabels.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.label}
                          className="min-h-[92px] rounded-2xl border border-[#2A2A2A] bg-[#121212] p-3"
                        >
                          <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-xl bg-[#C9A84C]/12 ring-1 ring-[#C9A84C]/25">
                            <Icon className="h-4 w-4 text-[#C9A84C]" />
                          </div>
                          <p className="text-[11px] font-semibold leading-snug text-white">
                            {item.label}
                          </p>
                          <p className="mt-1 text-[10px] leading-snug text-[#9A9A9A]">
                            {item.detail}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-5 rounded-2xl border border-[#2D2D2D] bg-[#1A1A1A] p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[#E2C97E]">
                        Perfil orientativo
                      </p>
                      <span className="rounded-full bg-[#C9A84C]/10 px-2.5 py-1 text-[10px] font-semibold text-[#E2C97E]">
                        No diagnóstico
                      </span>
                    </div>
                    <div className="space-y-3">
                      {visualMetrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="grid grid-cols-[68px_1fr] items-center gap-3"
                        >
                          <span className="text-[10px] font-medium text-[#9A9A9A]">
                            {metric.label}
                          </span>
                          <div>
                            <div className="h-2 rounded-full bg-white/10">
                              <div
                                className="h-full rounded-full bg-gradient-to-r from-[#C9A84C] to-[#E2C97E]"
                                style={{ width: metric.width }}
                              />
                            </div>
                            <p className="mt-1 text-[10px] text-[#6B6B6B]">
                              {metric.value}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-auto grid grid-cols-2 gap-3 pt-5">
                  <div className="rounded-2xl border border-[#2A2A2A] bg-[#171717]/85 p-3 shadow-lg shadow-black/20 backdrop-blur">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#9A9A9A]">
                      Enfoque
                    </p>
                    <p className="mt-1 text-sm font-semibold leading-tight text-white">
                      Clínico y humano
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[#C9A84C]/30 bg-[#C9A84C]/[0.06] p-3 shadow-lg shadow-black/30">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#E2C97E]">
                      Próximo paso
                    </p>
                    <p className="mt-1 text-sm font-semibold leading-tight text-white">
                      Orientación segura
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating "Quiz metabólico" badge — inside the rounded
                  dashboard container so overflow-hidden keeps it safely
                  framed. Sits over the dashboard content via z-20. */}
              <motion.div
                initial={reduce ? false : { opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={reduce ? { duration: 0 } : { duration: 0.4, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
                className="hidden lg:block absolute top-5 right-5 z-20 bg-white/95 backdrop-blur-md ring-1 ring-black/5 rounded-2xl shadow-xl shadow-black/30 p-3.5 max-w-[156px]"
              >
                <p className="text-[10px] text-[#9A9A9A] font-semibold uppercase tracking-wider mb-1">
                  Inicio
                </p>
                <p className="text-sm font-bold leading-tight text-[#1A1A1A]">
                  Quiz metabólico
                </p>
                <p className="text-xs text-[#A8872E] font-semibold">Educativo</p>
              </motion.div>

              {/* Floating "Método" badge — same inside-the-card pattern */}
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={reduce ? { duration: 0 } : { duration: 0.4, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
                className="hidden lg:block absolute bottom-6 left-5 z-20 bg-white/95 backdrop-blur-md ring-1 ring-black/5 rounded-2xl shadow-xl shadow-black/30 p-3.5 max-w-[176px]"
              >
                <p className="text-[10px] text-[#9A9A9A] font-semibold uppercase tracking-wider mb-1">
                  Método
                </p>
                <p className="text-sm font-bold text-[#1A1A1A] leading-tight">
                  Evaluar · Orientar · Medir
                </p>
                <p className="text-xs text-[#A8872E] font-semibold mt-0.5">
                  Supervisión clínica
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
