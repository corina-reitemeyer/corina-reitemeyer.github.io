import GridItem from '../components/GridItem'
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
      <header className="bg-white py-20 text-center">
        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Hey! I’m Corina 👋
        </h1>
        <h2 className="mt-2 text-lg text-gray-700 md:text-xl">
          UX/UI Designer geeking over data and design systems.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-600">
          I’m passionate about creating user-centered designs for web and mobile
          apps, blending creativity with usability to craft delightful user
          experiences.
        </p>
      </header>
      <div className="flex justify-center px-14 py-8">
        <div className="2xl:max-w-8xl grid w-full max-w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:max-w-7xl xl:max-w-fit">
          {projects.map((project) => (
            <Link
              to={`/projects/${project.slug}`}
              key={project.id}
              className="block"
            >
              <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                <GridItem project={project} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Projects
