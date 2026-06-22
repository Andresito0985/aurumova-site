// HomeTrustStrip
// ---------------------------------------------------------------------------
// Slim trust / medical-supervision strip rendered directly under the hero.
// Static, server-rendered (no client JS). Communicates the clinic's posture
// in four compliance-safe bullets — no outcome claims, no guarantees.

import { ClipboardList, LineChart, Sparkles, MapPin } from "lucide-react";

const trustItems = [
  { icon: ClipboardList, label: "Evaluación inicial personalizada" },
  { icon: LineChart, label: "Seguimiento clínico estructurado" },
  { icon: Sparkles, label: "Servicios estéticos y metabólicos" },
  { icon: MapPin, label: "Ubicados en Arecibo, PR" },
];

export default function HomeTrustStrip() {
  return (
    <section className="border-y border-[#E8E4DA] bg-white">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-6 sm:py-7">
        <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#A8872E] shrink-0">
            Atención con supervisión médica
          </p>
          <ul className="grid w-full grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2 lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-x-7">
            {trustItems.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="inline-flex items-center gap-2.5 text-sm font-medium text-[#3D3D3D]"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#C9A84C]/10 ring-1 ring-[#C9A84C]/20">
                  <Icon className="h-3.5 w-3.5 text-[#C9A84C]" aria-hidden="true" />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
