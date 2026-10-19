import { CheckList } from "@/components/shared/check-list"
import { Button } from "@/components/ui/button"
import type { Plan } from "@/lib/pricing"

/** A wide band under the plans for networks past the largest plan, where the price is agreed. */
export function EnterpriseBanner({ plan }: { plan: Plan }) {
  return (
    <div className="grid items-center gap-10 rounded-none border border-border-strong bg-surface-muted p-8 sm:p-10 lg:grid-cols-[1.1fr_1fr_auto] lg:gap-14">
      <div>
        <p className="text-eyebrow">{plan.name}</p>
        <h3 className="text-subtitle mt-4">More than 20 stores?</h3>
        <p className="mt-3 max-w-sm text-base leading-relaxed text-muted-foreground">
          {plan.tagline} We agree the price and the terms with you.
        </p>
      </div>

      <CheckList items={plan.features} className="gap-3.5" />

      <div className="lg:text-center">
        <Button disabled size="lg" variant="outline" className="h-12 w-full px-8 lg:w-auto">
          {plan.cta}
        </Button>
        <p className="mt-3 text-xs text-muted-foreground">Opens at launch</p>
      </div>
    </div>
  )
}
