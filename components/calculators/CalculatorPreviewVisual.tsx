"use client";

import { motion, useReducedMotion } from "framer-motion";

export type CalculatorPreviewType =
  | "imc"
  | "meta"
  | "deficit"
  | "hidratacion";

interface CalculatorPreviewVisualProps {
  type: CalculatorPreviewType;
  className?: string;
}

/**
 * Premium mini-dashboard SVG visual used inside calculator cards. Each
 * variant gets its own small infographic that feels clinical and
 * health-tech without doing any actual calculation.
 *
 *   imc          — circular BMI dial with category arc
 *   meta         — progress path with start dot + target marker
 *   deficit      — energy balance bars (intake vs expenditure)
 *   hidratacion  — hydration gauge / water-level container
 *
 * All visuals are pure SVG + a single Framer Motion entrance. Final state
 * renders immediately for prefers-reduced-motion users.
 */
export default function CalculatorPreviewVisual({
  type,
  className = "",
}: CalculatorPreviewVisualProps) {
  const reduce = useReducedMotion();

  if (type === "imc") {
    return (
      <svg
        viewBox="0 0 96 96"
        className={`h-16 w-16 ${className}`}
        aria-hidden="true"
      >
        {/* Background ring (subtle) */}
        <circle
          cx="48"
          cy="48"
          r="34"
          fill="none"
          stroke="#E8E4DA"
          strokeWidth="6"
        />
        {/* Filled arc — "normal/healthy" segment in gold */}
        <motion.circle
          cx="48"
          cy="48"
          r="34"
          fill="none"
          stroke="#C9A84C"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={2 * Math.PI * 34}
          initial={reduce ? false : { strokeDashoffset: 2 * Math.PI * 34 }}
          whileInView={{ strokeDashoffset: 2 * Math.PI * 34 * 0.42 }}
          viewport={{ once: true, margin: "-40px 0px" }}
          transition={reduce ? { duration: 0 } : { duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          transform="rotate(-90 48 48)"
        />
        {/* Center marker */}
        <circle cx="48" cy="48" r="6" fill="#1A1A1A" />
        <circle cx="48" cy="48" r="2.5" fill="#E2C97E" />
      </svg>
    );
  }

  if (type === "meta") {
    return (
      <svg
        viewBox="0 0 96 96"
        className={`h-16 w-16 ${className}`}
        aria-hidden="true"
      >
        {/* Track */}
        <line
          x1="16"
          y1="48"
          x2="80"
          y2="48"
          stroke="#E8E4DA"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Gold progress */}
        <motion.line
          x1="16"
          y1="48"
          x2="80"
          y2="48"
          stroke="#C9A84C"
          strokeWidth="3"
          strokeLinecap="round"
          initial={reduce ? false : { pathLength: 0 }}
          whileInView={{ pathLength: 0.62 }}
          viewport={{ once: true, margin: "-40px 0px" }}
          transition={reduce ? { duration: 0 } : { duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Start dot */}
        <circle cx="16" cy="48" r="4" fill="#1A1A1A" />
        {/* Progress marker */}
        <motion.circle
          cx="56"
          cy="48"
          r="5"
          fill="#C9A84C"
          stroke="#1A1A1A"
          strokeWidth="1.5"
          initial={reduce ? false : { opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={reduce ? { duration: 0 } : { duration: 0.35, delay: 0.8 }}
        />
        {/* Target — crosshair */}
        <g transform="translate(80 48)">
          <circle cx="0" cy="0" r="8" fill="none" stroke="#A8872E" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="3" fill="#A8872E" />
          <line x1="-12" y1="0" x2="-9" y2="0" stroke="#A8872E" strokeWidth="1.5" />
          <line x1="12" y1="0" x2="9" y2="0" stroke="#A8872E" strokeWidth="1.5" />
          <line x1="0" y1="-12" x2="0" y2="-9" stroke="#A8872E" strokeWidth="1.5" />
          <line x1="0" y1="12" x2="0" y2="9" stroke="#A8872E" strokeWidth="1.5" />
        </g>
      </svg>
    );
  }

  if (type === "deficit") {
    return (
      <svg
        viewBox="0 0 96 96"
        className={`h-16 w-16 ${className}`}
        aria-hidden="true"
      >
        {/* Baseline */}
        <line
          x1="14"
          y1="78"
          x2="82"
          y2="78"
          stroke="#E8E4DA"
          strokeWidth="1.5"
        />
        {/* Intake bar (taller) */}
        <motion.rect
          x="24"
          y="34"
          width="14"
          height="44"
          rx="3"
          fill="#1A1A1A"
          initial={reduce ? false : { scaleY: 0, originY: "78px" }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-40px 0px" }}
          transition={reduce ? { duration: 0 } : { duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "31px 78px" }}
        />
        <text
          x="31"
          y="92"
          textAnchor="middle"
          fontSize="9"
          fontWeight="600"
          fill="#6B6B6B"
        >
          IN
        </text>
        {/* Expenditure bar (slightly less) */}
        <motion.rect
          x="58"
          y="44"
          width="14"
          height="34"
          rx="3"
          fill="#C9A84C"
          initial={reduce ? false : { scaleY: 0, originY: "78px" }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-40px 0px" }}
          transition={reduce ? { duration: 0 } : { duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "65px 78px" }}
        />
        <text
          x="65"
          y="92"
          textAnchor="middle"
          fontSize="9"
          fontWeight="600"
          fill="#A8872E"
        >
          OUT
        </text>
        {/* Delta arrow — small gold flame indicator */}
        <motion.path
          d="M 42 24 Q 48 18, 54 24 L 51 30 L 48 26 L 45 30 Z"
          fill="#A8872E"
          initial={reduce ? false : { opacity: 0, y: -6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reduce ? { duration: 0 } : { duration: 0.4, delay: 0.7 }}
        />
      </svg>
    );
  }

  // hidratacion
  return (
    <svg
      viewBox="0 0 96 96"
      className={`h-16 w-16 ${className}`}
      aria-hidden="true"
    >
      {/* Glass/cup outline */}
      <path
        d="M 24 22 L 30 76 Q 30 84, 38 84 L 58 84 Q 66 84, 66 76 L 72 22 Z"
        fill="none"
        stroke="#E8E4DA"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Water clip — fills to ~62% */}
      <defs>
        <clipPath id="cup-clip">
          <path d="M 25 23 L 31 75 Q 31 83, 39 83 L 57 83 Q 65 83, 65 75 L 71 23 Z" />
        </clipPath>
      </defs>
      <g clipPath="url(#cup-clip)">
        <motion.rect
          x="22"
          width="56"
          fill="#C9A84C"
          fillOpacity="0.55"
          initial={reduce ? false : { y: 88, height: 0 }}
          whileInView={{ y: 38, height: 50 }}
          viewport={{ once: true, margin: "-40px 0px" }}
          transition={reduce ? { duration: 0 } : { duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Water surface line */}
        <motion.path
          d="M 22 40 Q 36 36, 48 40 T 76 40"
          stroke="#A8872E"
          strokeWidth="1.5"
          fill="none"
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={reduce ? { duration: 0 } : { duration: 0.4, delay: 0.9 }}
        />
      </g>
      {/* Small drop above the cup */}
      <motion.path
        d="M 48 6 C 53 12, 56 16, 56 18 C 56 21, 53 23, 48 23 C 43 23, 40 21, 40 18 C 40 16, 43 12, 48 6 Z"
        fill="#C9A84C"
        initial={reduce ? false : { opacity: 0, y: -6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={reduce ? { duration: 0 } : { duration: 0.45, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  );
}
