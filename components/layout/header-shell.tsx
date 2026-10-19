"use client"

import { useScrolled } from "@/hooks/use-scrolled"
import { cn } from "@/lib/utils"

/**
 * The sticky header. The slot it takes in the page never changes size, so nothing jumps when it
 * animates; only the bar inside moves.
 *
 * At the top of the page the bar is a compact, transparent floating row. Once the page scrolls it
 * widens to the width of the page content, turns to near-black glass with a hairline, and gets more
 * breathing room, all as one eased transition. The dark theme scope flips the text and buttons with it, and also applies while the mobile menu is open so
 * the logo and toggle stay readable over the dark menu.
 */
export function HeaderShell({ children }: { children: React.ReactNode }) {
  const scrolled = useScrolled()

  return (
    <header className="sticky top-0 z-50 h-20 w-full px-3 pt-3 sm:px-4">
      <div
        data-scrolled={scrolled}
        className={cn(
          "mx-auto flex items-center border night-while-menu-open transition-[max-width,height,padding,border-radius,background-color,border-color,backdrop-filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none [&_*]:transition-colors [&_*]:duration-500",
          scrolled
            ? "theme-night h-[3.75rem] max-w-6xl rounded-xl border-border bg-black/95 px-6 text-foreground backdrop-blur-xl sm:px-9"
            : "h-16 max-w-4xl rounded-2xl border-transparent bg-transparent px-5 backdrop-blur-none sm:px-6"
        )}
      >
        <div className="flex w-full items-center justify-between">
          {children}
        </div>
      </div>
    </header>
  )
}
