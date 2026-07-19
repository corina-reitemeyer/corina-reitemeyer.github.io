import ProjectData from '../../src/projectsdata.json'
import Project from '../../models/projectdata'
import ImpactStatement from '../components/ImpactStatement'
import LiquidBanner from '../components/LiquidBanner'
import ProjectGrid from '../components/ProjectGrid'
import { ROUTES } from '../lib/routes'

export default function Landing() {
  return (
    <>
      <ImpactStatement />

      <LiquidBanner />

      <ProjectGrid
        heading="Selected works"
        projects={ProjectData as Project[]}
        linkPrefix={ROUTES.digitalProduct}
      />
    </>
  )
}
