import { Label } from "@/components/ui/label"

type FormFieldProps = {
  label: string
  htmlFor: string
  error?: string
  /** Optional element shown on the right of the label, such as a help link. */
  action?: React.ReactNode
  children: React.ReactNode
}

export function FormField({
  label,
  htmlFor,
  error,
  action,
  children,
}: FormFieldProps) {
  return (
    <div className="grid gap-1.5">
      <div className="flex items-center justify-between">
        <Label htmlFor={htmlFor}>{label}</Label>
        {action}
      </div>
      {children}
      {error ? (
        <p role="alert" className="text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  )
}
