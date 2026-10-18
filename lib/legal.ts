import { CONTACT_EMAIL } from "@/lib/constants"

export type LegalSection = {
  id: string
  title: string
  paragraphs?: string[]
  items?: string[]
}

export const PRIVACY_UPDATED = "18 October 2026"

const CONTACT_PARAGRAPH = CONTACT_EMAIL
  ? `Write to us at ${CONTACT_EMAIL} and we will respond as soon as we can.`
  : "Reach us through the waitlist form on this site and mention privacy, and we will respond as soon as we can."

/**
 * Plain-language privacy policy for this website. It covers the marketing site
 * and the waitlist only; the Mercury app will publish its own terms.
 */
export const PRIVACY_SECTIONS: LegalSection[] = [
  {
    id: "summary",
    title: "The short version",
    paragraphs: [
      "We collect only what you give us on the waitlist form, plus basic technical data our servers record automatically. We use it to contact you about early access and to run this website. We do not sell your information.",
    ],
  },
  {
    id: "scope",
    title: "What this policy covers",
    paragraphs: [
      "This policy applies to the Mercury website and the waitlist. The Mercury application itself will have its own terms and privacy notice when it launches.",
    ],
  },
  {
    id: "collect",
    title: "What we collect",
    paragraphs: ["When you join the waitlist you give us:"],
    items: [
      "your full name and work email address",
      "your business name",
      "the number of stores you run",
    ],
  },
  {
    id: "automatic",
    title: "Technical data",
    paragraphs: [
      "Like most websites, our servers record standard technical information when you visit, such as your IP address, browser type and the pages requested. We use it to keep the site secure and working. We do not currently use advertising cookies or third-party analytics on this site.",
    ],
  },
  {
    id: "use",
    title: "How we use your information",
    items: [
      "to email you about early access and product updates you asked for",
      "to understand who is interested in Mercury and what they need",
      "to keep the website secure and to fix problems",
    ],
  },
  {
    id: "sharing",
    title: "Who we share it with",
    paragraphs: [
      "We do not sell your personal information. We share it only with service providers who help us run the website and send email, and only as needed to do that work. We may also disclose information where the law requires it.",
    ],
  },
  {
    id: "retention",
    title: "How long we keep it",
    paragraphs: [
      "We keep waitlist details until the early access process is complete or until you ask us to delete them, whichever comes first. We review what we hold from time to time and remove what we no longer need.",
    ],
  },
  {
    id: "rights",
    title: "Your choices and rights",
    paragraphs: [
      "You can ask us to tell you what we hold about you, to correct it, to delete it, or to stop contacting you. You can also withdraw your consent at any time. You may have further rights under the data protection law that applies to you.",
    ],
  },
  {
    id: "security",
    title: "Security",
    paragraphs: [
      "We take reasonable steps to protect your information, but no method of storage or transmission over the internet is completely secure.",
    ],
  },
  {
    id: "children",
    title: "Children",
    paragraphs: [
      "Mercury is built for businesses and is not directed at children. We do not knowingly collect information from anyone under 18.",
    ],
  },
  {
    id: "changes",
    title: "Changes to this policy",
    paragraphs: [
      "If we change this policy we will update the date at the top of this page. If the change is significant, we will tell waitlist members by email.",
    ],
  },
  {
    id: "contact",
    title: "Contact us",
    paragraphs: [
      "Questions about this policy, or want to use any of your rights?",
      CONTACT_PARAGRAPH,
    ],
  },
]
