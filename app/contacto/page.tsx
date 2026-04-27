import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import GeneralLeadForm from "@/components/forms/GeneralLeadForm";
import { MapPin, Phone, Mail, AtSign, Clock, MessageCircle } from "lucide-react";
import { siteConfig, whatsappLink } from "@/content/site";

export const metadata: Metadata = {
  title: "Contacto | Aurum Nova Wellness Clinic",
  description:
    "Contacta a Aurum Nova Wellness Clinic en Arecibo, Puerto Rico. WhatsApp, teléfono, email e Instagram. Agenda tu evaluación médica inicial.",

  alternates: { canonical: "https://aurumnovawellnessclinic.com/contacto" },
  openGraph: {
    title: "Contacto | Aurum Nova Wellness Clinic",
    description: "Contacta a Aurum Nova Wellness Clinic en Arecibo, Puerto Rico. WhatsApp, teléfono, email e Instagram. Agenda tu evaluación médica inicial.",
    url: "https://aurumnovawellnessclinic.com/contacto",
    siteName: "Aurum Nova Wellness Clinic",
    locale: "es_PR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto | Aurum Nova Wellness Clinic",
    description: "Contacta a Aurum Nova Wellness Clinic en Arecibo, Puerto Rico. WhatsApp, teléfono, email e Instagram. Agenda tu evaluación médica inicial.",
  },
};

export default function ContactoPage() {
  return (
    <>
      <PageHero
        badge="Contacto"
        title="Hablemos"
        highlight="hoy"
        subtitle="Contáctanos por el canal que prefieras. Nuestro equipo responde consultas sobre programas, elegibilidad y cómo agendar tu evaluación médica inicial."
        ctaText="Escribir por WhatsApp"
        ctaMessage="Hola, tengo algunas preguntas sobre los programas de Aurum Nova Wellness Clinic."
        secondaryCtaText="Ver preguntas frecuentes"
        secondaryCtaHref="/preguntas-frecuentes"
      />

      {/* Contact cards */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              {
                icon: MessageCircle,
                title: "WhatsApp",
                value: siteConfig.phone,
                detail: "Respuesta rápida",
                href: whatsappLink("Hola, tengo preguntas sobre Aurum Nova Wellness Clinic."),
                cta: "Escribir ahora",
                external: true,
              },
              {
                icon: Phone,
                title: "Teléfono",
                value: siteConfig.phone,
                detail: "Llamadas directas",
                href: `tel:${siteConfig.phone}`,
                cta: "Llamar",
                external: false,
              },
              {
                icon: Mail,
                title: "Email",
                value: siteConfig.email,
                detail: "Consultas formales",
                href: `mailto:${siteConfig.email}`,
                cta: "Enviar email",
                external: false,
              },
              {
                icon: AtSign,
                title: "Instagram",
                value: siteConfig.instagram,
                detail: "Novedades y contenido",
                href: siteConfig.instagramUrl,
                cta: "Ver perfil",
                external: true,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="group bg-white border border-[#E8E4DA] hover:border-[#C9A84C]/40 rounded-2xl p-5 text-center hover:shadow-md transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#9A9A9A] mb-1">
                    {item.title}
                  </p>
                  <p className="text-sm font-semibold text-[#1A1A1A] break-all mb-0.5">{item.value}</p>
                  <p className="text-xs text-[#9A9A9A] mb-3">{item.detail}</p>
                  <span className="text-xs font-semibold text-[#C9A84C] group-hover:underline">
                    {item.cta} →
                  </span>
                </a>
              );
            })}
          </div>

          {/* Address */}
          <div className="bg-[#FAF8F4] border border-[#E8E4DA] rounded-2xl p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-[#C9A84C]" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#9A9A9A] mb-1">Ubicación</p>
              <p className="text-sm font-semibold text-[#1A1A1A]">{siteConfig.address}</p>
              <p className="text-xs text-[#9A9A9A] mt-1">
                Confirma disponibilidad de cita antes de visitarnos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <GeneralLeadForm
        heading="Envíanos tu consulta"
        subheading="Completa el formulario y te contactamos por WhatsApp para orientarte y coordinar tu evaluación médica inicial."
      />
    </>
  );
}
