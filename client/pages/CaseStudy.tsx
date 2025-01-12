import caseStudyData from '../../src/caseStudyData.json'
import { useParams } from 'react-router-dom'
import Project from '../../models/projectdata.ts'
import Button from '../components/Button.tsx'
import Lightbox from '../components/LightBox.tsx'
import { useState } from 'react'
import TabbedImageViewer from '../components/TabbedImageViewer.tsx'

const projects: Project[] = caseStudyData as unknown as Project[]

const CaseStudy: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p: Project) => p.slug === slug)
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  if (!project) {
    return <p>Project not found</p>
  }

  const openLightbox = (imageSrc: string) => {
    setLightboxImage(imageSrc)
  }

  return (
    <div className="leading-8">
      {/* Lightbox Modal */}
      {lightboxImage && (
        <Lightbox
          src={lightboxImage}
          alt="Expanded view"
          onClose={() => setLightboxImage(null)}
        />
      )}
      <div className="relative flex items-center justify-center">
        <img
          src={project.headerImage}
          alt={project.projectTitle}
          className="h-auto w-full object-cover lg:w-full xl:max-w-screen-2xl"
        />
      </div>
      {/* Project Title */}
      <div className="mx-auto mt-20 max-w-4xl px-6 py-8 sm:px-10">
        <h1 className="text-6xl font-medium">{project.projectTitle}</h1>
      </div>
      {/* Overview, Company and Goals Section */}
      <div className="flex justify-center">
        <div className="w-full max-w-4xl px-6 py-12 sm:px-10">
          {/* Content */}
          <div className="flex flex-col gap-10 md:flex-row">
            {/* Left Column */}
            <div className="md:w-1/2 md:pr-8">
              <h3 className="text-xl font-semibold">Overview</h3>
              <p className="mb-10">{project.overview}</p>
              <h3 className="text-xl font-semibold">Goals</h3>
              <ul className="list-disc pl-5">
                {project.objectiveGoals.map((goal, index) => (
                  <li key={index} className="mb-2">
                    {goal}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column */}
            <div className="mt-8 md:mt-0 md:w-1/3 md:pl-8">
              <h6 className="pb-2 text-lg font-semibold">Role</h6>
              <p className="mb-6">{project.role}</p>
              {project.company && (
                <>
                  <h6 className="pb-2 text-lg font-semibold">
                    Company / Client
                  </h6>
                  <p className="mb-6">{project.company}</p>
                </>
              )}
              <h6 className="pb-2 text-lg font-semibold">Date</h6>
              <p className="mb-8">{project.date}</p>
              {(project.githubLink ||
                project.deployedSiteLink ||
                project.bestAwardsSiteLink) && (
                <div>
                  <h5 className="text-lg font-semibold">Links</h5>

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
      </div>
      {/* Background Section */}
      <div className="bg-amber-50 py-24">
        <div className="mx-auto max-w-screen-lg px-10">
          <div className="flex flex-col items-center">
            {/* Text Section */}
            <div className="max-w-2xl text-center">
              <h2 className="text-3xl font-bold">Background</h2>
              <p className="mt-4 text-lg text-gray-700">{project.background}</p>
            </div>

            {/* Image Section */}
            {Array.isArray(project.backgroundImages) &&
              project.backgroundImages.length > 0 && (
                <div className="mt-10 max-w-4xl">
                  {project.backgroundImages.map((image, index) => (
                    <button
                      key={index}
                      className="focus:outline-none"
                      onClick={() => openLightbox(image)}
                    >
                      <img
                        src={image}
                        alt="Background information"
                        className="h-auto max-h-[800px] w-auto cursor-pointer rounded-3xl"
                      />
                    </button>
                  ))}
                </div>
              )}
          </div>
        </div>
      </div>
      {/* Design Process Section */}
      <div className="mx-auto mt-28 max-w-3xl px-6">
        <h2 className="pb-12 text-left text-3xl font-extrabold">
          Design Process
        </h2>

        {/* Research */}
        <div className="mb-16">
          <h4 className="pb-4 text-xl font-bold">Research</h4>
          <p className="text-gray-700">{project.designProcess.research}</p>

          {/* Tabbed Image Viewer for Design Process Images */}
          {project.designProcess.designProcessImages &&
            project.designProcess.designProcessImages.length > 0 && (
              <div className="mt-8">
                <TabbedImageViewer
                  images={project.designProcess.designProcessImages}
                />
              </div>
            )}
        </div>

        {/* Defining the Problem */}
        <div className="py-16">
          <h4 className="pb-4 text-xl font-bold">Defining the Problem</h4>
          <p className="text-gray-700">
            {project.designProcess.definingProblem}
          </p>
        </div>

        {/* Ideation */}
        <div className="py-16">
          <h4 className="pb-4 text-xl font-bold">Ideation</h4>
          <p className="text-gray-700">{project.designProcess.ideation}</p>
        </div>

        {/* Prototyping */}
        <div className="py-16">
          <h4 className="pb-4 text-xl font-bold">Prototyping</h4>
          <p className="text-gray-700">{project.designProcess.prototyping}</p>
        </div>

        {/* Feedback */}
        {project.designProcess.feedback && (
          <div className="py-16">
            <h4 className="pb-4 text-xl font-bold">Feedback</h4>
            <p className="text-gray-700">{project.designProcess.feedback}</p>
          </div>
        )}
      </div>
      {/* Software Development Section */}
      {project.softwareDevelopment && (
        <div className="mx-auto mt-28 max-w-3xl px-6">
          <h2 className="pb-12 text-left text-3xl font-extrabold">
            Software Development
          </h2>

          {/* Tech Stack */}
          {project.softwareDevelopment.techStack && (
            <div className="mb-10">
              <h4 className="pb-4 text-xl font-bold">Tech Stack</h4>
              <p className="text-gray-700">
                {project.softwareDevelopment.techStack}
              </p>
            </div>
          )}

          {/* Architecture */}
          {project.softwareDevelopment.architecture && (
            <div className="mb-10">
              <h4 className="pb-4 text-xl font-bold">Architecture</h4>
              <p className="text-gray-700">
                {project.softwareDevelopment.architecture}
              </p>
            </div>
          )}

          {/* Development Process */}
          {project.softwareDevelopment.developmentProcess && (
            <div className="mb-10">
              <h4 className="pb-4 text-xl font-bold">Development Process</h4>
              <p className="text-gray-700">
                {project.softwareDevelopment.developmentProcess}
              </p>
            </div>
          )}

          {/* Integration */}
          {project.softwareDevelopment.integration && (
            <div className="mb-10">
              <h4 className="pb-4 text-xl font-bold">Integration</h4>
              <p className="text-gray-700">
                {project.softwareDevelopment.integration}
              </p>
            </div>
          )}

          {/* Software Development Images */}
          {Array.isArray(
            project.softwareDevelopment.softwareDevelopmentImages,
          ) &&
            project.softwareDevelopment.softwareDevelopmentImages.length >
              0 && (
              <div className="mt-10 max-w-4xl">
                <h4 className="pb-4 text-xl font-bold">Development Images</h4>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {project.softwareDevelopment.softwareDevelopmentImages.map(
                    (image, index) => (
                      <button
                        key={index}
                        className="focus:outline-none"
                        onClick={() => openLightbox(image)}
                      >
                        <img
                          src={image}
                          alt={`Software Development ${index + 1}`}
                          className="h-auto max-h-[600px] w-full cursor-pointer rounded-3xl object-cover"
                        />
                      </button>
                    ),
                  )}
                </div>
              </div>
            )}
        </div>
      )}
      {/* Solution Implementation Section */}
      <div className="mx-auto mt-28 max-w-3xl px-6">
        <h2 className="pb-12 text-left text-3xl font-extrabold">
          Solution Implementation
        </h2>

        {/* Design Decisions */}
        <div className="mb-10">
          <h4 className="pb-4 text-xl font-bold">Design Decisions</h4>
          <p className="text-gray-700">
            {project.solutionImplementation.designDecisions}
          </p>
        </div>

        {/* Coding Processes */}
        {project.solutionImplementation.codingProcesses && (
          <div className="mb-10">
            <h4 className="pb-4 text-xl font-bold">Coding Processes</h4>
            <p className="text-gray-700">
              {project.solutionImplementation.codingProcesses}
            </p>
          </div>
        )}

        {/* Accessibility and Usability */}
        <div className="mb-10">
          <h4 className="pb-4 text-xl font-bold">Accessibility & Usability</h4>
          <p className="text-gray-700">
            {project.solutionImplementation.accessibilityUsability}
          </p>
        </div>

        {/* Testing */}
        {project.solutionImplementation.testing && (
          <div className="mb-10">
            <h4 className="pb-4 text-xl font-bold">Testing</h4>
            <p className="text-gray-700">
              {project.solutionImplementation.testing}
            </p>
          </div>
        )}

        {/* Deployment */}
        {project.solutionImplementation.deployment && (
          <div className="mb-10">
            <h4 className="pb-4 text-xl font-bold">Deployment</h4>
            <p className="text-gray-700">
              {project.solutionImplementation.deployment}
            </p>
          </div>
        )}

        {/* Challenges Faced */}
        <div className="mb-10">
          <h4 className="pb-4 text-xl font-bold">Challenges Faced</h4>
          <p className="text-gray-700">
            {project.solutionImplementation.challengesFaced}
          </p>
        </div>
      </div>
      l{/* Lessons Learned Section */}
      <div className="mx-auto mt-28 max-w-3xl px-6">
        <h2 className="pb-12 text-left text-3xl font-extrabold">
          Lessons Learned
        </h2>

        {/* Design Insights */}
        <div className="mb-10">
          <h4 className="pb-4 text-xl font-bold">Design Insights</h4>
          <p className="text-gray-700">
            {project.lessonsLearned.designInsights}
          </p>
        </div>

        {/* Technical Insights */}
        {project.lessonsLearned.technicalInsights && (
          <div className="mb-10">
            <h4 className="pb-4 text-xl font-bold">Technical Insights</h4>
            <p className="text-gray-700">
              {project.lessonsLearned.technicalInsights}
            </p>
          </div>
        )}

        {/* Improvements */}
        <div className="mb-10">
          <h4 className="pb-4 text-xl font-bold">Improvements</h4>
          <p className="text-gray-700">{project.lessonsLearned.improvements}</p>
        </div>
      </div>
      {/* Key Takeaways Section */}
      <div className="mx-auto mb-14 mt-28 max-w-screen-lg px-10">
        <h3 className="pb-12">Key Takeaways</h3>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Summary */}
          <div>
            <h5 className="pb-4">Summary</h5>
            <p>{project.keyTakeaways.summary}</p>
          </div>

          {/* Skills Demonstrated */}
          <div>
            <h5 className="pb-4">Skills Demonstrated</h5>
            <p>{project.keyTakeaways.demonstrationSkills}</p>
          </div>
        </div>
      </div>
      {/* Final Image and Links Section */}
      {project.finalImage && (
        <div className="mx-auto flex max-w-screen-lg items-center justify-center px-10 py-8">
          <div
            role="button"
            tabIndex={0}
            onClick={() =>
              project.finalImage && openLightbox(project.finalImage)
            }
            onKeyDown={(e) => {
              if ((e.key === 'Enter' || e.key === ' ') && project.finalImage) {
                openLightbox(project.finalImage)
              }
            }}
            className="inline-block cursor-pointer"
          >
            <img
              src={project.finalImage}
              alt="Completed project"
              className="mb-8 h-auto w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default CaseStudy
