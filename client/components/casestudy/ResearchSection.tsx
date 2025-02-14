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
  backgroundColor = '#E3F6F5', // Default light blue
}) => {
  const subtitleColorMap: Record<'ritmo' | 'ow' | 'moe', string> = {
    ritmo: '#40B0C8',
    ow: '#C7A000',
    moe: '#5452F6',
  }

  return (
    <section className="py-24" style={{ backgroundColor }}>
      <div className="relative mx-auto max-w-4xl px-6 sm:px-8 lg:flex lg:items-center lg:justify-center">
        {/* Left: Image */}
        <div className="lg:w-[50%] lg:flex-shrink-0 lg:text-left">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-auto w-full lg:max-h-[400px] lg:object-contain"
          />
        </div>

        {/* Right: Text Content */}
        <div className="sm: mt-16 max-w-[40rem] lg:w-[50%] lg:pl-12">
          {subtitle && (
            <p
              className="text-lg"
              style={{
                color: subtitleColor
                  ? subtitleColorMap[subtitleColor]
                  : '#6B7280',
              }}
            >
              {subtitle}
            </p>
          )}
          <h2 className="mt-2 text-4xl font-bold text-gray-900">{title}</h2>
          <p className="mb-12 mt-6 text-lg text-gray-700">{description}</p>
          <p className="mt-4 text-lg font-bold text-gray-900">
            Result: {result}
          </p>
          {note && <p className="text-md mt-4 italic text-gray-500">{note}</p>}
        </div>
      </div>
    </section>
  )
}

export default ResearchSection
