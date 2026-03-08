import { useId } from 'react'
import ProjectData from '../../src/projectsdata.json'
import { Link } from 'react-router-dom'
import Project from '../../models/projectdata'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import ImpactStatement from '../components/ImpactStatement'

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

const sharedViewport = { once: true, amount: 0.2 } as const

export default function Projects() {
  const sectionId = useId()
  const shouldReduceMotion = useReducedMotion()
  const projects = ProjectData as Project[]

  const visibleProjects = projects
    .filter((p) => p.projectTitle && p.slug && p.projectImage)
    .slice(0, 4)

  return (
    <>
      <div className="relative flex min-h-[40vh] w-full flex-col items-start justify-center bg-[#08082a] sm:min-h-[60vh]">
        <ImpactStatement
          align="left"
          padded
          bgSvgSrc="/images/Impact-statement-bg.svg"
          lines={['Crafting clear,', 'scalable digital experiences.']}
        />
      </div>

      <section
        aria-labelledby={sectionId}
        className="relative bg-[#08082a] py-16 sm:py-24"
      >
        <h2 id={sectionId} className="sr-only">
          Selected works
        </h2>

        <div className="mx-auto grid max-w-6xl auto-rows-[14rem] grid-cols-1 gap-8 px-6 sm:auto-rows-[16rem] md:grid-cols-2 lg:px-0">
          {visibleProjects.map((project, i) => {
            const layout =
              i === 0
                ? 'md:col-span-2 md:row-span-2'
                : i === 2
                  ? 'row-span-3'
                  : 'row-span-2'

            return (
              <Link
                to={`/projects/${project.slug}`}
                key={project.id}
                aria-label={`${project.company ?? 'Project'} — ${project.projectTitle}`}
                className={`group relative block overflow-hidden rounded-2xl ${layout}`}
              >
                <motion.img
                  src={project.projectImage}
                  alt={project.projectTitle}
                  className="h-full w-full object-cover"
                  custom={i}
                  variants={shouldReduceMotion ? undefined : cardVariants}
                  initial={shouldReduceMotion ? false : 'hidden'}
                  whileInView={shouldReduceMotion ? undefined : 'visible'}
                  viewport={sharedViewport}
                />

                {/* Decorative hover overlay */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[#08082a]/0 transition duration-300 group-hover:bg-[#08082a]/70"
                />

                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-6 left-9 translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <span className="block text-3xl font-semibold leading-tight text-white sm:text-2xl">
                    {project.company ?? 'Company'}
                  </span>
                  <span className="block text-3xl font-semibold text-white sm:text-2xl">
                    {project.projectTitle}
                  </span>
                </span>
              </Link>
            )
          })}
        </div>
      </section>
    </>
  )
}
