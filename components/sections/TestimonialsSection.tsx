"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

// Placeholder cards — do not display fabricated patient claims publicly.
// Replace with real authorized testimonials before production launch.
const placeholders = [
  { initials: "M.R.", program: "Programa Metabólico Integral" },
  { initials: "C.L.", program: "Láser Diodo" },
  { initials: "J.T.", program: "Wellness Hombre" },
];

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-[#FAF8F4]">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
            Experiencias
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] mb-4">
            Lo que dicen nuestros pacientes
          </h2>
          <p className="text-base text-[#6B6B6B] max-w-md mx-auto leading-relaxed">
            Los resultados pueden variar. Los testimonios publicados son autorizados por
            cada paciente y reflejan su experiencia individual.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {placeholders.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-[#E8E4DA] rounded-2xl p-6 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="w-4 h-4 text-[#E8E4DA] fill-[#E8E4DA]" />
                ))}
              </div>

              {/* Placeholder text */}
              <div className="space-y-2">
                <div className="h-3 bg-[#F0EDE6] rounded-full w-full" />
                <div className="h-3 bg-[#F0EDE6] rounded-full w-5/6" />
                <div className="h-3 bg-[#F0EDE6] rounded-full w-4/6" />
              </div>

              <p className="text-xs text-[#C9A84C] font-medium italic text-center">
                Testimonio autorizado próximamente
              </p>

              {/* Attribution */}
              <div className="flex items-center gap-3 pt-2 border-t border-[#F0EDE6]">
                <div className="w-8 h-8 rounded-full bg-[#EDE8DC] flex items-center justify-center">
                  <span className="text-xs font-semibold text-[#C9A84C]">{item.initials}</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#1A1A1A]">Paciente Aurum Nova</p>
                  <p className="text-[10px] text-[#9A9A9A]">{item.program}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-[#9A9A9A] mt-6">
          Los resultados individuales varían. Los testimonios autorizados se publicarán próximamente.
        </p>
      </div>
    </section>
  );
}
