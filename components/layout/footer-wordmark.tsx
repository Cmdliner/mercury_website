"use client"

import { useInView } from "@/hooks/use-in-view"
import { usePointerSpotlight } from "@/hooks/use-pointer-spotlight"
import { cn } from "@/lib/utils"

const WORD = "mercury"
const TEXT_CLASS =
  "pb-[0.1em] text-center text-[clamp(5rem,22vw,19rem)] leading-[0.9] font-semibold tracking-[-0.06em] select-none"

/**
 * The giant wordmark. Its letters rise into place one after another when it scrolls into view, and
 * a spotlight of light follows the pointer across the letters.
 */
export function FooterWordmark() {
  const { ref: viewRef, inView } = useInView()
  const spotlight = usePointerSpotlight<HTMLParagraphElement>(true)

  return (
    <div ref={viewRef} aria-hidden="true" className="relative overflow-hidden">
      <p className={cn(TEXT_CLASS, "text-foreground/[0.07]")}>
        {WORD.split("").map((letter, index) => (
          <span
            key={index}
            style={{ transitionDelay: inView ? `${index * 70}ms` : "0ms" }}
            className={cn(
              "inline-block transition-[opacity,translate] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none",
              inView
                ? "translate-y-0 opacity-100"
                : "translate-y-[70%] opacity-0"
            )}
          >
            {letter}
          </span>
        ))}
      </p>

      <p
        ref={spotlight}
        className={cn(
          TEXT_CLASS,
          "absolute inset-0 bg-clip-text text-transparent opacity-0 transition-opacity duration-300 data-[active=true]:opacity-100 motion-reduce:hidden"
        )}
        style={{
          backgroundImage:
            "radial-gradient(280px circle at var(--mx, 50%) var(--my, 50%), rgb(249 249 245 / 0.65), transparent 70%)",
        }}
      >
        {WORD}
      </p>
    </div>
  )
}
