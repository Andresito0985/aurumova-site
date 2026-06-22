// HomeServicesOverview
// ---------------------------------------------------------------------------
// Services overview grid (#servicios). Communicates the five core service
// lines and routes each to its dedicated page. A section-level WhatsApp CTA
// captures visitors who prefer direct orientation. Static / server-rendered.
//
// Compliance: descriptive, non-promissory copy. Laser uses "reducción
// progresiva" — never "permanente". No guaranteed outcomes.

import Link from "next/link";
import {
  Activity,
  Zap,
  Sparkles,
  Droplet,
  HeartPulse,
  ArrowRight,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import { whatsappLink } from "@/content/site";

type Service = {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
};

const services: Service[] = [
  {
    icon: Activity,
    eyebrow: "Control metabólico",
    title: "Programa de control de peso",
    description:
      "Programa médico mensual supervisado: evaluación clínica, plan personalizado y seguimiento con métricas reales.",
    href: "/programa-metabolico",
  },
  {
    icon: Zap,
    eyebrow: "Tecnología clínica",
    title: "Láser diodo",
    description:
      "Reducción progresiva del vello con tecnología diodo, evaluación por zona y una experiencia clínica privada.",
    href: "/laser-diodo",
  },
  {
    icon: Sparkles,
    eyebrow: "Estética clínica",
    title: "Estética con enfoque clínico",
    description:
      "Tratamientos estéticos guiados por evaluación y orientación profesional, en un entorno clínico premium.",
    href: "/servicios",
  },
  {
    icon: Droplet,
    eyebrow: "Faciales & Hydrafacial",
    title: "Faciales profundos",
    description:
      "Limpieza profunda, hidratación avanzada y protocolos personalizados según tu tipo de piel.",
    href: "/faciales-hydrafacial",
  },
  {
    icon: HeartPulse,
    eyebrow: "Terapias complementarias",
    title: "Sueroterapia y apoyo wellness",
    description:
      "Sueroterapia, nutrición y apoyo wellness disponibles cuando el médico lo considera apropiado.",
    href: "/servicios",
  },
];

const SERVICES_WHATSAPP_MESSAGE =
  "Hola, quisiera orientación sobre los servicios de Aurum Nova Wellness Clinic y cuál podría aplicar a mi caso.";

export default function HomeServicesOverview() {
  return (
    <section id="servicios" className="section-padding scroll-mt-24 bg-[#FAF8F4]">
      <div className="container-max">
        <div className="mb-12 max-w-2xl sm:mb-14">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
            Servicios
          </span>
          <h2 className="mb-4 text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-[#1A1A1A] sm:text-4xl lg:text-5xl">
            Todo tu bienestar, en un{" "}
            <span className="text-[#A8872E]">solo lugar clínico</span>
          </h2>
          <p className="text-base leading-relaxed text-[#6B6B6B] sm:text-lg">
            Medicina metabólica, tecnología estética y servicios boutique — cada
            uno guiado por evaluación profesional y seguimiento estructurado.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group flex h-full flex-col rounded-3xl bg-white p-6 ring-1 ring-[#E8E4DA] transition-all duration-300 hover:-translate-y-0.5 hover:ring-[#C9A84C]/35 hover:shadow-[0_24px_60px_-30px_rgba(0,0,0,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2"
              >
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#C9A84C]/10 ring-1 ring-[#C9A84C]/20">
                  <Icon className="h-5 w-5 text-[#C9A84C]" aria-hidden="true" />
                </span>
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#A8872E]">
                  {service.eyebrow}
                </p>
                <h3 className="mb-3 text-xl font-semibold leading-snug text-[#1A1A1A]">
                  {service.title}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-[#6B6B6B]">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#A8872E] transition-colors group-hover:text-[#C9A84C]">
                  Ver más
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}

          {/* Direct-orientation CTA card — captures WhatsApp leads in-grid. */}
          <div className="flex h-full flex-col justify-between rounded-3xl bg-[#1A1A1A] p-6 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.5)]">
            <div>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#E2C97E]">
                ¿No sabes por dónde empezar?
              </p>
              <h3 className="mb-3 text-xl font-semibold leading-snug text-white">
                Te orientamos según tu objetivo
              </h3>
              <p className="text-sm leading-relaxed text-[#BDB7AA]">
                Escríbenos por WhatsApp y el equipo te ayuda a identificar el
                servicio o evaluación que mejor aplica a tu caso.
              </p>
            </div>
            <a
              href={whatsappLink(SERVICES_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A84C] px-6 py-3 text-sm font-semibold text-[#1A1A1A] transition-colors hover:bg-[#A8872E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1A1A]"
            >
              <MessageCircle className="h-4 w-4" />
              Orientación por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
