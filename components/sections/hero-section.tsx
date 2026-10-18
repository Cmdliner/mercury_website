import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { ConstructionBadge } from "@/components/shared/construction-badge"
import { Container } from "@/components/shared/container"
import { Photo } from "@/components/shared/photo"
import { buttonVariants } from "@/components/ui/button"
import { WaitlistDialog } from "@/components/waitlist/waitlist-dialog"
import { WAITLIST_CTA } from "@/lib/constants"
import { PHOTOS } from "@/lib/images"

/**
 * A single centred column over a full-colour photograph. A light frosted layer
 * covers the whole section: the photo stays visible but softened, and a soft
 * text shadow keeps the copy readable. The section slides up under the
 * translucent header.
 */
export function HeroSection() {
  return (
    <section className="theme-night relative isolate -mt-16 overflow-hidden bg-background text-foreground">
      <Photo
        photo={PHOTOS.hero}
        sizes="100vw"
        priority
        grayscale={false}
        className="-z-10"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-black/40 backdrop-blur-[3px]"
      />

      <Container className="flex min-h-[40rem] flex-col items-center justify-center pt-36 pb-28 text-center sm:min-h-[46rem]">
        <ConstructionBadge />
        <h1 className="text-display mt-8 max-w-3xl [text-shadow:0_2px_28px_rgba(0,0,0,0.5)]">
          One set of books for every store you run.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground [text-shadow:0_1px_18px_rgba(0,0,0,0.55)] sm:text-xl">
          Mercury gives each branch its own accounts and ledger, and brings them
          together so you can see balances, spending and reconciliation at a
          glance.
        </p>
        <div className="mt-10 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
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
