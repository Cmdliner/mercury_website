import { Reveal } from "@/components/shared/reveal"
import { Section } from "@/components/shared/section"
import { SectionHeading } from "@/components/shared/section-heading"
import { PRINCIPLES } from "@/lib/about"
import { CAPABILITY_HUES } from "@/lib/hues"

/** Numerals take the card hues in turn. */
const NUMERAL_HUES = [
  CAPABILITY_HUES.overview.accent,
  CAPABILITY_HUES.transactions.accent,
  CAPABILITY_HUES.detail.accent,
  CAPABILITY_HUES.onboarding.accent,
]

export function AboutPrinciplesSection() {
  return (
    <Section tone="muted">
      <Reveal>
        <SectionHeading
          eyebrow="What we believe"
          title="Four ideas shape everything we build."
        />
      </Reveal>
      <ul className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2">
        {PRINCIPLES.map((principle, index) => (
          <Reveal key={principle.title} as="li" delay={(index % 2) * 110}>
            <div className="border-t border-border-strong pt-6">
              <span
                className="font-mono text-sm font-medium"
                style={{ color: NUMERAL_HUES[index] }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-heading mt-4">{principle.title}</h3>
              <p className="mt-2.5 max-w-md text-base leading-relaxed text-muted-foreground">
                {principle.description}
              </p>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
