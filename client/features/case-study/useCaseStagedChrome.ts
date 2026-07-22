import { useEffect } from 'react'

/** Adds `is-case-staged` to <html> while an immersive case study is mounted, hiding the site header/footer. */
export function useCaseStagedChrome() {
  useEffect(() => {
    document.documentElement.classList.add('is-case-staged')
    return () => {
      document.documentElement.classList.remove('is-case-staged')
    }
  }, [])
}
