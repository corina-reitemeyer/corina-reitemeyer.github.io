import React from 'react'

interface KPI {
  value: string
  description: string
}

interface OpportunitySpaceProps {
  subtitle: string
  title: string
  description: string
  kpis: KPI[]
}

const OpportunitySpace: React.FC<OpportunitySpaceProps> = ({
  subtitle,
  title,
  description,
  kpis,
}) => {
  return (
    <section className="opportunity-space">
      <div className="opportunity-header">
        <p className="opportunity-subtitle">{subtitle}</p>
        <h2 className="opportunity-title">{title}</h2>
        <p className="opportunity-description">{description}</p>
      </div>
      <div className="kpi-cards">
        {kpis.map((kpi, index) => (
          <div key={index} className="kpi-card">
            <p className="kpi-value">{kpi.value}</p>
            <p className="kpi-description">{kpi.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default OpportunitySpace
