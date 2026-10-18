import Image from "next/image"

import { AppWindow } from "@/components/shared/app-window"
import type { Screen } from "@/lib/content"

type ScreenSlideProps = {
  screen: Screen
  priority?: boolean
}

export function ScreenSlide({ screen, priority = false }: ScreenSlideProps) {
  return (
    <AppWindow title={screen.title}>
      <Image
        src={screen.src}
        alt={screen.alt}
        width={1440}
        height={900}
        priority={priority}
        sizes="(min-width: 1152px) 1060px, 100vw"
        className="h-auto w-full"
      />
    </AppWindow>
  )
}
