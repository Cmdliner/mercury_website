"use client"

import { useSyncExternalStore } from "react"

const subscribe = () => () => {}

/** Shows the resolved value of a CSS variable, read from the page itself so it never drifts. */
export function TokenValue({ variable }: { variable: string }) {
  const value = useSyncExternalStore(
    subscribe,
    () =>
      getComputedStyle(document.documentElement).getPropertyValue(variable).trim(),
    () => ""
  )

  return (
    <span className="font-mono text-xs text-muted-foreground">
      {value || " "}
    </span>
  )
}
