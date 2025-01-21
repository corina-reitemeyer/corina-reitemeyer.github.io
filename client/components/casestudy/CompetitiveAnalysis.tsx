import React from 'react'

interface CompetitiveAnalysisSectionProps {
  subtitle: string
  title: string
  description: string
  image: { src: string; alt: string } // Single image
}

const CompetitiveAnalysisSection: React.FC<CompetitiveAnalysisSectionProps> = ({
  subtitle,
  title,
  description,
  image,
}) => {
  return (
    <section className="bg-[#E6F8FF] py-16">
      <div className="container mx-auto flex  max-w-4xl flex-col justify-between">
        {/* Text Content */}
        <div>
          <p className="text-lg font-semibold text-[#40B0C8]">{subtitle}</p>
          <h2 className="mt-2 text-4xl font-bold text-gray-900">{title}</h2>
          <p className="my-6 text-lg text-gray-700">{description}</p>
        </div>

        {/* Image Content */}
        <div className="flex h-full justify-center pt-10">
          <img
            src={image.src}
            alt={image.alt}
            className="w-auto max-w-full object-contain"
          />
        </div>
      </div>
    </section>
  )
}

export default CompetitiveAnalysisSection
