"use client";

import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle } from "lucide-react";

const prepSteps = [
  "Evitar exposición solar en la zona a tratar en los días previos cuando sea posible.",
  "No depilar con cera ni arrancar el vello antes de las sesiones.",
  "Afeitar la zona antes de la cita si así lo indica el proveedor.",
  "Informar sobre medicamentos actuales o sensibilidad en la piel.",
  "La evaluación inicial es necesaria antes de comenzar cualquier plan.",
];

const aftercareSteps = [
  "Evitar exposición solar excesiva después de las sesiones.",
  "Aplicar protector solar en zonas tratadas cuando corresponda.",
  "Evitar productos irritantes en la zona tratada por el tiempo que indique el proveedor.",
  "Seguir las instrucciones específicas del proveedor para cada zona.",
  "Reportar cualquier irritación inesperada o inusual al equipo.",
];

const evalCards = [
  { title: "Quemadura solar reciente", detail: "Consulta antes de tratar zonas afectadas." },
  { title: "Irritación activa en la piel", detail: "Puede requerir posponer el tratamiento." },
  { title: "Medicamentos fotosensibilizantes", detail: "Algunos medicamentos requieren evaluación previa." },
  { title: "Embarazo o condiciones especiales", detail: "Informa al equipo antes de la evaluación." },
  { title: "Depilación reciente con cera", detail: "Espera el tiempo indicado antes de la sesión." },
  { title: "Historial de sensibilidad cutánea", detail: "El proveedor evalúa el protocolo adecuado." },
];

export default function LaserPrepAftercare() {
  return (
    <>
      <section className="section-padding bg-[#FAF8F4]">
        <div className="container-max">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
              Antes y después
            </span>
            <h2 className="mb-4 text-2xl font-semibold text-[#1A1A1A] sm:text-3xl">
              Cómo prepararte para tu sesión
            </h2>
            <p className="text-sm leading-relaxed text-[#6B6B6B] sm:text-base">
              Instrucciones simples para que la evaluación y la sesión se realicen de forma
              organizada y segura.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-[1.5rem] border border-[#E8E4DA] bg-white p-5 shadow-sm sm:p-6"
            >
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-4">
                Preparación
              </span>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#1A1A1A] mb-5">
                Antes de tu sesión
              </h2>
              <ul className="space-y-3">
                {prepSteps.map((step, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" />
                    <p className="text-sm text-[#6B6B6B] leading-relaxed">{step}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-[1.5rem] border border-[#E8E4DA] bg-white p-5 shadow-sm sm:p-6"
            >
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-4">
                Cuidado posterior
              </span>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#1A1A1A] mb-5">
                Después de tu sesión
              </h2>
              <ul className="space-y-3">
                {aftercareSteps.map((step, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" />
                    <p className="text-sm text-[#6B6B6B] leading-relaxed">{step}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
              Evaluación previa
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-4">
              Cuándo consultar antes de comenzar
            </h2>
            <p className="text-sm text-[#6B6B6B] max-w-lg mx-auto leading-relaxed">
              En las siguientes situaciones, asegúrate de informar al equipo durante la evaluación
              inicial. El proveedor determinará el protocolo adecuado.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {evalCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-white border border-[#E8E4DA] rounded-2xl p-4 flex items-start gap-3"
              >
                <AlertCircle className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-[#1A1A1A] mb-0.5">{card.title}</h3>
                  <p className="text-xs text-[#6B6B6B] leading-relaxed">{card.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
