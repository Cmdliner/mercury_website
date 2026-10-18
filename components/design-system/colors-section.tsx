import { ColorSwatch } from "@/components/design-system/color-swatch"
import { DocSection } from "@/components/design-system/doc-section"
import { Specimen } from "@/components/design-system/specimen"
import { COLOR_GROUPS } from "@/lib/design-tokens"
import { CAPABILITY_HUES, FEATURE_HUES } from "@/lib/hues"

const HUE_NAMES = ["Amber", "Blue", "Red", "Green", "Violet", "Teal"] as const
const HUES = Object.values(CAPABILITY_HUES)

export function ColorsSection() {
  return (
    <DocSection
      id="colour"
      title="Colour"
      description="Every colour in the interface is a token from app/globals.css. Use the Tailwind class for the token, for example bg-muted or text-muted-foreground."
    >
      {COLOR_GROUPS.map((group) => (
        <Specimen key={group.title} label={group.title} note={group.description}>
          <div className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
            {group.tokens.map((token) => (
              <ColorSwatch key={token.name} token={token} />
            ))}
          </div>
        </Specimen>
      ))}

      <Specimen
        label="Hues"
        note="Defined in lib/hues.ts. Each is a pair: an accent for lines and labels, and a dark tint for panels."
      >
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
          {HUES.map((hue, index) => (
            <div key={hue.accent}>
              <div className="flex h-20 overflow-hidden border border-border-strong">
                <div className="flex-1" style={{ background: hue.tint }} />
                <div className="flex-1" style={{ background: hue.accent }} />
              </div>
              <p className="mt-3 text-sm font-medium">{HUE_NAMES[index]}</p>
              <p className="font-mono text-xs text-muted-foreground">
                {hue.accent} on {hue.tint}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Feature rows: stores use amber ({FEATURE_HUES.stores.accent}), accounts use
          blue ({FEATURE_HUES.accounts.accent}) and reconciliation uses teal (
          {FEATURE_HUES.reconciliation.accent}). Apply a hue to a container with{" "}
          <code className="font-mono text-foreground">hueVars(hue)</code>.
        </p>
      </Specimen>
    </DocSection>
  )
}
