import Link from "next/link";
import { ArrowRight, Calculator, Droplets, Flame, ShieldCheck, Target } from "lucide-react";

const tools = [
  {
    title: "IMC",
    description: "Conoce tu categoría inicial de forma orientativa.",
    href: "/calculadoras/imc",
    icon: Calculator,
  },
  {
    title: "Meta de peso",
    description: "Evalúa el ritmo semanal que implicaría tu meta.",
    href: "/calculadoras/meta-de-peso",
    icon: Target,
  },
  {
    title: "Déficit calórico",
    description: "Estima mantenimiento y déficit moderado educativo.",
    href: "/calculadoras/deficit-calorico",
    icon: Flame,
  },
  {
    title: "Hidratación",
    description: "Revisa un rango general según peso y actividad.",
    href: "/calculadoras/hidratacion-electrolitos",
    icon: Droplets,
  },
];

export default function MetabolicCalculatorLinks() {
  return (
    <section className="bg-[#FAF8F4] px-4 py-12 sm:px-6 lg:px-8">
      <div className="container-max">
        <div className="mb-7 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
              Herramientas educativas
            </span>
            <h2 className="mt-3 text-2xl font-semibold text-[#1A1A1A] sm:text-3xl">
              Explora tus números antes de la evaluación
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-[#6B6B6B]">
            Si quieres contexto adicional antes de completar o revisar el quiz, estas calculadoras
            pueden ayudarte a ordenar preguntas para tu evaluación clínica.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link
                key={tool.href}
                href={tool.href}
                className="group flex h-full flex-col rounded-2xl border border-[#E8E4DA] bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C9A84C]/50 hover:shadow-lg hover:shadow-[#1A1A1A]/5"
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#C9A84C]/10">
                    <Icon className="h-4 w-4 text-[#C9A84C]" />
                  </div>
                  <ArrowRight className="h-4 w-4 text-[#C9A84C] opacity-40 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100" />
                </div>
                <h3 className="text-sm font-semibold text-[#1A1A1A]">{tool.title}</h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-[#6B6B6B]">
                  {tool.description}
                </p>
              </Link>
            );
          })}
        </div>

        <div className="mt-5 flex items-start gap-2.5 text-xs leading-relaxed text-[#6B6B6B]">
          <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#C9A84C]" />
          <p>
            Las calculadoras son educativas y no sustituyen evaluación clínica. No diagnostican,
            no prescriben y los resultados pueden variar.
          </p>
        </div>
      </div>
    </section>
  );
}
