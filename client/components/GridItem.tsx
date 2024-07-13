import Project from '../../models/projectdata.ts'

interface GridItemProps {
  project: Project
}

const GridItem: React.FC<GridItemProps> = ({ project }) => {
  return (
    <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
      <img
        src={project.headerImage}
        alt={project.projectTitle}
        className="scale-100 transform object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="text-lg font-bold text-white">
          {project.projectTitle}
        </span>
      </div>
    </div>
  )
}

export default GridItem