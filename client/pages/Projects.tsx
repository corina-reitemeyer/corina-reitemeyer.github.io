import caseStudyData from '../../src/caseStudyData.json'
import { Link } from 'react-router-dom'
import Project from '../../models/projectdata.ts'

interface ProjectsProps {
  images: string
}

const Projects: React.FC<ProjectsProps> = () => {
  const projects = caseStudyData as Project[]

  return (
    <>
      <header className="header-section relative overflow-hidden">
        {/* Turquoise Flower - Top Left */}
        <img
          src="/images/shapes/Elements-geometric-shape-flower-marigold-nature.svg"
          alt="Turquoise Flower"
          className="absolute left-[-50px] top-[-50px] h-48 w-48"
        />

        {/* Stripe Doodle - Top Right */}
        <img
          src="/images/shapes/OrganicShapes2.svg"
          alt="Stripe Doodle"
          className="absolute right-[-50px] top-[-50px] h-48 w-48"
        />

        {/* Squiggle Doodle - Bottom Left */}
        <img
          src="/images/shapes/OrganicShapes1.svg"
          alt="Squiggle Doodle"
          className="absolute bottom-[-50px] left-[-70px] h-56 w-56"
        />

        {/* Purple Flower - Bottom Right */}
        <img
          src="/images/shapes/Elements-geometric-shape-flower-daisy-nature.svg"
          alt="Purple Flower"
          className="absolute bottom-[-50px] right-[-70px] h-56 w-56"
        />

        {/* Header Text */}
        <h1 className="main-heading">Hi! I&apos;m Corina.</h1>
        <h2 className="sub-heading">
          UX/UI Designer geeking over data and design systems.
        </h2>
        <p className="intro-text">
          I’m passionate about creating user-centered designs for web and mobile
          apps, blending creativity with usability to craft delightful user
          experiences.
        </p>
      </header>

      <div className="flex justify-center px-4 py-10">
        <div className="w-full max-w-7xl p-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {projects.map((project, index) => (
              <Link
                to={`/projects/${project.slug}`}
                key={project.id}
                className="block"
              >
                <div
                  className={`rounded-3xl border-4 border-black ${
                    index % 3 === 0
                      ? 'bg-[#BBB5FF]'
                      : index % 3 === 1
                        ? 'bg-[#FFDBB5]'
                        : 'bg-[#B5FFFA]'
                  } relative overflow-hidden`}
                >
                  {/* Text Content */}
                  <div className="relative z-10 mt-6 p-6 text-right">
                    {project.company && (
                      <p className="font-body mb-2 text-sm uppercase text-black">
                        {project.company}
                      </p>
                    )}
                    <h3 className="font-heading text-4xl font-bold">
                      {project.projectTitle}
                    </h3>
                  </div>

                  {/* Project Image */}
                  <img
                    src={project.projectImage}
                    alt={project.projectTitle}
                    className="w-90 relative bottom-[-30px] mr-[-30px] h-auto object-contain"
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
