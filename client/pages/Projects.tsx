import GridItem from '../components/GridItem'
import caseStudyData from '../../public/caseStudyData.json'
import { Link } from 'react-router-dom'
import Project from '../../models/projectdata.ts'

interface ProjectsProps {
  images: string
}

const Projects: React.FC<ProjectsProps> = () => {
  const projects = caseStudyData as Project[]
  return (
    <>
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
