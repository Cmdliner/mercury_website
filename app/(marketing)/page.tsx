import { CapabilitiesSection } from "@/components/sections/capabilities-section"
import { CtaSection } from "@/components/sections/cta-section"
import { FaqSection } from "@/components/sections/faq-section"
import { FeatureRowsSection } from "@/components/sections/feature-rows-section"
import { HeroSection } from "@/components/sections/hero-section"
import { HowItWorksSection } from "@/components/sections/how-it-works-section"
import { ShowcaseSection } from "@/components/sections/showcase-section"
import { ValueSection } from "@/components/sections/value-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <ValueSection />
      <FeatureRowsSection />
      <CapabilitiesSection />
      <HowItWorksSection />
      <ShowcaseSection />
      <FaqSection />
      <CtaSection />
    </>
  )
}
