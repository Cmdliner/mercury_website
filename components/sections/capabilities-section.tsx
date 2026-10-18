import { CapabilityItem } from "@/components/sections/capability-item"
import { Section } from "@/components/shared/section"
import { SectionHeading } from "@/components/shared/section-heading"
import { CAPABILITIES } from "@/lib/content"

export function CapabilitiesSection() {
  return (
    <Section tone="muted">
      <SectionHeading
        eyebrow="And more"
        title="Everything around the ledger."
        description="The details that make day-to-day work across several stores feel calm."
      />
      <ul className="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {CAPABILITIES.map((capability) => (
          <CapabilityItem key={capability.id} capability={capability} />
        ))}
      </ul>
    </Section>
  )
}
