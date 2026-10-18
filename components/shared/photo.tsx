import Image from "next/image"

import type { Photo as PhotoData } from "@/lib/images"
import { cn } from "@/lib/utils"

type PhotoProps = {
  photo: PhotoData
  sizes: string
  priority?: boolean
  className?: string
}

/**
 * Fills its nearest positioned ancestor, so give the parent a size
 * (for example an aspect ratio) and `relative overflow-hidden`.
 */
export function Photo({ photo, sizes, priority = false, className }: PhotoProps) {
  return (
    <Image
      src={photo.src}
      alt={photo.alt}
      fill
      sizes={sizes}
      priority={priority}
      className={cn("object-cover grayscale", className)}
    />
  )
}
