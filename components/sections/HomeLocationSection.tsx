// HomeLocationSection
// ---------------------------------------------------------------------------
// Location / Google Maps section. Composes the design-system
// <GoogleMapsLocationCard> with the clinic's official contact data (sourced
// from content/site.ts) and a WhatsApp / call / maps action set.
//
// All location + phone data comes from siteConfig — single source of truth.

import { MessageCircle, Phone, MapPin } from "lucide-react";
import { siteConfig, whatsappLink, callLink } from "@/content/site";
import GoogleMapsLocationCard from "@/components/ui/GoogleMapsLocationCard";
import MediaSlot from "@/components/visual/MediaSlot";
import { aurumMediaAssets } from "@/content/aurum-media-assets";

const LOCATION_WHATSAPP_MESSAGE =
  "Hola, quiero coordinar una visita o evaluación en Aurum Nova Wellness Clinic en Arecibo.";

export default function HomeLocationSection() {
  return (
    <section className="section-padding bg-[#FAF8F4]">
      <div className="container-max">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* Real clinic / Infinity Health Shared Spaces visual when provided;
              otherwise the stylized Google Maps location card (which also
              links out to Maps). No layout shift either way. */}
          {aurumMediaAssets.clinic.room ? (
            <MediaSlot
              asset={aurumMediaAssets.clinic.room}
              label="Aurum Nova · Infinity Health Shared Spaces, Arecibo"
              ratio="landscape"
              variant="cream"
              sizes="(min-width: 1024px) 52vw, 100vw"
            />
          ) : (
            <GoogleMapsLocationCard />
          )}

          <div>
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
              Encuéntranos
            </span>
            <h2 className="mb-4 text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-[#1A1A1A] sm:text-4xl">
              En el corazón de <span className="text-[#A8872E]">Arecibo</span>
            </h2>
            <p className="mb-6 text-base leading-relaxed text-[#6B6B6B]">
              Un entorno clínico privado y premium, pensado para evaluaciones
              tranquilas, sesiones cuidadas y seguimiento continuo.
            </p>

            <div className="mb-7 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A84C]" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-[#3D3D3D]">
                  <span className="font-semibold text-[#1A1A1A]">
                    {siteConfig.name}
                  </span>
                  <br />
                  16 Calle Ana Lens Susoni
                  <br />
                  Infinity Health Shared Spaces, Arecibo, PR
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A84C]" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-[#3D3D3D]">
                  WhatsApp y llamadas:{" "}
                  <span className="font-semibold text-[#1A1A1A]">
                    {siteConfig.callDisplay}
                  </span>
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={whatsappLink(LOCATION_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#C9A84C] px-5 py-3 text-sm font-semibold text-[#1A1A1A] transition-colors hover:bg-[#A8872E]"
              >
                <MessageCircle className="h-4 w-4" />
                Coordinar por WhatsApp
              </a>
              <a
                href={callLink()}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#E8E4DA] px-5 py-3 text-sm font-semibold text-[#1A1A1A] transition-colors hover:border-[#C9A84C] hover:text-[#A8872E]"
              >
                <Phone className="h-4 w-4" />
                Llamar
              </a>
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#E8E4DA] px-5 py-3 text-sm font-semibold text-[#1A1A1A] transition-colors hover:border-[#C9A84C] hover:text-[#A8872E]"
              >
                <MapPin className="h-4 w-4" />
                Ver ubicación
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
