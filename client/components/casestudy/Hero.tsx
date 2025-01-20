import React from 'react'
import Project from '../../../models/projectdata' // Import the Project interface

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
    <section className="hero">
      {/* Banner Image */}
      <div className="hero-banner">
        <img
          src={headerImage}
          alt="Project Banner"
          className="hero-banner-image"
        />
      </div>

      {/* Content Section */}
      <div className="hero-content">
        {/* Title and Subtitle */}
        <div className="hero-header">
          <h1 className="hero-title">{projectTitle}</h1>
          <p className="hero-subtitle">{projectSubtitle}</p>
        </div>

        {/* Columns Layout */}
        <div className="hero-columns">
          {/* Left Column: Overview and Goals */}
          <div className="hero-left">
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Goals</h2>
            <ul>
              {objectiveGoals.map((goal, index) => (
                <li key={index}>{goal}</li>
              ))}
            </ul>
          </div>

          {/* Right Column: Company/Client, Role, Date, and Links */}
          <div className="hero-right">
            <div>
              <h3>Company / Client</h3>
              <p>{company || 'Personal Project'}</p>
            </div>
            <div>
              <h3>Role</h3>
              <p>{role}</p>
            </div>
            <div>
              <h3>Date</h3>
              <p>{date}</p>
            </div>
            {githubLink || deployedSiteLink || bestAwardsSiteLink ? (
              <div className="hero-links">
                <h3>Links</h3>
                {githubLink && (
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-link"
                  >
                    GitHub Repository
                  </a>
                )}
                {deployedSiteLink && (
                  <a
                    href={deployedSiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-link"
                  >
                    Deployed Site
                  </a>
                )}
                {bestAwardsSiteLink && (
                  <a
                    href={bestAwardsSiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-link"
                  >
                    Best Awards Site
                  </a>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
