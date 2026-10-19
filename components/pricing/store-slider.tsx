"use client"

import { cn } from "@/lib/utils"

type StoreSliderProps = {
  value: number
  min: number
  max: number
  onChange: (value: number) => void
  className?: string
}

/** A range input drawn to match the design: a filled track and a round light thumb. */
export function StoreSlider({ value, min, max, onChange, className }: StoreSliderProps) {
  const filled = ((value - min) / (max - min)) * 100

  return (
    <input
      type="range"
      min={min}
      max={max}
      step={1}
      value={value}
      aria-label="Number of stores"
      onChange={(event) => onChange(Number(event.target.value))}
      style={{ "--filled": `${filled}%` } as React.CSSProperties}
      className={cn(
        "h-8 w-full cursor-pointer appearance-none bg-transparent outline-none",
        "[&::-webkit-slider-runnable-track]:h-1.5 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-[linear-gradient(to_right,var(--foreground)_var(--filled),var(--border-strong)_var(--filled))]",
        "[&::-webkit-slider-thumb]:-mt-[0.6rem] [&::-webkit-slider-thumb]:size-[1.65rem] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-[5px] [&::-webkit-slider-thumb]:border-background [&::-webkit-slider-thumb]:bg-foreground [&::-webkit-slider-thumb]:ring-1 [&::-webkit-slider-thumb]:ring-foreground [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110",
        "[&::-moz-range-track]:h-1.5 [&::-moz-range-track]:rounded-full [&::-moz-range-track]:bg-border-strong [&::-moz-range-progress]:h-1.5 [&::-moz-range-progress]:rounded-full [&::-moz-range-progress]:bg-foreground",
        "[&::-moz-range-thumb]:size-[1.65rem] [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-[5px] [&::-moz-range-thumb]:border-background [&::-moz-range-thumb]:bg-foreground",
        "focus-visible:[&::-webkit-slider-thumb]:ring-4 focus-visible:[&::-webkit-slider-thumb]:ring-foreground/30",
        className
      )}
    />
  )
}
