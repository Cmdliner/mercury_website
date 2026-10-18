import { CheckList } from "@/components/shared/check-list"
import { Reveal } from "@/components/shared/reveal"
import { Section } from "@/components/shared/section"
import { SectionHeading } from "@/components/shared/section-heading"
import { INSTALL_STEPS, REQUIREMENTS } from "@/lib/download"

/** Three steps to get running, and what the computer needs. */
export function InstallSection() {
  return (
    <Section>
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <SectionHeading
            size="md"
            eyebrow="Getting started"
            title="Running in three steps."
          />
          <ol className="mt-10 grid gap-8">
            {INSTALL_STEPS.map((step, index) => (
              <li key={step.title} className="flex gap-5">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border-strong text-sm font-medium">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-base font-medium">{step.title}</h3>
                  <p className="mt-1.5 text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
        <Reveal delay={140}>
          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="text-heading">What you need</h3>
            <CheckList items={REQUIREMENTS} className="mt-6" />
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
