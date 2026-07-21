import { useScrollReveal } from '../../lib/useScrollReveal'

type Stat = { stat: string; label: string }

type Props = {
  intro?: string
  stats: Stat[]
}

export default function CaseStagedStats({ intro, stats }: Props) {
  const { ref: sectionRef, isInView } = useScrollReveal<HTMLElement>()
  const revealClass = isInView ? 'is-inview' : ''

  return (
    <section
      ref={sectionRef}
      aria-label={intro ?? 'Key stats'}
      className="case-staged__snap bg-ink flex min-h-[70dvh] w-full items-center py-20"
    >
      <div
        className={`reveal reveal--1 mx-auto w-full max-w-6xl px-6 sm:px-10 xl:px-0 ${revealClass}`}
      >
        {intro && (
          <p className="text-paper-muted mb-12 max-w-measure text-base leading-relaxed">
            {intro}
          </p>
        )}
        <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map(({ stat, label }) => (
            <div key={label} className="border-rule border-l pl-6">
              <dt className="text-paper text-[clamp(2.25rem,5vw,3.5rem)] font-bold tracking-[-0.02em]">
                {stat}
              </dt>
              <dd className="text-paper-muted mt-2 text-sm leading-relaxed">
                {label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
