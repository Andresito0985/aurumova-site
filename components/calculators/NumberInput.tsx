"use client";

import type { ChangeEvent } from "react";

interface NumberInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  min?: number;
  max?: number;
  step?: number;
  suffix?: string;
  hint?: string;
}

export default function NumberInput({
  id,
  label,
  value,
  onChange,
  placeholder,
  min,
  max,
  step = 1,
  suffix,
  hint,
}: NumberInputProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-[#1A1A1A]">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type="number"
          inputMode="decimal"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          min={min}
          max={max}
          step={step}
          className={`w-full rounded-xl border border-[#E8E4DA] bg-white px-4 py-3.5 text-base text-[#1A1A1A] shadow-sm transition-colors placeholder:text-[#B8B0A1] focus:border-[#C9A84C] focus:outline-none focus:ring-3 focus:ring-[#C9A84C]/20 ${
            suffix ? "pr-16" : ""
          }`}
        />
        {suffix && (
          <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-medium text-[#9A9A9A]">
            {suffix}
          </span>
        )}
      </div>
      {hint && <p className="mt-2 text-xs leading-relaxed text-[#8A8378]">{hint}</p>}
    </div>
  );
}
