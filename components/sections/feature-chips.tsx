import { CheckIcon } from "lucide-react"

import { StatusPill } from "@/components/shared/status-pill"
import { formatNaira } from "@/lib/format"
import { SALES_BARS, SALES_TODAY, STORES_PREVIEW } from "@/lib/preview-data"

const CHIP =
  "w-56 border border-border-strong bg-card p-4 text-foreground shadow-[0_14px_34px_-18px_rgba(0,0,0,0.6)]"

/** A store that has just come online. */
export function StoreChip() {
  const store = STORES_PREVIEW[1]

  return (
    <div className={CHIP}>
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium">{store.name}</p>
        <StatusPill>Active</StatusPill>
      </div>
      <p className="mt-0.5 text-xs text-muted-foreground">{store.location}</p>
      <p className="mt-3 text-xl font-semibold tracking-tight tabular-nums">
        {formatNaira(store.balance)}
      </p>
    </div>
  )
}

/** Sales for the day, with bars that keep growing in turn. */
export function SalesChip() {
  return (
    <div className={CHIP}>
      <p className="text-xs text-muted-foreground">Sales today</p>
      <p className="mt-1 text-xl font-semibold tracking-tight tabular-nums">
        {formatNaira(SALES_TODAY)}
      </p>
      <div className="mt-4 flex h-12 items-end gap-1">
        {SALES_BARS.map((height, index) => (
          <span
            key={index}
            className="flex-1 origin-bottom rounded-sm bg-foreground/80 motion-safe:animate-grow"
            style={{ height: `${height}%`, animationDelay: `${index * 120}ms` }}
          />
        ))}
      </div>
    </div>
  )
}

/** The day has reconciled; the pill pulses. */
export function ReconcileChip() {
  return (
    <div className={CHIP}>
      <p className="text-xs text-muted-foreground">Today&apos;s reconciliation</p>
      <p className="mt-1 text-xl font-semibold tracking-tight tabular-nums">
        {formatNaira(SALES_TODAY)}
      </p>
      <StatusPill className="mt-3 gap-1 motion-safe:animate-pulse-ring">
        <CheckIcon className="size-3" strokeWidth={3} />
        Reconciled
      </StatusPill>
    </div>
  )
}
