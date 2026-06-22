// Aurum Nova — official visual asset registry.
//
// This is the SINGLE SOURCE OF TRUTH for approved photography on the
// Aurum Nova website. Every <OfficialImageSlot> consumer reads from this
// file.
//
// Files referenced here must live under /public/images/official/ — see
// public/images/official/README.md for the folder convention, naming
// rules and per-asset compliance notes.
//
// Activation flow:
//   1. Drop the approved asset into the matching folder under
//      /public/images/official/<category>/<subcategory>/<filename>.
//   2. Replace the `null` value for that slot with a fully-typed
//      OfficialVisualAsset object.
//   3. The consuming page now renders <Image>; no other code change is
//      required.
//   4. Until step 2 is performed, the consumer renders the editorial
//      cream/graphite/gold placeholder — never a broken image.
//
// Compliance posture:
//   - No fake imagery anywhere. Never reference a file that does not
//     yet exist on disk.
//   - Compliance-sensitive slots carry a `complianceNote` reminder that
//     the editor must respect when sourcing the photo.
//   - Wellness pages (inyectables, wellness-mujer, wellness-hombre,
//     hair-support) accept ABSTRACT imagery only — see each slot's
//     compliance note.

/**
 * A single approved image entry. The component contract is:
 *   - `src` must be a public path that exists at build time.
 *   - `alt` must be descriptive and compliance-safe (no invented
 *     credentials, no diagnosis, no patient identifiers).
 *   - `width` and `height` are intrinsic dimensions used by Next.js for
 *     layout and aspect calculations.
 *   - `priority` flags the image as LCP-critical (set true ONLY for
 *     above-the-fold hero usage).
 *   - `complianceNote` is a free-text reminder that travels with the
 *     asset (shown in tooling, not rendered to users).
 */
export type OfficialVisualAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  complianceNote?: string;
};

/** Shape of the entire registry. Every leaf is `OfficialVisualAsset | null`. */
export type OfficialVisualAssets = {
  clinic: {
    exterior: OfficialVisualAsset | null;
    interior: OfficialVisualAsset | null;
    treatmentRoom: OfficialVisualAsset | null;
  };
  team: {
    providerPortrait: OfficialVisualAsset | null;
  };
  services: {
    programaMetabolico: {
      consultation: OfficialVisualAsset | null;
      dashboard: OfficialVisualAsset | null;
      labOrder: OfficialVisualAsset | null;
      cgm: OfficialVisualAsset | null;
    };
    laserDiodo: {
      machine: OfficialVisualAsset | null;
      handpiece: OfficialVisualAsset | null;
      room: OfficialVisualAsset | null;
    };
    browsCejas: {
      hero: OfficialVisualAsset | null;
      shaping: OfficialVisualAsset | null;
      tint: OfficialVisualAsset | null;
      lamination: OfficialVisualAsset | null;
      lashLifting: OfficialVisualAsset | null;
    };
    facialesHydrafacial: {
      device: OfficialVisualAsset | null;
      treatmentRoom: OfficialVisualAsset | null;
      hydrationDetail: OfficialVisualAsset | null;
    };
    skinGlow: {
      room: OfficialVisualAsset | null;
      serumDetail: OfficialVisualAsset | null;
    };
    inyectablesMetabolicos: {
      abstractPulse: OfficialVisualAsset | null;
    };
    sueroterapia: {
      room: OfficialVisualAsset | null;
      abstractDroplet: OfficialVisualAsset | null;
    };
    nutricion: {
      plate: OfficialVisualAsset | null;
    };
    wellnessMujer: {
      abstractWellness: OfficialVisualAsset | null;
    };
    wellnessHombre: {
      abstractWellness: OfficialVisualAsset | null;
    };
    hairSupport: {
      abstractHair: OfficialVisualAsset | null;
    };
  };
};

/**
 * The registry itself.
 *
 * Every leaf starts as `null`. The site's <OfficialImageSlot> components
 * render the editorial cream/graphite/gold placeholder for any null
 * slot. To activate a slot, replace its `null` with a fully populated
 * OfficialVisualAsset object — see this file's header comment for the
 * full activation flow.
 *
 * The annotation `: OfficialVisualAssets` (not `satisfies`) is used on
 * purpose: it preserves the `OfficialVisualAsset | null` union type at
 * every leaf so consumers can safely write `if (asset) { ... asset.src }`
 * without TypeScript narrowing the literal to `never`.
 */
export const officialVisualAssets: OfficialVisualAssets = {
  clinic: {
    exterior: null,
    interior: null,
    treatmentRoom: null,
  },
  team: {
    providerPortrait: null,
  },
  services: {
    programaMetabolico: {
      consultation: null,
      dashboard: null,
      labOrder: null,
      cgm: null,
    },
    laserDiodo: {
      machine: null,
      handpiece: null,
      room: null,
    },
    browsCejas: {
      hero: null,
      shaping: null,
      tint: null,
      lamination: null,
      lashLifting: null,
    },
    facialesHydrafacial: {
      device: null,
      treatmentRoom: null,
      hydrationDetail: null,
    },
    skinGlow: {
      room: null,
      serumDetail: null,
    },
    inyectablesMetabolicos: {
      abstractPulse: null,
    },
    sueroterapia: {
      room: null,
      abstractDroplet: null,
    },
    nutricion: {
      plate: null,
    },
    wellnessMujer: {
      abstractWellness: null,
    },
    wellnessHombre: {
      abstractWellness: null,
    },
    hairSupport: {
      abstractHair: null,
    },
  },
};
