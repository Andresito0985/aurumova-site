"use client";

import { useState } from "react";
import { AlertCircle, Droplets } from "lucide-react";
import NumberInput from "@/components/calculators/NumberInput";
import CalculatorResultCard from "@/components/calculators/CalculatorResultCard";
import { trackCalculatorUsed } from "@/lib/tracking";

type ActivityLevel = "low" | "moderate" | "high";
type SweatLevel = "low" | "moderate" | "high";

const activityOptions: Record<ActivityLevel, { label: string; adjustment: number }> = {
  low: { label: "Baja", adjustment: 0 },
  moderate: { label: "Moderada", adjustment: 300 },
  high: { label: "Alta", adjustment: 600 },
};

const sweatOptions: Record<SweatLevel, { label: string; adjustment: number }> = {
  low: { label: "Bajo", adjustment: 0 },
  moderate: { label: "Moderado", adjustment: 250 },
  high: { label: "Alto", adjustment: 500 },
};

const symptomOptions = ["Estreñimiento", "Náuseas", "Dolor de cabeza", "Fatiga", "Ninguno"];
const cautionOptions = [
  "Enfermedad renal",
  "Enfermedad cardíaca",
  "Presión alta descontrolada",
  "Uso de diuréticos",
  "Ninguna",
];

interface HydrationResult {
  lowMl: number;
  highMl: number;
  bottlesLow: number;
  bottlesHigh: number;
  activityLabel: string;
  sweatLabel: string;
  electrolyteNote?: string;
  warning?: string;
  symptomNote?: string;
}

function formatLiters(ml: number) {
  return `${(ml / 1000).toFixed(1)} L`;
}

function toggleListValue(value: string, current: string[], noneLabel: string) {
  if (value === noneLabel) return current.includes(noneLabel) ? [] : [noneLabel];
  const withoutNone = current.filter((item) => item !== noneLabel);
  return withoutNone.includes(value)
    ? withoutNone.filter((item) => item !== value)
    : [...withoutNone, value];
}

export default function HydrationElectrolytesCalculator() {
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState<ActivityLevel>("moderate");
  const [sweat, setSweat] = useState<SweatLevel>("moderate");
  const [symptoms, setSymptoms] = useState<string[]>(["Ninguno"]);
  const [cautions, setCautions] = useState<string[]>(["Ninguna"]);
  const [error, setError] = useState("");
  const [result, setResult] = useState<HydrationResult | null>(null);

  const calculate = () => {
    const weightValue = Number.parseFloat(weight);

    if (!Number.isFinite(weightValue)) {
      setError("Ingresa tu peso en libras.");
      setResult(null);
      return;
    }

    if (weightValue < 50 || weightValue > 800) {
      setError("Ingresa un peso válido en libras.");
      setResult(null);
      return;
    }

    const weightKg = weightValue / 2.20462;
    const adjustment = activityOptions[activity].adjustment + sweatOptions[sweat].adjustment;
    const lowMl = weightKg * 30 + adjustment;
    const highMl = weightKg * 35 + adjustment;
    const hasElectrolyteContext = activity !== "low" || sweat !== "low";
    const hasCautions = cautions.length > 0 && !cautions.includes("Ninguna");
    const hasSymptoms = symptoms.length > 0 && !symptoms.includes("Ninguno");

    setError("");
    setResult({
      lowMl,
      highMl,
      bottlesLow: lowMl / 500,
      bottlesHigh: highMl / 500,
      activityLabel: activityOptions[activity].label,
      sweatLabel: sweatOptions[sweat].label,
      electrolyteNote: hasElectrolyteContext
        ? "Con actividad física o sudoración, algunas personas pueden beneficiarse de electrolitos, pero la cantidad depende de dieta, presión arterial, riñón, medicamentos y contexto clínico."
        : "Con actividad y sudoración baja, muchas personas pueden enfocarse primero en consistencia de líquidos y alimentos regulares.",
      warning: hasCautions
        ? "Por tu historial seleccionado, evita ajustar electrolitos o líquidos agresivamente sin evaluación clínica."
        : undefined,
      symptomNote: hasSymptoms
        ? "Los síntomas seleccionados pueden tener muchas causas. Si son persistentes, intensos o nuevos, requieren orientación clínica."
        : undefined,
    });
    trackCalculatorUsed("hidratacion_electrolitos");
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
      <div className="rounded-2xl border border-[#E8E4DA] bg-[#FAF8F4] p-5 shadow-sm sm:p-6">
        <div className="mb-6 flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#C9A84C]/10">
            <Droplets className="h-5 w-5 text-[#C9A84C]" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-[#1A1A1A]">Hidratación diaria</h2>
            <p className="mt-1 text-sm leading-relaxed text-[#6B6B6B]">
              Estima un rango general según peso, actividad y sudoración.
            </p>
          </div>
        </div>

        <NumberInput
          id="hydration-weight"
          label="Peso"
          value={weight}
          onChange={setWeight}
          placeholder="180"
          min={50}
          max={800}
          suffix="lb"
        />

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="hydration-activity" className="mb-2 block text-sm font-semibold text-[#1A1A1A]">
              Actividad
            </label>
            <select
              id="hydration-activity"
              value={activity}
              onChange={(event) => setActivity(event.target.value as ActivityLevel)}
              className="w-full rounded-xl border border-[#E8E4DA] bg-white px-4 py-3.5 text-base text-[#1A1A1A] shadow-sm focus:border-[#C9A84C] focus:outline-none focus:ring-3 focus:ring-[#C9A84C]/20"
            >
              <option value="low">Baja</option>
              <option value="moderate">Moderada</option>
              <option value="high">Alta</option>
            </select>
          </div>

          <div>
            <label htmlFor="hydration-sweat" className="mb-2 block text-sm font-semibold text-[#1A1A1A]">
              Sudoración
            </label>
            <select
              id="hydration-sweat"
              value={sweat}
              onChange={(event) => setSweat(event.target.value as SweatLevel)}
              className="w-full rounded-xl border border-[#E8E4DA] bg-white px-4 py-3.5 text-base text-[#1A1A1A] shadow-sm focus:border-[#C9A84C] focus:outline-none focus:ring-3 focus:ring-[#C9A84C]/20"
            >
              <option value="low">Bajo</option>
              <option value="moderate">Moderado</option>
              <option value="high">Alto</option>
            </select>
          </div>
        </div>

        <div className="mt-5">
          <p className="mb-3 text-sm font-semibold text-[#1A1A1A]">Síntomas presentes</p>
          <div className="grid gap-2 sm:grid-cols-2">
            {symptomOptions.map((item) => (
              <label
                key={item}
                className="flex min-h-11 cursor-pointer items-center gap-3 rounded-xl border border-[#E8E4DA] bg-white px-3 py-2 text-sm font-medium text-[#3D3D3D]"
              >
                <input
                  type="checkbox"
                  checked={symptoms.includes(item)}
                  onChange={() => setSymptoms((current) => toggleListValue(item, current, "Ninguno"))}
                  className="h-4 w-4 accent-[#C9A84C]"
                />
                {item}
              </label>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <p className="mb-3 text-sm font-semibold text-[#1A1A1A]">Cautelas médicas</p>
          <div className="grid gap-2 sm:grid-cols-2">
            {cautionOptions.map((item) => (
              <label
                key={item}
                className="flex min-h-11 cursor-pointer items-center gap-3 rounded-xl border border-[#E8E4DA] bg-white px-3 py-2 text-sm font-medium text-[#3D3D3D]"
              >
                <input
                  type="checkbox"
                  checked={cautions.includes(item)}
                  onChange={() => setCautions((current) => toggleListValue(item, current, "Ninguna"))}
                  className="h-4 w-4 accent-[#C9A84C]"
                />
                {item}
              </label>
            ))}
          </div>
        </div>

        {error && (
          <div className="mt-4 flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            <p>{error}</p>
          </div>
        )}

        <button
          type="button"
          onClick={calculate}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#C9A84C] px-5 py-3.5 text-base font-semibold text-white shadow-md transition-all duration-200 hover:bg-[#A8872E] hover:shadow-lg focus:outline-none focus:ring-3 focus:ring-[#C9A84C]/30"
        >
          <Droplets className="h-4 w-4" />
          Estimar hidratación
        </button>
      </div>

      <CalculatorResultCard
        title="Rango diario"
        value={result ? `${formatLiters(result.lowMl)} - ${formatLiters(result.highMl)}` : undefined}
        label="Hidratación estimada"
        description={
          result
            ? "Este rango es educativo y puede cambiar según clima, dieta, sudoración real, medicamentos y condiciones médicas."
            : "Ingresa tu peso y contexto para estimar un rango general de hidratación diaria."
        }
        warning={result?.warning}
        metrics={
          result
            ? [
                {
                  label: "Botellas 16.9 oz",
                  value: `${result.bottlesLow.toFixed(1)} - ${result.bottlesHigh.toFixed(1)}`,
                  detail: "Aprox. 500 mL por botella.",
                },
                { label: "Actividad", value: result.activityLabel },
                { label: "Sudoración", value: result.sweatLabel },
                {
                  label: "Electrolitos",
                  value: result.activityLabel === "Baja" && result.sweatLabel === "Bajo" ? "Cautela" : "Puede aplicar",
                  detail: "No incluye dosis de sodio, potasio ni magnesio.",
                },
              ]
            : []
        }
      >
        {result?.electrolyteNote && (
          <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.035] p-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#E2C97E]">
              Nota de electrolitos
            </p>
            <p className="mt-2 text-xs leading-relaxed text-white/70">{result.electrolyteNote}</p>
          </div>
        )}
        {result?.symptomNote && (
          <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.035] p-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#E2C97E]">
              Síntomas
            </p>
            <p className="mt-2 text-xs leading-relaxed text-white/70">{result.symptomNote}</p>
          </div>
        )}
      </CalculatorResultCard>
    </div>
  );
}
