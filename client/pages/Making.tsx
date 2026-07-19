import { Link } from 'react-router-dom'
import MakingData from '../../src/makingdata.json'
import type MakingProject from '../../models/makingdata'

export default function Making() {
  const projects = MakingData as MakingProject[]

  return (
    <section className="relative bg-ink py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 xl:px-0">
        <h2 className="mb-10 text-3xl font-bold text-paper sm:mb-8">
          Side Projects & Fun Experiments
        </h2>

        <ul role="list" className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {projects.map((project) => (
            <li key={project.id} className="flex flex-col">
              <img
                src={project.image}
                alt=""
                aria-hidden="true"
                className="mb-6 w-full rounded-xl object-cover"
              />
              <span className="mb-3 block text-2xl font-bold text-paper">
                {project.title}
              </span>
              <p className="mb-5 flex-1 text-base leading-relaxed text-paper-muted">
                {project.description}
              </p>
              {project.href && (
                <Link
                  to={project.href}
                  aria-label={`Read the case study: ${project.title}`}
                  className="group inline-flex items-center gap-2 text-base font-semibold text-teal-mid transition-colors duration-200 hover:text-teal-mist"
                >
                  Read the case study
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
