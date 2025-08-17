import React from 'react'
import Project from '../../../models/projectdata' // Import the Project interface
import Button from '../../components/Button' // Import the Button component

interface HeroProps {
  project: Project
  hook: string // Hook paragraph
}

const Hero: React.FC<HeroProps> = ({ project, hook }) => {
  const {
    projectTitle,
    projectSubtitle,
    overview,
    role,
    company,
    date,
    githubLink,
    deployedSiteLink,
    bestAwardsSiteLink,
    headerImage,
  } = project

  return (
    <section className="w-full bg-white pb-32">
      {' '}
      {/* Banner */}
      <div className="bg-light-blue relative flex h-full w-full items-center justify-center">
        <img
          src={headerImage}
          alt="Project Banner"
          className="h-full w-full object-cover"
        />
      </div>
      {/* Title + Subtitle */}
      <div className="container mx-auto mt-32 flex max-w-5xl flex-col gap-6 px-6 sm:px-12 lg:px-24">
        <p className="-mb-2 text-lg font-medium text-gray-500">
          {projectSubtitle}
        </p>
        <h1 className="-mb-2 mb-8 text-5xl font-bold text-gray-900">
          {projectTitle}
        </h1>
      </div>
      {/* Content Section */}
      <div className="container mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-12 px-6 sm:px-12 lg:grid-cols-[2fr_1fr] lg:px-24">
        {/* Left Column: Overview + Goals */}
        <div>
          {/* Overview Section */}
          <h2 className="mb-2 text-2xl font-bold text-gray-900">Overview</h2>
          <p className="mb-4 text-xl text-gray-500">{hook}</p>
          <p className="mb-16 text-base text-gray-700">{overview}</p>
        </div>

        {/* Right Column: Company, Role, Date, Links */}
        <div className="ml-8 mt-2 space-y-8 rounded-lg">
          <div>
            <h3 className="text-lg font-bold text-gray-900">
              Company / Client
            </h3>
            <p className="text-base text-gray-700">
              {company || 'Personal Project'}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Role</h3>
            <p className="text-base text-gray-700">{role}</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Date</h3>
            <p className="text-base text-gray-700">{date}</p>
          </div>

          {/* Links */}
          {(githubLink || deployedSiteLink || bestAwardsSiteLink) && (
            <div>
              <h3 className="text-lg font-bold text-gray-900">Links</h3>
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
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero
