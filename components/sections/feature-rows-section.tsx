import { AccountsPreview } from "@/components/previews/accounts-preview"
import { PreviewPanel } from "@/components/previews/preview-panel"
import { ReconciliationPreview } from "@/components/previews/reconciliation-preview"
import { StoresPreview } from "@/components/previews/stores-preview"
import { FeatureRow } from "@/components/sections/feature-row"
import { Section } from "@/components/shared/section"
import { FEATURE_ROWS, type VisualId } from "@/lib/content"
import { PHOTOS } from "@/lib/images"

const VISUALS: Record<VisualId, React.ReactNode> = {
  stores: (
    <PreviewPanel photo={PHOTOS.facade}>
      <StoresPreview />
    </PreviewPanel>
  ),
  accounts: (
    <PreviewPanel photo={PHOTOS.arch}>
      <AccountsPreview />
    </PreviewPanel>
  ),
  reconciliation: (
    <PreviewPanel photo={PHOTOS.spiral}>
      <ReconciliationPreview />
    </PreviewPanel>
  ),
}

export function FeatureRowsSection() {
  return (
    <Section spacing="bottom">
      <div className="grid grid-cols-1 gap-24 lg:gap-36">
        {FEATURE_ROWS.map((row, index) => (
          <FeatureRow key={row.id} row={row} flip={index % 2 === 1}>
            {VISUALS[row.visual]}
          </FeatureRow>
        ))}
      </div>
    </Section>
  )
}
