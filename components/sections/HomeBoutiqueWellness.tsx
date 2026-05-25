"use client";

// HomeBoutiqueWellness
// ---------------------------------------------------------------------------
// New Home surface that positions Brows and Faciales as the clinic's
// boutique aesthetic services. Replaces the previous 8-card wellness grid
// with a clean 2-column editorial split — one card per service.
//
// Each card uses an inline editorial frame (cream gradient + gold accents +
// Aurum Nova mark + a quiet service glyph), not a stock photo or a "missing
// image" placeholder. The pattern matches the visual language established
// by the migrated /brows-cejas and /faciales-hydrafacial pages.
//
// Routes: /brows-cejas and /faciales-hydrafacial — unchanged.

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Droplet, Eye, type LucideIcon } from "lucide-react";
import HeadlineReveal from "@/components/motion/HeadlineReveal";
import { DUR, EASE_OUT_QUART } from "@/components/motion/easing";

type BoutiqueService = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  href: string;
  cta: string;
  icon: LucideIcon;
};

const services: BoutiqueService[] = [
  {
    eyebrow: "Cejas & Brow Wellness",
    title: "Diseño de cejas boutique",
    description:
      "Brow shaping, tint, lamination y lash lifting con técnica cuidada y atención individual.",
    bullets: [
      "Diseño orientado a tu estructura facial",
      "Atención boutique y personalizada",
      "Orientación de cuidado posterior",
    ],
    href: "/brows-cejas",
    cta: "Ver brow menu",
    icon: Eye,
  },
  {
    eyebrow: "Faciales & Hydrafacial",
    title: "Faciales profundos & Hydrafacial",
    description:
      "Limpieza profunda, hidratación avanzada y protocolos personalizados según tipo de piel.",
    bullets: [
      "Protocolo personalizado por consulta",
      "Hidratación y glow con tecnología",
      "Cuidado en casa orientado por el equipo",
    ],
    href: "/faciales-hydrafacial",
    cta: "Ver menú facial",
    icon: Droplet,
  },
];

/**
 * Editorial cream frame used inside each boutique card. Pure CSS — no
 * stock photo. Matches the pattern used on the migrated brows / facials
 * pages, so the home surface visually continues into those routes.
 */
function BoutiqueFrame({ Icon, label }: { Icon: LucideIcon; label: string }) {
  return (
    <div
      className="relative aspect-[16/9] sm:aspect-[5/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#FAF8F4] via-white to-[#F0EDE6] ring-1 ring-[#E8E4DA]"
      role="img"
      aria-label={`Aurum Nova · ${label}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 72% 28%, rgba(201,168,76,0.22) 0%, transparent 60%), radial-gradient(ellipse at 22% 78%, rgba(168,135,46,0.10) 0%, transparent 55%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#A8872E 1px, transparent 1px), linear-gradient(90deg, #A8872E 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <span
        aria-hidden="true"
        className="absolute inset-3 rounded-xl ring-1 ring-[#C9A84C]/25"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <span
          aria-hidden="true"
          className="block h-px w-12 bg-gradient-to-r from-transparent via-[#A8872E] to-transparent"
        />
        <span className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#A8872E]">
          Aurum Nova
        </span>
        <Icon className="h-5 w-5 text-[#A8872E]" />
        <span
          aria-hidden="true"
          className="block h-px w-8 bg-gradient-to-r from-transparent via-[#A8872E]/60 to-transparent"
        />
      </div>
    </div>
  );
}

export default function HomeBoutiqueWellness() {
  const reduce = useReducedMotion();

  return (
    <section className="section-padding bg-[#FAF8F4]">
      <div className="container-max">
        <div className="max-w-2xl mb-12 sm:mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
            Boutique wellness
          </span>
          <HeadlineReveal
            as="h2"
            onMount={false}
            delay={0.05}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] leading-[1.05] text-[#1A1A1A] mb-4"
          >
            Servicios boutique con{" "}
            <span className="text-[#A8872E]">enfoque clínico</span>
          </HeadlineReveal>
          <p className="text-base sm:text-lg text-[#6B6B6B] leading-relaxed">
            Cejas y faciales en un ambiente premium, con técnica cuidada y
            atención individual.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.href}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px 0px" }}
                transition={
                  reduce
                    ? { duration: 0 }
                    : {
                        duration: DUR.slow,
                        delay: i * 0.08,
                        ease: EASE_OUT_QUART,
                      }
                }
              >
                <Link
                  href={service.href}
                  className="group flex h-full flex-col rounded-3xl bg-white p-5 sm:p-7 ring-1 ring-[#E8E4DA] transition-all duration-300 hover:-translate-y-0.5 hover:ring-[#C9A84C]/35 hover:shadow-[0_24px_60px_-30px_rgba(0,0,0,0.18)]"
                >
                  <BoutiqueFrame Icon={Icon} label={service.title} />

                  <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.24em] text-[#A8872E]">
                    {service.eyebrow}
                  </p>
                  <h3 className="mt-2 text-xl sm:text-2xl font-semibold text-[#1A1A1A] leading-snug">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#6B6B6B]">
                    {service.description}
                  </p>

                  <ul className="mt-5 space-y-2.5 flex-1">
                    {service.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-[#3D3D3D]"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A84C]"
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#A8872E] group-hover:text-[#C9A84C] transition-colors">
                    {service.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-8 max-w-2xl text-xs leading-relaxed text-[#9A9A9A]">
          Los resultados pueden variar según piel, vello, cuidado posterior y
          técnica. Los faciales son servicios estéticos y de bienestar, no
          tratamientos médicos.
        </p>
      </div>
    </section>
  );
}
