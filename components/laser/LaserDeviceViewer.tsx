"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent,
} from "react";
import {
  laserDeviceFeatures,
  laserDeviceViews,
  type LaserDeviceFeatureId,
  type LaserDeviceView,
} from "@/content/laser-device";

interface LaserDeviceViewerProps {
  activeViewId: LaserDeviceView["id"];
  activeFeatureId: LaserDeviceFeatureId;
  onViewChange: (id: LaserDeviceView["id"]) => void;
  onFeatureChange: (id: LaserDeviceFeatureId) => void;
}

export default function LaserDeviceViewer({
  activeViewId,
  activeFeatureId,
  onViewChange,
  onFeatureChange,
}: LaserDeviceViewerProps) {
  const activeView =
    laserDeviceViews.find((view) => view.id === activeViewId) ??
    laserDeviceViews[0];
  const activeIndex = laserDeviceViews.findIndex((view) => view.id === activeView.id);
  const dragStartX = useRef<number | null>(null);
  const dragDeltaX = useRef(0);
  const [isDragging, setIsDragging] = useState(false);

  const activeFeatureMap = useMemo(
    () => new Map(laserDeviceFeatures.map((feature) => [feature.id, feature])),
    []
  );

  useEffect(() => {
    if (!activeView.hotspots.some((hotspot) => hotspot.id === activeFeatureId)) {
      const firstHotspot = activeView.hotspots[0];
      if (firstHotspot) onFeatureChange(firstHotspot.id);
    }
  }, [activeFeatureId, activeView, onFeatureChange]);

  const goToOffset = (offset: number) => {
    const nextIndex =
      (activeIndex + offset + laserDeviceViews.length) % laserDeviceViews.length;
    onViewChange(laserDeviceViews[nextIndex].id);
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    dragStartX.current = event.clientX;
    dragDeltaX.current = 0;
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (dragStartX.current === null) return;
    dragDeltaX.current = event.clientX - dragStartX.current;
  };

  const finishDrag = () => {
    if (dragStartX.current !== null && Math.abs(dragDeltaX.current) >= 42) {
      goToOffset(dragDeltaX.current > 0 ? -1 : 1);
    }
    dragStartX.current = null;
    dragDeltaX.current = 0;
    setIsDragging(false);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToOffset(-1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goToOffset(1);
    }
  };

  return (
    <div className="space-y-4">
      <div
        tabIndex={0}
        role="group"
        aria-label="Visor interactivo del equipo láser diodo"
        onKeyDown={handleKeyDown}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={finishDrag}
        onPointerCancel={finishDrag}
        className={`relative isolate aspect-square touch-pan-y select-none overflow-hidden rounded-[32px] border border-[#E8E4DA] bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.98),rgba(250,248,244,0.94)_40%,rgba(237,232,220,0.92)_100%)] shadow-[0_24px_90px_-42px_rgba(26,26,26,0.45)] outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C]/60 ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-[12%] bottom-[8%] h-[14%] rounded-full bg-[radial-gradient(ellipse,rgba(26,26,26,0.16),transparent_72%)] blur-2xl"
        />

        <Image
          key={activeView.id}
          src={activeView.imageSrc}
          alt={activeView.alt}
          fill
          preload={activeView.id === "front"}
          sizes="(min-width: 1024px) 560px, (min-width: 768px) 52vw, 100vw"
          className="object-contain p-5 sm:p-7 lg:p-8"
        />

        <div className="pointer-events-none absolute left-4 top-4 rounded-full border border-white/80 bg-white/75 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#3D3D3D] shadow-sm backdrop-blur">
          {activeView.kind === "angle" ? "Vista" : "Detalle"} · {activeView.label}
        </div>

        <div className="pointer-events-none absolute bottom-4 left-1/2 hidden -translate-x-1/2 rounded-full border border-white/80 bg-white/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6B6B6B] shadow-sm backdrop-blur sm:block">
          Arrastra o usa las flechas
        </div>

        <div className="absolute inset-y-0 left-3 flex items-center">
          <button
            type="button"
            aria-label="Ver imagen anterior del equipo"
            onPointerDown={(event) => event.stopPropagation()}
            onClick={() => goToOffset(-1)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-white/85 text-[#1A1A1A] shadow-sm backdrop-blur transition hover:border-[#C9A84C]/55 hover:text-[#A8872E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C]/60"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        </div>

        <div className="absolute inset-y-0 right-3 flex items-center">
          <button
            type="button"
            aria-label="Ver siguiente imagen del equipo"
            onPointerDown={(event) => event.stopPropagation()}
            onClick={() => goToOffset(1)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-white/85 text-[#1A1A1A] shadow-sm backdrop-blur transition hover:border-[#C9A84C]/55 hover:text-[#A8872E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C]/60"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="hidden md:block">
          {activeView.hotspots.map((hotspot) => {
            const feature = activeFeatureMap.get(hotspot.id);
            if (!feature) return null;
            const isActive = hotspot.id === activeFeatureId;

            return (
              <button
                key={`${activeView.id}-${hotspot.id}`}
                type="button"
                aria-label={`Ver detalle: ${feature.title}`}
                aria-pressed={isActive}
                onPointerDown={(event) => event.stopPropagation()}
                onClick={() => onFeatureChange(hotspot.id)}
                style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                className="group absolute z-10 -translate-x-1/2 -translate-y-1/2 focus-visible:outline-none"
              >
                <span
                  className={`relative flex h-8 w-8 items-center justify-center rounded-full border transition duration-200 ${
                    isActive
                      ? "border-[#C9A84C] bg-[#C9A84C]/18 shadow-[0_0_0_8px_rgba(201,168,76,0.12)]"
                      : "border-white bg-white/80 shadow-[0_10px_24px_-16px_rgba(26,26,26,0.65)] backdrop-blur group-hover:border-[#C9A84C]/70"
                  }`}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${
                      isActive ? "bg-[#A8872E]" : "bg-[#3D3D3D]"
                    }`}
                  />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div
        role="tablist"
        aria-label="Seleccionar vista del equipo"
        className="flex snap-x gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {laserDeviceViews.map((view) => {
          const isActive = view.id === activeView.id;
          return (
            <button
              key={view.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Ver ${view.label}`}
              onClick={() => onViewChange(view.id)}
              className={`min-w-fit snap-start rounded-full border px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C]/60 ${
                isActive
                  ? "border-[#C9A84C] bg-[#1A1A1A] text-white"
                  : "border-[#E8E4DA] bg-white text-[#3D3D3D] hover:border-[#C9A84C]/55 hover:text-[#1A1A1A]"
              }`}
            >
              {view.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
