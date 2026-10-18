import { CheckIcon } from "lucide-react"

import { StatusPill } from "@/components/shared/status-pill"
import { formatNaira } from "@/lib/format"
import { SALES_BARS, SALES_TODAY } from "@/lib/preview-data"

export function ReconciliationPreview() {
  return (
    <div className="grid gap-3">
      <div className="rounded-2xl border border-border bg-card px-5 py-5">
        <p className="text-sm text-muted-foreground">Sales today</p>
        <p className="mt-1 text-2xl font-semibold tracking-tight tabular-nums">
          {formatNaira(SALES_TODAY)}
        </p>
        <div className="mt-5 flex h-20 items-end gap-1.5">
          {SALES_BARS.map((height, index) => (
            <span
              key={index}
              className="flex-1 rounded-sm bg-border-strong"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
      <div className="theme-night flex items-center justify-between gap-4 rounded-2xl bg-background px-5 py-5 text-foreground">
        <div>
          <p className="text-sm font-medium">Today&apos;s reconciliation</p>
          <p className="mt-1 text-xl font-semibold tracking-tight tabular-nums">
            {formatNaira(SALES_TODAY)}
          </p>
          <p className="text-xs text-muted-foreground">Payments received</p>
        </div>
        <StatusPill className="gap-1 px-3 py-1">
          <CheckIcon className="size-3" strokeWidth={3} />
          Reconciled
        </StatusPill>
      </div>
    </div>
  )
}
