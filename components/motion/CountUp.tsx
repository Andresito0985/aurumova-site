"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  /** Target numeric value to animate to. */
  to: number;
  /** Starting value. Default 0. */
  from?: number;
  /** Animation duration in ms. Default 1400. */
  duration?: number;
  /** Optional prefix (e.g. "$") */
  prefix?: string;
  /** Optional suffix (e.g. "+", "%") */
  suffix?: string;
  /** Number of decimal places. Default 0. */
  decimals?: number;
  /** Locale for thousands separator. Default 'en-US'. */
  locale?: string;
  className?: string;
};

/**
 * Animates a number from `from` to `to` on first viewport entry.
 * Respects prefers-reduced-motion by rendering the final value immediately.
 *
 * Uses an ease-out-quart curve for premium feel.
 *
 * @example
 * <CountUp to={9} suffix="+" />
 * <CountUp to={400} prefix="$" />
 * <CountUp to={100} suffix="%" />
 */
export default function CountUp({
  to,
  from = 0,
  duration = 1400,
  prefix = "",
  suffix = "",
  decimals = 0,
  locale = "en-US",
  className,
}: CountUpProps) {
  const reduce = useReducedMotion();
  const [value, setValue] = useState<number>(reduce ? to : from);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    if (reduce) {
      setValue(to);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const ent of entries) {
          if (ent.isIntersecting && !started.current) {
            started.current = true;
            const startTime = performance.now();
            const ease = (t: number) => 1 - Math.pow(1 - t, 4); // ease-out-quart
            const tick = (now: number) => {
              const elapsed = now - startTime;
              const t = Math.min(1, elapsed / duration);
              const v = from + (to - from) * ease(t);
              setValue(v);
              if (t < 1) requestAnimationFrame(tick);
              else setValue(to);
            };
            requestAnimationFrame(tick);
            io.disconnect();
          }
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [from, to, duration, reduce]);

  const fmt = value.toLocaleString(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span
      ref={ref}
      className={className}
      aria-label={`${prefix}${to}${suffix}`}
    >
      {prefix}
      {fmt}
      {suffix}
    </span>
  );
}
