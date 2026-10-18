import Link from "next/link"

import { Logo } from "@/components/brand/logo"
import { DesktopNav } from "@/components/layout/desktop-nav"
import { MobileNav } from "@/components/layout/mobile-nav"
import { Container } from "@/components/shared/container"
import { buttonVariants } from "@/components/ui/button"
import { WaitlistDialog } from "@/components/waitlist/waitlist-dialog"
import { SIGN_IN_PATH } from "@/lib/constants"
import { cn } from "@/lib/utils"

/** Frosted glass bar: translucent surface and blur, deliberately no border. */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Logo />
          <DesktopNav />
        </div>
        <div className="flex items-center gap-1">
          <Link
            href={SIGN_IN_PATH}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "hidden text-muted-foreground hover:bg-transparent hover:text-foreground md:inline-flex"
            )}
          >
            Sign in
          </Link>
          <WaitlistDialog className="hidden md:inline-flex">
            Request access
          </WaitlistDialog>
          <MobileNav />
        </div>
      </Container>
    </header>
  )
}
