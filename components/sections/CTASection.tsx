"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, MapPin } from "lucide-react";
import { callLink, siteConfig, whatsappLink } from "@/content/site";

export default function CTASection() {
  return (
    <section id="contacto" className="section-padding bg-[#1A1A1A]">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-4">
              Da el Primer Paso
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight">
              Tu transformación comienza
              <br />
              <span className="gold-text-gradient">con una evaluación médica</span>
            </h2>
            <p className="text-base text-[#9A9A9A] leading-relaxed max-w-xl mx-auto mb-10">
              Agenda tu consulta inicial con nuestro equipo clínico. Evaluaremos tu historial,
              objetivos y perfil metabólico para diseñar el programa que mejor se adapta a ti.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={whatsappLink("Hola, quisiera agendar mi consulta inicial en Aurum Nova Wellness Clinic para comenzar mi evaluación médica.")}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 bg-[#C9A84C] hover:bg-[#A8872E] text-[#1A1A1A] font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 shadow-lg shadow-[#C9A84C]/20"
              >
                <MessageCircle className="w-5 h-5" />
                Agendar por WhatsApp
              </motion.a>
              <a
                href={callLink()}
                className="inline-flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#C9A84C]/40 text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-200"
              >
                <Phone className="w-5 h-5" />
                Llamar a la clínica
              </a>
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#C9A84C]/40 text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-200"
              >
                <MapPin className="w-5 h-5" />
                Ver ubicación
              </a>
            </div>
          </motion.div>

          {/* Info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: MessageCircle,
                title: "WhatsApp",
                value: siteConfig.whatsappDisplay,
                href: whatsappLink("Hola, tengo una consulta sobre los programas de Aurum Nova Wellness Clinic."),
                label: "Agendar por WhatsApp",
              },
              {
                icon: Phone,
                title: "Llamadas",
                value: siteConfig.callDisplay,
                sub: "solo llamadas",
                href: callLink(),
                label: "Llamar",
              },
              {
                icon: MapPin,
                title: "Ubicación",
                value: "Ave. Barbosa 65",
                sub: "Arecibo Medical Plaza, Suite 201",
                href: siteConfig.mapsUrl,
                label: "Ver Google Maps",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.title}
                  href={item.href}
                  target={item.href.startsWith("https") ? "_blank" : undefined}
                  rel={item.href.startsWith("https") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-[#242424] border border-[#2D2D2D] hover:border-[#C9A84C]/40 rounded-2xl p-6 text-center transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <p className="text-xs text-[#6B6B6B] font-semibold uppercase tracking-wider mb-1">
                    {item.title}
                  </p>
                  <p className="text-sm font-semibold text-white mb-0.5">{item.value}</p>
                  {item.sub && <p className="text-xs text-[#9A9A9A]">{item.sub}</p>}
                  <p className="mt-3 text-xs text-[#C9A84C] group-hover:underline font-medium">
                    {item.label} →
                  </p>
                </motion.a>
              );
            })}
          </div>

          {/* Instagram */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <p className="text-[#6B6B6B] text-sm">
              Síguenos en Instagram:{" "}
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C9A84C] hover:text-[#E2C97E] font-semibold transition-colors"
              >
                {siteConfig.instagram}
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
