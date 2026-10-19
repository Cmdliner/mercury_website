"use client"

import { useCallback, useRef } from "react"

/**
 * Tracks the pointer over an area and exposes it to CSS. The element the returned ref is attached to
 * gets `--mx` and `--my` (the pointer's position inside the area, in px) and `data-active="true"`
 * while the pointer is over the area. Style it with `var(--mx)` / `var(--my)` and
 * `data-[active=true]:`. With `onParent`, the area is the element's parent, which suits an overlay.
 */
export function usePointerSpotlight<T extends HTMLElement>(onParent = false) {
  const cleanup = useRef<(() => void) | null>(null)

  return useCallback(
    (node: T | null) => {
      cleanup.current?.()
      cleanup.current = null

      const area = onParent ? node?.parentElement : node
      if (!node || !area) return

      const move = (event: PointerEvent) => {
        const box = area.getBoundingClientRect()
        node.style.setProperty("--mx", `${event.clientX - box.left}px`)
        node.style.setProperty("--my", `${event.clientY - box.top}px`)
        node.dataset.active = "true"
      }
      const leave = () => {
        delete node.dataset.active
      }

      area.addEventListener("pointermove", move)
      area.addEventListener("pointerleave", leave)
      cleanup.current = () => {
        area.removeEventListener("pointermove", move)
        area.removeEventListener("pointerleave", leave)
      }
    },
    [onParent]
  )
}
