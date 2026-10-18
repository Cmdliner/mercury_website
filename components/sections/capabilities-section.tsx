import { CapabilityCard } from "@/components/sections/capability-card"
import { Reveal } from "@/components/shared/reveal"
import { Section } from "@/components/shared/section"
import { SectionHeading } from "@/components/shared/section-heading"
import { CAPABILITIES } from "@/lib/content"

export function CapabilitiesSection() {
  return (
    <Section tone="muted">
      <Reveal>
        <SectionHeading
          eyebrow="And more"
          title="Everything around the ledger."
          description="The details that make day-to-day work across several stores feel calm."
        />
      </Reveal>
      <ul className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {CAPABILITIES.map((capability, index) => (
          <Reveal key={capability.id} as="li" delay={(index % 3) * 110}>
            <CapabilityCard capability={capability} />
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
