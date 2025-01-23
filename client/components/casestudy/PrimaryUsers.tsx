import React from 'react'

interface PrimaryUser {
  number: number
  title: string
  description: string
}

interface PrimaryUserSectionProps {
  subtitle: string
  title: string
  description?: string
  principles: PrimaryUser[]
  backgroundColor?: string // Background color for the section (optional)
  subtitleColor: 'ritmo' | 'ow' | 'moe' // Use keys to map specific colors
  reversedLayout?: boolean
}

const PrimaryUsersSection: React.FC<PrimaryUserSectionProps> = ({
  subtitle,
  title,
  description,
  principles,
  backgroundColor = '#FFFFFF', // Default background color
  subtitleColor,
  reversedLayout = false,
}) => {
  const subtitleColorMap = {
    ritmo: '#40B0C8',
    ow: '#C7A000',
    moe: '#5452F6',
  }

  return (
    <section
      className="py-16"
      style={{ backgroundColor }} // Dynamic background color
    >
      <div className="container mx-auto max-w-6xl">
        {/* White Container */}
        <div className="rounded-lg bg-white p-12">
          {/* Inner Content Wrapper */}
          <div className="inner-container mx-auto max-w-4xl py-12">
            {/* Text Container */}
            <div className="text-container mb-8">
              <p
                className="pb-2 text-lg font-semibold"
                style={{ color: subtitleColorMap[subtitleColor] }} // Dynamic subtitle color
              >
                {subtitle}
              </p>
              <h2 className="title text-4xl font-bold text-gray-900">
                {title}
              </h2>
              {description && (
                <p className="mb-16 mt-6 text-lg text-gray-700">
                  {description}
                </p>
              )}
            </div>

            {/* Primary Users List */}
            <div
              className={`principles-container grid gap-6 ${
                principles.length === 2
                  ? 'grid-cols-1 md:grid-cols-2' // Two columns for two principles
                  : 'grid-cols-1 sm:grid-cols-3' // Default three columns
              } ${reversedLayout ? 'reversed' : ''}`}
            >
              {principles.map((primaryuser) => (
                <div
                  key={primaryuser.number}
                  className="principle rounded-lg bg-[#E6F8FF] p-8"
                >
                  <h4 className="mt-2 text-xl font-semibold text-gray-800">
                    {primaryuser.title}
                  </h4>
                  <p className="mt-2 text-gray-700">
                    {primaryuser.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrimaryUsersSection
