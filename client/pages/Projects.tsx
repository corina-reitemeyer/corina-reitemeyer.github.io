import ProjectData from '../../src/projectsdata.json'
import { Link } from 'react-router-dom'
import Project from '../../models/projectdata.ts'
import { motion } from 'framer-motion'
import ImpactStatement from '../components/ImpactStatement.tsx'

interface ProjectsProps {
  images: string
}

const Projects: React.FC<ProjectsProps> = () => {
  const projects = ProjectData as Project[]

  return (
    <>
      <header className="relative flex min-h-[40vh] w-full flex-col items-start justify-center bg-[#08082a] sm:min-h-[60vh]">
        <ImpactStatement
          padded={false} // important: no extra padding from the component
          lines={['Crafting AI-powered digital experiences that help people.']}
        />
      </header>

      {/* Selected Works */}
      <section className="relative bg-[#08082a] py-16 sm:py-24">
        {/* left vertical label (sticky) */}
        <div className="pointer-events-none absolute left-0 top-0 -ml-6 hidden h-full md:block">
          <div className="sticky top-24 flex h-[60vh] items-start">
            <span
              className="text-xs uppercase tracking-[0.2em] text-white/70"
              style={{ writingMode: 'vertical-rl' }}
            ></span>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl auto-rows-[14rem] grid-cols-1 gap-8 px-6 sm:auto-rows-[16rem] md:grid-cols-2 lg:px-0">
          {projects
            .filter((p) => p.projectTitle && p.slug && p.projectImage)
            .slice(0, 4) // show 4 like the wireframe
            .map((project, i) => {
              // grid layout: 0 = wide hero, 1 = left regular, 2 = right tall, 3 = left regular
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
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                  className={`group relative block overflow-hidden rounded-2xl ${layout}`}
                >
                  {/* image */}
                  <motion.img
                    src={project.projectImage}
                    alt={project.projectTitle}
                    className="h-full w-full object-cover"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                      delay: i * 0.08,
                    }}
                  />

                  {/* navy overlay on hover */}
                  <span className="pointer-events-none absolute inset-0 bg-[#08082a]/0 transition duration-300 group-hover:bg-[#08082a]/70" />

                  {/* caption bottom-left */}
                  <span className="pointer-events-none absolute bottom-6 left-9 translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="block text-3xl font-semibold leading-tight text-white sm:text-2xl">
                      {project.company || 'Company'}
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

export default Projects
