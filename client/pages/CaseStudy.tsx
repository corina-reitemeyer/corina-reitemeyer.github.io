import caseStudyData from '../../src/caseStudyData.json'
import { useParams } from 'react-router-dom'
import Project from '../../models/projectdata.ts'
import Button from '../components/Button.tsx'

const projects: Project[] = caseStudyData as unknown as Project[]

const CaseStudy: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p: Project) => p.slug === slug)

  if (!project) {
    return <p>Project not found</p>
  }

  return (
    <div className="leading-8">
      {/* Header Image Section */}
      <div className="relative flex items-center justify-center">
        <img
          src={project.headerImage}
          alt={project.projectTitle}
          className="h-auto max-h-[600px] w-full object-cover"
        />
      </div>
      {/* Project Title Section */}
      <div className="mx-auto mt-20 max-w-3xl px-10 py-8">
        <h1 className="text-6xl font-medium">{project.projectTitle}</h1>
      </div>

      {/* Overview, Company, and Goals Section */}
      <div className="mx-auto mb-16 max-w-3xl px-10 py-12">
        <div className="flex flex-col gap-10 md:flex-row">
          <div className="md:w-1/2 md:pr-8">
            <h3>Overview</h3>
            <p className="mb-10 mt-6">{project.overview}</p>
            <h3>Goals</h3>
            <ul className="list-disc pl-4">
              {project.objectiveGoals.map((goal, index) => (
                <li key={index} className="mb-2">
                  {goal}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 px-10 md:w-1/2">
            <h6>Role</h6>
            <p className="mb-6 mt-6">{project.role}</p>
            {project.company && (
              <>
                <h6>Company / Client</h6>
                <p className="mb-6 mt-6">{project.company}</p>
              </>
            )}
            <h6>Date</h6>
            <p className="mb-6 mt-6">{project.date}</p>
            {(project.githubLink ||
              project.deployedSiteLink ||
              project.bestAwardsSiteLink) && (
              <div>
                <h5>Links</h5>

                {project.githubLink && (
                  <Button
                    url={project.githubLink}
                    label={'Github repository'}
                    className="primary_button"
                  />
                )}

                {project.deployedSiteLink && (
                  <Button
                    url={project.deployedSiteLink}
                    label={'Deployed website'}
                    className="primary_button"
                  />
                )}

                {project.bestAwardsSiteLink && (
                  <Button
                    url={project.bestAwardsSiteLink}
                    label={'Best Awards website'}
                    className="primary_button"
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Background Section */}
      <div className="w-full bg-amber-50 py-24">
        <div className="mx-auto max-w-3xl px-10">
          <div className="flex flex-col items-center">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold">Background</h2>
              <p className="mt-4 text-lg text-gray-700">{project.background}</p>
            </div>
            {Array.isArray(project.backgroundImages) &&
              project.backgroundImages.length > 0 && (
                <div className="mt-10 max-w-4xl">
                  {project.backgroundImages.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt="Background information images"
                      className="h-auto max-h-[800px] w-auto rounded-2xl"
                    />
                  ))}
                </div>
              )}
          </div>
        </div>
      </div>

      {/* Design Process Section */}
      <div className="mx-auto mt-28 max-w-3xl px-10">
        <h2 className="mt-6 pb-12 text-left">Design Process</h2>

        {/* Research */}
        <div className="mb-12">
          <h4 className="mt-6 pb-4">Research</h4>
          <p>{project.designProcess.research}</p>
          {project.designProcess.designProcessImages?.[0] && (
            <div className="mt-6">
              <img
                src={project.designProcess.designProcessImages[0].path}
                alt="Research process"
                className="mx-auto h-auto w-full max-w-3xl rounded-2xl"
              />
              {project.designProcess.designProcessImages[0].caption && (
                <p className="mt-2 text-center text-sm text-gray-600">
                  {project.designProcess.designProcessImages[0].caption}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Designing the Problem */}
        <div className="mb-12">
          <h4 className="mt-6 pb-4">Designing the Problem</h4>
          <p>{project.designProcess.definingProblem}</p>
          {project.designProcess.designProcessImages?.[1] && (
            <div className="mt-6">
              <img
                src={project.designProcess.designProcessImages[1].path}
                alt="Designing the problem"
                className="mx-auto h-auto w-full max-w-3xl rounded-2xl"
              />
              {project.designProcess.designProcessImages[1].caption && (
                <p className="mt-2 text-center text-sm text-gray-600">
                  {project.designProcess.designProcessImages[1].caption}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Ideation */}
        <div className="mb-12">
          <h4 className="mt-6 pb-4">Ideation</h4>
          <p>{project.designProcess.ideation}</p>
          {project.designProcess.designProcessImages?.[2] && (
            <div className="mt-6">
              <img
                src={project.designProcess.designProcessImages[2].path}
                alt="Ideation"
                className="mx-auto h-auto w-full max-w-3xl rounded-2xl"
              />
              {project.designProcess.designProcessImages[2].caption && (
                <p className="mt-2 text-center text-sm text-gray-600">
                  {project.designProcess.designProcessImages[2].caption}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Prototyping */}
        <div className="mb-12">
          <h4 className="mt-6 pb-4">Prototyping</h4>
          <p>{project.designProcess.prototyping}</p>
          {project.designProcess.designProcessImages?.[3] && (
            <div className="mt-6">
              <img
                src={project.designProcess.designProcessImages[3].path}
                alt="Prototyping"
                className="mx-auto h-auto w-full max-w-3xl rounded-2xl"
              />
              {project.designProcess.designProcessImages[3].caption && (
                <p className="mt-2 text-center text-sm text-gray-600">
                  {project.designProcess.designProcessImages[3].caption}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Feedback */}
        {project.designProcess.feedback && (
          <div className="mb-12">
            <h4 className="mt-6 pb-4">Feedback</h4>
            <p>{project.designProcess.feedback}</p>
            {project.designProcess.designProcessImages?.[4] && (
              <div className="mt-6">
                <img
                  src={project.designProcess.designProcessImages[4].path}
                  alt="Feedback"
                  className="mx-auto h-auto w-full max-w-3xl rounded-2xl"
                />
                {project.designProcess.designProcessImages[4].caption && (
                  <p className="mt-2 text-center text-sm text-gray-600">
                    {project.designProcess.designProcessImages[4].caption}
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Solutions Implementation Section */}
      <div className="w-full bg-gray-100 py-20">
        <div className="mx-auto max-w-3xl px-10">
          <div className="mx-auto">
            <h2 className="pb-8 text-left text-3xl font-bold">
              Solutions Implementation
            </h2>
            <div className="text-left">
              <h4 className="pb-4 pt-4">Design Decisions</h4>
              <p>{project.solutionImplementation.designDecisions}</p>

              {project.solutionImplementation.codingProcesses && (
                <div>
                  <h4 className="pb-4 pt-12">Coding Processes</h4>
                  <p>{project.solutionImplementation.codingProcesses}</p>
                </div>
              )}

              {/* Accessibility & Usability Section */}
              {project.solutionImplementation.accessibilityUsability && (
                <div>
                  <h4 className="pb-4 pt-12">Accessibility & Usability</h4>
                  <p>{project.solutionImplementation.accessibilityUsability}</p>
                </div>
              )}

              {/* Testing Section */}
              {project.solutionImplementation.testing && (
                <div>
                  <h4 className="pb-4 pt-12">Testing</h4>
                  <p>{project.solutionImplementation.testing}</p>
                </div>
              )}

              {project.solutionImplementation.deployment && (
                <div>
                  <h4 className="pb-4 pt-6">Deployment</h4>
                  <p>{project.solutionImplementation.deployment}</p>
                </div>
              )}

              <h4 className="pb-4 pt-12">Challenges Faced</h4>
              <p>{project.solutionImplementation.challengesFaced}</p>

              <div className="space-y-6 pt-6">
                {project.solutionImplementation.designProductImages.map(
                  (image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Design product ${index + 1}`}
                      className="h-auto w-full rounded-2xl"
                    />
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Takeaways Section */}
      <div className="mx-auto mb-20 mt-28 max-w-5xl px-10">
        <h3>Key Takeaways</h3>

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h4>Summary</h4>
            <p>{project.keyTakeaways.summary}</p>
          </div>

          <div>
            <h4>Skills Demonstrated</h4>
            <p>{project.keyTakeaways.demonstrationSkills}</p>
          </div>
        </div>
      </div>

      {/* Final Image and Links Section */}
      {project.finalImage && (
        <div className="mx-auto flex max-w-5xl items-center justify-center px-10 py-20">
          <img
            src={project.finalImage}
            alt="Completed project"
            className="mb-8 h-auto w-full rounded-2xl"
          />
        </div>
      )}
    </div>
  )
}

export default CaseStudy
