import { lazy } from 'react'

/**
 * Wraps React.lazy() so a failed dynamic import (e.g. a chunk hash that no
 * longer exists after a redeploy) triggers a single full-page reload instead
 * of surfacing "Failed to fetch dynamically imported module". The reload
 * picks up the fresh index.html with correct chunk references. A
 * sessionStorage flag prevents an infinite reload loop if the import keeps
 * failing for another reason.
 */
export function lazyWithRetry<T extends { default: React.ComponentType }>(
  componentImport: () => Promise<T>,
) {
  return lazy(async () => {
    const storageKey = 'lazy-chunk-reloaded'
    const hasAlreadyReloaded = window.sessionStorage.getItem(storageKey) === 'true'

    try {
      const component = await componentImport()
      window.sessionStorage.removeItem(storageKey)
      return component
    } catch (error) {
      if (!hasAlreadyReloaded) {
        window.sessionStorage.setItem(storageKey, 'true')
        window.location.reload()
        // Never resolves — the reload is about to tear down this page.
        return new Promise<T>(() => {})
      }
      throw error
    }
  })
}
