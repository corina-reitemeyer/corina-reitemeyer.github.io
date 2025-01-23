import React from 'react'

interface SimpleTextSectionProps {
  text: string
  backgroundColor?: string
}

const SimpleTextSection: React.FC<SimpleTextSectionProps> = ({
  text,
  backgroundColor = '#E3F3FF', // Default light blue
}) => {
  return (
    <section
      className="flex items-center justify-center py-24"
      style={{ backgroundColor }}
    >
      <div className="container mx-auto max-w-4xl">
        <p className="text-center text-lg leading-relaxed text-gray-900">
          {text}
        </p>
      </div>
    </section>
  )
}

export default SimpleTextSection
