"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/content/site";
import { trackWhatsAppClick } from "@/lib/tracking";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaMessage?: string;
  ctaHref?: string;
  variant?: "gold" | "dark" | "cream";
  secondaryHref?: string;
  secondaryText?: string;
  trackingSource?: string;
}

export default function CTABanner({
  title = "¿Listo para dar el primer paso?",
  subtitle = "Agenda tu evaluación médica inicial y descubre qué programa es el adecuado para ti.",
  ctaText = "Agendar por WhatsApp",
  ctaMessage = "Hola, quisiera agendar mi evaluación médica en Aurum Nova Wellness Clinic.",
  ctaHref,
  variant = "gold",
  secondaryHref,
  secondaryText,
  trackingSource = "cta_banner",
}: CTABannerProps) {
  const isDark = variant === "dark";
  const isGold = variant === "gold";

  return (
    <section
      className={`py-16 px-4 sm:px-6 lg:px-8 ${
        isDark ? "bg-[#1A1A1A]" : isGold ? "bg-[#C9A84C]" : "bg-[#FAF8F4]"
      }`}
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className={`text-2xl sm:text-3xl font-semibold mb-3 ${
              isDark ? "text-white" : isGold ? "text-white" : "text-[#1A1A1A]"
            }`}
          >
            {title}
          </h2>
          <p
            className={`text-base leading-relaxed mb-8 ${
              isDark ? "text-[#9A9A9A]" : isGold ? "text-white/80" : "text-[#6B6B6B]"
            }`}
          >
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {ctaHref ? (
              <Link
                href={ctaHref}
                className={`inline-flex items-center justify-center gap-2 font-semibold px-7 py-3.5 rounded-full text-base transition-all duration-200 shadow-sm hover:shadow-md ${
                  isDark
                    ? "bg-[#C9A84C] hover:bg-[#A8872E] text-white"
                    : isGold
                    ? "bg-white hover:bg-[#FAF8F4] text-[#C9A84C]"
                    : "bg-[#C9A84C] hover:bg-[#A8872E] text-white"
                }`}
              >
                <ArrowRight className="w-4 h-4" />
                {ctaText}
              </Link>
            ) : (
              <a
                href={whatsappLink(ctaMessage)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick(trackingSource)}
                className={`inline-flex items-center justify-center gap-2 font-semibold px-7 py-3.5 rounded-full text-base transition-all duration-200 shadow-sm hover:shadow-md ${
                isDark
                  ? "bg-[#C9A84C] hover:bg-[#A8872E] text-white"
                  : isGold
                  ? "bg-white hover:bg-[#FAF8F4] text-[#C9A84C]"
                  : "bg-[#C9A84C] hover:bg-[#A8872E] text-white"
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                {ctaText}
              </a>
            )}
            {secondaryHref && secondaryText && (
              <a
                href={secondaryHref}
                className={`inline-flex items-center justify-center gap-2 font-semibold px-7 py-3.5 rounded-full text-base transition-all duration-200 border ${
                  isDark
                    ? "border-white/10 hover:border-white/30 text-white"
                    : isGold
                    ? "border-white/30 hover:border-white text-white"
                    : "border-[#E8E4DA] hover:border-[#C9A84C] text-[#3D3D3D] hover:text-[#C9A84C]"
                }`}
              >
                {secondaryText}
                <ArrowRight className="w-4 h-4" />
              </a>
            )}
          </div>
          <p
            className={`mt-4 text-xs ${
              isDark ? "text-[#6B6B6B]" : isGold ? "text-white/60" : "text-[#9A9A9A]"
            }`}
          >
            Requiere evaluación médica individual. No todos los pacientes califican.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
