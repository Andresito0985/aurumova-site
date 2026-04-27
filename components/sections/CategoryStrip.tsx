"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Activity, Zap, Heart, Shield, Apple, Droplets, Syringe,
  Sparkles, Leaf, LineChart,
} from "lucide-react";

const categories = [
  {
    icon: Activity,
    title: "Programa Metabólico Integral",
    benefit: "Control metabólico médico con resultados medibles",
    href: "/programa-metabolico",
    color: "#C9A84C",
    bg: "#FDF6E8",
  },
  {
    icon: Zap,
    title: "Láser Diodo High-Tech",
    benefit: "Remoción de vello permanente. Zonas desde $20",
    href: "/laser-diodo",
    color: "#8B7355",
    bg: "#F5F0E8",
  },
  {
    icon: Heart,
    title: "Wellness Mujer",
    benefit: "Metabolismo, energía, piel y hormonal",
    href: "/wellness-mujer",
    color: "#A0687A",
    bg: "#FAF0F4",
  },
  {
    icon: Shield,
    title: "Wellness Hombre",
    benefit: "Grasa abdominal, energía y rendimiento",
    href: "/wellness-hombre",
    color: "#4A6B8A",
    bg: "#EFF4FA",
  },
  {
    icon: Apple,
    title: "Nutrición Personalizada",
    benefit: "Plan clínico de alimentación por 1 mes",
    href: "/nutricion",
    color: "#6B8F6B",
    bg: "#EFF5EF",
  },
  {
    icon: Droplets,
    title: "Sueroterapia NAD+ & Myers",
    benefit: "Terapias IV bajo supervisión médica",
    href: "/sueroterapia",
    color: "#5B7FA6",
    bg: "#EEF3FA",
  },
  {
    icon: Syringe,
    title: "Inyectables Metabólicos",
    benefit: "L-Carnitina, Lipo Mino MIC y MIC",
    href: "/inyectables-metabolicos",
    color: "#7B6FA0",
    bg: "#F3F0FA",
  },
  {
    icon: Sparkles,
    title: "Skin & Glow",
    benefit: "Medicina estética de precisión",
    href: "/skin-glow",
    color: "#A08060",
    bg: "#FAF3EC",
  },
  {
    icon: Leaf,
    title: "Hair Support",
    benefit: "Salud capilar con base clínica",
    href: "/hair-support",
    color: "#7B6B5B",
    bg: "#F5F0EA",
  },
  {
    icon: LineChart,
    title: "Coaching & Seguimiento",
    benefit: "Métricas reales y ajuste de protocolo",
    href: "/coaching-seguimiento",
    color: "#5B7B8A",
    bg: "#EEF3F5",
  },
];

export default function CategoryStrip() {
  return (
    <section className="bg-white border-b border-[#E8E4DA] py-8 overflow-hidden">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#9A9A9A] text-center mb-6">
          Todos los programas
        </p>
        {/* Scrollable strip */}
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.href}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                className="snap-start shrink-0"
              >
                <Link
                  href={cat.href}
                  className="flex flex-col items-center text-center w-[130px] sm:w-[140px] p-4 rounded-2xl border border-[#E8E4DA] hover:border-[#C9A84C]/40 hover:shadow-md transition-all duration-200 group bg-white"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-2.5 transition-transform group-hover:scale-105"
                    style={{ backgroundColor: cat.bg }}
                  >
                    <Icon className="w-5 h-5" style={{ color: cat.color }} />
                  </div>
                  <p className="text-xs font-semibold text-[#1A1A1A] leading-snug mb-1 line-clamp-2">
                    {cat.title}
                  </p>
                  <p className="text-[10px] text-[#9A9A9A] leading-snug line-clamp-2">
                    {cat.benefit}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
