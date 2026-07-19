import { useEffect, useId, useState } from 'react'

const meta = [
  { label: 'Based', value: 'Melbourne, Australia' },
  { label: 'Focus', value: 'Product design & front-end build' },
  { label: 'Availability', value: 'Actively looking' },
]

export default function AboutHero() {
  const headingId = useId()
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsInView(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  const revealClass = isInView ? 'is-inview' : ''

  return (
    <header
      aria-labelledby={headingId}
      className="bg-ink relative w-full overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div className="atmosphere-wash absolute inset-0" />
        <div className="atmosphere-rules absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-16 pt-[112px] sm:px-10 sm:pb-24 sm:pt-[164px] xl:px-0">
        <p
          className={`reveal reveal--1 text-paper-muted mb-3 font-light text-[0.72rem] uppercase tracking-[0.16em] ${revealClass}`}
        >
          About Corina
        </p>

        <h1
          id={headingId}
          className={`reveal reveal--2 text-paper mb-6 text-[clamp(2.75rem,8vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.03em] ${revealClass}`}
        >
          <span className="block">Structured thinker.</span>
          <span className="block">Practical builder.</span>
        </h1>

        <p
          className={`reveal reveal--3 max-w-measure text-paper-muted mb-10 text-[clamp(1.1rem,1.8vw,1.25rem)] sm:mb-14 ${revealClass}`}
        >
          Designer first, builder by necessity, shaping product and learning
          experiences across Australia and New Zealand, with accessibility
          running through all of it.
        </p>

        <dl
          className={`reveal reveal--4 border-rule grid grid-cols-1 gap-x-10 gap-y-6 border-t pt-8 sm:grid-cols-3 ${revealClass}`}
          aria-label="At a glance"
        >
          {meta.map((item) => (
            <div key={item.label}>
              <dt className="text-teal-mid font-light text-[0.7rem] uppercase tracking-[0.12em]">
                {item.label}
              </dt>
              <dd className="text-paper mt-1">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </header>
  )
}
