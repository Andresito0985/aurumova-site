"use client";

import { motion, useReducedMotion } from "framer-motion";
import CountUp from "@/components/motion/CountUp";

type Stat = {
  value: string;
  label: string;
  sublabel: string;
  count?: { to: number; suffix?: string };
};

const stats: Stat[] = [
  { value: "9+", label: "Programas especializados", sublabel: "Metabolismo, estética, bienestar", count: { to: 9, suffix: "+" } },
  { value: "100%", label: "Supervisión médica", sublabel: "En cada etapa del programa", count: { to: 100, suffix: "%" } },
  { value: "1:1", label: "Atención personalizada", sublabel: "Protocolo único por paciente" },
  { value: "PR", label: "Puerto Rico", sublabel: "Arecibo Medical Plaza" },
];

export default function StatsSection() {
  const reduce = useReducedMotion();
  return (
    <section className="section-padding bg-[#FAF8F4] border-y border-[#E8E4DA]">
      <div className="container-max">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={reduce ? false : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={reduce ? { duration: 0 } : { delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl font-bold tracking-[-0.02em] text-[#A8872E] mb-1">
                {stat.count ? (
                  <CountUp to={stat.count.to} suffix={stat.count.suffix} duration={1600} />
                ) : (
                  stat.value
                )}
              </div>
              <div className="text-sm font-semibold text-[#1A1A1A] mb-0.5">{stat.label}</div>
              <div className="text-xs text-[#9A9A9A]">{stat.sublabel}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
