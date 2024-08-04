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
      <div className="relative flex items-center justify-center">
        <img
          src={project.headerImage}
          alt={project.projectTitle}
          className="h-auto w-full object-cover lg:w-full xl:max-w-screen-2xl"
        />
      </div>

      {/* Project Title */}
      <div className="mx-auto mt-20 max-w-screen-lg px-10 py-8">
        {' '}
        <h1 className="text-5xl font-medium">{project.projectTitle}</h1>
      </div>

      {/* Overview, Company and Goals Section */}
      <div className="mx-auto mb-16 max-w-screen-lg px-10 py-12">
        {' '}
        <div className="flex flex-col gap-10 md:flex-row">
          <div className="md:w-1/2 md:pr-8">
            <h2 className="subheading">Overview</h2>
            <p className="mb-4">{project.overview}</p>
            <h2 className="subheading">Goals</h2>
            <ul className="list-disc pl-4">
              {project.objectiveGoals.map((goal, index) => (
                <li key={index} className="mb-2">
                  {goal}
                </li>
              ))}
            </ul>
          </div>

          {/* Role and Date */}
          <div className="mt-8 px-10 md:mt-0 md:w-1/2">
            <h2 className="subheading">Role</h2>
            <p className="mb-4">{project.role}</p>
            <h2 className="subheading">Company / Client</h2>
            <p className="mb-4">{project.company}</p>
            <h2 className="subheading">Date</h2>
            <p className="mb-4">{project.date}</p>
            {(project.githubLink ||
              project.deployedSiteLink ||
              project.bestAwardsSiteLink) && (
              <div>
                <h2 className="subheading">Links</h2>

                {project.githubLink && (
                  <Button
                    url={project.githubLink}
                    label={'Github repository'}
                    className={`primary_button`}
                  />
                )}

                {project.deployedSiteLink && (
                  <Button
                    url={project.deployedSiteLink}
                    label={'Deployed website'}
                    className={`primary_button`}
                  />
                )}

                {project.bestAwardsSiteLink && (
                  <Button
                    url={project.bestAwardsSiteLink}
                    label={'Best Awards website'}
                    className={`primary_button`}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Background Section */}
      <div className="bg-amber-50 py-32">
        <div className="mx-auto max-w-screen-lg px-10">
          <h2 className="heading2">Background</h2>
          <p>{project.background}</p>
        </div>
        <div className="mt-10 flex items-center justify-center space-x-4">
          {Array.isArray(project.backgroundImages) &&
            project.backgroundImages.length > 0 && (
              <div className="text-center">
                {project.backgroundImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt="Background information images"
                    className="mx-auto h-auto max-w-full"
                  />
                ))}
              </div>
            )}
        </div>
      </div>

      {/* Design Process Section */}
      <div className="mx-auto mt-28 max-w-screen-lg px-10">
        <h3 className="heading2">Design Process</h3>

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
        {project.designProcess.feedback && (
          <div>
            <h4 className="subheading">Feedback</h4>
            <p>{project.designProcess.feedback}</p>
          </div>
        )}

        <div className="mt-12 flex items-center justify-center space-x-4">
          {Array.isArray(project.designProcess.designProcessImages) &&
            project.designProcess.designProcessImages.length > 0 && (
              <div className="text-center">
                {project.designProcess.designProcessImages.map(
                  (imageObj, index) => (
                    <div key={index} className="mb-10">
                      <img
                        src={imageObj.path}
                        alt={`Design process ${index + 1}`}
                        className="mx-auto h-auto max-w-full"
                      />
                      {imageObj.caption && (
                        <p className="mt-2 text-sm text-gray-600">
                          {imageObj.caption}
                        </p>
                      )}
                    </div>
                  ),
                )}
              </div>
            )}
        </div>
      </div>

      {project.softwareDevelopment && (
        <div className="mx-auto mt-20 max-w-screen-lg px-10">
          <h3 className="heading2">Software Development</h3>

          {/* Tech Stack */}
          {project.softwareDevelopment.techStack && (
            <div>
              <h4 className="subheading">Tech Stack</h4>
              <p>{project.softwareDevelopment.techStack}</p>
            </div>
          )}

          {/* Architecture */}
          {project.softwareDevelopment.architecture && (
            <div>
              <h4 className="subheading">Architecture</h4>
              <p>{project.softwareDevelopment.architecture}</p>
            </div>
          )}

          {/* Development Process */}
          {project.softwareDevelopment.developmentProcess && (
            <div>
              <h4 className="subheading">Development Process</h4>
              <p>{project.softwareDevelopment.developmentProcess}</p>
            </div>
          )}

          {/* Integration */}
          {project.softwareDevelopment.integration && (
            <div>
              <h4 className="subheading">Integration</h4>
              <p>{project.softwareDevelopment.integration}</p>
            </div>
          )}

          {/* Software Development Images (if any) */}
          <div className="mt-12 flex items-center justify-center space-x-4">
            {Array.isArray(
              project.softwareDevelopment.softwareDevelopmentImages,
            ) &&
              project.softwareDevelopment.softwareDevelopmentImages.length >
                0 && (
                <div className="text-center">
                  {project.softwareDevelopment.softwareDevelopmentImages.map(
                    (image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt="Design process images"
                        className="mx-auto mb-10 h-auto max-w-full"
                      />
                    ),
                  )}
                </div>
              )}
          </div>
        </div>
      )}

      {/* Solution Implementation Section */}
      <div className="mt-20 bg-blue-50 py-20">
        <div className="mx-auto max-w-screen-lg px-10">
          <h2 className="heading2 mb-8">Solution Implementation</h2>

          {/* Design Decisions */}
          <div className="mb-6">
            <h4 className="subheading">Design Decisions</h4>
            <p>{project.solutionImplementation.designDecisions}</p>
          </div>

          {/* Coding Process */}
          {project.solutionImplementation.codingProcesses && (
            <div className="mb-6">
              <h4 className="subheading">Coding Process</h4>
              <p>{project.solutionImplementation.codingProcesses}</p>
            </div>
          )}

          {/* Accessibility & Usability */}
          {project.solutionImplementation.accessibilityUsability && (
            <div className="mb-6">
              <h4 className="subheading">Accessibility & Usability</h4>
              <p>{project.solutionImplementation.accessibilityUsability}</p>
            </div>
          )}

          {/* Testing */}
          {project.solutionImplementation.testing && (
            <div className="mb-6">
              <h4 className="subheading">Testing</h4>
              <p>{project.solutionImplementation.testing}</p>
            </div>
          )}

          {/* Deployment */}
          {project.solutionImplementation.deployment && (
            <div className="mb-6">
              <h4 className="subheading">Deployment</h4>
              <p>{project.solutionImplementation.deployment}</p>
            </div>
          )}

          {/* Challenges Faced */}
          <div>
            <h4 className="subheading">Challenges Faced</h4>
            <p>{project.solutionImplementation.challengesFaced}</p>
          </div>
        </div>

        {/* Design Product Images */}
        <div className="mx-auto mt-12 flex max-w-screen-lg items-center justify-center space-x-4 px-10">
          {Array.isArray(project.solutionImplementation.designProductImages) &&
            project.solutionImplementation.designProductImages.length > 0 && (
              <div className="text-center">
                {project.solutionImplementation.designProductImages.map(
                  (image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt="Design process images"
                      className="mx-auto mb-10 h-auto max-w-full"
                    />
                  ),
                )}
              </div>
            )}
        </div>
      </div>

      {/* Lessons Learned Section */}
      <div className="mx-auto mt-28 max-w-screen-lg px-10">
        <h3 className="heading2">Lessons I Learned</h3>

        {/* Design Insights */}
        <div>
          <h4 className="subheading">Design Insights</h4>
          <p>{project.lessonsLearned.designInsights}</p>
        </div>

        {/* Technical Insights */}
        {project.lessonsLearned.technicalInsights && (
          <div>
            <h4 className="subheading">Technical Insights</h4>
            <p>{project.lessonsLearned.technicalInsights}</p>
          </div>
        )}

        {/* Improvements */}
        <div>
          <h4 className="subheading">Improvements</h4>
          <p>{project.lessonsLearned.improvements}</p>
        </div>
      </div>

      {/* Key Takeaways Section */}
      <div className="mx-auto mb-20 mt-28 max-w-screen-lg px-10">
        <h3 className="heading2">Key Takeaways</h3>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Summary */}
          <div>
            <h4 className="subheading">Summary</h4>
            <p>{project.keyTakeaways.summary}</p>
          </div>

          {/* Skills Demonstrated */}
          <div>
            <h4 className="subheading">Skills Demonstrated</h4>
            <p>{project.keyTakeaways.demonstrationSkills}</p>
          </div>
        </div>
      </div>

      {/* Final Image and Links Section */}
      {project.finalImage && (
        <div className="mx-auto flex max-w-screen-lg items-center justify-center px-10 py-20">
          <img
            src={project.finalImage}
            alt="Completed project"
            className="mb-8 h-auto w-full"
          />
        </div>
      )}
    </div>
  )
}

export default CaseStudy
