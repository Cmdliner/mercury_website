"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

type RevealProps = {
  children: React.ReactNode
  /** Milliseconds to wait once visible; use it to stagger siblings. */
  delay?: number
  as?: "div" | "li"
  className?: string
}

/** Fades and lifts its content into place the first time it scrolls into view. */
export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className,
}: RevealProps) {
  const { ref, inView } = useInView()

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
      className={cn(
        "transition-[opacity,translate] duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none",
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className
      )}
    >
      {children}
    </Tag>
  )
}
