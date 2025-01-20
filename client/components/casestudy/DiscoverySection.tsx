import React from 'react'
import TabbedImageViewer from './TabbedImageViewer'
import '../../styles/DiscoverySection.css'

interface ColumnData {
  title: string
  description: string
}

interface DiscoverySectionProps {
  subtitle: string
  title: string
  description: string
  showTabbedImageViewer?: boolean
  tabbedImageViewerData?: { image: string; caption: string }[]
  threeColumnData?: ColumnData[]
  imageSrc?: string
  imageAlt?: string
}

const DiscoverySection: React.FC<DiscoverySectionProps> = ({
  subtitle,
  title,
  description,
  showTabbedImageViewer = false,
  tabbedImageViewerData,
  threeColumnData,
  imageSrc,
  imageAlt = 'Illustration',
}) => {
  return (
    <section className="discovery-section">
      <div className="discovery-container">
        <div className="discovery-text">
          <p className="discovery-subtitle">{subtitle}</p>
          <h2 className="discovery-title">{title}</h2>
          <p className="discovery-description">{description}</p>
        </div>
        <div className="discovery-visual">
          {showTabbedImageViewer && tabbedImageViewerData ? (
            <TabbedImageViewer data={tabbedImageViewerData} />
          ) : (
            <img src={imageSrc} alt={imageAlt} className="discovery-image" />
          )}
        </div>
      </div>
      {!showTabbedImageViewer && threeColumnData && (
        <div className="discovery-three-columns">
          {threeColumnData.map((column, index) => (
            <div key={index} className="column">
              <h3>{column.title}</h3>
              <p>{column.description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default DiscoverySection
