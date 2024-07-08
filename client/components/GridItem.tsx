interface GridItemProps {
  image: string
  alt?: string
}

const GridItem: React.FC<GridItemProps> = ({ image, alt }) => {
  return (
    <>
      <div className="aspect-w-16 aspect-h-9 flex items-center justify-center">
        <img src={image} alt={alt || 'Portfolio Item'} />
      </div>
    </>
  )
}

export default GridItem
