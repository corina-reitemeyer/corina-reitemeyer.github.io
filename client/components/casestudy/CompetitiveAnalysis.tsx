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
    <section className="relative overflow-hidden bg-[#E6F8FF] py-16">
      <div className="relative mx-auto max-w-4xl">
        {/* Text Content */}
        <div className="relative z-10 max-w-sm">
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
        <div
          className="absolute"
          style={{
            bottom: '9rem', // Space from the bottom
            right: '-20rem', // Space from the right
          }}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="h-auto w-[50vw] object-contain" // Set width and maintain aspect ratio
          />
        </div>
      </div>
    </section>
  )
}

export default CompetitiveAnalysisSection
