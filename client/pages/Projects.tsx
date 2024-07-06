import GridItem from '../components/GridItem'

interface ProjectsProps {
  images: string
}

const Projects: React.FC<ProjectsProps> = () => {
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
  ]

  return (
    <>
      <div>
        {mockImages.map((image, index) => (
          <GridItem key={index} image={image} />
        ))}
      </div>
    </>
  )
}

export default Projects
