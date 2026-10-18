import { cn } from "@/lib/utils"

/**
 * A pill shape: Mercury's decorative motif, taken from the desktop sign-in
 * design. Position, size, rotation and colour all come from className.
 */
export function Capsule({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute rounded-full", className)}
    />
  )
}
