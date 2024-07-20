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
      <img src={project.projectImage} alt={project.projectTitle} />
      <h1>{project.projectTitle}</h1>
      <img src={project.headerImage} alt={project.projectTitle} />
      <div>
        <p>{project.overview}</p>
        <h3>Goals</h3>
        <p>{project.objectiveGoals}</p>
      </div>
      <div>
        <p>
          <span>Company/Client:</span> {project.company}
        </p>
        <p>
          <span>Role:</span> {project.role}
        </p>
        <p>
          <span>Date:</span> {project.date}
        </p>
        <div>
          <h3>Background</h3>
          <p>{project.background}</p>
          <img src={project.backgroundImages} alt="" />
        </div>
        <div>
          <h3>Design Process</h3>
          <h4>Research</h4>
          <p>{project.designProcess.research}</p>
          <h4>Designing the Problem</h4>
          <p>{project.designProcess.definingProblem}</p>
          <h4>Ideation</h4>
          <p>{project.designProcess.ideation}</p>
          <h4>Prototyping</h4>
          <p>{project.designProcess.prototyping}</p>
          <h4>Feedback</h4>
          <p>{project.designProcess.feedback}</p>
          <img src={project.designProcessImages} alt="" />
        </div>
        <div>
          <h3>Software Development</h3>
          <h4>Tech Stack</h4>
          <p>{project.softwareDevelopment.techStack}</p>
          <h4>Architecture</h4>
          <p>{project.softwareDevelopment.architecture}</p>
          <h4>Development Process</h4>
          <p>{project.softwareDevelopment.developmentProcess}</p>
          <h4>Integration</h4>
          <p>{project.softwareDevelopment.integration}</p>
          <img src={project.softwareDevelopmentImages} alt="" />
        </div>
        <div>
          <h3>Solution Implementation</h3>
          <h4>Design Decisions</h4>
          <p>{project.solutionImplementation.designDecisions}</p>
          <h4>Coding Process</h4>
          <p>{project.solutionImplementation.codingProcesses}</p>
          <h4>Accessibility & Usability</h4>
          <p>{project.solutionImplementation.accessibilityUsability}</p>
          <h4>Testing</h4>
          <p>{project.solutionImplementation.testing}</p>
          <h4>Deployment</h4>
          <p>{project.solutionImplementation.deployment}</p>
          <h4>What challenges were faced?</h4>
          <p>{project.solutionImplementation.challengesFaced}</p>
        </div>
        <div>
          <h3>Lessons I Learned</h3>
          <h4>Design Insights</h4>
          <p>{project.lessonsLearned.designInsights}</p>
          <h4>Technical Insights</h4>
          <p>{project.lessonsLearned.technicalInsights}</p>
          <h4>Improvements</h4>
          <p>{project.lessonsLearned.improvements}</p>
        </div>
        <div>
          <h3>Key Takeaways</h3>
          <h4>Summary</h4>
          <p>{project.keyTakeaways.summary}</p>
          <h4>Skills I demonstrated in this project</h4>
          <p>{project.keyTakeaways.demonstrationSkills}</p>
        </div>
        <div>
          <img src={project.finalImage} alt="" />
          <a href={project.githubLink}> Github Link</a>
          <a href={project.deployedSiteLink}> Host Link</a>
        </div>
      </div>
    </div>
  )
}

export default CaseStudy
