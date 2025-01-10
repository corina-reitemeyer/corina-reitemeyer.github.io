import caseStudyData from '../../src/caseStudyData.json'
import { useParams } from 'react-router-dom'
import Project from '../../models/projectdata.ts'
import Button from '../components/Button.tsx'
import Lightbox from '../components/LightBox.tsx'
import { useState } from 'react'

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
      <div className="mx-auto mt-20 max-w-screen-lg px-10 py-8">
        <h1 className="text-6xl font-medium">{project.projectTitle}</h1>
      </div>

      {/* Overview, Company and Goals Section */}
      <div className="mx-auto mb-16 max-w-screen-lg px-10 py-12">
        {/* Content */}
        <div className="flex flex-col gap-10 md:flex-row">
          <div className="md:w-1/2 md:pr-8">
            <h3>Overview</h3>
            <p className="mb-10">{project.overview}</p>
            <h3>Goals</h3>
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
            <h6>Role</h6>
            <p className="mb-6">{project.role}</p>
            {project.company && (
              <>
                <h6>Company / Client</h6>
                <p className="mb-6">{project.company}</p>
              </>
            )}
            <h6>Date</h6>
            <p className="mb-6">{project.date}</p>
            {(project.githubLink ||
              project.deployedSiteLink ||
              project.bestAwardsSiteLink) && (
              <div>
                <h5>Links</h5>

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
          {project.designProcess.designProcessImages?.[0]?.path && (
            <div className="mt-8">
              <button
                className="focus:outline-none"
                onClick={() =>
                  openLightbox(
                    project.designProcess.designProcessImages[0].path!,
                  )
                }
              >
                <img
                  src={project.designProcess.designProcessImages[0].path}
                  alt="Research process"
                  className="h-auto max-h-[600px] w-full cursor-pointer rounded-3xl object-cover"
                />
              </button>
              {project.designProcess.designProcessImages[0].caption && (
                <p className="mt-2 text-center text-sm text-gray-600">
                  {project.designProcess.designProcessImages[0].caption}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Designing the Problem */}
        <div className="mb-16">
          <h4 className="pb-4 text-xl font-bold">Designing the Problem</h4>
          <p className="text-gray-700">
            {project.designProcess.definingProblem}
          </p>
          {project.designProcess.designProcessImages &&
            project.designProcess.designProcessImages.length > 1 && (
              <div className="mt-8">
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() =>
                    openLightbox(
                      project.designProcess.designProcessImages[1].path,
                    )
                  }
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      openLightbox(
                        project.designProcess.designProcessImages[1].path,
                      )
                    }
                  }}
                  className="inline-block cursor-pointer"
                >
                  <img
                    src={project.designProcess.designProcessImages[1].path}
                    alt="Designing the problem"
                    className="h-auto max-h-[600px] w-full rounded-3xl object-cover"
                  />
                </div>
                {project.designProcess.designProcessImages[1].caption && (
                  <p className="mt-2 text-center text-sm text-gray-600">
                    {project.designProcess.designProcessImages[1].caption}
                  </p>
                )}
              </div>
            )}
        </div>

        {/* Ideation */}
        <div className="mb-16">
          <h4 className="pb-4 text-xl font-bold">Ideation</h4>
          <p className="text-gray-700">{project.designProcess.ideation}</p>
          {project.designProcess.designProcessImages?.[2] && (
            <div className="mt-8">
              <div
                role="button"
                tabIndex={0}
                className="h-auto max-h-[600px] w-full cursor-pointer overflow-hidden rounded-3xl border-4 border-black object-cover"
                onClick={() =>
                  openLightbox(
                    project.designProcess.designProcessImages?.[2].path,
                  )
                }
                onKeyDown={(e) =>
                  (e.key === 'Enter' || e.key === ' ') &&
                  openLightbox(
                    project.designProcess.designProcessImages?.[2].path,
                  )
                }
                aria-label="Open ideation image in lightbox"
              >
                <img
                  src={project.designProcess.designProcessImages[2].path}
                  alt="Ideation"
                  className="h-auto max-h-[600px] w-full rounded-3xl object-cover"
                />
              </div>
              {project.designProcess.designProcessImages[2].caption && (
                <p className="mt-2 text-center text-sm text-gray-600">
                  {project.designProcess.designProcessImages[2].caption}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Prototyping */}
        <div className="mb-16">
          <h4 className="pb-4 text-xl font-bold">Prototyping</h4>
          <p className="text-gray-700">{project.designProcess.prototyping}</p>
          {project.designProcess.designProcessImages?.[3] && (
            <div className="mt-8">
              <div
                role="button"
                tabIndex={0}
                onClick={() =>
                  openLightbox(
                    project.designProcess.designProcessImages[3].path,
                  )
                }
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    openLightbox(
                      project.designProcess.designProcessImages[3].path,
                    )
                  }
                }}
                className="inline-block cursor-pointer"
              >
                <img
                  src={project.designProcess.designProcessImages[3].path}
                  alt="Prototyping"
                  className="h-auto max-h-[600px] w-full rounded-3xl object-cover"
                />
              </div>
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
          <div className="mb-16">
            <h4 className="pb-4 text-xl font-bold">Feedback</h4>
            <p className="text-gray-700">{project.designProcess.feedback}</p>
            {project.designProcess.designProcessImages?.[4] && (
              <div className="mt-8">
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() =>
                    openLightbox(
                      project.designProcess.designProcessImages[4].path,
                    )
                  }
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      openLightbox(
                        project.designProcess.designProcessImages[4].path,
                      )
                    }
                  }}
                  className="inline-block cursor-pointer"
                >
                  <img
                    src={project.designProcess.designProcessImages[4].path}
                    alt="Feedback"
                    className="h-auto max-h-[600px] w-full rounded-3xl object-cover"
                  />
                </div>
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

      {/* Key Takeaways Section */}
      <div className="mx-auto mb-14 mt-28 max-w-screen-lg px-10">
        <h3 className="pb-6">Key Takeaways</h3>

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
