import { Logo } from "@/components/brand/logo"
import { Capsule } from "@/components/shared/capsule"
import { WaitlistDialog } from "@/components/waitlist/waitlist-dialog"
import { WAITLIST_CTA_SHORT } from "@/lib/constants"

/**
 * Full-screen dark shell for sign-in: a single centred column over tilted
 * capsule shapes, as in the desktop sign-in design.
 */
export function AuthFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="theme-night relative isolate flex min-h-dvh flex-col overflow-hidden bg-background text-foreground">
      <Capsule className="top-[22%] left-[4%] h-[22rem] w-[40rem] -rotate-[8deg] bg-white/[0.03]" />
      <Capsule className="top-[38%] right-[-8%] h-[20rem] w-[36rem] rotate-[6deg] bg-white/[0.025]" />
      <Capsule className="bottom-[-6rem] left-[24%] h-64 w-[34rem] -rotate-[4deg] bg-white/[0.02]" />

      <div className="relative mx-auto flex w-full max-w-md flex-1 flex-col px-5 pt-10 pb-8 sm:pt-14">
        <div className="flex items-center justify-between">
          <Logo />
          <WaitlistDialog variant="outline" size="sm">
            {WAITLIST_CTA_SHORT}
          </WaitlistDialog>
        </div>
        <div className="pt-16 pb-12 sm:pt-20">{children}</div>
        <p className="mt-auto text-xs text-subtle-foreground">
          Mercury workspace &middot; secure access
        </p>
      </div>
    </div>
  )
}
