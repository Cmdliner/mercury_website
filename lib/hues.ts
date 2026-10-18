import type { CapabilityId, VisualId } from "@/lib/content"

export type Hue = {
  /** Outline, line art, labels and highlights. */
  accent: string
  /** Dark, tinted start of a panel or card background. */
  tint: string
}

const AMBER: Hue = { accent: "#e3a93a", tint: "#2c2410" }
const BLUE: Hue = { accent: "#5f92f2", tint: "#121d36" }
const RED: Hue = { accent: "#ec6a62", tint: "#2f1617" }
const GREEN: Hue = { accent: "#52b88b", tint: "#12281f" }
const VIOLET: Hue = { accent: "#a98ff7", tint: "#201a38" }
const TEAL: Hue = { accent: "#43bcd0", tint: "#10272c" }

/** One hue per capability card, in the manner of the Railway docs cards. */
export const CAPABILITY_HUES: Record<CapabilityId, Hue> = {
  overview: AMBER,
  transactions: BLUE,
  detail: RED,
  staff: GREEN,
  payments: VIOLET,
  onboarding: TEAL,
}

/** Each feature row keeps its own hue across its label, check marks and panel. */
export const FEATURE_HUES: Record<VisualId, Hue> = {
  stores: AMBER,
  accounts: BLUE,
  reconciliation: TEAL,
}

/**
 * CSS variables that recolour everything inside an element: --brand and
 * --brand-soft for labels and check marks, --tone/--tint/--slab for panels
 * and line art.
 */
export function hueVars(hue: Hue): React.CSSProperties {
  return {
    "--brand": hue.accent,
    "--brand-soft": `color-mix(in srgb, ${hue.accent} 16%, white)`,
    "--tone": hue.accent,
    "--tint": hue.tint,
    "--slab": `color-mix(in srgb, ${hue.tint} 50%, black)`,
  } as React.CSSProperties
}
