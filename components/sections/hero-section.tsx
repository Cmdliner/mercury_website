import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { ConstructionBadge } from "@/components/shared/construction-badge"
import { HeroBackdrop } from "@/components/illustrations/hero-backdrop"
import { Container } from "@/components/shared/container"
import { buttonVariants } from "@/components/ui/button"
import { WaitlistDialog } from "@/components/waitlist/waitlist-dialog"
import { WAITLIST_CTA } from "@/lib/constants"

/**
 * The one dark section of the page: the design system's near-black with white text, so the
 * opening has contrast against the light sections that follow. The backdrop is line art built
 * from the Mercury bead, not a photograph. The section slides
 * up under the translucent header.
 */
export function HeroSection() {
  return (
    <section className="theme-night relative isolate -mt-16 overflow-hidden bg-background text-foreground">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(60%_50%_at_50%_0%,rgb(255_255_255/0.07),transparent)]"
      />
      <HeroBackdrop className="absolute inset-0 -z-10 text-foreground" />

      <Container className="flex min-h-[40rem] flex-col items-center justify-center pt-36 pb-28 text-center sm:min-h-[44rem]">
        <div className="motion-safe:animate-rise">
          <ConstructionBadge />
        </div>
        <h1 className="text-display mt-8 max-w-3xl [animation-delay:120ms] motion-safe:animate-rise">
          One set of books for every store you run.
        </h1>
        <p className="text-lead mt-6 max-w-2xl [animation-delay:240ms] motion-safe:animate-rise sm:text-xl">
          Mercury gives each branch its own accounts and ledger, and brings them
          together so you can see balances, spending and reconciliation at a
          glance.
        </p>
        <div className="mt-10 flex w-full flex-col justify-center gap-3 [animation-delay:360ms] motion-safe:animate-rise sm:w-auto sm:flex-row">
          <WaitlistDialog size="lg" className="w-full sm:w-auto">
            {WAITLIST_CTA}
            <ArrowRightIcon data-icon="inline-end" />
          </WaitlistDialog>
          <Link
            href="#how-it-works"
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className: "w-full sm:w-auto",
            })}
          >
            See how it works
          </Link>
        </div>
      </Container>
    </section>
  )
}
