interface GridItemProps {
  image: string
  alt?: string
}

const GridItem: React.FC<GridItemProps> = ({ image, alt }) => {
  return (
    <>
      <img src={image} alt={alt || 'Portfolio Item'} />
    </>
  )
}

export default GridItem
