"use client"

import { useCallback, useEffect, useState } from "react"

import { TOUR_STEPS } from "@/lib/tour"

const MOVE_AFTER = 1800
const CLICK_AFTER = 3200
const NEXT_AFTER = 3700

/**
 * Plays the product tour: shows a screen, glides a cursor to the next click, clicks, then
 * moves on. It loops, stops while paused (for example on hover) and does not autoplay for
 * people who prefer reduced motion.
 */
export function useProductTour() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [cursor, setCursor] = useState({ x: 0.62, y: 0.58 })
  const [clicking, setClicking] = useState(false)

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
  }, [])

  useEffect(() => {
    if (paused || reducedMotion) return

    const step = TOUR_STEPS[index]
    const nextIndex = (index + 1) % TOUR_STEPS.length

    const move = setTimeout(() => setCursor(step.next), MOVE_AFTER)
    const click = setTimeout(() => setClicking(true), CLICK_AFTER)
    const advance = setTimeout(() => {
      setClicking(false)
      setIndex(nextIndex)
    }, NEXT_AFTER)

    return () => {
      clearTimeout(move)
      clearTimeout(click)
      clearTimeout(advance)
      setClicking(false)
    }
  }, [index, paused, reducedMotion])

  const goTo = useCallback((target: number) => setIndex(target), [])

  return { index, cursor, clicking, paused, setPaused, reducedMotion, goTo }
}
