import { useEffect, useState } from 'react'

/** Toggles `is-inview` on the next animation frame after mount, for the
 *  `.reveal` CSS pattern on content that should reveal immediately rather
 *  than wait for scroll (e.g. a hero heading already in the viewport). */
export function useMountReveal() {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsInView(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  return isInView
}
