"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";
import { useRef, type ReactNode, type CSSProperties } from "react";

type MagneticCTAProps = {
  children: ReactNode;
  /** Max pixel pull toward cursor. Default 6. */
  strength?: number;
  /** Spring stiffness. Default 220. */
  stiffness?: number;
  /** Spring damping. Default 18. */
  damping?: number;
  className?: string;
  style?: CSSProperties;
  /** Render as anchor or button or div; defaults to a span wrapper. */
  as?: "span" | "div";
} & Omit<HTMLMotionProps<"span">, "style" | "onMouseMove" | "onMouseLeave">;

/**
 * Magnetic hover wrapper — cursor pulls the wrapped element ≤ `strength` px.
 * Disabled on touch / coarse pointers and under prefers-reduced-motion.
 *
 * Wrap a primary CTA. The wrapper does not change layout; it adds a
 * transform-only effect.
 *
 * @example
 * <MagneticCTA>
 *   <a href="..." className="rounded-full bg-gold ...">Agendar</a>
 * </MagneticCTA>
 */
export default function MagneticCTA({
  children,
  strength = 6,
  stiffness = 220,
  damping = 18,
  className,
  style,
  as = "span",
  ...rest
}: MagneticCTAProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness, damping, mass: 0.4 });
  const sy = useSpring(y, { stiffness, damping, mass: 0.4 });

  const handleMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    // Only on hover-capable devices with fine pointer
    if (typeof window !== "undefined") {
      const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
      if (!mq.matches) return;
    }
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = ((e.clientX - cx) / rect.width) * 2;
    const dy = ((e.clientY - cy) / rect.height) * 2;
    x.set(Math.max(-1, Math.min(1, dx)) * strength);
    y.set(Math.max(-1, Math.min(1, dy)) * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const MotionComp = motion[as] as typeof motion.span;

  return (
    <MotionComp
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ display: "inline-block", x: sx, y: sy, ...style }}
      className={className}
      {...rest}
    >
      {children}
    </MotionComp>
  );
}
