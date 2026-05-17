"use client";

import { Check } from "lucide-react";
import { useState } from "react";
import {
  laserDeviceBenefits,
  laserDeviceCopy,
  laserDeviceFeatures,
  laserDeviceViews,
  type LaserDeviceFeatureId,
  type LaserDeviceView,
} from "@/content/laser-device";
import LaserDeviceViewer from "./LaserDeviceViewer";
import LaserHotspotCard from "./LaserHotspotCard";

export default function LaserDeviceExperience() {
  const [activeViewId, setActiveViewId] = useState<LaserDeviceView["id"]>(
    laserDeviceViews[0].id
  );
  const [activeFeatureId, setActiveFeatureId] = useState<LaserDeviceFeatureId>(
    laserDeviceViews[0].hotspots[0].id
  );

  const activeFeature =
    laserDeviceFeatures.find((feature) => feature.id === activeFeatureId) ??
    laserDeviceFeatures[0];

  return (
    <section
      className="relative overflow-hidden bg-[#FAF8F4] py-16 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 12% 14%, rgba(201,168,76,0.16), transparent 28%), radial-gradient(circle at 88% 18%, rgba(56,189,248,0.08), transparent 24%), linear-gradient(180deg, #FAF8F4 0%, #FFFFFF 100%)",
        }}
      />

      <div className="container-max relative px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-2xl lg:hidden">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#A8872E]">
            {laserDeviceCopy.eyebrow}
          </span>
          <h2
            id="laser-device-title-mobile"
            className="mt-4 text-3xl font-semibold leading-tight text-[#1A1A1A]"
          >
            {laserDeviceCopy.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#6B6B6B]">
            {laserDeviceCopy.description}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(340px,0.92fr)] lg:items-start lg:gap-12">
          <div>
            <LaserDeviceViewer
              activeViewId={activeViewId}
              activeFeatureId={activeFeatureId}
              onViewChange={setActiveViewId}
              onFeatureChange={setActiveFeatureId}
            />
          </div>

          <div className="space-y-6">
            <div className="hidden lg:block">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#A8872E]">
                {laserDeviceCopy.eyebrow}
              </span>
              <h2
                id="laser-device-title-desktop"
                className="mt-4 text-4xl font-semibold leading-tight text-[#1A1A1A]"
              >
                {laserDeviceCopy.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#6B6B6B]">
                {laserDeviceCopy.description}
              </p>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {laserDeviceBenefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 rounded-2xl border border-[#E8E4DA] bg-white/88 p-4 text-sm leading-relaxed text-[#3D3D3D] shadow-[0_16px_35px_-32px_rgba(26,26,26,0.3)]"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C9A84C]/14 text-[#A8872E]">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.4} />
                  </span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="hidden md:block">
              <LaserHotspotCard feature={activeFeature} />
            </div>

            <p className="text-xs leading-relaxed text-[#6B6B6B]">
              {laserDeviceCopy.disclaimer}
            </p>
          </div>
        </div>

        <div className="mt-8 md:hidden">
          <div className="flex snap-x gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {laserDeviceFeatures.map((feature) => (
              <div key={feature.id} className="min-w-[82%] snap-start">
                <LaserHotspotCard
                  feature={feature}
                  isActive={feature.id === activeFeatureId}
                  compact
                  onSelect={setActiveFeatureId}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
