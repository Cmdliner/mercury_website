import { CheckIcon } from "lucide-react"

export function WaitlistSuccess() {
  return (
    <div className="flex flex-col items-center gap-3 py-6 text-center">
      <span className="flex size-10 items-center justify-center rounded-full bg-brand/10 text-brand">
        <CheckIcon className="size-5" />
      </span>
      <p className="text-base font-medium">You are on the list</p>
      <p className="max-w-xs text-sm text-muted-foreground">
        Thanks for your interest. We will email you as soon as early access
        opens.
      </p>
    </div>
  )
}
