import { LogoMark } from "@/components/brand/logo-mark"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { WaitlistForm } from "@/components/waitlist/waitlist-form"
import { WAITLIST_CTA } from "@/lib/constants"

type WaitlistDialogProps = React.ComponentProps<typeof Button>

/** Renders a Button that opens the waitlist modal. Accepts Button props. */
export function WaitlistDialog({ children, ...buttonProps }: WaitlistDialogProps) {
  return (
    <Dialog>
      <DialogTrigger render={<Button {...buttonProps} />}>{children}</DialogTrigger>
      <DialogContent className="gap-0 overflow-hidden rounded-3xl border border-border bg-background p-0 text-foreground ring-0 sm:max-w-[34rem]">
        <div className="max-h-[calc(100dvh-2rem)] overflow-y-auto px-6 pt-6 pb-7 sm:px-10 sm:pt-7 sm:pb-8">
          <LogoMark className="size-8" />
          <DialogHeader className="mt-7 gap-3">
            <DialogTitle className="font-serif text-[2.5rem] leading-[1.02] font-normal tracking-tight italic sm:text-[3.25rem]">
              {WAITLIST_CTA}.
            </DialogTitle>
            <DialogDescription className="max-w-sm text-base leading-relaxed text-muted-foreground">
              We will email you when early access opens.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6">
            <WaitlistForm />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
