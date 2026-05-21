"use client";

import { motion } from "framer-motion";
import { Droplets, Zap, Star, Plus, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import FAQSection from "@/components/sections/FAQSection";
import CTABanner from "@/components/ui/CTABanner";
import MedicalDisclaimer from "@/components/ui/MedicalDisclaimer";
import IVTherapyLeadForm from "@/components/forms/IVTherapyLeadForm";
import { whatsappLink } from "@/content/site";

const protocols = [
  {
    icon: Zap,
    name: "Protocolo NAD+",
    tagline: "Energía celular y soporte metabólico",
    description:
      "NAD+ (Nicotinamida Adenina Dinucleótido) es un coenzima esencial para el metabolismo energético celular. La terapia IV permite niveles séricos más altos que la suplementación oral.",
    details: [
      "Administración intravenosa lenta",
      "Duración de infusión orientada por el proveedor",
      "Evaluación clínica requerida antes de comenzar",
      "Protocolo adaptado a cada paciente",
    ],
    highlight: true,
    msg: "Hola, me interesa el Protocolo NAD+ de Sueroterapia en Aurum Nova. ¿Cuáles son los requisitos de elegibilidad?",
  },
  {
    icon: Droplets,
    name: "Protocolo Myers",
    tagline: "Hidratación y soporte de micronutrientes",
    description:
      "El cóctel de Myers incluye una combinación de vitaminas del complejo B, magnesio y otros micronutrientes en solución IV. Indicado para soporte de energía, hidratación y bienestar general.",
    details: [
      "Infusión IV en clínica bajo supervisión",
      "Composición adaptada al paciente",
      "Sesión única o plan de mantenimiento",
      "Evaluación inicial requerida",
    ],
    highlight: false,
    msg: "Hola, me interesa el Protocolo Myers de Sueroterapia en Aurum Nova. ¿Qué evaluación se requiere?",
  },
];

const addons = [
  {
    name: "Zofran",
    generic: "Ondansetrón",
    detail: "Soporte antiemético cuando clínicamente indicado.",
    price: "desde $25",
  },
  {
    name: "Pepcid",
    generic: "Famotidina",
    detail: "Soporte gastrointestinal durante la infusión cuando aplica.",
    price: "desde $25",
  },
  {
    name: "Decadron",
    generic: "Dexametasona",
    detail: "Corticosteroide de corta duración; sujeto a evaluación clínica.",
    price: "desde $25",
  },
  {
    name: "Toradol",
    generic: "Ketorolaco",
    detail: "AINE IV para manejo de malestar cuando clínicamente apropiado.",
    price: "desde $25",
  },
];

const benefits = [
  "Biodisponibilidad superior vs. suplementación oral",
  "Inicio de acción más rápido",
  "Supervisión clínica durante toda la infusión",
  "Formulación personalizada por paciente",
  "Ambiente clínico controlado y cómodo",
  "Seguimiento posterior incluido en el plan",
];

const faqs = [
  {
    question: "¿Quién puede recibir sueroterapia IV?",
    answer:
      "La elegibilidad se determina durante la evaluación médica inicial. Se revisa historial de salud, medicamentos actuales, alergias y condiciones de salud activas. No todos los pacientes son candidatos.",
  },
  {
    question: "¿Cuánto tiempo dura una sesión de IV?",
    answer:
      "La duración varía según el protocolo. El Protocolo NAD+ típicamente requiere infusión más lenta. El proveedor orienta sobre la duración esperada durante la evaluación.",
  },
  {
    question: "¿Con qué frecuencia se pueden hacer sesiones?",
    answer:
      "La frecuencia se determina según el protocolo y la respuesta individual. El plan puede incluir sesiones únicas, serie inicial o mantenimiento periódico. El proveedor recomienda el intervalo adecuado.",
  },
  {
    question: "¿La sueroterapia reemplaza mi tratamiento médico actual?",
    answer:
      "No. La sueroterapia IV es un complemento de bienestar y no reemplaza tratamientos médicos prescritos, medicamentos actuales ni el cuidado de tu médico principal. Informa al equipo sobre todos tus medicamentos.",
  },
  {
    question: "¿Qué sucede si tengo una reacción durante la infusión?",
    answer:
      "Las sesiones se realizan bajo supervisión clínica. El personal está entrenado para monitorear y responder a cualquier reacción. Se detiene la infusión si es necesario y se documenta para ajustar el protocolo.",
  },
  {
    question: "¿Puedo combinarlo con el Programa Metabólico?",
    answer:
      "Algunos pacientes combinan la sueroterapia con el Programa Metabólico Integral como parte de su plan de bienestar. Cada servicio tiene evaluación independiente. El equipo coordina ambos programas cuando es apropiado.",
  },
];

export default function SueroterapiaPage() {
  return (
    <>
      <PageHero
        badge="Sueroterapia Médica"
        title="Nutrición intravenosa"
        highlight="de precisión"
        subtitle="Protocolos IV personalizados con NAD+ y Myers Cocktail administrados bajo supervisión clínica. Cada sesión se adapta a tu perfil de salud individual."
        ctaText="Solicitar evaluación de elegibilidad"
        ctaMessage="Hola, me interesa la Sueroterapia Médica Premium en Aurum Nova. Quisiera conocer opciones y requisitos de elegibilidad."
        disclaimer="Requiere evaluación médica individual. No todos los pacientes son candidatos."
      />

      {/* Protocols */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
              Protocolos disponibles
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-4">
              NAD+ y Myers Cocktail
            </h2>
            <p className="text-sm text-[#6B6B6B] max-w-lg mx-auto leading-relaxed">
              Dos protocolos IV con objetivos distintos. El plan se determina durante la evaluación
              médica según tus necesidades clínicas.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {protocols.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`rounded-2xl p-6 border ${
                    p.highlight
                      ? "bg-[#1A1A1A] border-[#C9A84C]/30"
                      : "bg-[#FAF8F4] border-[#E8E4DA]"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#C9A84C]" />
                    </div>
                    <div>
                      <h3 className={`font-semibold text-base ${p.highlight ? "text-white" : "text-[#1A1A1A]"}`}>
                        {p.name}
                      </h3>
                      <p className="text-xs text-[#C9A84C]">{p.tagline}</p>
                    </div>
                  </div>
                  <p className={`text-sm leading-relaxed mb-4 ${p.highlight ? "text-[#9A9A9A]" : "text-[#6B6B6B]"}`}>
                    {p.description}
                  </p>
                  <ul className="space-y-2 mb-5">
                    {p.details.map((d) => (
                      <li key={d} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A84C] shrink-0 mt-0.5" />
                        <span className={`text-xs ${p.highlight ? "text-[#9A9A9A]" : "text-[#6B6B6B]"}`}>{d}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={whatsappLink(p.msg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-xs font-semibold py-2.5 px-5 rounded-full transition-all duration-200 ${
                      p.highlight
                        ? "bg-[#C9A84C] hover:bg-[#A8872E] text-[#1A1A1A]"
                        : "border border-[#E8E4DA] hover:border-[#C9A84C] text-[#3D3D3D] hover:text-[#C9A84C]"
                    }`}
                  >
                    Consultar este protocolo
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="section-padding bg-[#1A1A1A]">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
              Medicamentos de apoyo
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
              Add-ons disponibles
            </h2>
            <p className="text-sm text-[#9A9A9A] max-w-lg mx-auto leading-relaxed">
              Disponibles como complemento a la infusión IV cuando clínicamente indicado. Su
              inclusión depende de la evaluación médica individual y no está garantizada.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
            {addons.map((addon, i) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-[#242424] border border-[#2D2D2D] rounded-2xl p-5"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Plus className="w-4 h-4 text-[#C9A84C]" />
                  <h3 className="text-sm font-semibold text-white">{addon.name}</h3>
                </div>
                <p className="text-[10px] text-[#4A4A4A] mb-2 italic">{addon.generic}</p>
                <p className="text-xs text-[#6B6B6B] leading-relaxed mb-3">{addon.detail}</p>
                <p className="text-base font-bold text-[#C9A84C]">{addon.price}</p>
                <p className="text-[10px] text-[#4A4A4A] mt-0.5">sujeto a evaluación</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <MedicalDisclaimer
              variant="box"
              custom="No todos los pacientes son candidatos para los add-ons listados. La selección del protocolo IV y cualquier medicamento añadido requiere evaluación clínica individual. La disponibilidad puede variar según historial médico, medicamentos actuales y criterio del proveedor."
            />
          </motion.div>
        </div>
      </section>

      {/* Why IV */}
      <section className="section-padding bg-[#FAF8F4]">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-4">
                Ventaja IV
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-5">
                ¿Por qué la vía intravenosa?
              </h2>
              <p className="text-sm text-[#6B6B6B] leading-relaxed mb-6">
                La administración intravenosa entrega nutrientes directamente al torrente sanguíneo,
                evitando la absorción gastrointestinal variable. Esto permite niveles séricos que no
                son alcanzables con suplementación oral convencional.
              </p>
              <ul className="space-y-3">
                {benefits.map((b, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#6B6B6B]">{b}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-[#E8E4DA] rounded-2xl p-7"
            >
              <div className="flex items-center gap-3 mb-5">
                <ShieldCheck className="w-5 h-5 text-[#C9A84C]" />
                <h3 className="text-base font-semibold text-[#1A1A1A]">Protocolo de seguridad</h3>
              </div>
              <div className="space-y-4">
                {[
                  { step: "01", title: "Evaluación médica inicial", desc: "Revisión de historial, medicamentos y elegibilidad antes de cualquier protocolo." },
                  { step: "02", title: "Selección de protocolo", desc: "El proveedor determina el protocolo adecuado según tu perfil clínico." },
                  { step: "03", title: "Infusión supervisada", desc: "Toda la sesión se realiza bajo supervisión del equipo médico en la clínica." },
                  { step: "04", title: "Seguimiento posterior", desc: "Evaluación de respuesta y ajuste del plan según resultados." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <span className="text-xs font-bold text-[#C9A84C] w-6 shrink-0 mt-0.5">{item.step}</span>
                    <div>
                      <p className="text-sm font-semibold text-[#1A1A1A] mb-0.5">{item.title}</p>
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
        title="Preguntas frecuentes sobre sueroterapia"
        subtitle="Respuestas claras sobre protocolos, eligibilidad y seguridad."
        variant="dark"
      />

      <IVTherapyLeadForm />
    </>
  );
}
