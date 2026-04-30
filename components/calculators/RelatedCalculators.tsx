import Link from "next/link";
import { ArrowRight, Calculator, Droplets, Flame, Target } from "lucide-react";

const relatedCalculators = [
  {
    title: "IMC",
    description: "Índice de masa corporal como punto de partida orientativo.",
    href: "/calculadoras/imc",
    icon: Calculator,
  },
  {
    title: "Meta de peso",
    description: "Ritmo semanal aproximado según meta y plazo.",
    href: "/calculadoras/meta-de-peso",
    icon: Target,
  },
  {
    title: "Déficit calórico",
    description: "Estimación educativa de mantenimiento y déficit moderado.",
    href: "/calculadoras/deficit-calorico",
    icon: Flame,
  },
  {
    title: "Hidratación",
    description: "Rango general de líquidos según peso, actividad y sudoración.",
    href: "/calculadoras/hidratacion-electrolitos",
    icon: Droplets,
  },
];

interface RelatedCalculatorsProps {
  currentPath?: string;
}

export default function RelatedCalculators({ currentPath }: RelatedCalculatorsProps) {
  const links = relatedCalculators.filter((calculator) => calculator.href !== currentPath);

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
              También puedes explorar
            </span>
            <h2 className="mt-3 text-2xl font-semibold text-[#1A1A1A] sm:text-3xl">
              Calculadoras relacionadas
            </h2>
          </div>
          <Link
            href="/calculadoras"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#C9A84C] transition-colors hover:text-[#A8872E]"
          >
            Ver todas
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {links.map((calculator) => {
            const Icon = calculator.icon;
            return (
              <Link
                key={calculator.href}
                href={calculator.href}
                className="group flex h-full flex-col rounded-2xl border border-[#E8E4DA] bg-[#FAF8F4] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C9A84C]/50 hover:bg-white hover:shadow-lg hover:shadow-[#1A1A1A]/5"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#C9A84C]/10">
                    <Icon className="h-5 w-5 text-[#C9A84C]" />
                  </div>
                  <ArrowRight className="h-4 w-4 text-[#C9A84C] opacity-45 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100" />
                </div>
                <h3 className="text-base font-semibold text-[#1A1A1A]">{calculator.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#6B6B6B]">
                  {calculator.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
