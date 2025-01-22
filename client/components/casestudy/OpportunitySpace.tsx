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
  subtitleColor: 'ritmo' | 'ow' | 'moe' // Dynamic subtitle color options
}

const OpportunitySpace: React.FC<OpportunitySpaceProps> = ({
  subtitle,
  title,
  description,
  kpis,
  subtitleColor,
}) => {
  const subtitleColorMap = {
    ritmo: '#40B0C8',
    ow: '#C7A000',
    moe: '#5452F6',
  }

  return (
    <>
      <section className="relative bg-[#E6F8FF] py-24">
        <div className="container mx-auto max-w-4xl text-left">
          {/* Header Section */}
          <p
            className="text-lg font-semibold"
            style={{ color: subtitleColorMap[subtitleColor] }}
          >
            {subtitle}
          </p>
          <h2 className="mt-2 text-4xl font-bold text-gray-900">{title}</h2>
          <p className="mt-4 text-lg text-gray-700">{description}</p>
        </div>

        {/* KPI Cards */}
        <div className="relative mx-auto mt-16 flex max-w-4xl justify-center">
          <div className="-bottom-26 absolute mb-32 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {kpis.map((kpi, index) => (
              <div
                key={index}
                className="rounded-lg bg-white p-6 text-center shadow-md"
              >
                <p className="text-4xl font-bold text-gray-900">{kpi.value}</p>
                <p className="mt-2 text-gray-700">{kpi.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Ensure extra spacing to the next section */}
      <div className="mt-28"></div>
    </>
  )
}

export default OpportunitySpace
