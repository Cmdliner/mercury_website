import { Photo } from "@/components/shared/photo"
import type { Photo as PhotoData } from "@/lib/images"
import { TONE_STYLES, type Tone } from "@/lib/tones"
import { cn } from "@/lib/utils"

type PreviewPanelProps = {
  photo: PhotoData
  tone: Tone
  children: React.ReactNode
}

/**
 * A coloured photographic backdrop that a product preview floats on.
 * The monochrome photo is multiplied over the tone for a duotone look.
 * Decorative.
 */
export function PreviewPanel({ photo, tone, children }: PreviewPanelProps) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-3xl border border-foreground/5",
        TONE_STYLES[tone].surface
      )}
    >
      <Photo
        photo={photo}
        sizes="(min-width: 1024px) 560px, 100vw"
        className="opacity-80 mix-blend-multiply"
      />
      <div
        aria-hidden="true"
        className="relative flex min-h-[22rem] items-center justify-center p-5 sm:min-h-[30rem] sm:p-10"
      >
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  )
}
