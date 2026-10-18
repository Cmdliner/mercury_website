import Image from "next/image"
import { DownloadIcon } from "lucide-react"

import { AppWindow } from "@/components/shared/app-window"
import { Container } from "@/components/shared/container"
import { buttonVariants } from "@/components/ui/button"
import { RELEASE } from "@/lib/download"

/**
 * Calm header for the download page: a plain surface, the headline and the real app window.
 * On a phone the window is cropped to the top-left of the app so the text in it stays legible.
 */
export function DownloadHeaderSection() {
  return (
    <section className="overflow-hidden border-b border-border bg-surface-muted">
      <Container className="grid items-center gap-12 pt-32 pb-16 sm:pt-40 lg:grid-cols-[1fr_1.35fr] lg:gap-16 lg:pb-24">
        <div>
          <p className="text-eyebrow">Download</p>
          <h1 className="text-display mt-5">Mercury for Windows.</h1>
          <p className="text-lead mt-6 max-w-md">
            A fast desktop app for owners who run more than one store. Sign in
            and see every branch in one place.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href={RELEASE.file}
              download
              className={buttonVariants({ size: "lg", className: "gap-2" })}
            >
              <DownloadIcon className="size-4" />
              Download for Windows
            </a>
            <p className="text-sm text-muted-foreground">
              Version {RELEASE.version} · {RELEASE.size}
            </p>
          </div>
        </div>

        <AppWindow className="lg:translate-x-6">
          <Image
            src="/screens/desktop/dashboard-overview.png"
            alt="The Mercury overview with balances, sales today and recent transactions"
            width={1280}
            height={720}
            sizes="(min-width: 1024px) 760px, 100vw"
            priority
            className="aspect-[4/3] w-full object-cover object-left-top sm:aspect-video"
          />
        </AppWindow>
      </Container>
    </section>
  )
}
