import { MoveHorizontal, ShieldCheck } from "lucide-react";
import { laserResults } from "@/content/laser-results";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import { cn } from "@/lib/utils";

const approvedResults = laserResults.filter((result) => result.consentConfirmed === true);

export default function LaserResultsSection() {
  if (approvedResults.length === 0) return null;

  return (
    <section className="section-padding bg-[#FAF8F4]">
      <div className="container-max">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
            Ejemplos visuales
          </span>
          <h2 className="mb-4 text-2xl font-semibold text-[#1A1A1A] sm:text-3xl">
            Resultados visuales con láser diodo
          </h2>
          <p className="text-sm leading-relaxed text-[#6B6B6B] sm:text-base">
            Cada piel, zona y densidad de vello responde de forma distinta. Estas imágenes muestran
            ejemplos reales de progreso y no garantizan resultados individuales.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-12">
          {approvedResults.map((result, index) => (
            <article
              key={result.id}
              className={cn(
                "overflow-hidden rounded-[1.75rem] border border-[#E8E4DA] bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-black/5",
                "xl:col-span-4",
                approvedResults.length === 5 && index === 3 && "xl:col-start-3",
              )}
            >
              <div className="flex items-start justify-between gap-4 p-5 sm:p-6">
                <div>
                  <h3 className="text-base font-semibold text-[#1A1A1A]">{result.zone}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#6B6B6B]">
                    {result.sessions} · {result.timeframe}
                  </p>
                  {result.caption && (
                    <p className="mt-2 max-w-[24rem] text-xs leading-relaxed text-[#7A7268]">
                      {result.caption}
                    </p>
                  )}
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-[#C9A84C]/25 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#A8872E]">
                  <MoveHorizontal className="h-3 w-3" />
                  Comparar
                </span>
              </div>

              <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                <BeforeAfterSlider
                  beforeSrc={result.beforeSrc}
                  afterSrc={result.afterSrc}
                  beforeAlt={`Imagen antes de láser diodo en zona ${result.zone}.`}
                  afterAlt={`Imagen después de láser diodo en zona ${result.zone}.`}
                  ariaLabel={`Control interactivo para comparar antes y después en zona ${result.zone}`}
                  aspectRatio={result.aspectRatio ?? "aspect-[13/12]"}
                  objectPositionBefore={result.objectPositionBefore}
                  objectPositionAfter={result.objectPositionAfter}
                  className="shadow-md shadow-black/10"
                />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-[#E8E4DA] bg-white p-4 sm:p-5">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A84C]" />
          <p className="text-xs leading-relaxed text-[#6B6B6B]">
            Resultados pueden variar. Las imágenes son ejemplos individuales y no garantizan
            resultados iguales. La respuesta depende de zona, tipo de piel, densidad del vello,
            constancia y evaluación clínica.
          </p>
        </div>
      </div>
    </section>
  );
}
