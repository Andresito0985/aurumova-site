import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BarChart3, ClipboardList, ShieldCheck } from "lucide-react";
import CTABanner from "@/components/ui/CTABanner";
import CalculatorDisclaimer from "@/components/calculators/CalculatorDisclaimer";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";
import FAQBlock from "@/components/seo/FAQBlock";
import type { CalculatorFAQ } from "@/content/calculator-faqs";

interface CalculatorShellProps {
  badge: string;
  title: string;
  highlight: string;
  subtitle: string;
  currentPath: string;
  children: ReactNode;
  educationTitle: string;
  educationCopy: string;
  educationItems: string[];
  disclaimer: string;
  faqs?: CalculatorFAQ[];
  faqTitle?: string;
  faqSubtitle?: string;
}

const QUIZ_MESSAGE =
  "Hola, quiero completar el Quiz Metabólico de Aurum Nova para entender mi próximo paso.";

export default function CalculatorShell({
  badge,
  title,
  highlight,
  subtitle,
  currentPath,
  children,
  educationTitle,
  educationCopy,
  educationItems,
  disclaimer,
  faqs,
  faqTitle,
  faqSubtitle,
}: CalculatorShellProps) {
  return (
    <>
      <section className="relative overflow-hidden bg-[#FAF8F4] pt-28 pb-14">
        <div
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 82% 18%, rgba(201,168,76,0.22) 0%, transparent 58%)",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />

        <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/calculadoras"
            className="mb-8 inline-flex items-center gap-1.5 text-xs font-medium text-[#9A9A9A] transition-colors hover:text-[#C9A84C]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Calculadoras
          </Link>

          <div className="max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E8E4DA] bg-white px-4 py-1.5 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                {badge}
              </span>
            </div>

            <h1 className="mb-5 text-4xl font-semibold leading-[1.1] text-[#1A1A1A] sm:text-5xl lg:text-6xl">
              {title} <span className="gold-text-gradient">{highlight}</span>
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-[#6B6B6B]">{subtitle}</p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/quiz-metabolico"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A84C] px-7 py-3.5 text-base font-semibold text-white shadow-md transition-all duration-200 hover:bg-[#A8872E] hover:shadow-lg focus:outline-none focus:ring-3 focus:ring-[#C9A84C]/30"
              >
                Hacer quiz metabólico
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/programa-metabolico"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E8E4DA] bg-white px-7 py-3.5 text-base font-semibold text-[#1A1A1A] transition-all duration-200 hover:border-[#C9A84C] hover:text-[#C9A84C] focus:outline-none focus:ring-3 focus:ring-[#C9A84C]/20"
              >
                Ver programa
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { label: "Educativo", icon: ClipboardList },
                { label: "Orientativo", icon: BarChart3 },
                { label: "No diagnostica", icon: ShieldCheck },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 rounded-2xl border border-[#E8E4DA] bg-white/85 px-4 py-3 text-sm font-medium text-[#3D3D3D]"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-[#C9A84C]" />
                    {item.label}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="calculadora" className="section-padding bg-white">
        <div className="container-max">
          <div className="mb-10 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
              Herramienta educativa
            </span>
            <h2 className="mt-3 text-3xl font-semibold text-[#1A1A1A] sm:text-4xl">
              Calcula tu punto de partida
            </h2>
          </div>

          {children}

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-2xl border border-[#E8E4DA] bg-[#FAF8F4] p-5 sm:p-6">
              <h2 className="text-2xl font-semibold text-[#1A1A1A]">{educationTitle}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#6B6B6B]">{educationCopy}</p>
              <div className="mt-5 grid gap-3">
                {educationItems.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A84C]" />
                    <p className="text-sm leading-relaxed text-[#3D3D3D]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <CalculatorDisclaimer>{disclaimer}</CalculatorDisclaimer>
          </div>
        </div>
      </section>

      <RelatedCalculators currentPath={currentPath} />

      {faqs && (
        <FAQBlock
          faqs={faqs}
          title={faqTitle}
          subtitle={faqSubtitle}
          variant="cream"
        />
      )}

      <CTABanner
        title="Convierte tus números en un plan"
        subtitle="Completa el quiz metabólico y recibe orientación sobre el próximo paso según tus objetivos."
        ctaText="Hacer quiz metabólico"
        ctaHref="/quiz-metabolico"
        ctaMessage={QUIZ_MESSAGE}
        variant="dark"
        secondaryHref="/programa-metabolico"
        secondaryText="Ver programa metabólico"
        trackingSource={`calculator_${badge.toLowerCase().replaceAll(" ", "_")}`}
      />
    </>
  );
}
