import { CheckCircle2 } from "lucide-react";
import type { ProgramPricing } from "@/content/program-pages";

interface PricingCardProps {
  pricing: ProgramPricing;
  ctaHref: string;
  ctaText?: string;
}

export default function PricingCard({ pricing, ctaHref, ctaText = "Consultar disponibilidad" }: PricingCardProps) {
  return (
    <div className="bg-white border border-[#E8E4DA] rounded-2xl overflow-hidden shadow-sm">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#C9A84C] to-[#A8872E] p-6 text-white">
        {pricing.label && (
          <p className="text-xs font-semibold uppercase tracking-widest text-white/70 mb-2">
            {pricing.label}
          </p>
        )}
        <div className="flex items-end gap-1">
          <span className="text-xs font-medium text-white/70 mb-1">desde</span>
          <span className="text-4xl font-bold">{pricing.from}</span>
          {pricing.period && (
            <span className="text-sm text-white/70 mb-1">/{pricing.period}</span>
          )}
        </div>
        <p className="text-sm text-white/80 mt-2 leading-relaxed">{pricing.description}</p>
      </div>

      {/* Includes */}
      <div className="p-6">
        <p className="text-xs font-semibold text-[#3D3D3D] uppercase tracking-wider mb-4">
          Incluye
        </p>
        <ul className="space-y-2.5 mb-6">
          {pricing.includes.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-[#3D3D3D]">
              <CheckCircle2 className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-[#C9A84C] hover:bg-[#A8872E] text-[#1A1A1A] font-semibold py-3.5 rounded-full transition-all duration-200"
        >
          {ctaText}
        </a>

        {pricing.note && (
          <p className="mt-4 text-xs text-[#9A9A9A] leading-relaxed">{pricing.note}</p>
        )}
        {pricing.disclaimer && (
          <p className="mt-2 text-xs text-[#9A9A9A] leading-relaxed">{pricing.disclaimer}</p>
        )}
      </div>
    </div>
  );
}
