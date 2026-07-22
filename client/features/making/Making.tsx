import { useEffect, useId, useState } from 'react'
import { Link } from 'react-router-dom'
import MakingData from './makingdata.json'
import type MakingProject from './makingdata.types'
import { useScrollReveal } from '../../lib/useScrollReveal'
import { HandAsterisk, HandSquiggleCompact } from '../../components/icons/Doodles'

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

function ProjectTile({ project, index }: { project: MakingProject; index: number }) {
  // Matches lg:grid-cols-3 below, so the whole first row is visible on load
  // (rather than just the first card) on the widest layout.
  const isFirstRow = index < 3
  const [hasMounted, setHasMounted] = useState(false)
  const { ref: scrollRef, isInView: scrollInView } = useScrollReveal<HTMLLIElement>()

  useEffect(() => {
    if (!isFirstRow) return
    const frame = requestAnimationFrame(() => setHasMounted(true))
    return () => cancelAnimationFrame(frame)
  }, [isFirstRow])

  const isInView = isFirstRow ? hasMounted : scrollInView
  const revealClass = isInView ? 'is-inview' : ''

  const cover = (
    <img
      src={project.image}
      alt=""
      aria-hidden="true"
      className="aspect-[4/3] w-full rounded-2xl object-cover transition-transform duration-500 ease-editorial group-hover:scale-[1.03]"
    />
  )

  const content = (
    <>
      <div className="relative">
        <div className="overflow-hidden rounded-2xl">{cover}</div>
        {index === 0 && (
          <HandAsterisk className="text-teal-mid absolute left-3 top-3 h-5 w-5" />
        )}
        {project.note && (
          <p className="margin-note ink-write absolute right-3 top-3 max-w-[5rem] rotate-6 text-right text-lg">
            {project.note}
          </p>
        )}
      </div>

      <div className="mt-4">
        <p className="mb-1.5 flex flex-wrap gap-x-2 font-normal text-xs uppercase tracking-[0.12em] text-paper-muted">
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

  return (
    <li
      ref={scrollRef}
      className={`reveal group min-w-0 ${revealClass}`}
    >
      {project.href ? (
        <Link
          to={project.href}
          aria-label={`${project.title}. ${project.description}`}
          className="block"
        >
          {content}
        </Link>
      ) : (
        <div>{content}</div>
      )}
    </li>
  )
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
          <HandSquiggleCompact className="text-teal-mid/60 absolute bottom-3 left-6 h-6 w-[110px] -rotate-6 sm:bottom-10 sm:left-10" />
          <p className="margin-note ink-write absolute right-6 top-32 hidden -rotate-3 sm:right-10 sm:block">
            try · break · remake
          </p>
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 pb-16 pt-[112px] sm:px-10 sm:pb-24 sm:pt-[164px] xl:px-0">
          <p
            className={`reveal reveal--1 text-teal-mid mb-3 font-normal text-xs uppercase tracking-[0.16em] ${revealClass}`}
          >
            Playground
          </p>

          <div className={`reveal reveal--2 ${revealClass}`}>
            <h1
              id={headingId}
              className="text-paper text-[clamp(2.75rem,8vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.03em]"
            >
              <span className="block">Half-built ideas,</span>
              <span className="block">shipped anyway.</span>
            </h1>
          </div>

          <p
            className={`reveal reveal--3 max-w-measure text-paper-soft mt-7 text-[clamp(1.05rem,1.7vw,1.15rem)] ${revealClass}`}
          >
            Where I upskill,{' '}
            <span className="text-teal-mid">test new tools and approaches</span>,
            and sometimes just want to design and build something cool.
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
            <p className="margin-note -rotate-2 text-lg">
              gotta remember to commit to GitHub!
            </p>
          </div>

          {/* eslint-disable-next-line jsx-a11y/no-redundant-roles -- restores list semantics removed by Tailwind preflight in VoiceOver/Safari */}
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project, index) => (
              <ProjectTile key={project.id} project={project} index={index} />
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
