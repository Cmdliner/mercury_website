import type { StaticImageData } from "next/image"

import accounts from "@/public/photos/accounts.jpg"
import glass from "@/public/photos/glass.jpg"
import hero from "@/public/photos/hero.jpg"
import owner from "@/public/photos/owner.jpg"
import reconcile from "@/public/photos/reconcile.jpg"
import stores from "@/public/photos/stores.jpg"

export type Photo = {
  src: StaticImageData
  alt: string
}

/** Photography from Unsplash (free to use), stored locally in public/photos. */
export const PHOTOS = {
  hero: {
    src: hero,
    alt: "Aerial view of a busy Lagos market street with colourful umbrellas and yellow buses",
  },
  owner: {
    src: owner,
    alt: "A smiling shop owner holding up a set of keys",
  },
  stores: {
    src: stores,
    alt: "A shopkeeper standing among colourful shelves in a small shop",
  },
  accounts: {
    src: accounts,
    alt: "A calculator resting on ledger paper",
  },
  reconcile: {
    src: reconcile,
    alt: "A shop owner counting banknotes at his counter",
  },
  glass: {
    src: glass,
    alt: "Person in silhouette behind a row of vertical frosted glass panels",
  },
} as const satisfies Record<string, Photo>
