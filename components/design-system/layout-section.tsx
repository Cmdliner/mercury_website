import { DocSection } from "@/components/design-system/doc-section"
import { Specimen } from "@/components/design-system/specimen"
import { RADII } from "@/lib/design-tokens"
import { cn } from "@/lib/utils"

const BANDS = [
  { name: "default", classes: "bg-background", note: "Plain page background" },
  { name: "muted", classes: "border-y border-border bg-surface-muted", note: "A tinted band between plain ones" },
  { name: "night", classes: "theme-night bg-background text-foreground", note: "Dark band; every token remaps inside" },
] as const

export function LayoutSection() {
  return (
    <DocSection
      id="layout"
      title="Layout and shape"
      description="A single centred column, full-width bands to separate sections, and a small set of radii."
    >
      <Specimen
        label="Container"
        note="Container: centred, max-w-6xl (72rem), px-5 on phones, px-8 from sm."
      >
        <div className="border border-dashed border-border-strong p-3">
          <div className="mx-auto max-w-md bg-secondary px-4 py-6 text-center text-sm text-muted-foreground">
            Content column
          </div>
        </div>
      </Specimen>

      <Specimen
        label="Section tones"
        note="Section: tone is default, muted or night. Alternate them so every section is clearly defined."
      >
        <div className="border border-border-strong">
          {BANDS.map((band) => (
            <div key={band.name} className={cn("px-6 py-8", band.classes)}>
              <p className="font-mono text-xs text-muted-foreground">
                tone=&quot;{band.name}&quot;
              </p>
              <p className="mt-2 text-sm">{band.note}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Vertical rhythm: py-section is clamp(4.5rem, 2.5rem + 7vw, 8.5rem).
        </p>
      </Specimen>

      <Specimen label="Radius" note="Controls are square; containers get softer as they get larger.">
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {RADII.map((radius) => (
            <div key={radius.name}>
              <div
                className={cn(
                  "h-20 border border-border-strong bg-secondary",
                  radius.className
                )}
              />
              <p className="mt-3 text-sm font-medium">{radius.name}</p>
              <p className="font-mono text-xs text-muted-foreground">
                {radius.className}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{radius.usage}</p>
            </div>
          ))}
        </div>
      </Specimen>

      <Specimen label="Depth" note="No decorative shadows.">
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
          Separate things with tone (bands, muted surfaces) and 1px borders. A
          shadow is allowed only where something genuinely floats: popups, and
          small cards overlapping a photo.
        </p>
      </Specimen>
    </DocSection>
  )
}
