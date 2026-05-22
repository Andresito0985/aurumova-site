"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Stethoscope } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Seguridad primero",
    description:
      "Cada protocolo incluye revisión de contraindicaciones, análisis de historial clínico y evaluación de riesgos antes de iniciar cualquier terapia.",
  },
  {
    icon: Stethoscope,
    title: "Evaluación médica completa",
    description:
      "No trabajamos con protocolos genéricos. La evaluación clínica individualizada es el punto de partida de todo lo que hacemos en Aurum Nova.",
  },
  {
    icon: Award,
    title: "Documentación y evidencia",
    description:
      "Documentamos tu progreso, tu respuesta clínica y los ajustes del protocolo. Los resultados se miden, no se imaginan.",
  },
];

export default function TeamSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-[#EDE8DC] to-[#D8D0C0] flex flex-col items-center justify-center text-center p-8">
                <div className="w-24 h-24 rounded-full bg-[#C9A84C]/20 flex items-center justify-center mb-4">
                  <Stethoscope className="w-12 h-12 text-[#C9A84C]/60" />
                </div>
                <p className="text-sm font-semibold text-[#6B6B6B]">Foto del equipo clínico</p>
                <p className="text-xs text-[#9A9A9A] mt-1">Próximamente</p>
              </div>

              {/* Credential badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl border border-[#E8E4DA] p-4"
              >
                <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-wider mb-1">
                  Aurum Nova
                </p>
                <p className="text-sm font-bold text-[#1A1A1A] leading-tight">
                  Medicina Wellness
                </p>
                <p className="text-xs text-[#9A9A9A]">Arecibo, Puerto Rico</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
              Nuestro Enfoque
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] mb-4 leading-tight">
              Medicina wellness moderna,
              <br />
              <span className="text-[#A8872E]">diseñada alrededor de ti</span>
            </h2>
            <p className="text-base text-[#6B6B6B] leading-relaxed mb-8">
              En Aurum Nova combinamos evaluación clínica, tecnología estética, seguimiento
              medible y una experiencia premium para ayudarte a verte mejor, sentirte mejor
              y sostener tu progreso con acompañamiento profesional.
            </p>

            <div className="space-y-5">
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#C9A84C]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#1A1A1A] mb-1">{pillar.title}</h3>
                      <p className="text-sm text-[#6B6B6B] leading-relaxed">{pillar.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
