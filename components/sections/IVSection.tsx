"use client";

import { motion } from "framer-motion";
import { Droplets, ShieldCheck, Star } from "lucide-react";
import { whatsappLink } from "@/content/site";

const therapies = [
  {
    name: "NAD+ Intravenoso",
    description:
      "Coenzima fundamental para la salud celular y el metabolismo energético. Disponible solo para pacientes que califiquen tras evaluación médica.",
    tags: ["Bienestar celular", "Metabolismo", "Vitalidad"],
  },
  {
    name: "Cóctel de Myers",
    description:
      "Infusión personalizada de vitaminas y minerales esenciales, formulada según las necesidades específicas de cada paciente.",
    tags: ["Vitaminas esenciales", "Micronutrientes", "Energía"],
  },
  {
    name: "Fórmulas IV Personalizadas",
    description:
      "Protocolos de nutrición intravenosa diseñados a medida según el perfil clínico y objetivos de cada paciente.",
    tags: ["Fórmula personalizada", "Supervisión médica", "A medida"],
  },
];

export default function IVSection() {
  return (
    <section id="terapia-iv" className="section-padding bg-[#FAF8F4]">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
              Terapias Intravenosas
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] mb-4">
              Nutrición IV
              <br />
              <span className="gold-text-gradient">bajo supervisión médica</span>
            </h2>
            <p className="text-base text-[#6B6B6B] leading-relaxed mb-6">
              Las terapias intravenosas de Aurum Nova están disponibles exclusivamente para
              pacientes que califiquen tras una evaluación médica completa. Cada protocolo
              es diseñado individualmente por nuestro equipo clínico.
            </p>

            <div className="flex items-start gap-3 bg-white border border-[#E8E4DA] rounded-xl p-4 mb-6">
              <ShieldCheck className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
              <p className="text-sm text-[#3D3D3D] leading-relaxed">
                <strong>Requisito médico:</strong> Toda terapia IV requiere evaluación previa,
                análisis de laboratorio, revisión de historial clínico y prescripción médica individual.
              </p>
            </div>

            <a
              href={whatsappLink("Hola, me gustaría conocer más sobre las terapias IV en Aurum Nova y cómo calificar para el programa.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-7 py-3.5 rounded-full text-base transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Droplets className="w-4 h-4" />
              Consultar sobre Terapias IV
            </a>
          </motion.div>

          {/* Right — therapy cards */}
          <div className="space-y-4">
            {therapies.map((therapy, i) => (
              <motion.div
                key={therapy.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-[#E8E4DA] rounded-2xl p-5 hover:border-[#C9A84C]/40 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center shrink-0">
                    <Star className="w-4 h-4 text-[#C9A84C]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A] mb-1.5">{therapy.name}</h3>
                    <p className="text-sm text-[#6B6B6B] leading-relaxed mb-3">
                      {therapy.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {therapy.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-[#FAF8F4] border border-[#E8E4DA] text-[#6B6B6B] px-2.5 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            <div className="bg-[#FAF8F4] border border-[#E8E4DA] rounded-xl p-4 text-xs text-[#9A9A9A] leading-relaxed">
              Las terapias intravenosas son administradas bajo supervisión médica continua.
              El acceso está condicionado a la evaluación clínica individual. Los resultados
              individuales varían.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
