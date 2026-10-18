import { StatusPill } from "@/components/shared/status-pill"
import { buttonVariants } from "@/components/ui/button"
import { formatNaira } from "@/lib/format"
import { STORES_PREVIEW } from "@/lib/preview-data"

export function StoresPreview() {
  return (
    <div className="rounded-2xl border border-border bg-card">
      <div className="flex items-center justify-between px-5 pt-5">
        <div>
          <p className="text-base font-semibold tracking-tight">Stores</p>
          <p className="text-xs text-muted-foreground">Mercury / Stores</p>
        </div>
        <span className={buttonVariants({ size: "sm" })}>Add store</span>
      </div>
      <ul className="mt-4 divide-y divide-border px-5 pb-2">
        {STORES_PREVIEW.map((store) => (
          <li
            key={store.name}
            className="flex items-center justify-between gap-3 py-4"
          >
            <div>
              <p className="text-sm font-medium">{store.name}</p>
              <p className="text-xs text-muted-foreground">{store.location}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm tabular-nums">
                {formatNaira(store.balance)}
              </span>
              <StatusPill className="hidden sm:inline-flex">Active</StatusPill>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
