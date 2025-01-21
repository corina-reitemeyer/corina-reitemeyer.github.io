import React from 'react'

interface LessonsLearnedSectionProps {
  title: string
  lessons: string[]
}

const LessonsLearnedSection: React.FC<LessonsLearnedSectionProps> = ({
  title,
  lessons,
}) => {
  return (
    <section className="py-24">
      <div className="container mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
        {/* Title Column */}
        <div className="title-column">
          <h2 className="text-left text-3xl font-bold text-gray-900">
            {title}
          </h2>
        </div>

        {/* Lessons Column */}
        <div className="lessons-column">
          <ul className="list-disc space-y-4 pl-6 text-left text-lg text-gray-700">
            {lessons.map((lesson, index) => (
              <li
                key={index}
                className="ml-4" // Adds proper indentation for the lines
                style={{ textIndent: '-0.1em', paddingLeft: '1em' }} // Ensures alignment with the first line
              >
                {lesson}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default LessonsLearnedSection
