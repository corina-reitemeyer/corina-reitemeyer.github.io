import React from 'react'

interface ResearchSectionProps {
  title: string
  subtitle?: string
  subtitleColor?: 'ritmo' | 'ow' | 'moe' // Dynamic color for the subtitle
  description: string
  result: string
  note?: string
  imageSrc: string
  imageAlt: string
  backgroundColor?: string
}

const ResearchSection: React.FC<ResearchSectionProps> = ({
  title,
  subtitle,
  subtitleColor,
  description,
  result,
  note,
  imageSrc,
  imageAlt,
  backgroundColor = '#E3F3FF', // Default light blue
}) => {
  const subtitleColorMap: Record<'ritmo' | 'ow' | 'moe', string> = {
    ritmo: '#40B0C8',
    ow: '#C7A000',
    moe: '#5452F6',
  }

  return (
    <section className="py-24" style={{ backgroundColor }}>
      <div className="container mx-auto grid max-w-4xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Left: Image */}
        <div className="relative left-[100%] -ml-[50vw] w-screen lg:w-[50vw]">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-auto w-full object-cover"
          />
        </div>

        {/* Right: Text Content */}
        <div>
          {subtitle && (
            <p
              className="text-lg font-semibold"
              style={{
                color: subtitleColor
                  ? subtitleColorMap[subtitleColor]
                  : '#6B7280', // Fallback to gray
              }}
            >
              {subtitle}
            </p>
          )}
          <h2 className="mt-2 text-4xl font-bold text-gray-900">{title}</h2>
          <p className="mb-12 mt-6 text-lg text-gray-700">{description}</p>
          <p className="mt-4 text-lg text-gray-900">
            <strong>Result:</strong> {result}
          </p>
          {note && <p className="text-md mt-4 italic text-gray-500">{note}</p>}
        </div>
      </div>
    </section>
  )
}

export default ResearchSection
