import { StepItem } from "@/components/sections/step-item"
import { Capsule } from "@/components/shared/capsule"
import { Reveal } from "@/components/shared/reveal"
import { Section } from "@/components/shared/section"
import { SectionHeading } from "@/components/shared/section-heading"
import { STEPS } from "@/lib/content"
import { FEATURE_HUES } from "@/lib/hues"

/** Each step takes the hue of the feature it leads to. */
const STEP_ACCENTS = [
  FEATURE_HUES.stores.accent,
  FEATURE_HUES.accounts.accent,
  FEATURE_HUES.reconciliation.accent,
]

export function HowItWorksSection() {
  return (
    <Section
      id="how-it-works"
      tone="night"
      className="relative overflow-hidden"
    >
      <Capsule className="-right-32 -bottom-16 h-56 w-[34rem] -rotate-[12deg] bg-white/[0.035]" />
      <Capsule className="-left-40 top-10 h-40 w-[26rem] rotate-[9deg] bg-white/[0.025]" />
      <div className="relative grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            title="Set up once, then follow the money."
            description="Three steps from an empty workspace to every store reconciled."
          />
        </Reveal>
        <Reveal delay={140}>
          <ol>
            {STEPS.map((step, index) => (
              <StepItem
                key={step.title}
                step={step}
                number={index + 1}
                accent={STEP_ACCENTS[index]}
              />
            ))}
          </ol>
        </Reveal>
      </div>
    </Section>
  )
}
