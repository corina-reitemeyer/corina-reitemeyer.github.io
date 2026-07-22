import ProjectData from '../../data/projectsdata.json'
import Project from '../../data/projectdata'
import ImpactStatement from './ImpactStatement'
import LiquidBanner from './LiquidBanner'
import Services from './Services'
import SkillSets from './SkillSets'
import WorkIndex from './WorkIndex'
import { ROUTES } from '../../lib/routes'

export default function Landing() {
  return (
    <>
      <ImpactStatement />

      <WorkIndex
        projects={ProjectData as Project[]}
        linkPrefix={ROUTES.digitalProduct}
      />

      <Services />

      <LiquidBanner />

      <SkillSets />
    </>
  )
}
