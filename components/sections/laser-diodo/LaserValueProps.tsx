import { CalendarCheck, ShieldCheck, SlidersHorizontal, Sparkles } from "lucide-react";

const differentiators = [
  {
    icon: CalendarCheck,
    title: "Evaluación por zona",
    copy: "Revisamos área, densidad del vello y sensibilidad antes de orientar el plan.",
  },
  {
    icon: SlidersHorizontal,
    title: "Plan personalizado",
    copy: "La frecuencia y combinación de zonas se conversa según tu piel, vello y objetivo.",
  },
  {
    icon: ShieldCheck,
    title: "Ambiente clínico",
    copy: "Sesiones privadas, organizadas y guiadas por el equipo de Aurum Nova.",
  },
  {
    icon: Sparkles,
    title: "Progreso realista",
    copy: "Buscamos reducción progresiva del vello. Los resultados pueden variar.",
  },
];

export default function LaserValueProps() {
  return (
    <section className="bg-[#FAF8F4] px-4 py-10 sm:px-6 lg:px-8">
      <div className="container-max">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-2xl border border-[#E8E4DA] bg-white p-5 shadow-sm"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#C9A84C]/12">
                  <Icon className="h-5 w-5 text-[#C9A84C]" />
                </div>
                <h2 className="text-sm font-semibold text-[#1A1A1A]">{item.title}</h2>
                <p className="mt-2 text-xs leading-relaxed text-[#6B6B6B]">{item.copy}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
