import { WaitlistForm } from "@/components/waitlist/waitlist-form"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type WaitlistDialogProps = React.ComponentProps<typeof Button>

/** Renders a Button that opens the early access form. Accepts Button props. */
export function WaitlistDialog({ children, ...buttonProps }: WaitlistDialogProps) {
  return (
    <Dialog>
      <DialogTrigger render={<Button {...buttonProps} />}>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Request early access</DialogTitle>
          <DialogDescription>
            Tell us about your business and we will reach out when Mercury
            opens up.
          </DialogDescription>
        </DialogHeader>
        <WaitlistForm />
      </DialogContent>
    </Dialog>
  )
}
