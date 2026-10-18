import Image from "next/image"

import { AppWindow } from "@/components/shared/app-window"
import { Reveal } from "@/components/shared/reveal"
import { Section } from "@/components/shared/section"
import { SectionHeading } from "@/components/shared/section-heading"
import { cn } from "@/lib/utils"
import { DESKTOP_SCREENS } from "@/lib/download"

/** Real screenshots of the Windows app, one per row. */
export function DesktopScreensSection() {
  return (
    <Section tone="muted">
      <Reveal>
        <SectionHeading
          eyebrow="Inside the app"
          title="This is what you will be running."
          description="Screenshots from the Windows app, not mock-ups."
        />
      </Reveal>
      <div className="mt-14 grid gap-16 sm:mt-20 sm:gap-24">
        {DESKTOP_SCREENS.map((screen, index) => (
          <Reveal key={screen.src}>
            <div
              className={cn(
                "grid items-center gap-8 lg:grid-cols-[1fr_1.7fr] lg:gap-14",
                index % 2 === 1 && "lg:*:first:order-2"
              )}
            >
              <div>
                <h3 className="text-subtitle">{screen.title}</h3>
                <p className="text-lead mt-4">{screen.description}</p>
              </div>
              <AppWindow>
                <Image
                  src={screen.src}
                  alt={screen.alt}
                  width={1280}
                  height={720}
                  sizes="(min-width: 1024px) 700px, 100vw"
                  className="h-auto w-full"
                />
              </AppWindow>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
