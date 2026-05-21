import { MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { callLink, siteConfig, whatsappLink } from "@/content/site";

const LOCK_WHATSAPP_MESSAGE =
  "Hola, quisiera orientación o coordinar una cita con Aurum Nova Wellness Clinic.";

export default function SiteLockScreen() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#111111] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,168,76,0.18),transparent_34%),linear-gradient(135deg,#111111_0%,#1A1A1A_48%,#0D0D0D_100%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      <div className="relative mx-auto w-full max-w-2xl">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/30 backdrop-blur-md sm:p-8 lg:p-10">
          <div className="mb-7 flex items-center justify-between gap-4">
            <div>
              <p className="text-lg font-semibold tracking-wide text-white">
                Aurum Nova Wellness Clinic
              </p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C9A84C]">
                Premium medical wellness
              </p>
            </div>
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#C9A84C]/25 bg-[#C9A84C]/10">
              <ShieldCheck className="h-5 w-5 text-[#C9A84C]" />
            </div>
          </div>

          <div className="mb-8">
            <p className="mb-3 inline-flex rounded-full border border-[#C9A84C]/25 bg-black/25 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A84C]">
              Website en actualización
            </p>
            <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Estamos actualizando nuestra experiencia digital
            </h1>
            <p className="mt-5 text-base leading-relaxed text-[#D8D2C7]">
              Muy pronto podrás explorar nuestros servicios, protocolos y herramientas educativas
              desde una experiencia más clara y completa.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#AFA79A]">
              Para citas u orientación, puedes comunicarte directamente con nuestro equipo.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <a
              href={whatsappLink(LOCK_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#C9A84C] px-5 py-3 text-sm font-semibold text-[#1A1A1A] transition-colors hover:bg-[#A8872E]"
            >
              <MessageCircle className="h-4 w-4" />
              Escribir por WhatsApp
            </a>
            <a
              href={callLink()}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-[#C9A84C]/50 hover:text-[#C9A84C]"
            >
              <Phone className="h-4 w-4" />
              Llamar a la clínica
            </a>
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-[#C9A84C]/50 hover:text-[#C9A84C]"
            >
              <MapPin className="h-4 w-4" />
              Ver ubicación
            </a>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-4">
            <p className="text-sm font-semibold text-white">Contacto directo</p>
            <div className="mt-3 space-y-1.5 text-sm leading-relaxed text-[#AFA79A]">
              <p>WhatsApp: {siteConfig.whatsappDisplay}</p>
              <p>Llamadas: {siteConfig.callDisplay} solo llamadas</p>
              <p>{siteConfig.address}</p>
            </div>
          </div>

          <p className="mt-6 text-xs leading-relaxed text-[#7A7268]">
            La información del website estará disponible nuevamente pronto. Si tienes una urgencia
            médica, llama al 911 o acude a la sala de emergencia más cercana.
          </p>
        </div>
      </div>
    </section>
  );
}
