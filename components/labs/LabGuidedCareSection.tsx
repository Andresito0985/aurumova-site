import Link from "next/link";
import {
  Activity,
  HeartPulse,
  Thermometer,
  Sparkles,
  Flame,
  Leaf,
  Droplets,
  Apple,
  TestTube2,
  ArrowRight,
  ShieldCheck,
  ClipboardList,
  FlaskConical,
  LineChart,
  CalendarCheck,
  type LucideIcon,
} from "lucide-react";

import {
  labCategories,
  labDashboardLabels,
  labHowItWorks,
  type LabCategory,
} from "@/content/labs";

const categoryIconMap: Record<string, LucideIcon> = {
  "Metabolic Health": Activity,
  "Heart Health": HeartPulse,
  "Thyroid Health": Thermometer,
  "Hormone Health": Sparkles,
  "Inflammation & Stress": Flame,
  "Liver Health": Leaf,
  "Kidney Health & Electrolytes": Droplets,
  "Nutrient Status": Apple,
  "Blood & Immune Health": TestTube2,
};

const stepIconMap: LucideIcon[] = [
  ClipboardList,
  FlaskConical,
  LineChart,
  CalendarCheck,
];

function HeroFallbackVisual() {
  return (
    <div
      aria-hidden
      className="relative h-full min-h-[420px] w-full overflow-hidden rounded-[2rem] border border-[#E8E4DA] bg-gradient-to-br from-[#FAF8F4] via-[#F4EEDF] to-[#EDE3CC]"
    >
      {/* soft gold glow */}
      <div
        className="absolute -top-24 -right-16 h-72 w-72 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,76,0.45) 0%, rgba(201,168,76,0) 70%)",
        }}
      />
      <div
        className="absolute -bottom-32 -left-10 h-80 w-80 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(146,168,128,0.35) 0%, rgba(146,168,128,0) 70%)",
        }}
      />

      {/* abstract chart line */}
      <svg
        className="absolute inset-x-0 top-1/2 -translate-y-1/2"
        viewBox="0 0 600 200"
        fill="none"
        preserveAspectRatio="none"
        style={{ width: "100%", height: "60%" }}
      >
        <defs>
          <linearGradient id="lab-line" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.0" />
            <stop offset="40%" stopColor="#C9A84C" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#A8872E" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id="lab-fill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#C9A84C" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,140 C60,130 90,90 150,95 C210,100 240,150 300,135 C360,120 390,60 450,72 C510,84 540,110 600,90"
          stroke="url(#lab-line)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M0,140 C60,130 90,90 150,95 C210,100 240,150 300,135 C360,120 390,60 450,72 C510,84 540,110 600,90 L600,200 L0,200 Z"
          fill="url(#lab-fill)"
        />
      </svg>

      {/* floating data cards */}
      <div className="absolute left-6 top-8 w-44 rounded-2xl border border-[#E8E4DA] bg-white/85 p-4 shadow-sm backdrop-blur-sm">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-[#9A9A9A]">
          Glucose
        </p>
        <p className="mt-1 font-heading text-lg font-medium text-[#1A1A1A]">
          92 <span className="text-xs text-[#9A9A9A]">mg/dL</span>
        </p>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[#EDE8DC]">
          <div className="h-full w-1/2 rounded-full bg-[#C9A84C]" />
        </div>
      </div>

      <div className="absolute right-6 top-24 w-44 rounded-2xl border border-[#E8E4DA] bg-white/85 p-4 shadow-sm backdrop-blur-sm">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-[#9A9A9A]">
          Vitamin D
        </p>
        <p className="mt-1 font-heading text-lg font-medium text-[#1A1A1A]">
          38 <span className="text-xs text-[#9A9A9A]">ng/mL</span>
        </p>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[#EDE8DC]">
          <div className="h-full w-2/3 rounded-full bg-[#92A880]" />
        </div>
      </div>

      <div className="absolute bottom-8 left-10 w-48 rounded-2xl border border-[#E8E4DA] bg-white/85 p-4 shadow-sm backdrop-blur-sm">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-[#9A9A9A]">
          Lipid pattern
        </p>
        <div className="mt-2 flex items-end gap-1.5">
          {[40, 65, 30, 55, 48, 70, 58].map((h, i) => (
            <div
              key={i}
              className="w-2 rounded-sm bg-gradient-to-t from-[#C9A84C] to-[#E2C97E]"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>

      {/* biomarker pills */}
      <div className="absolute bottom-10 right-6 flex max-w-[12rem] flex-wrap justify-end gap-1.5">
        {["A1c", "ApoB", "TSH", "hs-CRP", "Ferritin"].map((m) => (
          <span
            key={m}
            className="rounded-full border border-[#C9A84C]/30 bg-white/80 px-2.5 py-1 text-[10px] font-medium text-[#3D3D3D] backdrop-blur-sm"
          >
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}

function CategoryCard({ category }: { category: LabCategory }) {
  const Icon = categoryIconMap[category.title] ?? Activity;
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-[#E8E4DA] bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C9A84C]/40 hover:shadow-lg hover:shadow-[#1A1A1A]/5">
      <div className="mb-5 flex items-start justify-between gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#C9A84C]/10 ring-1 ring-[#C9A84C]/20">
          <Icon className="h-5 w-5 text-[#A8872E]" />
        </div>
        <span className="rounded-full border border-[#E8E4DA] bg-[#FAF8F4] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#6B6B6B]">
          {category.tag}
        </span>
      </div>

      <h3 className="font-heading text-lg font-medium leading-snug text-[#1A1A1A]">
        {category.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[#6B6B6B]">
        {category.description}
      </p>

      <div className="mt-5">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-[#9A9A9A]">
          Markers reviewed
        </p>
        <ul className="flex flex-wrap gap-1.5">
          {category.markers.map((marker) => (
            <li
              key={marker}
              className="rounded-full border border-[#EDE8DC] bg-[#FAF8F4] px-2.5 py-1 text-[11px] leading-tight text-[#3D3D3D]"
            >
              {marker}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex flex-1 items-end">
        <div className="w-full rounded-2xl border border-[#EDE8DC] bg-[#FAF8F4]/60 p-3.5">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-[#A8872E]">
            Patient insight
          </p>
          <p className="mt-1 text-xs leading-relaxed text-[#3D3D3D]">
            {category.patientInsight}
          </p>
        </div>
      </div>
    </article>
  );
}

function DashboardPreview() {
  const rows: { label: string; status: string; tone: "gold" | "sage" | "neutral"; pct: number }[] = [
    { label: labDashboardLabels[1], status: "In range", tone: "sage", pct: 72 },
    { label: labDashboardLabels[2], status: "Low pattern", tone: "sage", pct: 58 },
    { label: labDashboardLabels[3], status: "Review with provider", tone: "gold", pct: 64 },
    { label: labDashboardLabels[4], status: "Stable", tone: "sage", pct: 80 },
    { label: labDashboardLabels[5], status: "Optimization opportunity", tone: "gold", pct: 46 },
    { label: labDashboardLabels[6], status: "In range", tone: "sage", pct: 76 },
    { label: labDashboardLabels[7], status: "Pending review", tone: "neutral", pct: 38 },
  ];

  const toneClasses: Record<string, { dot: string; bar: string; text: string }> = {
    gold: { dot: "bg-[#C9A84C]", bar: "bg-[#C9A84C]", text: "text-[#A8872E]" },
    sage: { dot: "bg-[#92A880]", bar: "bg-[#92A880]", text: "text-[#5F7A4F]" },
    neutral: { dot: "bg-[#B8B0A0]", bar: "bg-[#B8B0A0]", text: "text-[#6B6B6B]" },
  };

  return (
    <div className="rounded-3xl border border-[#E8E4DA] bg-white p-6 shadow-sm sm:p-8">
      <div className="flex items-center justify-between gap-4 border-b border-[#EDE8DC] pb-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-[#9A9A9A]">
            Pattern overview
          </p>
          <h4 className="mt-1 font-heading text-base font-medium text-[#1A1A1A]">
            {labDashboardLabels[0]}
          </h4>
        </div>
        <span className="rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#A8872E]">
          Provider review
        </span>
      </div>

      <ul className="mt-4 divide-y divide-[#EDE8DC]">
        {rows.map((r) => {
          const t = toneClasses[r.tone];
          return (
            <li key={r.label} className="flex items-center gap-4 py-3">
              <span className={`h-2 w-2 shrink-0 rounded-full ${t.dot}`} />
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-3">
                  <p className="truncate text-sm font-medium text-[#1A1A1A]">
                    {r.label}
                  </p>
                  <p className={`shrink-0 text-[11px] font-medium ${t.text}`}>
                    {r.status}
                  </p>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[#F4EEDF]">
                  <div
                    className={`h-full rounded-full ${t.bar}`}
                    style={{ width: `${r.pct}%` }}
                  />
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <p className="mt-5 text-[11px] leading-relaxed text-[#9A9A9A]">
        Illustrative example. Actual reports are generated only after clinical
        evaluation and laboratory testing.
      </p>
    </div>
  );
}

export default function LabGuidedCareSection() {
  return (
    <section
      id="lab-guided-care"
      className="relative overflow-hidden bg-[#FAF8F4] py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="relative grid gap-8 overflow-hidden rounded-[2rem] border border-[#E8E4DA] bg-gradient-to-br from-white via-[#FAF8F4] to-[#F4EEDF] p-6 sm:p-10 lg:grid-cols-2 lg:gap-12 lg:p-14">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#C9A84C]/30 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[#A8872E] backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C]" />
              Laboratory-Guided Care
            </span>

            <h2 className="mt-5 font-heading text-3xl font-medium leading-[1.15] text-[#1A1A1A] sm:text-4xl lg:text-5xl">
              Personalized care starts with understanding what&rsquo;s happening
              inside.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#3D3D3D] sm:text-lg">
              At Aurum Nova Wellness Clinic, we use clinical evaluation and
              laboratory insights to help identify metabolic, hormonal,
              nutritional, inflammatory, and cardiometabolic patterns that may
              affect your progress.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/agendar-evaluacion"
                className="group inline-flex items-center gap-2 rounded-full bg-[#1A1A1A] px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-[#3D3D3D] hover:shadow-lg hover:shadow-[#1A1A1A]/10"
              >
                Start Your Metabolic Evaluation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="#lab-markers"
                className="inline-flex items-center gap-2 rounded-full border border-[#1A1A1A]/15 bg-white px-5 py-3 text-sm font-semibold text-[#1A1A1A] transition-all hover:border-[#C9A84C]/40 hover:bg-[#FAF8F4]"
              >
                See What We Analyze
              </Link>
            </div>

            <p className="mt-5 max-w-lg text-xs leading-relaxed text-[#6B6B6B]">
              Testing recommendations are based on clinical history, symptoms,
              risk factors, and provider assessment.
            </p>
          </div>

          <div className="relative flex items-stretch">
            <HeroFallbackVisual />
          </div>
        </div>

        {/* What we analyze */}
        <div id="lab-markers" className="mt-20 sm:mt-28">
          <div className="max-w-3xl">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#A8872E]">
              Biomarker categories
            </span>
            <h3 className="mt-3 font-heading text-3xl font-medium leading-tight text-[#1A1A1A] sm:text-4xl">
              What we analyze
            </h3>
            <p className="mt-4 text-base leading-relaxed text-[#3D3D3D]">
              Your labs help create a more complete picture of your health.
              Instead of focusing on weight alone, we evaluate the systems that
              influence metabolism, energy, appetite, inflammation, hormone
              balance, and treatment response.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {labCategories.map((c) => (
              <CategoryCard key={c.title} category={c} />
            ))}
          </div>
        </div>

        {/* Featured insight / dashboard */}
        <div className="mt-20 sm:mt-28">
          <div className="grid items-center gap-10 rounded-[2rem] border border-[#E8E4DA] bg-white p-6 sm:p-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:p-14">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#A8872E]">
                Pattern interpretation
              </span>
              <h3 className="mt-3 font-heading text-3xl font-medium leading-tight text-[#1A1A1A] sm:text-4xl">
                From lab data to a clearer care plan
              </h3>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-[#3D3D3D]">
                Your results are not reviewed as isolated numbers. We look for
                patterns across multiple systems &mdash; glucose regulation,
                inflammation, lipids, thyroid function, liver health, kidney
                function, nutrients, and hormones &mdash; to help guide a
                personalized plan.
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {labDashboardLabels.map((label) => (
                  <li
                    key={label}
                    className="rounded-full border border-[#EDE8DC] bg-[#FAF8F4] px-3 py-1.5 text-xs font-medium text-[#3D3D3D]"
                  >
                    {label}
                  </li>
                ))}
              </ul>
            </div>

            <DashboardPreview />
          </div>
        </div>

        {/* How it works */}
        <div className="mt-20 sm:mt-28">
          <div className="max-w-3xl">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#A8872E]">
              The process
            </span>
            <h3 className="mt-3 font-heading text-3xl font-medium leading-tight text-[#1A1A1A] sm:text-4xl">
              How lab-guided care works
            </h3>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {labHowItWorks.map((step, i) => {
              const Icon = stepIconMap[i] ?? ClipboardList;
              return (
                <div
                  key={step.number}
                  className="relative flex h-full flex-col rounded-3xl border border-[#E8E4DA] bg-white p-6"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-heading text-2xl font-medium text-[#C9A84C]">
                      {step.number}
                    </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FAF8F4] ring-1 ring-[#EDE8DC]">
                      <Icon className="h-4 w-4 text-[#A8872E]" />
                    </div>
                  </div>
                  <h4 className="mt-4 font-heading text-base font-medium text-[#1A1A1A]">
                    {step.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-[#6B6B6B]">
                    {step.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 rounded-2xl border border-[#E8E4DA] bg-white/70 p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#A8872E]" />
            <p className="text-xs leading-relaxed text-[#6B6B6B]">
              Labs are ordered when clinically appropriate and reviewed by a
              licensed medical provider. Abnormal results may require
              additional evaluation, follow-up testing, treatment, or referral
              to a specialist.
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="relative mt-16 overflow-hidden rounded-[2rem] bg-[#1A1A1A] p-8 sm:p-12 lg:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at 85% 15%, rgba(201,168,76,0.45) 0%, transparent 55%), radial-gradient(ellipse at 10% 90%, rgba(146,168,128,0.25) 0%, transparent 55%)",
            }}
          />
          <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[#E2C97E]">
                Aurum Nova
              </span>
              <h3 className="mt-4 font-heading text-3xl font-medium leading-tight text-white sm:text-4xl">
                Better health starts inside.
              </h3>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-[#C9C5BC]">
                Aurum Nova helps you understand the internal factors that may
                be influencing your weight, energy, appetite, inflammation, and
                long-term wellness.
              </p>
            </div>
            <div className="flex lg:justify-end">
              <Link
                href="/agendar-evaluacion"
                className="group inline-flex items-center gap-2 rounded-full bg-[#C9A84C] px-6 py-3.5 text-sm font-semibold text-[#1A1A1A] transition-all hover:bg-[#E2C97E] hover:shadow-lg hover:shadow-[#C9A84C]/20"
              >
                Start Your Metabolic Evaluation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
