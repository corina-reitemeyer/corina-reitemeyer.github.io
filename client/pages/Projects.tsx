import ProjectData from '../../src/projectsdata.json'
import { Link } from 'react-router-dom'
import Project from '../../models/projectdata.ts'

interface ProjectsProps {
  images: string
}

const Projects: React.FC<ProjectsProps> = () => {
  const projects = ProjectData as Project[]

  return (
    <>
      <header className="relative mx-auto flex min-h-[50vh] flex-col items-start justify-center px-8 sm:min-h-[70vh] sm:max-w-5xl sm:px-8">
        {/* Background Gradient Circles */}
        <div
          className="absolute right-[-25%] top-[-20%] h-[1000px] w-[1000px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(187,181,255,0.6) 0%, transparent 50%)',
          }}
        ></div>
        <div
          className="absolute bottom-[-50%] left-[-25%] h-[1000px] w-[1000px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(181,255,250,0.6) 0%, transparent 60%)',
          }}
        ></div>

        {/* Header Text */}
        <div className="z-10 w-full gap-4 text-left sm:gap-6">
          <div className="flex items-center">
            {/* Title Section */}
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Hi! I&apos;m Corina
            </h1>

            {/* Image Section */}
            <div className="-ml-2 mb-6 h-20 w-20 flex-shrink-0 sm:-mr-20 sm:mb-4 sm:ml-0 sm:h-24 sm:w-24">
              <img
                src="/images/my-notion-face-transparent.png"
                alt="Corina illustration"
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          {/* Description Section */}
          <p className="-mt-2 max-w-2xl text-left text-lg leading-relaxed text-gray-700 sm:mt-6 sm:text-xl">
            I enjoy creating user-centric and delightful experiences, with a
            technical and thoughtful approach that brings clarity to complexity.
            Whether it&apos;s simplifying workflows, improving usability, or
            crafting consistent interfaces, I love blending logic with a touch
            of creativity to build intuitive designs that feel effortless.
          </p>
        </div>
      </header>

      <div className="flex justify-center px-4 py-10 sm:px-8 sm:py-6">
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
