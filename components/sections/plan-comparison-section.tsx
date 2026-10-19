import { PlanComparison } from "@/components/pricing/plan-comparison"
import { Reveal } from "@/components/shared/reveal"
import { Section } from "@/components/shared/section"
import { SectionHeading } from "@/components/shared/section-heading"

export function PlanComparisonSection() {
  return (
    <Section id="compare" width="wide" spacing="bottom">
      <Reveal>
        <SectionHeading
          eyebrow="Compare plans"
          title="Everything, side by side."
          description="What each plan includes, so there are no surprises."
        />
      </Reveal>
      <Reveal delay={120} className="mt-12">
        <PlanComparison />
      </Reveal>
    </Section>
  )
}
