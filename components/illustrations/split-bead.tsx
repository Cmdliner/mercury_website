import { cn } from "@/lib/utils"

/**
 * The Mercury bead pulled apart: one half solid, the other only outlined, as
 * if something has gone missing. Drawn with currentColor so it follows the text.
 */
export function SplitBead({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 400"
      fill="none"
      aria-hidden="true"
      className={cn("h-auto w-full", className)}
    >
      <ellipse cx="240" cy="352" rx="128" ry="11" fill="currentColor" opacity="0.08" />

      <path
        transform="translate(-30 -30)"
        d="M317.8 112.2A110 110 0 0 0 162.2 267.8Z"
        fill="currentColor"
      />
      <path
        transform="translate(30 30)"
        d="M162.2 267.8A110 110 0 0 0 317.8 112.2Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeDasharray="3 10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M96 96C84 130 90 168 116 196"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="2 9"
        opacity="0.35"
      />
      <circle cx="96" cy="92" r="8" fill="currentColor" opacity="0.18" />
      <circle cx="402" cy="296" r="11" fill="currentColor" opacity="0.14" />
      <circle cx="378" cy="84" r="6" fill="currentColor" opacity="0.2" />
      <circle cx="74" cy="288" r="5" fill="currentColor" opacity="0.2" />
    </svg>
  )
}
