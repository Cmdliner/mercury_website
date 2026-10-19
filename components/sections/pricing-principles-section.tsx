import { BanknoteIcon, ReceiptTextIcon, UsersIcon, type LucideIcon } from "lucide-react"

import { Reveal } from "@/components/shared/reveal"
import { Section } from "@/components/shared/section"
import { SectionHeading } from "@/components/shared/section-heading"
import { PRICING_PRINCIPLES } from "@/lib/pricing"

/** One icon per principle, in the order of PRICING_PRINCIPLES. */
const ICONS: LucideIcon[] = [BanknoteIcon, UsersIcon, ReceiptTextIcon]

export function PricingPrinciplesSection() {
  return (
    <Section tone="muted">
      <Reveal>
        <SectionHeading
          eyebrow="How we charge"
          title="Priced to stay out of your way."
          description="Three promises that hold on every plan."
        />
      </Reveal>

      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {PRICING_PRINCIPLES.map((principle, index) => {
          const Icon = ICONS[index]
          return (
            <Reveal key={principle.title} delay={index * 100} className="h-full">
              <div className="h-full rounded-none border border-border-strong bg-card p-7">
                <span className="flex size-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <Icon className="size-5" />
                </span>
                <h3 className="text-heading mt-6">{principle.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {principle.description}
                </p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
