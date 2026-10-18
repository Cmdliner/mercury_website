import { CapabilityIllustration } from "@/components/illustrations/capability-illustration"
import { Photo } from "@/components/shared/photo"
import type { CapabilityId } from "@/lib/content"
import { hueVars, type Hue } from "@/lib/hues"
import type { Photo as PhotoData } from "@/lib/images"

type FeatureVisualProps = {
  hue: Hue
  photo: PhotoData
  /** Line art drawn in the hue behind the photo. */
  illustration: CapabilityId
  /** A small live card that floats over the corner. */
  chip: React.ReactNode
}

/**
 * A hue-tinted dark panel: a real photograph framed on the left, the hue's line
 * art drifting behind it, and a small live card floating over the corner.
 */
export function FeatureVisual({ hue, photo, illustration, chip }: FeatureVisualProps) {
  return (
    <div
      style={hueVars(hue)}
      className="relative isolate min-h-[28rem] overflow-hidden rounded-3xl border border-[color-mix(in_srgb,var(--tone)_32%,transparent)] bg-[linear-gradient(140deg,var(--tint),#0e1214_78%)]"
    >
      <CapabilityIllustration
        id={illustration}
        className="pointer-events-none absolute right-[-3rem] bottom-[-2.5rem] w-[31rem] text-[var(--tone)] opacity-90 motion-safe:animate-drift"
      />
      <div className="absolute inset-y-5 left-5 w-[64%] overflow-hidden rounded-2xl border border-white/15 sm:inset-y-7 sm:left-7">
        <Photo
          photo={photo}
          sizes="(min-width: 1024px) 340px, 60vw"
          grayscale={false}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute right-4 bottom-6 sm:right-7 sm:bottom-9 motion-safe:animate-float"
      >
        {chip}
      </div>
    </div>
  )
}
