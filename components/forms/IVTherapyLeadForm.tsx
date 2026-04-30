"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, User, Phone, Mail, Clock, Droplets } from "lucide-react";
import { siteConfig } from "@/content/site";
import { trackLeadSubmitted, trackWhatsAppClick } from "@/lib/tracking";

const PROTOCOLOS = [
  "NAD+ (energía, neuro-recuperación)",
  "Myers Cocktail (vitaminas, minerales)",
  "No estoy seguro/a — quisiera orientación",
];

const HORARIOS = [
  "Mañana (8am–12pm)",
  "Tarde (12pm–5pm)",
  "Noche (5pm–8pm)",
  "Cualquier horario",
];

const METAS = [
  "Energía y recuperación",
  "Claridad mental / enfoque",
  "Apoyo al sistema inmune",
  "Hidratación y recuperación física",
  "Apoyo durante programa metabólico",
  "Bienestar general",
  "Otro",
];

interface FormData {
  nombre: string;
  telefono: string;
  email: string;
  protocolo: string;
  meta: string;
  horario: string;
  condiciones: string;
  medicamentos: string;
  consent: boolean;
}

const EMPTY: FormData = {
  nombre: "", telefono: "", email: "",
  protocolo: "", meta: "", horario: "",
  condiciones: "", medicamentos: "",
  consent: false,
};

function buildMsg(f: FormData): string {
  return [
    `Hola Aurum Nova, me interesa Sueroterapia IV (${f.protocolo || "por definir"}).`,
    "",
    `Nombre: ${f.nombre}`,
    f.telefono && `Teléfono: ${f.telefono}`,
    f.email && `Email: ${f.email}`,
    f.meta && `Meta de bienestar: ${f.meta}`,
    f.horario && `Horario preferido: ${f.horario}`,
    f.condiciones && `Condiciones médicas relevantes: ${f.condiciones}`,
    f.medicamentos && `Medicamentos actuales: ${f.medicamentos}`,
    "",
    "Entiendo que esto requiere evaluación médica individual.",
  ].filter(Boolean).join("\n");
}

const inputCls = (err?: string) =>
  `w-full text-sm bg-[#242424] border ${err ? "border-red-500" : "border-[#2D2D2D]"} rounded-xl px-4 py-2.5 text-white placeholder-[#4A4A4A] outline-none focus:border-[#C9A84C] transition-colors`;

export default function IVTherapyLeadForm() {
  const [form, setForm] = useState<FormData>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  function set<K extends keyof FormData>(key: K, val: FormData[K]) {
    setForm((p) => ({ ...p, [key]: val }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate() {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!form.nombre.trim()) e.nombre = "Requerido";
    if (!form.telefono.trim()) e.telefono = "Requerido";
    if (!form.consent) e.consent = "Debes aceptar para continuar";
    return e;
  }

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    trackLeadSubmitted("iv_therapy_lead_form");
    trackWhatsAppClick("iv_therapy_lead_form");
    const msg = buildMsg(form);
    window.open(
      `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(msg)}`,
      "_blank", "noopener,noreferrer",
    );
    setSubmitted(true);
  }

  return (
    <section className="section-padding bg-[#1A1A1A]" id="formulario-suero">
      <div className="container-max">
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
              Agendar terapia IV
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-3">
              Solicita tu evaluación para sueroterapia
            </h2>
            <p className="text-sm text-[#9A9A9A] leading-relaxed">
              Toda terapia IV requiere evaluación médica previa. Comparte tu interés y el equipo
              te contactará para coordinar tu evaluación.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#242424] border border-[#2D2D2D] rounded-2xl p-6 sm:p-8"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle2 className="w-12 h-12 text-[#C9A84C] mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">¡Solicitud enviada!</h3>
                  <p className="text-sm text-[#9A9A9A] leading-relaxed">
                    Tu mensaje fue enviado a WhatsApp. El equipo de Aurum Nova coordinará
                    tu evaluación médica para sueroterapia.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm(EMPTY); }}
                    className="mt-5 text-xs text-[#C9A84C] hover:underline"
                  >
                    Enviar otra consulta
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Nombre */}
                    <div>
                      <label className="block text-xs font-semibold text-[#9A9A9A] mb-1.5">
                        Nombre <span className="text-[#C9A84C]">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4A4A4A] pointer-events-none" />
                        <input
                          type="text"
                          placeholder="Tu nombre"
                          value={form.nombre}
                          onChange={(e) => set("nombre", e.target.value)}
                          className={`${inputCls(errors.nombre)} pl-9`}
                        />
                      </div>
                      {errors.nombre && <p className="text-[10px] text-red-400 mt-1">{errors.nombre}</p>}
                    </div>

                    {/* Teléfono */}
                    <div>
                      <label className="block text-xs font-semibold text-[#9A9A9A] mb-1.5">
                        Teléfono / WhatsApp <span className="text-[#C9A84C]">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4A4A4A] pointer-events-none" />
                        <input
                          type="tel"
                          placeholder="787-000-0000"
                          value={form.telefono}
                          onChange={(e) => set("telefono", e.target.value)}
                          className={`${inputCls(errors.telefono)} pl-9`}
                        />
                      </div>
                      {errors.telefono && <p className="text-[10px] text-red-400 mt-1">{errors.telefono}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-[#9A9A9A] mb-1.5">
                        Email <span className="text-[#4A4A4A] font-normal">(opcional)</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4A4A4A] pointer-events-none" />
                        <input
                          type="email"
                          placeholder="tu@email.com"
                          value={form.email}
                          onChange={(e) => set("email", e.target.value)}
                          className={`${inputCls()} pl-9`}
                        />
                      </div>
                    </div>

                    {/* Horario */}
                    <div>
                      <label className="block text-xs font-semibold text-[#9A9A9A] mb-1.5">
                        Horario preferido
                      </label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4A4A4A] pointer-events-none" />
                        <select
                          value={form.horario}
                          onChange={(e) => set("horario", e.target.value)}
                          className={`${inputCls()} pl-9 appearance-none`}
                        >
                          <option value="">Seleccionar</option>
                          {HORARIOS.map((h) => (
                            <option key={h} value={h}>{h}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Protocolo */}
                  <div>
                    <label className="block text-xs font-semibold text-[#9A9A9A] mb-1.5">
                      Protocolo de interés
                    </label>
                    <div className="relative">
                      <Droplets className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4A4A4A] pointer-events-none" />
                      <select
                        value={form.protocolo}
                        onChange={(e) => set("protocolo", e.target.value)}
                        className={`${inputCls()} pl-9 appearance-none`}
                      >
                        <option value="">Seleccionar protocolo</option>
                        {PROTOCOLOS.map((p) => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Meta */}
                  <div>
                    <label className="block text-xs font-semibold text-[#9A9A9A] mb-1.5">
                      Meta de bienestar
                    </label>
                    <select
                      value={form.meta}
                      onChange={(e) => set("meta", e.target.value)}
                      className={`${inputCls()} appearance-none`}
                    >
                      <option value="">Seleccionar</option>
                      {METAS.map((m) => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                  </div>

                  {/* Condiciones médicas */}
                  <div>
                    <label className="block text-xs font-semibold text-[#9A9A9A] mb-1.5">
                      Condiciones médicas relevantes <span className="text-[#4A4A4A] font-normal">(opcional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="ej. hipertensión, diabetes — o deja en blanco"
                      value={form.condiciones}
                      onChange={(e) => set("condiciones", e.target.value)}
                      className={inputCls()}
                    />
                    <p className="text-[10px] text-[#4A4A4A] mt-1 leading-relaxed">
                      Esta información ayuda al equipo a orientarte correctamente. No compartas información médica sensible detallada aquí.
                    </p>
                  </div>

                  {/* Medicamentos */}
                  <div>
                    <label className="block text-xs font-semibold text-[#9A9A9A] mb-1.5">
                      Medicamentos actuales <span className="text-[#4A4A4A] font-normal">(opcional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="ej. antihipertensivos, metformina — o deja en blanco"
                      value={form.medicamentos}
                      onChange={(e) => set("medicamentos", e.target.value)}
                      className={inputCls()}
                    />
                  </div>

                  {/* Consent */}
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={form.consent}
                        onChange={(e) => set("consent", e.target.checked)}
                        className="mt-0.5 w-4 h-4 accent-[#C9A84C] shrink-0"
                      />
                      <span className={`text-xs leading-relaxed ${errors.consent ? "text-red-400" : "text-[#6B6B6B]"}`}>
                        Autorizo a Aurum Nova Wellness Clinic a contactarme por llamada, mensaje de texto
                        o WhatsApp sobre mi solicitud. Entiendo que este formulario no sustituye una
                        evaluación médica y que toda sueroterapia requiere evaluación individual previa.{" "}
                        <span className="text-[#C9A84C]">*</span>
                      </span>
                    </label>
                    {errors.consent && <p className="text-[10px] text-red-400 mt-1 ml-7">{errors.consent}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold py-3.5 rounded-full text-sm transition-all duration-200 mt-1"
                  >
                    Solicitar evaluación por WhatsApp
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[10px] text-[#4A4A4A] text-center leading-relaxed">
                    Tu información se envía directamente a WhatsApp. No almacenamos datos en servidores.
                    Campos con <span className="text-[#C9A84C]">*</span> son requeridos.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
