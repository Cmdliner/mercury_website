import Image from "next/image"

import type { Screen } from "@/lib/content"

type ScreenSlideProps = {
  screen: Screen
  priority?: boolean
}

export function ScreenSlide({ screen, priority = false }: ScreenSlideProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-border-strong bg-black">
      <Image
        src={screen.src}
        alt={screen.alt}
        width={1280}
        height={720}
        priority={priority}
        sizes="(min-width: 1152px) 1060px, 100vw"
        className="h-auto w-full"
      />
    </div>
  )
}
