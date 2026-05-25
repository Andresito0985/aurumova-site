// MetabolicHero
// ---------------------------------------------------------------------------
// Refactored to the Apple-inspired visual system.
// Composes <ProductHeroBlock> (dark) with a <DeviceDashboardMockup> visual.
//
// The core narrative — "No es solo bajar peso. Es medir, interpretar,
// ajustar y acompañar." — sits as the subhead. The primary CTA routes to
// the quiz; WhatsApp is the secondary CTA. Compliance footnote preserved.

import Link from "next/link";
import { ChevronLeft, ClipboardList, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/content/site";
import ProductHeroBlock from "@/components/visual/ProductHeroBlock";
import DeviceDashboardMockup from "@/components/visual/DeviceDashboardMockup";

const CTA_WHATSAPP_MESSAGE =
  "Hola, me interesa comenzar una evaluación para discutir el Programa Metabólico de Aurum Nova. ¿Cuáles son los próximos pasos?";

// Process chips — phases of the program, not patient values. The fills are
// intentionally omitted so the dashboard never reads as fake patient data.
const programChips = [
  { name: "Evaluación clínica", caption: "Inicio" },
  { name: "Plan personalizado", caption: "Médico" },
  { name: "Seguimiento", caption: "Semanal" },
  { name: "Revisión", caption: "Mensual" },
];

// Placeholder metrics — every value is "—" so the surface stays illustrative.
const dashboardMetrics = [
  { label: "Peso", value: "—", unit: "kg", sub: "Cada sesión" },
  { label: "IMC", value: "—", unit: "", sub: "Revisión clínica" },
  { label: "Cintura", value: "—", unit: "cm", sub: "Perímetro guía" },
  { label: "Adherencia", value: "—", unit: "%", sub: "Cumplimiento" },
];

export default function MetabolicHero() {
  return (
    <ProductHeroBlock
      variant="dark"
      eyebrow="Programa Metabólico Integral"
      headline="Manejo del peso con"
      highlight="supervisión clínica"
      subhead="No es solo bajar peso. Es medir, interpretar, ajustar y acompañar."
      supportingText="Evaluación clínica antes de cualquier protocolo. Seguimiento semanal con métricas reales. El médico determina elegibilidad."
      primaryCta={{
        label: "Hacer quiz metabólico",
        href: "/quiz-metabolico",
        icon: <ClipboardList className="h-4 w-4" />,
      }}
      secondaryCta={{
        label: "Solicitar evaluación",
        href: whatsappLink(CTA_WHATSAPP_MESSAGE),
        external: true,
        icon: <MessageCircle className="h-4 w-4" />,
      }}
      footnote="Requiere evaluación médica individual. No todos los pacientes son candidatos. El médico determina elegibilidad. Esta página es educativa y no sustituye una evaluación clínica."
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
        <DeviceDashboardMockup
          eyebrow="Panel de seguimiento"
          title="Programa Metabólico Integral"
          subtitle="Cada sesión actualiza tus métricas"
          chips={programChips}
          metrics={dashboardMetrics}
          footerNote="Vista ilustrativa. Los datos reales se registran en cada sesión clínica."
        />
      }
    />
  );
}
