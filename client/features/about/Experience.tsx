import { useId } from 'react'
import { useScrollReveal } from '../../lib/useScrollReveal'

export type ExperienceItem = {
  id: string
  company: string
  title: string
  dates: string
}

type Props = {
  items: ExperienceItem[]
}

export default function ExperienceSection({ items }: Props) {
  const headingId = useId()
  const { ref: sectionRef, isInView } = useScrollReveal<HTMLElement>()
  const revealClass = isInView ? 'is-inview' : ''

  return (
    <section
      ref={sectionRef}
      aria-labelledby={headingId}
      className="w-full bg-ink py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10 xl:px-0">
        <div
          className={`reveal reveal--1 mb-10 max-w-measure sm:mb-14 ${revealClass}`}
        >
          <p className="mb-3 text-xs font-normal uppercase tracking-[0.16em] text-teal-mid">
            Experience
          </p>
          <h2
            id={headingId}
            className="mb-4 text-[clamp(2rem,5vw,3rem)] font-bold leading-[0.98] tracking-[-0.03em] text-paper"
          >
            Government, SaaS products, and a throughline of{' '}
            <span className="text-teal-mid">teaching</span>
          </h2>
          <p className="text-paper-muted">
            Close to 10 years moving between NZ government, B2B SaaS scale ups,
            and the classroom, always in the seam between how something works
            and how it&rsquo;s explained.
          </p>
        </div>

        {/* eslint-disable-next-line jsx-a11y/no-redundant-roles -- restores list semantics removed by Tailwind preflight in VoiceOver/Safari */}
        <ol
          role="list"
          className={`reveal reveal--2 divide-y divide-rule border-t border-rule ${revealClass}`}
        >
          {items.map((item) => (
            <li
              key={item.id}
              className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 sm:py-6"
            >
              <div>
                <h3 className="text-lg font-semibold text-paper sm:text-xl">
                  {item.title}
                </h3>
                <p className="text-paper-muted">{item.company}</p>
              </div>
              <p className="whitespace-nowrap text-sm font-normal text-paper-muted">
                {item.dates}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
