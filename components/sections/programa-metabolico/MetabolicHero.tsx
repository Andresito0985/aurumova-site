// MetabolicHero
// ---------------------------------------------------------------------------
// Refactored to the Apple-inspired visual system.
// Composes <ProductHeroBlock> (dark) with a <DeviceDashboardMockup> visual.
//
// The core narrative — "No es solo bajar peso. Es medir, interpretar,
// ajustar y acompañar." — sits as the subhead. The primary CTA routes to
// the quiz; WhatsApp is the secondary CTA. Compliance footnote preserved.
//
// FUTURE WIRING — official visual assets
// ---------------------------------------------------------------------------
// The dashboard mockup may be supplemented (or replaced for variants) by
// real Aurum Nova photography. Candidate registry entries:
//   officialVisualAssets.services.programaMetabolico.consultation
//     → editorial consultation-room photo (alternate hero visual)
//   officialVisualAssets.services.programaMetabolico.dashboard
//     → official anonymized dashboard screenshot
// Registry: content/official-visual-assets.ts
// Folder:   /public/images/official/services/programa-metabolico/

import Link from "next/link";
import { ChevronLeft, ClipboardList, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/content/site";
import ProductHeroBlock from "@/components/visual/ProductHeroBlock";
import DeviceDashboardMockup from "@/components/visual/DeviceDashboardMockup";
import MediaSlot from "@/components/visual/MediaSlot";
import { aurumMediaAssets } from "@/content/aurum-media-assets";

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
        // Consultation / follow-up photo when provided; otherwise the
        // illustrative tracking dashboard (no downgrade, no layout shift).
        aurumMediaAssets.metabolic.consult ? (
          <MediaSlot
            asset={aurumMediaAssets.metabolic.consult}
            label="Consulta y seguimiento metabólico"
            ratio="portrait"
            variant="dark"
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
          />
        ) : (
          <DeviceDashboardMockup
            eyebrow="Panel de seguimiento"
            title="Programa Metabólico Integral"
            subtitle="Cada sesión actualiza tus métricas"
            chips={programChips}
            metrics={dashboardMetrics}
            footerNote="Vista ilustrativa. Los datos reales se registran en cada sesión clínica."
          />
        )
      }
    />
  );
}
