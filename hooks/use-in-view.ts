"use client"

import { useCallback, useRef, useState } from "react"

/**
 * Reports once when an element first scrolls into view. Returns a callback ref
 * to attach to the element, and `inView`, which stays true afterwards.
 */
export function useInView() {
  const [inView, setInView] = useState(false)
  const observer = useRef<IntersectionObserver | null>(null)

  const ref = useCallback((node: Element | null) => {
    observer.current?.disconnect()
    if (!node) return

    observer.current = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setInView(true)
        observer.current?.disconnect()
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    )
    observer.current.observe(node)
  }, [])

  return { ref, inView }
}
