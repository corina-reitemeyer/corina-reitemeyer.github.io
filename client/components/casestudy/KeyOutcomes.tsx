import React from 'react'
import { useInView } from 'react-intersection-observer'

interface KeyOutcomesProps {
  title?: string
  outcomes: { icon: string; title: string; description: string }[]
}

const KeyOutcomes: React.FC<KeyOutcomesProps> = ({
  title = 'Key Outcomes',
  outcomes,
}) => {
  const { ref: sectionRef, inView } = useInView({ triggerOnce: true })

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center bg-[#E3F6F5] px-6 py-24"
    >
      {/* Section Title */}
      <h2 className="mb-12 text-center text-4xl font-bold text-gray-900">
        {title}
      </h2>

      <div className="mx-auto grid max-w-6xl grid-cols-1 justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {outcomes.map((outcome, index) => (
          <div
            key={index}
            className={`flex transform flex-col items-center rounded-lg bg-white px-14 py-14 text-center transition-all duration-700 ease-in-out ${
              inView ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
            }`}
          >
            <span className="text-3xl">{outcome.icon}</span>
            <h3 className="mt-3 text-lg font-semibold">{outcome.title}</h3>
            <p className="mt-2 text-gray-600">{outcome.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default KeyOutcomes
