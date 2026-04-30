import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FAQSection from "@/components/sections/FAQSection";

const homeFaqs = [
  {
    question: "¿El quiz determina si soy candidato al programa?",
    answer:
      "No. El quiz es orientativo y educativo. La candidatura final al Programa Metabólico se confirma únicamente mediante evaluación clínica con el proveedor, considerando historial, medicamentos y objetivos.",
  },
  {
    question: "¿Qué incluye el Programa Metabólico Integral?",
    answer:
      "Evaluación inicial, plan individualizado, seguimiento, apoyo nutricional, monitoreo de tolerancia y, si el proveedor lo considera clínicamente apropiado, opciones terapéuticas adicionales. El plan se ajusta según tu progreso.",
  },
  {
    question: "¿Cuánto tarda en verse progreso?",
    answer:
      "Los resultados pueden variar. En general, las primeras semanas se enfocan en adaptación y educación; los cambios más visibles tienden a aparecer con consistencia entre el segundo y tercer mes. El proveedor establece expectativas realistas en tu evaluación.",
  },
  {
    question: "¿Tengo que hacer el quiz para escribir por WhatsApp?",
    answer:
      "No. Puedes escribirnos directamente y el equipo te orienta según tu objetivo. El quiz simplemente te ayuda a organizar tu información antes de hablar con nosotros.",
  },
  {
    question: "¿Aurum Nova ofrece otros servicios además del programa metabólico?",
    answer:
      "Sí. Ofrecemos láser diodo, sueroterapia, inyectables wellness, nutrición, coaching, skin glow, hair support y wellness para hombre y mujer. Todos requieren evaluación según corresponda.",
  },
];

export default function HomeFAQPreview() {
  return (
    <>
      <FAQSection
        faqs={homeFaqs}
        title="Preguntas frecuentes"
        subtitle="Respuestas claras a lo que más se preguntan antes de empezar."
        variant="light"
      />
      <div className="bg-[#FAF8F4] pb-16 px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="container-max flex justify-center">
          <Link
            href="/preguntas-frecuentes"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#C9A84C] hover:text-[#A8872E] transition-colors"
          >
            Ver todas las preguntas frecuentes
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </>
  );
}
