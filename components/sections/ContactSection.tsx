"use client";

import { motion } from "framer-motion";
import LeadForm from "@/components/forms/LeadForm";

export default function ContactSection() {
  return (
    <section className="section-padding bg-[#FAF8F4]">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
              Contacto
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] mb-4">
              ¿Listo para comenzar
              <br />
              <span className="gold-text-gradient">tu proceso?</span>
            </h2>
            <p className="text-base text-[#6B6B6B] leading-relaxed mb-6">
              Completa el formulario y te contactaremos para coordinar tu evaluación médica
              inicial. Este es el primer paso hacia un programa diseñado exclusivamente para ti.
            </p>

            <div className="space-y-4">
              {[
                "No necesitas venir a la clínica para consultar",
                "Primer contacto completamente sin costo",
                "El médico determina el programa adecuado para ti",
                "No todos los pacientes califican para todos los programas",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#C9A84C]/15 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
                  </div>
                  <p className="text-sm text-[#3D3D3D]">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <LeadForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
