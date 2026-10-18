import { DocSection } from "@/components/design-system/doc-section"
import { Specimen } from "@/components/design-system/specimen"
import { FONTS, TYPE_SCALE } from "@/lib/design-tokens"
import { cn } from "@/lib/utils"

export function TypographySection() {
  return (
    <DocSection
      id="typography"
      title="Typography"
      description="One sans family does nearly everything. Use the type-scale utilities instead of picking font sizes."
    >
      <Specimen label="Fonts" note="Loaded with next/font in app/layout.tsx.">
        <div className="grid gap-5 md:grid-cols-3">
          {FONTS.map((font) => (
            <div key={font.name} className="border border-border-strong bg-card p-6">
              <p className="text-sm font-medium">{font.name}</p>
              <p className="font-mono text-xs text-muted-foreground">
                {font.className}
              </p>
              <p className={cn("mt-6 text-3xl leading-tight", font.className)}>
                {font.sample}
              </p>
              <p className="mt-6 text-sm text-muted-foreground">{font.usage}</p>
            </div>
          ))}
        </div>
      </Specimen>

      <Specimen label="Type scale" note="Apply the utility class; sizes are fluid.">
        <div className="divide-y divide-border-strong border-y border-border-strong">
          {TYPE_SCALE.map((style) => (
            <div
              key={style.name}
              className="grid gap-4 py-8 lg:grid-cols-[14rem_1fr] lg:gap-10"
            >
              <div>
                <p className="text-sm font-medium">{style.name}</p>
                <p className="font-mono text-xs text-muted-foreground">
                  {style.className}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{style.spec}</p>
                <p className="mt-1 text-sm text-muted-foreground">{style.usage}</p>
              </div>
              <p className={cn(style.className, "max-w-2xl")}>{style.sample}</p>
            </div>
          ))}
        </div>
      </Specimen>

      <Specimen
        label="Body text"
        note="16px, relaxed leading. Secondary copy uses text-muted-foreground."
      >
        <p className="max-w-xl text-base leading-relaxed">
          Mercury gives each branch its own accounts and ledger, and brings them
          together so you can see balances, spending and reconciliation at a
          glance.
        </p>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          Secondary text. Use it for descriptions that support a heading, never
          for anything essential.
        </p>
      </Specimen>
    </DocSection>
  )
}
