"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronRight, MapPin, MessageCircle } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { callLink, siteConfig } from "@/content/site";
import { getIntentForPath, getWhatsAppUrl } from "@/lib/whatsapp-intents";

const desktopNav = [
  { label: "Programa Metabólico", href: "/programa-metabolico" },
  { label: "Quiz", href: "/quiz-metabolico" },
  { label: "Láser Diodo", href: "/laser-diodo" },
  { label: "Servicios", href: "/servicios" },
  { label: "Resultados", href: "/resultados" },
  { label: "Contacto", href: "/contacto" },
];

type MobileNavItem = { label: string; href: string; badge?: string };
type MobileNavGroup = { title: string; items: MobileNavItem[] };

const mobileNavGroups: MobileNavGroup[] = [
  {
    title: "Principal",
    items: [
      { label: "Programa Metabólico Integral", href: "/programa-metabolico", badge: "Principal" },
      { label: "Quiz Metabólico", href: "/quiz-metabolico", badge: "Nuevo" },
      { label: "Láser Diodo", href: "/laser-diodo" },
      { label: "Servicios", href: "/servicios" },
      { label: "Resultados Medibles", href: "/resultados" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
  {
    title: "Servicios",
    items: [
      { label: "Wellness Mujer", href: "/wellness-mujer" },
      { label: "Wellness Hombre", href: "/wellness-hombre" },
      { label: "Nutrición Personalizada", href: "/nutricion" },
      { label: "Suplementación", href: "/suplementacion" },
      { label: "Sueroterapia NAD+ & Myers", href: "/sueroterapia" },
      { label: "Inyectables Metabólicos", href: "/inyectables-metabolicos" },
      { label: "Skin & Glow", href: "/skin-glow" },
      { label: "Hair Support", href: "/hair-support" },
      { label: "Coaching & Seguimiento", href: "/coaching-seguimiento" },
    ],
  },
  {
    title: "Recursos",
    items: [
      { label: "Calculadoras educativas", href: "/calculadoras", badge: "Recurso" },
      { label: "Análisis de laboratorios", href: "/analisis-laboratorios", badge: "Recurso" },
      { label: "Sobre Aurum Nova", href: "/sobre-nosotros" },
      { label: "Preguntas Frecuentes", href: "/preguntas-frecuentes" },
    ],
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const reduce = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isOpen
            ? "bg-white/98 backdrop-blur-md shadow-sm border-b border-[#E8E4DA]"
            : "bg-transparent"
        }`}
      >
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex flex-col leading-none group" onClick={() => setIsOpen(false)}>
              <span className="text-lg md:text-xl font-semibold tracking-wide text-[#1A1A1A] group-hover:text-[#C9A84C] transition-colors">
                Aurum Nova
              </span>
              <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-[#C9A84C] font-medium">
                Wellness Clinic
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
              {desktopNav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors ${
                    pathname === link.href
                      ? "text-[#C9A84C]"
                      : "text-[#3D3D3D] hover:text-[#C9A84C]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={callLink()}
                className="flex items-center gap-1.5 text-sm text-[#3D3D3D] hover:text-[#C9A84C] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                {siteConfig.callDisplay}
              </a>
              <Link
                href="/agendar-evaluacion"
                className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#A8872E] text-[#1A1A1A] text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1A1A] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Agendar Evaluación
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-[#1A1A1A] hover:text-[#C9A84C] transition-colors rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.span
                    key="close"
                    initial={reduce ? { opacity: 0 } : { rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={reduce ? { opacity: 0 } : { rotate: 90, opacity: 0 }}
                    transition={reduce ? { duration: 0 } : { duration: 0.15 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={reduce ? { opacity: 0 } : { rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={reduce ? { opacity: 0 } : { rotate: -90, opacity: 0 }}
                    transition={reduce ? { duration: 0 } : { duration: 0.15 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, x: "100%" }}
            transition={reduce ? { duration: 0.12 } : { type: "tween", duration: 0.28, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-white lg:hidden flex flex-col"
          >
            {/* Spacer for header */}
            <div className="h-16 shrink-0 border-b border-[#E8E4DA]" />

            {/* Scrollable nav list */}
            <div className="flex-1 overflow-y-auto">
              <div className="px-4 py-4 space-y-5">
                {mobileNavGroups.map((group, gi) => (
                  <motion.div
                    key={group.title}
                    initial={reduce ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={reduce ? { duration: 0 } : { delay: gi * 0.06 }}
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9A9A9A] px-3 mb-2">
                      {group.title}
                    </p>
                    {group.items.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between px-3 py-3 rounded-xl mb-0.5 group transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                          pathname === link.href
                            ? "bg-[#C9A84C]/10 text-[#C9A84C]"
                            : "hover:bg-[#FAF8F4] text-[#1A1A1A]"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-base font-medium">{link.label}</span>
                          {link.badge && (
                            <span className="text-[10px] font-semibold bg-[#C9A84C] text-[#1A1A1A] px-2 py-0.5 rounded-full">
                              {link.badge}
                            </span>
                          )}
                        </div>
                        <ChevronRight
                          className={`w-4 h-4 shrink-0 transition-colors ${
                            pathname === link.href ? "text-[#C9A84C]" : "text-[#C9A84C]/40 group-hover:text-[#C9A84C]"
                          }`}
                        />
                      </Link>
                    ))}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile menu footer */}
            <div className="border-t border-[#E8E4DA] p-4 space-y-3 shrink-0 bg-[#FAF8F4]">
              <div className="rounded-2xl border border-[#E8E4DA] bg-white p-3 text-xs leading-relaxed text-[#6B6B6B]">
                <p>
                  <span className="font-semibold text-[#1A1A1A]">WhatsApp:</span>{" "}
                  {siteConfig.whatsappDisplay}
                </p>
                <p>
                  <span className="font-semibold text-[#1A1A1A]">Llamadas:</span>{" "}
                  {siteConfig.callDisplay} <span className="text-[#9A9A9A]">(solo llamadas)</span>
                </p>
                <p className="mt-1">{siteConfig.addressShort}</p>
              </div>
              <a
                href={getWhatsAppUrl(getIntentForPath(pathname))}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#C9A84C] hover:bg-[#A8872E] text-[#1A1A1A] font-semibold py-3.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1A1A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF8F4]"
              >
                <MessageCircle className="h-4 w-4" />
                Agendar por WhatsApp
              </a>
              <div className="flex gap-3">
                <a
                  href={callLink()}
                  className="flex-1 flex items-center justify-center gap-2 text-sm font-medium text-[#3D3D3D] border border-[#E8E4DA] py-2.5 rounded-full hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Llamar
                </a>
                <a
                  href={siteConfig.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 text-sm font-medium text-[#3D3D3D] border border-[#E8E4DA] py-2.5 rounded-full hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all"
                >
                  <MapPin className="w-4 h-4" />
                  Ubicación
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
