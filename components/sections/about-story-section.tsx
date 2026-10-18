import { Photo } from "@/components/shared/photo"
import { Reveal } from "@/components/shared/reveal"
import { Section } from "@/components/shared/section"
import { SectionHeading } from "@/components/shared/section-heading"
import { ABOUT_STORY } from "@/lib/about"
import { PHOTOS } from "@/lib/images"

export function AboutStorySection() {
  return (
    <Section>
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <SectionHeading size="md" eyebrow="Our story" title="Why Mercury exists." />
          <div className="mt-8 grid gap-5">
            {ABOUT_STORY.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={140}>
          <div className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-border bg-surface-muted lg:aspect-[4/5]">
            <Photo
              photo={PHOTOS.stores}
              sizes="(min-width: 1024px) 520px, 100vw"
              grayscale={false}
            />
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
