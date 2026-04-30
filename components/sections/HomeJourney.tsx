"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ClipboardList, MessageCircle, Stethoscope, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Completa tu quiz metabólico",
    description:
      "Contesta unas preguntas orientativas sobre peso, hábitos, historial y objetivos. Toma 2–3 minutos.",
    cta: { label: "Hacer quiz", href: "/quiz-metabolico" },
  },
  {
    number: "02",
    icon: MessageCircle,
    title: "Recibe orientación inicial",
    description:
      "Revisa tu resultado orientativo y, si lo deseas, el equipo te orienta sobre el próximo paso por WhatsApp.",
  },
  {
    number: "03",
    icon: Stethoscope,
    title: "Coordina tu evaluación clínica",
    description:
      "Si aplica, agendamos evaluación con el proveedor. La candidatura final se confirma según historial y criterio clínico.",
    cta: { label: "Ver programa", href: "/programa-metabolico" },
  },
];

export default function HomeJourney() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-3xl mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
            Cómo funciona
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] leading-tight mb-4">
            Tres pasos para empezar con claridad
          </h2>
          <p className="text-base text-[#6B6B6B] leading-relaxed">
            En Aurum Nova el proceso no comienza con un producto, sino con entender tu
            punto de partida. El quiz orienta, la evaluación clínica decide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative flex h-full flex-col rounded-2xl border border-[#E8E4DA] bg-[#FAF8F4] p-6"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white border border-[#E8E4DA]">
                    <Icon className="h-5 w-5 text-[#C9A84C]" />
                  </div>
                  <span className="text-xs font-bold tracking-widest text-[#C9A84C]">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm text-[#6B6B6B] leading-relaxed flex-1">
                  {step.description}
                </p>
                {step.cta && (
                  <Link
                    href={step.cta.href}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#C9A84C] hover:text-[#A8872E] transition-colors"
                  >
                    {step.cta.label}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>

        <p className="mt-8 text-xs text-[#9A9A9A] max-w-2xl">
          El quiz es orientativo y no diagnostica, prescribe ni determina candidatura
          médica. La elegibilidad final se confirma únicamente mediante evaluación clínica.
        </p>
      </div>
    </section>
  );
}
