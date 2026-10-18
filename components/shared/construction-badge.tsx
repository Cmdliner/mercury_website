import { Construction, Hammer, HardHat, LoaderCircle } from "lucide-react"

/** Marks the product as still being built: tools on the left, a live spinner on the right. */
export function ConstructionBadge() {
  return (
    <p className="inline-flex items-center gap-3 border border-sun/50 bg-sun-soft px-3 py-2 text-xs font-medium text-sun-ink">
      <span className="flex items-center gap-1.5" aria-hidden="true">
        <HardHat className="size-4" />
        <Hammer className="size-4" />
        <Construction className="size-4" />
      </span>
      <span className="h-4 w-px bg-sun-ink/30" aria-hidden="true" />
      Under construction
      <LoaderCircle className="size-3.5 animate-spin" aria-hidden="true" />
    </p>
  )
}
