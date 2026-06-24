import MakingData from '../../src/makingdata.json'
import type MakingProject from '../../models/makingdata'

export default function Making() {
  const projects = MakingData as MakingProject[]

  return (
    <section className="relative bg-[#08082a] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 xl:px-0">
        <h2 className="mx-auto mb-10 max-w-6xl px-6 text-3xl font-semibold text-white sm:mb-8 sm:text-3xl xl:px-0">
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
              <h2 className="mb-3 text-2xl font-bold text-white">
                {project.title}
              </h2>
              <p className="mb-5 flex-1 text-base leading-relaxed text-slate-400">
                {project.description}
              </p>
              {/* <a
                href={project.href}
                aria-label={`Find out more about ${project.title}`}
                className="group inline-flex items-center gap-2 text-base font-bold text-white transition hover:text-slate-300"
              >
                find out more
                <span
                  aria-hidden="true"
                  className="transition group-hover:translate-x-1"
                >
                  →
                </span>
              </a> */}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
