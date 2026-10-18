"use client"

import { useSyncExternalStore } from "react"

const subscribe = () => () => {}

/** False during server render and hydration, true afterwards. Safe for portals. */
export function useIsClient() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  )
}
