"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode, Children, isValidElement, cloneElement } from "react";
import { DUR, EASE_OUT_EXPO, STAGGER } from "./easing";

type HeadlineRevealProps = {
  children: ReactNode;
  /** Initial Y offset per word in pixels. Default 24. */
  y?: number;
  /** Delay before first word reveals. Default 0.1. */
  delay?: number;
  /** Animate on first paint, not on scroll. Default true for heros. */
  onMount?: boolean;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "div" | "span";
};

/**
 * Word-by-word headline reveal. Splits string children by word and wraps each
 * in a motion span. JSX children (e.g. <span className="text-gold">) are
 * preserved as a single unit but still receive a stagger slot.
 *
 * For screen readers: the visible inline spans are aria-hidden, and the full
 * original string is exposed via an SR-only sibling.
 *
 * @example
 * <HeadlineReveal as="h1" className="text-6xl font-bold tracking-tight">
 *   Control metabólico y <span className="text-[#A8872E]">láser diodo</span>
 * </HeadlineReveal>
 */
export default function HeadlineReveal({
  children,
  y = 24,
  delay = 0.1,
  onMount = true,
  className,
  as = "h1",
}: HeadlineRevealProps) {
  const reduce = useReducedMotion();

  // Build word/segment array
  type Segment = { kind: "word"; text: string } | { kind: "node"; node: ReactNode };
  const segments: Segment[] = [];
  let srText = "";

  Children.forEach(children, (child) => {
    if (typeof child === "string" || typeof child === "number") {
      const text = String(child);
      srText += text;
      // Split into [word, space, word, space...] preserving whitespace
      const parts = text.split(/(\s+)/);
      for (const p of parts) {
        if (p === "") continue;
        if (/^\s+$/.test(p)) {
          segments.push({ kind: "word", text: p });
        } else {
          segments.push({ kind: "word", text: p });
        }
      }
    } else if (isValidElement(child)) {
      // Try to extract text for SR readout
      const c = child as React.ReactElement<{ children?: ReactNode }>;
      const inner = c.props.children;
      if (typeof inner === "string") srText += inner;
      segments.push({ kind: "node", node: child });
    } else if (child != null) {
      segments.push({ kind: "node", node: child });
    }
  });

  const item = reduce
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: DUR.slow, ease: EASE_OUT_EXPO } },
      };

  const container = reduce
    ? { show: { transition: { staggerChildren: 0, delayChildren: 0 } } }
    : { show: { transition: { staggerChildren: STAGGER.word, delayChildren: delay } } };

  const MotionComp = motion[as] as typeof motion.h1;

  return (
    <MotionComp
      className={className}
      initial="hidden"
      animate={onMount ? "show" : undefined}
      whileInView={onMount ? undefined : "show"}
      viewport={onMount ? undefined : { once: true, margin: "-80px 0px" }}
      variants={container}
      aria-label={srText.trim() || undefined}
    >
      <span aria-hidden="true" className="inline">
        {segments.map((seg, i) => {
          if (seg.kind === "word") {
            // Whitespace: just render
            if (/^\s+$/.test(seg.text)) return <span key={i}>{seg.text}</span>;
            return (
              <motion.span
                key={i}
                variants={item}
                className="inline-block will-change-transform"
              >
                {seg.text}
              </motion.span>
            );
          }
          // JSX node — wrap whole node as one stagger slot
          return (
            <motion.span
              key={i}
              variants={item}
              className="inline-block will-change-transform"
            >
              {seg.node}
            </motion.span>
          );
        })}
      </span>
    </MotionComp>
  );
}
