import Image from "next/image";
import {
  Activity,
  CalendarCheck,
  CheckCircle2,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  ThermometerSnowflake,
} from "lucide-react";
import { laserVisualByPlacement, type LaserVisual } from "@/content/laser-visuals";

function VisualFallback({ label }: { label: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[#1A1A1A]">
      <div className="mx-6 rounded-2xl border border-[#C9A84C]/25 bg-white/5 p-5 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C9A84C]">
          Aurum Nova
        </p>
        <p className="mt-2 text-sm text-[#E8E4DA]">{label}</p>
      </div>
    </div>
  );
}

function VisualFrame({
  visual,
  className = "",
  sizes,
  label,
}: {
  visual?: LaserVisual;
  className?: string;
  sizes: string;
  label: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-[#E8E4DA] bg-[#1A1A1A] shadow-sm ${className}`}
    >
      {visual ? (
        <Image
          src={visual.src}
          alt={visual.alt}
          fill
          sizes={sizes}
          className="object-cover"
          style={{ objectPosition: visual.objectPosition }}
        />
      ) : (
        <VisualFallback label={label} />
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
    </div>
  );
}

const technologyCards = [
  {
    icon: Activity,
    title: "Longitudes de onda",
    copy: "La tecnología diodo permite orientar la sesión según características del vello y zona.",
  },
  {
    icon: ThermometerSnowflake,
    title: "Enfriamiento",
    copy: "El apoyo de enfriamiento por contacto ayuda a organizar una experiencia más cómoda.",
  },
  {
    icon: SlidersHorizontal,
    title: "Personalización",
    copy: "Los parámetros se conversan y ajustan según zona, tolerancia y evaluación previa.",
  },
  {
    icon: ShieldCheck,
    title: "Piel y vello",
    copy: "Revisamos tipo de piel, densidad, sensibilidad y exposición solar antes de comenzar.",
  },
  {
    icon: Sparkles,
    title: "Proceso progresivo",
    copy: "La reducción del vello ocurre por sesiones. Los resultados pueden variar.",
  },
  {
    icon: CalendarCheck,
    title: "Seguimiento clínico",
    copy: "El equipo orienta frecuencia, mantenimiento y próximos pasos según la respuesta.",
  },
];

export default function LaserVisualStory() {
  const technologyVisual = laserVisualByPlacement.technology;
  const handpieceVisual = laserVisualByPlacement.handpiece;
  const experienceVisual = laserVisualByPlacement.experience;

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.75fr)] lg:items-center">
          <div>
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
              Tecnología, seguridad y personalización
            </span>
            <h2 className="mb-5 max-w-2xl text-2xl font-semibold leading-tight text-[#1A1A1A] sm:text-3xl">
              Tecnología láser diodo en un ambiente clínico premium
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-[#6B6B6B] sm:text-base">
              Cada sesión se orienta según zona, densidad del vello, tipo de piel y tolerancia. El
              objetivo es ofrecer una experiencia precisa, cómoda y clínicamente responsable.
            </p>
          </div>

          <VisualFrame
            visual={technologyVisual}
            label="Tecnología láser diodo"
            className="aspect-[4/3] min-h-[260px]"
            sizes="(max-width: 1024px) 100vw, 42vw"
          />
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {technologyCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="rounded-2xl border border-[#E8E4DA] bg-[#FAF8F4] p-4 shadow-sm sm:p-5"
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[#C9A84C]/12 sm:mb-4 sm:h-10 sm:w-10">
                  <Icon className="h-[18px] w-[18px] text-[#C9A84C] sm:h-5 sm:w-5" />
                </div>
                <h3 className="text-sm font-semibold text-[#1A1A1A]">{card.title}</h3>
                <p className="mt-2 text-[11px] leading-relaxed text-[#6B6B6B] sm:text-xs">
                  {card.copy}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <article className="overflow-hidden rounded-2xl border border-[#E8E4DA] bg-white shadow-sm">
            <VisualFrame
              visual={handpieceVisual}
              label="Handpiece con enfriamiento"
              className="aspect-[16/10] rounded-none border-0"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="p-5 sm:p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#C9A84C]/12">
                <ThermometerSnowflake className="h-5 w-5 text-[#C9A84C]" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[#1A1A1A]">
                Punta de contacto y enfriamiento para mayor comodidad
              </h3>
              <p className="text-sm leading-relaxed text-[#6B6B6B]">
                El handpiece permite trabajar por zonas con contacto controlado y apoyo de
                enfriamiento, ayudando a que la sesión sea más cómoda y organizada.
              </p>
            </div>
          </article>

          <article className="overflow-hidden rounded-2xl border border-[#E8E4DA] bg-white shadow-sm">
            <VisualFrame
              visual={experienceVisual}
              label="Experiencia clínica privada"
              className="aspect-[16/10] rounded-none border-0"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="p-5 sm:p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#C9A84C]/12">
                <Sparkles className="h-5 w-5 text-[#C9A84C]" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[#1A1A1A]">
                Una experiencia privada, limpia y guiada
              </h3>
              <p className="text-sm leading-relaxed text-[#6B6B6B]">
                Realizamos las sesiones en un ambiente clínico y privado, con orientación antes de
                comenzar y seguimiento según el área tratada.
              </p>
            </div>
          </article>
        </div>

        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-[#E8E4DA] bg-white p-4">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A84C]" />
          <p className="text-xs leading-relaxed text-[#6B6B6B]">
            La configuración y el plan se discuten durante la evaluación. La reducción del vello es
            progresiva y los resultados pueden variar según características individuales y zona
            tratada.
          </p>
        </div>
      </div>
    </section>
  );
}
