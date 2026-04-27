"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Info } from "lucide-react";
import { whatsappLink } from "@/content/site";

const CTA_MESSAGE = "Hola, me interesa saber si cualifico para el Programa Metabólico Integral de Aurum Nova. ¿Cuáles son los próximos pasos?";

const packageItems = [
  { label: "Consulta médica mensual", value: "Incluida" },
  { label: "Terapia inyectable semanal (si cualifica)", value: "Incluida" },
  { label: "Apoyo lipotrópico", value: "Incluido" },
  { label: "Seguimiento clínico semanal", value: "Incluido" },
  { label: "Guía nutricional médica", value: "Incluida" },
  { label: "Dashboard de progreso", value: "Incluido" },
  { label: "Comunicación entre citas", value: "Incluida" },
];

const individualItems = [
  { label: "Consulta médica (por visita)", value: "~$150" },
  { label: "Terapia inyectable (por dosis)", value: "~$200" },
  { label: "Apoyo lipotrópico (por sesión)", value: "~$80" },
  { label: "Seguimiento y ajuste", value: "~$100" },
  { label: "Guía nutricional", value: "~$100" },
  { label: "Total estimado mensual", value: "~$630+" },
];

export default function MetabolicPricing() {
  return (
    <section className="section-padding bg-[#1A1A1A]">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
            Inversión
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
            Un paquete integral con valor clínico real
          </h2>
          <p className="text-sm text-[#9A9A9A] max-w-lg mx-auto leading-relaxed">
            Comparado con acceder a cada servicio por separado, el paquete mensual representa
            un valor significativo para quienes califican para el programa completo.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Individual / comparison */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#242424] border border-[#2D2D2D] rounded-2xl p-6"
          >
            <div className="mb-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#6B6B6B] mb-1">
                Servicios individuales
              </p>
              <p className="text-3xl font-bold text-[#6B6B6B]">
                ~$630<span className="text-base font-normal text-[#4A4A4A]">/mes</span>
              </p>
              <p className="text-xs text-[#4A4A4A] mt-1">Estimado si se contratan por separado</p>
            </div>
            <div className="space-y-2.5">
              {individualItems.map((item) => (
                <div
                  key={item.label}
                  className={`flex justify-between items-center text-xs py-2 border-b border-[#2D2D2D] last:border-0 ${
                    item.label.includes("Total") ? "font-semibold text-[#6B6B6B]" : "text-[#4A4A4A]"
                  }`}
                >
                  <span>{item.label}</span>
                  <span
                    className={
                      item.label.includes("Total") ? "text-[#6B6B6B] font-bold" : "text-[#4A4A4A]"
                    }
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Package */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative bg-[#C9A84C]/5 border-2 border-[#C9A84C]/40 rounded-2xl p-6 overflow-hidden"
          >
            <div className="absolute top-4 right-4 bg-[#C9A84C] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
              Recomendado
            </div>
            <div className="mb-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#C9A84C] mb-1">
                Paquete mensual integral
              </p>
              <p className="text-3xl font-bold text-white">
                Desde $400<span className="text-base font-normal text-[#9A9A9A]">/mes</span>
              </p>
              <p className="text-xs text-[#9A9A9A] mt-1">Para pacientes que cualifican al programa completo</p>
            </div>
            <div className="space-y-2.5 mb-6">
              {packageItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-2.5 text-xs"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A84C] shrink-0 mt-0.5" />
                  <span className="text-[#E8E4DA] leading-tight">{item.label}</span>
                </div>
              ))}
            </div>
            <a
              href={whatsappLink(CTA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold py-3 rounded-full text-sm transition-all duration-200"
            >
              Consultar elegibilidad
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 max-w-2xl mx-auto flex items-start gap-3"
        >
          <Info className="w-4 h-4 text-[#4A4A4A] shrink-0 mt-0.5" />
          <p className="text-xs text-[#4A4A4A] leading-relaxed">
            El precio del paquete puede variar según la evaluación médica individual y los servicios
            que apliquen a tu protocolo. El médico determina qué elementos están indicados para ti.
            Los precios individuales son estimados referenciales y pueden variar.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
