import { useSyncExternalStore } from 'react'

let isOpen = false
const listeners = new Set<() => void>()

export function setLightboxOpen(open: boolean) {
  isOpen = open
  listeners.forEach((listener) => listener())
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function useIsLightboxOpen() {
  return useSyncExternalStore(subscribe, () => isOpen)
}
