import React from 'react'

interface Insight {
  id: number
  title: string
  description: string
  highlights?: string[] // Array of phrases to highlight
}

interface InsightsSectionProps {
  subtitle: string
  title: string
  description: string
  insights: Insight[]
}

const InsightsSection: React.FC<InsightsSectionProps> = ({
  subtitle,
  title,
  description,
  insights,
}) => {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-4xl py-12">
        {/* Header Section */}
        <div className="mb-12">
          <p className="text-lg font-bold text-[#40B0C8]">{subtitle}</p>
          <h2 className="mt-2 text-4xl font-extrabold text-gray-900">
            {title}
          </h2>
          <p className="my-6 pb-12 text-lg text-gray-700">{description}</p>
        </div>

        {/* Insights Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {insights.map((insight) => (
            <div
              key={insight.id}
              className="rounded-lg bg-white p-12 shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <p className="mb-4 text-lg text-gray-400">{insight.title}</p>
              <p className="text-xl text-gray-700">
                {/* Highlighted Text */}
                {insight.description.split(' ').map((word, idx) =>
                  insight.highlights?.includes(word) ? (
                    <span
                      key={idx}
                      className="relative inline-block rounded-lg bg-[#CBBDFF] px-1"
                    >
                      {word}{' '}
                    </span>
                  ) : (
                    `${word} `
                  ),
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InsightsSection
