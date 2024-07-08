import GridItem from '../components/GridItem'

interface ProjectsProps {
  images: string
}

const Projects: React.FC<ProjectsProps> = () => {
  // const mockImages = [
  //   'https://via.placeholder.com/1300x750',
  //   'https://via.placeholder.com/1300x750',
  //   'https://via.placeholder.com/1300x750',
  //   'https://via.placeholder.com/1300x750',
  //   'https://via.placeholder.com/1300x750',
  //   'https://via.placeholder.com/1300x750',
  // ]

  const mockImages = [
    {
      src: 'https://via.placeholder.com/1300x750',
      alt: 'Description of image 1',
      slug: 'case-study-1',
    },
    {
      src: 'https://via.placeholder.com/1300x750',
      alt: 'Description of image 2',
      slug: 'case-study-2',
    },
  ]
  return (
    <>
      <div className="mx-auto px-8 py-10">
        <div className="grid grid-cols-1 justify-items-center gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-3">
          {mockImages.map((image, index) => (
            <div key={index} className="flex items-center justify-center">
              <GridItem image={image.src} alt={image.alt} url={image.url} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Projects
