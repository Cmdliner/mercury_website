import type { CapabilityId } from "@/lib/content"

type CapabilityTone = {
  /** Outline, line art and highlights. */
  accent: string
  /** Dark, tinted start of the card background. */
  tint: string
}

/** One hue per capability card, in the manner of the Railway docs cards. */
export const CAPABILITY_TONES: Record<CapabilityId, CapabilityTone> = {
  overview: { accent: "#e3a93a", tint: "#2c2410" },
  transactions: { accent: "#5f92f2", tint: "#121d36" },
  detail: { accent: "#ec6a62", tint: "#2f1617" },
  staff: { accent: "#52b88b", tint: "#12281f" },
  payments: { accent: "#a98ff7", tint: "#201a38" },
  onboarding: { accent: "#43bcd0", tint: "#10272c" },
}
