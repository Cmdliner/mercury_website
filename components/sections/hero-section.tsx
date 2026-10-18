import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { AppWindow } from "@/components/shared/app-window"
import { ConstructionBadge } from "@/components/shared/construction-badge"
import { Container } from "@/components/shared/container"
import { buttonVariants } from "@/components/ui/button"
import { WaitlistDialog } from "@/components/waitlist/waitlist-dialog"
import { WAITLIST_CTA } from "@/lib/constants"

/**
 * A calm, light opening: the headline on a soft surface, and the real app window rising
 * from below and fading into the next section. No photograph, so it blends with what follows.
 * The section slides up under the translucent header.
 */
export function HeroSection() {
  return (
    <section className="relative isolate -mt-16 overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-gradient-to-b from-surface-muted to-background"
      />

      <Container className="flex flex-col items-center pt-36 text-center sm:pt-44">
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

        {/* The app window is cut off at the bottom and fades into the page. */}
        <div className="relative mt-16 w-full max-w-5xl [animation-delay:480ms] motion-safe:animate-rise sm:mt-20">
          <div className="max-h-[17rem] overflow-hidden sm:max-h-[30rem]">
            <AppWindow className="rounded-b-none border-b-0">
              <Image
                src="/screens/desktop/dashboard-overview.png"
                alt="The Mercury overview with balances, sales today and recent transactions"
                width={1280}
                height={720}
                sizes="(min-width: 1024px) 1024px, 100vw"
                priority
                className="aspect-[4/3] w-full object-cover object-left-top sm:aspect-video"
              />
            </AppWindow>
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent sm:h-32"
          />
        </div>
      </Container>
    </section>
  )
}
