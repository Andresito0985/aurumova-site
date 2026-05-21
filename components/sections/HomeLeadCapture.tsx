"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { whatsappLink } from "@/content/site";

const services = [
  "Programa Metabólico Integral",
  "Láser Diodo",
  "Sueroterapia NAD+ / Myers",
  "Inyectables Metabólicos",
  "Wellness Mujer",
  "Wellness Hombre",
  "Nutrición Personalizada",
  "Skin & Glow",
  "Hair Support",
  "Coaching & Seguimiento",
  "No estoy seguro/a",
];

export default function HomeLeadCapture() {
  const [nombre, setNombre] = useState("");
  const [servicio, setServicio] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre.trim() || !servicio) return;

    const msg = `Hola, mi nombre es ${nombre.trim()} y me interesa: ${servicio}.${
      mensaje.trim() ? ` Nota adicional: ${mensaje.trim()}` : ""
    } Quisiera saber si califico y cómo es el proceso.`;

    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
              Primer Paso
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] mb-4">
              ¿Listo para ver
              <br />
              <span className="gold-text-gradient">si calificas?</span>
            </h2>
            <p className="text-base text-[#6B6B6B] leading-relaxed mb-6">
              Cuéntanos en qué estás interesado/a. Nuestro equipo te contactará por WhatsApp
              para coordinar tu evaluación médica inicial y responder tus preguntas.
            </p>

            <div className="space-y-3">
              {[
                "Sin costo para el primer contacto",
                "El médico evalúa tu caso individualmente",
                "No todos los pacientes califican — lo decimos con honestidad",
                "Proceso claro, sin presiones comerciales",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A84C] shrink-0" />
                  <p className="text-sm text-[#3D3D3D]">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white border border-[#E8E4DA] rounded-2xl p-8 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-[#C9A84C]/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-7 h-7 text-[#C9A84C]" />
                </div>
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">¡Gracias!</h3>
                <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4">
                  Te hemos redirigido a WhatsApp. Nuestro equipo te contactará para
                  coordinar tu evaluación médica inicial.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setNombre(""); setServicio(""); setMensaje(""); }}
                  className="text-sm text-[#C9A84C] hover:text-[#A8872E] font-medium"
                >
                  Enviar otra consulta
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-[#E8E4DA] rounded-2xl p-6 shadow-sm space-y-4"
              >
                <div>
                  <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                    Nombre <span className="text-[#C9A84C]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Tu nombre"
                    className="w-full border border-[#E8E4DA] focus:border-[#C9A84C] focus:outline-none rounded-xl px-4 py-3 text-sm text-[#1A1A1A] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                    ¿Qué te interesa? <span className="text-[#C9A84C]">*</span>
                  </label>
                  <select
                    required
                    value={servicio}
                    onChange={(e) => setServicio(e.target.value)}
                    className="w-full border border-[#E8E4DA] focus:border-[#C9A84C] focus:outline-none rounded-xl px-4 py-3 text-sm text-[#1A1A1A] bg-white transition-colors appearance-none"
                  >
                    <option value="">Selecciona un servicio</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                    Mensaje (opcional)
                  </label>
                  <textarea
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    placeholder="¿Hay algo específico que quieras comentar?"
                    rows={3}
                    maxLength={300}
                    className="w-full border border-[#E8E4DA] focus:border-[#C9A84C] focus:outline-none rounded-xl px-4 py-3 text-sm text-[#1A1A1A] resize-none transition-colors"
                  />
                </div>

                <div className="flex items-start gap-2 text-xs text-[#9A9A9A]">
                  <AlertCircle className="w-3 h-3 shrink-0 mt-0.5 text-[#C9A84C]" />
                  <p>Al enviar serás redirigido/a a WhatsApp. No compartimos tu información con terceros.</p>
                </div>

                <button
                  type="submit"
                  disabled={!nombre.trim() || !servicio}
                  className="w-full flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#A8872E] disabled:bg-[#E8E4DA] disabled:text-[#9A9A9A] disabled:cursor-not-allowed text-[#1A1A1A] font-semibold py-3.5 rounded-full transition-all duration-200"
                >
                  <Send className="w-4 h-4" />
                  Enviar por WhatsApp
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
