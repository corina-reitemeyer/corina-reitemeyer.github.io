import GridItem from '../components/GridItem.tsx'

export default Projects() {
  const mockImages = [
    'https://via.placeholder.com/300x200',
    'https://via.placeholder.com/300x200',
    'https://via.placeholder.com/300x200',
    'https://via.placeholder.com/300x200',
    'https://via.placeholder.com/300x200',
    'https://via.placeholder.com/300x200',
    'https://via.placeholder.com/300x200',
    'https://via.placeholder.com/300x200',
    'https://via.placeholder.com/300x200',
  ];

  return (
    <>
    <div>
    {images.map((image, index) => (
      <GridItem key={index} image={image} />
    ))}
    </div>
    </>
  )
}