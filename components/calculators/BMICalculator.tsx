"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, AlertCircle, ArrowRight } from "lucide-react";
import { whatsappLink } from "@/content/site";

type BMICategory = {
  label: string;
  color: string;
  bg: string;
  message: string;
};

function getBMICategory(bmi: number): BMICategory {
  if (bmi < 18.5)
    return {
      label: "Bajo peso",
      color: "#5B7FA6",
      bg: "#EBF2FA",
      message: "Tu índice sugiere peso por debajo del rango saludable. Una evaluación médica puede orientar un plan de nutrición adecuado.",
    };
  if (bmi < 25)
    return {
      label: "Peso saludable",
      color: "#6B8F6B",
      bg: "#EBF4EB",
      message: "Tu índice está dentro del rango saludable. Mantener este rango con supervisión clínica es clave para el bienestar a largo plazo.",
    };
  if (bmi < 30)
    return {
      label: "Sobrepeso",
      color: "#C9A84C",
      bg: "#FDF6E8",
      message: "Tu índice indica sobrepeso. Un programa metabólico supervisado puede ayudarte a alcanzar y mantener un peso más saludable.",
    };
  return {
    label: "Obesidad",
    color: "#C05050",
    bg: "#FAEAEA",
    message: "Tu índice indica obesidad. Una evaluación médica completa es el primer paso para un programa personalizado y seguro.",
  };
}

export default function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState<{ bmi: number; category: BMICategory } | null>(null);
  const [error, setError] = useState("");

  const calculate = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (!h || !w || h <= 0 || w <= 0) {
      setError("Por favor ingresa valores válidos de peso y estatura.");
      setResult(null);
      return;
    }
    if (h < 100 || h > 250) {
      setError("La estatura debe estar entre 100 cm y 250 cm.");
      setResult(null);
      return;
    }
    if (w < 20 || w > 300) {
      setError("El peso debe estar entre 20 kg y 300 kg.");
      setResult(null);
      return;
    }

    setError("");
    const heightM = h / 100;
    const bmi = w / (heightM * heightM);
    const category = getBMICategory(bmi);
    setResult({ bmi: Math.round(bmi * 10) / 10, category });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") calculate();
  };

  return (
    <section id="calculadora" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
              Herramienta Educativa
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] mb-4">
              Calculadora de
              <br />
              <span className="gold-text-gradient">Índice de Masa Corporal</span>
            </h2>
            <p className="text-base text-[#6B6B6B] leading-relaxed mb-6">
              Esta herramienta es únicamente orientativa y educativa. El IMC es un indicador
              general y no constituye un diagnóstico médico ni determina tu candidatura
              a ningún programa de Aurum Nova.
            </p>

            <div className="bg-[#FAF8F4] border border-[#E8E4DA] rounded-xl p-4 flex items-start gap-3 mb-6">
              <AlertCircle className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" />
              <p className="text-xs text-[#6B6B6B] leading-relaxed">
                <strong>Aviso importante:</strong> Esta calculadora no diagnostica, no prescribe
                ni garantiza resultados. Solo un médico puede evaluar tu candidatura a cualquier
                programa clínico mediante una evaluación médica completa.
              </p>
            </div>

            {/* Calculator form */}
            <div className="bg-white border border-[#E8E4DA] rounded-2xl p-6 shadow-sm">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                    Estatura (cm)
                  </label>
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ejemplo: 168"
                    min={100}
                    max={250}
                    className="w-full border border-[#E8E4DA] focus:border-[#C9A84C] focus:outline-none rounded-xl px-4 py-3 text-base text-[#1A1A1A] bg-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                    Peso (kg)
                  </label>
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ejemplo: 75"
                    min={20}
                    max={300}
                    className="w-full border border-[#E8E4DA] focus:border-[#C9A84C] focus:outline-none rounded-xl px-4 py-3 text-base text-[#1A1A1A] bg-white transition-colors"
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-500 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    {error}
                  </p>
                )}

                <button
                  onClick={calculate}
                  className="w-full bg-[#C9A84C] hover:bg-[#A8872E] text-[#1A1A1A] font-semibold py-3.5 rounded-full transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Calculator className="w-4 h-4" />
                  Calcular IMC
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right — result */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="sticky top-24"
          >
            <AnimatePresence mode="wait">
              {!result ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-[#FAF8F4] border border-[#E8E4DA] rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[320px]"
                >
                  <div className="w-16 h-16 rounded-full bg-[#C9A84C]/10 flex items-center justify-center mb-4">
                    <Calculator className="w-8 h-8 text-[#C9A84C]/60" />
                  </div>
                  <p className="text-[#9A9A9A] text-sm">
                    Ingresa tu estatura y peso para calcular tu IMC orientativo
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="rounded-2xl border overflow-hidden"
                  style={{ borderColor: result.category.color + "30" }}
                >
                  {/* IMC number */}
                  <div
                    className="p-8 text-center"
                    style={{ backgroundColor: result.category.bg }}
                  >
                    <p className="text-xs font-semibold uppercase tracking-widest mb-2"
                      style={{ color: result.category.color }}>
                      Tu IMC Estimado
                    </p>
                    <div
                      className="text-6xl font-bold mb-2"
                      style={{ color: result.category.color }}
                    >
                      {result.bmi}
                    </div>
                    <div
                      className="inline-block text-sm font-semibold px-4 py-1.5 rounded-full"
                      style={{
                        backgroundColor: result.category.color + "20",
                        color: result.category.color,
                      }}
                    >
                      {result.category.label}
                    </div>
                  </div>

                  <div className="bg-white p-6 space-y-4">
                    <p className="text-sm text-[#3D3D3D] leading-relaxed">
                      {result.category.message}
                    </p>

                    <div className="bg-[#FAF8F4] rounded-xl p-4 text-xs text-[#9A9A9A] leading-relaxed">
                      <strong className="text-[#6B6B6B]">Aviso:</strong> Este resultado es
                      orientativo y no constituye un diagnóstico médico. Solo un profesional
                      de la salud puede evaluar tu estado de salud completo y determinar tu
                      candidatura a cualquier programa.
                    </div>

                    <a
                      href={whatsappLink(
                        `Hola, calculé mi IMC en la calculadora de Aurum Nova y obtuve ${result.bmi} (${result.category.label}). Quisiera agendar una evaluación médica.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-2 w-full bg-[#C9A84C] hover:bg-[#A8872E] text-[#1A1A1A] font-semibold py-3.5 px-5 rounded-full transition-all duration-200"
                    >
                      <span>Agendar Evaluación Médica</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Reference table */}
            <div className="mt-4 bg-white border border-[#E8E4DA] rounded-xl p-4">
              <p className="text-xs font-semibold text-[#1A1A1A] mb-3">Clasificación de referencia (OMS)</p>
              <div className="space-y-1.5">
                {[
                  { range: "< 18.5", label: "Bajo peso", color: "#5B7FA6" },
                  { range: "18.5 – 24.9", label: "Peso saludable", color: "#6B8F6B" },
                  { range: "25.0 – 29.9", label: "Sobrepeso", color: "#C9A84C" },
                  { range: "≥ 30.0", label: "Obesidad", color: "#C05050" },
                ].map((row) => (
                  <div key={row.range} className="flex items-center justify-between text-xs">
                    <span className="text-[#6B6B6B] font-mono">{row.range}</span>
                    <span className="font-medium" style={{ color: row.color }}>{row.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
