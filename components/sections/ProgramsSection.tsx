"use client";

import { motion } from "framer-motion";
import {
  Activity, Zap, Droplets, Syringe, Heart, Shield,
  Sparkles, Leaf, Apple, ArrowRight,
} from "lucide-react";
import { programs, type Program } from "@/content/programs";
import { whatsappLink } from "@/content/site";

const iconMap: Record<string, React.ElementType> = {
  Activity, Zap, Droplets, Syringe, Heart, Shield, Sparkles, Leaf, Apple,
};

const categoryColors: Record<Program["category"], string> = {
  metabolic: "#C9A84C",
  aesthetic: "#8B7355",
  iv: "#5B7FA6",
  wellness: "#6B8F6B",
};

const categoryLabels: Record<Program["category"], string> = {
  metabolic: "Metabólico",
  aesthetic: "Estético",
  iv: "Terapia IV",
  wellness: "Bienestar",
};

function ProgramCard({ program, index }: { program: Program; index: number }) {
  const Icon = iconMap[program.icon] || Activity;
  const accentColor = categoryColors[program.category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="group bg-white rounded-2xl border border-[#E8E4DA] p-6 hover:border-[#C9A84C]/40 hover:shadow-lg transition-all duration-300 flex flex-col"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${accentColor}15` }}
        >
          <Icon className="w-5 h-5" style={{ color: accentColor }} />
        </div>
        <span
          className="text-xs font-semibold px-2.5 py-1 rounded-full"
          style={{ backgroundColor: `${accentColor}12`, color: accentColor }}
        >
          {categoryLabels[program.category]}
        </span>
      </div>

      {/* Content */}
      <h3 className="text-base font-semibold text-[#1A1A1A] mb-1 leading-snug">
        {program.title}
      </h3>
      <p className="text-xs text-[#C9A84C] font-medium mb-3">{program.subtitle}</p>
      <p className="text-sm text-[#6B6B6B] leading-relaxed mb-5 flex-1">
        {program.description}
      </p>

      {/* Features */}
      <ul className="space-y-1.5 mb-6">
        {program.features.slice(0, 4).map((f) => (
          <li key={f} className="flex items-start gap-2 text-xs text-[#3D3D3D]">
            <span className="mt-1 w-1 h-1 rounded-full bg-[#C9A84C] shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href={whatsappLink(program.whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center justify-between gap-2 w-full text-sm font-semibold text-[#1A1A1A] group-hover:text-[#C9A84C] border border-[#E8E4DA] group-hover:border-[#C9A84C]/40 rounded-xl px-4 py-3 transition-all duration-200"
      >
        <span>Más información</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
      </a>
    </motion.div>
  );
}

export default function ProgramsSection() {
  return (
    <section id="programas" className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
            Programas Clínicos
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] mb-4">
            Un programa para cada
            <br className="hidden sm:block" /> objetivo de salud
          </h2>
          <p className="text-base text-[#6B6B6B] max-w-xl mx-auto leading-relaxed">
            Cada programa comienza con una evaluación médica individualizada.
            El acceso a terapias específicas depende de los resultados de tu evaluación clínica.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {programs.map((program, i) => (
            <ProgramCard key={program.id} program={program} index={i} />
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 bg-[#FAF8F4] border border-[#E8E4DA] rounded-xl p-4 text-xs text-[#9A9A9A] text-center leading-relaxed"
        >
          Todos los programas requieren evaluación médica previa. El acceso a terapias específicas
          está sujeto a los resultados individuales de cada evaluación clínica. No todos los
          pacientes califican para todas las terapias. Los resultados individuales varían.
        </motion.div>
      </div>
    </section>
  );
}
