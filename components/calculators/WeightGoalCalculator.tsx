"use client";

import { useState } from "react";
import { AlertCircle, Target } from "lucide-react";
import NumberInput from "@/components/calculators/NumberInput";
import CalculatorResultCard from "@/components/calculators/CalculatorResultCard";
import { trackCalculatorUsed } from "@/lib/tracking";

const timeframes = [
  { label: "1 mes", value: "1", weeks: 4.345 },
  { label: "3 meses", value: "3", weeks: 13.035 },
  { label: "6 meses", value: "6", weeks: 26.07 },
  { label: "12 meses", value: "12", weeks: 52.14 },
];

interface WeightGoalResult {
  poundsToLose: number;
  weeklyChange: number;
  classification: string;
  interpretation: string;
  timeframeLabel: string;
  warning?: string;
}

function classifyWeeklyChange(poundsToLose: number, weeklyChange: number) {
  if (poundsToLose <= 0) {
    return {
      classification: "Meta no válida o ya alcanzada",
      interpretation:
        "La meta ingresada no refleja una pérdida de peso pendiente. Si deseas mantener, ganar peso o redefinir tu meta, conviene evaluarlo con contexto clínico.",
      warning:
        "Esta calculadora está diseñada para metas de pérdida de peso. No determina si una meta es adecuada para tu salud.",
    };
  }

  if (weeklyChange <= 1) {
    return {
      classification: "Ritmo conservador",
      interpretation:
        "El ritmo semanal estimado es conservador. Aun así, la meta debe interpretarse con historial, composición corporal, hábitos y condiciones médicas.",
    };
  }

  if (weeklyChange <= 2) {
    return {
      classification: "Ritmo moderado",
      interpretation:
        "El ritmo semanal estimado es moderado. La planificación debe individualizarse para proteger masa muscular, energía, adherencia y seguridad.",
    };
  }

  return {
    classification: "Ritmo agresivo",
    interpretation:
      "El ritmo semanal estimado es agresivo y requiere evaluación y planificación clínica antes de intentar alcanzarlo.",
    warning:
      "Evita metas extremas o restricciones intensas sin supervisión clínica. La seguridad y sostenibilidad importan más que la velocidad.",
  };
}

export default function WeightGoalCalculator() {
  const [currentWeight, setCurrentWeight] = useState("");
  const [goalWeight, setGoalWeight] = useState("");
  const [timeframe, setTimeframe] = useState("3");
  const [error, setError] = useState("");
  const [result, setResult] = useState<WeightGoalResult | null>(null);

  const calculate = () => {
    const current = Number.parseFloat(currentWeight);
    const goal = Number.parseFloat(goalWeight);
    const selectedTimeframe = timeframes.find((item) => item.value === timeframe) ?? timeframes[1];

    if (!Number.isFinite(current) || !Number.isFinite(goal)) {
      setError("Ingresa tu peso actual y tu meta en libras.");
      setResult(null);
      return;
    }

    if (current < 50 || current > 800 || goal < 50 || goal > 800) {
      setError("Ingresa pesos válidos en libras.");
      setResult(null);
      return;
    }

    const poundsToLose = current - goal;
    const weeklyChange = poundsToLose / selectedTimeframe.weeks;
    const classification = classifyWeeklyChange(poundsToLose, weeklyChange);

    setError("");
    setResult({
      poundsToLose,
      weeklyChange,
      classification: classification.classification,
      interpretation: classification.interpretation,
      warning: classification.warning,
      timeframeLabel: selectedTimeframe.label,
    });
    trackCalculatorUsed("meta_de_peso");
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
      <div className="rounded-2xl border border-[#E8E4DA] bg-[#FAF8F4] p-5 shadow-sm sm:p-6">
        <div className="mb-6 flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#C9A84C]/10">
            <Target className="h-5 w-5 text-[#C9A84C]" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-[#1A1A1A]">Define una meta educativa</h2>
            <p className="mt-1 text-sm leading-relaxed text-[#6B6B6B]">
              Compara peso actual, meta y plazo para entender el ritmo semanal aproximado.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <NumberInput
            id="goal-current-weight"
            label="Peso actual"
            value={currentWeight}
            onChange={setCurrentWeight}
            placeholder="185"
            min={50}
            max={800}
            suffix="lb"
          />
          <NumberInput
            id="goal-target-weight"
            label="Peso meta"
            value={goalWeight}
            onChange={setGoalWeight}
            placeholder="165"
            min={50}
            max={800}
            suffix="lb"
          />
        </div>

        <div className="mt-5">
          <p className="mb-3 text-sm font-semibold text-[#1A1A1A]">Plazo</p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {timeframes.map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => setTimeframe(item.value)}
                className={`min-h-11 rounded-full border px-3 py-2 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-3 focus:ring-[#C9A84C]/25 ${
                  timeframe === item.value
                    ? "border-[#C9A84C] bg-[#C9A84C] text-[#1A1A1A]"
                    : "border-[#E8E4DA] bg-white text-[#3D3D3D] hover:border-[#C9A84C]/60"
                }`}
              >
                {item.label}
              </button>
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
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#C9A84C] px-5 py-3.5 text-base font-semibold text-[#1A1A1A] shadow-md transition-all duration-200 hover:bg-[#A8872E] hover:shadow-lg focus:outline-none focus:ring-3 focus:ring-[#C9A84C]/30"
        >
          <Target className="h-4 w-4" />
          Calcular meta
        </button>
      </div>

      <CalculatorResultCard
        title="Ritmo estimado"
        value={result ? `${Math.max(result.poundsToLose, 0).toFixed(1)} lb` : undefined}
        label={result?.classification}
        description={
          result
            ? result.interpretation
            : "Ingresa peso actual, peso meta y plazo para estimar el cambio semanal promedio."
        }
        warning={result?.warning}
        metrics={
          result
            ? [
                {
                  label: "Cambio total",
                  value:
                    result.poundsToLose > 0
                      ? `${result.poundsToLose.toFixed(1)} lb`
                      : "Sin pérdida pendiente",
                },
                {
                  label: "Cambio semanal",
                  value:
                    result.poundsToLose > 0
                      ? `${result.weeklyChange.toFixed(1)} lb/semana`
                      : "No aplica",
                },
                { label: "Plazo", value: result.timeframeLabel },
                {
                  label: "Lectura",
                  value: result.classification,
                  detail: "No determina si la meta es saludable.",
                },
              ]
            : []
        }
      />
    </div>
  );
}
