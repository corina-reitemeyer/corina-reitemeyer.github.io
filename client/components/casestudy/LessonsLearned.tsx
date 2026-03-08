import { useId } from 'react'

type Lesson = {
  id: string
  heading: string
  description: string
}

interface LessonsLearnedSectionProps {
  title: string
  lessons: Lesson[]
}

export default function LessonsLearnedSection({
  title,
  lessons,
}: LessonsLearnedSectionProps) {
  const headingId = useId()

  if (lessons.length === 0) return null

  return (
    <section aria-labelledby={headingId} className="bg-[#08082a] py-24">
      <div className="container mx-auto grid max-w-4xl grid-cols-1 gap-8 px-6 sm:grid-cols-2 sm:px-8">
        <div>
          <h2 id={headingId} className="text-3xl font-bold text-white">
            {title}
          </h2>
        </div>

        {/* eslint-disable-next-line jsx-a11y/no-redundant-roles -- restores list semantics removed by Tailwind preflight in VoiceOver/Safari */}
        <ul role="list" className="space-y-8">
          {lessons.map((lesson) => (
            <li key={lesson.id}>
              <h3 className="text-lg font-semibold text-white">
                {lesson.heading}
              </h3>
              <p className="mt-2 text-slate-300">{lesson.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
