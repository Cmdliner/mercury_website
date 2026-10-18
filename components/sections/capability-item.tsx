import type { Capability } from "@/lib/content"

export function CapabilityItem({ capability }: { capability: Capability }) {
  const Icon = capability.icon

  return (
    <li className="border-t border-border-strong pt-6">
      <Icon className="size-5" strokeWidth={1.75} />
      <h3 className="text-heading mt-5">{capability.title}</h3>
      <p className="mt-2 text-base leading-relaxed text-muted-foreground">
        {capability.description}
      </p>
    </li>
  )
}
