"use client"

import { useState } from "react"

import { ScreenSlide } from "@/components/showcase/screen-slide"
import { ScreenTabs } from "@/components/showcase/screen-tabs"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { useCarouselIndex } from "@/hooks/use-carousel-index"
import { SCREENS } from "@/lib/content"

export function ScreenCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const activeIndex = useCarouselIndex(api)
  const active = SCREENS[activeIndex]

  return (
    <div className="mt-14 rounded-3xl border border-sky/15 bg-sky-soft/70 p-3 sm:p-8">
      <Carousel setApi={setApi} opts={{ align: "start" }}>
        <div className="mb-5 flex items-center justify-between gap-4 sm:mb-7">
          <ScreenTabs
            screens={SCREENS}
            activeIndex={activeIndex}
            onSelect={(index) => api?.scrollTo(index)}
          />
          <div className="hidden gap-2 md:flex">
            <CarouselPrevious className="static inset-auto m-0" />
            <CarouselNext className="static inset-auto m-0" />
          </div>
        </div>
        <CarouselContent>
          {SCREENS.map((screen, index) => (
            <CarouselItem key={screen.id}>
              <ScreenSlide screen={screen} priority={index === 0} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
        <span className="font-medium text-foreground">{active.title}.</span>{" "}
        {active.description}
      </p>
    </div>
  )
}
