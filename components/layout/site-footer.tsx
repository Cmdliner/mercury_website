import { HardHat } from "lucide-react"

import { Logo } from "@/components/brand/logo"
import { FooterColumn } from "@/components/layout/footer-column"
import { Container } from "@/components/shared/container"
import { WaitlistDialog } from "@/components/waitlist/waitlist-dialog"
import {
  COMPANY_LINKS,
  NAV_LINKS,
  SIGN_IN_PATH,
  SITE,
  WAITLIST_CTA,
} from "@/lib/constants"
import { FEATURE_ROWS } from "@/lib/content"

const PRODUCT_LINKS = FEATURE_ROWS.map((row) => ({
  label: row.eyebrow,
  href: `/#${row.id}`,
}))

const ACCOUNT_LINKS = [{ label: "Sign in", href: SIGN_IN_PATH }]

export function SiteFooter() {
  return (
    <footer className="overflow-hidden border-t border-border">
      <Container className="grid gap-14 py-16 lg:grid-cols-[1.4fr_2.6fr]">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Finance for businesses that run more than one store. Separate books
            for every branch, one clear view of the whole.
          </p>
          <WaitlistDialog className="mt-7">{WAITLIST_CTA}</WaitlistDialog>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
          <FooterColumn title="Product" links={PRODUCT_LINKS} />
          <FooterColumn title="Explore" links={NAV_LINKS} />
          <FooterColumn title="Company" links={COMPANY_LINKS} />
          <FooterColumn title="Account" links={ACCOUNT_LINKS} />
        </div>
      </Container>

      <Container aria-hidden="true">
        <p className="pb-[0.1em] text-center text-[clamp(5rem,22vw,19rem)] leading-[0.9] font-semibold tracking-[-0.06em] text-foreground/[0.07] select-none">
          mercury
        </p>
      </Container>

      <div className="border-t border-border bg-background">
        <Container className="flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            &copy; {SITE.copyrightYear} {SITE.name}. All rights reserved.
          </p>
          <p className="inline-flex items-center gap-2 text-xs text-muted-foreground">
            <HardHat className="size-3.5" aria-hidden="true" />
            Mercury is under construction.
          </p>
        </Container>
      </div>
    </footer>
  )
}
