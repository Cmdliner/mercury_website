"use client"

import type { Screen } from "@/lib/content"
import { cn } from "@/lib/utils"

type ScreenTabsProps = {
  screens: Screen[]
  activeIndex: number
  onSelect: (index: number) => void
}

export function ScreenTabs({ screens, activeIndex, onSelect }: ScreenTabsProps) {
  return (
    <div
      role="tablist"
      aria-label="App screens"
      className="-mx-1 flex gap-1 overflow-x-auto px-1 pb-1 [scrollbar-width:none]"
    >
      {screens.map((screen, index) => (
        <button
          key={screen.id}
          type="button"
          role="tab"
          aria-selected={index === activeIndex}
          onClick={() => onSelect(index)}
          className={cn(
            "shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
            index === activeIndex
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {screen.title}
        </button>
      ))}
    </div>
  )
}
