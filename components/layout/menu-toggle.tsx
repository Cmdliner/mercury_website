import { cn } from "@/lib/utils"

type MenuToggleProps = {
  open: boolean
  onToggle: () => void
}

/**
 * A pill that says "Menu" and turns into "Close". The label slides up to swap, and a plus
 * sign turns a quarter turn into a cross.
 */
export function MenuToggle({ open, onToggle }: MenuToggleProps) {
  return (
    <button
      type="button"
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      aria-controls="mobile-menu"
      onClick={onToggle}
      className="group relative inline-flex h-10 items-center gap-2.5 rounded-full border border-border-strong bg-card/60 pr-3 pl-4 text-sm font-medium transition-colors hover:bg-secondary md:hidden"
    >
      <span aria-hidden="true" className="relative block h-5 w-11 overflow-hidden">
        <span
          className={cn(
            "absolute inset-0 flex items-center transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            open ? "-translate-y-full" : "translate-y-0"
          )}
        >
          Menu
        </span>
        <span
          className={cn(
            "absolute inset-0 flex items-center transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            open ? "translate-y-0" : "translate-y-full"
          )}
        >
          Close
        </span>
      </span>

      <span
        aria-hidden="true"
        className="flex size-6 items-center justify-center rounded-full bg-foreground text-background"
      >
        <svg
          viewBox="0 0 12 12"
          className={cn(
            "size-3 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            open ? "rotate-[135deg]" : "rotate-0"
          )}
        >
          <path
            d="M6 1.5v9M1.5 6h9"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </span>
    </button>
  )
}
