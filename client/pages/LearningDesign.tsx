import LXDData from '../../src/lxddata.json'
import Project from '../../models/projectdata'
import ProjectGrid from '../components/ProjectGrid'
import { ROUTES } from '../lib/routes'

export default function LearningDesign() {
  return (
    <ProjectGrid
      heading="Learning Experiences"
      projects={LXDData as Project[]}
      linkPrefix={ROUTES.learningExperience}
    />
  )
}
