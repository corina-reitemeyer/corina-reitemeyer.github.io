import { useId } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { defaultViewport } from '../lib/motion'

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
  heading: string
  projects: ProjectGridItem[]
  /** When omitted, cards render as non-interactive (hoverable but not clickable). */
  linkPrefix?: string
  headingClassName?: string
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.08,
    },
  }),
}

const defaultHeadingClassName =
  'mx-auto mb-10 max-w-6xl px-6 text-3xl font-bold text-white sm:mb-8 sm:text-3xl xl:px-0'

export default function ProjectGrid({
  heading,
  projects,
  linkPrefix,
  headingClassName = defaultHeadingClassName,
}: ProjectGridProps) {
  const sectionId = useId()
  const shouldReduceMotion = useReducedMotion()

  const visibleProjects = projects
    .filter((p) => p.projectTitle && p.slug && p.projectImage)
    .slice(0, 5)

  return (
    <section
      aria-labelledby={sectionId}
      className="relative bg-[#08082a] py-16 sm:py-24"
    >
      <h2 id={sectionId} className={headingClassName}>
        {heading}
      </h2>

      <div className="mx-auto grid max-w-6xl auto-rows-[14rem] grid-cols-1 gap-8 px-6 sm:auto-rows-[16rem] md:grid-cols-2 xl:px-0">
        {visibleProjects.map((project, i) => {
          const layout =
            i === 0
              ? 'md:col-span-2 md:row-span-2'
              : i === 2
                ? 'row-span-3'
                : 'row-span-2'

          const ariaLabel = `${project.company ?? 'Project'} — ${project.projectTitle}`
          const wrapperClassName = `group relative block overflow-hidden rounded-2xl ${layout}`

          const cardContent = (
            <>
              <motion.img
                src={project.projectImage}
                alt=""
                aria-hidden="true"
                className="h-full w-full object-cover"
                custom={i}
                variants={shouldReduceMotion ? undefined : cardVariants}
                initial={shouldReduceMotion ? false : 'hidden'}
                whileInView={shouldReduceMotion ? undefined : 'visible'}
                viewport={defaultViewport}
              />

              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[#08082a]/0 transition duration-300 group-hover:bg-[#08082a]/70"
              />

              <span
                aria-hidden="true"
                className="pointer-events-none absolute bottom-6 left-6 right-6 z-10 translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
              >
                <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
                  {project.company ?? 'Company'}
                </span>
                <span className="block text-lg font-semibold leading-snug text-white sm:text-xl">
                  {project.projectTitle}
                </span>
              </span>

              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[#08082a]/0 transition duration-300 group-focus-within:bg-[#08082a]/50 group-hover:bg-[#08082a]/50"
              />
            </>
          )

          const resolvedPrefix = project.linkPrefix ?? linkPrefix

          return resolvedPrefix ? (
            <Link
              key={project.id}
              to={`${resolvedPrefix}/${project.slug}`}
              aria-label={ariaLabel}
              className={wrapperClassName}
            >
              {cardContent}
            </Link>
          ) : (
            <div key={project.id} aria-label={ariaLabel} className={wrapperClassName}>
              {cardContent}
            </div>
          )
        })}
      </div>
    </section>
  )
}
