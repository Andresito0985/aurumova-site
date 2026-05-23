"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ShieldCheck, Target } from "lucide-react";
import HeadlineReveal from "@/components/motion/HeadlineReveal";
import { DUR, EASE_OUT_QUART } from "@/components/motion/easing";
import { patientProfiles } from "@/content/metabolic-advanced";

export default function PatientProfileSelector() {
  const reduce = useReducedMotion();
  const [selectedId, setSelectedId] = useState<string>(patientProfiles[0].id);
  const selected =
    patientProfiles.find((p) => p.id === selectedId) ?? patientProfiles[0];

  // Mobile UX: when a chip is selected, bring the detail panel into view so
  // the user doesn't have to scroll past 10 chips to see the result. Desktop
  // already shows chips + detail side-by-side, so we only scroll below lg.
  const detailRef = useRef<HTMLDivElement | null>(null);
  const handleSelect = (id: string) => {
    setSelectedId(id);
    if (typeof window === "undefined") return;
    if (window.innerWidth >= 1024) return; // lg breakpoint — desktop side-by-side
    // Defer to next frame so React commits the new state first.
    requestAnimationFrame(() => {
      detailRef.current?.scrollIntoView({
        behavior: reduce ? "auto" : "smooth",
        block: "start",
      });
    });
  };

  return (
    <section
      id="perfil-clinico"
      className="section-padding bg-white"
    >
      <div className="container-max">
        <div className="max-w-2xl mb-10 sm:mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
            Selección por perfil clínico
          </span>
          <HeadlineReveal
            as="h2"
            onMount={false}
            delay={0.05}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-[#1A1A1A] leading-[1.05] mb-4"
          >
            Seleccionamos el panel según tu{" "}
            <span className="text-[#A8872E]">perfil</span>
          </HeadlineReveal>
          <p className="text-base text-[#6B6B6B] leading-relaxed max-w-xl">
            No todos los pacientes necesitan los mismos laboratorios. Tu
            metabolismo, tus objetivos y tu historial clínico definen el panel.
          </p>
        </div>

        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-6 lg:gap-8">
          {/* Profile chips — toggle button group (aria-pressed) instead of
              radiogroup since we don't implement roving tabindex / arrow key
              navigation. aria-pressed is the correct ARIA pattern for
              toggle-style "is this the active one" buttons. */}
          <div
            aria-label="Perfiles clínicos"
            className="grid grid-cols-1 sm:grid-cols-2 gap-2.5"
          >
            {patientProfiles.map((profile) => {
              const isActive = profile.id === selectedId;
              return (
                <button
                  key={profile.id}
                  type="button"
                  aria-pressed={isActive}
                  aria-controls="patient-profile-detail"
                  onClick={() => handleSelect(profile.id)}
                  className={`text-left rounded-2xl border px-4 py-3 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                    isActive
                      ? "border-[#C9A84C] bg-[#C9A84C]/10 shadow-[0_8px_24px_-10px_rgba(201,168,76,0.35)]"
                      : "border-[#E8E4DA] bg-white hover:border-[#C9A84C]/40 hover:bg-[#FAF8F4]"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[11px] font-bold ${
                        isActive
                          ? "bg-[#C9A84C] text-[#1A1A1A]"
                          : "bg-[#FAF8F4] text-[#9A9A9A] border border-[#E8E4DA]"
                      }`}
                    >
                      {profile.letter}
                    </span>
                    <span
                      className={`text-sm font-medium leading-snug ${
                        isActive ? "text-[#1A1A1A]" : "text-[#3D3D3D]"
                      }`}
                    >
                      {profile.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div
            id="patient-profile-detail"
            ref={detailRef}
            className="relative scroll-mt-24"
            aria-live="polite"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={selected.id}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
                transition={
                  reduce
                    ? { duration: 0 }
                    : { duration: DUR.base, ease: EASE_OUT_QUART }
                }
                className="rounded-3xl border border-[#E8E4DA] bg-[#FAF8F4] p-6 sm:p-7 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.15)]"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#C9A84C]/10 ring-1 ring-[#C9A84C]/25">
                    <Target className="h-5 w-5 text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#C9A84C]">
                      Perfil seleccionado
                    </p>
                    <p className="text-base sm:text-lg font-semibold text-[#1A1A1A] leading-tight">
                      {selected.label}
                    </p>
                  </div>
                </div>

                <div className="mb-5">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#A8872E] mb-2">
                    Qué evaluamos
                  </p>
                  <p className="text-sm leading-relaxed text-[#3D3D3D]">
                    {selected.focus}
                  </p>
                </div>

                <div className="mb-5">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#A8872E] mb-3">
                    Marcadores que pueden ser relevantes
                  </p>
                  <ul className="space-y-2">
                    {selected.markers.map((m) => (
                      <li
                        key={m}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-[#3D3D3D]"
                      >
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#C9A84C]" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#C9A84C] mb-1">
                    Panel que suele considerarse
                  </p>
                  <p className="text-sm font-semibold leading-snug text-[#1A1A1A]">
                    {selected.suggestedPanel}
                  </p>
                </div>

                <div className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-[#6B6B6B]">
                  <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#C9A84C]" />
                  <p>La selección final depende de evaluación clínica.</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
