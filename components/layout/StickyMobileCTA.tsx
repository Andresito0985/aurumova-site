"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { MessageCircle, CalendarCheck } from "lucide-react";
import { whatsappLink } from "@/content/site";
import { trackWhatsAppClick, trackEvent } from "@/lib/tracking";

const STICKY_CTA_MESSAGE =
  "Hola, quiero agendar una evaluación en Aurum Nova Wellness Clinic.";

const HIDDEN_ROUTES = ["/agendar-evaluacion", "/contacto"];

export default function StickyMobileCTA() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (HIDDEN_ROUTES.includes(pathname)) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={reduce ? { opacity: 0 } : { y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={reduce ? { opacity: 0 } : { y: 80, opacity: 0 }}
          transition={reduce ? { duration: 0.12 } : { type: "tween", duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-0 inset-x-0 z-40 lg:hidden pointer-events-none"
        >
          <div className="px-3 pb-3 pt-2 pointer-events-auto">
            <div
              className="flex gap-2 rounded-full border border-[#E8E4DA] bg-white/95 backdrop-blur-md p-1.5"
              style={{ boxShadow: "0 10px 32px rgba(26,26,26,0.12)" }}
            >
              <a
                href={whatsappLink(STICKY_CTA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("sticky_mobile")}
                className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#C9A84C] hover:bg-[#A8872E] text-[#1A1A1A] font-semibold text-sm py-3 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1A1A] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <Link
                href="/agendar-evaluacion"
                onClick={() => trackEvent("ScheduleClicked", { source: "sticky_mobile" })}
                className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#1A1A1A] hover:bg-[#000000] text-white font-semibold text-sm py-3 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1A1A] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                <CalendarCheck className="w-4 h-4" />
                Agendar
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
