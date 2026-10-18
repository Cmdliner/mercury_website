import { cn } from "@/lib/utils"

type StatusPillProps = {
  children: React.ReactNode
  className?: string
}

/** The muted green status pill used across the desktop app. */
export function StatusPill({ children, className }: StatusPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-brand-soft px-2.5 py-0.5 text-xs font-medium text-brand",
        className
      )}
    >
      {children}
    </span>
  )
}
