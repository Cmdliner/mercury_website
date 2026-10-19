"use client"

import { useState } from "react"

import { BillingToggle } from "@/components/pricing/billing-toggle"
import { EnterpriseBanner } from "@/components/pricing/enterprise-banner"
import { PlanCard } from "@/components/pricing/plan-card"
import { Reveal } from "@/components/shared/reveal"
import { Section } from "@/components/shared/section"
import { PLANS, getPlan, type BillingCycle } from "@/lib/pricing"

/** The plans with a published price. Enterprise has its own band underneath. */
const PRICED_PLANS = PLANS.filter((plan) => plan.monthly !== null)

export function PricingPlansSection() {
  const [cycle, setCycle] = useState<BillingCycle>("yearly")

  return (
    <Section id="plans" width="wide" className="pt-12 sm:pt-16">
      <Reveal>
        <BillingToggle cycle={cycle} onChange={setCycle} />
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-8">
        {PRICED_PLANS.map((plan, index) => (
          <Reveal
            key={plan.id}
            delay={index * 100}
            className="h-full"
          >
            <PlanCard plan={plan} cycle={cycle} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={200} className="mt-10 lg:mt-14">
        <EnterpriseBanner plan={getPlan("enterprise")} />
      </Reveal>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        Prices are in naira. Mercury is still being built, so plans and prices
        may change before launch.
      </p>
    </Section>
  )
}
