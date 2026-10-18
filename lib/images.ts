export type Photo = {
  src: string
  alt: string
}

const unsplash = (id: string): string =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=75&w=1600`

/** Photography from Unsplash, always shown in monochrome. */
export const PHOTOS = {
  shelves: {
    src: unsplash("photo-1611072965169-e1534f6f300c"),
    alt: "White pharmacy bottles lined up on a wooden shelf",
  },
  facade: {
    src: unsplash("photo-1532456745301-b2c645d8b80d"),
    alt: "Pale concrete building facade with a repeating grid pattern",
  },
  arch: {
    src: unsplash("photo-1524230572899-a752b3835840"),
    alt: "White archway corridor receding into the distance",
  },
  spiral: {
    src: unsplash("photo-1762243794406-29e25f82985b"),
    alt: "Monochrome spiral staircase with dramatic shadows",
  },
  glass: {
    src: unsplash("photo-1499428665502-503f6c608263"),
    alt: "Person in silhouette behind a row of vertical frosted glass panels",
  },
} as const satisfies Record<string, Photo>
