import type { Metadata } from "next"

import { AboutPrinciplesSection } from "@/components/sections/about-principles-section"
import { AboutStatusSection } from "@/components/sections/about-status-section"
import { AboutStorySection } from "@/components/sections/about-story-section"
import { CtaSection } from "@/components/sections/cta-section"
import { PageHeader } from "@/components/shared/page-header"

export const metadata: Metadata = {
  title: "About | Mercury",
  description:
    "Mercury is finance and expense tracking for businesses that run more than one store.",
}

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Built for people who run more than one store."
        description="Mercury gives every branch its own books and brings them together, so an owner can always see where the money is."
      />
      <AboutStorySection />
      <AboutPrinciplesSection />
      <AboutStatusSection />
      <CtaSection />
    </>
  )
}
