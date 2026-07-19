import { useEffect, useRef, useState } from 'react'

/** Toggles `is-inview` once an element scrolls into view, for the `.reveal` CSS pattern. */
export function useScrollReveal<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isInView }
}
