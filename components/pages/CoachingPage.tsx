"use client";

import { motion } from "framer-motion";
import { ClipboardList, TrendingUp, CheckCircle2, ArrowRight, Calendar, BarChart3 } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import FAQSection from "@/components/sections/FAQSection";
import CTABanner from "@/components/ui/CTABanner";
import { whatsappLink } from "@/content/site";

const metrics = [
  { label: "Peso", icon: "⚖️", desc: "Monitoreo continuo con ajuste de meta según respuesta" },
  { label: "Cintura", icon: "📏", desc: "Indicador cardiometabólico clave más allá del peso" },
  { label: "IMC", icon: "📊", desc: "Seguimiento de índice de masa corporal por etapa" },
  { label: "Adherencia", icon: "✅", desc: "Cumplimiento del plan nutricional y de actividad" },
  { label: "Tolerancia", icon: "🩺", desc: "Respuesta al tratamiento y ajuste según síntomas" },
  { label: "Apetito", icon: "🍽️", desc: "Evaluación de saciedad y control del hambre" },
  { label: "Energía", icon: "⚡", desc: "Niveles de energía diaria y calidad del sueño" },
  { label: "Síntomas", icon: "📋", desc: "Revisión de efectos y síntomas entre sesiones" },
];

const followUpSchedule = [
  {
    period: "Mes 1",
    title: "Inicio y adaptación",
    sessions: "2 seguimientos",
    focus: "Adaptación al plan, tolerancia inicial, ajuste de dosis cuando aplica, primeras métricas.",
  },
  {
    period: "Mes 2-3",
    title: "Progreso activo",
    sessions: "1-2 seguimientos/mes",
    focus: "Revisión de progreso, adherencia, ajuste nutricional, evaluación de síntomas.",
  },
  {
    period: "Mes 4-6",
    title: "Optimización",
    sessions: "1 seguimiento/mes",
    focus: "Optimización de plan, laboratorios de seguimiento, preparación para transición a mantenimiento.",
  },
  {
    period: "Mantenimiento",
    title: "Sostenimiento",
    sessions: "Según plan individual",
    focus: "Monitoreo de peso estabilizado, prevención de recuperación, ajuste del plan a largo plazo.",
  },
];

const differentiators = [
  {
    title: "El seguimiento predice el éxito",
    stat: "3x",
    statLabel: "Mayor probabilidad de mantener resultados",
    desc: "Los pacientes con seguimiento regular tienen significativamente mejores resultados a largo plazo que quienes solo tienen la consulta inicial.",
  },
  {
    title: "Los ajustes importan",
    stat: "80%",
    statLabel: "De los planes requieren ajuste en los primeros 60 días",
    desc: "El cuerpo responde diferente en cada persona. El seguimiento permite detectar y corregir antes de que pequeños problemas se vuelvan grandes obstáculos.",
  },
  {
    title: "La adherencia es la clave",
    stat: "1",
    statLabel: "Conversación de seguimiento puede resolver semanas de duda",
    desc: "Una sesión de seguimiento identifica qué está fallando, ajusta el plan y renueva el compromiso. No es un extra — es el programa.",
  },
];

const faqs = [
  {
    question: "¿El seguimiento está incluido en el Programa Metabólico?",
    answer:
      "Sí. El seguimiento clínico es parte integral del Programa Metabólico Integral de Aurum Nova, no un extra opcional. La frecuencia y estructura se determina durante la evaluación inicial según el plan del paciente.",
  },
  {
    question: "¿Qué pasa en una sesión de seguimiento?",
    answer:
      "Se revisan métricas clave (peso, cintura, IMC), adherencia al plan nutricional, tolerancia al tratamiento, síntomas reportados, apetito y energía. Se ajusta el plan cuando es necesario y se responden preguntas del período entre sesiones.",
  },
  {
    question: "¿Puedo comunicarme entre sesiones?",
    answer:
      "Sí. El equipo de Aurum Nova está disponible por WhatsApp para orientación entre sesiones. Esto permite resolver dudas rápidamente sin esperar al próximo seguimiento.",
  },
  {
    question: "¿Qué sucede si no estoy perdiendo peso según lo esperado?",
    answer:
      "El seguimiento existe precisamente para esto. El equipo evalúa las posibles causas: adherencia, metabolismo adaptativo, medicamentos, otros factores de vida. El plan se ajusta antes de que la situación se prolongue innecesariamente.",
  },
  {
    question: "¿Puedo obtener seguimiento sin el Programa Metabólico completo?",
    answer:
      "El coaching y seguimiento se puede coordinar para pacientes que ya están en un plan activo de bienestar y necesitan supervisión continua. Consulta con el equipo sobre las opciones disponibles para tu situación específica.",
  },
  {
    question: "¿Cuándo termina el programa de seguimiento?",
    answer:
      "El programa de seguimiento evoluciona con el paciente: seguimiento activo durante la fase de pérdida de peso, ajuste gradual al entrar en estabilización, y seguimiento de mantenimiento a largo plazo. El objetivo es acompañarte en cada etapa, no solo al inicio.",
  },
];

export default function CoachingPage() {
  return (
    <>
      <PageHero
        badge="Coaching y Seguimiento"
        title="El seguimiento que hace"
        highlight="la diferencia"
        subtitle="El programa de Aurum Nova incluye seguimiento clínico continuo como parte central. Monitoreo de métricas, ajuste del plan y acompañamiento en cada etapa — porque el éxito no se da en la primera consulta."
        ctaText="Quiero un programa con seguimiento"
        ctaMessage="Hola, me interesa el programa de Coaching y Seguimiento en Aurum Nova. Quisiera conocer cómo funciona el monitoreo continuo."
        disclaimer="El seguimiento está incluido en el Programa Metabólico Integral. Frecuencia según plan individual."
      />

      {/* Why follow-up matters */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
              Por qué importa
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-4">
              El seguimiento no es un extra — es el programa
            </h2>
            <p className="text-sm text-[#6B6B6B] max-w-lg mx-auto leading-relaxed">
              La consulta inicial es el punto de partida. Lo que define el resultado es lo que pasa
              después: el ajuste continuo, la detección temprana de problemas y el acompañamiento
              real.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {differentiators.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#FAF8F4] border border-[#E8E4DA] rounded-2xl p-6 text-center"
              >
                <div className="mb-3">
                  <span className="text-3xl font-bold text-[#C9A84C]">{d.stat}</span>
                </div>
                <p className="text-xs font-semibold text-[#3D3D3D] mb-3">{d.statLabel}</p>
                <h3 className="text-sm font-semibold text-[#1A1A1A] mb-2">{d.title}</h3>
                <p className="text-xs text-[#6B6B6B] leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Monitoring metrics */}
      <section className="section-padding bg-[#1A1A1A]">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
              Dashboard de seguimiento
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
              Qué monitoreamos en cada sesión
            </h2>
            <p className="text-sm text-[#9A9A9A] max-w-lg mx-auto leading-relaxed">
              Ocho métricas clave revisadas en cada sesión de seguimiento para tener una imagen
              completa de tu progreso y poder hacer ajustes precisos.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-[#242424] border border-[#2D2D2D] rounded-2xl p-4 text-center"
              >
                <span className="text-2xl block mb-2">{m.icon}</span>
                <p className="text-sm font-semibold text-white mb-1">{m.label}</p>
                <p className="text-[10px] text-[#4A4A4A] leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto bg-[#242424] border border-[#2D2D2D] rounded-2xl p-5 text-center"
          >
            <BarChart3 className="w-6 h-6 text-[#C9A84C] mx-auto mb-3" />
            <p className="text-xs text-[#9A9A9A] leading-relaxed">
              El historial de métricas se documenta en cada sesión para visualizar la tendencia a
              lo largo del tiempo. No solo el número de hoy — la trayectoria completa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Follow-up schedule */}
      <section className="section-padding bg-[#FAF8F4]">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
              Estructura del programa
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-4">
              Seguimiento en cada etapa
            </h2>
            <p className="text-sm text-[#6B6B6B] max-w-lg mx-auto leading-relaxed">
              La frecuencia del seguimiento se adapta a la etapa del programa. Más intensivo al
              inicio, más espaciado al estabilizarse — siempre presente.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-8">
            {followUpSchedule.map((s, i) => (
              <motion.div
                key={s.period}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white border border-[#E8E4DA] rounded-2xl p-5 relative"
              >
                <span className="inline-block text-[10px] font-bold text-[#C9A84C] border border-[#C9A84C]/30 rounded-full px-2 py-0.5 uppercase tracking-wider mb-3">
                  {s.period}
                </span>
                <h3 className="text-sm font-semibold text-[#1A1A1A] mb-1">{s.title}</h3>
                <p className="text-xs font-medium text-[#C9A84C] mb-2 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {s.sessions}
                </p>
                <p className="text-xs text-[#6B6B6B] leading-relaxed">{s.focus}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works detail */}
      <section className="section-padding bg-[#1A1A1A]">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-4">
                Cómo funciona
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-5">
                Un programa que evoluciona contigo
              </h2>
              <p className="text-sm text-[#9A9A9A] leading-relaxed mb-6">
                El plan que diseñamos en la consulta inicial es el punto de partida. Lo que lo hace
                efectivo es que se ajusta continuamente según tu respuesta real. Nadie tiene el
                mismo metabolismo, ni la misma vida, ni la misma respuesta.
              </p>
              <ul className="space-y-4">
                {[
                  { title: "Detección temprana", desc: "Si algo no está funcionando, lo identificamos antes de que se prolongue semanas sin corrección." },
                  { title: "Ajuste de plan", desc: "Nutrición, actividad, medicamento cuando aplica — todo puede ajustarse según la respuesta individual." },
                  { title: "Acompañamiento real", desc: "WhatsApp disponible entre sesiones para resolver dudas sin esperar al próximo seguimiento." },
                  { title: "Transición sin abandono", desc: "El programa no termina al llegar a la meta — cambia de fase para proteger lo que lograste." },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex gap-4"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-white mb-0.5">{item.title}</p>
                      <p className="text-xs text-[#6B6B6B]">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#242424] border border-[#2D2D2D] rounded-2xl p-7"
            >
              <div className="flex items-center gap-3 mb-6">
                <ClipboardList className="w-5 h-5 text-[#C9A84C]" />
                <h3 className="text-base font-semibold text-white">Una sesión de seguimiento típica</h3>
              </div>
              <div className="space-y-4">
                {[
                  { time: "0-5 min", step: "Métricas", desc: "Peso, cintura, revisión de cambios desde la última sesión." },
                  { time: "5-15 min", step: "Revisión de adherencia", desc: "Nutrición, actividad física, uso de medicamento cuando aplica." },
                  { time: "15-25 min", step: "Evaluación de síntomas", desc: "Tolerancia, energía, apetito, efectos reportados entre sesiones." },
                  { time: "25-35 min", step: "Ajuste y plan", desc: "Modificaciones al plan, respuesta a preguntas, metas para el próximo período." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-xs text-[#4A4A4A] w-16 shrink-0 mt-0.5">{item.time}</span>
                    <div>
                      <p className="text-xs font-semibold text-[#C9A84C] mb-0.5">{item.step}</p>
                      <p className="text-xs text-[#6B6B6B] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FAQSection
        faqs={faqs}
        title="Preguntas frecuentes — Coaching y Seguimiento"
        subtitle="Todo sobre la estructura del seguimiento y cómo funciona el acompañamiento continuo."
        variant="dark"
      />

      <CTABanner
        title="Quiero un programa con seguimiento real"
        subtitle="El seguimiento continuo es lo que transforma un plan médico en resultados sostenibles. Comienza con tu evaluación inicial."
        ctaText="Quiero un programa con seguimiento"
        ctaMessage="Hola, me interesa el Programa Metabólico Integral con seguimiento clínico en Aurum Nova. Quisiera comenzar con una evaluación inicial."
        variant="dark"
      />
    </>
  );
}
