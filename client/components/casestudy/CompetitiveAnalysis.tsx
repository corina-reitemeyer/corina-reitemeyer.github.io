import React from 'react'

interface CompetitiveAnalysisSectionProps {
  subtitle: string
  title: string
  description: string
  image: { src: string; alt: string } // Single image
  subtitleColor: 'ritmo' | 'ow' | 'moe' // Dynamic subtitle color options
}

const CompetitiveAnalysisSection: React.FC<CompetitiveAnalysisSectionProps> = ({
  subtitle,
  title,
  description,
  image,
  subtitleColor,
}) => {
  const subtitleColorMap = {
    ritmo: '#40B0C8',
    ow: '#C7A000',
    moe: '#5452F6',
  }

  return (
    <section className="relative bg-[#E6F8FF] py-16">
      <div className="relative mx-auto flex max-w-4xl">
        {/* Text Content */}
        <div
          className="relative z-10 px-4"
          style={{
            maxWidth: '50%', // Adjust the text box width explicitly to 60% of the container
          }}
        >
          <p
            className="text-lg font-semibold"
            style={{ color: subtitleColorMap[subtitleColor] }}
          >
            {subtitle}
          </p>
          <h2 className="mt-2 text-4xl font-bold text-gray-900">{title}</h2>
          <p className="my-6 text-lg text-gray-700">{description}</p>
        </div>

        {/* Positioned Image */}
        <div className="relative flex-grow">
          <img
            src={image.src}
            alt={image.alt}
            className="absolute right-0 object-contain"
            style={{
              height: 'auto',
              maxWidth: '170%',
              top: '50%', // Vertically centers the image
              right: '-90%',
              transform: 'translateY(-50%)', // Correct centering due to top alignment
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default CompetitiveAnalysisSection
