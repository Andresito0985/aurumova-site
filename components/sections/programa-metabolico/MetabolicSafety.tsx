"use client";

import { motion } from "framer-motion";
import { ShieldCheck, AlertCircle, Stethoscope, ClipboardList } from "lucide-react";

const safetyPoints = [
  {
    icon: Stethoscope,
    title: "Evaluación médica previa obligatoria",
    description: "Ningún elemento del protocolo se inicia sin evaluación médica completa. El médico determina qué intervenciones son apropiadas para ti.",
  },
  {
    icon: ClipboardList,
    title: "Revisión de historial y medicamentos",
    description: "Se revisan interacciones con medicamentos actuales, condiciones preexistentes y contraindicaciones individuales antes de cualquier prescripción.",
  },
  {
    icon: ShieldCheck,
    title: "Monitoreo continuo de tolerancia",
    description: "Cada sesión semanal incluye evaluación de tolerancia a la terapia. El protocolo se ajusta si es necesario.",
  },
  {
    icon: AlertCircle,
    title: "Canal de comunicación directa",
    description: "Acceso al equipo clínico entre sesiones para reportar síntomas o cambios que requieran atención antes de la próxima cita.",
  },
];

export default function MetabolicSafety() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-4">
              Seguridad clínica
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-5 leading-tight">
              Cómo garantizamos un protocolo seguro y supervisado
            </h2>
            <div className="space-y-4 text-[#6B6B6B] text-sm leading-relaxed">
              <p>
                El Programa Metabólico Integral no es un protocolo que se entrega y se sigue
                solo. Cada elemento está supervisado por el médico tratante, quien ajusta
                el protocolo según la respuesta individual del paciente.
              </p>
              <p>
                El seguimiento semanal no es opcional — es parte estructural del programa.
                Sin monitoreo continuo no hay ajuste de protocolo, y sin ajuste de protocolo
                no hay programa seguro.
              </p>
            </div>

            <div className="mt-6 bg-[#FAF8F4] border border-[#E8E4DA] rounded-xl p-4">
              <p className="text-xs text-[#6B6B6B] leading-relaxed italic">
                Si en algún momento durante el programa desarrollas síntomas inesperados,
                el médico evaluará si es necesario suspender, ajustar o cambiar el protocolo.
                Tu seguridad tiene prioridad sobre el ritmo del programa.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {safetyPoints.map((point, i) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-start gap-4 bg-[#FAF8F4] border border-[#E8E4DA] rounded-2xl p-4"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center shrink-0">
                    <Icon className="w-4.5 h-4.5 text-[#C9A84C]" style={{ width: 18, height: 18 }} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#1A1A1A] mb-1">{point.title}</h3>
                    <p className="text-xs text-[#6B6B6B] leading-relaxed">{point.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
