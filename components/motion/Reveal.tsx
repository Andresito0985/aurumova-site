"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { type ReactNode } from "react";
import { DUR, EASE_OUT_QUART } from "./easing";

type RevealProps = {
  children: ReactNode;
  /** Initial Y offset in pixels. Default 24. */
  y?: number;
  /** Animation delay in seconds. */
  delay?: number;
  /** Duration in seconds. Default DUR.base (0.55). */
  duration?: number;
  /** If true, fires on first viewport entry only. Default true. */
  once?: boolean;
  /** Use animate (mount) instead of whileInView (scroll). Default false. */
  onMount?: boolean;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "span" | "p";
} & Omit<HTMLMotionProps<"div">, "initial" | "animate" | "whileInView" | "transition" | "viewport">;

/**
 * Single-block fade + slight rise on viewport entry.
 * Respects prefers-reduced-motion (renders at final state instantly).
 *
 * @example
 * <Reveal>
 *   <h2>Section heading</h2>
 *   <p>Section body</p>
 * </Reveal>
 */
export default function Reveal({
  children,
  y = 24,
  delay = 0,
  duration = DUR.base,
  once = true,
  onMount = false,
  className,
  as = "div",
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();

  const initial = reduce ? false : { opacity: 0, y };
  const target = { opacity: 1, y: 0 };
  const transition = reduce
    ? { duration: 0 }
    : { duration, delay, ease: EASE_OUT_QUART };

  const MotionComp = motion[as] as typeof motion.div;

  if (onMount) {
    return (
      <MotionComp
        className={className}
        initial={initial}
        animate={target}
        transition={transition}
        {...rest}
      >
        {children}
      </MotionComp>
    );
  }

  return (
    <MotionComp
      className={className}
      initial={initial}
      whileInView={target}
      viewport={{ once, margin: "-80px 0px" }}
      transition={transition}
      {...rest}
    >
      {children}
    </MotionComp>
  );
}
