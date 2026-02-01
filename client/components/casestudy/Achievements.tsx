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
    <section className="bg-[#08082a] py-32 sm:pb-40 sm:pt-40">
      <div className="container mx-auto max-w-6xl px-6 sm:px-8">
        {/* Title */}
        <h2 className="mb-8 text-4xl font-bold text-white">{title}</h2>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-item">
              <h3 className="text-lg font-semibold text-white">
                {achievement.title}
              </h3>
              <p className="mt-2 text-white/70">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AchievementsSection
