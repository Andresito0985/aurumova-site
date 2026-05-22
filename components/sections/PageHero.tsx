"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { whatsappLink } from "@/content/site";
import { trackWhatsAppClick } from "@/lib/tracking";
import HeadlineReveal from "@/components/motion/HeadlineReveal";
import MagneticCTA from "@/components/motion/MagneticCTA";

interface PageHeroProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle: string;
  ctaText: string;
  ctaMessage: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  disclaimer?: string;
  accentColor?: string;
  backHref?: string;
  backLabel?: string;
  trackingSource?: string;
}

export default function PageHero({
  badge,
  title,
  highlight,
  subtitle,
  ctaText,
  ctaMessage,
  secondaryCtaText,
  secondaryCtaHref,
  disclaimer,
  accentColor = "#C9A84C",
  backHref = "/",
  backLabel = "Inicio",
  trackingSource = "page_hero",
}: PageHeroProps) {
  return (
    <section className="relative bg-[#FAF8F4] pt-28 pb-16 overflow-hidden">
      {/* Background gradient accent */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(ellipse at 80% 20%, ${accentColor}25 0%, transparent 60%)`,
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />

      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 mb-8"
        >
          <Link
            href={backHref}
            className="inline-flex items-center gap-1.5 text-xs text-[#9A9A9A] hover:text-[#C9A84C] transition-colors font-medium"
          >
            <ArrowLeft className="w-3 h-3" />
            {backLabel}
          </Link>
          {badge && (
            <>
              <span className="text-[#E8E4DA]">/</span>
              <span className="text-xs text-[#C9A84C] font-medium">{badge}</span>
            </>
          )}
        </motion.div>

        <div className="max-w-3xl">
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-white border border-[#E8E4DA] rounded-full px-4 py-1.5 mb-5 shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: accentColor }}>
                {badge}
              </span>
            </motion.div>
          )}

          <HeadlineReveal
            as="h1"
            delay={0.15}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-[-0.025em] leading-[1.02] text-[#1A1A1A] mb-5"
          >
            {title}
            {highlight && (
              <>
                {" "}
                <span className="text-[#A8872E]">{highlight}</span>
              </>
            )}
          </HeadlineReveal>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-lg text-[#6B6B6B] leading-relaxed mb-8 max-w-2xl"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <MagneticCTA strength={6}>
              <a
                href={whatsappLink(ctaMessage)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick(trackingSource)}
                className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#A8872E] text-[#1A1A1A] font-semibold px-7 py-3.5 rounded-full text-base transition-all duration-200 shadow-[0_10px_30px_-10px_rgba(201,168,76,0.55)] hover:shadow-[0_14px_40px_-10px_rgba(201,168,76,0.7)] ring-1 ring-black/5"
              >
                {ctaText}
                <ArrowRight className="w-4 h-4" />
              </a>
            </MagneticCTA>
            {secondaryCtaHref && secondaryCtaText && (
              <Link
                href={secondaryCtaHref}
                className="inline-flex items-center justify-center gap-2 bg-white border border-[#E8E4DA] hover:border-[#C9A84C] text-[#1A1A1A] hover:text-[#C9A84C] font-semibold px-7 py-3.5 rounded-full text-base transition-all duration-200"
              >
                {secondaryCtaText}
              </Link>
            )}
          </motion.div>

          {disclaimer && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 text-xs text-[#9A9A9A]"
            >
              * {disclaimer}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
