"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { Children, type ReactNode } from "react";
import { DUR, EASE_OUT_QUART, STAGGER } from "./easing";

type RevealStaggerProps = {
  children: ReactNode;
  /** Per-child Y offset. Default 20. */
  y?: number;
  /** Delay before the first child reveals. Default 0.15. */
  delayChildren?: number;
  /** Stagger between siblings. Default STAGGER.child (0.08). */
  staggerChildren?: number;
  /** Per-child duration. Default DUR.base. */
  duration?: number;
  /** Use animate instead of whileInView. Default false. */
  onMount?: boolean;
  /** Wrapper tag. Default div. */
  as?: "div" | "section" | "article" | "ul" | "ol" | "nav";
  className?: string;
} & Omit<HTMLMotionProps<"div">, "initial" | "animate" | "whileInView" | "transition" | "viewport" | "variants">;

/**
 * Staggered cascade of fade-up children on viewport entry.
 * Each direct child is wrapped in a motion.div with the configured variant.
 * Respects prefers-reduced-motion.
 *
 * @example
 * <RevealStagger className="grid grid-cols-3 gap-4">
 *   <Card>...</Card>
 *   <Card>...</Card>
 *   <Card>...</Card>
 * </RevealStagger>
 */
export default function RevealStagger({
  children,
  y = 20,
  delayChildren = 0.15,
  staggerChildren = STAGGER.child,
  duration = DUR.base,
  onMount = false,
  as = "div",
  className,
  ...rest
}: RevealStaggerProps) {
  const reduce = useReducedMotion();

  const container = reduce
    ? { show: { transition: { staggerChildren: 0, delayChildren: 0 } } }
    : { show: { transition: { staggerChildren, delayChildren } } };

  const item = reduce
    ? {
        hidden: { opacity: 1, y: 0 },
        show: { opacity: 1, y: 0, transition: { duration: 0 } },
      }
    : {
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration, ease: EASE_OUT_QUART } },
      };

  const MotionComp = motion[as] as typeof motion.div;

  const childNodes = Children.toArray(children).map((child, idx) => (
    <motion.div key={idx} variants={item}>
      {child}
    </motion.div>
  ));

  if (onMount) {
    return (
      <MotionComp
        className={className}
        initial="hidden"
        animate="show"
        variants={container}
        {...rest}
      >
        {childNodes}
      </MotionComp>
    );
  }

  return (
    <MotionComp
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px 0px" }}
      variants={container}
      {...rest}
    >
      {childNodes}
    </MotionComp>
  );
}
