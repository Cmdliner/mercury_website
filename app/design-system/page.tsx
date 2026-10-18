import type { Metadata } from "next"
import Link from "next/link"

import { Logo } from "@/components/brand/logo"
import { BrandSection } from "@/components/design-system/brand-section"
import { ColorsSection } from "@/components/design-system/colors-section"
import { ControlsSection } from "@/components/design-system/controls-section"
import { DocNav } from "@/components/design-system/doc-nav"
import { ImagerySection } from "@/components/design-system/imagery-section"
import { LayoutSection } from "@/components/design-system/layout-section"
import { MotionSection } from "@/components/design-system/motion-section"
import { PrinciplesSection } from "@/components/design-system/principles-section"
import { TypographySection } from "@/components/design-system/typography-section"
import { Container } from "@/components/shared/container"

export const metadata: Metadata = {
  title: "Design system | Mercury",
  description: "Colours, type, layout, controls, motion, imagery and the logo.",
  robots: { index: false },
}

export default function DesignSystem() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl">
        <Container className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Logo />
            <span className="hidden h-5 w-px bg-border-strong sm:block" />
            <span className="hidden text-sm text-muted-foreground sm:block">
              Design system
            </span>
          </div>
          <Link
            href="/"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Back to site
          </Link>
        </Container>
      </header>

      <main>
        <Container className="pt-12 pb-10 sm:pt-20">
          <p className="text-eyebrow">Mercury</p>
          <h1 className="text-title mt-5 max-w-3xl">Design system.</h1>
          <p className="text-lead mt-5 max-w-2xl">
            The shared language for the Mercury website: colour, type, layout,
            controls, motion, imagery and the logo. Follow it so every new page
            looks like it belongs.
          </p>
        </Container>

        <Container className="grid grid-cols-1 gap-12 pb-32 lg:grid-cols-[13rem_1fr] lg:gap-16">
          <DocNav />
          <div className="grid min-w-0 gap-20">
            <PrinciplesSection />
            <ColorsSection />
            <TypographySection />
            <LayoutSection />
            <ControlsSection />
            <MotionSection />
            <ImagerySection />
            <BrandSection />
          </div>
        </Container>
      </main>
    </>
  )
}
