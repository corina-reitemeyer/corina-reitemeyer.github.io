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
      'UX/UI Design',
      'Interaction Design',
      'Design Systems',
      'Prototyping',
      'Visual Design',
    ],
  },
  {
    label: 'Build',
    items: [
      'HTML & CSS',
      'React & Vue.js',
      'Design Tokens',
      'Component Architecture',
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
      className="w-full bg-ink py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 sm:gap-16 sm:px-10 lg:grid-cols-[minmax(18rem,26rem)_1fr] xl:px-0">
        <div
          className={`reveal reveal--1 relative flex flex-col ${revealClass}`}
        >
          <h2
            id={headingId}
            className="text-[clamp(2.85rem,7vw,4.75rem)] font-bold leading-[0.92] tracking-[-0.04em] text-paper"
          >
            <span className="block">Skill &amp;</span>
            <span className="block text-teal-mid">Toolset</span>
          </h2>

          <div className="my-6 h-px w-16 bg-rule sm:my-8" aria-hidden="true" />

          <p className="max-w-measure text-paper-muted">
            End-to-end craft across design and code: systems, interfaces, and
            the tooling that keeps them honest from sketch to shipped UI.
          </p>

          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-1.5 text-xs font-normal uppercase tracking-[0.16em] text-teal-mid transition-colors duration-200 ease-out hover:text-teal-mist lg:mt-auto lg:pt-8"
          >
            More about me
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="flex flex-col">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
            {tracks.map((track, trackIndex) => (
              <div
                key={track.label}
                className={`reveal reveal--${trackIndex + 2} ${revealClass}`}
              >
                <h3 className="mb-4 border-b border-rule pb-3 text-lg font-semibold text-paper">
                  {track.label}
                </h3>
                {/* eslint-disable-next-line jsx-a11y/no-redundant-roles -- restores list semantics removed by Tailwind preflight in VoiceOver/Safari */}
                <ul role="list" className="space-y-3">
                  {track.items.map((item) => (
                    <li key={item} className="text-sm text-paper-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p
            className="margin-note ink-draw ink-write mt-10 hidden text-right sm:block lg:mt-auto lg:pt-8"
            aria-hidden="true"
          >
            ~ p.s. if it&rsquo;s not accessible, it&rsquo;s not done.
          </p>
        </div>
      </div>
    </section>
  )
}
