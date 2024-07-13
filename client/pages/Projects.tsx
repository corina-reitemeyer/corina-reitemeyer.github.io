import GridItem from '../components/GridItem'
import caseStudyData from '../../public/caseStudyData.json'
import { Link } from 'react-router-dom'
import Project from '../../models/projectdata.ts'

interface ProjectsProps {
  images: string
}

const Projects: React.FC<ProjectsProps> = () => {
  const projects: Project[] = caseStudyData as Project[]
  return (
    <>
      <div className="mx-auto px-8 py-10">
        <div className="grid grid-cols-1 justify-items-center gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-3">
          <div className="flex items-center justify-center">
            {projects.map((project) => (
              <Link to={`/projects/${project.slug}`} key={project.id}>
                <GridItem project={project} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
