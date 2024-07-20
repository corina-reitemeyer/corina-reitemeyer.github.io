import Project from '../../models/projectdata.ts'

interface GridItemProps {
  project: Project
}

const GridItem: React.FC<GridItemProps> = ({ project }) => {
  return (
    <div className="group relative overflow-hidden">
      <img
        src={project.projectImage}
        alt={project.projectTitle}
        className="h-full w-full transform object-cover transition-transform duration-300 group-hover:scale-105 md:group-hover:scale-110"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
        <span className="text-lg font-bold text-white">
          {project.projectTitle}
        </span>
      </div>
    </div>
  )
}

export default GridItem
