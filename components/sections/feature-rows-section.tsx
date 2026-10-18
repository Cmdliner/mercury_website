import {
  ReconcileChip,
  SalesChip,
  StoreChip,
} from "@/components/sections/feature-chips"
import { FeatureRow } from "@/components/sections/feature-row"
import { FeatureVisual } from "@/components/sections/feature-visual"
import { Reveal } from "@/components/shared/reveal"
import { Section } from "@/components/shared/section"
import { FEATURE_ROWS, type CapabilityId, type VisualId } from "@/lib/content"
import { FEATURE_HUES, hueVars } from "@/lib/hues"
import { PHOTOS, type Photo } from "@/lib/images"

type VisualSpec = {
  photo: Photo
  illustration: CapabilityId
  chip: React.ReactNode
}

const VISUALS: Record<VisualId, VisualSpec> = {
  stores: {
    photo: PHOTOS.stores,
    illustration: "overview",
    chip: <StoreChip />,
  },
  accounts: {
    photo: PHOTOS.accounts,
    illustration: "transactions",
    chip: <SalesChip />,
  },
  reconciliation: {
    photo: PHOTOS.reconcile,
    illustration: "onboarding",
    chip: <ReconcileChip />,
  },
}

export function FeatureRowsSection() {
  return (
    <Section spacing="bottom">
      <div className="grid grid-cols-1 gap-24 lg:gap-36">
        {FEATURE_ROWS.map((row, index) => {
          const hue = FEATURE_HUES[row.visual]
          const visual = VISUALS[row.visual]

          return (
            <Reveal key={row.id}>
              <div style={hueVars(hue)} className="[&_.text-eyebrow]:text-brand">
                <FeatureRow row={row} flip={index % 2 === 1}>
                  <FeatureVisual
                    hue={hue}
                    photo={visual.photo}
                    illustration={visual.illustration}
                    chip={visual.chip}
                  />
                </FeatureRow>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
