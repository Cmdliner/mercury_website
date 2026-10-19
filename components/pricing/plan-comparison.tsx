import { CheckIcon, MinusIcon } from "lucide-react"

import { COMPARISON, PLANS, type ComparisonValue } from "@/lib/pricing"
import { cn } from "@/lib/utils"

function Cell({ value }: { value: ComparisonValue }) {
  if (value === true) {
    return (
      <span className="inline-flex size-6 items-center justify-center rounded-full bg-foreground text-background">
        <CheckIcon className="size-3.5" strokeWidth={3} aria-label="Included" />
      </span>
    )
  }
  if (value === false) {
    return <MinusIcon className="mx-auto size-4 text-foreground/25" aria-label="Not included" />
  }
  return <span className="text-sm font-medium">{value}</span>
}

/**
 * Every plan, feature by feature, in black and white: white ticks on black, with the Growth column
 * lifted by a faint light wash. Scrolls sideways on a narrow screen.
 */
export function PlanComparison() {
  return (
    <div className="theme-night overflow-x-auto rounded-2xl border border-border bg-[#0c0c0c] text-foreground">
      <table className="w-full min-w-[46rem] border-collapse text-left">
        <thead>
          <tr>
            <th scope="col" className="w-[34%] p-5">
              <span className="sr-only">Feature</span>
            </th>
            {PLANS.map((plan) => (
              <th
                key={plan.id}
                scope="col"
                className={cn(
                  "p-5 text-center text-base font-semibold",
                  plan.featured && "bg-foreground/[0.07]"
                )}
              >
                {plan.name}
              </th>
            ))}
          </tr>
        </thead>
        {COMPARISON.map((group) => (
          <tbody key={group.title}>
            <tr>
              <th
                scope="colgroup"
                colSpan={PLANS.length + 1}
                className="border-t border-border bg-foreground/[0.04] px-5 py-3 text-eyebrow"
              >
                {group.title}
              </th>
            </tr>
            {group.rows.map((row) => (
              <tr key={row.label} className="border-t border-border">
                <th scope="row" className="px-5 py-4 text-sm font-normal text-foreground/85">
                  {row.label}
                </th>
                {row.values.map((value, index) => (
                  <td
                    key={PLANS[index].id}
                    className={cn(
                      "px-5 py-4 text-center",
                      PLANS[index].featured && "bg-foreground/[0.07]"
                    )}
                  >
                    <Cell value={value} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        ))}
      </table>
    </div>
  )
}
