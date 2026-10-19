import Image from "next/image"
import { HeartIcon, MailIcon } from "lucide-react"
import { PreviewCard } from "@base-ui/react/preview-card"

import { AUTHOR } from "@/lib/author"

const CONTACT_CLASS =
  "inline-flex items-center gap-2 rounded-full border border-border-strong px-3.5 py-2 text-xs font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"

function GithubMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a10.9 10.9 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  )
}

/** "Built with love by Cmdliner", with a hover card that says a little about the author and how to reach them. */
export function FooterCredit() {
  return (
    <p className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
      Built with
      <HeartIcon
        className="size-3.5 fill-current text-foreground motion-safe:animate-pulse"
        aria-label="love"
      />
      by
      <PreviewCard.Root>
        <PreviewCard.Trigger
          href={AUTHOR.github}
          target="_blank"
          rel="noopener noreferrer"
          delay={150}
          className="inline-flex cursor-pointer items-center gap-1.5 font-medium text-foreground transition-opacity hover:opacity-80"
        >
          <Image
            src={AUTHOR.avatar}
            alt=""
            width={20}
            height={20}
            className="size-5 rounded-full"
          />
          {AUTHOR.name}
        </PreviewCard.Trigger>
        <PreviewCard.Portal>
          <PreviewCard.Positioner side="top" sideOffset={12} align="center" className="z-50">
            <PreviewCard.Popup className="theme-night w-72 origin-(--transform-origin) rounded-2xl border border-border-strong bg-[#0c0c0c] p-5 text-foreground shadow-none transition-[opacity,transform] duration-200 data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0">
              <div className="flex items-center gap-3">
                <Image
                  src={AUTHOR.avatar}
                  alt={AUTHOR.name}
                  width={44}
                  height={44}
                  className="size-11 rounded-full"
                />
                <div>
                  <p className="text-sm font-semibold">{AUTHOR.name}</p>
                  <p className="text-xs text-muted-foreground">Maker of Mercury</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/75">{AUTHOR.bio}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <a
                  href={AUTHOR.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={CONTACT_CLASS}
                >
                  <GithubMark className="size-3.5" />
                  GitHub
                </a>
                {AUTHOR.email && (
                  <a href={`mailto:${AUTHOR.email}`} className={CONTACT_CLASS}>
                    <MailIcon className="size-3.5" />
                    Email
                  </a>
                )}
              </div>
            </PreviewCard.Popup>
          </PreviewCard.Positioner>
        </PreviewCard.Portal>
      </PreviewCard.Root>
    </p>
  )
}
