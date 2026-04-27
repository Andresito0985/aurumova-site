"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqs, faqCategories, type FAQItem } from "@/content/faq";

function FAQItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`border rounded-xl overflow-hidden transition-colors duration-200 ${
        isOpen
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
            isOpen ? "text-[#C9A84C]" : "text-[#1A1A1A]"
          }`}
        >
          {item.question}
        </span>
        <span
          className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center border transition-colors ${
            isOpen
              ? "bg-[#C9A84C] border-[#C9A84C] text-white"
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
            <div className="px-5 pb-5 text-sm text-[#6B6B6B] leading-relaxed">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function GroupedFAQAccordion() {
  const [activeCategory, setActiveCategory] = useState(faqCategories[0]);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = faqs.filter((f) => f.category === activeCategory);

  function switchCategory(cat: string) {
    setActiveCategory(cat);
    setOpenIndex(0);
  }

  return (
    <div>
      {/* Category tab strip */}
      <div className="overflow-x-auto pb-2 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0">
        <div className="flex gap-2 min-w-max sm:flex-wrap sm:min-w-0">
          {faqCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => switchCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 border ${
                activeCategory === cat
                  ? "bg-[#C9A84C] border-[#C9A84C] text-white shadow-sm"
                  : "border-[#E8E4DA] text-[#6B6B6B] hover:border-[#C9A84C]/40 hover:text-[#C9A84C] bg-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ items */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.15 }}
          className="space-y-2"
        >
          {items.map((item, i) => (
            <FAQItem
              key={item.question}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
