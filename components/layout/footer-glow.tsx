"use client"

import { usePointerSpotlight } from "@/hooks/use-pointer-spotlight"

/** A soft light that follows the pointer across the footer. Decorative; it sits behind the content. */
export function FooterGlow() {
  const ref = usePointerSpotlight<HTMLDivElement>(true)

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 data-[active=true]:opacity-100 motion-reduce:hidden"
      style={{
        backgroundImage:
          "radial-gradient(520px circle at var(--mx, 50%) var(--my, 50%), rgb(249 249 245 / 0.07), transparent 65%)",
      }}
    />
  )
}
