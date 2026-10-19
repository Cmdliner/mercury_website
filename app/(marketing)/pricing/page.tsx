import type { Metadata } from "next"

import { CtaSection } from "@/components/sections/cta-section"
import { PlanComparisonSection } from "@/components/sections/plan-comparison-section"
import { PricingFaqSection } from "@/components/sections/pricing-faq-section"
import { PricingPlansSection } from "@/components/sections/pricing-plans-section"
import { PricingPrinciplesSection } from "@/components/sections/pricing-principles-section"
import { StoreEstimatorSection } from "@/components/sections/store-estimator-section"
import { PageHeader } from "@/components/shared/page-header"

export const metadata: Metadata = {
  title: "Pricing | Mercury",
  description:
    "Simple pricing for businesses that run more than one store. Start free with one store and pay by the number of stores as you grow.",
}

export default function Pricing() {
  return (
    <>
      <PageHeader
        align="center"
        eyebrow="Pricing"
        title="Pricing that grows with your stores."
        description="Start free with one store. As you open more, pay for the stores you run, never for the people who work in them and never a cut of your sales."
      />
      <PricingPlansSection />
      <StoreEstimatorSection />
      <PlanComparisonSection />
      <PricingPrinciplesSection />
      <PricingFaqSection />
      <CtaSection />
    </>
  )
}
