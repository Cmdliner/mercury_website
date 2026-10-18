import { CheckIcon } from "lucide-react"

import { cn } from "@/lib/utils"

export function CheckList({
  items,
  className,
}: {
  items: string[]
  className?: string
}) {
  return (
    <ul className={cn("grid gap-3.5", className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
            <CheckIcon className="size-3" strokeWidth={3} />
          </span>
          <span className="text-base leading-snug">{item}</span>
        </li>
      ))}
    </ul>
  )
}
