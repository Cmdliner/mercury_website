"use client"

import { useState } from "react"

import { StoreSlider } from "@/components/pricing/store-slider"
import { Reveal } from "@/components/shared/reveal"
import { Section } from "@/components/shared/section"
import { formatNaira } from "@/lib/format"
import {
  ESTIMATOR_MAX_STORES,
  YEARLY_FREE_MONTHS,
  pricePerMonth,
  recommendPlan,
} from "@/lib/pricing"

/** Slide to the number of stores; the plan that fits, and what it costs, follows. */
export function StoreEstimatorSection() {
  const [stores, setStores] = useState(3)

  const plan = recommendPlan(stores)
  const monthly = pricePerMonth(plan, "monthly")
  const yearly = pricePerMonth(plan, "yearly")
  const beyondLimit = stores >= ESTIMATOR_MAX_STORES
  const storesLabel = beyondLimit ? `${ESTIMATOR_MAX_STORES - 5}+` : String(stores)

  return (
    <Section width="wide" spacing="bottom">
      <Reveal>
        <div className="theme-night relative overflow-hidden rounded-[2rem] bg-[#0c0c0c] px-6 py-14 text-foreground sm:px-12 sm:py-16">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <div>
              <p className="text-eyebrow">Find your plan</p>
              <h2 className="text-title mt-4 max-w-md">
                How many stores do you run?
              </h2>
              <p className="text-lead mt-5 max-w-md">
                Slide to your number of stores and we will show the plan that
                fits.
              </p>

              <div className="mt-10">
                <div className="flex items-baseline gap-3">
                  <span
                    key={storesLabel}
                    className="text-[4rem] leading-none font-semibold tracking-tight tabular-nums motion-safe:animate-rise"
                  >
                    {storesLabel}
                  </span>
                  <span className="text-lg text-muted-foreground">
                    {stores === 1 ? "store" : "stores"}
                  </span>
                </div>
                <StoreSlider
                  value={stores}
                  min={1}
                  max={ESTIMATOR_MAX_STORES}
                  onChange={setStores}
                  className="mt-6"
                />
                <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                  <span>1</span>
                  <span>{ESTIMATOR_MAX_STORES - 5}+</span>
                </div>
              </div>
            </div>

            <div
              key={plan.id}
              className="rounded-2xl border border-border bg-card/60 p-8 motion-safe:animate-rise"
            >
              <p className="text-eyebrow">Recommended</p>
              <p className="mt-4 text-3xl font-semibold tracking-tight">
                {plan.name}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{plan.storesLabel}</p>

              <div className="mt-8 border-t border-border pt-8">
                {monthly === null ? (
                  <>
                    <p className="text-[2.5rem] leading-none font-semibold tracking-tight">
                      Custom
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground">
                      Priced to fit a network of your size.
                    </p>
                  </>
                ) : monthly === 0 ? (
                  <>
                    <p className="text-[2.5rem] leading-none font-semibold tracking-tight">
                      Free
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground">
                      No card and no time limit.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="flex items-baseline gap-2">
                      <span className="text-[2.5rem] leading-none font-semibold tracking-tight">
                        {formatNaira(yearly ?? monthly)}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        / month, paid yearly
                      </span>
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground">
                      Or {formatNaira(monthly)} a month if you pay monthly. Paying
                      yearly gives you {YEARLY_FREE_MONTHS} months free.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
