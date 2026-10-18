import { cn } from "@/lib/utils"

const HALF_A = "M36.73 11.27A18 18 0 0 0 11.27 36.73Z"
const HALF_B = "M11.27 36.73A18 18 0 0 0 36.73 11.27Z"

/**
 * Line-art backdrop for the dark hero: quiet rings around the headline and the Mercury bead,
 * cut on the diagonal, drifting apart at the corners. Drawn with currentColor so it follows
 * the text colour; everything is faint so the copy stays the focus.
 */
export function HeroBackdrop({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 800"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
      className={cn(
        "size-full [mask-image:linear-gradient(to_bottom,black,black_65%,transparent)]",
        className
      )}
    >
      {/* Rings around the headline */}
      <g stroke="currentColor" strokeWidth="1">
        <circle cx="720" cy="400" r="170" opacity="0.14" />
        <circle cx="720" cy="400" r="270" opacity="0.1" />
        <circle cx="720" cy="400" r="380" opacity="0.07" />
        <circle cx="720" cy="400" r="510" opacity="0.05" />
        <circle cx="720" cy="400" r="660" opacity="0.035" />
      </g>

      {/* The diagonal cut, running through the whole scene */}
      <path
        d="M0 800L1440 0"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="2 10"
        strokeLinecap="round"
        opacity="0.18"
      />

      {/* Large bead, top right: one half solid, one outlined */}
      <g transform="translate(1010 40) scale(8)">
        <path transform="translate(0.8 -2.8)" d={HALF_A} fill="currentColor" opacity="0.14" />
        <path
          transform="translate(-0.8 2.8)"
          d={HALF_B}
          stroke="currentColor"
          strokeWidth="0.35"
          strokeDasharray="0.4 1.2"
          strokeLinecap="round"
          opacity="0.5"
        />
      </g>

      {/* Smaller bead, bottom left, mirrored */}
      <g transform="translate(150 470) scale(5)">
        <path
          transform="translate(0.8 -2.8)"
          d={HALF_A}
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="0.5 1.6"
          strokeLinecap="round"
          opacity="0.45"
        />
        <path transform="translate(-0.8 2.8)" d={HALF_B} fill="currentColor" opacity="0.1" />
      </g>

      {/* Small nodes along the cut, like entries on a ledger */}
      <g fill="currentColor">
        <circle cx="360" cy="560" r="4" opacity="0.5" />
        <circle cx="545" cy="432" r="3" opacity="0.35" />
        <circle cx="900" cy="186" r="4" opacity="0.5" />
        <circle cx="1090" cy="54" r="3" opacity="0.35" />
      </g>
    </svg>
  )
}
