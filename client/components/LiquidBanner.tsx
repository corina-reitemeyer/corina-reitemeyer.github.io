import { useEffect, useId, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { AsciiLiquid } from './AsciiLiquid'

const lines = ['From sketch', 'to shipped']

/** Each line's own scrub window within the track's 0–1 scroll progress, so the second line lags the first. */
const lineWindows: [number, number][] = [
  [0, 0.7],
  [0.25, 1],
]

export default function LiquidBanner() {
  const headingId = useId()
  const trackRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (shouldReduceMotion) return

    const track = trackRef.current
    if (!track) return

    const handleScroll = () => {
      const rect = track.getBoundingClientRect()
      const scrollable = track.offsetHeight - window.innerHeight
      if (scrollable <= 0) {
        setProgress(1)
        return
      }
      const scrolled = -rect.top
      setProgress(Math.min(1, Math.max(0, scrolled / scrollable)))
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [shouldReduceMotion])

  const lineProgress = (index: number) => {
    if (shouldReduceMotion) return 1
    const [start, end] = lineWindows[index]
    return Math.min(1, Math.max(0, (progress - start) / (end - start)))
  }

  const fieldOffset = shouldReduceMotion ? 0 : (progress - 0.5) * 48

  return (
    <div ref={trackRef} className="liquid-banner-track relative h-[250vh]">
      <section
        aria-labelledby={headingId}
        className="sticky top-0 flex h-[100dvh] w-full items-center justify-center overflow-hidden bg-ink"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
          style={{ transform: `translateY(${fieldOffset}px)` }}
        >
          <AsciiLiquid className="h-full w-full" />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 bg-ink/50"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-ink via-transparent to-ink"
        />

        <h2
          id={headingId}
          className="relative z-20 text-center text-[clamp(2.85rem,7vw,4.75rem)] font-bold leading-[0.92] tracking-[-0.04em] text-paper"
        >
          {lines.map((line, i) => {
            const p = lineProgress(i)
            return (
              <span
                key={line}
                className="block"
                style={{
                  transform: `translateX(${(1 - p) * 110}vw)`,
                  opacity: p,
                }}
              >
                {line}
              </span>
            )
          })}
        </h2>
      </section>
    </div>
  )
}
