import type { Step } from "@/lib/content"

type StepItemProps = {
  step: Step
  number: number
}

export function StepItem({ step, number }: StepItemProps) {
  return (
    <li className="flex gap-6 border-t border-border-strong py-8 first:border-t-0 first:pt-0 sm:gap-10">
      <span className="font-mono text-sm text-brand">
        {String(number).padStart(2, "0")}
      </span>
      <div>
        <h3 className="text-heading">{step.title}</h3>
        <p className="mt-2 max-w-md text-base leading-relaxed text-muted-foreground">
          {step.description}
        </p>
      </div>
    </li>
  )
}
