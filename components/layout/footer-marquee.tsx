import { cn } from "@/lib/utils"

const TERMS = [
  "Accounts",
  "Ledgers",
  "Reconciliation",
  "Payments",
  "Staff",
  "Reports",
  "Every store",
]

/** A slow ribbon of what Mercury covers. It pauses when hovered and stands still for reduced motion. */
export function FooterMarquee() {
  return (
    <div
      aria-hidden="true"
      className="group relative overflow-hidden border-y border-border/60 py-4 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
    >
      <div className="flex w-max motion-safe:animate-marquee motion-safe:group-hover:[animation-play-state:paused]">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center">
            {TERMS.map((term) => (
              <li
                key={term}
                className={cn(
                  "flex items-center gap-8 pr-8 font-serif text-3xl italic text-foreground/40 transition-colors duration-300 hover:text-foreground sm:text-4xl"
                )}
              >
                {term}
                <span className="size-1.5 rounded-full bg-foreground/30" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
