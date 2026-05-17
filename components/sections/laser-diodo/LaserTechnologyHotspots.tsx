"use client";

import type { LaserFeature } from "./laser3dData";

interface LaserTechnologyHotspotsProps {
  features: LaserFeature[];
  activeFeatureId: string;
  onSelect: (id: string) => void;
  className?: string;
}

/**
 * Compact chip selector. Used together with an active-feature panel —
 * never as a dense grid of cards. Keyboard accessible, tap-friendly.
 */
export default function LaserTechnologyHotspots({
  features,
  activeFeatureId,
  onSelect,
  className = "",
}: LaserTechnologyHotspotsProps) {
  return (
    <div
      role="tablist"
      aria-label="Características del equipo láser"
      className={`flex flex-wrap gap-2 ${className}`}
    >
      {features.map((feature) => {
        const Icon = feature.icon;
        const isActive = feature.id === activeFeatureId;
        return (
          <button
            key={feature.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls="laser-active-feature-panel"
            onClick={() => onSelect(feature.id)}
            className={`group inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-[11px] font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A86A]/60 ${
              isActive
                ? "border-[#C9A86A]/55 bg-[#C9A86A]/[0.08] text-white shadow-[0_10px_24px_-15px_rgba(201,168,106,0.7)]"
                : "border-white/10 bg-white/[0.02] text-[#B8B8B8] hover:border-[#C9A86A]/30 hover:text-[#E8E4DA]"
            }`}
          >
            <Icon
              className={`h-3.5 w-3.5 transition-colors ${
                isActive ? "text-[#F2D987]" : "text-[#C9A86A]/70"
              }`}
              strokeWidth={1.6}
            />
            <span>{feature.title}</span>
          </button>
        );
      })}
    </div>
  );
}
