"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { whatsappLink } from "@/content/site";
import { trackLeadSubmitted, trackWhatsAppClick } from "@/lib/tracking";
import { programs } from "@/content/programs";

export default function LeadForm() {
  const [nombre, setNombre] = useState("");
  const [programa, setPrograma] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre.trim() || !programa) return;

    const selectedProgram = programs.find((p) => p.id === programa);
    const programTitle = selectedProgram?.title ?? programa;

    const msg = `Hola, mi nombre es ${nombre.trim()} y me interesa el programa: ${programTitle}.${
      mensaje.trim() ? ` Mensaje adicional: ${mensaje.trim()}` : ""
    }`;

    trackLeadSubmitted("lead_form");
    trackWhatsAppClick("lead_form");
    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white border border-[#E8E4DA] rounded-2xl p-8 text-center"
      >
        <div className="w-14 h-14 rounded-full bg-[#C9A84C]/10 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-7 h-7 text-[#C9A84C]" />
        </div>
        <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">¡Gracias por contactarnos!</h3>
        <p className="text-sm text-[#6B6B6B] leading-relaxed">
          Te hemos redirigido a WhatsApp. Nuestro equipo clínico te contactará para coordinar
          tu evaluación médica inicial.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setNombre("");
            setPrograma("");
            setMensaje("");
          }}
          className="mt-6 text-sm text-[#C9A84C] hover:text-[#A8872E] font-medium transition-colors"
        >
          Enviar otra consulta
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-[#E8E4DA] rounded-2xl p-6 shadow-sm space-y-4">
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
          className="w-full border border-[#E8E4DA] focus:border-[#C9A84C] focus:outline-none rounded-xl px-4 py-3 text-sm text-[#1A1A1A] bg-white transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
          Programa de interés <span className="text-[#C9A84C]">*</span>
        </label>
        <select
          required
          value={programa}
          onChange={(e) => setPrograma(e.target.value)}
          className="w-full border border-[#E8E4DA] focus:border-[#C9A84C] focus:outline-none rounded-xl px-4 py-3 text-sm text-[#1A1A1A] bg-white transition-colors appearance-none"
        >
          <option value="">Selecciona un programa</option>
          {programs.map((p) => (
            <option key={p.id} value={p.id}>
              {p.title}
            </option>
          ))}
          <option value="general">Información general</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
          Mensaje (opcional)
        </label>
        <textarea
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="¿Hay algo específico que quieras comentar? (opcional)"
          rows={3}
          maxLength={300}
          className="w-full border border-[#E8E4DA] focus:border-[#C9A84C] focus:outline-none rounded-xl px-4 py-3 text-sm text-[#1A1A1A] bg-white transition-colors resize-none"
        />
      </div>

      <div className="flex items-start gap-2 text-xs text-[#9A9A9A]">
        <AlertCircle className="w-3 h-3 shrink-0 mt-0.5 text-[#C9A84C]" />
        <p>
          Al enviar, serás redirigido a WhatsApp. No compartimos tu información con terceros.
          Este formulario no constituye una consulta médica ni una inscripción a ningún programa.
        </p>
      </div>

      <button
        type="submit"
        disabled={!nombre.trim() || !programa}
        className="w-full flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#A8872E] disabled:bg-[#E8E4DA] disabled:text-[#9A9A9A] disabled:cursor-not-allowed text-[#1A1A1A] font-semibold py-3.5 rounded-full transition-all duration-200"
      >
        <Send className="w-4 h-4" />
        Enviar por WhatsApp
      </button>
    </form>
  );
}
