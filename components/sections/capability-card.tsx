import { CapabilityIllustration } from "@/components/illustrations/capability-illustration"
import type { Capability } from "@/lib/content"
import { CAPABILITY_HUES, hueVars } from "@/lib/hues"

/**
 * A dark card tinted with its own hue: title and description up top, a line
 * illustration in that hue bleeding off the bottom-right corner. It drifts
 * slightly on hover. The hue reaches the illustration through CSS variables
 * (--tone for lines and highlights, --slab for panel fills).
 */
export function CapabilityCard({ capability }: { capability: Capability }) {
  return (
    <div
      style={hueVars(CAPABILITY_HUES[capability.id])}
      className="theme-night group relative isolate flex h-full min-h-[22rem] flex-col overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--tone)_32%,transparent)] bg-[linear-gradient(140deg,var(--tint),#0e1214_75%)] p-7 text-foreground transition-colors hover:border-[color-mix(in_srgb,var(--tone)_55%,transparent)]"
    >
      <div className="relative z-10 max-w-[19rem]">
        <h3 className="text-heading">{capability.title}</h3>
        <p className="mt-2.5 text-base leading-relaxed text-foreground/70">
          {capability.description}
        </p>
      </div>
      <CapabilityIllustration
        id={capability.id}
        className="pointer-events-none absolute right-[-3.5rem] bottom-[-3.25rem] w-[23rem] text-[var(--tone)] transition-transform duration-500 ease-out group-hover:-translate-x-1.5 group-hover:-translate-y-1.5"
      />
    </div>
  )
}
