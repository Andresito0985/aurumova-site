import type { Metadata } from "next";
import Link from "next/link";
// /sobre-nosotros — Apple-inspired Aurum Nova visual system.
//
// Photo slots are now driven by the centralized official-visual-assets
// registry. To activate any image:
//   1. Drop the approved file into /public/images/official/clinic/.
//   2. Set the matching `null` in content/official-visual-assets.ts.
//   3. <OfficialImageSlot> renders the photo automatically.

import { ChevronLeft, ShieldCheck } from "lucide-react";
import CTABanner from "@/components/ui/CTABanner";
import GoogleMapsLocationCard from "@/components/ui/GoogleMapsLocationCard";
import ProductHeroBlock from "@/components/visual/ProductHeroBlock";
import OfficialImageSlot from "@/components/visual/OfficialImageSlot";
import TeamSection from "@/components/sections/TeamSection";
import MetodoAurum from "@/components/sections/MetodoAurum";
import { officialVisualAssets } from "@/content/official-visual-assets";

export const metadata: Metadata = {
  title: "Sobre Aurum Nova Wellness Clinic | Arecibo, Puerto Rico",
  description:
    "Conoce Aurum Nova Wellness Clinic: clínica premium de bienestar médico en Arecibo, Puerto Rico. Medicina metabólica, estética y wellness con enfoque clínico.",

  alternates: { canonical: "https://aurumnovawellnessclinic.com/sobre-nosotros" },
  openGraph: {
    title: "Sobre Aurum Nova Wellness Clinic | Arecibo, Puerto Rico",
    description: "Conoce Aurum Nova Wellness Clinic: clínica premium de bienestar médico en Arecibo, Puerto Rico. Medicina metabólica, estética y wellness con enfoque clínico.",
    url: "https://aurumnovawellnessclinic.com/sobre-nosotros",
    siteName: "Aurum Nova Wellness Clinic",
    locale: "es_PR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre Aurum Nova Wellness Clinic | Arecibo, Puerto Rico",
    description: "Conoce Aurum Nova Wellness Clinic: clínica premium de bienestar médico en Arecibo, Puerto Rico. Medicina metabólica, estética y wellness con enfoque clínico.",
  },
};

// Trust pillars — compliance-safe one-line statements. Rendered as a slim
// editorial strip near the bottom of the page. No bordered tile-card forest.
const trustPoints = [
  "Cada plan depende de evaluación clínica profesional.",
  "No todos los pacientes cualifican para todos los servicios.",
  "La información del website es educativa, no reemplaza una evaluación médica.",
  "Los resultados pueden variar según historial, adherencia y respuesta individual.",
];

export default function SobreNosotrosPage() {
  return (
    <>
      {/* 1 — Hero (cream ProductHeroBlock).
              Hero visual slot → officialVisualAssets.clinic.interior.
              Renders an editorial cream placeholder until the file at
              /public/images/official/clinic/<filename>.jpg exists. */}
      <ProductHeroBlock
        variant="cream"
        eyebrow="Sobre nosotros"
        headline="Aurum Nova"
        highlight="Wellness Clinic"
        subhead="Una clínica de wellness médico en Arecibo enfocada en evaluación, personalización y seguimiento clínico responsable."
        supportingText="Combinamos programas metabólicos, tecnología estética y servicios wellness con una experiencia privada, moderna y orientada por evaluación profesional."
        primaryCta={{
          label: "Agendar evaluación",
          href: "/agendar-evaluacion",
        }}
        secondaryCta={{
          label: "Ver servicios",
          href: "/servicios",
        }}
        footnote="La información de esta página es educativa. Cada servicio puede requerir evaluación clínica. Los resultados pueden variar."
        topSlot={
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-[#9A9A9A] hover:text-[#C9A84C] transition-colors"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
            Inicio
          </Link>
        }
        visual={
          <OfficialImageSlot
            asset={officialVisualAssets.clinic.interior}
            label="Infinity Health Shared Spaces · Arecibo"
            ratio="portrait"
            variant="cream"
            priority
            className="shadow-[0_30px_80px_-30px_rgba(0,0,0,0.18)]"
          />
        }
      />

      {/* 2 — Mission (centered editorial statement, single message) */}
      <section className="section-padding bg-white">
        <div className="container-max mx-auto max-w-3xl text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
            Nuestra misión
          </span>
          <h2 className="mb-6 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[-0.02em] leading-[1.1] text-[#1A1A1A]">
            Medicina wellness moderna, diseñada{" "}
            <span className="text-[#A8872E]">alrededor de ti</span>
          </h2>
          <p className="mb-5 text-base sm:text-lg leading-relaxed text-[#6B6B6B]">
            En Aurum Nova creemos que el bienestar médico debe ser accesible,
            honesto y realmente personalizado. No somos un spa de moda ni un
            vendedor de suplementos — somos un equipo clínico que combina
            evaluación médica, tecnología avanzada y seguimiento continuo
            para ayudarte a alcanzar objetivos de salud reales y medibles.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-[#6B6B6B]">
            Cada programa comienza con una pregunta honesta:{" "}
            <span className="font-semibold text-[#1A1A1A]">
              ¿eres candidato para esto?
            </span>{" "}
            Porque preferimos decirte que no cuando corresponde, antes que
            ofrecerte algo que no es apropiado para tu perfil. Esa honestidad
            es parte de lo que nos define.
          </p>
        </div>
      </section>

      {/* 3 — TeamSection (photo-ready via centralized registry) */}
      <TeamSection />

      {/* 4 — MetodoAurum (vertical narrative timeline) */}
      <MetodoAurum />

      {/* 5 — Location section.
              GoogleMapsLocationCard + clinic-exterior slot driven by
              officialVisualAssets.clinic.exterior. */}
      <section className="section-padding bg-[#FAF8F4]">
        <div className="container-max">
          <div className="mb-10 max-w-2xl sm:mb-12">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
              Encuéntranos
            </span>
            <h2 className="mb-4 text-3xl sm:text-4xl font-semibold tracking-[-0.02em] leading-[1.05] text-[#1A1A1A]">
              Infinity Health{" "}
              <span className="text-[#A8872E]">Shared Spaces</span>
            </h2>
            <p className="text-base leading-relaxed text-[#6B6B6B]">
              Una sala clínica privada en Arecibo, Puerto Rico — pensada para
              evaluación tranquila, sesiones cuidadas y seguimiento clínico
              continuo.
            </p>
          </div>

          <div className="grid items-start gap-5 lg:grid-cols-2 lg:gap-6">
            <GoogleMapsLocationCard />
            <OfficialImageSlot
              asset={officialVisualAssets.clinic.exterior}
              label="Fachada de la clínica"
              ratio="landscape"
              variant="cream"
            />
          </div>
        </div>
      </section>

      {/* 6 — Trust strip — slim editorial line, compliance language */}
      <section className="px-4 py-12 sm:px-6 sm:py-14 lg:px-8 bg-white">
        <div className="container-max mx-auto max-w-4xl rounded-3xl border border-[#E8E4DA] bg-[#FAF8F4] p-6 sm:p-7">
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#C9A84C]/10 ring-1 ring-[#C9A84C]/20">
              <ShieldCheck className="h-4 w-4 text-[#C9A84C]" />
            </span>
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#A8872E]">
              Compromiso clínico
            </p>
          </div>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {trustPoints.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 text-sm leading-relaxed text-[#3D3D3D]"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A84C]"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7 — Final CTA */}
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
