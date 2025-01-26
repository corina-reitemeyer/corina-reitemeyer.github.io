import React from 'react'
import Project from '../../../models/projectdata' // Import the Project interface
import Button from '../../components/Button' // Import the Button component

interface HeroProps {
  project: Project
}

const Hero: React.FC<HeroProps> = ({ project }) => {
  const {
    projectTitle,
    projectSubtitle,
    overview,
    objectiveGoals,
    role,
    company,
    date,
    githubLink,
    deployedSiteLink,
    bestAwardsSiteLink,
    headerImage,
  } = project

  return (
    <section className="w-full bg-white pb-28">
      {/* Banner */}
      <div className="bg-light-blue relative flex h-full w-full items-center justify-center">
        <img
          src={headerImage}
          alt="Project Banner"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="container mx-auto mt-24 flex max-w-4xl flex-col gap-6 px-6 sm:px-12 lg:px-24">
        <h1 className="-mb-2 text-5xl font-bold text-gray-900">
          {projectTitle}
        </h1>
        <p className="-mt-4 mb-8 text-lg font-light text-gray-500">
          {projectSubtitle}
        </p>
      </div>

      {/* Content */}
      <div className="container mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-12 px-6 sm:px-12 lg:grid-cols-2 lg:px-24">
        {/* Left Column */}
        <div>
          <h2 className="mb-2 text-2xl font-bold text-gray-900">Overview</h2>
          <p className="mb-16 text-base text-gray-700">{overview}</p>
          <h2 className="mb-2 text-2xl font-bold text-gray-900">Goals</h2>
          <ul className="list-disc space-y-2 pl-6 text-gray-700">
            {objectiveGoals.map((goal, index) => (
              <li key={index} className="text-base">
                {goal}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column */}
        <div className="rounded-lg sm:px-0 lg:px-6">
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900">
              Company / Client
            </h3>
            <p className="text-base text-gray-700">
              {company || 'Personal Project'}
            </p>
          </div>
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900">Role</h3>
            <p className="text-base text-gray-700">{role}</p>
          </div>
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900">Date</h3>
            <p className="text-base text-gray-700">{date}</p>
          </div>

          {/* Links */}
          {githubLink || deployedSiteLink || bestAwardsSiteLink ? (
            <div>
              <h3 className="my-2 text-lg font-bold text-gray-900">Links</h3>
              <div className="space-y-4">
                {githubLink && (
                  <Button url={githubLink} label="GitHub Repository" />
                )}
                {deployedSiteLink && (
                  <Button url={deployedSiteLink} label="Deployed Site" />
                )}
                {bestAwardsSiteLink && (
                  <Button url={bestAwardsSiteLink} label="Best Awards Site" />
                )}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}

export default Hero
