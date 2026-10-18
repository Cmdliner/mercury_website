import { cn } from "@/lib/utils"

/**
 * A bead of mercury cut on the diagonal, the halves slid apart along the cut.
 * Keep the geometry in sync with public/brand/*.svg and app/icon.svg.
 */
export function LogoMark({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="currentColor"
      aria-hidden="true"
      className={cn("size-8", className)}
      {...props}
    >
      <path
        transform="translate(0.8 -2.8)"
        d="M36.73 11.27A18 18 0 0 0 11.27 36.73Z"
      />
      <path
        transform="translate(-0.8 2.8)"
        d="M11.27 36.73A18 18 0 0 0 36.73 11.27Z"
      />
    </svg>
  )
}
