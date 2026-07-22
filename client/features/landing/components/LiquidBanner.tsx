import { useEffect, useId, useRef } from 'react'
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
  const fieldRef = useRef<HTMLDivElement>(null)
  const lineRefs = useRef<(HTMLSpanElement | null)[]>([])
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (shouldReduceMotion) return

    const track = trackRef.current
    if (!track) return

    let frame = 0

    const applyProgress = (progress: number) => {
      lines.forEach((_, i) => {
        const [start, end] = lineWindows[i]
        const p = Math.min(1, Math.max(0, (progress - start) / (end - start)))
        const el = lineRefs.current[i]
        if (el) {
          el.style.transform = `translateX(${(1 - p) * 110}vw)`
          el.style.opacity = String(p)
        }
      })

      const field = fieldRef.current
      if (field) {
        field.style.transform = `translateY(${(progress - 0.5) * 48}px)`
      }
    }

    const update = () => {
      frame = 0
      const rect = track.getBoundingClientRect()
      const scrollable = track.offsetHeight - window.innerHeight
      const progress =
        scrollable <= 0 ? 1 : Math.min(1, Math.max(0, -rect.top / scrollable))
      applyProgress(progress)
    }

    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [shouldReduceMotion])

  return (
    <div ref={trackRef} className="liquid-banner-track relative h-[250vh]">
      <section
        aria-labelledby={headingId}
        className="sticky top-0 flex h-[100svh] w-full items-center justify-center overflow-hidden bg-ink"
      >
        <div
          ref={fieldRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 will-change-transform"
        >
          <AsciiLiquid className="h-full w-full" />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 bg-ink/50"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(to_bottom,var(--ink)_0%,transparent_30%,transparent_70%,var(--ink)_100%)]"
        />

        <h2
          id={headingId}
          className="relative z-20 text-center text-[clamp(2.85rem,7vw,4.75rem)] font-bold leading-[0.92] tracking-[-0.04em] text-paper"
        >
          {lines.map((line, i) => (
            <span
              key={line}
              ref={(el) => (lineRefs.current[i] = el)}
              className="block will-change-transform"
              style={
                shouldReduceMotion
                  ? undefined
                  : { transform: 'translateX(110vw)', opacity: 0 }
              }
            >
              {line}
            </span>
          ))}
        </h2>
      </section>
    </div>
  )
}
