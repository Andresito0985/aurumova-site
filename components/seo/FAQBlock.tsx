import { HelpCircle, ShieldCheck } from "lucide-react";
import type { CalculatorFAQ } from "@/content/calculator-faqs";

interface FAQBlockProps {
  faqs: CalculatorFAQ[];
  title?: string;
  subtitle?: string;
  variant?: "cream" | "white";
}

export default function FAQBlock({
  faqs,
  title = "Preguntas frecuentes",
  subtitle = "Respuestas breves para interpretar estas herramientas con seguridad.",
  variant = "cream",
}: FAQBlockProps) {
  const isCream = variant === "cream";

  return (
    <section id="faq" className={`section-padding ${isCream ? "bg-[#FAF8F4]" : "bg-white"}`}>
      <div className="container-max">
        <div className="mb-10 max-w-3xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
            <HelpCircle className="h-3.5 w-3.5" />
            FAQ
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-[#1A1A1A] sm:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-sm leading-relaxed text-[#6B6B6B] sm:text-base">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className={`rounded-2xl border border-[#E8E4DA] p-5 ${
                isCream ? "bg-white" : "bg-[#FAF8F4]"
              }`}
            >
              <div className="mb-3 flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#C9A84C]/10">
                  <ShieldCheck className="h-4 w-4 text-[#C9A84C]" />
                </div>
                <h3 className="text-base font-semibold leading-snug text-[#1A1A1A]">
                  {faq.question}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-[#6B6B6B]">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
