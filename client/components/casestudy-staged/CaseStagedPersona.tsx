import { useId } from 'react'
import { useScrollReveal } from '../../lib/useScrollReveal'

type Fact = { label: string; value: string }

type Props = {
  mark: string
  eyebrow?: string
  name: string
  title: string
  context?: string
  avatarSrc: string
  avatarAlt: string
  facts: Fact[]
  quote?: string
}

export default function CaseStagedPersona({
  mark,
  eyebrow = 'Meet the learner',
  name,
  title,
  context,
  avatarSrc,
  avatarAlt,
  facts,
  quote,
}: Props) {
  const headingId = useId()
  const { ref: sectionRef, isInView } = useScrollReveal<HTMLElement>()
  const revealClass = isInView ? 'is-inview' : ''

  return (
    <section
      ref={sectionRef}
      aria-labelledby={headingId}
      className="case-staged__snap bg-ink w-full py-20 sm:py-28"
    >
      <div className={`reveal reveal--1 mx-auto max-w-4xl px-6 sm:px-10 xl:px-0 ${revealClass}`}>
        <p className="text-teal-mid mb-4 font-normal text-[0.72rem] uppercase tracking-[0.16em]">
          ({mark})
        </p>
        <p className="text-paper-muted mb-8 font-normal text-[0.7rem] uppercase tracking-[0.12em]">
          {eyebrow}
        </p>

        <div className="border-rule flex flex-col items-center gap-6 border-b pb-8 text-center sm:flex-row sm:text-left">
          <img
            src={avatarSrc}
            alt={avatarAlt}
            className="h-24 w-24 flex-none object-cover"
          />
          <div>
            <h2 id={headingId} className="text-paper text-2xl font-bold tracking-[-0.01em]">
              {name}
            </h2>
            <p className="text-teal-mid mt-1 font-normal text-[0.7rem] uppercase tracking-[0.1em]">
              {title}
            </p>
            {context && (
              <p className="text-paper-muted mt-2 max-w-md text-sm leading-relaxed">
                {context}
              </p>
            )}
          </div>
        </div>

        <dl className="grid grid-cols-1 gap-6 py-8 sm:grid-cols-2">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="text-teal-mid font-normal text-[0.68rem] uppercase tracking-[0.1em]">
                {fact.label}
              </dt>
              <dd className="text-paper-muted mt-2 text-sm leading-relaxed">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>

        {quote && (
          <blockquote className="border-rule text-paper-muted border-t pt-6 text-base italic leading-relaxed">
            &ldquo;{quote}&rdquo;
          </blockquote>
        )}
      </div>
    </section>
  )
}
