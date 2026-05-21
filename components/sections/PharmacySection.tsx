"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FlaskConical } from "lucide-react";
import { whatsappLink } from "@/content/site";

export default function PharmacySection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#FAF8F4] border border-[#E8E4DA] rounded-3xl p-8 md:p-10"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#C9A84C]/10 flex items-center justify-center shrink-0">
                <FlaskConical className="w-6 h-6 text-[#C9A84C]" />
              </div>
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-[#C9A84C]">
                  Farmacia de Formulación
                </span>
                <h3 className="text-xl font-semibold text-[#1A1A1A] mt-1">
                  Terapias personalizadas, cuando clínicamente indicado
                </h3>
              </div>
            </div>

            <p className="text-base text-[#6B6B6B] leading-relaxed mb-6">
              Cuando clínicamente indicado, Aurum Nova puede coordinar con farmacias de formulación
              para terapias personalizadas prescritas según la evaluación individual del paciente.
              Esto ocurre solo cuando el médico lo considera apropiado para el perfil clínico específico.
            </p>

            <div className="bg-[#1A1A1A] rounded-xl p-5 mb-6">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
                <div className="text-sm text-[#9A9A9A] leading-relaxed space-y-2">
                  <p>
                    Los medicamentos formulados <strong className="text-[#E2C97E]">no son aprobados por FDA</strong>{" "}
                    ni son equivalentes genéricos de medicamentos aprobados por FDA.
                  </p>
                  <p>
                    Su uso requiere evaluación médica individual, prescripción profesional y revisión de
                    riesgos, beneficios, historial clínico, medicamentos actuales y contraindicaciones.
                  </p>
                  <p className="text-[#C9A84C] font-medium">
                    No todos los pacientes son candidatos.
                  </p>
                </div>
              </div>
            </div>

            <a
              href={whatsappLink("Hola, quisiera más información sobre las opciones de terapias personalizadas en Aurum Nova y cómo calificar tras una evaluación médica.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#A8872E] text-[#1A1A1A] font-semibold px-6 py-3 rounded-full text-sm transition-all duration-200"
            >
              Preguntar sobre elegibilidad
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
