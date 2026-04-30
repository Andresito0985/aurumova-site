"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, User, Phone, Mail, Target, Weight, Calendar } from "lucide-react";
import { siteConfig } from "@/content/site";
import { trackLeadSubmitted, trackWhatsAppClick } from "@/lib/tracking";

const OBJETIVOS = [
  "Pérdida de peso",
  "Control de glucosa / resistencia a insulina",
  "Manejo de síndrome metabólico",
  "Apoyo en perimenopausia / menopausia",
  "Composición corporal (grasa / músculo)",
  "Control de triglicéridos / colesterol",
  "Otro",
];

const INTENTOS = [
  "Primera vez buscando apoyo médico",
  "He intentado dietas y ejercicio sin resultados sostenidos",
  "He tenido tratamientos previos (sin éxito a largo plazo)",
  "Estoy en tratamiento activo y busco complemento",
];

const CONDICIONES = [
  "Diabetes tipo 2 / prediabetes",
  "Hipotiroidismo",
  "Síndrome metabólico",
  "Hipertensión",
  "Colesterol / triglicéridos elevados",
  "Ninguna de las anteriores",
];

interface FormData {
  nombre: string;
  telefono: string;
  email: string;
  edad: string;
  objetivo: string;
  peso: string;
  estatura: string;
  cintura: string;
  intentos: string;
  condiciones: string;
  medicamentos: string;
  consent: boolean;
}

const EMPTY: FormData = {
  nombre: "", telefono: "", email: "",
  edad: "", objetivo: "", peso: "",
  estatura: "", cintura: "", intentos: "",
  condiciones: "", medicamentos: "",
  consent: false,
};

function buildMsg(f: FormData): string {
  return [
    "Hola Aurum Nova, me interesa saber si cualifico para el Programa Metabólico Integral.",
    "",
    `Nombre: ${f.nombre}`,
    f.telefono && `Teléfono: ${f.telefono}`,
    f.email && `Email: ${f.email}`,
    f.edad && `Edad: ${f.edad} años`,
    f.objetivo && `Objetivo principal: ${f.objetivo}`,
    f.peso && `Peso actual: ${f.peso} lbs`,
    f.estatura && `Estatura: ${f.estatura} pulgadas`,
    f.cintura && `Cintura aprox.: ${f.cintura} pulgadas`,
    f.intentos && `Intentos previos: ${f.intentos}`,
    f.condiciones && `Condiciones metabólicas: ${f.condiciones}`,
    f.medicamentos && `Medicamentos actuales: ${f.medicamentos}`,
    "",
    "Entiendo que esto requiere evaluación médica individual.",
  ].filter(Boolean).join("\n");
}

const inputCls = (err?: string) =>
  `w-full text-sm bg-[#242424] border ${err ? "border-red-500" : "border-[#2D2D2D]"} rounded-xl px-4 py-2.5 text-white placeholder-[#4A4A4A] outline-none focus:border-[#C9A84C] transition-colors`;

export default function MetabolicLeadForm() {
  const [form, setForm] = useState<FormData>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

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
    trackLeadSubmitted("metabolic_lead_form");
    trackWhatsAppClick("metabolic_lead_form");
    const msg = buildMsg(form);
    window.open(
      `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(msg)}`,
      "_blank", "noopener,noreferrer",
    );
    setSubmitted(true);
  }

  return (
    <section className="section-padding bg-[#1A1A1A]">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <div className="text-center mb-8">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
              Primer paso
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-3">
              ¿Cualifico para el programa?
            </h2>
            <p className="text-sm text-[#9A9A9A] leading-relaxed">
              Comparte tu información y te contactamos para coordinar tu evaluación médica inicial.
              Sin compromiso — la evaluación determina si eres candidato.
            </p>
          </div>

          <div className="bg-[#242424] border border-[#2D2D2D] rounded-2xl p-6 sm:p-8">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle2 className="w-12 h-12 text-[#C9A84C] mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">¡Listo!</h3>
                  <p className="text-sm text-[#9A9A9A] leading-relaxed">
                    Tu mensaje fue enviado a WhatsApp. El equipo de Aurum Nova coordinará
                    tu evaluación médica inicial.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm(EMPTY); }}
                    className="mt-6 text-xs text-[#C9A84C] hover:underline"
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

                    {/* Edad */}
                    <div>
                      <label className="block text-xs font-semibold text-[#9A9A9A] mb-1.5">
                        Edad <span className="text-[#4A4A4A] font-normal">(opcional)</span>
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4A4A4A] pointer-events-none" />
                        <input
                          type="number"
                          placeholder="ej. 42"
                          value={form.edad}
                          onChange={(e) => set("edad", e.target.value)}
                          className={`${inputCls()} pl-9`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Objetivo */}
                  <div>
                    <label className="block text-xs font-semibold text-[#9A9A9A] mb-1.5">
                      Objetivo principal
                    </label>
                    <div className="relative">
                      <Target className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4A4A4A] pointer-events-none" />
                      <select
                        value={form.objetivo}
                        onChange={(e) => set("objetivo", e.target.value)}
                        className={`${inputCls()} pl-9 appearance-none`}
                      >
                        <option value="">Seleccionar objetivo</option>
                        {OBJETIVOS.map((o) => (
                          <option key={o} value={o}>{o}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Peso / Estatura / Cintura */}
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#9A9A9A] mb-1.5">
                        Peso (lbs)
                      </label>
                      <div className="relative">
                        <Weight className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4A4A4A] pointer-events-none" />
                        <input
                          type="number"
                          placeholder="185"
                          value={form.peso}
                          onChange={(e) => set("peso", e.target.value)}
                          className={`${inputCls()} pl-9`}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#9A9A9A] mb-1.5">
                        Estatura (pulg.)
                      </label>
                      <input
                        type="number"
                        placeholder="65"
                        value={form.estatura}
                        onChange={(e) => set("estatura", e.target.value)}
                        className={inputCls()}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#9A9A9A] mb-1.5">
                        Cintura (pulg.)
                      </label>
                      <input
                        type="number"
                        placeholder="36"
                        value={form.cintura}
                        onChange={(e) => set("cintura", e.target.value)}
                        className={inputCls()}
                      />
                    </div>
                  </div>
                  <p className="text-[10px] text-[#4A4A4A] -mt-2 leading-relaxed">
                    Peso, estatura y cintura son opcionales. Ayudan al equipo a preparar tu evaluación.
                  </p>

                  {/* Intentos previos */}
                  <div>
                    <label className="block text-xs font-semibold text-[#9A9A9A] mb-1.5">
                      Intentos previos de manejo de peso
                    </label>
                    <select
                      value={form.intentos}
                      onChange={(e) => set("intentos", e.target.value)}
                      className={`${inputCls()} appearance-none`}
                    >
                      <option value="">Seleccionar</option>
                      {INTENTOS.map((i) => (
                        <option key={i} value={i}>{i}</option>
                      ))}
                    </select>
                  </div>

                  {/* Condiciones metabólicas */}
                  <div>
                    <label className="block text-xs font-semibold text-[#9A9A9A] mb-1.5">
                      Condiciones metabólicas <span className="text-[#4A4A4A] font-normal">(opcional)</span>
                    </label>
                    <select
                      value={form.condiciones}
                      onChange={(e) => set("condiciones", e.target.value)}
                      className={`${inputCls()} appearance-none`}
                    >
                      <option value="">Seleccionar si aplica</option>
                      {CONDICIONES.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  {/* Medicamentos */}
                  <div>
                    <label className="block text-xs font-semibold text-[#9A9A9A] mb-1.5">
                      Medicamentos actuales <span className="text-[#4A4A4A] font-normal">(opcional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="ej. metformina, antihipertensivos — o deja en blanco"
                      value={form.medicamentos}
                      onChange={(e) => set("medicamentos", e.target.value)}
                      className={inputCls()}
                    />
                    <p className="text-[10px] text-[#4A4A4A] mt-1 leading-relaxed">
                      No compartas información médica sensible detallada aquí. Solo nombres generales si aplica.
                    </p>
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
                        evaluación médica y que no todos los pacientes son candidatos.{" "}
                        <span className="text-[#C9A84C]">*</span>
                      </span>
                    </label>
                    {errors.consent && <p className="text-[10px] text-red-400 mt-1 ml-7">{errors.consent}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold py-3.5 rounded-full text-sm transition-all duration-200 mt-1"
                  >
                    Consultar si cualifico por WhatsApp
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[10px] text-[#4A4A4A] text-center leading-relaxed">
                    Tu información se envía directamente a WhatsApp. No almacenamos datos en servidores.
                    Campos con <span className="text-[#C9A84C]">*</span> son requeridos.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
