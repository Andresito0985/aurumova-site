"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappLink, defaultWhatsappMessage } from "@/content/site";
import { trackWhatsAppClick } from "@/lib/tracking";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={whatsappLink(defaultWhatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick("floating_button")}
      aria-label="Contáctanos por WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="hidden lg:flex fixed bottom-6 right-6 z-50 items-center justify-center w-14 h-14 rounded-full shadow-xl bg-[#C9A84C] hover:bg-[#A8872E] transition-colors"
      style={{ boxShadow: "0 4px 24px rgba(201,168,76,0.35)" }}
    >
      {/* Subtle pulse ring in gold */}
      <span className="absolute inset-0 rounded-full bg-[#C9A84C] animate-ping opacity-20" />
      <MessageCircle className="w-6 h-6 text-[#1A1A1A] relative z-10" strokeWidth={2.5} />
    </motion.a>
  );
}
