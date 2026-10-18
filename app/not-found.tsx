import type { Metadata } from "next"
import Link from "next/link"

import { SplitBead } from "@/components/illustrations/split-bead"
import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { Container } from "@/components/shared/container"
import { buttonVariants } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Page not found | Mercury",
  robots: { index: false },
}

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main>
        <Container className="grid min-h-[calc(100dvh-14rem)] grid-cols-1 items-center gap-12 py-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-eyebrow">Off the books</p>
            <h1 className="text-title mt-5">That page isn&apos;t on our books.</h1>
            <p className="text-lead mt-5 max-w-md">
              The link may be out of date, or the page may have moved. Head back
              and pick up where you left off.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/"
                className={buttonVariants({
                  size: "lg",
                  className: "w-full sm:w-auto",
                })}
              >
                Back to home
              </Link>
              <Link
                href="/#how-it-works"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "w-full sm:w-auto",
                })}
              >
                See how it works
              </Link>
            </div>
          </div>
          <div className="mx-auto w-full max-w-md rounded-3xl border border-border bg-surface-muted p-6 text-foreground sm:p-10">
            <SplitBead />
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  )
}
