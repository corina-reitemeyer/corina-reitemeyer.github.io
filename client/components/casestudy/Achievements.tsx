import { useId } from 'react'
import Paragraphs from './Paragraphs'

type Achievement = {
  id: string
  title: string
  description: string | string[]
}

interface AchievementsSectionProps {
  title?: string
  intro?: string
  achievements: Achievement[]
  variant?: 'list' | 'cards'
  className?: string
}

export default function AchievementsSection({
  title,
  intro,
  achievements,
  variant = 'list',
  className = '',
}: AchievementsSectionProps) {
  const headingId = useId()

  if (achievements.length === 0) return null

  return (
    <section
      aria-label={title || undefined}
      aria-labelledby={title ? headingId : undefined}
      className={`bg-[#08082a] py-16 sm:py-24 ${className}`}
    >
      <div className="container mx-auto max-w-6xl px-6 sm:px-8">
        {title && (
          <h2
            id={headingId}
            className={`text-4xl font-bold text-white ${intro ? 'mb-4' : 'mb-8'}`}
          >
            {title}
          </h2>
        )}

        {intro && (
          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-slate-300 antialiased">
            {intro}
          </p>
        )}

        {/* role="list" restores list semantics removed by Tailwind preflight in VoiceOver/Safari */}
        {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
        <ul
          role="list"
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-16"
        >
          {achievements.map((achievement) => (
            <li
              key={achievement.id}
              className={
                variant === 'cards'
                  ? 'rounded-xl border border-white/10 bg-white/[0.04] p-6 sm:p-8'
                  : 'border-l-2 border-white/20 pl-5'
              }
            >
              <h3 className="text-lg font-semibold text-white">
                {achievement.title}
              </h3>
              <div className="mt-2 max-w-prose space-y-2 text-slate-300">
                <Paragraphs>{achievement.description}</Paragraphs>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
