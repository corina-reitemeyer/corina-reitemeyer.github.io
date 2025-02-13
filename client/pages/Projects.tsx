import ProjectData from '../../src/projectsdata.json'
import { Link } from 'react-router-dom'
import Project from '../../models/projectdata.ts'
import HeroSection from '../components/HeroSection.tsx'
import { motion } from 'framer-motion'

interface ProjectsProps {
  images: string
}

const Projects: React.FC<ProjectsProps> = () => {
  const projects = ProjectData as Project[]

  return (
    <>
      <header className="relative mx-auto flex min-h-[40vh] flex-col items-start justify-center px-8 sm:min-h-[60vh] sm:max-w-5xl sm:px-8">
        <HeroSection />
      </header>

      <section className="bg-[#E3F6F5] py-10 sm:py-16">
        <div className="flex w-full flex-col space-y-8 sm:space-y-10 lg:space-y-8">
          {projects
            .filter(
              (project) =>
                project.projectTitle && project.slug && project.projectImage,
            )
            .map((project, index) => (
              <Link
                to={`/projects/${project.slug}`}
                key={project.id}
                className="block"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                {/* Motion Wrapper for Scroll Animation */}
                <motion.div
                  className="relative mx-auto flex h-auto flex-col rounded-3xl border border-gray-200 bg-white sm:mx-8 md:flex-row lg:mx-auto lg:max-w-7xl"
                  initial={{ opacity: 0, y: 50 }} // Start off-screen
                  whileInView={{ opacity: 1, y: 0 }} // Animate into position
                  transition={{ duration: 0.6, delay: index * 0.15 }} // Staggered effect
                  viewport={{ once: true, amount: 0.2 }} // Ensures animation happens only once
                  whileHover={{ y: -8 }} // Hover effect
                >
                  {/* Left Column - Text Content */}
                  <div className="flex w-full flex-col justify-center p-10 sm:p-12 md:w-1/2 lg:p-16">
                    {/* Overhead Text */}
                    {project.company && (
                      <p className="text-lg font-normal capitalize text-[#7BBCBC]">
                        {project.company}
                      </p>
                    )}
                    {/* Project Title */}
                    <h3 className="mt-2 text-4xl font-semibold text-[#272343]">
                      {project.projectTitle}
                    </h3>
                    {/* Project Description */}
                    {project.description && (
                      <p className="mt-4 text-base font-medium leading-[30px] text-[#272343]">
                        {project.description}
                      </p>
                    )}
                  </div>

                  {/* Right Column - Image (Sits Below Text on Mobile) */}
                  <div className="flex h-full w-full items-center justify-center md:h-[550px] md:w-1/2">
                    <img
                      src={project.projectImage}
                      alt={project.projectTitle}
                      className="h-full w-full object-cover lg:rounded-br-3xl lg:rounded-tr-3xl"
                    />
                  </div>
                </motion.div>
              </Link>
            ))}
        </div>
      </section>
    </>
  )
}

export default Projects
