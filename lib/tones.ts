export type Tone = "mint" | "sun" | "sky"

type ToneStyle = {
  /** Soft background wash. */
  surface: string
  /** Icon chip: tinted square with a readable foreground. */
  chip: string
  /** Solid dot, for legends and list markers. */
  dot: string
}

/** Class names per accent tone. Keep colour decisions here, not in components. */
export const TONE_STYLES: Record<Tone, ToneStyle> = {
  mint: {
    surface: "bg-brand-soft",
    chip: "bg-brand-soft text-brand",
    dot: "bg-brand",
  },
  sun: {
    surface: "bg-sun-soft",
    chip: "bg-sun-soft text-sun-ink",
    dot: "bg-sun",
  },
  sky: {
    surface: "bg-sky-soft",
    chip: "bg-sky-soft text-sky",
    dot: "bg-sky",
  },
}
