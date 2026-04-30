import { BookOpenCheck, ShieldCheck } from "lucide-react";
import type { CalculatorMethodology } from "@/content/calculator-faqs";

interface CalculatorMethodologyProps {
  methodology: CalculatorMethodology;
}

export default function CalculatorMethodologySection({
  methodology,
}: CalculatorMethodologyProps) {
  return (
    <section className="bg-white px-4 pb-12 sm:px-6 lg:px-8">
      <div className="container-max">
        <div className="rounded-2xl border border-[#E8E4DA] bg-[#FAF8F4] p-5 sm:p-6">
          <div className="mb-5 flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#C9A84C]/10">
              <BookOpenCheck className="h-5 w-5 text-[#C9A84C]" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                Metodología
              </span>
              <h2 className="mt-2 text-2xl font-semibold text-[#1A1A1A]">
                Cómo se calcula este resultado
              </h2>
            </div>
          </div>

          {methodology.formula && (
            <div className="mb-5 rounded-xl border border-[#E8E4DA] bg-white px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#9A9A9A]">
                Fórmula utilizada
              </p>
              <p className="mt-1 font-mono text-sm text-[#1A1A1A]">{methodology.formula}</p>
            </div>
          )}

          <div className="grid gap-3 md:grid-cols-2">
            {methodology.points.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A84C]" />
                <p className="text-sm leading-relaxed text-[#3D3D3D]">{point}</p>
              </div>
            ))}
          </div>

          <p className="mt-5 border-t border-[#E8E4DA] pt-4 text-xs leading-relaxed text-[#6B6B6B]">
            {methodology.note}
          </p>
        </div>
      </div>
    </section>
  );
}
