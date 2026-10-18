import { cn } from "@/lib/utils"

type MenuToggleProps = {
  open: boolean
  onToggle: () => void
}

/** Two-line hamburger that rotates into an X. */
export function MenuToggle({ open, onToggle }: MenuToggleProps) {
  return (
    <button
      type="button"
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      aria-controls="mobile-menu"
      onClick={onToggle}
      className="relative size-10 rounded-full bg-secondary transition-colors hover:bg-border md:hidden"
    >
      <span
        className={cn(
          "absolute left-1/2 h-0.5 w-4.5 -translate-x-1/2 rounded-full bg-foreground transition-all duration-300 ease-out",
          open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-[calc(50%-3.5px)]"
        )}
      />
      <span
        className={cn(
          "absolute left-1/2 h-0.5 w-4.5 -translate-x-1/2 rounded-full bg-foreground transition-all duration-300 ease-out",
          open ? "top-1/2 -translate-y-1/2 -rotate-45" : "top-[calc(50%+3.5px)]"
        )}
      />
    </button>
  )
}
