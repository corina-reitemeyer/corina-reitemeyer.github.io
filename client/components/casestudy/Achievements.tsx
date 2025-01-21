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
    <section className="py-16">
      <div className="container mx-auto max-w-4xl">
        {/* Title */}
        <h2 className="mb-8 text-4xl font-bold text-gray-900">{title}</h2>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-item">
              <h3 className="text-lg font-semibold text-gray-900">
                {achievement.title}
              </h3>
              <p className="mt-2 text-gray-700">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AchievementsSection
