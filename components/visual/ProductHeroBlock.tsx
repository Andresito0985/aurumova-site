"use client";

// ProductHeroBlock
// ---------------------------------------------------------------------------
// Reusable hero section for premium service pages. Renders the section
// chrome (background, breadcrumb spacing, padding, gold radial accents),
// a single editorial headline, an optional subhead, up to two CTAs, and
// an optional visual slot rendered to the right on desktop.
//
// Apple-like posture: one main idea, large editorial typography, restrained
// motion, gold as accent only. Honors prefers-reduced-motion internally so
// callers never have to.
//
// Scope: section-scale. Do not wrap in another <section> from the caller.

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import HeadlineReveal from "@/components/motion/HeadlineReveal";
import MagneticCTA from "@/components/motion/MagneticCTA";
import { DUR, EASE_OUT_EXPO } from "@/components/motion/easing";

export type ProductHeroVariant = "cream" | "dark";

export interface ProductHeroCta {
  /** Visible label on the CTA. */
  label: string;
  /**
   * Destination. Use full URLs (https/wa.me) for external targets; the
   * component renders an <a target="_blank"> when `external` is true.
   * For internal routes, prefer wrapping the component with <Link> at the
   * caller — this primitive intentionally stays framework-light.
   */
  href: string;
  /** Open in new tab + noopener (e.g. WhatsApp, maps). */
  external?: boolean;
  /** Optional leading icon. */
  icon?: ReactNode;
}

export interface ProductHeroBlockProps {
  /** Small uppercase tracking label above the headline. */
  eyebrow: string;
  /** Main headline. */
  headline: string;
  /** Optional accent fragment appended to the headline in gold. */
  highlight?: string;
  /** One-paragraph subhead, body copy. */
  subhead: string;
  /** Optional secondary paragraph for additional context. Keep short. */
  supportingText?: string;
  /** Primary CTA (gold-filled). */
  primaryCta?: ProductHeroCta;
  /** Secondary CTA (outline / transparent). */
  secondaryCta?: ProductHeroCta;
  /**
   * Optional ReactNode rendered to the right on desktop. Typically a
   * <DeviceDashboardMockup /> or an editorial image. Hidden on mobile to
   * keep the hero light.
   */
  visual?: ReactNode;
  /**
   * Optional small note rendered under the CTAs. Use for compliance lines
   * like "Esta página es educativa".
   */
  footnote?: string;
  /**
   * Optional content rendered before the eyebrow (e.g. a breadcrumb link).
   * Kept as a slot so this primitive stays routing-agnostic.
   */
  topSlot?: ReactNode;
  /** Cream (light) or dark variant. Defaults to dark. */
  variant?: ProductHeroVariant;
}

/**
 * Premium service-page hero. Composes headline, subhead, CTAs, and an
 * optional visual slot.
 *
 * @example
 *   <ProductHeroBlock
 *     eyebrow="Evaluación Metabólica Avanzada"
 *     headline="Evaluación Metabólica"
 *     highlight="Avanzada"
 *     subhead="Más allá de un panel general…"
 *     primaryCta={{ label: "Solicitar evaluación", href: wa.me/… , external: true }}
 *     secondaryCta={{ label: "Ver paneles", href: "#paneles" }}
 *     variant="dark"
 *     visual={<DeviceDashboardMockup … />}
 *   />
 */
export default function ProductHeroBlock({
  eyebrow,
  headline,
  highlight,
  subhead,
  supportingText,
  primaryCta,
  secondaryCta,
  visual,
  footnote,
  topSlot,
  variant = "dark",
}: ProductHeroBlockProps) {
  const reduce = useReducedMotion();
  const dark = variant === "dark";

  const sectionBg = dark
    ? "bg-[#1A1A1A]"
    : "bg-gradient-to-br from-white via-[#FAF8F4] to-[#EDE8DC]";

  const eyebrowColor = dark ? "text-[#C9A84C]" : "text-[#C9A84C]";
  const eyebrowChipBg = dark
    ? "bg-[#C9A84C]/10 border-[#C9A84C]/25"
    : "bg-white border-[#E8E4DA] shadow-sm";

  const headlineColor = dark ? "text-white" : "text-[#1A1A1A]";
  const highlightColor = dark ? "text-[#E2C97E]" : "text-[#A8872E]";
  const subheadColor = dark ? "text-[#BDB7AA]" : "text-[#6B6B6B]";
  const supportingColor = dark ? "text-[#9A9A9A]" : "text-[#6B6B6B]";
  const footnoteColor = dark ? "text-[#6B6B6B]" : "text-[#9A9A9A]";

  const secondaryClasses = dark
    ? "border border-[#3D3D3D] hover:border-[#C9A84C]/60 text-[#E8E4DA] hover:text-[#E2C97E]"
    : "border border-[#E8E4DA] hover:border-[#C9A84C] text-[#1A1A1A] hover:text-[#A8872E] bg-white";

  return (
    <section
      className={`relative ${sectionBg} flex flex-col justify-center overflow-hidden pt-24 pb-14 lg:pb-20 px-4 sm:px-6 lg:px-8 min-h-[72vh] lg:min-h-[88vh]`}
    >
      {/* Background — subtle clinical dotted grid + gold radial accents */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 ${
          dark ? "opacity-[0.035]" : "opacity-[0.04]"
        }`}
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #C9A84C 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute top-0 right-0 h-[640px] w-[640px] rounded-full blur-[120px] ${
          dark ? "bg-[#C9A84C]/[0.05]" : "bg-[#C9A84C]/[0.10]"
        }`}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full blur-[110px] ${
          dark ? "bg-[#C9A84C]/[0.04]" : "bg-[#C9A84C]/[0.06]"
        }`}
      />
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/35 to-transparent"
      />

      <div className="container-max relative">
        {topSlot && (
          <motion.div
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reduce ? { duration: 0 } : { duration: 0.4 }}
            className="mb-8"
          >
            {topSlot}
          </motion.div>
        )}

        <div
          className={`grid items-center gap-12 lg:gap-14 ${
            visual ? "lg:grid-cols-[1.05fr_0.95fr]" : "lg:grid-cols-1"
          }`}
        >
          {/* Content column */}
          <div className="max-w-2xl">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reduce ? { duration: 0 } : { duration: DUR.base }}
              className={`mb-6 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 ${eyebrowChipBg}`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C]" />
              <span
                className={`text-xs font-semibold uppercase tracking-wider ${eyebrowColor}`}
              >
                {eyebrow}
              </span>
            </motion.div>

            <HeadlineReveal
              as="h1"
              delay={0.15}
              className={`mb-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.025em] leading-[1.02] ${headlineColor}`}
            >
              {highlight ? (
                <>
                  {headline}{" "}
                  <span className={highlightColor}>{highlight}</span>
                </>
              ) : (
                headline
              )}
            </HeadlineReveal>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={
                reduce
                  ? { duration: 0 }
                  : { duration: DUR.slow, delay: 0.45, ease: EASE_OUT_EXPO }
              }
              className={`mb-6 max-w-2xl text-base sm:text-lg leading-relaxed ${subheadColor}`}
            >
              {subhead}
            </motion.p>

            {supportingText && (
              <motion.p
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={
                  reduce
                    ? { duration: 0 }
                    : { duration: DUR.slow, delay: 0.55, ease: EASE_OUT_EXPO }
                }
                className={`mb-8 max-w-2xl text-sm sm:text-base leading-relaxed ${supportingColor}`}
              >
                {supportingText}
              </motion.p>
            )}

            {(primaryCta || secondaryCta) && (
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={
                  reduce ? { duration: 0 } : { duration: DUR.base, delay: 0.65 }
                }
                className="mb-10 flex flex-col gap-3 sm:flex-row"
              >
                {primaryCta && (
                  <MagneticCTA strength={6}>
                    <a
                      href={primaryCta.href}
                      target={primaryCta.external ? "_blank" : undefined}
                      rel={
                        primaryCta.external ? "noopener noreferrer" : undefined
                      }
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A84C] hover:bg-[#A8872E] px-7 py-3.5 text-sm font-semibold text-[#1A1A1A] ring-1 ring-black/5 shadow-[0_12px_36px_-10px_rgba(201,168,76,0.55)] hover:shadow-[0_16px_44px_-10px_rgba(201,168,76,0.7)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C]/70 focus-visible:ring-offset-2"
                    >
                      {primaryCta.icon}
                      {primaryCta.label}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </MagneticCTA>
                )}
                {secondaryCta && (
                  <a
                    href={secondaryCta.href}
                    target={secondaryCta.external ? "_blank" : undefined}
                    rel={
                      secondaryCta.external ? "noopener noreferrer" : undefined
                    }
                    className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-200 ${secondaryClasses}`}
                  >
                    {secondaryCta.icon}
                    {secondaryCta.label}
                  </a>
                )}
              </motion.div>
            )}

            {footnote && (
              <motion.p
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={
                  reduce ? { duration: 0 } : { duration: DUR.base, delay: 0.8 }
                }
                className={`max-w-xl text-xs leading-relaxed ${footnoteColor}`}
              >
                {footnote}
              </motion.p>
            )}
          </div>

          {/* Visual column — desktop only to keep mobile hero light */}
          {visual && (
            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={
                reduce
                  ? { duration: 0 }
                  : { duration: DUR.slow, delay: 0.35, ease: EASE_OUT_EXPO }
              }
              className="relative hidden lg:block"
            >
              {visual}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
