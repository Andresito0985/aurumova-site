import { MapPin, ExternalLink, Navigation } from "lucide-react";
import { siteConfig } from "@/content/site";

interface GoogleMapsLocationCardProps {
  /** Section variant — affects bg/text colors. */
  variant?: "light" | "dark";
  className?: string;
  /** Optional override for the action label. */
  actionLabel?: string;
}

/**
 * Premium "Google Maps-style" location preview card.
 *
 * Renders a stylized SVG abstract map (cream background, graphite street grid,
 * single gold pin at the clinic location) and a clear CTA to open the actual
 * clinic location in Google Maps.
 *
 * Avoids the real Google Maps embed/JS API:
 *   - No API key required.
 *   - No external script.
 *   - No runtime cost.
 *   - Premium clinical aesthetic, not the generic embed look.
 *
 * The card itself is the link, so the entire surface is clickable.
 * External link opens in a new tab with `rel="noopener noreferrer"`.
 */
export default function GoogleMapsLocationCard({
  variant = "light",
  className = "",
  actionLabel = "Ver en Google Maps",
}: GoogleMapsLocationCardProps) {
  const isDark = variant === "dark";

  return (
    <a
      href={siteConfig.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Abrir ubicación de ${siteConfig.name} en Google Maps`}
      className={`group block overflow-hidden rounded-3xl border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 ${
        isDark
          ? "border-[#2D2D2D] bg-[#171717] focus-visible:ring-offset-[#1A1A1A]"
          : "border-[#E8E4DA] bg-white focus-visible:ring-offset-white shadow-[0_16px_40px_-30px_rgba(0,0,0,0.15)]"
      } ${className}`}
    >
      {/* Map preview — stylized SVG */}
      <div
        className={`relative h-44 sm:h-52 w-full overflow-hidden ${
          isDark ? "bg-[#0E0E0E]" : "bg-[#FAF8F4]"
        }`}
        aria-hidden="true"
      >
        {/* Abstract street grid */}
        <svg
          viewBox="0 0 600 220"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 h-full w-full"
        >
          {/* Background ground */}
          <defs>
            <linearGradient id="map-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={isDark ? "#171717" : "#F4EBD0"} stopOpacity="0.25" />
              <stop offset="100%" stopColor={isDark ? "#0A0A0A" : "#FAF8F4"} stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect width="600" height="220" fill="url(#map-bg)" />

          {/* Street grid — graphite/cream lines */}
          <g
            stroke={isDark ? "#3D3D3D" : "#E8E4DA"}
            strokeWidth="1"
            opacity="0.7"
            fill="none"
          >
            {/* Vertical streets */}
            <line x1="80" y1="0" x2="80" y2="220" />
            <line x1="180" y1="0" x2="180" y2="220" />
            <line x1="290" y1="0" x2="290" y2="220" />
            <line x1="420" y1="0" x2="420" y2="220" />
            <line x1="520" y1="0" x2="520" y2="220" />
            {/* Horizontal streets */}
            <line x1="0" y1="40" x2="600" y2="40" />
            <line x1="0" y1="105" x2="600" y2="105" />
            <line x1="0" y1="170" x2="600" y2="170" />
            {/* Curved minor road */}
            <path d="M 0 140 Q 200 80, 420 140 T 600 130" />
          </g>

          {/* Gold route line leading to pin */}
          <path
            d="M 60 200 Q 200 200, 250 130 T 305 95"
            stroke="#C9A84C"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="6 6"
            fill="none"
            opacity="0.9"
          />

          {/* Subtle gold radial accent at pin location */}
          <circle cx="305" cy="95" r="48" fill="#C9A84C" opacity="0.12" />
          <circle cx="305" cy="95" r="28" fill="#C9A84C" opacity="0.18" />

          {/* Pin shadow */}
          <ellipse cx="305" cy="110" rx="14" ry="3" fill="#000" opacity="0.18" />

          {/* Pin — gold teardrop with graphite center */}
          <g transform="translate(305 95)">
            <path
              d="M 0 -22 C 10 -22, 16 -14, 16 -6 C 16 4, 0 18, 0 18 C 0 18, -16 4, -16 -6 C -16 -14, -10 -22, 0 -22 Z"
              fill="#C9A84C"
              stroke="#1A1A1A"
              strokeWidth="1.2"
            />
            <circle cx="0" cy="-6" r="5" fill="#1A1A1A" />
          </g>
        </svg>

        {/* Top-right "Google Maps" style chip — subtle, no logo */}
        <div
          className={`absolute top-3 right-3 flex items-center gap-1.5 rounded-full px-2.5 py-1 backdrop-blur-md ${
            isDark
              ? "bg-[#1A1A1A]/80 border border-[#3D3D3D]"
              : "bg-white/90 border border-[#E8E4DA]"
          }`}
        >
          <Navigation
            className="h-3 w-3 text-[#C9A84C]"
            aria-hidden="true"
          />
          <span
            className={`text-[10px] font-semibold tracking-wider uppercase ${
              isDark ? "text-[#E8E4DA]" : "text-[#3D3D3D]"
            }`}
          >
            Google Maps
          </span>
        </div>
      </div>

      {/* Address + action */}
      <div className="p-5 sm:p-6">
        <div className="flex items-start gap-3 mb-4">
          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
              isDark
                ? "bg-[#C9A84C]/12 ring-1 ring-[#C9A84C]/25"
                : "bg-[#C9A84C]/10"
            }`}
          >
            <MapPin
              className="h-4 w-4 text-[#C9A84C]"
              aria-hidden="true"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p
              className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${
                isDark ? "text-[#E2C97E]" : "text-[#A8872E]"
              }`}
            >
              Ubicación
            </p>
            <p
              className={`text-sm font-semibold leading-tight ${
                isDark ? "text-white" : "text-[#1A1A1A]"
              }`}
            >
              {siteConfig.name}
            </p>
            <p
              className={`mt-1 text-xs leading-relaxed ${
                isDark ? "text-[#9A9A9A]" : "text-[#6B6B6B]"
              }`}
            >
              16 Calle Ana Lens Susoni
              <br />
              Infinity Health Shared Spaces, Arecibo, Puerto Rico
            </p>
          </div>
        </div>

        <span
          className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-colors ${
            isDark
              ? "text-[#E2C97E] group-hover:text-[#C9A84C]"
              : "text-[#A8872E] group-hover:text-[#C9A84C]"
          }`}
        >
          {actionLabel}
          <ExternalLink
            className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </a>
  );
}
