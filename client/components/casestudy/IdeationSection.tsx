import React from 'react'

interface IdeationCard {
  title: string
  description: string
}

interface IdeationProps {
  title: string
  subtitle: string
  description: string
  points?: IdeationCard[] // Renamed cards to points for clarity
  titleColor: 'ritmo' | 'ow' | 'moe' // Dynamic color options for the title
}

const Ideation: React.FC<IdeationProps> = ({
  title,
  subtitle,
  description,
  points = [], // Default to an empty array
  titleColor,
}) => {
  const titleColorMap: Record<'ritmo' | 'ow' | 'moe', string> = {
    ritmo: '#40B0C8',
    ow: '#C7A000',
    moe: '#5452F6',
  }

  return (
    <div className="bg-[#EAF4FA] px-8 py-20">
      {/* Header Section */}
      <div className="mx-auto mb-12 max-w-4xl text-left">
        <p
          className="text-lg font-bold"
          style={{ color: titleColorMap[titleColor] }}
        >
          {title}
        </p>
        <h2 className="mt-2 text-4xl font-extrabold text-gray-900">
          {subtitle}
        </h2>
        <p className="mt-6 pb-12 text-lg text-gray-700">{description}</p>
      </div>

      {/* Points Section */}
      <div
        className={`mx-auto grid max-w-4xl ${
          points.length === 2
            ? 'grid-cols-1 md:grid-cols-2'
            : 'grid-cols-1 md:grid-cols-3'
        } gap-12`}
      >
        {points.map((point, index) => (
          <div
            key={index}
            className="flex flex-col items-start rounded-lg py-6"
          >
            {/* Black Separator Line */}
            <div className="mb-4 h-1 w-14 bg-black"></div>
            {/* Point Title */}
            <h4 className="mb-4 text-xl font-bold text-gray-900">
              {point.title}
            </h4>
            {/* Point Description */}
            <p className="text-lg text-gray-700">{point.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Ideation
