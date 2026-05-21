"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  User,
  Phone,
  Mail,
  Clock,
  AlertCircle,
  TrendingDown,
} from "lucide-react";
import { siteConfig } from "@/content/site";

// ─── Types ────────────────────────────────────────────────────────────────────

type WeightUnit = "lbs" | "kg";
type HeightUnit = "ftin" | "cm";
type WaistUnit = "in" | "cm";
type Sex = "female" | "male" | "prefer_not";
type MetabolicStatus = "none" | "prediabetes" | "type2" | "not_sure";

interface Inputs {
  age: string;
  sex: Sex | "";
  weightValue: string;
  weightUnit: WeightUnit;
  heightFt: string;
  heightIn: string;
  heightCm: string;
  heightUnit: HeightUnit;
  waistValue: string;
  waistUnit: WaistUnit;
  metabolicStatus: MetabolicStatus | "";
  goalLoss: string;
  city: string;
  mainGoal: string;
}

interface ChartPoint {
  week: number;
  conservativo: number;
  estandar: number;
  clinico: number;
}

interface CalcResults {
  weightKg: number;
  heightCm: number;
  waistCm: number;
  hasWaist: boolean;
  bmi: number;
  bmiLabel: string;
  bmiColor: string;
  bmiPct: number;
  whr: number;
  whrLabel: string;
  whrColor: string;
  whrPct: number;
  milestones: { pct: number; display: string }[];
  chartData: ChartPoint[];
  projRanges: {
    conserv: [number, number];
    std: [number, number];
    clin: [number, number];
  };
  showEvalMsg: boolean;
  isDiabetic: boolean;
  unit: WeightUnit;
}

interface LeadData {
  nombre: string;
  telefono: string;
  email: string;
  horario: string;
  consent: boolean;
}

// ─── Conversion ───────────────────────────────────────────────────────────────

const lbsToKg = (v: number) => v * 0.453592;
const kgToLbs = (v: number) => v / 0.453592;
const inToCm = (v: number) => v * 2.54;
const cmToIn = (v: number) => v / 2.54;
const ftInToCm = (ft: number, ins: number) => (ft * 12 + ins) * 2.54;
const cmToFt = (cm: number) => Math.floor(cm / 30.48);
const cmToRemIn = (cm: number) => Math.round((cm / 2.54) % 12);

function toDisplayNum(kg: number, unit: WeightUnit) {
  return unit === "lbs"
    ? parseFloat(kgToLbs(kg).toFixed(1))
    : parseFloat(kg.toFixed(1));
}

function fmtWeight(kg: number, unit: WeightUnit) {
  return unit === "lbs" ? `${kgToLbs(kg).toFixed(1)} lbs` : `${kg.toFixed(1)} kg`;
}

// ─── BMI helpers ──────────────────────────────────────────────────────────────

function getBMIInfo(bmi: number) {
  // 10–50 → 0–100%
  const pct = Math.min(100, Math.max(0, ((bmi - 10) / 40) * 100));
  if (bmi < 18.5) return { label: "Bajo peso", color: "#6B9FD4", pct };
  if (bmi < 25) return { label: "Rango saludable", color: "#4CAF82", pct };
  if (bmi < 30) return { label: "Sobrepeso", color: "#E8C547", pct };
  if (bmi < 35) return { label: "Obesidad clase I", color: "#E8934C", pct };
  if (bmi < 40) return { label: "Obesidad clase II", color: "#E8634C", pct };
  return { label: "Obesidad clase III", color: "#D64545", pct };
}

function getWHRInfo(whr: number) {
  // 0.25–0.75 → 0–100%
  const pct = Math.min(100, Math.max(0, ((whr - 0.25) / 0.50) * 100));
  if (whr < 0.40) return { label: "Señal baja", color: "#4CAF82", pct };
  if (whr < 0.50) return { label: "Señal generalmente favorable", color: "#8BC34A", pct };
  if (whr < 0.60) return { label: "Señal cardiometabólica elevada", color: "#E8C547", pct };
  return { label: "Señal cardiometabólica alta", color: "#E8634C", pct };
}

// ─── Trajectory ───────────────────────────────────────────────────────────────

const TRAJ = [
  { week: 0, pct: 0 },
  { week: 12, pct: 0.30 },
  { week: 24, pct: 0.55 },
  { week: 36, pct: 0.75 },
  { week: 48, pct: 0.88 },
  { week: 60, pct: 0.95 },
  { week: 72, pct: 1.00 },
];

// ─── Compute ──────────────────────────────────────────────────────────────────

function compute(inp: Inputs): CalcResults | null {
  // Weight
  const wv = parseFloat(inp.weightValue);
  if (!wv || wv <= 0) return null;
  const weightKg = inp.weightUnit === "lbs" ? lbsToKg(wv) : wv;

  // Height
  let heightCm: number;
  if (inp.heightUnit === "ftin") {
    const ft = parseFloat(inp.heightFt) || 0;
    const ins = parseFloat(inp.heightIn) || 0;
    if (!ft && !ins) return null;
    heightCm = ftInToCm(ft, ins);
  } else {
    const v = parseFloat(inp.heightCm);
    if (!v || v < 50) return null;
    heightCm = v;
  }

  // Waist
  const wstRaw = parseFloat(inp.waistValue);
  const hasWaist = !isNaN(wstRaw) && wstRaw > 0;
  const waistCm = hasWaist ? (inp.waistUnit === "in" ? inToCm(wstRaw) : wstRaw) : 0;

  // BMI
  const m = heightCm / 100;
  const bmi = weightKg / (m * m);
  const bi = getBMIInfo(bmi);

  // WHR
  let whr = 0;
  let wi = { label: "No ingresado", color: "#9A9A9A", pct: 0 };
  if (hasWaist && heightCm > 0) {
    whr = waistCm / heightCm;
    wi = getWHRInfo(whr);
  }

  const isDiabetic = inp.metabolicStatus === "type2";
  const projRanges = isDiabetic
    ? {
        conserv: [0.06, 0.10] as [number, number],
        std: [0.08, 0.14] as [number, number],
        clin: [0.10, 0.16] as [number, number],
      }
    : {
        conserv: [0.08, 0.12] as [number, number],
        std: [0.12, 0.16] as [number, number],
        clin: [0.15, 0.21] as [number, number],
      };

  const cmid = (projRanges.conserv[0] + projRanges.conserv[1]) / 2;
  const smid = (projRanges.std[0] + projRanges.std[1]) / 2;
  const clmid = (projRanges.clin[0] + projRanges.clin[1]) / 2;
  const unit = inp.weightUnit;

  const chartData: ChartPoint[] = TRAJ.map(({ week, pct }) => ({
    week,
    conservativo: toDisplayNum(weightKg - weightKg * cmid * pct, unit),
    estandar: toDisplayNum(weightKg - weightKg * smid * pct, unit),
    clinico: toDisplayNum(weightKg - weightKg * clmid * pct, unit),
  }));

  const milestones = [5, 10, 15, 20].map((pct) => ({
    pct,
    display: fmtWeight(weightKg * (1 - pct / 100), unit),
  }));

  return {
    weightKg,
    heightCm,
    waistCm,
    hasWaist,
    bmi,
    bmiLabel: bi.label,
    bmiColor: bi.color,
    bmiPct: bi.pct,
    whr,
    whrLabel: wi.label,
    whrColor: wi.color,
    whrPct: wi.pct,
    milestones,
    chartData,
    projRanges,
    showEvalMsg: bmi >= 25 || (hasWaist && whr >= 0.50),
    isDiabetic,
    unit,
  };
}

// ─── WhatsApp message ─────────────────────────────────────────────────────────

const SEX_LABELS: Record<string, string> = {
  female: "Femenino",
  male: "Masculino",
  prefer_not: "Prefiero no indicar",
};
const STATUS_LABELS: Record<string, string> = {
  none: "Sin diagnóstico metabólico",
  prediabetes: "Prediabetes",
  type2: "Diabetes tipo 2",
  not_sure: "No estoy seguro/a",
};

function buildMsg(inp: Inputs, res: CalcResults, lead: LeadData): string {
  const hDisplay =
    inp.heightUnit === "ftin"
      ? `${inp.heightFt}' ${inp.heightIn}" (${res.heightCm.toFixed(0)} cm)`
      : `${inp.heightCm} cm`;
  const wstDisplay = res.hasWaist
    ? `${inp.waistValue} ${inp.waistUnit} (${res.waistCm.toFixed(1)} cm)`
    : "No ingresado";

  return [
    "Me interesa saber si cualifico para el *Programa Metabólico Integral* de Aurum Nova.",
    "",
    "📋 *RESUMEN — CALCULADORA METABÓLICA EDUCATIVA*",
    `Nombre: ${lead.nombre}`,
    lead.telefono && `Teléfono: ${lead.telefono}`,
    lead.email && `Email: ${lead.email}`,
    lead.horario && `Horario preferido: ${lead.horario}`,
    "",
    "📊 *DATOS INGRESADOS*",
    inp.age && `Edad: ${inp.age} años`,
    inp.sex && `Sexo: ${SEX_LABELS[inp.sex] ?? ""}`,
    `Peso: ${fmtWeight(res.weightKg, res.unit)}`,
    `Estatura: ${hDisplay}`,
    `Cintura: ${wstDisplay}`,
    inp.metabolicStatus && `Estado metabólico: ${STATUS_LABELS[inp.metabolicStatus] ?? ""}`,
    inp.city && `Ciudad/Área: ${inp.city}`,
    inp.mainGoal && `Objetivo: ${inp.mainGoal}`,
    "",
    "📈 *RESULTADOS EDUCATIVOS*",
    `IMC: ${res.bmi.toFixed(1)} — ${res.bmiLabel}`,
    res.hasWaist && `Relación cintura/talla: ${res.whr.toFixed(3)} — ${res.whrLabel}`,
    "",
    "⚠️ Entiendo que esto es educativo y requiere evaluación médica.",
    "Interés: Programa Metabólico Integral",
  ]
    .filter(Boolean)
    .join("\n");
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function UnitPill({
  options,
  value,
  onChange,
}: {
  options: { label: string; value: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex rounded-lg border border-[#E8E4DA] overflow-hidden shrink-0">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          className={`px-2.5 py-1 text-[11px] font-semibold transition-colors ${
            value === opt.value
              ? "bg-[#C9A84C] text-[#1A1A1A]"
              : "bg-white text-[#6B6B6B] hover:bg-[#FAF8F4]"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

function GaugeBar({
  label,
  value,
  pct,
  color,
  sublabel,
}: {
  label: string;
  value: string;
  pct: number;
  color: string;
  sublabel: string;
}) {
  return (
    <div className="bg-white border border-[#E8E4DA] rounded-2xl p-4 flex flex-col gap-2">
      <div className="flex items-start justify-between">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-[#9A9A9A]">{label}</p>
        <p className="text-xl font-bold leading-none" style={{ color }}>
          {value}
        </p>
      </div>
      <div className="h-2 bg-[#F0EDE6] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
      <p className="text-xs font-medium" style={{ color }}>
        {sublabel}
      </p>
    </div>
  );
}

function ChartTooltip({
  active,
  payload,
  label,
  unit,
}: {
  active?: boolean;
  payload?: { name: string; value: number; color: string }[];
  label?: string | number;
  unit: WeightUnit;
}) {
  if (!active || !payload?.length) return null;
  const names: Record<string, string> = {
    clinico: "Clínico",
    estandar: "Estándar",
    conservativo: "Conservador",
  };
  return (
    <div className="bg-white border border-[#E8E4DA] rounded-xl shadow-lg p-3 text-xs min-w-[150px]">
      <p className="font-semibold text-[#1A1A1A] mb-2">Semana {label}</p>
      {payload.map((p) => (
        <div key={p.name} className="flex justify-between gap-4">
          <span className="text-[#6B6B6B]">{names[p.name] ?? p.name}</span>
          <span className="font-bold" style={{ color: p.color }}>
            {p.value} {unit}
          </span>
        </div>
      ))}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

const INIT_INPUTS: Inputs = {
  age: "",
  sex: "",
  weightValue: "",
  weightUnit: "lbs",
  heightFt: "",
  heightIn: "",
  heightCm: "",
  heightUnit: "ftin",
  waistValue: "",
  waistUnit: "in",
  metabolicStatus: "",
  goalLoss: "",
  city: "",
  mainGoal: "",
};

const INIT_LEAD: LeadData = {
  nombre: "",
  telefono: "",
  email: "",
  horario: "",
  consent: false,
};

export default function MetabolicProgressCalculator() {
  const [inp, setInp] = useState<Inputs>(INIT_INPUTS);
  const [results, setResults] = useState<CalcResults | null>(null);
  const [calcError, setCalcError] = useState("");
  const [lead, setLead] = useState<LeadData>(INIT_LEAD);
  const [leadSent, setLeadSent] = useState(false);
  const [leadError, setLeadError] = useState("");
  const resultsRef = useRef<HTMLDivElement>(null);

  function set<K extends keyof Inputs>(key: K, val: Inputs[K]) {
    setInp((prev) => ({ ...prev, [key]: val }));
  }

  function toggleWeight() {
    const next: WeightUnit = inp.weightUnit === "lbs" ? "kg" : "lbs";
    const v = parseFloat(inp.weightValue);
    const converted = !isNaN(v) && v > 0
      ? (next === "kg" ? lbsToKg(v) : kgToLbs(v)).toFixed(1)
      : "";
    setInp((p) => ({ ...p, weightUnit: next, weightValue: converted }));
  }

  function toggleHeight() {
    const next: HeightUnit = inp.heightUnit === "ftin" ? "cm" : "ftin";
    if (next === "cm") {
      const ft = parseFloat(inp.heightFt) || 0;
      const ins = parseFloat(inp.heightIn) || 0;
      const cm = ftInToCm(ft, ins);
      setInp((p) => ({ ...p, heightUnit: "cm", heightCm: cm > 0 ? cm.toFixed(0) : "" }));
    } else {
      const cm = parseFloat(inp.heightCm) || 0;
      setInp((p) => ({
        ...p,
        heightUnit: "ftin",
        heightFt: cm > 0 ? String(cmToFt(cm)) : "",
        heightIn: cm > 0 ? String(cmToRemIn(cm)) : "",
      }));
    }
  }

  function toggleWaist() {
    const next: WaistUnit = inp.waistUnit === "in" ? "cm" : "in";
    const v = parseFloat(inp.waistValue);
    const converted = !isNaN(v) && v > 0
      ? (next === "cm" ? inToCm(v) : cmToIn(v)).toFixed(1)
      : "";
    setInp((p) => ({ ...p, waistUnit: next, waistValue: converted }));
  }

  function handleCalculate() {
    setCalcError("");
    const res = compute(inp);
    if (!res) {
      setCalcError("Por favor ingresa tu peso y estatura para calcular.");
      return;
    }
    setResults(res);
    setLead(INIT_LEAD);
    setLeadSent(false);
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
  }

  function handleLeadSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLeadError("");
    if (!lead.nombre.trim()) { setLeadError("El nombre es requerido."); return; }
    if (!lead.telefono.trim()) { setLeadError("El teléfono es requerido."); return; }
    if (!lead.consent) { setLeadError("Debes confirmar que entiendes que esta herramienta es educativa."); return; }
    if (!results) return;
    const msg = buildMsg(inp, results, lead);
    window.open(
      `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setLeadSent(true);
  }

  const baseCls =
    "w-full text-sm bg-white border border-[#E8E4DA] rounded-xl px-4 py-2.5 text-[#1A1A1A] placeholder-[#C0BAB0] outline-none transition-colors focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/10";

  return (
    <section className="section-padding bg-white" id="calculadora-metabolica">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 bg-[#C9A84C]/10 border border-[#C9A84C]/20 text-[#C9A84C] text-xs font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4">
            Herramienta Educativa
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-3">
            Calculadora de Progreso Metabólico
          </h2>
          <p className="text-sm text-[#6B6B6B] max-w-xl mx-auto leading-relaxed">
            Explora escenarios educativos de progreso basados en tu peso, estatura y metas.
            Esta herramienta no sustituye una evaluación médica y no garantiza resultados.
          </p>
        </motion.div>

        {/* Input card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#FAF8F4] border border-[#E8E4DA] rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto mb-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
            {/* Age */}
            <div>
              <label htmlFor="calc-age" className="block text-xs font-semibold text-[#3D3D3D] mb-1.5">
                Edad
              </label>
              <input
                id="calc-age"
                type="number"
                min={18}
                max={100}
                placeholder="ej. 42"
                value={inp.age}
                onChange={(e) => set("age", e.target.value)}
                className={baseCls}
              />
            </div>

            {/* Sex */}
            <div>
              <label htmlFor="calc-sex" className="block text-xs font-semibold text-[#3D3D3D] mb-1.5">
                Sexo
              </label>
              <select
                id="calc-sex"
                value={inp.sex}
                onChange={(e) => set("sex", e.target.value as Sex)}
                className={baseCls}
              >
                <option value="">Seleccionar</option>
                <option value="female">Femenino</option>
                <option value="male">Masculino</option>
                <option value="prefer_not">Prefiero no indicar</option>
              </select>
            </div>

            {/* Weight */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-semibold text-[#3D3D3D]">
                  Peso actual <span className="text-[#C9A84C]">*</span>
                </label>
                <UnitPill
                  options={[
                    { label: "lbs", value: "lbs" },
                    { label: "kg", value: "kg" },
                  ]}
                  value={inp.weightUnit}
                  onChange={toggleWeight}
                />
              </div>
              <input
                type="number"
                min={0}
                placeholder={inp.weightUnit === "lbs" ? "ej. 185" : "ej. 84"}
                value={inp.weightValue}
                onChange={(e) => set("weightValue", e.target.value)}
                className={baseCls}
              />
            </div>

            {/* Height */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-semibold text-[#3D3D3D]">
                  Estatura <span className="text-[#C9A84C]">*</span>
                </label>
                <UnitPill
                  options={[
                    { label: "ft/in", value: "ftin" },
                    { label: "cm", value: "cm" },
                  ]}
                  value={inp.heightUnit}
                  onChange={toggleHeight}
                />
              </div>
              {inp.heightUnit === "ftin" ? (
                <div className="flex gap-2">
                  <input
                    type="number"
                    min={3}
                    max={8}
                    placeholder="pies"
                    value={inp.heightFt}
                    onChange={(e) => set("heightFt", e.target.value)}
                    className={`${baseCls} w-1/2`}
                  />
                  <input
                    type="number"
                    min={0}
                    max={11}
                    placeholder="pulg."
                    value={inp.heightIn}
                    onChange={(e) => set("heightIn", e.target.value)}
                    className={`${baseCls} w-1/2`}
                  />
                </div>
              ) : (
                <input
                  type="number"
                  min={50}
                  max={250}
                  placeholder="ej. 165"
                  value={inp.heightCm}
                  onChange={(e) => set("heightCm", e.target.value)}
                  className={baseCls}
                />
              )}
            </div>

            {/* Waist */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-semibold text-[#3D3D3D]">
                  Cintura <span className="text-[#9A9A9A] font-normal">(opcional)</span>
                </label>
                <UnitPill
                  options={[
                    { label: "in", value: "in" },
                    { label: "cm", value: "cm" },
                  ]}
                  value={inp.waistUnit}
                  onChange={toggleWaist}
                />
              </div>
              <input
                type="number"
                min={0}
                placeholder={inp.waistUnit === "in" ? "ej. 36" : "ej. 91"}
                value={inp.waistValue}
                onChange={(e) => set("waistValue", e.target.value)}
                className={baseCls}
              />
            </div>

            {/* Metabolic status */}
            <div>
              <label htmlFor="calc-status" className="block text-xs font-semibold text-[#3D3D3D] mb-1.5">
                Estado metabólico
              </label>
              <select
                id="calc-status"
                value={inp.metabolicStatus}
                onChange={(e) => set("metabolicStatus", e.target.value as MetabolicStatus)}
                className={baseCls}
              >
                <option value="">Seleccionar</option>
                <option value="none">Sin diagnóstico metabólico</option>
                <option value="prediabetes">Prediabetes</option>
                <option value="type2">Diabetes tipo 2</option>
                <option value="not_sure">No estoy seguro/a</option>
              </select>
            </div>

            {/* Goal */}
            <div>
              <label htmlFor="calc-goal" className="block text-xs font-semibold text-[#3D3D3D] mb-1.5">
                Meta de pérdida{" "}
                <span className="text-[#9A9A9A] font-normal">(opcional, {inp.weightUnit})</span>
              </label>
              <input
                id="calc-goal"
                type="number"
                min={0}
                placeholder={inp.weightUnit === "lbs" ? "ej. 30" : "ej. 14"}
                value={inp.goalLoss}
                onChange={(e) => set("goalLoss", e.target.value)}
                className={baseCls}
              />
            </div>

            {/* City */}
            <div>
              <label htmlFor="calc-city" className="block text-xs font-semibold text-[#3D3D3D] mb-1.5">
                Ciudad / Área{" "}
                <span className="text-[#9A9A9A] font-normal">(opcional)</span>
              </label>
              <input
                id="calc-city"
                type="text"
                placeholder="ej. Arecibo, San Juan"
                value={inp.city}
                onChange={(e) => set("city", e.target.value)}
                className={baseCls}
              />
            </div>

            {/* Main goal */}
            <div className="sm:col-span-2">
              <label htmlFor="calc-maingol" className="block text-xs font-semibold text-[#3D3D3D] mb-1.5">
                Objetivo principal{" "}
                <span className="text-[#9A9A9A] font-normal">(opcional)</span>
              </label>
              <textarea
                id="calc-maingol"
                rows={3}
                placeholder="Describe brevemente tu objetivo de salud o lo que te gustaría lograr..."
                value={inp.mainGoal}
                onChange={(e) => set("mainGoal", e.target.value)}
                className={`${baseCls} resize-none`}
              />
            </div>
          </div>

          {calcError && (
            <p className="mt-4 text-sm text-red-500 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              {calcError}
            </p>
          )}

          <button
            type="button"
            onClick={handleCalculate}
            className="mt-6 w-full flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#A8872E] text-[#1A1A1A] font-semibold py-3.5 rounded-full text-sm transition-all duration-200 shadow-md shadow-[#C9A84C]/20"
          >
            Calcular mi progreso educativo
            <ArrowRight className="w-4 h-4" />
          </button>

          <p className="mt-3 text-[11px] text-[#9A9A9A] text-center">
            Campos con <span className="text-[#C9A84C]">*</span> son requeridos. Ningún dato se
            almacena en servidores.
          </p>
        </motion.div>

        {/* Results */}
        <AnimatePresence>
          {results && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto space-y-5"
            >
              {/* Scroll anchor */}
              <div ref={resultsRef} />

              {/* Eval nudge */}
              {results.showEvalMsg && (
                <div className="bg-[#FDF8EE] border border-[#C9A84C]/30 rounded-2xl p-4 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-[#1A1A1A]">
                      Podrías beneficiarte de una evaluación médica personalizada
                    </p>
                    <p className="text-xs text-[#6B6B6B] mt-0.5 leading-relaxed">
                      Tus métricas sugieren que una evaluación clínica individual podría ser
                      relevante para ti. El médico determina elegibilidad y qué opciones son
                      apropiadas para tu caso específico.
                    </p>
                  </div>
                </div>
              )}

              {/* BMI + WHR */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <GaugeBar
                  label="IMC — Índice de Masa Corporal"
                  value={results.bmi.toFixed(1)}
                  pct={results.bmiPct}
                  color={results.bmiColor}
                  sublabel={results.bmiLabel}
                />
                {results.hasWaist ? (
                  <GaugeBar
                    label="Relación Cintura / Talla"
                    value={results.whr.toFixed(3)}
                    pct={results.whrPct}
                    color={results.whrColor}
                    sublabel={results.whrLabel}
                  />
                ) : (
                  <div className="bg-white border border-[#E8E4DA] rounded-2xl p-4 flex items-center justify-center min-h-[100px]">
                    <p className="text-xs text-[#9A9A9A] text-center leading-relaxed max-w-[160px]">
                      Ingresa tu medida de cintura para ver la relación cintura/talla
                    </p>
                  </div>
                )}
              </div>

              {/* Milestone cards */}
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#9A9A9A] mb-3">
                  Hitos de pérdida de peso (educativos)
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {results.milestones.map((m, i) => (
                    <motion.div
                      key={m.pct}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.06 }}
                      className="bg-white border border-[#E8E4DA] rounded-2xl p-4 text-center"
                    >
                      <div
                        className="w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center"
                        style={{ backgroundColor: `${results.bmiColor}18` }}
                      >
                        <TrendingDown
                          className="w-4 h-4"
                          style={{ color: results.bmiColor }}
                        />
                      </div>
                      <p className="text-xs font-bold text-[#C9A84C]">Meta {m.pct}%</p>
                      <p className="text-sm font-semibold text-[#1A1A1A] mt-0.5">{m.display}</p>
                      <p className="text-[10px] text-[#9A9A9A] mt-0.5 leading-tight">
                        −{m.pct}% del peso inicial
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Chart */}
              <div className="bg-white border border-[#E8E4DA] rounded-2xl p-5">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#9A9A9A] mb-0.5">
                  Proyección educativa — escenarios de referencia
                </p>
                <p className="text-[11px] text-[#9A9A9A] mb-4 leading-relaxed">
                  Vista ilustrativa. No predice ni garantiza resultados individuales.
                  {results.isDiabetic &&
                    " Rangos ajustados para perfil con diabetes tipo 2."}
                </p>
                <div style={{ height: 260 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={results.chartData}
                      margin={{ top: 4, right: 8, left: -12, bottom: 0 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#F0EDE6" />
                      <XAxis
                        dataKey="week"
                        tick={{ fontSize: 11, fill: "#9A9A9A" }}
                        tickFormatter={(v: number) => `S${v}`}
                      />
                      <YAxis
                        tick={{ fontSize: 11, fill: "#9A9A9A" }}
                        domain={["auto", "auto"]}
                        width={40}
                      />
                      <Tooltip
                        content={(props: Record<string, unknown>) => (
                          <ChartTooltip
                            active={props.active as boolean}
                            payload={
                              props.payload as {
                                name: string;
                                value: number;
                                color: string;
                              }[]
                            }
                            label={props.label as string | number}
                            unit={results.unit}
                          />
                        )}
                      />
                      <Line
                        type="monotone"
                        dataKey="clinico"
                        stroke="#C9A84C"
                        strokeWidth={2}
                        dot={false}
                        name="clinico"
                      />
                      <Line
                        type="monotone"
                        dataKey="estandar"
                        stroke="#A8872E"
                        strokeWidth={2}
                        strokeDasharray="5 3"
                        dot={false}
                        name="estandar"
                      />
                      <Line
                        type="monotone"
                        dataKey="conservativo"
                        stroke="#C0BAB0"
                        strokeWidth={1.5}
                        strokeDasharray="3 3"
                        dot={false}
                        name="conservativo"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                {/* Legend */}
                <div className="flex flex-wrap justify-center gap-5 mt-3">
                  {[
                    { label: "Clínico (referencia alta)", color: "#C9A84C", dashed: false },
                    { label: "Estándar (referencia media)", color: "#A8872E", dashed: true },
                    { label: "Conservador (referencia baja)", color: "#C0BAB0", dashed: true },
                  ].map((l) => (
                    <div key={l.label} className="flex items-center gap-1.5">
                      <svg width="20" height="8" viewBox="0 0 20 8" aria-hidden>
                        {l.dashed ? (
                          <line
                            x1="0"
                            y1="4"
                            x2="20"
                            y2="4"
                            stroke={l.color}
                            strokeWidth="2"
                            strokeDasharray="4 3"
                          />
                        ) : (
                          <line
                            x1="0"
                            y1="4"
                            x2="20"
                            y2="4"
                            stroke={l.color}
                            strokeWidth="2"
                          />
                        )}
                      </svg>
                      <span className="text-[10px] text-[#9A9A9A]">{l.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projection ranges */}
              <div className="bg-[#FAF8F4] border border-[#E8E4DA] rounded-2xl p-5">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#9A9A9A] mb-3">
                  Rangos de proyección educativa
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    {
                      label: "Escenario conservador",
                      range: `${(results.projRanges.conserv[0] * 100).toFixed(0)}–${(results.projRanges.conserv[1] * 100).toFixed(0)}%`,
                      note: "Rango bajo de referencia",
                    },
                    {
                      label: "Escenario estándar",
                      range: `${(results.projRanges.std[0] * 100).toFixed(0)}–${(results.projRanges.std[1] * 100).toFixed(0)}%`,
                      note: "Rango medio de referencia",
                    },
                    {
                      label: "Escenario clínico",
                      range: `${(results.projRanges.clin[0] * 100).toFixed(0)}–${(results.projRanges.clin[1] * 100).toFixed(0)}%`,
                      note: "Rango alto de ensayos clínicos",
                    },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="bg-white border border-[#E8E4DA] rounded-xl p-3"
                    >
                      <p className="text-[10px] text-[#9A9A9A] font-medium">{s.label}</p>
                      <p className="text-lg font-bold text-[#1A1A1A] my-0.5">{s.range}</p>
                      <p className="text-[10px] text-[#9A9A9A]">{s.note}</p>
                    </div>
                  ))}
                </div>
                <p className="text-[10px] text-[#9A9A9A] mt-3 leading-relaxed">
                  Estos rangos son educativos. No predicen tu resultado individual. Los resultados
                  reales dependen del perfil clínico, adherencia y supervisión médica.
                  {results.isDiabetic &&
                    " Rangos ajustados conservadoramente para perfiles con diabetes tipo 2."}
                </p>
              </div>

              {/* Lead form */}
              <div className="bg-[#1A1A1A] rounded-2xl p-6 sm:p-8">
                <AnimatePresence mode="wait">
                  {leadSent ? (
                    <motion.div
                      key="sent"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-6"
                    >
                      <CheckCircle2 className="w-12 h-12 text-[#C9A84C] mx-auto mb-3" />
                      <h3 className="text-base font-semibold text-white mb-2">
                        ¡Resumen enviado!
                      </h3>
                      <p className="text-sm text-[#9A9A9A] leading-relaxed">
                        Tu resumen fue enviado a WhatsApp. El equipo de Aurum Nova te contactará
                        para coordinar tu evaluación médica inicial.
                      </p>
                      <button
                        onClick={() => {
                          setLeadSent(false);
                          setLead(INIT_LEAD);
                        }}
                        className="mt-4 text-xs text-[#C9A84C] hover:underline"
                      >
                        Enviar otro resumen
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div key="form" initial={{ opacity: 1 }}>
                      <h3 className="text-base font-semibold text-white mb-1">
                        ¿Quieres enviar este resumen para evaluación?
                      </h3>
                      <p className="text-xs text-[#6B6B6B] mb-5 leading-relaxed">
                        Tu resumen educativo se enviará por WhatsApp junto con tus datos. El equipo
                        coordina tu evaluación médica inicial sin compromiso.
                      </p>
                      <form onSubmit={handleLeadSubmit} noValidate className="space-y-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {/* Nombre */}
                          <div>
                            <label className="block text-xs font-semibold text-[#9A9A9A] mb-1">
                              Nombre <span className="text-[#C9A84C]">*</span>
                            </label>
                            <div className="relative">
                              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4A4A4A] pointer-events-none" />
                              <input
                                type="text"
                                placeholder="Tu nombre"
                                value={lead.nombre}
                                onChange={(e) =>
                                  setLead((l) => ({ ...l, nombre: e.target.value }))
                                }
                                className="w-full bg-[#242424] border border-[#2D2D2D] rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder-[#4A4A4A] outline-none focus:border-[#C9A84C] transition-colors"
                              />
                            </div>
                          </div>
                          {/* Telefono */}
                          <div>
                            <label className="block text-xs font-semibold text-[#9A9A9A] mb-1">
                              Teléfono / WhatsApp <span className="text-[#C9A84C]">*</span>
                            </label>
                            <div className="relative">
                              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4A4A4A] pointer-events-none" />
                              <input
                                type="tel"
                                placeholder="787-000-0000"
                                value={lead.telefono}
                                onChange={(e) =>
                                  setLead((l) => ({ ...l, telefono: e.target.value }))
                                }
                                className="w-full bg-[#242424] border border-[#2D2D2D] rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder-[#4A4A4A] outline-none focus:border-[#C9A84C] transition-colors"
                              />
                            </div>
                          </div>
                          {/* Email */}
                          <div>
                            <label className="block text-xs font-semibold text-[#9A9A9A] mb-1">
                              Email
                            </label>
                            <div className="relative">
                              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4A4A4A] pointer-events-none" />
                              <input
                                type="email"
                                placeholder="tu@email.com"
                                value={lead.email}
                                onChange={(e) =>
                                  setLead((l) => ({ ...l, email: e.target.value }))
                                }
                                className="w-full bg-[#242424] border border-[#2D2D2D] rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder-[#4A4A4A] outline-none focus:border-[#C9A84C] transition-colors"
                              />
                            </div>
                          </div>
                          {/* Horario */}
                          <div>
                            <label className="block text-xs font-semibold text-[#9A9A9A] mb-1">
                              Horario preferido de contacto
                            </label>
                            <div className="relative">
                              <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4A4A4A] pointer-events-none" />
                              <select
                                value={lead.horario}
                                onChange={(e) =>
                                  setLead((l) => ({ ...l, horario: e.target.value }))
                                }
                                className="w-full bg-[#242424] border border-[#2D2D2D] rounded-xl pl-9 pr-4 py-2.5 text-sm text-white outline-none focus:border-[#C9A84C] transition-colors appearance-none"
                              >
                                <option value="">Cualquier horario</option>
                                <option value="Mañana (8am–12pm)">Mañana (8am–12pm)</option>
                                <option value="Tarde (12pm–5pm)">Tarde (12pm–5pm)</option>
                                <option value="Noche (5pm–8pm)">Noche (5pm–8pm)</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        {/* Consent */}
                        <label className="flex items-start gap-3 cursor-pointer mt-1">
                          <input
                            type="checkbox"
                            checked={lead.consent}
                            onChange={(e) =>
                              setLead((l) => ({ ...l, consent: e.target.checked }))
                            }
                            className="mt-0.5 w-4 h-4 accent-[#C9A84C] shrink-0"
                          />
                          <span className="text-xs text-[#6B6B6B] leading-relaxed">
                            Entiendo que esta herramienta es educativa, no diagnostica ni prescribe,
                            y que la elegibilidad para cualquier programa requiere evaluación médica
                            individual.
                          </span>
                        </label>

                        {leadError && (
                          <p className="text-xs text-red-400 flex items-center gap-1.5">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            {leadError}
                          </p>
                        )}

                        <button
                          type="submit"
                          className="w-full flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#A8872E] text-[#1A1A1A] font-semibold py-3.5 rounded-full text-sm transition-all duration-200 mt-1"
                        >
                          Enviar mi resumen por WhatsApp
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 max-w-3xl mx-auto"
        >
          <div className="flex items-start gap-3 bg-[#FAF8F4] border border-[#E8E4DA] rounded-2xl p-5">
            <ShieldCheck className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
            <p className="text-xs text-[#6B6B6B] leading-relaxed">
              <span className="font-semibold text-[#3D3D3D]">Aviso importante: </span>
              Esta herramienta es educativa y no sustituye evaluación médica. No diagnostica, no
              prescribe y no garantiza resultados. La elegibilidad para cualquier terapia médica
              requiere evaluación clínica individual, revisión de historial médico, medicamentos,
              contraindicaciones y criterio profesional. No todos los pacientes son candidatos.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
