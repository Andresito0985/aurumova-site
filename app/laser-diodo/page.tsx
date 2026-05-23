import type { Metadata } from "next";
import LaserHero from "@/components/sections/laser-diodo/LaserHero";
import LaserTechnologyShowcase from "@/components/sections/laser-diodo/LaserTechnologyShowcase";
import DiodeTechnologyComparison from "@/components/sections/laser-diodo/DiodeTechnologyComparison";
import LaserCoolingComfort from "@/components/sections/laser-diodo/LaserCoolingComfort";
import LaserPackages from "@/components/sections/laser-diodo/LaserPackages";
import LaserZones from "@/components/sections/laser-diodo/LaserZones";
import LaserResultsSection from "@/components/sections/laser-diodo/LaserResultsSection";
import LaserVisualStory from "@/components/sections/laser-diodo/LaserVisualStory";
import LaserPrepAftercare from "@/components/sections/laser-diodo/LaserPrepAftercare";
import FAQSection from "@/components/sections/FAQSection";
import CTABanner from "@/components/ui/CTABanner";

export const metadata: Metadata = {
  title: "Láser Diodo High-Tech | Aurum Nova Wellness Clinic",
  description:
    "Depilación láser avanzada con tecnología diodo para rostro y cuerpo. Planes personalizados por zona, evaluación individualizada y experiencia clínica premium en Arecibo, Puerto Rico.",
  keywords: [
    "láser diodo", "depilación láser", "láser diodo Puerto Rico", "láser Arecibo",
    "reducción de vello", "láser high-tech", "bikini láser", "piernas láser",
    "axilas láser", "paquetes láser Puerto Rico",
  ],

  alternates: { canonical: "https://aurumnovawellnessclinic.com/laser-diodo" },
  openGraph: {
    title: "Láser Diodo High-Tech | Aurum Nova Wellness Clinic",
    description: "Depilación láser avanzada con tecnología diodo para rostro y cuerpo. Planes personalizados por zona, evaluación individualizada y experiencia clínica premium en Arecibo, Puerto Rico.",
    url: "https://aurumnovawellnessclinic.com/laser-diodo",
    siteName: "Aurum Nova Wellness Clinic",
    locale: "es_PR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Láser Diodo High-Tech | Aurum Nova Wellness Clinic",
    description: "Depilación láser avanzada con tecnología diodo para rostro y cuerpo. Planes personalizados por zona, evaluación individualizada y experiencia clínica premium en Arecibo, Puerto Rico.",
  },
};

const faqs = [
  {
    question: "¿Cuántas sesiones necesito?",
    answer:
      "El número de sesiones varía según la zona, el tipo de piel, el color y grosor del vello, y tu respuesta individual al tratamiento. El proveedor orienta sobre el plan recomendado durante la evaluación inicial. No hay un número fijo estándar para todas las personas.",
  },
  {
    question: "¿Los resultados son permanentes?",
    answer:
      "El láser diodo busca reducir progresivamente el vello no deseado sobre una serie de sesiones. Los resultados varían entre personas y no se garantiza eliminación permanente. La mayoría de las personas experimenta reducción significativa en la densidad y grosor del vello. Algunas zonas pueden requerir sesiones de mantenimiento.",
  },
  {
    question: "¿Duele?",
    answer:
      "La experiencia varía según la zona, el tipo de piel y la sensibilidad individual. El proveedor orienta sobre qué esperar en cada sesión y cómo minimizar la incomodidad. La tecnología diodo está diseñada para ofrecer una experiencia cómoda, aunque las sensaciones varían por persona.",
  },
  {
    question: "¿Puedo hacerme láser si estoy bronceado?",
    answer:
      "La exposición solar reciente puede afectar la seguridad y efectividad del tratamiento. Es recomendable evitar el bronceado en la zona a tratar antes de las sesiones. Si tienes bronceado reciente o quemadura solar, informa al equipo durante la evaluación para determinar el mejor momento para comenzar.",
  },
  {
    question: "¿Qué zonas trabajan?",
    answer:
      "Trabajamos múltiples zonas de rostro y cuerpo: bigote, axilas, brazos, pecho, bikini, Brazilian, full Brazilian, media pierna, piernas completas y espalda. También ofrecemos planes combinados para varias zonas. Contacta para consultar sobre zonas adicionales no listadas.",
  },
  {
    question: "¿Hay paquetes?",
    answer:
      "Sí. Ofrecemos paquetes por zona, planes combinados de múltiples zonas, plan full body y plan de mantenimiento. Los paquetes ofrecen mejor valor por sesión que las sesiones individuales. El plan recomendado y sus precios se determinan durante la evaluación según tu caso específico.",
  },
  {
    question: "¿Puedo combinarlo con el Programa Metabólico Integral?",
    answer:
      "Sí, muchos de nuestros pacientes combinan el Programa Metabólico Integral con el láser diodo como parte de su plan de bienestar integral. Cada servicio tiene su propia evaluación y plan independiente. El equipo orienta sobre la mejor forma de coordinar ambos programas.",
  },
];

const CTA_MSG =
  "Hola, quiero agendar una evaluación para láser diodo en Aurum Nova. Me interesa conocer planes disponibles según mi zona.";

export default function LaserDiodoPage() {
  return (
    <>
      {/* Technology-first narrative: establish what the equipment is and
          why diode before showing packages, zones, and results. */}
      <LaserHero />
      <LaserTechnologyShowcase />
      <DiodeTechnologyComparison />
      <LaserCoolingComfort />
      <LaserPackages />
      <LaserZones />
      <LaserResultsSection />
      <LaserVisualStory />
      <LaserPrepAftercare />
      <FAQSection
        faqs={faqs}
        title="Preguntas frecuentes sobre láser diodo"
        subtitle="Respuestas claras sobre sesiones, resultados, preparación y paquetes."
        variant="dark"
      />
      <CTABanner
        title="Comienza tu proceso láser con una evaluación personalizada"
        subtitle="Nuestro equipo te orienta sobre las zonas ideales, frecuencia recomendada y plan más conveniente según tu tipo de piel, vello y objetivo."
        ctaText="Agendar por WhatsApp"
        ctaMessage={CTA_MSG}
        secondaryHref="#planes-laser"
        secondaryText="Ver planes disponibles"
        variant="dark"
        trackingSource="laser_final_cta"
        disclaimerText="Requiere evaluación por zona. No todos responden igual y los resultados pueden variar."
      />
    </>
  );
}
