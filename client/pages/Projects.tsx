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
      src: '/images/portfolio/grow-grub.png',
      alt: 'Description of image 1',
      slug: 'grow-grub',
      title: 'Dev Academy - Grow Grub',
    },
    {
      src: 'public/images/portfolio/trolltollcalculator.png',
      alt: 'Description of image 2',
      slug: 'troll-toll-calculator',
      title: 'Dev Academy - Troll Toll Calculator',
    },
    {
      src: '/images/portfolio/ow-templates.png',
      alt: 'Description of image 2',
      slug: 'ow-templates',
      title: 'Optimal Workshop - Templates',
    },
    {
      src: '/images/portfolio/NCEA - HERO.png',
      alt: 'Description of image 2',
      slug: 'moe-ncea',
      title: 'Ministry of Education - NCEA Website',
    },
    {
      src: '/images/portfolio/MoE - Design System - Hero.png',
      alt: 'Description of image 2',
      slug: 'moe-design-system',
      title: 'Ministry of Education - Design System',
    },
    {
      src: '/images/portfolio/Infinite_badge.png',
      alt: 'Description of image 2',
      slug: 'massey-infinite',
      title: 'Massey University - Infinite (Honours Project)',
    },
  ]
  return (
    <>
      <div className="mx-auto px-8 py-10">
        <div className="grid grid-cols-1 justify-items-center gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-3">
          {mockImages.map((image, index) => (
            <div key={index} className="flex items-center justify-center">
              <GridItem
                image={image.src}
                alt={image.alt}
                slug={image.slug}
                title={image.title}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Projects
