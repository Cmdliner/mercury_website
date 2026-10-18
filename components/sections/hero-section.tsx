import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { ConstructionBadge } from "@/components/shared/construction-badge"
import { HeroBackdrop } from "@/components/illustrations/hero-backdrop"
import { Container } from "@/components/shared/container"
import { buttonVariants } from "@/components/ui/button"
import { WaitlistDialog } from "@/components/waitlist/waitlist-dialog"
import { WAITLIST_CTA } from "@/lib/constants"

/**
 * A light opening: black text on the page background over a faint line-art backdrop built from
 * the Mercury bead, not a photograph. The section slides up under the translucent header.
 */
export function HeroSection() {
  return (
    <section className="relative isolate -mt-16 overflow-hidden bg-background text-foreground">
      <HeroBackdrop className="absolute inset-0 -z-10 text-foreground" />

      <Container className="flex flex-col items-center pt-36 pb-24 text-center sm:pt-44 sm:pb-32">
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

        {/* The product tour is switched off for now. To bring it back, import ProductTour from
            "@/components/sections/product-tour" and render:
            <ProductTour className="mt-16 max-w-5xl sm:mt-20" /> */}
      </Container>
    </section>
  )
}
