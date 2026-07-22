import { useId } from 'react'
import { useScrollReveal } from '../../../lib/useScrollReveal'

type Props = {
  quote: string
  attribution?: string
  attributionRole?: string
}

export default function CaseStagedQuote({
  quote,
  attribution,
  attributionRole,
}: Props) {
  const headingId = useId()
  const { ref: sectionRef, isInView } = useScrollReveal<HTMLElement>()
  const revealClass = isInView ? 'is-inview' : ''

  return (
    <section
      ref={sectionRef}
      aria-labelledby={headingId}
      className="bg-ink flex min-h-[70dvh] w-full items-center py-20"
    >
      <div
        className={`reveal reveal--1 mx-auto max-w-3xl px-6 sm:px-10 xl:px-0 ${revealClass}`}
      >
        <div className="relative pt-10 sm:pt-14">
          <span
            aria-hidden="true"
            className="text-teal-mid/20 pointer-events-none absolute -top-2 left-0 select-none font-serif text-[7rem] leading-none sm:-top-3 sm:text-[9rem]"
          >
            &ldquo;
          </span>
          <blockquote
            id={headingId}
            className="text-paper relative text-[clamp(1.5rem,3.2vw,2.3rem)] font-semibold leading-snug tracking-[-0.01em]"
          >
            {quote}
          </blockquote>
        </div>
        {(attribution || attributionRole) && (
          <figcaption className="text-paper-muted mt-6 text-sm">
            {attribution && (
              <span className="text-paper font-semibold">{attribution}</span>
            )}
            {attribution && attributionRole && <span className="mx-2">·</span>}
            {attributionRole}
          </figcaption>
        )}
      </div>
    </section>
  )
}
