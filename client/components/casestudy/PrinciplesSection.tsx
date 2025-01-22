import React from 'react'

interface Principle {
  number: number
  title?: string
  description: string
}

interface PrinciplesSectionProps {
  subtitle: string
  title?: string
  description?: string
  principles: Principle[]
  subtitleColor: 'ritmo' | 'ow' | 'moe' // Use keys to map specific colors
  reversedLayout?: boolean // Control the order dynamically
}

const PrinciplesSection: React.FC<PrinciplesSectionProps> = ({
  subtitle,
  title,
  description,
  principles,
  subtitleColor,
  reversedLayout = false,
}) => {
  const subtitleColorMap: Record<'ritmo' | 'ow' | 'moe', string> = {
    ritmo: '#40B0C8',
    ow: '#C7A000',
    moe: '#5452F6',
  }

  return (
    <section className="py-16">
      <div className="container mx-auto max-w-4xl py-8">
        {/* Text Container */}
        <div className="text-container mb-12">
          <p
            className="text-lg font-semibold"
            style={{ color: subtitleColorMap[subtitleColor] }}
          >
            {subtitle}
          </p>
          {title && (
            <h2 className="mt-2 text-4xl font-bold text-gray-900">{title}</h2>
          )}
        </div>

        {/* Dynamic Order: Points First if reversedLayout is True */}
        {reversedLayout && (
          <div className="mb-12 grid grid-cols-1 gap-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {principles.map((principle) => (
                <div key={principle.number} className="flex flex-col">
                  <span className="text-5xl font-bold text-gray-900">
                    {principle.number}.
                  </span>
                  {principle.title && (
                    <h4 className="mt-4 text-left text-xl font-semibold text-gray-900">
                      {principle.title}
                    </h4>
                  )}
                  <p className="mt-8 text-left text-gray-700">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Description Paragraph */}
        {description && (
          <div className={`mb-12 ${reversedLayout ? '' : 'order-first'}`}>
            <p className="mt-16 text-lg text-gray-700">{description}</p>
          </div>
        )}

        {/* Points Below if reversedLayout is False */}
        {!reversedLayout && (
          <div className="grid grid-cols-1 gap-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {principles.map((principle) => (
                <div key={principle.number} className="flex flex-col">
                  <span className="text-5xl font-bold text-gray-900">
                    {principle.number}.
                  </span>
                  {principle.title && (
                    <h4 className="mt-4 text-left text-xl font-semibold text-gray-900">
                      {principle.title}
                    </h4>
                  )}
                  <p className="mt-2 text-left text-gray-700">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default PrinciplesSection
