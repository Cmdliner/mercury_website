"use client"

import { YEARLY_FREE_MONTHS, type BillingCycle } from "@/lib/pricing"
import { cn } from "@/lib/utils"

type BillingToggleProps = {
  cycle: BillingCycle
  onChange: (cycle: BillingCycle) => void
}

const OPTIONS: { value: BillingCycle; label: string }[] = [
  { value: "monthly", label: "Monthly" },
  { value: "yearly", label: "Yearly" },
]

/** A two-way switch whose dark thumb slides between Monthly and Yearly. */
export function BillingToggle({ cycle, onChange }: BillingToggleProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <div
        role="radiogroup"
        aria-label="Billing period"
        className="relative inline-grid grid-cols-2 rounded-full border border-border-strong bg-card p-1"
      >
        <span
          aria-hidden="true"
          className={cn(
            "absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] rounded-full bg-foreground transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
            cycle === "yearly" && "translate-x-full"
          )}
        />
        {OPTIONS.map((option) => (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={cycle === option.value}
            onClick={() => onChange(option.value)}
            className={cn(
              "relative z-10 cursor-pointer rounded-full px-7 py-2.5 text-sm font-medium transition-colors duration-300",
              cycle === option.value
                ? "text-background"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {option.label}
          </button>
        ))}
      </div>
      <span className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background">
        <span
          aria-hidden="true"
          className="size-1.5 rounded-full bg-background motion-safe:animate-pulse"
        />
        Pay yearly, get {YEARLY_FREE_MONTHS} months free
      </span>
    </div>
  )
}
