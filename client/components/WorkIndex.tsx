import { useId, useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../lib/useScrollReveal'

type WorkItem = {
  id: number
  projectImage: string
  projectTitle: string
  company?: string
  slug: string
}

type WorkIndexProps = {
  projects: WorkItem[]
  linkPrefix: string
}

/** Inferred from the About page's experience timeline — adjust if a project's year changes. */
const YEAR_BY_SLUG: Record<string, string> = {
  'suitefiles-ai-summary': '2025',
  'suitefiles-design-system': '2025',
  'moe-design-system': '2022',
  'ow-templates': '2023',
}

export default function WorkIndex({ projects, linkPrefix }: WorkIndexProps) {
  const headingId = useId()
  const [activeSlug, setActiveSlug] = useState<string | null>(null)
  const { ref: sectionRef, isInView } = useScrollReveal<HTMLElement>()
  const revealClass = isInView ? 'is-inview' : ''

  const active = projects.find((p) => p.slug === activeSlug) ?? null

  const open = (slug: string) => setActiveSlug(slug)
  const close = (slug: string) =>
    setActiveSlug((prev) => (prev === slug ? null : prev))

  return (
    <section
      ref={sectionRef}
      aria-labelledby={headingId}
      className="w-full bg-ink py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10 xl:px-0">
        <header
          className={`reveal reveal--1 relative mb-10 sm:mb-14 ${revealClass}`}
        >
          <h2
            id={headingId}
            className="text-[clamp(2.85rem,7vw,4.75rem)] font-bold leading-[0.92] tracking-[-0.04em] text-paper"
          >
            <span className="block">Selected</span>
            <span className="block text-teal-mid">work</span>
          </h2>
          <p
            aria-hidden="true"
            className="margin-note ink-draw ink-write absolute right-0 top-1 hidden sm:block"
          >
            proof, not pitch
          </p>
        </header>

        <div
          className={`reveal reveal--2 border-t border-rule ${revealClass}`}
          aria-hidden="true"
        />

        <div
          className={`reveal reveal--3 grid grid-cols-1 gap-10 pt-10 sm:gap-12 sm:pt-14 lg:grid-cols-[minmax(14rem,22rem)_1fr] lg:gap-16 ${revealClass}`}
        >
          <aside>
            {active && (
              <>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-charcoal-soft">
                  <img
                    src={active.projectImage}
                    alt=""
                    aria-hidden="true"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-4">
                  {active.company && (
                    <p className="mb-1 font-normal text-xs uppercase tracking-[0.12em] text-teal-mid">
                      {active.company}
                    </p>
                  )}
                  <p className="text-sm leading-relaxed text-paper-muted">
                    {active.projectTitle}
                  </p>
                </div>
              </>
            )}
          </aside>

          {/* eslint-disable-next-line jsx-a11y/no-redundant-roles -- restores list semantics removed by Tailwind preflight in VoiceOver/Safari */}
          <ul role="list" className="divide-y divide-rule border-t border-rule">
            {projects.map((project) => {
              const isActive = project.slug === activeSlug
              return (
                <li key={project.id}>
                  <Link
                    to={`${linkPrefix}/${project.slug}`}
                    onMouseEnter={() => open(project.slug)}
                    onMouseLeave={() => close(project.slug)}
                    onFocus={() => open(project.slug)}
                    onBlur={() => close(project.slug)}
                    className={`flex items-center gap-4 py-5 transition-colors duration-200 ease-out sm:gap-6 sm:py-6 ${
                      isActive ? 'text-paper' : 'text-paper-muted hover:text-paper'
                    }`}
                  >
                    <h3 className="flex-1 text-lg sm:text-xl">
                      {project.projectTitle}
                    </h3>
                    <span className="whitespace-nowrap font-normal text-sm text-paper-muted">
                      {YEAR_BY_SLUG[project.slug] ?? ''}
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
