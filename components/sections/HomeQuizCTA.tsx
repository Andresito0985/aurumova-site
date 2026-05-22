"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ClipboardList, ShieldCheck, Sparkles } from "lucide-react";
import MagneticCTA from "@/components/motion/MagneticCTA";
import HeadlineReveal from "@/components/motion/HeadlineReveal";

const bullets = [
  {
    icon: Sparkles,
    title: "Orientación clara en minutos",
    text: "Entiende tu punto de partida sin presión y sin compromisos.",
  },
  {
    icon: ShieldCheck,
    title: "Confidencial y educativo",
    text: "Tus respuestas son herramienta de orientación, no diagnóstico.",
  },
  {
    icon: ClipboardList,
    title: "Próximo paso recomendado",
    text: "Recibes guía sobre cómo continuar si decides explorar el programa.",
  },
];

export default function HomeQuizCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0E0E0E] py-20 px-4 sm:px-6 lg:px-8">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 80% 20%, rgba(201,168,76,0.18) 0%, transparent 55%), radial-gradient(ellipse at 10% 80%, rgba(201,168,76,0.08) 0%, transparent 50%)",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 bg-[#C9A84C]/10 border border-[#C9A84C]/20 text-[#C9A84C] text-xs font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-5">
              Quiz Metabólico
            </span>
            <HeadlineReveal
              as="h2"
              onMount={false}
              delay={0.1}
              className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-[-0.02em] text-white leading-[1.05] mb-5"
            >
              No tienes que decidir solo/a tu próximo paso.
            </HeadlineReveal>
            <p className="text-base text-[#9A9A9A] leading-relaxed mb-8 max-w-xl">
              El Quiz de Perfil Metabólico organiza lo básico — peso, apetito, hábitos,
              historial y objetivos — para darte una orientación inicial. La candidatura
              al programa se confirma únicamente mediante evaluación clínica.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <MagneticCTA strength={6}>
                <Link
                  href="/quiz-metabolico"
                  className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#A8872E] text-[#1A1A1A] font-semibold px-7 py-3.5 rounded-full text-base transition-all duration-200 shadow-[0_12px_36px_-10px_rgba(201,168,76,0.55)] hover:shadow-[0_16px_44px_-10px_rgba(201,168,76,0.7)] ring-1 ring-black/5"
                >
                  Hacer quiz metabólico
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </MagneticCTA>
              <Link
                href="/programa-metabolico"
                className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-[#C9A84C]/60 text-white hover:text-[#C9A84C] font-semibold px-7 py-3.5 rounded-full text-base transition-all duration-200"
              >
                Ver programa metabólico
              </Link>
            </div>

            <p className="mt-5 text-xs text-[#6B6B6B]">
              Esta información es educativa y no sustituye una evaluación médica. Los
              resultados pueden variar.
            </p>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-3"
          >
            {bullets.map((b) => {
              const Icon = b.icon;
              return (
                <li
                  key={b.title}
                  className="flex items-start gap-4 rounded-2xl border border-[#1F1F1F] bg-[#161616] p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#C9A84C]/10 border border-[#C9A84C]/20">
                    <Icon className="h-4 w-4 text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">{b.title}</p>
                    <p className="text-xs text-[#9A9A9A] leading-relaxed">{b.text}</p>
                  </div>
                </li>
              );
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
