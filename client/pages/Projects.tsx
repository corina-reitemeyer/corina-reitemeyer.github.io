import ProjectData from '../../src/projectsdata.json'
import { Link } from 'react-router-dom'
import Project from '../../models/projectdata.ts'
import HeroSection from '../components/HeroSection.tsx'

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

      <div className="flex justify-center py-10 sm:py-6 lg:px-4">
        <div className="w-full max-w-7xl p-4 sm:p-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
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
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                >
                  <div
                    className={`rounded-3xl border-4 border-black ${
                      index % 4 === 0
                        ? 'bg-[#BBB5FF]' // Plum
                        : index % 4 === 1
                          ? 'bg-[#FFF4B0]' // Lemon
                          : index % 4 === 2
                            ? 'bg-[#B5FFFA]' // Grape
                            : 'bg-[#FFB5DE]' // Raspberry
                    } relative transform overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2`}
                  >
                    {/* Text Content */}
                    <div className="relative z-10 mt-6 p-4 text-right md:p-6">
                      {project.company && (
                        <p className="font-body mb-2 text-sm uppercase text-black">
                          {project.company}
                        </p>
                      )}
                      <h3 className="font-heading text-2xl font-bold md:text-3xl">
                        {project.projectTitle}
                      </h3>
                    </div>

                    {/* Project Image */}
                    <img
                      src={project.projectImage}
                      alt={project.projectTitle}
                      className="h-auto w-full object-contain"
                    />
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
