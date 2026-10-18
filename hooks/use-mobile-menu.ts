"use client"

import { useCallback, useEffect, useState } from "react"

const DESKTOP_QUERY = "(min-width: 768px)"

/**
 * Open state for the full-screen mobile menu. While open it locks page
 * scroll, closes on Escape, and closes if the viewport grows to desktop.
 */
export function useMobileMenu() {
  const [open, setOpen] = useState(false)
  const close = useCallback(() => setOpen(false), [])
  const toggle = useCallback(() => setOpen((current) => !current), [])

  useEffect(() => {
    if (!open) return

    const root = document.documentElement
    const previousOverflow = root.style.overflow
    root.style.overflow = "hidden"

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    const desktop = window.matchMedia(DESKTOP_QUERY)
    const onViewportChange = () => {
      if (desktop.matches) setOpen(false)
    }

    document.addEventListener("keydown", onKeyDown)
    desktop.addEventListener("change", onViewportChange)

    return () => {
      root.style.overflow = previousOverflow
      document.removeEventListener("keydown", onKeyDown)
      desktop.removeEventListener("change", onViewportChange)
    }
  }, [open])

  return { open, toggle, close }
}
