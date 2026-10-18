import { CheckIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DialogClose } from "@/components/ui/dialog"

export function WaitlistSuccess() {
  return (
    <div className="grid gap-6 border-t border-border pt-8">
      <span className="flex size-11 items-center justify-center bg-success-soft text-success">
        <CheckIcon className="size-5" strokeWidth={2.5} />
      </span>
      <div>
        <p className="font-serif text-3xl leading-tight italic">
          You are on the list.
        </p>
        <p className="mt-3 max-w-sm text-base leading-relaxed text-muted-foreground">
          Thanks for your interest. We will email you as soon as early access
          opens.
        </p>
      </div>
      <DialogClose render={<Button variant="outline" size="lg" className="w-full" />}>
        Done
      </DialogClose>
    </div>
  )
}
