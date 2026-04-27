"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import type { ProgramFAQ } from "@/content/program-pages";

interface FAQSectionProps {
  faqs: ProgramFAQ[];
  title?: string;
  subtitle?: string;
  variant?: "light" | "dark";
}

function FAQItem({
  faq,
  isOpen,
  onToggle,
  variant,
}: {
  faq: ProgramFAQ;
  isOpen: boolean;
  onToggle: () => void;
  variant: "light" | "dark";
}) {
  const isDark = variant === "dark";
  return (
    <div
      className={`border rounded-xl overflow-hidden transition-colors duration-200 ${
        isDark
          ? isOpen
            ? "border-[#C9A84C]/30 bg-[#242424]"
            : "border-[#2D2D2D] bg-[#1E1E1E] hover:border-[#3D3D3D]"
          : isOpen
          ? "border-[#C9A84C]/30 bg-white"
          : "border-[#E8E4DA] bg-white hover:border-[#C9A84C]/20"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={isOpen}
      >
        <span
          className={`text-sm font-semibold leading-snug ${
            isDark ? (isOpen ? "text-[#C9A84C]" : "text-white") : isOpen ? "text-[#C9A84C]" : "text-[#1A1A1A]"
          }`}
        >
          {faq.question}
        </span>
        <span
          className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center border transition-colors ${
            isOpen
              ? "bg-[#C9A84C] border-[#C9A84C] text-white"
              : isDark
              ? "border-[#3D3D3D] text-[#6B6B6B]"
              : "border-[#E8E4DA] text-[#9A9A9A]"
          }`}
        >
          {isOpen ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className={`px-5 pb-4 text-sm leading-relaxed ${isDark ? "text-[#9A9A9A]" : "text-[#6B6B6B]"}`}>
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection({
  faqs,
  title = "Preguntas Frecuentes",
  subtitle,
  variant = "light",
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isDark = variant === "dark";

  return (
    <section className={`section-padding ${isDark ? "bg-[#111111]" : "bg-[#FAF8F4]"}`}>
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
            FAQ
          </span>
          <h2 className={`text-2xl sm:text-3xl font-semibold mb-3 ${isDark ? "text-white" : "text-[#1A1A1A]"}`}>
            {title}
          </h2>
          {subtitle && (
            <p className={`text-base max-w-xl mx-auto ${isDark ? "text-[#9A9A9A]" : "text-[#6B6B6B]"}`}>
              {subtitle}
            </p>
          )}
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-2">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              variant={variant}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
