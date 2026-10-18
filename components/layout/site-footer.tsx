import { Logo } from "@/components/brand/logo"
import { FooterColumn } from "@/components/layout/footer-column"
import { Container } from "@/components/shared/container"
import { NAV_LINKS, SIGN_IN_PATH, SITE } from "@/lib/constants"
import { FEATURE_ROWS } from "@/lib/content"

const PRODUCT_LINKS = FEATURE_ROWS.map((row) => ({
  label: row.eyebrow,
  href: `#${row.id}`,
}))

const ACCOUNT_LINKS = [{ label: "Sign in", href: SIGN_IN_PATH }]

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Finance for businesses that run more than one store. Separate books
            for every branch, one clear view of the whole.
          </p>
        </div>
        <FooterColumn title="Product" links={PRODUCT_LINKS} />
        <FooterColumn title="Explore" links={NAV_LINKS} />
        <FooterColumn title="Account" links={ACCOUNT_LINKS} />
      </Container>
      <div className="border-t border-border">
        <Container className="py-6">
          <p className="text-xs text-subtle-foreground">
            &copy; {SITE.copyrightYear} {SITE.name}. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  )
}
