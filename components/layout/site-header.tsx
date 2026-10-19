import Link from "next/link"

import { Logo } from "@/components/brand/logo"
import { HeaderShell } from "@/components/layout/header-shell"
import { DesktopNav } from "@/components/layout/desktop-nav"
import { MobileNav } from "@/components/layout/mobile-nav"
import { buttonVariants } from "@/components/ui/button"
import { WaitlistDialog } from "@/components/waitlist/waitlist-dialog"
import { SIGN_IN_PATH, WAITLIST_CTA_SHORT } from "@/lib/constants"
import { cn } from "@/lib/utils"

/** A compact floating row at the top of the page that widens into frosted glass on scroll (see HeaderShell). */
export function SiteHeader() {
  return (
    <HeaderShell>
      <div className="flex items-center gap-8">
        <Logo />
        <DesktopNav />
      </div>
      <div className="flex items-center gap-1">
        <Link
          href={SIGN_IN_PATH}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "hidden text-[15px] text-foreground/75 hover:bg-transparent hover:text-foreground md:inline-flex"
          )}
        >
          Sign in
        </Link>
        <WaitlistDialog className="hidden md:inline-flex">
          {WAITLIST_CTA_SHORT}
        </WaitlistDialog>
        <MobileNav />
      </div>
    </HeaderShell>
  )
}
