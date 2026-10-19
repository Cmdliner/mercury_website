"use client"

import { useEffect, useState } from "react"

/**
 * True once the page has scrolled past `threshold` pixels. It switches on at the threshold and off
 * only near the very top, so the state does not flicker when the page rests right on the line.
 */
export function useScrolled(threshold = 8) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const update = () =>
      setScrolled((was) => (was ? window.scrollY > 2 : window.scrollY > threshold))

    update()
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [threshold])

  return scrolled
}
