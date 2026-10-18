"use client"

import { useEffect, useState } from "react"

import type { CarouselApi } from "@/components/ui/carousel"

/** Tracks which slide an Embla carousel is currently showing. */
export function useCarouselIndex(api: CarouselApi | undefined) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!api) return
    const update = () => setIndex(api.selectedScrollSnap())
    api.on("select", update)
    api.on("reInit", update)
    return () => {
      api.off("select", update)
      api.off("reInit", update)
    }
  }, [api])

  return index
}
