import { useId } from 'react'
import { useScrollReveal } from '../../lib/useScrollReveal'

export default function CommunitySection() {
  const headingId = useId()
  const { ref: sectionRef, isInView } = useScrollReveal<HTMLElement>()
  const revealClass = isInView ? 'is-inview' : ''

  return (
    <section
      ref={sectionRef}
      id="community"
      aria-labelledby={headingId}
      className="w-full bg-ink py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10 xl:px-0">
        <div className={`reveal reveal--1 relative mb-10 max-w-measure sm:mb-14 ${revealClass}`}>
          <p className="mb-3 font-normal text-xs uppercase tracking-[0.16em] text-teal-mid">
            Community &amp; dance
          </p>
          <h2
            id={headingId}
            className="text-[clamp(2rem,5vw,3rem)] font-bold leading-[0.98] tracking-[-0.03em] text-paper"
          >
            Latin dance and the rooms that hold people
          </h2>
        </div>

        <div className={`reveal reveal--2 max-w-measure space-y-8 ${revealClass}`}>
          <p className="text-paper-muted">
            I care about growing capability in the people around me, and
            showing up for the communities I&rsquo;m part of, whether
            that&rsquo;s performing, teaching salsa, shooting event
            photography, or mentoring someone finding their feet in a new
            field.
          </p>

          <div
            aria-hidden="true"
            className="flex aspect-video items-center justify-center rounded-2xl border border-dashed border-rule text-center font-normal text-xs uppercase tracking-[0.12em] text-paper-muted"
          >
            TODO: replace with real photos
          </div>
        </div>
      </div>
    </section>
  )
}
