"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, User, Phone, Mail, Clock, MapPin } from "lucide-react";
import { siteConfig } from "@/content/site";
import { trackLeadSubmitted, trackWhatsAppClick } from "@/lib/tracking";

const ZONES = [
  "Bigote", "Axilas", "Brazos", "Pecho", "Bikini",
  "Brazilian", "Full Brazilian", "Media pierna", "Piernas completas", "Espalda",
  "Múltiples zonas", "No estoy seguro/a",
];

interface FormData {
  nombre: string;
  telefono: string;
  email: string;
  zona: string;
  tipo: "paquete" | "sesion" | "";
  horario: string;
  experienciaPrevia: string;
  consent: boolean;
}

const EMPTY: FormData = {
  nombre: "", telefono: "", email: "",
  zona: "", tipo: "", horario: "",
  experienciaPrevia: "", consent: false,
};

function buildMsg(f: FormData): string {
  const tipo = f.tipo === "paquete" ? "Paquete de sesiones" : f.tipo === "sesion" ? "Sesión individual" : "Por definir";
  return [
    "Hola, me interesa una evaluación para Láser Diodo High-Tech en Aurum Nova.",
    "",
    `Nombre: ${f.nombre}`,
    f.telefono && `Teléfono: ${f.telefono}`,
    f.email && `Email: ${f.email}`,
    `Zona de interés: ${f.zona || "Por definir"}`,
    `Interés: ${tipo}`,
    f.horario && `Horario preferido: ${f.horario}`,
    f.experienciaPrevia && `Experiencia previa con láser: ${f.experienciaPrevia}`,
    "",
    "Entiendo que esto requiere evaluación de elegibilidad individual.",
  ].filter(Boolean).join("\n");
}

export default function LaserLeadForm() {
  const [form, setForm] = useState<FormData>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  function set<K extends keyof FormData>(key: K, val: FormData[K]) {
    setForm((p) => ({ ...p, [key]: val }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs: Partial<Record<keyof FormData, string>> = {};
    if (!form.nombre.trim()) errs.nombre = "Requerido";
    if (!form.telefono.trim()) errs.telefono = "Requerido";
    if (!form.consent) errs.consent = "Debes aceptar para continuar";
    if (Object.keys(errs).length) { setErrors(errs); return; }
    trackLeadSubmitted("laser_lead_form");
    trackWhatsAppClick("laser_lead_form");
    const msg = buildMsg(form);
    window.open(
      `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(msg)}`,
      "_blank", "noopener,noreferrer",
    );
    setSubmitted(true);
  }

  const inputCls = (err?: string) =>
    `w-full text-sm bg-[#242424] border ${err ? "border-red-500" : "border-[#2D2D2D]"} rounded-xl px-4 py-2.5 text-white placeholder-[#4A4A4A] outline-none focus:border-[#C9A84C] transition-colors`;

  return (
    <section className="section-padding bg-[#1A1A1A]" id="formulario-laser">
      <div className="container-max">
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
              Diseña tu plan
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-3">
              Diseña tu plan láser personalizado
            </h2>
            <p className="text-sm text-[#9A9A9A] leading-relaxed">
              Cuéntanos tu zona de interés y te orientamos sobre opciones, sesiones y paquetes
              disponibles. Sin compromiso.
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
                  <h3 className="text-lg font-semibold text-white mb-2">¡Mensaje enviado!</h3>
                  <p className="text-sm text-[#9A9A9A] leading-relaxed">
                    Tu consulta fue enviada a WhatsApp. El equipo de Aurum Nova te contactará
                    para orientarte sobre tu plan láser.
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

                    {/* Telefono */}
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
                          <option value="">Cualquier horario</option>
                          <option value="Mañana (8am–12pm)">Mañana (8am–12pm)</option>
                          <option value="Tarde (12pm–5pm)">Tarde (12pm–5pm)</option>
                          <option value="Noche (5pm–8pm)">Noche (5pm–8pm)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Zona */}
                  <div>
                    <label className="block text-xs font-semibold text-[#9A9A9A] mb-1.5">
                      Zona de interés
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4A4A4A] pointer-events-none" />
                      <select
                        value={form.zona}
                        onChange={(e) => set("zona", e.target.value)}
                        className={`${inputCls()} pl-9 appearance-none`}
                      >
                        <option value="">Seleccionar zona</option>
                        {ZONES.map((z) => (
                          <option key={z} value={z}>{z}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Tipo */}
                  <div>
                    <label className="block text-xs font-semibold text-[#9A9A9A] mb-2">
                      ¿Sesión individual o paquete?
                    </label>
                    <div className="flex gap-3">
                      {[
                        { val: "paquete", label: "Paquete de sesiones" },
                        { val: "sesion", label: "Sesión individual" },
                      ].map((opt) => (
                        <button
                          key={opt.val}
                          type="button"
                          onClick={() => set("tipo", opt.val as FormData["tipo"])}
                          className={`flex-1 text-xs font-semibold py-2.5 rounded-xl border transition-all duration-200 ${
                            form.tipo === opt.val
                              ? "bg-[#C9A84C] border-[#C9A84C] text-white"
                              : "border-[#2D2D2D] text-[#6B6B6B] hover:border-[#C9A84C]/40"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Experiencia previa */}
                  <div>
                    <label className="block text-xs font-semibold text-[#9A9A9A] mb-1.5">
                      Experiencia previa con láser <span className="text-[#4A4A4A] font-normal">(opcional)</span>
                    </label>
                    <div className="flex gap-3">
                      {[
                        { val: "Sí, he tenido sesiones previas", label: "Sí" },
                        { val: "No, es mi primera vez", label: "Primera vez" },
                      ].map((opt) => (
                        <button
                          key={opt.val}
                          type="button"
                          onClick={() => set("experienciaPrevia", form.experienciaPrevia === opt.val ? "" : opt.val)}
                          className={`flex-1 text-xs font-semibold py-2.5 rounded-xl border transition-all duration-200 ${
                            form.experienciaPrevia === opt.val
                              ? "bg-[#C9A84C] border-[#C9A84C] text-white"
                              : "border-[#2D2D2D] text-[#6B6B6B] hover:border-[#C9A84C]/40"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
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
                        evaluación de elegibilidad individual.{" "}
                        <span className="text-[#C9A84C]">*</span>
                      </span>
                    </label>
                    {errors.consent && <p className="text-[10px] text-red-400 mt-1 ml-7">{errors.consent}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold py-3.5 rounded-full text-sm transition-all duration-200 mt-1"
                  >
                    Solicitar orientación por WhatsApp
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[10px] text-[#4A4A4A] text-center leading-relaxed">
                    Tu información se envía directamente a WhatsApp. Campos con{" "}
                    <span className="text-[#C9A84C]">*</span> son requeridos.
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
