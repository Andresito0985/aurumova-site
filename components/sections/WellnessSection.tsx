"use client";

import { motion } from "framer-motion";
import { Heart, Shield, Sparkles, Leaf } from "lucide-react";
import { whatsappLink } from "@/content/site";

const wellnessPrograms = [
  {
    icon: Heart,
    title: "Bienestar Femenino",
    subtitle: "Salud integral para la mujer",
    description:
      "Programa médico que aborda el balance hormonal, salud metabólica, nutrición y calidad de vida femenina en cada etapa.",
    whatsappMsg: "Hola, me interesa el programa de Bienestar Femenino en Aurum Nova. ¿Cuál es el proceso?",
    id: "bienestar",
  },
  {
    icon: Shield,
    title: "Bienestar Masculino",
    subtitle: "Rendimiento y vitalidad clínica",
    description:
      "Optimización de composición corporal, niveles hormonales, salud cardiovascular y metabólica bajo supervisión médica.",
    whatsappMsg: "Hola, me interesa el programa de Bienestar Masculino en Aurum Nova.",
    id: null,
  },
  {
    icon: Sparkles,
    title: "Skin & Glow",
    subtitle: "Medicina estética de precisión",
    description:
      "Tratamientos médico-estéticos para revitalizar, iluminar y rejuvenecer la piel con protocolos clínicos personalizados.",
    whatsappMsg: "Hola, quisiera conocer los tratamientos de Skin & Glow en Aurum Nova.",
    id: null,
  },
  {
    icon: Leaf,
    title: "Soporte Capilar",
    subtitle: "Salud del cabello con base clínica",
    description:
      "Evaluación médica del cabello, identificación de causas subyacentes y soluciones clínicas basadas en evidencia.",
    whatsappMsg: "Hola, me interesa el programa de Soporte Capilar en Aurum Nova.",
    id: null,
  },
];

export default function WellnessSection() {
  return (
    <section id="bienestar" className="section-padding bg-[#FAF8F4]">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
            Programas de Bienestar
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] mb-4">
            Bienestar integral
            <br className="hidden sm:block" /> para hombres y mujeres
          </h2>
          <p className="text-base text-[#6B6B6B] max-w-xl mx-auto leading-relaxed">
            Programas médicos especializados que van más allá de la báscula, enfocados en
            tu salud total con seguimiento clínico continuo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {wellnessPrograms.map((program, i) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                id={program.id ?? undefined}
                className="group bg-white border border-[#E8E4DA] rounded-2xl p-6 hover:border-[#C9A84C]/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#C9A84C]/10 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-[#C9A84C]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#1A1A1A] mb-0.5">{program.title}</h3>
                    <p className="text-xs text-[#C9A84C] font-medium mb-3">{program.subtitle}</p>
                    <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4">{program.description}</p>
                    <a
                      href={whatsappLink(program.whatsappMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-semibold text-[#C9A84C] hover:text-[#A8872E] transition-colors"
                    >
                      Más información →
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
