"use client"

import Image from "next/image"

import { useProductTour } from "@/hooks/use-product-tour"
import { TOUR_STEPS, TOUR_TABS } from "@/lib/tour"
import { cn } from "@/lib/utils"

/**
 * A self-playing tour of the Windows app: real screens, a cursor that clicks through them,
 * and a caption for each. Hover to pause; the tabs jump to a screen.
 */
export function ProductTour({ className }: { className?: string }) {
  const { index, cursor, clicking, setPaused, goTo, reducedMotion } =
    useProductTour()
  const step = TOUR_STEPS[index]

  return (
    <div
      className={cn("w-full", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative aspect-video overflow-hidden rounded-2xl border border-border-strong bg-black">
        {TOUR_STEPS.map((screen, i) => (
          <Image
            key={screen.src}
            src={screen.src}
            alt={screen.alt}
            fill
            sizes="(min-width: 1024px) 1024px, 100vw"
            priority={i < 2}
            className={cn(
              "object-cover transition-all duration-700 ease-out",
              i === index ? "scale-100 opacity-100" : "scale-[1.015] opacity-0"
            )}
          />
        ))}

        {/* The cursor glides to the next click, then pulses. */}
        {reducedMotion ? null : (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute z-10 transition-all duration-[1300ms] ease-in-out"
            style={{
              left: `${cursor.x * 100}%`,
              top: `${cursor.y * 100}%`,
            }}
          >
            {clicking ? (
              <span className="absolute -top-3 -left-3 size-6 animate-ping rounded-full bg-white/80" />
            ) : null}
            <svg
              viewBox="0 0 24 24"
              className={cn(
                "relative size-6 drop-shadow-md transition-transform duration-150",
                clicking && "scale-90"
              )}
            >
              <path
                d="M5 3l14 8-6 2 3.5 6.5-2.5 1.5L10.5 14.5 6 19z"
                fill="white"
                stroke="black"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </div>

      <div className="mt-6 flex flex-col items-center gap-5">
        <div className="text-center" aria-live="polite">
          <p className="text-heading">{step.title}</p>
          <p className="mt-1.5 text-muted-foreground">{step.description}</p>
        </div>

        <div className="flex max-w-full gap-2 overflow-x-auto pb-1">
          {TOUR_TABS.map((tab) => {
            const active = step.tab === tab
            return (
              <button
                key={tab}
                type="button"
                onClick={() =>
                  goTo(TOUR_STEPS.findIndex((screen) => screen.tab === tab))
                }
                className={cn(
                  "shrink-0 rounded-full border px-4 py-1.5 text-sm transition-colors",
                  active
                    ? "border-foreground bg-foreground text-background"
                    : "border-border-strong text-muted-foreground hover:text-foreground"
                )}
              >
                {tab}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
