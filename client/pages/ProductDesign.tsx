import ProjectData from '../../src/projectsdata.json'
import Project from '../../models/projectdata'
import ProjectGrid from '../components/ProjectGrid'
import { ROUTES } from '../lib/routes'

export default function ProductDesign() {
  return (
    <ProjectGrid
      heading="Digital Products"
      projects={ProjectData as Project[]}
      linkPrefix={ROUTES.digitalProduct}
    />
  )
}
