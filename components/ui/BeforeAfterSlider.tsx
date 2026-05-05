"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  labelBefore?: string;
  labelAfter?: string;
  className?: string;
  aspectRatio?: string;
  objectPositionBefore?: string;
  objectPositionAfter?: string;
  ariaLabel?: string;
}

const clamp = (value: number) => Math.min(100, Math.max(0, value));

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  labelBefore = "Antes",
  labelAfter = "Después",
  className,
  aspectRatio = "aspect-[4/5]",
  objectPositionBefore = "center center",
  objectPositionAfter = "center center",
  ariaLabel = "Control para comparar imagen antes y después",
}: BeforeAfterSliderProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const [curtainPosition, setCurtainPosition] = useState(50);

  const updateFromClientX = useCallback((clientX: number) => {
    const frame = frameRef.current;
    if (!frame) return;

    const rect = frame.getBoundingClientRect();
    if (rect.width === 0) return;

    const nextPosition = ((clientX - rect.left) / rect.width) * 100;
    setCurtainPosition(clamp(nextPosition));
  }, []);

  const stopDragging = useCallback((pointerId?: number) => {
    isDraggingRef.current = false;

    if (pointerId !== undefined && frameRef.current?.hasPointerCapture(pointerId)) {
      frameRef.current.releasePointerCapture(pointerId);
    }
  }, []);

  const handlePointerDown = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      isDraggingRef.current = true;
      event.currentTarget.focus();
      event.preventDefault();

      try {
        event.currentTarget.setPointerCapture(event.pointerId);
      } catch {
        // Some synthetic events cannot capture pointers, but real mouse/touch drags can.
      }

      updateFromClientX(event.clientX);
    },
    [updateFromClientX],
  );

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (!isDraggingRef.current) return;
      event.preventDefault();
      updateFromClientX(event.clientX);
    },
    [updateFromClientX],
  );

  const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setCurtainPosition((current) => clamp(current - 5));
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      setCurtainPosition((current) => clamp(current + 5));
    }

    if (event.key === "Home") {
      event.preventDefault();
      setCurtainPosition(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      setCurtainPosition(100);
    }
  }, []);

  const afterReveal = Math.round(100 - curtainPosition);

  return (
    <div
      ref={frameRef}
      role="slider"
      tabIndex={0}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(curtainPosition)}
      aria-valuetext={`${afterReveal}% de la imagen después visible`}
      aria-label={ariaLabel}
      data-before-after-slider
      className={cn(
        "group relative isolate w-full cursor-ew-resize touch-none select-none overflow-hidden rounded-2xl border border-[#E8E4DA] bg-[#1A1A1A] outline-none ring-offset-2 ring-offset-[#FAF8F4] transition-shadow duration-200 focus-visible:ring-2 focus-visible:ring-[#C9A84C]",
        aspectRatio,
        className,
      )}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={(event) => stopDragging(event.pointerId)}
      onPointerCancel={(event) => stopDragging(event.pointerId)}
      onKeyDown={handleKeyDown}
    >
      <Image
        src={beforeSrc}
        alt={beforeAlt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover"
        style={{ objectPosition: objectPositionBefore }}
        draggable={false}
      />

      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 0 0 ${curtainPosition}%)` }}
      >
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          style={{ objectPosition: objectPositionAfter }}
          draggable={false}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/28 via-transparent to-black/16" />

      <div className="pointer-events-none absolute left-3 top-3 rounded-full border border-white/15 bg-black/55 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#F7F0DE] backdrop-blur">
        {labelBefore}
      </div>
      <div className="pointer-events-none absolute right-3 top-3 rounded-full border border-white/15 bg-[#C9A84C]/90 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur">
        {labelAfter}
      </div>

      <div
        className="pointer-events-none absolute bottom-0 top-0 z-10 w-px bg-white/90 shadow-[0_0_0_1px_rgba(201,168,76,0.65)]"
        style={{ left: `${curtainPosition}%` }}
      />
      <div
        className="pointer-events-none absolute top-1/2 z-20 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-[#C9A84C] text-white shadow-xl shadow-black/25"
        style={{ left: `${curtainPosition}%` }}
      >
        <span className="h-5 w-px rounded-full bg-white/80" />
        <span className="mx-1 h-5 w-px rounded-full bg-white/50" />
        <span className="h-5 w-px rounded-full bg-white/80" />
      </div>

      <div className="pointer-events-none absolute bottom-3 left-1/2 z-20 -translate-x-1/2 rounded-full border border-white/10 bg-black/55 px-3 py-1.5 text-[11px] font-medium text-white/85 opacity-0 backdrop-blur transition-opacity duration-200 group-focus-within:opacity-100 group-hover:opacity-100">
        Desliza para comparar
      </div>
    </div>
  );
}
