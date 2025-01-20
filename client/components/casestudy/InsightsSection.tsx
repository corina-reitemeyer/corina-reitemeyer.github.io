import React from 'react'

interface Insight {
  id: number
  title: string
  description: string
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
    <section className="insights-section">
      {/* Header Section */}
      <div className="insights-header">
        <p className="insights-subtitle">{subtitle}</p>
        <h2 className="insights-title">{title}</h2>
        <p className="insights-description">{description}</p>
      </div>

      {/* Insights Cards */}
      <div className="insights-cards">
        {insights.map((insight) => (
          <div key={insight.id} className="insight-card">
            <h3 className="insight-title">{insight.title}</h3>
            <p className="insight-description">{insight.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default InsightsSection
