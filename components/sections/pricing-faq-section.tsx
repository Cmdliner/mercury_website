import { FaqList } from "@/components/shared/faq-list"
import { Reveal } from "@/components/shared/reveal"
import { Section } from "@/components/shared/section"
import { SectionHeading } from "@/components/shared/section-heading"
import { PRICING_FAQS } from "@/lib/pricing"

export function PricingFaqSection() {
  return (
    <Section id="pricing-faq">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <Reveal className="lg:sticky lg:top-28">
          <SectionHeading
            eyebrow="Pricing questions"
            title="The small print, in plain words."
            description="How plans, stores and fees work, before you decide anything."
          />
        </Reveal>
        <Reveal delay={140}>
          <FaqList items={PRICING_FAQS} />
        </Reveal>
      </div>
    </Section>
  )
}
