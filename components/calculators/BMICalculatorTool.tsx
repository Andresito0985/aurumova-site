"use client";

import { useState } from "react";
import { AlertCircle, Calculator } from "lucide-react";
import NumberInput from "@/components/calculators/NumberInput";
import CalculatorResultCard from "@/components/calculators/CalculatorResultCard";
import { trackCalculatorUsed } from "@/lib/tracking";

interface BMIResult {
  bmi: number;
  category: string;
  interpretation: string;
  heightInches: number;
  weight: number;
}

function getBMICategory(bmi: number) {
  if (bmi < 18.5) {
    return {
      category: "Bajo peso",
      interpretation:
        "El IMC sugiere un peso por debajo del rango usual. La interpretación depende de historial, nutrición, composición corporal y contexto clínico.",
    };
  }
  if (bmi < 25) {
    return {
      category: "Rango usual",
      interpretation:
        "El IMC cae dentro del rango usual. Aun así, no mide distribución de grasa, masa muscular, hábitos ni riesgo metabólico individual.",
    };
  }
  if (bmi < 30) {
    return {
      category: "Sobrepeso",
      interpretation:
        "El IMC sugiere sobrepeso como punto de partida orientativo. La composición corporal, cintura, historial y laboratorios pueden cambiar la lectura clínica.",
    };
  }
  if (bmi < 35) {
    return {
      category: "Obesidad clase I",
      interpretation:
        "El IMC se ubica en obesidad clase I de forma orientativa. Una evaluación clínica permite revisar seguridad, metas y factores metabólicos.",
    };
  }
  if (bmi < 40) {
    return {
      category: "Obesidad clase II",
      interpretation:
        "El IMC se ubica en obesidad clase II de forma orientativa. Conviene interpretarlo junto a historial, medicamentos y condiciones médicas.",
    };
  }
  return {
    category: "Obesidad clase III",
    interpretation:
      "El IMC se ubica en obesidad clase III de forma orientativa. Este resultado requiere interpretación clínica individual antes de cualquier plan.",
  };
}

export default function BMICalculatorTool() {
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [weight, setWeight] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState<BMIResult | null>(null);

  const calculate = () => {
    const feetValue = Number.parseFloat(feet);
    const inchesValue = Number.parseFloat(inches || "0");
    const weightValue = Number.parseFloat(weight);

    if (
      !Number.isFinite(feetValue) ||
      !Number.isFinite(inchesValue) ||
      !Number.isFinite(weightValue)
    ) {
      setError("Ingresa estatura y peso para calcular tu IMC.");
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
    const bmi = (weightValue / (heightInches * heightInches)) * 703;
    const roundedBMI = Math.round(bmi * 10) / 10;
    const category = getBMICategory(roundedBMI);

    setError("");
    setResult({
      bmi: roundedBMI,
      category: category.category,
      interpretation: category.interpretation,
      heightInches,
      weight: weightValue,
    });
    trackCalculatorUsed("imc");
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
      <div className="rounded-2xl border border-[#E8E4DA] bg-[#FAF8F4] p-5 shadow-sm sm:p-6">
        <div className="mb-6 flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#C9A84C]/10">
            <Calculator className="h-5 w-5 text-[#C9A84C]" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-[#1A1A1A]">Datos básicos</h2>
            <p className="mt-1 text-sm leading-relaxed text-[#6B6B6B]">
              Usa pies, pulgadas y libras. El resultado es una referencia inicial.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <NumberInput
            id="bmi-feet"
            label="Estatura"
            value={feet}
            onChange={setFeet}
            placeholder="5"
            min={3}
            max={8}
            suffix="ft"
          />
          <NumberInput
            id="bmi-inches"
            label="Pulgadas"
            value={inches}
            onChange={setInches}
            placeholder="6"
            min={0}
            max={11}
            suffix="in"
          />
        </div>

        <div className="mt-4">
          <NumberInput
            id="bmi-weight"
            label="Peso"
            value={weight}
            onChange={setWeight}
            placeholder="180"
            min={50}
            max={800}
            suffix="lb"
          />
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
          <Calculator className="h-4 w-4" />
          Calcular IMC
        </button>
      </div>

      <CalculatorResultCard
        title="Tu IMC estimado"
        value={result ? result.bmi.toFixed(1) : undefined}
        label={result?.category}
        description={
          result
            ? result.interpretation
            : "Ingresa tu estatura y peso para ver un IMC orientativo y su categoría educativa."
        }
        metrics={
          result
            ? [
                {
                  label: "Estatura",
                  value: `${Math.floor(result.heightInches / 12)} ft ${result.heightInches % 12} in`,
                },
                { label: "Peso", value: `${result.weight.toFixed(0)} lb` },
                {
                  label: "Lectura",
                  value: result.category,
                  detail: "No determina diagnóstico ni candidatura.",
                },
                {
                  label: "Próximo paso",
                  value: "Quiz metabólico",
                  detail: "Ordena tus metas antes de orientación clínica.",
                },
              ]
            : []
        }
      />
    </div>
  );
}
