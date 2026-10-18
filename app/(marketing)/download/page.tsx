import type { Metadata } from "next"

import { CtaSection } from "@/components/sections/cta-section"
import { DesktopScreensSection } from "@/components/sections/desktop-screens-section"
import { DownloadHeaderSection } from "@/components/sections/download-header-section"
import { DownloadHeroSection } from "@/components/sections/download-hero-section"
import { InstallSection } from "@/components/sections/install-section"

export const metadata: Metadata = {
  title: "Download | Mercury",
  description:
    "Download Mercury for Windows and keep the books for every store in one place.",
}

export default function Download() {
  return (
    <>
      <DownloadHeaderSection />
      <DownloadHeroSection />
      <DesktopScreensSection />
      <InstallSection />
      <CtaSection />
    </>
  )
}
