"use client";

import { motion } from "framer-motion";
import {
  Activity,
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
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-[#FAF8F4] lg:min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#FAF8F4] to-[#EDE8DC]" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(ellipse at 70% 25%, rgba(201,168,76,0.14) 0%, transparent 55%),
                            radial-gradient(ellipse at 15% 80%, rgba(201,168,76,0.08) 0%, transparent 45%)`,
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent" />

      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-14 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center gap-2 bg-white border border-[#E8E4DA] rounded-full px-4 py-1.5 mb-6 shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
              <span className="text-xs font-semibold tracking-widest uppercase text-[#C9A84C]">
                Arecibo Medical Plaza · Suite 201
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] text-[#1A1A1A] mb-6">
              Control metabólico y{" "}
              <span className="gold-text-gradient">láser diodo</span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#6B6B6B]">
                en un ambiente clínico premium
              </span>
            </h1>

            <p className="text-lg text-[#6B6B6B] leading-relaxed mb-8 max-w-xl">
              Evaluación, protocolos personalizados y seguimiento guiado para que tu proceso sea
              claro, cómodo y responsable desde la primera visita.
            </p>

            {/* Trust signals */}
            <ul className="space-y-2.5 mb-10">
              {trust.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className={`flex items-center gap-3 text-sm text-[#3D3D3D] font-medium ${
                    i > 2 ? "hidden sm:flex" : ""
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-[#C9A84C] shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <a
                href={whatsappLink(HERO_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-7 py-3.5 rounded-full text-base transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                Agendar por WhatsApp
              </a>
              <a
                href={callLink()}
                className="inline-flex items-center justify-center gap-2 bg-white border border-[#E8E4DA] hover:border-[#C9A84C] text-[#1A1A1A] hover:text-[#C9A84C] font-semibold px-7 py-3.5 rounded-full text-base transition-all duration-200"
              >
                <Phone className="w-4 h-4" />
                Llamar a la clínica
              </a>
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white border border-[#E8E4DA] hover:border-[#C9A84C] text-[#1A1A1A] hover:text-[#C9A84C] font-semibold px-7 py-3.5 rounded-full text-base transition-all duration-200"
              >
                <MapPin className="w-4 h-4" />
                Ver ubicación
              </a>
            </motion.div>

            <p className="mt-4 text-xs leading-relaxed text-[#9A9A9A]">
              WhatsApp: {siteConfig.whatsappDisplay} · Llamadas: {siteConfig.callDisplay} solo
              llamadas
              <br className="sm:hidden" /> {siteConfig.addressShort}
            </p>
          </motion.div>

          {/* Right — visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative min-h-[620px] sm:aspect-[4/5] sm:min-h-0 rounded-3xl overflow-hidden bg-gradient-to-br from-[#EDE8DC] to-[#D4C9B0] flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.72),transparent_30%),radial-gradient(circle_at_82%_10%,rgba(201,168,76,0.26),transparent_28%),linear-gradient(145deg,#F7F3EA_0%,#E7DDCA_52%,#CFC1A4_100%)]" />
              <div className="absolute inset-x-8 top-8 h-36 rounded-full bg-white/35 blur-3xl" />
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#1A1A1A]/18 to-transparent" />

              <div className="relative z-10 flex h-full w-full flex-col p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1A1A1A] shadow-xl shadow-[#1A1A1A]/10">
                      <span className="text-sm font-bold tracking-[0.18em] text-[#E2C97E]">
                        AN
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-[#1A1A1A]">
                      Aurum Nova Wellness Clinic
                    </p>
                    <p className="mt-1 text-[11px] font-medium text-[#6B6B6B]">
                      Arecibo Medical Plaza · Suite 201
                    </p>
                  </div>
                  <div className="rounded-full border border-white/70 bg-white/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#C9A84C] shadow-sm">
                    Premium wellness
                  </div>
                </div>

                <div className="mt-7 rounded-[1.75rem] border border-white/70 bg-white/85 p-4 shadow-2xl shadow-[#1A1A1A]/10 backdrop-blur">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[#C9A84C]">
                        Ruta inicial
                      </p>
                      <h2 className="mt-1 text-lg font-semibold leading-tight text-[#1A1A1A]">
                        Evaluar antes de recomendar
                      </h2>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#C9A84C]/10">
                      <Activity className="h-5 w-5 text-[#C9A84C]" />
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {visualLabels.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.label}
                          className="min-h-[92px] rounded-2xl border border-[#E8E4DA] bg-[#FAF8F4] p-3"
                        >
                          <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-xl bg-[#C9A84C]/10">
                            <Icon className="h-4 w-4 text-[#C9A84C]" />
                          </div>
                          <p className="text-[11px] font-semibold leading-snug text-[#1A1A1A]">
                            {item.label}
                          </p>
                          <p className="mt-1 text-[10px] leading-snug text-[#8A8173]">
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

                <div className="mt-auto grid grid-cols-2 gap-3 pt-4">
                  <div className="rounded-2xl border border-white/65 bg-white/75 p-3 shadow-lg shadow-[#1A1A1A]/5 backdrop-blur">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#9A9A9A]">
                      Enfoque
                    </p>
                    <p className="mt-1 text-sm font-semibold leading-tight text-[#1A1A1A]">
                      Clínico y humano
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[#C9A84C]/25 bg-[#1A1A1A] p-3 shadow-lg shadow-[#1A1A1A]/10">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#E2C97E]">
                      Próximo paso
                    </p>
                    <p className="mt-1 text-sm font-semibold leading-tight text-white">
                      Orientación segura
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating stat */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 }}
                className="hidden sm:block absolute top-6 right-4 bg-white rounded-2xl shadow-lg p-4 max-w-[160px]"
              >
                <p className="text-[10px] text-[#9A9A9A] font-semibold uppercase tracking-wider mb-1">
                  Inicio
                </p>
                <p className="text-sm font-bold leading-tight text-[#1A1A1A]">
                  Quiz metabólico
                </p>
                <p className="text-xs text-[#C9A84C] font-medium">Educativo</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3 }}
                className="hidden sm:block absolute bottom-8 left-4 bg-white rounded-2xl shadow-lg p-4 max-w-[160px]"
              >
                <p className="text-[10px] text-[#9A9A9A] font-semibold uppercase tracking-wider mb-1">
                  Método
                </p>
                <p className="text-sm font-bold text-[#1A1A1A] leading-tight">
                  Evaluar · Orientar · Medir
                </p>
                <p className="text-xs text-[#C9A84C] font-medium mt-0.5">
                  Supervisión clínica
                </p>
              </motion.div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-[#C9A84C] opacity-8 blur-3xl" />
            <div className="absolute -top-6 -left-6 w-40 h-40 rounded-full bg-[#C9A84C] opacity-6 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
