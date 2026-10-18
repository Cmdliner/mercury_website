import { Reveal } from "@/components/shared/reveal"
import { Section } from "@/components/shared/section"
import { SectionHeading } from "@/components/shared/section-heading"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
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
          <Accordion defaultValue={[FAQS[0].question]}>
            {FAQS.map((item) => (
              <AccordionItem
                key={item.question}
                value={item.question}
                className="border-b border-border-strong first:border-t"
              >
                <AccordionTrigger className="items-center gap-6 py-6 text-lg font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="max-w-xl pb-6 text-base leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </Section>
  )
}
