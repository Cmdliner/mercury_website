import { CheckList } from "@/components/shared/check-list"
import { Photo } from "@/components/shared/photo"
import { Reveal } from "@/components/shared/reveal"
import { Section } from "@/components/shared/section"
import { SectionHeading } from "@/components/shared/section-heading"
import { VALUE_POINTS } from "@/lib/content"
import { PHOTOS } from "@/lib/images"

export function ValueSection() {
  return (
    <Section>
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-border bg-surface-muted lg:aspect-[4/5]">
            <Photo
              photo={PHOTOS.owner}
              sizes="(min-width: 1024px) 520px, 100vw"
              grayscale={false}
            />
          </div>
        </Reveal>
        <Reveal delay={140}>
          <SectionHeading
            size="md"
            eyebrow="Why Mercury"
            title="Spreadsheets stop scaling the day you open a second store."
            description="Money for one shop is easy to follow. Across several, it scatters. Mercury gives every branch its own books and pulls them into one view you can trust."
          />
          <CheckList items={VALUE_POINTS} className="mt-9" />
        </Reveal>
      </div>
    </Section>
  )
}
