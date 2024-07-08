import { Link } from 'react-router-dom'

interface GridItemProps {
  image: string
  alt?: string
  slug: string // Unique identifier for the case study
  title: string
}

const GridItem: React.FC<GridItemProps> = ({ image, alt, slug, title }) => {
  const url = `/projects/${slug}`

  return (
    <Link to={url} className="group relative block">
      <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
        <img
          src={image}
          alt={alt || 'Portfolio Item'}
          className="scale-100 transform object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="text-lg font-bold text-white">{title}</span>
        </div>
      </div>
    </Link>
  )
}

export default GridItem
