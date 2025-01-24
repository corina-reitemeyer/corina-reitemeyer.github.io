import React from 'react'
import TabbedImageViewer from './TabbedImageViewer'

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

  // Default side image within the component
  const defaultSideImage = '/images/Yuppies Sitting.png'
  const defaultSideImageAlt = 'Woman sitting with magnifying glass'

  return (
    <section className="my-36">
      <div className="container mx-auto max-w-4xl space-y-12">
        {/* Top Section: Text Content and Side Image */}
        <div className="grid grid-cols-1 items-center gap-24 lg:grid-cols-2">
          {/* Text Content */}
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

          {/* Side Image */}
          <div className="flex justify-center">
            <img
              src={defaultSideImage} // Default image set here
              alt={defaultSideImageAlt}
              className="w-full max-w-md rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Visual Section */}
        {variant === 'default' && imageSrc && (
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

        {/* Three-Column Section */}
        {variant === 'threeColumns' &&
          threeColumnData &&
          threeColumnData.length > 0 && (
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
              {threeColumnData.map((column, index) => (
                <div key={index} className="rounded-lg py-8">
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
