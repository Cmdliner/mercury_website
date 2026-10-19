"use client"

import { ArrowUpIcon } from "lucide-react"

/** Scrolls back to the top of the page. Smooth, unless the person has asked for less motion. */
export function BackToTop() {
  const scrollToTop = () => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="group inline-flex items-center gap-3 text-xs text-muted-foreground transition-colors hover:text-foreground"
    >
      Back to top
      <span className="relative flex size-9 items-center justify-center overflow-hidden rounded-full border border-border-strong transition-colors duration-300 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
        <ArrowUpIcon className="size-4 transition-transform duration-300 ease-out group-hover:-translate-y-8" />
        <ArrowUpIcon className="absolute size-4 translate-y-8 transition-transform duration-300 ease-out group-hover:translate-y-0" />
      </span>
    </button>
  )
}
