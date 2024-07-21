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
    <div>
      {/* Banner Section (Image only) */}
      <div className="relative flex items-center justify-center">
        <img
          src={project.headerImage}
          alt={project.projectTitle}
          className="h-auto max-w-full"
        />
      </div>

      {/* Project Title */}
      <div className="mx-auto mt-20 max-w-7xl px-4 py-8">
        <h1 className="text-5xl font-medium">{project.projectTitle}</h1>
      </div>

      {/* Overview and Role Section */}
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-col gap-10 md:flex-row">
          {/* Overview */}
          <div className="md:w-1/2 md:pr-8">
            <h2 className="subheading">Overview</h2>
            <p className="mb-4">{project.overview}</p>
            <h2 className="subheading">Goals</h2>
            <p className="mb-4">{project.objectiveGoals}</p>
          </div>

          {/* Role and Date */}
          <div className="mt-8 md:mt-0 md:w-1/2">
            <h2 className="subheading">Role</h2>
            <p className="mb-4">{project.role}</p>
            <h2 className="subheading">Date</h2>
            <p className="mb-4">{project.date}</p>
          </div>
        </div>
      </div>

      {/* Background Section */}
      <div className="bg-amber-50">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <h2 className="mb-4 text-2xl font-bold">Background</h2>
          <p>{project.background}</p>
          {/* Add more content related to background here */}
        </div>
      </div>

      {/* Design Process Section */}
      <div className="mx-auto max-w-7xl px-4 py-12">
        <h3 className="mb-4 text-2xl font-bold">Design Process</h3>

        {/* Research */}
        <div>
          <h4 className="subheading">Research</h4>
          <p>{project.designProcess.research}</p>
        </div>

        {/* Designing the Problem */}
        <div>
          <h4 className="subheading">Designing the Problem</h4>
          <p>{project.designProcess.definingProblem}</p>
        </div>

        {/* Ideation */}
        <div>
          <h4 className="subheading">Ideation</h4>
          <p>{project.designProcess.ideation}</p>
        </div>

        {/* Prototyping */}
        <div>
          <h4 className="subheading">Prototyping</h4>
          <p>{project.designProcess.prototyping}</p>
        </div>

        {/* Feedback */}
        <div>
          <h4 className="subheading">Feedback</h4>
          <p>{project.designProcess.feedback}</p>
        </div>

        {/* Design Process Images (if any) */}
        {project.designProcessImages && (
          <div>
            <img
              src={project.designProcessImages}
              alt="Design Process Images"
              className="h-auto w-full"
            />
          </div>
        )}
      </div>

      {/* Software Development Section */}
      <div className="mx-auto max-w-7xl px-4 py-12">
        <h3 className="mb-4 text-2xl font-bold">Software Development</h3>

        {/* Tech Stack */}
        <div>
          <h4 className="subheading">Tech Stack</h4>
          <p>{project.softwareDevelopment.techStack}</p>
        </div>

        {/* Architecture */}
        <div>
          <h4 className="subheading">Architecture</h4>
          <p>{project.softwareDevelopment.architecture}</p>
        </div>

        {/* Development Process */}
        <div>
          <h4 className="subheading">Development Process</h4>
          <p>{project.softwareDevelopment.developmentProcess}</p>
        </div>

        {/* Integration */}
        <div>
          <h4 className="subheading">Integration</h4>
          <p>{project.softwareDevelopment.integration}</p>
        </div>

        {/* Software Development Images (if any) */}
        {project.softwareDevelopmentImages && (
          <div>
            <img
              src={project.softwareDevelopmentImages}
              alt="Software Development Images"
              className="h-auto w-full"
            />
          </div>
        )}
      </div>

      {/* Solution Implementation Section */}
      <div className="mx-auto max-w-7xl px-4 py-12">
        <h3 className="mb-4 text-2xl font-bold">Solution Implementation</h3>

        {/* Design Decisions */}
        <div>
          <h4 className="subheading">Design Decisions</h4>
          <p>{project.solutionImplementation.designDecisions}</p>
        </div>

        {/* Coding Process */}
        <div>
          <h4 className="subheading">Coding Process</h4>
          <p>{project.solutionImplementation.codingProcesses}</p>
        </div>

        {/* Accessibility & Usability */}
        <div>
          <h4 className="subheading">Accessibility & Usability</h4>
          <p>{project.solutionImplementation.accessibilityUsability}</p>
        </div>

        {/* Testing */}
        <div>
          <h4 className="subheading">Testing</h4>
          <p>{project.solutionImplementation.testing}</p>
        </div>

        {/* Deployment */}
        <div>
          <h4 className="subheading">Deployment</h4>
          <p>{project.solutionImplementation.deployment}</p>
        </div>

        {/* Challenges Faced */}
        <div>
          <h4 className="subheading">Challenges Faced</h4>
          <p>{project.solutionImplementation.challengesFaced}</p>
        </div>
      </div>

      {/* Lessons Learned Section */}
      <div className="mx-auto max-w-7xl px-4 py-12">
        <h3 className="mb-4 text-2xl font-bold">Lessons I Learned</h3>

        {/* Design Insights */}
        <div>
          <h4 className="subheading">Design Insights</h4>
          <p>{project.lessonsLearned.designInsights}</p>
        </div>

        {/* Technical Insights */}
        <div>
          <h4 className="subheading">Technical Insights</h4>
          <p>{project.lessonsLearned.technicalInsights}</p>
        </div>

        {/* Improvements */}
        <div>
          <h4 className="subheading">Improvements</h4>
          <p>{project.lessonsLearned.improvements}</p>
        </div>
      </div>

      {/* Key Takeaways Section */}
      <div className="mx-auto max-w-7xl px-4 py-12">
        <h3 className="mb-4 text-2xl font-bold">Key Takeaways</h3>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Summary */}
          <div>
            <h4 className="mb-2 text-xl font-bold">Summary</h4>
            <p>{project.keyTakeaways.summary}</p>
          </div>

          {/* Skills Demonstrated */}
          <div>
            <h4 className="mb-2 text-xl font-bold">Skills Demonstrated</h4>
            <p>{project.keyTakeaways.demonstrationSkills}</p>
          </div>
        </div>
      </div>

      {/* Final Image and Links Section */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-12">
        <img
          src={project.finalImage}
          alt="Completed project"
          className="mb-8 h-auto w-full"
        />
        <a
          href={project.githubLink}
          className="mb-2 text-blue-600 hover:underline"
        >
          Github Link
        </a>
        <a
          href={project.deployedSiteLink}
          className="text-blue-600 hover:underline"
        >
          Host Link
        </a>
      </div>
    </div>
  )
}

export default CaseStudy
