import Link from "next/link";
import { ArrowRight, Calculator, ClipboardList, ShieldCheck } from "lucide-react";

const points = [
  "IMC, meta de peso, déficit calórico e hidratación.",
  "Resultados educativos y orientativos.",
  "El quiz sigue siendo el próximo paso para orientación personalizada.",
];

export default function HomeCalculatorBridge() {
  return (
    <section className="bg-[#FAF8F4] px-4 py-12 sm:px-6 lg:px-8">
      <div className="container-max">
        <div className="rounded-2xl border border-[#E8E4DA] bg-white p-5 shadow-sm sm:p-6 lg:p-7">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#E8E4DA] bg-[#FAF8F4] px-3.5 py-1.5">
                <Calculator className="h-3.5 w-3.5 text-[#C9A84C]" />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                  Herramientas educativas
                </span>
              </div>
              <h2 className="text-2xl font-semibold leading-tight text-[#1A1A1A] sm:text-3xl">
                Explora tus números antes de comenzar
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#6B6B6B] sm:text-base">
                Usa calculadoras educativas de IMC, meta de peso, déficit calórico e hidratación
                para entender tu punto de partida. Luego completa el quiz para orientación
                personalizada.
              </p>
            </div>

            <div>
              <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-1">
                {points.map((point, index) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-xl border border-[#E8E4DA] bg-[#FAF8F4] p-3"
                  >
                    {index === 2 ? (
                      <ClipboardList className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A84C]" />
                    ) : (
                      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A84C]" />
                    )}
                    <p className="text-xs leading-relaxed text-[#3D3D3D]">{point}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/calculadoras"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A84C] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#A8872E] hover:shadow-md focus:outline-none focus:ring-3 focus:ring-[#C9A84C]/30"
                >
                  Ver calculadoras
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/quiz-metabolico"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E8E4DA] bg-white px-6 py-3 text-sm font-semibold text-[#1A1A1A] transition-all duration-200 hover:border-[#C9A84C] hover:text-[#C9A84C] focus:outline-none focus:ring-3 focus:ring-[#C9A84C]/20"
                >
                  Hacer quiz metabólico
                </Link>
              </div>

              <p className="mt-4 text-xs leading-relaxed text-[#9A9A9A]">
                Las calculadoras son educativas, orientativas, no diagnostican y no sustituyen
                evaluación clínica. Los resultados pueden variar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
