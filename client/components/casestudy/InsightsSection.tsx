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
  subtitleColor: 'ritmo' | 'ow' | 'moe' // Dynamic subtitle color options
}

const InsightsSection: React.FC<InsightsSectionProps> = ({
  subtitle,
  title,
  description,
  insights,
  subtitleColor,
}) => {
  const subtitleColorMap = {
    ritmo: '#40B0C8',
    ow: '#C7A000',
    moe: '#5452F6',
  }

  return (
    <section className="py-16">
      <div className="container mx-auto max-w-4xl py-12">
        {/* Header Section */}
        <div className="mb-12">
          <p
            className="text-lg font-bold"
            style={{ color: subtitleColorMap[subtitleColor] }}
          >
            {subtitle}
          </p>
          <h2 className="mt-2 text-4xl font-extrabold text-gray-900">
            {title}
          </h2>
          <p className="my-6 pb-8 text-lg text-gray-700">{description}</p>
        </div>

        {/* Insights Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {insights.map((insight) => {
            const { description, highlights } = insight

            // Highlight logic
            let highlightedDescription = description
            if (highlights) {
              highlights.forEach((highlight) => {
                const regex = new RegExp(`(${highlight})`, 'gi') // Case-insensitive match
                highlightedDescription = highlightedDescription.replace(
                  regex,
                  '<span class="relative inline-block rounded-lg bg-[#CBBDFF] px-1">$1</span>',
                )
              })
            }

            return (
              <div
                key={insight.id}
                className="rounded-lg bg-white p-12 shadow-lg transition-transform duration-300 hover:scale-105"
              >
                <p className="mb-4 text-lg text-gray-400">{insight.title}</p>
                {/* Render the highlighted description */}
                <p
                  className="text-xl text-gray-700"
                  dangerouslySetInnerHTML={{ __html: highlightedDescription }}
                ></p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default InsightsSection
