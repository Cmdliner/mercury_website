import { CheckList } from "@/components/shared/check-list"
import { ConstructionBadge } from "@/components/shared/construction-badge"
import { Reveal } from "@/components/shared/reveal"
import { Section } from "@/components/shared/section"
import { SectionHeading } from "@/components/shared/section-heading"
import { ABOUT_STATUS } from "@/lib/about"

export function AboutStatusSection() {
  return (
    <Section>
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <ConstructionBadge />
          <SectionHeading
            className="mt-8"
            size="md"
            eyebrow="Where we are"
            title="Still being built, and open to the first few."
          />
        </Reveal>
        <Reveal delay={140}>
          <CheckList items={ABOUT_STATUS} className="lg:mt-12" />
        </Reveal>
      </div>
    </Section>
  )
}
