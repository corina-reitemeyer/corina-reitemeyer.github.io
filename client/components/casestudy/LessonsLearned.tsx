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
    <section className="lessons-learned-section">
      <h2 className="lessons-learned-title">{title}</h2>
      <ul className="lessons-list">
        {lessons.map((lesson, index) => (
          <li key={index} className="lesson-item">
            {lesson}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default LessonsLearnedSection
