import React from 'react'
import TabbedImageViewer from './TabbedImageViewer' // Assuming the tabbed viewer is imported here
import '../../styles/DiscoverySection.css'

interface ColumnData {
  title: string
  description: string
}

interface TabbedImage {
  path: string
  tabName: string
  caption?: string
}

interface DiscoverySectionProps {
  subtitle: string
  title: string
  description: string
  variant: 'default' | 'tabbed' | 'threeColumns'
  subtitleColor: 'ritmo' | 'ow' | 'moe' // Use keys to map specific colors
  threeColumnData?: ColumnData[]
  tabbedImages?: TabbedImage[] // Add images for tabbed viewer
  imageSrc?: string
  imageAlt?: string
}

const DiscoverySection: React.FC<DiscoverySectionProps> = ({
  subtitle,
  title,
  description,
  variant,
  subtitleColor,
  threeColumnData,
  tabbedImages,
  imageSrc,
  imageAlt = 'Illustration',
}) => {
  const subtitleColorMap = {
    ritmo: '#40B0C8',
    ow: '#C7A000',
    moe: '#5452F6',
  }

  return (
    <section className=" my-20">
      <div className="container mx-auto max-w-4xl space-y-12">
        {/* Top Section: Text Content */}
        <div>
          <p
            className="text-lg font-semibold"
            style={{ color: subtitleColorMap[subtitleColor] }}
          >
            {subtitle}
          </p>
          <h2 className="mt-2 text-4xl font-bold text-gray-900">{title}</h2>
          <p className="mt-6 text-lg text-gray-700">{description}</p>
        </div>

        {/* Visual Section */}
        {variant === 'default' && (
          <img
            src={imageSrc}
            alt={imageAlt}
            className="mx-auto w-full max-w-4xl rounded-lg"
          />
        )}
        {variant === 'tabbed' && tabbedImages && (
          <div className="mx-auto w-full max-w-4xl">
            <TabbedImageViewer images={tabbedImages} />
          </div>
        )}

        {/* Additional Visuals for Three Columns */}
        {variant === 'threeColumns' && threeColumnData && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {threeColumnData.map((column, index) => (
              <div key={index} className="rounded-lg bg-gray-100 p-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {column.title}
                </h3>
                <p className="mt-2 text-gray-700">{column.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default DiscoverySection
