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
      headingClassName="mx-auto mb-16 max-w-6xl px-6 text-3xl font-bold text-white sm:mb-8 sm:text-3xl xl:px-0"
    />
  )
}
