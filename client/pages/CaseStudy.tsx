import { useEffect, useState } from 'react'

const CaseStudy = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('/caseStudyData.json')
      .then((response) => response.json())
      .then((data) => setProjects(data.projects))
      .catch((error) => console.error('Error fetching data:', error))
  }, [])

  return (
    <>
      {projects.map((project, index) => (
        <div
          key={index}
          className="mx-auto mb-8 max-w-4xl rounded-lg bg-white p-8 shadow-md"
        >
          <img
            src={project.headerImage}
            alt={project.projectTitle}
            className="mb-4 rounded-lg"
          />

          <h2 className="mb-2 text-2xl font-bold">{project.projectTitle}</h2>
          <p className="mb-2 text-gray-600">
            {project.company} | {project.role}
          </p>
          <p className="mb-2 text-gray-600">{project.date}</p>

          <h3 className="mt-4 text-xl font-bold">Overview</h3>
          <p>{project.overview}</p>

          <h3 className="mt-4 text-xl font-bold">Objective & Goals</h3>
          <p>{project.objectiveGoals}</p>

          <h3 className="mt-4 text-xl font-bold">Background (Product idea)</h3>
          <p>{project.background}</p>

          <h3 className="mt-4 text-xl font-bold">Design Process</h3>
          <ul>
            <li>
              <strong>Research:</strong> {project.designProcess.research}
            </li>
            <li>
              <strong>Defining the problem:</strong>{' '}
              {project.designProcess.definingProblem}
            </li>
            <li>
              <strong>Ideation:</strong> {project.designProcess.ideation}
            </li>
            <li>
              <strong>Prototyping:</strong> {project.designProcess.prototyping}
            </li>
            {project.designProcess.feedback && (
              <li>
                <strong>Feedback:</strong> {project.designProcess.feedback}
              </li>
            )}
          </ul>

          <h3 className="mt-4 text-xl font-bold">Software Development</h3>
          <ul>
            <li>
              <strong>Tech Stack:</strong>{' '}
              {project.softwareDevelopment.techStack}
            </li>
            <li>
              <strong>Architecture:</strong>{' '}
              {project.softwareDevelopment.architecture}
            </li>
            <li>
              <strong>Development Process:</strong>{' '}
              {project.softwareDevelopment.developmentProcess}
            </li>
            <li>
              <strong>Integration:</strong>{' '}
              {project.softwareDevelopment.integration}
            </li>
          </ul>

          <h3 className="mt-4 text-xl font-bold">Solution & Implementation</h3>
          <ul>
            <li>
              <strong>Design Decisions:</strong>{' '}
              {project.solutionImplementation.designDecisions}
            </li>
            <li>
              <strong>Coding Processes:</strong>{' '}
              {project.solutionImplementation.codingProcesses}
            </li>
            <li>
              <strong>Accessibility & Usability:</strong>{' '}
              {project.solutionImplementation.accessibilityUsability}
            </li>
            <li>
              <strong>Testing:</strong> {project.solutionImplementation.testing}
            </li>
            <li>
              <strong>Deployment:</strong>{' '}
              {project.solutionImplementation.deployment}
            </li>
            <li>
              <strong>Challenges Faced:</strong>{' '}
              {project.solutionImplementation.challengesFaced}
            </li>
          </ul>

          <h3 className="mt-4 text-xl font-bold">Lessons Learned</h3>
          <ul>
            <li>
              <strong>Design Insights:</strong>{' '}
              {project.lessonsLearned.designInsights}
            </li>
            <li>
              <strong>Technical Insights:</strong>{' '}
              {project.lessonsLearned.technicalInsights}
            </li>
            <li>
              <strong>Improvements:</strong>{' '}
              {project.lessonsLearned.improvements}
            </li>
          </ul>

          <h3 className="mt-4 text-xl font-bold">Key Takeaways</h3>
          <p>{project.keyTakeaways.summary}</p>
          <p>
            <strong>Demonstration of Skills:</strong>{' '}
            {project.keyTakeaways.demonstrationSkills}
          </p>

          <div className="mt-4">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub Repository
            </a>{' '}
            |
            <a
              href={project.deployedSiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-blue-600 hover:underline"
            >
              Deployed Site
            </a>
          </div>
        </div>
      ))}
    </>
  )
}

export default CaseStudy
