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
      className="bg-ink w-full py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10 xl:px-0">
        <div
          className={`reveal reveal--1 max-w-measure mb-10 sm:mb-14 ${revealClass}`}
        >
          <p className="text-teal-mid mb-3 font-normal text-xs uppercase tracking-[0.16em]">
            Experience
          </p>
          <h2
            id={headingId}
            className="text-paper mb-4 text-[clamp(2rem,5vw,3rem)] font-bold leading-[0.98] tracking-[-0.03em]"
          >
            Government, SaaS products, and a throughline of{' '}
            <span className="text-teal-mid">teaching</span>
          </h2>
          <p className="text-paper-muted">
            Close to 10 years moving between public-sector UX, B2B SaaS, and the
            classroom, always in the seam between how something works and how
            it&rsquo;s explained.
          </p>
        </div>

        {/* eslint-disable-next-line jsx-a11y/no-redundant-roles -- restores list semantics removed by Tailwind preflight in VoiceOver/Safari */}
        <ol
          role="list"
          className={`reveal reveal--2 divide-rule border-rule divide-y border-t ${revealClass}`}
        >
          {items.map((item) => (
            <li
              key={item.id}
              className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 sm:py-6"
            >
              <div>
                <p className="text-paper text-lg font-semibold sm:text-xl">
                  {item.title}
                </p>
                <p className="text-paper-muted">{item.company}</p>
              </div>
              <p className="text-paper-muted whitespace-nowrap font-normal text-sm">
                {item.dates}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
