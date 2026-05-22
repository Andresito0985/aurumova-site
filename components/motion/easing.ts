// Aurum Nova motion tokens
// Use these consistently — never invent ad-hoc bezier curves.
// See PRODUCT.md §6 Style of easing.

export const EASE_OUT_QUART = [0.22, 1, 0.36, 1] as const;
export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

// Common durations (seconds)
export const DUR = {
  fast: 0.25,
  base: 0.55,
  slow: 0.8,
  hero: 1.0,
} as const;

// Stagger timings
export const STAGGER = {
  word: 0.05,
  child: 0.08,
  card: 0.1,
} as const;
