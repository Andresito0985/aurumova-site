"use client";

import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

export default function MetabolicCompounding() {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-[#FAF8F4]">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white border border-[#E8E4DA] rounded-2xl p-6">
            <div className="flex items-start gap-3 mb-4">
              <AlertCircle className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
              <h3 className="text-sm font-semibold text-[#1A1A1A]">
                Aviso sobre medicamentos formulados (compounding)
              </h3>
            </div>
            <div className="space-y-3 text-xs text-[#6B6B6B] leading-relaxed">
              <p>
                Algunos elementos de este programa pueden incluir medicamentos formulados (compounded medications)
                preparados por farmacias de formulación acreditadas bajo prescripción médica individual,
                cuando clínicamente indicado.
              </p>
              <p className="font-semibold text-[#3D3D3D]">
                Los medicamentos formulados no son aprobados por la Administración de Alimentos y
                Medicamentos de los Estados Unidos (FDA). No son equivalentes genéricos de medicamentos
                aprobados por FDA. No han sido evaluados por FDA en cuanto a seguridad, efectividad
                ni calidad de manufactura de la forma particular en que se preparan.
              </p>
              <p>
                Su uso requiere evaluación médica individual, prescripción profesional y revisión de
                riesgos, beneficios, historial clínico, medicamentos actuales y contraindicaciones.
                Los riesgos y beneficios se discuten individualmente con el médico tratante durante
                la evaluación inicial.
              </p>
              <p>
                Aurum Nova Wellness Clinic no promociona ni prescribe medicamentos específicos a través
                de este sitio web. Toda prescripción es determinada por el médico tratante durante la
                consulta médica individual.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-[#E8E4DA]">
              <p className="text-xs text-[#9A9A9A]">
                Para más información sobre nuestro aviso médico completo, visita{" "}
                <a href="/disclaimer-medico" className="text-[#C9A84C] hover:underline">
                  Disclaimer Médico
                </a>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
