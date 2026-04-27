"use client";

import { motion } from "framer-motion";
import {
  Stethoscope, ClipboardList, Syringe, Droplets, Apple,
  LineChart, MessageCircle, RefreshCw, UserCheck, FlaskConical,
  Target, ShieldCheck,
} from "lucide-react";

const includes = [
  {
    icon: Stethoscope,
    title: "Evaluación médica inicial",
    description: "Historia clínica completa, examen físico y revisión de laboratorios recientes.",
  },
  {
    icon: FlaskConical,
    title: "Perfil metabólico de laboratorio",
    description: "Panel de laboratorio específico para establecer línea base (adicional si no reciente).",
  },
  {
    icon: ClipboardList,
    title: "Plan médico personalizado",
    description: "Protocolo individualizado basado en tu perfil, objetivos y elegibilidad clínica.",
  },
  {
    icon: Syringe,
    title: "Terapia semanal (si cualifica)",
    description: "Inyectable médico semanal supervisado cuando clínicamente indicado. Requiere evaluación.",
  },
  {
    icon: Droplets,
    title: "Apoyo lipotrópico",
    description: "Compuestos formulados de soporte metabólico bajo prescripción médica individual.",
  },
  {
    icon: Apple,
    title: "Guía nutricional médica",
    description: "Orientación alimentaria estructurada adaptada a tu protocolo y condición.",
  },
  {
    icon: LineChart,
    title: "Dashboard de progreso",
    description: "Seguimiento de métricas: peso, IMC, perímetro de cintura, adherencia y tolerancia.",
  },
  {
    icon: RefreshCw,
    title: "Seguimiento clínico semanal",
    description: "Sesiones de monitoreo para ajustar el protocolo y verificar progreso y tolerancia.",
  },
  {
    icon: MessageCircle,
    title: "Comunicación entre citas",
    description: "Canal de contacto con el equipo para dudas, síntomas o ajustes entre sesiones.",
  },
  {
    icon: UserCheck,
    title: "Revisión de medicamentos actuales",
    description: "Evaluación de interacciones con medicamentos actuales antes de iniciar el protocolo.",
  },
  {
    icon: Target,
    title: "Metas clínicas individuales",
    description: "Objetivos establecidos por el médico basados en tu perfil, no en expectativas generales.",
  },
  {
    icon: ShieldCheck,
    title: "Evaluación de contraindicaciones",
    description: "Revisión completa de condiciones que pudieran contraindicar cualquier elemento del protocolo.",
  },
];

export default function MetabolicIncludes() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
            Contenido del programa
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-4">
            Qué incluye el programa
          </h2>
          <p className="text-sm text-[#6B6B6B] max-w-lg mx-auto leading-relaxed">
            Los elementos a continuación representan lo que el programa puede incluir según elegibilidad.
            No todos aplican a todos los pacientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {includes.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="border border-[#E8E4DA] rounded-2xl p-5 hover:border-[#C9A84C]/30 hover:shadow-sm transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-[#C9A84C]" />
                </div>
                <h3 className="text-sm font-semibold text-[#1A1A1A] mb-1.5">{item.title}</h3>
                <p className="text-xs text-[#6B6B6B] leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
