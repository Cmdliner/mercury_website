import Link from "next/link"

import { MobileMenuLink } from "@/components/layout/mobile-menu-link"
import { Capsule } from "@/components/shared/capsule"
import { buttonVariants } from "@/components/ui/button"
import { WaitlistDialog } from "@/components/waitlist/waitlist-dialog"
import { NAV_LINKS, SIGN_IN_PATH, WAITLIST_CTA } from "@/lib/constants"
import { FEATURE_ROWS } from "@/lib/content"
import { cn } from "@/lib/utils"

type MobileMenuPanelProps = {
  open: boolean
  onNavigate: () => void
}

const PRODUCT_LINKS = FEATURE_ROWS.map((row) => ({
  label: row.eyebrow,
  href: `/#${row.id}`,
}))

/** Where the circular reveal starts: the centre of the menu toggle. */
const REVEAL_ORIGIN = "calc(100% - 2.25rem) 2.25rem"

/** Full-screen menu, revealed as a circle growing from the toggle button. */
export function MobileMenuPanel({ open, onNavigate }: MobileMenuPanelProps) {
  const exploreOffset = PRODUCT_LINKS.length

  return (
    <div
      id="mobile-menu"
      aria-hidden={!open}
      inert={!open}
      style={{
        clipPath: `circle(${open ? "150%" : "0%"} at ${REVEAL_ORIGIN})`,
      }}
      className="fixed inset-0 z-40 overflow-y-auto bg-background/65 shadow-[inset_0_1px_0_rgb(255_255_255/0.7)] backdrop-blur-2xl backdrop-saturate-150 transition-[clip-path] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden"
    >
      {/* A soft glow from the toggle and a faint shade at the foot give the glass some depth. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_38%_at_100%_0%,rgb(255_255_255/0.6),transparent),radial-gradient(60%_34%_at_0%_100%,rgb(15_15_15/0.07),transparent)]"
      />
      <Capsule className="-right-24 top-1/3 h-40 w-[22rem] rotate-[14deg] bg-foreground/[0.05]" />
      <Capsule className="-left-32 bottom-1/4 h-36 w-[22rem] -rotate-[10deg] bg-foreground/[0.04]" />

      <div className="relative flex min-h-dvh flex-col px-5 pt-24 pb-8">
        <p className="text-eyebrow">Product</p>
        <nav aria-label="Product" className="mt-2">
          {PRODUCT_LINKS.map((link, index) => (
            <MobileMenuLink
              key={link.href}
              {...link}
              open={open}
              index={index}
              onNavigate={onNavigate}
            />
          ))}
        </nav>

        <p className="text-eyebrow mt-9">Explore</p>
        <nav aria-label="Explore" className="mt-2">
          {NAV_LINKS.map((link, index) => (
            <MobileMenuLink
              key={link.href}
              {...link}
              open={open}
              index={exploreOffset + index}
              size="md"
              onNavigate={onNavigate}
            />
          ))}
        </nav>

        <div
          style={{
            transitionDelay: open ? "520ms" : "0ms",
          }}
          className={cn(
            "mt-auto grid gap-3 pt-10 transition-[opacity,translate] duration-500 ease-out",
            open ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          )}
        >
          <WaitlistDialog size="lg" className="w-full" onClick={onNavigate}>
            {WAITLIST_CTA}
          </WaitlistDialog>
          <Link
            href={SIGN_IN_PATH}
            onClick={onNavigate}
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className: "w-full bg-card",
            })}
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  )
}
