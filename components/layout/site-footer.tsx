import Link from "next/link"
import { ArrowRightIcon, HardHat } from "lucide-react"

import { Logo } from "@/components/brand/logo"
import { BackToTop } from "@/components/layout/back-to-top"
import { FooterColumn } from "@/components/layout/footer-column"
import { FooterGlow } from "@/components/layout/footer-glow"
import { FooterMarquee } from "@/components/layout/footer-marquee"
import { FooterWordmark } from "@/components/layout/footer-wordmark"
import { Capsule } from "@/components/shared/capsule"
import { Container } from "@/components/shared/container"
import { Reveal } from "@/components/shared/reveal"
import { buttonVariants } from "@/components/ui/button"
import { WaitlistDialog } from "@/components/waitlist/waitlist-dialog"
import {
  COMPANY_LINKS,
  NAV_LINKS,
  SIGN_IN_PATH,
  SITE,
  WAITLIST_CTA,
} from "@/lib/constants"
import { FEATURE_ROWS } from "@/lib/content"
import { cn } from "@/lib/utils"

const PRODUCT_LINKS = FEATURE_ROWS.map((row) => ({
  label: row.eyebrow,
  href: `/#${row.id}`,
}))

/** The footer keeps How it works, which the header no longer lists. */
const EXPLORE_LINKS = [
  { label: "How it works", href: "/#how-it-works" },
  ...NAV_LINKS,
]

const ACCOUNT_LINKS = [{ label: "Sign in", href: SIGN_IN_PATH }]

export function SiteFooter() {
  return (
    <footer className="theme-night relative overflow-hidden rounded-t-[2.5rem] border-t border-border bg-[#0c0c0c] text-foreground sm:rounded-t-[3rem]">
      <FooterGlow />
      <Capsule className="-right-24 top-16 hidden h-44 w-[26rem] rotate-[16deg] bg-foreground/[0.04] motion-safe:animate-drift lg:block" />
      <Capsule className="right-40 top-56 hidden h-24 w-[16rem] -rotate-[12deg] border border-border lg:block" />

      <Container className="relative py-16 sm:py-24">
        <Reveal className="max-w-3xl">
          <p className="text-eyebrow">Get started</p>
          <h2 className="mt-5 text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl">
            One set of books for{" "}
            <span className="font-serif font-normal italic text-foreground/60">
              every store
            </span>{" "}
            you run.
          </h2>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <WaitlistDialog size="lg" className="group">
              {WAITLIST_CTA}
              <ArrowRightIcon className="transition-transform duration-300 group-hover:translate-x-1" />
            </WaitlistDialog>
            <Link
              href="/#how-it-works"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "bg-transparent"
              )}
            >
              See how it works
            </Link>
          </div>
        </Reveal>
      </Container>

      <FooterMarquee />

      <Container className="relative grid gap-14 py-16 lg:grid-cols-[1.4fr_2.6fr]">
        <Reveal className="max-w-xs">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Finance for businesses that run more than one store. Separate books
            for every branch, one clear view of the whole.
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
          <Reveal delay={0}>
            <FooterColumn title="Product" links={PRODUCT_LINKS} />
          </Reveal>
          <Reveal delay={90}>
            <FooterColumn title="Explore" links={EXPLORE_LINKS} />
          </Reveal>
          <Reveal delay={180}>
            <FooterColumn title="Company" links={COMPANY_LINKS} />
          </Reveal>
          <Reveal delay={270}>
            <FooterColumn title="Account" links={ACCOUNT_LINKS} />
          </Reveal>
        </div>
      </Container>

      <Container className="relative">
        <FooterWordmark />
      </Container>

      <div className="relative border-t border-border">
        <Container className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
            <p className="text-xs text-muted-foreground">
              &copy; {SITE.copyrightYear} {SITE.name}. All rights reserved.
            </p>
            <p className="inline-flex items-center gap-2 text-xs text-muted-foreground">
              <HardHat className="size-3.5" aria-hidden="true" />
              Mercury is under construction.
            </p>
          </div>
          <BackToTop />
        </Container>
      </div>
    </footer>
  )
}
