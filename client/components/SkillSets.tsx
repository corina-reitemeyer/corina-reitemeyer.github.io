import { useId } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../lib/useScrollReveal'

type Track = {
  label: string
  items: string[]
}

const tracks: Track[] = [
  {
    label: 'Design',
    items: [
      'Design systems',
      'Interaction design',
      'Prototyping',
      'User research',
    ],
  },
  {
    label: 'Build',
    items: [
      'HTML & CSS',
      'React',
      'AI-assisted development',
      'Accessibility (WCAG 2.2)',
    ],
  },
  {
    label: 'Craft',
    items: ['Motion', 'Typography', 'Writing', 'Tooling'],
  },
]

export default function SkillSets() {
  const headingId = useId()
  const { ref: sectionRef, isInView } = useScrollReveal<HTMLElement>()
  const revealClass = isInView ? 'is-inview' : ''

  return (
    <section
      ref={sectionRef}
      id="skills"
      aria-labelledby={headingId}
      className="w-full bg-ink py-16 sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 sm:gap-16 sm:px-10 lg:grid-cols-[minmax(18rem,26rem)_1fr] xl:px-0">
        <div className={`reveal reveal--1 relative ${revealClass}`}>
          <h2
            id={headingId}
            className="text-[clamp(2.85rem,7vw,4.75rem)] font-bold leading-[0.92] tracking-[-0.04em] text-paper"
          >
            <span className="block">Skill</span>
            <span className="block text-teal-mid">sets</span>
          </h2>

          <div className="my-6 h-px w-16 bg-rule sm:my-8" aria-hidden="true" />

          <p className="max-w-measure text-paper-muted">
            End-to-end craft across design and code — systems, interfaces,
            and the tooling that keeps them honest from sketch to shipped UI.
          </p>

          <p className="margin-note ink-draw ink-write mt-6" aria-hidden="true">
            ~ p.s. if it's not accessible, it's not done.
          </p>

          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-1.5 font-mono text-[0.72rem] font-medium uppercase tracking-[0.16em] text-teal-mid transition-colors duration-150 ease-out hover:text-teal-mist"
          >
            More about me
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {tracks.map((track, trackIndex) => (
            <div
              key={track.label}
              className={`reveal reveal--${trackIndex + 2} ${revealClass}`}
            >
              <h3 className="mb-4 flex items-baseline gap-2 border-b border-rule pb-3">
                <span aria-hidden="true" className="font-mono text-xs text-teal-mid">
                  ({String(trackIndex + 1).padStart(2, '0')})
                </span>
                <span className="text-lg font-semibold text-paper">
                  {track.label}
                </span>
              </h3>
              {/* eslint-disable-next-line jsx-a11y/no-redundant-roles -- restores list semantics removed by Tailwind preflight in VoiceOver/Safari */}
              <ul role="list" className="space-y-3">
                {track.items.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-baseline justify-between gap-3 text-sm text-paper-muted"
                  >
                    <span>{item}</span>
                    <span aria-hidden="true" className="font-mono text-xs text-paper-muted/70">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
