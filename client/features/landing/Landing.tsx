import ProjectData from '../../data/projects.json'
import Project from '../../data/projects.types'
import ImpactStatement from './components/ImpactStatement'
import LiquidBanner from './components/LiquidBanner'
import Services from './components/Services'
import SkillSets from './components/SkillSets'
import WorkIndex from './components/WorkIndex'
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
