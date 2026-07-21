import { useId } from 'react'
import { useScrollReveal } from '../../lib/useScrollReveal'

type Props = {
  heading?: string
  metrics?: { label: string; value: string }[]
}

/** Renders nothing when there's no real impact data yet, rather than showing an empty/placeholder section. */
export default function CaseStagedMetrics({ heading = 'Impact', metrics }: Props) {
  const headingId = useId()
  const { ref: sectionRef, isInView } = useScrollReveal<HTMLElement>()
  const revealClass = isInView ? 'is-inview' : ''

  if (!metrics || metrics.length === 0) return null

  return (
    <section
      ref={sectionRef}
      aria-labelledby={headingId}
      className="case-staged__snap bg-ink w-full py-20 sm:py-28"
    >
      <div className={`reveal reveal--1 mx-auto max-w-6xl px-6 sm:px-10 xl:px-0 ${revealClass}`}>
        <h2
          id={headingId}
          className="text-teal-mid mb-10 font-normal text-[0.72rem] uppercase tracking-[0.16em] sm:mb-14"
        >
          {heading}
        </h2>
        <dl className="border-rule grid grid-cols-1 gap-x-12 gap-y-10 border-t pt-10 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <dt className="text-paper-muted mb-2 text-sm">{metric.label}</dt>
              <dd className="text-paper text-lg font-semibold leading-snug">
                {metric.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
