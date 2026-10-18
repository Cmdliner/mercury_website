type SpecimenProps = {
  label: string
  note?: string
  children: React.ReactNode
}

/** A labelled group of examples inside a documentation section. */
export function Specimen({ label, note, children }: SpecimenProps) {
  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h3 className="text-heading">{label}</h3>
        {note ? <p className="text-sm text-muted-foreground">{note}</p> : null}
      </div>
      <div className="mt-5">{children}</div>
    </div>
  )
}
