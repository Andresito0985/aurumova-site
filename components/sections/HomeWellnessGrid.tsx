"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Heart,
  Shield,
  Apple,
  Droplets,
  Syringe,
  Sparkles,
  Leaf,
  Zap,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import HeadlineReveal from "@/components/motion/HeadlineReveal";

type Service = {
  icon: LucideIcon;
  category: string;
  title: string;
  description: string;
  href: string;
  cta?: string;
  priority?: boolean; // top picks shown in mobile
};

const services: Service[] = [
  {
    icon: Heart,
    category: "Wellness mujer",
    title: "Wellness Mujer",
    description:
      "Programa con seguimiento clínico para metas metabólicas, energía, piel, cabello y bienestar femenino.",
    href: "/wellness-mujer",
    priority: true,
  },
  {
    icon: Shield,
    category: "Wellness hombre",
    title: "Wellness Hombre",
    description:
      "Apoyo clínico para composición corporal, energía, rendimiento y salud metabólica masculina.",
    href: "/wellness-hombre",
    priority: true,
  },
  {
    icon: Droplets,
    category: "Sueroterapia",
    title: "Sueroterapia NAD+ & Myers",
    description:
      "Protocolos IV de hidratación y soporte wellness, sujetos a evaluación y criterio clínico.",
    href: "/sueroterapia",
    priority: true,
  },
  {
    icon: Sparkles,
    category: "Estética médica",
    title: "Skin & Glow",
    description:
      "Protocolos médico-estéticos para luminosidad, calidad de piel y bienestar integral.",
    href: "/skin-glow",
    priority: true,
  },
  {
    icon: Apple,
    category: "Nutrición",
    title: "Nutrición Personalizada",
    description:
      "Plan alimentario diseñado según tu perfil metabólico, objetivos y criterio clínico.",
    href: "/nutricion",
  },
  {
    icon: Syringe,
    category: "Inyectables wellness",
    title: "Inyectables Metabólicos",
    description:
      "Apoyo wellness complementario al plan médico, sujeto a evaluación y criterio clínico.",
    href: "/inyectables-metabolicos",
  },
  {
    icon: Leaf,
    category: "Capilar",
    title: "Hair Support",
    description:
      "Apoyo capilar desde un enfoque clínico: causas subyacentes, evaluación y seguimiento.",
    href: "/hair-support",
  },
];

export default function HomeWellnessGrid() {
  const reduce = useReducedMotion();
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reduce ? { duration: 0 } : undefined}
          className="max-w-3xl mb-10 sm:mb-12"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
            Más servicios
          </span>
          <HeadlineReveal
            as="h2"
            onMount={false}
            delay={0.05}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-[#1A1A1A] mb-3 leading-[1.05]"
          >
            Más allá del control de peso
          </HeadlineReveal>
          <p className="text-base text-[#6B6B6B] max-w-xl leading-relaxed">
            Servicios clínicos para distintos objetivos de salud y bienestar,
            todos con evaluación, seguimiento y experiencia premium.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Featured: Láser Diodo (secondary feature — PM is already featured above in FeaturedPrograma) */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={reduce ? { duration: 0 } : undefined}
            className="sm:col-span-2 lg:col-span-2"
          >
            <Link
              href="/laser-diodo"
              className="group relative flex h-full min-h-[180px] flex-col overflow-hidden rounded-3xl border border-[#1A1A1A] bg-[#1A1A1A] p-6 sm:p-7 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.6)]"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(ellipse at 85% 18%, rgba(201,168,76,0.4) 0%, transparent 55%), radial-gradient(ellipse at 12% 90%, rgba(201,168,76,0.15) 0%, transparent 50%)",
                }}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)",
                  backgroundSize: "44px 44px",
                }}
              />
              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#C9A84C]/12 ring-1 ring-[#C9A84C]/30">
                    <Zap className="h-5 w-5 text-[#C9A84C]" />
                  </div>
                  <span className="rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#E2C97E]">
                    Servicio estético principal
                  </span>
                </div>
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-[#C9A84C]">
                  Estética clínica
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight tracking-[-0.01em]">
                  Láser Diodo High-Tech
                </h3>
                <p className="text-sm text-[#BDB7AA] leading-relaxed flex-1 max-w-xl">
                  Reducción progresiva del vello con evaluación por zona, plan
                  personalizado y experiencia clínica privada. Resultados
                  pueden variar según piel, vello y adherencia.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#E2C97E] group-hover:text-[#C9A84C] transition-colors">
                  Ver Láser Diodo
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </motion.div>

          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.href}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={reduce ? { duration: 0 } : { delay: 0.05 + i * 0.05 }}
                className={service.priority ? "" : "hidden sm:block"}
              >
                <Link
                  href={service.href}
                  className="group flex h-full flex-col rounded-2xl border border-[#E8E4DA] bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C9A84C]/50 hover:shadow-lg hover:shadow-[#1A1A1A]/5"
                >
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#C9A84C]/10">
                      <Icon className="h-5 w-5 text-[#C9A84C]" />
                    </div>
                    <ArrowRight className="h-4 w-4 text-[#C9A84C] opacity-40 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100" />
                  </div>
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-[#9A9A9A]">
                    {service.category}
                  </p>
                  <h3 className="text-base font-semibold text-[#1A1A1A] mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#6B6B6B] leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#C9A84C]">
                    {service.cta ?? "Ver servicio"}
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile-only: el resto de servicios vive en /servicios para evitar scroll largo */}
        <Link
          href="/servicios"
          className="sm:hidden mt-6 flex items-center justify-center gap-2 w-full rounded-full border border-[#E8E4DA] bg-white py-3.5 text-sm font-semibold text-[#1A1A1A] transition-colors hover:border-[#C9A84C] hover:text-[#C9A84C]"
        >
          Ver todos los servicios
          <ArrowRight className="h-4 w-4" />
        </Link>

        <p className="mt-8 text-xs text-[#9A9A9A] max-w-2xl">
          Requiere evaluación clínica. No todos los pacientes cualifican. Los resultados
          pueden variar.
        </p>
      </div>
    </section>
  );
}
