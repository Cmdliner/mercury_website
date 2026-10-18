import Image from "next/image"

import type { Photo as PhotoData } from "@/lib/images"
import { cn } from "@/lib/utils"

type PhotoProps = {
  photo: PhotoData
  sizes: string
  priority?: boolean
  /** Photos are monochrome by default; pass false for full colour. */
  grayscale?: boolean
  className?: string
}

/**
 * Fills its nearest positioned ancestor, so give the parent a size
 * (for example an aspect ratio) and `relative overflow-hidden`.
 * Photos are shown in monochrome unless `grayscale={false}`.
 */
export function Photo({
  photo,
  sizes,
  priority = false,
  grayscale = true,
  className,
}: PhotoProps) {
  return (
    <Image
      src={photo.src}
      alt={photo.alt}
      fill
      sizes={sizes}
      priority={priority}
      placeholder="blur"
      className={cn("object-cover", grayscale && "grayscale", className)}
    />
  )
}
