import { FaqList } from "@/components/shared/faq-list"
import { Reveal } from "@/components/shared/reveal"
import { Section } from "@/components/shared/section"
import { SectionHeading } from "@/components/shared/section-heading"
import { WaitlistDialog } from "@/components/waitlist/waitlist-dialog"
import { WAITLIST_CTA } from "@/lib/constants"
import { FAQS } from "@/lib/content"

export function FaqSection() {
  return (
    <Section id="faq" className="border-t border-border">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <Reveal className="lg:sticky lg:top-28">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions, answered."
            description="Anything else you would like to know before Mercury opens up?"
          />
          <WaitlistDialog variant="outline" size="lg" className="mt-8">
            {WAITLIST_CTA}
          </WaitlistDialog>
        </Reveal>
        <Reveal delay={140}>
          <FaqList items={FAQS} />
        </Reveal>
      </div>
    </Section>
  )
}
