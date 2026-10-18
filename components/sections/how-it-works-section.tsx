import { StepItem } from "@/components/sections/step-item"
import { Capsule } from "@/components/shared/capsule"
import { Section } from "@/components/shared/section"
import { SectionHeading } from "@/components/shared/section-heading"
import { STEPS } from "@/lib/content"

export function HowItWorksSection() {
  return (
    <Section
      id="how-it-works"
      tone="forest"
      className="relative overflow-hidden"
    >
      <Capsule className="-right-32 -bottom-16 h-56 w-[34rem] -rotate-[12deg] bg-brand/10" />
      <Capsule className="-left-40 top-10 h-40 w-[26rem] rotate-[9deg] bg-sun/10" />
      <div className="relative grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
        <SectionHeading
          eyebrow="How it works"
          title="Set up once, then follow the money."
          description="Three steps from an empty workspace to every store reconciled."
        />
        <ol>
          {STEPS.map((step, index) => (
            <StepItem key={step.title} step={step} number={index + 1} />
          ))}
        </ol>
      </div>
    </Section>
  )
}
