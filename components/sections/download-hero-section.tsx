import { DownloadIcon } from "lucide-react"

import { Reveal } from "@/components/shared/reveal"
import { Section } from "@/components/shared/section"
import { buttonVariants } from "@/components/ui/button"
import { RELEASE } from "@/lib/download"

const FACTS = [
  { label: "Version", value: RELEASE.version },
  { label: "Platform", value: "Windows 64-bit" },
  { label: "Size", value: RELEASE.size },
  { label: "Released", value: RELEASE.released },
] as const

/** The main download card: what you get, the button, and a checksum to verify it. */
export function DownloadHeroSection() {
  return (
    <Section spacing="bottom" className="relative z-10 -mt-10 sm:-mt-14">
      <Reveal>
        <div className="rounded-[2rem] border border-border-strong bg-card p-6 sm:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
            <div>
              <p className="text-eyebrow">Mercury for Windows</p>
              <h2 className="text-subtitle mt-4">
                Download Mercury {RELEASE.version}
              </h2>
              <p className="text-lead mt-4 max-w-md">{RELEASE.platform}.</p>
              <a
                href={RELEASE.file}
                download
                className={buttonVariants({
                  size: "lg",
                  className: "mt-8 gap-2",
                })}
              >
                <DownloadIcon className="size-4" />
                Download for Windows
              </a>
              <p className="mt-4 text-sm text-muted-foreground">
                Early release. It is free while we are in testing.
              </p>
            </div>
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border">
              {FACTS.map((fact) => (
                <div key={fact.label} className="bg-surface-muted p-5">
                  <dt className="text-eyebrow">{fact.label}</dt>
                  <dd className="mt-2 text-lg font-medium">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="mt-8 border-t border-border pt-6">
            <p className="text-eyebrow">SHA-256</p>
            <code className="mt-2 block font-mono text-xs break-all text-muted-foreground">
              {RELEASE.sha256}
            </code>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
