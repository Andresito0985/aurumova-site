"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { whatsappLink } from "@/content/site";

const zones = [
  { name: "Bigote", price: "desde $20", popular: false },
  { name: "Axilas", price: "desde $45", popular: true },
  { name: "Brazos", price: "desde $60", popular: false },
  { name: "Pecho", price: "desde $65", popular: false },
  { name: "Bikini", price: "desde $60", popular: true },
  { name: "Brazilian", price: "desde $85", popular: true },
  { name: "Full Brazilian", price: "desde $85", popular: false },
  { name: "Media pierna", price: "desde $85", popular: false },
  { name: "Piernas completas", price: "desde $100", popular: false },
  { name: "Espalda", price: "desde $100", popular: false },
];

const CTA_MSG = "Hola, me interesa una evaluación para Láser Diodo High-Tech en Aurum Nova. Me gustaría conocer precios y opciones para mi zona de interés.";

export default function LaserZones() {
  return (
    <section id="zonas-precios" className="section-padding bg-[#FAF8F4]">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
            Zonas y precios
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-4">
            Áreas de tratamiento disponibles
          </h2>
          <p className="text-sm text-[#6B6B6B] max-w-lg mx-auto leading-relaxed">
            Precios de referencia por sesión individual. Los paquetes ofrecen mejor valor por sesión.
          </p>
        </motion.div>

        {/* Zone grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
          {zones.map((zone, i) => (
            <motion.div
              key={zone.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className={`relative bg-white border rounded-2xl p-4 text-center transition-all duration-300 hover:shadow-md hover:border-[#C9A84C]/30 ${
                zone.popular ? "border-[#C9A84C]/30" : "border-[#E8E4DA]"
              }`}
            >
              {zone.popular && (
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#C9A84C] text-[#1A1A1A] text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider whitespace-nowrap">
                  Popular
                </span>
              )}
              <p className="text-sm font-semibold text-[#1A1A1A] mt-1">{zone.name}</p>
              <p className="text-base font-bold text-[#C9A84C] mt-1">{zone.price}</p>
              <p className="text-[10px] text-[#9A9A9A] mt-0.5">por sesión</p>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-xs text-[#9A9A9A] mb-5 leading-relaxed">
            Los precios pueden variar según evaluación, área, densidad del vello y plan recomendado.
            Los precios indicados son de referencia y corresponden a sesión individual.
          </p>
          <a
            href={whatsappLink(CTA_MSG)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#A8872E] text-[#1A1A1A] font-semibold px-6 py-3 rounded-full text-sm transition-all duration-200"
          >
            Consultar mi zona por WhatsApp
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
