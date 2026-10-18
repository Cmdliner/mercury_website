import { cn } from "@/lib/utils"

type AppWindowProps = {
  title?: string
  className?: string
  children: React.ReactNode
}

/** Window chrome around a product screenshot. Flat: depth comes from the border. */
export function AppWindow({ title = "Mercury", className, children }: AppWindowProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border-strong bg-card",
        className
      )}
    >
      <div className="relative flex items-center border-b border-border bg-surface-muted px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-foreground/15" />
          <span className="size-2.5 rounded-full bg-foreground/15" />
          <span className="size-2.5 rounded-full bg-foreground/15" />
        </div>
        <span className="absolute inset-x-0 text-center text-xs text-muted-foreground">
          {title}
        </span>
      </div>
      {children}
    </div>
  )
}
