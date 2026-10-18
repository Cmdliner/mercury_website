import { TONE_STYLES } from "@/lib/tones"
import type { Capability } from "@/lib/content"
import { cn } from "@/lib/utils"

export function CapabilityItem({ capability }: { capability: Capability }) {
  const Icon = capability.icon

  return (
    <li className="border-t border-border-strong pt-6">
      <span
        className={cn(
          "flex size-11 items-center justify-center rounded-xl",
          TONE_STYLES[capability.tone].chip
        )}
      >
        <Icon className="size-5" strokeWidth={1.75} />
      </span>
      <h3 className="text-heading mt-5">{capability.title}</h3>
      <p className="mt-2 text-base leading-relaxed text-muted-foreground">
        {capability.description}
      </p>
    </li>
  )
}
