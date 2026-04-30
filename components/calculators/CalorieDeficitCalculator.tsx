"use client";

import { useState } from "react";
import { AlertCircle, Flame } from "lucide-react";
import NumberInput from "@/components/calculators/NumberInput";
import CalculatorResultCard from "@/components/calculators/CalculatorResultCard";
import { trackCalculatorUsed } from "@/lib/tracking";

type Sex = "female" | "male";
type ActivityLevel = "sedentary" | "light" | "moderate" | "active";
type Goal = "maintain" | "progressive" | "moderate";

const activityOptions: Record<ActivityLevel, { label: string; multiplier: number }> = {
  sedentary: { label: "Sedentario", multiplier: 1.2 },
  light: { label: "Ligero", multiplier: 1.375 },
  moderate: { label: "Moderado", multiplier: 1.55 },
  active: { label: "Activo", multiplier: 1.725 },
};

const goalOptions: Record<Goal, string> = {
  maintain: "Mantener",
  progressive: "Pérdida progresiva",
  moderate: "Pérdida moderada",
};

interface CalorieResult {
  bmr: number;
  maintenance: number;
  selectedRangeLow: number;
  selectedRangeHigh: number;
  moderateDeficitLow: number;
  moderateDeficitHigh: number;
  threshold: number;
  warning?: string;
  activityLabel: string;
  goalLabel: string;
}

const roundCalories = (value: number) => Math.round(value / 10) * 10;

function formatCalories(value: number) {
  return `${roundCalories(value).toLocaleString("en-US")} kcal`;
}

export default function CalorieDeficitCalculator() {
  const [sex, setSex] = useState<Sex>("female");
  const [age, setAge] = useState("");
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState<ActivityLevel>("light");
  const [goal, setGoal] = useState<Goal>("moderate");
  const [error, setError] = useState("");
  const [result, setResult] = useState<CalorieResult | null>(null);

  const calculate = () => {
    const ageValue = Number.parseFloat(age);
    const feetValue = Number.parseFloat(feet);
    const inchesValue = Number.parseFloat(inches || "0");
    const weightValue = Number.parseFloat(weight);

    if (
      !Number.isFinite(ageValue) ||
      !Number.isFinite(feetValue) ||
      !Number.isFinite(inchesValue) ||
      !Number.isFinite(weightValue)
    ) {
      setError("Completa edad, estatura, peso, sexo y actividad.");
      setResult(null);
      return;
    }

    if (ageValue < 18 || ageValue > 90) {
      setError("Esta herramienta está diseñada para adultos. Ingresa una edad entre 18 y 90.");
      setResult(null);
      return;
    }

    if (feetValue < 3 || feetValue > 8 || inchesValue < 0 || inchesValue > 11) {
      setError("La estatura debe estar en un rango válido de pies y pulgadas.");
      setResult(null);
      return;
    }

    if (weightValue < 50 || weightValue > 800) {
      setError("Ingresa un peso válido en libras.");
      setResult(null);
      return;
    }

    const heightInches = feetValue * 12 + inchesValue;
    const weightKg = weightValue / 2.20462;
    const heightCm = heightInches * 2.54;
    const bmr =
      sex === "male"
        ? 10 * weightKg + 6.25 * heightCm - 5 * ageValue + 5
        : 10 * weightKg + 6.25 * heightCm - 5 * ageValue - 161;
    const maintenance = bmr * activityOptions[activity].multiplier;
    const threshold = sex === "male" ? 1500 : 1200;

    const selectedDeficit =
      goal === "maintain" ? [0, 0] : goal === "progressive" ? [300, 400] : [300, 500];
    const selectedRawLow = maintenance - selectedDeficit[1];
    const selectedRawHigh = maintenance - selectedDeficit[0];
    const moderateRawLow = maintenance - 500;
    const moderateRawHigh = maintenance - 300;

    const selectedRangeLow = goal === "maintain" ? maintenance : Math.max(selectedRawLow, threshold);
    const selectedRangeHigh = goal === "maintain" ? maintenance : Math.max(selectedRawHigh, threshold);
    const moderateDeficitLow = Math.max(moderateRawLow, threshold);
    const moderateDeficitHigh = Math.max(moderateRawHigh, threshold);

    const belowThreshold =
      goal !== "maintain" &&
      (selectedRawLow < threshold || selectedRawHigh < threshold || moderateRawLow < threshold);

    setError("");
    setResult({
      bmr,
      maintenance,
      selectedRangeLow,
      selectedRangeHigh,
      moderateDeficitLow,
      moderateDeficitHigh,
      threshold,
      activityLabel: activityOptions[activity].label,
      goalLabel: goalOptions[goal],
      warning: belowThreshold
        ? "Este rango puede ser demasiado bajo sin supervisión clínica. Requiere evaluación individual antes de usarlo como objetivo."
        : undefined,
    });
    trackCalculatorUsed("deficit_calorico");
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
      <div className="rounded-2xl border border-[#E8E4DA] bg-[#FAF8F4] p-5 shadow-sm sm:p-6">
        <div className="mb-6 flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#C9A84C]/10">
            <Flame className="h-5 w-5 text-[#C9A84C]" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-[#1A1A1A]">Estimación metabólica</h2>
            <p className="mt-1 text-sm leading-relaxed text-[#6B6B6B]">
              Usa Mifflin-St Jeor para estimar BMR, mantenimiento y déficit moderado.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="calorie-sex" className="mb-2 block text-sm font-semibold text-[#1A1A1A]">
              Sexo
            </label>
            <select
              id="calorie-sex"
              value={sex}
              onChange={(event) => setSex(event.target.value as Sex)}
              className="w-full rounded-xl border border-[#E8E4DA] bg-white px-4 py-3.5 text-base text-[#1A1A1A] shadow-sm focus:border-[#C9A84C] focus:outline-none focus:ring-3 focus:ring-[#C9A84C]/20"
            >
              <option value="female">Mujer</option>
              <option value="male">Hombre</option>
            </select>
          </div>

          <NumberInput
            id="calorie-age"
            label="Edad"
            value={age}
            onChange={setAge}
            placeholder="38"
            min={18}
            max={90}
          />
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <NumberInput
            id="calorie-feet"
            label="Estatura"
            value={feet}
            onChange={setFeet}
            placeholder="5"
            min={3}
            max={8}
            suffix="ft"
          />
          <NumberInput
            id="calorie-inches"
            label="Pulgadas"
            value={inches}
            onChange={setInches}
            placeholder="6"
            min={0}
            max={11}
            suffix="in"
          />
          <NumberInput
            id="calorie-weight"
            label="Peso"
            value={weight}
            onChange={setWeight}
            placeholder="180"
            min={50}
            max={800}
            suffix="lb"
          />
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="calorie-activity" className="mb-2 block text-sm font-semibold text-[#1A1A1A]">
              Nivel de actividad
            </label>
            <select
              id="calorie-activity"
              value={activity}
              onChange={(event) => setActivity(event.target.value as ActivityLevel)}
              className="w-full rounded-xl border border-[#E8E4DA] bg-white px-4 py-3.5 text-base text-[#1A1A1A] shadow-sm focus:border-[#C9A84C] focus:outline-none focus:ring-3 focus:ring-[#C9A84C]/20"
            >
              <option value="sedentary">Sedentario</option>
              <option value="light">Ligero</option>
              <option value="moderate">Moderado</option>
              <option value="active">Activo</option>
            </select>
          </div>

          <div>
            <label htmlFor="calorie-goal" className="mb-2 block text-sm font-semibold text-[#1A1A1A]">
              Objetivo
            </label>
            <select
              id="calorie-goal"
              value={goal}
              onChange={(event) => setGoal(event.target.value as Goal)}
              className="w-full rounded-xl border border-[#E8E4DA] bg-white px-4 py-3.5 text-base text-[#1A1A1A] shadow-sm focus:border-[#C9A84C] focus:outline-none focus:ring-3 focus:ring-[#C9A84C]/20"
            >
              <option value="maintain">Mantener</option>
              <option value="moderate">Pérdida moderada</option>
              <option value="progressive">Pérdida progresiva</option>
            </select>
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
          <Flame className="h-4 w-4" />
          Estimar déficit
        </button>
      </div>

      <CalculatorResultCard
        title="Rango estimado"
        value={
          result
            ? result.goalLabel === "Mantener"
              ? formatCalories(result.maintenance)
              : `${formatCalories(result.selectedRangeLow)} - ${formatCalories(result.selectedRangeHigh)}`
            : undefined
        }
        label={result?.goalLabel}
        description={
          result
            ? "Estos valores son estimaciones. Sueño, medicamentos, masa muscular, condiciones metabólicas y adherencia pueden cambiar tus necesidades."
            : "Completa tus datos para estimar calorías de mantenimiento y un rango educativo de déficit moderado."
        }
        warning={result?.warning}
        metrics={
          result
            ? [
                { label: "BMR estimado", value: formatCalories(result.bmr), detail: "Mifflin-St Jeor." },
                { label: "Mantenimiento", value: formatCalories(result.maintenance), detail: result.activityLabel },
                {
                  label: "Déficit moderado",
                  value: `${formatCalories(result.moderateDeficitLow)} - ${formatCalories(
                    result.moderateDeficitHigh
                  )}`,
                  detail: "Mantenimiento menos 300 a 500 kcal.",
                },
                {
                  label: "Umbral de cautela",
                  value: formatCalories(result.threshold),
                  detail: "No bajes de este nivel sin supervisión clínica.",
                },
              ]
            : []
        }
      />
    </div>
  );
}
