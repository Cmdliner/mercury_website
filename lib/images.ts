import type { StaticImageData } from "next/image"

import arch from "@/public/photos/arch.jpg"
import facade from "@/public/photos/facade.jpg"
import glass from "@/public/photos/glass.jpg"
import shelves from "@/public/photos/shelves.jpg"
import spiral from "@/public/photos/spiral.jpg"

export type Photo = {
  src: StaticImageData
  alt: string
}

/** Photography from Unsplash (free to use), stored locally in public/photos. */
export const PHOTOS = {
  shelves: {
    src: shelves,
    alt: "White pharmacy bottles lined up on a wooden shelf",
  },
  facade: {
    src: facade,
    alt: "Pale concrete building facade with a repeating grid pattern",
  },
  arch: {
    src: arch,
    alt: "White archway corridor receding into the distance",
  },
  spiral: {
    src: spiral,
    alt: "Monochrome spiral staircase with dramatic shadows",
  },
  glass: {
    src: glass,
    alt: "Person in silhouette behind a row of vertical frosted glass panels",
  },
} as const satisfies Record<string, Photo>
