import { DocSection } from "@/components/design-system/doc-section"
import { Specimen } from "@/components/design-system/specimen"
import { CheckList } from "@/components/shared/check-list"
import { ConstructionBadge } from "@/components/shared/construction-badge"
import { SectionHeading } from "@/components/shared/section-heading"
import { StatusPill } from "@/components/shared/status-pill"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const VARIANTS = ["default", "outline", "secondary", "ghost"] as const
const SIZES = ["sm", "default", "lg"] as const

export function ControlsSection() {
  return (
    <DocSection
      id="controls"
      title="Controls"
      description="Built on shadcn/ui and restyled to the system. Square corners, black and white, clear focus."
    >
      <Specimen
        label="Buttons"
        note="Primary is solid black; outline is a black border that fills on hover. Wording: Join the waitlist."
      >
        <div className="grid gap-5">
          {VARIANTS.map((variant) => (
            <div key={variant} className="flex flex-wrap items-center gap-3">
              <span className="w-24 font-mono text-xs text-muted-foreground">
                {variant}
              </span>
              {SIZES.map((size) => (
                <Button key={size} variant={variant} size={size}>
                  {size === "lg" ? "Join the waitlist" : "Button"}
                </Button>
              ))}
            </div>
          ))}
        </div>
      </Specimen>

      <Specimen label="Inputs" note="Filled with the card colour; labels sit above with 8px gap.">
        <div className="grid max-w-md gap-5">
          <div className="grid gap-2">
            <Label htmlFor="ds-name">Full name</Label>
            <Input id="ds-name" placeholder="Ada Obi" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="ds-error">Work email</Label>
            <Input id="ds-error" aria-invalid defaultValue="not-an-email" />
            <p className="text-xs text-destructive">Enter a valid email address</p>
          </div>
        </div>
      </Specimen>

      <Specimen label="Badges and pills" note="Pills are for status; the badge marks the product stage.">
        <div className="flex flex-wrap items-center gap-4">
          <StatusPill>Active</StatusPill>
          <StatusPill>Reconciled</StatusPill>
          <ConstructionBadge />
        </div>
      </Specimen>

      <Specimen label="Check list and heading" note="CheckList and SectionHeading are reused for every feature block.">
        <div className="grid gap-10 md:grid-cols-2">
          <SectionHeading
            size="md"
            eyebrow="Accounts"
            title="Buckets that show where every naira belongs."
          />
          <CheckList
            items={[
              "Accounts for operating, settlement and spending",
              "Balances derived from the ledger",
              "Trace any figure back to its entries",
            ]}
          />
        </div>
      </Specimen>
    </DocSection>
  )
}
