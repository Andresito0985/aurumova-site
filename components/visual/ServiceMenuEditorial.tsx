"use client";

// ServiceMenuEditorial
// ---------------------------------------------------------------------------
// Luxury editorial menu card — a cream menu surface on a graphite stage,
// with dotted gold leaders between service name and price (when a price is
// provided). Used for Brows and Facials menus today, future packages and
// boutique service catalogs tomorrow.
//
// Apple-like posture: editorial typography, gold as accent, no ecommerce
// language. No "Buy now" CTA, no cart, no discount language.
//
// Scope: section-scale. Renders its own <section> chrome.

import { motion, useReducedMotion } from "framer-motion";
import HeadlineReveal from "@/components/motion/HeadlineReveal";
import { DUR, EASE_OUT_QUART } from "@/components/motion/easing";

export interface ServiceMenuItem {
  /** Service name (e.g. "Brow shaping"). */
  name: string;
  /**
   * Optional price label. Render exactly as provided (the component does
   * not prepend "$" or any currency symbol). Pass undefined when price is
   * not disclosed publicly (e.g. "Según evaluación").
   */
  price?: string;
  /** Optional short description rendered under the row. */
  description?: string;
  /** Optional flag — featured row gets a subtle gold halo + Signature chip. */
  featured?: boolean;
  /** Optional label for the featured chip. Default: "Signature". */
  featuredLabel?: string;
}

export type ServiceMenuVariant = "graphite" | "cream";

export interface ServiceMenuEditorialProps {
  /** Small uppercase tracking label above the title. */
  eyebrow: string;
  /** Menu title. */
  title: string;
  /** Optional accent fragment rendered after the title in gold. */
  titleHighlight?: string;
  /** Optional subtitle paragraph under the title. */
  subtitle?: string;
  /** Menu items. */
  items: ServiceMenuItem[];
  /** Optional footnote rendered under the menu (e.g. "Precio según evaluación"). */
  footnote?: string;
  /**
   * "graphite" → cream menu card on a dark stage (default; matches brows).
   * "cream"    → cream menu card on a cream stage.
   */
  variant?: ServiceMenuVariant;
}

/**
 * Cream editorial menu card on a graphite stage. Dotted gold leaders
 * connect service names to prices when prices are provided.
 *
 * @example
 *   <ServiceMenuEditorial
 *     eyebrow="Boutique Brow Menu"
 *     title="Diseño de cejas y"
 *     titleHighlight="pestañas"
 *     items={browServices.map(s => ({ name: s.name, price: `$${s.price}`, description: s.description }))}
 *     footnote="Los servicios pueden combinarse según el caso."
 *   />
 */
export default function ServiceMenuEditorial({
  eyebrow,
  title,
  titleHighlight,
  subtitle,
  items,
  footnote,
  variant = "graphite",
}: ServiceMenuEditorialProps) {
  const reduce = useReducedMotion();
  const graphite = variant === "graphite";

  return (
    <section
      className={`relative overflow-hidden ${
        graphite ? "bg-[#1A1A1A]" : "bg-[#FAF8F4]"
      } section-padding`}
    >
      {/* Subtle gold radial accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: graphite
            ? "radial-gradient(ellipse at 14% 22%, rgba(201,168,76,0.18) 0%, transparent 55%), radial-gradient(ellipse at 86% 78%, rgba(168,135,46,0.12) 0%, transparent 60%)"
            : "radial-gradient(ellipse at 14% 22%, rgba(201,168,76,0.10) 0%, transparent 55%)",
        }}
      />

      <div className="container-max relative z-10">
        {/* Editorial header */}
        <div className="mx-auto mb-12 max-w-[760px] text-center sm:mb-16">
          <span
            className={`mb-4 inline-block text-xs font-semibold uppercase tracking-widest ${
              graphite ? "text-[#E2C97E]" : "text-[#C9A84C]"
            }`}
          >
            {eyebrow}
          </span>
          <HeadlineReveal
            as="h2"
            onMount={false}
            delay={0.05}
            className={`mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] leading-[1.05] ${
              graphite ? "text-white" : "text-[#1A1A1A]"
            }`}
          >
            {titleHighlight ? (
              <>
                {title}{" "}
                <span
                  className={
                    graphite ? "text-[#E2C97E]" : "text-[#A8872E]"
                  }
                >
                  {titleHighlight}
                </span>
              </>
            ) : (
              title
            )}
          </HeadlineReveal>
          {subtitle && (
            <p
              className={`mx-auto max-w-[600px] text-base sm:text-lg leading-relaxed ${
                graphite ? "text-[#BDB7AA]" : "text-[#6B6B6B]"
              }`}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Cream menu card on a graphite (or cream) stage */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px 0px" }}
          transition={
            reduce
              ? { duration: 0 }
              : { duration: DUR.slow, ease: EASE_OUT_QUART }
          }
          className="mx-auto max-w-[720px] rounded-[2rem] border border-[#E8E4DA] bg-[#FAF8F4] px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14 shadow-[0_40px_120px_-50px_rgba(0,0,0,0.55)]"
        >
          {/* Decorative top divider */}
          <div className="mb-9 flex items-center justify-center gap-3">
            <span
              aria-hidden="true"
              className="h-px w-12 bg-gradient-to-r from-transparent via-[#C9A84C]/70 to-transparent"
            />
            <span className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#A8872E]">
              Menu
            </span>
            <span
              aria-hidden="true"
              className="h-px w-12 bg-gradient-to-r from-transparent via-[#C9A84C]/70 to-transparent"
            />
          </div>

          <ul className="space-y-7 sm:space-y-8">
            {items.map((item) => (
              <li
                key={item.name}
                className={
                  item.featured
                    ? "relative rounded-2xl border border-[#C9A84C]/30 bg-gradient-to-br from-white to-[#FAF8F4] px-4 py-5 sm:px-6 shadow-[0_8px_28px_-18px_rgba(201,168,76,0.45)]"
                    : "relative"
                }
              >
                {item.featured && (
                  <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center rounded-full border border-[#C9A84C]/40 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#A8872E] shadow-sm">
                    {item.featuredLabel ?? "Signature"}
                  </span>
                )}

                <div className="flex items-baseline gap-3">
                  <p className="text-lg sm:text-xl font-semibold tracking-[-0.01em] text-[#1A1A1A] leading-tight">
                    {item.name}
                  </p>
                  {item.price && (
                    <>
                      <span
                        aria-hidden="true"
                        className="flex-1 translate-y-[-3px] border-b border-dotted border-[#A8872E]/45"
                      />
                      <p className="shrink-0 text-base sm:text-lg font-semibold tracking-tight text-[#A8872E]">
                        {item.price}
                      </p>
                    </>
                  )}
                </div>

                {item.description && (
                  <p className="mt-2 text-sm leading-relaxed text-[#6B6B6B]">
                    {item.description}
                  </p>
                )}
              </li>
            ))}
          </ul>

          {/* Decorative bottom divider */}
          <div className="mt-10 flex items-center justify-center">
            <span
              aria-hidden="true"
              className="h-px w-24 bg-gradient-to-r from-transparent via-[#C9A84C]/60 to-transparent"
            />
          </div>
        </motion.div>

        {footnote && (
          <p
            className={`mx-auto mt-8 max-w-[560px] text-center text-xs leading-relaxed ${
              graphite ? "text-[#9A9A9A]" : "text-[#6B6B6B]"
            }`}
          >
            {footnote}
          </p>
        )}
      </div>
    </section>
  );
}
