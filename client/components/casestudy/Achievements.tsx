import React from 'react'

interface Achievement {
  title: string
  description: string
}

interface AchievementsSectionProps {
  title: string
  achievements: Achievement[]
}

const AchievementsSection: React.FC<AchievementsSectionProps> = ({
  title,
  achievements,
}) => {
  return (
    <section className="achievements-section">
      <h2 className="achievements-title">{title}</h2>
      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-item">
            <h3 className="achievement-title">{achievement.title}</h3>
            <p className="achievement-description">{achievement.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AchievementsSection
