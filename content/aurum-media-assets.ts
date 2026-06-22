// Aurum Nova — media asset registry (images + short video loops).
//
// Companion to content/official-visual-assets.ts. This registry adds VIDEO
// support and drives every <MediaSlot> consumer. It is the single source of
// truth for the premium hero / section media under:
//   /public/images/aurum-nova/<group>/   (stills, posters)
//   /public/videos/aurum-nova/            (muted loops)
//
// Activation flow (identical to official-visual-assets.ts):
//   1. Drop the approved file(s) into the matching public/ folder.
//   2. Replace the `null` for that slot with an AurumMediaAsset object.
//   3. The consuming <MediaSlot> now renders the video/image; no other code
//      change is required.
//   4. Until step 2, the consumer renders its fallback (the section's current
//      visual) or the editorial placeholder — never a broken file.
//
// Compliance posture (applies to every slot):
//   - Premium clinical wellness; minimalist; white/cream/gold/charcoal.
//   - NO sexualized treatment imagery, NO exaggerated body-transformation or
//     before/after imagery, NO unsupported medical claims in alt text.
//   - Never reference a file that does not yet exist on disk.
//
// Performance budget for video loops:
//   - <= ~3 MB, <= 1080p, ~6–10 s seamless loop, H.264 MP4 (+ optional WebM).
//   - Always provide a poster still so first paint never waits on the video.

import type { AurumMediaAsset } from "@/components/visual/MediaSlot";

export type AurumMediaAssets = {
  hero: {
    /** Homepage hero. Premium clinic / laser-room loop. Falls back to the
     *  DeviceDashboardMockup until set. Suggested:
     *  video  /videos/aurum-nova/hero-loop.mp4
     *  poster /images/aurum-nova/hero/hero-clinic.webp */
    clinic: AurumMediaAsset | null;
  };
  laser: {
    /** Homepage laser feature. Clinical diode treatment / device detail.
     *  Falls back to the existing optimized machine WebP until set.
     *  video  /videos/aurum-nova/laser-loop.mp4
     *  image  /images/aurum-nova/laser/laser-treatment-01.webp */
    treatment: AurumMediaAsset | null;
    /** /laser-diodo hero. Device / room loop. Falls back to the current
     *  laser-room/machine WebP hero frame until set.
     *  video  /videos/aurum-nova/laser-loop.mp4
     *  image  /images/aurum-nova/laser/laser-hero.webp */
    hero: AurumMediaAsset | null;
  };
  metabolic: {
    /** Metabolic hero. Consultation / body-composition / follow-up still.
     *  image  /images/aurum-nova/metabolic/metabolic-consult-01.webp */
    consult: AurumMediaAsset | null;
  };
  facials: {
    /** Facial / aesthetic room or treatment detail still.
     *  image  /images/aurum-nova/facials/facial-treatment-01.webp */
    treatment: AurumMediaAsset | null;
  };
  brows: {
    /** Brow detail / tools editorial still.
     *  image  /images/aurum-nova/brows/brows-detail-01.webp */
    detail: AurumMediaAsset | null;
  };
  team: {
    /** Provider / clinic-team editorial portrait.
     *  image  /images/aurum-nova/team/team-portrait-01.webp */
    portrait: AurumMediaAsset | null;
  };
  clinic: {
    /** Real clinic / Infinity Health Shared Spaces room still.
     *  image  /images/aurum-nova/clinic/clinic-room-01.webp */
    room: AurumMediaAsset | null;
    /** Clinic interior detail (texture, reception, gold accents).
     *  image  /images/aurum-nova/clinic/clinic-detail-01.webp */
    detail: AurumMediaAsset | null;
  };
};

// Every slot starts null → fallbacks / placeholders render and no asset is
// required for the site to build or run. Flip a slot to an AurumMediaAsset
// once the approved file exists on disk.
export const aurumMediaAssets: AurumMediaAssets = {
  hero: {
    clinic: null,
  },
  laser: {
    treatment: null,
    hero: null,
  },
  metabolic: {
    consult: null,
  },
  facials: {
    treatment: null,
  },
  brows: {
    detail: null,
  },
  team: {
    portrait: null,
  },
  clinic: {
    room: null,
    detail: null,
  },
};
