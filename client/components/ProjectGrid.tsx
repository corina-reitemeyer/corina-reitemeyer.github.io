import { useEffect, useState, type Ref } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../lib/useScrollReveal'

type ProjectGridItem = {
  id: number
  projectImage: string
  projectTitle: string
  company?: string
  slug: string
  /** Overrides the section-level linkPrefix for this project, e.g. when mixing
   *  projects from different sections in one grid. */
  linkPrefix?: string
}

type ProjectGridProps = {
  projects: ProjectGridItem[]
  /** When omitted, cards render as non-interactive (hoverable but not clickable). */
  linkPrefix?: string
}

const LAYOUT_BY_INDEX = [
  'row-span-2 md:col-span-2',
  'row-span-2',
  'row-span-3',
  'row-span-2',
]

function ProjectCard({
  project,
  index,
  linkPrefix,
}: {
  project: ProjectGridItem
  index: number
  linkPrefix?: string
}) {
  const isFirst = index === 0
  const [hasMounted, setHasMounted] = useState(false)
  const { ref: scrollRef, isInView: scrollInView } = useScrollReveal<HTMLElement>()

  useEffect(() => {
    if (!isFirst) return
    const frame = requestAnimationFrame(() => setHasMounted(true))
    return () => cancelAnimationFrame(frame)
  }, [isFirst])

  const isInView = isFirst ? hasMounted : scrollInView
  const revealClass = isInView ? 'is-inview' : ''

  const layout = LAYOUT_BY_INDEX[index] ?? 'row-span-2'
  const ariaLabel = `${project.company ?? 'Project'}. ${project.projectTitle}`
  const resolvedPrefix = project.linkPrefix ?? linkPrefix

  const cardContent = (
    <>
      <div className="relative min-h-0 flex-1 overflow-hidden bg-charcoal-soft lg:absolute lg:inset-0 lg:flex-none">
        <img
          src={project.projectImage}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover transition-transform duration-500 ease-editorial group-hover:scale-[1.03]"
        />

        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden bg-[color-mix(in_srgb,var(--ink)_0%,transparent)] transition-colors duration-300 lg:block lg:group-hover:bg-[color-mix(in_srgb,var(--ink)_82%,transparent)] lg:group-focus-within:bg-[color-mix(in_srgb,var(--ink)_82%,transparent)]"
        />

        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-6 left-6 right-6 z-10 hidden translate-y-3 opacity-0 transition duration-300 lg:block lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-within:translate-y-0 lg:group-focus-within:opacity-100"
        >
          <span className="text-teal-mid mb-2 flex items-center gap-2 font-normal text-xs uppercase tracking-[0.12em]">
            {project.company ?? 'Project'}
          </span>
          <h3 className="text-paper block text-lg font-semibold leading-snug sm:text-xl">
            {project.projectTitle}
          </h3>
        </span>
      </div>

      <div className="pt-4 lg:hidden">
        <span className="text-teal-mid mb-1 flex items-center gap-2 font-normal text-xs uppercase tracking-[0.12em]">
          {project.company ?? 'Project'}
        </span>
        <h3 className="text-paper block text-lg font-semibold leading-snug sm:text-xl">
          {project.projectTitle}
        </h3>
      </div>
    </>
  )

  const wrapperClassName = `reveal group relative flex h-full flex-col lg:block ${layout} ${revealClass}`

  return resolvedPrefix ? (
    <Link
      ref={scrollRef as Ref<HTMLAnchorElement>}
      to={`${resolvedPrefix}/${project.slug}`}
      aria-label={ariaLabel}
      className={wrapperClassName}
    >
      {cardContent}
    </Link>
  ) : (
    <div
      ref={scrollRef as Ref<HTMLDivElement>}
      aria-label={ariaLabel}
      className={wrapperClassName}
    >
      {cardContent}
    </div>
  )
}

export default function ProjectGrid({ projects, linkPrefix }: ProjectGridProps) {
  const visibleProjects = projects
    .filter((p) => p.projectTitle && p.slug && p.projectImage)
    .slice(0, 4)

  return (
    <section aria-label="All projects" className="bg-ink w-full py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl auto-rows-[14rem] grid-cols-1 gap-16 px-6 sm:auto-rows-[16rem] sm:gap-8 sm:px-10 md:grid-cols-2 xl:px-0">
        {visibleProjects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} linkPrefix={linkPrefix} />
        ))}
      </div>
    </section>
  )
}
