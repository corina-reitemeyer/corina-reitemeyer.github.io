import React from 'react'
import '../../styles/Principles.css'

interface PrinciplesSectionProps {
  subtitle: string
  title: string
  description?: string
  principles: { number: number; title: string; content: string }[]
  reversedLayout?: boolean // Add a flag for layout variation
}

const PrinciplesSection: React.FC<PrinciplesSectionProps> = ({
  subtitle,
  title,
  description,
  principles,
  reversedLayout = false,
}) => {
  return (
    <section className="principles-section">
      <div className="text-container">
        <p className="subtitle">{subtitle}</p>
        <h2 className="title">{title}</h2>
        {description && <p className="description">{description}</p>}
      </div>
      <div
        className={`principles-container ${reversedLayout ? 'reversed' : ''}`} // Conditional class for layout
      >
        {principles.map((principle) => (
          <div key={principle.number} className="principle">
            <h3>{principle.number}.</h3>
            <h4>{principle.title}</h4>
            <p>{principle.content}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PrinciplesSection
