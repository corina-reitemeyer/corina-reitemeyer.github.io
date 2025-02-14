import React from 'react'

interface CompetitiveAnalysisSectionProps {
  subtitle: string
  title: string
  description: string
  bulletPoints?: string[] // Optional bullet list
  image: { src: string; alt: string } // Single image
  subtitleColor: 'ritmo' | 'ow' | 'moe' // Dynamic subtitle color options
}

const CompetitiveAnalysisSection: React.FC<CompetitiveAnalysisSectionProps> = ({
  subtitle,
  title,
  description,
  bulletPoints, // Accepting optional bullet points
  image,
  subtitleColor,
}) => {
  const subtitleColorMap = {
    ritmo: '#40B0C8',
    ow: '#C7A000',
    moe: '#5452F6',
  }

  return (
    <section className="relative bg-[#E3F6F5] py-16">
      <div className="relative mx-auto flex max-w-4xl flex-col px-6 sm:px-8 md:flex-row">
        {/* Text Content - Left Column on Desktop, Stacked on Mobile */}
        <div className="relative z-10 w-full md:w-1/2">
          <p
            className="text-lg"
            style={{ color: subtitleColorMap[subtitleColor] }}
          >
            {subtitle}
          </p>
          <h2 className="mt-2 text-4xl font-bold text-gray-900">{title}</h2>
          <p className="my-6 text-lg text-gray-700">{description}</p>

          {/* Render bullet list if it exists */}
          {bulletPoints && bulletPoints.length > 0 && (
            <ul className="mb-6 list-disc pl-6 text-lg text-gray-700">
              {bulletPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          )}
        </div>

        {/* Positioned Image - Moves Below on Mobile, Further Right on Desktop */}
        <div className="relative mt-8 flex w-full justify-center md:mt-0 md:w-1/2 md:justify-end">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full max-w-[450px] object-contain sm:max-w-[500px] md:absolute md:right-[-10%] md:top-1/2 md:max-w-[700px] md:-translate-y-1/2 md:transform lg:max-w-[800px] xl:max-w-[900px]"
          />
        </div>
      </div>
    </section>
  )
}

export default CompetitiveAnalysisSection
