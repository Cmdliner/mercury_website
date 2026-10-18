import Image from "next/image"
import { ArrowRightIcon } from "lucide-react"

import { AppWindow } from "@/components/shared/app-window"
import { Capsule } from "@/components/shared/capsule"
import { Container } from "@/components/shared/container"
import { buttonVariants } from "@/components/ui/button"
import { WaitlistDialog } from "@/components/waitlist/waitlist-dialog"

export function HeroSection() {
  return (
    <section className="pt-16 pb-section sm:pt-24">
      <Container className="text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-border-strong px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
          <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />
          Now in development
        </p>
        <h1 className="text-display mx-auto mt-7 max-w-4xl">
          Every store, one clear set of books.
        </h1>
        <p className="text-lead mx-auto mt-6 max-w-2xl">
          Mercury is finance software for businesses that run more than one
          store. Give each store its own accounts, track what comes in and goes
          out, and always know where the money is.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <WaitlistDialog size="lg" className="w-full sm:w-auto">
            Request early access
            <ArrowRightIcon data-icon="inline-end" />
          </WaitlistDialog>
          <a
            href="#how-it-works"
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className: "w-full sm:w-auto",
            })}
          >
            See how it works
          </a>
        </div>
      </Container>

      <Container className="mt-16 sm:mt-24">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-surface-muted px-3 pt-3 sm:px-12 sm:pt-12">
          <Capsule className="-top-6 -left-28 h-44 w-[26rem] -rotate-[14deg] bg-foreground/[0.04]" />
          <Capsule className="top-44 -right-24 h-40 w-[24rem] rotate-[11deg] bg-foreground/[0.04]" />
          <AppWindow
            title="Overview"
            className="relative mx-auto max-h-[26rem] max-w-5xl rounded-b-none border-b-0 sm:max-h-[38rem]"
          >
            <Image
              src="/screens/dashboard.png"
              alt="Mercury overview screen showing total balance, sales today and recent transactions"
              width={1440}
              height={900}
              priority
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="h-auto w-full"
            />
          </AppWindow>
        </div>
      </Container>
    </section>
  )
}
