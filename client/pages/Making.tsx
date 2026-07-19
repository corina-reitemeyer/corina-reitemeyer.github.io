import { useEffect, useId, useState, type SVGProps } from 'react'
import { Link } from 'react-router-dom'
import MakingData from '../../src/makingdata.json'
import type MakingProject from '../../models/makingdata'
import { useScrollReveal } from '../lib/useScrollReveal'

const STATUS_LABEL: Record<MakingProject['status'], string> = {
  live: 'Live',
  wip: 'In progress',
  shelved: 'Shelved',
}

const STATUS_CLASS: Record<MakingProject['status'], string> = {
  live: 'text-teal-mid',
  wip: 'text-paper-soft',
  shelved: 'text-paper-muted',
}

const COVER_GRADIENT: Record<NonNullable<MakingProject['coverVariant']>, string> = {
  systems:
    'linear-gradient(145deg, color-mix(in srgb, var(--teal-deep) 70%, var(--ink)) 0%, var(--ink) 70%)',
  interfaces:
    'linear-gradient(160deg, var(--ink) 10%, color-mix(in srgb, var(--teal) 35%, var(--ink)) 100%)',
  prototypes:
    'linear-gradient(200deg, color-mix(in srgb, var(--charcoal) 40%, var(--teal-deep)) 0%, var(--ink) 80%)',
  learning:
    'linear-gradient(155deg, color-mix(in srgb, var(--teal-mid) 28%, var(--ink)) 0%, var(--ink) 65%, color-mix(in srgb, var(--teal-deep) 55%, var(--ink)) 100%)',
}

function HandAsterisk(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false" {...props}>
      <path
        className="ink-stroke"
        d="M16 4v24M6.5 10.5l19 11M6.5 21.5l19-11"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        pathLength={1}
        strokeDasharray={1}
        strokeDashoffset={1}
      />
    </svg>
  )
}

function HandSquiggle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 80 28" fill="none" aria-hidden="true" focusable="false" {...props}>
      <path
        className="ink-stroke"
        d="M4 18c8-12 16 8 24-2s14-2 22 4 14-10 26-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        pathLength={1}
        strokeDasharray={1}
        strokeDashoffset={1}
      />
    </svg>
  )
}

function ProjectTile({ project, index }: { project: MakingProject; index: number }) {
  const cover = project.image ? (
    <img
      src={project.image}
      alt=""
      aria-hidden="true"
      className="aspect-[4/3] w-full rounded-2xl object-cover transition-transform duration-500 ease-editorial group-hover:scale-[1.03]"
    />
  ) : (
    <div
      className="flex aspect-[4/3] w-full items-end rounded-2xl p-5 transition-transform duration-500 ease-editorial group-hover:scale-[1.03]"
      style={{ background: COVER_GRADIENT[project.coverVariant ?? 'systems'] }}
      aria-hidden="true"
    >
      <p className="text-[clamp(1.85rem,3.2vw,2.6rem)] font-bold leading-[0.88] tracking-[-0.04em] text-paper/90">
        {project.coverWord}
      </p>
    </div>
  )

  const content = (
    <>
      <div className="relative">
        <div className="overflow-hidden rounded-2xl">{cover}</div>
        {index === 0 && (
          <HandAsterisk className="ink-draw text-teal-mid absolute left-3 top-3 h-5 w-5" />
        )}
        {project.note && (
          <p className="margin-note ink-draw ink-write absolute right-3 top-3 max-w-[5rem] rotate-6 text-right text-lg">
            {project.note}
          </p>
        )}
      </div>

      <div className="mt-4">
        <p className="mb-1.5 flex flex-wrap gap-x-2 font-mono text-[0.68rem] uppercase tracking-[0.08em] text-paper-muted">
          <span>{project.category}</span>
          <span aria-hidden="true">·</span>
          <span className={STATUS_CLASS[project.status]}>
            {STATUS_LABEL[project.status]}
          </span>
          <span aria-hidden="true">·</span>
          <span>{project.year}</span>
        </p>
        <h2 className="mb-1.5 inline-flex flex-wrap items-baseline gap-2 text-[clamp(1.1rem,1.8vw,1.3rem)] font-medium tracking-[-0.015em] text-paper transition-colors duration-200 group-hover:text-teal-mist">
          {project.title}
          {project.href && (
            <span aria-hidden="true" className="text-teal-mid">
              →
            </span>
          )}
        </h2>
        <p className="line-clamp-3 text-sm leading-relaxed text-paper-muted">
          {project.description}
        </p>
      </div>
    </>
  )

  if (project.href) {
    return (
      <Link
        to={project.href}
        aria-label={`${project.title}. ${project.description}`}
        className="group block"
      >
        {content}
      </Link>
    )
  }

  return <div>{content}</div>
}

export default function Making() {
  const projects = MakingData as MakingProject[]
  const headingId = useId()
  const [isInView, setIsInView] = useState(false)
  const { ref: gridRef, isInView: gridInView } = useScrollReveal<HTMLElement>()

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsInView(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  const revealClass = isInView ? 'is-inview' : ''
  const gridRevealClass = gridInView ? 'is-inview' : ''

  return (
    <>
      <header
        aria-labelledby={headingId}
        className="bg-ink relative min-h-[480px] w-full overflow-hidden sm:min-h-[620px]"
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
          <div className="atmosphere-wash absolute inset-0" />
          <div className="atmosphere-rules absolute inset-0" />
          <HandSquiggle className="ink-draw text-teal-mid/60 absolute bottom-3 left-6 h-6 w-[110px] -rotate-6 sm:bottom-10 sm:left-10" />
          <p className="margin-note ink-draw ink-write absolute right-6 top-32 hidden -rotate-3 sm:right-10 sm:block">
            try · break · remake
          </p>
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 pb-11 pt-[152px] sm:px-10 sm:pb-14 sm:pt-[208px] xl:px-0">
          <div className={`reveal reveal--1 ${revealClass}`}>
            <h1
              id={headingId}
              className="text-paper text-[clamp(2.85rem,7vw,4.5rem)] font-bold leading-[0.92] tracking-[-0.04em]"
            >
              Playground
            </h1>
          </div>

          <p
            className={`reveal reveal--2 max-w-measure text-paper-soft mt-7 text-[clamp(1.05rem,1.7vw,1.15rem)] ${revealClass}`}
          >
            Side projects and{' '}
            <span className="text-teal-mid">small experiments</span>, dumping
            the pieces out and figuring out what wants to stand up.
          </p>
        </div>
      </header>

      <section
        ref={gridRef}
        aria-label="Playground projects"
        className="bg-ink w-full py-10 sm:py-14"
      >
        <div className="mx-auto max-w-6xl px-6 sm:px-10 xl:px-0">
          <div
            className={`reveal reveal--1 relative mb-6 flex items-center gap-3 ${gridRevealClass}`}
          >
            <HandAsterisk className="text-teal-mid h-4 w-4 shrink-0" />
            <p className="margin-note -rotate-2 text-lg">what&rsquo;s on the floor</p>
          </div>

          {/* eslint-disable-next-line jsx-a11y/no-redundant-roles -- restores list semantics removed by Tailwind preflight in VoiceOver/Safari */}
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project, index) => (
              <li
                key={project.id}
                className={`reveal reveal--${(index % 5) + 1} group min-w-0 ${gridRevealClass}`}
              >
                <ProjectTile project={project} index={index} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
