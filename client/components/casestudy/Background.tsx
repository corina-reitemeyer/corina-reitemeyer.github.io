import React from 'react'

interface BackgroundSectionProps {
  subtitle: string
  title: string
  date: string
  description: string
  imageSrc: string
  imageAlt: string
  backgroundColor?: string
  subtitleColor: 'ritmo' | 'ow' | 'moe' // Dynamic color options for subtitle
}

const BackgroundSection: React.FC<BackgroundSectionProps> = ({
  subtitle,
  title,
  date,
  description,
  imageSrc,
  imageAlt,
  backgroundColor = '#E3F3FF', // Default light blue
  subtitleColor,
}) => {
  const subtitleColorMap: Record<'ritmo' | 'ow' | 'moe', string> = {
    ritmo: '#40B0C8',
    ow: '#C7A000',
    moe: '#5452F6',
  }

  return (
    <section className="py-24" style={{ backgroundColor }}>
      <div className="container mx-auto grid max-w-4xl grid-cols-1 items-center gap-16 px-6 sm:px-8 lg:grid-cols-2">
        {/* Left: Text Content */}
        <div>
          <p
            className="text-lg"
            style={{ color: subtitleColorMap[subtitleColor] }}
          >
            {subtitle}
          </p>
          <h2 className="mt-2 text-4xl font-bold text-gray-900">{title}</h2>
          <p className="text-md mt-4 font-medium text-gray-700">{date}</p>
          <p className="mt-6 text-lg text-gray-700">{description}</p>
        </div>

        {/* Right: Image */}
        <div className="relative right-[-10%] ml-auto w-screen lg:w-[50vw]">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default BackgroundSection
