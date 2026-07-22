import { useEffect, useId, useState } from 'react'

const meta = [
  { label: 'Based', value: 'Melbourne, Australia' },
  { label: 'Focus', value: 'Product design & design engineering' },
  { label: 'Availability', value: 'Actively interviewing' },
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
      className="relative w-full overflow-hidden bg-ink"
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
          className={`reveal reveal--1 mb-3 text-xs font-normal uppercase tracking-[0.16em] text-teal-mid ${revealClass}`}
        >
          About
        </p>

        <h1
          id={headingId}
          className={`reveal reveal--2 mb-6 text-[clamp(2.75rem,8vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.03em] text-paper ${revealClass}`}
        >
          <span className="block">Structured thinker.</span>
          <span className="block">Practical builder.</span>
        </h1>

        <p
          className={`reveal reveal--3 mb-10 max-w-measure text-[clamp(1.1rem,1.8vw,1.25rem)] text-paper-muted sm:mb-14 ${revealClass}`}
        >
          Digital product designer, technical enough to build what I design,
          shaping products across Australia and New Zealand. Also a recovering
          salsa instructor and never short of a side project.
        </p>

        <dl
          className={`reveal reveal--4 flex flex-col gap-y-6 border-t border-rule pt-8 sm:flex-row sm:gap-x-10 ${revealClass}`}
          aria-label="At a glance"
        >
          {meta.map((item) => (
            <div key={item.label}>
              <dt className="text-xs font-normal uppercase tracking-[0.12em] text-teal-mid">
                {item.label}
              </dt>
              <dd className="mt-1 text-paper">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </header>
  )
}
