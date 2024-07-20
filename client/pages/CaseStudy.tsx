import caseStudyData from '../../src/caseStudyData.json'
import { useParams } from 'react-router-dom'
import Project from '../../models/projectdata.ts'

const projects: Project[] = caseStudyData as Project[]

const CaseStudy: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p: Project) => p.slug === slug)

  if (!project) {
    return <p>Project not found</p>
  }

  return (
    <div className="case-study">
      <h1>{project.projectTitle}</h1>
      <img src={project.headerImage} alt={project.projectTitle} />
      <p>{project.overview}</p>
    </div>
  )
}

export default CaseStudy
