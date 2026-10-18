import { CapabilityIllustration } from "@/components/illustrations/capability-illustration"
import { DocSection } from "@/components/design-system/doc-section"
import { Specimen } from "@/components/design-system/specimen"
import { Photo } from "@/components/shared/photo"
import type { CapabilityId } from "@/lib/content"
import { CAPABILITY_HUES, hueVars } from "@/lib/hues"
import { PHOTOS } from "@/lib/images"

const PHOTO_USAGE: Record<keyof typeof PHOTOS, string> = {
  hero: "Home and About page headers, under a light frosted layer",
  owner: "Why Mercury section",
  stores: "Stores feature row, About story",
  accounts: "Accounts feature row",
  reconcile: "Reconciliation feature row",
  glass: "Closing call to action",
}

const SAMPLES: CapabilityId[] = ["overview", "transactions", "staff"]

export function ImagerySection() {
  return (
    <DocSection
      id="imagery"
      title="Imagery"
      description="Real photography of the businesses Mercury serves, from Unsplash, stored in public/photos and rendered with next/image."
    >
      <Specimen
        label="Photography"
        note="Full colour. Never tint a photo. Register new ones in lib/images.ts with descriptive alt text."
      >
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-3">
          {(Object.keys(PHOTOS) as (keyof typeof PHOTOS)[]).map((key) => (
            <div key={key}>
              <div className="relative aspect-[4/3] overflow-hidden border border-border-strong bg-surface-muted">
                <Photo
                  photo={PHOTOS[key]}
                  sizes="(min-width: 1024px) 300px, 50vw"
                  grayscale={false}
                />
              </div>
              <p className="mt-3 font-mono text-sm">PHOTOS.{key}</p>
              <p className="mt-1 text-sm text-muted-foreground">{PHOTO_USAGE[key]}</p>
            </div>
          ))}
        </div>
      </Specimen>

      <Specimen
        label="Rules"
        note="App screens belong only in the Screens section; everywhere else use photography."
      >
        <ul className="grid max-w-2xl gap-2 text-base leading-relaxed text-muted-foreground">
          <li>Prefer people, counters, shelves and streets over abstract shapes.</li>
          <li>Keep text legible: add a frosted layer and a soft text shadow over busy photos.</li>
          <li>Hero and page headers slide under the glass header with -mt-16.</li>
        </ul>
      </Specimen>

      <Specimen
        label="Line illustrations"
        note="Drawn from flat shapes on an isometric plane (components/illustrations). They take their hue from CSS variables."
      >
        <div className="grid gap-5 sm:grid-cols-3">
          {SAMPLES.map((id) => (
            <div
              key={id}
              style={hueVars(CAPABILITY_HUES[id])}
              className="relative isolate h-64 overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--tone)_32%,transparent)] bg-[linear-gradient(140deg,var(--tint),#0e1214_75%)]"
            >
              <CapabilityIllustration
                id={id}
                className="absolute right-[-2rem] bottom-[-1.5rem] w-[20rem] text-[var(--tone)]"
              />
            </div>
          ))}
        </div>
      </Specimen>
    </DocSection>
  )
}
