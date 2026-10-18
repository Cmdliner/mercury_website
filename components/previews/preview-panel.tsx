import { Photo } from "@/components/shared/photo"
import type { Photo as PhotoData } from "@/lib/images"

type PreviewPanelProps = {
  photo: PhotoData
  children: React.ReactNode
}

/** A photographic backdrop that a product preview floats on. Decorative. */
export function PreviewPanel({ photo, children }: PreviewPanelProps) {
  return (
    <div className="relative isolate overflow-hidden rounded-3xl border border-border bg-surface-muted">
      <Photo
        photo={photo}
        sizes="(min-width: 1024px) 560px, 100vw"
        className="opacity-45"
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
