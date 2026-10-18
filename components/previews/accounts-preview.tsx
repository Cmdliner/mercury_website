import { formatNaira } from "@/lib/format"
import { TONE_STYLES } from "@/lib/tones"
import { cn } from "@/lib/utils"
import { ACCOUNTS_PREVIEW } from "@/lib/preview-data"

export function AccountsPreview() {
  return (
    <div className="grid gap-3">
      <div className="rounded-2xl border border-border bg-card px-5 py-5">
        <p className="text-base font-semibold tracking-tight">Accounts</p>
        <ul className="mt-3 divide-y divide-border">
          {ACCOUNTS_PREVIEW.map((account) => (
            <li
              key={account.name}
              className="flex items-center justify-between gap-3 py-3"
            >
              <span className="flex items-center gap-2.5 text-sm font-medium">
                <span
                  className={cn("size-2 rounded-full", TONE_STYLES[account.tone].dot)}
                />
                {account.name}
              </span>
              <span className="flex items-center gap-4">
                <span className="hidden text-xs text-muted-foreground sm:inline">
                  {account.normalBalance}
                </span>
                <span className="text-sm tabular-nums">
                  {formatNaira(account.balance)}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="theme-night rounded-2xl bg-background px-5 py-4 text-foreground">
        <p className="text-sm font-medium">Ledger-derived balance</p>
        <p className="mt-1 text-xs text-muted-foreground">
          Balance = ledger entries aggregated by account. No stored wallet
          balance.
        </p>
      </div>
    </div>
  )
}
