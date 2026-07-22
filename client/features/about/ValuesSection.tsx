import { useId } from 'react'
import { useScrollReveal } from '../../lib/useScrollReveal'

type Value = {
  title: string
  description: string
}

type Props = {
  values: Value[]
}

export default function ValuesSection({ values }: Props) {
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
        <div className={`reveal reveal--1 mb-10 sm:mb-14 ${revealClass}`}>
          <p className="mb-3 font-normal text-xs uppercase tracking-[0.16em] text-teal-mid">
            Values
          </p>
          <h2
            id={headingId}
            className="text-[clamp(2rem,5vw,3rem)] font-bold leading-[0.98] tracking-[-0.03em] text-paper"
          >
            What drives the work
          </h2>
        </div>

        {/* eslint-disable-next-line jsx-a11y/no-redundant-roles -- restores list semantics removed by Tailwind preflight in VoiceOver/Safari */}
        <ul
          role="list"
          className={`reveal reveal--2 grid grid-cols-1 gap-x-12 gap-y-10 border-t border-rule pt-10 sm:grid-cols-2 lg:grid-cols-3 ${revealClass}`}
        >
          {values.map((value) => (
            <li key={value.title}>
              <h3 className="mb-2 text-lg font-semibold text-paper">
                {value.title}
              </h3>
              <p className="text-paper-muted">{value.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
