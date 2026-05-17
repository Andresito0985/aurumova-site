import type { LaserDeviceFeature } from "@/content/laser-device";

interface LaserHotspotCardProps {
  feature: LaserDeviceFeature;
  isActive?: boolean;
  compact?: boolean;
  onSelect?: (id: LaserDeviceFeature["id"]) => void;
}

export default function LaserHotspotCard({
  feature,
  isActive = false,
  compact = false,
  onSelect,
}: LaserHotspotCardProps) {
  const content = (
    <>
      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A8872E]">
        {feature.eyebrow}
      </p>
      <h3
        className={`mt-2 font-semibold text-[#1A1A1A] ${
          compact ? "text-base" : "text-lg"
        }`}
      >
        {feature.title}
      </h3>
      <p
        className={`mt-2 leading-relaxed text-[#6B6B6B] ${
          compact ? "text-xs" : "text-sm"
        }`}
      >
        {feature.description}
      </p>
    </>
  );

  if (!onSelect) {
    return (
      <article className="rounded-[24px] border border-[#E8E4DA] bg-white p-5 shadow-[0_18px_45px_-30px_rgba(26,26,26,0.4)]">
        {content}
      </article>
    );
  }

  return (
    <button
      type="button"
      aria-pressed={isActive}
      onClick={() => onSelect(feature.id)}
      className={`w-full rounded-[24px] border p-5 text-left transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C]/60 ${
        isActive
          ? "border-[#C9A84C]/70 bg-white shadow-[0_18px_45px_-28px_rgba(168,135,46,0.65)]"
          : "border-[#E8E4DA] bg-white/90 shadow-[0_18px_45px_-34px_rgba(26,26,26,0.28)] hover:border-[#C9A84C]/45"
      }`}
    >
      {content}
    </button>
  );
}
