import { DocSection } from "@/components/design-system/doc-section"
import { Specimen } from "@/components/design-system/specimen"
import { Reveal } from "@/components/shared/reveal"
import { MOTION_TOKENS } from "@/lib/design-tokens"
import { cn } from "@/lib/utils"

export function MotionSection() {
  return (
    <DocSection
      id="motion"
      title="Motion"
      description="Motion adds life, never noise. Always use the motion-safe: variant so people who prefer reduced motion get none."
    >
      <Specimen label="Animation tokens" note="Defined in app/globals.css. Live below.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MOTION_TOKENS.map((token) => (
            <div key={token.name} className="border border-border-strong bg-card p-5">
              <div className="flex h-24 items-center justify-center overflow-hidden bg-surface-muted">
                <span
                  className={cn("block size-12 bg-foreground", token.className)}
                />
              </div>
              <p className="mt-4 font-mono text-sm">{token.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{token.usage}</p>
            </div>
          ))}
        </div>
      </Specimen>

      <Specimen
        label="Reveal on scroll"
        note="Wrap a block in Reveal. Stagger siblings with the delay prop (in milliseconds)."
      >
        <Reveal>
          <div className="border border-border-strong bg-card p-6 text-sm text-muted-foreground">
            This block fades and lifts into place the first time it scrolls into view.
          </div>
        </Reveal>
      </Specimen>
    </DocSection>
  )
}
