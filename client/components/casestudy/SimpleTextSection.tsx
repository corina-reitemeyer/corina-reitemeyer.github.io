import React from 'react'

interface SimpleTextSectionProps {
  title?: string
  text: string
  backgroundColor?: string
}

const SimpleTextSection: React.FC<SimpleTextSectionProps> = ({
  title = 'Background', // Default title
  text,
  backgroundColor = '#E3F6F5', // Default light blue
}) => {
  return (
    <section
      className="flex flex-col items-center justify-center py-24"
      style={{ backgroundColor }}
    >
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="mb-4 text-4xl font-bold text-gray-900">{title}</h2>
        <p className="text-lg leading-relaxed text-gray-900">{text}</p>
      </div>
    </section>
  )
}

export default SimpleTextSection
