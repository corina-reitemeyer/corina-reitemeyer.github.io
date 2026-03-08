import { useId } from 'react'

type Achievement = {
  id: string
  title: string
  description: string
}

interface AchievementsSectionProps {
  title: string
  achievements: Achievement[]
  className?: string
}

export default function AchievementsSection({
  title,
  achievements,
  className = '',
}: AchievementsSectionProps) {
  const headingId = useId()

  if (achievements.length === 0) return null

  return (
    <section
      aria-labelledby={headingId}
      className={`bg-[#08082a] py-32 sm:py-40 ${className}`}
    >
      <div className="container mx-auto max-w-6xl px-6 sm:px-8">
        <h2 id={headingId} className="mb-8 text-4xl font-bold text-white">
          {title}
        </h2>

        {/* role="list" restores list semantics removed by Tailwind preflight in VoiceOver/Safari */}
        {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
        <ul
          role="list"
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-16"
        >
          {achievements.map((achievement) => (
            <li
              key={achievement.id}
              className="border-l-2 border-white/20 pl-5"
            >
              <h3 className="text-lg font-semibold text-white">
                {achievement.title}
              </h3>
              <p className="mt-2 max-w-prose text-slate-300">
                {achievement.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
