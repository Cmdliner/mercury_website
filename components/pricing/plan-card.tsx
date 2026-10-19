import { CheckList } from "@/components/shared/check-list"
import { Capsule } from "@/components/shared/capsule"
import { Button } from "@/components/ui/button"
import { formatNaira } from "@/lib/format"
import {
  pricePerMonth,
  yearlyTotal,
  type BillingCycle,
  type Plan,
} from "@/lib/pricing"
import { cn } from "@/lib/utils"

type PlanCardProps = {
  plan: Plan
  cycle: BillingCycle
}

function billingNote(plan: Plan, cycle: BillingCycle) {
  const price = pricePerMonth(plan, cycle)
  const total = yearlyTotal(plan)

  if (price === 0) return "No card and no time limit"
  if (cycle === "yearly" && total !== null) return `Billed ${formatNaira(total)} a year`
  return "Billed monthly"
}

/**
 * One plan, laid out to breathe: name and promise, a large price, the button, then what is included.
 * The featured plan is dark and stands a little taller than its neighbours. Buttons are switched
 * off until plans open, and the card says so.
 */
export function PlanCard({ plan, cycle }: PlanCardProps) {
  const price = pricePerMonth(plan, cycle) ?? 0

  return (
    <div
      className={cn(
        "relative isolate flex h-full flex-col overflow-hidden rounded-none border p-8 transition-[translate,border-color] duration-300 hover:-translate-y-1 sm:p-10",
        plan.featured
          ? "theme-night border-border bg-[#0c0c0c] text-foreground lg:py-14"
          : "border-border-strong bg-card hover:border-foreground/40"
      )}
    >
      {plan.featured ? (
        <Capsule className="-top-10 -right-24 -z-10 h-32 w-72 rotate-[18deg] bg-foreground/[0.05]" />
      ) : null}

      <div className="flex items-center justify-between gap-4">
        <h3 className="text-xl font-semibold tracking-tight">{plan.name}</h3>
        {plan.featured ? (
          <span className="rounded-full bg-foreground px-3 py-1 text-xs font-medium text-background">
            Most popular
          </span>
        ) : null}
      </div>
      <p className="mt-3 min-h-[3.25rem] text-[0.95rem] leading-relaxed text-muted-foreground">
        {plan.tagline}
      </p>

      <div className="mt-8">
        <p
          key={cycle}
          className="flex items-baseline gap-2 motion-safe:animate-rise"
        >
          <span className="text-[3.25rem] leading-none font-semibold tracking-tight">
            {price === 0 ? "Free" : formatNaira(price)}
          </span>
          {price === 0 ? null : (
            <span className="text-sm whitespace-nowrap text-muted-foreground">
              / month
            </span>
          )}
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          {billingNote(plan, cycle)}
        </p>
      </div>

      <div className="mt-8">
        <Button
          disabled
          size="lg"
          variant={plan.featured ? "default" : "outline"}
          className="h-12 w-full"
        >
          {plan.cta}
        </Button>
        <p className="mt-3 text-center text-xs text-muted-foreground">
          Opens at launch
        </p>
      </div>

      <div className="mt-9 flex-1 border-t border-border pt-8">
        <p className="text-eyebrow">{plan.storesLabel}</p>
        <CheckList items={plan.features} className="mt-6 gap-4" />
      </div>
    </div>
  )
}
