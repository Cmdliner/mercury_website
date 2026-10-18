import { Section } from "@/components/shared/section"
import { SectionHeading } from "@/components/shared/section-heading"
import { ScreenCarousel } from "@/components/showcase/screen-carousel"

export function ShowcaseSection() {
  return (
    <Section id="screens">
      <SectionHeading
        eyebrow="Screens"
        title="A quiet interface that puts the numbers first."
        description="Browse the desktop app as it is being designed."
      />
      <ScreenCarousel />
    </Section>
  )
}
