"use client";

// VisualFeatureSection
// ---------------------------------------------------------------------------
// Reusable split section: one visual on one side, one editorial idea on the
// other. Renders the section chrome (background, padding) and pairs a single
// headline + body + optional bullets + optional CTA with a visual slot.
//
// Apple-like posture: one main idea per section, large editorial typography,
// gold as accent. No card grids inside this primitive — if you need a grid,
// reach for a different component.
//
// Scope: section-scale. Do not wrap in another <section> from the caller.

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import HeadlineReveal from "@/components/motion/HeadlineReveal";
import MagneticCTA from "@/components/motion/MagneticCTA";
import { DUR, EASE_OUT_QUART } from "@/components/motion/easing";

export type VisualFeatureVariant = "cream" | "dark" | "white";

export interface VisualFeatureCta {
  label: string;
  href: string;
  external?: boolean;
  /** "primary" → gold-filled; "secondary" → outline. Default: primary. */
  intent?: "primary" | "secondary";
}

export interface VisualFeatureSectionProps {
  /** Small uppercase tracking label above the headline. */
  eyebrow: string;
  /** Main headline. */
  headline: string;
  /** Optional accent fragment rendered after the headline in gold. */
  highlight?: string;
  /** One-paragraph body copy. */
  body: string;
  /** Optional second supporting paragraph. */
  supportingText?: string;
  /** Optional bullet list (max 4 recommended for editorial restraint). */
  bullets?: string[];
  /** The visual node rendered on the opposite column from the copy. */
  visual: ReactNode;
  /** Optional CTA. */
  cta?: VisualFeatureCta;
  /** Optional small note rendered under the CTA. */
  footnote?: string;
  /** When true, the visual sits on the left and copy on the right. Default: false. */
  reverse?: boolean;
  /** Background variant. Default: white. */
  variant?: VisualFeatureVariant;
}

/**
 * Editorial split feature section — one idea, one visual.
 *
 * @example
 *   <VisualFeatureSection
 *     eyebrow="Tecnología"
 *     headline="Diodo"
 *     highlight="High-Tech"
 *     body="Reducción progresiva del vello con evaluación por zona."
 *     visual={<Image src="/images/laser/machine/laser-machine-02-clean.png" … />}
 *     cta={{ label: "Ver paquetes", href: "#planes-laser" }}
 *     variant="dark"
 *   />
 */
export default function VisualFeatureSection({
  eyebrow,
  headline,
  highlight,
  body,
  supportingText,
  bullets,
  visual,
  cta,
  footnote,
  reverse = false,
  variant = "white",
}: VisualFeatureSectionProps) {
  const reduce = useReducedMotion();

  const bg =
    variant === "dark"
      ? "bg-[#1A1A1A]"
      : variant === "cream"
        ? "bg-[#FAF8F4]"
        : "bg-white";
  const dark = variant === "dark";

  const eyebrowColor = dark ? "text-[#E2C97E]" : "text-[#C9A84C]";
  const headlineColor = dark ? "text-white" : "text-[#1A1A1A]";
  const highlightColor = dark ? "text-[#E2C97E]" : "text-[#A8872E]";
  const bodyColor = dark ? "text-[#BDB7AA]" : "text-[#6B6B6B]";
  const supportingColor = dark ? "text-[#9A9A9A]" : "text-[#6B6B6B]";
  const bulletTextColor = dark ? "text-[#D8D2C7]" : "text-[#3D3D3D]";
  const footnoteColor = dark ? "text-[#6B6B6B]" : "text-[#9A9A9A]";

  const secondaryClasses = dark
    ? "border border-[#3D3D3D] hover:border-[#C9A84C]/60 text-[#E8E4DA] hover:text-[#E2C97E]"
    : "border border-[#E8E4DA] hover:border-[#C9A84C] text-[#1A1A1A] hover:text-[#A8872E] bg-white";

  return (
    <section
      className={`section-padding relative overflow-hidden ${bg}`}
    >
      {/* Subtle gold radial accent on dark variant only */}
      {dark && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 14% 18%, rgba(201,168,76,0.16) 0%, transparent 55%), radial-gradient(ellipse at 86% 82%, rgba(168,135,46,0.12) 0%, transparent 60%)",
          }}
        />
      )}

      <div className="container-max relative z-10">
        <div
          className={`grid items-center gap-10 lg:gap-16 lg:grid-cols-2 ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* Copy column */}
          <div className="max-w-xl">
            <span
              className={`mb-4 inline-block text-xs font-semibold uppercase tracking-widest ${eyebrowColor}`}
            >
              {eyebrow}
            </span>

            <HeadlineReveal
              as="h2"
              onMount={false}
              delay={0.05}
              className={`mb-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] leading-[1.05] ${headlineColor}`}
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
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px 0px" }}
              transition={
                reduce
                  ? { duration: 0 }
                  : { duration: DUR.base, ease: EASE_OUT_QUART }
              }
              className={`mb-4 text-base sm:text-lg leading-relaxed ${bodyColor}`}
            >
              {body}
            </motion.p>

            {supportingText && (
              <motion.p
                initial={reduce ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px 0px" }}
                transition={
                  reduce
                    ? { duration: 0 }
                    : { duration: DUR.base, delay: 0.1, ease: EASE_OUT_QUART }
                }
                className={`mb-6 text-sm leading-relaxed ${supportingColor}`}
              >
                {supportingText}
              </motion.p>
            )}

            {bullets && bullets.length > 0 && (
              <ul className="mb-7 space-y-2.5">
                {bullets.map((b) => (
                  <li
                    key={b}
                    className={`flex items-start gap-2.5 text-sm leading-relaxed ${bulletTextColor}`}
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A84C]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}

            {cta && (
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                {cta.intent === "secondary" ? (
                  <a
                    href={cta.href}
                    target={cta.external ? "_blank" : undefined}
                    rel={cta.external ? "noopener noreferrer" : undefined}
                    className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-200 ${secondaryClasses}`}
                  >
                    {cta.label}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                ) : (
                  <MagneticCTA strength={6}>
                    <a
                      href={cta.href}
                      target={cta.external ? "_blank" : undefined}
                      rel={cta.external ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A84C] hover:bg-[#A8872E] px-7 py-3.5 text-sm font-semibold text-[#1A1A1A] ring-1 ring-black/5 shadow-[0_12px_36px_-10px_rgba(201,168,76,0.55)] hover:shadow-[0_16px_44px_-10px_rgba(201,168,76,0.7)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C]/70 focus-visible:ring-offset-2"
                    >
                      {cta.label}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </MagneticCTA>
                )}
              </div>
            )}

            {footnote && (
              <p
                className={`mt-6 max-w-md text-xs leading-relaxed ${footnoteColor}`}
              >
                {footnote}
              </p>
            )}
          </div>

          {/* Visual column */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px 0px" }}
            transition={
              reduce
                ? { duration: 0 }
                : { duration: DUR.slow, ease: EASE_OUT_QUART }
            }
            className="relative"
          >
            {visual}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
