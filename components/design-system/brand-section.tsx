import { LogoMark } from "@/components/brand/logo-mark"
import { DocSection } from "@/components/design-system/doc-section"
import { Specimen } from "@/components/design-system/specimen"
import { Logo } from "@/components/brand/logo"
import { ICONS } from "@/lib/design-tokens"

export function BrandSection() {
  return (
    <DocSection
      id="brand"
      title="Logo and icons"
      description="A bead of mercury cut on the diagonal, the halves slid apart. Flat, one colour, no effects."
    >
      <Specimen
        label="Mark"
        note="LogoMark uses currentColor. Files: public/brand/mercury-mark-black.svg and mercury-mark-white.svg; favicon is app/icon.svg."
      >
        <div className="grid gap-5 sm:grid-cols-3">
          <div className="flex h-40 items-center justify-center border border-border-strong bg-card">
            <LogoMark className="size-16" />
          </div>
          <div className="theme-night flex h-40 items-center justify-center bg-background text-foreground">
            <LogoMark className="size-16" />
          </div>
          <div className="flex h-40 items-center justify-center gap-6 border border-border-strong bg-card">
            <LogoMark className="size-10" />
            <LogoMark className="size-6" />
            <LogoMark className="size-4" />
          </div>
        </div>
      </Specimen>

      <Specimen label="Wordmark" note="Lowercase mercury in Geist semibold, set beside the mark.">
        <div className="flex flex-wrap items-center gap-10 border border-border-strong bg-card p-8">
          <Logo />
          <div className="theme-night -m-8 ml-0 bg-background p-8 text-foreground">
            <Logo />
          </div>
        </div>
      </Specimen>

      <Specimen label="Do not" note="Keep it flat and unembellished.">
        <ul className="grid max-w-2xl gap-2 text-base leading-relaxed text-muted-foreground">
          <li>Do not stretch, rotate, outline or add shadows or gradients.</li>
          <li>Do not recolour it with an accent; use foreground or white.</li>
          <li>Do not place it on a busy photo without a frosted layer.</li>
        </ul>
      </Specimen>

      <Specimen
        label="Icons"
        note="lucide-react, 16 to 20px, stroke 1.75 to 2. Import single icons; do not add another icon set."
      >
        <ul className="grid grid-cols-2 gap-x-5 gap-y-6 sm:grid-cols-3 lg:grid-cols-4">
          {ICONS.map(({ name, icon: Icon, usage }) => (
            <li key={name} className="flex items-start gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center border border-border-strong bg-card">
                <Icon className="size-5" strokeWidth={1.75} />
              </span>
              <span>
                <span className="block font-mono text-sm">{name}</span>
                <span className="block text-sm text-muted-foreground">{usage}</span>
              </span>
            </li>
          ))}
        </ul>
      </Specimen>
    </DocSection>
  )
}
