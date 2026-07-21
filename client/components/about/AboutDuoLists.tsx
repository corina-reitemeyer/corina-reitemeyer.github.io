import { useId } from 'react'
import { useScrollReveal } from '../../lib/useScrollReveal'

const interests = [
  'Café hopping and Pilates reformer sessions to reset between screens',
  'Latin dance: salsa and bachata, whenever I get the chance',
  'Cozy pixel games, travel photography, and a rotating stack of sci-fi and productivity books',
]

const highlights = [
  'Best Awards 2018 winner, Massey University College of Creative Arts',
  'TEFL & Full Stack Web Development certified',
  'Lived in 3 different countries',
  'Travelled to 16+ countries',
]

export default function AboutDuoLists() {
  const interestsHeadingId = useId()
  const highlightsHeadingId = useId()
  const { ref: sectionRef, isInView } = useScrollReveal<HTMLElement>()
  const revealClass = isInView ? 'is-inview' : ''

  return (
    <section ref={sectionRef} className="w-full bg-ink py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 xl:px-0">
        <p
          className={`reveal reveal--1 mb-10 text-xs font-normal uppercase tracking-[0.16em] text-teal-mid sm:mb-14 ${revealClass}`}
        >
          Off the clock
        </p>

        <div className="grid grid-cols-1 gap-12 sm:gap-16 lg:grid-cols-2">
          <div className={`reveal reveal--1 ${revealClass}`}>
            <h2
              id={interestsHeadingId}
              className="mb-6 text-2xl font-bold text-paper"
            >
              What I like to do
            </h2>
            {/* eslint-disable-next-line jsx-a11y/no-redundant-roles -- restores list semantics removed by Tailwind preflight in VoiceOver/Safari */}
            <ul
              role="list"
              aria-labelledby={interestsHeadingId}
              className="space-y-4 border-t border-rule pt-4"
            >
              {interests.map((item) => (
                <li key={item} className="text-paper-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={`reveal reveal--3 ${revealClass}`}>
            <h2
              id={highlightsHeadingId}
              className="mb-6 text-2xl font-bold text-paper"
            >
              Selected highlights
            </h2>
            {/* eslint-disable-next-line jsx-a11y/no-redundant-roles -- restores list semantics removed by Tailwind preflight in VoiceOver/Safari */}
            <ul
              role="list"
              aria-labelledby={highlightsHeadingId}
              className="space-y-4 border-t border-rule pt-4"
            >
              {highlights.map((item) => (
                <li key={item} className="text-paper-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
