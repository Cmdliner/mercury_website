import { LogoMark } from "@/components/brand/logo-mark"
import { Photo } from "@/components/shared/photo"
import { Reveal } from "@/components/shared/reveal"
import { Section } from "@/components/shared/section"
import { WaitlistDialog } from "@/components/waitlist/waitlist-dialog"
import { WAITLIST_CTA } from "@/lib/constants"
import { PHOTOS } from "@/lib/images"

export function CtaSection() {
  return (
    <Section>
      <Reveal>
        <div className="theme-night relative isolate overflow-hidden rounded-[2rem] bg-background px-6 py-24 text-center text-foreground sm:py-32">
          <Photo
            photo={PHOTOS.glass}
            sizes="(min-width: 1152px) 1152px, 100vw"
            className="opacity-60"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-background/40" />
          <div className="relative">
            <LogoMark className="mx-auto size-11" />
            <h2 className="text-title mx-auto mt-8 max-w-2xl">
              See where every naira goes.
            </h2>
            <p className="text-lead mx-auto mt-5 max-w-md">
              Mercury is opening to a small group of businesses first. Join the
              waitlist to be one of them.
            </p>
            <WaitlistDialog size="lg" className="mt-10">
              {WAITLIST_CTA}
            </WaitlistDialog>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
