import React from 'react'

interface Lesson {
  heading: string
  description: string
}

interface LessonsLearnedSectionProps {
  title: string
  lessons: Lesson[]
}

const LessonsLearnedSection: React.FC<LessonsLearnedSectionProps> = ({
  title,
  lessons,
}) => {
  return (
    <section className="pb-24 pt-24">
      {' '}
      <div className="container mx-auto grid max-w-4xl grid-cols-1 gap-8 px-6 sm:grid-cols-2 sm:px-8">
        {/* Left Column - Title */}
        <div className="title-column">
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        </div>

        {/* Right Column - Lessons List */}
        <div className="lessons-column space-y-8">
          {' '}
          {lessons.map((lesson, index) => (
            <div key={index} className="lesson-item">
              <h3 className="-mb-2 text-lg font-semibold text-gray-900">
                {lesson.heading}
              </h3>
              <p className="text-gray-700">{lesson.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LessonsLearnedSection
