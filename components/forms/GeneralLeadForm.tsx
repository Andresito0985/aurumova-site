"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, User, Phone, Mail, Clock, MapPin, Target } from "lucide-react";
import { siteConfig } from "@/content/site";

const SERVICES = [
  "Programa Metabólico Integral",
  "Láser Diodo",
  "Sueroterapia NAD+ / Myers",
  "Inyectables Metabólicos",
  "Wellness Mujer",
  "Wellness Hombre",
  "Nutrición",
  "Skin & Glow",
  "Hair Support",
  "No estoy seguro/a",
];

const HORARIOS = [
  "Mañana (8am–12pm)",
  "Tarde (12pm–5pm)",
  "Noche (5pm–8pm)",
  "Cualquier horario",
];

const METAS = [
  "Bajar de peso",
  "Mejorar energía y bienestar",
  "Reducción de vello",
  "Terapia IV / nutrientes",
  "Salud de piel o cabello",
  "Equilibrio hormonal",
  "Otro",
];

interface FormData {
  nombre: string;
  telefono: string;
  email: string;
  servicio: string;
  horario: string;
  meta: string;
  ciudad: string;
  consent: boolean;
}

const EMPTY: FormData = {
  nombre: "", telefono: "", email: "",
  servicio: "", horario: "", meta: "",
  ciudad: "", consent: false,
};

function buildMsg(f: FormData): string {
  return [
    `Hola Aurum Nova, me interesa ${f.servicio || "conocer sus servicios"}.`,
    "",
    `Nombre: ${f.nombre}`,
    f.telefono && `Teléfono: ${f.telefono}`,
    f.email && `Email: ${f.email}`,
    f.ciudad && `Área: ${f.ciudad}`,
    f.meta && `Meta principal: ${f.meta}`,
    f.horario && `Horario preferido: ${f.horario}`,
    "",
    "Entiendo que esto requiere evaluación individual.",
  ].filter(Boolean).join("\n");
}

const inputCls = (err?: string) =>
  `w-full text-sm bg-[#242424] border ${err ? "border-red-500" : "border-[#2D2D2D]"} rounded-xl px-4 py-2.5 text-white placeholder-[#4A4A4A] outline-none focus:border-[#C9A84C] transition-colors`;

interface Props {
  preselectedService?: string;
  heading?: string;
  subheading?: string;
}

export default function GeneralLeadForm({
  preselectedService,
  heading = "¿Listo para comenzar?",
  subheading = "Comparte tu información y te contactamos para orientarte. Sin compromiso — la evaluación determina el plan correcto para ti.",
}: Props) {
  const [form, setForm] = useState<FormData>({
    ...EMPTY,
    servicio: preselectedService ?? "",
  });
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
    const msg = buildMsg(form);
    window.open(
      `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(msg)}`,
      "_blank", "noopener,noreferrer",
    );
    setSubmitted(true);
  }

  return (
    <section className="section-padding bg-[#1A1A1A]" id="formulario-contacto">
      <div className="container-max">
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
              Primer paso
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-3">{heading}</h2>
            <p className="text-sm text-[#9A9A9A] leading-relaxed">{subheading}</p>
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
                    Tu solicitud fue enviada a WhatsApp. El equipo de Aurum Nova te contactará
                    para coordinar tu próximo paso.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ ...EMPTY, servicio: preselectedService ?? "" }); }}
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

                    {/* Ciudad */}
                    <div>
                      <label className="block text-xs font-semibold text-[#9A9A9A] mb-1.5">
                        Ciudad / Área <span className="text-[#4A4A4A] font-normal">(opcional)</span>
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4A4A4A] pointer-events-none" />
                        <input
                          type="text"
                          placeholder="ej. Arecibo, Bayamón"
                          value={form.ciudad}
                          onChange={(e) => set("ciudad", e.target.value)}
                          className={`${inputCls()} pl-9`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Servicio */}
                  <div>
                    <label className="block text-xs font-semibold text-[#9A9A9A] mb-1.5">
                      Servicio de interés
                    </label>
                    <select
                      value={form.servicio}
                      onChange={(e) => set("servicio", e.target.value)}
                      className={`${inputCls()} appearance-none`}
                    >
                      <option value="">Seleccionar servicio</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Meta */}
                    <div>
                      <label className="block text-xs font-semibold text-[#9A9A9A] mb-1.5">
                        Meta principal
                      </label>
                      <div className="relative">
                        <Target className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4A4A4A] pointer-events-none" />
                        <select
                          value={form.meta}
                          onChange={(e) => set("meta", e.target.value)}
                          className={`${inputCls()} pl-9 appearance-none`}
                        >
                          <option value="">Seleccionar</option>
                          {METAS.map((m) => (
                            <option key={m} value={m}>{m}</option>
                          ))}
                        </select>
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
                        evaluación médica. <span className="text-[#C9A84C]">*</span>
                      </span>
                    </label>
                    {errors.consent && <p className="text-[10px] text-red-400 mt-1 ml-7">{errors.consent}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold py-3.5 rounded-full text-sm transition-all duration-200 mt-1"
                  >
                    Contactar por WhatsApp
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
