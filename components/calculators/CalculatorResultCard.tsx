import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, Calculator, ShieldCheck, TriangleAlert } from "lucide-react";

interface ResultMetric {
  label: string;
  value: string;
  detail?: string;
}

interface CalculatorResultCardProps {
  eyebrow?: string;
  title: string;
  value?: string;
  label?: string;
  description: string;
  metrics?: ResultMetric[];
  warning?: string;
  children?: ReactNode;
}

export default function CalculatorResultCard({
  eyebrow = "Resultado educativo",
  title,
  value,
  label,
  description,
  metrics = [],
  warning,
  children,
}: CalculatorResultCardProps) {
  const hasResult = Boolean(value);

  return (
    <aside className="rounded-2xl border border-[#2D2D2D] bg-[#1A1A1A] p-5 text-white shadow-xl shadow-[#1A1A1A]/10 sm:p-6 lg:sticky lg:top-24">
      <div className="mb-5 flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C9A84C]/15">
          {hasResult ? (
            <ShieldCheck className="h-5 w-5 text-[#C9A84C]" />
          ) : (
            <Calculator className="h-5 w-5 text-[#C9A84C]" />
          )}
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
            {eyebrow}
          </p>
          <h2 className="text-lg font-semibold text-white">{title}</h2>
        </div>
      </div>

      {hasResult ? (
        <div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <p className="text-sm text-white/60">{label}</p>
            <p className="mt-2 text-5xl font-semibold leading-none text-[#E2C97E] sm:text-6xl">
              {value}
            </p>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-white/72">{description}</p>

          {metrics.length > 0 && (
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-xl border border-white/10 bg-white/[0.035] p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/45">
                    {metric.label}
                  </p>
                  <p className="mt-1 text-lg font-semibold text-white">{metric.value}</p>
                  {metric.detail && (
                    <p className="mt-1 text-xs leading-relaxed text-white/55">{metric.detail}</p>
                  )}
                </div>
              ))}
            </div>
          )}

          {warning && (
            <div className="mt-5 flex items-start gap-3 rounded-xl border border-[#C9A84C]/25 bg-[#C9A84C]/10 p-4">
              <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0 text-[#E2C97E]" />
              <p className="text-xs leading-relaxed text-white/78">{warning}</p>
            </div>
          )}

          {children}

          <Link
            href="/quiz-metabolico"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#C9A84C] px-5 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-[#A8872E] hover:shadow-lg focus:outline-none focus:ring-3 focus:ring-[#C9A84C]/40"
          >
            Hacer quiz metabólico
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      ) : (
        <div className="flex min-h-[320px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] p-6 text-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C9A84C]/12">
            <Calculator className="h-7 w-7 text-[#C9A84C]" />
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-white/62">{description}</p>
        </div>
      )}
    </aside>
  );
}
