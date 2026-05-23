"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  ChevronRight,
  ChevronDown,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { callLink, siteConfig } from "@/content/site";
import { getIntentForPath, getWhatsAppUrl } from "@/lib/whatsapp-intents";

// Top-level desktop navigation. Most items are direct links; `Recursos` is a
// dropdown trigger that opens a grouped resources menu (see `resourceGroups`).
type DesktopNavItem =
  | { kind: "link"; label: string; href: string }
  | { kind: "dropdown"; label: string };

const desktopNav: DesktopNavItem[] = [
  { kind: "link", label: "Programa Metabólico", href: "/programa-metabolico" },
  { kind: "link", label: "Láser Diodo", href: "/laser-diodo" },
  { kind: "link", label: "Servicios", href: "/servicios" },
  { kind: "dropdown", label: "Recursos" },
  { kind: "link", label: "Contacto", href: "/contacto" },
];

// Resources dropdown content (desktop). Three columns of clinically themed
// links. Keep this lean — premium medical resource panel, not a corporate
// mega menu.
type ResourceGroupItem = {
  label: string;
  href: string;
  badge?: string;
  description?: string;
};
type ResourceGroup = { title: string; items: ResourceGroupItem[] };

const resourceGroups: ResourceGroup[] = [
  {
    title: "Evaluación clínica",
    items: [
      {
        label: "Evaluación Metabólica Avanzada",
        href: "/evaluacion-metabolica-avanzada",
        badge: "Nuevo",
        description: "Selección de paneles según tu perfil clínico.",
      },
      { label: "Perfil Metabólico Integral", href: "/perfil-metabolico" },
      { label: "Análisis de Laboratorios", href: "/analisis-laboratorios" },
    ],
  },
  {
    title: "Herramientas",
    items: [
      { label: "Quiz Metabólico", href: "/quiz-metabolico" },
      { label: "Calculadoras", href: "/calculadoras" },
      { label: "Resultados y seguimiento", href: "/resultados" },
    ],
  },
  {
    title: "Información",
    items: [
      { label: "Enfoque Clínico", href: "/enfoque-clinico" },
      { label: "Seguridad y Elegibilidad", href: "/seguridad-elegibilidad" },
      { label: "Preguntas Frecuentes", href: "/preguntas-frecuentes" },
    ],
  },
];

type MobileNavItem = { label: string; href: string; badge?: string };
type MobileNavGroup = { title: string; items: MobileNavItem[] };

const mobileNavGroups: MobileNavGroup[] = [
  {
    title: "Principal",
    items: [
      { label: "Inicio", href: "/" },
      { label: "Programa Metabólico", href: "/programa-metabolico", badge: "Principal" },
      { label: "Láser Diodo", href: "/laser-diodo" },
      { label: "Servicios", href: "/servicios" },
      { label: "Agendar Evaluación", href: "/agendar-evaluacion" },
    ],
  },
  {
    title: "Recursos clínicos",
    items: [
      {
        label: "Evaluación Metabólica Avanzada",
        href: "/evaluacion-metabolica-avanzada",
        badge: "Nuevo",
      },
      { label: "Perfil Metabólico Integral", href: "/perfil-metabolico" },
      { label: "Análisis de Laboratorios", href: "/analisis-laboratorios" },
      { label: "Quiz Metabólico", href: "/quiz-metabolico" },
      { label: "Calculadoras", href: "/calculadoras" },
    ],
  },
  {
    title: "Confianza y soporte",
    items: [
      { label: "Enfoque Clínico", href: "/enfoque-clinico" },
      { label: "Seguridad y Elegibilidad", href: "/seguridad-elegibilidad" },
      { label: "Sobre Aurum Nova", href: "/sobre-nosotros" },
      { label: "Preguntas Frecuentes", href: "/preguntas-frecuentes" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const resourcesTriggerRef = useRef<HTMLButtonElement | null>(null);
  const resourcesMenuRef = useRef<HTMLDivElement | null>(null);

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

  // Close resources dropdown when route changes (link inside menu was clicked).
  useEffect(() => {
    setIsResourcesOpen(false);
  }, [pathname]);

  // Click-outside + Escape close for the desktop resources dropdown.
  useEffect(() => {
    if (!isResourcesOpen) return;
    const handleMousedown = (e: MouseEvent) => {
      const target = e.target as Node | null;
      if (!target) return;
      if (resourcesMenuRef.current?.contains(target)) return;
      if (resourcesTriggerRef.current?.contains(target)) return;
      setIsResourcesOpen(false);
    };
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsResourcesOpen(false);
        resourcesTriggerRef.current?.focus();
      }
    };
    document.addEventListener("mousedown", handleMousedown);
    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("mousedown", handleMousedown);
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [isResourcesOpen]);

  // Active state for the desktop "Recursos" trigger — highlights gold when
  // the current route lives inside any resource group.
  const resourceHrefs = resourceGroups.flatMap((g) => g.items.map((i) => i.href));
  const isInResources = resourceHrefs.includes(pathname);

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
            <Link
              href="/"
              className="flex items-center gap-2.5 leading-none group"
              onClick={() => setIsOpen(false)}
              aria-label="Aurum Nova Wellness Clinic — Inicio"
            >
              <Image
                src="/brand/aurum-nova-logo-transparent-4096.png"
                alt="Aurum Nova"
                width={32}
                height={32}
                priority
                className="h-8 w-8 object-contain"
              />
              <span className="flex flex-col leading-none">
                <span className="text-lg md:text-xl font-semibold tracking-wide text-[#1A1A1A] group-hover:text-[#C9A84C] transition-colors">
                  Aurum Nova
                </span>
                <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-[#C9A84C] font-medium">
                  Wellness Clinic
                </span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav
              aria-label="Navegación principal"
              className="hidden lg:flex items-center gap-5 xl:gap-7"
            >
              {desktopNav.map((item) => {
                if (item.kind === "dropdown") {
                  const triggerActive = isInResources || isResourcesOpen;
                  return (
                    <div key="resources-dropdown" className="relative">
                      <button
                        ref={resourcesTriggerRef}
                        type="button"
                        onClick={() => setIsResourcesOpen((v) => !v)}
                        aria-expanded={isResourcesOpen}
                        aria-controls="resources-menu"
                        aria-haspopup="menu"
                        className={`inline-flex items-center gap-1.5 text-sm font-medium tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-md py-1 ${
                          triggerActive
                            ? "text-[#C9A84C]"
                            : "text-[#3D3D3D] hover:text-[#C9A84C]"
                        }`}
                      >
                        {item.label}
                        <ChevronDown
                          aria-hidden="true"
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            isResourcesOpen ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {isResourcesOpen && (
                          <motion.div
                            id="resources-menu"
                            ref={resourcesMenuRef}
                            role="menu"
                            aria-label="Recursos clínicos"
                            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -6 }}
                            transition={reduce ? { duration: 0.1 } : { duration: 0.18, ease: "easeOut" }}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[700px] max-w-[calc(100vw-2rem)] bg-white border border-[#E8E4DA] rounded-2xl shadow-2xl shadow-black/15 p-6 z-50"
                          >
                            <div
                              aria-hidden="true"
                              className="absolute -top-2 left-1/2 -translate-x-1/2 h-3 w-3 rotate-45 bg-white border-t border-l border-[#E8E4DA]"
                            />
                            <div className="relative grid grid-cols-3 gap-6">
                              {resourceGroups.map((group) => (
                                <div key={group.title}>
                                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C9A84C] mb-3">
                                    {group.title}
                                  </p>
                                  <ul className="space-y-2.5">
                                    {group.items.map((res) => {
                                      const isCurrent = pathname === res.href;
                                      return (
                                        <li key={res.href}>
                                          <Link
                                            href={res.href}
                                            role="menuitem"
                                            onClick={() => setIsResourcesOpen(false)}
                                            className={`block rounded-lg px-2 py-1.5 -mx-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                                              isCurrent
                                                ? "bg-[#C9A84C]/10 text-[#C9A84C]"
                                                : "text-[#1A1A1A] hover:bg-[#FAF8F4] hover:text-[#A8872E]"
                                            }`}
                                          >
                                            <div className="flex items-center gap-2">
                                              <span className="text-sm font-medium leading-snug">
                                                {res.label}
                                              </span>
                                              {res.badge && (
                                                <span className="text-[9px] font-semibold bg-[#C9A84C] text-[#1A1A1A] px-1.5 py-0.5 rounded-full uppercase tracking-wide leading-none">
                                                  {res.badge}
                                                </span>
                                              )}
                                            </div>
                                            {res.description && (
                                              <p className="mt-1 text-[11px] leading-relaxed text-[#6B6B6B]">
                                                {res.description}
                                              </p>
                                            )}
                                          </Link>
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm font-medium tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-md py-1 ${
                      pathname === item.href
                        ? "text-[#C9A84C]"
                        : "text-[#3D3D3D] hover:text-[#C9A84C]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
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
