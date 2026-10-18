import type { Metadata } from "next"

import { LegalDocument } from "@/components/legal/legal-document"
import { PageHeader } from "@/components/shared/page-header"
import { PRIVACY_SECTIONS, PRIVACY_UPDATED } from "@/lib/legal"

export const metadata: Metadata = {
  title: "Privacy | Mercury",
  description: "How Mercury handles the information you share on this website.",
}

export default function Privacy() {
  return (
    <>
      <PageHeader
        eyebrow="Privacy"
        title="How we handle your information."
        description="Plain language, no surprises. This covers the Mercury website and the waitlist."
      />
      <LegalDocument updated={PRIVACY_UPDATED} sections={PRIVACY_SECTIONS} />
    </>
  )
}
