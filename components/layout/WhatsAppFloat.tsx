"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import { getIntentForPath, getWhatsAppUrl } from "@/lib/whatsapp-intents";
import { trackWhatsAppClick } from "@/lib/tracking";

export default function WhatsAppFloat() {
  const pathname = usePathname();
  const intent = getIntentForPath(pathname);
  const href = getWhatsAppUrl(intent);
  const reduce = useReducedMotion();

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick(`floating_button:${intent}`)}
      aria-label="Contáctanos por WhatsApp"
      initial={reduce ? false : { scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={
        reduce
          ? { duration: 0 }
          : { delay: 1.5, duration: 0.35, ease: [0.22, 1, 0.36, 1] }
      }
      whileHover={reduce ? undefined : { scale: 1.04 }}
      whileTap={reduce ? undefined : { scale: 0.97 }}
      className="hidden lg:flex fixed bottom-6 right-6 z-50 items-center justify-center w-14 h-14 rounded-full shadow-xl bg-[#C9A84C] hover:bg-[#A8872E] transition-colors"
      style={{ boxShadow: "0 4px 24px rgba(201,168,76,0.35)" }}
    >
      {!reduce && (
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-[#C9A84C] animate-ping opacity-20"
        />
      )}
      <MessageCircle className="w-6 h-6 text-[#1A1A1A] relative z-10" strokeWidth={2.5} />
    </motion.a>
  );
}
