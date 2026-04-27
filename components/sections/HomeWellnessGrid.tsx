"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Heart, Shield, Apple, Droplets, Syringe,
  Sparkles, Leaf, ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Wellness Mujer",
    description: "Peso, energía, metabolismo, piel, cabello y salud hormonal con seguimiento clínico.",
    href: "/wellness-mujer",
    color: "#A0687A",
    bg: "#FAF0F4",
  },
  {
    icon: Shield,
    title: "Wellness Hombre",
    description: "Control de grasa abdominal, energía, rendimiento y salud metabólica masculina.",
    href: "/wellness-hombre",
    color: "#4A6B8A",
    bg: "#EFF4FA",
  },
  {
    icon: Apple,
    title: "Nutrición Personalizada",
    description: "Plan nutricional de un mes diseñado a partir de tu perfil metabólico y objetivos clínicos.",
    href: "/nutricion",
    color: "#6B8F6B",
    bg: "#EFF5EF",
  },
  {
    icon: Droplets,
    title: "Sueroterapia NAD+ & Myers",
    description: "Terapias intravenosas de nutrientes bajo supervisión médica. Requiere evaluación.",
    href: "/sueroterapia",
    color: "#5B7FA6",
    bg: "#EEF3FA",
  },
  {
    icon: Syringe,
    title: "Inyectables Metabólicos",
    description: "L-Carnitina, Lipo Mino MIC y MIC como apoyo complementario al plan médico.",
    href: "/inyectables-metabolicos",
    color: "#7B6FA0",
    bg: "#F3F0FA",
  },
  {
    icon: Sparkles,
    title: "Skin & Glow",
    description: "Medicina estética de precisión. Bioestimulación, luminosidad y protocolos personalizados.",
    href: "/skin-glow",
    color: "#A08060",
    bg: "#FAF3EC",
  },
  {
    icon: Leaf,
    title: "Hair Support",
    description: "Salud capilar desde una perspectiva médica. Causas subyacentes y soluciones clínicas.",
    href: "/hair-support",
    color: "#7B6B5B",
    bg: "#F5F0EA",
  },
  {
    icon: ArrowRight,
    title: "Ver todos los programas",
    description: "Coaching & Seguimiento, Suplementación y más programas disponibles.",
    href: "/programa-metabolico",
    color: "#C9A84C",
    bg: "#FDF6E8",
  },
];

export default function HomeWellnessGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
            Todos los servicios
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] mb-3">
            Más allá del control de peso
          </h2>
          <p className="text-base text-[#6B6B6B] max-w-xl mx-auto leading-relaxed">
            Aurum Nova ofrece programas clínicos para múltiples objetivos de salud y bienestar,
            todos supervisados médicamente y personalizados individualmente.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.href + service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  href={service.href}
                  className="group flex flex-col bg-white border border-[#E8E4DA] rounded-2xl p-5 hover:border-[#C9A84C]/40 hover:shadow-lg transition-all duration-300 h-full"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-105"
                    style={{ backgroundColor: service.bg }}
                  >
                    <Icon className="w-5 h-5" style={{ color: service.color }} />
                  </div>
                  <h3 className="text-sm font-semibold text-[#1A1A1A] mb-1.5 group-hover:text-[#C9A84C] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#6B6B6B] leading-relaxed flex-1">{service.description}</p>
                  <div className="flex items-center gap-1 mt-3 text-xs text-[#C9A84C] font-medium">
                    Ver más
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <p className="text-center text-xs text-[#9A9A9A] mt-6">
          Todos los programas requieren evaluación médica previa. No todos los pacientes califican para todos los servicios.
        </p>
      </div>
    </section>
  );
}
