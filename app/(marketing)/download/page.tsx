import type { Metadata } from "next"

import { CtaSection } from "@/components/sections/cta-section"
import { DesktopScreensSection } from "@/components/sections/desktop-screens-section"
import { DownloadHeroSection } from "@/components/sections/download-hero-section"
import { InstallSection } from "@/components/sections/install-section"
import { PageHeader } from "@/components/shared/page-header"
import { PHOTOS } from "@/lib/images"

export const metadata: Metadata = {
  title: "Download | Mercury",
  description:
    "Download Mercury for Windows and keep the books for every store in one place.",
}

export default function Download() {
  return (
    <>
      <PageHeader
        photo={PHOTOS.hero}
        eyebrow="Download"
        title="Mercury for Windows."
        description="A fast desktop app for owners who run more than one store. Download it, sign in and see every branch in one place."
      />
      <DownloadHeroSection />
      <DesktopScreensSection />
      <InstallSection />
      <CtaSection />
    </>
  )
}
