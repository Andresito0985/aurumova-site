import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import TeamSection from "@/components/sections/TeamSection";
import MetodoAurum from "@/components/sections/MetodoAurum";
import CTABanner from "@/components/ui/CTABanner";
import { MapPin, Phone, Mail, AtSign, Clock } from "lucide-react";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Sobre Aurum Nova Wellness Clinic | Arecibo, Puerto Rico",
  description:
    "Conoce Aurum Nova Wellness Clinic: clínica premium de bienestar médico en Arecibo Medical Plaza, Puerto Rico. Medicina metabólica, estética y wellness con enfoque clínico.",

  alternates: { canonical: "https://aurumnovawellnessclinic.com/sobre-nosotros" },
  openGraph: {
    title: "Sobre Aurum Nova Wellness Clinic | Arecibo, Puerto Rico",
    description: "Conoce Aurum Nova Wellness Clinic: clínica premium de bienestar médico en Arecibo Medical Plaza, Puerto Rico. Medicina metabólica, estética y wellness con enfoque clínico.",
    url: "https://aurumnovawellnessclinic.com/sobre-nosotros",
    siteName: "Aurum Nova Wellness Clinic",
    locale: "es_PR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre Aurum Nova Wellness Clinic | Arecibo, Puerto Rico",
    description: "Conoce Aurum Nova Wellness Clinic: clínica premium de bienestar médico en Arecibo Medical Plaza, Puerto Rico. Medicina metabólica, estética y wellness con enfoque clínico.",
  },
};

export default function SobreNosotrosPage() {
  return (
    <>
      <PageHero
        badge="Sobre Nosotros"
        title="Aurum Nova"
        highlight="Wellness Clinic"
        subtitle="Somos una clínica de bienestar médico premium en Arecibo, Puerto Rico. Nacimos para ofrecer medicina metabólica, estética y wellness con evaluación clínica real, personalización genuina y seguimiento medible."
        ctaText="Agendar evaluación"
        ctaMessage="Hola, quisiera conocer más sobre Aurum Nova y agendar mi evaluación médica inicial."
        secondaryCtaText="Ver programas"
        secondaryCtaHref="/programa-metabolico"
      />

      {/* Mission */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
            Nuestra Misión
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-6">
            Medicina wellness moderna, diseñada alrededor de ti
          </h2>
          <p className="text-base text-[#6B6B6B] leading-relaxed mb-5">
            En Aurum Nova creemos que el bienestar médico debe ser accesible, honesto y realmente
            personalizado. No somos un spa de moda ni un vendedor de suplementos — somos un equipo
            clínico que combina evaluación médica, tecnología avanzada y seguimiento continuo para
            ayudarte a alcanzar objetivos de salud reales y medibles.
          </p>
          <p className="text-base text-[#6B6B6B] leading-relaxed">
            Cada programa comienza con una pregunta honesta: ¿eres candidato para esto? Porque
            preferimos decirte que no cuando corresponde, antes que ofrecerte algo que no es
            apropiado para tu perfil. Esa honestidad es parte de lo que nos define.
          </p>
        </div>
      </section>

      <TeamSection />
      <MetodoAurum />

      {/* Location & Contact */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-6">Encuéntranos</h2>
              <div className="space-y-4">
                {[
                  {
                    icon: MapPin,
                    label: "Dirección",
                    value: siteConfig.address,
                  },
                  {
                    icon: Phone,
                    label: "Teléfono / WhatsApp",
                    value: siteConfig.phone,
                    href: `tel:${siteConfig.phone}`,
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: siteConfig.email,
                    href: `mailto:${siteConfig.email}`,
                  },
                  {
                    icon: AtSign,
                    label: "Instagram",
                    value: siteConfig.instagram,
                    href: siteConfig.instagramUrl,
                  },
                  {
                    icon: Clock,
                    label: "Horario",
                    value: "Lunes a Viernes · Horario a confirmar",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-[#C9A84C]" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#9A9A9A] uppercase tracking-wider mb-0.5">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-sm text-[#1A1A1A] hover:text-[#C9A84C] transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm text-[#1A1A1A]">{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-[#FAF8F4] border border-[#E8E4DA] rounded-3xl flex items-center justify-center min-h-[280px]">
              <div className="text-center p-8">
                <MapPin className="w-12 h-12 text-[#C9A84C]/40 mx-auto mb-3" />
                <p className="text-sm font-semibold text-[#6B6B6B]">Mapa interactivo próximamente</p>
                <p className="text-xs text-[#9A9A9A] mt-1">{siteConfig.address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="¿Listo para conocer Aurum Nova?"
        subtitle="Agenda tu evaluación inicial y experimenta nuestro enfoque clínico de primera mano."
        ctaText="Agendar por WhatsApp"
        ctaMessage="Hola, me gustaría agendar mi evaluación médica inicial en Aurum Nova Wellness Clinic."
        variant="dark"
      />
    </>
  );
}
